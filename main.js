'use strict'


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

    breakpoints:{
        768:{
            enabled: false,
        },
    },
});

const blockWrapper=document.querySelector('.blockWrapper')
const openBtn=document.querySelector('.viewer__openBtn')

openBtn.addEventListener('click',()=>{
    console.log(blockWrapper.classList.contains('blockWrapper--isOpen'))
    if (blockWrapper.classList.contains('blockWrapper--isOpen')){
        blockWrapper.classList.remove('blockWrapper--isOpen')
        openBtn.textContent='Показать все'
    }else {
        blockWrapper.classList.add('blockWrapper--isOpen')
        openBtn.textContent='Скрыть'
    }
})

