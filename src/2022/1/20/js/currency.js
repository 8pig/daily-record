//rem
function Rem(){
  var docEl=document.documentElement,
      oSize=docEl.clientWidth/7.5;
  if(oSize>100){
     oSize=100;
  }
  docEl.style.fontSize=oSize+'px';
}
window.addEventListener('resize',Rem,false);
Rem(); 
// loading
(function() {
  var loadEffect = document.getElementById("loadEffect");
  for(var i=0;i<8;i++) {
    var mySpan = document.createElement("span");
    loadEffect.appendChild(mySpan);
  }
})()

//图片预加载	
var num = 0;
var the_images = [
  "https://t.babyfs.cn/test/ck/2018/phonicsKids/commonImg/videoView.jpg",
  "https://t.babyfs.cn/test/ck/2018/phonicsKids/commonImg/icon01.png"
  ];

jQuery.imgpreload(the_images,
{
    each: function()
    {
    	var status = $(this).data('loaded')?'success':'error';
    	if (status == "success") {                
			++num;
			$("#lodingnum").html((num/the_images.length*100).toFixed(0)+"%");
        }
    },
    all: function()
    {
		$("#lodingnum").html("100%");
		setTimeout(function(){
			document.getElementById('loading').style.display="none";
			//$(".swiper-container").css("display","block");
	},300)		
   }
});