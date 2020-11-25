import React from "react";
import { connect, useSelector } from "react-redux";
import CentredText from "./CentredText";

function Main() {
  const { name } = useSelector((store) => store.currentUser);
  return <CentredText>Привет, {name ? name : "Гость"}</CentredText>;
}

export default connect()(Main);
