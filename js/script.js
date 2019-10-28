$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("button").click(function(){
$(".output").text("hey");
var nums= $("input").val();
var nums_array = nums.split('+');

function pig(str)
{
    return str;
}

  $("button").click(() => {
      let message = $("input").val();
      $("body").append(message);
  })


});
