const Url = "https://api.weatherapi.com/v1/forecast.json?key=458f92c326104febab282844241409&q=";
let searchbutt=document.querySelector("#searchbutt");

searchbutt.onclick= async (e)=>{
  let userlocation=document.querySelector("#search_bar").value;
   let weatherResponse= await fetch(`${Url}${userlocation}&days=3`);
   let weatherData= await weatherResponse.json(); 
   console.log(weatherData);
   let displayLocation=document.querySelector("#locationName");
   displayLocation.innerHTML=`<h1> <i class="fa-solid fa-location-dot"style="color: #379777;"></i>${userlocation}</h1>`;
   let countryTime=document.querySelector("#cityInfo");
   let datetime=weatherData.location.localtime;
    let timeonly=datetime.split(" ")[1];
   countryTime.innerHTML=`${weatherData.location.country},<span> ${timeonly}</span>`;
   let todayTempC=document.querySelector("#currtempC");
   let todayTempF=document.querySelector("#currtempF");
   let todayClouds=document.querySelector("#currClouds");
    
     todayTempC.innerHTML=`<h1> <i class="fa-solid fa-temperature-three-quarters"style="color: #379777;"></i>${weatherData.current.temp_c}<span>C</span></h1>`;
     todayTempF.innerHTML=`<h1> <i class="fa-solid fa-temperature-three-quarters"style="color: #379777;"></i>${weatherData.current.temp_f}<span>F</span></h1>`;  
     todayClouds.innerHTML=`<h1> <i class="fa-solid fa-cloud" style="color: #379777;"></i> ${weatherData.current.cloud}% </h1>`;
       

     let iconUrl = weatherData.current.condition.icon;
     
     if (!iconUrl.startsWith("http")) {
       iconUrl = "https:" + iconUrl;
     }
     let todayCondicon = document.querySelector("#currWconditionIcon");
     todayCondicon.querySelector("img").src = iconUrl;
    let todayCond=document.querySelector("#currWcond");
    todayCond.innerHTML=`${weatherData.current.condition.text}`;

     let dateN1=document.querySelector("#nextDdate1");
     let dateN2=document.querySelector("#nextDdate2");
     let dateN3=document.querySelector("#nextDdate3");
     let condN1=document.querySelector("#nextDcond1");
     let condicon1=document.querySelector("#nextDcond1icon");
     let condicon2=document.querySelector("#nextDcond2icon");
     let condicon3=document.querySelector("#nextDcond3icon");
     let condN2=document.querySelector("#nextDcond2");
     let condN3=document.querySelector("#nextDcond3"); 
      let MtempN1=document.querySelector("#nextDHtempC1");
      let MtempN2=document.querySelector("#nextDHtempC2");
      let MtempN3=document.querySelector("#nextDHtempC3");
      let LtempN1=document.querySelector("#nextDLtempC1");
      let LtempN2=document.querySelector("#nextDLtempC2");
      let LtempN3=document.querySelector("#nextDLtempC3");
      let WindN1=document.querySelector("#nextDwind1");
      let WindN2=document.querySelector("#nextDwind2");
      let WindN3=document.querySelector("#nextDwind3");


  let forecastdata=weatherData.forecast.forecastday;
   dateN1.innerHTML=`${forecastdata[0].date}`;
   dateN2.innerHTML=`${forecastdata[1].date}`;
   dateN3.innerHTML=`${forecastdata[2].date}`;

   let urlicon1=forecastdata[0].day.condition.icon;
   if(!urlicon1.startsWith("http"))
{
   urlicon1= "https:" + urlicon1;
}

let urlicon2=forecastdata[1].day.condition.icon;
if(!urlicon2.startsWith("http"))
{
urlicon2= "https:" + urlicon2;
}

let urlicon3=forecastdata[2].day.condition.icon;
if(!urlicon3.startsWith("http"))
{
urlicon3= "https:" + urlicon3;
}

condicon1.querySelector("img").src=`${urlicon1}`;
condicon2.querySelector("img").src=`${urlicon2}`;
condicon3.querySelector("img").src=`${urlicon3}`;

condN1.innerHTML=`${forecastdata[0].day.condition.text}`;
condN2.innerHTML=`${forecastdata[1].day.condition.text}`;
condN3.innerHTML=`${forecastdata[2].day.condition.text}` ;
 

MtempN1.innerHTML=`<p><i class="fa-solid fa-temperature-full" style="color: #379777;"></i>${forecastdata[0].day.maxtemp_c}</p>`;
MtempN2.innerHTML=`<p><i class="fa-solid fa-temperature-full" style="color: #379777;"></i>${forecastdata[1].day.maxtemp_c}</p>`;
MtempN3.innerHTML=`<p><i class="fa-solid fa-temperature-full" style="color: #379777;"></i>${forecastdata[2].day.maxtemp_c}</p>`;


LtempN1.innerHTML=`<p><i class="fa-solid fa-temperature-low" style="color: #379777;"></i>${forecastdata[0].day.mintemp_c}</p>`;
LtempN2.innerHTML=`<p><i class="fa-solid fa-temperature-low" style="color: #379777;"></i>${forecastdata[1].day.mintemp_c}</p>`;
LtempN3.innerHTML=`<p><i class="fa-solid fa-temperature-low" style="color: #379777;"></i>${forecastdata[2].day.mintemp_c}</p>`;


WindN1.innerHTML=`<p><i class="fa-solid fa-wind"style="color: #379777;"></i>${forecastdata[0].day.maxwind_kph}kph</p>`;
WindN2.innerHTML=`<p><i class="fa-solid fa-wind"style="color: #379777;"></i>${forecastdata[1].day.maxwind_kph}kph</p>`;
WindN3.innerHTML=`<p><i class="fa-solid fa-wind"style="color: #379777;"></i>${forecastdata[2].day.maxwind_kph}kph</p>`;


let currwind=document.querySelector("#windkph");
let currWdegree=document.querySelector("#winddegree");
let currWdir=document.querySelector("#WindDir");
currwind.innerHTML=`<span><i class="fa-solid fa-wind"style="color: #379777;"></i> ${weatherData.current.wind_kph} kph</span>`;

currWdegree.innerHTML=`<span><i class="fa-solid fa-diamond-turn-right"style="color: #379777;"></i>${weatherData.current.wind_degree} Deg</span>`;

currWdir.innerHTML=`<span><i class="fa-solid fa-compass"style="color: #379777;"></i>${weatherData.current.wind_dir} </span>`;

    }



    

