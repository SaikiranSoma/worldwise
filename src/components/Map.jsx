import { useSearchParams,useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
const navigate=useNavigate();

  const [searchparams, setSearchparams] = useSearchParams();
  const lat = searchparams.get("lat");
  const lng = searchparams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
      <h1>Map</h1>
      <h1>
        Postions: {lat}, {lng}{""}
      </h1>
      <button  onClick={()=>setSearchparams({lat:17.38405,lng:78.45636})}>Change position</button>
    </div>
  );
}

export default Map;
