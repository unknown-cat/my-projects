const APIURL = 'http://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username)
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard('No profile with this user name');
      console.error(err)
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');

    addReposToCard(data);
  } catch (err) {
    if (err) {
      createErrorCard('Problem fetching repos');
      console.error(err)
    }
  }

}

function createUserCard(user) {
  const { avatar_url, name, login, bio, followers, following, public_repos } = user;

  const cardHTML = `
  <div class="card">
    <div>
      <img src="${ avatar_url }"
           alt="${ name ? name : login }"
           class="avatar">
    </div>
    <div class="user-info">
      <h2>${ name ? name : login }</h2>
      <p>${ bio }</p>
      <ul>
        <li>${ followers } <strong>Followers</strong></li>
        <li>${ following } <strong>Following</strong></li>
        <li>${ public_repos } <strong>repo</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos
    .slice(0, 5)
    .forEach(repo => {
      const repoEl = document.createElement('a');

      repoEl.classList.add('repo');
      repoEl.href = repo.html_url;
      repoEl.target = '_blank';
      repoEl.innerText = repo.name;

      reposEl.appendChild(repoEl);
    })

}

function createErrorCard(msg) {
  const cardHTML = `<div class="card"><h1>${ msg }</h1></div>`;

  main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = '';
  }
});



