import React, { useState } from 'react'
import "./WheatherCard.css"

const WheatherCard = ({ weather, tempert }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    const handleChange = () => {
        setIsCelsius(state => !state)
    }


    return (
        <article className='weather'>
            <h1 className='app__title'>Weather App</h1>
            <h2 className='app__subtitle'>{weather?.name}, {weather?.sys.country}</h2>
            <section className='app__body'>
                <header className='aap__img'>
                    <img className='app__icon'
                        src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                </header>
                <article className='app__info'>
                    <h3 className=' app__info_title'>"{weather?.weather[0].description}"</h3>
                    <ul className='app__list'>
                        <li className='app__item'><span className='app__label'>Wind Speed</span><span className='app__value'>{weather?.wind.speed} m/s</span></li>
                        <li className='app__item'><span className='app__label'>Clouds</span><span className='app__value'>{weather?.clouds.all} %</span></li>
                        <li className='app__item'><span className='app__label'>Presurre</span><span className='app__value'>{weather?.main.pressure} hPa</span></li>
                    </ul>
                    <footer className='app__footer'>
                        <h2 className='app_temp'>{
                            isCelsius
                                ? `${tempert?.celsius} °C`
                                : `${tempert?.fahrenheit} °F`
                        }</h2>
                       <button className='app__btn' onClick={handleChange}>change temperatur</button>
                    </footer>
                </article>
            </section>  
        </article>
    )
}

export default WheatherCard