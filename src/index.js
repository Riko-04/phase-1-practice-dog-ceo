console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById('dog-image-container');
    const dogBreedsUl = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
  
    // Challenge 1
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(img => {
          let newImgElement = document.createElement('img');
          newImgElement.src = img;
          dogImageContainer.appendChild(newImgElement);
        });
      });
  
    // Challenge 2
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        for (const breed in data.message) {
          let newLiElement = document.createElement('li');
          newLiElement.textContent = breed;
          dogBreedsUl.appendChild(newLiElement);
  
          // Challenge 3
          newLiElement.addEventListener('click', function() {
            this.style.color = 'red';
          });
        }
      });
  
    // Challenge 4
    breedDropdown.addEventListener('change', function() {
      let selectedLetter = this.value;
      let breedListItems = dogBreedsUl.getElementsByTagName('li');
      for (let i = 0; i < breedListItems.length; i++) {
        let currentBreed = breedListItems[i].textContent;
        if (currentBreed.startsWith(selectedLetter)) {
          breedListItems[i].style.display = '';
        } else {
          breedListItems[i].style.display = 'none';
        }
      }
    });
  });
  