window.onload = function(){
	var oBody = document.getElementsByClassName('body')[0];
	var searchMap = document.getElementById('search-map');
	var oProvince = searchMap.getElementsByClassName('province');
	var searchSelect = searchMap.getElementsByClassName('search-select');
	var oLayer = document.getElementById('layer');
	var oBtn = document.getElementById('footer-br');

	//返回顶部
	oBtn.onclick = function(){
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop/6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			if(osTop == 0){
				clearInterval(timer);
			}
		},30)
		
	}

	//下拉菜单
	for(var i=0;i<searchSelect.length;i++){
		searchSelect[i].onclick = (function(i){
			return function(){
				var oLi= searchSelect[i].parentNode;
				if(oProvince[i].style.display == 'none'){
					oProvince[i].style.display = 'block';
					oLi.style.border = '1px solid #bf4f49';
					oLayer.style.display = 'block';

				}else{
					oProvince[i].style.display = 'none';
					oLi.style.border = 'none';
					oLayer.style.display = 'none';
				}
			}		
		})(i);
		var provinceSelect = oProvince[i].getElementsByClassName('province-select');
		for(var j=0;j<oProvince.length;j++){
			provinceSelect[j].onclick = (function(i){
				var a = oProvince[i].parentNode;
				var oLi= searchSelect[i].parentNode;
				var b = a.getElementsByTagName('span')[0]
				return function(){
					b.innerHTML = this.innerHTML;
					oProvince[i].style.display = 'none';
					oLi.style.border = 'none';
					b.style.color = '#000';

				}
			})(i);
		}
	}
	oLayer.onclick = function(){
		oProvince[0].style.display = 'none';
	}
}
		
		