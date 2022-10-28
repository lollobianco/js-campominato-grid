let boxContainer = document.getElementById('boxContainer');

let playButton = document.getElementById('playButton');



//Funzione che crea le box

function createBox(){

   let box = document.createElement('div');
   box.classList.add('box', 'fs-5');
   return box;

}


//Funzione che crea le box al click del tasto play

playButton.addEventListener('click', function(){

   for (let i = 1; i <= 100; i++) {

      let box = createBox();

      box.innerText = `${i}`;

      boxContainer.append(box);
      
      box.addEventListener('click', function(){

         console.log(this.innerText);

         this.classList.toggle('boxClick');
   
      })

   }

});

