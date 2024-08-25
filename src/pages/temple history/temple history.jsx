import React, { useState } from "react";
import Background from "../../assets/images/png/history/background.png";
import SecBackground from "../../assets/images/png/history/backsec.png";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import HistoryContent from "../../components/layout/history/historycontent";
import { useTranslation } from "react-i18next";
import {
  contentTwoDataEn,
  contentOneDataEn,
  contentTwoDataTn,
  contentOneDataTn,
} from "./data";

const TempleHistory = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const lanuage = i18n.language;

  const isCheck = useMediaQuery(theme.breakpoints.down("489"));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const menuItemsEn = ["Then thirumalai"];

  const menuItemsTn = ["தென் திருமலை"];

  const contentOne = contentOneDataEn.concat(contentTwoDataEn);
  const contentTwo = contentOneDataTn.concat(contentTwoDataTn);
  const isContent = lanuage == "en" ? contentOne : contentTwo;
  const menuItems = lanuage == "en" ? menuItemsEn : menuItemsTn;
  // const isContent = activeIndex == 0 ? contentOne : contentTwo;

  return (
    <div
      className="relative w-screen bg-center bg-cover p-10"
      style={{
        backgroundImage: `url(${
          activeIndex == 0 ? Background : SecBackground
        })`,
        minHeight: "480px",
        maxHeight: "100vh",
        height: "100vh",
        boxShadow: "inset 1420px 44px 25px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", margin: "auto" }}>
        <ul className="flex justify-center cursor-pointer">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className="px-12 relative"
            >
              <Typography
                variant="h5"
                textAlign="center"
                fontWeight={550}
                className={`text-yellow-500 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {item}
                {activeIndex === index && (
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 ${
                      isCheck ? " top-10" : " top-5"
                    }`}
                  >
                    <svg
                      width={95}
                      height={8.085}
                      viewBox="0 0 95 8.085"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={47.5}
                        cy={4.043}
                        r={3.79}
                        fill="#FFD601"
                        stroke="#FFD601"
                        strokeWidth={0.5053191489361702}
                      />
                      <path
                        d="M39.92 4.043H0.505"
                        stroke="#E3B614"
                        strokeWidth={1.0106382978723405}
                        strokeLinecap="round"
                      />
                      <path
                        d="M94.495 4.043h-39.415"
                        stroke="#E3B614"
                        strokeWidth={1.0106382978723405}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </Typography>
            </li>
          ))}
        </ul>

        <div
          className={"absolute w-full"}
          style={{
            minWidth: "60px",
            maxWidth: "520px",
            width: "100%",
            bottom: "5.5rem",
          }}
        >
          <HistoryContent data={isContent} />
        </div>
      </div>
    </div>
  );
};

export default TempleHistory;
