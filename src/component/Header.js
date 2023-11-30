import React from "react";

export default function Header() {
  const today = new Date();

  return (
    <div className="header">
      <div>
        {today.getFullYear() +
          "年" +
          (today.getMonth() + 1) +
          "月" +
          today.getDate() +
          "日"}
      </div>
      <div>トヨタ店</div>
    </div>
  );
}
