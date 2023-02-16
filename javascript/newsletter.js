


function getInputValue(){
    var ime = $("#ip").val();
    var mail = $("#mail").val();
    var tekst = $("#poruka").val();
    var pol = $("input:radio[name=pol_]:checked").val()
    var date = $('#datum').val().split("-");
    var day,month,year;
    var correct = true;
    day = date[2];
    month = date[1];
    year = date[0];

    if(ime == ""  || !ime.includes(" ") || ime.length < 5){
        $("#ip").addClass("wrong");
        correct = false;
    }
    if(mail == ""  || !mail.includes("@") || mail.length < 5){
        $("#mail").addClass("wrong");
        correct = false;
    }
    console.log(pol);
  
    if(correct)
    window.alert('Name : '+ime+'\n Gender : '+pol+'\n Mail address: ' + mail+
    '\n Date : '+day+'-'+month+'-'+year+
    '\n Your feedback : '+tekst

    )
}



