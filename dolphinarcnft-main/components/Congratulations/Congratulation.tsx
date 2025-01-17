import styled from "styled-components";
import Header from "../Header/Header";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { main, vice } from "../../utils/constants";
import { emailSender } from "../../pages/api/email.sender";
import { emailTemplate } from "../../email_template/email-template";
import { useRouter } from "next/router";
import { saveAsJpeg } from "save-html-as-image";

let ScreenCapture;
const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  background: url("/congratulation_bg.png") no-repeat center;
  background-size: cover;
  @media screen and (max-width: 800px) {
    height: auto;
  }
`;

const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  max-width: 144rem;
  padding: 3rem;
  margin: 0 auto;
  margin-bottom: 14rem;
  div {
    margin-top: 2rem;
    h1 {
      color: white;
      font-size: 4rem;
      font-weight: 500;
      font-family: "cocogoose";
      text-align: center;
      margin-bottom: 0rem;
      @media screen and (max-width: 800px) {
        font-size: 3.5rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 3rem;
      }
    }
    h2 {
      background: #7598ec;
      background: linear-gradient(to right, #7598ec 19%, #fca9c7 78%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 4rem;
      font-weight: 800;
      font-family: "cocogoose";
      text-align: center;
      margin-bottom: 0rem;
      @media screen and (max-width: 800px) {
        font-size: 3.5rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 3rem;
      }
    }
  }

  .line {
    position: absolute;
    left: 0;
    bottom: 30px;
  }
`;

const ElementContainer = styled.div`
  div {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    h1 {
      position: relative;
      margin-left: 8rem;
      margin-bottom: 0rem;
      display: flex;
      justify-content: center;
      font-size: 4.5rem;
      @media screen and (max-width: 821px) {
        font-size: 4rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 3rem;
      }
      .underline {
        width: 10rem;
        height: 0.4rem;
        background-color: red;
        transform: translate(-400px, 50px);
        margin-top: 0.2rem;
        background: rgb(117, 152, 236);
        background: linear-gradient(
          69deg,
          rgba(117, 152, 236, 0.4125000341933649) 0%,
          rgba(117, 152, 236, 0.9279061966583508) 19%,
          rgba(117, 152, 236, 1) 36%,
          rgba(252, 169, 199, 0.7878501742493873) 68%
        );
        @media screen and (max-width: 820px) {
          width: 14rem;
          transform: translate(-260px, 50px);
        }
        @media screen and (max-width: 600px) {
          width: 14rem;
          transform: translate(-200px, 50px);
        }
      }
      .underline_1 {
        width: 10rem;
        height: 0.4rem;
        background-color: red;
        transform: translate(-330px, 50px);
        background: rgb(117, 152, 236);
        background: linear-gradient(
          69deg,
          rgba(117, 152, 236, 0.4125000341933649) 0%,
          rgba(117, 152, 236, 0.9279061966583508) 19%,
          rgba(117, 152, 236, 1) 36%,
          rgba(252, 169, 199, 0.7878501742493873) 68%
        );
        margin-top: 0.2rem;
        @media screen and (max-width: 820px) {
          width: 14rem;
          transform: translate(-190px, 50px);
        }
        @media screen and (max-width: 600px) {
          width: 14rem;
          transform: translate(-200px, 50px);
        }
      }
      .sphere_img {
      }
      p {
        position: absolute;
        top: 120px;
        font-size: 4rem;
        margin-bottom: 0rem;
        font-weight: 800;
        background: linear-gradient(
          90deg,
          #ffffff 36.78%,
          #e7c2c2 55.91%,
          #ffffff 73.03%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-family: "cocogoose";
        text-align: center;
        @media screen and (max-width: 1024px) {
          top: 110px;
        }
        @media screen and (max-width: 820px) {
          top: 60px;
          left: 105px;
          font-size: 2.2rem;
        }
        @media screen and (max-width: 600px) {
          top: 45px;
          font-size: 2rem;
        }
      }
    }
  }
`;
// const CustomizedMetaVerseContainer = styled.div`
//   div {
//     margin-top: 2rem;
//     h1 {
//       text-align: left;
//       color: white;
//       font-size: 4rem;
//       margin-left: 6rem;
//       @media screen and (max-width: 600px) {
//         font-size: 3.5rem;
//       }
//     }
//     .divider {
//       display: flex;
//       justify-content: space-around;
//       @media screen and (max-width: 600px) {
//         flex-direction: column;
//       }
//       #left {
//         h3 {
//           position: relative;
//           /* width: 50%; */
//           display: flex;
//           margin: 0rem 3rem;
//           display: flex;
//           text-align: left;
//           flex-direction: column;
//           background: #7598ec;
//           background: linear-gradient(to right, #7598ec 19%, #fca9c7 78%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           @media screen and (max-width: 600px) {
//             font-size: 2.6rem;
//           }
//           .card_img {
//             img {
//               width: 100%;
//               border-radius: 20px;
//               border: 2px solid #eecafc !important;
//             }
//           }
//         }
//       }
//       #right {
//         transform: translateY(100px);

