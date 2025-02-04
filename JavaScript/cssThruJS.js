//style attribute: problem is this only works for one property

let firstElement= document.querySelector('#newdiv');
firstElement.style.backgroundColor= 'blue';

//cssText: this works for multiple properties
let element= document.getElementById('newdiv');
element.style.cssText= "background-color: green; color: red; padding: 10rem";


//.setAttribute: will overwrite the tags if present, and if not , it would create it...
let element1= document.querySelector('#newdiv');
element1.setAttribute('style','background-color: grey');
