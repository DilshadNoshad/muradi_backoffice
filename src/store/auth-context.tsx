import React, { ReactNode } from "react";

type contextObj = {
  token: any;
  username: any;
  isLoggedIn: boolean;
  login: any;
  logout: () => void;
};
const AuthContext = React.createContext<{
  token: string;
  username: string;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}>({
  token: "",
  username: "",
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

interface StateGlobalProviderProps {
  children: ReactNode;
}
export const AuthContextProvider: React.FC<StateGlobalProviderProps> = ({
  children,
}: StateGlobalProviderProps) => {
  const initialToken = localStorage.getItem("token");

  let initialUserdata;

  if (localStorage.getItem("user")) {
    initialUserdata = localStorage.getItem("user");
  } else {
    initialUserdata = false;
  }

  const [token, setToken] = React.useState(initialToken);
  // const [username, setUsername] = useState(initialUsername);
  const [user, setUser] = React.useState(initialUserdata);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const loginHandler = (token: string, username: string, email: string) => {
    setToken(token);
    const userlsData = JSON.stringify({ user: username, email: email });
    setUser(userlsData);
    // console.log(JSON.stringify({ user: username, email: email }));
    localStorage.setItem("token", token);
    localStorage.setItem("user", userlsData);
  };

  const contextValue: contextObj = {
    token: token,
    username: user,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