//         h3 {
//           position: relative;
//           /* width: 50%; */
//           display: flex;
//           margin: 0rem 3rem;
//           display: flex;
//           text-align: left;
//           flex-direction: column;
//           background: #7598ec;
//           background: linear-gradient(to right, #7598ec 19%, #fca9c7 78%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           @media screen and (max-width: 600px) {
//             font-size: 2.6rem;
//           }
//           .card_img {
//             img {
//               width: 100%;
//               border: 2px solid #fccaf1 !important;
//               border-radius: 20px;
//             }
//           }
//         }
//       }
//     }
//   }
// `;
const MainElementContainer = styled.div`
  position: relative;
  #main_heading {
    margin: 2rem 0rem;
    text-align: left;
    color: white;
    font-size: 4rem;
    margin-left: 5rem;
    width: 50%;
    @media screen and (max-width: 1023px) {
      font-size: 3.2rem;
      width: 80%;
    }
    @media screen and (max-width: 600px) {
      font-size: 3.2rem;
      width: 100%;
      margin: 0rem;
      margin-left: 0rem;
    }
  }
  #main_element_heading {
    background: #7598ec;
    background: linear-gradient(to right, #7598ec 1%, #fca9c7 10%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4rem;
    font-weight: 800;
    font-family: "cocogoose";
    text-align: left;
    margin-left: 5rem;
    margin-bottom: 0rem;
    @media screen and (max-width: 600px) {
      font-size: 2.6rem;
      margin-left: 0rem;
    }
  }
  #main_element_description {
    font-size: 1.8rem;
    color: #ffffff;
    font-family: "cocogoose";
    padding: 1rem 8rem;
    @media screen and (max-width: 600px) {
      font-size: 1.4rem;
      padding: 1rem;
    }
  }
  #main_element_img_section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center !important;
    justify-content: center;
    margin: 4rem auto;
    @media screen and (max-width: 600px) {
      margin: 2rem auto;
    }
    div {
      display: flex;
      flex-direction: column;
      align-item: center;
      width: 80rem;
      height: 45rem;
      margin: 2rem 0rem;
      @media (max-width: 1023px) {
        width: 48rem;
        height: 26rem;
        margin: 1rem 0rem;
      }
      @media (max-width: 600px) {
        width: 32rem;
        height: 20rem;
        margin: 1rem 0rem;
      }
    }
    .img {
      border-radius: 20px;
      border: 2px solid #eecafc !important;
    }
  }
  .line {
    position: absolute;
    left: 0;
    top: 30px;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;
const DownloadButton = styled.button`
  display: flex;
  justify-content: center;
  margin: auto;
  transform: translateY(-16rem);
  padding: 1rem;
  font-size: 1.6rem;
  width: 20%;
  background-color: #eecafc;
  color: black;
  border: none;
  border-radius: 0.8rem;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
interface CongratulationProps {
  month: string | string[];
  year: string | string[];
  email: string | string[];

  // children: React.ReactNode;
}
interface IMain {
  group: string;
  year: number[];
  main: string;
  imageUrl: string[];
  description: string;
}
interface IVice {
  month: number[];
  vice: string;
  imageUrl: string[];
  description: string;
}

