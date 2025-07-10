const sidebar = document.querySelector('header .menu ul');
const mobileMenu = document.querySelector('.menu-icon');
const aboutContent = document.querySelector('#about_content');
const modal = document.querySelector('#popup');

function showModal() {
  modal.style.display = 'block';
}

const workPost = [

  {
    title: 'Personal Portfolio',
    image:
      'https://static.wixstatic.com/media/ea6ac8_460f0c2349c44ac7b7aa7cbec1948d21~mv2.jpg/v1/fill/w_2218,h_1268,al_c,q_90/ea6ac8_460f0c2349c44ac7b7aa7cbec1948d21~mv2.webp',
    content:
      ' A fully responsive personal portfolio built using HTML, CSS, and JavaScript. It showcases my skills, projects, education, and contact details with a clean and modern UI designed to impress recruiters.',
    techology: ['Html', 'Css', 'javascript'],
    live: 'https://subhashchandrabosecharitabletrust.in',
    source: 'https://github.com/Chrissiku/Portfolio-mobile',
  },

  

  {
    title: 'Subash chandrabose Trust',
    image:
      'https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/01/web_dev_pillar_page.jpg',
    content:
      ' Designed and developed a responsive and accessible non-profit organization website using HTML5,CSS3,andJavaScript',
    techology: ['css', 'html', 'javascript'],
    live: 'https://subhashchandrabosecharitabletrust.in',
    source: 'https://github.com/Chrissiku/Portfolio-mobile',
  },




  {
    title: 'Splitaaara',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    content:
   'Splitaaara is a collaborative expense-sharing web application designed for roommates and group activities.It allows users to create rooms, add participants by email or phone, and manage shared expenses with automatic split calculations',
    techology: ['React js', 'Node', 'Express', 'Mongo DB'],
    live: 'https://splitaaara.netlify.app/',
    source: 'https://github.com/Nithin134/Split-fron',
  },


  

  
  

 
];

// Display secton content dynamicaly
for (let i = 0; i < workPost.length; i += 1) {
  const fetch = aboutContent.innerHTML;
  if (i % 2 !== 0) {
    aboutContent.innerHTML = `<div class="card">
      <div class="card-image">
        <img src="${workPost[i].image}" alt="Work image" />
      </div>
      <div class="card-detail">
        <h3>${workPost[i].title}</h3>
        <p>${workPost[i].content}</p>
        <div class="card-link">
          <ul>
          ${workPost[i].techology.map((j) => `<li>${j}</li>`).join('')}
          </ul>
        </div>
        <button type="button" id="btn-${i}" class="btn" data-open="popup">
          <span>See Project</span>
        </button>
      </div>
    </div>
  ${fetch}`;
  } else {
    aboutContent.innerHTML = `<div class="card pair">
  <div class="card-image">
    <img src="${workPost[i].image}" alt="Work image" />
  </div>
  <div class="card-detail">
    <h3>${workPost[i].title}</h3>
    <p>${workPost[i].content}</p>
    <div class="card-link">    
    <ul>
    ${workPost[i].techology.map((j) => `<li><a>${j}</a></li>`).join('')}
    </ul>
    </div>
    <button type="button" id="btn-${i}" class="btn" data-open="popup">
      <span>See Project</span>
    </button>
  </div>
</div>${fetch}`;
  }
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
    sidebar.style.display = 'block';
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

// Render dynamic section content in the popup_window

for (let a = 0; a < workPost.length; a += 1) {
  const showModalBtn = document.querySelectorAll(`[id=btn-${a}]`);

  showModalBtn.forEach((btnShow) => {
    btnShow.addEventListener('click', () => {
      showModal();
      modal.innerHTML = `
      <div class="modal">
              <div class="modal-head">
                <h1 id="post-title">${workPost[a].title}</h1>
                <button type="button" class="close_btn">
                  <i class="fa fa-times"></i>
                </button>
              </div>
              <div class="modal-content">
                <img
                  id="post-image"
                  src="${workPost[a].image}"
                  alt="work image"
                />
                <div class="cont1">
                  <p id="post-text">${workPost[a].content}</p>
                  <ul id="post-techno">
                    ${workPost[a].techology
    .map((k) => `<li><a href="">${k}</a></li>`)
    .join('')}
                  </ul>
                  <div class="modal-btn">
                    <button type="button" class="btn">
                      <a href="${
  workPost[a].live
}">See Live</a>&nbsp;&nbsp;<i class="fa-solid fa-power-off"></i>
                    </button>
                    <button type="button" class="btn">
                    <a href="${
  workPost[a].source
}">See Source</a>&nbsp;&nbsp;<i class="fa-brands fa-github"></i>
                    </button>
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
}
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
    Alert.innerHTML = 'Your email address should not contain uppercase letters (lowercase only !)';
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
// -------------------------------
const userName = document.querySelector('#user_name');
const message = document.querySelector('#msg');
// email variable is already declared on form validation part

function fillLocalStorage() {
  // form variable is already declared on form validation part
  form.addEventListener('input', () => {
    // Create a localStore for typed informatin
    const userInput = {
      user_name: userName.value,
      email: email.value,
      your_message: message.value,
    };
    // Store users typed informations in my localStorage (userInput)
    localStorage.setItem('userInput', JSON.stringify(userInput));
  });
}

function getLocalStorage() {
  const localUserData = JSON.parse(localStorage.getItem('userInput'));

  //  pre-filled user input with localStorage's information.
  userName.value = localUserData.user_name;
  email.value = localUserData.email;
  message.value = localUserData.your_message;
}
fillLocalStorage();
getLocalStorage();
