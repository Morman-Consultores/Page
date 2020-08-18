let closedNav = true;
let hamburger = document.getElementById("hamburger")


function openNav() {
    hamburger.classList.toggle("change");
    if (closedNav){
        document.getElementById("myNav").style.width = "100%";
        closedNav = false
    } else if (!closedNav){
        document.getElementById("myNav").style.width = "0%";
        closedNav = true
    }
}

function scrollFunction() {
    let header = document.getElementById("header");
    let bar = document.getElementById("iconBar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      header.style.backgroundColor = "rgba(60, 63, 94, 0.8)";
      bar.style.backgroundColor = "rgba(60, 63, 94, 0.8)";
    } else {
      header.style.backgroundColor = "transparent";
      bar.style.backgroundColor = "transparent";
    }
  }

window.onscroll = function() {scrollFunction()};



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("overlayGray").classList.toggle("show");
    document.getElementById("response").innerHTML = ""
  }

const Submit = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          name: name,
          email: email,
          message: message
      })
  };
  fetch('https://mormanapi.herokuapp.com/submit', requestOptions)
      .then(response => response.json())
      .then(data => {
          if(data){
              console.log(data)
              document.getElementById("response").innerHTML = data;
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
          }
      });
}