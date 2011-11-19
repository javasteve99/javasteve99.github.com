$(document).ready(function() {
       // checkArrows funtion provided by Derek Dahmer
       checkArrows = function() {
            var hasNextElem = $('.project:visible').next().length > 0;
            var hasPrevElem = $('.project:visible').prev().length > 0;
            if (hasNextElem) {
                $('#rightArrow').show();
            } else {
                $('#rightArrow').hide();
            }
            if (hasPrevElem) {
                $('#leftArrow').show();
            } else {
                $('#leftArrow').hide();
            }
       }

       $('<a href="#" id="leftArrow"></a><a href="#" id="rightArrow"></a>').insertAfter('#blueBar');

       $('#projectContainer > .project').hide();
       $('#projectContainer > .project:first').show();
        
       checkArrows();
       $('#rightArrow').click(function() {
               $('.project:visible').hide().next().show();
               checkArrows();
       });
       $('#leftArrow').click(function() {
               $('.project:visible').hide().prev().show();
               checkArrows();
       });
});