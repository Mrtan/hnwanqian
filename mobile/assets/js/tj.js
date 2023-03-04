/* Math.uuid.js (v1.4) */
(function() {
    var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    Math.uuid = function(b, e) {
        var g = a, d = [], c;
        e = e || g.length;
        if (b) {
            for (c = 0; c < b; c++) {
                d[c] = g[0 | Math.random() * e];
            }
        } else {
            var f;
            d[8] = d[13] = d[18] = d[23] = "-";
            d[14] = "4";
            for (c = 0; c < 36; c++) {
                if (!d[c]) {
                    f = 0 | Math.random() * 16;
                    d[c] = g[(c == 19) ? (f & 3) | 8 : f];
                }
            }
        }
        return d.join("");
    }
    ;
    Math.uuidFast = function() {
        var f = a, d = new Array(36), c = 0, e;
        for (var b = 0; b < 36; b++) {
            if (b == 8 || b == 13 || b == 18 || b == 23) {
                d[b] = "-";
            } else {
                if (b == 14) {
                    d[b] = "4";
                } else {
                    if (c <= 2) {
                        c = 33554432 + (Math.random() * 16777216) | 0;
                    }
                    e = c & 15;
                    c = c >> 4;
                    d[b] = f[(b == 19) ? (e & 3) | 8 : e];
                }
            }
        }
        return d.join("");
    }
    ;
    Math.uuidCompact = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var d = Math.random() * 16 | 0
              , b = e == "x" ? d : (d & 3 | 8);
            return b.toString(16);
        })
    }
}
)();
/* Math.uuid.js (v1.4) */
/* tj.js (v2.0) */
// 不能出现中文
(function() {
    var p = {
        root_path: "http://tj.wayboo.net.cn/TongJiCenter",
        tj_second: 1,
        // 指纹
        cookie_fingerprint: "XRKJ_VISITOR_UUID",
        fingerprint_js: "1234567890",
        if_new_visitor: 0,
        if_support_cookie: 1,
        local_domain: document.domain,
        source_url: "其他访问",
        source_kw: "--",
        visit_time: new Date().getTime(),
        UUID: Math.uuid(),
        if_mn: "0",
        stay_second: 1
    };
    var f = {
        whole: {
            init: function() {
                p.if_support_cookie = f.cookis.check();
                // 初始指纹，判断是否是新访客
                p.if_new_visitor = ff.cookis.checkNew();
                // 立即插入统计
                ff.visit.detail();
                // 开启计时
                ff.second.interval();
                ff.second.go();
            }
        },
        math: {
        	rand: function() {
        		return Math.floor(2147483648 * Math.random());
        	}
        },
        cookis: {
            check: function() {
                if (navigator.cookieEnabled) {
                    return 1;
                } else {
                    return 0;
                }
            },
            set: function(c_name, value, expiredays) {
                var exdate = new Date();
                exdate.setDate(exdate.getDate() + expiredays);
                exdate.setHours(23);
                exdate.setMinutes(59);
                exdate.setSeconds(59);
                document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
            },
            get: function getCookie(c_name){
	            if (document.cookie.length > 0){
	            	c_start = document.cookie.indexOf(c_name + "=");
		            if(c_start != -1){
	                    c_start = c_start + c_name.length + 1;
	                    c_end = document.cookie.indexOf(";", c_start);
	                    if (c_end == -1){
	                    	c_end = document.cookie.length;	
	                    }
	                    return unescape(document.cookie.substring(c_start, c_end));
		            } 
	            }
	            return "";
           }
        }
    };
    var ff = {
    	second: {
    		interval : function(){
        		try {
        			window.setInterval(function () {
        				p.stay_second ++;
        			}, 1000);
    			} catch (e) {
    				console.log("停留时间计时失败");
    			}
    		},
    		go : function(){
    			window.onunload = function() {
    				var data = {};
    				data.vd = p.stay_second;
                    data.ju = p.UUID;
    				ff.img(p.root_path + "/img/xrtjup.gif?random=" + Math.random() + "&visit=" + escape(ff.jsonTo2(data)));
    			};
    		}
    	},
    	img: function(url){
            var d = new Image
            , f = "mini_xrtj_log_" + Math.random().toString(36);
            window[f] = d;
            d.onload = function() {
				console.log("统计成功");
            	d.onload = null;
                d = window[f] = null;
            };
            d.onerror = d.onabort = function() {
            	console.log("统计失败");
            	d.onerror = d.onabort = null;
            	d = window[f] = null;
            };
            d.src = url;
    	},
    	jsonTo: function(data) {
    		return "{\"vtu\":\"" + data.vtu + "\",\"sc\":\"" + data.sc + "\"," +
    				"\"vt\":\"" + data.vt + "\",\"vp\":\"" + data.vp + "\"," +
    				"\"vd\":"+ data.vd +",\"isc\":" + data.isc + ",\"inv\":" + data.inv + "," +
    			    "\"sr\":\"" + data.sr + "\",\"ci\":" + data.ci + ",\"pt\":" + data.pt + "," +
    			    "\"ju\":\"" + data.ju + "\",\"im\":\"" + data.im + "\"}";
    	},
    	jsonTo2: function(data) {
    		return "{\"vd\":\"" + data.vd + "\",\"ju\":\"" + data.ju + "\"}";
    	},
        visit: {
            detail: function(inOrUp) {
                var sctiptObj = document.getElementById('xr_tj_script');
            	var ptVar = sctiptObj.getAttribute('data_pt');
	        	if(isNaN(ptVar)){
	        		ptVar = 3;
	        	}else{
	        		ptVar = parseInt(ptVar);
	        	}
                var data = {};
                data.vtu = p.fingerprint_js;
                data.sc = window.escape(document.referrer);//前一个页面
                data.vt = p.visit_time;
                data.vp = window.escape(window.location.href);//当前页面
                data.vd = p.tj_second;
                data.isc = p.if_support_cookie;
                data.inv = p.if_new_visitor;
                data.sr = window.screen.width + " X " + window.screen.height;//屏幕宽高
                data.ci = parseInt(sctiptObj.getAttribute('data_ci'));
                data.pt = ptVar;
                data.ju = p.UUID;
                data.im = p.if_mn;
                ff.img(p.root_path + "/img/xrtj.gif?random=" + Math.random() + "&visit=" + escape(ff.jsonTo(data)));
            }
        },
        cookis: {
            checkNew: function() {
                if (p.if_support_cookie == 0) {
                    return 1;
                } else {
                    var fp_val = f.cookis.get(p.cookie_fingerprint);
                    if (fp_val == null || fp_val == "") {
                        p.fingerprint_js = f.math.rand();
                        f.cookis.set(p.cookie_fingerprint, p.fingerprint_js, 730);
                        return 1;
                    } else {
                    	p.fingerprint_js = fp_val;
                    	return 0;
                    }
                }
            }
        }
    };
    var api = {
    	tongji: function() {
    		ff.visit.detail();
    	},
    	init: function() {
    	    f.whole.init();
    	},
    	uuid: function() {
    		return p.UUID;
    	}
    };
    // 确定了插件的名称
    this.TongJiXr = api;
})();
/* tj.js (v2.0) */

TongJiXr.init();