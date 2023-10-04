import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  Annotation
} from "react-simple-maps";

const geoUrl = "./features.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

const Map = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <ComposableMap style={{width:"100%"},{height:"100%"}}>
    <Geographies fill="#9400FF" geography="/features.json">
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography key={geo.rsmKey} geography={geo} />
        ))
      }
    </Geographies>
    <Annotation
    subject={[30,25]}
    dx={10}
    dy={20}
    connectorProps={{
      stroke: "#fff",
      strokeWidth: 1,
      strokeLinecap: "round"
    }}
    >
        <text x="80" y="10" textAnchor="end" alignmentBaseline="middle" fill="#fff">
          {"We Are Here At Egypt"}
          </text>
    </Annotation>
  </ComposableMap>
  );
};

export default Map;
