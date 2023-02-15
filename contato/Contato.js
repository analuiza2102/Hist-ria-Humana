//Configuração do SMTP 
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aninhaguiiimaraes2102@gmail.com',
    pass: 'qFDgikF9ZH5WZ2a'
  }
});






const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = form.querySelector('nome').value;
  const contato = form.querySelector("contato").value;
  const mensagem = form.querySelector("mensagem").value;





const mailOptions = {
  from: 'aninhaguiiimaraes@hotmail.com',
  to: 'aninhaguiiimaraes2102@gmail.com',
  subject: 'Novo formulário de contato',
  html: `
    <p>Nome: ${nome}</p>
    <p>Contato: ${contato}</p>
    <p>Mensagem: ${mensagem}</p>
  `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});


});