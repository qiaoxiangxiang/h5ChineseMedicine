Vue.component("content-top", {
    props:["page"],
    template: `
<div class="">
    <div class="content">
        <div class="top">
            <div class="top_img">
                <img src="img/index/logo_03.png" alt="">
            </div>
            <div class="top_right">   
                    <span class="image_text" @mouseenter="email_enter($event)" @mouseleave="email_leave($event)">
                        <img :src="imgsrc" alt="">
                        邮箱
                    </span>
                    <span  class="image_text" @mouseenter="phone_enter($event)" @mouseleave="phone_leave($event)">
                        <img class="image" :src="imgsrc1" alt="">
                        手机版
                    </span>
                    <div class="sousuo">
                        <input type="text" class="search_box" placeholder="请输入关键词">
                        <div class="search_button">
                            <img  src="img/index/top_03.png" alt="" >
                        </div>
                    </div>
                
            </div>
        </div>
        <div class="content_ul">
            <div class="content_ul_left"></div>
            <div v-for="(data,index) in nav_list" @click="nav(data)" class="content_ul_li" :class="{content_ul_li1:index+1 == page}"><span class="content_ul_li_span" :class="{content_ul_li_spanR:index+1 == nav_list.length}">{{data.title}}</span></div>
            <div class="content_ul_right"></div>
            <div class="content_ul_left"></div>
        </div>
    </div>
    `,
    data() {
        return {
            imgsrc:"img/index/top_09.png",
            imgsrc1:"img/index/top_06.png",
            nav_list: [
                { title: "网站首页", link: "index.html" },
                { title: "关于我们", link: "regardTo.html" },
                { title: "新闻动态", link: "journalism.html" },
                { title: "图书中心", link: "shopbook.html" },
                { title: "读者服务", link: "reader.html" },
                { title: "数字出版", link: "index.html#shuzi" },
                { title: "中国健康传媒集团", link: "" },
            ]
        }
    },
    methods: {
        nav(data){
            window.location.href=data.link
        },
        email_enter(e){
            this.imgsrc="img/index/top_091.png";
            $(e.currentTarget).css({"color":"#055bb6"});
        },
        email_leave(e){
            this.imgsrc="img/index/top_09.png";
            $(e.currentTarget).css({"color":"#999"});
        },
        phone_enter(e){
            this.imgsrc1="img/index/top_061.png";
            $(e.currentTarget).css({"color":"#055bb6"});
        },
        phone_leave(e){
            this.imgsrc1="img/index/top_06.png";
            $(e.currentTarget).css({"color":"#999"});
        }
    },
    mounted() {
        
        var width = $(".content_ul").width() - $(".content_ulleft").width();
        for (var i = 0; i < $(".content_ul_li").length; i++) {
            width -= $(".content_ul_li").eq(i).width();
        }
        $(".content_ulright").css({ "width": width + "px" })
    },
    created(){
        
    }

})

Vue.component('bottom', {
    template: `<div class="index_bottom">
    <div class="index_bottom_top">
        <img src="img/index/shouye_xiaolian_03.png" alt="">
        建议您使用IE9+、FireFox、Google Chrome，分辨率1280*800及以上浏览本网站，获得更好用户体验。
    </div>
    <div  class="index_bottom_bottom">
        <div class="index_bottom_bottom index_bottom_div">
            <span v-for='data in nav_list' @click="nav(data)">{{data.title}}</span>
            <span>©22006 - 2018 中国医药科技出版社 版权所有ICP备案编号：京ICP备14035006号-7 | 京公网安备 11010802025774号</span>
        </div>
    </div>
</div>`,
    data: function data() {
        return {
            nav_list: [
                { title: "联系我们", link: "regardTo.html#regardToMap" },
                { title: "人才招聘", link: "talents.html" },
                { title: "欢迎来稿", link: "reader.html#tougao" },
                { title: "法律声明", link: "legislation.html" }
            ]
        };
    }, methods: {
        nav(data){
            window.location.href=data.link
        }
    }, 
    created: function created() {
    }
});

Vue.component('new-look', {
    template: `
    <div class="new_look">
            <div class="new_look_h4">
                <span class="new_look_h4_span"></span>
                <h4>相关新闻</h4>
            </div>
            <ul class="new_look_ul">
                <li @click="newLook" class="new_look_ul_li" v-for="(data,index) in new_look" :key="index">
                    <div class="new_look_divLeft">
                        <div></div>
                    </div>
                    <div class="new_look_divRight">
                        <p class="new_look_divRight_p1">{{data.content}}
                        </p>
                        <p class="new_look_divRight_p2">
                            <span>{{data.time}}</span>
                            <span>{{data.title}}</span>
                        </p>
                    </div>
                </li>
                
            </ul>
        </div>
    `,
    data: function data() {
        return {
            new_look:[
                {"content":"腾讯为了给自己打上“ 科学发烧友 ” 标签可以说是很努力了","time":"2017-10-28","title":"药师在线网"},
                {"content":"腾讯为了给自己打上“ 科学发烧友 ” 标签可以说是很努力了","time":"2017-10-28","title":"药师在线网"},
                {"content":"腾讯为了给自己打上“ 科学发烧友 ” 标签可以说是很努力了","time":"2017-10-28","title":"药师在线网"},
                {"content":"腾讯为了给自己打上“ 科学发烧友 ” 标签可以说是很努力了","time":"2017-10-28","title":"药师在线网"},
                {"content":"腾讯为了给自己打上“ 科学发烧友 ” 标签可以说是很努力了","time":"2017-10-28","title":"药师在线网"},
            ]
        };
    }, methods: {
        newLook(){
            window.location.href = "journalism_detail.html"
        }
    }, created: function created() {
    }
});

function parseUrl(url){
    var result = [];
    var query = url.split("?")[1];
    var queryArr = query.split("&");
    queryArr.forEach(function(item){
        var obj = {};
        var value = item.split("=")[0];
        var key = item.split("=")[1];
        obj[value] = key;
        result.push(obj);
    });
    return result;
}

function url(){
    var url = location.search; //获取url中"?"符后的字串   
    var theRequest = new Object();   
    if (url.indexOf("?") != -1) {   
        var str = url.substr(1);   
        strs = str.split("&");   
        for(var i = 0; i < strs.length; i ++) {   
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
        }   
    } 
    return theRequest;
}

