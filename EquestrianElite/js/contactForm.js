var form = document.getElementById("contact_form"); 
// console.log(form); 
 
form.addEventListener("submit", handleFormSubmit) 
 
function handleFormSubmit(event) { 
 // prevent broswer refresh the page when a form is submitted
  event.preventDefault(); 

  // get values (data) from form elements
  var name = form.elements['name'].value; 
  var email = form.elements['email'].value; 
  var phoneNumber = form.elements['phoneNum'].value; 
  var subject = form.elements['subject'].value; 
  var message = form.elements['message'].value; 
 
 
  // check form inputs is empty or not
  if (name == ""  || email == "" || phoneNumber == "" || subject == "" || message == "") { 
    alert("Please fill the form")
  } else { 
 
    // %0D%0A creates a new line in the email body
    var body =`Hello, my name is Name: ${name} %0D%0A Email: ${email} %0D%0A Phone Number: ${phoneNumber} %0D%0A %0D%0A Message: ${message}`; 

    var mailToLink = `mailto:equestrian.elite27@gmail.com?subject=${subject}&body=${body}`;

    // console.log("mailToLink", mailToLink)
 
    window.location.href = mailToLink; 

    alert("Thank you for contacting us! Send Message Via Email App")
    form.reset(); 
  } 
}