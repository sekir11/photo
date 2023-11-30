import React from "react";

export default function Header2({ action }) {
  return (
    <div className="header">
      <div onClick={action}>戻る</div>
      <div>トヨタ店</div>
    </div>
  );
}
