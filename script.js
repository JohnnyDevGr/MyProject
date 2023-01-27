/*    CONTACT FORM     */

function validateForm() {
  {
    testName();
    testLname();
    testVEmail();
    testEmail();
    testphone();
  }
  function testName() {
    let regName = /^[A-Za-z]+$/;
    let fname = document.getElementById("fname").value;
    if (regName.test(fname)) {
      return true;
    } else {
      alert("Invalid first name");
      return false;
    }
  }

  function testLname() {
    let regName = /^[A-Za-z]+$/;
    let lname = document.getElementById("lname").value;
    if (regName.test(lname)) {
      return true;
    } else {
      alert("Invalid last name");
      return false;
    }
  }

  function testEmail() {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email").value;
    if (emailRegex.test(email)) {
      return true;
    } else {
      alert("Invalid email address");
      return false;
    }
  }
  function testVEmail() {
    let vemailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let vemail = document.getElementById("vemail").value;
    if (vemailRegex.test(vemail)) {
      return true;
    } else {
      alert("Invalid email address");
      return false;
    }
  }
  function testphone() {
    let phoneRegex = /^[0-9]+$/;
    let phone = document.getElementById("phone").value;
    if (phoneRegex.test(phone)) {
      return true;
    } else {
      alert("Invalid phone number");
      return false;
    }
  }

  let address = document.getElementById("address").value;

  if (address.trim().length === 0) {
    alert("Address is missing");
    return false;
  }
}

/*            SLIDESHOW            */
