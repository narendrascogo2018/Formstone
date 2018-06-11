/*! formstone v1.4.7 [tabs.js] 2018-06-11 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],t):t(jQuery,Formstone)}(function(t,e){"use strict";function a(t){if(!t.originalEvent){var e=t.data;e.$el.attr("aria-selected",!0).trigger(u.update,[0]),e.$mobileTab.addClass(b.active),e.$content.attr("aria-hidden",!1).addClass(b.active)}}function i(t){if(!t.originalEvent){var e=t.data;e.$el.attr("aria-selected",!1),e.$mobileTab.removeClass(b.active),e.$content.attr("aria-hidden",!0).removeClass(b.active)}}function o(t){var e=t.data;e.$el.attr("aria-controls",e.ariaContentId),e.$mobileTab.addClass(b.enabled),e.$content.attr("aria-labelledby",e.ariaId).addClass(b.enabled)}function n(t){var e=t.data;e.$el.removeAttr("aria-controls").removeAttr("aria-selected"),e.$mobileTab.removeClass(b.enabled),e.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeClass(b.enabled)}function s(t){t.data.$el.fsSwap("activate")}function r(t){t.$el.addClass(b.mobile),t.$mobileTab.addClass(b.mobile),t.$content.addClass(b.mobile)}function d(t){t.$el.removeClass(b.mobile),t.$mobileTab.removeClass(b.mobile),t.$content.removeClass(b.mobile)}var l=e.Plugin("tabs",{widget:!0,defaults:{customClass:"",maxWidth:1/0,mobileMaxWidth:"740px",theme:"fs-light"},classes:["tab","tab_mobile","mobile","content","enabled","active"],events:{update:"update"},methods:{_construct:function(s){s.mq="(max-width:"+(s.mobileMaxWidth===1/0?"100000px":s.mobileMaxWidth)+")",s.content=this.attr("href"),s.group=this.data(c+"-group"),s.elementClasses=[b.tab,s.rawGuid,s.theme,s.customClass],s.mobileTabClasses=[b.tab,b.tab_mobile,s.rawGuid,s.theme,s.customClass],s.contentClasses=[b.content,s.rawGuid,s.theme,s.customClass],s.$mobileTab=t('<button type="button" class="'+s.mobileTabClasses.join(" ")+'" aria-hidden="true">'+this.text()+"</button>"),s.$content=t(s.content).addClass(s.contentClasses.join(" ")),s.$content.before(s.$mobileTab).attr("role","tabpanel"),this.attr("role","tab"),s.id=this.attr("id"),s.id?s.ariaId=s.id:(s.ariaId=s.rawGuid,this.attr("id",s.ariaId)),s.contentId=s.$content.attr("id"),s.contentGuid=s.rawGuid+"_content",s.contentId?s.ariacontentId=s.contentId:(s.ariaContentId=s.contentGuid,s.$content.attr("id",s.ariaContentId));var r=e.window.location.hash,d=!1,l=!1;r.length&&(d=this.filter("[href*='"+r+"']").length>0,l=s.group&&t("[data-"+c+'-group="'+s.group+'"]').filter("[href*='"+r+"']").length>0),d?this.attr("data-swap-active","true"):l?this.removeAttr("data-swap-active").removeData("data-swap-active"):"true"===this.attr("data-tabs-active")&&this.attr("data-swap-active","true"),this.attr("data-swap-target",s.content).attr("data-swap-group",s.group).addClass(s.elementClasses.join(" ")).on("activate.swap"+s.dotGuid,s,a).on("deactivate.swap"+s.dotGuid,s,i).on("enable.swap"+s.dotGuid,s,o).on("disable.swap"+s.dotGuid,s,n)},_postConstruct:function(e){this.fsSwap({maxWidth:e.maxWidth,classes:{target:e.dotGuid,enabled:m.enabled,active:m.active,raw:{target:e.rawGuid,enabled:b.enabled,active:b.active}},collapse:!1}),e.$mobileTab.on("click"+e.dotGuid,e,s),t.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){r.call(e.$el,e)},leave:function(){d.call(e.$el,e)}})},_destruct:function(e){t.fsMediaquery("unbind",e.rawGuid),e.$mobileTab.off(u.namespace).remove(),e.elementClasses.push(b.mobile),e.contentClasses.push(b.mobile),e.$content.removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass(e.contentClasses.join(" ")),e.$content.attr("id")===e.contentGuid&&e.$content.removeAttr("id"),this.removeAttr("aria-controls").removeAttr("aria-selected").removeAttr("data-swap-active").removeData("data-swap-active").removeAttr("data-swap-target").removeData("data-swap-target").removeAttr("data-swap-group").removeData("data-swap-group").removeAttr("role").removeClass(e.elementClasses.join(" ")).off(u.namespace).fsSwap("destroy"),this.attr("id")===e.rawGuid&&this.removeAttr("id")},activate:function(t){this.fsSwap("activate")},enable:function(t){this.fsSwap("enable")},disable:function(t){this.fsSwap("disable")}}}),c=l.namespace,m=l.classes,b=m.raw,u=l.events;l.functions});