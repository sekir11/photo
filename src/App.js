import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Home from "./component/Home";
import PhotoItem from "./component/PhotoItem";
import { useState } from "react";

function App() {
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
  const [recordList, setRecordList] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<Login></Login>}
        ></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/home`}
          element={<Home recordList={recordList}></Home>}
        ></Route>
        <Route
          path={`${process.env.PUBLIC_URL}/record`}
          element={
            <PhotoItem
              recordList={recordList}
              setRecordList={setRecordList}
            ></PhotoItem>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
