import React from "react";

const AppContext = React.createContext();

export const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: defaultUser,
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  };

  render() {
    const contextValue = {
      user: this.state.user,
      logIn: this.logIn,
      logOut: this.logOut,
    };

    return (
      <AppContext.Provider value={contextValue}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;