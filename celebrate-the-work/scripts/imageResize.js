$(document).ready(function() {  
  
 function imageresize() {  
 var containerwidth = $('#container').width();  
 if ((containerwidth) < '899'){  
 $('.fluidimage').attr('width','400');  
 } else {  
 $('.fluidimage').attr('width','800');  
 }  
 }  
  
 imageresize();//Triggers when document first loads      
  
 $(window).bind("resize", function(){//Adjusts image when browser resized  
 imageresize();  
 });  
  
 });  