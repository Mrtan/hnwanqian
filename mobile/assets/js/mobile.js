function zxdianXinRong(obj) {
	qimoChatClick();
}
//回拨电话
function httpphoneXinRong() {
	var clientId = xinrong_for_clientId;
	var goUrl = xinrong_for_goUrl;
	var uuid = "";
	try {
	　　uuid = TongJiXr.uuid();
	} catch(error) {
	　　uuid = "";
	}

	// 网站百度域名
	var baiduDomainSpc = window.escape(window.location.href);
	document.getElementById('telephonebutt').innerHTML = '您将接收到01053932409的回拨电话，请接听';
	var telephone = document.getElementById('telephone').textContent;
	$("#telephonebutt").attr({"disabled":"disabled"});

	// 回拨电话
	$.ajax({
		type : "GET",
		url : goUrl + "/customService/phone.action?callback=?",
		data : {
			"pst" : encodeURIComponent(pst),
			"baiduDomain" : baiduDomainSpc,
			"extenPhone" : telephone,
			"clientId" : clientId,
			"uuid": uuid,
			"fromurl": baiduDomainSpc,
			"productType":xinrong_for_productType,
			"originalSource":xinrong_for_originalSource
		},
		success : function(data) {
			setTimeout( function(){
				$("#telephonebutt").html(data.result);
				$("#telephonebutt").removeAttr("disabled");
			}, 5 * 1000 );
		},
		dataType : "jsonp"
	});
};

//回拨小号电话
function httpphoneXinRongMidNum() {
	var clientId = xinrong_for_clientId;
	var goUrl = xinrong_for_goUrl;
	var uuid = "";
	try {
	　　uuid = TongJiXr.uuid();
	} catch(error) {
	　　uuid = "";
	}

	// 网站百度域名
	var baiduDomainSpc = window.escape(window.location.href);
	// 回拨电话
	$.ajax({
		type : "GET",
		url : goUrl + "/plc/gmnl.action?callback=?",
		data : {
			"baiduDomain" : baiduDomainSpc,
			"clientId" : clientId,
			"jqueryUuid": uuid,
			"fromUrl": baiduDomainSpc,
			"productType":xinrong_for_productType,
			"originalSource":xinrong_for_originalSource
		},
		success : function(data) {
			if(data.result){
				$(".movePopup").css("display","flex");
				$("#midnum").html(data.phone);
				$("#midnum_a").attr("href","tel:"+data.phone);
			}else{
				$(".modelRelation").addClass("show");
			}
		},
		dataType : "jsonp"
	});
};

// 微信
function weixinGet() {
	$.ajax({
		type : "GET",
		url : xinrong_for_goUrl + "/customService/getweixin.action?callback=?",
		data : {
			"clientId" : xinrong_for_clientId
		},
		success : function(data) {
			if ("success" == data.status) {
				$(".xr_wxli_img").attr("src", data.result);
			} else {
				$(".xr_wxli_img").attr("src",
						"http://ztcbucket.oiaqye7985.com/kf/mobilekong.png");
			}
		},
		dataType : "jsonp"
	});
};

//回拨电话
function phoneGet() {
	$.ajax({
		type : "GET",
		url : xinrong_for_goUrl + "/customService/getphone.action?callback=?",
		data : {
			"clientId" : xinrong_for_clientId
		},
		success : function(data) {
			if ("success" == data.status) {
				var tel="tel:"+data.result;
				$("#list_BottomTel").attr("href",tel);
			} else {
				$("#list_BottomTel").attr("href","tel:010-85564830");
			}
		},
		dataType : "jsonp"
	});
};

