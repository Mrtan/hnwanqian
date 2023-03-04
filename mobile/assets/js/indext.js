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