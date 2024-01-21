const startButton = document.getElementById("startButton");
const introContainer = document.getElementById("introContainer");
const introText = document.getElementById("introText");
const questionContainer = document.getElementById("questionContainer");
const question = document.getElementById("question");
const answersList = document.getElementById("answers");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const americaHymnButton = document.getElementById("americaHymn");
const sovietHymnButton = document.getElementById("sovietHymn");
const germanHymnButton = document.getElementById("germanHymn");
const stopHymnButton = document.getElementById("stopHymn");


const americaHymnAudio = new Audio("usa.mp3"); 
const sovietHymnAudio = new Audio("ussr.mp3"); 
const germanHymnAudio = new Audio("erika.mp3");

americaHymnButton.addEventListener("click", () => {
    americaHymnAudio.play();
});

sovietHymnButton.addEventListener("click", () => {
    sovietHymnAudio.play();
});

germanHymnButton.addEventListener("click", () => {
    germanHymnAudio.play();
});

stopHymnButton.addEventListener("click", () => {
    americaHymnAudio.pause();
    sovietHymnAudio.pause();
    germanHymnAudio.pause();
});



const questions = [
    {
        questionText: "Kdy začala druhá světová válka?",
        answers: [
            { text: "1945", correct: false },
            { text: "1939", correct: true },
            { text: "1946", correct: false },
            { text: "1916", correct: false }
        ]
    },
    {
        questionText: "Jaký byl význam Mnichovské dohody v předvečer války?",
        answers: [
            { text: "Mnichovská dohoda ukončila válku, byla podepsána v Paříži, zahrnovala území Polska.", correct: false },
            { text: "Mnichovská dohoda umožnila Německu anektovat Sudety, což bylo území Československa, bez vojenského zásahu spojenců.", correct: true }
        ]
    },
    {
        questionText: "Kdy a kde byla podepsaná Mnichovská dohoda?",
        answers: [
            { text: "29. září 1938 v Mnichově", correct: true },
            { text: "12.října 1940 v Praze", correct: false },
            { text: "20.června 1945 v Berlíně", correct: false },
            { text: " 6.10.1920 v Paříži", correct: false }
        ]
    },
    {
        questionText: "Jaký byl význam bitvy u Stalingradu?",
        answers: [
            { text: "Bitva u Stalingradu byla obratným bodem války na východní frontě a znamenala porážku Německa a jeho spojenců v Sovětském svazu.", correct: true },
            { text: "Bitva u Stalingradu byla bitvou ve Středozemním moři, byla bitvou mezi USA a Japonskem, skončila nerozhodně.", correct: false }
        ]
    },
    {
        questionText: "Kdo byli spojenci Adolfa Hitlera?",
        answers: [
            { text: "Slovensko, Itálie, Rakousko.", correct: true },
            { text: "Rakousko, Itálie, Česko.", correct: false },
            { text: "Rakousko, Itálie, Slovinsko.", correct: false},
            { text: "Rakousko, Itálie, Polsko.", correct: false }
        ]
    },
    {
        questionText: "Kdo byl vůdcem Nacistického Německa během druhé světové války?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Adolf Hitler", correct: true },
            { text: "Winston Churchill", correct: false },
            { text: "Josef Stalin", correct: false }
        ]
    },
    {
        questionText: "Která událost označuje oficiální začátek druhé světové války?",
        answers: [
            { text: "Invaze do Polska", correct: true },
            { text: "Bombardování Pearl Harboru", correct: false },
            { text: "Kapitulace Německa", correct: false },
            { text: "Vylodění spojeneckých sil v Normandii", correct: false }
        ]
    },
    {
        questionText: "Která událost byla označována jako 'D-Day'?",
        answers: [
            { text: "Bitva u Stalingradu", correct: false },
            { text: "Operace Barbarossa", correct: false },
            { text: "Bitva u Midway", correct: false },
            { text: "Vylodění v Normandii", correct: true }
        ]
    },
    {
        questionText: "Jaký byl kódový název pro německou invazi do Sovětského svazu v roce 1941?",
        answers: [
            { text: "Operace Overlord", correct: false },
            { text: "Operace Barbarossa", correct: true },
            { text: "Operace Market Garden", correct: false },
            { text: "Operace Torch", correct: false }
        ]
    },
    {
        questionText: "Které státy ve Skandinávii obsadil Hitler?",
        answers: [
            { text: "Norsko a Dánsko", correct: true },
            { text: "Finsko a Rusko", correct: false },
            { text: "Egypt a Francie", correct: false },
            { text: "Norsko a Česko", correct: false }
        ]
    },
    {
        questionText: "Ve kterém roce se připojilo USA do války?",
        answers: [
            { text: "1939", correct: false },
            { text: "1945", correct: false },
            { text: "1941", correct: true },
            { text: "1943", correct: false }
        ]
    },
    {
        questionText: "Zaútočilo SSSR na Japonsko po konci druhé světové války v Evropě?",
        answers: [
            { text: "Ano", correct: true },
            { text: "Ne", correct: false }
        ]
    },
    {
        questionText: "Co se skrývá pod pojmem appeasement?",
        answers: [
            { text: "politika agrese", correct: false },
            { text: "politika ústupků", correct: true }
        ]
    },
    {
        questionText: "Kdo dobyl v roce 1945 Berlín?",
        answers: [
            { text: "Češi", correct: false },
            { text: "Britové", correct: false },
            { text: "Rudá armáda", correct: true },
            { text: "USA", correct: false }
        ]
    },
    {
        questionText: "Jak skončila druhá světová válka?",
        answers: [
            { text: "Vyvraždění", correct: false },
            { text: "Kapitulací", correct: true }
        ]
    },
    {
        questionText: "Jaký byl hlavní důvod vstupu Spojených států do druhé světové války?",
        answers: [
            { text: "Hlavním důvodem byl útok na Pearl Harbor v roce 1941.", correct: true },
            { text: "Hlavním důvodem byla německá invaze do Francie v roce 1940.", correct: false }
        ]
    },
    {
        questionText: "Která bitva byla označována jako 'Bitva o Británii'?",
        answers: [
            { text: "Bitva o Británii byla vzdušným bojem mezi RAF a Luftwaffe v roce 1940.", correct: true },
            { text: "Bitva o Británii byla pozemní bitvou mezi Spojeným královstvím a Německem.", correct: false }
        ]
    },
    {
        questionText: "Která událost znamenala konec války v Evropě?",
        answers: [
            { text: "Konec války v Evropě byl označen 8. května 1945.", correct: true },
            { text: "Konec války v Evropě byl označen 2. září 1945.", correct: false }
        ]
    },
    {
        questionText: "Které dvě jaderné bomby byly shozeny na Japonsko během války?",
        answers: [
            { text: "Byly to bomby 'Little Boy' (shozena na Hirošimu) a 'Fat Man' (shozena na Nagasaki).", correct: true },
            { text: "Byly to bomby 'Big Boy' a 'Slim Man'.", correct: false }
        ]
    },
    {
        questionText: "Který vůdce byl známý jako 'Otec vlasti' a vedl Sovětský svaz během války?",
        answers: [
            { text: "Josif Stalin vedl Sovětský svaz během války.", correct: true },
            { text: "Vůdcem Sovětského svazu během války byl Jusif Gagarič Lenin.", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    introContainer.style.display = "block";
    introContainer.style.animation = "fadeIn 2s";
    introText.innerText = "Píše se rok 1943, unikl jsem smrti v Osvětimi a skryl jsem se v malé polské vesnici Lískovice. Vesničané mi pomohli s novou identitou a naučili mě, jak se skrývat. Teď jsme silnou komunitou a odoláváme nacistům, věříme v lepší zítřky. Pomoz mi osvobodit okupovanou vesnici pomocí otázek.";
    

    setTimeout(() => {
        introContainer.style.animation = ""; 
        introContainer.style.display = "none";
        questionContainer.style.display = "block";
        questionContainer.style.animation = "slideIn 1s"; 
        
        setTimeout(() => {
            showQuestion(currentQuestionIndex);
        }, 1000); 
    }, 20000); 
});

function showQuestion(questionIndex) {
    questionContainer.style.animation = "slideIn 1s";
    const currentQuestion = questions[questionIndex];
    question.innerText = currentQuestion.questionText;
    answersList.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const answerItem = document.createElement("li");
        answerItem.innerHTML = `<input type="radio" name="answer" value="${index}"> ${answer.text}`;
        answersList.appendChild(answerItem);
    });

    checkButton.disabled = false;
}

