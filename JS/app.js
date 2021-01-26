$(document).ready(function(){
  /*BURGER CAROUSEL*/
  $('.centerburger').slick({
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    infinite: true,
    useTransform: false,
    prevArrow: $('.prevburger'),
    nextArrow: $('.nextburger'),
    speed: 300,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  }) .on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
});
  /*END OF BURGER CAROUSEL*/

  /*SALADE CAROUSEL*/
  $('.centersalade').slick({
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    infinite: true,
    useTransform: false,
    prevArrow: $('.prevsalade'),
    nextArrow: $('.nextsalade'),
    speed: 300,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  }) .on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
});
  /*END OF SALADE CAROUSEL*/

  /*PIZZA CAROUSEL*/
  $('.centerpizza').slick({
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    infinite: true,
    useTransform: false,
    prevArrow: $('.prevpizza'),
    nextArrow: $('.nextpizza'),
    speed: 300,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  })
  .on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    if (currentSlide !== nextSlide) {
        document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
        });
    }
});
  /*END OF PIZZA CAROUSEL*/
  
 
})


let sectiontitleburger = document.getElementById("section-title-burger");
let sectiontitlesalade = document.getElementById("section-title-salade");
let sectiontitlepizza = document.getElementById("section-title-pizza");
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
  }
  
  // media query change
  function WidthChange(mq) {
  if (mq.matches) {
    sectiontitleburger.innerHTML = "--- NOS BURGERS ---";
    sectiontitlesalade.innerHTML = "--- NOS SALADES ---";
    sectiontitlepizza.innerHTML = "--- NOS PIZZAS ---";
  } else {
    sectiontitleburger.innerHTML = "NOS BURGERS";
    sectiontitlesalade.innerHTML = "NOS SALADES";
    sectiontitlepizza.innerHTML = "NOS SALADES";
  }
  
  }