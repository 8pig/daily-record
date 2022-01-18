var A1 = document.getElementById("audio1");
var A2 = document.getElementById("audio2");

(function() {
    A1.addEventListener("playing", function() {
        $(".horn em").addClass("horn-animate");
    });
    A1.addEventListener("pause", function() {
        $(".horn em").removeClass("horn-animate");
    })
})()

// homePage
$("#btnPlay").click(function(){
    $(".home-page").hide();
    content();
})

// content
function content() {
    $(".content").show();
    $(".option01").show();
    // autioPlay
    var audio_arr1 = [
        "audio/sad.mp3",
        "audio/bed.mp3",
        "audio/kit.mp3"
    ];
    A1.src = audio_arr1[0];
    A1.play();

    $(".horn").click(function() {
        A1.play();
    })

    // 答题
    var rightNum = 0;
    $("#content p").unbind("click").click(function(){
        var dataJudge = $(this).attr("data-judge");
        if(dataJudge==1){
            rightNum++;
            $(this).addClass("text-active");
            $(this).parent().find("p").unbind("click");
            A1.play();
            A2.src = "http://live.babyfs.cn/web/H5/common/audio/right1.mp3";
            A2.play();
            if(rightNum==3){
                setTimeout(function(){
                    myAnswer();
                },1500);
            }else {
                setTimeout(function(){
                    $(".option").hide();
                    $(".option").eq(rightNum).show();
                    A1.src = audio_arr1[rightNum];
                    A1.play();
                },1000);
            }
        }else{
            A2.src = "http://live.babyfs.cn/web/H5/common/audio/wrong1.mp3";
            A2.play();
        }
    })

    // myAnswer
    function myAnswer() {
        $(".horn").unbind("click");

        $("#answer").fadeIn();
        var myText = document.getElementsByClassName("text");
        for(var i=0;i<myText.length;i++){
            (function(index){
                myText[index].onclick = function(){
                    A1.src = audio_arr1[index];
                    A1.play();
                }
            })(i)
        }
    }
}
// content()
