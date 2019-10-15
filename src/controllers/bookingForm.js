const nodemailer = require('nodemailer');
const fs = require('fs');
const MUSTACHE = require('mustache');

exports.get = (req, res) => {
  res.render('booking', {
    js: ['domBoking'],
    css: 'booking',
  });
};


exports.post = (async (req, res) => {
  const {
    name, email, experince, message, int,
  } = req.body;
  const data = {
    name, email, experince, message, int,
  };
  async function main() {
    console.log(1111111111, data)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'naremanmohhilles@gmail.com', // emly email
        pass: '471995na', // pass of emly
      },
    });

    const template = fs.readFileSync(
      '/home/nareman/Desktop/mdf/Move-Dance-Feel/public/html/book.html',
      'utf-8',
    );
    // eslint-disable-next-line camelcase
    const html_email = MUSTACHE.render(template, { username: name, useremail: email, userexperince: experince, msg: message, userint: int });

    const info = await transporter.sendMail({
      from: 'MDF user', // sender address
      to: 'naremanmohhilles@gmail.com', // C
      subject: 'move dance booking', // Subject line
      html: html_email,
    });
  }
  await main().catch((e) => console.log(1111111, e));
});
