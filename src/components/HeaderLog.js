import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actions/logActions";
import Button from "./Button";

function HeaderLog({ popUpHandler }) {
  const user = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  if (!user.name) {
    return (
      <Button handler={popUpHandler} className="m-2 btn-primary">
        Войти
      </Button>
    );
  } else {
    return (
      <Button handler={() => dispatch(logOut())} className="m-2 btn-primary">
        Выйти
      </Button>
    );
  }
}

export default connect()(HeaderLog);
