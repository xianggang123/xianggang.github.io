// (function () {
// 	let aLi = document.querySelectorAll("#content .p-c-btn .list li"),
// 		aDiv = document.querySelectorAll("#content .p-c-btn .list li div") ,
// 		actSpan = document.querySelector("#content .p-c-btn .list li div.active p span"),
// 		onSpan = document.querySelector("#content .p-c-btn .list li div.on p span"),
// 		len = aLi.length;
// 	for(let i=0;i<len;i++){
		
// 		aLi[i].onclick = function(){
// 			for(let j=0;j<aDiv.length;j++){
// 				aDiv[j].classList.remove("active");
// 				j++;
// 				aDiv[j].classList.add("active");
// 				console.log(j);
// 			}
			
// 			console.log(i);
// 		}
// 	}
// 	// actSpan.onclick =function(){
// 	// 	aDiv[0].classList.remove("active");
// 	// 	aDiv[1].classList.add("active");
// 	// }
// 	// onSpan.onclick =function(){
// 	// 	aDiv[0].classList.add("active");
// 	// 	aDiv[1].classList.remove("active");
// 	// }
// })();