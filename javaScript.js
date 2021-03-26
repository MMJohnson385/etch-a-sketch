let inkColor = 'black'; // sets and stores the ink color
  console.log('ink color');
  console.log(inkColor);

let canvasSize = 16; // sets and stores the canvas dimensions
  console.log('Canvas Size');
  console.log(canvasSize);

const canvas = document.querySelector('#canvasContainer'); 
    // connects canvas to the canvas container div

function sizeSelect(){
  let canvasDimension = window.prompt(
      'Choose a number between 2 and 100.');
  
  if( canvasDimension >= 2 && canvasDimension <= 100){
    canvasSize = canvasDimension;
  } else {
    alert('Selection must be between 2 and 100.')
    return 16;
  }
  console.log('Canvas Size');
  console.log(canvasSize);
} //prompts user to choose the size


function drawCanvas(size, color){
  
  function sizeGrid(size){
    let gridSide = '';
    for( let i = 0; i < size ; i++){
      gridSide += '1fr ';
    }
    return gridSide;
  } // informs canvas how many units to add to height and width

  const gridColumns = 'grid-template-columns: ' + sizeGrid(size);
  const gridRows = 'grid-template-rows: ' + sizeGrid(size);

  canvas.style = `${gridColumns}; ${gridRows};`;// adds the size of the height and width

  const gridSquare = document.createElement('div');
    gridSquare.classList.toggle('gridSquare');
    //gridSquare.style = 'border:solid; border-width: 1px;'
  
  const gridArea = size * size; 
      // calculates the number of boxes needed
  
  for( let i = 0; i < gridArea; i++){
    canvas.appendChild(gridSquare.cloneNode());
  }//adds squares to DOM

  if( color == 'black'){
    blackInk();
  }else if ( color == 'gray') {
    grayScaleInk();
  } else if (color == 'rainbow') {
    rainbowInk();
  } else if (color == 'random'){
    randomInk();
  } else {
    blackInk();
  }// chooses the ink 

}

function clearCanvas(){
  for( i = canvas.childNodes.length; i > 0; i--){
    canvas.removeChild(canvas.childNodes[0]);
  }
} // empties the canvas of all child elements



drawCanvas(canvasSize, inkColor); // creates the first instance of the canvas



const blackInkButton = document.querySelector('#blackInk');
    //connects black ink to black ink button
blackInkButton.addEventListener('click', () =>{
  clearCanvas();
  inkColor = 'black';
  drawCanvas(canvasSize, inkColor);
  console.log(inkColor);
});//erases grid and redraws it and utilizes rainbow ink

function blackInk(){
  const blackInk = document.querySelectorAll('.gridSquare');
  
  blackInk.forEach((div) => {
      div.addEventListener('mouseenter', (e) =>{
        e.target.style.background = 'black';
        console.log(e.target.style.background);
      });
    });
}// creats black ink

const grayScaleButton = document.querySelector('#grayScaleInk');
  //connects gray scale button to gray scale ink
grayScaleButton.addEventListener('click', () =>{
  clearCanvas();
  inkColor = 'gray';
  drawCanvas(canvasSize, inkColor);
  console.log(inkColor);
});// erases grid and redraws it and utilizes gray ink

