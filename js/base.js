var x=0;
var timer=null;
clearInterval(timer)

timer=setInterval(function(){
    $('#banner li').eq(x).addClass('yes').siblings().removeClass('yes');
	x++;
					
	if(x<$('#banner li').length+1){
        $('#banner img').attr('src','images/banner'+x+'.jpg');
						
	}else{
		x=0;
		}
        			
     },2500)