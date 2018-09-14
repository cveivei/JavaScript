var str='猜测历史：';
var sum=6;
var a=parseInt(Math.random()*11);
var t=0

function changee(){
	
			var b=document.getElementsByTagName("input");
	
			if(b.value=='困难'){t=1;console.log(t);}
			else if(b.value=='简单'){t=2;console.log(t);}
			else{t=3;console.log(t);}
	
			
			console.log(1334);
}

console.log(a);
function caice(){
		sum--;
		var number=document.getElementById('numInput');
		
		if (sum>=0) {
			
			if(number.value==a) {str+='<br />'+'&nbsp;&nbsp;&nbsp;&nbsp;'+'您猜对啦！！！';number.readOnly= "readonly";}
			if(number.value>a) {str+='<br />'+'&nbsp;&nbsp;&nbsp;&nbsp;'+'您猜的数字偏大';}
			if(number.value<a) {str+='<br />'+'&nbsp;&nbsp;&nbsp;&nbsp;'+'您猜的数字偏小';}
			
		} else{
			alert('您的机会已经用完了！！');
			sum=0;
			number.readOnly= "readonly";
		}
		document.getElementById('but').innerHTML='剩余次数：'+sum;
		document.getElementById('caice').innerHTML=str;
	}
