import React, { Fragment } from "react";
import Modal from "../../../components/UI/Modal/Modal";

const WithErrorHandler = WrappedComponent => {
  return props => {
    return (
      <Fragment>
        <Modal>Что-то пошло не так!</Modal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default WithErrorHandler;
