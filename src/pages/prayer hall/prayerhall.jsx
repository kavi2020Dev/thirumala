import { Avatar, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import "./prayerhall.css";
import One from "../../assets/images/png/prayerhall/one.png";
import Two from "../../assets/images/png/prayerhall/1.png";
import Three from "../../assets/images/png/prayerhall/2.png";
import Four from "../../assets/images/png/prayerhall/3.png";
import Five from "../../assets/images/png/prayerhall/4.png";
import Content from "./component/content";

const Prayerhall = () => {
  const { i18n } = useTranslation();
  const lanuage = i18n.language;

  return (
    <div className="relative">
      <div className="prayerhall-border" />
      <div
        className="bg-white flex flex-col justify-center w-full"
        style={{ backgroundColor: "#EFEFEF" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "auto",
            backgroundColor: "white",
          }}
        >
          <div style={{ paddingBlock: "26px" }}>
            <Typography
              // variant="h2"
              fontSize={"2rem"}
              fontWeight={700}
              mb={1}
              className="prayer-hall-title"
              align="center"
            >
              {lanuage == "en"
                ? "Srivari Ananda Nilaiyam"
                : "ஸ்ரீவாரி ஆனந்த நிலையம்"}
            </Typography>
            <Typography
              align="center"
              variant="h4"
              fontWeight={430}
              width={320}
              m={"auto"}
            >
              {lanuage == "en"
                ? "Prayer Hall, KG Group Coimbatore"
                : "பிரார்த்தனைக் கூடம், KG குழுமம் கோயம்புத்தூர் "}
            </Typography>
          </div>

          <div style={{ backgroundColor: "#FFEB97", padding: "26px" }}>
            <Typography
              variant="h5"
              fontWeight={500}
              align="center"
              lineHeight={1.5}
            >
              {lanuage == "en"
                ? "Like the Srivari temple at Tirumala-Tirupati in Andhra Pradesh, the Srivari temple in Coimbatore, Tamil Nadu is situated on a natural hill amidst sylvian surroundings at about 1000 feet above MSL. and could be seen from afar. The majestic looking tower above the sanctum sanctorum and the white and gray colored temple complex add to the grandeur of the temple against the backdrop of the greenish blue Nilgiri mountains."
                : "ஆந்திரப் பிரதேசத்தில் உள்ள திருமலா-திருப்பதியில் உள்ள ஸ்ரீவாரி கோயிலைப் போலவே, தமிழ்நாட்டின் கோயம்புத்தூரில் உள்ள ஸ்ரீவாரி கோயிலும் MSL இலிருந்து சுமார் 1000 அடி உயரத்தில் சில்வியன் சுற்றுப்புறங்களுக்கு மத்தியில் இயற்கையான மலையில் அமைந்துள்ளது. மற்றும் தொலைவில் இருந்து பார்க்க முடிந்தது. கருவறைக்கு மேலே உள்ள கம்பீரமான தோற்றமுடைய கோபுரமும், வெள்ளை மற்றும் சாம்பல் நிறத்தில் உள்ள கோயில் வளாகமும் பச்சை கலந்த நீல நிற நீலகிரி மலைகளின் பின்னணியில் கோயிலின் பிரமாண்டத்தைக் கூட்டுகின்றன."}
            </Typography>

            <Typography
              variant="h5"
              fontWeight={500}
              align="center"
              lineHeight={1.5}
              mt={1.8}
            >
              {lanuage == "en"
                ? "The temple has been designed to delight and enthrall the devotees and worshipers by maintaining the dignity and divinity of the place and preserving the surrounding greenery. The ecology of the place has been maintained with great care, retaining the lush vegetation on the slopes."
                : "இந்த கோவிலை வடிவமைப்பதில், அந்த இடத்தின் கண்ணியத்தையும் தெய்வீகத்தன்மையையும் பேணுவதுடன், சுற்றிலும் உள்ள பசுமையைப் பாதுகாப்பதன் மூலம், பக்தர்கள் மற்றும் வழிபாட்டாளர்களை மகிழ்விப்பதாகவும், கவர்ந்திழுப்பதாகவும் உள்ளது. சரிவுகளில் பசுமையான தாவரங்களைத் தக்கவைத்து, இடத்தின் சூழலியல் மிகுந்த கவனத்துடன் பராமரிக்கப்பட்டு வருகிறது."}
            </Typography>
          </div>

          <div
            className="bg-white flex-col justify-center"
            style={{ paddingBlock: "26px" }}
          >
            <Content
              header={lanuage == "en" ? "விதித்தவர்" : "விதித்தவர்"}
              avater={One}
              name={
                lanuage == "en"
                  ? "Srivari Thirumalayappan"
                  : "ஸ்ரீவாரி திருமலையப்பன்"
              }
              subtitle={
                lanuage == "en"
                  ? "Emperuman Sri Venkatasalapati Swamy who resides in Etummalai"
                  : "ஏழுமலையில் குடிகொண்டிருக்கும் எம்பெருமான் ஸ்ரீ வேங்கடாசலபதி ஸ்வாமி"
              }
            />
            <div style={{ width: "90%", margin: "auto" }}>
              <svg
                width="100%"
                height="4"
                viewBox="0 0 1256 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="-1.74846e-07"
                  y1="2.00012"
                  x2="1256"
                  y2="2.00001"
                  stroke="url(#paint0_linear_1006_10243)"
                  stroke-width="4"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1006_10243"
                    x1="2.52124e-07"
                    y1="4.24184"
                    x2="0.338483"
                    y2="24.8578"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD601" stop-opacity="0" />
                    <stop offset="0.5" stop-color="#BD219B" />
                    <stop offset="1" stop-color="#FFD601" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div
              className="flex flex-wrap justify-center"
              style={{ paddingBlock: "25px" }}
            >
              <Content
                header={lanuage == "en" ? "வித்திட்டவர்" : "வித்திட்டவர்"}
                avater={Two}
                name={
                  lanuage == "en"
                    ? "Dharmaweera' Annur Shri. K. Govindaswamy Naidu"
                    : "தர்மவீரா' அன்னூர் ஸ்ரீ. கே. கோவிந்தசாமி நாயுடு"
                }
                subtitle={
                  lanuage == "en"
                    ? "K. G. Founder of the group"
                    : "கே. ஜி. குழுமத்தின் நிறுவனர்"
                }
              />
              <Content
                header={lanuage == "en" ? "விளைவித்தவர்" : "விளைவித்தவர்"}
                avater={Three}
                name={
                  lanuage == "en"
                    ? "Shri. K. G. Balakrishnan"
                    : "ஸ்ரீ. கே. ஜி. பாலகிருஷ்ணன்"
                }
                subtitle={
                  lanuage == "en"
                    ? "Chairman, K.G. Denim"
                    : "சேர்மன், கே.ஜி. டெனிம்"
                }
              />
            </div>

            <div
              className="flex flex-wrap justify-center"
              style={{ paddingBlock: "25px" }}
            >
              <Content
                header={lanuage == "en" ? "விற்பன்னர்" : "விற்பன்னர்"}
                avater={Four}
                name={
                  lanuage == "en"
                    ? "Madam Bagam Shri. Srinivasa Bhattacharya"
                    : "மாடம்பாக்கம் ஸ்ரீ. ஸ்ரீநிவாஸ பட்டாச்சாரியார்"
                }
                subtitle={
                  lanuage == "en"
                    ? "Tirumala - Tirupati Devasthan Asthan Pandithar"
                    : "திருமலை - திருப்பதி தேவஸ்தான ஆஸ்தான பண்டிதர்"
                }
              />
              <Content
                header={lanuage == "en" ? "வித்தகர்" : "வித்தகர்"}
                avater={Five}
                name={
                  lanuage == "en"
                    ? "Garudapuram Sri. Desikan"
                    : "கருடபுரம் ஸ்ரீ. தேசிகன்"
                }
                subtitle=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prayerhall;
