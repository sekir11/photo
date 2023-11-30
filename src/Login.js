import React, { useState } from "react";
import Input from "./component/Input";
import Button from "./component/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [dealerCode, setDealerCode] = useState("");
  const [shopCode, setShopCode] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="login-box">
      <div className="input-group">
        <Input name={"input-dealer-code"} setText={setDealerCode}></Input>
        <Input name={"input-shop-code"} setText={setShopCode}></Input>
      </div>

      <div className="input-group">
        <Input name={"input-dealer-password"} setText={setPassword}></Input>
      </div>
      <Button
        name={"btn-primary btn-login"}
        action={() => {navigate(`${process.env.PUBLIC_URL}/home`);}}
        buttonName={"ログイン"}
      ></Button>
    </div>
  );
}
