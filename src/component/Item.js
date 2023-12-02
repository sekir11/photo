import React from "react";
import CameraComponent from "./CameraComponent";

export default function Item({key, record, setRecord, inspectionItemName }) {
  return (
    <CameraComponent key={key} record={record} setRecord={setRecord} inspectionItemName={inspectionItemName}></CameraComponent>
  );
}
