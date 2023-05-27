// art.js

window.onload = function() {
    const navItems = document.querySelectorAll('nav a');
  
    navItems.forEach(function(item) {
      item.addEventListener('mouseover', function() {
        this.classList.add('active');
      });
  
      item.addEventListener('mouseout', function() {
        if (!this.classList.contains('active')) {
          this.classList.remove('active');
        }
      });
    });
  };
  
  var carouselItems = document.querySelectorAll('.carousel-item');
  var currentIndex = 0;
  
  function changeCarouselItem(direction) {
    currentIndex += direction;
  
    if (currentIndex < 0) {
      currentIndex = carouselItems.length - 1;
    } else if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    }
  
    var transformValue = 'translateX(' + (-currentIndex * 100) + '%)';
    document.querySelector('.carousel-inner').style.transform = transformValue;
  }
// Handle form submission
document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the comment input value
    var commentInput = document.getElementById("comment-input");
    var comment = commentInput.value;
    
    // Clear the comment input
    commentInput.value = "";
    
    // Add the comment to the comments section
    var commentsContainer = document.getElementById("comments");
    var newComment = document.createElement("div");
    newComment.textContent = comment;
    commentsContainer.appendChild(newComment);
  });
    
  