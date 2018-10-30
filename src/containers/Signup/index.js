import React, { Fragment } from 'react';

const Signup = ({
  onSubmit,
  valid,
  pristine,
  reset,
}) => (
  <Fragment>
    <h2>Please login to see the content</h2>
    <div className="signinForm">
      <form
        onSubmit={onSubmit}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="button"
        >
          Submit
        </button>
        <button
            type="button" 
            onClick={reset}
            className="button"
          >
            Cancel
          </button>
      </form>
    </div>  
  </Fragment>
);


export default Signup;
