// const nodemailer = require('nodemailer');
exports.get = (req, res) => {
  res.render('booking', {
    js: ['domBoking'],
    css: 'booking',
  });
};
// exports.post = async (req, res) => {
//   async function main() {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'arabhala7@gmail.com',
//         pass: '0595201999hala',
//       },
//     });
//     const template = fs.readFileSync(
//       './client/public/booking.html',
//       'utf-8',
//     );
//     const html_email = MUSTACHE.render(template, { msg: req.body.message });
//     console.log(req.body.name, req.body.email, req.body.message, '******');

//     const info = await transporter.sendMail({
//       from: `${req.body.name}`, // sender address
//       to: 'samaraljazzar@gmail.com', // C
//       subject: 'move dance contact', // Subject line
//       html: html_email,
//     });
//   }

//   await main().catch((e) => console.log({ e }));
// };
