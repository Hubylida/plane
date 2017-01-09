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
 
 var docEl = document.documentElement;
    //当设备的方向变化（设备横向持或纵向持）此事件被触发。绑定此事件时，
    //注意现在当浏览器不支持orientationChange事件的时候我们绑定了resize 事件。
    //总来的来就是监听当然窗口的变化，一旦有变化就需要重新设置根字体的值
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    recalc = function() {
        //设置根字体大小
        docEl.style.fontSize = 20 * (docEl.clientWidth / 320) + 'px';
    };

//绑定浏览器缩放与加载时间
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);