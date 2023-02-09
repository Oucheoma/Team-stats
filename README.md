# Team-stats

We had amain object(teams). There were two properties inside our object (games and palyer, we add the underscore to signal to developer not to alter with the figure)

The player property was an array which also had three objects, each objects held the firstName, lastName, and age of the a player

const team = {
 _players = [ 
  let players
  {"object 1 with the name info}
  {"object 1 with the name info}
  {"object 1 with the name info}
 ]
 _games = [
  let game = {
  {"games 1 with the name info}
  {"games 2 with the name info}
  {"games 3 with the name info}
 ]
 
 we also created method to add new player and games, which where also subsequently then add to the different arrays (_player and  _games)
 using the "this.arrayName.push(propertyOfTheArray i.e letplayer, let game) ==> this.games.push(game); this.players.push(player)
 
 then the new date of the team (including the new player and game info was printed in console)
