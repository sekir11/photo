import React from "react";
import Header from "./Header";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import RecordCard from "./RecordCard";

export default function Home({ recordList }) {
  const navigate = useNavigate();

  const inspectionItemList = [
    "左前方",
    "右後方",
    "車台番号",
    "荷室",
    "運転席マット",
  ];

  localStorage.setItem(
    "inspectionItemList",
    JSON.stringify(inspectionItemList)
  );

  return (
    <div>
      <Header></Header>
      {recordList.map((record) => (
        <RecordCard record={record}></RecordCard>
      ))}
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
