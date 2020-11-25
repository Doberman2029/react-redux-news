import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import PopUpInput from "./PopUpInput";
import Button from "./Button";
import { authCheck } from "./authCheck";
import { InputHandler } from "./inputHandler";
import { logIn } from "../redux/actions/logActions";
import Alert from "./Alert";

import "../style/popUp.css";

function PopUp({ isOpen, handler }) {
  const name = InputHandler();
  const pass = InputHandler();

  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showErrorAlert) {
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
  }, [showErrorAlert]);

  const auth = () => {
    let user = authCheck(name.value, pass.value);

    if (!user) {
      setShowErrorAlert(true);
    } else {
      handler();
      dispatch(logIn({ name: user[0].name, isAdmin: user[0].isAdmin }));
      name.clear();
      pass.clear();
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="position-fixed w-100 h-100 bg-dark fixed-top d-flex justify-content-center popUp__bg"
            onClick={handler}
          ></div>
          <div className="w-100">
            <div className="rounded p-5 bg-light mt-5 position-fixed popUp mx-auto">
              {showErrorAlert ? (
                <Alert className="alert alert-danger position-absolute fixed-top">
                  Имя или пароль введены неправильно
                </Alert>
              ) : (
                ""
              )}

              <PopUpInput
                value={name.value}
                placeholder="Имя"
                id="nameLabel"
                handler={name.handler}
              />
              <PopUpInput
                type="password"
                value={pass.value}
                placeholder="Пароль"
                id="passLabel"
                handler={pass.handler}
              />
              <Button handler={auth} className="w-100">
                Войти
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default connect()(PopUp);
