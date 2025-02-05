// let fpara= document.getElementById('para');
// function changeText()
// {
//     fpara.textContent= "Hello ananya";

// }
// fpara.addEventListener('click',changeText);
// // fpara.removeEventListener('click',changeText);
// let anchorTag= document.querySelector('#anchor');
// //To change its default behaviour:
// anchorTag.addEventListener('click',function(event){
//     event.preventDefault(); //prevents default behaviour 
//     anchorTag.textContent="hello ji"
// })
function alertKardiya(event){
    alert("Hello ji, you clicked on: "+ event.target.textContent);
}

// let paras= document.getElementsByClassName('paras');
// for(let i=0;i<paras.length;i++)
// {
//     let para = paras[i];
//     para.addEventListener('click',alertKardiya);
// }

//Another way:

mydiv= document.querySelector('div');
mydiv.addEventListener('click',alertKardiya);
