/*----------ready----------*/
$(sidebar());
$(charts());
/*----------function------*/
function sidebar(){	//set the css of sidebar
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
	}
	return true;
}
function charts(){
	var echart1=echarts.init($(".content .echart1")[0]);
	var echart2=echarts.init($(".content .echart2")[0]);
	var echart3=echarts.init($(".content .echart3")[0]);
	var echart4=echarts.init($(".content .echart4")[0]);
	var option1={
		title:{
			text:"服务对象",
			left:"center"
		},
		legend:{
			bottom:0,
			data:["预付费用户","后付费用户"]
		},
		series:[
			{
				type:"pie",
				name:"服务对象",
				label:{
					normal:{
						show:true,
						position:"outside",
						formatter:"{d}%",
						textStyle:{
							// fontSize:16
						}
					}
				},
				labelLine:{
					normal:{
						length:5
					}
				},
				data:[
					{value:70,name:"预付费用户"},
					{value:30,name:"后付费用户"}
				],
				center:["50%","55%"],
				radius:[0,"60%"]
			}
		],
		color:['#f3ae32','#5eade5','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
	}
	var option2={
		title:{
			text:"互联网网关",
			left:"center"
		},
		legend:{
			bottom:0,
			data:["成功次数","失败次数","拦截次数"]
		},
		series:[
			{
				type:"pie",
				name:"互联网网关",
				label:{
					normal:{
						show:true,
						position:"outside",
						formatter:"{d}%",
						textStyle:{
							// fontSize:16
						}
					}
				},
				labelLine:{
					normal:{
						length:5
					}
				},
				data:[
					{value:9885,name:"成功次数"},
					{value:9,name:"失败次数"},
					{value:106,name:"拦截次数"}
				],
				center:["50%","55%"],
				radius:[0,"60%"]
			}
		],
		color:['#5daee5','#8edcf3','#84d052','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
	};
	var option3={
		title:{
			text:"生产网域网关",
			left:"center"
		},
		legend:{
			bottom:0,
			data:["成功次数","失败次数"]
		},
		series:[
			{
				type:"pie",
				name:"生产网域网关",
				label:{
					normal:{
						show:true,
						position:"outside",
						formatter:"{d}%",
						textStyle:{
							// fontSize:16
						}
					}
				},
				labelLine:{
					normal:{
						length:5
					}
				},
				data:[
					{value:9861,name:"成功次数"},
					{value:139,name:"失败次数"}
				],
				center:["50%","55%"],
				radius:[0,"60%"]
			}
		],
		color:['#84d052','#ffa000','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
	};
	var option4={
		title:{
			text:"收入趋势图（日）",
			left:"center"
		},
		legend:{
			bottom:0,
			data:["预付费用户","后付费用户"]
		},
		xAxis:[
			{
            	type : 'category',
            	axisLine:{
            		show:false
            	},
            	axisTick:{
            		show:false
            	},
            	splitLine:{
            		show:false
            	},
            	data : ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23(时)']
        	}
		],
		yAxis:[
			{
				name:"（万元）",
				nameLocation:"end",
				type:"value",
				axisLine:{
            		show:false
            	},
            	axisTick:{
            		show:false
            	}
			}
		],
		series:[
			{
				type:"bar",
				name:"预付费用户",
				data:[0,0,0,0,0,0.04,0.18,0.28,0.64,0.5,1.09,0.57,0.35,0.65,0.5,0.8,0.19,0.2,0.3,0,0,0,0,0]
			},
			{
				type:"bar",
				name:"后付费用户",
				data:[0,0,0,0,0,0.02,0.24,0.25,0.89,0.4,0.9,0.65,0.21,0.57,0.64,0.66,0.22,0.1,0.18,0,0,0,0,0]
			}
		],
		color:['#84d052','#ffa000','#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
	};
	echart1.setOption(option1);
	echart2.setOption(option2);
	echart3.setOption(option3);
	echart4.setOption(option4);
}