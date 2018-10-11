(function(){
	let Ul = document.querySelectorAll(".buttom ul")[0],
		aLi =document.querySelectorAll(".buttom ul li"),
		len = aLi.length;
		cun =0,
		index = 0;
		function fn(){
   				cun =index;//记录上一张图片的地址
   				index+1 >= len?index=0:index++;
   				aLi[cun].classList.remove("active");
   				aLi[index].classList.add("active");	
   				
   			}
   		setInterval(fn,100000/60);
})();