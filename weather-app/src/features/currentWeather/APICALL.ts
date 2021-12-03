
export default async function APICALL(query: string) { 

    const apikey = process.env.REACT_APP_WEATHER_API

    const baseEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apikey}`;
    console.log(baseEndpoint)

    try {
        const response = await fetch(baseEndpoint);
        if (!response.ok) {
            alert("Error fetching results");
            return;
        }
        const  data  = await response.json();
        console.log(data);
        return data
        
    } catch (error) {
        console.log(error);
}
}