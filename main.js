game() ;

function game () {
let ChoiseArray = document.querySelectorAll(".apvalumas");
for(let i = 0; i < ChoiseArray.length; i++) {
    ChoiseArray[i].addEventListener ( "click", function(e) {
        let game = document.querySelector(".game");
        let pasirinkimoId = e.srcElement.id;
        HTML = "";
        HTML = `<div class = "kova1">
        <p> YOU PICKED </p> 
        <div class = "tavoPasirinkimas"> </div>
        </div>
         <div class = "kova2">
         <p>THE HOUSE PICKED </p> 
         <div class = "kompoPasirinkimas"> <img  src="./images/klaustukas.png" alt=""></img></div>
          </div>`;
        game.innerHTML = HTML;   
        e.target.classList.add("kovosApk")
        document.querySelector(".tavoPasirinkimas").appendChild(e.target);
        document.querySelector('.game').style.width = '70%' ;
        document.querySelector('.game').style.margin = "50px 15%" ;
        document.querySelector(".kompoPasirinkimas").addEventListener('click', function(){
            let rand =random();   
        updateHtml=` <img class="apvalumas ${rand} kompCss" src="./images/icon-${rand}.svg" alt=""></img>`
        document.querySelector(".kompoPasirinkimas").innerHTML = updateHtml;
         let laimetojas = kasLaimejo(pasirinkimoId, rand);
          finalRender(laimetojas);
          document.querySelector(".play-agan").addEventListener("click", function() {
            HTML = `  
             <div class="trikampis">
            <img src="./images/bg-triangle.svg" alt="">
        <div>
        <img id = "p-paper" class="apvalumas paper" src="./images/icon-paper.svg" alt="">
        <img id = "p-rock" class="apvalumas rock" src="./images/icon-rock.svg" alt="">
        <img id = "p-sissors" class="apvalumas sissors" src="./images/icon-scissors.svg" alt="">
        </div>
    </div>`
        document.querySelector('.game').innerHTML = HTML;
        ;
        })
        }, {once : true}
        )
        
        })
}

}

function restart() {
    game();
}



  


function random() {
    n = Math.floor(Math.random() * 3);
    switch (n) {
        case 0: return "paper";
        case 1: return "scissors";
        case 2: return "rock";
    }
}

function kasLaimejo( x , y) {
    switch(x) {
        case "p-paper" :
           if( y === "paper") return 0;  // 0 - lygiosios
           if( y === "rock") return 1;  // 1 - zaidiejas laimejo
           if( y === "scissors") return -1; // -1 - =aidejas pralaimejo.
           break;
        case "p-rock" :
            if( y === "paper") return -1;
            if( y === "rock") return 0;
            if( y === "scissors") return -1;
            break;
        case "p-sissors":
            if( y === "paper") return 1;
            if( y === "rock") return -1;
            if( y === "scissors") return -0;
            break;
    }
}
function finalRender( laimetojas ) {
if(laimetojas === 0 ) {
    return document.querySelector('.game').insertAdjacentHTML( "beforeend", `<div> Lygiosios </div> <div class = "play-agan"> Play agan! </div>`);
}
if(laimetojas === 1 ) {
    let ka = document.querySelector(".score-number").innerHTML ;
    let na = parseInt(ka) + 1 ; 
    document.querySelector(".score-number").innerHTML = na;


    console.log(document.querySelector(".score-number").innerHTML);

return document.querySelector('.game').insertAdjacentHTML( "beforeend", `<div> LAIMEJAI </div> <div class = "play-agan"> Play agan! </div>`);
}
if(laimetojas === -1 ) {
    let ka = document.querySelector(".score-number").innerHTML ;
    let na = parseInt(ka) - 1 ; 
    document.querySelector(".score-number").innerHTML = na;
    console.log(document.querySelector(".score-number").innerHTML);
return document.querySelector('.game').insertAdjacentHTML( "beforeend", `<div> PRALOSEI </div> <div class = "play-agan"> Play agan! </div>`);
}

}
