! function(t) {
    var o = {};

    function a(e) { if (o[e]) return o[e].exports; var n = o[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports }
    a.m = t, a.c = o, a.d = function(e, n, t) { a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t }) }, a.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, a.t = function(n, e) {
        if (1 & e && (n = a(n)), 8 & e) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var t = Object.create(null);
        if (a.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n)
            for (var o in n) a.d(t, o, function(e) { return n[e] }.bind(null, o));
        return t
    }, a.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return a.d(n, "a", n), n }, a.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, a.p = "", a(a.s = 0)
}([function(e, n, t) {
    var o, a;
    angular.module("appweb", ["ngMessageFormat", "ngSanitize", "angularFileUpload", "pascalprecht.translate", "angularSpinner", "ngCookies", "ngMd5"]), (o = function(e, n, t) { var o; return e.defaults.withCredentials = !0, delete sessionStorage.galaxyCountTime, o = $("html").attr("lang"), $.ajax({ url: "/language/en.json" }).done(function(e) { return n.translations("en", e) }), $.ajax({ url: "/language/vi.json" }).done(function(e) { return n.translations("vi", e) }), n.preferredLanguage(o || "vi"), t.setDefaults({ color: "white", position: "fixed" }) }).$inject = ["$httpProvider", "$translateProvider", "usSpinnerConfigProvider"], (a = function(e, n, t) { var o, a; return n.startSpinner = function() { return t.spin("spinner-1"), $("#overlay").show() }, n.stopSpinner = function() { return t.stop("spinner-1"), $("#overlay").hide() }, n.isMobile = !1, (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (n.isMobile = !0), n.showLogin = !0, n.showForget = !1, n.showSuccess = !1, a = 0, (o = function() { if (!(60 < a)) return window.ga && window.ga.getAll ? window.ga.getAll().forEach(function(e) { return window.gacid = e.get("clientId") }) : (a++, setTimeout(o, 500)) })() }).$inject = ["UtitService", "$rootScope", "usSpinnerService"], angular.module("appweb").config(o).run(a), angular.element(document).ready(function() {}), t(1), t(2), t(3), t(4), t(5), t(6), t(7), t(8), t(9), t(10), t(11), t(12), t(13), t(14), t(15), t(16), t(17), t(18), t(19)
}, function(e, n) {
    var t;
    (t = function(t, o) { return this.requestSuccess = function(e, n) { return t.stopSpinner(), e(null, n.data) }, this.requestError = function(e, n) { return t.stopSpinner(), null === n.data && (n.data = { message: "Unknown error" }), e(n.data, null) }, this.request = function(e, n) { return null == e && (e = {}), "GET" === (e = _.extend(e, { headers: { clientid: window.clientid } })).method && e.data && (e.url = e.url + "?" + $.param(e.data), delete e.data), t.startSpinner(), o(e).then(this.requestSuccess.bind(this, n), this.requestError.bind(this, n)) }, null }).$inject = ["$rootScope", "$http"], angular.module("appweb").service("ApiService", t)
}, function(e, n) {
    var t;
    (t = function(i, o, a) {
        var r, c, l, u, s, d, m, p, g;
        return this.pageTracking = function(e, n) { var t, o, a; return a = c(e, n), o = window.dataLayer = window.dataLayer || [], t = { Page: { pageType: a } }, null != i.userInfo && (t.Customer = l(i.userInfo)), "NowShowing" === a && (t.Movies = s(i.movieShowing)), "ComingSoon" === a && (t.Movies = s(i.movieComingSoon)), "Actor" === a && (t.Actor = d(i.people)), "Director" === a && (t.Director = d(i.people)), "MovieBooking" !== a && "MovieDetail" !== a || (t.Movie = u(i.movieDetail)), o.push(t), console.log("pageTracking", t, o) }, this.checkoutTracking = function(e, n, t) { var o, a; return a = window.dataLayer = window.dataLayer || [], o = {}, null != i.userInfo && (o.Customer = l(i.userInfo)), o.Movie = u(i.movieDetail), "add" === e && (o.event = "addToCart", o.ecommerce = { currencyCode: "VND", subTotal: i.cartSubTotal, add: { products: m(n, t, i.movieDetail.name) } }), "remove" === e && (o.event = "removeFromCart", o.ecommerce = { currencyCode: "VND", subTotal: i.cartSubTotal, remove: { products: m(n, t, i.movieDetail.name) } }), a.push(o) }, this.purchaseTracking = function(e) { var n, t, o; if (t = window.dataLayer = window.dataLayer || [], n = {}, o = e.cinemaId + "-" + e.vistaTransNumber, r(o)) return null != i.userInfo && (n.Customer = l(i.userInfo)), n.Movie = { title: e.movieName, titleID: e.movieId }, n.Cinema = { cinemaName: e.cinemaName, screenName: e.screenNumber }, n.ecommerce = { purchase: { actionField: { id: o, affiliation: "Galaxy Cinema", revenue: e.price, tax: 0, shipping: 0, coupon: "" }, products: g(e) } }, t.push(n), console.log("purchaseTracking", n, t) }, c = function(e, n) {
            var t;
            switch (e) {
                case "trang-chu":
                    t = "Home";
                    break;
                case "phim-dang-chieu":
                    t = "NowShowing";
                    break;
                case "phim-sap-chieu":
                    t = "ComingSoon";
                    break;
                case "dat-ve":
                    t = "MovieBooking";
                    break;
                case "dien-anh":
                    t = "MovieListing";
                    break;
                case "phim":
                    t = "MovieDetail";
                    break;
                case "rap-gia-ve":
                    t = "Cinema";
                    break;
                case "khuyen-mai":
                    t = "Promotion";
                    break;
                case "phim-hay":
                    t = "MovieNews";
                    break;
                case "dien-vien":
                    t = "undefined" !== n ? "Actor" : "ActorListing";
                    break;
                case "dao-dien":
                    t = "undefined" !== n ? "Director" : "DirectorListing";
                    break;
                case "binh-luan-phim":
                    t = "undefined" !== n ? "MovieReview" : "MovieReviewListing";
                    break;
                case "movie-blog":
                    t = "undefined" !== n ? "MovieBlog" : "MovieBlogListing"
            }
            return t
        }, l = function(e) { var n; return n = { customerId: e.memberId, customerGender: e.gender, customerCity: e.city }, null !== e.balanceList ? (n.customerPoint = e.balanceList[0].pointsRemaining, n.customerLifePoint = e.balanceList[0].lifetimePointsBalanceDisplay) : (n.customerPoint = 0, n.customerLifePoint = 0), n }, s = function(e) { var n, t, o, a; for (a = [], n = 0, t = e.length; n < t; n++) o = e[n], a.push({ title: o.name, titleID: o.id }); return a }, u = function(e) {
            var n, t, o, a, i, r, c, l, u, s, d, m, p, g, f, h, v, b, y, S, k, w, $;
            if ((a = {}).title = e.name, a.titleID = e.id, null != e.metadata.country && (a.country = e.metadata.country[0].name), k = new Date(e.startdate), a.releaseDate = k.getFullYear() + "/" + (k.getMonth() + 1) + "/" + k.getDate(), null != e.metadata.category) {
                for (l = [], u = 0, p = (v = e.metadata.category).length; u < p; u++) c = v[u], l.push(c.name);
                a.genre = l
            }
            if (null != e.metadata.cast) {
                for (o = [], s = 0, g = (b = e.metadata.cast).length; s < g; s++) t = b[s], n = new Date(t.birthday), o.push({ name: t.name, birthDate: n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() });
                a.cast = o
            }
            if (null != e.metadata.director) {
                for (r = [], d = 0, f = (y = e.metadata.director).length; d < f; d++) i = y[d], n = new Date(i.birthday), r.push({ name: i.name, birthDate: n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate() });
                a.director = r
            }
            if (null != e.metadata.studio) {
                for ($ = [], m = 0, h = (S = e.metadata.studio).length; m < h; m++) w = S[m], $.push(w.name);
                a.studio = $
            }
            return a
        }, d = function(e) { var n; return n = new Date(e.birthday), { name: e.name, birthDate: n.getFullYear() + "/" + (n.getMonth() + 1) + "/" + n.getDate(), bornCountry: e.country } }, m = function(e, n, t) { var o, a, i, r; return o = a = "", "ticket" === e ? (a = t + "/" + n.name + " - " + n.description, o = n.ticketTypeCode) : "concession" === e && (a = t + "/" + n.description + " - " + n.extendedDescription, o = n.vistaConcessionId), r = [], i = { name: a, id: o, price: n.displayPrice, brand: "", category: e, variant: "", quantity: 1 }, r.push(i), r }, g = function(e) { var n, t, o, a, i, r, c, l, u, s, d, m; for (c = e.movieName, n = e.cinemaName, u = [], o = 0, i = (s = e.tickets).length; o < i; o++) l = { name: n + "/" + c + "/" + (m = s[o]).description, id: m.ticketTypeCode, price: m.priceInCents, brand: "", category: "ticket", variant: "", quantity: m.totalItem, ticketType: m.description, seats: p(e.seats) }, u.push(l); for (a = 0, r = (d = e.concessions).length; a < r; a++) l = { name: n + "/" + c + "/" + (t = d[a]).description, id: t.itemId, price: t.priceInCents, brand: "", category: "concession", variant: "", quantity: t.totalItem }, u.push(l); return u }, p = function(e) { var n, t, o, a, i; for (a = [], t = 0, o = e.length; t < o; t++) n = { rowID: (i = e[t]).substr(0, 1), seatNumber: i.substr(1, i.length) }, a.push(n); return a }, r = function(e) { var n, t; return e = a.createHash(e), t = !1, "undefined" !== (n = o.get("glx_tx")) && n === e || (o.put("glx_tx", e), t = !0), t }, null
    }).$inject = ["$rootScope", "$cookies", "md5"], angular.module("appweb").service("GTMService", t)
}, function(e, n) {
    var t;
    (t = function(a, e) {
        var n;
        return (n = this).lang = function() { return $("html").attr("lang") }, n.apply = function(e) { return setTimeout(function() { return e.$apply() }, 1) }, n.notify = function(e, n, t) { var o; return o = { message: n, title: t }, a.$broadcast("show-dialog", o, e) }, n.formatSessionDate = function(e) { var n, t, o; return o = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], n = { dayOfWeekLabel: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"][(t = new Date(e.replace(".000Z", ""))).getDay()], dayOfWeekKey: o[t.getDay()], showDate: t.getDate() + "/" + (t.getMonth() + 1) + "/" + t.getFullYear(), showTime: t.getHours() + ":" + t.getMinutes(), originDate: e }, console.log(n), n }, n.getHrefSearch = function(e) {
            var n;
            switch (n = "phim", e.modelType) {
                case "post":
                    switch (e.type) {
                        case "review":
                            n = "binh-luan-phim";
                            break;
                        case "promotion":
                            n = "khuyen-mai"
                    }
                    break;
                case "metadata":
                    switch (e.type) {
                        case "cast":
                            n = "dien-vien";
                            break;
                        case "directore":
                            n = "dao-dien"
                    }
                    break;
                case "cinema":
                    n = "rap-gia-ve"
            }
            return "/" + n + "/" + e.slug
        }, n.setBookingTicketUrl = function(e) { if ("undefined" != typeof Storage) return localStorage.setItem("bookingTicketUrl", e) }, n.redirectBookingTicketUrl = function() { var e; if ("undefined" != typeof Storage && (e = localStorage.getItem("bookingTicketUrl"))) return localStorage.removeItem("bookingTicketUrl"), window.location.href = e }, n.removeBookingTicketUrl = function() { if ("undefined" != typeof Storage && localStorage.getItem("bookingTicketUrl")) return localStorage.removeItem("bookingTicketUrl") }, n.createUUID = function() { var t; return t = (new Date).getTime(), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var n; return n = (t + 16 * Math.random()) % 16 | 0, t = Math.floor(t / 16), ("x" === e ? n : 3 & n | 8).toString(16) }) }, null
    }).$inject = ["$rootScope", "$http"], angular.module("appweb").service("UtitService", t)
}, function(e, n) {
    var t;
    (t = function(e, t, n, o) { var a, i; return a = function(e, n) { if (!e) return t.item = n }, i = { url: "/api/movie/showAndComming", method: "GET", data: {} }, e.request(i, a), t.openLinkVIG = function(e) { return "taptap" === e ? window.open("https://taptap.com.vn") : "android" === e ? window.open("https://play.google.com/store/apps/details?id=com.vui.taptapandroid&hl=en") : "ios" === e ? window.open("https://apps.apple.com/vn/app/taptap-by-vui-vietnam/id1487758263") : void 0 } }).$inject = ["ApiService", "$scope", "UtitService", "$rootScope"], angular.module("appweb").controller("navbarController", t)
}, function(e, n) {
    var t;
    (t = function(t, l, o, u, a, i) { var s; return l.init = function(e, n, t, o, a, i, r, c) { return console.log("_headerController"), l.slug = e, l.slugQuery = n, l.userSessionId = t, u.movieShowing = o, u.movieComingSoon = a, u.movieDetail = i, u.people = r, c && (l.transactionInfo = c), s() }, l.logout = function() { var e; return e = { url: "/api/auth/logout", method: "POST", data: {} }, t.request(e, function(e, n) { return e ? o.notify(null, e.message) : (u.userInfo = {}, i.remove("sessionId"), 1 === window.location.pathname.indexOf("thanh-vien") && (window.location.href = "/"), 1 === window.location.pathname.indexOf("book-ticket") ? window.location.reload() : void 0) }) }, l.openLogin = function() { return u.$broadcast("$openLogin"), $("#login-modal").modal("show") }, s = function() { var e, n; return e = function(e, n) { if (console.log("userInfo", n), e || (u.userInfo = n), u.$broadcast("getUserInfo", n), a.pageTracking(l.slug, l.slugQuery), l.transactionInfo) return a.purchaseTracking(l.transactionInfo) }, n = { url: "/api/user/info", method: "GET", data: { userSessionId: l.userSessionId } }, t.request(n, e) } }).$inject = ["ApiService", "$scope", "UtitService", "$rootScope", "GTMService", "$cookies"], angular.module("appweb").controller("headerController", t)
}, function(e, n) {
    var t;
    (t = function(e, n, t, o) { return n.closeModel = function() { return $("#popupPolicies").modal("hide") } }).$inject = ["ApiService", "$scope", "$rootScope", "$location"], angular.module("appweb").controller("policiesPopupController", t)
}, function(e, n) {
    var t;
    (t = function(n, t, e, o) { return t.info, e.$on("$openPolicy", function() { var e; return e = { url: "/api/policy/info", method: "GET" }, n.request(e, function(e, n) { return t.info = n }) }) }).$inject = ["ApiService", "$scope", "$rootScope", "$location"], angular.module("appweb").controller("policyController", t)
}, function(e, n) {
    var t;
    (t = function(t, o, a) { return o.getHref = a.getHrefSearch, o.$watch("keyword", function(e) { var n; if (o.dataSearch = [], e) return n = { url: "/api/search/find", method: "GET", data: { keyword: e, limit: 10 } }, t.request(n, function(e, n) { return e ? a.notify(null, e.message) : n ? o.dataSearch = n : void 0 }) }) }).$inject = ["ApiService", "$scope", "UtitService"], angular.module("appweb").controller("searchController", t)
}, function(e, n) {
    var t;
    (t = function(t, o, g, a, i, n) {
        var r, c, l, u, s, d, m, p;
        return c = r = void 0, p = "", g.activeTab = "byMovie", g.flagShowBlockTicket = !1, console.log("_quickBuyTicketController"), g.clickTabNavTicket = function(e) { return g.activeTab = e, n(function() { return p === e ? (g.flagShowBlockTicket = !1, void(p = "")) : (p = e, g.flagShowBlockTicket = !0) }, 500) }, u = function(e) { var t; return t = [], _.map(e, function(n) { return _.map(n.sessions, function(e) { return e.name = e.showTime + ", " + i("translate")(n.version.toUpperCase()) + " - " + i("translate")(n.caption), t.push(e) }) }), t }, g.$watch("activeTab", function(e) {
                if (void 0 !== e) {
                    switch (e) {
                        case "byMovie":
                            g.cinemaConfig.options = [], g.dateConfig.options = [];
                            break;
                        case "byDate":
                            g.cinemaConfig.options = [], g.movieConfig.options = [];
                            break;
                        case "byCinema":
                            g.movieConfig.options = [], g.dateConfig.options = []
                    }
                    return g[e].currentValue = "all", g.sessionConfig.options = []
                }
            }), g.byMovie = { class: "btn-select-light", currentValue: "all", options: [], placeholder: { name: "Chọn phim", id: "all" }, keyValue: "id", keyName: "name", disablePlaceholder: !0, onChange: function(e) { if (void 0 !== e) return r = e.slug, m(e.id) } }, g.byDate = { class: "btn-select-light", currentValue: "all", options: [], placeholder: { name: "Chọn ngày", id: "all" }, keyValue: "id", keyName: "name", disablePlaceholder: !0, onChange: function(e) { if (void 0 !== e) return g.getCinemaByDate(e) } }, g.byCinema = { class: "btn-select-light", currentValue: "all", options: [], placeholder: { name: "Chọn rạp", id: "all" }, keyValue: "id", keyName: "name", disablePlaceholder: !0, onChange: function(e) { if (void 0 !== e) return s(e.code) } }, g.movieConfig = {
                class: "btn-select-light",
                currentValue: "all",
                options: [],
                placeholder: { name: "Chọn phim", id: "all" },
                keyValue: "id",
                keyName: "name",
                disablePlaceholder: !0,
                onChange: function(e) {
                    var n, t, o;
                    if (console.log(e), void 0 !== e)
                        if (r = e.slug, "byCinema" !== g.activeTab) { if ((n = _.find(g.byDate.options, function(e) { return e.id === g.byDate.currentValue })) && (o = n.showDate, t = _.find(e.dates, function(e) { return e.showDate === o }))) return g.sessionConfig.options = u(t.bundles) } else g.setDates(e.dates)
                }
            }, g.cinemaConfig = { class: "btn-select-light", currentValue: "all", options: [], placeholder: { name: "Chọn rạp", id: "all" }, keyValue: "id", keyName: "name", disablePlaceholder: !0, onChange: function(e) { if (void 0 !== e) return g.movieConfig.options = e.movies, g.setDates(e.dates) } }, g.dateConfig = { class: "btn-select-light", currentValue: "all", options: [], placeholder: { name: "Chọn ngày", id: "all" }, keyValue: "id", keyName: "name", disablePlaceholder: !0, onChange: function(e) { if (void 0 !== e) return g.sessionConfig.options = u(e.data) } }, g.sessionConfig = { class: "btn-select-light", currentValue: "all", options: [], placeholder: { name: "Chọn suất", sessionId: "all" }, keyValue: "sessionId", keyName: "name", disablePlaceholder: !0, onChange: function(e) { if (void 0 !== e) return c = e, g.triggerBuy ? g.buyTicket() : void 0 } }, m = function(e) {
                var n;
                if (void 0 !== e) return n = { url: "/api/session/movie/" + e, method: "GET", data: {} }, o.request(n, function(e, n) {
                    var t, o, a, i, r, c, l, u, s, d, m, p;
                    if (e) return console.error(e);
                    for (i = [], r = 0, u = n.length; r < u; r++) {
                        if (t = !1, 0 < (o = n[r]).dates.length)
                            for (c = 0, s = (m = o.dates).length; c < s; c++)
                                if (0 < (a = m[c]).bundles.length)
                                    for (l = 0, d = (p = a.bundles).length; l < d; l++) 0 < p[l].sessions.length && (t = !0);
                        t && i.push(o)
                    }
                    return g.cinemaConfig.options = i
                })
            }, s = function(e) { var n; if (void 0 !== e) return n = { url: "/api/session/cinema/" + e, method: "GET", data: {} }, o.request(n, function(e, n) { return e ? console.error(e) : g.movieConfig.options = n }) }, d = function(e) { var n; return n = { url: "/api/session/date", method: "GET", data: { movieIds: e.movieIds, cinemaIds: e.cinemaIds } }, o.request(n, function(e, n) { return e ? console.error(e) : g.cinemaConfig.options = n }) }, g.getCinemaByDate = function(e) { return console.log("quickBuyTicket getCinemaByDate", e), d(e) }, g.buyTicket = function() { var e, n; return void 0 === c ? alert("Bạn chưa chọn suất chiếu") : (e = "/book-ticket/" + r + "?cinemaId=" + c.cinemaId + "&sessionId=" + c.sessionId, (null != (n = t.userInfo) ? n.memberId : void 0) ? location.href = e : (a.setBookingTicketUrl(e), void t.$broadcast("open-login", null, { enableSkip: !1 }))) }, g.setDates = function(e, n) { var t; return t = [], _.map(e, function(e) { return t.push({ id: e.showDate, name: e.dayOfWeekLabel + ", " + e.showDate, data: e.bundles }) }), g.dateConfig.options = t }, l = function(e, n) { var t; return e ? a.notify(null, e.message) : (g.items = n, g.byMovie.options = n.movies, g.byDate.options = n.dates, g.byCinema.options = n.cinemas, g.reviewId && (t = _.findWhere(n.movies, { reviewId: g.reviewId }), !_.isEmpty(t)) ? g.byMovie.currentValue = t.id : void 0) },
            function() { var e; return e = { url: "/api/booking/list", method: "GET", data: {} }, o.request(e, l) }()
    }).$inject = ["$rootScope", "ApiService", "$scope", "UtitService", "$filter", "$timeout"], angular.module("appweb").controller("quickBuyTicket", t)
}, function(e, n) {
    var t;
    (t = function(t, o, a) { return o.init = function(e) { return o.item = e, o.item.point = Math.round(100 * o.item.point) / 100 }, o.showRating = function(e) { return null == e && (e = !0), console.log(o.item.activeRating), o.item.activeRating = e }, o.submit = function(e) { var n; return o.showRating(!1), n = { url: "/api/post/rating/" + o.item.id, method: "GET", data: { point: e } }, t.request(n, function(e, n) { return e ? a.notify(null, e.message) : (console.log(e, n), o.item.point = Math.round(100 * n.point) / 100, o.item.totalVotes = n.totalVotes) }) } }).$inject = ["ApiService", "$scope", "UtitService"], angular.module("appweb").controller("postController", t)
}, function(e, n) {
    var t;
    (t = function(e, n) { return console.log("init contentMovieController") }).$inject = ["$scope", "$rootScope"], angular.module("appweb").controller("contentMovieController", t)
}, function(e, n) {
    var t;
    (t = function(t, o, a, i, e) {
        var n;
        return a.isSubmit = !1, a.enableSkip = !1, a.callbackBuyTicket = void 0, a.userNotActive = !1, a.openLogin = !1, i.$on("$openLogin", function() { return a.openLogin = !0 }), a.openForgetPass = function() { return $(".modal").modal("hide"), setTimeout(function() { return $("#forgetpass-modal").modal("show") }, 500) }, a.closeModel = function() { return $("#login-modal").modal("hide") }, a.openModel = function() { return $("#login-modal").modal("show") },
            function() { if ($("#login-modal").on("hidden.bs.modal", function() { return t.removeBookingTicketUrl(), a.enableSkip = !1, _.isFunction(a.callbackBuyTicket) && a.callbackBuyTicket(), a.callbackBuyTicket = void 0, a.$apply(), console.log("hidemodel") }), i.$on("open-login", function(e, n, t) { return console.log(t, n), t.enableSkip && (a.callbackBuyTicket = n), a.enableSkip = t.enableSkip, i.$broadcast("$openLogin"), a.openModel() }), -1 === e.absUrl().indexOf("#tab_login_1") && -1 === e.absUrl().indexOf("qac=login") || (console.log("tab_login_1"), i.$broadcast("$openLogin"), a.openModel(), setTimeout(function() { return angular.element(document.querySelector("#tab_login_2")).removeClass("active"), angular.element(document.querySelector("#tab_login_1")).addClass("active"), angular.element(document.querySelector("#a_tab_login_2")).parent().removeClass("active"), angular.element(document.querySelector("#a_tab_login_1")).parent().addClass("active") }, 250)), -1 !== e.absUrl().indexOf("#tab_login_2") || -1 !== e.absUrl().indexOf("qac=register")) return console.log("tab_login_2"), i.$broadcast("$openLogin"), a.openModel(), setTimeout(function() { return angular.element(document.querySelector("#tab_login_2")).addClass("active"), angular.element(document.querySelector("#tab_login_1")).removeClass("active"), angular.element(document.querySelector("#a_tab_login_2")).parent().addClass("active"), angular.element(document.querySelector("#a_tab_login_1")).parent().removeClass("active") }, 250) }(), a.userInfo = { email: "", password: "", fullName: "", mobielPhone: "", confirmPassword: "", city: "", suburb: "", remember: !1 }, a.submit = function() { var e; if (a.message = null, !a.isSubmit) return a.isSubmit = !0, a.userNotActive = !1, e = { url: "/api/auth/login", method: "POST", data: a.userInfo }, o.request(e, n) }, n = function(e, n) { return a.isSubmit = !1, e ? (4001 === e.code && (a.userNotActive = !0), void(a.message = e.message)) : (i.userInfo = n, a.closeModel(), 0 < window.location.href.indexOf("book-ticket") ? window.location.reload() : t.redirectBookingTicketUrl()) }, a.reSendActiveCode = function() { var e, n; return n = { url: "/api/auth/reSendActiveCode", method: "POST", data: a.userInfo }, e = function(e, n) { return a.message = n.message }, o.request(n, e) }
    }).$inject = ["UtitService", "ApiService", "$scope", "$rootScope", "$location"], angular.module("appweb").controller("loginController", t)
}, function(e, n) {
    var t;
    (t = function(n, o, e, a) { var t; return o.message = "", o.isSubmit = !1, o.captchaConfig = { type: "register", refesh: function() { return console.log("init Refesh") } }, o.openPolicy = function() { return e.$broadcast("$openPolicy") }, o.user = { email: "", password: "", fullName: "", mobilePhone: "", confirmPassword: "", city: "", suburb: "", dateOfBirth: "", address: "" }, o.citySelect = { currentValue: "all", options: [], disablePlaceholder: !0, placeholder: { name: "Chọn thành phố", id: "all" }, keyValue: "id", keyName: "name" }, o.districtSelect = { currentValue: "all", options: [], disablePlaceholder: !0, placeholder: { name: "Quận", id: "all" }, keyValue: "id", keyName: "name" }, o.genderSelect = { currentValue: "3d", options: [{ id: "Male", name: "Nam" }, { id: "Female", name: "Nữ" }], disablePlaceholder: !0, placeholder: { name: "Chọn giới tính", id: "3d" }, keyValue: "id", keyName: "name" }, o.$watch("genderSelect.currentValue", function(e) { return o.user.gender = e }), o.$watch("districtSelect.currentValue", function(e) { return o.user.suburb = e }), o.$watch("citySelect.currentValue", function(e) { var n, t; if ("all" !== e && void 0 !== e) return n = _.findWhere(o.citySelect.options, { id: e }), o.user.city = n.name, t = [], _.map(n.district, function(e) { return t.push({ id: e, name: e }) }), o.districtSelect.options = t }), t = { url: "/api/city/find", method: "GET", data: {} }, n.request(t, function(e, n) { var t; return e ? a.notify(null, e.message) : (o.citySelect.options = n, (t = _.findWhere(n, { name: o.user.city })) ? (o.citySelect.currentValue = t.id, o.districtSelect.currentValue = o.user.suburb) : void 0) }), o.submit = function() { var e; if (o.message = null, !o.isSubmit) return o.isSubmit = !0, e = /^(\+84|0)(\d{9}|\d{10})$/i, o.user.mobilePhone.match(e) ? o.user.city && "all" !== o.user.city ? o.user.suburb && "all" !== o.user.suburb ? o.user.gender && "3d" !== o.user.gender ? o.user.dateOfBirth ? (t = { url: "/api/auth/register", method: "POST", data: o.user }, n.request(t, function(e, n) { return o.isSubmit = !1, e ? (o.message = e.message, void o.captchaConfig.refesh()) : (o.message = n.message, 0 === n.code && (o.message = "", o.user = { email: "", password: "", fullName: "", mobilePhone: "", confirmPassword: "", city: "", suburb: "", dateOfBirth: "", address: "" }, o.citySelect.currentValue = "all", o.districtSelect.currentValue = "all", o.captchaConfig.refesh(), o.closeModel(), $(".btn-select-input.date").datepicker("setDate", null), $("#success-modal").modal("show")), console.log(n)) })) : (o.message = "Chưa chọn ngày sinh!", void(o.isSubmit = !1)) : (o.message = "Chưa chọn giới tính!", void(o.isSubmit = !1)) : (o.message = "Chưa chọn quận!", void(o.isSubmit = !1)) : (o.message = "Chưa chọn thành phố!", void(o.isSubmit = !1)) : (o.message = "Số điện thoại chưa đúng!", void(o.isSubmit = !1)) }, o.closeModelSuccess = function() { return $("#success-modal").modal("hide") } }).$inject = ["ApiService", "$scope", "$rootScope", "UtitService"], angular.module("appweb").controller("registerController", t)
}, function(e, n) {
    var t;
    (t = function(n, t, e) { return t.message = "", t.isSubmit = !1, t.captchaConfig = { type: "forgetPass", refesh: function() { return console.log("init Refesh") } }, t.item = { email: "", captcha: "" }, t.closeModelForget = function() { return $("#forgetpass-modal").modal("hide") }, t.submit = function() { var e; if (t.message = null, !t.isSubmit) return t.isSubmit = !0, e = { url: "/api/auth/forgetPassword", method: "POST", data: t.item }, n.request(e, function(e, n) { return t.isSubmit = !1, t.captchaConfig.refesh(), e ? (t.message = e.message, void(t.item.captcha = "")) : (t.message = n.message, console.log(n)) }) } }).$inject = ["ApiService", "$scope", "$rootScope"], angular.module("appweb").controller("forgetPassController", t)
}, function(e, n) {
    var t;
    (t = function(e, n) { return { restrict: "E", scope: { model: "=ngModel" }, template: "<a class=\"btn btn-select {{model.class ||'login location'}}\">\n\n   <span class=\"btn-select-value\">{{items[curentIndex][model.keyName] || model.placeholder[model.keyName] | translate}}</span>\n   <span class=\"btn-select-arrow\"></span>\n   <select ng-change='onChange()' ng-model=\"curentIndex\">\n     <option ng-if='!model.disablePlaceholder'\n       ng-selected='model.placeholder[model.keyValue] == model.currentValue'\n       ng-value='-1'>\n       {{model.placeholder[model.keyName] | translate}}\n     </option>\n     <option ng-repeat='item in items' \n       ng-selected='item[model.keyValue] == model.currentValue'\n       ng-value='{{$index}}'>\n       {{item[model.keyName] | translate}}\n     </option>\n   </select>\n </a>", link: function(a, e, n) { return a.curentIndex = -1, a.model.changeCurrentIndex = function(e) { return a.curentIndex = e }, a.onChange = function() { var e; if (e = -1 < parseInt(a.curentIndex) ? a.items[a.curentIndex][a.model.keyValue] : a.model.placeholder[a.model.keyValue], a.model.currentValue = e, _.isFunction(a.model.gotoHref)) return a.model.gotoHref(e) }, a.$watch("model", function(e) { var n, t, o; if (void 0 !== e) return a.items = e.options, (n = {})[e.keyValue] = e.currentValue.toString(), _.isFunction(a.model.onChange) && (o = _.findWhere(a.model.options, n), a.model.onChange(o)), t = _.findIndex(a.items, n), a.curentIndex = t }, !0) } } }).$inject = ["$rootScope", "$document"], angular.module("appweb").directive("galaxySelect", t)
}, function(e, n) {
    var t;
    (t = function(o, a) { return { restrict: "E", scope: { config: "=" }, template: '<div class="captcha-wrap">\n  <div ng-bind-html="captchaImage" class="captcha"></div>\n  <div class="captcha-refesh">\n    <a ng-click="refeshCaptcha()"><i class="icon-loading"></i></a>\n  </div>\n</div>', link: function(t, e, n) { return t.refeshCaptcha = function() { var e, n; return e = { url: "/api/auth/captcha/" + ((null != (n = t.config) ? n.type : void 0) || "support"), method: "GET", data: {} }, o.request(e, function(e, n) { return t.captchaImage = a.trustAsHtml(n) }) }, t.$watch("config", function(e) { if (void 0 !== e) return t.config.refesh = t.refeshCaptcha, t.refeshCaptcha() }, !0) } } }).$inject = ["ApiService", "$sce"], angular.module("appweb").directive("galaxyCaptcha", t)
}, function(e, n) {
    var t;
    (t = function(e, n) { return { restrict: "E", scope: { model: "=ngModel", onChange: "=ngOnChange" }, template: '<a class="btn btn-select login location datepicker">\n   <input type="text" name="" class="btn-select-input date" placeholder="Chọn ngày (dd/mm/yyyy)"/>\n   <span class="select-calendar">\n     <i class="icon-calendar"></i>\n   </span>\n</a>', link: function(a, i, e) { var n; return n = function(n) { var t, o, e; if ((t = $(i).find(".datepicker")).datepicker({ format: "dd/mm/yyyy", autoclose: !0, constrainInput: !1 }), t.off("changeDate"), t.on("changeDate", function(e) { var n; return n = moment(e.date).format("DD/MM/YYYY"), a.model = n, a.onChange && a.onChange(n), setTimeout(function() { return a.$apply() }, 1) }), e = function() { var e; if (e = o.val(), moment(e, "DD/MM/YYYY", !0).isValid()) return n = e, t.datepicker("setDate", e) }, (o = $(i).find(".btn-select-input.date")).keyup(e), o.focus(e), n) return t.datepicker("setDate", n) }, a.$watch("model", function(e) { return void 0 === e && (e = moment(new Date).format("DD/MM/YYYY")), n(e) }) } } }).$inject = ["$rootScope", "$document"], angular.module("appweb").directive("galaxyDatepicker", t)
}, function(e, n) {
    var t;
    (t = function(e, n) { return { restrict: "E", scope: { title: "=", trailer: "=ngTrailer" }, template: "<a class='btn primary animated fadeInUp' ng-click='submit()'> trailer</a>", link: function(n, e, t) { return n.submit = function() { var e; return e = "<iframe width='100%', height='100%', src='" + n.trailer.replace("watch?v=", "embed/") + "?autoplay=1&controls=1&showinfo=1', frameborder='0', allowfullscreen=''/>", $("#trailerModal").modal("show"), $("#galaxyVideo").html(e), console.log(n.title), $("#trailerModal .modal-title").text(n.title) }, $("#trailerModal").on("hide.bs.modal", function() { return $("#galaxyVideo").empty() }) } } }).$inject = ["$rootScope", "$document"], angular.module("appweb").directive("galaxyWatchTrailer", t)
}, function(e, n) {
    var t;
    (t = function(e, n, o, a, i) { return { restrict: "E", scope: { slug: "=ngMovieSlug" }, template: '<form class="search-form" ng-submit=\'submit()\'>\n  <div class="input-append">\n    <input\n    placeholder="{{\'Tìm tên phim, diễn viên\' | translate}}..."\n    class="search-box"\n    type=\'text\'\n    autocomplete=\'off\'\n    ng-model=\'searchKey\'\n    ng-model-options=\'{ updateOn: "default blur", debounce: { default: 500, blur: 0 } }\',\n    ng-change=\'search(searchKey)\'\n    />\n    <button type="submit" class="search-btn"><i class="icon-search"></i></button>\n    <ul id="search-list" class="search-list" ng-if=\'dataSearch && dataSearch.items && dataSearch.items.length>0\'>\n      <li ng-repeat="item in dataSearch.items | limitTo:10">\n        <a href=\'{{getHref(item)}}\'>{{item.name}}</a>\n      </li>\n    </ul>\n  </div>\n</form>', link: function(t, e, n) { return t.dataSearch = [], t.searchKey = "", t.submit = function() { return location.href = "/tim-kiem?keyword=" + t.searchKey }, t.getHref = i.getHrefSearch, t.search = function(e) { var n; return _.isEmpty(e) ? t.dataSearch = [] : (n = { url: "/api/search/find", method: "GET", data: { keyword: e, limit: 10 } }, o.request(n, function(e, n) { if (!e) return a(function() { if (n) return t.dataSearch = n }, 1) })) } } } }).$inject = ["$rootScope", "$document", "ApiService", "$timeout", "UtitService"], angular.module("appweb").directive("galaxySearchBar", t)
}]);