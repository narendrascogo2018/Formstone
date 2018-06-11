/*! formstone v1.4.7 [navigation.js] 2018-06-11 | GPL-3.0 License | formstone.it */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./swap"],a):a(jQuery,Formstone)}(function(a,e){"use strict";function t(a){a.$handle.fsSwap("deactivate")}function n(a){a.data.$handle.addClass(g.focus)}function l(a){a.data.$handle.removeClass(g.focus)}function d(a){var e=a.data;13!==a.keyCode&&32!==a.keyCode||(b.killEvent(a),e.$handle.trigger($.raw.click))}function o(a){if(!a.originalEvent){var e=a.data;e.open||(e.$el.trigger($.open).attr("aria-hidden",!1),e.$content.addClass(e.contentClassesOpen).one($.click,function(){t(e)}),e.$handle.attr("aria-expanded",!0),e.label&&e.$handle.html(e.labels.open),c(e),e.open=!0,e.$nav.focus())}}function i(a){if(!a.originalEvent){var e=a.data;e.open&&(e.$el.trigger($.close).attr("aria-hidden",!0),e.$content.removeClass(e.contentClassesOpen).off($.namespace),e.$handle.attr("aria-expanded",!1),e.label&&e.$handle.html(e.labels.closed),h(e),e.open=!1,e.$el.focus())}}function s(a){var e=a.data;e.$el.attr("aria-hidden",!0),e.$handle.attr("aria-controls",e.ariaId).attr("aria-expanded",!1),e.$content.addClass(g.enabled),setTimeout(function(){e.$animate.addClass(g.animated)},0),e.label&&e.$handle.html(e.labels.closed)}function r(a){var e=a.data;e.$el.removeAttr("aria-hidden"),e.$handle.removeAttr("aria-controls").removeAttr("aria-expanded"),e.$content.removeClass(g.enabled,g.animated),e.$animate.removeClass(g.animated),p(e),h(e)}function c(a){a.isToggle||C.addClass(g.lock)}function h(a){a.isToggle||C.removeClass(g.lock)}function u(a){if(a.label)if(a.$handle.length>1){a.originalLabel=[];for(var e=0,t=a.$handle.length;e<t;e++)a.originalLabel[e]=a.$handle.eq(e).html()}else a.originalLabel=a.$handle.html()}function p(a){if(a.label)if(a.$handle.length>1)for(var e=0,t=a.$handle.length;e<t;e++)a.$handle.eq(e).html(a.originalLabel[e]);else a.$handle.html(a.originalLabel)}var f=e.Plugin("navigation",{widget:!0,defaults:{customClass:"",gravity:"left",label:!0,labels:{closed:"Menu",open:"Close"},maxWidth:"980px",theme:"fs-light",type:"toggle"},classes:["handle","nav","content","animated","enabled","focus","open","toggle","push","reveal","overlay","left","right","lock"],events:{open:"open",close:"close"},methods:{_construct:function(e){e.handleGuid=g.handle+e.guid,e.isToggle="toggle"===e.type,e.open=!1,e.isToggle&&(e.gravity="");var t=g.base,c=[t,e.type].join("-"),h=e.gravity?[c,e.gravity].join("-"):"",p=[e.rawGuid,e.theme,e.customClass].join(" ");e.handle=this.data(v+"-handle"),e.content=this.data(v+"-content"),e.handleClasses=[g.handle,g.handle.replace(t,c),h?g.handle.replace(t,h):"",e.handleGuid,p].join(" "),e.thisClasses=[g.nav.replace(t,c),h?g.nav.replace(t,h):"",p],e.contentClasses=[g.content.replace(t,c),p].join(" "),e.contentClassesOpen=[h?g.content.replace(t,h):"",g.open].join(" "),e.$nav=this.addClass(e.thisClasses.join(" ")).attr("role","navigation"),e.$handle=a(e.handle).addClass(e.handleClasses),e.$content=a(e.content).addClass(e.contentClasses),e.$animate=a().add(e.$nav).add(e.$content),u(e),e.navTabIndex=e.$nav.attr("tabindex"),e.$nav.attr("tabindex",-1),e.id=this.attr("id"),e.id?e.ariaId=e.id:(e.ariaId=e.rawGuid,this.attr("id",e.ariaId)),e.$handle.attr("data-swap-target",e.dotGuid).attr("data-swap-linked",e.handleGuid).attr("data-swap-group",g.base).attr("tabindex",0).on("activate.swap"+e.dotGuid,e,o).on("deactivate.swap"+e.dotGuid,e,i).on("enable.swap"+e.dotGuid,e,s).on("disable.swap"+e.dotGuid,e,r).on($.focus+e.dotGuid,e,n).on($.blur+e.dotGuid,e,l).fsSwap({maxWidth:e.maxWidth,classes:{target:e.dotGuid,enabled:m.enabled,active:m.open,raw:{target:e.rawGuid,enabled:g.enabled,active:g.open}}}),e.$handle.is("a, button")||e.$handle.on($.keyPress+e.dotGuid,e,d)},_destruct:function(a){a.$content.removeClass([a.contentClasses,a.contentClassesOpen].join(" ")).off($.namespace),a.$handle.removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("data-swap-target").removeData("swap-target").removeAttr("data-swap-linked").removeAttr("data-swap-group").removeData("swap-linked").removeData("tabindex").removeClass(a.handleClasses).off(a.dotGuid).html(a.originalLabel).fsSwap("destroy"),a.$nav.attr("tabindex",a.navTabIndex),p(a),h(a),this.removeAttr("aria-hidden").removeClass(a.thisClasses.join(" ")).off($.namespace),this.attr("id")===a.rawGuid&&this.removeAttr("id")},open:function(a){a.$handle.fsSwap("activate")},close:t,enable:function(a){a.$handle.fsSwap("enable")},disable:function(a){a.$handle.fsSwap("disable")}}}),v=f.namespace,m=f.classes,g=m.raw,$=f.events,b=f.functions,C=null;e.Ready(function(){C=a("html, body")})});