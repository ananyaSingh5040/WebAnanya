// code 1: takes more time as painted and reflowed 100 times on line number 6.
const t1 = performance.now();
for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "Para Number: " + i;
  document.body.appendChild(para);
}
const t2 = performance.now();
console.log("Time taken by code 1: " + (t2 - t1));

//code 2: takes less time as painted and reflowed only once on line number 19.
const t3 = performance.now();
let div = document.createElement("div");
for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent= "div para: "+ i;
  div.appendChild(para);
}
document.body.appendChild(div);
const t4 = performance.now();
console.log("Time taken by code 2: " + (t4 - t3));

//BEST CODE: use DOCUMENT-FRAGMENT:
const t5= performance.now();
let fragment= document.createDocumentFragment();
for(let i=1;i<=100;i++)
{
    let para = document.createElement('p');
    para.textContent= "namaste : "+ i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6= performance.now();
console.log("Time taken by code 3: "+(t6-t5));
