jQuery(document).ready(function($){function e(){var e=Math.floor(10*Math.random(5)*1e3);return e}$(".one").cycle({timeout:e()}),$(".two").cycle({timeout:e()}),$(".three").cycle({timeout:e()}),$(".four").cycle({timeout:e()})}),jQuery(document).ready(function($){function e(e,n){e.filter(function(){var e=this.getBoundingClientRect();return e.top>=0&&e.top<=window.innerHeight}).trigger(n)}function n(e){for(var n,t,i=e.length;i;n=parseInt(Math.random()*i),t=e[--i],e[i]=e[n],e[n]=t);return e}var t=$(window),i=$("img.ll"),o=$(".items");t.on("scroll",function(){e(i,"lazylazy")}),i.lazyload({effect:"fadeIn",failure_limit:Math.max(i.length-1,0),event:"lazylazy"}),$(".filters").on("click","button",function(){var e=$(this).attr("data-filter");o.isotope({filter:e}),$("html, body").animate({scrollTop:0},"fast"),isotope()});var a=function(){var e=o.width(),n=1,t=0;return e>1500?n=6:e>1200?n=5:e>900?n=4:e>600?n=3:e>300&&(n=2),t=Math.floor(e/n),o.find(".item").each(function(){var e=$(this),n=e.attr("class").match(/item-w(\d)/),i=e.attr("class").match(/item-h(\d)/),o=n?t*n[1]:t,a=i?t*i[1]*.66666:.66666*t;e.css({width:o,height:a})}),t};isotope=function(){o.isotope({itemSelector:".item",masonry:{columnWidth:a()}})},isotope(),$(window).on("debouncedresize",isotope),o.isotope("on","layoutComplete",function(){e(i,"lazylazy")});var r=[];o.find(".item").each(function(){r.push($(this))}),n(r);for(var l=0;l<r.length;l++){var s=150*l;r[l].delay(s).queue(function(e){$(this).addClass("loaded").dequeue()})}}),jQuery(document).ready(function($){var e=$("#cd-menu-trigger"),n=$(".cd-main-content"),t=$("header");e.on("click",function(i){i.preventDefault(),e.toggleClass("is-clicked"),t.toggleClass("lateral-menu-is-open"),n.toggleClass("lateral-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").toggleClass("overflow-hidden")}),$("#cd-lateral-nav").toggleClass("lateral-menu-is-open"),$("html").hasClass("no-csstransitions")&&$("body").toggleClass("overflow-hidden")}),n.on("click",function(i){$(i.target).is("#cd-menu-trigger, #cd-menu-trigger span")||(e.removeClass("is-clicked"),t.removeClass("lateral-menu-is-open"),n.removeClass("lateral-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$("body").removeClass("overflow-hidden")}),$("#cd-lateral-nav").removeClass("lateral-menu-is-open"),$("html").hasClass("no-csstransitions")&&$("body").removeClass("overflow-hidden"))}),$(".item-has-children").children("a").on("click",function(e){e.preventDefault(),$(this).toggleClass("submenu-open").next(".sub-menu").slideToggle(200).end().parent(".item-has-children").siblings(".item-has-children").children("a").removeClass("submenu-open").next(".sub-menu").slideUp(200)})}),jQuery(document).ready(function($){function e(){var e=new PhotoSwipe(n,PhotoSwipeUI_Default,t,i),o,a=!1,r=!0,l;e.listen("beforeResize",function(){o=e.viewportSize.x*window.devicePixelRatio,a&&1e3>o?(a=!1,l=!0):!a&&o>=1e3&&(a=!0,l=!0),l&&!r&&e.invalidateCurrItems(),r&&(r=!1),l=!1}),e.listen("gettingData",function(e,n){a?(n.src=n.originalImage.src,n.w=n.originalImage.w,n.h=n.originalImage.h):(n.src=n.mediumImage.src,n.w=n.mediumImage.w,n.h=n.mediumImage.h)}),console.log("pswpStartCustom"),e.init()}var n=document.querySelectorAll(".pswp")[0],t=[{mediumImage:{src:"img-temp/enlarge/medium.jpg",w:1500,h:979},originalImage:{src:"img-temp/enlarge/large.jpg",w:3e3,h:1957}},{mediumImage:{src:"img-temp/enlarge-1/medium.jpg",w:1500,h:998},originalImage:{src:"img-temp/enlarge-1/large.jpg",w:3e3,h:1995}}],i={index:0,captionEl:!1,arrowEl:!1,shareEl:!1,fullscreenEl:!0,counterEl:!1,zoomEl:!0,tapToClose:!1};$(".gallery-cell").on("click","img",function(){var n=$(this).parent().attr("data-index");e()})}),jQuery(document).ready(function($){$(".gallery").flickity({cellAlign:"center",percentPosition:!1,pageDots:!1,wrapAround:!0,imagesLoaded:!0})}),jQuery(document).ready(function($){});
//# sourceMappingURL=./scripts-min.js.map