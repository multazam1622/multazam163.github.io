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
        question: "Dari 1 koin dan 1 dadu dilempar 1 kali. Peluang muncul gambar pada koin dan angka ganjil pada dadu adalah ...",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "A"
    },
        {
          question: "Dari angka-angka 2, 3, 4, 5, 6 akan disusun 3 angka berlainan. Banyak susunan angka yang dapat dibuat adalah ...?",
          options: ["A. Permutasi", "B. Kombinasi"],
          correct: "A"
      },
      {
        question: "Diketahui A={9,7,6,5,4,3,2,1}. Lima anggota A diambil secara acak. Peluang terambilnya lima anggota tersebut berjumlah genap adalah...?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Seorang satpam bank ingin mencetak nomor antrian nasabah yang terdiri dari tiga angka. Jika nomor antrian tersebut tidak memuat angka yang sama yang dibentuk dari angka 0, 1, 2, 3. Banyak pilihan nomor antrian yang dapat dibuat adalah ...?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "A"
      },
      {
        question: "Setiap tahun, SMA Pelita Bangsa selalu mengadakan pentas seni. Sebelum acara akbar, para siswa mengadakan pemilihan ketua, sekretaris dan bendahara. Setelah melakukan seleksi, ada 5 orang siswa yang mendaftarkan diri. Banyak cara untuk memilih ketua, sekretaris dan bendahara untuk acara tersebut adalah ...?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "A"
      },
      {
        question: "Sebuah kantong berisi 6 kelereng putih, 4 kelereng biru dan 3 kelereng merah. Banyak cara pengambilan 3 kelereng putih dari kantong tersebut adalah ...?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Seorang peternak akan membeli hewan ternak untuk dipelihara. Dia akan membeli 3 ekor sapi, 4 ekor domba dan 5 ekor kambing. Seorang pedagang mempunyai 6 ekor sapi, 6 ekor domba dan 8 ekor kambing. Banyak cara yang dapat dilakukan untuk memilih hewan ternak yang akan dibeli adalah ...?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Perusahaan pengalengan sedang membutuhkan 4 karyawan baru untuk mengisi posisi berbeda yang kosong. Namun, calon yang tersedia sebanyak 9. Tentukan berapa banyak susunan karyawan yang mungkin dilakukan.",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "A"
      },
      {
        question: "Seorang ilmuwan ingin menyusun kata dari 8 huruf. Tentukan berapa banyak susunan 5 huruf yang bisa dibuat oleh ilmuwan tersebut!",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "A"
      },
      {
        question: "Terdapat 8 orang yang sedang bermain bersama. Dalam permainan tersebut, disediakan 4 kursi kosong dan 1 kursi telah terisi. Berapakah banyak susunan yang bisa di buat dari sisi anak yang belum duduk?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "A"
      },
      {
        question: "Dari 4 bus di terminal akan dipilih 2 bus untuk berangkat ke Yogyakarta. Berapakah cara memilih bus tersebut?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Rudi pergi ke kamar untuk mengambil 3 jenis buku. Jika di kamarnya terdapat 6 jenis buku, hitung banyaknya kombinasi tiga jenis buku yang mungkin dibawa oleh Rudi ?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Pada suatu arisan yang dihadiri 7 ibu. Ke tujuh ibu tersebut saling berjabat tangan satu sama lain. Hitunglah banyak jabat tangan yang terjadi?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Kepengurus RT terdiri dari 5 orang laki-laki dan 3 orang wanita akan dipilih 4 perwakilan untuk menghadiri upacara 17 Agustus. Hitung banyak cara memilih jika perwakilan terdiri dari 2 orang laki-laki dan 2 orang perempuan?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Tia ingin membeli 6 jenis boneka di toko yang menjual 9 jenis boneka. Jika 2 jenis boneka sudah pasti dibeli, berapa banyak kombinasi 6 boneka yang mungkin dibeli Tia?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Linda akan mengambil 2 teko dan 3 mangkok dari lemari dapur yang menyimpan 6 teko dan 4 mangkok. Hitung banyak cara Linda bisa mengambil teko dan mangkok?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Sebuah kelas akan memilih 4 putra dan 5 putri untuk menjadi paduan suara. Jumlah siswa di kelas tersebut adalah 20 orang. Jika terdapat 9 orang putra di kelas tersebut, berapakah banyak cara memilih paduan suara dari kelas tersebut!",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Terdapat 8 orang dalam suatu kelompok. Jika 3 dari 8 orang tersebut akan dijadikan delegasi dalam suatu pertemuan internasional, berapa banyak susunan delegasi yang mungkin?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Berapa banyak susunan yang mungkin terjadi pada kode pin 4 digit dengan angka yang tidak boleh berulang?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "A"
      },
      {
        question: "Suatu perusahaan sedang membuka pendaftaran karyawan baru di bidang pemasaran. Dari 12 orang yang mendaftar sebagai karyawan di bidang tersebut, perusahaan hanya menerima sebanyak 8 orang saja. Tentukan berapa banyak cara menerima 8 karyawan tersebut.",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      {
        question: "Banyak cara untuk memilih seorang ketua, sekertaris dan juga bendahara dari 8 siswa yang tersedia yaitu…",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "A"
      },
      {
        question: "Ada berapakan cara untuk menyusun dua huruf dari satu kata “HIDUP”?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "A"
      },
      {
        question: "Dalam suatu kelas terdiri dari 7 murid perempuan dan juga 3 murid laki-laki. Dari kelas itu kemudian akan dipilih 3 orang murid secara acak. Maka peluang bahwa yang terpilih ketiga-tiganya perempuan yaitu ...?",
        options: ["A. Permutasi", "B. Kombinasi"],
        correct: "B"
      },
      ];
      
      const quizContainer = document.getElementById("quiz");
      const resultsContainer = document.getElementById("results");
      const timer = document.getElementById("time");
      
      let currentQuestion = 0;
      let score = 0;
      let timeRemaining = 1200; // Waktu dalam detik (10 menit)
      
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
      