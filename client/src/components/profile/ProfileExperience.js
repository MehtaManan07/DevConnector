import React from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment'

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      <div>
        <h3 className="text-dark">{school}</h3>
        <p> <Moment format="YYYY/MM/DD"> {from} </Moment> - {!to ? ' Now ' : <Moment> {to} </Moment>} </p>
        <p>
          <strong>Degree: </strong>{degree}
        </p>
        <p>
          <strong>Field of study: </strong>{fieldofstudy}
        </p>
        <p>
          <strong>Description: </strong>{description}
        </p>
      </div>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
