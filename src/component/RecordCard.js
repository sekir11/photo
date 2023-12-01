import React from "react";

export default function RecordCard({ record }) {
  return (
    <div className="record-card">
      <div className="record-card-images">
        <div className="left">
          <img src={record[0]} alt="selected" />
        </div>
        <div className="right">
          <img src={record[1]} alt="selected" />
        </div>
      </div>
      <p>日付</p>
    </div>
  );
}
