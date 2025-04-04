import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"

       

function HomePAge() {
    return (
        <div>
            <PageNav/>
           <h1> Welcome to WorldWise Home</h1>
         <Link to='/pricing'>Pricing</Link>
        </div>
    )
}

export default HomePAge
