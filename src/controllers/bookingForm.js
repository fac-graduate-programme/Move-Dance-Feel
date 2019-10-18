const nodemailer = require('nodemailer');
const path = require('path');
require('env2')('./.env')
const password = process.env.pass;

const fs = require('fs');
const MUSTACHE = require('mustache');

exports.get = (req, res) => {
  res.render('booking', {
    js: ['domBoking'],
    css: 'booking',
  });
};

// eslint-disable-next-line no-unused-vars
exports.post = async (req, res) => {
  const {
    name, email, experince, message, int,
  } = req.body;
  // const data = {
  //   name, email, experince, message, int,
  // };
  async function main() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'naremanmohhilles@gmail.com', // emily email
        pass: password, // pass of emily
      },
    });
    const filePath = path.join(
      __dirname,
      '..',
      '..',
      'public',
      'html',
      'book.html',
    );

    const template = fs.readFileSync(filePath, 'utf-8');
    // eslint-disable-next-line camelcase
    const html_email = MUSTACHE.render(template, {
      username: name,
      useremail: email,
      userexperince: experince,
      msg: message,
      userint: int,
    });

    await transporter.sendMail({
      from: 'MDF user',
      to: 'naremanmohhilles@gmail.com', // emliy email
      subject: 'move dance booking',
      html: html_email,
    }, function (error, info) {
      if (error) {
        res.status(500).send({ msg: 'not done' });
      } else {
        res.status(200).send({ msg: 'done' });
      };
    });
  }
<<<<<<< HEAD
  await main().catch(
    (e) => console.log(e)
  );
});
=======
  // eslint-disable-next-line no-console
  await main().catch((e) => console.log(1111111, e));
};
>>>>>>> 521630411a3612c1f011bc2205492cde95d1e4fe
