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
        "Permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
        "permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
        "Pengertian Permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
        "pengertian permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
        "Pengertian permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
        "Kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
        "kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
        "Pengertian Kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
        "pengertian kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
        "Pengertian kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
        "perbedaan kombinasi dengan permutasi": "Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda. sedangkan Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda.",
        "Perbedaan kombinasi dengan permutasi": "Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda. sedangkan Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda.",
        "perbedaan permutasi dengan kombinasi": "Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda. sedangkan Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda.",
        "Perbedaan permutasi dengan kombinasi": "Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda. sedangkan Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda.",
        "perbedaan permutasi dan kombinasi": "Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda. sedangkan Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda.",
        "Perbedaan permutasi dan kombinasi": "Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda. sedangkan Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda.",
        "perbedaan kombinasi dan permutasi": "Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda. sedangkan Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda.",
        "Perbedaan kombinasi dan permutasi": "Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda. sedangkan Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda.",
        "rumus kombinasi": "C(n, k) = n! / (k!(n - k)!)",
        "Rumus kombinasi": "C(n, k) = n! / (k!(n - k)!)",
        "Rumus permutasi": "P(n, k) = n! / (n - k)!",
        "rumus permutasi": "P(n, k) = n! / (n - k)!",
        "contoh soal permutasi": "Seorang fotografer pernikahan harus memanfaatkan waktu dengan baik. Ia hendak mengambil foto dari 10 tamu yang merupakan kerabat dekat. Mereka ingin berfoto secara bergantian dengan susunan 5 orang 5 orang berjejer dari kanan ke kiri. Banyak posisi foto yang dapat dipilih pada saat sesi pertama adalah… penyelesaian: P(n,r) = n!/(n-r)! → P(10,5) = 10!/(10-5)! → = 10 x 9 x 8 x 7 x 6 x 5! / 5! → = 10 x 9 x 8 x 7 x 6 → = 30.240",
        "soal permutasi": "Seorang fotografer pernikahan harus memanfaatkan waktu dengan baik. Ia hendak mengambil foto dari 10 tamu yang merupakan kerabat dekat. Mereka ingin berfoto secara bergantian dengan susunan 5 orang 5 orang berjejer dari kanan ke kiri. Banyak posisi foto yang dapat dipilih pada saat sesi pertama adalah… penyelesaian: P(n,r) = n!/(n-r)! → P(10,5) = 10!/(10-5)! → = 10 x 9 x 8 x 7 x 6 x 5! / 5! → = 10 x 9 x 8 x 7 x 6 → = 30.240",
        "contoh soal kombinasi": "Pada sebuah box terdapat 10 kelereng kecil yang sudah diberi tulisan huruf A hingga J. Seorang anak ingin mengambil 4 sekaligus secara acak. Ada berapa cara yang bisa ia gunakan untuk mengambilnya?  Penyelesaian; C (n,r) = n! / r! . (n – r)! → C (10,4) = 10! / 4! . (10 – 4)! → = 10 x 9 x 8 x 7 x 6! / 4 x 3 x 2 x 1 x 6! → = 5 x 3 x 2 x 7 x 6! / 6! → = 5 x 3 x 2 x 7 → = 210",
        "soal kombinasi": "Pada sebuah box terdapat 10 kelereng kecil yang sudah diberi tulisan huruf A hingga J. Seorang anak ingin mengambil 4 sekaligus secara acak. Ada berapa cara yang bisa ia gunakan untuk mengambilnya?  Penyelesaian; C (n,r) = n! / r! . (n – r)! → C (10,4) = 10! / 4! . (10 – 4)! → = 10 x 9 x 8 x 7 x 6! / 4 x 3 x 2 x 1 x 6! → = 5 x 3 x 2 x 7 x 6! / 6! → = 5 x 3 x 2 x 7 → = 210",
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