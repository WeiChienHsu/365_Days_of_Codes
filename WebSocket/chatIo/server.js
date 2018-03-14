const MongoClient = require('mongodb').MongoClient;

const io = require('socket.io').listen(4000).sockets;

// Use connect method to connect to the server
MongoClient.connect('mongodb://127.0.0.1/mongochat', function(err, database){
    if(err){
      throw err;
    }
    
    console.log("MongoDB is connected!!")

    const myAwesomeDB = database.db('mongochat')

     io.on('connection', (socket) =>{

       let chat = myAwesomeDB.collection('chats');

       // Create Function to send status to client
       // server -> Html (use socket.emit)
       sendStatus = (s) => {
         socket.emit('status', s);
       }

       // Get chats from mongo collection
       // chat is a mongo collection
       chat.find().limit(100).sort({_id:1}).toArray((err, res) => {
          if(err){
            throw err;
          }

          // Emit the messages to client
          socket.emit('output', res);
       });

       //-- Client to Server : socket.on

       // Handle input events (on-> Catch things from client)
       socket.on('input', (data) => {
         let name = data.name;
         let message = data.message;
         
         // Check for name and message

          if(name == '' || message == '') {
            sendStatus("Please enter da name and message")
          } else {
            
            chat.count((err, nbDocs) => {
              if(nbDocs > 7) {
                chat.remove({}, () => {
                  io.emit('cleared');
                });
              }
            })
            
            // Insert message into MongoDB
            chat.insert({name: name, message: message}, () =>{
              io.emit('output', [data]); // io : talk to group of sockets.
              sendStatus({
                message: 'Message sent',
                clear: true
              });
            });
          }
       }); // socket.on

       // Handle clear from Client
       socket.on('clear', (data) => {
          // Remove all chats from collection
          chat.remove({}, () => {
            // Emit to Client that everything is cleared
            io.emit('cleared');
          });
       });
     });
  });