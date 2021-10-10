$("#in1").hide(200)
$("#in2").hide(200)
$("#in3").hide(200)
$("#in4").hide(200)
$("label").hide(200)
$("bo2").hide(200)
$("#bo3").hide(200)

function kamouniya(){
if($('#bo2').hide(200)){
    $('#bo1').hide(200)
    $("#in1").show(200)
    $("#in2").show(200)
    $("#in3").show(200)
    $("#in4").show(200)
    $("label").show(200)
    $("#bo3").show(200)
    $("#bo4").hide(200)
    $(".bo5").hide(200)

    return
}
}

function pageoff(){
    var url = "file:///C:/Users/INFOKOM/Desktop/RBKFOOD/Login/Login.html";
$(location).attr('href',url);
}
function pageoff1(){
    var url = "file:///C:/Users/INFOKOM/Desktop/RBKFOOD/Login/Login.html";
$(location).attr('href',url);
}
function pageoff2(){
    var url = "file:///C:/Users/INFOKOM/Desktop/RBKFOOD/FeedBack/FeedBack.html";
$(location).attr('href',url);
}