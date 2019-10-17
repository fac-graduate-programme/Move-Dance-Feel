const nodemailer = require('nodemailer');
const path = require('path');
const password = process.env.pass;
const fs = require('fs');
const MUSTACHE = require('mustache');
require('env2')('./.env')


exports.get = (req, res) => {
    res.render('volunteer', {
        js: ['domVolunteer'],
        css: 'volunteer',
    });
};


exports.post = (async (req, res) => {
    const { name, email, help, experience, message } = req.body;
    console.log(req.body)
    const formData = { name, email, help, experience, message };

    async function main() {
        const transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: 'dalmano@outlook.com',
                pass: password,
            },
        });
        const filepath = path.join(__dirname, '..', '..', 'public', 'html', 'volunteer.html');

        const template = fs.readFileSync(
            filepath,
            'utf-8',
        );
        const htmlEmail = MUSTACHE.render(template, { username: name, useremail: email, userhelp: help, userexperience: experience, usermessage: message });    

        const info = await transporter.sendMail({
            from: 'MDF user',
            to: 'dalmano@outlook.com',
            subject: 'MDF Volunteer',
            html: htmlEmail,
        });
    }
    await main().catch((error) => 
        alert('An error has occurred'));
    
})