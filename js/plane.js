		function fly_select(e){
			// clearTimeout(t);
			var plane=$('.plane_wrap');
			var $this= $(e);
			var $line=$this.parent('.line');
			var rel=$this.attr('rel');
			var title=$this.attr('title');
			if(rel!=''||rel!=null){

				var html='';
				html+='plane plane'+rel;

				var ee=$('.con_wrap').find('.arrival_con');
				if(ee.length==1){
						ee.remove();
				}
				plane.find('.plane').removeClass().addClass(html).attr('rel',rel);
				// plane.append(html);
				var select_place='选择的航班目的地为: <font>'+title+'</font>';
				var arrival_place='已经到达目的地: <font>'+title+'</font>';
				arrival(select_place,rel);
				$('.plane').get(0).addEventListener("webkitAnimationEnd", function(){
					// alert('飞机已到达目的地: '+title);
					arrival(arrival_place,rel);
					
					// timeStop(rel);
							
				});
				// setTimeout(function(){ },time);   第二种方式设置动画时间过去后再执行事件
			}
		}

function arrival(title,rel){
	var p_rel=$('.plane').attr('rel');
		
		if(p_rel!=rel){			
			return;
		}else{

			var ee=$('.con_wrap').find('.arrival_con');
			if(ee.length==1){
					ee.remove();
			}
			var cc='';
			cc+='<div class="arrival_con">'+title+'</div>';
			$('.con_wrap').append(cc);
		}


}

var t;
function timeStop(rel){
	// t=setTimeout(function(){
	// 	var p_rel=$('.plane').attr('rel');
		
	// 	if(p_rel==rel){
	// 		// console.log("不等:"+cla);
	// 		var ee=$('.con_wrap').find('.arrival_con');
	// 		if(ee.length!=null&& ee.length==1){
	// 			ee.remove();
	// 		}
			
	// 		$('.plane').removeClass().addClass('plane');
			
	// 	}else{
	// 		// console.log('等:'+cla);
	// 		return;
	// 	}

	// }, 3000);


	var p_rel=$('.plane').attr('rel');
	
	if(p_rel==rel){
		// console.log("不等:"+cla);
		var ee=$('.con_wrap').find('.arrival_con');
		if(ee.length!=null&& ee.length==1){
			ee.remove();
		}
		
		$('.plane').removeClass().addClass('plane');
		
	}else{
		// console.log('等:'+cla);
		return;
	}
}
var a=0;
function a_animationEnd(){
	if(a==0){
		$('.plane').get(0).style.webkitAnimationPlayState="paused";a++;
	}else{
	$('.plane').get(0).style.webkitAnimationPlayState="running";a--;

	}
}
// function stopAnimation(){
// 	$('.plane').get(0).style.webkitAnimationPlayState="paused";
// }