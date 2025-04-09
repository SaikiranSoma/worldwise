import CityItem from './CityItem'
import styles from './CityList.module.css'
import Spinner from './Spinner'
import Message from './Message'
function CityList({_cities,_isloading}) {

    if(_isloading) return <Spinner/>

    if(!_cities.length) return <Message message="Add visited city on map by clicking on the map"/>
    return (
        <ul style={styles.CityList}>
            {_cities.map((city)=>(<CityItem city={city} key={city.id}/>))}
        </ul>
    )
}

export default CityList
