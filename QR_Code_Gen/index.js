import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";
inquirer
  .prompt([
    {"message":"Enter The link",
    "name":"URL"
}
  ])
  .then((answers) => {
    console.log(answers["URL"])
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });