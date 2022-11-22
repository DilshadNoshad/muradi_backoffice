import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import AuthContext from "../store/auth-context";
import LoginForm from "../components/forms/LoginForm";

export default function LoginPage() {
  const authCtx = React.useContext(AuthContext);

  const loginHandler = async (info: any) => {
    try {
      const response: any = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmWTUMTMgGa2bymkrbaEbIxjsb-7ou1wo",
        {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      authCtx.login(data.idToken);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return <LoginForm onSignIn={loginHandler} />;
}
