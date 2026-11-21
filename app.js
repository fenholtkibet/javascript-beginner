const heading = document.getElementById('greetings');
const button = document.getElementById('btngreet');

button.addEventListener('click', () => {
    heading.textContent = "Hello from JavaScript beginners!";
});
