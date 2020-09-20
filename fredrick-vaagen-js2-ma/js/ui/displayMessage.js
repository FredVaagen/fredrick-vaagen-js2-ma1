export function displayMessage(messageType, message) {
    const element = document.querySelector(".products-container");

    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
