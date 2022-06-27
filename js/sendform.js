const phone = document.getElementById("telefono");
const sendForm = document.querySelector(".contact-form");
const formulario = document.querySelector(".contactus");
const theName = document.getElementById("nombre").value;
const theEmail = document.getElementById ("correo").value;
const theMessage = document.getElementById ("mensaje").value;
const e = document.querySelector(".enviar");

document.querySelector(".contact-form").addEventListener("submit",submitForm);


function submitForm(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById ("correo").value;
    const message = document.getElementById ("mensaje").value;

    sendEmail (nombre, email, message);
    sendForm.reset();

}

function sendEmail (nombre, email, message){

    Email.send({
        Host: "smtp.gmail.com",
        Username: "christheadvenger@gmail.com",
        Password:  "nqnfyoecbttusith",
        To: "christheadvenger@gmail.com",
        From: "christheadvenger@gmail.com",
        Subject: `${nombre} sent you a message`,
        Body: `Name: ${nombre} <br/> Email: ${email} <br/> Message: ${message}`,
    
    
    }).then((message) => alert("mail sent sucessfully")).then (formulario.classList.remove("show"));
    }
    
    
  
    
    


