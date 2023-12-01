import React from "react";
import CameraComponent from "./CameraComponent";

export default function Item({record, setRecord, inspectionItemName }) {
  return (
    <CameraComponent record={record} setRecord={setRecord} inspectionItemName={inspectionItemName}></CameraComponent>
  );
}
