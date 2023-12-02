import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Home from "./component/Home";
import PhotoItem from "./component/PhotoItem";
import { useState } from "react";

function App() {
  const [recordList, setRecordList] = useState([]);

  document.addEventListener(
    "touchmove",
    function (event) {
      // タッチイベントが1つ以上の場合、縦スクロールとみなしてデフォルトの動作を許可
      if (event.touches.length > 1) return;

      // 横スワイプのデフォルトの動作を無効化
      event.preventDefault();
    },
    { passive: false }
  );

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
