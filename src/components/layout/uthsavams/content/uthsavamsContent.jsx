import React from "react";
import "./uthsavamsContent.css";
import { Avatar, Typography } from "@mui/material";
import Text from "../../../../assets/images/svg/uthsavamhtxt.svg";
import { useTranslation } from "react-i18next";

const UthsavamsContent = () => {
  const { t, i18n } = useTranslation();
  const lanuage = i18n.language;

  return (
    <div>
      <div className="uthsavams_header">
        {lanuage == "en" ? (
          <Typography
            fontSize={"2rem"}
            fontWeight={600}
            className="uthsavam_header_txt"
            lineHeight={1.2}
          >
            Darshan
            <br />
            Services
          </Typography>
        ) : (
          <Typography variant="h1" className="uthsavam_header_txt">
            தரிசன
            <br />
            சேவைகள்
          </Typography>
        )}
      </div>

      <div className="uthsavam_content">
        <Typography variant="h6">{t("uthsavams:content")}</Typography>
      </div>
    </div>
  );
};

export default UthsavamsContent;
