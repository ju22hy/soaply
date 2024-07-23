// 프로그래밍 언어 조합 약속:
// menu_icon : 스네이크 케이스 - 변수명, CSS 클래스명
// menu-icon : 하이픈 케이스 - HTML 요소 클래스명, URL 경로, 파일명, 데이터 속성
// menuIcon : 카멜 케이스 - 자바스크립트의 함수명, 변수명 혹은 객체의 속성명, 매서드 명

// addEventListener(): 이벤트 리스너 추가
// contains(): 클래스 포함 여부 - boolean
// getAttribute(): 속성값 가져오기 - 파라미터가 1개 : 파라미터로 지정된 속성의 값을 가져온다
// setAttribute(): 속성값 설정하기 - 파라미터가 2개 : 첫번째 파라미터는 설정할 속성 이름, 두번째 파라미터는 설정할 속성의 값

const menuIcon = document.querySelector('.menu-icon');
// console.log(menuIcon);
const menuIconFont = document.querySelector('.menu-icon > i');
const mobileMenus = document.querySelector('.mobile-menus');
console.dir(mobileMenus);

// menu icon click event
menuIcon.addEventListener('click', function () {
  this.classList.toggle('active');

  // ppt 51페이지 조건문() 안에 조건식(ture, false)를 입력하고 첫번째 중괄호에 true, else 이후 중괄호에 false
  if (this.classList.contains('active')) {
    menuIconFont.setAttribute('class', 'ri-close-large-line');
    mobileMenus.style.height = mobileMenus.scrollHeight + 'px';
  } else {
    menuIconFont.setAttribute('class', 'ri-menu-line');
    mobileMenus.style.height = 0;
  }
});

// Header Style change when scroolling down >> 스크롤 시 헤더의 배경 흰색이 자연스럽게 내려오는 것
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Swiper Slider Options
setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',   // ◀ default 값은 horizontal
    loop: true, // 슬라이더 무한 반복

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // 페이지네이션 클릭 기능 여부 : 클릭한 index로 슬라이더 이동
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // // And if we need scrollbar - 가로 페이지네이션 프로세스 바
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}, 300); // 실행 기능 함수, 시간

// Fit Insta Image Height
const instaImgHeight = document.querySelector('#h').scrollHeight;
document.querySelector('#fh').style.height = instaImgHeight + 'px';
// console.log(instaImgHeight);

window.addEventListener('resize', function () {
  const instaImgHeight = document.querySelector('#h').scrollHeight;
  document.querySelector('#fh').style.height = instaImgHeight + 'px';
});
