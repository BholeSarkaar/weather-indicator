const frm=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const times=document.querySelector('img.time');
const icon=document.querySelector('.icon img');
const forc=new forecast();
const updation=(data)=>{
     const cityDetails=data.cityDetails;
     const weather=data.weather;
        details.innerHTML=`
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
 `;
 const ics=`${weather.WeatherIcon}.svg`;
 icon.setAttribute('src',ics);
 const tm=weather.IsDayTime?'day.svg':'night.svg';
 times.setAttribute('src',tm);

 if(card.classList.contains('d-none')){
     card.classList.remove('d-none');
 }
};
frm.addEventListener('submit',e=>{
    e.preventDefault();
    const city=frm.city.value.trim();
    frm.reset();
    forc.changeCity(city).then(data=>{
        updation(data);
    }).catch(err=>{
        console.log(err);
    });
    localStorage.setItem('city',city);
});
if(localStorage.getItem('city')){
    forc.changeCity(localStorage.getItem('city')).then(data=>{
        updation(data);
    }).catch(err=>{
        console.log(err);
    });
}