//your JS code here. If required.
let p=document.querySelector("#fname");
p.addEventListener("blur", upperCase)
function upperCase(e){
let q=p.value.toUpperCase();
 p.value=q;
	}