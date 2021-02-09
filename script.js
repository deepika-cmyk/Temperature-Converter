// <form  id="tempCalc"onsubmit="calculateTemp(); return false">
const calculateTemp=()=>{
    const tempnum=document.getElementById('temp').value;
    //console.log(tempnum);
  const tempselected=document.getElementById('temp_diff');
    const tempValue=temp_diff.options[tempselected.selectedIndex].value;
    //console.log(tempValue);
   
const celtofah=(celsius)=>{
    let Fahrenheit=Math.round((celsius * 9/5)+32);
    return Fahrenheit;
}
const fahtocel=(fahrenheit)=>{
    let Celsius=Math.round((fahrenheit -32)*5/9);
    return Celsius;
}
let result;

 if(tempValue==='cel')
{
        result=celtofah(tempnum);
        //console.log(result);
       document.getElementById('resultcontainer').innerHTML=`= ${result} Fahrenheit`;

    }
    else{
        result=fahtocel(tempnum);
       // console.log(result);
        document.getElementById('resultcontainer').innerHTML=`= ${result} Celsius`;
   }
}