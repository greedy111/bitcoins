document.getElementById("signupButton").addEventListener("click", function() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);

    //datbasecolumanname : text box value
    const signups= {
      firstname: firstname,
      lastname:lastname,
      email: email,
      password: password
    }
    console.log(signups)

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8082/signups");
    xhr.setRequestHeader("Content-Type" , "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText)
      }
    }

    xhr.send( JSON.stringify(signups) );
    window.location.href="http://127.0.0.1:5500/my%20project/index.html"
  })