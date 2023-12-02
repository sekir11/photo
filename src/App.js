import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Home from "./component/Home";
import PhotoItem from "./component/PhotoItem";
import { useState } from "react";

function App() {
  const [recordList, setRecordList] = useState([]);

  let startX, startY;

  document.addEventListener("touchstart", function (event) {
    // タッチが始まった位置を保存
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  });

  document.addEventListener(
    "touchmove",
    function (event) {
      // タッチイベントが1つ以上の場合、縦スクロールとみなしてデフォルトの動作を許可
      if (event.touches.length > 1) return;

      // タッチが始まった位置からの横方向と縦方向の移動距離を計算
      const deltaX = event.touches[0].clientX - startX;
      const deltaY = event.touches[0].clientY - startY;

      // 横スワイプと判断された場合、デフォルトの動作を無効化
      if (Math.abs(deltaY) < Math.abs(deltaX)) {
        event.preventDefault();
      }
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
