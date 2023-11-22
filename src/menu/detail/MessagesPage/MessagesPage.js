import { Link } from "react-router-dom";
import './MessagesPage.css'

export const MessagesPage = () => {
    return(
        <>
        <h1 className="h1">Messages Page</h1>
        <table className="table">
            <ul>
                <li><Link to='a'>Tuan Pham</Link></li>
                <li><Link to='b'>Tuan Pham</Link></li>
                <li><Link to='c'>Tuan Pham</Link></li>
            </ul>
        </table>
        </>
    )
}