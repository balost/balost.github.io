// build time:Mon Jul 23 2018 11:02:41 GMT+0800 (中国标准时间)
(function(a){a(".article").each(function(n){a(this).find("img").each(function(){if(a(this).parent().hasClass("fancybox"))return;var n=this.alt;if(n)a(this).after('<span class="caption">'+n+"</span>");a(this).wrap('<a href="'+this.src+'" title="'+n+'" class="fancybox"></a>')});a(this).find(".fancybox").each(function(){a(this).attr("rel","article"+n)})});if(a.fancybox){a(".fancybox").fancybox()}a(".article ul, .article ol").each(function(n,c){a(c).find("li").each(function(n,c){var s=a(c);if(!s.children().hasClass("li-inner")){s.wrapInner('<span class="li-inner"></span>')}})});a('.article input[type="checkbox"]').each(function(n,c){var s=a(c);var t=c.checked;var i='<span class="checkbox-wrap '+(t?"checked":"")+'"></span>';if(!s.parent().hasClass("checkbox-wrap")){var e=s.parent().parent();var o=e.text();e.html(i+'<span class="check-content '+(t?"checked":"")+'">'+o+"</span>")}});var n=a(".about-me-mask");a(".avatar").on("click",function(){if(!n.hasClass("open")){n.addClass("open")}});n.on("click",function(a){if(a.target.classList.contains("about-me-mask")){n.removeClass("open")}});var c=a("#backToTop");a(document).on("scroll",function(){var n=a(document).scrollTop();if(n>100){c.addClass("show")}if(n<=100){c.removeClass("show")}});c.on("click",function(){a("html, body").animate({scrollTop:0},300)})})(jQuery);
//rebuild by neat 