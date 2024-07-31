let boxes = document.querySelectorAll(".box");
let winner = document.querySelector("#title");

let reset = document.querySelector("#restart");


const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


    let palyerX = true; 

    let XPattern =[];
    let OPattern =[];


    boxes.forEach((box, index)=>{
        box.addEventListener("click",()=>{
            
            reset.addEventListener("click",()=>{
                palyerX = true;
                XPattern =[];
                OPattern =[];
                box.innerText = "";
                box.disabled = false;
                winner.innerText = "Tic-Tac-Toe"
            }) 

            if(palyerX){
            box.innerText = "X";
            console.log("drew X index = "+ index);
            XPattern.push(index);

            console.log("x-pattern: "+ XPattern);
            palyerX = false;
            box.disabled = true;
            }
            else{
                box.innerText = "O";
                console.log("drew O index = " + index);
                OPattern.push(index);

                console.log("o-pattern: "+OPattern);
                palyerX = true;
                box.disabled = true;
            }
            function checkWin(playerPattern) {  
                return winPatterns.some(winPattern =>  
                    winPattern.every(index => playerPattern.includes(index))
                );
            }
            
            if (checkWin(XPattern)) {
                
                boxes.forEach(box => box.disabled = true);
                winner.innerText = "Player X wins!";
                

            } else if (checkWin(OPattern)) {
                
                boxes.forEach(box => box.disabled = true);
                winner.innerText = "Player O wins!";
            

            } else if(XPattern.length >=5 || OPattern.length >=5) {
                winner.innerText = "DRAW";
            }

        })
    }
    
)

   

