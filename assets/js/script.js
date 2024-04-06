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

document.addEventListener("DOMContentLoaded", function () {
  // Get all add to cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  // Get cart counter element
  const cartCounter = document.querySelector(".btn-badge");

  // Initialize cart counter
  let cartCount = 0;

  // Function to add course to cart
  function addToCart() {
    // Increment cart count
    cartCount++;
    // Update cart counter text
    cartCounter.textContent = cartCount;
  }

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

/**
 * cart page
 */

const coursesInCart = [
  { title: "Course 1", description: "Description of course 1" },
  { title: "Course 2", description: "Description of course 2" },
  // Add more courses as needed
];

// Function to dynamically add courses to the list
const addCoursesToPage = () => {
  const courseList = document.getElementById("courseList");

  // Clear existing content
  courseList.innerHTML = "";

  // Loop through courses and create list items
  coursesInCart.forEach((course) => {
    const div = document.createElement("div");
    div.classList.add("category-card");
    div.innerHTML = `
      <div class="card-icon">
          <img src="./assets/images/category-1.svg" width="40" height="40" loading="lazy" alt="${course.title}" class="img" />
      </div>
      <h3 class="h3">
          <a href="#" class="card-title">${course.title}</a>
      </h3>
      <p class="card-text">${course.description}</p>
      <span class="card-badge"></span>
    `;
    courseList.appendChild(div);
  });

  // Update total courses in cart
  const cartTotal = document.getElementById("cartTotal");
  cartTotal.textContent = `Total Courses in Cart: ${coursesInCart.length}`;
};

// Call the function to add courses when the page loads
window.addEventListener("DOMContentLoaded", addCoursesToPage);
