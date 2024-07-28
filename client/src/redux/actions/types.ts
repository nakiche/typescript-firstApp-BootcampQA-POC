import { DeleteUsersAction, FetchUsersAction ,PostUsersAction  } from ".";

export enum ActionTypes {
    fetchUsers,
    deleteUsers,
    postUsers
  }

export type Action = FetchUsersAction | DeleteUsersAction | PostUsersAction