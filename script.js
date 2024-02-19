//your JS code here. If required.
const fname = document.getElementById(“fname”);

fname.addEventListener(“blur”, () => {

fname.value = fname.value.toUpperCase();
})