//business logic
function player(name, symbol){//add tally for victories
  this.name = name;
  this.symbol = symbol;
}




// user-interface logic
$(document).ready(function() {
  $("form#names").submit(function(event) {
    event.preventDefault();
    var inputtedName1 = $("input[name=name1]").val();
    var inputtedName2 = $("input[name=name2]").val();

    $("#player1").text(inputtedName1);
    $("#player2").text(inputtedName2);

    $("#current-player").text(inputtedName1);

  $(".cell").click(function() {
    $(this).children("p").text("X");
  })
  })
})
