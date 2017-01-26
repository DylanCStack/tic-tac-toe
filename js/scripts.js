//business logic
function Player(name, symbol){//add tally for victories
  this.name = name;
  this.symbol = symbol;
}

function Game(players, firstTo){
  this.players = players;
  this.currentplayer = players[0];
  this.board = {"#1-1" : "", "#1-2" : "", "#1-3" : "", "#2-1" : "", "#2-2" : "", "#2-3" : "", "#3-1":"", "#3-2" : "", "#3-3" : ""};
  this.firstTo = firstTo;
}

Game.prototype = {
  switchPlayer : function() {
    if (this.currentplayer === this.players[0]) { // if current player is equal to the 0th place player, switch to the 1st place player.
    this.currentplayer = this.players[1];
    } else if (this.currentplayer === this.players[1]) { // vice versa
    this.currentplayer = this.players[0];
    }
    $("#current-player").text(this.currentplayer.name);
  },
  fillCell : function(cell) {
    if(this.board[cell]=== "X" || this.board[cell]=== "O"){
      alert("That space is already filled");
    } else {
      this.board[cell] = this.currentplayer.symbol;
      $(cell).children("p").text(this.currentplayer.symbol);
      this.switchPlayer();
    }
  }
}
// user-interface logic
$(document).ready(function() {
  $("form#names").submit(function(event) {
    event.preventDefault();
    var inputtedName1 = $("input[name=name1]").val();
    var inputtedName2 = $("input[name=name2]").val();

    $("#player1").text(inputtedName1);
    $("#player2").text(inputtedName2);

    var player1 = new Player(inputtedName1, "X");
    var player2 = new Player(inputtedName2, "O");

    var game = new Game([player1, player2], 3);

    $("#current-player").text(game.currentplayer.name);

    $(".cell").click(function() {
      game.fillCell("#" + $(this).attr("id"));
    })
  })
})
