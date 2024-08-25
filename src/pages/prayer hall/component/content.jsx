import { Avatar, Typography } from "@mui/material";
import React from "react";

const Content = ({ header, avater, name, subtitle }) => {
  return (
    <div className="items-center">
      <Typography mb={0.5} variant="h5" align="center">
        {header}
      </Typography>
      <Avatar
        src={avater}
        alt="banner1"
        style={{
          width: "90px",
          height: "auto",
          margin: "auto",
          marginBlockEnd: "10px",
        }}
      />
      <Typography
        variant="h5"
        align="center"
        width={240}
        lineHeight={1.2}
        m={"auto"}
        style={{ paddingBlockEnd: "6px" }}
      >
        {name}
      </Typography>
      <Typography
        fontWeight={400}
        variant="h6"
        align="center"
        lineHeight={1.2}
        width={300}
        m="auto"
        mb={2}
      >
        {subtitle}{" "}
      </Typography>
    </div>
  );
};

export default Content;
