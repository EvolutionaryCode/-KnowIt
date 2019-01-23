import React from "react"

import Joke from "./Joke"

function App(){
  return (
      <div>
        <Joke
            question="What did the Buddhist ask the hot dog vendor?"
            punchline="Make me one with everything"
        />
        <Joke
            question="You know why you never see elephants hiding up in trees?"
            punchline="Because they’re really good at it."
        />
        <Joke
            question="What is red and smells like blue paint?"
            punchline="Red paint"
        />
        <Joke
            question="Where does the General keep his armies?"
            punchline="In his sleevies!"
        />
        <Joke
            question="Why aren’t koalas actual bears?"
            punchline="The don’t meet the koalafications."
        />
      </div>
  )
}

export default App;
