import { ResponsivePie } from "@nivo/pie";
import { RutaApi } from "../api/url";
import React, { useEffect, useState } from "react";

const BarChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    RutaApi.get("/voto").then((voto) => setData(voto.data[0]));
  }, []);
  return (
    <ResponsivePie
      enableArcLinkLabels={false}
      theme={{ fontSize: 40, fontFamily: "BOLD" }}
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 6,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgb(252,207,213)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      colors={["#7594cc", "#f49cb4"]}
      colorBy="index"
      fill={[
        {
          match: {
            label: "nino",
          },
          id: "dots",
        },
        {
          match: {
            id: "nina",
          },
          id: "lines",
        },
      ]}
    />
  );
};

export default BarChart;
