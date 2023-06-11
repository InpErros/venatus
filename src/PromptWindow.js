import './PromptWindow.css'

function SubmitButton() {
    return (
      <div>
        <button type='submit'>Submit</button>
      </div>
    );
  }
  
  export default function PromptWindow({title, prompt}) {
    return (
      <div className='PromptWindow'>
        <h2>{title}</h2>
          <form>
              <label for="prompt1">{prompt}</label>
              <input type="text" id="prompt1" name="prompt1" required></input>
              <SubmitButton />
          </form>
        
      </div>
    );
  }