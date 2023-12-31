import React from "react";
import Item from "./Item";

export default function ItemList({ record, setRecord }) {
  const inspectionItemNameList = JSON.parse(
    localStorage.getItem("inspectionItemList")
  );

  let inspectionCount = 0;

  return (
    inspectionItemNameList && (
      <div>
        {(function () {
          const list = [];
          for (let i = 0; i < inspectionItemNameList.length / 2; i++) {
            list.push(
              <div className="item-list" key={i}>
                <Item
                key={inspectionCount}
                  record={record}
                  setRecord={setRecord}
                  inspectionItemName={inspectionItemNameList[inspectionCount++]}
                ></Item>
                {inspectionItemNameList[inspectionCount] && (
                  <Item
                  key={inspectionCount}
                    record={record}
                    setRecord={setRecord}
                    inspectionItemName={
                      inspectionItemNameList[inspectionCount++]
                    }
                  ></Item>
                )}
              </div>
            );
          }
          return <div>{list}</div>;
        })()}
      </div>
    )
  );
}
