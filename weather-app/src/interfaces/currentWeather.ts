export default interface currentWeather{
    
        weather: weather[],
        base: string,
        main: main,
        visibility: number,
        wind: wind,
        clouds: {
          all: number
        },
        dt: number,
        sys: sys,
        timezone: number,
        id: number,
        name: string,
        cod: number
      
}

export interface weather {
    
        id: number,
        main: string,
        description: string,
        icon: string
      
}

export interface main {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

export interface wind {
    speed: number,
    deg: number,
    gust: number
}

export interface sys {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  }