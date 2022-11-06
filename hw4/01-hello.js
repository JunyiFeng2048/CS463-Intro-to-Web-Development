// Add your code here
let main = document.querySelector('main');

main.style.textAlign = 'center';
main.style.top = '5%';
main.style.left = '25%';
main.style.position = 'absolute';
main.style.width = '50%'; 
main.style.height = '50%'; 

let img = document.createElement('img');
img.setAttribute('src','../images/Feng.png');
img.setAttribute('height','200');
img.setAttribute('width','200');
img.setAttribute("alt", 'headshot of Feng with filters');
img.style.borderRadius = '50%';
img.style.border = '1px solid cornflowerblue';
main.append(img);


let span = document.createElement("span");
span.textContent = "Hi, my name is Junyi Feng and I am from China. ";
span.style.fontSize = '1.2em';
span.style.fontFamily = 'Open Sans, Helvetica Neue, sans-serif';
span.style.textAlign = 'left';
span.style.fontWeight = 'bold';

let divParent = document.createElement("div");
divParent.style.fontSize = '1.2em';
divParent.style.fontFamily = 'Open Sans, Helvetica Neue, sans-serif';
divParent.style.textAlign = 'left';
divParent.append(span, "I am a senior at Portland State University studying Computer Science. I love coffee and cats.");
divParent.style.paddingTop = '20px';
main.append(divParent);