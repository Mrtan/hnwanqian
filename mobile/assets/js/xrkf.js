(function() {
	//判断是否加载jQuery文件---------------------------------------
	//页面加载完成后
	var script = document.getElementsByTagName("script");
	//获取所有的script标签
	var head = document.getElementsByTagName("head")[0];
	var ifHave = false;
	for (var i = 0; i < script.length; i++) {
		//遍历所有的script标签
		if (script[i].src.match("jquery")) {
			ifHave = true;
			//判断script标签的src属性中是否有jquery
			head.appendChild(script[i]);
			//如有jQuery把他插入到头部
			break;//如有结束循环
		}
	}
	if (!ifHave) {
		var scriptTe = document.createElement("script");
		scriptTe.src = "http://tj.wayboo.net.cn/TongJiCenter/js/jQuery.js";
		head.appendChild(scriptTe);
	}
	//判断是否加载jQuery文件---------------------------------------
	//判断是否加载JSON文件---------------------------------------  
    if(typeof JSON == 'undefined'){
    	var scriptTe = document.createElement("script");
		scriptTe.src = xr_goUrl + "/public/js/json2.js";
		head.appendChild(scriptTe);  
    }  
	//判断是否加载JSON文件---------------------------------------
    
	//配置参数
	var config = {};
	//client_id
	config.clientId = xr_clientId;
	config.goUrl = xr_goUrl;
	config.syb_codeId = syb_codeId;
	config.ifCheck = "true";
	config.host = window.location.host;
	//config.aurl = window.location.protocol + "//" + window.location.host  + window.location.pathname;
	config.aurl = window.escape(window.escape(window.location.href));
	//判断是否是移动端
	config.ifMobile = "false";
	if(/Android|webOS|iPhone|iPad|Windows Phone|iPod|BlackBerry|SymbianOS|Nokia|Mobile/i.test(navigator.userAgent)){
		config.ifMobile = "true";
	}
	
	setTimeout(function() {
		var sourceCf = {};
		sourceCf.visitpage = window.escape(window.location.href)
		sourceCf.originalsource = window.escape(document.referrer);
		sourceCf.sybcodeid = syb_codeId;
		
		try {
			var uuid = "01";
			try {
			　　uuid = TongJiXr.uuid();
			} catch(error) {
				uuid = "01";
			}
			qimoClientId = {nickName:'clientId:' + xr_clientId + ",1.1," + uuid};
	
			// 客服请求
			$.getJSON(xr_goUrl + "/customService/shownew.action?config="
					+ JSON.stringify(config) + "&callback=?", function(data) {
				$("body").append($(data.result));
			});
			
			// 底部
			if($("#footCustomer").length > 0) {
				$.getJSON(
						xr_goUrl + "/customService/getfc.action?config="
						+ JSON.stringify(config) + "&callback=?", function(data) {
						$("#footCustomer").append($(data.result));
				});
			}
			
			if("01" == uuid){
				setTimeout(function() {
		　　			try {
		　　			　　uuid = TongJiXr.uuid();
		　　			   qimoClientId = {nickName:'clientId:' + xr_clientId + ",1.1," + uuid};
					} catch(error) {
					   uuid = "01";
					   console.log(error);
					}
		　　			console.log(qimoClientId);
				}, 1000);	
			}else{
				console.log(qimoClientId);
			}
		} catch (e) { 
		}

	}, 500);
})();