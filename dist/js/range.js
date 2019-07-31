/*! formstone v1.4.16 [range.js] 2019-07-31 | GPL-3.0 License | formstone.it */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./touch"],a):a(jQuery,Formstone)}(function(a,e){"use strict";function n(){b=a(u.element)}function s(a){a.stepCount=(a.max-a.min)/a.step,a.offset=a.$track.offset(),a.vertical?(a.trackHeight=a.$track.outerHeight(),a.handleHeight=a.$handle.outerHeight(),a.increment=a.trackHeight/a.stepCount):(a.trackWidth=a.$track.outerWidth(),a.handleWidth=a.$handle.outerWidth(),a.increment=a.trackWidth/a.stepCount);var e=(a.$el.val()-a.min)/(a.max-a.min);i(a,e,!0)}function r(a){l.killEvent(a);var e=a.data;e.disabled||(s(e),o(a),e.$container.addClass(p.focus))}function o(a){l.killEvent();var e=a.data;e.disabled||i(e,e.vertical?1-(a.pageY-e.offset.top)/e.trackHeight:(a.pageX-e.offset.left)/e.trackWidth)}function c(a){l.killEvent(a);var e=a.data;e.disabled||e.$container.removeClass(p.focus)}function d(a){a.data.$container.addClass(p.focus)}function m(a){a.data.$container.removeClass(p.focus)}function i(a,e,t){1<a.increment&&(e=a.vertical?Math.round(e*a.stepCount)*a.increment/a.trackHeight:Math.round(e*a.stepCount)*a.increment/a.trackWidth),e<0&&(e=0),1<e&&(e=1);var l=(a.min-a.max)*e;l=-parseFloat(l.toFixed(a.digits)),a.$fill.css(a.vertical?"height":"width",100*e+"%"),a.$handle.css(a.vertical?"bottom":"left",100*e+"%"),(l+=a.min)!==a.value&&!1!==l&&!0!==t&&(a.$el.val(l).trigger(v.raw.change,[!0]),a.value=l)}function f(a,e){var t=a.data;if(!e&&!t.disabled){var l=(t.$el.val()-t.min)/(t.max-t.min);i(t,l)}}function h(a){var e=a.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}var t=e.Plugin("range",{widget:!0,defaults:{customClass:"",fill:!1,formatter:!1,labels:{max:!1,min:!1},theme:"fs-light",vertical:!1},classes:["track","handle","fill","marker","labels","label","label_min","label_max","vertical","focus","disabled"],methods:{_construct:function(a){a.formatter||(a.formatter=h),a.min=parseFloat(this.attr("min"))||0,a.max=parseFloat(this.attr("max"))||100,a.step=parseFloat(this.attr("step"))||1,a.digits=a.step.toString().length-a.step.toString().indexOf("."),a.value=parseFloat(this.val())||a.min+(a.max-a.min)/2;var e="";a.vertical="vertical"===this.attr("orient")||a.vertical,a.disabled=this.is(":disabled")||this.is("[readonly]"),e+='<div class="'+p.track+'" aria-hidden="true">',a.fill&&(e+='<span class="'+p.fill+'"></span>'),e+='<div class="'+p.handle+'" role="slider">',e+='<span class="'+p.marker+'"></span>',e+="</div>",e+="</div>";var t=[p.base,a.theme,a.customClass,a.vertical?p.vertical:"",a.labels?p.labels:"",a.disabled?p.disabled:""];if(this.addClass(p.element).wrap('<div class="'+t.join(" ")+'"></div>').after(e),a.$container=this.parents(u.base),a.$track=a.$container.find(u.track),a.$fill=a.$container.find(u.fill),a.$handle=a.$container.find(u.handle),a.$output=a.$container.find(u.output),a.labels){var l='<span class="'+[p.label,p.label_max].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.max:a.max)+"</span>",i='<span class="'+[p.label,p.label_min].join(" ")+'">'+a.formatter.call(this,a.labels.max?a.labels.min:a.min)+"</span>";a.$container.prepend(a.vertical?l:i).append(a.vertical?i:l)}a.$labels=a.$container.find(u.label),this.on(v.focus,a,d).on(v.blur,a,m).on(v.change,a,f),a.$container.fsTouch({pan:!0,axis:a.vertical?"y":"x"}).on(v.panStart,a,r).on(v.pan,a,o).on(v.panEnd,a,c),n(),s.call(this,a)},_destruct:function(a){a.$container.off(v.namespace).fsTouch("destroy"),a.$track.remove(),a.$labels.remove(),this.unwrap().removeClass(p.element).off(v.namespace),n()},_resize:function(a){l.iterate.call(b,s)},enable:function(a){a.disabled&&(this.prop("disabled",!1),a.$container.removeClass(p.disabled),a.disabled=!1)},disable:function(a){a.disabled||(this.prop("disabled",!0),a.$container.addClass(p.disabled),a.disabled=!0)},resize:s,update:function(a){a.min=parseFloat(a.$el.attr("min"))||0,a.max=parseFloat(a.$el.attr("max"))||100,a.step=parseFloat(a.$el.attr("step"))||1,a.digits=a.step.toString().length-a.step.toString().indexOf("."),a.value=parseFloat(this.val())||a.min+(a.max-a.min)/2,a.labels&&(a.$labels.filter(u.label_max).html(a.formatter.call(this,a.labels.max?a.labels.max:a.max)),a.$labels.filter(u.label_min).html(a.formatter.call(this,a.labels.max?a.labels.min:a.min))),s.call(this,a)}}}),u=t.classes,p=u.raw,v=t.events,l=t.functions,b=[]});