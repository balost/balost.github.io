// build time:Mon Jul 23 2018 11:02:42 GMT+0800 (中国标准时间)
NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var e=$(this);var i=e.attr("title");var t=e.parent("a");if(t.size()<1){var a=e.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");t=e.wrap('<a href="'+a+'"></a>').parent("a")}t.addClass("fancybox fancybox.image");t.attr("rel","group");if(i){t.append('<p class="image-caption">'+i+"</p>");t.attr("title",i)}});$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var e=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var i=location.hash;if(i!==""){$(e+'li:has(a[href="'+i+'"])').addClass("active").siblings().removeClass("active");$(i).addClass("active").siblings().removeClass("active")}}).trigger("hashchange")});$(e+".tab").on("click",function(e){e.preventDefault();if(!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var i=$(this).find("a").attr("href");$(i).addClass("active").siblings().removeClass("active");if(location.hash!==""){history.pushState("",document.title,window.location.pathname+window.location.search)}}})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){var i=e.which===27&&$(".search-popup").is(":visible");if(i){$(".search-popup").hide();$(".search-popup-overlay").remove();$("body").css("overflow","")}})},registerBackToTop:function(){var e=50;var i=$(".back-to-top");$(window).on("scroll",function(){i.toggleClass("back-to-top-on",window.pageYOffset>e);var t=$(window).scrollTop();var a=NexT.utils.getContentVisibilityHeight();var n=t/a;var s=Math.round(n*100);var o=s>100?100:s;$("#scrollpercent>span").html(o)});i.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var e=$("iframe");var i=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"];var t=new RegExp(i.join("|"));e.each(function(){var e=this;var i=$(this);var s=a(i);var o;if(this.src.search(t)>0){var r=n(s.width,s.height);i.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var c=document.createElement("div");c.className="fluid-vids";c.style.position="relative";c.style.marginBottom="20px";c.style.width="100%";c.style.paddingTop=r+"%";c.style.paddingTop===""&&(c.style.paddingTop="50%");var d=e.parentNode;d.insertBefore(c,e);c.appendChild(e);if(this.src.search("music.163.com")>0){o=a(i);var h=o.width>s.width||o.height<s.height;if(h){c.style.paddingTop=n(o.width,s.height)+"%"}}}});function a(e){return{width:e.width(),height:e.height()}}function n(e,i){return i/e*100}},addActiveClassToMenuItem:function(){var e=window.location.pathname;e=e==="/"?e:e.substring(0,e.length-1);$('.menu-item a[href^="'+e+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator;var i=e.userAgent;var t=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return t.test(i)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){if(!this.isDesktop()||this.isPisces()||this.isGemini()){return}$(".sidebar-toggle").trigger("click")},isMist:function(){return CONFIG.scheme==="Mist"},isPisces:function(){return CONFIG.scheme==="Pisces"},isGemini:function(){return CONFIG.scheme==="Gemini"},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body");var i=e[0];var t=i.offsetWidth-i.clientWidth;e.remove();return t},getContentVisibilityHeight:function(){var e=$("#content").height(),i=$(window).height(),t=e>i?e-i:$(document).height()-i;return t},getSidebarb2tHeight:function(){var e=CONFIG.sidebar.b2t?$(".back-to-top").height():0;return e},getSidebarSchemePadding:function(){var e=$(".sidebar-nav").css("display")=="block"?$(".sidebar-nav").outerHeight(true):0,i=$(".sidebar-inner"),t=i.innerWidth()-i.width(),a=this.isPisces()||this.isGemini()?t*2+e+CONFIG.sidebar.offset*2+this.getSidebarb2tHeight():t*2+e/2;return a}};$(document).ready(function(){e();function e(){var e;$(window).on("resize",function(){e&&clearTimeout(e);e=setTimeout(function(){var e=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();i(e)},0)});var t=NexT.utils.getScrollbarWidth();if($(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".site-overview").css("width","calc(100% + "+t+"px)")}if($(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".post-toc").css("width","calc(100% + "+t+"px)")}i(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}function i(e){e=e||"auto";$(".site-overview, .post-toc").css("max-height",e)}});
//rebuild by neat 