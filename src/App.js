import './App.css';
import { Link, Outlet } from 'react-router-dom'
import { Header, Footer, SelectionPopup} from './Parts'
import locations from './locations.json'
import { useEffect, useState } from 'react'

function TitleHeader() {
  return(
    <header>
    <h1>/venatus/</h1>
    </header>
  )
}

function LocationHeader() {
  return(
    <div className='nav-list'>
      <header className='second-row'>
        <nav>
          <ul>
              {locations.map((location) => (
                <li key={location.id}>
                  <Link to={`../locations/${location.pathname}`}>{location.name}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </header>
  </div>

  
)
}


export function Locations() {
  return (
    <div>
      <Header title='locations' />
      <LocationHeader />
      <Outlet/>
      <Footer/>
    </div>
  )
}


export function Help() {

  return (
    <div>
      <Header title='help'/>
      <p>To Be filled at a later date and time</p>
      <Footer/>
    </div>
  )
}


function Info() {
  return(
    <div className="title-page">
      <h1 className="title">Welcome to the Scavenger Hunt!</h1>
      <div className="rules">
        <h2>things to keep in mind:</h2>
        <ul>
          <li>The game is broken up into <b>areas</b>. Each area requires a puzzle to be solved to unlock them. Each area has a set number of <b>prompts</b>.</li>
          <li>Some prompts are required to be completed to move onto the next area. Some are not. Those that are required to be completed are worth more points than the optional prompts.</li>
          <li>These prompts represent puzzles that may or may not be linked together</li>
          <li>Teams will complete the same areas. However, teams are given different "starting" areas to start off the hunt</li>
          <li>There will be an introductory area that both teams will start at before being directed to another area.</li>
        </ul>
      </div>
      <div className="navigation-info">
        <h2>site navigation explained:</h2>
        <ul>
          <li><i>locations</i>: Where you access puzzle locations</li>
          <li><i>scoreboard</i>: Where you see both teams current scores</li>
          <li><i>help</i>: Where you get some helpful information, if you need it</li>
        </ul>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li key={0}>
            <Link to={'../locations'}>Locations</Link>
          </li>
          <li key={1}>
            <Link to={'../scoreboard'}>Scoreboard</Link>
          </li>
          <li key={2}>
            <Link to={'../help'}>Help</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}


export default function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [team, setTeam] = useState('')

  useEffect(() => {
    const teamSelected = localStorage.getItem('selectedTeam')
    if(!teamSelected){
      setShowPopup(true)
    }
    setTeam(teamSelected)
  }, [])



  return (
    <div>
      <SelectionPopup isTeamSelected={showPopup} />
      <TitleHeader />
      <Info />
      <Footer team={team}/>
    </div>
  );
}

