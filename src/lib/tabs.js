(function($){
    $.fn.tabs = function(){
        $(this).click(function(){
            var $this = $(this);
            $this.addClass("active")
                .siblings()
                .removeClass("active");
            $($('a',$this).attr("data-for"))
                .addClass("active")
                .siblings()
                .removeClass("active");
        });
    };
})(jQuery);