import { useState } from 'react'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'

import words from './wordList.json'
// import reactLogo from './assets/react.svg'
// import './App.css'



function App() {
  const [wordToGuess,setWordToGuess] =useState(()=>{
    return words[Math.floor(Math.random()*words.length)]
  })


 const [gussedLetters,setGuessedLetters]=useState<String[]>([])

  return(
    <div style={{
      maxWidth:'800px',
      display:'flex',
      flexDirection:'column',
      gap:'2rem',
      margin:'0 auto',
      alignItems:'center'
    }}>
      <div style={{fontSize:'2rem',textAlign:'center'}}>Lose win</div>

    <HangmanDrawing/>
    <HangmanWord/>
    <Keyboard/>

    </div>
   
    
  )
   
  
}

export default App
