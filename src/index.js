console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded',function (){
    
    getDogs()

    function getDogs(){
        return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then (function (response){
         return response.json();
        })
        .then (function (data){
            addsImages(data.message);
            getBreeds();
        })
    }
    
    function addsImages(dogs){
        const imageContainer = document.getElementById("dog-image-container");
        dogs.forEach(dog=>{
           const img= document.createElement('img')
            img.src = dog;
            imageContainer.appendChild(img);
          });
        }
    
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    function getBreeds () {
        return fetch(breedUrl)
        .then (function (response){
         return response.json();
        })
        .then (function (breeds){
            addsBreed(breeds.message);
        })
    
    }

    function addsBreed(breedList) {

        const listOfbreeds = document.getElementById("dog-breeds");
        const breeds = Object.keys(breedList);
      
        breeds.forEach(breed => {
          const breedName = document.createElement('li');
          breedName.innerText = breed;
          listOfbreeds.appendChild(breedName);

          breedName.addEventListener('click', function (event) {
            const liClicked = event.target;
            liClicked.style.color = 'purple';


        })
    })
    }
    let dropdown = document.getElementById('breed-dropdown');
    let selectedLetter = dropdown.value;
  
    dropdown.addEventListener('change', function () {
      selectedLetter = dropdown.value;
      filterBreeds(selectedLetter);
    });

    function filterBreeds(letter) {
        const breedList = document.getElementById("dog-breeds");
        const breeds = breedList.getElementsByTagName("li");
      
        for (let i = 0; i < breeds.length; i++) {
          const breedName = breeds[i].innerText;
          if (breedName.startsWith(letter)) {
            breeds[i].style.display = "block";
          } else {
            breeds[i].style.display = "none";
          }
        }
      }
      
  });
    