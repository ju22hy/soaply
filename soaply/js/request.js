const sliderWrapper = document.querySelector('.swiper-wrapper');

const getData = async () => {
  await fetch(
    'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=4'
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let dataElement;

      data.map((item) => {
        console.log(item);
        dataElement = `
          <div class="swiper-slide">
            <div class="slider-image">
              <img src="images/${item.pro_img}" alt="slider 1">
            </div>
            <div class="slider-text">
              <h4>${item.pro_name}</h4>
              <p>${item.pro_desc}</p>
              <a href="details.html?idx=${item.pro_idx}" class="common-btn">자세히 보기</a>
            </div>
          </div>
        `; //따옴표 아니고 ` << 이거임 주의
        sliderWrapper.insertAdjacentHTML('beforeend', dataElement);
        //?? - 이 javascript를 매끄럽게 실행하려면 HTML과 CSS가 선행되어야 하는가? = HTML로 클래스 부여해야 작동하니까 어느정도는 맞는 말이다 css는 개발자 작업 스타일에 따라 다른듯
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getData();

// let과 const...?

// const name = '아무개'
// const age = 23;
// const str = 'hellow' + name + '님' + '나이는' + age + '세입니다.';
// const str = 'hellow ${name}님 나이는 ${age}세입니다.';
