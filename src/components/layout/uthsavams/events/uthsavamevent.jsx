import React from "react";
import CustomizeAutocomplete from "../../../autocomplete/customizeAutocomplete";
import "./uthsavamevent.css";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Background from "../../../../assets/images/svg/garudasevai.svg";
import One from "../../../../assets/images/svg/uthsavam_1.svg";
import Two from "../../../../assets/images/svg/uthsavam_2.svg";
import Three from "../../../../assets/images/svg/uthsavam_3.svg";
import Four from "../../../../assets/images/svg/uthsavam_4.svg";
import Five from "../../../../assets/images/svg/uthsavam_5.svg";
import { useTranslation } from "react-i18next";

const UthsavamEvent = () => {
  const { i18n } = useTranslation();
  const lanuage = i18n.language;

  const updateDataEn = [
    {
      title: "Brahmotsavam ",
      // subtitle: "(புரட்டாசி)",
      img: One,
      content:
        "Brahmotsavam is a celebration for 11 days, Two days before the festival, a ritual known as Koil Alvar Thirumanjanam is conducted",
    },
    {
      title: "Pavithrotsavam ",
      // subtitle: "(புரட்டாசி)",
      img: Two,
      content:
        "Pavithrotsavam, a purification ceremony held annually in August, aims to atone for any sins or mistakes made during daily worship and religious rites in the temple. The ritual is performed with elaborate observance.",
    },
    {
      title: "Vasanthotsavam",
      // subtitle: "(புரட்டாசி)",
      img: Three,
      content:
        "Vasanthotsavam is a colorful festival held in spring . This lasts for three days starting in Mid-April on in the first fortnight of May. On the secheduled day, the function starts at 2 p.m in the afternoon.",
    },
    {
      title: "Teppotsavam",
      // subtitle: "(புரட்டாசி)",
      img: Four,
      content:
        "The Teppotsavam, a five-day annual float festival held in February-March, features processions of deities like Krishna, Rama, Balaji, Sridevi, and Bhudevi on a decorated boat in the Swami Pushkarini. Hymns and music accompany the celebration as the deities are honored.",
    },
    {
      title: "Dolotsavam",
      // subtitle: "(புரட்டாசி)",
      img: Five,
      content:
        "Dolotsavam is when Sri Malayappaswami (utsava murti), Sridevi and Bhudevi are seated in an unjal (cradle) in the Aina Mahal (Hall of Mirrors) and swung to the accompaniment of vedic chanting.",
    },
  ];
  const updateData = [
    {
      title: "பிரம்மோத்சவம்",
      // subtitle: "(புரட்டாசி)",
      img: One,
      content:
        "பிரம்மோற்சவம் - பிரம்மோற்சவம் என்பது 11 நாட்கள் கொண்டாட்டமாகும், திருவிழாவிற்கு இரண்டு நாட்களுக்கு முன்பு, கோயில் ஆழ்வார் திருமஞ்சனம் எனப்படும் சடங்கு நடத்தப்படுகிறது.",
    },
    {
      title: "பவித்ரோத்ஸவம்",
      // subtitle: "(புரட்டாசி)",
      img: Two,
      content:
        "பவித்ரோத்ஸவம் - பவித்ரோத்ஸவம், ஆண்டுதோறும் ஆகஸ்ட் மாதம் நடைபெறும் சுத்திகரிப்பு விழா, கோவிலில் தினசரி வழிபாடு மற்றும் மத சடங்குகளின் போது ஏதேனும் பாவங்கள் அல்லது தவறுகளை நிவர்த்தி செய்வதை நோக்கமாகக் கொண்டுள்ளது. சடங்கு விரிவான அனுசரிப்புடன் செய்யப்படுகிறது",
    },
    {
      title: "வசந்தோத்ஸவம்",
      // subtitle: "(புரட்டாசி)",
      img: Three,
      content:
        "வசந்தோத்ஸவம் என்பது வசந்த காலத்தில் நடைபெறும் வண்ணமயமான திருவிழா. இது மே மாதத்தின் முதல் பதினைந்து நாட்களில் ஏப்ரல் நடுப்பகுதியில் தொடங்கி மூன்று நாட்களுக்கு நீடிக்கும். திட்டமிடப்பட்ட நாளில், விழா பிற்பகல் 2 மணிக்கு தொடங்குகிறது",
    },
    {
      title: "தெப்போத்சவம்",
      // subtitle: "(புரட்டாசி)",
      img: Four,
      content:
        "விஷ்ணுவுக்கும் பத்மாவதி தேவிக்கும் இடையிலான தெய்வீக திருமணத்தின் கொண்டாட்டம். இது கல்யாண மண்டபத்தில் நடத்தப்படுகிறது மற்றும் அதன் சடங்குகள் இந்து திருமணங்களில் பின்பற்றப்படுவதைப் போன்றது. இறைவன் உற்சவ மூர்த்தி மற்றும் அவரது இரு நச்சினார்க்கினியர்களான ஸ்ரீதேவி மற்றும் பூதேவி ஆகியோருக்கு ஹோமத்தைச் சுற்றி திருமணம் நடத்தப்படுகிறது.",
    },
    {
      title: "தெப்போத்ஸவம்",
      // subtitle: "(புரட்டாசி)",
      img: Five,
      content:
        "தெப்போத்ஸவம், பிப்ரவரி-மார்ச் மாதங்களில் நடைபெறும் ஐந்து நாள் வருடாந்திர பவனி திருவிழா, சுவாமி புஷ்கரிணியில் அலங்கரிக்கப்பட்ட படகில் கிருஷ்ணர், ராமர், பாலாஜி, ஸ்ரீதேவி மற்றும் பூதேவி போன்ற தெய்வங்களின் ஊர்வலம் இடம்பெறுகிறது. தெய்வங்கள் கௌரவிக்கப்படுகையில், பாடல்களும் இசையும் கொண்டாட்டத்துடன் வருகின்றன.",
    },
  ];

  const data = lanuage == "en" ? updateDataEn : updateData;

  return (
    <div className="uthsavam">
      <div className="uthsavam_container">
        {data.map((item, idx) => (
          <div className="uthsavam_event">
            <div className="uthsavam_event-content">
              <div class="octagon">
                <Avatar
                  variant="sqare"
                  src={item.img}
                  sx={{ width: "120px", height: "auto" }}
                  alt="banner"
                />
              </div>
              <Typography
                fontWeight={600}
                mt={7}
                sx={{
                  background:
                    "linear-gradient(90deg, #052DFF 17.07%, #FA1414 85.78%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
                variant="h4"
                align="center"
              >
                {item.title}
              </Typography>
              {/* <Typography
                fontSize={12}
                fontWeight={400}
                color={"#000000"}
                lineHeight={0.8}
                align="center"
              >
                {item.subtitle}
              </Typography> */}
              <Typography
                fontSize={12}
                fontWeight={400}
                color={"#000000"}
                mt={2}
                lineHeight={1.3}
                align="center"
                sx={{
                  height: 94,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {item.content}
              </Typography>
              <div className="w-full flex justify-center">
                {" "}
                <Button
                  size="small"
                  sx={{
                    background:
                      "linear-gradient(90deg, #E4B614 0%, #BD219B 100%), linear-gradient(180deg, #E6C44B 0%, #BE229B 98.61%)",
                    color: "white",
                    px: 1,
                    py: 0.4,
                    borderRadius: "12px",
                    mt: 1.2,
                    fontSize: 12,
                  }}
                >
                  படங்கள்
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img className="uthsavam-bg" src={Background} />
    </div>
  );
};

export default UthsavamEvent;
