var A1 = document.getElementById("audio1");
var V1 = document.getElementsByTagName("video")[0];
// audioPlay
A1.addEventListener("pause", function(){
	$(".horn").removeClass("horn-animate");
});
// nav
$("#btnPlay").click(function(){
	$(".home-page").hide();
	$(".nav").show();
})
$(".nav p").click(function(){
	$("#swiperScript").remove();

	var dataNum = $(this).attr("data-num");
	if(dataNum==1){
		page01();
	}else if(dataNum==2){
		page02();
	}else if(dataNum==3){
		page03();
	}
})

var swiperScript = '<script type="text/javascript" id="swiperScript">\
					  var mySwiper1 = new Swiper(".swiper-container1",{\
					    mode: "horizontal",\
					    scrollbar:".swiper-scrollbar",\
						scrollbarHide : false,\
						scrollbarDraggable : true,\
					  })\
					</script>';
// page01
function page01() {
	var strHtml = '<section class="swiper-container swiper-container1">\
				    <div class="swiper-wrapper">\
				      <article class="swiper-slide swiper-slide1" data-hash="page1">\
				        <div class="videoShow">\
							<video id="myVideo" src="https://v.s.babyfs.cn/8638de9300199de6ed34cacc4303993082cf5c51.mp4" poster="https://t.babyfs.cn/test/ck/2018/phonicsKids/commonImg/videoView.jpg" controls></video>\
				        </div>\
				        <p class="text word">Aa [æ]</p>\
				      </article>\
				      <article class="swiper-slide swiper-slide2" data-hash="page2">\
				        <div class="text word">\
				          <p>m<strong>a</strong>p [mæp]</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <div class="text sentence">\
				          <p>A <strong>map</strong> is on the table.</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <div class="text word">\
				          <p>f<strong>a</strong>t [fæt]</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <div class="text sentence">\
				          <p>A <strong>fat</strong> <strong>man</strong> is <strong>standing</strong>.</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <h6 id="btnBack"><em></em></h6>\
				      </article>\
				    </div>\
				    <div class="swiper-scrollbar">\
						<div class="swiper-scrollbar-drag"></div>\
				    </div>\
				  </section>';
	$("#content").html(strHtml).show();
	$("body").append(swiperScript);
	// text点读
	var audio_arr1 = [
	  "audio/Aa.mp3",
	  "audio/map.mp3",
	  "audio/Amapisonthetable.mp3",
	  "audio/fat.mp3",
	  "audio/Afatmanisstanding.mp3"
	]
	var myText = document.getElementsByClassName("text");
	for(var i=0;i<myText.length;i++){
	  (function(index){
	    myText[index].onclick = function(){
	      A1.src = audio_arr1[index];
	      A1.play();
	    }
	  })(i)
	}

	$("#btnBack").click(function(){
		A1.pause();
		$("#content").html("").hide();
		$(".nav").show();
	})
}
// page02
function page02() {
	var strHtml = '<section class="swiper-container swiper-container1">\
				    <div class="swiper-wrapper">\
				      <article class="swiper-slide swiper-slide1" data-hash="page1">\
				        <div class="videoShow">\
							<video id="myVideo" src="https://v.s.babyfs.cn/fa969e6b6cfc604717c5e74736cd5b5299c2c9f9.mp4" poster="https://t.babyfs.cn/test/ck/2018/phonicsKids/commonImg/videoView.jpg" controls></video>\
				        </div>\
				        <p class="text word">Ee [e]</p>\
				      </article>\
				      <article class="swiper-slide swiper-slide2" data-hash="page2">\
				        <div class="text word">\
				          <p>d<strong>e</strong>sk [desk]</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <div class="text sentence">\
				          <p>Some books are on the <strong>desk</strong>.</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <div class="text word">\
				          <p>b<strong>e</strong>d [bed]</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <div class="text sentence">\
				          <p>There is a <strong>bed</strong> in my room.</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <h6 id="btnBack"><em></em></h6>\
				      </article>\
				    </div>\
				    <div class="swiper-scrollbar">\
						<div class="swiper-scrollbar-drag"></div>\
				    </div>\
				  </section>';
	$("#content").html(strHtml).show();
	$("body").append(swiperScript);
	// text点读
	var audio_arr2 = [
	  "audio/Ee.mp3",
	  "audio/desk.mp3",
	  "audio/Somebooksareonthedesk.mp3",
	  "audio/bed.mp3",
	  "audio/Thereisabedinmyroom.mp3"
	]
	var myText = document.getElementsByClassName("text");
	for(var i=0;i<myText.length;i++){
	  (function(index){
	    myText[index].onclick = function(){
	      A1.src = audio_arr2[index];
	      A1.play();
	    }
	  })(i)
	}

	$("#btnBack").click(function(){
		A1.pause();
		$("#content").html("").hide();
		$(".nav").show();
	})
}
// page03
function page03() {
	var strHtml = '<section class="swiper-container swiper-container1">\
				    <div class="swiper-wrapper">\
				      <article class="swiper-slide swiper-slide1" data-hash="page1">\
				        <div class="videoShow">\
							<video id="myVideo" src="https://v.s.babyfs.cn/0c91728e4e2bc826db4177f73797168ce8883984.mp4" poster="https://t.babyfs.cn/test/ck/2018/phonicsKids/commonImg/videoView.jpg" controls></video>\
				        </div>\
				        <p class="text word">Ii [ɪ]</p>\
				      </article>\
				      <article class="swiper-slide swiper-slide2" data-hash="page2">\
				        <div class="text word">\
				          <p>k<strong>i</strong>ck [kɪk]</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <div class="text sentence">\
				          <p>Mommy can <strong>kick</strong> a ball.</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <div class="text word">\
				          <p>p<strong>i</strong>ck [pɪk]</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <div class="text sentence">\
				          <p>I can <strong>pick</strong> up the banana.</p>\
				          <p class="playIcon"><em></em></p>\
				        </div>\
				        <h6 id="btnBack"><em></em></h6>\
				      </article>\
				    </div>\
				    <div class="swiper-scrollbar">\
						<div class="swiper-scrollbar-drag"></div>\
				    </div>\
				  </section>';
	$("#content").html(strHtml).show();
	$("body").append(swiperScript);
	// text点读
	var audio_arr3 = [
	  "audio/Ii.mp3",
	  "audio/Kick.mp3",
	  "audio/Mommycankickaball.mp3",
	  "audio/pick.mp3",
	  "audio/Icanpickupthebanana.mp3"
	]
	var myText = document.getElementsByClassName("text");
	for(var i=0;i<myText.length;i++){
	  (function(index){
	    myText[index].onclick = function(){
	      A1.src = audio_arr3[index];
	      A1.play();
	    }
	  })(i)
	}

	$("#btnBack").click(function(){
		A1.pause();
		$(".content").html("").hide();
		$(".nav").show();
	})
}

// page1()