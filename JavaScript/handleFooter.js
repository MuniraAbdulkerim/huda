
document.addEventListener("DOMContentLoaded", function () {

    fetch("footer.html")  // Update the path to point to the pages folder

    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading navbar:', error);
      });
  });