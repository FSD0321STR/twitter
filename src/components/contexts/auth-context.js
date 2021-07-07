import { createContext } from "react";

export const AuthContext = createContext({
    logged: false,
    register: () => { },
    editProfile: () => { },
    login: () => { },
    logout: () => { },
});
