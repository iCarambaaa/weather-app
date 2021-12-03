
import { useAppSelector } from '../app/hooks';
import {selectCurrentWeather} from '../features/currentWeather/currentWeatherSlice'


const DisplayWeather = ( ) => {

    // set current day of week
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const now = new Date();
    const day = days[ now.getDay() ];

    const weather = useAppSelector(selectCurrentWeather)
    //console.log(weather)

    return (
        <div className="page-content page-container" id="page-content">
    <div className="container">
        <div className="row container-fluid d-flex justify-content-center">
            <div className="col-lg-12  stretch-card">
                <div className="card card-weather">
                    <div className="card-body">
                        <div className="weather-date-location">
                            <h3>{day}</h3>
                            <h5 className="text-gray large"> <span >{new Date().toLocaleDateString('de-DE')}</span> <span className="weather-location">{weather?.name}, {weather?.sys.country}</span> </h5>
                        </div>
                        <div className="weather-data d-flex">
                            <div className="mr-auto">
                                <h4 className="display-3">{weather?.main.temp} <span className="symbol">°</span>C</h4>
                                <h5> {weather?.weather[0].description} </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default DisplayWeather