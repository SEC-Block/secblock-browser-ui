$(function(){
  $("#secLogo").mouseover(function(){
    $("#secLogoImg").attr("src","../images/secActive.png");
  });
  $("#secLogo").mouseout(function(){
    $("#secLogoImg").attr("src","../images/sec.png");
  });

  $("#footerWeibo").mouseover(function(){
    $("#footerWeiboImg").attr("src","../images/weiboActive.png");
  });
  $("#footerWeibo").mouseout(function(){
    $("#footerWeiboImg").attr("src","../images/weibo.png");
  });
})