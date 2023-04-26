import { useState } from "react";
import { Sketch } from "@uiw/react-color";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewPost from "./NewPost";
import Qrcode from "./Qrcode";
import QrInReact from "./QrInReact";
import Printer from "./Printer";
function App() {
  const [hex, setHex] = useState("#d0021b");
  const notify = () => toast.success("Wow so easy !");

  return (
    <div style={{ display: "flex" }}>
      {/* <div>
        <h1>{hex}</h1>
        <Sketch
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
          }}
        />
      </div> */}
      <Routes>
        <Route path="/" exact element={<Printer />} />
        <Route path="/qrnode" exact element={<Qrcode />} />
        <Route path="/qrreact" exact element={<QrInReact />} />
        {/* <Route path="/" exact element={<NewPost />} />
        <Route path="/" exact element={<ToastContainer />} />
        <Route path="/" exact element={<ToastContainer />} />
        <Route path="/" exact element={<ToastContainer />} /> */}
      </Routes>
    </div>
  );
}

export default App;
