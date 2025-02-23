/*
//open ai
const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");

let API_URL = "https://api.openai.com/v1/chat/completions";
let API_KEY = /*Get API KEY at https://platform.openai.com/account/api-keys 

sendBtn.onclick = function () {
  if(messageBar.value.length > 0){
    const UserTypedMessage = messageBar.value;
    messageBar.value = "";

    let message =
    `<div class="chat message">
    <img src="img/user.jpg">
    <span>
      ${UserTypedMessage}
    </span>
  </div>`;

  let response = 
  `<div class="chat response">
  <img src="img/chatbot.jpg">
  <span class= "new">...
  </span>
</div>`

    messageBox.insertAdjacentHTML("beforeend", message);

    setTimeout(() =>{
      messageBox.insertAdjacentHTML("beforeend", response);

      const requestOptions = {
        method : "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [{"role": "user", "content": UserTypedMessage}]
        })
      }

      fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        const ChatBotResponse = document.querySelector(".response .new");
        ChatBotResponse.innerHTML = data.choices[0].message.content;
        ChatBotResponse.classList.remove("new");
      }).catch((error) => {
        ChatBotResponse.innerHTML = "Opps! An error occured. Please try again"
      })
    }, 100);
    
   // key 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
  }
}*

//deepseek
const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");
let API_KEY = "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"; // Replace with your actual Gemini API Key
// Replace with the correct Gemini API URL
let API_URL = "https://openrouter.ai/api/v1";

sendBtn.onclick = function () {
  if(messageBar.value.length > 0){
    const UserTypedMessage = messageBar.value;
    messageBar.value = "";

    let message = 
    `<div class="chat message">
      <img src="img/user.jpg">
      <span>
        ${UserTypedMessage}
      </span>
    </div>`;

    let response = 
    `<div class="chat response">
      <img src="img/chatbot.jpg">
      <span class="new">...</span>
    </div>`;

    messageBox.insertAdjacentHTML("beforeend", message);

    setTimeout(() => {
      messageBox.insertAdjacentHTML("beforeend", response);

      // Setup the request for Gemini API
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          "model": "gemini-1.5-flash", // Example model
          "prompt": UserTypedMessage,  // Sending the user's message as the prompt
          "max_output_tokens": 150  // Adjust token output length
        })
      };

      // Fetch the response from the Gemini API
      fetch(API_URL, requestOptions)
        .then(res => res.json())
        .then(data => {
          console.log(data); // Log the full API response to check its structure
          const ChatBotResponse = document.querySelector(".response .new");
          
          // Check if the response contains the expected field (adjust based on actual API response)
          if (data && data.generated_text) {
            ChatBotResponse.innerHTML = data.generated_text;  // Update with generated content
          } else {
            // Log if the expected response format is missing
            console.error("Error: No generated text found in response.");
            ChatBotResponse.innerHTML = "Sorry, I couldn't generate a response.";
          }
          ChatBotResponse.classList.remove("new");
        })
        .catch((error) => {
          console.error("Error during API call:", error);
          const ChatBotResponse = document.querySelector(".response .new");
          ChatBotResponse.innerHTML = "Oops! An error occurred. Please try again.";
        });
    }, 100);
  }
};*/
const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");

let API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDg-i4YDL7asp762kC8VgKASPc9io6P4BQ";
let API_KEY = "AIzaSyDg-i4YDL7asp762kC8VgKASPc9io6P4BQ";

sendBtn.onclick = function () {
  if (messageBar.value.length > 0) {
    const UserTypedMessage = messageBar.value;
    messageBar.value = "";

    let message =
      `<div class="chat message">
      <img src="img/user.jpg">
      <span>
        ${UserTypedMessage}
      </span>
    </div>`;

    let response =
      `<div class="chat response">
      <img src="img/chatbot.jpg">
      <span class="new">...</span>
    </div>`;

    messageBox.insertAdjacentHTML("beforeend", message);

    setTimeout(() => {
      messageBox.insertAdjacentHTML("beforeend", response);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [{ "role": "user", "content": UserTypedMessage }],
        }),
      };

      fetch(API_URL, requestOptions)
        .then((res) => res.json())
        .then((data) => {
          const ChatBotResponse = document.querySelector(".response .new");
          if (data.choices && data.choices[0].message.content) {
            ChatBotResponse.innerHTML = data.choices[0].message.content;
          } else {
            ChatBotResponse.innerHTML = "Sorry, unable to generate message.";
          }
          ChatBotResponse.classList.remove("new");
        })
        .catch((error) => {
          const ChatBotResponse = document.querySelector(".response .new");
          ChatBotResponse.innerHTML = "Sorry, unable to generate message.";
          ChatBotResponse.classList.remove("new");
        });
    }, 100);
  }
};
