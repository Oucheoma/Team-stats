const team = {
  _players:[
   {firstName: 'jayden', lastName: ' Hope', age: 25},
   {firstName: 'Kia', lastName: ' Jason', age: 31},
   {firstName: 'Ruth', lastName: ' Paul', age: 18},
  ],

  // three objects in an array. Remeber to separate the arrays with commas
  _games: [
   {opponent: 'Hops', teamPoints: 20, opponentPoints: 5},
   {opponent: 'Ski', teamPoints: 2, opponentPoints: 6},
   {opponent:' Fly', teamPoints: 45, opponentPoints: 0}
   ],

  get players (){
    return this._players
  },

  get games () {
    return this._games
  },

// a way of adding new players and pushing (adding) it to the player main object. To add a new player all you need to do addPlayer(and fill in the three parameters)
addPlayer(newFirstName, newLastName, newAge){
  let player ={
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  }
  this.players.push(player)
},

addGame(newOpponent, newTeamPoints, newOpponentPoints){
  let game ={
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  }
  this.games.push(game)
}
};

/// don't forget to target the objects with dot notation i.e objectName.property
team.addPlayer('Bugs', 'Bunny', 78),
console.log(team._players)

team.addGame('Titans', 100, 98),
console.log(team._games)

  
     