// qq
function qqGXinRong() {
	$.ajax({
		type : "GET",
		url : xinrong_for_goUrl + "/customService/getqq.action?callback=?",
		data : {
			"clientId" : xinrong_for_clientId
		},
		success : function(data) {
			if ("success" == data.status) {
				window.location.href = "http://wpa.qq.com/msgrd?v=3&uin=" + data.result
				+ "&site=qq&menu=yes";
				/*window.open("http://wpa.qq.com/msgrd?v=3&uin=" + data.result
						+ "&site=qq&menu=yes");*/
			} else {
				alert("暂无qq信息");
			}
		},
		dataType : "jsonp"
	});
};
// 用户名正则
function judgeName() {
	var check = false;
	if ($("#leave_name").val().length > 10
			|| $("#leave_name").val().length <= 0) {
		$("#ysb_waing").html("姓名长度为1-10");
		check = false;
	} else {
		$("#ysb_waing").html("");
		check = true;
	}
	return check;
}
// 手机号验证
function judgePho() {
	var check = false;
	var exp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	if (!exp.test($("#leave_pho").val())) {
		$("#ysb_waing").html("请输入正确的手机号");
		check = false;
	} else {
		$("#ysb_waing").html("");
		check = true;
	}
	return check;
}
// 邮箱验证
function judgeEma() {
	var check = false;
	var exp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if (!exp.test($("#leave_ema").val())) {
		$("#ysb_waing").html("请输入正确的邮箱");
		check = false;
	} else {
		$("#ysb_waing").html("");
		check = true;
	}
	return check;
}
// 留言
$("#leaveWord_sub").click(function() {
var clientId = xinrong_for_clientId;
var goUrl = xinrong_for_goUrl;

if($("#leave_txt").val().length <= 0) {
	$("#leave_txt").focus();
	return;
}
if(judgeName() && judgePho()) {
	// 锁死提交按钮
	$('#leaveWord_sub').attr('disabled', "true");　　
	$('#leaveWord_sub').html("提交中...");　
	var uuid = "";
	try {
	　　uuid = TongJiXr.uuid();
	} catch(error) {
	　　uuid = "";
	}　　　　　　
	setTimeout(function() {　　
		$.ajax({
			dataType: "jsonp",
			　　type: "GET",
			url: goUrl + "/customService/message.action?callback=?",
			data: {
				"pst" : encodeURIComponent(pst),
				"username": $("#leave_name").val(),
				"userpho": $("#leave_pho").val(),
				"useremail": "",
				//"useremail": $("#leave_ema").val(),
				"usertext": $("#leave_txt").val(),
				"clientId": clientId,
				"urlTitle": document.title,
				"fromUrl": window.escape(window.location.href),
				"productType":xinrong_for_productType,
				"uuid": uuid,
				"originalSource":xinrong_for_originalSource
			},
			success: function(data) {
				// data = JSON.parse(data);
				if("success" == data.status) {
					$('#leaveWord_sub').html("提交成功");
					// 清空数据
					$("#leave_name").val("");
					$("#leave_pho").val("");
					$("#leave_ema").val("");
					$("#leave_txt").val("");
					$("#judgeName").html("");
					$("#judgePho").html("");
					$("#judgeEma").html("");
					setTimeout(function() {
						$('#leaveWord_sub').removeAttr("disabled");
						$('#leaveWord_sub').html("提交");
					}, 5000);
				} else {
					$('#leaveWord_sub').html(data.result);
					setTimeout(function() {
						$('#leaveWord_sub').removeAttr("disabled");
						$('#leaveWord_sub').html("提交");
					}, 5000);
				}
			},
			error: function(data) {
				$('#leaveWord_sub').html("提交失败");
				setTimeout(function() {
					$('#leaveWord_sub').removeAttr("disabled");
					$('#leaveWord_sub').html("提交");
				}, 5000);
			}
		});　　
	}, 2000);
}
});
//回到首页
function goHome(){
	window.location.href= location.protocol + "//"+ window.location.host;
}
// 初始化
$(function() {
	weixinGet();
	//phoneGet();
})

//====================== 自定义插件脚本 ===========================//
function clickGXinRong(obj){
	var type = $(obj).attr("data-type");
	if("co" == type){
		//zxdianXinRong(obj);
		if(xinrong_for_onlineType == "A"){
			window.location.href = $("#qimoh5id").attr("data-href");
		}else if(xinrong_for_onlineType == "B"){
			api.push('cmd', 'mtalk');
			api.query();
		}
	}
	
	if("qq" == type){
		qqGXinRong();
	}
	if("wx" == type){

		$(".modelWeChat").addClass("ysbshow")/*打开二维码*/
	}
	if("msg" == type){

		$(".modelMessages").addClass("ysbshow")/*打开留言*/
	}
	if("tel" == type){
		$(".modelRelation").addClass("ysbshow")/*打开电话*/
	}
}

<!-- 记录点击x，y坐标 -->
//在线咨询：zxzx 在线留言：zxly 免费电话：mfdh QQ咨询：qqzx 微信咨询：wxzx
function clickLocalXinRong(clickType){/*
	try {
		  var idC = 0;
		  if(typeof(xr_clientId)=="undefined"){
			  idC = xinrong_for_clientId;
		  }else{
			  idC = xr_clientId;
		  }
		  //
		  var uuid = "";
		  try {
		　  	uuid = TongJiXr.uuid();
		  } catch(error) {
		　  	uuid = "";
		  }
		  //
		  var visitPage = window.escape(window.location.href);
		  //
		  var screenResolutionX = window.screen.width;
		  //
		  var screenResolutionY = window.screen.height;
		  //
		  var e = window.event;
		  var screenX = e.screenX;
		  var screenY = e.screenY;
		  $.ajax({
			   async:true,
			   contentType: "application/x-www-form-urlencoded; charset=utf-8",
			   url: xinrong_for_goUrl+ "/clickController/saveClick.action",
			   type:"get",  
			   dataType:"jsonp",
			   data: {
				"clientId":idC,
				"jqueryUuid":uuid,
				"visitPage":visitPage,
				"screenResolutionX":screenResolutionX,
				"screenResolutionY":screenResolutionY,
				"screenX":screenX,
				"screenY":screenY,
				"clickType":clickType,
			   }, 
			   
			   success: function (data){
			   },
			   error : function(data){ 	 
			   }
		  });
		  console.log("客服点击记录成功");
	} catch (e) {
		console.log("客服点击记录失败");
	}
*/};

//回拨电话
function httpphoneXinRonggo(telephone) {
	var clientId = xinrong_for_clientId;
	var goUrl = xinrong_for_goUrl;
	var uuid = "";
	try {
	　　uuid = TongJiXr.uuid();
	} catch(error) {
	　　uuid = "";
	}

	// 网站百度域名
	var baiduDomainSpc = window.escape(window.location.href);

	// 回拨电话
	$.ajax({
		type : "GET",
		url : goUrl + "/customService/phone.action?callback=?",
		data : {
			"pst" : encodeURIComponent(pst),
			"baiduDomain" : baiduDomainSpc,
			"extenPhone" : telephone,
			"clientId" : clientId,
			"uuid": uuid,
			"fromurl": baiduDomainSpc,
			"productType":xinrong_for_productType,
			"originalSource":xinrong_for_originalSource
		},
		success : function(data) {
			setTimeout( function(){
				$("#telephonebutt").html(data.result);
				$("#telephonebutt").removeAttr("disabled");
			}, 5 * 1000 );
		},
		dataType : "jsonp"
	});
};
