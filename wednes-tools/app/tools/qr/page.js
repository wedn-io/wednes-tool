"use client"

import { useState } from "react";
import QRCode from "qrcode";

/* qr코드 생성 */

export default function qrcode() {
  const [text, setText] = useState('');
  const [qrCodeDataUrl, setQRCodeDataUrl] = useState('');

  /* qr코드 생성 함수 */
  const generateQRCode = (event) => {
    event.preventDefault();
    QRCode.toDataURL(text, { width: 300, height: 300 })
      .then((dataUrl) => {
        setQRCodeDataUrl(dataUrl);
      })
      .catch((error) => {
        console.error('Failed to generate QR code:', error);
      });
  };

  /* png 다운로드 */
  const downloadQRCodeAsPNG = (event) => {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = qrCodeDataUrl;
    link.download = "qr-code.png";
    link.click();
  };
  /* svg 다운로드 */
  const downloadQRCodeAsSVG = (event) => {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = qrCodeDataUrl;
    link.download = "qr-code.svg";
    link.click();
  };

  return (
    <>
      <div>
        <h5>Generate URL QR Code</h5>
        <div className="qr-image-box">
          {/* image area */}
          <div className="qr-image-body">
            {qrCodeDataUrl ? <img src={qrCodeDataUrl} alt="QR Code" /> : <img src="/qr-code-default.png" alt="QR Code" className="qr-code-default"/>}
          </div>
          <div className="qr-image-bottom">
            🔽Enter the URL at the bottom🔽
          </div>
        </div>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className="global-input qr-code-input" 
          placeholder="URL"
        />
        
        <button 
          onClick={generateQRCode} 
          className="global-button qr-code-button">
            Generate QR Code
        </button>
        <button onClick={downloadQRCodeAsPNG}>.PNG Download</button>
        <button onClick={downloadQRCodeAsSVG}>.SVG Download</button>
      </div>
    </>
  );
};