import React from "react";

export default function Input({ name, setText }) {
  const setInputText = (e) => {
    setText(e.target.value);
  };

  return <input className={name} onChange={setInputText} />;
}
