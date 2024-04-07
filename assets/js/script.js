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
