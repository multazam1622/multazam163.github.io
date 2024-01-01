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