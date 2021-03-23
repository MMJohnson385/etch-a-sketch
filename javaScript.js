const canvas = document.querySelector('#canvasContainer'); 
    // connects canvas to the canvas container div



function sizeSelect(){
  let canvasDimension = window.prompt(
      'Choose a number between 2 and 100.');
  
  if( canvasDimension >= 2 && canvasDimension <= 100){
    return canvasDimension;
  } else {
    alert('Selection must be between 2 and 100.')
    return 16;
  }
} //prompts user to choose the size

let inkColor = 'red'; // sets ink color
console.log('ink color');
console.log(inkColor);

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
    gridSquare.style = 'border:solid; border-width: 1px;'
  
  const gridArea = size * size; 
      // calculates the number of boxes needed
  
  for( let i = 0; i < gridArea; i++){
    canvas.appendChild(gridSquare.cloneNode());
  }//adds squares to DOM

  if( color == 'red'){
    redAndOrangeInk();
  } else {
    blackInk();
  }// chooses the ink 

}

function clearCanvas(){
  for( i = canvas.childNodes.length; i > 0; i--){
    canvas.removeChild(canvas.childNodes[0]);
  }
} // empties the canvas of all child elements



drawCanvas(16, 'black');


const eraser = document.querySelector('#sizeInput');
    //connects eraser to the resize canvas button
eraser.addEventListener('click', () => {
  clearCanvas();
  drawCanvas(sizeSelect(), inkColor);
}); // erases the grid and redraws it

function redAndOrangeInk(){
  const redAndOrange = document.querySelectorAll('.gridSquare');

  redAndOrange.forEach((div) => {
    div.addEventListener('mouseenter', (e) =>{
      if(e.target.style.background == 'red'){
         e.target.style.background = 'orange';
      } else {
         e.target.style.background = 'red';
      }
      console.log(e.target.style.background);
    });
  });
}// creates red and orange ink

function blackInk(){
  const ink = document.querySelectorAll('.gridSquare');
  
  ink.forEach((div) => {
      div.addEventListener('mouseenter', (e) =>{
        e.target.style.background = 'black';
        console.log(e.target.style.background);
      });
    });
}// creats black ink
