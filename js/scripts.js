
// Hides and shows javascript definition
$(document).ready(function() {
  $(".click-js").click(function() {
    $("#java-showing").toggle();
    // $("#java-hidden").toggle();
  });

// hides and shows operator definition
$(".click-operators").click(function() {
  $("#op-showing").toggle();
  // $("#op-hidden").toggle();
});

// Hides and Shows operator definition
$(".click-var").click(function() {
  $("#var-showing").toggle();
  // $("#var-hidden").toggle();
 });

 $(".click-scope").click(function() {
   $("#scope").toggle();
  });

  $(".click-glscope").click(function() {
    $("#glscope").toggle();
  });

  $(".click-loscope").click(function() {
    $("#loscope").toggle();
  });

  $(".click-method").click(function() {
    $("#method-showing").toggle();
  });

  $(".click-arguments").click(function() {
    $("#arguments-showing").toggle();
  });

  $(".click-para").click(function() {
    $("#p-showing").toggle();
  });
  
  $(".click-return").click(function() {
    $("#return-showing").toggle();
  });

  $(".click-attributes").click(function() {
    $("#attributes-showing").toggle();
  });
});



// $("p").click(function(){
//   $("." + this.className).toggle();
// });
// as long as the word-answer pairs have the same class, this works fine
// ex       <p class="1">operator</p>
//     <p class="1" style="display: none">answer</p>
// <p class="1">operator</p>
//     <p class="1" style="display: none">answer</p>
//     <p class="2">variables</p>
//     <p class="2" style="display: none">answer</p>
//     <p class="3">Variable naming conventions</p>
//     <p class="3" style="display: none">answer</p>
//     <p class="4">Functions</p>
//     <p class="4" style="display: none">answer</p>
//     <p class="5">Methods</p>
//     <p class="5" style="display: none">answer</p>
//     <p class="6">Arguments</p>
//     <p class="6" style="display: none">answer</p>
//     <p class="7">Parameters</p>
//     <p class="7" style="display: none">answer</p>
//     <p class="8">Return</p>
//     <p class="8" style="display: none">answer</p>
//     <p class="9">Chaining methods</p>
//     <p class="9" style="display: none">answer</p>
//     <p class="10">Strings</p>
//     <p class="10" style="display: none">answer</p>
//     <p class="11">Booleans</p>
//     <p class="11" style="display: none">answer</p>
//     <p class="12">NaN</p>
//     <p class="12" style="display: none">answer</p>
//     <p class="13">Null</p>
//     <p class="13" style="display: none">answer</p>
//     <p class="14">Alert</p>
//     <p class="14" style="display: none">answer</p>
//     <p class="15">Comments</p>
//     <p class="15" style="display: none">answer</p>

  