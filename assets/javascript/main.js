/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  function headerShadow() {
    const navHeader =document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Xin chào","Hola","Bonjour", "Hallo", "Ciao"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
})
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
})
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.card-about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
/* -- ABOUT SKILLS & FORM BOX -- */ 
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)





// Hàm bật/tắt popup
function toggle(event, popupId) {
  event.stopPropagation(); // Ngăn sự kiện click bong bóng lên
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');

  var popup = document.getElementById(popupId);
  popup.classList.toggle('active');

  // Reset scroll position to the top when opening popup
  if (popup.classList.contains('active')) {
      popup.scrollTop = 0; // Đặt vị trí cuộn về đầu tiên
  }
}

// Hàm kiểm tra khi click vào vùng ngoài popup
window.addEventListener('click', function(event) {
  var blur = document.getElementById('blur');
  var activePopup = document.querySelector('.popup.active');
  if (activePopup && !activePopup.contains(event.target) && event.target !== blur) {
      // Đóng popup nếu click ngoài vùng popup
      activePopup.classList.remove('active');
      blur.classList.remove('active');
  }
});








///////////////
const items = document.querySelectorAll('.item');
items.forEach((item) => {
    item.addEventListener("click", (e) => {
        const currentlyActive = document.querySelectorAll(".item.active")
        if (currentlyActive) {
            currentlyActive.forEach((active) => {
                if (active != item ) {
                    active.lastElementChild.style.maxHeight = 0 
                    active.classList.toggle("active")
                }
            });
        }

        item.classList.toggle("active")

        const elementBody = item.querySelector(".body")
        if (item.classList.contains("active")) {
            elementBody.style.maxHeight = elementBody.scrollHeight + "px"
        } else {
            elementBody.style.maxHeight = 0
        }

    })
})