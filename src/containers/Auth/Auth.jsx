import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

import { auth } from "../../redux/actions";

import classes from "./Auth.css";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Mail Address"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false,
        include: true
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        minLength: 6,
        touched: false
      }
    },
    isSignup: true
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.include) {
      if (value.includes("@")) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
    return isValid;
  }

  handleChangeInput = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName]
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };

  handleAuthSubmit = e => {
    e.preventDefault();
    this.props.handleAutch(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup
    );
  };

  handleSwitchAuthMode = () => {
    this.setState(prevState => {
      return {
        isSignup: !prevState.isSignup
      };
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    const form = formElementsArray.map(el => {
      return (
        <Input
          key={el.id}
          value={el.config.value}
          elementType={el.config.elementType}
          elementConfig={el.config.elementConfig}
          changed={event => this.handleChangeInput(event, el.id)}
          invalid={!el.config.valid}
          touched={el.config.touched}
          shouldValidate={el.config.validation}
        />
      );
    });

    return (
      <div className={classes.Auth}>
        <form onSubmit={this.handleAuthSubmit}>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button btnType="Danger" clicked={this.handleSwitchAuthMode}>
          SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}
        </Button>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    handleAutch: (email, password, isSignup) =>
      dispatch(auth(email, password, isSignup))
  };
};
export default connect(
  null,
  mapDispatch
)(Auth);
