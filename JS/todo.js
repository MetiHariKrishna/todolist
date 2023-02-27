document.getElementById("btn").addEventListener("click",
function(){
    let input = document.getElementById("input").value;


    let elem=document.createElement("li");
    let btn1=document.createElement("button");
    let btn2=document.createElement("button");
btn1.innerHTML="done";
btn2.innerHTML="delete";
elem.innerHTML=input;
let ul=document.querySelector("ul");

ul.appendChild(elem);
elem.appendChild(btn1);
elem.appendChild(btn2);

// button styles

btn1.style.border="none";
btn1.style.margin="10px 10px 10px 150px";
btn1.style.borderRadius="10px";
btn1.style.backgroundColor="#b4b3d8";

btn2.style.border="none";
btn2.style.margin="10px 10px 10px 10px";
btn2.style.borderRadius="10px";
btn2.style.backgroundColor="#b4b3d8";



btn1.addEventListener("click",
function(){
    elem.style.textDecoration="line-through";
}
);

btn2.addEventListener("click",
function(){
    elem.remove();
}
);
document.getElementById("input").value="";

}
);

