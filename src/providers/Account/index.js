import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";


export const AccountContext = createContext();

export const AccountProvider = ({children}) => {
    const [auth, setAuth] = useState(localStorage.getItem("@token") || "");

    const login = ({email, password}) => {
        api
        .post("/login/", {email, password})
        .then(({data}) => {
            setAuth(data.token)
            localStorage.setItem("@token", data.token)
            toast.success("Logado com sucesso")
        })
        .catch((err) => {
            toast.info("E-mail/senha incorretos")
            console.error("Errou", err)}
        );
    }
    return (
        <AccountContext.Provider value={{login, auth, setAuth}}>
            {children}
        </AccountContext.Provider>
    )
}

export const useAccount = () => useContext(AccountContext)
