function sendEmail(){
    Email.send({
       Host : "smtp.gmail.com",
       Username : "romashggggg@gmail.com",
       Password : "pokhara!@#",
       To : 'productturbo@gmail.com',
       From : document.getElementById('email').value,
       Subject : "new enquiry",
       Body : "Name: "+ document.getElementById("name").value
        +"<br> Email: " + document.getElementById("email").value
         +"<br> Phone: " + document.getElementById("phone").value
           +"<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert('smessage sent succesfully')
    );
 }
