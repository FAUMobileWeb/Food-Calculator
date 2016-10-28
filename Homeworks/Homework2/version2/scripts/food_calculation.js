function update() {
  var apple = document.getElementById("apple").value*72;
  var bagel = document.getElementById("bagel").value*289;
  var banana = document.getElementById("banana").value*105;
  var beer = document.getElementById("beer").value*153;
  var bread = document.getElementById("bread").value*66;
  var carrots = document.getElementById("carrots").value*102;
  var cheese = document.getElementById("cheese").value*52;
  var chicken = document.getElementById("chicken").value*113;
  calculate(apple, bagel,banana,beer,bread,carrots,cheese,chicken);
}
function calculate(apple, bagel,banana,beer,bread,carrots,cheese,chicken)
{
  var total=apple+bagel+banana+beer+bread+carrots+cheese+chicken;
  document.getElementById("result").innerHTML=total;

}
