
function update() {
   
 /*var vitem1 = document.getElementById("sitem1");
    var titem1 = vitem1.options[vitem1.selectedIndex].value;
  var vitem2 = document.getElementById("sitem2");
     var titem2 = vitem2.options[vitem2.selectedIndex].value;
  var vitem3 = document.getElementById("sitem3");
     var titem3 = vitem3.options[vitem3.selectedIndex].value;
  var vitem4 = document.getElementById("sitem4");
     var titem4 = vitem4.options[vitem4.selectedIndex].value;
  var vitem5 = document.getElementById("sitem5");
     var titem5 = vitem5.options[vitem5.selectedIndex].value;
  var vitem6 = document.getElementById("sitem6");
     var titem6 = vitem6.options[vitem6.selectedIndex].value;
  var vitem7 = document.getElementById("sitem7");
     var titem7 = vitem7.options[vitem7.selectedIndex].value;
  var vitem8 = document.getElementById("sitem8");
     var titem8 = vitem8.options[vitem8.selectedIndex].value;
    var wtf=12345677;
    
    document.getElementById("result").innerHTML= wtf;
	*/
	var titem1 = $('#sitem1').val();
	var titem2 = $('#sitem2').val();
	var titem3 = $('#sitem3').val();
	var titem4 = $('#sitem4').val();
	var titem5 = $('#sitem5').val();
	var titem6 = $('#sitem6').val();
	var titem7 = $('#sitem7').val();
	var titem8 = $('#sitem8').val();

  calculate(titem1,titem2,titem3,titem4,titem5,titem6,titem7,titem8);
}
function calculate(titem1,titem2,titem3,titem4,titem5,titem6,titem7,titem8)
{
    var food = ["apple","bagel","banana","beer","bread","carrots","cheese","chicken"];
    var camount=[72,289,105,153,66,102,52,113];
    var x1=0,x2=0,x3=0,x4=0,x5=0,x6=0,x7=0,x8=0;
    for(var i=0;i<=7;i++)
        {
			
    if(titem1==food[i])
        {
			x1=camount[i]*document.getElementById("item1").value;}
            if(titem2==food[i])
        {x2=camount[i]*document.getElementById("item2").value;}
            if(titem3==food[i])
        {x3=camount[i]*document.getElementById("item3").value;}
            if(titem4==food[i])
        {x4=camount[i]*document.getElementById("item4").value;}
            if(titem5==food[i])
        {x5=camount[i]*document.getElementById("item5").value;}
            if(titem6==food[i])
        {x6=camount[i]*document.getElementById("item6").value;}
            if(titem7==food[i])
        {x7=camount[i]*document.getElementById("item7").value;}
            if(titem8==food[i])
        {x8=camount[i]*document.getElementById("item8").value;}
            
        }
  var total=x1+x2+x3+x4+x5+x6+x7+x8;
  document.getElementById("result").innerHTML=total;

}

/*var apple = document.getElementById("sitem1").value*72;
  var bagel = document.getElementById("sitem2").value*289;
  var banana = document.getElementById("sitem3").value*105;
  var beer = document.getElementById("sitem4").value*153;
  var bread = document.getElementById("sitem5").value*66;
  var carrots = document.getElementById("sitem6").value*102;
  var cheese = document.getElementById("sitem7").value*52;
  var chicken = document.getElementById("sitem8").value*113;*/