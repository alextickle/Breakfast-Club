import types from './types';

const count = (count = 0, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return (count += 1);
    default:
      return count;
  }
};

export default count;
