import React, { useRef, useState, useEffect } from "react";
import logo from "../logo.png";
import "./App.css";
import { connect } from "react-redux";
import { User, fetchUsers, deleteUsers, postUsers } from "../redux/actions";
import { StoreState } from "../redux/reducer";
import axios from "axios";
import Validate from "./validate";

interface AppProps {
  users: User[];
  fetchUsers(): any;
  deleteUsers(id: number): any;
  postUsers(user: any): any;
}

interface data {
  name: string;
  lastName: string;
}

function App(props: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [click, setClick] = useState(false);
  const [addUser, setAddUser] = useState(false);

  const [errors, setErrors] = React.useState({
    name: "",
    lastName: "",
  });

  const [data, setData] = React.useState({
    name: "",
    lastName: "",
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleInputChange = (evento: any) => {
    setData({
      ...data,
      [evento.target.name]: evento.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });

    setErrors(
      Validate({
        ...data,
        [evento.target.name]: evento.target.value,
      })
    );
  };

  const handleFetch = async () => {
    try {
      await props.fetchUsers();
      setIsLoading(true);
      setClick(true);  
    } catch (e) {
      window.alert(e);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      let response: any = await axios.delete(
        `http://localhost:3001/user/${id}`
      );
      console.log(response.data);
      await props.fetchUsers();
      setIsLoading(false)
    } catch (e) {
      window.alert(e);
    }
  };

  let handleSubmit = async (data: data) => {
    try {
      let response = await props.postUsers(data);
      console.log(response);
      setIsLoading(true);
      setClick(true);
      await props.fetchUsers();
      setAddUser(false);
    } catch (e) {
      window.alert(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Henry Typescript Workshop</h3>

        {!addUser ? (
          <button
            className="button addUser-btn"
            onClick={(e) => {
              e.preventDefault();
              //props.fetchUsers();
              setAddUser(true);
            }}
          >
            ADD USERS!
          </button>
        ) : (
          <div className="div-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(data);
                setData({
                  name: "",
                  lastName: "",
                });
                handleReset();
              }}
              id="form-data"
              ref={formRef}
            >
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  placeholder="Enter the name..."
                />
                <p style={{ fontSize: "15px", color: "red" }}>{errors.name}</p>
              </label>
              <label>
                Lastname:
                <input
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                  placeholder="Enter the lastname..."
                />
                <p style={{ fontSize: "15px", color: "red" }}>
                  {errors.lastName}
                </p>
              </label>
              <button
                className="button save-btn"
                type="submit"
                disabled={
                  data.name && data.lastName && !errors.name && !errors.lastName
                    ? false
                    : true
                }
              >
                SAVE!
              </button>
            </form>
          </div>
        )}

        {!click ? (
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              handleFetch()
              
            }}
          >
            FETCH USERS!
          </button>
        ) : (
          <div className="nocenter">
            {props.users.length > 0
              ? props.users.map((user: User, b: number) => {
                  return (
                    <div className="listed" key={b}>
                      <div className="cards">
                        {/* {user.id} {user.name} {user.lastName} */}
                        {user.name} {user.lastName}
                      </div>
                      <div>
                        <button
                          className="delete-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(user.id);
                          }}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  );
                })
              : isLoading && <div>loading...</div>}
          </div>
        )}

        {click && (
          <button
            className="button collapse-btn"
            onClick={(e) => {
              e.preventDefault();

              setClick(false);
            }}
          >
            COLAPSE USERS!
          </button>
        )}
      </header>
    </div>
  );
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers, deleteUsers, postUsers })(
  App
);
