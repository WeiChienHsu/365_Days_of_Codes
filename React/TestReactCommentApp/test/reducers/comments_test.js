// Reducers
// - Test the Default case of Reducers(initize state)
// - Test each possible that reducers care about
//////////////

import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
      expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handle action of type SAVE_COMMENT', () => {
      const action = { type: SAVE_COMMENT, payload: 'new comment' };  
      expect(commentReducer([], action)).to.eql(['new comment']);
      expect(commentReducer([], action)).to.be.instanceof(Array);
  });
})