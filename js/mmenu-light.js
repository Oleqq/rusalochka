!(function (t) {
    var e = {};
    function n(o) {
        if (e[o]) return e[o].exports;
        var s = (e[o] = { i: o, l: !1, exports: {} });
        return t[o].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var s in t)
                    n.d(
                        o,
                        s,
                        function (e) {
                            return t[e];
                        }.bind(null, s)
                    );
            return o;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 0));
})([
    function (t, e, n) {
        "use strict";
        n.r(e);
        var o = (function () {
                function t(t) {
                    var e = this;
                    (this.listener = function (t) {
                        (t.matches ? e.matchFns : e.unmatchFns).forEach(function (t) {
                            t();
                        });
                    }),
                        (this.toggler = window.matchMedia(t)),
                        this.toggler.addListener(this.listener),
                        (this.matchFns = []),
                        (this.unmatchFns = []);
                }
                return (
                    (t.prototype.add = function (t, e) {
                        this.matchFns.push(t), this.unmatchFns.push(e), (this.toggler.matches ? t : e)();
                    }),
                    t
                );
            })(),
            s = function (t) {
                return Array.prototype.slice.call(t);
            },
            i = function (t, e) {
                return s((e || document).querySelectorAll(t));
            },
            r = "mm-spn",
            a = (function () {
                function t(t, e, n, o, s) {
                    (this.node = t),
                        (this.title = e),
                        (this.slidingSubmenus = o),
                        (this.selectedClass = n),
                        this.node.classList.add(r),
                        this.node.classList.add(r + "--" + s),
                        this.node.classList.add(r + "--" + (this.slidingSubmenus ? "navbar" : "vertical")),
                        this._setSelectedl(),
                        this._initAnchors();
                }
                return (
                    Object.defineProperty(t.prototype, "prefix", {
                        get: function () {
                            return r;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (t.prototype.openPanel = function (t) {
                        var e = t.parentElement;
                        if (this.slidingSubmenus) {
                            var n = t.dataset.mmSpnTitle;
                            e === this.node
                                ? this.node.classList.add(r + "--main")
                                : (this.node.classList.remove(r + "--main"),
                                  n ||
                                      s(e.children).forEach(function (t) {
                                          t.matches("a, span") && (n = t.textContent);
                                      })),
                                n || (n = this.title),
                                (this.node.dataset.mmSpnTitle = n),
                                i(".mm-spn--open", this.node).forEach(function (t) {
                                    t.classList.remove(r + "--open"), t.classList.remove(r + "--parent");
                                }),
                                t.classList.add(r + "--open"),
                                t.classList.remove(r + "--parent");
                            for (var o = t.parentElement.closest("ul"); o; ) o.classList.add(r + "--open"), o.classList.add(r + "--parent"), (o = o.parentElement.closest("ul"));
                        } else {
                            var a = t.matches(".mm-spn--open");
                            i(".mm-spn--open", this.node).forEach(function (t) {
                                t.classList.remove(r + "--open");
                            }),
                                t.classList[a ? "remove" : "add"](r + "--open");
                            for (var c = t.parentElement.closest("ul"); c; ) c.classList.add(r + "--open"), (c = c.parentElement.closest("ul"));
                        }
                    }),
                    (t.prototype._setSelectedl = function () {
                        var t = i("." + this.selectedClass, this.node),
                            e = t[t.length - 1],
                            n = null;
                        e && (n = e.closest("ul")), n || (n = this.node.querySelector("ul")), this.openPanel(n);
                    }),
                    (t.prototype._initAnchors = function () {
                        var t = this;
                        this.node.addEventListener("click", function (e) {
                            var n = e.target,
                                o = !1;
                            (o =
                                (o =
                                    (o =
                                        o ||
                                        (function (t) {
                                            return !!t.matches("a");
                                        })(n)) ||
                                    (function (e) {
                                        var n;
                                        return (
                                            !!(n = e.closest("span") ? e.parentElement : !!e.closest("li") && e) &&
                                            (s(n.children).forEach(function (e) {
                                                e.matches("ul") && t.openPanel(e);
                                            }),
                                            !0)
                                        );
                                    })(n)) ||
                                (function (e) {
                                    var n = i(".mm-spn--open", e),
                                        o = n[n.length - 1];
                                    if (o) {
                                        var s = o.parentElement.closest("ul");
                                        if (s) return t.openPanel(s), !0;
                                    }
                                    return !1;
                                })(n)) && e.stopImmediatePropagation();
                        });
                    }),
                    t
                );
            })(),
            c = (function () {
                function t(t, e) {
                    var n = this;
                    void 0 === t && (t = null),
                        (this.wrapper = document.createElement("div")),
                        this.wrapper.classList.add("mm-ocd"),
                        this.wrapper.classList.add("mm-ocd--" + e),
                        (this.content = document.createElement("div")),
                        this.content.classList.add("mm-ocd__content"),
                        this.wrapper.append(this.content),
                        (this.backdrop = document.createElement("div")),
                        this.backdrop.classList.add("mm-ocd__backdrop"),
                        this.wrapper.append(this.backdrop),
                        document.body.append(this.wrapper),
                        t && this.content.append(t);
                    var o = function (t) {
                        n.close(), t.stopImmediatePropagation();
                    };
                    this.backdrop.addEventListener("touchstart", o, { passive: !0 }), this.backdrop.addEventListener("mousedown", o, { passive: !0 });
                }
                return (
                    Object.defineProperty(t.prototype, "prefix", {
                        get: function () {
                            return "mm-ocd";
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (t.prototype.open = function () {
                        this.wrapper.classList.add("mm-ocd--open"), document.body.classList.add("mm-ocd-opened");
                    }),
                    (t.prototype.close = function () {
                        this.wrapper.classList.remove("mm-ocd--open"), document.body.classList.remove("mm-ocd-opened");
                    }),
                    t
                );
            })(),
            d = (function () {
                function t(t, e) {
                    void 0 === e && (e = "all"), (this.menu = t), (this.toggler = new o(e));
                }
                return (
                    (t.prototype.navigation = function (t) {
                        var e = this;
                        if (!this.navigator) {
                            var n = (t = t || {}).title,
                                o = void 0 === n ? "Menu" : n,
                                s = t.selectedClass,
                                i = void 0 === s ? "Selected" : s,
                                r = t.slidingSubmenus,
                                c = void 0 === r || r,
                                d = t.theme,
                                l = void 0 === d ? "light" : d;
                            (this.navigator = new a(this.menu, o, i, c, l)),
                                this.toggler.add(
                                    function () {
                                        return e.menu.classList.add(e.navigator.prefix);
                                    },
                                    function () {
                                        return e.menu.classList.remove(e.navigator.prefix);
                                    }
                                );
                        }
                        return this.navigator;
                    }),
                    (t.prototype.offcanvas = function (t) {
                        var e = this;
                        if (!this.drawer) {
                            var n = (t = t || {}).position,
                                o = void 0 === n ? "left" : n;
                            this.drawer = new c(null, o);
                            var s = document.createComment("original menu location");
                            this.menu.after(s),
                                this.toggler.add(
                                    function () {
                                        e.drawer.content.append(e.menu);
                                    },
                                    function () {
                                        e.drawer.close(), s.after(e.menu);
                                    }
                                );
                        }
                        return this.drawer;
                    }),
                    t
                );
            })();
        e.default = d;
        window.MmenuLight = d;
    },
]);
