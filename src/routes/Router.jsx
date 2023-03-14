import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../components/Landing";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Landing />} />
      </Route>
    </Routes>
  );
};

export default Router;
