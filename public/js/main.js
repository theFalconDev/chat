const chatForm = document.querySelector("#chat-form");
const msgInp = document.querySelector("#msg");
const socket = io();

socket.on("o'roq", (xabar) => {
  console.log(xabar);
});

socket.on("lapatka", (xabar) => {
  console.log(xabar);
});

socket.on("arava", (xabar) => {
  console.log(xabar);
});

socket.on("xabar", (xabar) => {
  console.log(xabar);

  outPutMessages(xabar);
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const xabar = msgInp.value;
  socket.emit("chat-message", xabar);
});

// throw  message DOM exception

function OutPutMessages(xabar) {
  const div = document.createElement("div");
  div.classlistAdd("message");

  div.innerHTML = `
  <p class="meta">Brad <span>9:12pm</span></p>
          <p class="text">
           ${xabar}
          </p>`;

  document.querySelector(".chat-messages").appendChild(div);
}
