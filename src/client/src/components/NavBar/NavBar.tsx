import RightMenu from "./RightMenu";
import LeftMenu from "./LeftMenu";
import { Authed, LoginFormProps, SetAuthed, SignupFormProps } from "../../App";
import React from "react";

export default function NavBar(props: LoginFormProps & SignupFormProps & Authed & SetAuthed) {
  const navStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    height: "3.5em",

    fontWeight: "bold",
    alignItems: "center",
  };

  return (
    <nav style={navStyle}>
      <LeftMenu authed={props.authed} />
      <RightMenu
        loginFormCallback={props.loginFormCallback}
        signupFormCallback={props.signupFormCallback}
        authed={props.authed}
        authCallback={props.authCallback}
      />
    </nav>
  );
}
