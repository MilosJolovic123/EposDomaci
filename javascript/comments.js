var dugme = document.querySelector("#addComment");
var clasa = document.querySelector(".comments");
console.log(dugme);
dugme.addEventListener('click', ()=>{
    var username;
    var textArea;
    username = document.getElementById("nameBox");
    textArea = document.getElementById("comment");
    if(username.value === "" || textArea.value === ""){
        alert("Please enter username and your comment before adding it!")
        return;
    }
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    div.classList.add("comment");
    div.classList.add("user");
    h3.textContent = username.value;
    p.textContent = textArea.value;;
    div.appendChild(h3);
    div.appendChild(p);
    clasa.prepend(div);
    username.value = "";
    textArea.value = "";
}); 