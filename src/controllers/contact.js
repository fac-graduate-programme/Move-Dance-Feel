const nodemailer = require('nodemailer');
const path = require('path');
require('env2')('./.env')
const password = process.env.pass;

const fs = require('fs');
const MUSTACHE = require('mustache');

exports.get = (req, res) => {
  res.render('contact', {
    js: ['domContact'],
    css: 'contact',
  });
};

// eslint-disable-next-line no-unused-vars
exports.post = async (req, res) => {
  const {
    name, email, experince, message, int, help
  } = req.body;

  const data = {
    username: name,
    useremail: email,
    userexperince: experince,
    msg: message,
    userint: int,
    userhelp: help,
  }

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
      'contact.html',
    );

    const template = fs.readFileSync(filePath, 'utf-8');
    // eslint-disable-next-line camelcase
    const html_email = MUSTACHE.render(template, data);

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
  await main().catch(
    (e) => console.log(e)
  );
};