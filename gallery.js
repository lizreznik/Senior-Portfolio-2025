const galleryData = [
      {
            imgSrc: "projects/summer-tainment.jpg",
            altText: "Sunset over mountains",
            title: "Mountain Sunset",
            year: "2023",
            description: "A beautiful sunset casting golden hues over the mountain range."
      },
      {
            imgSrc: "image2.jpg",
            altText: "City skyline at night",
            description: "The city lights illuminate the night sky in this vibrant skyline view."
      },
      {
            imgSrc: "image3.jpg",
            altText: "Forest trail",
            description: "A peaceful trail winding through a lush green forest."
      }
      // Add more objects for more images
];

function generateGallery() {
      const container = document.getElementById("galleryContainer");

      galleryData.forEach(item => {
            // Create card div
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";

            // Create image element
            const img = document.createElement("img");
            img.src = item.imgSrc;
            img.alt = item.altText;
            img.classList.add("card-img-top");

            // Create card body div
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");


            // fix this!!!!!! 

            // Add heading (title and year)
            const heading = document.createElement("h5");
            heading.classList.add("card-title");
            heading.textContent = `${item.year} — ${item.title}`;

            // Create description paragraph
            const desc = document.createElement("p");
            desc.classList.add("card-text");
            desc.textContent = item.description;

            // Append elements
            cardBody.appendChild(desc);
            card.appendChild(img);
            card.appendChild(cardBody);
            container.appendChild(card);
      });
}

// Call the function after page loads
window.onload = generateGallery;
