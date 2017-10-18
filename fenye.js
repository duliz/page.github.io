



	function page(opt){
		var oId=document.getElementById(opt.id);
		var allnum=opt.allnum || 5;
		var nownum=opt.nownum || 1;
		var callback = opt.callback || function(){};
		
		if (nownum>=2) {
			var oA=document.createElement("a");
				oA.href="#"+(nownum-1);
				oA.innerHTML="<<";
				oId.appendChild(oA)

		};
		if (nownum>=4 && allnum>=6) {
			var oA=document.createElement("a");
				oA.href="#"+1;
				oA.innerHTML="1";
				oId.appendChild(oA)
				}
		if (nownum>=5 && allnum>=6) {
			var oA=document.createElement("a");
				oA.href="javascript:;";
				oA.innerHTML="...";
				oId.appendChild(oA)
				}
		if (allnum<=5) {
			for (var i = 1; i <=allnum; i++) {
				var oA=document.createElement("a");
				oA.href="#"+i;
				if (i==nownum) {
					oA.innerHTML=i
				}else{
					oA.innerHTML="["+i+"]"
				}oId.appendChild(oA)
			}

		}else{
			for (var i =1; i<=5; i++) {
				var oA=document.createElement("a");
				if (nownum==1||nownum==2) {
					oA.href="#"+i;
					if (i==nownum) {
						oA.innerHTML=i
					}else{
						oA.innerHTML="["+i+"]"
					}
				}else if( (allnum-nownum)==0 || (allnum-nownum)==1){
						oA.href="#"+(allnum-5+i);
					if((allnum - nownum) == 1 && i==4){
						oA.innerHTML = (allnum - 5 + i);
					}
					else if((allnum - nownum) == 0 && i==5){
						oA.innerHTML = (allnum - 5 + i);
					}
					else{
						oA.innerHTML="["+(allnum-5+i)+"]"
						}
				}
				// else if(allnum-nownum)>=4){


				// }
				else{
				oA.href="#"+(nownum-3+i);
					if (nownum==(nownum-3+i)) {
						oA.innerHTML=nownum-3+i
					}else{
						oA.innerHTML="["+(nownum-3+i)+"]"
					}

				}

				oId.appendChild(oA)



			}


		}
		if ( (allnum-nownum)>=4 && allnum>=6) {
			var oA=document.createElement("a");
				oA.href="javascript:;";
				oA.innerHTML="...";
				oId.appendChild(oA)
		}
		if ( (allnum-nownum)>=3 && allnum>=6) {
			var oA=document.createElement("a");
				oA.href="#"+allnum;
				oA.innerHTML=allnum;
				oId.appendChild(oA)
		}
		if (nownum!=allnum) {
			var oA=document.createElement("a");
				oA.href="#"+(nownum+1);
				oA.innerHTML=">>";
				oId.appendChild(oA)
		}
		callback(allnum,nownum);
		var aA = oId.getElementsByTagName('a');
	
	for(var i=0;i<aA.length;i++){
		aA[i].onclick = function(){
			oId.innerHTML = '';

			var nownum = parseInt(this.getAttribute('href').substring(1));
			var start=(nownum-1)*20;
			var oScript=document.createElement("script");
			oScript.src='https://api.douban.com/v2/book/search?q='+oInp.value+'&callback=getInfo&start='+start;
			document.body.appendChild(oScript)
			
			var timer=setInterval(function(){
				var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
				if (scrollTop==0) {
					clearInterval(timer);
				}else{

					window.scrollTo(0,scrollTop-300)
				}
			},20)

			// console.log(scrollTop)
			
			
			page({
			id:opt.id,
			allnum:allnum,
			nownum:nownum,
			callback:callback
		})
			
			return false;//阻止页面跳转
			
		};
	}
	}
	

