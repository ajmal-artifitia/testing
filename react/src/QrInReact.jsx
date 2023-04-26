import React from 'react';
import QRCode from 'qrcode.react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const qrCodeData = [
  'https://www.example.com',
  'https://www.anotherexample.com',
  // add more data strings for each QR code
];

function QrInReact() {
  function generatePDF() {
    const doc = new jsPDF();
    let y = 10;

    qrCodeData.forEach((data, index) => {
      html2canvas(document.getElementById(`qr-code-${index}`)).then(
        (canvas) => {
          const imageData = canvas.toDataURL("image/png");
          doc.addImage(imageData, "PNG", 10, y, 50, 50);
          y += 60;
          if (index === qrCodeData.length - 1) {
            doc.save("qr-codes.pdf");
          }
        }
      );
    });
  }

  return (
    <div>
      {qrCodeData.map((data, index) => (
        <div key={index} id={`qr-code-${index}`}>
          <QRCode value={data}  />
        </div>
      ))}
      <button onClick={generatePDF}>Download QR Codes as PDF</button>
    </div>
  );
}

export default QrInReact;
