
//(10 * weight(kg)) + (6.25 * height(cm)) - 5 * (age(y)) 

function output(){
    var x = document.getElementById("myRange").value;
    //document.getElementById("demo").innerHTML = x;
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    var value3 = document.getElementById('value3').value;
    if (document.getElementById("female").checked == true)
    {
        var mod =-61;
    }
    else
    {
        var mod =5;
    }

    document.getElementById('result123').innerHTML = "Your Caloric inTake should be: " + Math.round(x*((10 * parseInt(value3)* 0.453592) + (6.25* parseInt(value2)*30.48)-(5*parseInt(value1))+mod));
}

