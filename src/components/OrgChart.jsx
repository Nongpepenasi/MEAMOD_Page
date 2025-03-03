import React, { useEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";
import * as d3 from "d3";

// 🔥 ข้อมูลโครงสร้างองค์กร
// const orgData = [
//   { id: "1", name: "Assoc Prof Dr. Wirichada Pan-ngum, PhD", position: "Head of Department", parentId: null },
//   { id: "3", name: "Assoc Prof Yoel Lubell", position: "Head of EIRG", parentId: "1" },
//   { id: "4", name: "Watcharintorn Thongpiam", position: "SEACTN, Spot Sepsis Project Management", parentId: "3" },
//   { id: "5", name: "Assoc Prof Marco Liverani", position: "Senior Research Fellow", parentId: "3" },
// ];

const orgData = [
  // Head of Department
  { id: "1", name: "Assoc Prof Dr. Wirichada Pan-ngum, PhD", position: "Head of Department", parentId: null },
  { id: "2", name: "Sureeporn Thongkuna", position: "Project Coordinator", parentId: "1" },

  // EIRG Groups
  { id: "3", name: "Assoc Prof Yoel Lubell", position: "Head of EIRG", parentId: "1" },
  { id: "4", name: "Watcharintorn Thongpiam", position: "SEACTN, Spot Sepsis Project Management", parentId: "3" },
  { id: "5", name: "Assoc Prof Marco Liverani", position: "Senior Research Fellow", parentId: "3" },
  { id: "6", name: "Dr Nan Shwe Nwe Htun", position: "SEACTN - Postdoc Researcher", parentId: "3" },
  { id: "7", name: "Dr Arjun Chandna", position: "Project Coordinator, DPhil Student", parentId: "3" },
  { id: "8", name: "Dr Chris (Rusheng) Chew", position: "SEACTN - Clinical Researcher, DPhil student", parentId: "3" },
  { id: "9", name: "Meiwen Zhang", position: "SEACTN - Epidemiologist, DPhil student", parentId: "3" },
  { id: "10", name: "Prach Chanbroset", position: "Project IT Coordinator (Consultant)", parentId: "3" },
  { id: "11", name: "Krongkarn Nareepon", position: "Logistic Assistant (Consultant)", parentId: "3" },
  { id: "12", name: "Elke Wynberg", position: "Consultant (EDAM Project)", parentId: "3" },
  { id: "13", name: "Porawit Sangplob", position: "Logistic Assistant (Consultant)", parentId: "3" },
  { id: "14", name: "Suh Young Kang, Sophie", position: "DPhil Student", parentId: "3" },

  // DRlaDD Groups
  { id: "15", name: "Prof Ben S Cooper", position: "Head of DRIaDD", parentId: "1" },
  { id: "16", name: "Cherry Lim", position: "Senior Scientist", parentId: "15" },
  { id: "17", name: "Mo Yin", position: "Research Associate, Deputy Director ADVANCE-ID network", parentId: "15" },
  { id: "18", name: "Sean Cavany", position: "Mathematical Modeller", parentId: "15" },
  { id: "19", name: "Myo Maung Maung Swe", position: "Postdoc Researcher", parentId: "15" },
  { id: "20", name: "Raneem Aizouk", position: "Postdoc Researcher", parentId: "15" },
  { id: "21", name: "Mark Pritchard", position: "Postdoc Researcher", parentId: "15" },
  { id: "22", name: "Alicia Gill", position: "Senior Scientist", parentId: "15" },
  { id: "23", name: "Mathupanee Oonsivilai", position: "Research Assistant, DPhil Student", parentId: "15" },
  { id: "24", name: "Toby Bonvoisin", position: "DPhil Student", parentId: "15" },
  { id: "25", name: "Oraya Srimokla", position: "DPhil Student", parentId: "15" },
  { id: "26", name: "Rachel Otuko", position: "DPhil Student", parentId: "15" },
  { id: "27", name: "Lucien Swetschinski", position: "DPhil Student", parentId: "15" },
  { id: "28", name: "Freddie Fell", position: "DPhil Student", parentId: "15" },

  // MOTIP Groups
  { id: "29", name: "Maneerat Ekkapongpisit, PhD", position: "MOTIP Director", parentId: "1" },
  { id: "30", name: "Grid Gunjina", position: "Project Manager", parentId: "29" },
  { id: "31", name: "Chawitar Noparatvarakorn", position: "Project Manager", parentId: "29" },
  { id: "32", name: "Puttarin Kulchaitanaroaj, PhD", position: "Health Economist", parentId: "29" },
  { id: "33", name: "Adshariya Agsornintara", position: "Consultant (Tropmed DC)", parentId: "29" },
  
  // Research Software Engineering Groups
  { id: "34", name: "Dr Sompob Saralamba, PhD", position: "Head of RSE", parentId: "1" },
  { id: "35", name: "Tanaphum Wichaita", position: "Research Software Engineer", parentId: "34" },

  // NTDM Groups
  { id: "36", name: "Assoc Prof Dr Wirichada Pan-ngum, PhD", position: "Head of NTDM", parentId: "1" },
  { id: "37", name: "Chris Painter", position: "Health Economist", parentId: "36" },
  { id: "38", name: "Phrutsamon Wongnak", position: "Postdoc Researcher", parentId: "36" },
  { id: "39", name: "Ainura Moldokmatova", position: "DPhil Student", parentId: "36" },
  { id: "40", name: "Weerakorn Thichumpa", position: "PhD Student", parentId: "36" },
  { id: "41", name: "Pavadee  Chuaicharoen", position: "PhD Student", parentId: "36" },
  { id: "42", name: "Aung Myint Thu", position: "PhD Student", parentId: "36" },
  { id: "43", name: "Yamin Frazal", position: "PhD Student", parentId: "36" },
  { id: "44", name: "Tara Wagner-Gamble", position: "DPhil Student (co-supervised)", parentId: "36" },
  { id: "45", name: "Amandip Sahota", position: "DPhil Student", parentId: "36" },
];

const OrgChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // 🔥 ใช้ D3.js สร้าง Org Chart
    const chart = new OrgChart()
      .container(chartRef.current)
      .data(orgData)
      .nodeWidth((d) => 220)
      .nodeHeight((d) => 120)
      .nodeContent((d) => `
        <div style="border:1px solid #ddd; border-radius:8px; padding:10px; background:#f8f9fa">
          <div style="font-weight:bold">${d.data.position}</div>
          <div>${d.data.name}</div>
        </div>
      `)
      .render();
  }, [orgData, chartRef.current]);

  return <div ref={chartRef} style={{ width: "100%", height: "700px" }} />;
};

export default OrgChartComponent;
