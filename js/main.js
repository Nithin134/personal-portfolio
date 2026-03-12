const sidebar = document.querySelector('header .menu ul');
const mobileMenu = document.querySelector('.menu-icon');
const modal = document.querySelector('#popup');

function showModal() {
  modal.style.display = 'block';
}

// Show and hide Menu
function hideMenu() {
  sidebar.addEventListener('click', () => {
    sidebar.style.display = 'none';
    mobileMenu.firstElementChild.classList.replace('fa-times', 'fa-bars');
  });
}

mobileMenu.addEventListener('click', () => {
  if (mobileMenu.firstElementChild.classList.contains('fa-bars')) {
    sidebar.style.display = 'flex';
    mobileMenu.firstElementChild.classList.replace('fa-bars', 'fa-times');
    hideMenu();
  } else {
    sidebar.style.display = 'none';
    mobileMenu.firstElementChild.classList.replace('fa-times', 'fa-bars');
  }
});

function hideModal() {
  modal.style.display = 'none';
}

// Display specific post to the popup
const modalButtons = document.querySelectorAll('[data-open="popup"]');

modalButtons.forEach((btnShow) => {
  btnShow.addEventListener('click', () => {
    const techList = btnShow.dataset.tech
      ? btnShow.dataset.tech.split(',').map((item) => item.trim())
      : [];
    showModal();
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-head">
          <h1 id="post-title">${btnShow.dataset.title}</h1>
          <button type="button" class="close_btn">
            <i class="fa fa-times"></i>
          </button>
        </div>
        <div class="modal-content">
          <img id="post-image" src="${btnShow.dataset.image}" alt="work image" />
          <div class="cont1">
            <p id="post-text">${btnShow.dataset.content}</p>
            <ul id="post-techno">
              ${techList.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
            <div class="modal-btn">
              <a class="btn" href="${btnShow.dataset.live}">
                See Live&nbsp;&nbsp;<i class="fa-solid fa-power-off"></i>
              </a>
              <a class="btn btn-secondary" href="${btnShow.dataset.source}">
                See Source&nbsp;&nbsp;<i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      `;
    const hideModalBtn = document.querySelector('.close_btn');
    hideModalBtn.addEventListener('click', () => {
      hideModal();
    });
  });
});

// Form Validation
const form = document.querySelector('#user_form');
const Alert = document.querySelector('.alert');
const email = document.querySelector('#email');
const Mybtn = document.querySelector('#submit');

function validateEmailAddress() {
  const regex = /[A-Z]/;
  const emailContent = email.value;
  if (regex.test(emailContent)) {
    Alert.style.display = 'block';
    Mybtn.disabled = true;
    Alert.innerHTML = 'Your email address should not contain uppercase letters (lowercase only!).';
  } else {
    Alert.style.display = 'none';
    Alert.innerHTML = '';
    Mybtn.disabled = false;
  }
}

email.addEventListener('input', () => {
  validateEmailAddress();
});

form.addEventListener('submit', () => {
  validateEmailAddress();
});

// preserve data in the browser
const userName = document.querySelector('#user_name');
const message = document.querySelector('#msg');

function fillLocalStorage() {
  form.addEventListener('input', () => {
    const userInput = {
      user_name: userName.value,
      email: email.value,
      your_message: message.value,
    };
    localStorage.setItem('userInput', JSON.stringify(userInput));
  });
}

function getLocalStorage() {
  const localUserData = JSON.parse(localStorage.getItem('userInput'));
  if (!localUserData) {
    return;
  }

  userName.value = localUserData.user_name;
  email.value = localUserData.email;
  message.value = localUserData.your_message;
}

fillLocalStorage();
getLocalStorage();
