$(document).ready(function() {
    // Course data
    const courses = [
      { name: "Web Development Fundamentals", instructor: "John Doe", price: 49.99, topic: "web-development", ratings: 3.5, progress: 50 },
      // ... other courses
    ];

    // Update course list (replace with your backend data retrieval)
    function updateCourseList(filteredCourses = courses) {
      const courseList = $("#course-list");
      courseList.empty(); // Clear existing courses
      for (const course of filteredCourses) {
        const listItem = $("<li></li>").text(`${course.name} - $${course.price}`);
        courseList.append(listItem);
      }
    }
    updateCourseList();

    // Initialize progress bar
    let progress = $("#progress-bar-course-1");
    progress.progressbar({value : 50, animate: true });

    // Initialize progress bar
    let progress2 = $("#progress-bar-course-2");
    progress2.progressbar({value : 25, animate: true });

    // Handle search and filter
    $("#search-bar, #filter-topic, #filter-difficulty").change(function() {
      const searchTerm = $("#search-bar").val().toLowerCase();
      const selectedTopic = $("#filter-topic").val();
      const selectedDifficulty = $("#filter-difficulty").val();

      const filteredCourses = courses.filter(course => {
        let matchesSearch = true;
        if (searchTerm) {
          matchesSearch = course.name.toLowerCase().includes(searchTerm);
        }
        let matchesTopic = true;
        if (selectedTopic) {
          matchesTopic = course.topic === selectedTopic;
        }
        let matchesDifficulty = true;
        if (selectedDifficulty) {
          matchesDifficulty = course.difficulty === selectedDifficulty;
        }
        return matchesSearch && matchesTopic && matchesDifficulty;
      });

     updateCourseList(filteredCourses);
    });


    $("#toggle-advanced-search").click(function() {
        $("#advanced-search").toggle();
      });

});
