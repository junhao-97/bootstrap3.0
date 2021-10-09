$(function() {
    $(window).on("resize", function() {
        // 获取窗口宽度
        let clientW = $(window).width();
        // 设置临界值
        let isShowBigImages = clientW >= 800;

        // 获取所有item
        let $allItem = $("#ns_carousel .item");
        // console.log($allItem);

        // 遍历
        $allItem.each(function(index, item) {
            // 取出图片路径
            let src = isShowBigImages ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("' + src + '")';
            // 设置背景
            $(item).css({
                backgroundImage: imgUrl
            });
            // 设置img标签
            if (!isShowBigImages) {
                let $img = "<img src='" + src + "'>";
                $(item).empty().append($img);
            } else {
                $(item).empty();
            }
        });
    });
    $(window).trigger("resize");
    // 工具提示
    $('[data-toggle="tooltip"]').tooltip();

    // 动态处理宽度
    $(window).on("resize", function() {
        let $ul = $("#ns_product .nav");
        let $allLis = $("[role='presentation']", $ul);

        // 遍历
        let totalW = 0;
        $allLis.each(function(index, item) {
            totalW += $(item).width();
        });

        let parentW = $ul.parent().width();
        // 设置宽度
        if (totalW > parentW) {
            $ul.css({
                width: totalW + "px"
            })
        } else {
            $ul.removeAttr("style");
        }
    });
    // 导航处理
    let allLis = $("#j_nav li");

    $(allLis[2]).on("click", function() {
        $("html,body").animate({ scrollTop: $("#ns_hot").offset().top }, 1000);
    });
})