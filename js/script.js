// feed page blog slider

$(".fp-blog-card-container").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// footer accordion
if ($(window).width() <= 768) {
  var acc = document.getElementsByClassName("accordion-header");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the accordionBody */
      this.classList.toggle("current");

      /* Toggle between hiding and showing the active accordionBody */
      var accordionBody = this.nextElementSibling;
      if (accordionBody.style.display === "block") {
        accordionBody.style.display = "none";
      } else {
        accordionBody.style.display = "block";
      }
    });
  }
}

// Home page blog slider
if ($(window).width() <= 768) {
  
  $(".blog-card-container.home-blog").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

//  access process page slider

$(".ap-know-more-cards").slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


//psychological conditions page

$(".get-assessed-cards").slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//Career page

$(".how-grow-slider").slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:768,
      settings: {
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".career-testimonial-container").slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// Fee and Insurance page
var acc = document.getElementsByClassName("insu-accordion-header");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the accordionBody */
      this.classList.toggle("current");

      /* Toggle between hiding and showing the active accordionBody */
      var accordionBody = this.nextElementSibling;
      if (accordionBody.style.display === "block") {
        accordionBody.style.display = "none";
      } else {
        accordionBody.style.display = "block";
      }
    });
}
$(".fee-cards-container").slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:768,
      settings: {
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// About us page
$(".credentials").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".about-experts").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow:3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint:768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});