

document.addEventListener("DOMContentLoaded", function () {
    fetch("navBar.html")  // Update the path to point to the pages folder
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading navbar:', error);
      });

  });