
//content 内容
(function(){
	let aDiv = document.querySelectorAll("#content .p-c-top div"),
		aCont =document.querySelectorAll("#content .p-c-btn >div"),
		index = 0;
	for(let i=0,len=aDiv.length;i<len;i++){
		aDiv[i].onclick = function(){
			if(index === i)return;
			aDiv[index].className = "on";
			aDiv[i].className = "active";
			aCont[index].className ="";
			aCont[i].className ="active";
			index = i;
		}
	}
})()
