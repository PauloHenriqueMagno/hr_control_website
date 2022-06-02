import { createContext, useContext, useState } from "react";
import api from "../../services/api";


export const AccountContext = createContext();

export const AccountProvider = ({children}) => {
    const [auth, setAuth] = useState(localStorage.getItem("@token") || "");

    const login = ({email, password}) => {
        api
        .post("/login/", {email, password})
        .then(({data}) => {
            setAuth(data.accessToken);
            localStorage.setItem("@token", data.accessToken);
            console.log(data)
        })
        .catch((err) => console.error("Errou", err));
    }
    return (
        <AccountContext.Provider value={{login, auth}}>
            {children}
        </AccountContext.Provider>
    )
}

export const useAccount = () => useContext(AccountContext)
