import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "http://localhost:3001/user";

export interface User {
  //definiendo la estructura que debería tener la respuesta al GET
  id: number;
  name: string;
  lastName: string;
}

export interface UserToAdd {
  //definiendo la estructura que debería tener el envio al POST
  name: string;
  lastName: string;
}


export interface FetchUsersAction {
  //asegurar que en el dispatch estemos pasando un objeto con la estructura correcta.
  type: ActionTypes.fetchUsers;
  payload: User[];
}

export interface DeleteUsersAction {
  //asegurar que en el dispatch estemos pasando un objeto con la estructura correcta.
  type: ActionTypes.deleteUsers;
  payload: User[];
}

export interface PostUsersAction {
  //asegurar que en el dispatch estemos pasando un objeto con la estructura correcta.
  type: ActionTypes.postUsers;
  payload: User[];
}


export const fetchUsers = () => {
  console.log("entro a fetch");
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(url);
    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data,
    });
  };
};

export const deleteUsers = (id: number) => {
  console.log("entro a delete");
  return async (dispatch: Dispatch) => {
    const response = await axios.delete(`${url}${id}`);
    dispatch<DeleteUsersAction>({
      type: ActionTypes.deleteUsers,
      payload: response.data,
    });
  };
};

export const postUsers = (user: UserToAdd) => {
  console.log("entro a postUser", user);

  return async (dispatch: Dispatch) => {
    const response = await axios.post(`http://localhost:3001/user/`,user);
    dispatch<PostUsersAction>({
      type: ActionTypes.postUsers,
      payload: response.data,
    });
  };
};
