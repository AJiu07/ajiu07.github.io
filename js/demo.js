$(function(){
    //滚动浏览器导航部分背景颜色
    $(document).ready(function(){
        //在文档加载完毕后执行
        $(window).scroll(function(){
            //开始监听滚动条
            //获取当前滚动条高度
            var topp = $(document).scrollTop();
                //判断如果滚动条大于90则弹出 "ok"
            if(topp > 10){
                $('.header').css("background-color","#ACD6FF");
            }else {
                $('.header').css("background-color","transparent");
            }
        });
    });

    //自适应导航栏
    $('.my').click(function(){
        $('.my .dh').css('display','block');
    })
});