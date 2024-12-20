let isSandwichFinished=false;
const bottomhalf = document.querySelector('.bottomhalf');
function ajouter(event) {
    if (isSandwichFinished) {
        alert("You can't add more ingredients after finishing the Sandwich!");
        return;
      }
      // Créer une nouvelle image pour l'ingrédient ajouté
      const newIngredient = document.createElement('img');
      newIngredient.src = event.target.src; // Utilise la source de l'image cliquée
      newIngredient.alt = event.target.alt;
      newIngredient.classList.add('added-ingredient'); // Ajouter une classe pour le style
  
      // Positionnement de l'ingrédient sur l'assiette
      newIngredient.style.position = 'absolute';
      newIngredient.style.width = '14vw'; // Ajustez la taille de l'ingrédient
      newIngredient.style.zIndex = '10'; // Placer l'ingrédient au-dessus du pain
      newIngredient.style.left = '8%'; // Centrer horizontalement
      newIngredient.style.top = `${20 - bottomhalf.childElementCount * 5}%`; // Empiler les ingrédients

      bottomhalf.appendChild(newIngredient);
      newIngredient.addEventListener('click', function () {
          if (isSandwichFinished) {
            alert("You can't remove ingredients after finishing the Sandwich!");
            return;
          }
          bottomhalf.removeChild(newIngredient);
          rearrangeIngredients();
      });
      
  }
  
function rearrangeIngredients() {
      const bottomhalf = document.querySelector('.bottomhalf');
      const ingredients = Array.from(bottomhalf.getElementsByClassName('added-ingredient'));
      ingredients.forEach((ingredient, index) => {
          const newTop = `${20 - index * 5}%`;
          ingredient.style.top = newTop;
      });
  }

function clearPlate() {
        const bottomhalf = document.querySelector('.bottomhalf');
        const tophalf = document.querySelector('.tophalf'); // Select the top half
        while (bottomhalf.firstChild) {
            bottomhalf.removeChild(bottomhalf.firstChild);
        }
        if (tophalf) {
            tophalf.remove();
          }
        isSandwichFinished=false;
        console.log("All ingredients have been cleared from the plate.");

    }
document.getElementById('finishButton').addEventListener('click', finishSandwich);

function finishSandwich() {
      
    const Sandwich = document.querySelector('.plate');
    if (document.querySelector('.tophalf')) {
        return;
    }
     
    const tophalf = document.createElement('div');
    tophalf.classList.add('tophalf');

    // Append above the ingredients
    Sandwich.appendChild(tophalf);

    // Align the top bun visually
    tophalf.style.position = 'absolute';
    tophalf.style.top = `${20 - bottomhalf.childElementCount * 3}%`; // Adjust position above the ingredients
    tophalf.style.left = '18%'; // Match horizontal alignment of bottomhalf
    tophalf.style.zIndex = '15'; // Ensure it is on top of all ingredients
    isSandwichFinished=true;

    }   
