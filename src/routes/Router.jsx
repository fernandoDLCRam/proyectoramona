import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BarChart from "../components/BarChart";
import Landing from "../components/Landing";
import Itinerario from "../components/Itinerario";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Landing />} />
        <Route path="/grafico" element={<BarChart />} />
        <Route path="/itinerario" element={<Itinerario />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default Router;