function grayScaleInk(){
  const grayInk = document.querySelectorAll('.gridSquare');

  grayInk.forEach((div) => {
    div.addEventListener('mouseenter', (e) =>{
      if (e.target.style.background == 'rgb(229, 229, 229)'){//10% black
        e.target.style.background = 'rgb(204, 204, 204)'; //20% black
      } else if (e.target.style.background == 'rgb(204, 204, 204)'){// 20% black
        e.target.style.background = 'rgb(178, 178, 178)'; //30% black
      } else if (e.target.style.background == 'rgb(178, 178, 178)'){ //30% black
        e.target.style.background = 'rgb(153, 153, 153)'; //40% black
      } else if (e.target.style.background == 'rgb(153, 153, 153)'){ //40% black
        e.target.style.background = 'rgb(127, 127, 127)'; //50% black
      } else if (e.currentTarget.style.background == 'rgb(127, 127, 127)'){ //50% black
        e.target.style.background = 'rgb(102, 102, 102)'; //60% black
      } else if (e.target.style.background == 'rgb(102, 102, 102)'){ //60% black
        e.target.style.background = 'rgb(76, 76, 76)'; //70% black
      } else if (e.target.style.background == 'rgb(76, 76, 76)'){ //70% black
        e.target.style.background = 'rgb(51, 51, 51)'; //80% black
      } else if (e.target.style.background == 'rgb(51, 51, 51)'){ // 80% black
        e.target.style.background = 'rgb(25, 25, 25)'; //90% black
      } else if (e.target.style.background == 'rgb(25, 25, 25)'){ //90% black
        e.target.style.background = 'rgb(0, 0, 0)' //100% black
      } else if (e.target.style.background == 'rgb(0, 0, 0)'){
        return
      } else {
        e.target.style.background = 'rgb(229, 229, 229)'; // 10% black
      }
      console.log(e.target.style.background);
    })
  })
}// creates gray scale ink

const rainbowButton = document.querySelector('#rainbowInk');
    //conects rainbow ink to rainbow button
rainbowButton.addEventListener('click', () =>{
  clearCanvas();
  inkColor = 'rainbow';
  drawCanvas(canvasSize, inkColor);
  console.log(inkColor);
}); //erases grid and redraws it and utilizes rainbow ink

function rainbowInk(){
  const rainbow = document.querySelectorAll('.gridSquare');

  rainbow.forEach((div) => {
    div.addEventListener('mouseenter', (e) =>{
      if (e.target.style.background == 'rgb(255, 0, 0)'){//red
        e.target.style.background = 'rgb(255, 127, 0)';//orange
      } else if (e.target.style.background == 'rgb(255, 127, 0)'){//orange
        e.target.style.background = 'rgb(255, 255, 0)';//yellow
      } else if (e.target.style.background == 'rgb(255, 255, 0)'){//yellow
        e.target.style.background = 'rgb(0, 255, 0)'; //green
      } else if (e.target.style.background == 'rgb(0, 255, 0)'){//green
        e.target.style.background = 'rgb(0, 0, 255)';//blue
      } else if (e.target.style.background == 'rgb(0, 0, 255)'){//blue
        e.target.style.background = 'rgb(75, 0, 130)'; //indigo
      } else if (e.target.style.background == 'rgb(75, 0, 130)'){//indigo
        e.target.style.background = 'rgb(143, 0, 255)';//violet
      } else if (e.target.style.background == 'rgb(143, 0, 255)'){//violet
        e.target.style.background = 'rgb(255, 0, 0)'; // red
      } else {
        e.target.style.background = 'rgb(255, 0, 0)';//red
      }
      console.log(e.target.style.background);
    })
  })
}// creates rainbow ink

const randomInkButton = document.querySelector('#randomInk');
    //connects random ink to to random button
randomInkButton.addEventListener('click', () =>{
  clearCanvas();
  inkColor = 'random';
  drawCanvas(canvasSize, inkColor);
  console.log(inkColor);
}); //erases grid and redraws it and utilizes random ink

function randomInk(){
  const random = document.querySelectorAll('.gridSquare');

  random.forEach((div) => {
    div.addEventListener('mouseenter', (e) =>{
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      e.target.style.background = '#' + randomColor;
    })
  })
}// creates random ink

function randomInk(){
  const random = document.querySelectorAll('.gridSquare');

  random.forEach((div) => {
    div.addEventListener('mouseenter', (e) =>{
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      e.target.style.background = '#' + randomColor;
    })
  })
}// creates random ink

const resizeCanvasButton = document.querySelector('#sizeInput');
    //connects "resize" to the resize canvas button
resizeCanvasButton.addEventListener('click', () => {
  clearCanvas();
  sizeSelect();
  drawCanvas(canvasSize, inkColor);
}); // erases the grid and redraws it

const clearCanvasButton = document.querySelector('#clearCanvas');
    //connects to clear canvas button
clearCanvasButton.addEventListener('click', () =>{
  clearCanvas();
  drawCanvas(canvasSize, inkColor);
}); //clears the canvas retains size and ink