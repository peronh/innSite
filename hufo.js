$(document).ready(function(){$(".info").on("click",function(){$("#mySidenav").css({"width":"85vw","transition":"width 200ms","-webkit-transition":"width 300ms"})});$(".closebtn").on("click",function(){$("#mySidenav").css({"width":"0","transition":"width 200ms","-webkit-transition":"width 300ms"})});$(document).on("scroll",function(){$('.btntop').on("click",function(){$(document).scrollTop(0)});if($(document).scrollTop()>200){$(".btntop").show(250)}
else{$(".btntop").hide(250)}});var targetWidth=1920;$('.desktop').on('click',function(){$('meta[name="viewport"]').attr('content','width='+targetWidth)})})