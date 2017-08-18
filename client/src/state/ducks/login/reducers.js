import types from './types';
import initialState from '../../initialState';

const login = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOGIN:
			return Object.assign({}, state, {
				login: {
					isFetching: true,
					fields: {
						email: action.fields.email,
						password: action.fields.password
					}
				}
			});
    case types.RECEIVE_LOGIN:
      return Object.assign({}, state, {
          user: action.data
        }
      });
      case types.HANDLE_LOGIN_CHANGE:
  			return Object.assign({}, state, {
  				login: {
  					isFetching: false,
  					fields: {
  						email: action.fields.email,
  						password: action.fields.password
  					}
  				}
  			});
    default:
      return state;
  }
};

export default login;
