import React from "react";
import { Route, Routes } from "react-router-dom";
import BarChart from "../components/BarChart";
import Landing from "../components/Landing";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Landing />} />
        <Route path="/grafico" element={<BarChart />} />
      </Route>
    </Routes>
  );
};

export default Router;
