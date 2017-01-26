//business logic
function Player(name, symbol){//add tally for victories
  this.name = name;
  this.symbol = symbol;
}

function Game(players, firstTo){
  this.players = players;
  this.currentplayer = players[0];
  this.board = {"#1-1" : "1", "#1-2" : "2", "#1-3" : "3", "#2-1" : "4", "#2-2" : "5", "#2-3" : "6", "#3-1":"7", "#3-2" : "8", "#3-3" : "9"};
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
    if(this.checkVictory() === true){
      //do nothing
    } else if(this.board[cell]=== "X" || this.board[cell]=== "O"){
        alert("That space is already filled");
    } else {
      this.board[cell] = this.currentplayer.symbol;
      $(cell).children("p").text(this.currentplayer.symbol);
      this.switchPlayer();
      this.checkVictory();
    }
  },
  checkVictory : function() {
    if ((this.board["#1-1"]===this.board["#1-2"] && this.board["#1-2"]===this.board["#1-3"]) || (this.board["#2-1"]===this.board["#2-2"] && this.board["#2-2"]===this.board["#2-3"]) || (this.board["#3-1"]===this.board["#3-2"] && this.board["#3-2"]===this.board["#3-3"])) {
      this.switchPlayer();
      $("h1#win-banner").show();
      return true;
    } else if ((this.board["#1-1"]===this.board["#2-1"] && this.board["#3-1"]===this.board["#2-1"]) || (this.board["#1-2"]===this.board["#2-2"] && this.board["#3-2"]===this.board["#2-2"]) || (this.board["#3-3"]===this.board["#2-3"] && this.board["#2-3"]===this.board["#1-3"])) {
        this.switchPlayer();
        $("h1#win-banner").show();
        return true;
    } else if ((this.board["#1-1"]===this.board["#2-2"] && this.board["#3-3"]===this.board["#2-2"]) || (this.board["#1-3"]===this.board["#2-2"] && this.board["#3-1"]===this.board["#2-2"])) {
        this.switchPlayer();
        $("h1#win-banner").show();
        return true;
    }
  },
  resetBoard : function() {
    for(var i = 1; i <=3; i++){
      for(var k = 1; k<=3; k++){
        this.board["#" + i + "-" + k] = Math.random();
        $("#" + i + "-" + k).children("p").text("");
      }
    }
    $("#win-banner").hide();
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

    $(this).hide();
    $("button[name=new-game]").show();

    $("button[name=new-game]").click(function() {
      game.resetBoard();
    })

    $(".cell").click(function() {
      game.fillCell("#" + $(this).attr("id"));
      var winnerName = game.currentplayer.name;
      $("#winner").text(winnerName);
    })
  })
})
