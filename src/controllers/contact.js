const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const MUSTACHE = require('mustache');

require('env2')('./.env');

const password = process.env.PASS;
const emailENV = process.env.EMAIL;

exports.get = (req, res) => {
  res.render('contact', {
    js: ['domContact'],
    css: 'contact',
    title: 'Move Dance Feel: Contact Us, Email',
  });
};

// eslint-disable-next-line no-unused-vars
exports.post = async (req, res) => {
  const {
    name,
    email,
    experince,
    message,
    int1,
    int2,
    int3,
    help1,
    help2,
    help3,
  } = req.body;

  //create array for email mesg template
  const int = [{ topic: int1 }, { topic: int2 }, { topic: int3 }];
  const help = [{ topic: help1 }, { topic: help2 }, { topic: help3 }];

  const data = {
    username: name,
    useremail: email,
    userexperince: experince,
    msg: message,
    userint: int,
    userhelp: help,
  };

  async function main() {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailENV, 
        pass: password, 
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

    // read and populate email mesg template
    const template = fs.readFileSync(filePath, 'utf-8');
    // eslint-disable-next-line camelcase
    const html_email = MUSTACHE.render(template, data);

    await transporter.sendMail(
      {
        from: 'MDF user',
        to: emailENV, // Change to MDF email
        subject: 'move dance booking',
        html: html_email,

      },
      // eslint-disable-next-line
      (error, info) => {
        if (error) {
          res.status(500).send({ msg: 'not done' });
        } else {
          res.status(200).send({ msg: 'done' });
        }
      },
    );
  }
  await main().catch(
    // eslint-disable-next-line
    e => console.log(e)
  );
};
