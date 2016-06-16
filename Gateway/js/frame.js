/*----------ready----------*/
$(sidebar());
/*----------function------*/
function sidebar(){
/*--------------sidebar content-----------------*/
	var dataObj={
		"sidebar":[
			{"id":"1","img0url":"images/frame/home0.png","img1url":"images/frame/home1.png","name":"首页","nameCode":"homepage","targetUrl":"#"},
			{"id":"2","img0url":"images/frame/gateway0.png","img1url":"images/frame/gateway1.png","name":"数据网关","nameCode":"gateway","targetUrl":"#"},
			{"id":"3","img0url":"images/frame/interface0.png","img1url":"images/frame/interface1.png","name":"接口服务","nameCode":"interface","targetUrl":"#"},
			{"id":"4","img0url":"images/frame/balance0.png","img1url":"images/frame/balance1.png","name":"服务结算","nameCode":"balance","targetUrl":"#"},
			{"id":"5","img0url":"images/frame/app0.png","img1url":"images/frame/app1.png","name":"应用管理","nameCode":"app","targetUrl":"#"}
		]
	};
	var recData=dataObj.sidebar;
	var htmlStr="";
	for(var i=0;i<recData.length;i++){
		if(recData[i].nameCode=="homepage"){
			htmlStr='<li class="'+recData[i].nameCode+'"><a href="'+recData[i].targetUrl+'"><img src="'+recData[i].img1url+'" alt="'+recData[i].name+'"><div>'+recData[i].name+'</div></a></li>'+htmlStr;
		}
		else{
			htmlStr+='<li class="'+recData[i].nameCode+'"><a href="'+recData[i].targetUrl+'"><img src="'+recData[i].img0url+'" alt="'+recData[i].name+'"><div>'+recData[i].name+'</div></a></li>';
		}
	}
	$(".myNav").html(htmlStr);
/*-------------responsive setting-------------*/
	var docWidth=$(document).width();
	var winHeight=$(window).height();	//get height of window
	var conHeight=$(".content").height();	//get height of content
	if(docWidth>=768){	//set the css for screen
		$(".mySidebar").css({
			"min-height":winHeight-60>conHeight?winHeight-60:conHeight,
			"position":"absolute",
			"left":0,
			"top":60,
			"width":85});
		$(".mySidebar ul li img").css("width",40);
		$(".content").css("padding-left",85);
		$(".content .myTitle").css("display","block");
	}
}