import { Link } from 'react-router-dom'

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
)
}

export function Footer() {
return(
    <footer>
    <h4>&copy; Erros. All rights reserved.</h4>
    </footer>
)
}