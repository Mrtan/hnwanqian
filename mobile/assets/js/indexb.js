var xinrong_for_clientId = "31761";
var xinrong_for_goUrl = "http://d.jzl123.cn";
var xinrong_for_productType = "3";
var xinrong_for_onlineType = "A";
var xinrong_for_originalSource = window.escape(document.referrer);
(function () {
  var kf = document.createElement("script");
  kf.src = "http://d.jzl123.cn/public/js/mobile.js?v=20180711";
  kf.setAttribute("charset", "UTF-8");
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(kf, s);
})();
/*弹出框*/
var pst;
$(".xinring_list_box li").on("click", function () {
  pst = "右边";
  var id = $(this).attr("data-href")
  if (id !== undefined) {
    // 在线咨询：zxzx 在线留言：zxly 免费电话：mfdh QQ咨询：qqzx 微信咨询：wxzx
    if (id == ".modelRelation") {
      //点击坐标入库
      clickLocalXinRong("mfdh");
    }
    if (id == ".modelQQ") {
      //点击坐标入库
      clickLocalXinRong("qqzx");
    }
    if (id == ".modelMessages") {
      //点击坐标入库
      clickLocalXinRong("zxly");
    }
    if (id == ".modelWeChat") {
      //点击坐标入库
      clickLocalXinRong("wxzx");
    }
    if (id == ".modelRelation") {
      httpphoneXinRongMidNum();
    } else {
      $(id).addClass("show")
    }
  }
})
$(".list_Bottom li").eq(1).on("click", function () {
  pst = "底部浮框";
  //点击坐标入库
  clickLocalXinRong("mfdh");
  var id = $(this).attr("data-href");
  if (id !== undefined) {
    if (id == ".modelRelation") {
      httpphoneXinRongMidNum();
    } else {
      $(id).addClass("show")
    }
  }
})
$(".list_Bottom li").eq(2).on("click", function () {
  pst = "底部浮框";
  //点击坐标入库
  clickLocalXinRong("zxly");
  var id = $(this).attr("data-href");
  if (id !== undefined) {
    $(id).addClass("show")
  }
})
//关闭弹出框
$(".allCls").on("click", function () {
  $(".modelBox").removeClass("show")
})
$("#abt").click(function () {
  $(".allCls").click()
})
$(".allClsI").click(function () {
  $(".allCls").click()
})
$(".movePopupSon a").click(function () {
  $(".movePopup").css("display", "none")
})
//拨号键盘
$(".QRcode_phone>ol>li").on("click", function () {
  $(".QRcode_valueTop").addClass("hidder")
  $(".QRcode_value").addClass("show")
  $(".QRcode_value").html($(".QRcode_value").html() + $(this).html())
  $(".QRcode_I").addClass("show")
})
//电话号的修改
$(".QRcode_I").on("click", function () {
  var arr = $(".QRcode_value").html()
  arr = arr.substr(0, arr.length - 1)
  $(".QRcode_value").html(arr)
  if (arr.length == 0) {
    $(this).removeClass("show")
    $(".QRcode_valueTop").removeClass("hidder")
    $(".QRcode_value").removeClass("show")
  }
})
//旋转二维码
$(".model_left").on("click", function () {
  $(".model_relation").addClass("show2")
  $(".model_QRcode").addClass("hidder")
  $(".model_translateX").css("transform", "rotateY(180deg)");
})
//旋转电话
$(".model_right").on("click", function () {
  $(".model_relation").removeClass("show2")
  $(".model_QRcode").removeClass("hidder")
  $(".model_translateX").css("transform", "rotateY(0deg)");
})
//回到顶部
$('.tap').click(function () {
  window.scrollTo(0, 0)
})
var sctype = $("#sybConsultadionstyle").val();
if (2 == sctype) {
  $("#sybConsultadionstyle_text").html("限时优惠");
} else {
  $("#sybConsultadionstyle_text").html("最新报价");
}
var api;

function qimoh5idGo() {
  pst = "底部浮框";
  //点击坐标入库
  clickLocalXinRong("zxzx");
  if (xinrong_for_onlineType == "A") {
    //$("#qimoh5id").attr("data-href", 
    //"https://webchat.7moor.com/wapchat.html?accessId=c5f229f0-77fe-11e7-9195-2d4b751f8cf8&otherParams=" + JSON.stringify(qimoClientId) 
    //+ "&fromUrl=" + window.escape(window.location.href) + "&urlTitle=点击查看网站");
    window.location.href = $("#qimoh5id").attr("data-href");
  } else if (xinrong_for_onlineType == "B") {
    api = $53.createApi();
    console.info(api);
    api.query();
  }
}


