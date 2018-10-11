//header 头部
(function(){
	let aLi = document.querySelectorAll("#header .cen-right ul li"),
		aDiv = document.querySelectorAll("#header .cen-right ul li div"),
		aTxt = document.querySelectorAll("#header .cen-right ul li div textarea")[0],
		aBtn =document.querySelectorAll("#header .cen-right ul li div button")[0],
		index = 0,
		len = aLi.length;
	for(let i=0; i<len; i++){
		aLi[i].onmouseenter = function(){
			aDiv[index].classList.remove("active");
			aDiv[i].classList.add("active");
			index = i;	
		}
		aLi[i].onmouseleave = function(){
			if(i!==2){
				aDiv[i].classList.remove("active");
			}	
		}
	}
		aBtn.onclick = function(){
			if(aTxt.value === ""){
				aTxt.value += "请输入内容";
			}else{
				aTxt.value = "";
				aDiv[2].classList.remove("active");
			}
		}
})();
