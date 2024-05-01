import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUppercase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissable fade show`}
          role="alert"
        >
          {props.alert.message}
        </div>
      )}
    </div>
  );
};

export default Alert;
