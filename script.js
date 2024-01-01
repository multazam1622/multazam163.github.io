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
        "macam macam permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
        "Macam Macam permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
        "macam permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
        "jenis permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
        "jenis jenis permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
        "Jenis Permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
        "permutasi siklis": "Permutasi siklis adalah salah satu konsep dalam teori kombinatorial yang digunakan untuk menghitung berapa banyak cara mengatur elemen-elemen dalam sebuah himpunan sedemikian rupa sehingga mereka membentuk beberapa siklus. Permutasi siklis umumnya digunakan dalam konteks mengatur elemen-elemen dalam suatu himpunan yang dibagi menjadi beberapa kelompok siklis.",
        "pengertian permutasi siklis": "Permutasi siklis adalah salah satu konsep dalam teori kombinatorial yang digunakan untuk menghitung berapa banyak cara mengatur elemen-elemen dalam sebuah himpunan sedemikian rupa sehingga mereka membentuk beberapa siklus. Permutasi siklis umumnya digunakan dalam konteks mengatur elemen-elemen dalam suatu himpunan yang dibagi menjadi beberapa kelompok siklis.",
        "rumus permutasi siklis": "Psiklis = (n-1)!",
        "peluang suatu kejadian": "Peluang suatu kejadian adalah ukuran sejauh mana kejadian tersebut mungkin terjadi dalam konteks percobaan atau situasi tertentu. Peluang biasanya dinyatakan sebagai angka antara 0 dan 1, di mana 0 menunjukkan bahwa kejadian tersebut pasti tidak akan terjadi, dan 1 menunjukkan bahwa kejadian tersebut pasti akan terjadi. Sebagai contoh, jika Anda melempar sebuah koin, maka peluang munculnya kepala adalah 0,5 (atau 50%), yang berarti ada setengah peluang bahwa kepala akan muncul.",
        "pengertian peluang suatu kejadian": "Peluang suatu kejadian adalah ukuran sejauh mana kejadian tersebut mungkin terjadi dalam konteks percobaan atau situasi tertentu. Peluang biasanya dinyatakan sebagai angka antara 0 dan 1, di mana 0 menunjukkan bahwa kejadian tersebut pasti tidak akan terjadi, dan 1 menunjukkan bahwa kejadian tersebut pasti akan terjadi. Sebagai contoh, jika Anda melempar sebuah koin, maka peluang munculnya kepala adalah 0,5 (atau 50%), yang berarti ada setengah peluang bahwa kepala akan muncul.",
        "rumus peluang suatu kejadian": "Peluang (A) = Jumlah Kejadian Yang Diinginkan (n(A)) / Jumlah Kemungkinan Kejadian (n(S))",
        "frekuensi harapan": "Frekuensi harapan adalah konsep dalam teori probabilitas yang mengacu pada nilai rata-rata atau ekspektasi dari suatu kejadian atau peristiwa berdasarkan probabilitasnya. Ini adalah angka yang menggambarkan apa yang dapat diharapkan dalam jangka panjang jika percobaan atau situasi serupa diulang banyak kali.",
        "pengertian frekuensi harapan": "Frekuensi harapan adalah konsep dalam teori probabilitas yang mengacu pada nilai rata-rata atau ekspektasi dari suatu kejadian atau peristiwa berdasarkan probabilitasnya. Ini adalah angka yang menggambarkan apa yang dapat diharapkan dalam jangka panjang jika percobaan atau situasi serupa diulang banyak kali.",
        "rumus frekuensi harapan": "Fh = n.P",
        "peluang komplemen": "Peluang komplemen adalah konsep dalam teori probabilitas yang mengacu pada peluang bahwa suatu kejadian tidak terjadi. Ini dapat digunakan untuk menghitung peluang suatu kejadian A yang merupakan lawan dari kejadian B.",
        "pengertian peluang komplemen": "Peluang komplemen adalah konsep dalam teori probabilitas yang mengacu pada peluang bahwa suatu kejadian tidak terjadi. Ini dapat digunakan untuk menghitung peluang suatu kejadian A yang merupakan lawan dari kejadian B.",
        "rumus peluang komplemen": "Pc = 1-P",
        "peluang kejadian majemuk": "Peluang kejadian majemuk adalah konsep dalam teori probabilitas yang berkaitan dengan perhitungan peluang ketika ada lebih dari satu kejadian yang terlibat. Kejadian majemuk terjadi ketika kita ingin menghitung peluang dari kombinasi atau interaksi beberapa kejadian yang terjadi secara bersamaan atau berurutan. ada tiga jenis peluang kejadian majemuk; (1). kejadian saling bebas ; dua kejadian dikatakan saling bebas jika munculnya kejadian pertama tidak mempengaruhi peluang munculnya kejadian kedua.  (2). kejadian saling lepas ; dua kejadian dikatakan saling lepas adalah dua kejadian yang tidak bisa terjadi bersamaan. (3). kejadian tidak saling lepas ; kejadian tidak saling lepas adalah kejadian yang bisa berlangsung secara bersamaan.",
        "pengertian peluang kejadian majemuk": "Peluang kejadian majemuk adalah konsep dalam teori probabilitas yang berkaitan dengan perhitungan peluang ketika ada lebih dari satu kejadian yang terlibat. Kejadian majemuk terjadi ketika kita ingin menghitung peluang dari kombinasi atau interaksi beberapa kejadian yang terjadi secara bersamaan atau berurutan. ada tiga jenis peluang kejadian majemuk; (1). kejadian saling bebas ; dua kejadian dikatakan saling bebas jika munculnya kejadian pertama tidak mempengaruhi peluang munculnya kejadian kedua.  (2). kejadian saling lepas ; dua kejadian dikatakan saling lepas adalah dua kejadian yang tidak bisa terjadi bersamaan. (3). kejadian tidak saling lepas ; kejadian tidak saling lepas adalah kejadian yang bisa berlangsung secara bersamaan.",
        "kejadian saling bebas": "Kejadian saling bebas adalah konsep dalam teori probabilitas yang mengacu pada dua atau lebih kejadian yang tidak saling memengaruhi atau bergantung satu sama lain dalam pengaruh mereka terhadap hasil akhir. Dengan kata lain, jika dua atau lebih kejadian dikatakan saling bebas, maka hasil dari satu kejadian tidak memengaruhi peluang atau hasil dari kejadian lainnya.",
        "pengertian kejadian saling bebas": "Kejadian saling bebas adalah konsep dalam teori probabilitas yang mengacu pada dua atau lebih kejadian yang tidak saling memengaruhi atau bergantung satu sama lain dalam pengaruh mereka terhadap hasil akhir. Dengan kata lain, jika dua atau lebih kejadian dikatakan saling bebas, maka hasil dari satu kejadian tidak memengaruhi peluang atau hasil dari kejadian lainnya.",
        "rumus kejadian saling bebas": "P(A ∩ B) = P(A) x P(B)",
        "kejadian saling lepas": "Kejadian yang saling lepas (independent events) adalah istilah dalam teori probabilitas yang menggambarkan dua atau lebih kejadian yang tidak memiliki hubungan atau ketergantungan satu sama lain dalam hal hasil atau peluangnya. Dalam kejadian saling lepas, hasil atau peluang dari satu kejadian tidak memengaruhi hasil atau peluang dari kejadian lainnya.",
        "pengertian kejadian saling lepas": "Kejadian yang saling lepas (independent events) adalah istilah dalam teori probabilitas yang menggambarkan dua atau lebih kejadian yang tidak memiliki hubungan atau ketergantungan satu sama lain dalam hal hasil atau peluangnya. Dalam kejadian saling lepas, hasil atau peluang dari satu kejadian tidak memengaruhi hasil atau peluang dari kejadian lainnya.",
        "rumus kejadian saling lepas": "P(A ∪ B) = P(A) + P(B)",
        "kejadian tidak saling lepas": "Kejadian yang tidak saling lepas (dependent events) adalah kejadian di mana hasil atau peluang dari satu kejadian memengaruhi hasil atau peluang dari kejadian lainnya. Dalam kejadian yang tidak saling lepas, hubungan antara kejadian-kejadian tersebut menyebabkan salah satu kejadian tergantung pada yang lain.",
        "pengertian kejadian tidak saling lepas": "Kejadian yang tidak saling lepas (dependent events) adalah kejadian di mana hasil atau peluang dari satu kejadian memengaruhi hasil atau peluang dari kejadian lainnya. Dalam kejadian yang tidak saling lepas, hubungan antara kejadian-kejadian tersebut menyebabkan salah satu kejadian tergantung pada yang lain.",
        "rumus kejadian tidak saling lepas": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        "permutasi dan kombinasi": "permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya, kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain. rumus permutasi : P(n, k) = n! / (n - k)!, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil. rumus kombinasi : C(n, k) = n! / (k!(n - k)!)",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        // ... tambahkan data lainnya ...
    };
    return knowledgeBase[userMessage] || "Maaf, pertanyaan tidak ditemukan dalam basis data.";
};


 document.addEventListener("DOMContentLoaded", function () {
        const navBar = document.querySelector("nav"),
          menuBtns = document.querySelectorAll(".menu-icon"),
          overlay = document.querySelector(".overlay"),
          dropdown = document.querySelector(".nav-link.has-dropdown .dropdown-content");

        menuBtns.forEach((menuBtn) => {
          menuBtn.addEventListener("click", () => {
            navBar.classList.toggle("open");
          });
        });

        overlay.addEventListener("click", () => {
          navBar.classList.remove("open");
        });

        const materiLink = document.querySelector(".nav-link.has-dropdown");

        materiLink.addEventListener("click", (event) => {
          dropdown.style.display = dropdown.style.display === "none" ? "flex" : "none";
        });
      });