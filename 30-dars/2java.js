(self.webpackChunkforms = self.webpackChunkforms || []).push([[8158], {
    98158: function(_, t, e) {
        _.exports = function(_) {
            "use strict";
            var t = function(_) {
                return _ && "object" == typeof _ && "default"in _ ? _ : {
                    default: _
                }
            }(_)
              , e = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
              , n = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
              , r = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_")
              , s = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
              , m = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
            function u(_, t, e) {
                var n, r;
                return "m" === e ? t ? "минута" : "минуту" : _ + " " + (n = +_,
                r = {
                    mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                }[e].split("_"),
                n % 10 == 1 && n % 100 != 11 ? r[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? r[1] : r[2])
            }
            var o = function(_, t) {
                return m.test(t) ? e[_.month()] : n[_.month()]
            };
            o.s = n,
            o.f = e;
            var i = function(_, t) {
                return m.test(t) ? r[_.month()] : s[_.month()]
            };
            i.s = s,
            i.f = r;
            var M = {
                name: "ru",
                weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                months: o,
                monthsShort: i,
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., H:mm",
                    LLLL: "dddd, D MMMM YYYY г., H:mm"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    m: u,
                    mm: u,
                    h: "час",
                    hh: u,
                    d: "день",
                    dd: u,
                    M: "месяц",
                    MM: u,
                    y: "год",
                    yy: u
                },
                ordinal: function(_) {
                    return _
                },
                meridiem: function(_) {
                    return _ < 4 ? "ночи" : _ < 12 ? "утра" : _ < 17 ? "дня" : "вечера"
                }
            };
            return t.default.locale(M, null, !0),
            M
        }(e(87322))
    }
}]);