import styles from "./Response.modules.css"
import {WeatherIcons} from "../App";


const WeatherInfoComponent = ({icon, name, value}) => {
    return(
        <div className="infoContainer">
            <img className="weatherImgs" src={icon}/>
            <span className="infoLabel">
                {value}
                <span>{name}</span>
            </span>
        </div>
    )
}

const Response = ({cInfo, hInfo, wInfo, pInfo, city, country, temp, desc, icon}) => {
    return(
    <div>
        <div id="aaa">
            <span><span id="temp">{`${Math.floor(temp - 273)}°C`}</span> | {desc}</span>
            <img src={WeatherIcons[icon]} id="image"/>
        </div>
        <p id="location">{city}, {country}</p>

            <p id="left">Weather Info</p>
            <div id="weatherInfo">
            <WeatherInfoComponent name="Cloudiness" icon="/icons/cloud.svg" value={cInfo + "%"} />
            <WeatherInfoComponent name="Humidity" icon="/icons/droplet.svg" value={hInfo + "%"} />
            <WeatherInfoComponent name="Wind" icon="/icons/wind.svg" value={wInfo + "m/s"} />
            <WeatherInfoComponent name="Pressure" icon="/icons/log-in-circle.svg" value={pInfo + "hPa"} />

        </div>

        {/* <h3>Weather App</h3> */}
    </div>
    )
}

export default Response