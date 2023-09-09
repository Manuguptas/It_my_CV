// =======creating a portfolio tabbed component========
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");
const allhide = document.querySelector('.allhide');

p_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

if(!p_btn_clicked.classList.contains("p-btn")) return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
  img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));

});


//====================== swiper or slide image==============
// ========= swiper js code =========
 new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// ================= scroll to top ==================
let scrollTop_style = document.querySelector('.scrollTop-style');
let scrollstyle = document.querySelector('.scroll-top');
const navbar = document.querySelector('.navbar');

scrollTop_style.addEventListener('click', function () {
  navbar.scrollIntoView({ behavior: "smooth" })
  body.style = "overflow-x: hidden;"
});


//  ====================== counter number =======================
const counternum = document.querySelectorAll(".counter-numbers");
const speed = 200;

counternum.forEach((curElem) => {
    let updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialnum = parseInt(curElem.innerText);
    // console.log(initialnum);
    const incrementnum = Math.trunc(targetNumber / speed);

    function countertime(){
    if(initialnum < targetNumber) {
      curElem.innerText = `${initialnum + incrementnum}+`;
      setTimeout(updateNumber,10);
    }
  }
  setTimeout(countertime, 100)
  };

  updateNumber();

});


// =================mobile responsive navber component========== 
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerElem = document.querySelector('.header');

mobile_nav.addEventListener('click',function(){
headerElem.classList.toggle('active');
})

// ====================== swiper responsive====================

const myjsmedia = (widthsize) => {
  if(widthsize.matches){
    new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 50,
  })
  }
else{
  new Swiper(".mySwiper",{
    slidesPerView: 2,
    spaceBetween: 50,
  })
}
}

const widthsize = window.matchMedia("(max-width:650px)");
myjsmedia(widthsize);
widthsize.addEventListener('change',myjsmedia);
 








