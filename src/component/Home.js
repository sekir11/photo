import React from "react";
import Header from "./Header";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      <Button
        name={"btn-primary btn-create-record"}
        action={() => {
          navigate(`${process.env.PUBLIC_URL}/record`);
        }}
        buttonName={"新規記録作成"}
      ></Button>
    </div>
  );
}
