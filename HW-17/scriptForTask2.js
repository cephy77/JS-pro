// Task 2
const importantData1 = document.querySelector("div");
console.log(`By querySelector: ${importantData1.innerHTML}`);
const importantData2 = document.querySelectorAll("div")[0];
console.log(`By querySelectorAll: ${importantData2.innerHTML}`);
const importantData3 = document.getElementsByTagName("div")[0];
console.log(`By getElementsByTagName: ${importantData3.innerHTML}`);
const allWomen = document.querySelectorAll("li[data-id='woman']");
console.log(allWomen);
