const projectCards = [
      {
            title: "project 1",
            poster: "...",
            year: "...",
      },
];
function generateGalleryCards() {
      const galleryCardsContainer = document.getElementById("projectCards")

      projectCards.forEach(project => {
            const card = document.createElement('div')
            card.classList.add('col-md-4')

            // styling card based on position: 
            let backgroundColor

            switch (project.genre.toLowerCase) {
                  case 'forward':
                        backgroundColor = '#ffc107'
                        break
            }
            card.style.backgroundColor = backgroundColor
            //create a list of skills with <li> tags //
            const favoriteList = member.favorite.map(favorite => `<li> ${favorite} </li> `).join('')

            card.innerHTML = `
    <div class = "card"> 
        <div class = "card-header"> ${project.title} </div> \
        <div class = "h1"> ${project.year} </div> 
        <div class = "card-body"> 
            <div class = "card-img">
                <img class="img-fluid" src= ${project.poster}
            </div> 
        </div> 
    </div> 
    `

            teamCardsContainer.appendChild(card)
      })
}

window.onload = generateTeamCards()