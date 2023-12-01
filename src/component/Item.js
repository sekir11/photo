import React from "react";
import CameraComponent from "./CameraComponent";

export default function Item({ inspectionItemName }) {
  return (
    <CameraComponent inspectionItemName={inspectionItemName}></CameraComponent>
  );
}
