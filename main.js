'use strict'

const blockWrapper=document.querySelector('.blockWrapper')
const openBtn=document.querySelector('.viewer__openBtn')

const isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
if(!isMobile) {
    blockWrapper.classList.add('blockWrapper--isDesktop')
}


const swiper=new Swiper(".swiper",{
    wrapperClass: 'swiper-wrapper', //пока так, нужно переписать css?
    slideClass: 'swiper-slide',     //пока так, нужно переписать css?

    pagination:{                    //нумерация страниц
        el: '.swiper-pagination',

        type: 'bullets',
        bulletClass:'swiper-pagination-bullet',
        bulletActiveClass:'swiper-pagination-bullet-active',

        clickable:true,
    },

    slidesPerView: 'auto',          //сколько слайдов в контейнере
    loop: true,                     //зацикленность слайдов

    mousewheel: true,
    keyboard: true,

    enabled:isMobile,

    // breakpoints:{
    //     768:{
    //         enabled: false,
    //     },
    // },
});

openBtn.addEventListener('click',()=>{
    console.log(blockWrapper.classList.contains('blockWrapper--isOpen'))
    if (blockWrapper.classList.contains('blockWrapper--isOpen')){
        blockWrapper.classList.remove('blockWrapper--isOpen')
    }else {
        blockWrapper.classList.add('blockWrapper--isOpen')
    }
})
