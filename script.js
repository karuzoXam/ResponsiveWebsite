import { toggleNav } from '/js/navBtnState.js';

const handlePageClicks = function () {
  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest('.nav-btn')) {
      handleNavBtnClick();
    } else if (e.target && e.target.id === 'view-more-btn') {
      showHiddenArticles();
    } else if (e.target && e.target.id === 'show-less-btn') {
      hideShownArticles();
    }
  });
};
const handleNavBtnClick = function () {
  const navList = document.getElementById('nav-btn-icon');
  const navOpen = toggleNav();
  const navBar = document.getElementById('nav-list');
  navList.classList.toggle('fa-bars');
  navList.classList.toggle('fa-xmark');
  if (navOpen) {
    navBar.classList.remove('hidden');
  } else {
    navBar.classList.add('hidden');
  }
};

const showHiddenArticles = function () {
  document.getElementById('hidden-articles').classList.remove('hidden');
  let elId = document.getElementById('view-more-btn');
  elId.textContent = 'Show Less';
  elId.id = 'show-less-btn';
};

const hideShownArticles = function () {
  document.getElementById('hidden-articles').classList.add('hidden');
  let elId = document.getElementById('show-less-btn');
  elId.textContent = 'View More';
  elId.id = 'view-more-btn';
};

const init = function () {
  handlePageClicks();
};
init();
