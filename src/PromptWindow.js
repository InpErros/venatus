import './PromptWindow.css'
import { useEffect, useState } from 'react'

function SubmitButton({disabled}) {
    return (
      <div>
        <button type='submit' disabled={disabled} className='submit-button'>Submit</button>
      </div>
    );
  }
  
  export default function PromptWindow({prompt}) {
    const [userInput, setUserInput] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const ID = prompt.id

    useEffect( () => {
      const completed = localStorage.getItem(`promptWindowCompleted_${ID}`)
      let savedInput = localStorage.getItem(`promptWindowUserInput_${ID}`)
       
      if (completed === 'true') {
        setIsCorrect(true)
        setIsSubmitted(true)
      }

      if (savedInput) {
        setUserInput(savedInput)
      }
    }, [])

    useEffect( () => {
      if (isCorrect && isSubmitted) {
        localStorage.setItem(`promptWindowCompleted_${ID}`, 'true')
      }
      localStorage.setItem(`promptWindowUserInput_${ID}`, userInput)
    }, [isCorrect, isSubmitted, userInput])

    const handleSubmit = (e) => {
      e.preventDefault()
      setIsSubmitted(true)
      setIsCorrect(userInput.trim().toLowerCase() === prompt.answer.toLowerCase())
    }

    const handleInputChange = (e) => {
      setUserInput(e.target.value)
    }

    const resetPrompt = () => {
      localStorage.removeItem(`promptWindowCompleted_${ID}`)
      localStorage.removeItem(`promptWindowUserInput_${ID}`)
      setUserInput('')
      setIsCorrect(false)
      setIsSubmitted(false)
    }

    const promptStyle = {
      backgroundColor : isCorrect ? '#33cc332e' : (isSubmitted ? '#ff6666' : '#1a1a2e')
    }

    return (
      <div className='PromptWindow' style={promptStyle}>
        <h2>{prompt.title}</h2>
          <form onSubmit={handleSubmit}>
              <label htmlFor="prompt1">{prompt.body}</label>
              <input 
              type="text" 
              id="prompt1" 
              name="prompt1"
              value={userInput}
              onChange={handleInputChange}
              disabled={isCorrect}
              required
              />
              <SubmitButton disabled={isCorrect || !userInput}/>
              <button type='button' onClick={resetPrompt} className='reset-button'>&#8634;</button>
          </form>
        
      </div>
    );
  }