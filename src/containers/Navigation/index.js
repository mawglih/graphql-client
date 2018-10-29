import React, { Component, Fragment } from 'react';

const NavAuth = () => (
  <div>
    Auth
  </div>
);

const NavNotAuth = () => (
  <div>
    Not Auth
  </div>
);

class Navigation extends Component {

  render() {
    const {
      auth,
    } = this.props;

    return(
      <Fragment>
        { auth ? <NavAuth /> : <NavNotAuth /> }
      </Fragment>
    );
  }
}

export default Navigation;