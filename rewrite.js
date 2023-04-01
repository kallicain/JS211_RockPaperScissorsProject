// code done during class 
const rockPaperScissors = (hand1, hand2) => {

  hand1 = hand1.toLowerCase().trim()
  hand2 = hand2.toLowerCase().trim()

  console.log("hi hand 1 is: " + hand1)
  console.log("hi hand 1 is: " + hand2)

  //it's a tie
  if(hand1 == hand2) {
    return "It's a tie!"
  }

  //hand one wins
  if(hand1 == ("paper" && hand2 == "rock") || 
  (hand1 == "scissors" && hand2 == "paper") || 
  (hand1 == "rock" && hand2 == "scissors")) {
    return "Hand one wins!"
  }
  else {
    return "Hand two wins!"
  }
}