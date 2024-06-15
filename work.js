const list = require('./work-1.js')
// console.log(list);

// * 들어갈 틀 만들어주기 
const a = (family, name) => {
  return `${family}${name}`;
};

const b = () => {
  const c = (names) => {
    if(names === '이연승') {
      return `${a('본인', '본인입니다.')}`
    } else if (names === '정호연') {
      return `${a('와이프', '와이프입니다.')}`
    } else {
      return `${a('가족', '가족입니다.')}`
    }
  };
  return `${c('정호연')}`;
};

console.log(b())

// * a는 내용이 들어갈 틀이다.
// * b는 값이 들어갈 자리이다.
// * c는 조건이 들어갈 자리이다.