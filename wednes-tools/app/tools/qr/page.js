"use client"

import { useState, useRef } from "react";
import QRCode from "qrcode";
// import {QRCodeSVG} from 'qrcode.react';

export default function qrcode() {
  const [text, setText] = useState('');
  const [qrCodeDataUrl, setQRCodeDataUrl] = useState('');
  const qrRef = useRef(null);

  // QR 코드 생성 함수
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

  // PNG 다운로드 함수
  const downloadQRCodeAsPNG = (event) => {
    event.preventDefault();
  };

  // SVG 다운로드 함수
  const downloadQRCodeAsSVG = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* <QRCodeSVG ref={qrRef} value={text} /> */}
      <h5>Generate URL QR Code</h5>
      <div className="qr-layout">
        <div className="qr-image-box">
          {/* image area */}
          <div className="qr-image-body">
            {qrCodeDataUrl ? <img src={qrCodeDataUrl} alt="QR Code" /> : <img src="/qr-code-default.png" alt="QR Code Empty" className="qr-code-default"/>}
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

        {qrCodeDataUrl && (
          <>
            <button onClick={downloadQRCodeAsPNG} className="global-button-reverse qr-code-button">.PNG Download</button>
            <button onClick={downloadQRCodeAsSVG} className="global-button-reverse qr-code-button">.SVG Download</button>
          </>
        )}
      </div>
    </>
  );
};