import { useEffect } from "react";
import React, { useState, useCallback } from "react";
import ReactFlow, { Controls, MiniMap, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "components/CustomNode";

// // Custom Node Component
// const CustomNode = ({ data }) => {
//   return (
//     <div style={{
//       border: "2px solid #333",
//       borderRadius: "8px",
//       padding: "10px",
//       textAlign: "center",
//       background: "#f0f0f0",
//       width: "200px",
//       position: "relative",
//     }}>
//       <div style={{ fontWeight: "bold", color: "#555" }}>{data.position}</div>
//       <div style={{ fontSize: "14px", color: "#222", marginTop: "5px" }}>{data.name}</div>
//     </div>
//   );
// };

// const chartConfig = {
//   type: 'organizational',
//   series: [
//     {
//       points: [
//         { id: "CEO", name: "<b>Head of MEAMOD</b><br>Assoc Prof Dr. Wirichada Pan-ngum, PhD", parent: null, color: "#ff4c4c" },
//         { id: "P-Co", name: "<b>Project Coordinator</b><br>Sureeporn Thongkuna", parent: "CEO", color: "#ff9900" },
//         { id: "H-EIRG", name: "<b>Head of EIRG</b><br>Assoc Prof Yoel Lubell", parent: "CEO", color: "#ff9900" },
//         { id: "H-DRlaDD", name: "<b>Head of DRlaDD</b><br>Prof Ben S Cooper", parent: "CEO", color: "#00cc99" },
//         { id: "H-MOTIP", name: "<b>MOTIP Director</b><br>Maneerat Ekkapongpisit, PhD", parent: "CEO", color: "#00cc99" },
//         { id: "H-RSE", name: "<b>Head of Research Software Engineer</b><br>David Brown", parent: "CEO", color: "#3399ff" },
//         { id: "H-NTDM", name: "<b>Head of NTDM</b><br>Assoc Prof Dr Wirichada Pan-ngum, PhD", parent: "CEO", color: "#3399ff" },
//       ],
//     },
//   ],
// };

// const OrgChart = () => (
//   <div style={{ width: '100%', height: '500px' }}>
//     <JSCharting options={chartConfig} />
//   </div>
// );


const nodeTypes = { custom: CustomNode };

const initialNodes = [
  // Head of Department
  { id: "1", data: { name: "Assoc Prof Dr. Wirichada Pan-ngum, PhD", position: "Head of Department" }, position: { x: 400, y: 50 }, type: "custom" },
  { id: "2", data: { name: "Sureeporn Thongkuna", position: "Project Coordinator" }, position: { x: 400, y: 50 }, type: "custom", parent: "1" },

  // EIRG Groups
  { id: "3", data: { name: "Assoc Prof Yoel Lubell", position: "Head of EIRG" }, position: { x: 200, y: 150 }, type: "custom", parent: "1" },
  { id: "4", data: { name: "Watcharintorn Thongpiam", position: "SEACTN, Spot Sepsis Project Management" }, position: { x: 200, y: 250 }, type: "custom", parent: "2" },
  { id: "5", data: { name: "Assoc Prof Marco Liverani", position: "Senior Research Fellow" }, position: { x: 200, y: 250 }, type: "custom", parent: "2" },
  { id: "6", data: { name: "Dr Nan Shwe Nwe Htun", position: "SEACTN - Postdoc Researcher" }, position: { x: 400, y: 250 }, type: "custom", parent: "2" },
  { id: "7", data: { name: "Dr Arjun Chandna", position: "Project Coordinator, DPhil Student" }, position: { x: 400, y: 250 }, type: "custom", parent: "2" },
  { id: "8", data: { name: "Dr Chris (Rusheng) Chew", position: "SEACTN - Clinical Researcher, DPhil student" }, position: { x: 600, y: 250 }, type: "custom", parent: "2" },
  { id: "9", data: { name: "Meiwen Zhang", position: "SEACTN - Epidemiologist, DPhil student" }, position: { x: 800, y: 250 }, type: "custom", parent: "2" },
  { id: "10", data: { name: "Prach Chanbroset", position: "Project IT Coordinator (Consultant)" }, position: { x: 800, y: 250 }, type: "custom", parent: "2" },
  { id: "11", data: { name: "Krongkarn Nareepon", position: "Logistic Assistant (Consultant)" }, position: { x: 800, y: 250 }, type: "custom", parent: "2" },
  { id: "12", data: { name: "Elke Wynberg", position: "Consultant (EDAM Project)" }, position: { x: 800, y: 250 }, type: "custom", parent: "2" },
  { id: "13", data: { name: "Porawit Sangplob", position: "Logistic Assistant (Consultant)" }, position: { x: 800, y: 250 }, type: "custom", parent: "2" },
  { id: "14", data: { name: "Suh Young Kang, Sophie ", position: "DPhil Student" }, position: { x: 800, y: 250 }, type: "custom", parent: "2" },

  // DRlaDD Groups
  { id: "15", data: { name: "Prof Ben S Cooper", position: "Head of DRIaDD" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "16", data: { name: "Cherry Lim", position: "Senior Scientist" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "17", data: { name: "Mo Yin", position: "Research Associate, Deputy Director ADVANCE-ID network" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "18", data: { name: "Sean Cavany", position: "Mathematical Modeller" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "19", data: { name: "Myo Maung Maung Swe", position: "Postdoc Researcher" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "20", data: { name: "Raneem Aizouk", position: "Postdoc Researcher" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "21", data: { name: "Mark Pritchard", position: "Postdoc Researcher" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "22", data: { name: "Alicia Gill", position: "Senior Scientist" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "23", data: { name: "Mathupanee Oonsivilai", position: "Research Assistant, DPhil Student" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "24", data: { name: "Toby Bonvoisin", position: "DPhil Student" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "25", data: { name: "Oraya Srimokla", position: "DPhil Student" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "26", data: { name: "Rachel Otuko ", position: "DPhil Student" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "27", data: { name: "Lucien Swetschinski ", position: "DPhil Student" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },
  { id: "28", data: { name: "Freddie Fell ", position: "DPhil Student" }, position: { x: 600, y: 150 }, type: "custom", parent: "1" },

  // MOTIP Groups
  { id: "29", data: { name: "Maneerat Ekkapongpisit, PhD", position: "MOTIP Director" }, position: { x: 1200, y: 250 }, type: "custom", parent: "4" },
  { id: "30", data: { name: "Grid Gunjina", position: "Project Manager" }, position: { x: 1200, y: 250 }, type: "custom", parent: "4" },
  { id: "31", data: { name: "Chawitar Noparatvarakorn", position: "Project Manager" }, position: { x: 1200, y: 250 }, type: "custom", parent: "4" },
  { id: "32", data: { name: "Puttarin Kulchaitanaroaj, PhD", position: "Health Economist" }, position: { x: 1200, y: 250 }, type: "custom", parent: "4" },
  { id: "33", data: { name: "Adshariya Agsornintara", position: "Consultant (Tropmed DC)" }, position: { x: 1200, y: 250 }, type: "custom", parent: "4" },
  
  // Research Software Engineering Groups
  { id: "34", data: { name: "Dr Sompob Saralamba, PhD", position: "Head of RSE" }, position: { x: 1000, y: 150 }, type: "custom", parent: "1" },
  { id: "35", data: { name: "Tanaphum Wichaita", position: "Research Software Engineer" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },

  // NTDM Groups
  { id: "36", data: { name: "Assoc Prof Dr Wirichada Pan-ngum, PhD", position: "Head of NTDM" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
  { id: "37", data: { name: "Chris Painter", position: "Health Economist" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
  { id: "38", data: { name: "Phrutsamon Wongnak", position: "Postdoc Researcher" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
  { id: "39", data: { name: "Ainura Moldokmatova", position: "DPhil Student" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
  { id: "40", data: { name: "Weerakorn Thichumpa", position: "PhD Student" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
  { id: "41", data: { name: "Pavadee  Chuaicharoen", position: "PhD Student" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
  { id: "42", data: { name: "Aung Myint Thu", position: "PhD Student" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
  { id: "43", data: { name: "Yamin Frazal", position: "PhD Student" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
  { id: "44", data: { name: "Tara Wagner-Gamble", position: "DPhil Student (co-supervised)" }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
  { id: "45", data: { name: "Amandip Sahota", position: "DPhil Student " }, position: { x: 1000, y: 250 }, type: "custom", parent: "4" },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e2-6", source: "2", target: "6" },
  { id: "e2-7", source: "2", target: "7" },
  { id: "e2-8", source: "2", target: "8" },
  { id: "e4-9", source: "4", target: "9" },
  { id: "e4-10", source: "4", target: "10" },
  { id: "e2-11", source: "2", target: "11" },
  { id: "e2-12", source: "2", target: "12" },
  { id: "e2-13", source: "2", target: "13" },
  { id: "e2-14", source: "2", target: "14" },
  { id: "e2-15", source: "2", target: "15" },
];

const OrgChart = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default OrgChart;
