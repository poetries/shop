
// 剩余时间=结束时间-现在时间

(function () {
    changeTime();
    function changeTime() {

        var endTime = new Date();//结束时间
        var curTime = new Date();//现在时间

        //设置结束时间
        endTime.setFullYear(2019);
        endTime.setMonth(0);
        endTime.setDate(12);
        endTime.setHours(0);
        endTime.setMinutes(0);
        endTime.setSeconds(0);

        //获取时间相差毫秒/1000
        var s = (endTime.getTime()-curTime.getTime())/1000;//结束与现在时间相差秒数

        if (s>0) {
            //把毫秒化成天 小时 分 1天=24*60*60 = 86400s
            var day = Math.floor(s / 86400);//天数
            s = s % 86400;// 把天数去掉 剩下秒数
            var hours = Math.floor(s / 3600);//小时
            s = s % 3600;// 把小时去掉 剩下秒数
            var minutes = Math.floor(s / 60);//分钟
            s = s % 60;// 把分钟去掉 剩下秒数

            $(".days").html(fullZero(day, 2));
            $(".hours").html(fullZero(hours, 2));
            $(".mins").html(fullZero(minutes, 2));
            $(".seconds").html(fullZero(s, 2));
        }

    }
    setInterval(changeTime,1000);

//补零函数
    function fullZero(currtime,n) {
        var str = "" + currtime;
        if (str.length < n){
            str = "0"+str ;
        }
        return str;
    }
})();