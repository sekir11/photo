import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Home from "./component/Home";
import PhotoItem from "./component/PhotoItem";
import { useState } from "react";

(function () {
  var c = document.getElementById("main");
  c.addEventListener = null;
})();

function App() {
  const [recordList, setRecordList] = useState([]);

  // document.addEventListener(
  //   "touchmove",
  //   (event: any) => {
  //     event.preventDefault();
  //   },
  //   { passive: false }
  // );

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
