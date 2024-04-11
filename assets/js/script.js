"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElem);

/**
 * Add to cart courses button
 */

document.addEventListener("DOMContentLoaded", () => {
  // Get all add to cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  // Get cart counter element
  const cartCounter = document.querySelector(".btn-badge");

  // Initialize cart count from localStorage or default to 0
  let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
  // Update cart counter text
  cartCounter.textContent = cartCount;

  // Function to add course to cart
  const addToCart = () => {
    // Increment cart count
    cartCount++;
    // Update cart counter text
    cartCounter.textContent = cartCount;
    // Store cart count in localStorage
    localStorage.setItem("cartCount", cartCount);
  };

  // Function to show toast message
  const showToast = (message) => {
    // Create a new div element
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = message;

    // Append the toast to the toast container
    const toastContainer = document.getElementById("toast-container");
    toastContainer.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  // Add event listener to each add to cart button
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Execute addToCart function
      addToCart();
      // Extract course name from the card
      const courseName = button
        .closest(".course-card")
        .querySelector(".card-title").innerText;
      // Show toast message
      showToast(`Course "${courseName}" added to cart!`);
    });
  });
});

/* Contact Form */
const inputs = document.querySelectorAll(".input-fields");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/* FAQ's page */
$(document).ready(function () {
  $(".question").click(function () {
    $(this).toggleClass("open").next(".answer").slideToggle();
  });

});


$(document).ready(function() {
  $('#description').show();

  $('.tab-btn').click(function() {
      $('.tab-content').hide();
      $('.tab-btn').removeClass('active');
      var tabId = $(this).data('tab');
      $('#' + tabId).show();
      $(this).addClass('active');
  });

  $('.add-to-cart').click(function() {
      alert('Course added to cart!');
  });

  //
  $('#start-date').change(function() {
    var selectedOption = $(this).val();
    $('.admission-date').text('Admissions - ' + selectedOption);
  });
  
  $('.toggle-details').click(function() {
    var button = $(this);
    var details = button.next('.details');
    var otherDetails = $('.details').not(details);

    if (details.is(':visible')) {
        details.removeClass('bounceIn').addClass('bounceOut');
        setTimeout(function() {
            details.hide().removeClass('bounceOut');
            button.text('Show Details');
        }, 100);
    } else {
        otherDetails.removeClass('bounceIn').addClass('bounceOut');
        setTimeout(function() {
            otherDetails.hide().removeClass('bounceOut');
            details.show().addClass('bounceIn');
            $('.toggle-details').not(button).text('Show Details');
            button.text('Hide Details');
        }, 100);
    }
  });

});

document.addEventListener("DOMContentLoaded", function() {
  function initCarousel(carouselSelector) {
    const carousel = document.querySelector(carouselSelector);
    const slides = carousel.querySelectorAll(".industry-slide, .testimonial-slide");

    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      slides[index].style.display = "block";
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    showSlide(currentIndex);

    setInterval(nextSlide, 5000);
  }

  initCarousel(".industry-carousel");
  initCarousel(".testimonial-carousel");
});

