const d = document,
$humanChoice = d.querySelector('.your-choice'),
$computerChoice = d.querySelector('.computer-choice'),
$humanScore = d.getElementById('your-score'),
$computerScore = d.getElementById('computer-score'),
$draw = d.querySelector('.draw'),
options = ['✊','✋', '✌️'];
let available = true;

function evaluate(h1,h2){
    let humanScore = parseInt($humanScore.textContent, 10);
    let computerScore = parseInt($computerScore.textContent, 10);


    if(h1 == h2){
        $draw.classList.add('show');
    } else if (h1 =='✋' && h2 == '✊'){ 
        humanScore++;
        $humanScore.classList.add('scored');
    } else if (h1 =='✋' && h2 == '✌️') {
        computerScore++;
        $computerScore.classList.add('scored');
    } else if (h1 =='✊' && h2 == '✌️') {
        humanScore++;
        $humanScore.classList.add('scored');
    } else if (h1 =='✊' && h2 == '✋') {
        computerScore++;
        $computerScore.classList.add('scored');
    } else if (h1 =='✌️' && h2 == '✋') {
        humanScore++;
        $humanScore.classList.add('scored');
    } else if (h1 =='✌️' && h2 == '✊') {
        computerScore++;
        $computerScore.classList.add('scored');
    }

    $humanScore.textContent = humanScore;
    $computerScore.textContent = computerScore;
}

function handCicle(humanOption){
    available = false;
    $draw.classList.remove('show');
    $humanScore.classList.remove('scored');
    $computerScore.classList.remove('scored');
    // let cicleId = setInterval(()=>{
    //     let randomIndex1 = Math.floor(Math.random() * 3);
    //     let randomIndex2 = Math.floor(Math.random() * 3);
    //     $human.textContent = options[randomIndex1];
    //     $computer.textContent = options[randomIndex2];
    // }, 100);
    let index = -1;

    let cicleId = setInterval(()=>{
        console.log(index)
        if (index >= 0 && index <= 2){
            $humanChoice.textContent = options[index];
            $computerChoice.textContent = options[index];
        } else {
            $humanChoice.textContent = '';
            $computerChoice.textContent = '';
        }
        index++;      
    }, 400);

    setTimeout(()=>{
        clearInterval(cicleId);
        let randomIndex = Math.floor(Math.random() * 3);
        available = true;
        $humanChoice.textContent = humanOption;
        $computerChoice.textContent = options[randomIndex];
        evaluate(humanOption, $computerChoice.textContent);
    }, 2200);
}

d.addEventListener('click', e => {
    if ((e.target.matches('.options span')) && available){
        handCicle(e.target.textContent);
    }
});

//console.log(Math.floor(Math.random() * 3))