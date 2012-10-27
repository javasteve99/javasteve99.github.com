/*
 * jQuery Raptorize Plugin 1.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function(a){a.fn.raptorize=function(b){var c={enterOn:"click",delayTime:5e3};var b=a.extend(c,b);return this.each(function(){function i(){g=true;if(d){function b(){document.getElementById("elRaptorShriek").play()}b()}h.animate({bottom:"0"},function(){a(this).animate({bottom:"-130px"},100,function(){var b=a(this).position().left+400;a(this).delay(300).animate({right:b},2200,function(){h=a("#elRaptor").css({bottom:"-700px",right:"0"});g=false})})})}var c=a(this);var d=false;if(a.browser.mozilla&&a.browser.version.substr(0,5)>="1.9.2"||a.browser.webkit){d=true}var e='<img id="elRaptor" style="display: none" src="img/raptor.png" />';var f='<audio id="elRaptorShriek" preload="auto"><source src="js/raptor-sound.mp3" /><source src="js/raptor-sound.ogg" /></audio>';var g=false;a("body").append(e);if(d){a("body").append(f)}var h=a("#elRaptor").css({position:"fixed",bottom:"-700px",right:"0",display:"block"});if(b.enterOn=="timer"){setTimeout(i,b.delayTime)}else if(b.enterOn=="click"){c.bind("click",function(a){a.preventDefault();if(!g){i()}})}else if(b.enterOn=="konami-code"){var j=[],k="38,38,40,40,37,39,37,39,66,65";a(window).bind("keydown.raptorz",function(b){j.push(b.keyCode);if(j.toString().indexOf(k)>=0){i();a(window).unbind("keydown.raptorz")}},true)}})}})(jQuery)
