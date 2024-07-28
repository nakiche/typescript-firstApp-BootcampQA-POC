import {combineReducers} from 'redux';
import {usersReducer} from './users';
import {User} from '../actions';

export interface StoreState {
  users: User[];
 }

// export const reducers = combineReducers({
//  //counter: () => 1,
//  users: usersReducer,
// });
export const reducers = combineReducers<StoreState>(
 {
  users: usersReducer,
 });
// interface stateI {
//   counter: number;
// }

// const initialState = {
//   counter: 1,
// };

// interface actionI {
//   type: string;
// }
// export default function reducer(state: stateI = initialState, action: actionI) {
//   return state;
// }

// // import {User, FetchUsersAction} from './actions';
// // import {ActionTypes} from './types';

// // export const usersReducer = (state: User[] = [], action: FetchUsersAction) => {
// //  switch (action.type) {
// //   case ActionTypes.fetchUsers:
// //    return action.payload;
// //   default:
// //    return state;
// //  }
// // };

