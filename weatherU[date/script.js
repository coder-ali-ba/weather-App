let cit=document.getElementById('city');
let max=document.getElementById("max");
let min=document.getElementById("min");
let moist=document.getElementById("moist");
let wind=document.getElementById("wind");
let press=document.getElementById("pres");

let z=document.createElement("p");
z.innerHTML="<sup>o</sup>";

let apiKey='b318a99fc41be10d323d2c44e28d6671'
let url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
let temp=document.getElementById('temp');
let bod=document.querySelector("body");

async function  checkWeath (){
let response= await fetch(url + cit.value+ `&appid=${apiKey}`);
let data = await response.json();


let sunImg=document.getElementById("sunImag");
if(data.main.temp > "14"){
    sunImg.src="https://static.vecteezy.com/system/resources/thumbnails/009/304/897/small_2x/sun-icon-set-clipart-design-illustration-free-png.png"
    bod.style.backgroundImage='url("https://t4.ftcdn.net/jpg/06/41/91/85/360_F_641918542_bL3O5qWqKmaVrxM12Qa1pp1owFvKKP3k.jpg")';

}else if(data.main.temp <= "13" && data.main.temp >= "7"){
    sunImg.src="https://www.pngmart.com/files/12/Sun-And-Cloud-Transparent-Images-PNG.png"
    bod.style.backgroundImage='url("https://t4.ftcdn.net/jpg/08/68/58/23/360_F_868582374_tOPxMkPdJl3OsDIc30W5zaQl03S31MEI.jpg")';

} else if(data.main.temp <= "6"){
    sunImg.src="https://static.vecteezy.com/system/resources/thumbnails/052/655/398/small/thick-gray-clouds-hovering-in-a-bright-sky-png.png"
    bod.style.backgroundImage='url("https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?cs=srgb&dl=pexels-pixabay-158163.jpg&fm=jpg")';

}

temp.innerHTML=`${data.main.temp} ${z.innerHTML}C `;
max.innerText=`MAX, ${data.main.temp_max} deg C ,`
min.innerText=`MIN, ${data.main.temp_min} deg C`
moist.innerText=`${data.main.humidity}%`
wind.innerText=`${data.wind.speed} KM/H`
press.innerText=`${data.main.pressure} MB`





}

function fun2(){
    let day =document.getElementById("day");
    let sun = new Date()
    let dateDay=sun.getDay()
    if(dateDay=="1"){
      day.innerHTML="MONDAY"  
    }else if(dateDay=="2"){
        day.innerHTML="TUESDAY"
    }else if(dateDay=="3"){
        day.innerHTML="WEDNESDAY"
    }else if(dateDay=="4"){
        day.innerHTML="THURSDAY"
    }else if(dateDay=="5"){
        day.innerHTML="FRIDAY"
    }else if(dateDay=="6"){
        day.innerHTML="SATURDAY"
    }else{
        day.innerHTML="SUNDAY"
    }
  
 
}
fun2()



