window.onload=function(){
	waterfall('main','box');
	var dataInt={"data":[{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'}]};
	window.onscroll=function(){
		if(checkScrollSlide){
			var oParent=document.getElementById('main');
			//将数据库渲染到当前页面的尾部
			for(var i=0;i<dataInt.data.length;i++){
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src="images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
				
			}
			waterfall('main','box');
			
		}
	}
}
function waterfall(parent,box){
	//将main下所有的class为box的元素取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	//计算整个页面显示的列数（页面宽度/box的宽度）
	var oBoxWidth=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxWidth);
	//设置main的宽度
	oParent.style.cssText='width:'+oBoxWidth*cols+'px; margin:0 auto';
	var hArr=[];
	for(var i=0; i<oBoxs.length; i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var mainH=Math.min.apply(null,hArr);
			var index=findMinIndex(hArr,mainH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=mainH+'px';
			oBoxs[i].style.left=index*oBoxWidth+'px';
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}

	
}
function getByClass(oParent,clsName){
		var aBox=[];
		var aTagName=oParent.getElementsByTagName('*');
		for(var i=0; i<aTagName.length;i++){
			if(aTagName[i].className==clsName){
				aBox.push(aTagName[i]);
			}
		}
		return aBox;
}
function findMinIndex(hArr,value){
	for(var i=0; i<hArr.length; i++){
		if(hArr[i]==value){
			return i;
		}
	}
}
//检测是否具备了滚动条加载数据库的条件
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].height);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
}
