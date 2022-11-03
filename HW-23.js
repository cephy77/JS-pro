const phoneNumber = "+380674206942";
const grossHTML = `<div>Hello</div><span>world</world>`;
const regPhoneCheck = new RegExp(/^[+380][\d]{12}$/);
const regTextFromHTML = new RegExp(/(>(\w+?)<)/gm);
//<\w+\d?>(.+?)<\/.+>
console.log(regPhoneCheck.test(phoneNumber));
const matches = grossHTML.matchAll(regTextFromHTML);
const matchArr = Array.from(matches).map((e) => {
  return e[2];
});
const txtFromHTML = matchArr.join(" ");
console.log(txtFromHTML);
// const textFromHtml = grossHTML.match(regTextFromHTML[1]).join(" ");
// console.log(textFromHtml);
