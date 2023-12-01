import React from "react";
import Item from "./Item";

export default function ItemList({ record, setRecord }) {
  return (
    <div>
      <div className="item-list">
        <Item record={record} setRecord={setRecord} inspectionItemName="左前方"></Item>
        <Item record={record} setRecord={setRecord} inspectionItemName={"右後方"}></Item>
      </div>
      <div className="item-list">
        <Item inspectionItemName={"車台番号"}></Item>
        <Item inspectionItemName={"荷室"}></Item>
      </div>
    </div>
  );
}
