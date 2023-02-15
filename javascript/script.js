var films=document.querySelectorAll(".film");

/*function mOverImg(img){
    console.log(img.chilNodes);
    img.style.opacity="0.3";
    img.chilNodes[3].style.visibility = "visible";
    //links.style.visibility="visible";
}

function mOutImg(img,links){
img.style.opacity="1";
//links.style.visibility="hidden";
}*/
films.forEach(function(img,links){
        console.log(img.childNodes);
        // img.addEventListener("mouseover", mOverImg(img) );
        // img.addEventListener("mouseout", mOutImg(img) );
        //var width = img.childNodes[3].
        img.addEventListener("mouseover", () =>{
            
            img.childNodes[1].style.opacity="0.5";
            img.childNodes[3].style.visibility = "visible";
            
        } );
        img.addEventListener("mouseout", () =>{
            img.childNodes[1].style.opacity="1";
            img.childNodes[3].style.visibility = "hidden";
        } );
});


