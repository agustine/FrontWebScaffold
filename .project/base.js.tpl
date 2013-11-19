var $<%= projectName %> = $.extend(true, $<%= projectName %>, {
	config: {
		ajaxDomain: '/',
		ajaxDataType: 'jsonp'
	},
	device: {
		isIpad: (/ipad/gi).test(navigator.appVersion),
		isIphone: (/iphone/gi).test(navigator.appVersion),
		isAndroid: (/android/gi).test(navigator.userAgent),
		isQvod: (/QvodPlayerBrowser/gi).test(navigator.userAgent),
		isYunfan: (/yunfan/gi).test(navigator.userAgent),
		isDuoPing: (/duoping/gi).test(navigator.userAgent),
		isOrientationAware: ("onorientationchange" in window),
		isHashChangeAware: ("onhashchange" in window),
		isTouchable: ("ontouchstart" in window),
		isStandalone: window.navigator.standalone,
		isNexusS: window.navigator.userAgent.indexOf(/Nexus\s*S/gi) != -1,
		isTuli: (/Tuliapp/gi).test(navigator.userAgent),
		isUC: (/UCBrowser/gi).test(navigator.userAgent),
		androidVersion: (/android/gi).test(navigator.userAgent) ? parseFloat((/Android\s+([\d\.]+)/).exec(navigator.userAgent)[1]) : 0,
		qvodVersion: ((/QvodPlayerBrowser/gi).test(navigator.userAgent)) ? (/QvodPlayerBrowser\:+([\d\.]+)/).exec(navigator.userAgent)[1] : 0,
		ucVersion: (/UCBrowser/gi).test(navigator.userAgent) ? parseFloat((/UCBrowser\/+([\d\.]+)/).exec(navigator.userAgent)[1]) : 0,
		compareVersion: function(v1,v2) {
			var arrV1 = v1.split('.'),
				arrV2 = v2.split('.'),
				len = (arrV1.length >= arrV2.length) ? arrV2.length : arrV1.length,
				result = (arrV1.length > arrV2.length) ? true :false,
				i;
			for (i = 0; i < len; i++){
				if (parseInt(arrV1[i]) != parseInt(arrV2[i])) {
					result = (parseInt(arrV1[i]) > parseInt(arrV2[i])) ? true : false;
					break;
				};
			};
			i++;
			return result;
		},

		getOrient: function() {
			if (window.orientation != undefined) {
				return window.orientation % 180 == 0 ? "portrait" : "landscape"
			} else {
				return (window.innerWidth > window.innerHeight) ? "landscape" : "portrait"
			};
		}
	},
	request: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = decodeURI(window.location.search.substr(1)).match(reg);
		if (r != null) return decodeURI(unescape(r[2]));
		return null;
	},
	clientSize: function() {
		var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

		return {
			"width": width,
			"height": height
		};
	}
});