const Congratulations: React.FC<CongratulationProps> = ({
  month,
  year,
  email,
}) => {
  const [generatedMain, setGeneratedMain] = useState<IMain>();
  const [generatedVice, setGeneratedVice] = useState<IVice>();

  const router = useRouter();
  const calcMain = (year) => {
    for (let group of main) {
      if (group?.year.includes(parseInt(year))) return group;
    }
  };

  const calcVice = (month) => {
    for (let obj of vice) {
      if (obj?.month.includes(parseInt(month))) return obj;
    }
  };

  useEffect(() => {
    setGeneratedVice(calcVice(month));
    setGeneratedMain(calcMain(year));
  }, [year, month]);
  useEffect(() => {
    console.log(router.query);
  }, []);
  useEffect(() => {
    if (!generatedMain || !generatedVice || !email) return;
    const sendEmail = async () => {
      const res = await emailSender({
        to: email,
        subject: "Dolphin Arc NFT",
        body: `${emailTemplate(
          email,
          generatedVice?.vice,
          generatedVice?.description,
          generatedMain?.main,
          generatedMain?.description
        )}`,
      });
    };
    sendEmail();
  }, [generatedMain, generatedVice]);
  if (typeof window !== "undefined") {
    ScreenCapture = document.getElementById("congratulation");
  }
  const handleDownload = () => {
    // saveAsJpeg(ScreenCapture);
    saveAsJpeg(ScreenCapture, { filename: "Result", printDate: true });
  };
  return (
    <StyledContainer id="congratulation">
      <div className="hide-when-downloading">
        <Header />
      </div>
      <IntroContainer>
        <div>
          <h2>Congratulations!</h2>

          <h1>You are formed from Elements:</h1>
        </div>
        <ElementContainer>
          <div>
            <h1>
              Main:
              <Image
                className="sphere_img"
                src="//Sphere_2.png"
                width="253"
                height="253"
              />
              <p>{generatedMain?.main}</p>
              <div className="underline"></div>
            </h1>
            <h1>
              Vice:
              <Image
                className="sphere_img"
                src="//Sphere_2.png"
                width="193"
                height="193"
                objectFit="contain"
              />
              <p>{generatedVice?.vice}</p>
              <div className="underline_1"></div>
            </h1>
          </div>
        </ElementContainer>
        <MainElementContainer>
          <h1 id="main_heading">This is your customized metaverse house:</h1>
          <h2 id="main_element_heading">Main:</h2>
          <p id="main_element_description">{generatedMain?.description}</p>
          <div id="main_element_img_section">
            {generatedMain?.imageUrl.map((imgUrl, i) => {
              return (
                <div>
                  <Image
                    key={i}
                    className="img"
                    src={"//" + imgUrl}
                    width={701}
                    height={393}
                    objectFit="fill"
                  />
                </div>
              );
            })}
          </div>
          <div className="line">
            <Image
              className="vertical_line"
              src="//vertical_line.png"
              width="50"
              height="400"
              objectFit="contain"
            />
          </div>
        </MainElementContainer>
        <MainElementContainer>
          <h2 id="main_element_heading">Vice:</h2>
          <p id="main_element_description">{generatedVice?.description}</p>
          <div id="main_element_img_section">
            {generatedVice?.imageUrl.map((imgUrl, i) => {
              return (
                <div>
                  <Image
                    key={i}
                    className="img"
                    src={"//" + imgUrl}
                    width={701}
                    height={393}
                    objectFit="fill"
                  />
                </div>
              );
            })}
          </div>
          <div className="line">
            <Image
              className="vertical_line"
              src="//vertical_line.png"
              width="50"
              height="400"
              objectFit="contain"
            />
          </div>
        </MainElementContainer>
        {/* <CustomizedMetaVerseContainer>
          <div>
            <h1>
              This is your customized <br /> metaverse house:
            </h1>
            <div className="divider">
              <div id="left">
                <h3>
                  Main:
                  <div className="card_img">
                    <Image
                      className="img"
                      src={"//" + generatedMain?.imageUrl}
                      width="430"
                      height="300"
                      objectFit="fill"
                    />
                  </div>
                </h3>
              </div>
              <div id="right">
                <h3>
                  Vice:
                  <div className="card_img">
                    <Image
                      className="img"
                      src={"//" + generatedVice?.imageUrl}
                      width="430"
                      height="300"
                      objectFit="fill"
                    />
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </CustomizedMetaVerseContainer> */}
        {/* <div className="line">
          <Image
            className="vertical_line"
            src="//vertical_line.png"
            width="50"
            height="400"
            objectFit="contain"
          />
        </div> */}
      </IntroContainer>
      <DownloadButton onClick={handleDownload}>Download Result</DownloadButton>
    </StyledContainer>
  );
};

export default Congratulations;
