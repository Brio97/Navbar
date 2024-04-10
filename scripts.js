/* JavaScript to handle events on the navigation bar */
document.addEventListener("DOMContentLoaded", function() {
    // Get the navigation bar element
    const nav = document.querySelector("nav");
  
    // Get all the links in the navigation bar
    const links = nav.querySelectorAll("a");
  
    // Add a click event listener to each link
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
        // Get the link's href attribute
        const href = this.getAttribute("href");
  
        // Prevent the link from navigating to the href
        e.preventDefault();
  
        // Trigger the click event for the link
        this.click();
  
        // Highlight the active link
        var activeLink = nav.querySelector("a.active");
        if (activeLink) {
          activeLink.classList.remove("active");
        }
        this.classList.add("active");
      });
    }
  
    // Add a hover event listener to each link
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("hover", function() {
        // Get the link's href attribute
        var href = this.getAttribute("href");
  
        // Prevent the link from navigating to the href
        e.preventDefault();
  
        // Highlight the active link
        var activeLink = nav.querySelector("a.active");
        if (activeLink) {
          activeLink.classList.remove("active");
        }
        this.classList.add("active");
      });
    }
  });