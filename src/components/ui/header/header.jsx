import i18next from "i18next";
import React, { lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import Loadable from "../../loadable/loadable";

import Background from '../../../assets/images/png/background.png'; 
import Sec_content from "./submodule/sec_content";
import First_Content from "./submodule/first_content";
import Third_content from "./submodule/third_content";

const Header = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(true);

  const onLanguageChange = (lang) => {
    if (lang == "ta") {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
    i18next.changeLanguage(lang);
  };

  return (
    <>
      <div className='relative bg-primary z-0 align-middle py-8 px-10 pl-36 items-center'>
        {/* <marquee> */}
          <h5 className='text-6 text-white font-normal text-ellipsis drunk truncate ml-12' style={{paddingBlock:'1.4px'}}>
            {t("header.title")}
          </h5>
        {/* </marquee> */}

        <div className='absolute bg-gradient-p-s h-10 w-36 z-1 left-0 top-0 flex items-center px-5 opacity-95'>
          <div
            className={
              isActive
                ? "p-2 rounded-25 px-10 ml-12 items-center text-white cursor-pointer"
                : "bg-yellow-500 p-3 rounded-25 px-10 items-center flex cursor-pointer"
            }
            onClick={() => onLanguageChange("ta")}
          >
            {!isActive && (
              <svg
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.34198 7.93735L3.06801 5.45318L2.95256 5.42839C1.60898 5.13984 0.404251 6.31104 0.65477 7.66222L4.34408 11.6926C5.04115 12.4541 6.27657 12.3221 6.79704 11.4305L12.5522 1.57193C13.0274 0.757915 11.8983 -0.0287562 11.2993 0.699021L5.34198 7.93735Z'
                  fill='#158219'
                />
              </svg>
            )}
            <p className={`text-5 ${isActive ? "font-normal" : "font-bold"}`}>
              தமிழ்
            </p>
          </div>
          <div
            className={
              isActive
                ? "bg-yellow-500 p-4 rounded-25 px-8 items-center flex cursor-pointer"
                : "p-2 rounded-25 px-10 items-center text-white cursor-pointer"
            }
            onClick={() => onLanguageChange("en")}
          >
            {isActive && (
              <svg
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.34198 7.93735L3.06801 5.45318L2.95256 5.42839C1.60898 5.13984 0.404251 6.31104 0.65477 7.66222L4.34408 11.6926C5.04115 12.4541 6.27657 12.3221 6.79704 11.4305L12.5522 1.57193C13.0274 0.757915 11.8983 -0.0287562 11.2993 0.699021L5.34198 7.93735Z'
                  fill='#158219'
                />
              </svg>
            )}
            <p className={`text-5 ${!isActive ? "font-normal" : "font-bold"}`}>
              English
            </p>
          </div>
        </div>
      </div>
      <div style={{backgroundImage: `url(${Background})`}}
      className="w-full h-screen bg-cover bg-center flex justify-between p-10"
    >
       <First_Content/>
       <Sec_content/>
       <Third_content/>
      </div>
    </>
  );
};

export default Header;
