
const container = document.querySelector(".container");
let userInptNum = 16;
let blacky = 0;
let opac = 0;


container.style.width = "500px";
container.style.height = "500px";
container.style.background = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/clouds.jpg')";

container.style.border = "5px solid red";
container.style.display = "grid";

makeGrid(userInptNum);
//let chosenColor = "rgb(0,0,0";

function makeGrid(newNum){
    userInptNum = newNum;
    container.style.gridTemplateRows = userInptNum;
    container.style.gridTemplateColumns = userInptNum;

    for (let i = 1; i <= userInptNum; i++){
        for(let j = 1; j <= userInptNum; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = "rgb(250,250,250";
            square.style.gridRow = i;
            square.style.gridColumn = j;
            container.appendChild(square);

        }
        
    }
    getColor();
    
}




function getColor(){
    let squares = document.querySelectorAll(".square");
    
    function whiteSquare(squares){
        if (opac === 1){
        squares.target.style.backgroundColor = 'black'
        squares.target.style.opacity -= -0.1   
      // squares.target.style.backgroundColor = "rgba(0,0,0,0.1)";  
        }
        else if (opac === 0){
            squares.target.style.backgroundColor = 'black'
            squares.target.style.opacity = 1
        };
    };
  
    function hoverSquare(squares){
         squares.addEventListener("mouseenter", whiteSquare);
    };
    squares.forEach(hoverSquare);
};


function newGridButton(){

    

    

    let newGrid = document.querySelector('.newGrid');
    newGrid.addEventListener('click', getSize);
    
    function getSize() {
        container.innerHTML = "";
        userInptNum = prompt("Enter a grid amount between 16 and 64 ", 16);
        if(userInptNum <16 || userInptNum > 64){
            userInptNum = prompt("Invalid number. Please enter a number betweeen 16 and 64. If not, the grid will be automatically set to 16 ", 16);
            if(userInptNum <16 || userInptNum > 64){
                makeGrid(userInptNum);
                window.location.reload(true);
            }
            else {
                makeGrid(userInptNum);
                
            }
            
        }
        else {
        makeGrid(userInptNum);
        }
    };
    
    
    
    
};



function grayScale(){
    let grayBtn = document.querySelector('.grayBtn');
    grayBtn.addEventListener('click', changeOpac);

    function changeOpac(){
        opac = 1;
    };
};
grayScale();

function makeBlack(){
    let grayBtn = document.querySelector('.blackBtn');
    grayBtn.addEventListener('click', changeBlack);

    function changeBlack(){
        opac = 0;
    };
};
makeBlack();



newGridButton(userInptNum);


const pokemon = ["pokepix/Bulbasaur", "pokepix/Ivysaur", "pokepix/Venusaur","pokepix/Charmander","pokepix/Charmeleon","pokepix/Charizard","pokepix/Squirtle","pokepix/Wartortle","pokepix/Blastoise",];

function changeImage(){
    let poke = document.querySelector('.pokeBtn');
    poke.addEventListener('click', changePoke);

    function changePoke(){
        function randomNum(){ 
        return Math.floor(Math.random() * 9);
        }
        let random = randomNum(0,9)
        container.style.backgroundImage = "url(" + pokemon[random] + ")";
        container.style.backgroundRepeat = "no-repeat";
    }; 
};
changeImage();


