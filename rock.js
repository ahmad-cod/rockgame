
window.onload = function() {

    var userScore = 0;
    var compScore = 0;
    var userScore_span = document.querySelector("#user-score");
    var compScore_span = document.querySelector("#comp-score");
    var scoreBoard_div = document.querySelector(".score-board");
    var result_p = document.querySelector(".result > p");
    var rock_div = document.querySelector("#rock");
    var paper_div = document.querySelector("#paper");
    var scissors_div = document.querySelector("#scissors");
    
    const getComputerChoice = () => {
        var choices = ["rock", "paper", "scissors"];
        // var choices = ["paper", "rock", "scissors"];
        var randomNum = Math.floor(Math.random() * 3);
        return choices[randomNum];
    }
    function getRandomWord() {
        let list = ['Great!', 'Wow!', 'Excellent!']
        let randomIndex = Math.floor(Math.random() * list.length)
        console.log(randomIndex)
        console.log(list[randomIndex]);   
    }
    var remark = getRandomWord();

    function convertWord(word) {
        switch(word) {
            case "rock":
             return "Rock";
            case "paper":
             return "Paper";
            case "scissors":
             return "Scissors";
        }
    }

    const win = (user, comp) => {
        userScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        var smallUserWord = "user".fontsize(6).sub();
        var smallCompWord = "comp".fontsize(4).sub();
        var userChoice_div = document.getElementById(user);
        result_p.innerHTML = convertWord(user) + smallUserWord + " beats " +
          comp  + smallCompWord + " . You Win!!";
        userChoice_div.classList.add("green-glow");
        setTimeout(function() {userChoice_div.classList.remove("green-glow")}, 800);
    }

    const lose = (user, comp) => {
        compScore++;
       
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        var smallUserWord = "user".fontsize(4).sub();
        var smallCompWord = "comp".fontsize(6).sub();
        var userChoice_div = document.getElementById(user);
        result_p.innerHTML = convertWord(user) + smallUserWord + " loses to " +
           comp  + smallCompWord + " . You lost?";
        userChoice_div.classList.add("red-glow");
        setTimeout(function() {
        userChoice_div.classList.remove("red-glow")
        }, 800);
    }

    function draw(user, comp) {
        userScore++;
        compScore++;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        var smallUserWord = "user".fontsize(5).sub();
        var smallCompWord = "comp".fontsize(5).sub();
        var userChoice_div = document.getElementById(user);
        result_p.innerHTML = convertWord(user) + smallUserWord + " draws with " +  
        comp  + smallCompWord + " .";
        userChoice_div.classList.add("gray-glow");
        setTimeout(function() {
            userChoice_div.classList.remove("gray-glow")
        }, 800)
    }
    
    function game(userChoice) {
       
        if (compScore == '5') {
            (userScore > compScore) ? alert(`Excellent! You Won!!
            \n ${userScore} : ${compScore}\n Refresh to continue! `) : (userScore == compScore) ?  
             alert(`Game Over!! \n Draw\n ${userScore} : ${compScore}\n refresh to continue`):
             alert(`Game Over!! \n Lost\n ${userScore} : ${compScore}\n refresh to continue`);
         }

        else {var compChoice = getComputerChoice();
        switch(userChoice + compChoice) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
            win(userChoice, compChoice);
            break;
            case "scissorsrock":
            case "rockpaper":
            case "paperscissors":
            lose(userChoice, compChoice);
            break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
            draw(userChoice, compChoice);
            break;}
        }
    }


    function main() {
        if (compScore < 10){
        rock_div.addEventListener("click", function() {
            game("rock")
        });

        paper_div.addEventListener("click", function() {
            game("paper")
        });

        scissors_div.addEventListener("click", function() {
            game("scissors")
        });
    }
    };
        main();
    }