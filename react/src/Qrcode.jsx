import React, { useState } from "react";
import { qrGenerate } from "./service";
import { Link } from "react-router-dom";

function Qrcode() {
  const [url, setUrl] = useState("");
  const [qr, serQr] = useState("");
  const generateQrcode = async (e) => {
    e.preventDefault();
    const data = await qrGenerate(url);
    console.log(data);
    serQr(data);
  };

  return (
    <div
      style={{
        padding: "150px",
      }}
    >
      <Link to={"/qrreact"}>
        <button>to react qr code</button>
      </Link>
      <input
        style={{
          width: "100%",
          padding: "12px 20px",
          margin: "8px 0",
          boxSizing: "border-box",
        }}
        placeholder="Enter your url"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        style={{
          padding: "100px",
          backgroundColor: "lightblue",
          border: "none",
          color: "white",
          padding: "32px",
          textDecoration: "none",
          margin: "4px",
          cursor: "pointer",
        }}
        onClick={generateQrcode}
      >
        Generate url
      </button>
      <a href={qr} download>
        <img src={qr} />
      </a>
    </div>
  );
}

export default Qrcode;
