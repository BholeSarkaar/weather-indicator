class forecast{
    constructor(){
        this.key='7nO6WOqU21byMTM3D8s5GRC9yi3bjprg';
        this.weatherkey="http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityKey="http://dataservice.accuweather.com/locations/v1/cities/search";
    }
   async changeCity(city){
        const cdts=await this.City(city);
        const wt=await this.weather(cdts.Key);
            return {
                cityDetails:cdts,
                weather:wt
            };
    };
    async weather(ide){
        const add=`${ide}?apikey=${this.key}`;
        const response=await fetch(this.weatherkey+add);
        const data=await response.json();
        return data[0];
    }
    async City(city){
        const add=`?apikey=${this.key}&q=${city}`;
        const response=await fetch(this.cityKey+add);
        const data=await response.json();
        return data[0];
    }
}


