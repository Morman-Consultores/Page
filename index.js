window.fbAsyncInit = function() {
  FB.init({
    appId            : 945218059305165,
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v8.0'
  });
};

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


  if(name === "" || email === "" || message === ""){

    document.getElementById("response").innerHTML = "¡Porfavor, llene todos los campos!";
    document.getElementById("response").style.color = "#E85656"
  } else {
    document.getElementById('loader').style.display = "block"
    console.log(name, email, message)
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
              document.getElementById("response").innerHTML = "";
              document.getElementById('loader').style.display = "none"
              document.getElementById("response").style.color = "#343434"
              document.getElementById("response").innerHTML = data;
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
          }
      });
  }
}

navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
   registration.unregister()
 } })

const share = () => {
  FB.ui({
    display: 'popup',
    method: 'share',
    href: 'https://developers.facebook.com/docs/',
  }, function(response){});
}
