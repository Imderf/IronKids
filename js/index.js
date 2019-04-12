/*$(function () {
  $(".good").draggable();
  $(".bad").draggable({
    revert:"invalid"
  });
  $("#trashCan").droppable({
    //activeClass:"ui-state-active",
    hoverClass: "rotate",
    accept:".good",
    drop: function(event,ui) {
      ui.draggable.fadeOut(function () {
        ui.draggable.remove();


//$( "#trashCan" ).trigger('drop');


      });     
    }
  });
});*/

$( function() {
    $(".draggable").draggable();
    $("#droppable").droppable({
    //activeClass:"ui-state-active",
    //hoverClass: "rotate",
    accept:".draggable",
    drop: function(event,ui) {

     /* ui.draggable.alert1.fadeOut(function() {
        alert('alert1');
      });*/

      var clase =  ui.draggable.attr("id");

      //alert(clase);
      if(clase=='alert1'){
          $(".modal-mccann").css("display", "block");
          $(".modal-huevos").css("display", "block");

          
      }
      if(clase=='alert2'){
           $(".modal-mccann").css("display", "block");
          $(".modal-carnes").css("display", "block");

      }
      if(clase=='alert3'){
           $(".modal-mccann").css("display", "block");
          $(".modal-frutas").css("display", "block");

      }
      if(clase=='alert4'){
           $(".modal-mccann").css("display", "block");
          $(".modal-verdura").css("display", "block");

      }
      if(clase=='alert5'){
           $(".modal-mccann").css("display", "block");
          $(".modal-ironkids").css("display", "block");

      }


      ui.draggable.fadeOut(function () {
        ui.draggable.remove();





      });     
    }
  });
  } );

function cerrar_modal() {
  $(".modal-general").css("display", "none");
  $(".modal-mccann").css("display", "none");
}

