const galleryData = [
      {
            imgSrc: "projects/summer-tainment.jpg",
            altText: "Summer-tainment 2023",
            title: "Summer-tainment",
            year: "Jr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "Magic 8 Ball 2023",
            title: "Magic 8 Ball",
            year: "Jr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "Mad Lib 2024",
            title: "Mad Lib",
            year: "Jr",
            description: "..."
      },
       {
            imgSrc: "https://picsum.photos/200/300",
            altText: "Look Ma, I'm Famous! 2024",
            title: "Look Ma, I'm Famous!",
            year: "Jr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "Tip Calaculator 2024",
            title: "Tip Calculator",
            year: "Jr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "On My Birthday 2024",
            title: "On My Birthday",
            year: "Jr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "Rock Paper Scissors 2024",
            title: "Rock Paper Scissors",
            year: "Jr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "Future Me 2024",
            title: "Future Me",
            year: "Jr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "SuperTeam 2024",
            title: "SuperTeam",
            year: "Jr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "College Recruitment 2024",
            title: "College Recruitment",
            year: "Sr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "Trunk or Treat 2024",
            title: "Trunk or Treat",
            year: "Sr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "NJIT 1 2024",
            title: "NJIT #1",
            year: "Sr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "NJIT 2 2024",
            title: "NJIT #2",
            year: "Sr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "Marlboro Tech 2025",
            title: "Marlboro Tech",
            year: "Sr",
            description: "..."
      },
      {
            imgSrc: "https://picsum.photos/200/300",
            altText: "Work Based 2025",
            title: "Work Based Learning",
            year: "Sr",
            description: "..."
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
            cardBody.appendChild(heading);
            cardBody.appendChild(desc);
            card.appendChild(img);
            card.appendChild(cardBody);
            container.appendChild(card);
      });
}

// Call the function after page loads
window.onload = generateGallery;
