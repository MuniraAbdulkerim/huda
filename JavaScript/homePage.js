document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "/assets/HomePage/homeImage1.jpg",
      "/assets/HomePage/homeImage2.jpg",
      "/assets/HomePage/homeImage3.jpg",
      "/assets/HomePage/homeImage4.jpg"
    ];
  
    
        let currentIndex = 0;
        const imgElement = document.getElementById("rotating-image");
    
        // Ensure the first image is loaded without the hidden class
        imgElement.src = images[currentIndex];
    
        function rotateImage() {
            // Fade out the current image
            imgElement.classList.add("hidden");
    
            setTimeout(function () {
                // Update the image source once faded out
                currentIndex = (currentIndex + 1) % images.length;
                imgElement.src = images[currentIndex];
    
                // Fade the new image back in
                imgElement.classList.remove("hidden");
            }, 1000); // 1000ms matches the CSS transition duration
        }
    
        // Wait a little after the page loads, then start the transitions
        setTimeout(() => {
            setInterval(rotateImage, 5000); // Start rotating every 5 seconds
        }, 2000); // Initial delay before the first transition (2 seconds)
    });
    