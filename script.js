const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section")
const links = document.querySelectorAll("nav a")

window.onscroll = () =>{
    
    navbar.classList.toggle("sticky", window.scrollY > 100)

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if(top >=  offset && top < offset + height){
            links.forEach(link =>{
                link.classList.remove("active");
                document.querySelector("nav a[href*="+ id +"]").classList.add("active")
            })
        }
    }); 
};

var nav = document.querySelector("nav");;

window.addEventListener("scroll", () =>{
    nav.classList.toggle("nav-scroll", window.scrollY > 0)
});

var back = document.querySelector(".back");

window.addEventListener("scroll", () =>{
    back.classList.toggle("back-scroll", window.scrollY >= 300)
});


const menubar = document.querySelector("#menubar");
const menu = document.querySelector(".menu");

menubar.addEventListener("click", () =>{
    menubar.classList.toggle("fa-close");
    menu.classList.toggle("appear")
})



const submit = document.getElementById('submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   submit.value = 'Sending...';

   const serviceID = 'service_isnszda';
   const templateID = 'template_0z1xjxf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      submit.value = 'Send';
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("number").value = "";
      document.getElementById("message").value = "";
    });
});
