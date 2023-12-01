import React, { useState } from "react";
import Header2 from "./Header2";
import { useNavigate } from "react-router-dom";
import ItemList from "./ItemList";
import Button from "./Button";

export default function PhotoItem({ recordList, setRecordList }) {
  const navigate = useNavigate();

  const [record, setRecord] = useState([]);

  const complete = () => {
    setRecordList([...recordList, record]);
    navigate(`${process.env.PUBLIC_URL}/home`);
  };

  return (
    <div>
      <Header2
        action={() => navigate(`${process.env.PUBLIC_URL}/home`)}
      ></Header2>
      <ItemList record={record} setRecord={setRecord}></ItemList>
      <Button
        buttonName={"完 了"}
        name={"btn-primary btn-complete-record"}
        action={complete}
      ></Button>
    </div>
  );
}
