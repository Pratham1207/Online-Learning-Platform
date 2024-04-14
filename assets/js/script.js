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

// Course data object containing details for each course
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');

  const courses = {
    1: {
        id: 1,
        name: "Build Responsive Real-World Websites with HTML and CSS",
        startDate: "May 2024",
        description: "This course is designed for beginners to learn how to build responsive and interactive websites using HTML and CSS. You will acquire fundamental skills in web development and design.",
        details: [
            { label: "Code", value: "007" },
            { label: "Length", value: "6 Months" },
            { label: "Start", value: "May 2024" },
            { label: "Credential", value: "Ontario College Graduate Certificate" }
        ],
        admissionRequirements: [
            "No prerequisites are required for this beginner-level course.",
            "Basic understanding of computer operations is recommended."
        ],
        courseRequirements: [
            "Access to a computer with internet access.",
            "Enthusiasm to learn and practice web development concepts."
        ],
        weeks: [
            {
                weekNumber: 1,
                title: "Introduction to HTML and CSS",
                description: "Welcome to the course! In this first week, you'll learn the basics of HTML and CSS for building responsive websites.",
                topics: ["HTML fundamentals", "CSS styling techniques"]
            },
            {
                weekNumber: 2,
                title: "Responsive Design and Layouts",
                description: "Discover how to create responsive layouts and design principles for various screen sizes.",
                topics: ["CSS media queries", "Flexbox and Grid"]
            }
        ]
    },
    2: {
        id: 2,
        name: "Java Programming Masterclass for Software Developers",
        startDate: "September 2024",
        description: "This advanced course is tailored for software developers looking to master Java programming concepts and techniques.",
        details: [
            { label: "Code", value: "008" },
            { label: "Length", value: "8 Weeks" },
            { label: "Start", value: "September 2024" },
            { label: "Credential", value: "Certificate of Completion" }
        ],
        admissionRequirements: [
            "Basic knowledge of programming concepts.",
            "Familiarity with object-oriented programming."
        ],
        courseRequirements: [
            "Java Development Kit (JDK) installed.",
            "Integrated Development Environment (IDE) for Java."
        ],
        weeks: [
            {
                weekNumber: 1,
                title: "Java Basics and Syntax",
                description: "Introduction to Java programming language fundamentals and syntax.",
                topics: ["Variables and data types", "Control flow statements"]
            },
            {
                weekNumber: 2,
                title: "Object-Oriented Programming (OOP)",
                description: "Understanding and applying OOP principles in Java.",
                topics: ["Classes and objects", "Inheritance and polymorphism"]
            }
        ]
    },
    3: {
        id: 3,
        name: "The Complete Camtasia Course for Content Creators",
        startDate: "October 2024",
        description: "Learn how to create professional-quality videos and screen recordings using Camtasia.",
        details: [
            { label: "Code", value: "009" },
            { label: "Length", value: "4 Weeks" },
            { label: "Start", value: "October 2024" },
            { label: "Credential", value: "Certificate of Completion" }
        ],
        admissionRequirements: [
            "No prior experience required.",
            "Interest in video creation and editing."
        ],
        courseRequirements: [
            "Computer with Camtasia software installed.",
            "Microphone and basic video editing skills."
        ],
        weeks: [
            {
                weekNumber: 1,
                title: "Introduction to Camtasia",
                description: "Getting started with Camtasia and understanding its features.",
                topics: ["Recording screen", "Editing and adding effects"]
            },
            {
                weekNumber: 2,
                title: "Advanced Editing Techniques",
                description: "Learn advanced video editing techniques using Camtasia.",
                topics: ["Annotations and transitions", "Audio and video enhancements"]
            }
        ]
    },
    4: {
        id: 4,
        name: "Python for Data Science and Machine Learning",
        startDate: "November 2024",
        description: "Explore Python programming for data analysis, machine learning, and artificial intelligence applications.",
        details: [
            { label: "Code", value: "010" },
            { label: "Length", value: "10 Weeks" },
            { label: "Start", value: "November 2024" },
            { label: "Credential", value: "Certificate of Completion" }
        ],
        admissionRequirements: [
            "Basic knowledge of programming concepts.",
            "Familiarity with mathematics and statistics."
        ],
        courseRequirements: [
            "Python installed on your computer.",
            "Understanding of Jupyter Notebook."
        ],
        weeks: [
            {
                weekNumber: 1,
                title: "Python Basics",
                description: "Introduction to Python programming language and its applications.",
                topics: ["Variables and data types", "Control flow statements"]
            },
            {
                weekNumber: 2,
                title: "Data Analysis with Pandas",
                description: "Using Pandas library for data manipulation and analysis.",
                topics: ["Dataframes and series", "Data cleaning and transformation"]
            }
        ]
    },
    5: {
        id: 5,
        name: "Digital Marketing Fundamentals",
        startDate: "December 2024",
        description: "Learn essential concepts and strategies for digital marketing and online advertising.",
        details: [
            { label: "Code", value: "011" },
            { label: "Length", value: "6 Weeks" },
            { label: "Start", value: "December 2024" },
            { label: "Credential", value: "Certificate of Completion" }
        ],
        admissionRequirements: [
            "No prior experience required.",
            "Interest in marketing and advertising."
        ],
        courseRequirements: [
            "Access to a computer with internet access.",
            "Basic knowledge of social media platforms."
        ],
        weeks: [
            {
                weekNumber: 1,
                title: "Introduction to Digital Marketing",
                description: "Understanding digital marketing landscape and key concepts.",
                topics: ["SEO and SEM", "Content marketing strategies"]
            },
            {
                weekNumber: 2,
                title: "Social Media Marketing",
                description: "Using social media platforms for marketing and engagement.",
                topics: ["Facebook Ads", "Instagram marketing"]
            }
        ]
    },
    6: {
        id: 6,
        name: "Introduction to Machine Learning",
        startDate: "January 2025",
        description: "Get started with machine learning algorithms and applications.",
        details: [
            { label: "Code", value: "012" },
            { label: "Length", value: "8 Weeks" },
            { label: "Start", value: "January 2025" },
            { label: "Credential", value: "Certificate of Completion" }
        ],
        admissionRequirements: [
            "Basic knowledge of programming concepts.",
            "Understanding of mathematics and statistics."
        ],
        courseRequirements: [
            "Python installed on your computer.",
            "Understanding of basic linear algebra."
        ],
        weeks: [
            {
                weekNumber: 1,
                title: "Introduction to Machine Learning",
                description: "Overview of machine learning concepts and applications.",
                topics: ["Supervised vs. unsupervised learning", "Regression and classification"]
            },
            {
                weekNumber: 2,
                title: "Model Evaluation and Validation",
                description: "Methods for evaluating and validating machine learning models.",
                topics: ["Cross-validation", "Performance metrics"]
            }
        ]
    }
  };

  function displayCourseDetails(courseId) {
    const course = courses[courseId];
    if (!course) {
        console.error(`Course with ID ${courseId} not found.`);
        return;
    }

    // Update course details in the HTML
    document.getElementById("courseName").textContent = course.name;
    document.getElementById("start-date").innerHTML = `<option value="${course.startDate}">${course.startDate}</option>`;
    document.getElementById("courseDescription").textContent = course.description;

    const courseDetailsList = document.getElementById("courseDetails");
    courseDetailsList.innerHTML = "";
    course.details.forEach(detail => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${detail.label}:</strong> ${detail.value}`;
        courseDetailsList.appendChild(listItem);
    });

    const admissionRequirementsList = document.getElementById("admissionRequirements");
    admissionRequirementsList.innerHTML = "";
    course.admissionRequirements.forEach(req => {
        const listItem = document.createElement("li");
        listItem.textContent = req;
        admissionRequirementsList.appendChild(listItem);
    });

    const courseRequirementsList = document.getElementById("courseRequirements");
    courseRequirementsList.innerHTML = "";
    course.courseRequirements.forEach(req => {
        const listItem = document.createElement("li");
        listItem.textContent = req;
        courseRequirementsList.appendChild(listItem);
    });

    document.getElementById("admissionsContact").textContent = course.admissionsContact;
    document.getElementById("academicSchool").textContent = course.academicSchool;

    // Display weekly content
    const weeklyContent = document.getElementById("weeklyContent");
    weeklyContent.innerHTML = "";
    course.weeks.forEach(week => {
        const weekDiv = document.createElement("div");
        weekDiv.classList.add("week");
        weekDiv.innerHTML = `
            <h3>Week ${week.weekNumber}: ${week.title}</h3>
            <p>${week.description}</p>
            <button class="toggle-details">Show Details</button>
            <div class="details hidden">
                <p>Topics:</p>
                <ul>
                    <li>${week.topics[0]}</li>
                    <li>${week.topics[1]}</li>
                </ul>
            </div>
        `;
        weeklyContent.appendChild(weekDiv);
    });
  }

  // Display course details based on the retrieved course ID
  displayCourseDetails(courseId);
});