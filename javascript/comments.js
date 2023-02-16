var dugme = $("#addComment");
var klasa = $(".comments");
console.log(dugme);
$("#addComment").click(function(){
        var username;
        var textArea;
        username = $("#nameBox").val();
        textArea = $("#comment").val();
        console.log(username + textArea)
        if(username.value === "" || textArea.value === ""){
            alert("Please enter username and your comment before adding it!")
            return;
        }
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        div.classList.add("comment");
        div.classList.add("user");
        h3.textContent = username;
        p.textContent = textArea;
        div.appendChild(h3);
        div.appendChild(p);
        klasa.prepend(div);

        $("#nameBox").val("");
        $("#comment").val("");
     
     }
); 