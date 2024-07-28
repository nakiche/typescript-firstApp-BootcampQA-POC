import { User, FetchUsersAction, DeleteUsersAction, PostUsersAction } from "../actions";
import { ActionTypes, Action } from "../actions/types";

const sortDesc = (key: any) => (a:any, b:any) => a[key] < b[key] ? 1 : -1;


export const usersReducer = (
  state: User[] = [],
  action: FetchUsersAction | DeleteUsersAction | PostUsersAction

) => {
  switch (action.type) {
    case ActionTypes.fetchUsers:
      return action.payload.slice().sort(sortDesc("id"));
    case ActionTypes.deleteUsers:
      return action.payload;
      case ActionTypes.postUsers:
        return action.payload;
    default:
      return state;
  }
};
