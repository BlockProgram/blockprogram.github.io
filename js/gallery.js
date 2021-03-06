// Activate the image gallery
// The main task is to attach an eventListener to each image in the gallery
// and respond appropriately on click

function activateGallery() {  
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage  = document.querySelector("#gallery-photo img")
    
    thumbnails.forEach(function(thumbnail) {  

        //Preload large images
        let newImageSrc  = thumbnail.dataset.largeVersion; 
        let largeVersion = new Image(); 
        largeVersion.src = newImageSrc; 

        
        thumbnail.addEventListener("click", function() { 
        //Set clicked image as main image 
        mainImage.setAttribute("src", newImageSrc); 
        mainImage.setAttribute("alt", thumbnail.alt);

        //Change wich image is current in the thumbnails (apply orange borders)
        let currentCLass = "current"; 
        document.querySelector(".current").classList.remove(currentCLass); 
        thumbnail.parentNode.classList.add(currentCLass); 

        //Change the description matching each image on click 
        let galleryInfo = document.querySelector("#gallery-info"); 
        let title       = galleryInfo.querySelector(".title"); 
        let description = galleryInfo.querySelector(".description"); 

        title.innerHTML       = thumbnail.dataset.title; 
        description.innerHTML = thumbnail.dataset.description; 


        });
    });

                               
} 