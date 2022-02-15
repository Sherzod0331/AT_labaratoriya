/**
* Template Name: Vesperr - v4.7.0
* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

var swiper = new Swiper(".mySwiper", {
  //slidesPerView: "auto",
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 70,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
  
    200: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    560: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    715: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 70,
    },
  },
});


var swiper = new Swiper(".mySwiper_service", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  centeredSlides: true,
  spaceBetween: 70,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});

function Close() {
  document.querySelector("#tarif_services_veb").style.display = "none"
  document.querySelector("#tarif_services_baza").style.display = "none"
  document.querySelector("#tarif_services_ilova").style.display = "none"
  document.querySelector("#tarif_services_vr").style.display = "none"
  // document.querySelector(".close").style.display = "none"
}

function tarif_veb() {
  document.querySelector("#tarif_services_veb").style.display = "flex"
  // document.querySelector(".close").style.display = "flex"
}

function tarif_baza() {
  document.querySelector("#tarif_services_baza").style.display = "flex"
  // document.querySelector(".close").style.display = "flex"
}

function tarif_ilova() {
  document.querySelector("#tarif_services_ilova").style.display = "flex"
  // document.querySelector(".close").style.display = "flex"
}

function tarif_vr() {
  document.querySelector("#tarif_services_vr").style.display = "flex"
  // document.querySelector("..close").style.display = "flex"
}

function set_input_tarif_1_web(self,src){
  const name = document.querySelector("#input_tarif_web")
  name.value = self
  let item = document.querySelector(`.${src}`)
  item.style.background = "red"
  //console.log(item)

    switch (self) {
      case 1:
      document.querySelector(".src_1_web").style.background = "red"      
      document.querySelector(".first_web").style.opacity = "1"      
      document.querySelector(".second_web").style.opacity = "0.6"     
      document.querySelector(".third_web").style.opacity = "0.6"              
      document.querySelector(".liner_web").style.width = "0"  
      document.querySelector(".src_2_web").style.background = "#fff"
      document.querySelector(".src_3_web").style.background = "#fff"    
        break;

      case 2:
      document.querySelector(".src_1_web").style.background = "red"           
      document.querySelector(".src_2_web").style.background = "red"       
      document.querySelector(".first_web").style.opacity = "0.6"      
      document.querySelector(".second_web").style.opacity = "1"     
      document.querySelector(".third_web").style.opacity = "0.6"   
      document.querySelector(".liner_web").style.width = "50%"  
      document.querySelector(".src_3_web").style.background = "#fff"            
        break;
        
      case 3:
      document.querySelector(".src_1_web").style.background = "red"          
      document.querySelector(".src_2_web").style.background = "red"          
      document.querySelector(".src_3_web").style.background = "red"      
      document.querySelector(".first_web").style.opacity = "0.6"      
      document.querySelector(".second_web").style.opacity = "0.6"     
      document.querySelector(".third_web").style.opacity = "1"   
      document.querySelector(".liner_web").style.width = "100%"            
        break;

      default:
      document.querySelector("body").style.display = "none"
        break;
    }

}

function set_input_tarif_1_diz(self,src){
  const name = document.querySelector("#input_tarif_diz")
  name.value = self
  let item = document.querySelector(`.${src}`)
  item.style.background = "red"
  //console.log(item)

    switch (self) {
      case 1:
      document.querySelector(".src_1_diz").style.background = "red"      
      document.querySelector(".first_diz").style.opacity = "1"      
      document.querySelector(".second_diz").style.opacity = "0.6"     
      document.querySelector(".third_diz").style.opacity = "0.6"              
      document.querySelector(".liner_diz").style.width = "0"  
      document.querySelector(".src_2_diz").style.background = "#fff"
      document.querySelector(".src_3_diz").style.background = "#fff"    
        break;

      case 2:
      document.querySelector(".src_1_diz").style.background = "red"           
      document.querySelector(".src_2_diz").style.background = "red"       
      document.querySelector(".first_diz").style.opacity = "0.6"      
      document.querySelector(".second_diz").style.opacity = "1"     
      document.querySelector(".third_diz").style.opacity = "0.6"   
      document.querySelector(".liner_diz").style.width = "50%"  
      document.querySelector(".src_3_diz").style.background = "#fff"            
        break;
        
      case 3:
      document.querySelector(".src_1_diz").style.background = "red"          
      document.querySelector(".src_2_diz").style.background = "red"          
      document.querySelector(".src_3_diz").style.background = "red"      
      document.querySelector(".first_diz").style.opacity = "0.6"      
      document.querySelector(".second_diz").style.opacity = "0.6"     
      document.querySelector(".third_diz").style.opacity = "1"   
      document.querySelector(".liner_diz").style.width = "100%"            
        break;

      default:
      document.querySelector("body").style.display = "none"
        break;
    }

}

function set_input_tarif_1_mob(self,src){
  const name = document.querySelector("#input_tarif_mob")
  name.value = self
  let item = document.querySelector(`.${src}`)
  item.style.background = "red"
  //console.log(item)

    switch (self) {
      case 1:
      document.querySelector(".src_1_mob").style.background = "red"      
      document.querySelector(".first_mob").style.opacity = "1"        
      document.querySelector(".third_mob").style.opacity = "0.6"              
      document.querySelector(".liner_mob").style.width = "0"  
      document.querySelector(".src_3_mob").style.background = "#fff"    
        break;
        
      case 3:
      document.querySelector(".src_1_mob").style.background = "red"        
      document.querySelector(".src_3_mob").style.background = "red"      
      document.querySelector(".first_mob").style.opacity = "0.6"   
      document.querySelector(".third_mob").style.opacity = "1"   
      document.querySelector(".liner_mob").style.width = "100%"    
        break;

      default:
      document.querySelector("body").style.display = "none"
        break;
    }

}

function set_input_tarif_1_bosh(self,src){
  const name = document.querySelector("#input_tarif_bosh")
  name.value = self
  let item = document.querySelector(`.${src}`)
  item.style.background = "red"
  //console.log(item)

    switch (self) {
      case 1:
      document.querySelector(".src_1_bosh").style.background = "red"      
      document.querySelector(".first_bosh").style.opacity = "1"      
      document.querySelector(".second_bosh").style.opacity = "0.6"     
      document.querySelector(".third_bosh").style.opacity = "0.6"              
      document.querySelector(".liner_bosh").style.width = "0"  
      document.querySelector(".src_2_bosh").style.background = "#fff"
      document.querySelector(".src_3_bosh").style.background = "#fff"    
        break;

      case 2:
      document.querySelector(".src_1_bosh").style.background = "red"           
      document.querySelector(".src_2_bosh").style.background = "red"       
      document.querySelector(".first_bosh").style.opacity = "0.6"      
      document.querySelector(".second_bosh").style.opacity = "1"     
      document.querySelector(".third_bosh").style.opacity = "0.6"   
      document.querySelector(".liner_bosh").style.width = "50%"  
      document.querySelector(".src_3_bosh").style.background = "#fff"            
        break;
        
      case 3:
      document.querySelector(".src_1_bosh").style.background = "red"          
      document.querySelector(".src_2_bosh").style.background = "red"          
      document.querySelector(".src_3_bosh").style.background = "red"      
      document.querySelector(".first_bosh").style.opacity = "0.6"      
      document.querySelector(".second_bosh").style.opacity = "0.6"     
      document.querySelector(".third_bosh").style.opacity = "1"   
      document.querySelector(".liner_bosh").style.width = "100%"            
        break;

      default:
      document.querySelector("body").style.display = "none"
        break;
    }

}

function set_input_tarif_1_til(self,src){
  const name = document.querySelector("#input_tarif_til")
  name.value = self
  let item = document.querySelector(`.${src}`)
  item.style.background = "red"
  //console.log(item)

    switch (self) {
      case 1:
      document.querySelector(".src_1_til").style.background = "red"      
      document.querySelector(".first_til").style.opacity = "1"      
      document.querySelector(".second_til").style.opacity = "0.6"     
      document.querySelector(".third_til").style.opacity = "0.6"              
      document.querySelector(".liner_til").style.width = "0"  
      document.querySelector(".src_2_til").style.background = "#fff"
      document.querySelector(".src_3_til").style.background = "#fff"    
        break;

      case 2:
      document.querySelector(".src_1_til").style.background = "red"           
      document.querySelector(".src_2_til").style.background = "red"       
      document.querySelector(".first_til").style.opacity = "0.6"      
      document.querySelector(".second_til").style.opacity = "1"     
      document.querySelector(".third_til").style.opacity = "0.6"   
      document.querySelector(".liner_til").style.width = "50%"  
      document.querySelector(".src_3_til").style.background = "#fff"            
        break;
        
      case 3:
      document.querySelector(".src_1_til").style.background = "red"          
      document.querySelector(".src_2_til").style.background = "red"          
      document.querySelector(".src_3_til").style.background = "red"      
      document.querySelector(".first_til").style.opacity = "0.6"      
      document.querySelector(".second_til").style.opacity = "0.6"     
      document.querySelector(".third_til").style.opacity = "1"   
      document.querySelector(".liner_til").style.width = "100%"            
        break;

      default:
      document.querySelector("body").style.display = "none"
        break;
    }

}

function set_input_tarif_1_mag(self,src){
  const name = document.querySelector("#input_tarif_mag")
  name.value = self
  let item = document.querySelector(`.${src}`)
  item.style.background = "red"
  //console.log(item)

    switch (self) {
      case 1:
      document.querySelector(".src_1_mag").style.background = "red"      
      document.querySelector(".first_mag").style.opacity = "1"      
      document.querySelector(".second_mag").style.opacity = "0.6"     
      document.querySelector(".third_mag").style.opacity = "0.6"              
      document.querySelector(".liner_mag").style.width = "0"  
      document.querySelector(".src_2_mag").style.background = "#fff"
      document.querySelector(".src_3_mag").style.background = "#fff"    
        break;

      case 2:
      document.querySelector(".src_1_mag").style.background = "red"           
      document.querySelector(".src_2_mag").style.background = "red"       
      document.querySelector(".first_mag").style.opacity = "0.6"      
      document.querySelector(".second_mag").style.opacity = "1"     
      document.querySelector(".third_mag").style.opacity = "0.6"   
      document.querySelector(".liner_mag").style.width = "50%"  
      document.querySelector(".src_3_mag").style.background = "#fff"            
        break;
        
      case 3:
      document.querySelector(".src_1_mag").style.background = "red"          
      document.querySelector(".src_2_mag").style.background = "red"          
      document.querySelector(".src_3_mag").style.background = "red"      
      document.querySelector(".first_mag").style.opacity = "0.6"      
      document.querySelector(".second_mag").style.opacity = "0.6"     
      document.querySelector(".third_mag").style.opacity = "1"   
      document.querySelector(".liner_mag").style.width = "100%"            
        break;

      default:
      document.querySelector("body").style.display = "none"
        break;
    }

}

function set_input_tarif_1_mat(self,src){
  const name = document.querySelector("#input_tarif_mat")
  name.value = self
  let item = document.querySelector(`.${src}`)
  item.style.background = "red"
  //console.log(item)

    switch (self) {
      case 1:
      document.querySelector(".src_1_mat").style.background = "red"      
      document.querySelector(".first_mat").style.opacity = "1"      
      document.querySelector(".second_mat").style.opacity = "0.6"     
      document.querySelector(".third_mat").style.opacity = "0.6"              
      document.querySelector(".liner_mat").style.width = "0"  
      document.querySelector(".src_2_mat").style.background = "#fff"
      document.querySelector(".src_3_mat").style.background = "#fff"    
        break;

      case 2:
      document.querySelector(".src_1_mat").style.background = "red"           
      document.querySelector(".src_2_mat").style.background = "red"       
      document.querySelector(".first_mat").style.opacity = "0.6"      
      document.querySelector(".second_mat").style.opacity = "1"     
      document.querySelector(".third_mat").style.opacity = "0.6"   
      document.querySelector(".liner_mat").style.width = "50%"  
      document.querySelector(".src_3_mat").style.background = "#fff"            
        break;
        
      case 3:
      document.querySelector(".src_1_mat").style.background = "red"          
      document.querySelector(".src_2_mat").style.background = "red"          
      document.querySelector(".src_3_mat").style.background = "red"      
      document.querySelector(".first_mat").style.opacity = "0.6"      
      document.querySelector(".second_mat").style.opacity = "0.6"     
      document.querySelector(".third_mat").style.opacity = "1"   
      document.querySelector(".liner_mat").style.width = "100%"            
        break;

      default:
      document.querySelector("body").style.display = "none"
        break;
    }

}

function set_input_tarif_1_seo(self,src){
  const name = document.querySelector("#input_tarif_seo")
  name.value = self
  let item = document.querySelector(`.${src}`)
  item.style.background = "red"
  //console.log(item)

    switch (self) {
      case 1:
      document.querySelector(".src_1_seo").style.background = "red"      
      document.querySelector(".first_seo").style.opacity = "1"      
      document.querySelector(".second_seo").style.opacity = "0.6"     
      document.querySelector(".third_seo").style.opacity = "0.6"              
      document.querySelector(".liner_seo").style.width = "0"  
      document.querySelector(".src_2_seo").style.background = "#fff"
      document.querySelector(".src_3_seo").style.background = "#fff"    
        break;

      case 2:
      document.querySelector(".src_1_seo").style.background = "red"           
      document.querySelector(".src_2_seo").style.background = "red"       
      document.querySelector(".first_seo").style.opacity = "0.6"      
      document.querySelector(".second_seo").style.opacity = "1"     
      document.querySelector(".third_seo").style.opacity = "0.6"   
      document.querySelector(".liner_seo").style.width = "50%"  
      document.querySelector(".src_3_seo").style.background = "#fff"            
        break;
        
      case 3:
      document.querySelector(".src_1_seo").style.background = "red"          
      document.querySelector(".src_2_seo").style.background = "red"          
      document.querySelector(".src_3_seo").style.background = "red"      
      document.querySelector(".first_seo").style.opacity = "0.6"      
      document.querySelector(".second_seo").style.opacity = "0.6"     
      document.querySelector(".third_seo").style.opacity = "1"   
      document.querySelector(".liner_seo").style.width = "100%"            
        break;

      default:
      document.querySelector("body").style.display = "none"
        break;
    }

}