// Show Menu Bar

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');


bar.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

// AOS JS Animation

AOS.init();

// Portfolio Category Btns

const cateButtons = document.querySelectorAll('.portfolio-tab-btns li');

cateButtons.forEach(cateBtn =>{
    cateBtn.addEventListener('click',() =>{
        cateButtons.forEach(btn => btn.classList.remove('active-btn'));

        cateBtn.classList.add('active-btn');
    });
});

// Portfolio MixitUp

var mixer = mixitup('.portfolio')

// Swiper Slider

let swiper = new Swiper('.serviceSwiper',{
    slidesPreview: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    breakpoints: {
        1400:{
            slidesPreview: 3,
        },
        1200:{
            slidesPreview: 3,
        },
        900:{
            slidesPreview: 3,
        },
        500:{
            slidesPreview: 1,
        },
        0:{
            slidesPreview: 1,
        },
    }
})

// FAQ Section

const faqCols= document.querySelectorAll('.fqa-col');

faqCols.forEach(faqcol => {
    faqcol.addEventListener('click', ()=>{

        const openFaq = document.querySelector('.faq-col.show-ans');
        if(openFaq && openFaq !== faqcol){
            openFaq.classList.remove('.show-ans');
            openFaq.querySelector('.ans').classList.remove('.show-ans-text');
            const openIcon = openFaq.querySelector('.faq-head i');
            openIcon.classList.remove('ri-subtract-fill', 'active-faq-icon');
            openIcon.classList.add('ri-add-fill');
        }
        const answer = faqcol.querySelector('.ans');
        const icon = faqcol.querySelector('.faq-head i');
        const isOpen = faqcol.classList.toggle('show-ans');
        answer.classList.toggle('show-ans-text', isOpen);

        icon.classList.toggle('ri-add-fill', !isOpen);
        icon.classList.toggle('ri-subtract-fill', isOpen);
        icon.classList.toggle('active-faq-icon', isOpen);
    });
});

// Testimonials

var swipe = new Swiper('.testSwiper',{
    
    slidesPreview: 1,
    spaceBetween: 0,
    loop:true,
    autoplay:true,
})