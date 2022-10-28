let boxContainer = document.getElementById('boxContainer');

let playButton = document.getElementById('playButton');


//Funzione che crea le box al click del tasto play

playButton.addEventListener('click', function(){

   for (let i = 1; i <= 100; i++) {
   
      let box = document.createElement("div");

      box.innerText = `${i}`

      box.classList.add('box', 'd-flex', 'align-items-center', 'justify-content-center', 'fs-5');

      boxContainer.append(box);

   }

});
