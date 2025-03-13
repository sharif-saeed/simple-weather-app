export interface WeatherData{
    main: {
        temp: number
        humidity: number
    }
    weather: [
        {
            description: string
        }
    ]
    wind: {
        speed: number
    }
}

export default function WeatherCard({data} : {data:WeatherData}){
    return(
        <div className="weather-card">
            <h2>{data.weather[0].description}</h2>
            <p>Temperature: {data.main.temp}</p>
            <p>Humidity: {data.main.humidity}</p>
            <p>Wind Speed: {data.wind.speed}</p>
        </div>
    )
}