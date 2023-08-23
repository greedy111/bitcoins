document.getElementById("signupButton").addEventListener("click", function() {
  
    // const firstname = document.getElementById("firstname").value;
    // const lastname = document.getElementById("lastname").value;
    const user_email = document.getElementById("email").value;
    const user_password = document.getElementById("password").value;
    // console.log(firstname);
    // console.log(lastname);
    console.log(user_email);
    console.log(user_password);

    //datbasecolumanname : text box value
    const signups= {
    //   firstname: firstname,
    //   lastname:lastname,
      email: user_email,
      password: user_password
    }
  

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8082/signups");
    xhr.setRequestHeader("Content-Type" , "application/json");
    xhr.setRequestHeader("Access-Control-Allow-Origin" , "*");

    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(signups)
        res=JSON.parse(xhr.responseText)
        for (let i = 0; i < res.length; i++) {
            if (res[i].email==user_email && res[i].password==user_password)
            {
                window.location.href='http://127.0.0.1:5500/my%20project/index.html'
                
            }
            if (res[i].email!=user_email || res[i].password!=user_password)
            {
                console.warn("invalid");
            }
            
        }
        
      }
    }

    xhr.send(JSON.stringify(signups) );
  })