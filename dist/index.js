require("file-loader?name=[name].[ext]!/");import React from"react";import ReactDOM from"react-dom";import{Provider}from"react-redux";import{BrowserRouter}from"react-router-dom";import store from"./store";import App from"./App.jsx";import"./App.scss";import"./../src/styles/font.scss";var domElement=document.getElementById("root");ReactDOM.render(React.createElement(Provider,{store},React.createElement(BrowserRouter,null,React.createElement(App,null))),domElement);