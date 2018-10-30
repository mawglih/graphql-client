import React, { Component } from 'react';
import Signup from 'containers/Signup';
import { graphql } from 'react-apollo';
import query from 'shared/query';

class Auth extends Component {

  render() {
    console.log(this.props.data);
    return (
      <div>
        <Signup onSubmit={this.submit}/>
      </div>
    );
  }
}

export default graphql(query)(Auth);