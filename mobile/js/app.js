//Mrtan定义的
$(function() {
	$(window).resize(function () {  
		var windowWidth = $(window).width();
		if (windowWidth >= 768) $(window).attr('location','/');
	});
});

var swiper = new Swiper('.zizhi-swiper-container', {
	width: 100 * 5,
	autoplay:true,
	slidesPerView: 3,
	spaceBetween: 0,
	loop: true,
  loopFillGroupWithBlank: true,
});

function application(){
    this.nodata = '';
    this.phone = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
    this.api = '4DD845D1BB619BEEFB641EC49A7D8735';
    
	// 导航
    $('body').bind({
        'touchmove': function(){  }
    })
    $('.nav1 .close').bind('click', function(){
		$('.nav1').css({'-webkit-animation':'hide_nav .2s ease both','-moz-animation':'hide_nav .2s ease both','-ms-animation':'hide_nav .2s ease both','animation':'hide_nav .2s ease both'});
        setTimeout(function(){
			$('.nav1').hide();
        }, 200);
	})
	
  	// 菜单
    if($('#menu dd').length > 0){
    	$('#showmenu')
		.show()
		.bind('click', function(){
			if($('#menu').is(':hidden')){
				$(this).addClass('current');
				$('#menu').slideDown();
			}else{
				$(this).removeClass('current');
				$('#menu').slideUp();
			}
		});
    }
    
    // 搜索
    $('#SearchSubmit').bind('click', function(){
        if($('#SearchTxt').val() == ''){
			app.console('请输入关键词');
        }else{
            search();
        }
    });
      
// 返回顶部
	$("#goTop").click(function() {
		$("body, html").stop().animate({
			"scrollTop": 0
		});
	});
    
}
application.prototype = {
    constructor: app,
    ini: function(){
        if(typeof(this.api) == 'undefined' || this.api.substr(13,4) != 'BEEF'){
			return false;
		}
		// 上下关联页
		if($('[ig-link]').length){
			if($('[ig-link] .prev a').length){ $('[ig-link] .prev a').text('上一篇'); }
			if($('[ig-link] .next a').length){ $('[ig-link] .next a').text('下一篇'); }
		}
		
		// 公用
		$('[ig-back]').click(function(){ history.go(-1); })
		$('[ig-top]').click(function(){ $('html, body').animate({'scrollTop': 0}, 300); })
        $('[ig-phone]').each(function(index, element){
			var tel400 = $(this).text(), telLength = tel400.length;
			if(telLength == 11){  // 手机号码 OR 座机号码
				var firstNum = tel400.substr(0,1);
				if(firstNum == 0){
					var tel1 = tel400.substr(0, 4);
					var tel2 = tel400.substr(4, 7);
					tel400 = tel1+ "-" + tel2;
				}else{
					var tel1 = tel400.substr(0, 3);
					var tel2 = tel400.substr(3, 4);
					var tel3 = tel400.substr(7, 4);
					tel400 = tel1+ "-" + tel2 + "-" + tel3;
				}
			}else if(telLength == 12){
				var tel1 = tel400.substr(0, 4);
				var tel2 = tel400.substr(4, 8);
				tel400 = tel1+ "-" + tel2;
			}else if(telLength == 10){
				var tel1 = tel400.substr(0, 3);
				var tel2 = tel400.substr(3, 4);
				var tel3 = tel400.substr(7, 3);
				tel400 = tel1+ "-" + tel2 + "-" + tel3;
			}
			$(this).html(tel400);
        })
        
		this.ajaxLoading();
        this.scroller();
        this.plugs();
        this.ihonorCon();
    },
    plugs: function(){
        if($("#showBaiduShare").length){
            // 展开分享界面
            var a = $("#baiduShare"),
                  b = $("#showBaiduShare"),
                  c = $("#closeBaiduShare");
            b.bind("click", function(){
                a.show(0).delay(0).addClass("ease");
            });
            c.bind("click", function(){
                a.removeClass("ease");
                setTimeout(function(){ a.hide(); }, 300);
            });
            a.bind("click", function(e){
                if(e.target == this){
                    a.removeClass("ease");
                    setTimeout(function(){ a.hide(); }, 300);
                }
            });
			// 百度分享
            window._bd_share_config = {
                "common":
                    {
                        "bdSnsKey":{},
                        "bdText":"",
                        "bdMini":"2",
                        "bdMiniList":false,
                        "bdPic":"",
                        "bdStyle":"1",
                        "bdSize":"32"
                    },
                   "share":{}
              };
              with(document)0[(getElementsByTagName('head')[0]||body)
                  .appendChild(createElement('script'))
                  .src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
          }
      
      	 // other
    },
    photo: function(){
		// 载入结构
        var $thum = $('#banner  .list'),
              $view = $('#productView'),
        	  _html = '';
        $(multigraph).each(function(index, element){
            _html += '<li><img src="'+ element.src +'" title="'+ element.title +'" alt="'+ element.title +'" /></li>';
        });
        $thum.html(_html);
        $view.hide();
    },
    map: function(type){
      if(type == 'show'){
        $('#location').css({'visibility': 'visible', 'animation': 'show_smaller .3s ease both'});
      }else if(type == 'hide'){
      	  $('#location').css({'visibility': 'hidden', 'animation': 'hide_smaller .3s ease both'});
      }
    },
    scroller: function(){
        if(typeof(multigraph) != 'undefined'){
			app.photo();
        };
		!function(){
			if($('#banner li').length > 1){
				var $a = $('#banner'), length = $a.find('li').length, vi = 0, wid, t, autoPlayTime = 8000, autoAnimateTime = 500, loop = true;
				var clone = $a.find('li').eq(0).clone().addClass('clone'), tipHtml = '';;
				$a.children('.list').append(clone);
				if(length > 1){
					for(var i=0; i<length; i++){
						i == 0 ? tipHtml += '<span class="cur"></span>' : tipHtml += '<span></span>';
					}
					$a.children('.tip').show();
				}
				$a.children('.tip').html(tipHtml);
				var _init = function(){
					wid = $a.width();
					$a.children('.list').width(wid*(length+1));
					$a.find('li').width(wid);
					$a.find('img').css({'width':wid});
					$a.css({'opacity':1});
				}
				var _func = function(){
					if(vi >= length){
						vi = 0;
						_func();
					}else{
						vi++;
						$a.children('.list').css({'-webkit-transform':'translate3d(-' + wid*vi + 'px, 0px, 0px)', '-webkit-transition':'-webkit-transform ' + autoAnimateTime + 'ms linear'});
						if(vi == length){
							$a.children('.tip').children('span').eq(0).addClass('cur').siblings().removeClass('cur');
							setTimeout(function(){
								$a.children('.list').css({'-webkit-transform':'translate3d(0px, 0px, 0px)', '-webkit-transition':'-webkit-transform 0ms linear'});
							}, autoAnimateTime);
						}else{
							$a.children('.tip').children('span').eq(vi).addClass('cur').siblings().removeClass('cur');
						}
					}
				}
				var _touch = function(){
					var o_pagex = 0, o_pagey = 0,   // 接触记录值
						e_pagex = 0, e_pagey = 0;   // 离开记录值
					$a.bind({
						'touchstart':function(e){
							clearInterval(t);
							o_pagex = e.originalEvent.targetTouches[0].pageX;
							o_pagey = e.originalEvent.targetTouches[0].pageY;
						},
						'touchmove':function(e){
							e_pagex = e.originalEvent.changedTouches[0].pageX;
							e_pagey = e.originalEvent.changedTouches[0].pageY;
							var xpage = e_pagex - o_pagex;   //::负数-向左边滑动::正数-向右边滑动
							var ypage = e_pagey - o_pagey;
							if(Math.abs(xpage) > Math.abs(ypage)){
								if(xpage >= 0){
									if(vi <= 0){
										$a.children('.list').css({'-webkit-transform':'translate3d(-' + (wid*length - xpage) + 'px, 0px, 0px)', '-webkit-transition':'-webkit-transform 0ms linear'});
										vi = length;
									}
								}else{
									if(vi >= length){
										$a.children('.list').css({'-webkit-transform':'translate3d(0px, 0px, 0px)', '-webkit-transition':'-webkit-transform 0ms linear'});
										vi = 0;
									}
								}
								$a.children('.list').css({'-webkit-transform':'translate3d(-' + (wid*vi - xpage) + 'px, 0px, 0px)', '-webkit-transition':'-webkit-transform 0ms linear'});
								e.preventDefault();
							}
						},
						'touchend':function(e){
							$a.children('.list').css({'-webkit-transition':'-webkit-transform ' + autoAnimateTime + 'ms linear'});
							e_pagex = e.originalEvent.changedTouches[0].pageX
							e_pagey = e.originalEvent.changedTouches[0].pageY
							if(Math.abs(e_pagey - o_pagey) > 0 && Math.abs(e_pagex - o_pagex) < 50){
								vi -=1;
								_func();
							}else{
								if(e_pagex - o_pagex > 0){  // 手指向右边滑动
									vi-=2;
									_func();
								}else if(e_pagex - o_pagex < 0){  // 手指向左边滑动
									_func();
								}
							}
							t = setInterval(_func, autoPlayTime);
						}
					});
				}
				_touch();
				_init();
				t = setInterval(_func, autoPlayTime);
				$(window).resize(_init);
				window.onorientationchange = function() {
					_init();
				};
			}
		}()
    },
    ajaxLoading: function(){        
        var self = this,
              bool = true,
              pageNum = '';
        if(!$('#ajaxLoading').length || !$('.pager').length){ return false; }
        if(!$('.pager span:contains("下一页")').length){ $('#ig-load').show(); }
		
		var _hash = window.location.hash;
		
		// 初始化条目和位置
		if(_hash == ''){
			window.sessionStorage.clear();
		}else{
			var _json = JSON.parse(window.sessionStorage.getItem('article'));
			//$('#ajaxLoading .list').html(_json.list);   // 重设列表内容
			// pageNum = _json.num;   // 重设当前页码
            $('.pager  a:contains("下一页")').attr({'href': _json.num});   // 重设当前页码
			$('#ig-load').html(_json.page);   // 重设翻页文字
		}
		
		// 点击进入详情页
		$('#ajaxLoading').on('click', '.item a', function(){
			var _html = JSON.stringify({'num': $('.pager  a:contains("下一页")').attr('href'), 'page':$('#ig-load').html(), 'list': $('#ajaxLoading .list').html()});
			window.sessionStorage.setItem('article', _html);
            window.location.hash = '#session';
		})
		
		// 加载更多数据
        $('#ig-load').bind('click', function(){
            // window.location.hash = '#session';
            bool = false;
            var url = $('.pager a:contains("下一页")').attr('href');
            if(pageNum == url || !$('.pager a:contains("下一页")').length){
                if(self.nodata == ''){
                    $('#ig-load').hide().empty();
                }else{
                	$('#ig-load').html(self.nodata);
                }
                return false;
            }else{
                pageNum = url
            }
            // console.log(pageNum);
            $.ajax({
                url : url,
                type:'GET',
                dataType:'html',
                beforeSend: function(){
                    $('#ig-load').html('正在努力加载');
                },
                success: function(data){
                  var html = $(data).children('#ajaxLoading .list').html(),
                        pager = $(data).find('.pager  a:contains("下一页")').attr('href');
                  $('#ajaxLoading .list').append(html);
                  if(pager == undefined){
                      self.nodata == '' ? $('#ig-load').hide().empty() : $('#ig-load').html(self.nodata) ;
                  }else{
                      $('.pager a:contains("下一页")').attr({'href': pager});
                      $('#ig-load').html('点击加载更多');
                  }
                  bool = true;
                }
            });
        });
    },
    checkForm: function(){
        var _self = this;
        var $form = $('#formPost');
        if($form.find('[name="Name"]').length > 0 && $form.find('[name="Name"]').val() == ''){
            app.console($form.find('[name="Name"]').attr('null'));
            // $form.find('[name="Name"]').focus();
			return false;
        }else if($form.find('[name="Phone"]').length > 0 && $form.find('[name="Phone"]').val() == ''){
            app.console($form.find('[name="Phone"]').attr('null'));
            // $form.find('[name="Phone"]').focus();
			return false;
        }else if($form.find('[name="Phone"]').length > 0 && !$form.find('[name="Phone"]').val().match(_self.phone)){
            app.console($form.find('[name="Phone"]').attr('error'));
            // $form.find('[name="Phone"]').focus();
			return false;
        }else if($form.find('[name="Content"]').length > 0 && $form.find('[name="Content"]').val() == ''){
            app.console($form.find('[name="Content"]').attr('null'));
            // $form.find('[name="Content"]').focus();
			return false;
        }else if($form.find('[name="Consignee"]').length > 0 && $form.find('[name="Consignee"]').val() == ''){
            app.console($form.find('[name="Consignee"]').attr('null'));
            // $form.find('[name="Consignee"]').focus();
			return false;
        }else if($form.find('[name="OrderPhone"]').length > 0 && $form.find('[name="OrderPhone"]').val() == ''){
            app.console($form.find('[name="OrderPhone"]').attr('null'));
            // $form.find('[name="OrderPhone"]').focus();
			return false;
        }else if($form.find('[name="OrderPhone"]').length > 0 && !$form.find('[name="OrderPhone"]').val().match(_self.phone)){
            app.console($form.find('[name="OrderPhone"]').attr('error'));
            // $form.find('[name="Phone"]').focus();
			return false;
        }else if($form.find('[name="MessageContent"]').length > 0 && $form.find('[name="MessageContent"]').val() == ''){
            app.console($form.find('[name="MessageContent"]').attr('null'));
            // $form.find('[name="MessageContent"]').focus();
			return false;
        }else{
        	return true;
        }
    },
    console: function(msg){
		var _self = this,
			_vendor = _self.vendor();
		if($('[ig-console]').length){
			$('[ig-console]').html(msg).css({'animation':'none'});
		}else{
			$('<div ig-console>'+ msg +'</div>').appendTo('body');
		}
		setTimeout(function(){
			if(_vendor == 'ms'){
				$('[ig-console]').css({'-ms-animation':'warm 1.5s linear 0s 1 both', 'animation':'warm 1.5s linear 0s 1 both'});
			}else if(_vendor == 'moz'){
				$('[ig-console]').css({'-moz-animation':'warm 1.5s linear 0s 1 both', 'animation':'warm 1.5s linear 0s 1 both'});
			}else if(_vendor == 'webkit'){
				$('[ig-console]').css({'-webkit-animation':'warm 1.5s linear 0s 1 both', 'animation':'warm 1.5s linear 0s 1 both'});
			}else if(_vendor == ''){
				$('[ig-console]').css({'animation':'warm 1.5s linear 0s 1 both'});
			}
		}, 100)
	},
    vendor: function(){
		var NV = {};
		var UA = navigator.userAgent.toLowerCase();
		try{
			if(NV.name = document.all){
				return 'ms';
			}else if(UA.indexOf("firefox") > 0){
				return 'moz';
			}else if(UA.indexOf("chrome") > 0 || UA.indexOf("safari") > 0 || UA.indexOf("opera") > 0){
				return 'webkit';
			}else{
				return '';
			}
		}catch(e){
			// code
		};
	},ihonorCon:function(){
		if (!$("#ihonorCon").length) {
			return false;
		}
		var $a = $("#ihonorCon .list"),
			length = $a.find("li").length,
			vi = 0,
			wid, t, autoPlayTime = 8000,
			autoAnimateTime = 500,
			loop = true;
		// 克隆元素
		var clone = $a.find("li").eq(0).clone().addClass("clone");
		$a.children("ul").append(clone);
		// 自适应宽度
		var _init = function() {
				wid = $a.width();
				$a.children("ul").width(wid * (length + 1));
				$a.find("li").width(wid);
				$a.find("img").css({
					"width": wid
				});
			}
			// 滚动效果函数
		var _func = function() {
				if (vi >= length) {
					vi = 0;
					_func();
				} else {
					vi++;
					if (vi == length) {
						setTimeout(function() {
							$a.children("ul").css({
								"-webkit-transform": "translate3d(0px, 0px, 0px)",
								"-webkit-transition": "-webkit-transform 0ms linear"
							});
						}, autoAnimateTime);
					}
					$a.children("ul").css({
						"-webkit-transform": "translate3d(-" + wid * vi + "px, 0px, 0px)",
						"-webkit-transition": "-webkit-transform " + autoAnimateTime + "ms linear"
					});
				}
			}
			// 滑动触发效果
		var _touch = function() {
			var o_pagex = 0, // 接触记录值
				e_pagex = 0; // 离开记录值
			$a.bind({
				"touchstart": function(e) {
					clearInterval(t);
					o_pagex = e.originalEvent.targetTouches[0].pageX;
				},
				"touchmove": function(e) {
					e_pagex = e.originalEvent.changedTouches[0].pageX;
					var xpage = e_pagex - o_pagex; //::负数-向左边滑动::正数-向右边滑动 
					if (xpage >= 0) {
						if (vi <= 0) {
							$a.children("ul").css({
								"-webkit-transform": "translate3d(-" + (wid * length - xpage) + "px, 0px, 0px)",
								"-webkit-transition": "-webkit-transform 0ms linear"
							});
							vi = length;
						}
					} else {
						if (vi >= length) {
							$a.children("ul").css({
								"-webkit-transform": "translate3d(0px, 0px, 0px)",
								"-webkit-transition": "-webkit-transform 0ms linear"
							});
							vi = 0;
						}
					}
					$a.children("ul").css({
						"-webkit-transform": "translate3d(-" + (wid * vi - xpage) + "px, 0px, 0px)",
						"-webkit-transition": "-webkit-transform 0ms linear"
					});
					e.preventDefault();
				},
				"touchend": function(e) {
					$a.children("ul").css({
						"-webkit-transition": "-webkit-transform " + autoAnimateTime + "ms linear"
					});
					e_pagex = e.originalEvent.changedTouches[0].pageX
					if (e_pagex - o_pagex > 0) { // 手指向右边滑动
						vi -= 2;
						_func();
					} else if (e_pagex - o_pagex < 0) { // 手指向左边滑动
						_func();
					}
					t = setInterval(_func, autoPlayTime);
				}
			});
		}
		$("#ihonorCon .left").bind({
			"touchstart": function(e) {
				clearInterval(t);
				if (vi <= 0 || vi == 5) {
					$a.children("ul").css({
						"-webkit-transform": "translate3d(-" + (wid * length) + "px, 0px, 0px)",
						"-webkit-transition": "-webkit-transform 0ms linear"
					});
					vi = length;
				}
			},
			"touchmove": function(e) {},
			"touchend": function(e) {
				vi -= 2;
				_func();
			}
		});
		$("#ihonorCon .right").bind({
			"touchstart": function(e) {
				clearInterval(t);
			},
			"touchmove": function(e) {
				if (vi >= length) {
					$a.children("ul").css({
						"-webkit-transform": "translate3d(0px, 0px, 0px)",
						"-webkit-transition": "-webkit-transform 0ms linear"
					});
					vi = 0;
				}
			},
			"touchend": function(e) {
				_func();
			}
		});
		
		_touch(); // 手指滑动触发
		_init(); // 自适应宽度
		t = setInterval(_func, autoPlayTime);
		$(window).resize(_init); // 改变浏览器宽度
		window.onorientationchange = function() {
			_init();
		};
		
	}
}

var app = new application();
app.ini();


