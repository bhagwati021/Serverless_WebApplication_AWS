const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');
const counter = document.querySelector('.counter-number');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    if (name) {
        greeting.textContent = `Hello, ${name}! Welcome to my site.`;
        greeting.style.opacity = 1;
    } else {
        greeting.textContent = 'Please enter your name!';
        greeting.style.color = 'red';
    }
});

async function updateCounter() {
    try {
        const response = await fetch(
            'https://mkzhwnihcrikruummchfj7seue0njdls.lambda-url.ap-south-1.on.aws/'
        );
        const data = await response.json();
        counter.textContent = `Views: ${data}`;
    } catch (error) {
        counter.textContent = 'Views: Unable to fetch data';
    }
}

updateCounter();
