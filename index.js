import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter URL",
      name: "URL",
    },
    {
      type: "input",
      message: "Enter name for the QRCode to be saved as: ",
      name: "imageName",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const imgName = answers.imageName;

    var qr_svg = qr.image(answers.URL, { type: "png" });
    qr_svg.pipe(fs.createWriteStream(imgName + ".png"));

    console.log("QRCode created successfully.");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
