import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// // เวลาเรียนใช้ Class Component มันจะสั่งสร้าง instance และเรียกใช้ methode render ให้เลย
// const instance  = new App()
// instance.render()

// // พอ state change มันจะเรียกใช้ methode render อีกรอบ
// instance.render()
