

let ChoiseArray = document.querySelectorAll(".apvalumas");
for(let i = 0; i < ChoiseArray.length; i++) {
    ChoiseArray[i].addEventListener ( "click", function(e) {
        let game = document.querySelector(".game");
        const pasirinkta = e.target;
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
        
        

        }
        )
        




       

        })
}

  


function random() {
    n = Math.floor(Math.random() * 3);
    switch (n) {
        case 0: return "paper";
        case 1: return "scissors";
        case 2: return "rock";
    }
}