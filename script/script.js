//Variáveis
let contatoMenu = document.getElementById("contatoMenu")
let servicosMenu = document.getElementById("servicosMenu")
let sobreMimMenu = document.getElementById("sobreMimMenu")
let logo = document.getElementById("#logo")

let contato = document.getElementById("contato")
let paginaInicial = document.getElementById("paginaInicial")
let servicos = document.getElementById("servicos")
let sobreMim = document.getElementById("sobreMim")

let menu = document.querySelector("#blockMenu")
let menuUl = document.querySelector("#menuSpace")
let abreMenu = document.querySelector("#btnMenuMobile")
let fechaMenu = document.querySelector("#btnMenuMobileFechar")

let texto = document.querySelector("#texto")
let footer = document.querySelector("footer")

let textoParallax1 = document.querySelector(".textoParallax1")
let textoParallax2 = document.querySelector(".textoParallax2")
let textoParallax3 = document.querySelector(".textoParallax3")
let textoParallax4 = document.querySelector(".textoParallax4")

let textoimg = document.querySelector("#textoimg")
let praCima = document.querySelector("#praCima")


//Efeito de auto-rolagem do menu
document.addEventListener("DOMContentLoaded", function() {
   const menuLinks = document.querySelectorAll('.menu-link');

   menuLinks.forEach(link => {
       link.addEventListener('click', function(event) {
           event.preventDefault(); // Previne o comportamento padrão
           const targetId = this.getAttribute('href');
           const targetElement = document.querySelector(targetId);

           if (targetElement) {
               targetElement.scrollIntoView({ behavior: 'smooth' });
           }
       })
   })
})

//Menu mobile
abreMenu.addEventListener('click', () => {
   menuUl.style.display = "block"
   menu.style.height = "35vh"
   fechaMenu.style.display="block"
   abreMenu.style.display="none"
})

fechaMenu.addEventListener('click', () => {
   menuUl.style.display = "none"
   menu.style.height = "7vh"
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
})

contatoMenu.addEventListener('click', () => {
   menuUl.style.display = "none"
   menu.style.height = "7vh"
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
})

servicosMenu.addEventListener('click', () => {
   menuUl.style.display = "none"
   menu.style.height = "7vh"
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
})

sobreMimMenu.addEventListener('click', () => {
   menuUl.style.display = "none"
   menu.style.height = "7vh"
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
})

texto.addEventListener('click', () => {
   menuUl.style.display = "none"
   menu.style.height = "7vh"
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
})

footer.addEventListener('click', () => {
   menuUl.style.display = "none"
   menu.style.height = "7vh"
   fechaMenu.style.display="none"
   abreMenu.style.display="block"
})


//slider
 setInterval(()=> {
   if(window.getComputedStyle(textoParallax1).display == "block"){
      textoParallax1.style.display = "none"
      textoParallax2.style.display = "block"
      textoParallax3.style.display = "none"
      textoParallax4.style.display = "none"
   }else if(window.getComputedStyle(textoParallax2).display == "block"){
      textoParallax1.style.display = "none"
      textoParallax2.style.display = "none"
      textoParallax3.style.display = "block"
      textoParallax4.style.display = "none"
   }else if(window.getComputedStyle(textoParallax3).display == "block"){
      textoParallax1.style.display = "none"
      textoParallax2.style.display = "none"
      textoParallax3.style.display = "none"
      textoParallax4.style.display = "block"
   }else if(window.getComputedStyle(textoParallax4).display == "block"){
      textoParallax1.style.display = "block"
      textoParallax2.style.display = "none"
      textoParallax3.style.display = "none"
      textoParallax4.style.display = "none"
   }
 }, 12000)

//Envia email com ajax
document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("formContato").addEventListener("submit", function(e){
      document.getElementById("status").innerHTML = "Aguarde..."
      e.preventDefault();

      let formData = new FormData(this);

      fetch("PHPMailer-master/envio.php", {
         method: "POST",
         body: formData
      }).then(response => response.text())
      .then(data => {
         //console.log(data)
         document.getElementById("status").innerHTML = "E-mail enviado com sucesso!"
      })
   })
})


