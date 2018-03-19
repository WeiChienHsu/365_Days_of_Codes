# Test React App (Moca)

## Describe / It / Expect
- Use "describe" to group together similar tests
- Use "it" to test a single attribute of a target (Is that show the text)
- Use "expect" to make an 
 about a target (I might assume the target is right)

```js
describe('Test App Component', () => {
 
    it("Show the correct Text", () => {

        expect()
		});
```

### Expect
- expect - (The thing we want to make an assertion about).
- Assertion matcher - how to compare the two given value 
- (The value we expect)

```js
expect(component).to.have.class('comment-box')
```
- Create a instacne of Component
```js
 const component = renderComponent(App);
```

## Testing Error 
Make a new file in your projects root folder called .babelrc and add the following to it:
```
{
 "presets": ["react", "es2015", "stage-1"]
}
```

# Chai jQuery
[documentation](https://github.com/chaijs/chai-jquery)

### exist
Assert that the selection is not empty. Note that this overrides the built-in chai assertion. If the object asserted against is not a jQuery object, the original implementation will be called.

```js
$('#exists').should.exist;
expect($('#nonexistent')).not.to.exist;
```


# beforeEach()
- Set up to the component, run before any of each statements
- We need to declare component as a constructor using let
```js
let component;

beforeEach(() => {
    component = renderComponent(CommentBox);
})
```

## Test for the Render Component
- In App Component to test if there is Comment Component class
```js
    it('has CommentBox component',() => {
        expect(component.find('.comment-box')).to.exist;
    });
```

## Test the textarea
- Nest the "it" for the relative situation

```js
describe('entering some text', () => {

    it('shows that text in the textarea', () => {

    });

    it('when submitted, clear the input', () => {

    });
```

## Stimulation
- Stimulate Situation
```js
beforeEach(() => {
    component.find('textarea').simulate('change','new comment');
});
```
- Stimulate Behaviors (Submit Event)
- Replace the div to form
```js

```

## Send a props to test
```js
describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New Comment', 'Other New Comment'] };
    component = renderComponent(CommentList, null, props);
  });
```

## Error need to be figured out
```js
const list = props.comments.map(comment =>  <li key = {comment}>{comment}</li> );
```


## Test Action Creator
- correct Type
- correct payload

```js
describe('actions', () => {
  describe('saveComment', () => {
      it('has the correct type',() => {
          const action = saveComment();
          expect(action.type).to.equal(SAVE_COMMENT);
      });

      it('has the correct payload', () => {
          const action = saveComment('new comment');
          expect(action.payload).to.equal('new comment');
      });
  });
});
```

## Solve the problem for unknow props or type
```
 1) Comments Reducer handles action with unknown type:
     TypeError: Cannot read property 'type' of undefined
```
- Since we didn't pass any argument into funcion when testing
```js
expect(commentReducer()).to.be.instanceof(Array);
```
- Comment Reducer need the arguments of state and action Object

```js
export default function(state = [], action) {
  switch(action.type){
    case SAVE_COMMENT:
      return [...state, action.payload]; // state.concat([action.payload])
  }
```
- pass an explicitly undefined and an empty object  
```js
describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
      expect(commentReducer(undefined, {})).to.eql([]);
  });
```

## Combine CommentReducer with RootReducer
```js
import { combineReducers } from 'redux';
import commentsReducer from './comments'

const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;

```