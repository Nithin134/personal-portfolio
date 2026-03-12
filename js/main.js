const sidebar = document.querySelector('header .menu ul');
const mobileMenu = document.querySelector('.menu-icon');
const modal = document.querySelector('#popup');

if (sidebar && mobileMenu) {
  const menuIcon = mobileMenu.firstElementChild;

  sidebar.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.style.display = 'none';
      menuIcon?.classList.replace('fa-times', 'fa-bars');
    }
  });

  mobileMenu.addEventListener('click', () => {
    if (!menuIcon) {
      return;
    }

    if (menuIcon.classList.contains('fa-bars')) {
      sidebar.style.display = 'flex';
      menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
      sidebar.style.display = 'none';
      menuIcon.classList.replace('fa-times', 'fa-bars');
    }
  });
}

function showModal() {
  if (modal) {
    modal.style.display = 'block';
  }
}

function hideModal() {
  if (modal) {
    modal.style.display = 'none';
  }
}

const modalButtons = document.querySelectorAll('[data-open="popup"]');

modalButtons.forEach((btnShow) => {
  btnShow.addEventListener('click', () => {
    if (!modal) {
      return;
    }

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
    hideModalBtn?.addEventListener('click', hideModal);
  });
});

const form = document.querySelector('#user_form');
const alertBox = document.querySelector('.alert');
const email = document.querySelector('#email');
const submitButton = document.querySelector('#submit');
const userName = document.querySelector('#user_name');
const message = document.querySelector('#msg');

function validateEmailAddress() {
  if (!email || !alertBox || !submitButton) {
    return;
  }

  const regex = /[A-Z]/;
  const emailContent = email.value;

  if (regex.test(emailContent)) {
    alertBox.style.display = 'block';
    submitButton.disabled = true;
    alertBox.innerHTML = 'Your email address should not contain uppercase letters (lowercase only!).';
  } else {
    alertBox.style.display = 'none';
    alertBox.innerHTML = '';
    submitButton.disabled = false;
  }
}

if (form && email) {
  email.addEventListener('input', validateEmailAddress);
  form.addEventListener('submit', validateEmailAddress);

  form.addEventListener('input', () => {
    if (!userName || !message) {
      return;
    }

    const userInput = {
      user_name: userName.value,
      email: email.value,
      your_message: message.value,
    };

    localStorage.setItem('userInput', JSON.stringify(userInput));
  });

  const localUserData = JSON.parse(localStorage.getItem('userInput'));
  if (localUserData && userName && message) {
    userName.value = localUserData.user_name ?? '';
    email.value = localUserData.email ?? '';
    message.value = localUserData.your_message ?? '';
  }
}
