// JavaScript Document
var option={
		tabs:".tabs",
		tl:"li",
		onClass:"on",
		tabsc:".tabcont",
		tabc:".tabc",
		e:"click"
}
//<li rev="{e:'ajax',u:'get.asp'}">
var pTabs={
	run:function(arg){
		var tabs,tl,onClass,tabsc,tabc,e;
		tabs=arg.tabs || option.tabs;
		tl=arg.tl || option.tl;
		onClass=arg.onClass || option.onClass;
		tabsc=arg.tabsc || option.tabsc;
		tabc=arg.tabc || option.tabc;
		e=arg.e || option.e;
		
		$(tl,$(tabs)).each(function(i){
			$(tl,$(tabs)).first().addClass(onClass)
			$(tabc,$(tabsc)).first().siblings().hide()
			$(this).bind(e, function() {
				$(this).addClass(onClass).siblings().removeClass();
				$(tabc,$(tabsc)).eq(i).show().siblings().hide()
				if($(this).attr("event")!=undefined){
					switch($(this).attr("event")){
					case "ajax":
						$(tabc,$(tabsc)).eq(i).html($(this).attr("url"))
					break;
					case "text":
						$(tabc,$(tabsc)).eq(i).html($(this).attr("text"))
					break;
					}
				}
				
				//alert($(tabc,$(tabsc)).is(":visible"))
				
			});
		})
	}
}

/*
ѡ�����.parent.redirect("")


function redirect(url){
		
}
*/