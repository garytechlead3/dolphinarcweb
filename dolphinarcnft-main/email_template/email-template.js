export const emailTemplate = (
  email,
  vice,
  viceDescription,
  main,
  mainDescription
) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dolphin Arc NFT</title>
    <style>
      html {
        font-size: 10px;
      }
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }
      body {
        font-family: "Poppins", sans-serif;
      }
      .helloHeading {
        font-size: 36px;
        text-align: left;
        margin-left: 20px;
        color: white;

      }
      .container {
        padding: 70px 0px;
        height: auto;
        width: 768px;
        background-image: url("https://res.cloudinary.com/dxnkrmzlp/image/upload/v1654012977/FYUcWS_dfhscl.png");
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0 auto;
      }
      .header img {
        height: auto;
        width: 200px;
        margin-left: 30px;
      }
      .header div {
        margin-top: 20px;
        margin-bottom: 50px;
        text-align: center;
      }
      .content {
        margin: 10px 0px 10px 20px;
      }
      .content div {
        margin-top: 8px;
        text-align: center;
        font-size: 18px !important;
      }
      .footer {
        margin-top: 80px;
      }
      .btn {
        border: 1px solid black;
        text-align: center;
        font-size: 18px;
        padding: 1rem 7rem;
        cursor: pointer;
        font-size: 18px !important;
      }
      .credential-sec {
        width: 100%;
        padding: 1rem 2rem;
        margin-top: 1rem;
        background-color: aliceblue;
      }
      .credential-sec h6 {
        font-size: 18px;
        margin-left: 2rem;
      }
      .credential-sec p {
        font-size: 18px;
        margin-left: 2rem;
        color: blue;
      }
      .leftFont18 {
        text-align: left;
        font-size: 18px;
    color: white;
       
      }
      .centerFont20 {
        text-align: center;
        font-size: 20px;
    color: white;
       
      }
      .centerFont18 {
        text-align: center;
        font-size: 18px;
    color: white;
        
      }
      .centerFont40 {
        text-align: center;
        font-size: 40px;
        /* color: rgb(209, 138, 182); */
        background: #7598ec;
        background: linear-gradient(to right, #7598ec 19%, #fca9c7 78%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .warnings {
        margin: 40px 0px 10px 20px;
      }
      .emailTag {
        text-align: center;
        font-size: 18px;
        /* color: black; */
        text-decoration: none;
        display: block;
    color: white;
      }
      .marginLeft {
        margin-left: 20px;
      }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="main-container">
      <div class="container">
        <h1 class="centerFont40">Here Is Your Metaverse House</h1>
        <div class="header">
          <img
            style="display: block; margin: 16px auto"
            src="https://res.cloudinary.com/dxnkrmzlp/image/upload/v1654012781/NfUQsT_h4nz0n.webp"
          />
          <h1 class="helloHeading">Hello ${email}!</h1>
        </div>
        <div class="marginLeft">
          <div class="leftFont18">Your two elements are:</div>
          <div class="leftFont18"><b>MAIN:</b></div>
          <div class="leftFont18">
            <b>${main}: </b> ${mainDescription}

          </div>

          <div class="leftFont18"><b>VICE:</b></div>

          <div class="leftFont18">
            <b>${vice}: </b> ${viceDescription}

          </div>
        </div>
        <div class="warnings">
          <div class="leftFont18">Thanks</div>
          <div class="leftFont18">Dolphin Arc NTF</div>
        </div>
        <div class="footer">
          <div class="centerFont20">
            <b>Need more help ? Email Us</b>
          </div>
          <a class="emailTag" href="mailto:info@dolphin.io">
            info@dolphin.io
          </a>
          <div class="centerFont18">
            2021 All Rights Reserved &copy; Dolphin Arc NTF
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
          `;
};
