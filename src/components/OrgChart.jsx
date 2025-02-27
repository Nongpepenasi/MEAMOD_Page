import { useEffect } from "react";

const OrgChart = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.JSC) {
      window.JSC.chart("orgChartContainer", {
        type: "organizational",
        title_label: { text: "Organization Chart" },
        defaultSeries: {
          shape: {
            type: "rectangle",
            fill: "lightblue",
          },
        },
        series: [
          {
            points: [
              { id: "CEO", name: "<b>Head of MEAMOD</b><br>Assoc Prof Dr. Wirichada Pan-ngum, PhD", parent: null, color: "#ff4c4c" },
              { id: "Manager1", name: "<b>Manager</b><br>Alice Smith", parent: "CEO", color: "#ff9900" },
              { id: "Manager2", name: "<b>Manager</b><br>Bob Johnson", parent: "CEO", color: "#ff9900" },
              { id: "Employee1", name: "<b>Software Engineer</b><br>Michael Lee", parent: "Manager1", color: "#00cc99" },
              { id: "Employee2", name: "<b>Software Engineer</b><br>Sarah Kim", parent: "Manager1", color: "#00cc99" },
              { id: "Employee3", name: "<b>QA Engineer</b><br>David Brown", parent: "Manager2", color: "#3399ff" },
            ],
          },
        ],
      });
    }
  }, []);

  return <div id="orgChartContainer" style={{ width: "100%", height: "500px" }}></div>;
};

export default OrgChart;
