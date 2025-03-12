const API_KEY = "79459a8b54dd230efd381529bf6ba0c9"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export async function fetchWeatherData(city:string){
    try{
       const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)

       if(!res.ok){
        throw new Error("Failed to fetch")
       }

       const data = await res.json()
       return data
    }
    catch(error){
        console.log(error)
        return null
    }
}