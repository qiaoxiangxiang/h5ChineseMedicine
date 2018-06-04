function url() {
    var url = location.search; //获取url中"?"符后的字串   
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

$(".contentJ").append(`<div class="top">
<div class="top_content">
    <img class="logo jiantou" src="../img/index/jiantou_03.png" alt="">
    <div class="title">首页</div>
    <div class="right">
        <a href="">
            <img class="top_right" src="../img/index/home_06.png" alt="">
        </a>
        
            <img class="top_right" src="../img/index/home_08.png" alt="">
        
    </div>
</div>
<div class="top_content_classfiy">
    <ul class="top_classfiy_ul">
        <li class="top_classfiy_li">
            <a href="index.html">
                <span class="top_classfiy_span">网站首页</span>
                <img class="top_classfiy_img" src="../img/index/Topjiantou_03.png" alt="">
            </a>
        </li>
        <li class="top_classfiy_li">
            <a href="about_us.html">
                <span class="top_classfiy_span">关于我们</span>
                <img class="top_classfiy_img" src="../img/index/Topjiantou_03.png" alt="">
            </a>
        </li>
        <li class="top_classfiy_li">
            <a href="journalism.html">
                <span class="top_classfiy_span">新闻动态</span>
                <img class="top_classfiy_img" src="../img/index/Topjiantou_03.png" alt="">
            </a>
        </li>
        <li class="top_classfiy_li">
            <a href="">
                <span class="top_classfiy_span">图书中心</span>
                <img class="top_classfiy_img" src="../img/index/Topjiantou_03.png" alt="">
            </a>
        </li>
        <li class="top_classfiy_li">
            <a href="reader.html">
                <span class="top_classfiy_span">读者服务</span>
                <img class="top_classfiy_img" src="../img/index/Topjiantou_03.png" alt="">
            </a>
        </li>
        <li class="top_classfiy_li">
            <a href="index.html#shuzi">
                <span class="top_classfiy_span">数字出版</span>
                <img class="top_classfiy_img" src="../img/index/Topjiantou_03.png" alt="">
            </a>
        </li>
        <li class="top_classfiy_li">
            <a href="">
                <span class="top_classfiy_span">中国健康传媒集团</span>
                <img class="top_classfiy_img" src="../img/index/Topjiantou_03.png" alt="">
            </a>
        </li>
    </ul>
</div>
</div>`)

$(".content_bottom").append(`
<div class="bottom">
            <div>
                <div class="bottom_top">
                    <span class="email">
                        <img class="bottom_top_img" src="../img/index/home_107.png">邮箱</span>
                    <span class="pc">
                        <img class="bottom_top_img" src="../img/index/home_110.png">电脑版</span>
                </div>
            </div>
            <div class="bottom_content">
                <a href="about_us_contact.html">
                    <span>联系我们</span>
                </a>
                <a href="talents.html">
                    <span>人才招聘</span>
                </a>
                <a href="reader.html#tougao">
                    <span>欢迎来稿</span>
                </a>
                <a href="legislation.html">
                    <span>法律声明</span>
                </a>
                <!-- <a href=""><span>友情链接</span></a> -->
            </div>
            <div class="bottom_bottom">
                <p class="bottom_bottom_txt">©22006 - 2018 中国医药科技出版社 版权所有ICP备案编号：京ICP备 14035006号-7 | 京公网安备 11010802025774号</p>
            </div>
        </div>
`)
