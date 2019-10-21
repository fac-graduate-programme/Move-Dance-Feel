const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const MUSTACHE = require('mustache');

require('env2')('./.env')
const password = process.env.PASS;
const emailENV = process.env.EMAIL;



exports.get = (req, res) => {
  res.render('contact', {
    js: ['domContact'],
    css: 'contact',
  });
};

// eslint-disable-next-line no-unused-vars
exports.post = async (req, res) => {
  const {
    name, email, experince, message, int1, int2, int3, help1, help2, help3
  } = req.body;

  const int = [{topic: int1},{topic: int2} , {topic:int3}]
 const help = [{topic: help1},{topic: help2} , {topic:help3}]
 console.log(int)
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
        user: emailENV, // emily email
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
      to: emailENV, // emliy email
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
