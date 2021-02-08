const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', () => {
  getRandomJoke()
});

getRandomJoke();

// async function getRandomJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json',
//     },
//   };
//   const res = await fetch("https://icanhazdadjoke.com",
//     config);
//
//   const data = await res.json();
//
//   joke.innerHTML = data.joke;
// }

function getRandomJoke() {
  const config = {
    headers: {
      'Accept': 'application/json',
    },
  };
  fetch("https://icanhazdadjoke.com",
    config)
    .then(res => res.json())
    .then(data => {
      joke.innerHTML = data.joke;
    });

}