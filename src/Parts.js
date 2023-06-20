import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import teams from './teams.json'
import Popup from 'reactjs-popup';
import './Parts.css'

function TeamSelected({team}) {
    const resetTeam = () => {
        localStorage.removeItem('selectedTeam')
    }

    return(
        <div>
        <h4 className='team'>{team}</h4>
        <button onClick={resetTeam}>Reset Team</button>
        </div>
    )
}

export function Header( { title } ) {
    return(
        <header>
        <h1>/venatus/{title}</h1>
        <nav>
        <ul>
            <li>
            <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'../locations'}>Locations</Link>
            </li>
            <li>
            <Link to={'../scoreboard'}>Scoreboard</Link>
            </li>
            <li>
            <Link to={'../help'}>Help</Link>
            </li>
        </ul>
        </nav>
    </header>
)}

export function Footer( { team } ) {
return(
    <footer>
    <TeamSelected team={team}/>
    <h4>&copy; Erros. All rights reserved.</h4>
    </footer>
)}

export function SelectionPopup( { isTeamSelected } ) {
    const [selectedTeam, setSelectedTeam] = useState('')
  
    useEffect(() => {
      const storedTeam = localStorage.getItem('selectedTeam')
      if (storedTeam) {
        setSelectedTeam(storedTeam)
      }
    }, [])
  
    const handleTeamSelection = (event) => {
      setSelectedTeam(event.target.value)
      localStorage.setItem('selectedItem', event.target.value)
    }

    const handleClosePopup = () => {
        const selectedRadioButton = document.querySelector('input[name="teamSelection"]:checked')

        if (selectedRadioButton) {
            setSelectedTeam(selectedRadioButton.value)

            localStorage.setItem('selectedTeam', selectedTeam)
        }
        
    }

    return(
        <Popup open={isTeamSelected} 
        modal={true}
        className='team-selection-popup'
        closeOnDocumentClick={false}
        closeOnEscape={false}>
            <div className='team-selection-popup'>
                <form>
                    <label>Select Your Team</label>
                    {teams.map((team) => (
                        <div key={team.id}>
                        <label htmlFor={team.id}>
                        <input type='radio'
                        id={team.id}
                        name='teamSelection'
                        value={team.name}
                        onChange={handleTeamSelection} />
                        {team.name}</label>
                        </div>
                    ))}
                    <button className='team-selection-popup' onClick={handleClosePopup}>Confirm Selection</button>
                </form>
            </div>
        </Popup>
    )
}