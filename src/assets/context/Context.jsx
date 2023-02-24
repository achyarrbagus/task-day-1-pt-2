import { createContext, useContext, useState } from "react";

export const ContextGlobal = createContext();

export const ContextProvider = (props) => {
  const [state, setState] = useState(1);
  const [userState, setUserState] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const [userData, setUserData] = useState([
    {
      id: 1,
      email: "tahubulat@gmail.com",
      role: "admin",
      password: "12",
    },
    {
      id: 2,
      email: "tahukotak@gmail.com",
      password: "123",
    },
    {
      id: 3,
      email: "tahubsegitiga@gmail.com",
      role: "admin",
      password: "1",
    },
    {
      id: 3,
      email: "tahubseg@gmail.com",
      password: "123",
    },
  ]);

  let kumpulanState = { state, setState, userState, setUserState, userData, setUserData };

  return <ContextGlobal.Provider value={{ kumpulanState }}>{props.children}</ContextGlobal.Provider>;
};
