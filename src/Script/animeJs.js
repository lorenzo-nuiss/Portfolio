import anime from 'animejs/lib/anime.es.js';

/* eslint-disable */
export var animejsPlugins = (function (e) {
    "use strict";
    return (
        (e.scrollContainer = function () {

            var e,
                nbrSlider = 3,
                t,
                o,
                n,
                l,
                i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                s = i.sectionSelector,
                c = i.wrapperSelector,
                r = i.duration,
                d = void 0 === r ? 1e3 : r,
                u = i.easing,
                a = void 0 === u ? "easeInOutQuad" : u,
                v = i.onBegin,
                f = void 0 === v ? null : v,
                m = i.onComplete,
                p = void 0 === m ? null : m,
                h = document.querySelector(s),
                E = document.querySelector(c),
                y = {
                    slider: 1,
                    scrollPosition: 0,
                    sectionHeight: h.offsetHeight,
                    animating: !1,
                    contentEl: E,
                    scrollReachedEndPosition: "up",
                    beforeInitStyles: {},
                    scroll: { position: 0, clicked: !1 },
                },
                w =
                    ((e = function (e) {
                        var t = y.scrollPosition,
                            o = y.sectionHeight,
                            n = y.animating,
                            l = y.contentEl,
                            i = y.scrollReachedEndPosition;

                        if (!n && e !== i) {

                            var s = "down" === e && y.slider <= nbrSlider ? t + o : "down" === e && y.slider >= nbrSlider ? t = t : t - o;
                            anime({
                                targets: l,
                                scrollTop: [t, s],
                                duration: d,
                                easing: a,
                                begin: function (e) {
                                    (y.animating = !0), f && f(y.slider, e);
                                },
                                complete: function (t) {
                                    (y.animating = !1),
                                        (y.scrollPosition = s),
                                        (y.scrollReachedEndPosition = (function () {
                                            var e = y.contentEl,
                                                t = y.sectionHeight,
                                                o = e.scrollHeight - t,
                                                n = e.scrollTop;
                                            return n === o ? "down" : 0 === n ? "up" : "";
                                        })())

                                    if ("down" === e) {
                                        if (y.slider <= nbrSlider) {
                                            y.slider++
                                        } else {
                                            return
                                        }
                                    } else {
                                        y.slider--
                                    }
                                    p && p(y.slider, t),
                                        y.scroll.clicked && L();
                                },
                            });
                        }
                    }),
                        (t = 300),
                        (l = !1),
                        function i() {
                            if (l) return (o = arguments), void (n = this);
                            e.apply(this, arguments),
                                (l = !0),
                                setTimeout(function () {
                                    (l = !1), o && (i.apply(n, o), (o = n = null));
                                }, t);
                        });
            function g(e) {
                e.preventDefault(), e.deltaY < 0 ? w("up") : e.deltaY > 0 && w("down");
            }
            function Y(e) {
                var t = e.target.offsetHeight,
                    o = e.clientY / t;
                (o = o.toFixed(1)), w(o >= 0.5 ? "down" : "up");

            }
            function b(e) {
                (y.scroll.clicked = !0), (y.scroll.position = e.clientY);
            }
            function S(e) {
                if (y.scroll.clicked) {
                    var t = e.clientY;
                    t < y.scroll.position && w("up"), t > y.scroll.position && w("down");
                }
            }
            function L() {
                (y.scroll.clicked = !1), (y.scroll.position = 0);
            }
            function H() {
                (y.sectionHeight = h.offsetHeight),
                    (y.contentEl.scrollTop = (y.slider - 1) * y.sectionHeight),
                    (y.scrollPosition = y.contentEl.scrollTop);
                // console.log(y.scrollPosition)
            }
            return (
                (function () {
                    if (document.documentElement && y.contentEl) {

                        (window.scrollTop = 0),
                            (y.beforeInitStyles.documentOverflowY =
                                document.documentElement.style.overflowY),
                            (document.documentElement.style.overflowY = "hidden"),
                            (document.documentElement.style.height = "100%"),
                            (document.body.style.height = "100%"),
                            (y.beforeInitStyles.contentElOverflowY =
                                y.contentEl.style.overflowY),
                            (y.beforeInitStyles.contentElOverflowX =
                                y.contentEl.style.overflowX),
                            (function (e) {
                                e.style.height = "100%";
                                var t = [];
                                for (var o in e) {
                                    if ("BODY" == (e = e.parentNode).nodeName) break;
                                    t.push(e);
                                }

                                t.forEach(function (e) {
                                    if (e) {
                                        return (e.style.height = "100%");
                                    }
                                });
                            })(y.contentEl),
                            (y.contentEl.style.overflowY = "scroll"),
                            (y.contentEl.style.overflowX = "hidden"),
                            (y.contentEl.style.willChange = "scroll-position"),
                            (y.contentEl.scrollTop = 0);
                        var e = document.createElement("div");
                        if (e) {

                            e.classList.add("mystyleScroller");
                            (e.style.position = "fixed"),
                                (e.style.height = "100%"),
                                (e.style.width = "20px"),
                                (e.style.top = "0"),
                                (e.style.right = "0"),
                                y.contentEl.appendChild(e),
                                window.addEventListener("resize", H),
                                document.addEventListener("touchmove", g, { passive: !1 }),
                                document.addEventListener("wheel", g, { passive: !1 }),
                                e.addEventListener("mousedown", b, { passive: !1 }),
                                e.addEventListener("mousemove", S, { passive: !1 }),
                                e.addEventListener("mouseup", L, { passive: !1 }),
                                e.addEventListener("click", Y, { passive: !1 });

                        }

                    }
                }

                )
                    (),
                {
                    destroy: function () {
                        let mystyleScroller = document.getElementsByClassName("myStyleScroller")

                        if (document && y.contentEl && document.documentElement && document.body) {
                            console.log("1er if");
                            // mystyleScroller.remove();

                            (window.scrollTop = 10),
                                (y.contentEl.scrollTop = 10);

                            (document.documentElement.style.overflowY =
                                y.beforeInitStyles.documentOverflowY),
                                (y.contentEl.style.overflowY =
                                    y.beforeInitStyles.contentElOverflowY),
                                (y.contentEl.style.overflowX =
                                    y.beforeInitStyles.contentElOverflowX),
                                (y.contentEl.removeAttribute("style")),
                                // y.contentEl.style.removeProperty("will-change")
                                (document.documentElement.style.height = null),
                                (document.documentElement.style.overflowY = "auto"),
                                (document.documentElement.style.removeProperty("overflow-y")),
                                (document.documentElement.removeAttribute("style")),
                                (document.body.style.height = null),
                                (document.body.removeAttribute("style")),
                                document.removeEventListener("touchmove", g, { passive: !1 }),
                                document.removeEventListener("wheel", g, { passive: !1 }),

                                e.removeEventListener("mousedown", b, { passive: !1 }),
                                e.removeEventListener("mousemove", S, { passive: !1 }),
                                e.removeEventListener("mouseup", L, { passive: !1 }),
                                e.removeEventListener("click", Y, { passive: !1 });
                            window.removeEventListener("resize", H);


                        }
                        // let wrapper = document.getElementsByClassName("wrapper")
                        let wrapper = document.querySelectorAll(".wrapper")

                        wrapper.forEach(function (e) {
                            // Now do something with my button
                            e.style.removeProperty("opacity")
                        });


                        console.log(y.contentEl.style);
                        console.log(document.documentElement);
                        console.log(document.body);

                    },
                }
            );
        }),
        e
    );
})({});
