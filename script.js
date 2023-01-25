/*    CONTACT FORM     */

const fname = document.getElementById("fname");

if (fname.value.trim().length === 0) {
  alert("First name missing");
}
const lname = document.getElementById("lname");

if (lname.value.trim().length === 0) {
  alert("Last name missing");
}

const email = document.getElementById("email");
if (email.value.trim().length === 0) {
  alert("Email missing");
} else if (email.value.indexOf("@") < 0) {
  alert("Invalid email address");
}
const vemail = document.getElementById("vemail");
if (vemail.value.trim().length === 0) {
  alert("Email missing");
} else if (vemail.value.indexOf("@") < 0) {
  alert("Invalid email address");
}
const address = document.getElementById("address");

if (address.value.trim().length === 0) {
  alert("Address is missing");
}
