const submitBtn = document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp-status');
const temp=document.getElementById('temp');
const data_hide=document.querySelector('.middle_layer');

let getCurrDate=()=>
{
    let day=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let month=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    let d=new Date();
    let curr_day=d.getDay();
    let curr_month=d.getMonth();
    let date=d.getDate();
    // let time=formatAMPM(d);
    
    let dom_day=document.getElementById('day');
    let dom_date=document.getElementById('date');
    dom_day.innerText=day[curr_day-1];
    dom_date.innerText=date+month[curr_month-1];

}
getCurrDate();
const getInfo = async (event) => {
  event.preventDefault();
  // alert("hii");
  let cityVal=cityName.value;
if(cityVal==="")
{
 city_name.innerText=`Please Write the name before you Search`;
 data_hide.classList.add("data_hide");
}
else{

    try {
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a649f620eb6387048670f7964ac9ffe5`;
        const response=await fetch(API);    
        const data=await response.json();
        // console.log(data);

        const arrData=[data];
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp.innerHTML=`<span>${arrData[0].main.temp+1}</span><sup>o</sup>C`;
        const tempMood=arrData[0].weather[0].main;

        if(tempMood=="Clear")
        {
            temp_status.innerHTML=`<i class="fa fa-sun" style='color:#eccc68;' aria-hidden="true"></i>`;
        }
        else if(tempMood=="Clouds")
        {
            temp_status.innerHTML=`<i class="fa fa-cloud" style='color:#f1f2f6;' aria-hidden="true"></i>`;
        }
        else if(tempMood=="Rain")
        {
            temp_status.innerHTML=`<i class="fa fa-rain" style='color:#a4b0be;' aria-hidden="true"></i>`;
        }
        else
        {
            temp_status.innerHTML=`<i class="fa fa-cloud" style='color:#f1f2f6;' aria-hidden="true"></i>`;
        }

        

        data_hide.classList.remove("data_hide");

    } catch (error) {
        city_name.innerText=`Please enter the city name properly`; 
        data_hide.classList.add("data_hide");
    }
    


}
};
submitBtn.addEventListener("click", getInfo);
