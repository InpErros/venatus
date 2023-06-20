import './Location.css'
import PromptWindow from './PromptWindow'
import { useParams } from 'react-router-dom'
import locations from './locations.json'


function Prompts({prompts}) {
    return(
        <div>
            <ul>
                {prompts.map((prompt) => (
                    <li key={prompt.id}>
                        <PromptWindow prompt={prompt} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function Location() {
    const { locationPath } = useParams()
    const currentLocation = locations.find(location => location.pathname === locationPath)

    return( 
        <div>
            <h2 className='title-section'>{currentLocation.name}</h2>
            <p className='title-section'>{currentLocation.description}</p>
            <Prompts prompts={currentLocation.prompts} />
        </div>
    )
}
