const burgerBtn = document.querySelector("header .fa-bars")
const overlayElement = document.querySelector('.overlay')
const baglamaButonu = document.querySelector('.fa-xmark')

const bburgerBtn = document.querySelector(".navbar .fa-bars")
const ooverlayElement = document.querySelector(".our-work-overlay")
const bbaglamaButonu = document.querySelector(".our-work-overlay .fa-xmark")
const saxlayiciDiv = document.querySelector('.what-right')

burgerBtn.addEventListener('click', function () {
    overlayElement.classList.add('active')
})

baglamaButonu.addEventListener('click', function () {
    overlayElement.classList.remove('active')
})



bburgerBtn.addEventListener('click', function () {
    ooverlayElement.classList.add("activee")
})

bbaglamaButonu.addEventListener('click', function () {
    ooverlayElement.classList.remove("activee")
})


window.addEventListener('load', melumatlariGetir)
async function melumatlariGetir() {
    const unvan = "whatWeDo.json"
    try {
        const gelenCavab = await fetch(unvan)
        const frontEndData = await gelenCavab.json()
        console.log(frontEndData)
        for (let i = 0; i < frontEndData.length; i++) {
            saxlayiciDiv.innerHTML+= 

                ` <div data-aos="flip-right" class="mini-card"><a class="logo" href=""><img src="${frontEndData[i].logo}" alt=""/></a>
         <h1>${frontEndData[i].name}</h1>
         <p> ${frontEndData[i].body} </p>
         <a  class="readmore"  href="">Read more</a>
     </div>`
        }
        
    }
    catch (e) {
        console.log(e.message)
    }
}

    var swiper = new Swiper(".mySwiper", {

      spaceBetween: 50,
    });

    AOS.init({
        duration:1000
    })