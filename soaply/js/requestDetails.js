// file:///C:/%EC%9C%A0%EC%86%8C%EB%9D%BC/Toy_App/20240717-19_Toy_App_v0.3/soaply/details.html?idx=19

//https://www.dabipyeung.com/soaply_backend/model/get_details.php?idx=19

const url = new URL(window.location.href);
console.log(url.searchParams.get('idx'));
const idx = url.searchParams.get('idx');

const detailWrapper = document.querySelector('.detail-wrapper');

const getDetailData = async () => {
  await fetch(
    `https://www.dabipyeung.com/soaply_backend/model/get_details.php?idx=${idx}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let dataElement;

      // Array.isArray : 배열 확인 함수
      // if (Array.isArray(data)) {
      //   data = data;
      // } else {
      //   data = [data];
      // }

      // 삼항연산자? - if문과 기능은 같음 축약할 수 있음 / 구조: '조건문표현식 ? tured일 경우 실행할 표현식 : [false일 경우 실행할 표현식];'
      // let dataArr = Array.isArray(data) ? data : [data];

      console.log(data);

      dataElement = `
        <p>${data.pro_idx}</p>
        <p>${data.pro_desc}</p>
        <h2>${data.pro_price}</h2>
        <h3>${data.pro_name}</h3>
        <p>입력 날짜: ${data.pro_reg}</p>
        <img src="images/${data.pro_img}" alt="">
        `;
      detailWrapper.insertAdjacentHTML('beforeend', dataElement);
    })

    .catch((error) => {
      console.log(error);
    });
};

getDetailData();
