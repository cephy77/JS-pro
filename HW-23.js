const phoneNumber = "+380674206942";
const grossHTML = `<div>Hello</div><span>world</world>`;
const regPhoneCheck = new RegExp(/^[+380][\d]{12}$/);
// const regTextFromHTML = new RegExp(/(?<=<\w+\d?>).+?(?=<\/.+>)/gm);
const regTextFromHTML = new RegExp(/>(\w+?)</);
console.log(regPhoneCheck.test(phoneNumber));
const textFromHtml = grossHTML.match(regTextFromHTML[1]).join(" ");
console.log(textFromHtml);