(function () {
  setTimeout(function () {
    //获取所有的script标签
    var urlTj = "http://tj.wayboo.net.cn/TongJiCenter/js/tj.js";
    var script = document.getElementsByTagName("script");
    var ifHave = false;
    for (var i = 0; i < script.length; i++) {
      //遍历所有的script标签
      if (script[i].src.match(urlTj)) {
        ifHave = true;
        break;
      }
    }
    if (!ifHave) {
      var hm = document.createElement("script");
      hm.id = "xr_tj_script";
      hm.setAttribute("charset", "UTF-8");
      hm.setAttribute("data_ci", 31761);//erp客户ID 【数字格式，不加""】
      hm.setAttribute("data_pt", 3);//产品类型  直通车着落页：1，云商宝：2，微点金：3  【数字格式，不加""】
      hm.src = urlTj + "?rnd=" + Math.random();
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    }
  }, 500);
})();

function Smoove() {
  window.scrollReveal = new scrollReveal({ reset: false });
}

function banner() {
  var $link = '<link rel="stylesheet" type="text/css" href="http://page-bucket.oiaqye7985.com/land-page/css/swiper.min.css"/>'
  $("title").after($link)
  var swiper1 = new Swiper('.swiper-container', {
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    }
  });
}
function goPAGE() {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    banner()
    Smoove()
  }
}
Smoove()
goPAGE()

//呼叫前
/* 			$(".frontCall").show().siblings().hide()
      //呼叫中
      $(".underwayCall").show().siblings().hide()
      //呼叫成功
      $(".successCall").show().siblings().hide()
      //呼叫失败
      $(".failCall").show().siblings().hide() */

//返回呼叫前
function returnFrontCall() {
  $(".frontCall").show().siblings().hide()
}
//快捷留言
$(".pageXinrong_boxRightB ul li").click(function () {
  $(".pageXinrong_boxMiddle textarea").val($(this).text())
})
//随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
//电话总数
function telNumber() {
  var sum = 0;/*初始化曝光数*/
  var allsum;/*当前的曝光数*/
  var i = 0;/*每秒的增长量*/
  var data = new Date();/*时间对象*/
  var time = data.getHours();/*小时*/
  var minu = data.getMinutes();/*分钟*/
  var sec = data.getSeconds();/*秒*/
  var times = (time * 3600) + (minu * 60) + sec;
  if (times >= 0 && times <= 32400) {
    /* 0:00-9:00 */
    i = randomNum(1, 20)
    sum = i
  } else if (times >= 32400 && times <= 43200) {
    /* 9:00-12:00  */
    i = randomNum(20, 40)
    sum = +i
  } else if (times >= 43200 && times <= 61200) {
    /* 12:00-17:00 */
    i = randomNum(40, 70)
    sum = +i
  } else if (times >= 61200 && times <= 75600) {
    /* 17:00-21:00 */
    i = randomNum(70, 90)
    sum = +i

  } else if (times >= 75600 && times <= 86400) {
    /* 21:00-24:00 */
    i = randomNum(90, 100)
    sum = +i
  }
  return sum
}
$(".number span").html(telNumber());
$(function () {
  if ($("body").width() <= 768) {
    $('.pageXinrong_boxRightB').css("margin-bottom", "10px")
    $('.pageXinrong_boxRightT').before($(".pageXinrong_boxRightB"));
  }
});

var xr_clientId = 31761; 
var syb_codeId = 21282; 
var xr_goUrl = 'http://d.jzl123.cn'; 
var qimoClientId = { nickName: 'clientId:' + xr_clientId }; 
(function () { 
  var kfm = document.createElement('script'); 
  kfm.id = 'xr_kf_script'; 
  kfm.setAttribute('charset', 'UTF-8'); 
  kfm.src = xr_goUrl + '/public/js/xrkf.js?rnd=' + Math.random();
  var kfs = document.getElementsByTagName('script')[0]; 
  kfs.parentNode.insertBefore(kfm, kfs); 
})();

(function () { 
  var urlTj = 'http://tj.wayboo.net.cn/TongJiCenter/js/tj.js'; 
  var script = document.getElementsByTagName('script'); 
  var ifHave = false; 
  for (var i = 0; i < script.length; i++) { 
    if (script[i].src.match(urlTj)) { 
      ifHave = true; break; 
    } 
  } 
  if (!ifHave) { 
    var hm = document.createElement('script'); 
    hm.id = 'xr_tj_script'; 
    hm.setAttribute('charset', 'UTF-8'); 
    hm.setAttribute('data_ci', 31761); 
    hm.setAttribute('data_pt', 3); 
    hm.src = urlTj + '?rnd=' + Math.random(); 
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(hm, s); 
  } 
})();