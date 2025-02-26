import { useEffect } from "react";

const OrgChart = () => {
  const chartId = "orgChartContainer";

  useEffect(() => {
    if (typeof window !== "undefined" && window.JSC) {
      window.JSC.chart(chartId, {
        type: "organizational",
        title_label: { text: "Organization Chart" },
        defaultSeries: { shape: { type: "circle" } },
        series: [
          {
            points: [
              { id: "CEO", name: "CEO", parent: null },
              { id: "Manager1", name: "Manager 1", parent: "CEO" },
              { id: "Manager2", name: "Manager 2", parent: "CEO" },
              { id: "Employee1", name: "Employee 1", parent: "Manager1" },
              { id: "Employee2", name: "Employee 2", parent: "Manager1" },
              { id: "Employee3", name: "Employee 3", parent: "Manager2" },
            ],
          },
        ],
      });
    }
  }, []);

  return <div id={chartId} style={{ width: "100%", height: "500px" }}></div>;
};

export default OrgChart;
