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

exports.post = (async (req, res) => {
  const {
    name, email, experince, message, int,
  } = req.body;
  const data = {
    name, email, experince, message, int,
  };
  async function main() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'naremanmohhilles@gmail.com', // emily email
        pass: password, // pass of emily
      },
    });
    const filePath = path.join(__dirname, '..', '..', 'public', 'html', 'book.html');

    const template = fs.readFileSync(
      filePath,
      'utf-8',
    );
    // eslint-disable-next-line camelcase
    const html_email = MUSTACHE.render(template, { username: name, useremail: email, userexperince: experince, msg: message, userint: int });

    const info = await transporter.sendMail({
      from: 'MDF user',
      to: 'naremanmohhilles@gmail.com', // emliy email
      subject: 'move dance booking',
      html: html_email,
    });
  }
  await main().catch(res.status(200).send({ msg: 'done' }));
});
