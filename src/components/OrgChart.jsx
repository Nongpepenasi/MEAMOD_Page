import React, { useEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";
import * as d3 from "d3";

const orgData = [
  // Head of Department
  { id: "1", position: "Head of Department", names: ["Assoc Prof Dr. Wirichada Pan-ngum, PhD"], photo: "/src/assets/headshot/1.wirichada.webp", parentId: null },
  { id: "2", position: "Project Coordinator", names: ["Sureeporn Thongkuna"], parentId: "1" },

  // EIRG Groups
  { id: "3", position: "Head of EIRG", names: ["Assoc Prof Yoel Lubell"], photo: "/src/assets/headshot/2.yoel.webp",parentId: "1" },
  { id: "4", position: "SEACTN, Spot Sepsis Project Management", names: ["Watcharintorn Thongpiam"], parentId: "3" },
  { id: "5", position: "Senior Research Fellow", names: ["Assoc Prof Marco Liverani"], parentId: "3" },
  { id: "6", position: "SEACTN - Postdoc Researcher", names: ["Dr Nan Shwe Nwe Htun"], parentId: "3" },
  { id: "7", position: "Project Coordinator, DPhil Student", names: ["Dr Arjun Chandna"], parentId: "3" },
  { id: "8", position: "SEACTN - Clinical Researcher, DPhil student", names: ["Dr Chris (Rusheng) Chew"], parentId: "3" },
  { id: "9", position: "SEACTN - Epidemiologist, DPhil student", names: ["Meiwen Zhang"], parentId: "3" },
  { id: "10", position: "Project IT Coordinator (Consultant)", names: ["Prach Chanbroset"], parentId: "3" },
  { id: "11", position: "Logistic Assistant (Consultant)", names: ["Krongkarn Nareepon", "Porawit Sangplob"], parentId: "3" },
  { id: "12", position: "Consultant (EDAM Project)", names: ["Elke Wynberg"], parentId: "3" },
  { id: "13", position: "DPhil Student", names: ["Suh Young Kang, Sophie"], parentId: "3" },

  // DRlaDD Groups
  { id: "15", position: "Head of DRIaDD", names: ["Prof Ben S Cooper"], photo: "/src/assets/headshot/3.ben.webp", parentId: "1" },
  { id: "16", position: "Senior Scientist", names: ["Cherry Lim", "Alicia Gill"], parentId: "15" },
  { id: "17", position: "Research Associate, Deputy Director ADVANCE-ID network", names: ["Mo Yin"], parentId: "15" },
  { id: "18", position: "Mathematical Modeller", names: ["Sean Cavany"], parentId: "15" },
  { id: "19", position: "Postdoc Researcher", names: ["Myo Maung Maung Swe", "Raneem Aizouk", "Mark Pritchard"], parentId: "15" },
  { id: "23", position: "Research Assistant, DPhil Student", names: ["Mathupanee Oonsivilai"], parentId: "15" },
  { id: "24", position: "DPhil Student", names: ["Toby Bonvoisin", "Oraya Srimokla", "Rachel Otuko", "Lucien Swetschinski", "Freddie Fell"], parentId: "15" },

  // MOTIP Groups
  { id: "29", position: "MOTIP Director", names: ["Maneerat Ekkapongpisit, PhD"], photo: "/src/assets/headshot/4.maneerat.webp", parentId: "1" },
  { id: "30", position: "Project Manager", names: ["Grid Gunjina", "Chawitar Noparatvarakorn"], parentId: "29" },
  { id: "32", position: "Health Economist", names: ["Puttarin Kulchaitanaroaj, PhD"], parentId: "29" },
  { id: "33", position: "Consultant (Tropmed DC)", names: ["Adshariya Agsornintara"], parentId: "29" },
  
  // Research Software Engineering Groups
  { id: "34", position: "Head of RSE", names: ["Dr Sompob Saralamba, PhD"], photo: "/src/assets/headshot/5.sompob.webp", parentId: "1" },
  { id: "35", position: "Research Software Engineer", names: ["Tanaphum Wichaita"], parentId: "34" },

  // NTDM Groups
  { id: "36", position: "Head of NTDM", names: ["Assoc Prof Dr Wirichada Pan-ngum, PhD"], photo: "/src/assets/headshot/1.wirichada.webp", parentId: "1" },
  { id: "37", position: "Health Economist", names: ["Chris Painter"], parentId: "36" },
  { id: "38", position: "Postdoc Researcher", names: ["Phrutsamon Wongnak"], parentId: "36" },
  { id: "39", position: "DPhil Student", names: ["Ainura Moldokmatova", "Amandip Sahota"], parentId: "36" },
  { id: "40", position: "DPhil Student (co-supervised)", names: ["Tara Wagner-Gamble"], parentId: "36" },
  { id: "41", position: "PhD Student", names: ["Weerakorn Thichumpa", "Pavadee Chuaicharoen", "Aung Myint Thu", "Yamin Frazal"], parentId: "36" },
];

const OrgChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    const chart = new OrgChart()
      .container(chartRef.current)
      .data(orgData)
      .nodeWidth((d) => 300)
      .nodeHeight((d) => 110)
      .nodeContent((d) => `
        <div style="border:1px solid #ddd; border-radius:8px; padding:15px; background:#f8f9fa; text-align:left; position:relative;">
          
          <img src="${d.data.photo || defaultAvatar}" 
               style="width:60px; height:60px; border-radius:50%; position:absolute; top:15px; left:15px; border:2px solid white;" />

          <div style="padding-left: 80px; padding-top:5px;">
            <div style="font-weight:bold; font-size:16px; line-height:1.3;">${d.data.position}</div>
            <ul style="list-style:none; padding:0; margin:5px 0; font-size:14px;">
              ${d.data.names.map(name => `<li>${name}</li>`).join("")}
            </ul>
          </div>

        </div>
      `)
      .render();
  }, [orgData, chartRef.current]);

  return <div ref={chartRef} style={{ width: "100%", height: "700px" }} />;
};

export default OrgChartComponent;
