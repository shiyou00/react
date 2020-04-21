import React from "react";
import BaseRouter from "./components/BaseRouter";
import NestRouter from "./components/NestRouter";

export default function App() {
  return (
    <>
      <BaseRouter />
      <NestRouter />
    </>
  );
}

