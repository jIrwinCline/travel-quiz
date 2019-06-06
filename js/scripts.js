$(document).ready(function() {
  $("#quiz form").submit(function(event) {
    var destination = $("input:radio[name=scenery]:checked").val();
    $(".destination").text(destination);

    var food = $("input:radio[name=food]:checked").val();
    $(".food").text(food);

    var animal = $("input:radio[name=animal]:checked").val();
    $(".animal").text(animal);

    if(destination === "Thailand"){

    }

    if (destination === food || destination === animal) {
      $(".pizza").text(destination);
    }
    else if (food === animal){
      $(".pizza").text(animal);
    }
    else {
      $(".pizza").text("no results");
    }

    $(".results").show();
    event.preventDefault();
  });
});
