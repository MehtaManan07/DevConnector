import React, { Fragment } from "react";
import spinner from '../../img/1000w.webp';
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block", background: 'inherit' }}
        alt="Loading..."
      />
    </Fragment>
  );
};

export default Spinner;
