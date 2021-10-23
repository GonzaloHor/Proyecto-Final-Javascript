$(function() {


    $("#respon").click(function(){
        $("#cardRespon").toggle("cardRespon");
        $("#tercero").toggleClass("cardRespon");
        $("#todoRiesgo").toggleClass("cardRespon");

    });

    $("#tercero").click(function(){
        $("#cardResponTercero").toggle("cardRespon");
        $("#respon").toggleClass("cardRespon");
        $("#todoRiesgo").toggleClass("cardRespon");
    });

    $("#todoRiesgo").click(function(){
        $("#cardResponTodo").toggle("cardRespon");
        $("#respon").toggleClass("cardRespon");
        $("#tercero").toggleClass("cardRespon");
    });

    
  });
