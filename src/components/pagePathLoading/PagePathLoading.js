import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PagePatheLoading() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#EEEEEE",
        marginBottom: "20px",
        borderRadius: "10px",
        padding: "4px 10px",
      }}
    >
      <Skeleton
        width={"40px"}
        style={{ marginRight: "10px", backgroundColor: "#c7c7c7" }}
        inline
      />
      <Skeleton
        width={"100px"}
        style={{ marginRight: "10px", backgroundColor: "#c7c7c7" }}
        inline
      />
      <Skeleton
        width={"180px"}
        style={{ marginRight: "10px", backgroundColor: "#c7c7c7" }}
        inline
      />
    </div>
  );
}

export default PagePatheLoading;
