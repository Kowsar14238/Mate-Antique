
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    // Show the loader
    loader.style.display = "block";
  
    // Hide the content
    content.style.display = "none";
  
    // Hide the loader and show the content after a minimum duration of 2 seconds
    setTimeout(function() {
      loader.style.display = "none";
      content.style.display = "block";
    }, 2000);
  });
  