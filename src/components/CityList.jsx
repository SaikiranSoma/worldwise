import styles from './CityList.module.css'
import Spinner from './Spinner'
function CityList({cities,isloading}) {

    if(isloading) return <Spinner/>
    return (
        <ul style={styles.CityList}>
            {cities.map((city)=>(<CityList city={city} key={city.id}/>))}
        </ul>
    )
}

export default CityList