checkButton.addEventListener("click", () => {
    const selectedAnswerInput = document.querySelector("input[name='answer']:checked");

    if (!selectedAnswerInput) {
        result.textContent = "Vyberte odpověď.";
        return;
    }

    const selectedAnswerIndex = parseInt(selectedAnswerInput.value);
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.answers[selectedAnswerIndex].correct) {
        correctAnswers++;
        result.textContent = "Správně!";
    } else {
        result.textContent = "Chyba, správná odpověď je: " + currentQuestion.answers.find(answer => answer.correct).text;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        checkButton.disabled = true;
        const totalQuestions = questions.length;
        const incorrectAnswers = totalQuestions - correctAnswers;

        result.textContent = `Konec hry! Správných odpovědí: ${correctAnswers}/${totalQuestions}`;
    }
});


startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    introContainer.style.display = "block";
    introText.innerText = "Píše se rok 1943, unikl jsem smrti v Osvětimi a skryl jsem se v malé polské vesnici Lískovice. Vesničané mi pomohli s novou identitou a naučili mě, jak se skrývat. Teď jsme silnou komunitou a odoláváme nacistům, věříme v lepší zítřky. Pomoz mi osvobodit okupovanou vesnici pomocí otázek.";
    setTimeout(() => {
        introContainer.style.display = "none";
        questionContainer.style.display = "block";
        showQuestion(currentQuestionIndex);
    }, 5000); // 5000 ms = 5 sekund
});
