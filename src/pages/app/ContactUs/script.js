const fields = document.getElementsByClassName('field')
const sendBtn = document.querySelector('.content button')

const name = fields[0].value
const email = fields[1].value
const msg = fields[2].value

sendBtn.onclick = () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "fernandohfilter10@gmail.com",
    Password: "AA1E251C1F900F173909AF0ADE036C4EFBA3",
    To: 'fernando.filter@universo.univates.br',
    From: "fernandohfilter10@gmail.com",
    Subject: "LUNA - Fale Conosco",
    Body: ['<div id="someId">',
      `Mensagem enviada por ${name}:<br />`,
      `${msg}<br />`,
      `E-mail de contato: ${email}`,
      '</div>'
    ].join('\n'),
  }).then(
    message => alert(message)
  );
}
