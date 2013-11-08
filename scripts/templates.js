this["JST"] = this["JST"] || {};

this["JST"]["tpl1"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img src="' +
((__t = ( imgSrc )) == null ? '' : __t) +
'" alt="wallpaper image" class="wallpaper-image">\r\n\r\n';

}
return __p
};

this["JST"]["tpl2"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '        <div class="wallpaper-wrapper">\r\n            <img src="' +
((__t = ( imgSrc )) == null ? '' : __t) +
'" alt="wallpaper image" class="wallpaper-image">\r\n        </div>\r\n        <div class="wallpaper-top">\r\n            <img src="' +
((__t = ( topImage )) == null ? '' : __t) +
'" alt="wallpaper top" >\r\n        </div>\r\n        <div class="wallpaper-bottom">\r\n            <img src="' +
((__t = ( bottomImage )) == null ? '' : __t) +
'" alt="wallpaper bottom" >\r\n        </div>\r\n';

}
return __p
};