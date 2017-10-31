//business logic
function Contact(first, last, email, addresses) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//user interface logic
$(document).ready(function() {
  $("form#contact-info").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedEmail = $("input#email").val();
    var inputtedAddy = $("input#address").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail, inputtedAddy);


    $("ul#contact-list").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first").text(newContact.firstName);
      $(".last").text(newContact.lastName);
      $(".emailaddr").text(newContact.email);
    });

    $("input#first-name").val("");
    $("input#last-name").val("");
    $("input#email").val("");

  });
});
