

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         items: 3,
        
//     });
//   });

const feedbackSlider = $('.owl-carousel');
feedbackSlider.owlCarousel({
    // items: 1,
    loop: true,
    slideBy: 1,
    // autoWidth:true,
    // margin: 50,
    dotsEach: true,
    responsive:{
        0: {
            items: 1,
            center: true,
            // autoWidth:true,
            // margin: 100
        },
        600:{
            // items: 2,
            autoWidth: true,
            margin: 50,
            center: false,
        },
    },
});
// Go to the next item
$('.slider-feedback__btn--right').click(function() {
    feedbackSlider.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider-feedback__btn--left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    feedbackSlider.trigger('prev.owl.carousel', [300]);
})



const navIcon = document.querySelector('.nav-icon');
const pageTopWrapper = document.querySelector('.page-top__wrapper');
const delay = document.querySelector('.page-top__delay');

const navLinks = document.querySelectorAll('.nav-mobile__list a');


// создаем событие бургер меню
navIcon.addEventListener ('click', function() {
    this.classList.toggle('nav-icon--active');
    pageTopWrapper.classList.toggle('page-top__wrapper--active');
    delay.classList.toggle('page-top__delay--active');
    document.body.classList.toggle('lock');
})

navLinks.forEach(function(item){
    item.addEventListener('click', function () { 
        pageTopWrapper.classList.remove('page-top__wrapper--active');
        navIcon.classList.remove('nav-icon--active');
        delay.classList.remove('page-top__delay--active');
        document.body.classList.remove('lock');
     })
})


const footerListTitles = document.querySelectorAll('.footer__list-title');
const footerLists = document.querySelectorAll('.footer__list');

footerListTitles.forEach(function(item){
    item.addEventListener('click', ()=>{

        footerLists.forEach(item =>{
            item.classList.remove('active');
            item.previousElementSibling.classList.remove('active');
            
        })

        item.classList.add('active');
        item.nextElementSibling.classList.add('active');
        

        item.addEventListener('click', ()=>{
            if(item.classList.contains('active')){
                item.classList.remove('active');
                item.nextElementSibling.classList.remove('active');
            } else {
                item.classList.toggle('active');
                item.nextElementSibling.classList.toggle('active');
            }
        })
        console.log(item.classList.contains('active'));

        
    })
})

