const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (response) => {
    chatbox.appendChild(createChatLi(response, "incoming"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
}

const handleChat = () => {
    const userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi();

        // Generate response based on user message
        const response = generateUserResponse(userMessage);
        generateResponse(response);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// Function to generate response based on user message
const generateUserResponse = (userMessage) => {
    const knowledgeBase = {
        "apa itu peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "Apa Itu Peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "apa itu peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "Apa Itu Peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "Peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "Peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "Pengertian Peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "Pengertian peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "pengertian peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "pengertian Peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "Pengertian Peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "Pengertian peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "pengertian peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "pengertian Peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
        "Pengertian Kaidah Pencacahan?": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
        "pengertian kaidah pencacahan?": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
        "Pengertian Kaidah Pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
        "pengertian kaidah pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
        "Kaidah Pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
        "kaidah pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
        "kaidah Pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
        "Kaidah pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
        "Rumus Umum Kaidah Pencacahan": "a x b x c x ...",
        "rumus umum kaidah pencacahan": "a x b x c x ...",
        "Rumus Kaidah Pencacahan": "a x b x c x ...",
        "rumus kaidah pencacahan": "a x b x c x ...",
        "Permutasi": "Permutasi adalah menentukan banyak susunan dengan memerhatikan urutan.",
        // ... tambahkan data lainnya ...
    };
    return knowledgeBase[userMessage] || "Maaf, pertanyaan tidak ditemukan dalam basis data.";
};


const navBar = document.querySelector("nav"),
        menuBtns = document.querySelectorAll(".menu-icon"),
        overlay = document.querySelector(".overlay");

      menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", () => {
          navBar.classList.toggle("open");
        });
      });

      overlay.addEventListener("click", () => {
        navBar.classList.remove("open");
      });


      const quizData = [
        {
            question: "Dua buah dadu dilempar satu kali. Peluang muncul jumlah mata dadu 10 adalah ...?",
            options: ["A. P = 3/36", "B. P = 4/36", "C. P = 5/36", "D. P = 6/36", "E. P = 7/36"],
            correct: "B"
        },
        {
          question: "Dari 1 set kartu bridge diambil 1 kartu. Pluang terambil kartu As adalah ...?",
          options: ["A. P = 4/52", "B. P = 8/52", "C. P = 13/52", "D. P = 28/52", "E. P = 26/52"],
          correct: "A"
      },
      {
        question: "Dari 1 koin dan 1 dadu dilempar 1 kali. Peluang muncul gambar pada koin dan angka ganjil pada dadu adalah ...",
        options: ["A. P = 1/3", "B. P = 1/4", "C. P = 2/3", "D. P = 5/12", "E. P = 7/12"],
        correct: "B"
    },
        {
          question: "Dari angka-angka 2, 3, 4, 5, 6 akan disusun 3 angka berlainan. Banyak susunan angka yang dapat dibuat adalah ...?",
          options: ["A. 30", "B. 60", "C. 90", "D. 125", "E. 720"],
          correct: "B"
      },
      {
        question: "Ada 2 orang laki-laki dan 3 orang perempuan duduk berjajar. Banyak susunan duduk yang dapat dibuat adalah ...?",
        options: ["A. 24", "B. 48", "C. 120", "D. 240", "E. 720"],
        correct: "C"
      },
      {
        question: "Dari 10 mangga yang ada, ada 7 mangga baik dan 3 mangga busuk. Diambil 1 mangga dari 10 mangga tersebut. Peluang terambil mangga busuk adalah ...?",
        options: ["A. P = 2/10", "B. P = 3/10", "C. P = 5/10", "D. P = 7/10", "E. P = 9/10"],
        correct: "B"
      },
      {
        question: "6 orang pengurus OSIS sedang mengadakan rapat dengan posisi duduk melingkar. Banyak susunan duduk yang dapat dibuat adalah ...?",
        options: ["A. 720", "B. 360", "C. 120", "D. 24", "E. 6"],
        correct: "C"
      },
      {
        question: "Izah, Nini, dan 5 orang kawannya sedang duduk dengan posisi duduk melingkar. Banyak susunan duduk yang dapat dibuat jika Izah dan Nini harus duduk berdampingan adalah ...?",
        options: ["A. 720", "B. 360", "C. 240", "D. 120", "E. 48"],
        correct: "C"
      },
      {
        question: "Seorang murid diminta mengerjakan 9 dari 10 soal ulangan, tetapi soal nomor 1 sampai 5 harus di kerjakan. Banyaknya pilihan yang dapat diambil murid tersebut adalah ...?",
        options: ["A. 4", "B. 5", "C. 6", "D. 9", "E. 10"],
        correct: "B"
      },
      {
        question: "Bilangan terdiri dari 3 angka disusun dari angka-angka 2, 3, 5, 6, 7, dan 9. Banyaknya bilangan dengan angka-angka yang berlainan dan yang lebih kecil dari 400 adalah ...?",
        options: ["A. 20", "B. 35", "C. 40", "D. 80", "E. 120"],
        correct: "C"
      },
      {
        question: "Dari sekelompok remaja terdiri atas 10 pria dan 7 wanita, dipilih 2 pria dan 3 wanita, maka banyaknya cara pemilihan adalah ...?",
        options: ["A. 1557", "B. 1575", "C. 1595", "D. 5175", "E. 5715"],
        correct: "B"
      },
      {
        question: "Banyaknya segitiga yang dapat dibuat dari 7 titik tanpa ada tiga titik terletak segaris adalah...?",
        options: ["A. 10", "B. 20", "C. 40", "D. 80", "E. 120"],
        correct: "C"
      },
      {
        question: "Disuatu perkumpulan akan dipilih perwakilan yang terdiri dari 6 orang. Calon yang tersedia ada 5 pria dan 4 wanita. Banyaknya susunan perwakilan yang dapat dibentuk jika sekurang-kurangnya terpilih 3 pria adalah ...?",
        options: ["A. 84", "B. 82", "C. 76", "D. 74", "E. 76"],
        correct: "A"
      },
      {
        question: "Dari 12 orang yang terdiri atas 8 pria dan 4 wanita akan dibentuk kelompok kerja beranggotakan 4 orang. Jika dalam kelompok kerja itu terdapat paling sedikit 2 pria, maka banyaknya cara membentuknya ada ...?",
        options: ["A. 442", "B. 448", "C. 456", "D. 462", "E. 468"],
        correct: "A"
      },
      {
        question: "Sebuah panitia yang beranggotakan 4 orang akan dipilih dari kumpulan 4 pria dan 7 wanita. Bila dalam panitia tersebut diharuskan ada paling sedikit 4 wanita, maka banyaknya cara memilih adalah ...?",
        options: ["A. 1008", "B. 672", "C. 330", "D. 301", "E. 27"],
        correct: "D"
      },
      {
        question: "Dalam suatu kegiatan pramuka, regu A harus menambah 3 anggota lagi yang dapat dipilih dari 7 orang. Banyaknya cara memilih yang dapat dilakukan oleh regu A adalah ...?",
        options: ["A. 70", "B. 54", "C. 35", "D. 32", "E. 28"],
        correct: "C"
      },
      {
        question: "Akan dibuat nomor-nomor undian yang terdiri atas satu huruf dan diikuti dua buah angka yang berbeda dan angka kedua adalah bilangan genap. Banyaknya nomor undian ada ...?",
        options: ["A. 1160", "B. 1165", "C. 1170", "D. 1180", "E. 1185"],
        correct: "C"
      },
      {
        question: "Lima pasang suami istri pergi ke suatu pesta pernikahan dengan menumpang 2 buah mobil yang masing-masing dengan kapasitas 6 orang jika setiap pasang harus naik pada mobil yang sama, maka banyaknya cara pengaturan penumpang kedua buah mobil tersebut adalah ... ?",
        options: ["A. 12", "B. 14", "C. 16", "D. 20", "E. 24"],
        correct: "A"
      },
      {
        question: "Suatu delegasi terdiri dari 3 pria dan 3 wanita yang dipilih dari himpunan 5 pria yang berbeda usia dan 5 wanita yang juga berbeda usia. Delegasi itu boleh mencangkup paling banyak hanya satu anggota termuda dari kalangan wanita atau anggota termuda dari kalangan pria. Dengan persyaratan ini, banyak cara menyusun keanggotaan delegasi iini adalah ...?",
        options: ["A. 52", "B. 56", "C. 60", "D. 64", "E. 68"],
        correct: "D"
      },
      {
        question: "Dari angka-angka 2, 3, 4, 5, 6, 7, 8, 9 akan dibuat bilangan yang terdiri dari 3 angka berbeda. Banyaknya bilangan berbeda yang lebih besar dari 640 tetapi lebih kecil dari 860 adalah ...?",
        options: ["A. 78", "B. 84", "C. 90", "D. 96", "E. 102"],
        correct: "C"
      },
      {
        question: "Presiden, wakil presiden, sekretaris kebinet dan 5 orang menteri duduk pada 8 kursi pada sebuah meja bunder untuk mengadakan rapat kebinet terbatas. Jika sekretaris kebinet harus duduk diantara presiden dan wakil presiden dan wakil presiden, maka banyaknya cara duduk ke-8 orang tersebut adalah ...?",
        options: ["A. 240", "B. 120", "C. 60", "D. 48", "E. 24"],
        correct: "A"
      },
      {
        question: "Suatu panitia yang terdiri atas 4 orang dengan perincian seorang sebagai ketua, seorang sebagai sekretaris, dan 2 orang sebagai anggota (kedua anggota tidak dibedakan). Akan dipilih dari 3 pria dan 3 wanita yang tersedia. jika sekretarisnya harus wanita, maka banyaknya cara membentuk panitia tersebut adalah ...?",
        options: ["A. 90", "B. 108", "C. 150", "D. 180", "E. 360"],
        correct: "A"
      },
      {
        question: "Dari 8 pasangan suami istri akan dibentuk tim beranggotakan 5 orang terdiri dari 3 pria dan 2 wanita dengan ketentuan tak boleh ada pasangan suami istri. Banyaknya tim yang dapat dibentuk adalah ...?",
        options: ["A. 56", "B. 112", "C. 336", "D. 560", "E. 672"],
        correct: "D"
      },
      {
        question: "Tono beserta 9 orang temannya bermaksud membentuk suatu tim bola volley terdiri atas 6 orang. Apabila Tono harus menjadi anggota tim tersebut, maka banyak tim yang mungkin dibentuk adalah...?",
        options: ["A. 126", "B. 162", "C. 210", "D. 216", "E. 252"],
        correct: "A"
      },
      {
        question: "Dari tiga huruf A, B, C dan tiga angka 1, 2 dan 3 akan dibuat plat nomor motor yang dimulai dengan satu huruf, diikuti dua angka dan diakhiri dengan satu huruf. Karena khawatir tidak ada yang mau memakai, pembuat nomor tidak di perbolehkan memuat plat nomor yang memakai angka 13. Banyaknya plat nomor yang dapat dibuat adalah ...?",
        options: ["A. 11", "B. 27", "C. 45", "D. 54", "E. 72"],
        correct: "E"
      },
      {
        question: "Dari 10 orang siswa yang terdiri 7 orang putra dan 3 orang putri akan dibentuk tim yang beranggotakan 5 orang. Jika disyaratkan anggota tim tersebut paling banyak 2 orang putri, maka banyaknya tim yang dapat dibentuk adalah...?",
        options: ["A. 168", "B. 189", "C. 210", "D. 231", "E. 252"],
        correct: "D"
      },
      {
        question: "Diketahui garis g dan h sejajar. Titik A, B, C, dan D terletak pada garis g. Titik E, F dan G terletak pada garis h. Banyaknya segitiga yang bisa dibuat dari 7 titik tersebut adalah...?",
        options: ["A. 20", "B. 30", "C. 40", "D. 50", "E. 60"],
        correct: "B"
      },
      {
        question: "Dari angka-angka 1, 2, 3, 4, 5, 6, 7, 8 akan dibuat bilangan yang terdiri dari 3 angka berbeda. Banyaknya bilangan berbeda yang lebih besar dari 520 tetapi lebih kecil dari 760 adalah...?",
        options: ["A. 120", "B. 108", "C. 90", "D. 84", "E. 72"],
        correct: "B"
      },
      {
        question: "Suatu delegasi terdiri dari 3 pria dan 3 wanita yang dipilih dari himpunan 5 pria yang berbeda usia dan 6 wanita yang juga berbeda usia. Delegasi itu boleh mencangkup paling banyak hanya satu anggota termuda dari kalangan wanita atau anggota termuda dari kalangan pria. Dengan persyaratan ini, banyak cara mengusun keanggotaan delegasi ini adalah...?",
        options: ["A. 100", "B. 110", "C. 120", "D. 130", "E. 140"],
        correct: "A"
      },
      {
        question: "Presiden, wakil presiden, sekretaris kabinet dan 6 orang menteri duduk pada 9 kursi pada sebuah meja bundar untuk mengadakan rapat kabinet harus duduk diantara presiden dan wakil presiden, maka banyak cara duduk ke-8 orang tersebut adalah...?",
        options: ["A. 240", "B. 360", "C. 720", "D. 1440", "E. 2880"],
        correct: "A"
      },
      {
        question: "Dari 2 anak kelas 1, 3 anak kelas 2, dan 4 anak kelas 3 akan dipilih ketua, sekretaris, dan bendahara. Banyak susunan panitia jika kelas asal ketua harus lebih tinggi daripada asal kelas sekretaris dan bendahara adalah...?",
        options: ["A. 60", "B. 70", "C. 86", "D. 100", "E. 99"],
        correct: "C"
      },
      {
        question: "Adi, Budi, Ani, dan Ita sedang duduk berjajar. Peluang Budi duduk di sebelah Ita adalah...?",
        options: ["A. 0,25", "B. 0,33", "C. 0,5", "D. 0,67", "E. 0,75"],
        correct: "C"
      },
      ];
      
      const quizContainer = document.getElementById("quiz");
      const resultsContainer = document.getElementById("results");
      const timer = document.getElementById("time");
      
      let currentQuestion = 0;
      let score = 0;
      let timeRemaining = 1800; // Waktu dalam detik (10 menit)
      
      function startQuiz() {
        displayQuestion();
        startTimer();
      }
      
      function displayQuestion() {
        if (currentQuestion < quizData.length) {
            const questionData = quizData[currentQuestion];
            quizContainer.innerHTML = `
                <p>${questionData.question}</p>
                ${questionData.options.map(option => `
                    <button class="choice-button" onclick="selectOption('${option.charAt(0)}')">${option}</button>
                `).join('')}
            `;
        } else {
            endQuiz();
        }
      }
      
      function startTimer() {
        const interval = setInterval(function() {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            
            if (timeRemaining <= 0) {
                clearInterval(interval);
                endQuiz();
            }
        }, 1000);
      }
      
      function selectOption(selectedOption) {
        if (selectedOption === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        displayQuestion();
      }
      
      function endQuiz() {
        quizContainer.style.display = "none";
        resultsContainer.style.display = "block";
        if (currentQuestion < quizData.length) {
            resultsContainer.innerHTML = `<h2>Waktu habis. Skor Anda: ${score}/${quizData.length}</h2>`;
        } else {
            resultsContainer.innerHTML = `<h2>Skor Anda: ${score}/${quizData.length}</h2>`;
        }
      }
      
      startQuiz();
      