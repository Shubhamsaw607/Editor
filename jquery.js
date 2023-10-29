!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(ne, e) {
    "use strict";
    function g(e) {
        return null != e && e === e.window
    }
    var re = []
      , t = Object.getPrototypeOf
      , ie = re.slice
      , y = re.flat ? function(e) {
        return re.flat.call(e)
    }
    : function(e) {
        return re.concat.apply([], e)
    }
      , s = re.push
      , oe = re.indexOf
      , n = {}
      , r = n.toString
      , ae = n.hasOwnProperty
      , i = ae.toString
      , o = i.call(Object)
      , se = {}
      , v = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , T = ne.document
      , a = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var r, i, o = (n = n || T).createElement("script");
        if (o.text = e,
        t)
            for (r in a)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e
    }
    var u = "3.7.0"
      , l = /HTML$/i
      , ue = function(e, t) {
        return new ue.fn.init(e,t)
    };
    function c(e) {
        var t = !!e && "length"in e && e.length
          , n = h(e);
        return !v(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function le(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    ue.fn = ue.prototype = {
        jquery: u,
        constructor: ue,
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = ue.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return ue.each(this, e)
        },
        map: function(n) {
            return this.pushStack(ue.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(ue.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(ue.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: re.sort,
        splice: re.splice
    },
    ue.extend = ue.fn.extend = function() {
        var e, t, n, r, i, o = arguments[0] || {}, a = 1, s = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o,
        o = arguments[a] || {},
        a++),
        "object" == typeof o || v(o) || (o = {}),
        a === s && (o = this,
        a--); a < s; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && o !== n && (u && n && (ue.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t],
                    i = r && !Array.isArray(i) ? [] : r || ue.isPlainObject(i) ? i : {},
                    r = !1,
                    o[t] = ue.extend(u, i, n)) : void 0 !== n && (o[t] = n));
        return o
    }
    ,
    ue.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== r.call(e)) && (!(e = t(e)) || "function" == typeof (e = ae.call(e, "constructor") && e.constructor) && i.call(e) === o)
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (c(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        text: function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i)
                    return e.textContent;
                if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += ue.text(t);
            return n
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (c(Object(e)) ? ue.merge(t, "string" == typeof e ? [e] : e) : s.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : oe.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !l.test(t || e && e.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) != a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (c(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return y(a)
        },
        guid: 1,
        support: se
    }),
    "function" == typeof Symbol && (ue.fn[Symbol.iterator] = re[Symbol.iterator]),
    ue.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = re.pop
      , fe = re.sort
      , pe = re.splice
      , de = "[\\x20\\t\\r\\n\\f]"
      , he = new RegExp("^" + de + "+|((?:^|[^\\\\])(?:\\\\.)*)" + de + "+$","g");
    ue.contains = function(e, t) {
        t = t && t.parentNode;
        return e === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
    }
    ;
    var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function p(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    ue.escapeSelector = function(e) {
        return (e + "").replace(f, p)
    }
    ;
    var ge = T
      , ye = s;
    !function() {
        var e, b, w, o, a, T, n, C, d, r, S = ye, x = ue.expando, E = 0, i = 0, s = W(), c = W(), u = W(), h = W(), l = function(e, t) {
            return e === t && (a = !0),
            0
        }, f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t = "(?:\\\\[\\da-fA-F]{1,6}" + de + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p = "\\[" + de + "*(" + t + ")(?:" + de + "*([*^$|!~]?=)" + de + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + de + "*\\]", g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)", y = new RegExp(de + "+","g"), v = new RegExp("^" + de + "*," + de + "*"), m = new RegExp("^" + de + "*([>+~]|" + de + ")" + de + "*"), k = new RegExp(de + "|>"), j = new RegExp(g), A = new RegExp("^" + t + "$"), D = {
            ID: new RegExp("^#(" + t + ")"),
            CLASS: new RegExp("^\\.(" + t + ")"),
            TAG: new RegExp("^(" + t + "|[*])"),
            ATTR: new RegExp("^" + p),
            PSEUDO: new RegExp("^" + g),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + de + "*(even|odd|(([+-]|)(\\d*)n|)" + de + "*(?:([+-]|)" + de + "*(\\d+)|))" + de + "*\\)|)","i"),
            bool: new RegExp("^(?:" + f + ")$","i"),
            needsContext: new RegExp("^" + de + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + de + "*((?:-\\d)?\\d*)" + de + "*\\)|)(?=[^-]|$)","i")
        }, N = /^(?:input|select|textarea|button)$/i, q = /^h\d$/i, L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H = /[+~]/, O = new RegExp("\\\\[\\da-fA-F]{1,6}" + de + "?|\\\\([^\\r\\n\\f])","g"), P = function(e, t) {
            e = "0x" + e.slice(1) - 65536;
            return t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }, R = function() {
            U()
        }, M = Y(function(e) {
            return !0 === e.disabled && le(e, "fieldset")
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            S.apply(re = ie.call(ge.childNodes), ge.childNodes),
            re[ge.childNodes.length].nodeType
        } catch (e) {
            S = {
                apply: function(e, t) {
                    ye.apply(e, ie.call(t))
                },
                call: function(e) {
                    ye.apply(e, ie.call(arguments, 1))
                }
            }
        }
        function I(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (U(e),
            e = e || T,
            C)) {
                if (11 !== p && (u = L.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return S.call(n, a),
                                n
                        } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i)
                            return S.call(n, a),
                            n
                    } else {
                        if (u[2])
                            return S.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && e.getElementsByClassName)
                            return S.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (!(h[t + " "] || d && d.test(t))) {
                    if (c = t,
                    f = e,
                    1 === p && (k.test(t) || m.test(t))) {
                        for ((f = H.test(t) && X(e.parentNode) || e) == e && se.scope || ((s = e.getAttribute("id")) ? s = ue.escapeSelector(s) : e.setAttribute("id", s = x)),
                        o = (l = V(t)).length; o--; )
                            l[o] = (s ? "#" + s : ":scope") + " " + G(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return S.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        h(t, !0)
                    } finally {
                        s === x && e.removeAttribute("id")
                    }
                }
            }
            return te(t.replace(he, "$1"), e, n, r)
        }
        function W() {
            var n = [];
            function r(e, t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()],
                r[e + " "] = t
            }
            return r
        }
        function F(e) {
            return e[x] = !0,
            e
        }
        function $(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function B(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && M(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function _(a) {
            return F(function(o) {
                return o = +o,
                F(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function X(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function U(e) {
            var t, e = e ? e.ownerDocument || e : ge;
            return e != T && 9 === e.nodeType && e.documentElement && (n = (T = e).documentElement,
            C = !ue.isXMLDoc(T),
            r = n.matches || n.webkitMatchesSelector || n.msMatchesSelector,
            ge != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", R),
            se.getById = $(function(e) {
                return n.appendChild(e).id = ue.expando,
                !T.getElementsByName || !T.getElementsByName(ue.expando).length
            }),
            se.disconnectedMatch = $(function(e) {
                return r.call(e, "*")
            }),
            se.scope = $(function() {
                return T.querySelectorAll(":scope")
            }),
            se.cssHas = $(function() {
                try {
                    return void T.querySelector(":has(*,:jqfake)")
                } catch (e) {
                    return 1
                }
            }),
            se.getById ? (b.filter.ID = function(e) {
                var t = e.replace(O, P);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && C) {
                    e = t.getElementById(e);
                    return e ? [e] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var t = e.replace(O, P);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && C) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }
            ,
            b.find.CLASS = function(e, t) {
                if (void 0 !== t.getElementsByClassName && C)
                    return t.getElementsByClassName(e)
            }
            ,
            d = [],
            $(function(e) {
                var t;
                n.appendChild(e).innerHTML = "<a id='" + x + "' href='' disabled='disabled'></a><select id='" + x + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || d.push("\\[" + de + "*(?:value|" + f + ")"),
                e.querySelectorAll("[id~=" + x + "-]").length || d.push("~="),
                e.querySelectorAll("a#" + x + "+*").length || d.push(".#.+[+~]"),
                e.querySelectorAll(":checked").length || d.push(":checked"),
                (t = T.createElement("input")).setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                n.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"),
                (t = T.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || d.push("\\[" + de + "*name" + de + "*=" + de + "*(?:''|\"\")")
            }),
            se.cssHas || d.push(":has"),
            d = d.length && new RegExp(d.join("|")),
            l = function(e, t) {
                if (e === t)
                    return a = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !se.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ge && I.contains(ge, e) ? -1 : t === T || t.ownerDocument == ge && I.contains(ge, t) ? 1 : o ? oe.call(o, e) - oe.call(o, t) : 0 : 4 & n ? -1 : 1)
            }
            ),
            T
        }
        for (e in I.matches = function(e, t) {
            return I(e, null, null, t)
        }
        ,
        I.matchesSelector = function(e, t) {
            if (U(e),
            C && !h[t + " "] && (!d || !d.test(t)))
                try {
                    var n = r.call(e, t);
                    if (n || se.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    h(t, !0)
                }
            return 0 < I(t, T, null, [e]).length
        }
        ,
        I.contains = function(e, t) {
            return (e.ownerDocument || e) != T && U(e),
            ue.contains(e, t)
        }
        ,
        I.attr = function(e, t) {
            (e.ownerDocument || e) != T && U(e);
            var n = b.attrHandle[t.toLowerCase()]
              , n = n && ae.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
            return void 0 !== n ? n : e.getAttribute(t)
        }
        ,
        I.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ue.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (a = !se.sortStable,
            o = !se.sortStable && ie.call(e, 0),
            fe.call(e, l),
            a) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    pe.call(e, n[r], 1)
            }
            return o = null,
            e
        }
        ,
        ue.fn.uniqueSort = function() {
            return this.pushStack(ue.uniqueSort(ie.apply(this)))
        }
        ,
        (b = ue.expr = {
            cacheLength: 50,
            createPseudo: F,
            match: D,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(O, P),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(O, P),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = V(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(O, P).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return le(e, t)
                    }
                },
                CLASS: function(e) {
                    var t = s[e + " "];
                    return t || (t = new RegExp("(^|" + de + ")" + e + "(" + de + "|$)")) && s(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(e) {
                        e = I.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(y, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(d, e, t, h, g) {
                    var y = "nth" !== d.slice(0, 3)
                      , v = "last" !== d.slice(-4)
                      , m = "of-type" === e;
                    return 1 === h && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u = y != v ? "nextSibling" : "previousSibling", l = e.parentNode, c = m && e.nodeName.toLowerCase(), f = !n && !m, p = !1;
                        if (l) {
                            if (y) {
                                for (; u; ) {
                                    for (o = e; o = o[u]; )
                                        if (m ? le(o, c) : 1 === o.nodeType)
                                            return !1;
                                    s = u = "only" === d && !s && "nextSibling"
                                }
                                return !0
                            }
                            if (s = [v ? l.firstChild : l.lastChild],
                            v && f) {
                                for (p = (a = (r = (i = l[x] || (l[x] = {}))[d] || [])[0] === E && r[1]) && r[2],
                                o = a && l.childNodes[a]; o = ++a && o && o[u] || (p = a = 0) || s.pop(); )
                                    if (1 === o.nodeType && ++p && o === e) {
                                        i[d] = [E, a, p];
                                        break
                                    }
                            } else if (f && (p = a = (r = (i = e[x] || (e[x] = {}))[d] || [])[0] === E && r[1]),
                            !1 === p)
                                for (; (o = ++a && o && o[u] || (p = a = 0) || s.pop()) && ((m ? !le(o, c) : 1 !== o.nodeType) || !++p || (f && ((i = o[x] || (o[x] = {}))[d] = [E, p]),
                                o !== e)); )
                                    ;
                            return (p -= g) === h || p % h == 0 && 0 <= p / h
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                    return a[x] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                            e[n = oe.call(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: F(function(e) {
                    var r = []
                      , i = []
                      , s = ee(e.replace(he, "$1"));
                    return s[x] ? F(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; )
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: F(function(t) {
                    return function(e) {
                        return 0 < I(t, e).length
                    }
                }),
                contains: F(function(t) {
                    return t = t.replace(O, P),
                    function(e) {
                        return -1 < (e.textContent || ue.text(e)).indexOf(t)
                    }
                }),
                lang: F(function(n) {
                    return A.test(n || "") || I.error("unsupported lang: " + n),
                    n = n.replace(O, P).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = ne.location && ne.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === n
                },
                focus: function(e) {
                    return e === function() {
                        try {
                            return T.activeElement
                        } catch (e) {}
                    }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: B(!1),
                disabled: B(!0),
                checked: function(e) {
                    return le(e, "input") && !!e.checked || le(e, "option") && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return q.test(e.nodeName)
                },
                input: function(e) {
                    return N.test(e.nodeName)
                },
                button: function(e) {
                    return le(e, "input") && "button" === e.type || le(e, "button")
                },
                text: function(e) {
                    return le(e, "input") && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: _(function() {
                    return [0]
                }),
                last: _(function(e, t) {
                    return [t - 1]
                }),
                eq: _(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: _(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: _(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: _(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: _(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = function(t) {
                return function(e) {
                    return le(e, "input") && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = function(t) {
                return function(e) {
                    return (le(e, "input") || le(e, "button")) && e.type === t
                }
            }(e);
        function z() {}
        function V(e, t) {
            var n, r, i, o, a, s, u, l = c[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (a = e,
            s = [],
            u = b.preFilter; a; ) {
                for (o in n && !(r = v.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = m.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(he, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
        }
        function G(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function Y(a, e, t) {
            var s = e.dir
              , u = e.next
              , l = u || s
              , c = t && "parentNode" === l
              , f = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[s]; )
                    if (1 === e.nodeType || c)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o = [E, f];
                if (n) {
                    for (; e = e[s]; )
                        if ((1 === e.nodeType || c) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[s]; )
                        if (1 === e.nodeType || c)
                            if (i = e[x] || (e[x] = {}),
                            u && le(e, u))
                                e = e[s] || e;
                            else {
                                if ((r = i[l]) && r[0] === E && r[1] === f)
                                    return o[2] = r[2];
                                if ((i[l] = o)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function Q(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function J(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function K(d, h, g, y, v, e) {
            return y && !y[x] && (y = K(y)),
            v && !v[x] && (v = K(v, e)),
            F(function(e, t, n, r) {
                var i, o, a, s, u = [], l = [], c = t.length, f = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        I(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), p = !d || !e && h ? f : J(f, u, d, n, r);
                if (g ? g(p, s = v || (e ? d : c || y) ? [] : t, n, r) : s = p,
                y)
                    for (i = J(s, l),
                    y(i, [], n, r),
                    o = i.length; o--; )
                        (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
                if (e) {
                    if (v || d) {
                        if (v) {
                            for (i = [],
                            o = s.length; o--; )
                                (a = s[o]) && i.push(p[o] = a);
                            v(null, s = [], i, r)
                        }
                        for (o = s.length; o--; )
                            (a = s[o]) && -1 < (i = v ? oe.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    s = J(s === t ? s.splice(c, s.length) : s),
                    v ? v(null, t, s, r) : S.apply(t, s)
            })
        }
        function Z(y, v) {
            function e(e, t, n, r, i) {
                var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = E += null == p ? 1 : Math.random() || .1, g = d.length;
                for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
                    if (x && o) {
                        for (a = 0,
                        t || o.ownerDocument == T || (U(o),
                        n = !C); s = y[a++]; )
                            if (s(o, t || T, n)) {
                                S.call(r, o);
                                break
                            }
                        i && (E = h)
                    }
                    m && ((o = !s && o) && u--,
                    e && c.push(o))
                }
                if (u += l,
                m && l !== u) {
                    for (a = 0; s = v[a++]; )
                        s(c, f, t, n);
                    if (e) {
                        if (0 < u)
                            for (; l--; )
                                c[l] || f[l] || (f[l] = ce.call(r));
                        f = J(f)
                    }
                    S.apply(r, f),
                    i && !e && 0 < f.length && 1 < u + v.length && ue.uniqueSort(r)
                }
                return i && (E = h,
                w = p),
                c
            }
            var m = 0 < v.length
              , x = 0 < y.length;
            return m ? F(e) : e
        }
        function ee(e, t) {
            var n, r = [], i = [], o = u[e + " "];
            if (!o) {
                for (n = (t = t || V(e)).length; n--; )
                    ((o = function e(t) {
                        for (var r, n, i, o = t.length, a = b.relative[t[0].type], s = a || b.relative[" "], u = a ? 1 : 0, l = Y(function(e) {
                            return e === r
                        }, s, !0), c = Y(function(e) {
                            return -1 < oe.call(r, e)
                        }, s, !0), f = [function(e, t, n) {
                            return n = !a && (n || t != w) || ((r = t).nodeType ? l : c)(e, t, n),
                            r = null,
                            n
                        }
                        ]; u < o; u++)
                            if (n = b.relative[t[u].type])
                                f = [Y(Q(f), n)];
                            else {
                                if ((n = b.filter[t[u].type].apply(null, t[u].matches))[x]) {
                                    for (i = ++u; i < o && !b.relative[t[i].type]; i++)
                                        ;
                                    return K(1 < u && Q(f), 1 < u && G(t.slice(0, u - 1).concat({
                                        value: " " === t[u - 2].type ? "*" : ""
                                    })).replace(he, "$1"), n, u < i && e(t.slice(u, i)), i < o && e(t = t.slice(i)), i < o && G(t))
                                }
                                f.push(n)
                            }
                        return Q(f)
                    }(t[n]))[x] ? r : i).push(o);
                (o = u(e, Z(i, r))).selector = e
            }
            return o
        }
        function te(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && V(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = D.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !b.relative[s = a.type]); )
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && X(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && G(o)))
                            return S.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || ee(e, c))(r, t, !C, n, !t || H.test(e) && X(t.parentNode) || t),
            n
        }
        z.prototype = b.filters = b.pseudos,
        b.setFilters = new z,
        se.sortStable = x.split("").sort(l).join("") === x,
        U(),
        se.sortDetached = $(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }),
        ue.find = I,
        ue.expr[":"] = ue.expr.pseudos,
        ue.unique = ue.uniqueSort,
        I.compile = ee,
        I.select = te,
        I.setDocument = U,
        I.escape = ue.escapeSelector,
        I.getText = ue.text,
        I.isXML = ue.isXMLDoc,
        I.selectors = ue.expr,
        I.support = ue.support,
        I.uniqueSort = ue.uniqueSort
    }();
    function d(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && ue(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
    function x(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var b = ue.expr.match.needsContext
      , w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function C(e, n, r) {
        return v(n) ? ue.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? ue.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? ue.grep(e, function(e) {
            return -1 < oe.call(n, e) !== r
        }) : ue.filter(n, e, r)
    }
    ue.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? ue.find.matchesSelector(r, e) ? [r] : [] : ue.find.matches(e, ue.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    ue.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(ue(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (ue.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                ue.find(e, i[t], n);
            return 1 < r ? ue.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(C(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(C(this, e || [], !0))
        },
        is: function(e) {
            return !!C(this, "string" == typeof e && b.test(e) ? ue(e) : e || [], !1).length
        }
    });
    var S, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ue.fn.init = function(e, t, n) {
        if (!e)
            return this;
        if (n = n || S,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ue) : ue.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : E.exec(e)) || !r[1] && t)
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (r[1]) {
            if (t = t instanceof ue ? t[0] : t,
            ue.merge(this, ue.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
            w.test(r[1]) && ue.isPlainObject(t))
                for (var r in t)
                    v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (e = T.getElementById(r[2])) && (this[0] = e,
        this.length = 1),
        this
    }
    ).prototype = ue.fn,
    S = ue(T);
    var k = /^(?:parents|prev(?:Until|All))/
      , j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function A(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    ue.fn.extend({
        has: function(e) {
            var t = ue(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ue.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && ue(e);
            if (!b.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? ue.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.call(ue(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ue.uniqueSort(ue.merge(this.get(), ue(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    ue.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return d(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d(e, "parentNode", n)
        },
        next: function(e) {
            return A(e, "nextSibling")
        },
        prev: function(e) {
            return A(e, "previousSibling")
        },
        nextAll: function(e) {
            return d(e, "nextSibling")
        },
        prevAll: function(e) {
            return d(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && t(e.contentDocument) ? e.contentDocument : (le(e, "template") && (e = e.content || e),
            ue.merge([], e.childNodes))
        }
    }, function(r, i) {
        ue.fn[r] = function(e, t) {
            var n = ue.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ue.filter(t, n)),
            1 < this.length && (j[r] || ue.uniqueSort(n),
            k.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var D = /[^\x20\t\r\n\f]+/g;
    function N(e) {
        return e
    }
    function q(e) {
        throw e
    }
    function L(e, t, n, r) {
        var i;
        try {
            e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    ue.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        ue.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }),
        n) : ue.extend({}, r);
        function i() {
            for (s = s || r.once,
            a = o = !0; l.length; c = -1)
                for (t = l.shift(); ++c < u.length; )
                    !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length,
                    t = !1);
            r.memory || (t = !1),
            o = !1,
            s && (u = t ? [] : "")
        }
        var o, t, a, s, u = [], l = [], c = -1, f = {
            add: function() {
                return u && (t && !o && (c = u.length - 1,
                l.push(t)),
                function n(e) {
                    ue.each(e, function(e, t) {
                        v(t) ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== h(t) && n(t)
                    })
                }(arguments),
                t && !o && i()),
                this
            },
            remove: function() {
                return ue.each(arguments, function(e, t) {
                    for (var n; -1 < (n = ue.inArray(t, u, n)); )
                        u.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < ue.inArray(e, u) : 0 < u.length
            },
            empty: function() {
                return u = u && [],
                this
            },
            disable: function() {
                return s = l = [],
                u = t = "",
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return s = l = [],
                t || o || (u = t = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                o || i()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!a
            }
        };
        return f
    }
    ,
    ue.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", ue.Callbacks("memory"), ue.Callbacks("memory"), 2], ["resolve", "done", ue.Callbacks("once memory"), ue.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ue.Callbacks("once memory"), ue.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return ue.Deferred(function(r) {
                        ue.each(o, function(e, t) {
                            var n = v(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++,
                                    t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                            var n = this
                              , r = arguments
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    ue.Deferred.exceptionHook && ue.Deferred.exceptionHook(e, t.error),
                                    u <= i + 1 && (a !== q && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (ue.Deferred.getErrorHook ? t.error = ue.Deferred.getErrorHook() : ue.Deferred.getStackHook && (t.error = ue.Deferred.getStackHook()),
                            ne.setTimeout(t))
                        }
                    }
                    return ue.Deferred(function(e) {
                        o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)),
                        o[1][3].add(l(0, e, v(t) ? t : N)),
                        o[2][3].add(l(0, e, v(n) ? n : q))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ue.extend(e, a) : a
                }
            }
              , s = {};
            return ue.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    i[t] = this,
                    o[t] = 1 < arguments.length ? ie.call(arguments) : e,
                    --n || a.resolveWith(i, o)
                }
            }
            var n = arguments.length
              , r = n
              , i = Array(r)
              , o = ie.call(arguments)
              , a = ue.Deferred();
            if (n <= 1 && (L(e, a.done(t(r)).resolve, a.reject, !n),
            "pending" === a.state() || v(o[r] && o[r].then)))
                return a.then();
            for (; r--; )
                L(o[r], t(r), a.reject);
            return a.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ue.Deferred.exceptionHook = function(e, t) {
        ne.console && ne.console.warn && e && H.test(e.name) && ne.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    ue.readyException = function(e) {
        ne.setTimeout(function() {
            throw e
        })
    }
    ;
    var O = ue.Deferred();
    function P() {
        T.removeEventListener("DOMContentLoaded", P),
        ne.removeEventListener("load", P),
        ue.ready()
    }
    ue.fn.ready = function(e) {
        return O.then(e).catch(function(e) {
            ue.readyException(e)
        }),
        this
    }
    ,
    ue.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ue.readyWait : ue.isReady) || (ue.isReady = !0) !== e && 0 < --ue.readyWait || O.resolveWith(T, [ue])
        }
    }),
    ue.ready.then = O.then,
    "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? ne.setTimeout(ue.ready) : (T.addEventListener("DOMContentLoaded", P),
    ne.addEventListener("load", P));
    var R = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === h(n))
            for (s in i = !0,
            n)
                R(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        v(r) || (a = !0),
        l && (t = a ? (t.call(e, r),
        null) : (l = t,
        function(e, t, n) {
            return l.call(ue(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , M = /^-ms-/
      , I = /-([a-z])/g;
    function W(e, t) {
        return t.toUpperCase()
    }
    function F(e) {
        return e.replace(M, "ms-").replace(I, W)
    }
    function $(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function B() {
        this.expando = ue.expando + B.uid++
    }
    B.uid = 1,
    B.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[F(t)] = n;
            else
                for (r in t)
                    i[F(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(F) : (t = F(t))in r ? [t] : t.match(D) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                void 0 !== t && !ue.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !ue.isEmptyObject(e)
        }
    };
    var _ = new B
      , X = new B
      , U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , z = /[A-Z]/g;
    function V(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : U.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                X.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    ue.extend({
        hasData: function(e) {
            return X.hasData(e) || _.hasData(e)
        },
        data: function(e, t, n) {
            return X.access(e, t, n)
        },
        removeData: function(e, t) {
            X.remove(e, t)
        },
        _data: function(e, t, n) {
            return _.access(e, t, n)
        },
        _removeData: function(e, t) {
            _.remove(e, t)
        }
    }),
    ue.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    X.set(this, n)
                }) : R(this, function(e) {
                    var t;
                    return o && void 0 === e ? void 0 !== (t = X.get(o, n)) || void 0 !== (t = V(o, n)) ? t : void 0 : void this.each(function() {
                        X.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = X.get(o),
            1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--; )
                    a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)),
                    V(o, r, i[r]));
                _.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                X.remove(this, e)
            })
        }
    }),
    ue.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = _.get(e, t),
                n && (!r || Array.isArray(n) ? r = _.access(e, t, ue.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ue.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = ue._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                ue.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return _.get(e, n) || _.access(e, n, {
                empty: ue.Callbacks("once memory").add(function() {
                    _.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    ue.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? ue.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = ue.queue(this, t, n);
                ue._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && ue.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ue.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(a, [a])
            }
            var r, i = 1, o = ue.Deferred(), a = this, s = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (r = _.get(a[s], e + "queueHooks")) && r.empty && (i++,
                r.empty.add(n));
            return n(),
            o.promise(t)
        }
    });
    var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$","i")
      , Q = ["Top", "Right", "Bottom", "Left"]
      , J = T.documentElement
      , K = function(e) {
        return ue.contains(e.ownerDocument, e)
    }
      , Z = {
        composed: !0
    };
    J.getRootNode && (K = function(e) {
        return ue.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
    }
    );
    var ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ue.css(e, "display")
    };
    function te(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return ue.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (ue.cssNumber[t] ? "" : "px"), c = e.nodeType && (ue.cssNumber[t] || "px" !== l && +u) && Y.exec(ue.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; a--; )
                ue.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            ue.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ve = {};
    function me(e, t) {
        for (var n, r, i, o, a, s = [], u = 0, l = e.length; u < l; u++)
            (r = e[u]).style && (n = r.style.display,
            t ? ("none" === n && (s[u] = _.get(r, "display") || null,
            s[u] || (r.style.display = "")),
            "" === r.style.display && ee(r) && (s[u] = (a = o = void 0,
            o = (i = r).ownerDocument,
            a = i.nodeName,
            (i = ve[a]) || (o = o.body.appendChild(o.createElement(a)),
            i = ue.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === i && (i = "block"),
            ve[a] = i)))) : "none" !== n && (s[u] = "none",
            _.set(r, "display", n)));
        for (u = 0; u < l; u++)
            null != s[u] && (e[u].style.display = s[u]);
        return e
    }
    ue.fn.extend({
        show: function() {
            return me(this, !0)
        },
        hide: function() {
            return me(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? ue(this).show() : ue(this).hide()
            })
        }
    });
    var xe = /^(?:checkbox|radio)$/i
      , be = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , we = /^$|^module$|\/(?:java|ecma)script/i;
    nn = T.createDocumentFragment().appendChild(T.createElement("div")),
    (u = T.createElement("input")).setAttribute("type", "radio"),
    u.setAttribute("checked", "checked"),
    u.setAttribute("name", "t"),
    nn.appendChild(u),
    se.checkClone = nn.cloneNode(!0).cloneNode(!0).lastChild.checked,
    nn.innerHTML = "<textarea>x</textarea>",
    se.noCloneChecked = !!nn.cloneNode(!0).lastChild.defaultValue,
    nn.innerHTML = "<option></option>",
    se.option = !!nn.lastChild;
    var Te = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function Ce(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && le(e, t) ? ue.merge([e], n) : n
    }
    function Se(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
    }
    Te.tbody = Te.tfoot = Te.colgroup = Te.caption = Te.thead,
    Te.th = Te.td,
    se.option || (Te.optgroup = Te.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Ee = /<|&#?\w+;/;
    function ke(e, t, n, r, i) {
        for (var o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === h(o))
                    ue.merge(f, o.nodeType ? [o] : o);
                else if (Ee.test(o)) {
                    for (a = a || c.appendChild(t.createElement("div")),
                    s = (be.exec(o) || ["", ""])[1].toLowerCase(),
                    s = Te[s] || Te._default,
                    a.innerHTML = s[1] + ue.htmlPrefilter(o) + s[2],
                    l = s[0]; l--; )
                        a = a.lastChild;
                    ue.merge(f, a.childNodes),
                    (a = c.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(o));
        for (c.textContent = "",
        p = 0; o = f[p++]; )
            if (r && -1 < ue.inArray(o, r))
                i && i.push(o);
            else if (u = K(o),
            a = Ce(c.appendChild(o), "script"),
            u && Se(a),
            n)
                for (l = 0; o = a[l++]; )
                    we.test(o.type || "") && n.push(o);
        return c
    }
    var je = /^([^.]*)(?:\.(.+)|)/;
    function Ae() {
        return !0
    }
    function De() {
        return !1
    }
    function Ne(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ne(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = De;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return ue().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = ue.guid++)),
        e.each(function() {
            ue.event.add(this, t, i, r, n)
        })
    }
    function qe(e, r, t) {
        t ? (_.set(e, r, !1),
        ue.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n = _.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (n)
                        (ue.event.special[r] || {}).delegateType && e.stopPropagation();
                    else if (n = ie.call(arguments),
                    _.set(this, r, n),
                    this[r](),
                    t = _.get(this, r),
                    _.set(this, r, !1),
                    n !== t)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        t
                } else
                    n && (_.set(this, r, ue.event.trigger(n[0], n.slice(1), this)),
                    e.stopPropagation(),
                    e.isImmediatePropagationStopped = Ae)
            }
        })) : void 0 === _.get(e, r) && ue.event.add(e, r, Ae)
    }
    ue.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h = _.get(t);
            if ($(t))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && ue.find.matchesSelector(J, i),
                n.guid || (n.guid = ue.guid++),
                (s = h.events) || (s = h.events = Object.create(null)),
                (a = h.handle) || (a = h.handle = function(e) {
                    return void 0 !== ue && ue.event.triggered !== e.type ? ue.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                u = (e = (e || "").match(D) || [""]).length; u--; )
                    f = d = (l = je.exec(e[u]) || [])[1],
                    p = (l[2] || "").split(".").sort(),
                    f && (c = ue.event.special[f] || {},
                    f = (i ? c.delegateType : c.bindType) || f,
                    c = ue.event.special[f] || {},
                    l = ue.extend({
                        type: f,
                        origType: d,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ue.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, o),
                    (d = s[f]) || ((d = s[f] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(f, a)),
                    c.add && (c.add.call(t, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                    ue.event.global[f] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = _.hasData(e) && _.get(e);
            if (y && (u = y.events)) {
                for (l = (t = (t || "").match(D) || [""]).length; l--; )
                    if (d = g = (s = je.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = ue.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || ue.removeEvent(e, d, y.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            ue.event.remove(e, d + t[l], n, r, !0);
                ue.isEmptyObject(u) && _.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a = new Array(arguments.length), s = ue.event.fix(e), u = (_.get(this, "events") || Object.create(null))[s.type] || [], e = ue.event.special[s.type] || {};
            for (a[0] = s,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (s.delegateTarget = this,
            !e.preDispatch || !1 !== e.preDispatch.call(this, s)) {
                for (o = ue.event.handlers.call(this, s, u),
                t = 0; (r = o[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = r.elem,
                    n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i,
                        s.data = i.data,
                        void 0 !== (i = ((ue.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(),
                        s.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ue(i, this).index(l) : ue.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(ue.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[ue.expando] ? e : new ue.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return xe.test(e.type) && e.click && le(e, "input") && qe(e, "click", !0),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return xe.test(e.type) && e.click && le(e, "input") && qe(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return xe.test(e.type) && e.click && le(e, "input") && _.get(e, "click") || le(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    ue.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    ue.Event = function(e, t) {
        if (!(this instanceof ue.Event))
            return new ue.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : De,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && ue.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[ue.expando] = !0
    }
    ,
    ue.Event.prototype = {
        constructor: ue.Event,
        isDefaultPrevented: De,
        isPropagationStopped: De,
        isImmediatePropagationStopped: De,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ae,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ae,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ae,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ue.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, ue.event.addProp),
    ue.each({
        focus: "focusin",
        blur: "focusout"
    }, function(r, i) {
        function o(e) {
            var t, n;
            T.documentMode ? (t = _.get(this, "handle"),
            (n = ue.event.fix(e)).type = "focusin" === e.type ? "focus" : "blur",
            n.isSimulated = !0,
            t(e),
            n.target === n.currentTarget && t(n)) : ue.event.simulate(i, e.target, ue.event.fix(e))
        }
        ue.event.special[r] = {
            setup: function() {
                var e;
                if (qe(this, r, !0),
                !T.documentMode)
                    return !1;
                (e = _.get(this, i)) || this.addEventListener(i, o),
                _.set(this, i, (e || 0) + 1)
            },
            trigger: function() {
                return qe(this, r),
                !0
            },
            teardown: function() {
                var e;
                if (!T.documentMode)
                    return !1;
                (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o),
                _.remove(this, i))
            },
            _default: function(e) {
                return _.get(e.target, r)
            },
            delegateType: i
        },
        ue.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = T.documentMode ? this : e
                  , n = _.get(t, i);
                n || (T.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)),
                _.set(t, i, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = T.documentMode ? this : e
                  , n = _.get(t, i) - 1;
                n ? _.set(t, i, n) : (T.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0),
                _.remove(t, i))
            }
        }
    }),
    ue.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        ue.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || ue.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    ue.fn.extend({
        on: function(e, t, n, r) {
            return Ne(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ne(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                ue(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = De),
                this.each(function() {
                    ue.event.remove(this, e, n, t)
                });
            for (i in e)
                this.off(i, t, e[i]);
            return this
        }
    });
    var Le = /<script|<style|<link/i
      , He = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Oe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Pe(e, t) {
        return le(e, "table") && le(11 !== t.nodeType ? t : t.firstChild, "tr") && ue(e).children("tbody")[0] || e
    }
    function Re(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ie(e, t) {
        var n, r, i, o;
        if (1 === t.nodeType) {
            if (_.hasData(e) && (o = _.get(e).events))
                for (i in _.remove(t, "handle events"),
                o)
                    for (n = 0,
                    r = o[i].length; n < r; n++)
                        ue.event.add(t, i, o[i][n]);
            X.hasData(e) && (e = X.access(e),
            e = ue.extend({}, e),
            X.set(t, e))
        }
    }
    function We(n, r, i, o) {
        r = y(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = v(d);
        if (h || 1 < f && "string" == typeof d && !se.checkClone && He.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                We(t, r, i, o)
            });
        if (f && (t = (e = ke(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = ue.map(Ce(e, "script"), Re)).length; c < f; c++)
                u = e,
                c !== p && (u = ue.clone(u, !0, !0),
                s && ue.merge(a, Ce(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                ue.map(a, Me),
                c = 0; c < s; c++)
                    u = a[c],
                    we.test(u.type || "") && !_.access(u, "globalEval") && ue.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ue._evalUrl && !u.noModule && ue._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : m(u.textContent.replace(Oe, ""), u, l))
        }
        return n
    }
    function Fe(e, t, n) {
        for (var r, i = t ? ue.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || ue.cleanData(Ce(r)),
            r.parentNode && (n && K(r) && Se(Ce(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    ue.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = K(e);
            if (!(se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
                for (a = Ce(c),
                r = 0,
                i = (o = Ce(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    l = void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && xe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || Ce(e),
                    a = a || Ce(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Ie(o[r], a[r]);
                else
                    Ie(e, c);
            return 0 < (a = Ce(c, "script")).length && Se(a, !f && Ce(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = ue.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($(n)) {
                    if (t = n[_.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, t.handle);
                        n[_.expando] = void 0
                    }
                    n[X.expando] && (n[X.expando] = void 0)
                }
        }
    }),
    ue.fn.extend({
        detach: function(e) {
            return Fe(this, e, !0)
        },
        remove: function(e) {
            return Fe(this, e)
        },
        text: function(e) {
            return R(this, function(e) {
                return void 0 === e ? ue.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return We(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return We(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Pe(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return We(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return We(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (ue.cleanData(Ce(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return ue.clone(this, e, t)
            })
        },
        html: function(e) {
            return R(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !Te[(be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ue.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (ue.cleanData(Ce(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return We(this, arguments, function(e) {
                var t = this.parentNode;
                ue.inArray(this, n) < 0 && (ue.cleanData(Ce(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    ue.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        ue.fn[e] = function(e) {
            for (var t, n = [], r = ue(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                ue(r[o])[a](t),
                s.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function $e(e, t, n) {
        var r, i = {};
        for (r in t)
            i[r] = e.style[r],
            e.style[r] = t[r];
        for (r in n = n.call(e),
        t)
            e.style[r] = i[r];
        return n
    }
    var Be, _e, Xe, Ue, ze, Ve, Ge, Ye, Qe = new RegExp("^(" + G + ")(?!px)[a-z%]+$","i"), Je = /^--/, Ke = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = ne),
        t.getComputedStyle(e)
    }, Ze = new RegExp(Q.join("|"),"i");
    function et() {
        var e;
        Ye && (Ge.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        Ye.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        J.appendChild(Ge).appendChild(Ye),
        e = ne.getComputedStyle(Ye),
        Be = "1%" !== e.top,
        Ve = 12 === tt(e.marginLeft),
        Ye.style.right = "60%",
        Ue = 36 === tt(e.right),
        _e = 36 === tt(e.width),
        Ye.style.position = "absolute",
        Xe = 12 === tt(Ye.offsetWidth / 3),
        J.removeChild(Ge),
        Ye = null)
    }
    function tt(e) {
        return Math.round(parseFloat(e))
    }
    function nt(e, t, n) {
        var r, i = Je.test(t), o = e.style;
        return (n = n || Ke(e)) && (r = n.getPropertyValue(t) || n[t],
        i && r && (r = r.replace(he, "$1") || void 0),
        "" !== r || K(e) || (r = ue.style(e, t)),
        !se.pixelBoxStyles() && Qe.test(r) && Ze.test(t) && (i = o.width,
        e = o.minWidth,
        t = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = r,
        r = n.width,
        o.width = i,
        o.minWidth = e,
        o.maxWidth = t)),
        void 0 !== r ? r + "" : r
    }
    function rt(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Ge = T.createElement("div"),
    (Ye = T.createElement("div")).style && (Ye.style.backgroundClip = "content-box",
    Ye.cloneNode(!0).style.backgroundClip = "",
    se.clearCloneStyle = "content-box" === Ye.style.backgroundClip,
    ue.extend(se, {
        boxSizingReliable: function() {
            return et(),
            _e
        },
        pixelBoxStyles: function() {
            return et(),
            Ue
        },
        pixelPosition: function() {
            return et(),
            Be
        },
        reliableMarginLeft: function() {
            return et(),
            Ve
        },
        scrollboxSize: function() {
            return et(),
            Xe
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == ze && (e = T.createElement("table"),
            t = T.createElement("tr"),
            n = T.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            J.appendChild(e).appendChild(t).appendChild(n),
            n = ne.getComputedStyle(t),
            ze = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight,
            J.removeChild(e)),
            ze
        }
    }));
    var it = ["Webkit", "Moz", "ms"]
      , ot = T.createElement("div").style
      , at = {};
    function st(e) {
        var t = ue.cssProps[e] || at[e];
        return t || (e in ot ? e : at[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = it.length; n--; )
                if ((e = it[n] + t)in ot)
                    return e
        }(e) || e)
    }
    var ut = /^(none|table(?!-c[ea]).+)/
      , lt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ct = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function ft(e, t, n) {
        var r = Y.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function pt(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += ue.css(e, n + Q[a], !0, i)),
            r ? ("content" === n && (u -= ue.css(e, "padding" + Q[a], !0, i)),
            "margin" !== n && (u -= ue.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ue.css(e, "padding" + Q[a], !0, i),
            "padding" !== n ? u += ue.css(e, "border" + Q[a] + "Width", !0, i) : s += ue.css(e, "border" + Q[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u + l
    }
    function dt(e, t, n) {
        var r = Ke(e)
          , i = (!se.boxSizingReliable() || n) && "border-box" === ue.css(e, "boxSizing", !1, r)
          , o = i
          , a = nt(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Qe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!se.boxSizingReliable() && i || !se.reliableTrDimensions() && le(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ue.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ue.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + pt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function ht(e, t, n, r, i) {
        return new ht.prototype.init(e,t,n,r,i)
    }
    ue.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = nt(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = F(t), u = Je.test(t), l = e.style;
                if (u || (t = st(s)),
                a = ue.cssHooks[t] || ue.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ue.cssNumber[s] ? "" : "px")),
                se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o = F(t);
            return Je.test(t) || (t = st(o)),
            (o = ue.cssHooks[t] || ue.cssHooks[o]) && "get"in o && (i = o.get(e, !0, n)),
            void 0 === i && (i = nt(e, t, r)),
            "normal" === i && t in ct && (i = ct[t]),
            "" === n || n ? (t = parseFloat(i),
            !0 === n || isFinite(t) ? t || 0 : i) : i
        }
    }),
    ue.each(["height", "width"], function(e, s) {
        ue.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !ut.test(ue.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? dt(e, s, n) : $e(e, lt, function() {
                        return dt(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Ke(e), o = !se.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === ue.css(e, "boxSizing", !1, i), n = n ? pt(e, s, n, a, i) : 0;
                return a && o && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - pt(e, s, "border", !1, i) - .5)),
                n && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t,
                t = ue.css(e, s)),
                ft(0, t, n)
            }
        }
    }),
    ue.cssHooks.marginLeft = rt(se.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(nt(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    ue.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        ue.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (ue.cssHooks[i + o].set = ft)
    }),
    ue.fn.extend({
        css: function(e, t) {
            return R(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ke(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = ue.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ue.style(e, t, n) : ue.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    (ue.Tween = ht).prototype = {
        constructor: ht,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || ue.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ue.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ht.propHooks[this.prop];
            return (e && e.get ? e : ht.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = ht.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : ht.propHooks._default).set(this),
            this
        }
    },
    ht.prototype.init.prototype = ht.prototype,
    ht.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = ue.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ue.cssHooks[e.prop] && null == e.elem.style[st(e.prop)] ? e.elem[e.prop] = e.now : ue.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    ht.propHooks.scrollTop = ht.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ue.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    ue.fx = ht.prototype.init,
    ue.fx.step = {};
    var gt, yt, vt = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;
    function xt() {
        yt && (!1 === T.hidden && ne.requestAnimationFrame ? ne.requestAnimationFrame(xt) : ne.setTimeout(xt, ue.fx.interval),
        ue.fx.tick())
    }
    function bt() {
        return ne.setTimeout(function() {
            gt = void 0
        }),
        gt = Date.now()
    }
    function wt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = Q[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function Tt(e, t, n) {
        for (var r, i = (Ct.tweeners[t] || []).concat(Ct.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function Ct(i, e, t) {
        var n, o, r = 0, a = Ct.prefilters.length, s = ue.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (o)
                return !1;
            for (var e = gt || bt(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++)
                l.tweens[n].run(t);
            return s.notifyWith(i, [l, t, e]),
            t < 1 && r ? e : (r || s.notifyWith(i, [l, 1, 0]),
            s.resolveWith(i, [l]),
            !1)
        }, l = s.promise({
            elem: i,
            props: ue.extend({}, e),
            opts: ue.extend(!0, {
                specialEasing: {},
                easing: ue.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: gt || bt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                e = ue.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(e),
                e
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(i, [l, 1, 0]),
                s.resolveWith(i, [l, e])) : s.rejectWith(i, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = F(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = ue.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < a; r++)
            if (n = Ct.prefilters[r].call(l, i, c, l.opts))
                return v(n.stop) && (ue._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return ue.map(c, Tt, l),
        v(l.opts.start) && l.opts.start.call(i, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        ue.fx.timer(ue.extend(u, {
            elem: i,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    ue.Animation = ue.extend(Ct, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return te(n.elem, e, Y.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = v(e) ? (t = e,
            ["*"]) : e.match(D)).length; r < i; r++)
                n = e[r],
                Ct.tweeners[n] = Ct.tweeners[n] || [],
                Ct.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c = "width"in t || "height"in t, f = this, p = {}, d = e.style, h = e.nodeType && ee(e), g = _.get(e, "fxshow");
            for (r in n.queue || (null == (a = ue._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            f.always(function() {
                f.always(function() {
                    a.unqueued--,
                    ue.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                vt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r])
                            continue;
                        h = !0
                    }
                    p[r] = g && g[r] || ue.style(e, r)
                }
            if ((u = !ue.isEmptyObject(t)) || !ue.isEmptyObject(p))
                for (r in c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                null == (l = g && g.display) && (l = _.get(e, "display")),
                "none" === (c = ue.css(e, "display")) && (l ? c = l : (me([e], !0),
                l = e.style.display || l,
                c = ue.css(e, "display"),
                me([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === ue.css(e, "float") && (u || (f.done(function() {
                    d.display = l
                }),
                null == l && (c = d.display,
                l = "none" === c ? "" : c)),
                d.display = "inline-block")),
                n.overflow && (d.overflow = "hidden",
                f.always(function() {
                    d.overflow = n.overflow[0],
                    d.overflowX = n.overflow[1],
                    d.overflowY = n.overflow[2]
                })),
                u = !1,
                p)
                    u || (g ? "hidden"in g && (h = g.hidden) : g = _.access(e, "fxshow", {
                        display: l
                    }),
                    o && (g.hidden = !h),
                    h && me([e], !0),
                    f.done(function() {
                        for (r in h || me([e]),
                        _.remove(e, "fxshow"),
                        p)
                            ue.style(e, r, p[r])
                    })),
                    u = Tt(h ? g[r] : 0, r, f),
                    r in g || (g[r] = u.start,
                    h && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? Ct.prefilters.unshift(e) : Ct.prefilters.push(e)
        }
    }),
    ue.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ue.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return ue.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ue.fx.speeds ? r.duration = ue.fx.speeds[r.duration] : r.duration = ue.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            v(r.old) && r.old.call(this),
            r.queue && ue.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    ue.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ue.isEmptyObject(t)
              , o = ue.speed(e, n, r)
              , r = function() {
                var e = Ct(this, ue.extend({}, t), o);
                (i || _.get(this, "finish")) && e.stop(!0)
            };
            return r.finish = r,
            i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(i, e, o) {
            function a(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            }
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = ue.timers
                  , r = _.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && mt.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || ue.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = _.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = ue.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                ue.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    ue.each(["toggle", "show", "hide"], function(e, r) {
        var i = ue.fn[r];
        ue.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(wt(r, !0), e, t, n)
        }
    }),
    ue.each({
        slideDown: wt("show"),
        slideUp: wt("hide"),
        slideToggle: wt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        ue.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    ue.timers = [],
    ue.fx.tick = function() {
        var e, t = 0, n = ue.timers;
        for (gt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ue.fx.stop(),
        gt = void 0
    }
    ,
    ue.fx.timer = function(e) {
        ue.timers.push(e),
        ue.fx.start()
    }
    ,
    ue.fx.interval = 13,
    ue.fx.start = function() {
        yt || (yt = !0,
        xt())
    }
    ,
    ue.fx.stop = function() {
        yt = null
    }
    ,
    ue.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ue.fn.delay = function(r, e) {
        return r = ue.fx && ue.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = ne.setTimeout(e, r);
            t.stop = function() {
                ne.clearTimeout(n)
            }
        })
    }
    ,
    nn = T.createElement("input"),
    G = T.createElement("select").appendChild(T.createElement("option")),
    nn.type = "checkbox",
    se.checkOn = "" !== nn.value,
    se.optSelected = G.selected,
    (nn = T.createElement("input")).value = "t",
    nn.type = "radio",
    se.radioValue = "t" === nn.value;
    var St, Et = ue.expr.attrHandle;
    ue.fn.extend({
        attr: function(e, t) {
            return R(this, ue.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ue.removeAttr(this, e)
            })
        }
    }),
    ue.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? ue.prop(e, t, n) : (1 === o && ue.isXMLDoc(e) || (i = ue.attrHooks[t.toLowerCase()] || (ue.expr.match.bool.test(t) ? St : void 0)),
                void 0 !== n ? null === n ? void ue.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : !(i && "get"in i && null !== (r = i.get(e, t))) && null == (r = ue.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!se.radioValue && "radio" === t && le(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(D);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    St = {
        set: function(e, t, n) {
            return !1 === t ? ue.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    ue.each(ue.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = Et[t] || ue.find.attr;
        Et[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = Et[o],
            Et[o] = r,
            r = null != a(e, t, n) ? o : null,
            Et[o] = i),
            r
        }
    });
    var kt = /^(?:input|select|textarea|button)$/i
      , jt = /^(?:a|area)$/i;
    function At(e) {
        return (e.match(D) || []).join(" ")
    }
    function Dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Nt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
    }
    ue.fn.extend({
        prop: function(e, t) {
            return R(this, ue.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ue.propFix[e] || e]
            })
        }
    }),
    ue.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ue.isXMLDoc(e) || (t = ue.propFix[t] || t,
                i = ue.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ue.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    se.optSelected || (ue.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ue.propFix[this.toLowerCase()] = this
    }),
    ue.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ue(this).addClass(t.call(this, e, Dt(this)))
            }) : (e = Nt(t)).length ? this.each(function() {
                if (r = Dt(this),
                n = 1 === this.nodeType && " " + At(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        i = e[o],
                        n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = At(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return v(t) ? this.each(function(e) {
                ue(this).removeClass(t.call(this, e, Dt(this)))
            }) : arguments.length ? (e = Nt(t)).length ? this.each(function() {
                if (r = Dt(this),
                n = 1 === this.nodeType && " " + At(r) + " ") {
                    for (o = 0; o < e.length; o++)
                        for (i = e[o]; -1 < n.indexOf(" " + i + " "); )
                            n = n.replace(" " + i + " ", " ");
                    a = At(n),
                    r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t, s = "string" == a || Array.isArray(t);
            return v(t) ? this.each(function(e) {
                ue(this).toggleClass(t.call(this, e, Dt(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = Nt(t),
            this.each(function() {
                if (s)
                    for (o = ue(this),
                    i = 0; i < e.length; i++)
                        r = e[i],
                        o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                    void 0 !== t && "boolean" != a || ((r = Dt(this)) && _.set(this, "__className__", r),
                    this.setAttribute && this.setAttribute("class", !r && !1 !== t && _.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + At(Dt(t)) + " ").indexOf(r))
                    return !0;
            return !1
        }
    });
    var qt = /\r/g;
    ue.fn.extend({
        val: function(t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = v(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, ue(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = ue.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : i ? (n = ue.valHooks[i.type] || ue.valHooks[i.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof (e = i.value) ? e.replace(qt, "") : null == e ? "" : e : void 0
        }
    }),
    ue.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ue.find.attr(e, "value");
                    return null != t ? t : At(ue.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++)
                        if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !le(t.parentNode, "optgroup"))) {
                            if (t = ue(t).val(),
                            i)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ue.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = -1 < ue.inArray(ue.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ue.each(["radio", "checkbox"], function() {
        ue.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < ue.inArray(ue(e).val(), t)
            }
        },
        se.checkOn || (ue.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Lt = ne.location
      , Ht = {
        guid: Date.now()
    }
      , Ot = /\?/;
    ue.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new ne.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || ue.error("Invalid XML: " + (n ? ue.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    function Pt(e) {
        e.stopPropagation()
    }
    var Rt = /^(?:focusinfocus|focusoutblur)$/;
    ue.extend(ue.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f = [n || T], p = ae.call(e, "type") ? e.type : e, d = ae.call(e, "namespace") ? e.namespace.split(".") : [], h = c = o = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Rt.test(p + ue.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(),
            d.sort()),
            s = p.indexOf(":") < 0 && "on" + p,
            (e = e[ue.expando] ? e : new ue.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = d.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : ue.makeArray(t, [e]),
            l = ue.event.special[p] || {},
            r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !g(n)) {
                    for (a = l.delegateType || p,
                    Rt.test(a + p) || (h = h.parentNode); h; h = h.parentNode)
                        f.push(h),
                        o = h;
                    o === (n.ownerDocument || T) && f.push(o.defaultView || o.parentWindow || ne)
                }
                for (i = 0; (h = f[i++]) && !e.isPropagationStopped(); )
                    c = h,
                    e.type = 1 < i ? a : l.bindType || p,
                    (u = (_.get(h, "events") || Object.create(null))[e.type] && _.get(h, "handle")) && u.apply(h, t),
                    (u = s && h[s]) && u.apply && $(h) && (e.result = u.apply(h, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !$(n) || s && v(n[p]) && !g(n) && ((o = n[s]) && (n[s] = null),
                ue.event.triggered = p,
                e.isPropagationStopped() && c.addEventListener(p, Pt),
                n[p](),
                e.isPropagationStopped() && c.removeEventListener(p, Pt),
                ue.event.triggered = void 0,
                o && (n[s] = o)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            e = ue.extend(new ue.Event, n, {
                type: e,
                isSimulated: !0
            });
            ue.event.trigger(e, null, t)
        }
    }),
    ue.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ue.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return ue.event.trigger(e, t, n, !0)
        }
    });
    var Mt = /\[\]$/
      , It = /\r?\n/g
      , Wt = /^(?:submit|button|image|reset|file)$/i
      , Ft = /^(?:input|select|textarea|keygen)/i;
    ue.param = function(e, t) {
        function n(e, t) {
            t = v(t) ? t() : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var r, i = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !ue.isPlainObject(e))
            ue.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (r in e)
                !function n(r, e, i, o) {
                    if (Array.isArray(e))
                        ue.each(e, function(e, t) {
                            i || Mt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
                        });
                    else if (i || "object" !== h(e))
                        o(r, e);
                    else
                        for (var t in e)
                            n(r + "[" + t + "]", e[t], i, o)
                }(r, e[r], t, n);
        return i.join("&")
    }
    ,
    ue.fn.extend({
        serialize: function() {
            return ue.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ue.prop(this, "elements");
                return e ? ue.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ue(this).is(":disabled") && Ft.test(this.nodeName) && !Wt.test(e) && (this.checked || !xe.test(e))
            }).map(function(e, t) {
                var n = ue(this).val();
                return null == n ? null : Array.isArray(n) ? ue.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(It, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(It, "\r\n")
                }
            }).get()
        }
    });
    var $t = /%20/g
      , Bt = /#.*$/
      , _t = /([?&])_=[^&]*/
      , Xt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ut = /^(?:GET|HEAD)$/
      , zt = /^\/\//
      , Vt = {}
      , Gt = {}
      , Yt = "*/".concat("*")
      , Qt = T.createElement("a");
    function Jt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(D) || [];
            if (v(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Kt(t, r, i, o) {
        var a = {}
          , s = t === Gt;
        function u(e) {
            var n;
            return a[e] = !0,
            ue.each(t[e] || [], function(e, t) {
                t = t(r, i, o);
                return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t),
                u(t),
                !1)
            }),
            n
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }
    function Zt(e, t) {
        var n, r, i = ue.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && ue.extend(!0, e, r),
        e
    }
    Qt.href = Lt.href,
    ue.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ue.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Zt(Zt(e, ue.ajaxSettings), t) : Zt(ue.ajaxSettings, e)
        },
        ajaxPrefilter: Jt(Vt),
        ajaxTransport: Jt(Gt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var u, l, c, n, f, r, p, d, i, h = ue.ajaxSetup({}, t), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? ue(g) : ue.event, v = ue.Deferred(), m = ue.Callbacks("once memory"), x = h.statusCode || {}, o = {}, a = {}, s = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!n)
                            for (n = {}; t = Xt.exec(c); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return p ? c : null
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    o[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == p && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (p)
                            b.always(e[b.status]);
                        else
                            for (var t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || s;
                    return u && u.abort(e),
                    w(0, e),
                    this
                }
            };
            if (v.promise(b),
            h.url = ((e || h.url || Lt.href) + "").replace(zt, Lt.protocol + "//"),
            h.type = t.method || t.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(D) || [""],
            null == h.crossDomain) {
                r = T.createElement("a");
                try {
                    r.href = h.url,
                    r.href = r.href,
                    h.crossDomain = Qt.protocol + "//" + Qt.host != r.protocol + "//" + r.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = ue.param(h.data, h.traditional)),
            Kt(Vt, h, t, b),
            p)
                return b;
            for (i in (d = ue.event && h.global) && 0 == ue.active++ && ue.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Ut.test(h.type),
            l = h.url.replace(Bt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace($t, "+")) : (e = h.url.slice(l.length),
            h.data && (h.processData || "string" == typeof h.data) && (l += (Ot.test(l) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (l = l.replace(_t, "$1"),
            e = (Ot.test(l) ? "&" : "?") + "_=" + Ht.guid++ + e),
            h.url = l + e),
            h.ifModified && (ue.lastModified[l] && b.setRequestHeader("If-Modified-Since", ue.lastModified[l]),
            ue.etag[l] && b.setRequestHeader("If-None-Match", ue.etag[l])),
            (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType),
            b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                b.setRequestHeader(i, h.headers[i]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p))
                return b.abort();
            if (s = "abort",
            m.add(h.complete),
            b.done(h.success),
            b.fail(h.error),
            u = Kt(Gt, h, t, b)) {
                if (b.readyState = 1,
                d && y.trigger("ajaxSend", [b, h]),
                p)
                    return b;
                h.async && 0 < h.timeout && (f = ne.setTimeout(function() {
                    b.abort("timeout")
                }, h.timeout));
                try {
                    p = !1,
                    u.send(o, w)
                } catch (e) {
                    if (p)
                        throw e;
                    w(-1, e)
                }
            } else
                w(-1, "No Transport");
            function w(e, t, n, r) {
                var i, o, a, s = t;
                p || (p = !0,
                f && ne.clearTimeout(f),
                u = void 0,
                c = r || "",
                b.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a = a || i
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(h, b, n)),
                !r && -1 < ue.inArray("script", h.dataTypes) && ue.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                ),
                a = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if (s = i.split(" "),
                                        s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, a, b, r),
                r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (ue.lastModified[l] = n),
                (n = b.getResponseHeader("etag")) && (ue.etag[l] = n)),
                204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state,
                i = a.data,
                r = !(o = a.error))) : (o = s,
                !e && s || (s = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || s) + "",
                r ? v.resolveWith(g, [i, s, b]) : v.rejectWith(g, [b, s, o]),
                b.statusCode(x),
                x = void 0,
                d && y.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? i : o]),
                m.fireWith(g, [b, s]),
                d && (y.trigger("ajaxComplete", [b, h]),
                --ue.active || ue.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, n) {
            return ue.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ue.get(e, void 0, t, "script")
        }
    }),
    ue.each(["get", "post"], function(e, i) {
        ue[i] = function(e, t, n, r) {
            return v(t) && (r = r || n,
            n = t,
            t = void 0),
            ue.ajax(ue.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, ue.isPlainObject(e) && e))
        }
    }),
    ue.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    ue._evalUrl = function(e, t, n) {
        return ue.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                ue.globalEval(e, t, n)
            }
        })
    }
    ,
    ue.fn.extend({
        wrapAll: function(e) {
            return this[0] && (v(e) && (e = e.call(this[0])),
            e = ue(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                ue(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = ue(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                ue(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ue(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    ue.expr.pseudos.hidden = function(e) {
        return !ue.expr.pseudos.visible(e)
    }
    ,
    ue.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    ue.ajaxSettings.xhr = function() {
        try {
            return new ne.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var en = {
        0: 200,
        1223: 204
    }
      , tn = ue.ajaxSettings.xhr();
    se.cors = !!tn && "withCredentials"in tn,
    se.ajax = tn = !!tn,
    ue.ajaxTransport(function(i) {
        var o, a;
        if (se.cors || tn && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(en[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && ne.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    ue.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    ue.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ue.globalEval(e),
                e
            }
        }
    }),
    ue.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    ue.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = ue("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    T.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var nn, rn = [], on = /(=)\?(?=&|$)|\?\?/;
    ue.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = rn.pop() || ue.expando + "_" + Ht.guid++;
            return this[e] = !0,
            e
        }
    }),
    ue.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(on, "$1" + r) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || ue.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = ne[r],
            ne[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? ue(ne).removeProp(r) : ne[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                rn.push(r)),
                o && v(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    se.createHTMLDocument = ((nn = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === nn.childNodes.length),
    ue.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (se.createHTMLDocument ? ((r = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href,
        t.head.appendChild(r)) : t = T),
        r = !n && [],
        (n = w.exec(e)) ? [t.createElement(n[1])] : (n = ke([e], t, r),
        r && r.length && ue(r).remove(),
        ue.merge([], n.childNodes)));
        var r
    }
    ,
    ue.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = At(e.slice(s)),
        e = e.slice(0, s)),
        v(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && ue.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? ue("<div>").append(ue.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    ue.expr.pseudos.animated = function(t) {
        return ue.grep(ue.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    ue.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s = ue.css(e, "position"), u = ue(e), l = {};
            "static" === s && (e.style.position = "relative"),
            o = u.offset(),
            r = ue.css(e, "top"),
            a = ue.css(e, "left"),
            a = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? (i = (s = u.position()).top,
            s.left) : (i = parseFloat(r) || 0,
            parseFloat(a) || 0),
            v(t) && (t = t.call(e, n, ue.extend({}, o))),
            null != t.top && (l.top = t.top - o.top + i),
            null != t.left && (l.left = t.left - o.left + a),
            "using"in t ? t.using.call(e, l) : u.css(l)
        }
    },
    ue.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    ue.offset.setOffset(this, t, e)
                });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === ue.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === ue.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = ue(e).offset()).top += ue.css(e, "borderTopWidth", !0),
                    i.left += ue.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - ue.css(r, "marginTop", !0),
                    left: t.left - i.left - ue.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ue.css(e, "position"); )
                    e = e.offsetParent;
                return e || J
            })
        }
    }),
    ue.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        ue.fn[t] = function(e) {
            return R(this, function(e, t, n) {
                var r;
                return g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }),
    ue.each(["top", "left"], function(e, n) {
        ue.cssHooks[n] = rt(se.pixelPosition, function(e, t) {
            if (t)
                return t = nt(e, n),
                Qe.test(t) ? ue(e).position()[n] + "px" : t
        })
    }),
    ue.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        ue.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            ue.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return R(this, function(e, t, n) {
                    var r;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ue.css(e, t, i) : ue.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ue.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ue.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    ue.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        ue.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var an = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    ue.proxy = function(e, t) {
        var n, r;
        if ("string" == typeof t && (r = e[t],
        t = e,
        e = r),
        v(e))
            return n = ie.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }
            ).guid = e.guid = e.guid || ue.guid++,
            r
    }
    ,
    ue.holdReady = function(e) {
        e ? ue.readyWait++ : ue.ready(!0)
    }
    ,
    ue.isArray = Array.isArray,
    ue.parseJSON = JSON.parse,
    ue.nodeName = le,
    ue.isFunction = v,
    ue.isWindow = g,
    ue.camelCase = F,
    ue.type = h,
    ue.now = Date.now,
    ue.isNumeric = function(e) {
        var t = ue.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    ue.trim = function(e) {
        return null == e ? "" : (e + "").replace(an, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ue
    });
    var sn = ne.jQuery
      , un = ne.$;
    return ue.noConflict = function(e) {
        return ne.$ === ue && (ne.$ = un),
        e && ne.jQuery === ue && (ne.jQuery = sn),
        ue
    }
    ,
    void 0 === e && (ne.jQuery = ne.$ = ue),
    ue
});
