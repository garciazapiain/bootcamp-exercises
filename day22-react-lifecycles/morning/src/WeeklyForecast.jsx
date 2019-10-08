import React from 'react';
import DayForecast from './DayForecast.jsx'
import Forecast from './forecast.js'

function WeeklyForecast(){
    const dayComponents = Forecast.map(forecast => <DayForecast weekday={forecast.day} weather={forecast.weather} tempDay={forecast.tempDay} tempNight={forecast.tempNight} />  )
    return(
        <div>
            <h1>Weekly Weather Forecast</h1>
            <div class="week-forecast">
            {dayComponents}
            </div>
        </div>
    )
}

export default WeeklyForecast

