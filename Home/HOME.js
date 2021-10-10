$("#in1").hide()
$("#in2").hide()
$("#in3").hide()
$("#in4").hide()
$("label").hide()
$("bo2").hide(200)

function kamouniya(){
if($('#bo2').hide(200)){
    $("#in1").show(200)
    $("#in2").show(200)
    $("#in3").show(200)
    $("#in4").show(200)
    $("label").show(200)

    return
}
}

function pageoff(){
    var url = "file:///C:/Users/INFOKOM/Desktop/RBKFOOD/FOOD%20FILE/food.html";
$(location).attr('href',url);
}