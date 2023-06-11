import './Scoreboard.css'
import {Header, Footer} from './Parts'
import { useState } from 'react'

function Scores() {
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);
  
    const handleTeamAScoreUpdate = () => {
      setTeamAScore(teamAScore + 1);
    };
  
    const handleTeamBScoreUpdate = () => {
      setTeamBScore(teamBScore + 1);
    };
  
    const calculateProgress = (score) => {
      const maxScore = 10; // Maximum score to reach
      const progressPercentage = (score / maxScore) * 100;
      return `${progressPercentage}%`;
    };
  
    return (
      <div className="scoreboard">
        <div className="team">
          <h2>Team A</h2>
          <button onClick={handleTeamAScoreUpdate}>+1</button>
          <div className="progress-bar">
            <div className="progress" style={{ width: calculateProgress(teamAScore) }}></div>
          </div>
          <p>Score: {teamAScore}</p>
        </div>
        <div className="team">
          <h2>Team B</h2>
          <button onClick={handleTeamBScoreUpdate}>+1</button>
          <div className="progress-bar">
            <div className="progress" style={{ width: calculateProgress(teamBScore) }}></div>
          </div>
          <p>Score: {teamBScore}</p>
        </div>
      </div>
    );
}

export default function Scoreboard() {
return (
    <div>
        <Header title='scoreboard' />
        <Scores/>
        <Footer/>
    </div>
)
}