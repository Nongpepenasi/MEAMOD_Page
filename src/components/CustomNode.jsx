import React from "react";
import { Handle, Position } from "reactflow";

const CustomNode = ({ data }) => {
  return (
    <div style={{
      border: "2px solid #333",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      background: "#f0f0f0",
      width: "150px",
      position: "relative",
    }}>
      {/* ชื่อตำแหน่งงานด้านบน */}
      <div style={{ fontWeight: "bold", color: "#555" }}>{data.position}</div>
      
      {/* เส้นเชื่อม (Top) */}
      <Handle type="target" position={Position.Top} style={{ background: "#333" }} />
      
      {/* ชื่อพนักงานอยู่ด้านล่าง */}
      <div style={{ fontSize: "14px", color: "#222", marginTop: "5px" }}>
        {data.name}
      </div>
      
      {/* เส้นเชื่อม (Bottom) */}
      <Handle type="source" position={Position.Bottom} style={{ background: "#333" }} />
    </div>
  );
};

export default CustomNode;
