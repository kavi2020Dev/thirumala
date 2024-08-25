import { Avatar, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import HistroyLogo from "../../../assets/images/png/home/histroy.png";
import { motion } from "framer-motion";

const History = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isResponsive = useMediaQuery(theme.breakpoints.down("768"));
  const cur_lang = i18n.language;
  const [isVisible, setIsVisible] = useState(false);

  const OnMoreData = (content) => () => {
    setIsVisible(content);
  };

  return (
    <div
      className={isResponsive ? "p-10 bg-white" : "px-14  bg-white"}
      style={{
        paddingBlock: isResponsive ? "10px" : "30px",
        maxWidth: " 1200px",
        margin: "auto",
      }}
    >
      <Typography variant="h3">{cur_lang == "en" ? "Tirupati in South India" : "தென் பாரதத்தின் திருப்பதி" }</Typography>
      <Typography variant="h5" fontWeight={400} sx={{marginBottom:"30px"}}>
        {t("his-content-1")}
      </Typography>
      
      <Typography variant="h3">{cur_lang == "en" ? "Structure of the temple" : "கோவிலின் அமைப்பு" }</Typography>
      <Typography variant="h5" mt={1} fontWeight={400} mb={3}>
        {t("his-content-2")}
      </Typography>
      {isVisible && (
        <motion.div
          // className="mt-12 flex flex-wrap"
          // initial={{ x: "-100%" }}
          // animate={{ x: isVisible ? 0 : "-100%" }}
          // transition={{ type: "spring", stiffness: 50 }}
          className="mt-12 flex flex-wrap"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0.5 }}
          transition={{ type: "spring", stiffness: 30 }}
        >
          <Avatar
            variant="square"
            src={HistroyLogo}
            style={{
              minWidth: "160px",
              maxWidth: "210px",
              height: "auto",
              width: "100%",
              marginRight:"20px"
            }}
          />
          <div className="ml-6 mt-10">
            {cur_lang == "ta" ? (
              <>
                <div className="flex">
                  <Typography variant="h4" fontWeight={600} mb={1}>
                    மூலவர்{" "}
                  </Typography>
                  <Typography variant="h4" fontWeight={450} ml={1}>
                    : திருவேங்கடமுடையான்
                  </Typography>
                </div>

                <div className="flex">
                  <Typography variant="h4" fontWeight={600}  mb={1}>
                    உத்சவர்{" "}
                  </Typography>
                  <Typography variant="h4" fontWeight={450} ml={0.4}>
                    : ஸ்ரீ பாலாஜி
                  </Typography>
                </div>

                <div className="flex">
                  <Typography variant="h4" fontWeight={600} mb={1}>
                    தாயார்{" "}
                  </Typography>
                  <Typography variant="h4" fontWeight={450} ml={1}>
                    : பத்மாவதி
                  </Typography>
                </div>
              </>
            ) : (
              <>
                <div className="flex">
                  <Typography variant="h4" fontWeight={600}  mb={1}>
                  Source{" "}
                  </Typography>
                  <Typography variant="h4" fontWeight={450} ml={1}>
                    : Thiruvenkatamudayan
                  </Typography>
                </div>

                <div className="flex">
                      <Typography variant="h4" fontWeight={600}  mb={1}>Utsavar{" "}
                  </Typography>
                  <Typography variant="h4" fontWeight={450} ml={0.4}>
                    : Shri Balaji
                  </Typography>
                </div>

                <div className="flex">
                  <Typography variant="h4" fontWeight={600}  mb={1}>
                  Mother{" "}
                  </Typography>
                  <Typography variant="h4" fontWeight={450} ml={1}>
                    : Padmavati
                  </Typography>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
      <div className="flex justify-end">
        {isVisible ? (
          <Typography
            variant="h6"
            onClick={OnMoreData(false)}
            className="text-blue-600 cursor-pointer w-56"
            align="right"
          >
            {cur_lang == "en" ? "Hide Content..." : "உள்ளடக்கத்தை மறை..."}
          </Typography>
        ) : (
          <Typography
            variant="h6"
            onClick={OnMoreData(true)}
            className="text-blue-600 cursor-pointer w-32"
            align="right"
          >
            {cur_lang == "en" ? "Read More..." : "மேலும் படிக்க..."}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default History;
