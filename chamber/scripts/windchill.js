"use strict"
       /*Definig Table
        input: get a temperature in Farenheit and wind speed in miles per hour from user.
        process: call a function to calculate the ind chill
        output: display the result from the wind chill function
        */
        function doInputOutput(){
            //get input values
            let tempF = parseFloat(document.getElementById("temperature").value);
            let speed = parseFloat(document.getElementById("windspeed").value);
           
          
           
           if (tempF > 50 || speed < 3){
              document.write('N/A');
            
           }
           else{
              //calling the function that calculate the result
              let result = 'Windchill is' + windChill(tempF, speed) + "F°";
              //output the result to a div
              document.getElementById("output").innerHTML =result;   

           }
            
           

        }
        
        function windChill(tempF, speed){
            let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
            return Math.round(f);

          //f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
        }
            