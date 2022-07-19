const menu = document.querySelector('#Union-menu');
const close = document.querySelector('#nav-button-close');
const navs = document.querySelector('#menu-navs');
const links = document.querySelectorAll('#menu-navs li');

close.addEventListener('click', () => {
  navs.classList.toggle('hidden');
});

menu.addEventListener('click', () => {
  navs.classList.toggle('hidden');
});

links.forEach((ele) => ele.addEventListener('click', () => {
  navs.classList.toggle('hidden');
}));

const bio = document.querySelector('#bio');
const about = document.querySelector('#about-me');
const activeNavs = document.querySelectorAll('#desk-list > li > a');

document.addEventListener('scroll', () => {
  if (window.pageYOffset < bio.offsetHeight + bio.offsetTop) {
    activeNavs.forEach((e) => e.classList.remove('active'));
    activeNavs[0].classList.add('active');
  } else if (window.pageYOffset < about.offsetHeight + about.offsetTop - 200) {
    activeNavs.forEach((e) => e.classList.remove('active'));
    activeNavs[1].classList.add('active');
  } else {
    activeNavs.forEach((e) => e.classList.remove('active'));
    activeNavs[2].classList.add('active');
  }
});

const projectArray = [
  {
    id: 0,
    imgURL: './assets/Snapshoot-Portfolio-4.png',
    heading: 'Multi-Post Stories',
    firstList: ['CANOPY', 'Back End', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    secList: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 1,
    imgURL: './assets/Snapshoot-Portfolio.png',
    heading: 'Facebook 360',
    firstList: ['FACEBOOK', 'FULL Stack Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    secList: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 2,
    imgURL: './assets/Snapshoot-Portfolio-1.png',
    heading: 'Uber Navigations',
    firstList: ['UBER', 'Lead Developer', '2018'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    secList: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 3,
    imgURL: './assets/Snapshoot-Portfolio-2.png',
    heading: 'Multi-Post Stories',
    firstList: ['CANOPY', 'Back End', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    secList: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 4,
    imgURL: './assets/Snapshoot-Portfolio-3.png',
    heading: 'Multi-Post Stories',
    firstList: ['FACEBOOK', 'FULL Stack Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    secList: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
];

const closePopup = document.querySelector('#popup-head > span');
const PopUp = document.querySelector('#pop-up');
const cards = document.querySelectorAll('.card a');

closePopup.addEventListener('click', () => {
  PopUp.classList.toggle('hidden');
});

const makePopup = ({
  imgURL, heading, firstList, text, secList,
}) => {
  const pHead = document.querySelector('#popup-head > h2');
  const P1List = document.querySelectorAll('#pop-up ul > li');
  const PImg = document.querySelector('#popup-img > img');
  const PText = document.querySelector('#popup-details > p');
  const P2List = document.querySelector('#popup-details menu');

  pHead.innerHTML = heading;
  PText.innerHTML = text;
  PImg.src = imgURL;
  P1List.forEach((ele, i) => { ele.innerHTML = firstList[i]; });
  P2List.innerHTML = '';
  secList.forEach((ele) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ele;
    P2List.appendChild(listItem);
  });
  PopUp.classList.toggle('hidden');
};

cards.forEach((ele, i) => {
  ele.addEventListener('click', () => {
    makePopup(projectArray[i]);
  });
});
