import React from "react";
import Header2 from "./Header2";
import { useNavigate } from "react-router-dom";
import ItemList from "./ItemList";
import Button from "./Button";

export default function PhotoItem() {
  const navigate = useNavigate();
  return (
    <div>
      <Header2
        action={() => navigate(`${process.env.PUBLIC_URL}/home`)}
      ></Header2>
      <ItemList></ItemList>
      <Button
        buttonName={"完 了"}
        name={"btn-primary btn-complete-record"}
      ></Button>
    </div>
  );
}
