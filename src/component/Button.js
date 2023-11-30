import React from "react";

export default function Button({ name, action, buttonName }) {
  return (
    <div className={name} onClick={action}>
      {buttonName}
    </div>
  );
}
