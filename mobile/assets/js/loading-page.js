// document.oncontextmenu=new Function("event.returnValue=false");  
// document.onselectstart=new Function("event.returnValue=false");  


function loadPageHead() {
 $.ajax({
	url: 'http://ad.wayboo.net.cn/loadPageHead',
	type: 'get',
	dataType: 'json',
	success: function (result) {
		/*console.log(result.data);*/
		$("body").children(":first-child").before(result.data);
	}
 }); 
}

function loadPageBottom() {
 $.ajax({
	url: 'http://ad.wayboo.net.cn/loadPageBottom',
	type: 'get',
	dataType: 'json', 
	success: function (result) {
		/*console.log(result.data);*/
		$("body").children(":last-child").after(result.data);
	}
 });
}

function loadTitleIcon() {
 $.ajax({
	url: 'http://ad.wayboo.net.cn/loadPageTitleIcon',
	type: 'get',
	dataType: 'json', 
	success: function (result) {
		/*console.log(result.data);*/
		$("title").html(result.data.pageTitle);//鏍囬
		$("[rel='shortcut icon']").attr("href",result.data.pageIcon)
	}
 });
}


function loadPage() {
 loadPageHead();
 loadPageBottom();
 loadTitleIcon();
 $("br").remove();
 $(".el-button").remove();
}