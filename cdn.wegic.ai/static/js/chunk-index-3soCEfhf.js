var t = Math.pow;
import {
    g as e,
    r,
    k as n
} from "./chunk-index-wjlp3off.js";
import {
    i as o,
    _ as i,
    a,
    b as c,
    c as u,
    d as l,
    e as s,
    f,
    r as p,
    g as h,
    P as y,
    h as d
} from "./chunk-index-Ba4MOjoi.js";
import "./chunk-index-D4eDL30o.js";
var v = Array.isArray,
    m = v,
    b = o,
    g = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    w = /^\w*$/;
var O = function(t, e) {
        if (m(t)) return !1;
        var r = typeof t;
        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !b(t)) || (w.test(t) || !g.test(t) || null != e && t in Object(e))
    },
    x = i,
    j = a;
var S = function(t) {
    if (!j(t)) return !1;
    var e = x(t);
    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
};
const A = e(S);
var P, E = c["__core-js_shared__"],
    k = (P = /[^.]+$/.exec(E && E.keys && E.keys.IE_PROTO || "")) ? "Symbol(src)_1." + P : "";
var T = function(t) {
        return !!k && k in t
    },
    M = Function.prototype.toString;
var _ = function(t) {
        if (null != t) {
            try {
                return M.call(t)
            } catch (e) {}
            try {
                return t + ""
            } catch (e) {}
        }
        return ""
    },
    C = S,
    D = T,
    I = a,
    N = _,
    R = /^\[object .+?Constructor\]$/,
    B = Function.prototype,
    L = Object.prototype,
    z = B.toString,
    F = L.hasOwnProperty,
    U = RegExp("^" + z.call(F).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var W = function(t) {
        return !(!I(t) || D(t)) && (C(t) ? U : R).test(N(t))
    },
    $ = function(t, e) {
        return null == t ? void 0 : t[e]
    };
var K = function(t, e) {
        var r = $(t, e);
        return W(r) ? r : void 0
    },
    q = K(Object, "create"),
    V = q;
var X = function() {
    this.__data__ = V ? V(null) : {}, this.size = 0
};
var H = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    },
    G = q,
    Y = Object.prototype.hasOwnProperty;
var Z = function(t) {
        var e = this.__data__;
        if (G) {
            var r = e[t];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return Y.call(e, t) ? e[t] : void 0
    },
    J = q,
    Q = Object.prototype.hasOwnProperty;
var tt = q;
var et = X,
    rt = H,
    nt = Z,
    ot = function(t) {
        var e = this.__data__;
        return J ? void 0 !== e[t] : Q.call(e, t)
    },
    it = function(t, e) {
        var r = this.__data__;
        return this.size += this.has(t) ? 0 : 1, r[t] = tt && void 0 === e ? "__lodash_hash_undefined__" : e, this
    };

function at(t) {
    var e = -1,
        r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var n = t[e];
        this.set(n[0], n[1])
    }
}
at.prototype.clear = et, at.prototype.delete = rt, at.prototype.get = nt, at.prototype.has = ot, at.prototype.set = it;
var ct = at;
var ut = function() {
    this.__data__ = [], this.size = 0
};
var lt = function(t, e) {
        return t === e || t != t && e != e
    },
    st = lt;
var ft = function(t, e) {
        for (var r = t.length; r--;)
            if (st(t[r][0], e)) return r;
        return -1
    },
    pt = ft,
    ht = Array.prototype.splice;
var yt = ft;
var dt = ft;
var vt = ft;
var mt = ut,
    bt = function(t) {
        var e = this.__data__,
            r = pt(e, t);
        return !(r < 0) && (r == e.length - 1 ? e.pop() : ht.call(e, r, 1), --this.size, !0)
    },
    gt = function(t) {
        var e = this.__data__,
            r = yt(e, t);
        return r < 0 ? void 0 : e[r][1]
    },
    wt = function(t) {
        return dt(this.__data__, t) > -1
    },
    Ot = function(t, e) {
        var r = this.__data__,
            n = vt(r, t);
        return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
    };

function xt(t) {
    var e = -1,
        r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var n = t[e];
        this.set(n[0], n[1])
    }
}
xt.prototype.clear = mt, xt.prototype.delete = bt, xt.prototype.get = gt, xt.prototype.has = wt, xt.prototype.set = Ot;
var jt = xt,
    St = K(c, "Map"),
    At = ct,
    Pt = jt,
    Et = St;
var kt = function(t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
};
var Tt = function(t, e) {
        var r = t.__data__;
        return kt(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
    },
    Mt = Tt;
var _t = Tt;
var Ct = Tt;
var Dt = Tt;
var It = function() {
        this.size = 0, this.__data__ = {
            hash: new At,
            map: new(Et || Pt),
            string: new At
        }
    },
    Nt = function(t) {
        var e = Mt(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    },
    Rt = function(t) {
        return _t(this, t).get(t)
    },
    Bt = function(t) {
        return Ct(this, t).has(t)
    },
    Lt = function(t, e) {
        var r = Dt(this, t),
            n = r.size;
        return r.set(t, e), this.size += r.size == n ? 0 : 1, this
    };

function zt(t) {
    var e = -1,
        r = null == t ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var n = t[e];
        this.set(n[0], n[1])
    }
}
zt.prototype.clear = It, zt.prototype.delete = Nt, zt.prototype.get = Rt, zt.prototype.has = Bt, zt.prototype.set = Lt;
var Ft = zt,
    Ut = Ft;

function Wt(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
    var r = function() {
        var n = arguments,
            o = e ? e.apply(this, n) : n[0],
            i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = t.apply(this, n);
        return r.cache = i.set(o, a) || i, a
    };
    return r.cache = new(Wt.Cache || Ut), r
}
Wt.Cache = Ut;
var $t = Wt;
const Kt = e($t);
var qt = $t;
var Vt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Xt = /\\(\\)?/g,
    Ht = function(t) {
        var e = qt(t, (function(t) {
                return 500 === r.size && r.clear(), t
            })),
            r = e.cache;
        return e
    }((function(t) {
        var e = [];
        return 46 === t.charCodeAt(0) && e.push(""), t.replace(Vt, (function(t, r, n, o) {
            e.push(n ? o.replace(Xt, "$1") : r || t)
        })), e
    }));
var Gt = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);
        return o
    },
    Yt = Gt,
    Zt = v,
    Jt = o,
    Qt = u ? u.prototype : void 0,
    te = Qt ? Qt.toString : void 0;
var ee = function t(e) {
        if ("string" == typeof e) return e;
        if (Zt(e)) return Yt(e, t) + "";
        if (Jt(e)) return te ? te.call(e) : "";
        var r = e + "";
        return "0" == r && 1 / e == -1 / 0 ? "-0" : r
    },
    re = ee;
var ne = function(t) {
        return null == t ? "" : re(t)
    },
    oe = v,
    ie = O,
    ae = Ht,
    ce = ne;
var ue = function(t, e) {
        return oe(t) ? t : ie(t, e) ? [t] : ae(ce(t))
    },
    le = o;
var se = function(t) {
        if ("string" == typeof t || le(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e
    },
    fe = ue,
    pe = se;
var he = function(t, e) {
        for (var r = 0, n = (e = fe(e, t)).length; null != t && r < n;) t = t[pe(e[r++])];
        return r && r == n ? t : void 0
    },
    ye = he;
var de = function(t, e, r) {
    var n = null == t ? void 0 : ye(t, e);
    return void 0 === n ? r : n
};
const ve = e(de);
var me = jt;
var be = jt,
    ge = St,
    we = Ft;
var Oe = jt,
    xe = function() {
        this.__data__ = new me, this.size = 0
    },
    je = function(t) {
        var e = this.__data__,
            r = e.delete(t);
        return this.size = e.size, r
    },
    Se = function(t) {
        return this.__data__.get(t)
    },
    Ae = function(t) {
        return this.__data__.has(t)
    },
    Pe = function(t, e) {
        var r = this.__data__;
        if (r instanceof be) {
            var n = r.__data__;
            if (!ge || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new we(n)
        }
        return r.set(t, e), this.size = r.size, this
    };

function Ee(t) {
    var e = this.__data__ = new Oe(t);
    this.size = e.size
}
Ee.prototype.clear = xe, Ee.prototype.delete = je, Ee.prototype.get = Se, Ee.prototype.has = Ae, Ee.prototype.set = Pe;
var ke = Ee,
    Te = K,
    Me = function() {
        try {
            var t = Te(Object, "defineProperty");
            return t({}, "", {}), t
        } catch (e) {}
    }(),
    _e = Me;
var Ce = function(t, e, r) {
    "__proto__" == e && _e ? _e(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : t[e] = r
};
var De, Ie, Ne, Re, Be, Le, ze, Fe = function(t) {
        return function(e, r, n) {
            for (var o = -1, i = Object(e), a = n(e), c = a.length; c--;) {
                var u = a[t ? c : ++o];
                if (!1 === r(i[u], u, i)) break
            }
            return e
        }
    }(),
    Ue = {
        exports: {}
    };
De = Ue, Ne = c, Re = (Ie = Ue.exports) && !Ie.nodeType && Ie, Be = Re && De && !De.nodeType && De, Le = Be && Be.exports === Re ? Ne.Buffer : void 0, ze = Le ? Le.allocUnsafe : void 0, De.exports = function(t, e) {
    if (e) return t.slice();
    var r = t.length,
        n = ze ? ze(r) : new t.constructor(r);
    return t.copy(n), n
};
var We = Ue.exports,
    $e = c.Uint8Array,
    Ke = $e;
var qe = function(t) {
        var e = new t.constructor(t.byteLength);
        return new Ke(e).set(new Ke(t)), e
    },
    Ve = qe;
var Xe = function(t, e) {
    var r = e ? Ve(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.length)
};
var He = function(t, e) {
        var r = -1,
            n = t.length;
        for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
        return e
    },
    Ge = a,
    Ye = Object.create,
    Ze = function() {
        function t() {}
        return function(e) {
            if (!Ge(e)) return {};
            if (Ye) return Ye(e);
            t.prototype = e;
            var r = new t;
            return t.prototype = void 0, r
        }
    }();
var Je = function(t, e) {
        return function(r) {
            return t(e(r))
        }
    },
    Qe = Je(Object.getPrototypeOf, Object),
    tr = Object.prototype;
var er = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || tr)
    },
    rr = Ze,
    nr = Qe,
    or = er;
var ir = function(t) {
        return "function" != typeof t.constructor || or(t) ? {} : rr(nr(t))
    },
    ar = i,
    cr = l;
var ur = function(t) {
        return cr(t) && "[object Arguments]" == ar(t)
    },
    lr = l,
    sr = Object.prototype,
    fr = sr.hasOwnProperty,
    pr = sr.propertyIsEnumerable,
    hr = ur(function() {
        return arguments
    }()) ? ur : function(t) {
        return lr(t) && fr.call(t, "callee") && !pr.call(t, "callee")
    };
var yr = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
    },
    dr = S,
    vr = yr;
var mr = function(t) {
        return null != t && vr(t.length) && !dr(t)
    },
    br = {
        exports: {}
    };
var gr = function() {
    return !1
};
! function(t, e) {
    var r = c,
        n = gr,
        o = e && !e.nodeType && e,
        i = o && t && !t.nodeType && t,
        a = i && i.exports === o ? r.Buffer : void 0,
        u = (a ? a.isBuffer : void 0) || n;
    t.exports = u
}(br, br.exports);
var wr = br.exports,
    Or = i,
    xr = Qe,
    jr = l,
    Sr = Function.prototype,
    Ar = Object.prototype,
    Pr = Sr.toString,
    Er = Ar.hasOwnProperty,
    kr = Pr.call(Object);
var Tr = function(t) {
    if (!jr(t) || "[object Object]" != Or(t)) return !1;
    var e = xr(t);
    if (null === e) return !0;
    var r = Er.call(e, "constructor") && e.constructor;
    return "function" == typeof r && r instanceof r && Pr.call(r) == kr
};
const Mr = e(Tr);
var _r = i,
    Cr = yr,
    Dr = l,
    Ir = {};
Ir["[object Float32Array]"] = Ir["[object Float64Array]"] = Ir["[object Int8Array]"] = Ir["[object Int16Array]"] = Ir["[object Int32Array]"] = Ir["[object Uint8Array]"] = Ir["[object Uint8ClampedArray]"] = Ir["[object Uint16Array]"] = Ir["[object Uint32Array]"] = !0, Ir["[object Arguments]"] = Ir["[object Array]"] = Ir["[object ArrayBuffer]"] = Ir["[object Boolean]"] = Ir["[object DataView]"] = Ir["[object Date]"] = Ir["[object Error]"] = Ir["[object Function]"] = Ir["[object Map]"] = Ir["[object Number]"] = Ir["[object Object]"] = Ir["[object RegExp]"] = Ir["[object Set]"] = Ir["[object String]"] = Ir["[object WeakMap]"] = !1;
var Nr = function(t) {
    return Dr(t) && Cr(t.length) && !!Ir[_r(t)]
};
var Rr = function(t) {
        return function(e) {
            return t(e)
        }
    },
    Br = {
        exports: {}
    };
! function(t, e) {
    var r = s,
        n = e && !e.nodeType && e,
        o = n && t && !t.nodeType && t,
        i = o && o.exports === n && r.process,
        a = function() {
            try {
                var t = o && o.require && o.require("util").types;
                return t || i && i.binding && i.binding("util")
            } catch (e) {}
        }();
    t.exports = a
}(Br, Br.exports);
var Lr = Br.exports,
    zr = Nr,
    Fr = Rr,
    Ur = Lr && Lr.isTypedArray,
    Wr = Ur ? Fr(Ur) : zr,
    $r = Ce,
    Kr = lt,
    qr = Object.prototype.hasOwnProperty;
var Vr = function(t, e, r) {
        var n = t[e];
        qr.call(t, e) && Kr(n, r) && (void 0 !== r || e in t) || $r(t, e, r)
    },
    Xr = Vr,
    Hr = Ce;
var Gr = function(t, e, r, n) {
    var o = !r;
    r || (r = {});
    for (var i = -1, a = e.length; ++i < a;) {
        var c = e[i],
            u = n ? n(r[c], t[c], c, r, t) : void 0;
        void 0 === u && (u = t[c]), o ? Hr(r, c, u) : Xr(r, c, u)
    }
    return r
};
var Yr = /^(?:0|[1-9]\d*)$/;
var Zr = function(t, e) {
        var r = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && Yr.test(t)) && t > -1 && t % 1 == 0 && t < e
    },
    Jr = function(t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
        return n
    },
    Qr = hr,
    tn = v,
    en = wr,
    rn = Zr,
    nn = Wr,
    on = Object.prototype.hasOwnProperty;
var an = function(t, e) {
    var r = tn(t),
        n = !r && Qr(t),
        o = !r && !n && en(t),
        i = !r && !n && !o && nn(t),
        a = r || n || o || i,
        c = a ? Jr(t.length, String) : [],
        u = c.length;
    for (var l in t) !e && !on.call(t, l) || a && ("length" == l || o && ("offset" == l || "parent" == l) || i && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || rn(l, u)) || c.push(l);
    return c
};
var cn = a,
    un = er,
    ln = function(t) {
        var e = [];
        if (null != t)
            for (var r in Object(t)) e.push(r);
        return e
    },
    sn = Object.prototype.hasOwnProperty;
var fn = an,
    pn = function(t) {
        if (!cn(t)) return ln(t);
        var e = un(t),
            r = [];
        for (var n in t)("constructor" != n || !e && sn.call(t, n)) && r.push(n);
        return r
    },
    hn = mr;
var yn = function(t) {
    return hn(t) ? fn(t, !0) : pn(t)
};
var dn = function(t) {
    return t
};
var vn = function(t, e, r) {
        switch (r.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, r[0]);
            case 2:
                return t.call(e, r[0], r[1]);
            case 3:
                return t.call(e, r[0], r[1], r[2])
        }
        return t.apply(e, r)
    },
    mn = Math.max;
var bn = function(t, e, r) {
    return e = mn(void 0 === e ? t.length - 1 : e, 0),
        function() {
            for (var n = arguments, o = -1, i = mn(n.length - e, 0), a = Array(i); ++o < i;) a[o] = n[e + o];
            o = -1;
            for (var c = Array(e + 1); ++o < e;) c[o] = n[o];
            return c[e] = r(a), vn(t, this, c)
        }
};
var gn = function(t) {
        return function() {
            return t
        }
    },
    wn = Me,
    On = wn ? function(t, e) {
        return wn(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: gn(e),
            writable: !0
        })
    } : dn,
    xn = Date.now;
var jn = function(t) {
        var e = 0,
            r = 0;
        return function() {
            var n = xn(),
                o = 16 - (n - r);
            if (r = n, o > 0) {
                if (++e >= 800) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }(On),
    Sn = dn,
    An = bn,
    Pn = jn;
var En = function(t, e) {
        return Pn(An(t, e, Sn), t + "")
    },
    kn = lt,
    Tn = mr,
    Mn = Zr,
    _n = a;
var Cn = function(t, e, r) {
    if (!_n(r)) return !1;
    var n = typeof e;
    return !!("number" == n ? Tn(r) && Mn(e, r.length) : "string" == n && e in r) && kn(r[e], t)
};
var Dn = Ft,
    In = function(t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this
    },
    Nn = function(t) {
        return this.__data__.has(t)
    };

function Rn(t) {
    var e = -1,
        r = null == t ? 0 : t.length;
    for (this.__data__ = new Dn; ++e < r;) this.add(t[e])
}
Rn.prototype.add = Rn.prototype.push = In, Rn.prototype.has = Nn;
var Bn = Rn;
var Ln = function(t, e) {
    for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
        if (e(t[r], r, t)) return !0;
    return !1
};
var zn = function(t, e) {
        return t.has(e)
    },
    Fn = Bn,
    Un = Ln,
    Wn = zn;
var $n = function(t, e, r, n, o, i) {
    var a = 1 & r,
        c = t.length,
        u = e.length;
    if (c != u && !(a && u > c)) return !1;
    var l = i.get(t),
        s = i.get(e);
    if (l && s) return l == e && s == t;
    var f = -1,
        p = !0,
        h = 2 & r ? new Fn : void 0;
    for (i.set(t, e), i.set(e, t); ++f < c;) {
        var y = t[f],
            d = e[f];
        if (n) var v = a ? n(d, y, f, e, t, i) : n(y, d, f, t, e, i);
        if (void 0 !== v) {
            if (v) continue;
            p = !1;
            break
        }
        if (h) {
            if (!Un(e, (function(t, e) {
                    if (!Wn(h, e) && (y === t || o(y, t, r, n, i))) return h.push(e)
                }))) {
                p = !1;
                break
            }
        } else if (y !== d && !o(y, d, r, n, i)) {
            p = !1;
            break
        }
    }
    return i.delete(t), i.delete(e), p
};
var Kn = function(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach((function(t) {
            r[++e] = t
        })), r
    },
    qn = $e,
    Vn = lt,
    Xn = $n,
    Hn = function(t) {
        var e = -1,
            r = Array(t.size);
        return t.forEach((function(t, n) {
            r[++e] = [n, t]
        })), r
    },
    Gn = Kn,
    Yn = u ? u.prototype : void 0,
    Zn = Yn ? Yn.valueOf : void 0;
var Jn = function(t, e, r, n, o, i, a) {
    switch (r) {
        case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
            t = t.buffer, e = e.buffer;
        case "[object ArrayBuffer]":
            return !(t.byteLength != e.byteLength || !i(new qn(t), new qn(e)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
            return Vn(+t, +e);
        case "[object Error]":
            return t.name == e.name && t.message == e.message;
        case "[object RegExp]":
        case "[object String]":
            return t == e + "";
        case "[object Map]":
            var c = Hn;
        case "[object Set]":
            var u = 1 & n;
            if (c || (c = Gn), t.size != e.size && !u) return !1;
            var l = a.get(t);
            if (l) return l == e;
            n |= 2, a.set(t, e);
            var s = Xn(c(t), c(e), n, o, i, a);
            return a.delete(t), s;
        case "[object Symbol]":
            if (Zn) return Zn.call(t) == Zn.call(e)
    }
    return !1
};
var Qn = function(t, e) {
        for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
        return t
    },
    to = Qn,
    eo = v;
var ro = function(t, e, r) {
    var n = e(t);
    return eo(t) ? n : to(n, r(t))
};
var no = function() {
        return []
    },
    oo = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
            var a = t[r];
            e(a, r, t) && (i[o++] = a)
        }
        return i
    },
    io = no,
    ao = Object.prototype.propertyIsEnumerable,
    co = Object.getOwnPropertySymbols,
    uo = co ? function(t) {
        return null == t ? [] : (t = Object(t), oo(co(t), (function(e) {
            return ao.call(t, e)
        })))
    } : io,
    lo = Je(Object.keys, Object),
    so = er,
    fo = lo,
    po = Object.prototype.hasOwnProperty;
var ho = an,
    yo = function(t) {
        if (!so(t)) return fo(t);
        var e = [];
        for (var r in Object(t)) po.call(t, r) && "constructor" != r && e.push(r);
        return e
    },
    vo = mr;
var mo = function(t) {
        return vo(t) ? ho(t) : yo(t)
    },
    bo = ro,
    go = uo,
    wo = mo;
var Oo = function(t) {
        return bo(t, wo, go)
    },
    xo = Oo,
    jo = Object.prototype.hasOwnProperty;
var So = function(t, e, r, n, o, i) {
        var a = 1 & r,
            c = xo(t),
            u = c.length;
        if (u != xo(e).length && !a) return !1;
        for (var l = u; l--;) {
            var s = c[l];
            if (!(a ? s in e : jo.call(e, s))) return !1
        }
        var f = i.get(t),
            p = i.get(e);
        if (f && p) return f == e && p == t;
        var h = !0;
        i.set(t, e), i.set(e, t);
        for (var y = a; ++l < u;) {
            var d = t[s = c[l]],
                v = e[s];
            if (n) var m = a ? n(v, d, s, e, t, i) : n(d, v, s, t, e, i);
            if (!(void 0 === m ? d === v || o(d, v, r, n, i) : m)) {
                h = !1;
                break
            }
            y || (y = "constructor" == s)
        }
        if (h && !y) {
            var b = t.constructor,
                g = e.constructor;
            b == g || !("constructor" in t) || !("constructor" in e) || "function" == typeof b && b instanceof b && "function" == typeof g && g instanceof g || (h = !1)
        }
        return i.delete(t), i.delete(e), h
    },
    Ao = K(c, "DataView"),
    Po = K(c, "Promise"),
    Eo = K(c, "Set"),
    ko = Ao,
    To = St,
    Mo = Po,
    _o = Eo,
    Co = K(c, "WeakMap"),
    Do = i,
    Io = _,
    No = "[object Map]",
    Ro = "[object Promise]",
    Bo = "[object Set]",
    Lo = "[object WeakMap]",
    zo = "[object DataView]",
    Fo = Io(ko),
    Uo = Io(To),
    Wo = Io(Mo),
    $o = Io(_o),
    Ko = Io(Co),
    qo = Do;
(ko && qo(new ko(new ArrayBuffer(1))) != zo || To && qo(new To) != No || Mo && qo(Mo.resolve()) != Ro || _o && qo(new _o) != Bo || Co && qo(new Co) != Lo) && (qo = function(t) {
    var e = Do(t),
        r = "[object Object]" == e ? t.constructor : void 0,
        n = r ? Io(r) : "";
    if (n) switch (n) {
        case Fo:
            return zo;
        case Uo:
            return No;
        case Wo:
            return Ro;
        case $o:
            return Bo;
        case Ko:
            return Lo
    }
    return e
});
var Vo = qo,
    Xo = ke,
    Ho = $n,
    Go = Jn,
    Yo = So,
    Zo = Vo,
    Jo = v,
    Qo = wr,
    ti = Wr,
    ei = "[object Arguments]",
    ri = "[object Array]",
    ni = "[object Object]",
    oi = Object.prototype.hasOwnProperty;
var ii = function(t, e, r, n, o, i) {
        var a = Jo(t),
            c = Jo(e),
            u = a ? ri : Zo(t),
            l = c ? ri : Zo(e),
            s = (u = u == ei ? ni : u) == ni,
            f = (l = l == ei ? ni : l) == ni,
            p = u == l;
        if (p && Qo(t)) {
            if (!Qo(e)) return !1;
            a = !0, s = !1
        }
        if (p && !s) return i || (i = new Xo), a || ti(t) ? Ho(t, e, r, n, o, i) : Go(t, e, u, r, n, o, i);
        if (!(1 & r)) {
            var h = s && oi.call(t, "__wrapped__"),
                y = f && oi.call(e, "__wrapped__");
            if (h || y) {
                var d = h ? t.value() : t,
                    v = y ? e.value() : e;
                return i || (i = new Xo), o(d, v, r, n, i)
            }
        }
        return !!p && (i || (i = new Xo), Yo(t, e, r, n, o, i))
    },
    ai = l;
var ci = function t(e, r, n, o, i) {
        return e === r || (null == e || null == r || !ai(e) && !ai(r) ? e != e && r != r : ii(e, r, n, o, t, i))
    },
    ui = ue,
    li = hr,
    si = v,
    fi = Zr,
    pi = yr,
    hi = se;
var yi = function(t, e, r) {
    for (var n = -1, o = (e = ui(e, t)).length, i = !1; ++n < o;) {
        var a = hi(e[n]);
        if (!(i = null != t && r(t, a))) break;
        t = t[a]
    }
    return i || ++n != o ? i : !!(o = null == t ? 0 : t.length) && pi(o) && fi(a, o) && (si(t) || li(t))
};
var di = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
        return t
    },
    vi = Gr,
    mi = mo;
var bi = function(t, e) {
        return t && vi(e, mi(e), t)
    },
    gi = Gr,
    wi = yn;
var Oi = function(t, e) {
        return t && gi(e, wi(e), t)
    },
    xi = Gr,
    ji = uo;
var Si = function(t, e) {
        return xi(t, ji(t), e)
    },
    Ai = Qn,
    Pi = Qe,
    Ei = uo,
    ki = no,
    Ti = Object.getOwnPropertySymbols ? function(t) {
        for (var e = []; t;) Ai(e, Ei(t)), t = Pi(t);
        return e
    } : ki,
    Mi = Gr,
    _i = Ti;
var Ci = function(t, e) {
        return Mi(t, _i(t), e)
    },
    Di = ro,
    Ii = Ti,
    Ni = yn;
var Ri = function(t) {
        return Di(t, Ni, Ii)
    },
    Bi = Object.prototype.hasOwnProperty;
var Li = function(t) {
        var e = t.length,
            r = new t.constructor(e);
        return e && "string" == typeof t[0] && Bi.call(t, "index") && (r.index = t.index, r.input = t.input), r
    },
    zi = qe;
var Fi = function(t, e) {
        var r = e ? zi(t.buffer) : t.buffer;
        return new t.constructor(r, t.byteOffset, t.byteLength)
    },
    Ui = /\w*$/;
var Wi = function(t) {
        var e = new t.constructor(t.source, Ui.exec(t));
        return e.lastIndex = t.lastIndex, e
    },
    $i = u ? u.prototype : void 0,
    Ki = $i ? $i.valueOf : void 0;
var qi = qe,
    Vi = Fi,
    Xi = Wi,
    Hi = function(t) {
        return Ki ? Object(Ki.call(t)) : {}
    },
    Gi = Xe;
var Yi = function(t, e, r) {
        var n = t.constructor;
        switch (e) {
            case "[object ArrayBuffer]":
                return qi(t);
            case "[object Boolean]":
            case "[object Date]":
                return new n(+t);
            case "[object DataView]":
                return Vi(t, r);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return Gi(t, r);
            case "[object Map]":
            case "[object Set]":
                return new n;
            case "[object Number]":
            case "[object String]":
                return new n(t);
            case "[object RegExp]":
                return Xi(t);
            case "[object Symbol]":
                return Hi(t)
        }
    },
    Zi = Vo,
    Ji = l;
var Qi = function(t) {
        return Ji(t) && "[object Map]" == Zi(t)
    },
    ta = Rr,
    ea = Lr && Lr.isMap,
    ra = ea ? ta(ea) : Qi,
    na = Vo,
    oa = l;
var ia = function(t) {
        return oa(t) && "[object Set]" == na(t)
    },
    aa = Rr,
    ca = Lr && Lr.isSet,
    ua = ca ? aa(ca) : ia,
    la = ke,
    sa = di,
    fa = Vr,
    pa = bi,
    ha = Oi,
    ya = We,
    da = He,
    va = Si,
    ma = Ci,
    ba = Oo,
    ga = Ri,
    wa = Vo,
    Oa = Li,
    xa = Yi,
    ja = ir,
    Sa = v,
    Aa = wr,
    Pa = ra,
    Ea = a,
    ka = ua,
    Ta = mo,
    Ma = yn,
    _a = "[object Arguments]",
    Ca = "[object Function]",
    Da = "[object Object]",
    Ia = {};
Ia[_a] = Ia["[object Array]"] = Ia["[object ArrayBuffer]"] = Ia["[object DataView]"] = Ia["[object Boolean]"] = Ia["[object Date]"] = Ia["[object Float32Array]"] = Ia["[object Float64Array]"] = Ia["[object Int8Array]"] = Ia["[object Int16Array]"] = Ia["[object Int32Array]"] = Ia["[object Map]"] = Ia["[object Number]"] = Ia[Da] = Ia["[object RegExp]"] = Ia["[object Set]"] = Ia["[object String]"] = Ia["[object Symbol]"] = Ia["[object Uint8Array]"] = Ia["[object Uint8ClampedArray]"] = Ia["[object Uint16Array]"] = Ia["[object Uint32Array]"] = !0, Ia["[object Error]"] = Ia[Ca] = Ia["[object WeakMap]"] = !1;
var Na = function t(e, r, n, o, i, a) {
    var c, u = 1 & r,
        l = 2 & r,
        s = 4 & r;
    if (n && (c = i ? n(e, o, i, a) : n(e)), void 0 !== c) return c;
    if (!Ea(e)) return e;
    var f = Sa(e);
    if (f) {
        if (c = Oa(e), !u) return da(e, c)
    } else {
        var p = wa(e),
            h = p == Ca || "[object GeneratorFunction]" == p;
        if (Aa(e)) return ya(e, u);
        if (p == Da || p == _a || h && !i) {
            if (c = l || h ? {} : ja(e), !u) return l ? ma(e, ha(c, e)) : va(e, pa(c, e))
        } else {
            if (!Ia[p]) return i ? e : {};
            c = xa(e, p, u)
        }
    }
    a || (a = new la);
    var y = a.get(e);
    if (y) return y;
    a.set(e, c), ka(e) ? e.forEach((function(o) {
        c.add(t(o, r, n, o, e, a))
    })) : Pa(e) && e.forEach((function(o, i) {
        c.set(i, t(o, r, n, i, e, a))
    }));
    var d = f ? void 0 : (s ? l ? ga : ba : l ? Ma : Ta)(e);
    return sa(d || e, (function(o, i) {
        d && (o = e[i = o]), fa(c, i, t(o, r, n, i, e, a))
    })), c
};
var Ra = function(t) {
    var e = null == t ? 0 : t.length;
    return e ? t[e - 1] : void 0
};
const Ba = e(Ra);
var La = function(t, e, r) {
        var n = -1,
            o = t.length;
        e < 0 && (e = -e > o ? 0 : o + e), (r = r > o ? o : r) < 0 && (r += o), o = e > r ? 0 : r - e >>> 0, e >>>= 0;
        for (var i = Array(o); ++n < o;) i[n] = t[n + e];
        return i
    },
    za = he,
    Fa = La;
var Ua = ue,
    Wa = Ra,
    $a = function(t, e) {
        return e.length < 2 ? t : za(t, Fa(e, 0, -1))
    },
    Ka = se;
var qa = function(t, e) {
        return e = Ua(e, t), null == (t = $a(t, e)) || delete t[Ka(Wa(e))]
    },
    Va = Tr;
var Xa = function(t) {
        return Va(t) ? void 0 : t
    },
    Ha = hr,
    Ga = v,
    Ya = u ? u.isConcatSpreadable : void 0;
var Za = Qn,
    Ja = function(t) {
        return Ga(t) || Ha(t) || !!(Ya && t && t[Ya])
    };
var Qa = function t(e, r, n, o, i) {
        var a = -1,
            c = e.length;
        for (n || (n = Ja), i || (i = []); ++a < c;) {
            var u = e[a];
            r > 0 && n(u) ? r > 1 ? t(u, r - 1, n, o, i) : Za(i, u) : o || (i[i.length] = u)
        }
        return i
    },
    tc = Qa;
var ec = function(t) {
        return (null == t ? 0 : t.length) ? tc(t, 1) : []
    },
    rc = bn,
    nc = jn;
var oc = Gt,
    ic = Na,
    ac = qa,
    cc = ue,
    uc = Gr,
    lc = Xa,
    sc = Ri;
const fc = e(function(t) {
    return nc(rc(t, void 0, ec), t + "")
}((function(t, e) {
    var r = {};
    if (null == t) return r;
    var n = !1;
    e = oc(e, (function(e) {
        return e = cc(e, t), n || (n = e.length > 1), e
    })), uc(t, sc(t), r), n && (r = ic(r, 7, lc));
    for (var o = e.length; o--;) ac(r, e[o]);
    return r
})));

function pc(t) {
    var e, r, n = "";
    if ("string" == typeof t || "number" == typeof t) n += t;
    else if ("object" == typeof t)
        if (Array.isArray(t)) {
            var o = t.length;
            for (e = 0; e < o; e++) t[e] && (r = pc(t[e])) && (n && (n += " "), n += r)
        } else
            for (r in t) t[r] && (n && (n += " "), n += r);
    return n
}

function hc() {
    for (var t, e, r = 0, n = "", o = arguments.length; r < o; r++)(t = arguments[r]) && (e = pc(t)) && (n && (n += " "), n += e);
    return n
}
const yc = e((function(t) {
    return null == t
}));
var dc = i,
    vc = v,
    mc = l;
const bc = e((function(t) {
    return "string" == typeof t || !vc(t) && mc(t) && "[object String]" == dc(t)
}));
var gc = i,
    wc = l;
var Oc = function(t) {
    return "number" == typeof t || wc(t) && "[object Number]" == gc(t)
};
const xc = e(Oc);
var jc = Oc;
const Sc = e((function(t) {
    return jc(t) && t != +t
}));
var Ac = function(t) {
        return 0 === t ? 0 : t > 0 ? 1 : -1
    },
    Pc = function(t) {
        return bc(t) && t.indexOf("%") === t.length - 1
    },
    Ec = function(t) {
        return xc(t) && !Sc(t)
    },
    kc = function(t) {
        return Ec(t) || bc(t)
    },
    Tc = 0,
    Mc = function(t) {
        var e = ++Tc;
        return "".concat(t || "").concat(e)
    },
    _c = function(t, e) {
        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Ec(t) && !bc(t)) return n;
        if (Pc(t)) {
            var i = t.indexOf("%");
            r = e * parseFloat(t.slice(0, i)) / 100
        } else r = +t;
        return Sc(r) && (r = n), o && r > e && (r = e), r
    },
    Cc = function(t) {
        if (!t) return null;
        var e = Object.keys(t);
        return e && e.length ? t[e[0]] : null
    },
    Dc = function(t, e) {
        return Ec(t) && Ec(e) ? function(r) {
            return t + r * (e - t)
        } : function() {
            return e
        }
    };

function Ic(t, e, r) {
    return t && t.length ? t.find((function(t) {
        return t && ("function" == typeof e ? e(t) : ve(t, e)) === r
    })) : null
}
var Nc = function(t, e) {
    return Ec(t) && Ec(e) ? t - e : bc(t) && bc(e) ? t.localeCompare(e) : t instanceof Date && e instanceof Date ? t.getTime() - e.getTime() : String(t).localeCompare(String(e))
};

function Rc(t, e) {
    for (var r in t)
        if ({}.hasOwnProperty.call(t, r) && (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])) return !1;
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n)) return !1;
    return !0
}

function Bc(t) {
    return (Bc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
var Lc = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
    zc = ["points", "pathLength"],
    Fc = {
        svg: ["viewBox", "children"],
        polygon: zc,
        polyline: zc
    },
    Uc = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
    Wc = function(t, e) {
        if (!t || "function" == typeof t || "boolean" == typeof t) return null;
        var n = t;
        if (r.isValidElement(t) && (n = t.props), !f(n)) return null;
        var o = {};
        return Object.keys(n).forEach((function(t) {
            Uc.includes(t) && (o[t] = e || function(e) {
                return n[t](n, e)
            })
        })), o
    },
    $c = function(t, e, r) {
        if (!f(t) || "object" !== Bc(t)) return null;
        var n = null;
        return Object.keys(t).forEach((function(o) {
            var i = t[o];
            Uc.includes(o) && "function" == typeof i && (n || (n = {}), n[o] = function(t, e, r) {
                return function(n) {
                    return t(e, r, n), null
                }
            }(i, e, r))
        })), n
    },
    Kc = ["children"],
    qc = ["children"];

function Vc(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function Xc(t) {
    return (Xc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
var Hc = {
        click: "onClick",
        mousedown: "onMouseDown",
        mouseup: "onMouseUp",
        mouseover: "onMouseOver",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        touchcancel: "onTouchCancel",
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart",
        contextmenu: "onContextMenu",
        dblclick: "onDoubleClick"
    },
    Gc = function(t) {
        return "string" == typeof t ? t : t ? t.displayName || t.name || "Component" : ""
    },
    Yc = null,
    Zc = null,
    Jc = function t(e) {
        if (e === Yc && Array.isArray(Zc)) return Zc;
        var n = [];
        return r.Children.forEach(e, (function(e) {
            yc(e) || (p.isFragment(e) ? n = n.concat(t(e.props.children)) : n.push(e))
        })), Zc = n, Yc = e, n
    };

function Qc(t, e) {
    var r = [],
        n = [];
    return n = Array.isArray(e) ? e.map((function(t) {
        return Gc(t)
    })) : [Gc(e)], Jc(t).forEach((function(t) {
        var e = ve(t, "type.displayName") || ve(t, "type.name"); - 1 !== n.indexOf(e) && r.push(t)
    })), r
}

function tu(t, e) {
    var r = Qc(t, e);
    return r && r[0]
}
var eu = function(t) {
        if (!t || !t.props) return !1;
        var e = t.props,
            r = e.width,
            n = e.height;
        return !(!Ec(r) || r <= 0 || !Ec(n) || n <= 0)
    },
    ru = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
    nu = function(t) {
        return t && t.type && bc(t.type) && ru.indexOf(t.type) >= 0
    },
    ou = function(t) {
        return t && "object" === Xc(t) && "clipDot" in t
    },
    iu = function(t) {
        var e = [];
        return Jc(t).forEach((function(t) {
            nu(t) && e.push(t)
        })), e
    },
    au = function(t, e, n) {
        if (!t || "function" == typeof t || "boolean" == typeof t) return null;
        var o = t;
        if (r.isValidElement(t) && (o = t.props), !f(o)) return null;
        var i = {};
        return Object.keys(o).forEach((function(t) {
            var r;
            (function(t, e, r, n) {
                var o, i = null !== (o = null == Fc ? void 0 : Fc[n]) && void 0 !== o ? o : [];
                return e.startsWith("data-") || !A(t) && (n && i.includes(e) || Lc.includes(e)) || r && Uc.includes(e)
            })(null === (r = o) || void 0 === r ? void 0 : r[t], t, e, n) && (i[t] = o[t])
        })), i
    },
    cu = function t(e, n) {
        if (e === n) return !0;
        var o = r.Children.count(e);
        if (o !== r.Children.count(n)) return !1;
        if (0 === o) return !0;
        if (1 === o) return uu(Array.isArray(e) ? e[0] : e, Array.isArray(n) ? n[0] : n);
        for (var i = 0; i < o; i++) {
            var a = e[i],
                c = n[i];
            if (Array.isArray(a) || Array.isArray(c)) {
                if (!t(a, c)) return !1
            } else if (!uu(a, c)) return !1
        }
        return !0
    },
    uu = function(t, e) {
        if (yc(t) && yc(e)) return !0;
        if (!yc(t) && !yc(e)) {
            var r = t.props || {},
                n = r.children,
                o = Vc(r, Kc),
                i = e.props || {},
                a = i.children,
                c = Vc(i, qc);
            return n && a ? Rc(o, c) && cu(n, a) : !n && !a && Rc(o, c)
        }
        return !1
    },
    lu = function(t, e) {
        var r = [],
            n = {};
        return Jc(t).forEach((function(t, o) {
            if (nu(t)) r.push(t);
            else if (t) {
                var i = Gc(t.type),
                    a = e[i] || {},
                    c = a.handler,
                    u = a.once;
                if (c && (!u || !n[i])) {
                    var l = c(t, i, o);
                    r.push(l), n[i] = !0
                }
            }
        })), r
    },
    su = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

function fu() {
    return fu = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, fu.apply(this, arguments)
}

function pu(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function hu(t) {
    var e = t.children,
        r = t.width,
        o = t.height,
        i = t.viewBox,
        a = t.className,
        c = t.style,
        u = t.title,
        l = t.desc,
        s = pu(t, su),
        f = i || {
            width: r,
            height: o,
            x: 0,
            y: 0
        },
        p = hc("recharts-surface", a);
    return n.createElement("svg", fu({}, au(s, !0, "svg"), {
        className: p,
        width: r,
        height: o,
        style: c,
        viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
    }), n.createElement("title", null, u), n.createElement("desc", null, l), e)
}
var yu = ["children", "className"];

function du() {
    return du = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, du.apply(this, arguments)
}

function vu(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}
var mu = n.forwardRef((function(t, e) {
        var r = t.children,
            o = t.className,
            i = vu(t, yu),
            a = hc("recharts-layer", o);
        return n.createElement("g", du({
            className: a
        }, au(i, !0), {
            ref: e
        }), r)
    })),
    bu = function(t, e) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o]
    },
    gu = La;
var wu = function(t, e, r) {
        var n = t.length;
        return r = void 0 === r ? n : r, !e && r >= n ? t : gu(t, e, r)
    },
    Ou = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
var xu = function(t) {
    return Ou.test(t)
};
var ju = function(t) {
        return t.split("")
    },
    Su = "\\ud800-\\udfff",
    Au = "[" + Su + "]",
    Pu = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    Eu = "\\ud83c[\\udffb-\\udfff]",
    ku = "[^" + Su + "]",
    Tu = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Mu = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    _u = "(?:" + Pu + "|" + Eu + ")" + "?",
    Cu = "[\\ufe0e\\ufe0f]?",
    Du = Cu + _u + ("(?:\\u200d(?:" + [ku, Tu, Mu].join("|") + ")" + Cu + _u + ")*"),
    Iu = "(?:" + [ku + Pu + "?", Pu, Tu, Mu, Au].join("|") + ")",
    Nu = RegExp(Eu + "(?=" + Eu + ")|" + Iu + Du, "g");
var Ru = ju,
    Bu = xu,
    Lu = function(t) {
        return t.match(Nu) || []
    };
var zu = wu,
    Fu = xu,
    Uu = function(t) {
        return Bu(t) ? Lu(t) : Ru(t)
    },
    Wu = ne;
const $u = e(function(t) {
    return function(e) {
        e = Wu(e);
        var r = Fu(e) ? Uu(e) : void 0,
            n = r ? r[0] : e.charAt(0),
            o = r ? zu(r, 1).join("") : e.slice(1);
        return n[t]() + o
    }
}("toUpperCase"));

function Ku(t) {
    return function() {
        return t
    }
}
const qu = Math.cos,
    Vu = Math.sin,
    Xu = Math.sqrt,
    Hu = Math.PI,
    Gu = 2 * Hu,
    Yu = Math.PI,
    Zu = 2 * Yu,
    Ju = 1e-6,
    Qu = Zu - Ju;

function tl(t) {
    this._ += t[0];
    for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e]
}
class el {
    constructor(e) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == e ? tl : function(e) {
            let r = Math.floor(e);
            if (!(r >= 0)) throw new Error(`invalid digits: ${e}`);
            if (r > 15) return tl;
            const n = t(10, r);
            return function(t) {
                this._ += t[0];
                for (let e = 1, r = t.length; e < r; ++e) this._ += Math.round(arguments[e] * n) / n + t[e]
            }
        }(e)
    }
    moveTo(t, e) {
        this._append `M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`
    }
    closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append `Z`)
    }
    lineTo(t, e) {
        this._append `L${this._x1=+t},${this._y1=+e}`
    }
    quadraticCurveTo(t, e, r, n) {
        this._append `Q${+t},${+e},${this._x1=+r},${this._y1=+n}`
    }
    bezierCurveTo(t, e, r, n, o, i) {
        this._append `C${+t},${+e},${+r},${+n},${this._x1=+o},${this._y1=+i}`
    }
    arcTo(t, e, r, n, o) {
        if (t = +t, e = +e, r = +r, n = +n, (o = +o) < 0) throw new Error(`negative radius: ${o}`);
        let i = this._x1,
            a = this._y1,
            c = r - t,
            u = n - e,
            l = i - t,
            s = a - e,
            f = l * l + s * s;
        if (null === this._x1) this._append `M${this._x1=t},${this._y1=e}`;
        else if (f > Ju)
            if (Math.abs(s * c - u * l) > Ju && o) {
                let p = r - i,
                    h = n - a,
                    y = c * c + u * u,
                    d = p * p + h * h,
                    v = Math.sqrt(y),
                    m = Math.sqrt(f),
                    b = o * Math.tan((Yu - Math.acos((y + f - d) / (2 * v * m))) / 2),
                    g = b / m,
                    w = b / v;
                Math.abs(g - 1) > Ju && this._append `L${t+g*l},${e+g*s}`, this._append `A${o},${o},0,0,${+(s*p>l*h)},${this._x1=t+w*c},${this._y1=e+w*u}`
            } else this._append `L${this._x1=t},${this._y1=e}`;
        else;
    }
    arc(t, e, r, n, o, i) {
        if (t = +t, e = +e, i = !!i, (r = +r) < 0) throw new Error(`negative radius: ${r}`);
        let a = r * Math.cos(n),
            c = r * Math.sin(n),
            u = t + a,
            l = e + c,
            s = 1 ^ i,
            f = i ? n - o : o - n;
        null === this._x1 ? this._append `M${u},${l}` : (Math.abs(this._x1 - u) > Ju || Math.abs(this._y1 - l) > Ju) && this._append `L${u},${l}`, r && (f < 0 && (f = f % Zu + Zu), f > Qu ? this._append `A${r},${r},0,1,${s},${t-a},${e-c}A${r},${r},0,1,${s},${this._x1=u},${this._y1=l}` : f > Ju && this._append `A${r},${r},0,${+(f>=Yu)},${s},${this._x1=t+r*Math.cos(o)},${this._y1=e+r*Math.sin(o)}`)
    }
    rect(t, e, r, n) {
        this._append `M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${r=+r}v${+n}h${-r}Z`
    }
    toString() {
        return this._
    }
}

function rl(t) {
    let e = 3;
    return t.digits = function(r) {
        if (!arguments.length) return e;
        if (null == r) e = null;
        else {
            const t = Math.floor(r);
            if (!(t >= 0)) throw new RangeError(`invalid digits: ${r}`);
            e = t
        }
        return t
    }, () => new el(e)
}

function nl(t) {
    return "object" == typeof t && "length" in t ? t : Array.from(t)
}

function ol(t) {
    this._context = t
}

function il(t) {
    return new ol(t)
}

function al(t) {
    return t[0]
}

function cl(t) {
    return t[1]
}

function ul(t, e) {
    var r = Ku(!0),
        n = null,
        o = il,
        i = null,
        a = rl(c);

    function c(c) {
        var u, l, s, f = (c = nl(c)).length,
            p = !1;
        for (null == n && (i = o(s = a())), u = 0; u <= f; ++u) !(u < f && r(l = c[u], u, c)) === p && ((p = !p) ? i.lineStart() : i.lineEnd()), p && i.point(+t(l, u, c), +e(l, u, c));
        if (s) return i = null, s + "" || null
    }
    return t = "function" == typeof t ? t : void 0 === t ? al : Ku(t), e = "function" == typeof e ? e : void 0 === e ? cl : Ku(e), c.x = function(e) {
        return arguments.length ? (t = "function" == typeof e ? e : Ku(+e), c) : t
    }, c.y = function(t) {
        return arguments.length ? (e = "function" == typeof t ? t : Ku(+t), c) : e
    }, c.defined = function(t) {
        return arguments.length ? (r = "function" == typeof t ? t : Ku(!!t), c) : r
    }, c.curve = function(t) {
        return arguments.length ? (o = t, null != n && (i = o(n)), c) : o
    }, c.context = function(t) {
        return arguments.length ? (null == t ? n = i = null : i = o(n = t), c) : n
    }, c
}

function ll(t, e, r) {
    var n = null,
        o = Ku(!0),
        i = null,
        a = il,
        c = null,
        u = rl(l);

    function l(l) {
        var s, f, p, h, y, d = (l = nl(l)).length,
            v = !1,
            m = new Array(d),
            b = new Array(d);
        for (null == i && (c = a(y = u())), s = 0; s <= d; ++s) {
            if (!(s < d && o(h = l[s], s, l)) === v)
                if (v = !v) f = s, c.areaStart(), c.lineStart();
                else {
                    for (c.lineEnd(), c.lineStart(), p = s - 1; p >= f; --p) c.point(m[p], b[p]);
                    c.lineEnd(), c.areaEnd()
                }
            v && (m[s] = +t(h, s, l), b[s] = +e(h, s, l), c.point(n ? +n(h, s, l) : m[s], r ? +r(h, s, l) : b[s]))
        }
        if (y) return c = null, y + "" || null
    }

    function s() {
        return ul().defined(o).curve(a).context(i)
    }
    return t = "function" == typeof t ? t : void 0 === t ? al : Ku(+t), e = "function" == typeof e ? e : Ku(void 0 === e ? 0 : +e), r = "function" == typeof r ? r : void 0 === r ? cl : Ku(+r), l.x = function(e) {
        return arguments.length ? (t = "function" == typeof e ? e : Ku(+e), n = null, l) : t
    }, l.x0 = function(e) {
        return arguments.length ? (t = "function" == typeof e ? e : Ku(+e), l) : t
    }, l.x1 = function(t) {
        return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : Ku(+t), l) : n
    }, l.y = function(t) {
        return arguments.length ? (e = "function" == typeof t ? t : Ku(+t), r = null, l) : e
    }, l.y0 = function(t) {
        return arguments.length ? (e = "function" == typeof t ? t : Ku(+t), l) : e
    }, l.y1 = function(t) {
        return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : Ku(+t), l) : r
    }, l.lineX0 = l.lineY0 = function() {
        return s().x(t).y(e)
    }, l.lineY1 = function() {
        return s().x(t).y(r)
    }, l.lineX1 = function() {
        return s().x(n).y(e)
    }, l.defined = function(t) {
        return arguments.length ? (o = "function" == typeof t ? t : Ku(!!t), l) : o
    }, l.curve = function(t) {
        return arguments.length ? (a = t, null != i && (c = a(i)), l) : a
    }, l.context = function(t) {
        return arguments.length ? (null == t ? i = c = null : c = a(i = t), l) : i
    }, l
}
ol.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, e) {
        switch (t = +t, e = +e, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(t, e)
        }
    }
};
class sl {
    constructor(t, e) {
        this._context = t, this._x = e
    }
    areaStart() {
        this._line = 0
    }
    areaEnd() {
        this._line = NaN
    }
    lineStart() {
        this._point = 0
    }
    lineEnd() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    }
    point(t, e) {
        switch (t = +t, e = +e, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
            default:
                this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, e, t, e) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + e) / 2, t, this._y0, t, e)
        }
        this._x0 = t, this._y0 = e
    }
}
const fl = {
        draw(t, e) {
            const r = Xu(e / Hu);
            t.moveTo(r, 0), t.arc(0, 0, r, 0, Gu)
        }
    },
    pl = {
        draw(t, e) {
            const r = Xu(e / 5) / 2;
            t.moveTo(-3 * r, -r), t.lineTo(-r, -r), t.lineTo(-r, -3 * r), t.lineTo(r, -3 * r), t.lineTo(r, -r), t.lineTo(3 * r, -r), t.lineTo(3 * r, r), t.lineTo(r, r), t.lineTo(r, 3 * r), t.lineTo(-r, 3 * r), t.lineTo(-r, r), t.lineTo(-3 * r, r), t.closePath()
        }
    },
    hl = Xu(1 / 3),
    yl = 2 * hl,
    dl = {
        draw(t, e) {
            const r = Xu(e / yl),
                n = r * hl;
            t.moveTo(0, -r), t.lineTo(n, 0), t.lineTo(0, r), t.lineTo(-n, 0), t.closePath()
        }
    },
    vl = {
        draw(t, e) {
            const r = Xu(e),
                n = -r / 2;
            t.rect(n, n, r, r)
        }
    },
    ml = Vu(Hu / 10) / Vu(7 * Hu / 10),
    bl = Vu(Gu / 10) * ml,
    gl = -qu(Gu / 10) * ml,
    wl = {
        draw(t, e) {
            const r = Xu(.8908130915292852 * e),
                n = bl * r,
                o = gl * r;
            t.moveTo(0, -r), t.lineTo(n, o);
            for (let i = 1; i < 5; ++i) {
                const e = Gu * i / 5,
                    a = qu(e),
                    c = Vu(e);
                t.lineTo(c * r, -a * r), t.lineTo(a * n - c * o, c * n + a * o)
            }
            t.closePath()
        }
    },
    Ol = Xu(3),
    xl = {
        draw(t, e) {
            const r = -Xu(e / (3 * Ol));
            t.moveTo(0, 2 * r), t.lineTo(-Ol * r, -r), t.lineTo(Ol * r, -r), t.closePath()
        }
    },
    jl = -.5,
    Sl = Xu(3) / 2,
    Al = 1 / Xu(12),
    Pl = 3 * (Al / 2 + 1),
    El = {
        draw(t, e) {
            const r = Xu(e / Pl),
                n = r / 2,
                o = r * Al,
                i = n,
                a = r * Al + r,
                c = -i,
                u = a;
            t.moveTo(n, o), t.lineTo(i, a), t.lineTo(c, u), t.lineTo(jl * n - Sl * o, Sl * n + jl * o), t.lineTo(jl * i - Sl * a, Sl * i + jl * a), t.lineTo(jl * c - Sl * u, Sl * c + jl * u), t.lineTo(jl * n + Sl * o, jl * o - Sl * n), t.lineTo(jl * i + Sl * a, jl * a - Sl * i), t.lineTo(jl * c + Sl * u, jl * u - Sl * c), t.closePath()
        }
    };

function kl() {}

function Tl(t, e, r) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + r) / 6)
}

function Ml(t) {
    this._context = t
}

function _l(t) {
    this._context = t
}

function Cl(t) {
    this._context = t
}

function Dl(t) {
    this._context = t
}

function Il(t) {
    return t < 0 ? -1 : 1
}

function Nl(t, e, r) {
    var n = t._x1 - t._x0,
        o = e - t._x1,
        i = (t._y1 - t._y0) / (n || o < 0 && -0),
        a = (r - t._y1) / (o || n < 0 && -0),
        c = (i * o + a * n) / (n + o);
    return (Il(i) + Il(a)) * Math.min(Math.abs(i), Math.abs(a), .5 * Math.abs(c)) || 0
}

function Rl(t, e) {
    var r = t._x1 - t._x0;
    return r ? (3 * (t._y1 - t._y0) / r - e) / 2 : e
}

function Bl(t, e, r) {
    var n = t._x0,
        o = t._y0,
        i = t._x1,
        a = t._y1,
        c = (i - n) / 3;
    t._context.bezierCurveTo(n + c, o + c * e, i - c, a - c * r, i, a)
}

function Ll(t) {
    this._context = t
}

function zl(t) {
    this._context = new Fl(t)
}

function Fl(t) {
    this._context = t
}

function Ul(t) {
    this._context = t
}

function Wl(t) {
    var e, r, n = t.length - 1,
        o = new Array(n),
        i = new Array(n),
        a = new Array(n);
    for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) o[e] = 1, i[e] = 4, a[e] = 4 * t[e] + 2 * t[e + 1];
    for (o[n - 1] = 2, i[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) r = o[e] / i[e - 1], i[e] -= r, a[e] -= r * a[e - 1];
    for (o[n - 1] = a[n - 1] / i[n - 1], e = n - 2; e >= 0; --e) o[e] = (a[e] - o[e + 1]) / i[e];
    for (i[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e) i[e] = 2 * t[e + 1] - o[e + 1];
    return [o, i]
}

function $l(t, e) {
    this._context = t, this._t = e
}

function Kl(t, e) {
    if ((o = t.length) > 1)
        for (var r, n, o, i = 1, a = t[e[0]], c = a.length; i < o; ++i)
            for (n = a, a = t[e[i]], r = 0; r < c; ++r) a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1]
}

function ql(t) {
    for (var e = t.length, r = new Array(e); --e >= 0;) r[e] = e;
    return r
}

function Vl(t, e) {
    return t[e]
}

function Xl(t) {
    const e = [];
    return e.key = t, e
}

function Hl(t) {
    return (Hl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
Ml.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 3:
                Tl(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, e) {
        switch (t = +t, e = +e, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                Tl(this, t, e)
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
    }
}, _l.prototype = {
    areaStart: kl,
    areaEnd: kl,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 1:
                this._context.moveTo(this._x2, this._y2), this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
        }
    },
    point: function(t, e) {
        switch (t = +t, e = +e, this._point) {
            case 0:
                this._point = 1, this._x2 = t, this._y2 = e;
                break;
            case 1:
                this._point = 2, this._x3 = t, this._y3 = e;
                break;
            case 2:
                this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6);
                break;
            default:
                Tl(this, t, e)
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
    }
}, Cl.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, e) {
        switch (t = +t, e = +e, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + t) / 6,
                    n = (this._y0 + 4 * this._y1 + e) / 6;
                this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
                break;
            case 3:
                this._point = 4;
            default:
                Tl(this, t, e)
        }
        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e
    }
}, Dl.prototype = {
    areaStart: kl,
    areaEnd: kl,
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        this._point && this._context.closePath()
    },
    point: function(t, e) {
        t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e))
    }
}, Ll.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Bl(this, this._t0, Rl(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(t, e) {
        var r = NaN;
        if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, Bl(this, Rl(this, r = Nl(this, t, e)), r);
                    break;
                default:
                    Bl(this, this._t0, r = Nl(this, t, e))
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = r
        }
    }
}, (zl.prototype = Object.create(Ll.prototype)).point = function(t, e) {
    Ll.prototype.point.call(this, e, t)
}, Fl.prototype = {
    moveTo: function(t, e) {
        this._context.moveTo(e, t)
    },
    closePath: function() {
        this._context.closePath()
    },
    lineTo: function(t, e) {
        this._context.lineTo(e, t)
    },
    bezierCurveTo: function(t, e, r, n, o, i) {
        this._context.bezierCurveTo(e, t, n, r, i, o)
    }
}, Ul.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = [], this._y = []
    },
    lineEnd: function() {
        var t = this._x,
            e = this._y,
            r = t.length;
        if (r)
            if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === r) this._context.lineTo(t[1], e[1]);
            else
                for (var n = Wl(t), o = Wl(e), i = 0, a = 1; a < r; ++i, ++a) this._context.bezierCurveTo(n[0][i], o[0][i], n[1][i], o[1][i], t[a], e[a]);
        (this._line || 0 !== this._line && 1 === r) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
    },
    point: function(t, e) {
        this._x.push(+t), this._y.push(+e)
    }
}, $l.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = this._y = NaN, this._point = 0
    },
    lineEnd: function() {
        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
    },
    point: function(t, e) {
        switch (t = +t, e = +e, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);
                break;
            case 1:
                this._point = 2;
            default:
                if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                else {
                    var r = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(r, this._y), this._context.lineTo(r, e)
                }
        }
        this._x = t, this._y = e
    }
};
var Gl = ["type", "size", "sizeType"];

function Yl() {
    return Yl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, Yl.apply(this, arguments)
}

function Zl(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Jl(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Zl(Object(r), !0).forEach((function(e) {
            Ql(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Zl(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Ql(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != Hl(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Hl(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == Hl(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function ts(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}
var es = {
        symbolCircle: fl,
        symbolCross: pl,
        symbolDiamond: dl,
        symbolSquare: vl,
        symbolStar: wl,
        symbolTriangle: xl,
        symbolWye: El
    },
    rs = Math.PI / 180,
    ns = function(t) {
        var e, r, o = t.type,
            i = void 0 === o ? "circle" : o,
            a = t.size,
            c = void 0 === a ? 64 : a,
            u = t.sizeType,
            l = void 0 === u ? "area" : u,
            s = Jl(Jl({}, ts(t, Gl)), {}, {
                type: i,
                size: c,
                sizeType: l
            }),
            f = s.className,
            p = s.cx,
            h = s.cy,
            y = au(s, !0);
        return p === +p && h === +h && c === +c ? n.createElement("path", Yl({}, y, {
            className: hc("recharts-symbols", f),
            transform: "translate(".concat(p, ", ").concat(h, ")"),
            d: (e = function(t) {
                var e = "symbol".concat($u(t));
                return es[e] || fl
            }(i), r = function(t, e) {
                let r = null,
                    n = rl(o);

                function o() {
                    let o;
                    if (r || (r = o = n()), t.apply(this, arguments).draw(r, +e.apply(this, arguments)), o) return r = null, o + "" || null
                }
                return t = "function" == typeof t ? t : Ku(t || fl), e = "function" == typeof e ? e : Ku(void 0 === e ? 64 : +e), o.type = function(e) {
                    return arguments.length ? (t = "function" == typeof e ? e : Ku(e), o) : t
                }, o.size = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : Ku(+t), o) : e
                }, o.context = function(t) {
                    return arguments.length ? (r = null == t ? null : t, o) : r
                }, o
            }().type(e).size(function(t, e, r) {
                if ("area" === e) return t;
                switch (r) {
                    case "cross":
                        return 5 * t * t / 9;
                    case "diamond":
                        return .5 * t * t / Math.sqrt(3);
                    case "square":
                        return t * t;
                    case "star":
                        var n = 18 * rs;
                        return 1.25 * t * t * (Math.tan(n) - Math.tan(2 * n) * Math.pow(Math.tan(n), 2));
                    case "triangle":
                        return Math.sqrt(3) * t * t / 4;
                    case "wye":
                        return (21 - 10 * Math.sqrt(3)) * t * t / 8;
                    default:
                        return Math.PI * t * t / 4
                }
            }(c, l, i)), r())
        })) : null
    };

function os(t) {
    return (os = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function is() {
    return is = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, is.apply(this, arguments)
}

function as(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function cs(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, hs(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function us(t, e, r) {
    return e = ss(e),
        function(t, e) {
            if (e && ("object" === os(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, ls() ? Reflect.construct(e, r || [], ss(t).constructor) : e.apply(t, r))
}

function ls() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (ls = function() {
        return !!t
    })()
}

function ss(t) {
    return (ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function fs(t, e) {
    return (fs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function ps(t, e, r) {
    return (e = hs(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function hs(t) {
    var e = function(t, e) {
        if ("object" != os(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != os(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == os(e) ? e : e + ""
}
ns.registerSymbol = function(t, e) {
    es["symbol".concat($u(t))] = e
};
var ys = 32,
    ds = function() {
        function t() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), us(this, t, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && fs(t, e)
        }(t, r.PureComponent), cs(t, [{
            key: "renderIcon",
            value: function(t) {
                var e = this.props.inactiveColor,
                    r = 16,
                    o = ys / 6,
                    i = ys / 3,
                    a = t.inactive ? e : t.color;
                if ("plainline" === t.type) return n.createElement("line", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: a,
                    strokeDasharray: t.payload.strokeDasharray,
                    x1: 0,
                    y1: r,
                    x2: ys,
                    y2: r,
                    className: "recharts-legend-icon"
                });
                if ("line" === t.type) return n.createElement("path", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: a,
                    d: "M0,".concat(r, "h").concat(i, "\n            A").concat(o, ",").concat(o, ",0,1,1,").concat(2 * i, ",").concat(r, "\n            H").concat(ys, "M").concat(2 * i, ",").concat(r, "\n            A").concat(o, ",").concat(o, ",0,1,1,").concat(i, ",").concat(r),
                    className: "recharts-legend-icon"
                });
                if ("rect" === t.type) return n.createElement("path", {
                    stroke: "none",
                    fill: a,
                    d: "M0,".concat(4, "h").concat(ys, "v").concat(24, "h").concat(-32, "z"),
                    className: "recharts-legend-icon"
                });
                if (n.isValidElement(t.legendIcon)) {
                    var c = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? as(Object(r), !0).forEach((function(e) {
                                ps(t, e, r[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : as(Object(r)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }))
                        }
                        return t
                    }({}, t);
                    return delete c.legendIcon, n.cloneElement(t.legendIcon, c)
                }
                return n.createElement(ns, {
                    fill: a,
                    cx: r,
                    cy: r,
                    size: ys,
                    sizeType: "diameter",
                    type: t.type
                })
            }
        }, {
            key: "renderItems",
            value: function() {
                var t = this,
                    e = this.props,
                    r = e.payload,
                    o = e.iconSize,
                    i = e.layout,
                    a = e.formatter,
                    c = e.inactiveColor,
                    u = {
                        x: 0,
                        y: 0,
                        width: ys,
                        height: ys
                    },
                    l = {
                        display: "horizontal" === i ? "inline-block" : "block",
                        marginRight: 10
                    },
                    s = {
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: 4
                    };
                return r.map((function(e, r) {
                    var i = e.formatter || a,
                        f = hc(ps(ps({
                            "recharts-legend-item": !0
                        }, "legend-item-".concat(r), !0), "inactive", e.inactive));
                    if ("none" === e.type) return null;
                    var p = A(e.value) ? null : e.value;
                    bu(!A(e.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
                    var h = e.inactive ? c : e.color;
                    return n.createElement("li", is({
                        className: f,
                        style: l,
                        key: "legend-item-".concat(r)
                    }, $c(t.props, e, r)), n.createElement(hu, {
                        width: o,
                        height: o,
                        viewBox: u,
                        style: s
                    }, t.renderIcon(e)), n.createElement("span", {
                        className: "recharts-legend-item-text",
                        style: {
                            color: h
                        }
                    }, i ? i(p, e, r) : p))
                }))
            }
        }, {
            key: "render",
            value: function() {
                var t = this.props,
                    e = t.payload,
                    r = t.layout,
                    o = t.align;
                if (!e || !e.length) return null;
                var i = {
                    padding: 0,
                    margin: 0,
                    textAlign: "horizontal" === r ? o : "left"
                };
                return n.createElement("ul", {
                    className: "recharts-default-legend",
                    style: i
                }, this.renderItems())
            }
        }])
    }();
ps(ds, "displayName", "Legend"), ps(ds, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc"
});
var vs = ke,
    ms = ci;
var bs = a;
var gs = function(t) {
        return t == t && !bs(t)
    },
    ws = gs,
    Os = mo;
var xs = function(t, e) {
        return function(r) {
            return null != r && (r[t] === e && (void 0 !== e || t in Object(r)))
        }
    },
    js = function(t, e, r, n) {
        var o = r.length,
            i = o,
            a = !n;
        if (null == t) return !i;
        for (t = Object(t); o--;) {
            var c = r[o];
            if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1
        }
        for (; ++o < i;) {
            var u = (c = r[o])[0],
                l = t[u],
                s = c[1];
            if (a && c[2]) {
                if (void 0 === l && !(u in t)) return !1
            } else {
                var f = new vs;
                if (n) var p = n(l, s, u, t, e, f);
                if (!(void 0 === p ? ms(s, l, 3, n, f) : p)) return !1
            }
        }
        return !0
    },
    Ss = function(t) {
        for (var e = Os(t), r = e.length; r--;) {
            var n = e[r],
                o = t[n];
            e[r] = [n, o, ws(o)]
        }
        return e
    },
    As = xs;
var Ps = function(t, e) {
        return null != t && e in Object(t)
    },
    Es = yi;
var ks = ci,
    Ts = de,
    Ms = function(t, e) {
        return null != t && Es(t, e, Ps)
    },
    _s = O,
    Cs = gs,
    Ds = xs,
    Is = se;
var Ns = he;
var Rs = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    },
    Bs = function(t) {
        return function(e) {
            return Ns(e, t)
        }
    },
    Ls = O,
    zs = se;
var Fs = function(t) {
        var e = Ss(t);
        return 1 == e.length && e[0][2] ? As(e[0][0], e[0][1]) : function(r) {
            return r === t || js(r, t, e)
        }
    },
    Us = function(t, e) {
        return _s(t) && Cs(e) ? Ds(Is(t), e) : function(r) {
            var n = Ts(r, t);
            return void 0 === n && n === e ? Ms(r, t) : ks(e, n, 3)
        }
    },
    Ws = dn,
    $s = v,
    Ks = function(t) {
        return Ls(t) ? Rs(zs(t)) : Bs(t)
    };
var qs = function(t) {
    return "function" == typeof t ? t : null == t ? Ws : "object" == typeof t ? $s(t) ? Us(t[0], t[1]) : Fs(t) : Ks(t)
};
var Vs = function(t, e, r, n) {
    for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
        if (e(t[i], i, t)) return i;
    return -1
};
var Xs = Vs,
    Hs = function(t) {
        return t != t
    },
    Gs = function(t, e, r) {
        for (var n = r - 1, o = t.length; ++n < o;)
            if (t[n] === e) return n;
        return -1
    };
var Ys = function(t, e, r) {
    return e == e ? Gs(t, e, r) : Xs(t, Hs, r)
};
var Zs = function(t, e) {
    return !!(null == t ? 0 : t.length) && Ys(t, e, 0) > -1
};
var Js = function(t, e, r) {
    for (var n = -1, o = null == t ? 0 : t.length; ++n < o;)
        if (r(e, t[n])) return !0;
    return !1
};
var Qs = Eo,
    tf = function() {},
    ef = Qs && 1 / Kn(new Qs([, -0]))[1] == 1 / 0 ? function(t) {
        return new Qs(t)
    } : tf,
    rf = Bn,
    nf = Zs,
    of = Js,
    af = zn,
    cf = ef,
    uf = Kn;
var lf = qs,
    sf = function(t, e, r) {
        var n = -1,
            o = nf,
            i = t.length,
            a = !0,
            c = [],
            u = c;
        if (r) a = !1, o = of ;
        else if (i >= 200) {
            var l = e ? null : cf(t);
            if (l) return uf(l);
            a = !1, o = af, u = new rf
        } else u = e ? [] : c;
        t: for (; ++n < i;) {
            var s = t[n],
                f = e ? e(s) : s;
            if (s = r || 0 !== s ? s : 0, a && f == f) {
                for (var p = u.length; p--;)
                    if (u[p] === f) continue t;
                e && u.push(f), c.push(s)
            } else o(u, f, r) || (u !== c && u.push(f), c.push(s))
        }
        return c
    };
const ff = e((function(t, e) {
    return t && t.length ? sf(t, lf(e)) : []
}));

function pf(t, e, r) {
    return !0 === e ? ff(t, r) : A(e) ? ff(t, e) : t
}

function hf(t) {
    return (hf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
var yf = ["ref"];

function df(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function vf(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? df(Object(r), !0).forEach((function(e) {
            xf(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : df(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function mf(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, jf(n.key), n)
    }
}

function bf(t, e, r) {
    return e = wf(e),
        function(t, e) {
            if (e && ("object" === hf(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, gf() ? Reflect.construct(e, r || [], wf(t).constructor) : e.apply(t, r))
}

function gf() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (gf = function() {
        return !!t
    })()
}

function wf(t) {
    return (wf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function Of(t, e) {
    return (Of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function xf(t, e, r) {
    return (e = jf(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function jf(t) {
    var e = function(t, e) {
        if ("object" != hf(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != hf(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == hf(e) ? e : e + ""
}

function Sf(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function Af(t) {
    return t.value
}
var Pf = function() {
    function t() {
        var e;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return xf(e = bf(this, t, [].concat(n)), "lastBoundingBox", {
            width: -1,
            height: -1
        }), e
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && Of(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "getWithHeight",
        value: function(t, e) {
            var r = vf(vf({}, this.defaultProps), t.props).layout;
            return "vertical" === r && Ec(t.props.height) ? {
                height: t.props.height
            } : "horizontal" === r ? {
                width: t.props.width || e
            } : null
        }
    }], (o = [{
        key: "componentDidMount",
        value: function() {
            this.updateBBox()
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            this.updateBBox()
        }
    }, {
        key: "getBBox",
        value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var t = this.wrapperNode.getBoundingClientRect();
                return t.height = this.wrapperNode.offsetHeight, t.width = this.wrapperNode.offsetWidth, t
            }
            return null
        }
    }, {
        key: "updateBBox",
        value: function() {
            var t = this.props.onBBoxUpdate,
                e = this.getBBox();
            e ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 || Math.abs(e.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = e.width, this.lastBoundingBox.height = e.height, t && t(e)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, t && t(null))
        }
    }, {
        key: "getBBoxSnapshot",
        value: function() {
            return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? vf({}, this.lastBoundingBox) : {
                width: 0,
                height: 0
            }
        }
    }, {
        key: "getDefaultPosition",
        value: function(t) {
            var e, r, n = this.props,
                o = n.layout,
                i = n.align,
                a = n.verticalAlign,
                c = n.margin,
                u = n.chartWidth,
                l = n.chartHeight;
            return t && (void 0 !== t.left && null !== t.left || void 0 !== t.right && null !== t.right) || (e = "center" === i && "vertical" === o ? {
                left: ((u || 0) - this.getBBoxSnapshot().width) / 2
            } : "right" === i ? {
                right: c && c.right || 0
            } : {
                left: c && c.left || 0
            }), t && (void 0 !== t.top && null !== t.top || void 0 !== t.bottom && null !== t.bottom) || (r = "middle" === a ? {
                top: ((l || 0) - this.getBBoxSnapshot().height) / 2
            } : "bottom" === a ? {
                bottom: c && c.bottom || 0
            } : {
                top: c && c.top || 0
            }), vf(vf({}, e), r)
        }
    }, {
        key: "render",
        value: function() {
            var t = this,
                e = this.props,
                r = e.content,
                o = e.width,
                i = e.height,
                a = e.wrapperStyle,
                c = e.payloadUniqBy,
                u = e.payload,
                l = vf(vf({
                    position: "absolute",
                    width: o || "auto",
                    height: i || "auto"
                }, this.getDefaultPosition(a)), a);
            return n.createElement("div", {
                className: "recharts-legend-wrapper",
                style: l,
                ref: function(e) {
                    t.wrapperNode = e
                }
            }, function(t, e) {
                if (n.isValidElement(t)) return n.cloneElement(t, e);
                if ("function" == typeof t) return n.createElement(t, e);
                e.ref;
                var r = Sf(e, yf);
                return n.createElement(ds, r)
            }(r, vf(vf({}, this.props), {}, {
                payload: pf(u, c, Af)
            })))
        }
    }]) && mf(e.prototype, o), i && mf(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();
xf(Pf, "displayName", "Legend"), xf(Pf, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom"
});
var Ef = Fe,
    kf = mo;
var Tf = function(t, e) {
        return t && Ef(t, e, kf)
    },
    Mf = mr;
var _f = function(t, e) {
        return function(r, n) {
            if (null == r) return r;
            if (!Mf(r)) return t(r, n);
            for (var o = r.length, i = e ? o : -1, a = Object(r);
                (e ? i-- : ++i < o) && !1 !== n(a[i], i, a););
            return r
        }
    }(Tf),
    Cf = _f,
    Df = mr;
var If = function(t, e) {
    var r = -1,
        n = Df(t) ? Array(t.length) : [];
    return Cf(t, (function(t, o, i) {
        n[++r] = e(t, o, i)
    })), n
};
var Nf = o;
var Rf = function(t, e) {
    if (t !== e) {
        var r = void 0 !== t,
            n = null === t,
            o = t == t,
            i = Nf(t),
            a = void 0 !== e,
            c = null === e,
            u = e == e,
            l = Nf(e);
        if (!c && !l && !i && t > e || i && a && u && !c && !l || n && a && u || !r && u || !o) return 1;
        if (!n && !i && !l && t < e || l && r && o && !n && !i || c && r && o || !a && o || !u) return -1
    }
    return 0
};
var Bf = Gt,
    Lf = he,
    zf = qs,
    Ff = If,
    Uf = function(t, e) {
        var r = t.length;
        for (t.sort(e); r--;) t[r] = t[r].value;
        return t
    },
    Wf = Rr,
    $f = function(t, e, r) {
        for (var n = -1, o = t.criteria, i = e.criteria, a = o.length, c = r.length; ++n < a;) {
            var u = Rf(o[n], i[n]);
            if (u) return n >= c ? u : u * ("desc" == r[n] ? -1 : 1)
        }
        return t.index - e.index
    },
    Kf = dn,
    qf = v;
var Vf = Qa,
    Xf = function(t, e, r) {
        e = e.length ? Bf(e, (function(t) {
            return qf(t) ? function(e) {
                return Lf(e, 1 === t.length ? t[0] : t)
            } : t
        })) : [Kf];
        var n = -1;
        e = Bf(e, Wf(zf));
        var o = Ff(t, (function(t, r, o) {
            return {
                criteria: Bf(e, (function(e) {
                    return e(t)
                })),
                index: ++n,
                value: t
            }
        }));
        return Uf(o, (function(t, e) {
            return $f(t, e, r)
        }))
    },
    Hf = Cn;
const Gf = e(En((function(t, e) {
    if (null == t) return [];
    var r = e.length;
    return r > 1 && Hf(t, e[0], e[1]) ? e = [] : r > 2 && Hf(e[0], e[1], e[2]) && (e = [e[0]]), Xf(t, Vf(e, 1), [])
})));

function Yf(t) {
    return (Yf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Zf() {
    return Zf = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, Zf.apply(this, arguments)
}

function Jf(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Qf(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qf(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Qf(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function tp(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function ep(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? tp(Object(r), !0).forEach((function(e) {
            rp(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tp(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function rp(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != Yf(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Yf(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == Yf(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function np(t) {
    return Array.isArray(t) && kc(t[0]) && kc(t[1]) ? t.join(" ~ ") : t
}
var op = function(t) {
    var e = t.separator,
        r = void 0 === e ? " : " : e,
        o = t.contentStyle,
        i = void 0 === o ? {} : o,
        a = t.itemStyle,
        c = void 0 === a ? {} : a,
        u = t.labelStyle,
        l = void 0 === u ? {} : u,
        s = t.payload,
        f = t.formatter,
        p = t.itemSorter,
        h = t.wrapperClassName,
        y = t.labelClassName,
        d = t.label,
        v = t.labelFormatter,
        m = t.accessibilityLayer,
        b = void 0 !== m && m,
        g = ep({
            margin: 0,
            padding: 10,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            whiteSpace: "nowrap"
        }, i),
        w = ep({
            margin: 0
        }, l),
        O = !yc(d),
        x = O ? d : "",
        j = hc("recharts-default-tooltip", h),
        S = hc("recharts-tooltip-label", y);
    O && v && null != s && (x = v(d, s));
    var A = b ? {
        role: "status",
        "aria-live": "assertive"
    } : {};
    return n.createElement("div", Zf({
        className: j,
        style: g
    }, A), n.createElement("p", {
        className: S,
        style: w
    }, n.isValidElement(x) ? x : "".concat(x)), function() {
        if (s && s.length) {
            var t = (p ? Gf(s, p) : s).map((function(t, e) {
                if ("none" === t.type) return null;
                var o = ep({
                        display: "block",
                        paddingTop: 4,
                        paddingBottom: 4,
                        color: t.color || "#000"
                    }, c),
                    i = t.formatter || f || np,
                    a = t.value,
                    u = t.name,
                    l = a,
                    p = u;
                if (i && null != l && null != p) {
                    var h = i(a, u, t, e, s);
                    if (Array.isArray(h)) {
                        var y = Jf(h, 2);
                        l = y[0], p = y[1]
                    } else l = h
                }
                return n.createElement("li", {
                    className: "recharts-tooltip-item",
                    key: "tooltip-item-".concat(e),
                    style: o
                }, kc(p) ? n.createElement("span", {
                    className: "recharts-tooltip-item-name"
                }, p) : null, kc(p) ? n.createElement("span", {
                    className: "recharts-tooltip-item-separator"
                }, r) : null, n.createElement("span", {
                    className: "recharts-tooltip-item-value"
                }, l), n.createElement("span", {
                    className: "recharts-tooltip-item-unit"
                }, t.unit || ""))
            }));
            return n.createElement("ul", {
                className: "recharts-tooltip-item-list",
                style: {
                    padding: 0,
                    margin: 0
                }
            }, t)
        }
        return null
    }())
};

function ip(t) {
    return (ip = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function ap(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != ip(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != ip(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == ip(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
var cp = "recharts-tooltip-wrapper",
    up = {
        visibility: "hidden"
    };

function lp(t) {
    var e = t.coordinate,
        r = t.translateX,
        n = t.translateY;
    return hc(cp, ap(ap(ap(ap({}, "".concat(cp, "-right"), Ec(r) && e && Ec(e.x) && r >= e.x), "".concat(cp, "-left"), Ec(r) && e && Ec(e.x) && r < e.x), "".concat(cp, "-bottom"), Ec(n) && e && Ec(e.y) && n >= e.y), "".concat(cp, "-top"), Ec(n) && e && Ec(e.y) && n < e.y))
}

function sp(t) {
    var e = t.allowEscapeViewBox,
        r = t.coordinate,
        n = t.key,
        o = t.offsetTopLeft,
        i = t.position,
        a = t.reverseDirection,
        c = t.tooltipDimension,
        u = t.viewBox,
        l = t.viewBoxDimension;
    if (i && Ec(i[n])) return i[n];
    var s = r[n] - c - o,
        f = r[n] + o;
    return e[n] ? a[n] ? s : f : a[n] ? s < u[n] ? Math.max(f, u[n]) : Math.max(s, u[n]) : f + c > u[n] + l ? Math.max(s, u[n]) : Math.max(f, u[n])
}

function fp(t) {
    return (fp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function pp(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function hp(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? pp(Object(r), !0).forEach((function(e) {
            gp(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : pp(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function yp(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, wp(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function dp(t, e, r) {
    return e = mp(e),
        function(t, e) {
            if (e && ("object" === fp(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, vp() ? Reflect.construct(e, r || [], mp(t).constructor) : e.apply(t, r))
}

function vp() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (vp = function() {
        return !!t
    })()
}

function mp(t) {
    return (mp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function bp(t, e) {
    return (bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function gp(t, e, r) {
    return (e = wp(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function wp(t) {
    var e = function(t, e) {
        if ("object" != fp(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != fp(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == fp(e) ? e : e + ""
}
var Op = function() {
        function t() {
            var e;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            return gp(e = dp(this, t, [].concat(n)), "state", {
                dismissed: !1,
                dismissedAtCoordinate: {
                    x: 0,
                    y: 0
                },
                lastBoundingBox: {
                    width: -1,
                    height: -1
                }
            }), gp(e, "handleKeyDown", (function(t) {
                var r, n, o, i;
                "Escape" === t.key && e.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: {
                        x: null !== (r = null === (n = e.props.coordinate) || void 0 === n ? void 0 : n.x) && void 0 !== r ? r : 0,
                        y: null !== (o = null === (i = e.props.coordinate) || void 0 === i ? void 0 : i.y) && void 0 !== o ? o : 0
                    }
                })
            })), e
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && bp(t, e)
        }(t, r.PureComponent), yp(t, [{
            key: "updateBBox",
            value: function() {
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var t = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 || Math.abs(t.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                        lastBoundingBox: {
                            width: t.width,
                            height: t.height
                        }
                    })
                } else -1 === this.state.lastBoundingBox.width && -1 === this.state.lastBoundingBox.height || this.setState({
                    lastBoundingBox: {
                        width: -1,
                        height: -1
                    }
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                document.addEventListener("keydown", this.handleKeyDown), this.updateBBox()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("keydown", this.handleKeyDown)
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                var t, e;
                this.props.active && this.updateBBox(), this.state.dismissed && ((null === (t = this.props.coordinate) || void 0 === t ? void 0 : t.x) === this.state.dismissedAtCoordinate.x && (null === (e = this.props.coordinate) || void 0 === e ? void 0 : e.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.props,
                    r = e.active,
                    o = e.allowEscapeViewBox,
                    i = e.animationDuration,
                    a = e.animationEasing,
                    c = e.children,
                    u = e.coordinate,
                    l = e.hasPayload,
                    s = e.isAnimationActive,
                    f = e.offset,
                    p = e.position,
                    h = e.reverseDirection,
                    y = e.useTranslate3d,
                    d = e.viewBox,
                    v = e.wrapperStyle,
                    m = function(t) {
                        var e, r, n = t.allowEscapeViewBox,
                            o = t.coordinate,
                            i = t.offsetTopLeft,
                            a = t.position,
                            c = t.reverseDirection,
                            u = t.tooltipBox,
                            l = t.useTranslate3d,
                            s = t.viewBox;
                        return {
                            cssProperties: u.height > 0 && u.width > 0 && o ? function(t) {
                                var e = t.translateX,
                                    r = t.translateY;
                                return {
                                    transform: t.useTranslate3d ? "translate3d(".concat(e, "px, ").concat(r, "px, 0)") : "translate(".concat(e, "px, ").concat(r, "px)")
                                }
                            }({
                                translateX: e = sp({
                                    allowEscapeViewBox: n,
                                    coordinate: o,
                                    key: "x",
                                    offsetTopLeft: i,
                                    position: a,
                                    reverseDirection: c,
                                    tooltipDimension: u.width,
                                    viewBox: s,
                                    viewBoxDimension: s.width
                                }),
                                translateY: r = sp({
                                    allowEscapeViewBox: n,
                                    coordinate: o,
                                    key: "y",
                                    offsetTopLeft: i,
                                    position: a,
                                    reverseDirection: c,
                                    tooltipDimension: u.height,
                                    viewBox: s,
                                    viewBoxDimension: s.height
                                }),
                                useTranslate3d: l
                            }) : up,
                            cssClasses: lp({
                                translateX: e,
                                translateY: r,
                                coordinate: o
                            })
                        }
                    }({
                        allowEscapeViewBox: o,
                        coordinate: u,
                        offsetTopLeft: f,
                        position: p,
                        reverseDirection: h,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: y,
                        viewBox: d
                    }),
                    b = m.cssClasses,
                    g = m.cssProperties,
                    w = hp(hp({
                        transition: s && r ? "transform ".concat(i, "ms ").concat(a) : void 0
                    }, g), {}, {
                        pointerEvents: "none",
                        visibility: !this.state.dismissed && r && l ? "visible" : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }, v);
                return n.createElement("div", {
                    tabIndex: -1,
                    className: b,
                    style: w,
                    ref: function(e) {
                        t.wrapperNode = e
                    }
                }, c)
            }
        }])
    }(),
    xp = {
        isSsr: !("undefined" != typeof window && window.document && window.document.createElement && window.setTimeout),
        get: function(t) {
            return xp[t]
        },
        set: function(t, e) {
            if ("string" == typeof t) xp[t] = e;
            else {
                var r = Object.keys(t);
                r && r.length && r.forEach((function(e) {
                    xp[e] = t[e]
                }))
            }
        }
    };

function jp(t) {
    return (jp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Sp(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Ap(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Sp(Object(r), !0).forEach((function(e) {
            _p(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Sp(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Pp(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Cp(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Ep(t, e, r) {
    return e = Tp(e),
        function(t, e) {
            if (e && ("object" === jp(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, kp() ? Reflect.construct(e, r || [], Tp(t).constructor) : e.apply(t, r))
}

function kp() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (kp = function() {
        return !!t
    })()
}

function Tp(t) {
    return (Tp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function Mp(t, e) {
    return (Mp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function _p(t, e, r) {
    return (e = Cp(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Cp(t) {
    var e = function(t, e) {
        if ("object" != jp(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != jp(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == jp(e) ? e : e + ""
}

function Dp(t) {
    return t.dataKey
}
var Ip = function() {
    function t() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), Ep(this, t, arguments)
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && Mp(t, e)
    }(t, r.PureComponent), Pp(t, [{
        key: "render",
        value: function() {
            var t = this,
                e = this.props,
                r = e.active,
                o = e.allowEscapeViewBox,
                i = e.animationDuration,
                a = e.animationEasing,
                c = e.content,
                u = e.coordinate,
                l = e.filterNull,
                s = e.isAnimationActive,
                f = e.offset,
                p = e.payload,
                h = e.payloadUniqBy,
                y = e.position,
                d = e.reverseDirection,
                v = e.useTranslate3d,
                m = e.viewBox,
                b = e.wrapperStyle,
                g = null != p ? p : [];
            l && g.length && (g = pf(p.filter((function(e) {
                return null != e.value && (!0 !== e.hide || t.props.includeHidden)
            })), h, Dp));
            var w = g.length > 0;
            return n.createElement(Op, {
                allowEscapeViewBox: o,
                animationDuration: i,
                animationEasing: a,
                isAnimationActive: s,
                active: r,
                coordinate: u,
                hasPayload: w,
                offset: f,
                position: y,
                reverseDirection: d,
                useTranslate3d: v,
                viewBox: m,
                wrapperStyle: b
            }, function(t, e) {
                return n.isValidElement(t) ? n.cloneElement(t, e) : "function" == typeof t ? n.createElement(t, e) : n.createElement(op, e)
            }(c, Ap(Ap({}, this.props), {}, {
                payload: g
            })))
        }
    }])
}();

function Np(t) {
    return (Np = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Rp(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Bp(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Rp(Object(r), !0).forEach((function(e) {
            Lp(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Rp(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Lp(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != Np(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Np(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == Np(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function zp(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Fp(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fp(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Fp(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
_p(Ip, "displayName", "Tooltip"), _p(Ip, "defaultProps", {
    accessibilityLayer: !1,
    allowEscapeViewBox: {
        x: !1,
        y: !1
    },
    animationDuration: 400,
    animationEasing: "ease",
    contentStyle: {},
    coordinate: {
        x: 0,
        y: 0
    },
    cursor: !0,
    cursorStyle: {},
    filterNull: !0,
    isAnimationActive: !xp.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: {
        x: !1,
        y: !1
    },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: !1,
    viewBox: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
    },
    wrapperStyle: {}
});
var Up = r.forwardRef((function(t, e) {
        var o = t.aspect,
            i = t.initialDimension,
            a = void 0 === i ? {
                width: -1,
                height: -1
            } : i,
            c = t.width,
            u = void 0 === c ? "100%" : c,
            l = t.height,
            s = void 0 === l ? "100%" : l,
            f = t.minWidth,
            p = void 0 === f ? 0 : f,
            y = t.minHeight,
            d = t.maxHeight,
            v = t.children,
            m = t.debounce,
            b = void 0 === m ? 0 : m,
            g = t.id,
            w = t.className,
            O = t.onResize,
            x = t.style,
            j = void 0 === x ? {} : x,
            S = r.useRef(null),
            A = r.useRef();
        A.current = O, r.useImperativeHandle(e, (function() {
            return Object.defineProperty(S.current, "current", {
                get: function() {
                    return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), S.current
                },
                configurable: !0
            })
        }));
        var P = zp(r.useState({
                containerWidth: a.width,
                containerHeight: a.height
            }), 2),
            E = P[0],
            k = P[1],
            T = r.useCallback((function(t, e) {
                k((function(r) {
                    var n = Math.round(t),
                        o = Math.round(e);
                    return r.containerWidth === n && r.containerHeight === o ? r : {
                        containerWidth: n,
                        containerHeight: o
                    }
                }))
            }), []);
        r.useEffect((function() {
            var t = function(t) {
                var e, r = t[0].contentRect,
                    n = r.width,
                    o = r.height;
                T(n, o), null === (e = A.current) || void 0 === e || e.call(A, n, o)
            };
            b > 0 && (t = h(t, b, {
                trailing: !0,
                leading: !1
            }));
            var e = new ResizeObserver(t),
                r = S.current.getBoundingClientRect(),
                n = r.width,
                o = r.height;
            return T(n, o), e.observe(S.current),
                function() {
                    e.disconnect()
                }
        }), [T, b]);
        var M = r.useMemo((function() {
            var t = E.containerWidth,
                e = E.containerHeight;
            if (t < 0 || e < 0) return null;
            bu(Pc(u) || Pc(s), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", u, s), bu(!o || o > 0, "The aspect(%s) must be greater than zero.", o);
            var i = Pc(u) ? t : u,
                a = Pc(s) ? e : s;
            o && o > 0 && (i ? a = i / o : a && (i = a * o), d && a > d && (a = d)), bu(i > 0 || a > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", i, a, u, s, p, y, o);
            var c = !Array.isArray(v) && Gc(v.type).endsWith("Chart");
            return n.Children.map(v, (function(t) {
                return n.isValidElement(t) ? r.cloneElement(t, Bp({
                    width: i,
                    height: a
                }, c ? {
                    style: Bp({
                        height: "100%",
                        width: "100%",
                        maxHeight: a,
                        maxWidth: i
                    }, t.props.style)
                } : {})) : t
            }))
        }), [o, v, s, d, y, p, E, u]);
        return n.createElement("div", {
            id: g ? "".concat(g) : void 0,
            className: hc("recharts-responsive-container", w),
            style: Bp(Bp({}, j), {}, {
                width: u,
                height: s,
                minWidth: p,
                minHeight: y,
                maxHeight: d
            }),
            ref: S
        }, M)
    })),
    Wp = function(t) {
        return null
    };

function $p(t) {
    return ($p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Kp(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function qp(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Kp(Object(r), !0).forEach((function(e) {
            Vp(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Kp(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Vp(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != $p(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != $p(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == $p(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
Wp.displayName = "Cell";
var Xp = {
        widthCache: {},
        cacheCount: 0
    },
    Hp = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
    },
    Gp = "recharts_measurement_span";
var Yp = function(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == t || xp.isSsr) return {
        width: 0,
        height: 0
    };
    var r, n = (r = qp({}, e), Object.keys(r).forEach((function(t) {
            r[t] || delete r[t]
        })), r),
        o = JSON.stringify({
            text: t,
            copyStyle: n
        });
    if (Xp.widthCache[o]) return Xp.widthCache[o];
    try {
        var i = document.getElementById(Gp);
        i || ((i = document.createElement("span")).setAttribute("id", Gp), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
        var a = qp(qp({}, Hp), n);
        Object.assign(i.style, a), i.textContent = "".concat(t);
        var c = i.getBoundingClientRect(),
            u = {
                width: c.width,
                height: c.height
            };
        return Xp.widthCache[o] = u, ++Xp.cacheCount > 2e3 && (Xp.cacheCount = 0, Xp.widthCache = {}), u
    } catch (l) {
        return {
            width: 0,
            height: 0
        }
    }
};

function Zp(t) {
    return (Zp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Jp(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e) {
                    if (Object(r) !== r) return;
                    u = !1
                } else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Qp(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qp(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Qp(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function th(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, eh(n.key), n)
    }
}

function eh(t) {
    var e = function(t, e) {
        if ("object" != Zp(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e);
            if ("object" != Zp(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(t)
    }(t, "string");
    return "symbol" == Zp(e) ? e : e + ""
}
var rh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    nh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    oh = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
    ih = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
    ah = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
    },
    ch = Object.keys(ah),
    uh = "NaN";
var lh = function() {
    function t(e, r) {
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.num = e, this.unit = r, this.num = e, this.unit = r, Number.isNaN(e) && (this.unit = ""), "" === r || oh.test(r) || (this.num = NaN, this.unit = ""), ch.includes(r) && (this.num = function(t, e) {
            return t * ah[e]
        }(e, r), this.unit = "px")
    }
    return e = t, n = [{
        key: "parse",
        value: function(e) {
            var r, n = Jp(null !== (r = ih.exec(e)) && void 0 !== r ? r : [], 3),
                o = n[1],
                i = n[2];
            return new t(parseFloat(o), null != i ? i : "")
        }
    }], (r = [{
        key: "add",
        value: function(e) {
            return this.unit !== e.unit ? new t(NaN, "") : new t(this.num + e.num, this.unit)
        }
    }, {
        key: "subtract",
        value: function(e) {
            return this.unit !== e.unit ? new t(NaN, "") : new t(this.num - e.num, this.unit)
        }
    }, {
        key: "multiply",
        value: function(e) {
            return "" !== this.unit && "" !== e.unit && this.unit !== e.unit ? new t(NaN, "") : new t(this.num * e.num, this.unit || e.unit)
        }
    }, {
        key: "divide",
        value: function(e) {
            return "" !== this.unit && "" !== e.unit && this.unit !== e.unit ? new t(NaN, "") : new t(this.num / e.num, this.unit || e.unit)
        }
    }, {
        key: "toString",
        value: function() {
            return "".concat(this.num).concat(this.unit)
        }
    }, {
        key: "isNaN",
        value: function() {
            return Number.isNaN(this.num)
        }
    }]) && th(e.prototype, r), n && th(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, r, n
}();

function sh(t) {
    if (t.includes(uh)) return uh;
    for (var e = t; e.includes("*") || e.includes("/");) {
        var r, n = Jp(null !== (r = rh.exec(e)) && void 0 !== r ? r : [], 4),
            o = n[1],
            i = n[2],
            a = n[3],
            c = lh.parse(null != o ? o : ""),
            u = lh.parse(null != a ? a : ""),
            l = "*" === i ? c.multiply(u) : c.divide(u);
        if (l.isNaN()) return uh;
        e = e.replace(rh, l.toString())
    }
    for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e);) {
        var s, f = Jp(null !== (s = nh.exec(e)) && void 0 !== s ? s : [], 4),
            p = f[1],
            h = f[2],
            y = f[3],
            d = lh.parse(null != p ? p : ""),
            v = lh.parse(null != y ? y : ""),
            m = "+" === h ? d.add(v) : d.subtract(v);
        if (m.isNaN()) return uh;
        e = e.replace(nh, m.toString())
    }
    return e
}
var fh = /\(([^()]*)\)/;

function ph(t) {
    var e = t.replace(/\s+/g, "");
    return e = function(t) {
        for (var e = t; e.includes("(");) {
            var r = Jp(fh.exec(e), 2)[1];
            e = e.replace(fh, sh(r))
        }
        return e
    }(e), e = sh(e)
}

function hh(t) {
    var e = function(t) {
        try {
            return ph(t)
        } catch (e) {
            return uh
        }
    }(t.slice(5, -1));
    return e === uh ? "" : e
}
var yh = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
    dh = ["dx", "dy", "angle", "className", "breakAll"];

function vh() {
    return vh = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, vh.apply(this, arguments)
}

function mh(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function bh(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e) {
                    if (Object(r) !== r) return;
                    u = !1
                } else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return gh(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gh(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function gh(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
var wh = /[ \f\n\r\t\v\u2028\u2029]+/,
    Oh = function(t) {
        var e = t.children,
            r = t.breakAll,
            n = t.style;
        try {
            var o = [];
            return yc(e) || (o = r ? e.toString().split("") : e.toString().split(wh)), {
                wordsWithComputedWidth: o.map((function(t) {
                    return {
                        word: t,
                        width: Yp(t, n).width
                    }
                })),
                spaceWidth: r ? 0 : Yp(" ", n).width
            }
        } catch (i) {
            return null
        }
    },
    xh = function(t) {
        return [{
            words: yc(t) ? [] : t.toString().split(wh)
        }]
    },
    jh = function(t) {
        var e = t.width,
            r = t.scaleToFit,
            n = t.children,
            o = t.style,
            i = t.breakAll,
            a = t.maxLines;
        if ((e || r) && !xp.isSsr) {
            var c = Oh({
                breakAll: i,
                children: n,
                style: o
            });
            return c ? function(t, e, r, n, o) {
                var i = t.maxLines,
                    a = t.children,
                    c = t.style,
                    u = t.breakAll,
                    l = Ec(i),
                    s = a,
                    f = function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(t, e) {
                            var i = e.word,
                                a = e.width,
                                c = t[t.length - 1];
                            if (c && (null == n || o || c.width + a + r < Number(n))) c.words.push(i), c.width += a + r;
                            else {
                                var u = {
                                    words: [i],
                                    width: a
                                };
                                t.push(u)
                            }
                            return t
                        }), [])
                    },
                    p = f(e);
                if (!l) return p;
                for (var h, y = function(t) {
                        var e = s.slice(0, t),
                            r = Oh({
                                breakAll: u,
                                style: c,
                                children: e + "…"
                            }).wordsWithComputedWidth,
                            o = f(r),
                            a = o.length > i || function(t) {
                                return t.reduce((function(t, e) {
                                    return t.width > e.width ? t : e
                                }))
                            }(o).width > Number(n);
                        return [a, o]
                    }, d = 0, v = s.length - 1, m = 0; d <= v && m <= s.length - 1;) {
                    var b = Math.floor((d + v) / 2),
                        g = bh(y(b - 1), 2),
                        w = g[0],
                        O = g[1],
                        x = bh(y(b), 1)[0];
                    if (w || x || (d = b + 1), w && x && (v = b - 1), !w && x) {
                        h = O;
                        break
                    }
                    m++
                }
                return h || p
            }({
                breakAll: i,
                children: n,
                maxLines: a,
                style: o
            }, c.wordsWithComputedWidth, c.spaceWidth, e, r) : xh(n)
        }
        return xh(n)
    },
    Sh = "#808080",
    Ah = function(t) {
        var e = t.x,
            o = void 0 === e ? 0 : e,
            i = t.y,
            a = void 0 === i ? 0 : i,
            c = t.lineHeight,
            u = void 0 === c ? "1em" : c,
            l = t.capHeight,
            s = void 0 === l ? "0.71em" : l,
            f = t.scaleToFit,
            p = void 0 !== f && f,
            h = t.textAnchor,
            y = void 0 === h ? "start" : h,
            d = t.verticalAnchor,
            v = void 0 === d ? "end" : d,
            m = t.fill,
            b = void 0 === m ? Sh : m,
            g = mh(t, yh),
            w = r.useMemo((function() {
                return jh({
                    breakAll: g.breakAll,
                    children: g.children,
                    maxLines: g.maxLines,
                    scaleToFit: p,
                    style: g.style,
                    width: g.width
                })
            }), [g.breakAll, g.children, g.maxLines, p, g.style, g.width]),
            O = g.dx,
            x = g.dy,
            j = g.angle,
            S = g.className,
            A = g.breakAll,
            P = mh(g, dh);
        if (!kc(o) || !kc(a)) return null;
        var E, k = o + (Ec(O) ? O : 0),
            T = a + (Ec(x) ? x : 0);
        switch (v) {
            case "start":
                E = hh("calc(".concat(s, ")"));
                break;
            case "middle":
                E = hh("calc(".concat((w.length - 1) / 2, " * -").concat(u, " + (").concat(s, " / 2))"));
                break;
            default:
                E = hh("calc(".concat(w.length - 1, " * -").concat(u, ")"))
        }
        var M = [];
        if (p) {
            var _ = w[0].width,
                C = g.width;
            M.push("scale(".concat((Ec(C) ? C / _ : 1) / _, ")"))
        }
        return j && M.push("rotate(".concat(j, ", ").concat(k, ", ").concat(T, ")")), M.length && (P.transform = M.join(" ")), n.createElement("text", vh({}, au(P, !0), {
            x: k,
            y: T,
            className: hc("recharts-text", S),
            textAnchor: y,
            fill: b.includes("url") ? Sh : b
        }), w.map((function(t, e) {
            var r = t.words.join(A ? "" : " ");
            return n.createElement("tspan", {
                x: k,
                dy: 0 === e ? E : u,
                key: "".concat(r, "-").concat(e)
            }, r)
        })))
    };

function Ph(t, e) {
    return null == t || null == e ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}

function Eh(t, e) {
    return null == t || null == e ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}

function kh(t) {
    let e, r, n;

    function o(t, n, o = 0, i = t.length) {
        if (o < i) {
            if (0 !== e(n, n)) return i;
            do {
                const e = o + i >>> 1;
                r(t[e], n) < 0 ? o = e + 1 : i = e
            } while (o < i)
        }
        return o
    }
    return 2 !== t.length ? (e = Ph, r = (e, r) => Ph(t(e), r), n = (e, r) => t(e) - r) : (e = t === Ph || t === Eh ? t : Th, r = t, n = t), {
        left: o,
        center: function(t, e, r = 0, i = t.length) {
            const a = o(t, e, r, i - 1);
            return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a
        },
        right: function(t, n, o = 0, i = t.length) {
            if (o < i) {
                if (0 !== e(n, n)) return i;
                do {
                    const e = o + i >>> 1;
                    r(t[e], n) <= 0 ? o = e + 1 : i = e
                } while (o < i)
            }
            return o
        }
    }
}

function Th() {
    return 0
}

function Mh(t) {
    return null === t ? NaN : +t
}
const _h = kh(Ph).right;
kh(Mh).center;
class Ch extends Map {
    constructor(t, e = Ih) {
        if (super(), Object.defineProperties(this, {
                _intern: {
                    value: new Map
                },
                _key: {
                    value: e
                }
            }), null != t)
            for (const [r, n] of t) this.set(r, n)
    }
    get(t) {
        return super.get(Dh(this, t))
    }
    has(t) {
        return super.has(Dh(this, t))
    }
    set(t, e) {
        return super.set(function({
            _intern: t,
            _key: e
        }, r) {
            const n = e(r);
            return t.has(n) ? t.get(n) : (t.set(n, r), r)
        }(this, t), e)
    }
    delete(t) {
        return super.delete(function({
            _intern: t,
            _key: e
        }, r) {
            const n = e(r);
            t.has(n) && (r = t.get(n), t.delete(n));
            return r
        }(this, t))
    }
}

function Dh({
    _intern: t,
    _key: e
}, r) {
    const n = e(r);
    return t.has(n) ? t.get(n) : r
}

function Ih(t) {
    return null !== t && "object" == typeof t ? t.valueOf() : t
}

function Nh(t, e) {
    return (null == t || !(t >= t)) - (null == e || !(e >= e)) || (t < e ? -1 : t > e ? 1 : 0)
}
const Rh = Math.sqrt(50),
    Bh = Math.sqrt(10),
    Lh = Math.sqrt(2);

function zh(t, e, r) {
    const n = (e - t) / Math.max(0, r),
        o = Math.floor(Math.log10(n)),
        i = n / Math.pow(10, o),
        a = i >= Rh ? 10 : i >= Bh ? 5 : i >= Lh ? 2 : 1;
    let c, u, l;
    return o < 0 ? (l = Math.pow(10, -o) / a, c = Math.round(t * l), u = Math.round(e * l), c / l < t && ++c, u / l > e && --u, l = -l) : (l = Math.pow(10, o) * a, c = Math.round(t / l), u = Math.round(e / l), c * l < t && ++c, u * l > e && --u), u < c && .5 <= r && r < 2 ? zh(t, e, 2 * r) : [c, u, l]
}

function Fh(t, e, r) {
    if (!((r = +r) > 0)) return [];
    if ((t = +t) === (e = +e)) return [t];
    const n = e < t,
        [o, i, a] = n ? zh(e, t, r) : zh(t, e, r);
    if (!(i >= o)) return [];
    const c = i - o + 1,
        u = new Array(c);
    if (n)
        if (a < 0)
            for (let l = 0; l < c; ++l) u[l] = (i - l) / -a;
        else
            for (let l = 0; l < c; ++l) u[l] = (i - l) * a;
    else if (a < 0)
        for (let l = 0; l < c; ++l) u[l] = (o + l) / -a;
    else
        for (let l = 0; l < c; ++l) u[l] = (o + l) * a;
    return u
}

function Uh(t, e, r) {
    return zh(t = +t, e = +e, r = +r)[2]
}

function Wh(t, e, r) {
    r = +r;
    const n = (e = +e) < (t = +t),
        o = n ? Uh(e, t, r) : Uh(t, e, r);
    return (n ? -1 : 1) * (o < 0 ? 1 / -o : o)
}

function $h(t, e) {
    let r;
    for (const n of t) null != n && (r < n || void 0 === r && n >= n) && (r = n);
    return r
}

function Kh(t, e) {
    let r;
    for (const n of t) null != n && (r > n || void 0 === r && n >= n) && (r = n);
    return r
}

function qh(t, e, r = 0, n = 1 / 0, o) {
    if (e = Math.floor(e), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(t.length - 1, n)), !(r <= e && e <= n)) return t;
    for (o = void 0 === o ? Nh : function(t = Ph) {
            if (t === Ph) return Nh;
            if ("function" != typeof t) throw new TypeError("compare is not a function");
            return (e, r) => {
                const n = t(e, r);
                return n || 0 === n ? n : (0 === t(r, r)) - (0 === t(e, e))
            }
        }(o); n > r;) {
        if (n - r > 600) {
            const i = n - r + 1,
                a = e - r + 1,
                c = Math.log(i),
                u = .5 * Math.exp(2 * c / 3),
                l = .5 * Math.sqrt(c * u * (i - u) / i) * (a - i / 2 < 0 ? -1 : 1);
            qh(t, e, Math.max(r, Math.floor(e - a * u / i + l)), Math.min(n, Math.floor(e + (i - a) * u / i + l)), o)
        }
        const i = t[e];
        let a = r,
            c = n;
        for (Vh(t, r, e), o(t[n], i) > 0 && Vh(t, r, n); a < c;) {
            for (Vh(t, a, c), ++a, --c; o(t[a], i) < 0;) ++a;
            for (; o(t[c], i) > 0;) --c
        }
        0 === o(t[r], i) ? Vh(t, r, c) : (++c, Vh(t, c, n)), c <= e && (r = c + 1), e <= c && (n = c - 1)
    }
    return t
}

function Vh(t, e, r) {
    const n = t[e];
    t[e] = t[r], t[r] = n
}

function Xh(t, e, r = Mh) {
    if ((n = t.length) && !isNaN(e = +e)) {
        if (e <= 0 || n < 2) return +r(t[0], 0, t);
        if (e >= 1) return +r(t[n - 1], n - 1, t);
        var n, o = (n - 1) * e,
            i = Math.floor(o),
            a = +r(t[i], i, t);
        return a + (+r(t[i + 1], i + 1, t) - a) * (o - i)
    }
}

function Hh(t, e) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(t);
            break;
        default:
            this.range(e).domain(t)
    }
    return this
}

function Gh(t, e) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
        default:
            this.domain(t), "function" == typeof e ? this.interpolator(e) : this.range(e)
    }
    return this
}
const Yh = Symbol("implicit");

function Zh() {
    var t = new Ch,
        e = [],
        r = [],
        n = Yh;

    function o(o) {
        let i = t.get(o);
        if (void 0 === i) {
            if (n !== Yh) return n;
            t.set(o, i = e.push(o) - 1)
        }
        return r[i % r.length]
    }
    return o.domain = function(r) {
        if (!arguments.length) return e.slice();
        e = [], t = new Ch;
        for (const n of r) t.has(n) || t.set(n, e.push(n) - 1);
        return o
    }, o.range = function(t) {
        return arguments.length ? (r = Array.from(t), o) : r.slice()
    }, o.unknown = function(t) {
        return arguments.length ? (n = t, o) : n
    }, o.copy = function() {
        return Zh(e, r).unknown(n)
    }, Hh.apply(o, arguments), o
}

function Jh() {
    var t, e, r = Zh().unknown(void 0),
        n = r.domain,
        o = r.range,
        i = 0,
        a = 1,
        c = !1,
        u = 0,
        l = 0,
        s = .5;

    function f() {
        var r = n().length,
            f = a < i,
            p = f ? a : i,
            h = f ? i : a;
        t = (h - p) / Math.max(1, r - u + 2 * l), c && (t = Math.floor(t)), p += (h - p - t * (r - u)) * s, e = t * (1 - u), c && (p = Math.round(p), e = Math.round(e));
        var y = function(t, e, r) {
            t = +t, e = +e, r = (o = arguments.length) < 2 ? (e = t, t = 0, 1) : o < 3 ? 1 : +r;
            for (var n = -1, o = 0 | Math.max(0, Math.ceil((e - t) / r)), i = new Array(o); ++n < o;) i[n] = t + n * r;
            return i
        }(r).map((function(e) {
            return p + t * e
        }));
        return o(f ? y.reverse() : y)
    }
    return delete r.unknown, r.domain = function(t) {
        return arguments.length ? (n(t), f()) : n()
    }, r.range = function(t) {
        return arguments.length ? ([i, a] = t, i = +i, a = +a, f()) : [i, a]
    }, r.rangeRound = function(t) {
        return [i, a] = t, i = +i, a = +a, c = !0, f()
    }, r.bandwidth = function() {
        return e
    }, r.step = function() {
        return t
    }, r.round = function(t) {
        return arguments.length ? (c = !!t, f()) : c
    }, r.padding = function(t) {
        return arguments.length ? (u = Math.min(1, l = +t), f()) : u
    }, r.paddingInner = function(t) {
        return arguments.length ? (u = Math.min(1, t), f()) : u
    }, r.paddingOuter = function(t) {
        return arguments.length ? (l = +t, f()) : l
    }, r.align = function(t) {
        return arguments.length ? (s = Math.max(0, Math.min(1, t)), f()) : s
    }, r.copy = function() {
        return Jh(n(), [i, a]).round(c).paddingInner(u).paddingOuter(l).align(s)
    }, Hh.apply(f(), arguments)
}

function Qh(t) {
    var e = t.copy;
    return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() {
        return Qh(e())
    }, t
}

function ty() {
    return Qh(Jh.apply(null, arguments).paddingInner(1))
}

function ey(t, e, r) {
    t.prototype = e.prototype = r, r.constructor = t
}

function ry(t, e) {
    var r = Object.create(t.prototype);
    for (var n in e) r[n] = e[n];
    return r
}

function ny() {}
var oy = .7,
    iy = 1 / oy,
    ay = "\\s*([+-]?\\d+)\\s*",
    cy = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    uy = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    ly = /^#([0-9a-f]{3,8})$/,
    sy = new RegExp(`^rgb\\(${ay},${ay},${ay}\\)$`),
    fy = new RegExp(`^rgb\\(${uy},${uy},${uy}\\)$`),
    py = new RegExp(`^rgba\\(${ay},${ay},${ay},${cy}\\)$`),
    hy = new RegExp(`^rgba\\(${uy},${uy},${uy},${cy}\\)$`),
    yy = new RegExp(`^hsl\\(${cy},${uy},${uy}\\)$`),
    dy = new RegExp(`^hsla\\(${cy},${uy},${uy},${cy}\\)$`),
    vy = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };

function my() {
    return this.rgb().formatHex()
}

function by() {
    return this.rgb().formatRgb()
}

function gy(t) {
    var e, r;
    return t = (t + "").trim().toLowerCase(), (e = ly.exec(t)) ? (r = e[1].length, e = parseInt(e[1], 16), 6 === r ? wy(e) : 3 === r ? new jy(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === r ? Oy(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === r ? Oy(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = sy.exec(t)) ? new jy(e[1], e[2], e[3], 1) : (e = fy.exec(t)) ? new jy(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = py.exec(t)) ? Oy(e[1], e[2], e[3], e[4]) : (e = hy.exec(t)) ? Oy(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = yy.exec(t)) ? Ty(e[1], e[2] / 100, e[3] / 100, 1) : (e = dy.exec(t)) ? Ty(e[1], e[2] / 100, e[3] / 100, e[4]) : vy.hasOwnProperty(t) ? wy(vy[t]) : "transparent" === t ? new jy(NaN, NaN, NaN, 0) : null
}

function wy(t) {
    return new jy(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
}

function Oy(t, e, r, n) {
    return n <= 0 && (t = e = r = NaN), new jy(t, e, r, n)
}

function xy(t, e, r, n) {
    return 1 === arguments.length ? ((o = t) instanceof ny || (o = gy(o)), o ? new jy((o = o.rgb()).r, o.g, o.b, o.opacity) : new jy) : new jy(t, e, r, null == n ? 1 : n);
    var o
}

function jy(t, e, r, n) {
    this.r = +t, this.g = +e, this.b = +r, this.opacity = +n
}

function Sy() {
    return `#${ky(this.r)}${ky(this.g)}${ky(this.b)}`
}

function Ay() {
    const t = Py(this.opacity);
    return `${1===t?"rgb(":"rgba("}${Ey(this.r)}, ${Ey(this.g)}, ${Ey(this.b)}${1===t?")":`, ${t})`}`
}

function Py(t) {
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
}

function Ey(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0))
}

function ky(t) {
    return ((t = Ey(t)) < 16 ? "0" : "") + t.toString(16)
}

function Ty(t, e, r, n) {
    return n <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new _y(t, e, r, n)
}

function My(t) {
    if (t instanceof _y) return new _y(t.h, t.s, t.l, t.opacity);
    if (t instanceof ny || (t = gy(t)), !t) return new _y;
    if (t instanceof _y) return t;
    var e = (t = t.rgb()).r / 255,
        r = t.g / 255,
        n = t.b / 255,
        o = Math.min(e, r, n),
        i = Math.max(e, r, n),
        a = NaN,
        c = i - o,
        u = (i + o) / 2;
    return c ? (a = e === i ? (r - n) / c + 6 * (r < n) : r === i ? (n - e) / c + 2 : (e - r) / c + 4, c /= u < .5 ? i + o : 2 - i - o, a *= 60) : c = u > 0 && u < 1 ? 0 : a, new _y(a, c, u, t.opacity)
}

function _y(t, e, r, n) {
    this.h = +t, this.s = +e, this.l = +r, this.opacity = +n
}

function Cy(t) {
    return (t = (t || 0) % 360) < 0 ? t + 360 : t
}

function Dy(t) {
    return Math.max(0, Math.min(1, t || 0))
}

function Iy(t, e, r) {
    return 255 * (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e)
}
ey(ny, gy, {
    copy(t) {
        return Object.assign(new this.constructor, this, t)
    },
    displayable() {
        return this.rgb().displayable()
    },
    hex: my,
    formatHex: my,
    formatHex8: function() {
        return this.rgb().formatHex8()
    },
    formatHsl: function() {
        return My(this).formatHsl()
    },
    formatRgb: by,
    toString: by
}), ey(jy, xy, ry(ny, {
    brighter(t) {
        return t = null == t ? iy : Math.pow(iy, t), new jy(this.r * t, this.g * t, this.b * t, this.opacity)
    },
    darker(t) {
        return t = null == t ? oy : Math.pow(oy, t), new jy(this.r * t, this.g * t, this.b * t, this.opacity)
    },
    rgb() {
        return this
    },
    clamp() {
        return new jy(Ey(this.r), Ey(this.g), Ey(this.b), Py(this.opacity))
    },
    displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: Sy,
    formatHex: Sy,
    formatHex8: function() {
        return `#${ky(this.r)}${ky(this.g)}${ky(this.b)}${ky(255*(isNaN(this.opacity)?1:this.opacity))}`
    },
    formatRgb: Ay,
    toString: Ay
})), ey(_y, (function(t, e, r, n) {
    return 1 === arguments.length ? My(t) : new _y(t, e, r, null == n ? 1 : n)
}), ry(ny, {
    brighter(t) {
        return t = null == t ? iy : Math.pow(iy, t), new _y(this.h, this.s, this.l * t, this.opacity)
    },
    darker(t) {
        return t = null == t ? oy : Math.pow(oy, t), new _y(this.h, this.s, this.l * t, this.opacity)
    },
    rgb() {
        var t = this.h % 360 + 360 * (this.h < 0),
            e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            n = r + (r < .5 ? r : 1 - r) * e,
            o = 2 * r - n;
        return new jy(Iy(t >= 240 ? t - 240 : t + 120, o, n), Iy(t, o, n), Iy(t < 120 ? t + 240 : t - 120, o, n), this.opacity)
    },
    clamp() {
        return new _y(Cy(this.h), Dy(this.s), Dy(this.l), Py(this.opacity))
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl() {
        const t = Py(this.opacity);
        return `${1===t?"hsl(":"hsla("}${Cy(this.h)}, ${100*Dy(this.s)}%, ${100*Dy(this.l)}%${1===t?")":`, ${t})`}`
    }
}));
const Ny = t => () => t;

function Ry(t) {
    return 1 == (t = +t) ? By : function(e, r) {
        return r - e ? function(t, e, r) {
            return t = Math.pow(t, r), e = Math.pow(e, r) - t, r = 1 / r,
                function(n) {
                    return Math.pow(t + n * e, r)
                }
        }(e, r, t) : Ny(isNaN(e) ? r : e)
    }
}

function By(t, e) {
    var r = e - t;
    return r ? function(t, e) {
        return function(r) {
            return t + r * e
        }
    }(t, r) : Ny(isNaN(t) ? e : t)
}
const Ly = function t(e) {
    var r = Ry(e);

    function n(t, e) {
        var n = r((t = xy(t)).r, (e = xy(e)).r),
            o = r(t.g, e.g),
            i = r(t.b, e.b),
            a = By(t.opacity, e.opacity);
        return function(e) {
            return t.r = n(e), t.g = o(e), t.b = i(e), t.opacity = a(e), t + ""
        }
    }
    return n.gamma = t, n
}(1);

function zy(t, e) {
    e || (e = []);
    var r, n = t ? Math.min(e.length, t.length) : 0,
        o = e.slice();
    return function(i) {
        for (r = 0; r < n; ++r) o[r] = t[r] * (1 - i) + e[r] * i;
        return o
    }
}

function Fy(t, e) {
    var r, n = e ? e.length : 0,
        o = t ? Math.min(n, t.length) : 0,
        i = new Array(o),
        a = new Array(n);
    for (r = 0; r < o; ++r) i[r] = Xy(t[r], e[r]);
    for (; r < n; ++r) a[r] = e[r];
    return function(t) {
        for (r = 0; r < o; ++r) a[r] = i[r](t);
        return a
    }
}

function Uy(t, e) {
    var r = new Date;
    return t = +t, e = +e,
        function(n) {
            return r.setTime(t * (1 - n) + e * n), r
        }
}

function Wy(t, e) {
    return t = +t, e = +e,
        function(r) {
            return t * (1 - r) + e * r
        }
}

function $y(t, e) {
    var r, n = {},
        o = {};
    for (r in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) r in t ? n[r] = Xy(t[r], e[r]) : o[r] = e[r];
    return function(t) {
        for (r in n) o[r] = n[r](t);
        return o
    }
}
var Ky = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    qy = new RegExp(Ky.source, "g");

function Vy(t, e) {
    var r, n, o, i = Ky.lastIndex = qy.lastIndex = 0,
        a = -1,
        c = [],
        u = [];
    for (t += "", e += "";
        (r = Ky.exec(t)) && (n = qy.exec(e));)(o = n.index) > i && (o = e.slice(i, o), c[a] ? c[a] += o : c[++a] = o), (r = r[0]) === (n = n[0]) ? c[a] ? c[a] += n : c[++a] = n : (c[++a] = null, u.push({
        i: a,
        x: Wy(r, n)
    })), i = qy.lastIndex;
    return i < e.length && (o = e.slice(i), c[a] ? c[a] += o : c[++a] = o), c.length < 2 ? u[0] ? function(t) {
        return function(e) {
            return t(e) + ""
        }
    }(u[0].x) : function(t) {
        return function() {
            return t
        }
    }(e) : (e = u.length, function(t) {
        for (var r, n = 0; n < e; ++n) c[(r = u[n]).i] = r.x(t);
        return c.join("")
    })
}

function Xy(t, e) {
    var r, n, o = typeof e;
    return null == e || "boolean" === o ? Ny(e) : ("number" === o ? Wy : "string" === o ? (r = gy(e)) ? (e = r, Ly) : Vy : e instanceof gy ? Ly : e instanceof Date ? Uy : (n = e, !ArrayBuffer.isView(n) || n instanceof DataView ? Array.isArray(e) ? Fy : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? $y : Wy : zy))(t, e)
}

function Hy(t, e) {
    return t = +t, e = +e,
        function(r) {
            return Math.round(t * (1 - r) + e * r)
        }
}

function Gy(t) {
    return +t
}
var Yy = [0, 1];

function Zy(t) {
    return t
}

function Jy(t, e) {
    return (e -= t = +t) ? function(r) {
        return (r - t) / e
    } : (r = isNaN(e) ? NaN : .5, function() {
        return r
    });
    var r
}

function Qy(t, e, r) {
    var n = t[0],
        o = t[1],
        i = e[0],
        a = e[1];
    return o < n ? (n = Jy(o, n), i = r(a, i)) : (n = Jy(n, o), i = r(i, a)),
        function(t) {
            return i(n(t))
        }
}

function td(t, e, r) {
    var n = Math.min(t.length, e.length) - 1,
        o = new Array(n),
        i = new Array(n),
        a = -1;
    for (t[n] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < n;) o[a] = Jy(t[a], t[a + 1]), i[a] = r(e[a], e[a + 1]);
    return function(e) {
        var r = _h(t, e, 1, n) - 1;
        return i[r](o[r](e))
    }
}

function ed(t, e) {
    return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
}

function rd() {
    var t, e, r, n, o, i, a = Yy,
        c = Yy,
        u = Xy,
        l = Zy;

    function s() {
        var t, e, r, u = Math.min(a.length, c.length);
        return l !== Zy && (t = a[0], e = a[u - 1], t > e && (r = t, t = e, e = r), l = function(r) {
            return Math.max(t, Math.min(e, r))
        }), n = u > 2 ? td : Qy, o = i = null, f
    }

    function f(e) {
        return null == e || isNaN(e = +e) ? r : (o || (o = n(a.map(t), c, u)))(t(l(e)))
    }
    return f.invert = function(r) {
            return l(e((i || (i = n(c, a.map(t), Wy)))(r)))
        }, f.domain = function(t) {
            return arguments.length ? (a = Array.from(t, Gy), s()) : a.slice()
        }, f.range = function(t) {
            return arguments.length ? (c = Array.from(t), s()) : c.slice()
        }, f.rangeRound = function(t) {
            return c = Array.from(t), u = Hy, s()
        }, f.clamp = function(t) {
            return arguments.length ? (l = !!t || Zy, s()) : l !== Zy
        }, f.interpolate = function(t) {
            return arguments.length ? (u = t, s()) : u
        }, f.unknown = function(t) {
            return arguments.length ? (r = t, f) : r
        },
        function(r, n) {
            return t = r, e = n, s()
        }
}

function nd() {
    return rd()(Zy, Zy)
}

function od(t, e) {
    if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
    var r, n = t.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)]
}

function id(t) {
    return (t = od(Math.abs(t))) ? t[1] : NaN
}
var ad, cd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function ud(t) {
    if (!(e = cd.exec(t))) throw new Error("invalid format: " + t);
    var e;
    return new ld({
        fill: e[1],
        align: e[2],
        sign: e[3],
        symbol: e[4],
        zero: e[5],
        width: e[6],
        comma: e[7],
        precision: e[8] && e[8].slice(1),
        trim: e[9],
        type: e[10]
    })
}

function ld(t) {
    this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
}

function sd(t, e) {
    var r = od(t, e);
    if (!r) return t + "";
    var n = r[0],
        o = r[1];
    return o < 0 ? "0." + new Array(-o).join("0") + n : n.length > o + 1 ? n.slice(0, o + 1) + "." + n.slice(o + 1) : n + new Array(o - n.length + 2).join("0")
}
ud.prototype = ld.prototype, ld.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
};
const fd = {
    "%": (t, e) => (100 * t).toFixed(e),
    b: t => Math.round(t).toString(2),
    c: t => t + "",
    d: function(t) {
        return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
    },
    e: (t, e) => t.toExponential(e),
    f: (t, e) => t.toFixed(e),
    g: (t, e) => t.toPrecision(e),
    o: t => Math.round(t).toString(8),
    p: (t, e) => sd(100 * t, e),
    r: sd,
    s: function(t, e) {
        var r = od(t, e);
        if (!r) return t + "";
        var n = r[0],
            o = r[1],
            i = o - (ad = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            a = n.length;
        return i === a ? n : i > a ? n + new Array(i - a + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + od(t, Math.max(0, e + i - 1))[0]
    },
    X: t => Math.round(t).toString(16).toUpperCase(),
    x: t => Math.round(t).toString(16)
};

function pd(t) {
    return t
}
var hd, yd, dd, vd = Array.prototype.map,
    md = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

function bd(t) {
    var e, r, n = void 0 === t.grouping || void 0 === t.thousands ? pd : (e = vd.call(t.grouping, Number), r = t.thousands + "", function(t, n) {
            for (var o = t.length, i = [], a = 0, c = e[0], u = 0; o > 0 && c > 0 && (u + c + 1 > n && (c = Math.max(1, n - u)), i.push(t.substring(o -= c, o + c)), !((u += c + 1) > n));) c = e[a = (a + 1) % e.length];
            return i.reverse().join(r)
        }),
        o = void 0 === t.currency ? "" : t.currency[0] + "",
        i = void 0 === t.currency ? "" : t.currency[1] + "",
        a = void 0 === t.decimal ? "." : t.decimal + "",
        c = void 0 === t.numerals ? pd : function(t) {
            return function(e) {
                return e.replace(/[0-9]/g, (function(e) {
                    return t[+e]
                }))
            }
        }(vd.call(t.numerals, String)),
        u = void 0 === t.percent ? "%" : t.percent + "",
        l = void 0 === t.minus ? "−" : t.minus + "",
        s = void 0 === t.nan ? "NaN" : t.nan + "";

    function f(t) {
        var e = (t = ud(t)).fill,
            r = t.align,
            f = t.sign,
            p = t.symbol,
            h = t.zero,
            y = t.width,
            d = t.comma,
            v = t.precision,
            m = t.trim,
            b = t.type;
        "n" === b ? (d = !0, b = "g") : fd[b] || (void 0 === v && (v = 12), m = !0, b = "g"), (h || "0" === e && "=" === r) && (h = !0, e = "0", r = "=");
        var g = "$" === p ? o : "#" === p && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
            w = "$" === p ? i : /[%p]/.test(b) ? u : "",
            O = fd[b],
            x = /[defgprs%]/.test(b);

        function j(t) {
            var o, i, u, p = g,
                j = w;
            if ("c" === b) j = O(t) + j, t = "";
            else {
                var S = (t = +t) < 0 || 1 / t < 0;
                if (t = isNaN(t) ? s : O(Math.abs(t), v), m && (t = function(t) {
                        t: for (var e, r = t.length, n = 1, o = -1; n < r; ++n) switch (t[n]) {
                            case ".":
                                o = e = n;
                                break;
                            case "0":
                                0 === o && (o = n), e = n;
                                break;
                            default:
                                if (!+t[n]) break t;
                                o > 0 && (o = 0)
                        }
                        return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
                    }(t)), S && 0 == +t && "+" !== f && (S = !1), p = (S ? "(" === f ? f : l : "-" === f || "(" === f ? "" : f) + p, j = ("s" === b ? md[8 + ad / 3] : "") + j + (S && "(" === f ? ")" : ""), x)
                    for (o = -1, i = t.length; ++o < i;)
                        if (48 > (u = t.charCodeAt(o)) || u > 57) {
                            j = (46 === u ? a + t.slice(o + 1) : t.slice(o)) + j, t = t.slice(0, o);
                            break
                        }
            }
            d && !h && (t = n(t, 1 / 0));
            var A = p.length + t.length + j.length,
                P = A < y ? new Array(y - A + 1).join(e) : "";
            switch (d && h && (t = n(P + t, P.length ? y - j.length : 1 / 0), P = ""), r) {
                case "<":
                    t = p + t + j + P;
                    break;
                case "=":
                    t = p + P + t + j;
                    break;
                case "^":
                    t = P.slice(0, A = P.length >> 1) + p + t + j + P.slice(A);
                    break;
                default:
                    t = P + p + t + j
            }
            return c(t)
        }
        return v = void 0 === v ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v)), j.toString = function() {
            return t + ""
        }, j
    }
    return {
        format: f,
        formatPrefix: function(t, e) {
            var r = f(((t = ud(t)).type = "f", t)),
                n = 3 * Math.max(-8, Math.min(8, Math.floor(id(e) / 3))),
                o = Math.pow(10, -n),
                i = md[8 + n / 3];
            return function(t) {
                return r(o * t) + i
            }
        }
    }
}

function gd(t, e, r, n) {
    var o, i = Wh(t, e, r);
    switch ((n = ud(null == n ? ",f" : n)).type) {
        case "s":
            var a = Math.max(Math.abs(t), Math.abs(e));
            return null != n.precision || isNaN(o = function(t, e) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(id(e) / 3))) - id(Math.abs(t)))
            }(i, a)) || (n.precision = o), dd(n, a);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            null != n.precision || isNaN(o = function(t, e) {
                return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, id(e) - id(t)) + 1
            }(i, Math.max(Math.abs(t), Math.abs(e)))) || (n.precision = o - ("e" === n.type));
            break;
        case "f":
        case "%":
            null != n.precision || isNaN(o = function(t) {
                return Math.max(0, -id(Math.abs(t)))
            }(i)) || (n.precision = o - 2 * ("%" === n.type))
    }
    return yd(n)
}

function wd(t) {
    var e = t.domain;
    return t.ticks = function(t) {
        var r = e();
        return Fh(r[0], r[r.length - 1], null == t ? 10 : t)
    }, t.tickFormat = function(t, r) {
        var n = e();
        return gd(n[0], n[n.length - 1], null == t ? 10 : t, r)
    }, t.nice = function(r) {
        null == r && (r = 10);
        var n, o, i = e(),
            a = 0,
            c = i.length - 1,
            u = i[a],
            l = i[c],
            s = 10;
        for (l < u && (o = u, u = l, l = o, o = a, a = c, c = o); s-- > 0;) {
            if ((o = Uh(u, l, r)) === n) return i[a] = u, i[c] = l, e(i);
            if (o > 0) u = Math.floor(u / o) * o, l = Math.ceil(l / o) * o;
            else {
                if (!(o < 0)) break;
                u = Math.ceil(u * o) / o, l = Math.floor(l * o) / o
            }
            n = o
        }
        return t
    }, t
}

function Od() {
    var t = nd();
    return t.copy = function() {
        return ed(t, Od())
    }, Hh.apply(t, arguments), wd(t)
}

function xd(t, e) {
    var r, n = 0,
        o = (t = t.slice()).length - 1,
        i = t[n],
        a = t[o];
    return a < i && (r = n, n = o, o = r, r = i, i = a, a = r), t[n] = e.floor(i), t[o] = e.ceil(a), t
}

function jd(t) {
    return Math.log(t)
}

function Sd(t) {
    return Math.exp(t)
}

function Ad(t) {
    return -Math.log(-t)
}

function Pd(t) {
    return -Math.exp(-t)
}

function Ed(t) {
    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
}

function kd(t) {
    return (e, r) => -t(-e, r)
}

function Td(t) {
    const e = t(jd, Sd),
        r = e.domain;
    let n, o, i = 10;

    function a() {
        return n = function(t) {
            return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), e => Math.log(e) / t)
        }(i), o = function(t) {
            return 10 === t ? Ed : t === Math.E ? Math.exp : e => Math.pow(t, e)
        }(i), r()[0] < 0 ? (n = kd(n), o = kd(o), t(Ad, Pd)) : t(jd, Sd), e
    }
    return e.base = function(t) {
        return arguments.length ? (i = +t, a()) : i
    }, e.domain = function(t) {
        return arguments.length ? (r(t), a()) : r()
    }, e.ticks = t => {
        const e = r();
        let a = e[0],
            c = e[e.length - 1];
        const u = c < a;
        u && ([a, c] = [c, a]);
        let l, s, f = n(a),
            p = n(c);
        const h = null == t ? 10 : +t;
        let y = [];
        if (!(i % 1) && p - f < h) {
            if (f = Math.floor(f), p = Math.ceil(p), a > 0) {
                for (; f <= p; ++f)
                    for (l = 1; l < i; ++l)
                        if (s = f < 0 ? l / o(-f) : l * o(f), !(s < a)) {
                            if (s > c) break;
                            y.push(s)
                        }
            } else
                for (; f <= p; ++f)
                    for (l = i - 1; l >= 1; --l)
                        if (s = f > 0 ? l / o(-f) : l * o(f), !(s < a)) {
                            if (s > c) break;
                            y.push(s)
                        }
            2 * y.length < h && (y = Fh(a, c, h))
        } else y = Fh(f, p, Math.min(p - f, h)).map(o);
        return u ? y.reverse() : y
    }, e.tickFormat = (t, r) => {
        if (null == t && (t = 10), null == r && (r = 10 === i ? "s" : ","), "function" != typeof r && (i % 1 || null != (r = ud(r)).precision || (r.trim = !0), r = yd(r)), t === 1 / 0) return r;
        const a = Math.max(1, i * t / e.ticks().length);
        return t => {
            let e = t / o(Math.round(n(t)));
            return e * i < i - .5 && (e *= i), e <= a ? r(t) : ""
        }
    }, e.nice = () => r(xd(r(), {
        floor: t => o(Math.floor(n(t))),
        ceil: t => o(Math.ceil(n(t)))
    })), e
}

function Md(t) {
    return function(e) {
        return Math.sign(e) * Math.log1p(Math.abs(e / t))
    }
}

function _d(t) {
    return function(e) {
        return Math.sign(e) * Math.expm1(Math.abs(e)) * t
    }
}

function Cd(t) {
    var e = 1,
        r = t(Md(e), _d(e));
    return r.constant = function(r) {
        return arguments.length ? t(Md(e = +r), _d(e)) : e
    }, wd(r)
}

function Dd(t) {
    return function(e) {
        return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t)
    }
}

function Id(t) {
    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
}

function Nd(t) {
    return t < 0 ? -t * t : t * t
}

function Rd(t) {
    var e = t(Zy, Zy),
        r = 1;
    return e.exponent = function(e) {
        return arguments.length ? 1 === (r = +e) ? t(Zy, Zy) : .5 === r ? t(Id, Nd) : t(Dd(r), Dd(1 / r)) : r
    }, wd(e)
}

function Bd() {
    var t = Rd(rd());
    return t.copy = function() {
        return ed(t, Bd()).exponent(t.exponent())
    }, Hh.apply(t, arguments), t
}

function Ld(t) {
    return Math.sign(t) * t * t
}
hd = bd({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
}), yd = hd.format, dd = hd.formatPrefix;
const zd = new Date,
    Fd = new Date;

function Ud(t, e, r, n) {
    function o(e) {
        return t(e = 0 === arguments.length ? new Date : new Date(+e)), e
    }
    return o.floor = e => (t(e = new Date(+e)), e), o.ceil = r => (t(r = new Date(r - 1)), e(r, 1), t(r), r), o.round = t => {
        const e = o(t),
            r = o.ceil(t);
        return t - e < r - t ? e : r
    }, o.offset = (t, r) => (e(t = new Date(+t), null == r ? 1 : Math.floor(r)), t), o.range = (r, n, i) => {
        const a = [];
        if (r = o.ceil(r), i = null == i ? 1 : Math.floor(i), !(r < n && i > 0)) return a;
        let c;
        do {
            a.push(c = new Date(+r)), e(r, i), t(r)
        } while (c < r && r < n);
        return a
    }, o.filter = r => Ud((e => {
        if (e >= e)
            for (; t(e), !r(e);) e.setTime(e - 1)
    }), ((t, n) => {
        if (t >= t)
            if (n < 0)
                for (; ++n <= 0;)
                    for (; e(t, -1), !r(t););
            else
                for (; --n >= 0;)
                    for (; e(t, 1), !r(t););
    })), r && (o.count = (e, n) => (zd.setTime(+e), Fd.setTime(+n), t(zd), t(Fd), Math.floor(r(zd, Fd))), o.every = t => (t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? o.filter(n ? e => n(e) % t == 0 : e => o.count(0, e) % t == 0) : o : null)), o
}
const Wd = Ud((() => {}), ((t, e) => {
    t.setTime(+t + e)
}), ((t, e) => e - t));
Wd.every = t => (t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Ud((e => {
    e.setTime(Math.floor(e / t) * t)
}), ((e, r) => {
    e.setTime(+e + r * t)
}), ((e, r) => (r - e) / t)) : Wd : null), Wd.range;
const $d = 1e3,
    Kd = 6e4,
    qd = 36e5,
    Vd = 864e5,
    Xd = 6048e5,
    Hd = 2592e6,
    Gd = 31536e6,
    Yd = Ud((t => {
        t.setTime(t - t.getMilliseconds())
    }), ((t, e) => {
        t.setTime(+t + e * $d)
    }), ((t, e) => (e - t) / $d), (t => t.getUTCSeconds()));
Yd.range;
const Zd = Ud((t => {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * $d)
}), ((t, e) => {
    t.setTime(+t + e * Kd)
}), ((t, e) => (e - t) / Kd), (t => t.getMinutes()));
Zd.range;
const Jd = Ud((t => {
    t.setUTCSeconds(0, 0)
}), ((t, e) => {
    t.setTime(+t + e * Kd)
}), ((t, e) => (e - t) / Kd), (t => t.getUTCMinutes()));
Jd.range;
const Qd = Ud((t => {
    t.setTime(t - t.getMilliseconds() - t.getSeconds() * $d - t.getMinutes() * Kd)
}), ((t, e) => {
    t.setTime(+t + e * qd)
}), ((t, e) => (e - t) / qd), (t => t.getHours()));
Qd.range;
const tv = Ud((t => {
    t.setUTCMinutes(0, 0, 0)
}), ((t, e) => {
    t.setTime(+t + e * qd)
}), ((t, e) => (e - t) / qd), (t => t.getUTCHours()));
tv.range;
const ev = Ud((t => t.setHours(0, 0, 0, 0)), ((t, e) => t.setDate(t.getDate() + e)), ((t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Kd) / Vd), (t => t.getDate() - 1));
ev.range;
const rv = Ud((t => {
    t.setUTCHours(0, 0, 0, 0)
}), ((t, e) => {
    t.setUTCDate(t.getUTCDate() + e)
}), ((t, e) => (e - t) / Vd), (t => t.getUTCDate() - 1));
rv.range;
const nv = Ud((t => {
    t.setUTCHours(0, 0, 0, 0)
}), ((t, e) => {
    t.setUTCDate(t.getUTCDate() + e)
}), ((t, e) => (e - t) / Vd), (t => Math.floor(t / Vd)));

function ov(t) {
    return Ud((e => {
        e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0)
    }), ((t, e) => {
        t.setDate(t.getDate() + 7 * e)
    }), ((t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Kd) / Xd))
}
nv.range;
const iv = ov(0),
    av = ov(1),
    cv = ov(2),
    uv = ov(3),
    lv = ov(4),
    sv = ov(5),
    fv = ov(6);

function pv(t) {
    return Ud((e => {
        e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
    }), ((t, e) => {
        t.setUTCDate(t.getUTCDate() + 7 * e)
    }), ((t, e) => (e - t) / Xd))
}
iv.range, av.range, cv.range, uv.range, lv.range, sv.range, fv.range;
const hv = pv(0),
    yv = pv(1),
    dv = pv(2),
    vv = pv(3),
    mv = pv(4),
    bv = pv(5),
    gv = pv(6);
hv.range, yv.range, dv.range, vv.range, mv.range, bv.range, gv.range;
const wv = Ud((t => {
    t.setDate(1), t.setHours(0, 0, 0, 0)
}), ((t, e) => {
    t.setMonth(t.getMonth() + e)
}), ((t, e) => e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())), (t => t.getMonth()));
wv.range;
const Ov = Ud((t => {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
}), ((t, e) => {
    t.setUTCMonth(t.getUTCMonth() + e)
}), ((t, e) => e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())), (t => t.getUTCMonth()));
Ov.range;
const xv = Ud((t => {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
}), ((t, e) => {
    t.setFullYear(t.getFullYear() + e)
}), ((t, e) => e.getFullYear() - t.getFullYear()), (t => t.getFullYear()));
xv.every = t => isFinite(t = Math.floor(t)) && t > 0 ? Ud((e => {
    e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
}), ((e, r) => {
    e.setFullYear(e.getFullYear() + r * t)
})) : null, xv.range;
const jv = Ud((t => {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
}), ((t, e) => {
    t.setUTCFullYear(t.getUTCFullYear() + e)
}), ((t, e) => e.getUTCFullYear() - t.getUTCFullYear()), (t => t.getUTCFullYear()));

function Sv(t, e, r, n, o, i) {
    const a = [
        [Yd, 1, $d],
        [Yd, 5, 5e3],
        [Yd, 15, 15e3],
        [Yd, 30, 3e4],
        [i, 1, Kd],
        [i, 5, 3e5],
        [i, 15, 9e5],
        [i, 30, 18e5],
        [o, 1, qd],
        [o, 3, 108e5],
        [o, 6, 216e5],
        [o, 12, 432e5],
        [n, 1, Vd],
        [n, 2, 1728e5],
        [r, 1, Xd],
        [e, 1, Hd],
        [e, 3, 7776e6],
        [t, 1, Gd]
    ];

    function c(e, r, n) {
        const o = Math.abs(r - e) / n,
            i = kh((([, , t]) => t)).right(a, o);
        if (i === a.length) return t.every(Wh(e / Gd, r / Gd, n));
        if (0 === i) return Wd.every(Math.max(Wh(e, r, n), 1));
        const [c, u] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
        return c.every(u)
    }
    return [function(t, e, r) {
        const n = e < t;
        n && ([t, e] = [e, t]);
        const o = r && "function" == typeof r.range ? r : c(t, e, r),
            i = o ? o.range(t, +e + 1) : [];
        return n ? i.reverse() : i
    }, c]
}
jv.every = t => isFinite(t = Math.floor(t)) && t > 0 ? Ud((e => {
    e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
}), ((e, r) => {
    e.setUTCFullYear(e.getUTCFullYear() + r * t)
})) : null, jv.range;
const [Av, Pv] = Sv(jv, Ov, hv, nv, tv, Jd), [Ev, kv] = Sv(xv, wv, iv, ev, Qd, Zd);

function Tv(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return e.setFullYear(t.y), e
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
}

function Mv(t) {
    if (0 <= t.y && t.y < 100) {
        var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return e.setUTCFullYear(t.y), e
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
}

function _v(t, e, r) {
    return {
        y: t,
        m: e,
        d: r,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    }
}
var Cv, Dv, Iv, Nv = {
        "-": "",
        _: " ",
        0: "0"
    },
    Rv = /^\s*\d+/,
    Bv = /^%/,
    Lv = /[\\^$*+?|[\]().{}]/g;

function zv(t, e, r) {
    var n = t < 0 ? "-" : "",
        o = (n ? -t : t) + "",
        i = o.length;
    return n + (i < r ? new Array(r - i + 1).join(e) + o : o)
}

function Fv(t) {
    return t.replace(Lv, "\\$&")
}

function Uv(t) {
    return new RegExp("^(?:" + t.map(Fv).join("|") + ")", "i")
}

function Wv(t) {
    return new Map(t.map(((t, e) => [t.toLowerCase(), e])))
}

function $v(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 1));
    return n ? (t.w = +n[0], r + n[0].length) : -1
}

function Kv(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 1));
    return n ? (t.u = +n[0], r + n[0].length) : -1
}

function qv(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 2));
    return n ? (t.U = +n[0], r + n[0].length) : -1
}

function Vv(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 2));
    return n ? (t.V = +n[0], r + n[0].length) : -1
}

function Xv(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 2));
    return n ? (t.W = +n[0], r + n[0].length) : -1
}

function Hv(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 4));
    return n ? (t.y = +n[0], r + n[0].length) : -1
}

function Gv(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 2));
    return n ? (t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1
}

function Yv(t, e, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
    return n ? (t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1
}

function Zv(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 1));
    return n ? (t.q = 3 * n[0] - 3, r + n[0].length) : -1
}

function Jv(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 2));
    return n ? (t.m = n[0] - 1, r + n[0].length) : -1
}

function Qv(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 2));
    return n ? (t.d = +n[0], r + n[0].length) : -1
}

function tm(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 3));
    return n ? (t.m = 0, t.d = +n[0], r + n[0].length) : -1
}

function em(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 2));
    return n ? (t.H = +n[0], r + n[0].length) : -1
}

function rm(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 2));
    return n ? (t.M = +n[0], r + n[0].length) : -1
}

function nm(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 2));
    return n ? (t.S = +n[0], r + n[0].length) : -1
}

function om(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 3));
    return n ? (t.L = +n[0], r + n[0].length) : -1
}

function im(t, e, r) {
    var n = Rv.exec(e.slice(r, r + 6));
    return n ? (t.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1
}

function am(t, e, r) {
    var n = Bv.exec(e.slice(r, r + 1));
    return n ? r + n[0].length : -1
}

function cm(t, e, r) {
    var n = Rv.exec(e.slice(r));
    return n ? (t.Q = +n[0], r + n[0].length) : -1
}

function um(t, e, r) {
    var n = Rv.exec(e.slice(r));
    return n ? (t.s = +n[0], r + n[0].length) : -1
}

function lm(t, e) {
    return zv(t.getDate(), e, 2)
}

function sm(t, e) {
    return zv(t.getHours(), e, 2)
}

function fm(t, e) {
    return zv(t.getHours() % 12 || 12, e, 2)
}

function pm(t, e) {
    return zv(1 + ev.count(xv(t), t), e, 3)
}

function hm(t, e) {
    return zv(t.getMilliseconds(), e, 3)
}

function ym(t, e) {
    return hm(t, e) + "000"
}

function dm(t, e) {
    return zv(t.getMonth() + 1, e, 2)
}

function vm(t, e) {
    return zv(t.getMinutes(), e, 2)
}

function mm(t, e) {
    return zv(t.getSeconds(), e, 2)
}

function bm(t) {
    var e = t.getDay();
    return 0 === e ? 7 : e
}

function gm(t, e) {
    return zv(iv.count(xv(t) - 1, t), e, 2)
}

function wm(t) {
    var e = t.getDay();
    return e >= 4 || 0 === e ? lv(t) : lv.ceil(t)
}

function Om(t, e) {
    return t = wm(t), zv(lv.count(xv(t), t) + (4 === xv(t).getDay()), e, 2)
}

function xm(t) {
    return t.getDay()
}

function jm(t, e) {
    return zv(av.count(xv(t) - 1, t), e, 2)
}

function Sm(t, e) {
    return zv(t.getFullYear() % 100, e, 2)
}

function Am(t, e) {
    return zv((t = wm(t)).getFullYear() % 100, e, 2)
}

function Pm(t, e) {
    return zv(t.getFullYear() % 1e4, e, 4)
}

function Em(t, e) {
    var r = t.getDay();
    return zv((t = r >= 4 || 0 === r ? lv(t) : lv.ceil(t)).getFullYear() % 1e4, e, 4)
}

function km(t) {
    var e = t.getTimezoneOffset();
    return (e > 0 ? "-" : (e *= -1, "+")) + zv(e / 60 | 0, "0", 2) + zv(e % 60, "0", 2)
}

function Tm(t, e) {
    return zv(t.getUTCDate(), e, 2)
}

function Mm(t, e) {
    return zv(t.getUTCHours(), e, 2)
}

function _m(t, e) {
    return zv(t.getUTCHours() % 12 || 12, e, 2)
}

function Cm(t, e) {
    return zv(1 + rv.count(jv(t), t), e, 3)
}

function Dm(t, e) {
    return zv(t.getUTCMilliseconds(), e, 3)
}

function Im(t, e) {
    return Dm(t, e) + "000"
}

function Nm(t, e) {
    return zv(t.getUTCMonth() + 1, e, 2)
}

function Rm(t, e) {
    return zv(t.getUTCMinutes(), e, 2)
}

function Bm(t, e) {
    return zv(t.getUTCSeconds(), e, 2)
}

function Lm(t) {
    var e = t.getUTCDay();
    return 0 === e ? 7 : e
}

function zm(t, e) {
    return zv(hv.count(jv(t) - 1, t), e, 2)
}

function Fm(t) {
    var e = t.getUTCDay();
    return e >= 4 || 0 === e ? mv(t) : mv.ceil(t)
}

function Um(t, e) {
    return t = Fm(t), zv(mv.count(jv(t), t) + (4 === jv(t).getUTCDay()), e, 2)
}

function Wm(t) {
    return t.getUTCDay()
}

function $m(t, e) {
    return zv(yv.count(jv(t) - 1, t), e, 2)
}

function Km(t, e) {
    return zv(t.getUTCFullYear() % 100, e, 2)
}

function qm(t, e) {
    return zv((t = Fm(t)).getUTCFullYear() % 100, e, 2)
}

function Vm(t, e) {
    return zv(t.getUTCFullYear() % 1e4, e, 4)
}

function Xm(t, e) {
    var r = t.getUTCDay();
    return zv((t = r >= 4 || 0 === r ? mv(t) : mv.ceil(t)).getUTCFullYear() % 1e4, e, 4)
}

function Hm() {
    return "+0000"
}

function Gm() {
    return "%"
}

function Ym(t) {
    return +t
}

function Zm(t) {
    return Math.floor(+t / 1e3)
}

function Jm(t) {
    return new Date(t)
}

function Qm(t) {
    return t instanceof Date ? +t : +new Date(+t)
}

function tb(t, e, r, n, o, i, a, c, u, l) {
    var s = nd(),
        f = s.invert,
        p = s.domain,
        h = l(".%L"),
        y = l(":%S"),
        d = l("%I:%M"),
        v = l("%I %p"),
        m = l("%a %d"),
        b = l("%b %d"),
        g = l("%B"),
        w = l("%Y");

    function O(t) {
        return (u(t) < t ? h : c(t) < t ? y : a(t) < t ? d : i(t) < t ? v : n(t) < t ? o(t) < t ? m : b : r(t) < t ? g : w)(t)
    }
    return s.invert = function(t) {
        return new Date(f(t))
    }, s.domain = function(t) {
        return arguments.length ? p(Array.from(t, Qm)) : p().map(Jm)
    }, s.ticks = function(e) {
        var r = p();
        return t(r[0], r[r.length - 1], null == e ? 10 : e)
    }, s.tickFormat = function(t, e) {
        return null == e ? O : l(e)
    }, s.nice = function(t) {
        var r = p();
        return t && "function" == typeof t.range || (t = e(r[0], r[r.length - 1], null == t ? 10 : t)), t ? p(xd(r, t)) : s
    }, s.copy = function() {
        return ed(s, tb(t, e, r, n, o, i, a, c, u, l))
    }, s
}

function eb() {
    var t, e, r, n, o, i = 0,
        a = 1,
        c = Zy,
        u = !1;

    function l(e) {
        return null == e || isNaN(e = +e) ? o : c(0 === r ? .5 : (e = (n(e) - t) * r, u ? Math.max(0, Math.min(1, e)) : e))
    }

    function s(t) {
        return function(e) {
            var r, n;
            return arguments.length ? ([r, n] = e, c = t(r, n), l) : [c(0), c(1)]
        }
    }
    return l.domain = function(o) {
            return arguments.length ? ([i, a] = o, t = n(i = +i), e = n(a = +a), r = t === e ? 0 : 1 / (e - t), l) : [i, a]
        }, l.clamp = function(t) {
            return arguments.length ? (u = !!t, l) : u
        }, l.interpolator = function(t) {
            return arguments.length ? (c = t, l) : c
        }, l.range = s(Xy), l.rangeRound = s(Hy), l.unknown = function(t) {
            return arguments.length ? (o = t, l) : o
        },
        function(o) {
            return n = o, t = o(i), e = o(a), r = t === e ? 0 : 1 / (e - t), l
        }
}

function rb(t, e) {
    return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
}

function nb() {
    var t = Rd(eb());
    return t.copy = function() {
        return rb(t, nb()).exponent(t.exponent())
    }, Gh.apply(t, arguments)
}

function ob() {
    var t, e, r, n, o, i, a, c = 0,
        u = .5,
        l = 1,
        s = 1,
        f = Zy,
        p = !1;

    function h(t) {
        return isNaN(t = +t) ? a : (t = .5 + ((t = +i(t)) - e) * (s * t < s * e ? n : o), f(p ? Math.max(0, Math.min(1, t)) : t))
    }

    function y(t) {
        return function(e) {
            var r, n, o;
            return arguments.length ? ([r, n, o] = e, f = function(t, e) {
                void 0 === e && (e = t, t = Xy);
                for (var r = 0, n = e.length - 1, o = e[0], i = new Array(n < 0 ? 0 : n); r < n;) i[r] = t(o, o = e[++r]);
                return function(t) {
                    var e = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
                    return i[e](t - e)
                }
            }(t, [r, n, o]), h) : [f(0), f(.5), f(1)]
        }
    }
    return h.domain = function(a) {
            return arguments.length ? ([c, u, l] = a, t = i(c = +c), e = i(u = +u), r = i(l = +l), n = t === e ? 0 : .5 / (e - t), o = e === r ? 0 : .5 / (r - e), s = e < t ? -1 : 1, h) : [c, u, l]
        }, h.clamp = function(t) {
            return arguments.length ? (p = !!t, h) : p
        }, h.interpolator = function(t) {
            return arguments.length ? (f = t, h) : f
        }, h.range = y(Xy), h.rangeRound = y(Hy), h.unknown = function(t) {
            return arguments.length ? (a = t, h) : a
        },
        function(a) {
            return i = a, t = a(c), e = a(u), r = a(l), n = t === e ? 0 : .5 / (e - t), o = e === r ? 0 : .5 / (r - e), s = e < t ? -1 : 1, h
        }
}

function ib() {
    var t = Rd(ob());
    return t.copy = function() {
        return rb(t, ib()).exponent(t.exponent())
    }, Gh.apply(t, arguments)
}! function(t) {
    Cv = function(t) {
        var e = t.dateTime,
            r = t.date,
            n = t.time,
            o = t.periods,
            i = t.days,
            a = t.shortDays,
            c = t.months,
            u = t.shortMonths,
            l = Uv(o),
            s = Wv(o),
            f = Uv(i),
            p = Wv(i),
            h = Uv(a),
            y = Wv(a),
            d = Uv(c),
            v = Wv(c),
            m = Uv(u),
            b = Wv(u),
            g = {
                a: function(t) {
                    return a[t.getDay()]
                },
                A: function(t) {
                    return i[t.getDay()]
                },
                b: function(t) {
                    return u[t.getMonth()]
                },
                B: function(t) {
                    return c[t.getMonth()]
                },
                c: null,
                d: lm,
                e: lm,
                f: ym,
                g: Am,
                G: Em,
                H: sm,
                I: fm,
                j: pm,
                L: hm,
                m: dm,
                M: vm,
                p: function(t) {
                    return o[+(t.getHours() >= 12)]
                },
                q: function(t) {
                    return 1 + ~~(t.getMonth() / 3)
                },
                Q: Ym,
                s: Zm,
                S: mm,
                u: bm,
                U: gm,
                V: Om,
                w: xm,
                W: jm,
                x: null,
                X: null,
                y: Sm,
                Y: Pm,
                Z: km,
                "%": Gm
            },
            w = {
                a: function(t) {
                    return a[t.getUTCDay()]
                },
                A: function(t) {
                    return i[t.getUTCDay()]
                },
                b: function(t) {
                    return u[t.getUTCMonth()]
                },
                B: function(t) {
                    return c[t.getUTCMonth()]
                },
                c: null,
                d: Tm,
                e: Tm,
                f: Im,
                g: qm,
                G: Xm,
                H: Mm,
                I: _m,
                j: Cm,
                L: Dm,
                m: Nm,
                M: Rm,
                p: function(t) {
                    return o[+(t.getUTCHours() >= 12)]
                },
                q: function(t) {
                    return 1 + ~~(t.getUTCMonth() / 3)
                },
                Q: Ym,
                s: Zm,
                S: Bm,
                u: Lm,
                U: zm,
                V: Um,
                w: Wm,
                W: $m,
                x: null,
                X: null,
                y: Km,
                Y: Vm,
                Z: Hm,
                "%": Gm
            },
            O = {
                a: function(t, e, r) {
                    var n = h.exec(e.slice(r));
                    return n ? (t.w = y.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                A: function(t, e, r) {
                    var n = f.exec(e.slice(r));
                    return n ? (t.w = p.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                b: function(t, e, r) {
                    var n = m.exec(e.slice(r));
                    return n ? (t.m = b.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                B: function(t, e, r) {
                    var n = d.exec(e.slice(r));
                    return n ? (t.m = v.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                c: function(t, r, n) {
                    return S(t, e, r, n)
                },
                d: Qv,
                e: Qv,
                f: im,
                g: Gv,
                G: Hv,
                H: em,
                I: em,
                j: tm,
                L: om,
                m: Jv,
                M: rm,
                p: function(t, e, r) {
                    var n = l.exec(e.slice(r));
                    return n ? (t.p = s.get(n[0].toLowerCase()), r + n[0].length) : -1
                },
                q: Zv,
                Q: cm,
                s: um,
                S: nm,
                u: Kv,
                U: qv,
                V: Vv,
                w: $v,
                W: Xv,
                x: function(t, e, n) {
                    return S(t, r, e, n)
                },
                X: function(t, e, r) {
                    return S(t, n, e, r)
                },
                y: Gv,
                Y: Hv,
                Z: Yv,
                "%": am
            };

        function x(t, e) {
            return function(r) {
                var n, o, i, a = [],
                    c = -1,
                    u = 0,
                    l = t.length;
                for (r instanceof Date || (r = new Date(+r)); ++c < l;) 37 === t.charCodeAt(c) && (a.push(t.slice(u, c)), null != (o = Nv[n = t.charAt(++c)]) ? n = t.charAt(++c) : o = "e" === n ? " " : "0", (i = e[n]) && (n = i(r, o)), a.push(n), u = c + 1);
                return a.push(t.slice(u, c)), a.join("")
            }
        }

        function j(t, e) {
            return function(r) {
                var n, o, i = _v(1900, void 0, 1);
                if (S(i, t, r += "", 0) != r.length) return null;
                if ("Q" in i) return new Date(i.Q);
                if ("s" in i) return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
                if (e && !("Z" in i) && (i.Z = 0), "p" in i && (i.H = i.H % 12 + 12 * i.p), void 0 === i.m && (i.m = "q" in i ? i.q : 0), "V" in i) {
                    if (i.V < 1 || i.V > 53) return null;
                    "w" in i || (i.w = 1), "Z" in i ? (o = (n = Mv(_v(i.y, 0, 1))).getUTCDay(), n = o > 4 || 0 === o ? yv.ceil(n) : yv(n), n = rv.offset(n, 7 * (i.V - 1)), i.y = n.getUTCFullYear(), i.m = n.getUTCMonth(), i.d = n.getUTCDate() + (i.w + 6) % 7) : (o = (n = Tv(_v(i.y, 0, 1))).getDay(), n = o > 4 || 0 === o ? av.ceil(n) : av(n), n = ev.offset(n, 7 * (i.V - 1)), i.y = n.getFullYear(), i.m = n.getMonth(), i.d = n.getDate() + (i.w + 6) % 7)
                } else("W" in i || "U" in i) && ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0), o = "Z" in i ? Mv(_v(i.y, 0, 1)).getUTCDay() : Tv(_v(i.y, 0, 1)).getDay(), i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7);
                return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, Mv(i)) : Tv(i)
            }
        }

        function S(t, e, r, n) {
            for (var o, i, a = 0, c = e.length, u = r.length; a < c;) {
                if (n >= u) return -1;
                if (37 === (o = e.charCodeAt(a++))) {
                    if (o = e.charAt(a++), !(i = O[o in Nv ? e.charAt(a++) : o]) || (n = i(t, r, n)) < 0) return -1
                } else if (o != r.charCodeAt(n++)) return -1
            }
            return n
        }
        return g.x = x(r, g), g.X = x(n, g), g.c = x(e, g), w.x = x(r, w), w.X = x(n, w), w.c = x(e, w), {
            format: function(t) {
                var e = x(t += "", g);
                return e.toString = function() {
                    return t
                }, e
            },
            parse: function(t) {
                var e = j(t += "", !1);
                return e.toString = function() {
                    return t
                }, e
            },
            utcFormat: function(t) {
                var e = x(t += "", w);
                return e.toString = function() {
                    return t
                }, e
            },
            utcParse: function(t) {
                var e = j(t += "", !0);
                return e.toString = function() {
                    return t
                }, e
            }
        }
    }(t), Dv = Cv.format, Cv.parse, Iv = Cv.utcFormat, Cv.utcParse
}({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
const ab = Object.freeze(Object.defineProperty({
    __proto__: null,
    scaleBand: Jh,
    scaleDiverging: function t() {
        var e = wd(ob()(Zy));
        return e.copy = function() {
            return rb(e, t())
        }, Gh.apply(e, arguments)
    },
    scaleDivergingLog: function t() {
        var e = Td(ob()).domain([.1, 1, 10]);
        return e.copy = function() {
            return rb(e, t()).base(e.base())
        }, Gh.apply(e, arguments)
    },
    scaleDivergingPow: ib,
    scaleDivergingSqrt: function() {
        return ib.apply(null, arguments).exponent(.5)
    },
    scaleDivergingSymlog: function t() {
        var e = Cd(ob());
        return e.copy = function() {
            return rb(e, t()).constant(e.constant())
        }, Gh.apply(e, arguments)
    },
    scaleIdentity: function t(e) {
        var r;

        function n(t) {
            return null == t || isNaN(t = +t) ? r : t
        }
        return n.invert = n, n.domain = n.range = function(t) {
            return arguments.length ? (e = Array.from(t, Gy), n) : e.slice()
        }, n.unknown = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.copy = function() {
            return t(e).unknown(r)
        }, e = arguments.length ? Array.from(e, Gy) : [0, 1], wd(n)
    },
    scaleImplicit: Yh,
    scaleLinear: Od,
    scaleLog: function t() {
        const e = Td(rd()).domain([1, 10]);
        return e.copy = () => ed(e, t()).base(e.base()), Hh.apply(e, arguments), e
    },
    scaleOrdinal: Zh,
    scalePoint: ty,
    scalePow: Bd,
    scaleQuantile: function t() {
        var e, r = [],
            n = [],
            o = [];

        function i() {
            var t = 0,
                e = Math.max(1, n.length);
            for (o = new Array(e - 1); ++t < e;) o[t - 1] = Xh(r, t / e);
            return a
        }

        function a(t) {
            return null == t || isNaN(t = +t) ? e : n[_h(o, t)]
        }
        return a.invertExtent = function(t) {
            var e = n.indexOf(t);
            return e < 0 ? [NaN, NaN] : [e > 0 ? o[e - 1] : r[0], e < o.length ? o[e] : r[r.length - 1]]
        }, a.domain = function(t) {
            if (!arguments.length) return r.slice();
            r = [];
            for (let e of t) null == e || isNaN(e = +e) || r.push(e);
            return r.sort(Ph), i()
        }, a.range = function(t) {
            return arguments.length ? (n = Array.from(t), i()) : n.slice()
        }, a.unknown = function(t) {
            return arguments.length ? (e = t, a) : e
        }, a.quantiles = function() {
            return o.slice()
        }, a.copy = function() {
            return t().domain(r).range(n).unknown(e)
        }, Hh.apply(a, arguments)
    },
    scaleQuantize: function t() {
        var e, r = 0,
            n = 1,
            o = 1,
            i = [.5],
            a = [0, 1];

        function c(t) {
            return null != t && t <= t ? a[_h(i, t, 0, o)] : e
        }

        function u() {
            var t = -1;
            for (i = new Array(o); ++t < o;) i[t] = ((t + 1) * n - (t - o) * r) / (o + 1);
            return c
        }
        return c.domain = function(t) {
            return arguments.length ? ([r, n] = t, r = +r, n = +n, u()) : [r, n]
        }, c.range = function(t) {
            return arguments.length ? (o = (a = Array.from(t)).length - 1, u()) : a.slice()
        }, c.invertExtent = function(t) {
            var e = a.indexOf(t);
            return e < 0 ? [NaN, NaN] : e < 1 ? [r, i[0]] : e >= o ? [i[o - 1], n] : [i[e - 1], i[e]]
        }, c.unknown = function(t) {
            return arguments.length ? (e = t, c) : c
        }, c.thresholds = function() {
            return i.slice()
        }, c.copy = function() {
            return t().domain([r, n]).range(a).unknown(e)
        }, Hh.apply(wd(c), arguments)
    },
    scaleRadial: function t() {
        var e, r = nd(),
            n = [0, 1],
            o = !1;

        function i(t) {
            var n = function(t) {
                return Math.sign(t) * Math.sqrt(Math.abs(t))
            }(r(t));
            return isNaN(n) ? e : o ? Math.round(n) : n
        }
        return i.invert = function(t) {
            return r.invert(Ld(t))
        }, i.domain = function(t) {
            return arguments.length ? (r.domain(t), i) : r.domain()
        }, i.range = function(t) {
            return arguments.length ? (r.range((n = Array.from(t, Gy)).map(Ld)), i) : n.slice()
        }, i.rangeRound = function(t) {
            return i.range(t).round(!0)
        }, i.round = function(t) {
            return arguments.length ? (o = !!t, i) : o
        }, i.clamp = function(t) {
            return arguments.length ? (r.clamp(t), i) : r.clamp()
        }, i.unknown = function(t) {
            return arguments.length ? (e = t, i) : e
        }, i.copy = function() {
            return t(r.domain(), n).round(o).clamp(r.clamp()).unknown(e)
        }, Hh.apply(i, arguments), wd(i)
    },
    scaleSequential: function t() {
        var e = wd(eb()(Zy));
        return e.copy = function() {
            return rb(e, t())
        }, Gh.apply(e, arguments)
    },
    scaleSequentialLog: function t() {
        var e = Td(eb()).domain([1, 10]);
        return e.copy = function() {
            return rb(e, t()).base(e.base())
        }, Gh.apply(e, arguments)
    },
    scaleSequentialPow: nb,
    scaleSequentialQuantile: function t() {
        var e = [],
            r = Zy;

        function n(t) {
            if (null != t && !isNaN(t = +t)) return r((_h(e, t, 1) - 1) / (e.length - 1))
        }
        return n.domain = function(t) {
            if (!arguments.length) return e.slice();
            e = [];
            for (let r of t) null == r || isNaN(r = +r) || e.push(r);
            return e.sort(Ph), n
        }, n.interpolator = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.range = function() {
            return e.map(((t, n) => r(n / (e.length - 1))))
        }, n.quantiles = function(t) {
            return Array.from({
                length: t + 1
            }, ((r, n) => function(t, e) {
                if ((r = (t = Float64Array.from(function*(t) {
                        for (let e of t) null != e && (e = +e) >= e && (yield e)
                    }(t))).length) && !isNaN(e = +e)) {
                    if (e <= 0 || r < 2) return Kh(t);
                    if (e >= 1) return $h(t);
                    var r, n = (r - 1) * e,
                        o = Math.floor(n),
                        i = $h(qh(t, o).subarray(0, o + 1));
                    return i + (Kh(t.subarray(o + 1)) - i) * (n - o)
                }
            }(e, n / t)))
        }, n.copy = function() {
            return t(r).domain(e)
        }, Gh.apply(n, arguments)
    },
    scaleSequentialSqrt: function() {
        return nb.apply(null, arguments).exponent(.5)
    },
    scaleSequentialSymlog: function t() {
        var e = Cd(eb());
        return e.copy = function() {
            return rb(e, t()).constant(e.constant())
        }, Gh.apply(e, arguments)
    },
    scaleSqrt: function() {
        return Bd.apply(null, arguments).exponent(.5)
    },
    scaleSymlog: function t() {
        var e = Cd(rd());
        return e.copy = function() {
            return ed(e, t()).constant(e.constant())
        }, Hh.apply(e, arguments)
    },
    scaleThreshold: function t() {
        var e, r = [.5],
            n = [0, 1],
            o = 1;

        function i(t) {
            return null != t && t <= t ? n[_h(r, t, 0, o)] : e
        }
        return i.domain = function(t) {
            return arguments.length ? (r = Array.from(t), o = Math.min(r.length, n.length - 1), i) : r.slice()
        }, i.range = function(t) {
            return arguments.length ? (n = Array.from(t), o = Math.min(r.length, n.length - 1), i) : n.slice()
        }, i.invertExtent = function(t) {
            var e = n.indexOf(t);
            return [r[e - 1], r[e]]
        }, i.unknown = function(t) {
            return arguments.length ? (e = t, i) : e
        }, i.copy = function() {
            return t().domain(r).range(n).unknown(e)
        }, Hh.apply(i, arguments)
    },
    scaleTime: function() {
        return Hh.apply(tb(Ev, kv, xv, wv, iv, ev, Qd, Zd, Yd, Dv).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    },
    scaleUtc: function() {
        return Hh.apply(tb(Av, Pv, jv, Ov, hv, rv, tv, Jd, Yd, Iv).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    },
    tickFormat: gd
}, Symbol.toStringTag, {
    value: "Module"
}));
var cb = o;
var ub = function(t, e, r) {
    for (var n = -1, o = t.length; ++n < o;) {
        var i = t[n],
            a = e(i);
        if (null != a && (void 0 === c ? a == a && !cb(a) : r(a, c))) var c = a,
            u = i
    }
    return u
};
var lb = function(t, e) {
        return t > e
    },
    sb = ub,
    fb = lb,
    pb = dn;
const hb = e((function(t) {
    return t && t.length ? sb(t, pb, fb) : void 0
}));
var yb = function(t, e) {
        return t < e
    },
    db = ub,
    vb = yb,
    mb = dn;
const bb = e((function(t) {
    return t && t.length ? db(t, mb, vb) : void 0
}));
var gb = Gt,
    wb = qs,
    Ob = If,
    xb = v;
var jb = Qa,
    Sb = function(t, e) {
        return (xb(t) ? gb : Ob)(t, wb(e))
    };
const Ab = e((function(t, e) {
    return jb(Sb(t, e), 1)
}));
var Pb = ci;
const Eb = e((function(t, e) {
    return Pb(t, e)
}));
var kb, Tb = 1e9,
    Mb = !0,
    _b = "[DecimalError] ",
    Cb = _b + "Invalid argument: ",
    Db = _b + "Exponent out of range: ",
    Ib = Math.floor,
    Nb = Math.pow,
    Rb = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    Bb = 1e7,
    Lb = 7,
    zb = 9007199254740991,
    Fb = Ib(zb / Lb),
    Ub = {};

function Wb(t, e) {
    var r, n, o, i, a, c, u, l, s = t.constructor,
        f = s.precision;
    if (!t.s || !e.s) return e.s || (e = new s(t)), Mb ? Jb(e, f) : e;
    if (u = t.d, l = e.d, a = t.e, o = e.e, u = u.slice(), i = a - o) {
        for (i < 0 ? (n = u, i = -i, c = l.length) : (n = l, o = a, c = u.length), i > (c = (a = Math.ceil(f / Lb)) > c ? a + 1 : c + 1) && (i = c, n.length = 1), n.reverse(); i--;) n.push(0);
        n.reverse()
    }
    for ((c = u.length) - (i = l.length) < 0 && (i = c, n = l, l = u, u = n), r = 0; i;) r = (u[--i] = u[i] + l[i] + r) / Bb | 0, u[i] %= Bb;
    for (r && (u.unshift(r), ++o), c = u.length; 0 == u[--c];) u.pop();
    return e.d = u, e.e = o, Mb ? Jb(e, f) : e
}

function $b(t, e, r) {
    if (t !== ~~t || t < e || t > r) throw Error(Cb + t)
}

function Kb(t) {
    var e, r, n, o = t.length - 1,
        i = "",
        a = t[0];
    if (o > 0) {
        for (i += a, e = 1; e < o; e++) n = t[e] + "", (r = Lb - n.length) && (i += Gb(r)), i += n;
        a = t[e], (r = Lb - (n = a + "").length) && (i += Gb(r))
    } else if (0 === a) return "0";
    for (; a % 10 == 0;) a /= 10;
    return i + a
}
Ub.absoluteValue = Ub.abs = function() {
    var t = new this.constructor(this);
    return t.s && (t.s = 1), t
}, Ub.comparedTo = Ub.cmp = function(t) {
    var e, r, n, o, i = this;
    if (t = new i.constructor(t), i.s !== t.s) return i.s || -t.s;
    if (i.e !== t.e) return i.e > t.e ^ i.s < 0 ? 1 : -1;
    for (e = 0, r = (n = i.d.length) < (o = t.d.length) ? n : o; e < r; ++e)
        if (i.d[e] !== t.d[e]) return i.d[e] > t.d[e] ^ i.s < 0 ? 1 : -1;
    return n === o ? 0 : n > o ^ i.s < 0 ? 1 : -1
}, Ub.decimalPlaces = Ub.dp = function() {
    var t = this,
        e = t.d.length - 1,
        r = (e - t.e) * Lb;
    if (e = t.d[e])
        for (; e % 10 == 0; e /= 10) r--;
    return r < 0 ? 0 : r
}, Ub.dividedBy = Ub.div = function(t) {
    return qb(this, new this.constructor(t))
}, Ub.dividedToIntegerBy = Ub.idiv = function(t) {
    var e = this.constructor;
    return Jb(qb(this, new e(t), 0, 1), e.precision)
}, Ub.equals = Ub.eq = function(t) {
    return !this.cmp(t)
}, Ub.exponent = function() {
    return Xb(this)
}, Ub.greaterThan = Ub.gt = function(t) {
    return this.cmp(t) > 0
}, Ub.greaterThanOrEqualTo = Ub.gte = function(t) {
    return this.cmp(t) >= 0
}, Ub.isInteger = Ub.isint = function() {
    return this.e > this.d.length - 2
}, Ub.isNegative = Ub.isneg = function() {
    return this.s < 0
}, Ub.isPositive = Ub.ispos = function() {
    return this.s > 0
}, Ub.isZero = function() {
    return 0 === this.s
}, Ub.lessThan = Ub.lt = function(t) {
    return this.cmp(t) < 0
}, Ub.lessThanOrEqualTo = Ub.lte = function(t) {
    return this.cmp(t) < 1
}, Ub.logarithm = Ub.log = function(t) {
    var e, r = this,
        n = r.constructor,
        o = n.precision,
        i = o + 5;
    if (void 0 === t) t = new n(10);
    else if ((t = new n(t)).s < 1 || t.eq(kb)) throw Error(_b + "NaN");
    if (r.s < 1) throw Error(_b + (r.s ? "NaN" : "-Infinity"));
    return r.eq(kb) ? new n(0) : (Mb = !1, e = qb(Yb(r, i), Yb(t, i), i), Mb = !0, Jb(e, o))
}, Ub.minus = Ub.sub = function(t) {
    var e = this;
    return t = new e.constructor(t), e.s == t.s ? Qb(e, t) : Wb(e, (t.s = -t.s, t))
}, Ub.modulo = Ub.mod = function(t) {
    var e, r = this,
        n = r.constructor,
        o = n.precision;
    if (!(t = new n(t)).s) throw Error(_b + "NaN");
    return r.s ? (Mb = !1, e = qb(r, t, 0, 1).times(t), Mb = !0, r.minus(e)) : Jb(new n(r), o)
}, Ub.naturalExponential = Ub.exp = function() {
    return Vb(this)
}, Ub.naturalLogarithm = Ub.ln = function() {
    return Yb(this)
}, Ub.negated = Ub.neg = function() {
    var t = new this.constructor(this);
    return t.s = -t.s || 0, t
}, Ub.plus = Ub.add = function(t) {
    var e = this;
    return t = new e.constructor(t), e.s == t.s ? Wb(e, t) : Qb(e, (t.s = -t.s, t))
}, Ub.precision = Ub.sd = function(t) {
    var e, r, n, o = this;
    if (void 0 !== t && t !== !!t && 1 !== t && 0 !== t) throw Error(Cb + t);
    if (e = Xb(o) + 1, r = (n = o.d.length - 1) * Lb + 1, n = o.d[n]) {
        for (; n % 10 == 0; n /= 10) r--;
        for (n = o.d[0]; n >= 10; n /= 10) r++
    }
    return t && e > r ? e : r
}, Ub.squareRoot = Ub.sqrt = function() {
    var t, e, r, n, o, i, a, c = this,
        u = c.constructor;
    if (c.s < 1) {
        if (!c.s) return new u(0);
        throw Error(_b + "NaN")
    }
    for (t = Xb(c), Mb = !1, 0 == (o = Math.sqrt(+c)) || o == 1 / 0 ? (((e = Kb(c.d)).length + t) % 2 == 0 && (e += "0"), o = Math.sqrt(e), t = Ib((t + 1) / 2) - (t < 0 || t % 2), n = new u(e = o == 1 / 0 ? "5e" + t : (e = o.toExponential()).slice(0, e.indexOf("e") + 1) + t)) : n = new u(o.toString()), o = a = (r = u.precision) + 3;;)
        if (n = (i = n).plus(qb(c, i, a + 2)).times(.5), Kb(i.d).slice(0, a) === (e = Kb(n.d)).slice(0, a)) {
            if (e = e.slice(a - 3, a + 1), o == a && "4999" == e) {
                if (Jb(i, r + 1, 0), i.times(i).eq(c)) {
                    n = i;
                    break
                }
            } else if ("9999" != e) break;
            a += 4
        }
    return Mb = !0, Jb(n, r)
}, Ub.times = Ub.mul = function(t) {
    var e, r, n, o, i, a, c, u, l, s = this,
        f = s.constructor,
        p = s.d,
        h = (t = new f(t)).d;
    if (!s.s || !t.s) return new f(0);
    for (t.s *= s.s, r = s.e + t.e, (u = p.length) < (l = h.length) && (i = p, p = h, h = i, a = u, u = l, l = a), i = [], n = a = u + l; n--;) i.push(0);
    for (n = l; --n >= 0;) {
        for (e = 0, o = u + n; o > n;) c = i[o] + h[n] * p[o - n - 1] + e, i[o--] = c % Bb | 0, e = c / Bb | 0;
        i[o] = (i[o] + e) % Bb | 0
    }
    for (; !i[--a];) i.pop();
    return e ? ++r : i.shift(), t.d = i, t.e = r, Mb ? Jb(t, f.precision) : t
}, Ub.toDecimalPlaces = Ub.todp = function(t, e) {
    var r = this,
        n = r.constructor;
    return r = new n(r), void 0 === t ? r : ($b(t, 0, Tb), void 0 === e ? e = n.rounding : $b(e, 0, 8), Jb(r, t + Xb(r) + 1, e))
}, Ub.toExponential = function(t, e) {
    var r, n = this,
        o = n.constructor;
    return void 0 === t ? r = tg(n, !0) : ($b(t, 0, Tb), void 0 === e ? e = o.rounding : $b(e, 0, 8), r = tg(n = Jb(new o(n), t + 1, e), !0, t + 1)), r
}, Ub.toFixed = function(t, e) {
    var r, n, o = this,
        i = o.constructor;
    return void 0 === t ? tg(o) : ($b(t, 0, Tb), void 0 === e ? e = i.rounding : $b(e, 0, 8), r = tg((n = Jb(new i(o), t + Xb(o) + 1, e)).abs(), !1, t + Xb(n) + 1), o.isneg() && !o.isZero() ? "-" + r : r)
}, Ub.toInteger = Ub.toint = function() {
    var t = this,
        e = t.constructor;
    return Jb(new e(t), Xb(t) + 1, e.rounding)
}, Ub.toNumber = function() {
    return +this
}, Ub.toPower = Ub.pow = function(t) {
    var e, r, n, o, i, a, c = this,
        u = c.constructor,
        l = +(t = new u(t));
    if (!t.s) return new u(kb);
    if (!(c = new u(c)).s) {
        if (t.s < 1) throw Error(_b + "Infinity");
        return c
    }
    if (c.eq(kb)) return c;
    if (n = u.precision, t.eq(kb)) return Jb(c, n);
    if (a = (e = t.e) >= (r = t.d.length - 1), i = c.s, a) {
        if ((r = l < 0 ? -l : l) <= zb) {
            for (o = new u(kb), e = Math.ceil(n / Lb + 4), Mb = !1; r % 2 && eg((o = o.times(c)).d, e), 0 !== (r = Ib(r / 2));) eg((c = c.times(c)).d, e);
            return Mb = !0, t.s < 0 ? new u(kb).div(o) : Jb(o, n)
        }
    } else if (i < 0) throw Error(_b + "NaN");
    return i = i < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1, c.s = 1, Mb = !1, o = t.times(Yb(c, n + 12)), Mb = !0, (o = Vb(o)).s = i, o
}, Ub.toPrecision = function(t, e) {
    var r, n, o = this,
        i = o.constructor;
    return void 0 === t ? n = tg(o, (r = Xb(o)) <= i.toExpNeg || r >= i.toExpPos) : ($b(t, 1, Tb), void 0 === e ? e = i.rounding : $b(e, 0, 8), n = tg(o = Jb(new i(o), t, e), t <= (r = Xb(o)) || r <= i.toExpNeg, t)), n
}, Ub.toSignificantDigits = Ub.tosd = function(t, e) {
    var r = this.constructor;
    return void 0 === t ? (t = r.precision, e = r.rounding) : ($b(t, 1, Tb), void 0 === e ? e = r.rounding : $b(e, 0, 8)), Jb(new r(this), t, e)
}, Ub.toString = Ub.valueOf = Ub.val = Ub.toJSON = Ub[Symbol.for("nodejs.util.inspect.custom")] = function() {
    var t = this,
        e = Xb(t),
        r = t.constructor;
    return tg(t, e <= r.toExpNeg || e >= r.toExpPos)
};
var qb = function() {
    function t(t, e) {
        var r, n = 0,
            o = t.length;
        for (t = t.slice(); o--;) r = t[o] * e + n, t[o] = r % Bb | 0, n = r / Bb | 0;
        return n && t.unshift(n), t
    }

    function e(t, e, r, n) {
        var o, i;
        if (r != n) i = r > n ? 1 : -1;
        else
            for (o = i = 0; o < r; o++)
                if (t[o] != e[o]) {
                    i = t[o] > e[o] ? 1 : -1;
                    break
                } return i
    }

    function r(t, e, r) {
        for (var n = 0; r--;) t[r] -= n, n = t[r] < e[r] ? 1 : 0, t[r] = n * Bb + t[r] - e[r];
        for (; !t[0] && t.length > 1;) t.shift()
    }
    return function(n, o, i, a) {
        var c, u, l, s, f, p, h, y, d, v, m, b, g, w, O, x, j, S, A = n.constructor,
            P = n.s == o.s ? 1 : -1,
            E = n.d,
            k = o.d;
        if (!n.s) return new A(n);
        if (!o.s) throw Error(_b + "Division by zero");
        for (u = n.e - o.e, j = k.length, O = E.length, y = (h = new A(P)).d = [], l = 0; k[l] == (E[l] || 0);) ++l;
        if (k[l] > (E[l] || 0) && --u, (b = null == i ? i = A.precision : a ? i + (Xb(n) - Xb(o)) + 1 : i) < 0) return new A(0);
        if (b = b / Lb + 2 | 0, l = 0, 1 == j)
            for (s = 0, k = k[0], b++;
                (l < O || s) && b--; l++) g = s * Bb + (E[l] || 0), y[l] = g / k | 0, s = g % k | 0;
        else {
            for ((s = Bb / (k[0] + 1) | 0) > 1 && (k = t(k, s), E = t(E, s), j = k.length, O = E.length), w = j, v = (d = E.slice(0, j)).length; v < j;) d[v++] = 0;
            (S = k.slice()).unshift(0), x = k[0], k[1] >= Bb / 2 && ++x;
            do {
                s = 0, (c = e(k, d, j, v)) < 0 ? (m = d[0], j != v && (m = m * Bb + (d[1] || 0)), (s = m / x | 0) > 1 ? (s >= Bb && (s = Bb - 1), 1 == (c = e(f = t(k, s), d, p = f.length, v = d.length)) && (s--, r(f, j < p ? S : k, p))) : (0 == s && (c = s = 1), f = k.slice()), (p = f.length) < v && f.unshift(0), r(d, f, v), -1 == c && (c = e(k, d, j, v = d.length)) < 1 && (s++, r(d, j < v ? S : k, v)), v = d.length) : 0 === c && (s++, d = [0]), y[l++] = s, c && d[0] ? d[v++] = E[w] || 0 : (d = [E[w]], v = 1)
            } while ((w++ < O || void 0 !== d[0]) && b--)
        }
        return y[0] || y.shift(), h.e = u, Jb(h, a ? i + Xb(h) + 1 : i)
    }
}();

function Vb(t, e) {
    var r, n, o, i, a, c = 0,
        u = 0,
        l = t.constructor,
        s = l.precision;
    if (Xb(t) > 16) throw Error(Db + Xb(t));
    if (!t.s) return new l(kb);
    for (null == e ? (Mb = !1, a = s) : a = e, i = new l(.03125); t.abs().gte(.1);) t = t.times(i), u += 5;
    for (a += Math.log(Nb(2, u)) / Math.LN10 * 2 + 5 | 0, r = n = o = new l(kb), l.precision = a;;) {
        if (n = Jb(n.times(t), a), r = r.times(++c), Kb((i = o.plus(qb(n, r, a))).d).slice(0, a) === Kb(o.d).slice(0, a)) {
            for (; u--;) o = Jb(o.times(o), a);
            return l.precision = s, null == e ? (Mb = !0, Jb(o, s)) : o
        }
        o = i
    }
}

function Xb(t) {
    for (var e = t.e * Lb, r = t.d[0]; r >= 10; r /= 10) e++;
    return e
}

function Hb(t, e, r) {
    if (e > t.LN10.sd()) throw Mb = !0, r && (t.precision = r), Error(_b + "LN10 precision limit exceeded");
    return Jb(new t(t.LN10), e)
}

function Gb(t) {
    for (var e = ""; t--;) e += "0";
    return e
}

function Yb(t, e) {
    var r, n, o, i, a, c, u, l, s, f = 1,
        p = t,
        h = p.d,
        y = p.constructor,
        d = y.precision;
    if (p.s < 1) throw Error(_b + (p.s ? "NaN" : "-Infinity"));
    if (p.eq(kb)) return new y(0);
    if (null == e ? (Mb = !1, l = d) : l = e, p.eq(10)) return null == e && (Mb = !0), Hb(y, l);
    if (l += 10, y.precision = l, n = (r = Kb(h)).charAt(0), i = Xb(p), !(Math.abs(i) < 15e14)) return u = Hb(y, l + 2, d).times(i + ""), p = Yb(new y(n + "." + r.slice(1)), l - 10).plus(u), y.precision = d, null == e ? (Mb = !0, Jb(p, d)) : p;
    for (; n < 7 && 1 != n || 1 == n && r.charAt(1) > 3;) n = (r = Kb((p = p.times(t)).d)).charAt(0), f++;
    for (i = Xb(p), n > 1 ? (p = new y("0." + r), i++) : p = new y(n + "." + r.slice(1)), c = a = p = qb(p.minus(kb), p.plus(kb), l), s = Jb(p.times(p), l), o = 3;;) {
        if (a = Jb(a.times(s), l), Kb((u = c.plus(qb(a, new y(o), l))).d).slice(0, l) === Kb(c.d).slice(0, l)) return c = c.times(2), 0 !== i && (c = c.plus(Hb(y, l + 2, d).times(i + ""))), c = qb(c, new y(f), l), y.precision = d, null == e ? (Mb = !0, Jb(c, d)) : c;
        c = u, o += 2
    }
}

function Zb(t, e) {
    var r, n, o;
    for ((r = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +e.slice(n + 1), e = e.substring(0, n)) : r < 0 && (r = e.length), n = 0; 48 === e.charCodeAt(n);) ++n;
    for (o = e.length; 48 === e.charCodeAt(o - 1);) --o;
    if (e = e.slice(n, o)) {
        if (o -= n, r = r - n - 1, t.e = Ib(r / Lb), t.d = [], n = (r + 1) % Lb, r < 0 && (n += Lb), n < o) {
            for (n && t.d.push(+e.slice(0, n)), o -= Lb; n < o;) t.d.push(+e.slice(n, n += Lb));
            e = e.slice(n), n = Lb - e.length
        } else n -= o;
        for (; n--;) e += "0";
        if (t.d.push(+e), Mb && (t.e > Fb || t.e < -Fb)) throw Error(Db + r)
    } else t.s = 0, t.e = 0, t.d = [0];
    return t
}

function Jb(t, e, r) {
    var n, o, i, a, c, u, l, s, f = t.d;
    for (a = 1, i = f[0]; i >= 10; i /= 10) a++;
    if ((n = e - a) < 0) n += Lb, o = e, l = f[s = 0];
    else {
        if ((s = Math.ceil((n + 1) / Lb)) >= (i = f.length)) return t;
        for (l = i = f[s], a = 1; i >= 10; i /= 10) a++;
        o = (n %= Lb) - Lb + a
    }
    if (void 0 !== r && (c = l / (i = Nb(10, a - o - 1)) % 10 | 0, u = e < 0 || void 0 !== f[s + 1] || l % i, u = r < 4 ? (c || u) && (0 == r || r == (t.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == r || u || 6 == r && (n > 0 ? o > 0 ? l / Nb(10, a - o) : 0 : f[s - 1]) % 10 & 1 || r == (t.s < 0 ? 8 : 7))), e < 1 || !f[0]) return u ? (i = Xb(t), f.length = 1, e = e - i - 1, f[0] = Nb(10, (Lb - e % Lb) % Lb), t.e = Ib(-e / Lb) || 0) : (f.length = 1, f[0] = t.e = t.s = 0), t;
    if (0 == n ? (f.length = s, i = 1, s--) : (f.length = s + 1, i = Nb(10, Lb - n), f[s] = o > 0 ? (l / Nb(10, a - o) % Nb(10, o) | 0) * i : 0), u)
        for (;;) {
            if (0 == s) {
                (f[0] += i) == Bb && (f[0] = 1, ++t.e);
                break
            }
            if (f[s] += i, f[s] != Bb) break;
            f[s--] = 0, i = 1
        }
    for (n = f.length; 0 === f[--n];) f.pop();
    if (Mb && (t.e > Fb || t.e < -Fb)) throw Error(Db + Xb(t));
    return t
}

function Qb(t, e) {
    var r, n, o, i, a, c, u, l, s, f, p = t.constructor,
        h = p.precision;
    if (!t.s || !e.s) return e.s ? e.s = -e.s : e = new p(t), Mb ? Jb(e, h) : e;
    if (u = t.d, f = e.d, n = e.e, l = t.e, u = u.slice(), a = l - n) {
        for ((s = a < 0) ? (r = u, a = -a, c = f.length) : (r = f, n = l, c = u.length), a > (o = Math.max(Math.ceil(h / Lb), c) + 2) && (a = o, r.length = 1), r.reverse(), o = a; o--;) r.push(0);
        r.reverse()
    } else {
        for ((s = (o = u.length) < (c = f.length)) && (c = o), o = 0; o < c; o++)
            if (u[o] != f[o]) {
                s = u[o] < f[o];
                break
            }
        a = 0
    }
    for (s && (r = u, u = f, f = r, e.s = -e.s), c = u.length, o = f.length - c; o > 0; --o) u[c++] = 0;
    for (o = f.length; o > a;) {
        if (u[--o] < f[o]) {
            for (i = o; i && 0 === u[--i];) u[i] = Bb - 1;
            --u[i], u[o] += Bb
        }
        u[o] -= f[o]
    }
    for (; 0 === u[--c];) u.pop();
    for (; 0 === u[0]; u.shift()) --n;
    return u[0] ? (e.d = u, e.e = n, Mb ? Jb(e, h) : e) : new p(0)
}

function tg(t, e, r) {
    var n, o = Xb(t),
        i = Kb(t.d),
        a = i.length;
    return e ? (r && (n = r - a) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Gb(n) : a > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (o < 0 ? "e" : "e+") + o) : o < 0 ? (i = "0." + Gb(-o - 1) + i, r && (n = r - a) > 0 && (i += Gb(n))) : o >= a ? (i += Gb(o + 1 - a), r && (n = r - o - 1) > 0 && (i = i + "." + Gb(n))) : ((n = o + 1) < a && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - a) > 0 && (o + 1 === a && (i += "."), i += Gb(n))), t.s < 0 ? "-" + i : i
}

function eg(t, e) {
    if (t.length > e) return t.length = e, !0
}

function rg(t) {
    if (!t || "object" != typeof t) throw Error(_b + "Object expected");
    var e, r, n, o = ["precision", 1, Tb, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
    for (e = 0; e < o.length; e += 3)
        if (void 0 !== (n = t[r = o[e]])) {
            if (!(Ib(n) === n && n >= o[e + 1] && n <= o[e + 2])) throw Error(Cb + r + ": " + n);
            this[r] = n
        }
    if (void 0 !== (n = t[r = "LN10"])) {
        if (n != Math.LN10) throw Error(Cb + r + ": " + n);
        this[r] = new this(n)
    }
    return this
}
var ng = function t(e) {
    var r, n, o;

    function i(t) {
        var e = this;
        if (!(e instanceof i)) return new i(t);
        if (e.constructor = i, t instanceof i) return e.s = t.s, e.e = t.e, void(e.d = (t = t.d) ? t.slice() : t);
        if ("number" == typeof t) {
            if (0 * t != 0) throw Error(Cb + t);
            if (t > 0) e.s = 1;
            else {
                if (!(t < 0)) return e.s = 0, e.e = 0, void(e.d = [0]);
                t = -t, e.s = -1
            }
            return t === ~~t && t < 1e7 ? (e.e = 0, void(e.d = [t])) : Zb(e, t.toString())
        }
        if ("string" != typeof t) throw Error(Cb + t);
        if (45 === t.charCodeAt(0) ? (t = t.slice(1), e.s = -1) : e.s = 1, !Rb.test(t)) throw Error(Cb + t);
        Zb(e, t)
    }
    if (i.prototype = Ub, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = t, i.config = i.set = rg, void 0 === e && (e = {}), e)
        for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], r = 0; r < o.length;) e.hasOwnProperty(n = o[r++]) || (e[n] = this[n]);
    return i.config(e), i
}({
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
});
kb = new ng(1);
const og = ng;

function ig(t) {
    return function(t) {
        if (Array.isArray(t)) return ag(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return ag(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ag(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function ag(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
var cg = function(t) {
        return t
    },
    ug = {
        "@@functional/placeholder": !0
    },
    lg = function(t) {
        return t === ug
    },
    sg = function(t) {
        return function e() {
            return 0 === arguments.length || 1 === arguments.length && lg(arguments.length <= 0 ? void 0 : arguments[0]) ? e : t.apply(void 0, arguments)
        }
    },
    fg = function t(e, r) {
        return 1 === e ? r : sg((function() {
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
            var a = o.filter((function(t) {
                return t !== ug
            })).length;
            return a >= e ? r.apply(void 0, o) : t(e - a, sg((function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                var i = o.map((function(t) {
                    return lg(t) ? e.shift() : t
                }));
                return r.apply(void 0, ig(i).concat(e))
            })))
        }))
    },
    pg = function(t) {
        return fg(t.length, t)
    },
    hg = function(t, e) {
        for (var r = [], n = t; n < e; ++n) r[n - t] = n;
        return r
    },
    yg = pg((function(t, e) {
        return Array.isArray(e) ? e.map(t) : Object.keys(e).map((function(t) {
            return e[t]
        })).map(t)
    })),
    dg = function() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        if (!e.length) return cg;
        var n = e.reverse(),
            o = n[0],
            i = n.slice(1);
        return function() {
            return i.reduce((function(t, e) {
                return e(t)
            }), o.apply(void 0, arguments))
        }
    },
    vg = function(t) {
        return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("")
    },
    mg = function(t) {
        var e = null,
            r = null;
        return function() {
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
            return e && o.every((function(t, r) {
                return t === e[r]
            })) ? r : (e = o, r = t.apply(void 0, o))
        }
    };
const bg = {
    rangeStep: function(t, e, r) {
        for (var n = new og(t), o = 0, i = []; n.lt(e) && o < 1e5;) i.push(n.toNumber()), n = n.add(r), o++;
        return i
    },
    getDigitCount: function(t) {
        return 0 === t ? 1 : Math.floor(new og(t).abs().log(10).toNumber()) + 1
    },
    interpolateNumber: pg((function(t, e, r) {
        var n = +t;
        return n + r * (+e - n)
    })),
    uninterpolateNumber: pg((function(t, e, r) {
        var n = e - +t;
        return (r - t) / (n = n || 1 / 0)
    })),
    uninterpolateTruncation: pg((function(t, e, r) {
        var n = e - +t;
        return n = n || 1 / 0, Math.max(0, Math.min(1, (r - t) / n))
    }))
};

function gg(t) {
    return function(t) {
        if (Array.isArray(t)) return xg(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }(t) || Og(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function wg(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var r = [],
            n = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, c = t[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
        } catch (u) {
            o = !0, i = u
        } finally {
            try {
                n || null == c.return || c.return()
            } finally {
                if (o) throw i
            }
        }
        return r
    }(t, e) || Og(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Og(t, e) {
    if (t) {
        if ("string" == typeof t) return xg(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xg(t, e) : void 0
    }
}

function xg(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function jg(t) {
    var e = wg(t, 2),
        r = e[0],
        n = e[1],
        o = r,
        i = n;
    return r > n && (o = n, i = r), [o, i]
}

function Sg(t, e, r) {
    if (t.lte(0)) return new og(0);
    var n = bg.getDigitCount(t.toNumber()),
        o = new og(10).pow(n),
        i = t.div(o),
        a = 1 !== n ? .05 : .1,
        c = new og(Math.ceil(i.div(a).toNumber())).add(r).mul(a).mul(o);
    return e ? c : new og(Math.ceil(c))
}

function Ag(t, e, r, n) {
    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
    if (!Number.isFinite((e - t) / (r - 1))) return {
        step: new og(0),
        tickMin: new og(0),
        tickMax: new og(0)
    };
    var i, a = Sg(new og(e).sub(t).div(r - 1), n, o);
    i = t <= 0 && e >= 0 ? new og(0) : (i = new og(t).add(e).div(2)).sub(new og(i).mod(a));
    var c = Math.ceil(i.sub(t).div(a).toNumber()),
        u = Math.ceil(new og(e).sub(i).div(a).toNumber()),
        l = c + u + 1;
    return l > r ? Ag(t, e, r, n, o + 1) : (l < r && (u = e > 0 ? u + (r - l) : u, c = e > 0 ? c : c + (r - l)), {
        step: a,
        tickMin: i.sub(new og(c).mul(a)),
        tickMax: i.add(new og(u).mul(a))
    })
}
var Pg = mg((function(t) {
        var e = wg(t, 2),
            r = e[0],
            n = e[1],
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            a = Math.max(o, 2),
            c = wg(jg([r, n]), 2),
            u = c[0],
            l = c[1];
        if (u === -1 / 0 || l === 1 / 0) {
            var s = l === 1 / 0 ? [u].concat(gg(hg(0, o - 1).map((function() {
                return 1 / 0
            })))) : [].concat(gg(hg(0, o - 1).map((function() {
                return -1 / 0
            }))), [l]);
            return r > n ? vg(s) : s
        }
        if (u === l) return function(t, e, r) {
            var n = 1,
                o = new og(t);
            if (!o.isint() && r) {
                var i = Math.abs(t);
                i < 1 ? (n = new og(10).pow(bg.getDigitCount(t) - 1), o = new og(Math.floor(o.div(n).toNumber())).mul(n)) : i > 1 && (o = new og(Math.floor(t)))
            } else 0 === t ? o = new og(Math.floor((e - 1) / 2)) : r || (o = new og(Math.floor(t)));
            var a = Math.floor((e - 1) / 2);
            return dg(yg((function(t) {
                return o.add(new og(t - a).mul(n)).toNumber()
            })), hg)(0, e)
        }(u, o, i);
        var f = Ag(u, l, a, i),
            p = f.step,
            h = f.tickMin,
            y = f.tickMax,
            d = bg.rangeStep(h, y.add(new og(.1).mul(p)), p);
        return r > n ? vg(d) : d
    })),
    Eg = mg((function(t, e) {
        var r = wg(t, 2),
            n = r[0],
            o = r[1],
            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            a = wg(jg([n, o]), 2),
            c = a[0],
            u = a[1];
        if (c === -1 / 0 || u === 1 / 0) return [n, o];
        if (c === u) return [c];
        var l = Math.max(e, 2),
            s = Sg(new og(u).sub(c).div(l - 1), i, 0),
            f = [].concat(gg(bg.rangeStep(new og(c), new og(u).sub(new og(.99).mul(s)), s)), [u]);
        return n > o ? vg(f) : f
    }));

function kg(t, e) {
    throw new Error("Invariant failed")
}
var Tg = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

function Mg(t) {
    return (Mg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function _g() {
    return _g = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, _g.apply(this, arguments)
}

function Cg(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Dg(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dg(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Dg(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function Ig(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function Ng(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Ug(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Rg(t, e, r) {
    return e = Lg(e),
        function(t, e) {
            if (e && ("object" === Mg(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, Bg() ? Reflect.construct(e, r || [], Lg(t).constructor) : e.apply(t, r))
}

function Bg() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (Bg = function() {
        return !!t
    })()
}

function Lg(t) {
    return (Lg = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function zg(t, e) {
    return (zg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function Fg(t, e, r) {
    return (e = Ug(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Ug(t) {
    var e = function(t, e) {
        if ("object" != Mg(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Mg(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == Mg(e) ? e : e + ""
}
var Wg = function() {
    function t() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), Rg(this, t, arguments)
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && zg(t, e)
    }(t, n.Component), Ng(t, [{
        key: "render",
        value: function() {
            var t = this.props,
                e = t.offset,
                r = t.layout,
                o = t.width,
                i = t.dataKey,
                a = t.data,
                c = t.dataPointFormatter,
                u = t.xAxis,
                l = t.yAxis,
                s = Ig(t, Tg),
                f = au(s, !1);
            "x" === this.props.direction && "number" !== u.type && kg();
            var p = a.map((function(t) {
                var a = c(t, i),
                    s = a.x,
                    p = a.y,
                    h = a.value,
                    y = a.errorVal;
                if (!y) return null;
                var d, v, m = [];
                if (Array.isArray(y)) {
                    var b = Cg(y, 2);
                    d = b[0], v = b[1]
                } else d = v = y;
                if ("vertical" === r) {
                    var g = u.scale,
                        w = p + e,
                        O = w + o,
                        x = w - o,
                        j = g(h - d),
                        S = g(h + v);
                    m.push({
                        x1: S,
                        y1: O,
                        x2: S,
                        y2: x
                    }), m.push({
                        x1: j,
                        y1: w,
                        x2: S,
                        y2: w
                    }), m.push({
                        x1: j,
                        y1: O,
                        x2: j,
                        y2: x
                    })
                } else if ("horizontal" === r) {
                    var A = l.scale,
                        P = s + e,
                        E = P - o,
                        k = P + o,
                        T = A(h - d),
                        M = A(h + v);
                    m.push({
                        x1: E,
                        y1: M,
                        x2: k,
                        y2: M
                    }), m.push({
                        x1: P,
                        y1: T,
                        x2: P,
                        y2: M
                    }), m.push({
                        x1: E,
                        y1: T,
                        x2: k,
                        y2: T
                    })
                }
                return n.createElement(mu, _g({
                    className: "recharts-errorBar",
                    key: "bar-".concat(m.map((function(t) {
                        return "".concat(t.x1, "-").concat(t.x2, "-").concat(t.y1, "-").concat(t.y2)
                    })))
                }, f), m.map((function(t) {
                    return n.createElement("line", _g({}, t, {
                        key: "line-".concat(t.x1, "-").concat(t.x2, "-").concat(t.y1, "-").concat(t.y2)
                    }))
                })))
            }));
            return n.createElement(mu, {
                className: "recharts-errorBars"
            }, p)
        }
    }])
}();

function $g(t) {
    return ($g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Kg(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function qg(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Kg(Object(r), !0).forEach((function(e) {
            Vg(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Kg(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Vg(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != $g(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != $g(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == $g(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
Fg(Wg, "defaultProps", {
    stroke: "black",
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    layout: "horizontal"
}), Fg(Wg, "displayName", "ErrorBar");
var Xg = function(t) {
    var e = t.children,
        r = t.formattedGraphicalItems,
        n = t.legendWidth,
        o = t.legendContent,
        i = tu(e, Pf);
    if (!i) return null;
    var a, c = Pf.defaultProps,
        u = void 0 !== c ? qg(qg({}, c), i.props) : {};
    return a = i.props && i.props.payload ? i.props && i.props.payload : "children" === o ? (r || []).reduce((function(t, e) {
        var r = e.item,
            n = e.props,
            o = n.sectors || n.data || [];
        return t.concat(o.map((function(t) {
            return {
                type: i.props.iconType || r.props.legendType,
                value: t.name,
                color: t.fill,
                payload: t
            }
        })))
    }), []) : (r || []).map((function(t) {
        var e = t.item,
            r = e.type.defaultProps,
            n = void 0 !== r ? qg(qg({}, r), e.props) : {},
            o = n.dataKey,
            i = n.name,
            a = n.legendType;
        return {
            inactive: n.hide,
            dataKey: o,
            type: u.iconType || a || "square",
            color: rw(e),
            value: i || o,
            payload: n
        }
    })), qg(qg(qg({}, u), Pf.getWithHeight(i, n)), {}, {
        payload: a,
        item: i
    })
};

function Hg(t) {
    return (Hg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Gg(t) {
    return function(t) {
        if (Array.isArray(t)) return Yg(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Yg(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yg(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Yg(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function Zg(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Jg(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Zg(Object(r), !0).forEach((function(e) {
            Qg(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Zg(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Qg(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != Hg(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Hg(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == Hg(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function tw(t, e, r) {
    return yc(t) || yc(e) ? r : kc(e) ? ve(t, e, r) : A(e) ? e(t) : r
}

function ew(t, e, r, n) {
    var o = Ab(t, (function(t) {
        return tw(t, e)
    }));
    if ("number" === r) {
        var i = o.filter((function(t) {
            return Ec(t) || parseFloat(t)
        }));
        return i.length ? [bb(i), hb(i)] : [1 / 0, -1 / 0]
    }
    return (n ? o.filter((function(t) {
        return !yc(t)
    })) : o).map((function(t) {
        return kc(t) || t instanceof Date ? t : ""
    }))
}
var rw = function(t) {
        var e, r, n = t.type.displayName,
            o = null !== (e = t.type) && void 0 !== e && e.defaultProps ? Jg(Jg({}, t.type.defaultProps), t.props) : t.props,
            i = o.stroke,
            a = o.fill;
        switch (n) {
            case "Line":
                r = i;
                break;
            case "Area":
            case "Radar":
                r = i && "none" !== i ? i : a;
                break;
            default:
                r = a
        }
        return r
    },
    nw = function(t, e, r, n, o) {
        var i = Qc(e.props.children, Wg).filter((function(t) {
            return function(t, e, r) {
                return !!yc(e) || ("horizontal" === t ? "yAxis" === e : "vertical" === t || "x" === r ? "xAxis" === e : "y" !== r || "yAxis" === e)
            }(n, o, t.props.direction)
        }));
        if (i && i.length) {
            var a = i.map((function(t) {
                return t.props.dataKey
            }));
            return t.reduce((function(t, e) {
                var n = tw(e, r);
                if (yc(n)) return t;
                var o = Array.isArray(n) ? [bb(n), hb(n)] : [n, n],
                    i = a.reduce((function(t, r) {
                        var n = tw(e, r, 0),
                            i = o[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                            a = o[1] + Math.abs(Array.isArray(n) ? n[1] : n);
                        return [Math.min(i, t[0]), Math.max(a, t[1])]
                    }), [1 / 0, -1 / 0]);
                return [Math.min(i[0], t[0]), Math.max(i[1], t[1])]
            }), [1 / 0, -1 / 0])
        }
        return null
    },
    ow = function(t, e, r, n, o) {
        var i = e.map((function(e) {
            var i = e.props.dataKey;
            return "number" === r && i && nw(t, e, i, n) || ew(t, i, r, o)
        }));
        if ("number" === r) return i.reduce((function(t, e) {
            return [Math.min(t[0], e[0]), Math.max(t[1], e[1])]
        }), [1 / 0, -1 / 0]);
        var a = {};
        return i.reduce((function(t, e) {
            for (var r = 0, n = e.length; r < n; r++) a[e[r]] || (a[e[r]] = !0, t.push(e[r]));
            return t
        }), [])
    },
    iw = function(t, e) {
        return "horizontal" === t && "xAxis" === e || "vertical" === t && "yAxis" === e || "centric" === t && "angleAxis" === e || "radial" === t && "radiusAxis" === e
    },
    aw = function(t, e, r, n) {
        if (n) return t.map((function(t) {
            return t.coordinate
        }));
        var o, i, a = t.map((function(t) {
            return t.coordinate === e && (o = !0), t.coordinate === r && (i = !0), t.coordinate
        }));
        return o || a.push(e), i || a.push(r), a
    },
    cw = function(t, e, r) {
        if (!t) return null;
        var n = t.scale,
            o = t.duplicateDomain,
            i = t.type,
            a = t.range,
            c = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
            u = (e || r) && "category" === i && n.bandwidth ? n.bandwidth() / c : 0;
        return u = "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2 ? 2 * Ac(a[0] - a[1]) * u : u, e && (t.ticks || t.niceTicks) ? (t.ticks || t.niceTicks).map((function(t) {
            var e = o ? o.indexOf(t) : t;
            return {
                coordinate: n(e) + u,
                value: t,
                offset: u
            }
        })).filter((function(t) {
            return !Sc(t.coordinate)
        })) : t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map((function(t, e) {
            return {
                coordinate: n(t) + u,
                value: t,
                index: e,
                offset: u
            }
        })) : n.ticks && !r ? n.ticks(t.tickCount).map((function(t) {
            return {
                coordinate: n(t) + u,
                value: t,
                offset: u
            }
        })) : n.domain().map((function(t, e) {
            return {
                coordinate: n(t) + u,
                value: o ? o[t] : t,
                index: e,
                offset: u
            }
        }))
    },
    uw = new WeakMap,
    lw = function(t, e) {
        if ("function" != typeof e) return t;
        uw.has(t) || uw.set(t, new WeakMap);
        var r = uw.get(t);
        if (r.has(e)) return r.get(e);
        var n = function() {
            t.apply(void 0, arguments), e.apply(void 0, arguments)
        };
        return r.set(e, n), n
    },
    sw = function(t, e, r) {
        var n = t.scale,
            o = t.type,
            i = t.layout,
            a = t.axisType;
        if ("auto" === n) return "radial" === i && "radiusAxis" === a ? {
            scale: Jh(),
            realScaleType: "band"
        } : "radial" === i && "angleAxis" === a ? {
            scale: Od(),
            realScaleType: "linear"
        } : "category" === o && e && (e.indexOf("LineChart") >= 0 || e.indexOf("AreaChart") >= 0 || e.indexOf("ComposedChart") >= 0 && !r) ? {
            scale: ty(),
            realScaleType: "point"
        } : "category" === o ? {
            scale: Jh(),
            realScaleType: "band"
        } : {
            scale: Od(),
            realScaleType: "linear"
        };
        if (bc(n)) {
            var c = "scale".concat($u(n));
            return {
                scale: (ab[c] || ty)(),
                realScaleType: ab[c] ? c : "point"
            }
        }
        return A(n) ? {
            scale: n
        } : {
            scale: ty(),
            realScaleType: "point"
        }
    },
    fw = 1e-4,
    pw = function(t) {
        var e = t.domain();
        if (e && !(e.length <= 2)) {
            var r = e.length,
                n = t.range(),
                o = Math.min(n[0], n[1]) - fw,
                i = Math.max(n[0], n[1]) + fw,
                a = t(e[0]),
                c = t(e[r - 1]);
            (a < o || a > i || c < o || c > i) && t.domain([e[0], e[r - 1]])
        }
    },
    hw = function(t, e) {
        if (!t) return null;
        for (var r = 0, n = t.length; r < n; r++)
            if (t[r].item === e) return t[r].position;
        return null
    },
    yw = function(t, e) {
        if (!e || 2 !== e.length || !Ec(e[0]) || !Ec(e[1])) return t;
        var r = Math.min(e[0], e[1]),
            n = Math.max(e[0], e[1]),
            o = [t[0], t[1]];
        return (!Ec(t[0]) || t[0] < r) && (o[0] = r), (!Ec(t[1]) || t[1] > n) && (o[1] = n), o[0] > n && (o[0] = n), o[1] < r && (o[1] = r), o
    },
    dw = {
        sign: function(t) {
            var e = t.length;
            if (!(e <= 0))
                for (var r = 0, n = t[0].length; r < n; ++r)
                    for (var o = 0, i = 0, a = 0; a < e; ++a) {
                        var c = Sc(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                        c >= 0 ? (t[a][r][0] = o, t[a][r][1] = o + c, o = t[a][r][1]) : (t[a][r][0] = i, t[a][r][1] = i + c, i = t[a][r][1])
                    }
        },
        expand: function(t, e) {
            if ((n = t.length) > 0) {
                for (var r, n, o, i = 0, a = t[0].length; i < a; ++i) {
                    for (o = r = 0; r < n; ++r) o += t[r][i][1] || 0;
                    if (o)
                        for (r = 0; r < n; ++r) t[r][i][1] /= o
                }
                Kl(t, e)
            }
        },
        none: Kl,
        silhouette: function(t, e) {
            if ((r = t.length) > 0) {
                for (var r, n = 0, o = t[e[0]], i = o.length; n < i; ++n) {
                    for (var a = 0, c = 0; a < r; ++a) c += t[a][n][1] || 0;
                    o[n][1] += o[n][0] = -c / 2
                }
                Kl(t, e)
            }
        },
        wiggle: function(t, e) {
            if ((o = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
                for (var r, n, o, i = 0, a = 1; a < n; ++a) {
                    for (var c = 0, u = 0, l = 0; c < o; ++c) {
                        for (var s = t[e[c]], f = s[a][1] || 0, p = (f - (s[a - 1][1] || 0)) / 2, h = 0; h < c; ++h) {
                            var y = t[e[h]];
                            p += (y[a][1] || 0) - (y[a - 1][1] || 0)
                        }
                        u += f, l += p * f
                    }
                    r[a - 1][1] += r[a - 1][0] = i, u && (i -= l / u)
                }
                r[a - 1][1] += r[a - 1][0] = i, Kl(t, e)
            }
        },
        positive: function(t) {
            var e = t.length;
            if (!(e <= 0))
                for (var r = 0, n = t[0].length; r < n; ++r)
                    for (var o = 0, i = 0; i < e; ++i) {
                        var a = Sc(t[i][r][1]) ? t[i][r][0] : t[i][r][1];
                        a >= 0 ? (t[i][r][0] = o, t[i][r][1] = o + a, o = t[i][r][1]) : (t[i][r][0] = 0, t[i][r][1] = 0)
                    }
        }
    },
    vw = function(t, e, r) {
        var n = e.map((function(t) {
                return t.props.dataKey
            })),
            o = dw[r],
            i = function() {
                var t = Ku([]),
                    e = ql,
                    r = Kl,
                    n = Vl;

                function o(o) {
                    var i, a, c = Array.from(t.apply(this, arguments), Xl),
                        u = c.length,
                        l = -1;
                    for (const t of o)
                        for (i = 0, ++l; i < u; ++i)(c[i][l] = [0, +n(t, c[i].key, l, o)]).data = t;
                    for (i = 0, a = nl(e(c)); i < u; ++i) c[a[i]].index = i;
                    return r(c, a), c
                }
                return o.keys = function(e) {
                    return arguments.length ? (t = "function" == typeof e ? e : Ku(Array.from(e)), o) : t
                }, o.value = function(t) {
                    return arguments.length ? (n = "function" == typeof t ? t : Ku(+t), o) : n
                }, o.order = function(t) {
                    return arguments.length ? (e = null == t ? ql : "function" == typeof t ? t : Ku(Array.from(t)), o) : e
                }, o.offset = function(t) {
                    return arguments.length ? (r = null == t ? Kl : t, o) : r
                }, o
            }().keys(n).value((function(t, e) {
                return +tw(t, e, 0)
            })).order(ql).offset(o);
        return i(t)
    },
    mw = function(t, e) {
        var r = e.realScaleType,
            n = e.type,
            o = e.tickCount,
            i = e.originalDomain,
            a = e.allowDecimals,
            c = r || e.scale;
        if ("auto" !== c && "linear" !== c) return null;
        if (o && "number" === n && i && ("auto" === i[0] || "auto" === i[1])) {
            var u = t.domain();
            if (!u.length) return null;
            var l = Pg(u, o, a);
            return t.domain([bb(l), hb(l)]), {
                niceTicks: l
            }
        }
        if (o && "number" === n) {
            var s = t.domain();
            return {
                niceTicks: Eg(s, o, a)
            }
        }
        return null
    };

function bw(t) {
    var e = t.axis,
        r = t.ticks,
        n = t.bandSize,
        o = t.entry,
        i = t.index,
        a = t.dataKey;
    if ("category" === e.type) {
        if (!e.allowDuplicatedCategory && e.dataKey && !yc(o[e.dataKey])) {
            var c = Ic(r, "value", o[e.dataKey]);
            if (c) return c.coordinate + n / 2
        }
        return r[i] ? r[i].coordinate + n / 2 : null
    }
    var u = tw(o, yc(a) ? e.dataKey : a);
    return yc(u) ? null : e.scale(u)
}
var gw = function(t) {
        var e = t.axis,
            r = t.ticks,
            n = t.offset,
            o = t.bandSize,
            i = t.entry,
            a = t.index;
        if ("category" === e.type) return r[a] ? r[a].coordinate + n : null;
        var c = tw(i, e.dataKey, e.domain[a]);
        return yc(c) ? null : e.scale(c) - o / 2 + n
    },
    ww = function(t) {
        var e = t.numericAxis,
            r = e.scale.domain();
        if ("number" === e.type) {
            var n = Math.min(r[0], r[1]),
                o = Math.max(r[0], r[1]);
            return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n
        }
        return r[0]
    },
    Ow = function(t, e, r) {
        return Object.keys(t).reduce((function(n, o) {
            var i = t[o].stackedData.reduce((function(t, n) {
                var o = n.slice(e, r + 1).reduce((function(t, e) {
                    return [bb(e.concat([t[0]]).filter(Ec)), hb(e.concat([t[1]]).filter(Ec))]
                }), [1 / 0, -1 / 0]);
                return [Math.min(t[0], o[0]), Math.max(t[1], o[1])]
            }), [1 / 0, -1 / 0]);
            return [Math.min(i[0], n[0]), Math.max(i[1], n[1])]
        }), [1 / 0, -1 / 0]).map((function(t) {
            return t === 1 / 0 || t === -1 / 0 ? 0 : t
        }))
    },
    xw = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    jw = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    Sw = function(t, e, r) {
        if (A(t)) return t(e, r);
        if (!Array.isArray(t)) return e;
        var n = [];
        if (Ec(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
        else if (xw.test(t[0])) {
            var o = +xw.exec(t[0])[1];
            n[0] = e[0] - o
        } else A(t[0]) ? n[0] = t[0](e[0]) : n[0] = e[0];
        if (Ec(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
        else if (jw.test(t[1])) {
            var i = +jw.exec(t[1])[1];
            n[1] = e[1] + i
        } else A(t[1]) ? n[1] = t[1](e[1]) : n[1] = e[1];
        return n
    },
    Aw = function(t, e, r) {
        if (t && t.scale && t.scale.bandwidth) {
            var n = t.scale.bandwidth();
            if (!r || n > 0) return n
        }
        if (t && e && e.length >= 2) {
            for (var o = Gf(e, (function(t) {
                    return t.coordinate
                })), i = 1 / 0, a = 1, c = o.length; a < c; a++) {
                var u = o[a],
                    l = o[a - 1];
                i = Math.min((u.coordinate || 0) - (l.coordinate || 0), i)
            }
            return i === 1 / 0 ? 0 : i
        }
        return r ? void 0 : 0
    },
    Pw = function(t, e, r) {
        return t && t.length ? Eb(t, ve(r, "type.defaultProps.domain")) ? e : t : e
    },
    Ew = function(t, e) {
        var r = t.type.defaultProps ? Jg(Jg({}, t.type.defaultProps), t.props) : t.props,
            n = r.dataKey,
            o = r.name,
            i = r.unit,
            a = r.formatter,
            c = r.tooltipType,
            u = r.chartType,
            l = r.hide;
        return Jg(Jg({}, au(t, !1)), {}, {
            dataKey: n,
            unit: i,
            formatter: a,
            name: o || n,
            color: rw(t),
            value: tw(e, n),
            type: c,
            payload: e,
            chartType: u,
            hide: l
        })
    };

function kw(t) {
    return (kw = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Tw(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Mw(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Tw(Object(r), !0).forEach((function(e) {
            _w(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Tw(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function _w(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != kw(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != kw(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == kw(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Cw(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Dw(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dw(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Dw(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
var Iw = Math.PI / 180,
    Nw = function(t) {
        return 180 * t / Math.PI
    },
    Rw = function(t, e, r, n) {
        return {
            x: t + Math.cos(-Iw * n) * r,
            y: e + Math.sin(-Iw * n) * r
        }
    },
    Bw = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        return Math.min(Math.abs(t - (r.left || 0) - (r.right || 0)), Math.abs(e - (r.top || 0) - (r.bottom || 0))) / 2
    },
    Lw = function(t, e, r, n, o) {
        var i = t.width,
            a = t.height,
            c = t.startAngle,
            u = t.endAngle,
            l = _c(t.cx, i, i / 2),
            s = _c(t.cy, a, a / 2),
            f = Bw(i, a, r),
            p = _c(t.innerRadius, f, 0),
            h = _c(t.outerRadius, f, .8 * f);
        return Object.keys(e).reduce((function(t, r) {
            var i, a = e[r],
                f = a.domain,
                y = a.reversed;
            if (yc(a.range)) "angleAxis" === n ? i = [c, u] : "radiusAxis" === n && (i = [p, h]), y && (i = [i[1], i[0]]);
            else {
                var d = Cw(i = a.range, 2);
                c = d[0], u = d[1]
            }
            var v = sw(a, o),
                m = v.realScaleType,
                b = v.scale;
            b.domain(f).range(i), pw(b);
            var g = mw(b, Mw(Mw({}, a), {}, {
                    realScaleType: m
                })),
                w = Mw(Mw(Mw({}, a), g), {}, {
                    range: i,
                    radius: h,
                    realScaleType: m,
                    scale: b,
                    cx: l,
                    cy: s,
                    innerRadius: p,
                    outerRadius: h,
                    startAngle: c,
                    endAngle: u
                });
            return Mw(Mw({}, t), {}, _w({}, r, w))
        }), {})
    },
    zw = function(t, e) {
        var r = t.x,
            n = t.y,
            o = e.cx,
            i = e.cy,
            a = function(t, e) {
                var r = t.x,
                    n = t.y,
                    o = e.x,
                    i = e.y;
                return Math.sqrt(Math.pow(r - o, 2) + Math.pow(n - i, 2))
            }({
                x: r,
                y: n
            }, {
                x: o,
                y: i
            });
        if (a <= 0) return {
            radius: a
        };
        var c = (r - o) / a,
            u = Math.acos(c);
        return n > i && (u = 2 * Math.PI - u), {
            radius: a,
            angle: Nw(u),
            angleInRadian: u
        }
    },
    Fw = function(t, e) {
        var r = e.startAngle,
            n = e.endAngle,
            o = Math.floor(r / 360),
            i = Math.floor(n / 360);
        return t + 360 * Math.min(o, i)
    },
    Uw = function(t, e) {
        var r = t.x,
            n = t.y,
            o = zw({
                x: r,
                y: n
            }, e),
            i = o.radius,
            a = o.angle,
            c = e.innerRadius,
            u = e.outerRadius;
        if (i < c || i > u) return !1;
        if (0 === i) return !0;
        var l, s = function(t) {
                var e = t.startAngle,
                    r = t.endAngle,
                    n = Math.floor(e / 360),
                    o = Math.floor(r / 360),
                    i = Math.min(n, o);
                return {
                    startAngle: e - 360 * i,
                    endAngle: r - 360 * i
                }
            }(e),
            f = s.startAngle,
            p = s.endAngle,
            h = a;
        if (f <= p) {
            for (; h > p;) h -= 360;
            for (; h < f;) h += 360;
            l = h >= f && h <= p
        } else {
            for (; h > f;) h -= 360;
            for (; h < p;) h += 360;
            l = h >= p && h <= f
        }
        return l ? Mw(Mw({}, e), {}, {
            radius: i,
            angle: Fw(h, e)
        }) : null
    },
    Ww = function(t) {
        return r.isValidElement(t) || A(t) || "boolean" == typeof t ? "" : t.className
    };

function $w(t) {
    return ($w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
var Kw = ["offset"];

function qw(t) {
    return function(t) {
        if (Array.isArray(t)) return Vw(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Vw(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vw(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Vw(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function Xw(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function Hw(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Gw(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Hw(Object(r), !0).forEach((function(e) {
            Yw(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Hw(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Yw(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != $w(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != $w(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == $w(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Zw() {
    return Zw = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, Zw.apply(this, arguments)
}
var Jw = function(t) {
        var e = t.value,
            r = t.formatter,
            n = yc(t.children) ? e : t.children;
        return A(r) ? r(n) : n
    },
    Qw = function(t, e, r) {
        var o, i, a = t.position,
            c = t.viewBox,
            u = t.offset,
            l = t.className,
            s = c,
            f = s.cx,
            p = s.cy,
            h = s.innerRadius,
            y = s.outerRadius,
            d = s.startAngle,
            v = s.endAngle,
            m = s.clockWise,
            b = (h + y) / 2,
            g = function(t, e) {
                return Ac(e - t) * Math.min(Math.abs(e - t), 360)
            }(d, v),
            w = g >= 0 ? 1 : -1;
        "insideStart" === a ? (o = d + w * u, i = m) : "insideEnd" === a ? (o = v - w * u, i = !m) : "end" === a && (o = v + w * u, i = m), i = g <= 0 ? i : !i;
        var O = Rw(f, p, b, o),
            x = Rw(f, p, b, o + 359 * (i ? 1 : -1)),
            j = "M".concat(O.x, ",").concat(O.y, "\n    A").concat(b, ",").concat(b, ",0,1,").concat(i ? 0 : 1, ",\n    ").concat(x.x, ",").concat(x.y),
            S = yc(t.id) ? Mc("recharts-radial-line-") : t.id;
        return n.createElement("text", Zw({}, r, {
            dominantBaseline: "central",
            className: hc("recharts-radial-bar-label", l)
        }), n.createElement("defs", null, n.createElement("path", {
            id: S,
            d: j
        })), n.createElement("textPath", {
            xlinkHref: "#".concat(S)
        }, e))
    },
    tO = function(t) {
        var e = t.viewBox,
            r = t.offset,
            n = t.position,
            o = e,
            i = o.cx,
            a = o.cy,
            c = o.innerRadius,
            u = o.outerRadius,
            l = (o.startAngle + o.endAngle) / 2;
        if ("outside" === n) {
            var s = Rw(i, a, u + r, l),
                f = s.x;
            return {
                x: f,
                y: s.y,
                textAnchor: f >= i ? "start" : "end",
                verticalAnchor: "middle"
            }
        }
        if ("center" === n) return {
            x: i,
            y: a,
            textAnchor: "middle",
            verticalAnchor: "middle"
        };
        if ("centerTop" === n) return {
            x: i,
            y: a,
            textAnchor: "middle",
            verticalAnchor: "start"
        };
        if ("centerBottom" === n) return {
            x: i,
            y: a,
            textAnchor: "middle",
            verticalAnchor: "end"
        };
        var p = Rw(i, a, (c + u) / 2, l);
        return {
            x: p.x,
            y: p.y,
            textAnchor: "middle",
            verticalAnchor: "middle"
        }
    },
    eO = function(t) {
        var e = t.viewBox,
            r = t.parentViewBox,
            n = t.offset,
            o = t.position,
            i = e,
            a = i.x,
            c = i.y,
            u = i.width,
            l = i.height,
            s = l >= 0 ? 1 : -1,
            p = s * n,
            h = s > 0 ? "end" : "start",
            y = s > 0 ? "start" : "end",
            d = u >= 0 ? 1 : -1,
            v = d * n,
            m = d > 0 ? "end" : "start",
            b = d > 0 ? "start" : "end";
        if ("top" === o) return Gw(Gw({}, {
            x: a + u / 2,
            y: c - s * n,
            textAnchor: "middle",
            verticalAnchor: h
        }), r ? {
            height: Math.max(c - r.y, 0),
            width: u
        } : {});
        if ("bottom" === o) return Gw(Gw({}, {
            x: a + u / 2,
            y: c + l + p,
            textAnchor: "middle",
            verticalAnchor: y
        }), r ? {
            height: Math.max(r.y + r.height - (c + l), 0),
            width: u
        } : {});
        if ("left" === o) {
            var g = {
                x: a - v,
                y: c + l / 2,
                textAnchor: m,
                verticalAnchor: "middle"
            };
            return Gw(Gw({}, g), r ? {
                width: Math.max(g.x - r.x, 0),
                height: l
            } : {})
        }
        if ("right" === o) {
            var w = {
                x: a + u + v,
                y: c + l / 2,
                textAnchor: b,
                verticalAnchor: "middle"
            };
            return Gw(Gw({}, w), r ? {
                width: Math.max(r.x + r.width - w.x, 0),
                height: l
            } : {})
        }
        var O = r ? {
            width: u,
            height: l
        } : {};
        return "insideLeft" === o ? Gw({
            x: a + v,
            y: c + l / 2,
            textAnchor: b,
            verticalAnchor: "middle"
        }, O) : "insideRight" === o ? Gw({
            x: a + u - v,
            y: c + l / 2,
            textAnchor: m,
            verticalAnchor: "middle"
        }, O) : "insideTop" === o ? Gw({
            x: a + u / 2,
            y: c + p,
            textAnchor: "middle",
            verticalAnchor: y
        }, O) : "insideBottom" === o ? Gw({
            x: a + u / 2,
            y: c + l - p,
            textAnchor: "middle",
            verticalAnchor: h
        }, O) : "insideTopLeft" === o ? Gw({
            x: a + v,
            y: c + p,
            textAnchor: b,
            verticalAnchor: y
        }, O) : "insideTopRight" === o ? Gw({
            x: a + u - v,
            y: c + p,
            textAnchor: m,
            verticalAnchor: y
        }, O) : "insideBottomLeft" === o ? Gw({
            x: a + v,
            y: c + l - p,
            textAnchor: b,
            verticalAnchor: h
        }, O) : "insideBottomRight" === o ? Gw({
            x: a + u - v,
            y: c + l - p,
            textAnchor: m,
            verticalAnchor: h
        }, O) : f(o) && (Ec(o.x) || Pc(o.x)) && (Ec(o.y) || Pc(o.y)) ? Gw({
            x: a + _c(o.x, u),
            y: c + _c(o.y, l),
            textAnchor: "end",
            verticalAnchor: "end"
        }, O) : Gw({
            x: a + u / 2,
            y: c + l / 2,
            textAnchor: "middle",
            verticalAnchor: "middle"
        }, O)
    },
    rO = function(t) {
        return "cx" in t && Ec(t.cx)
    };

function nO(t) {
    var e, o = t.offset,
        i = Gw({
            offset: void 0 === o ? 5 : o
        }, Xw(t, Kw)),
        a = i.viewBox,
        c = i.position,
        u = i.value,
        l = i.children,
        s = i.content,
        f = i.className,
        p = void 0 === f ? "" : f,
        h = i.textBreakAll;
    if (!a || yc(u) && yc(l) && !r.isValidElement(s) && !A(s)) return null;
    if (r.isValidElement(s)) return r.cloneElement(s, i);
    if (A(s)) {
        if (e = r.createElement(s, i), r.isValidElement(e)) return e
    } else e = Jw(i);
    var y = rO(a),
        d = au(i, !0);
    if (y && ("insideStart" === c || "insideEnd" === c || "end" === c)) return Qw(i, e, d);
    var v = y ? tO(i) : eO(i);
    return n.createElement(Ah, Zw({
        className: hc("recharts-label", p)
    }, d, v, {
        breakAll: h
    }), e)
}
nO.displayName = "Label";
var oO = function(t) {
    var e = t.cx,
        r = t.cy,
        n = t.angle,
        o = t.startAngle,
        i = t.endAngle,
        a = t.r,
        c = t.radius,
        u = t.innerRadius,
        l = t.outerRadius,
        s = t.x,
        f = t.y,
        p = t.top,
        h = t.left,
        y = t.width,
        d = t.height,
        v = t.clockWise,
        m = t.labelViewBox;
    if (m) return m;
    if (Ec(y) && Ec(d)) {
        if (Ec(s) && Ec(f)) return {
            x: s,
            y: f,
            width: y,
            height: d
        };
        if (Ec(p) && Ec(h)) return {
            x: p,
            y: h,
            width: y,
            height: d
        }
    }
    return Ec(s) && Ec(f) ? {
        x: s,
        y: f,
        width: 0,
        height: 0
    } : Ec(e) && Ec(r) ? {
        cx: e,
        cy: r,
        startAngle: o || n || 0,
        endAngle: i || n || 0,
        innerRadius: u || 0,
        outerRadius: l || c || a || 0,
        clockWise: v
    } : t.viewBox ? t.viewBox : {}
};

function iO(t) {
    return (iO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
nO.parseViewBox = oO, nO.renderCallByParent = function(t, e) {
    var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!t || !t.children && o && !t.label) return null;
    var i = t.children,
        a = oO(t),
        c = Qc(i, nO).map((function(t, n) {
            return r.cloneElement(t, {
                viewBox: e || a,
                key: "label-".concat(n)
            })
        }));
    if (!o) return c;
    var u = function(t, e) {
        return t ? !0 === t ? n.createElement(nO, {
            key: "label-implicit",
            viewBox: e
        }) : kc(t) ? n.createElement(nO, {
            key: "label-implicit",
            viewBox: e,
            value: t
        }) : r.isValidElement(t) ? t.type === nO ? r.cloneElement(t, {
            key: "label-implicit",
            viewBox: e
        }) : n.createElement(nO, {
            key: "label-implicit",
            content: t,
            viewBox: e
        }) : A(t) ? n.createElement(nO, {
            key: "label-implicit",
            content: t,
            viewBox: e
        }) : f(t) ? n.createElement(nO, Zw({
            viewBox: e
        }, t, {
            key: "label-implicit"
        })) : null : null
    }(t.label, e || a);
    return [u].concat(qw(c))
};
var aO = ["valueAccessor"],
    cO = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

function uO(t) {
    return function(t) {
        if (Array.isArray(t)) return lO(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return lO(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lO(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function lO(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function sO() {
    return sO = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, sO.apply(this, arguments)
}

function fO(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function pO(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? fO(Object(r), !0).forEach((function(e) {
            hO(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fO(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function hO(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != iO(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != iO(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == iO(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function yO(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}
var dO = function(t) {
    return Array.isArray(t.value) ? Ba(t.value) : t.value
};

function vO(t) {
    var e = t.valueAccessor,
        r = void 0 === e ? dO : e,
        o = yO(t, aO),
        i = o.data,
        a = o.dataKey,
        c = o.clockWise,
        u = o.id,
        l = o.textBreakAll,
        s = yO(o, cO);
    return i && i.length ? n.createElement(mu, {
        className: "recharts-label-list"
    }, i.map((function(t, e) {
        var o = yc(a) ? r(t, e) : tw(t && t.payload, a),
            i = yc(u) ? {} : {
                id: "".concat(u, "-").concat(e)
            };
        return n.createElement(nO, sO({}, au(t, !0), s, i, {
            parentViewBox: t.parentViewBox,
            value: o,
            textBreakAll: l,
            viewBox: nO.parseViewBox(yc(c) ? t : pO(pO({}, t), {}, {
                clockWise: c
            })),
            key: "label-".concat(e),
            index: e
        }))
    }))) : null
}
vO.displayName = "LabelList", vO.renderCallByParent = function(t, e) {
    var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!t || !t.children && o && !t.label) return null;
    var i = Qc(t.children, vO).map((function(t, n) {
        return r.cloneElement(t, {
            data: e,
            key: "labelList-".concat(n)
        })
    }));
    return o ? [function(t, e) {
        return t ? !0 === t ? n.createElement(vO, {
            key: "labelList-implicit",
            data: e
        }) : n.isValidElement(t) || A(t) ? n.createElement(vO, {
            key: "labelList-implicit",
            data: e,
            content: t
        }) : f(t) ? n.createElement(vO, sO({
            data: e
        }, t, {
            key: "labelList-implicit"
        })) : null : null
    }(t.label, e)].concat(uO(i)) : i
};
var mO = ["component"];

function bO(t) {
    return (bO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function gO(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function wO(t) {
    var e, o = t.component,
        i = gO(t, mO);
    return r.isValidElement(o) ? e = r.cloneElement(o, i) : A(o) ? e = r.createElement(o, i) : bu(!1, "Customized's props `component` must be React.element or Function, but got %s.", bO(o)), n.createElement(mu, {
        className: "recharts-customized-wrapper"
    }, e)
}

function OO(t) {
    return (OO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function xO() {
    return xO = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, xO.apply(this, arguments)
}

function jO(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function SO(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? jO(Object(r), !0).forEach((function(e) {
            AO(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : jO(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function AO(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != OO(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != OO(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == OO(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
wO.displayName = "Customized";
var PO = function(t) {
        var e = t.cx,
            r = t.cy,
            n = t.radius,
            o = t.angle,
            i = t.sign,
            a = t.isExternal,
            c = t.cornerRadius,
            u = t.cornerIsExternal,
            l = c * (a ? 1 : -1) + n,
            s = Math.asin(c / l) / Iw,
            f = u ? o : o + i * s,
            p = u ? o - i * s : o;
        return {
            center: Rw(e, r, l, f),
            circleTangency: Rw(e, r, n, f),
            lineTangency: Rw(e, r, l * Math.cos(s * Iw), p),
            theta: s
        }
    },
    EO = function(t) {
        var e = t.cx,
            r = t.cy,
            n = t.innerRadius,
            o = t.outerRadius,
            i = t.startAngle,
            a = function(t, e) {
                return Ac(e - t) * Math.min(Math.abs(e - t), 359.999)
            }(i, t.endAngle),
            c = i + a,
            u = Rw(e, r, o, i),
            l = Rw(e, r, o, c),
            s = "M ".concat(u.x, ",").concat(u.y, "\n    A ").concat(o, ",").concat(o, ",0,\n    ").concat(+(Math.abs(a) > 180), ",").concat(+(i > c), ",\n    ").concat(l.x, ",").concat(l.y, "\n  ");
        if (n > 0) {
            var f = Rw(e, r, n, i),
                p = Rw(e, r, n, c);
            s += "L ".concat(p.x, ",").concat(p.y, "\n            A ").concat(n, ",").concat(n, ",0,\n            ").concat(+(Math.abs(a) > 180), ",").concat(+(i <= c), ",\n            ").concat(f.x, ",").concat(f.y, " Z")
        } else s += "L ".concat(e, ",").concat(r, " Z");
        return s
    },
    kO = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1
    },
    TO = function(t) {
        var e = SO(SO({}, kO), t),
            r = e.cx,
            o = e.cy,
            i = e.innerRadius,
            a = e.outerRadius,
            c = e.cornerRadius,
            u = e.forceCornerRadius,
            l = e.cornerIsExternal,
            s = e.startAngle,
            f = e.endAngle,
            p = e.className;
        if (a < i || s === f) return null;
        var h, y = hc("recharts-sector", p),
            d = a - i,
            v = _c(c, d, 0, !0);
        return h = v > 0 && Math.abs(s - f) < 360 ? function(t) {
            var e = t.cx,
                r = t.cy,
                n = t.innerRadius,
                o = t.outerRadius,
                i = t.cornerRadius,
                a = t.forceCornerRadius,
                c = t.cornerIsExternal,
                u = t.startAngle,
                l = t.endAngle,
                s = Ac(l - u),
                f = PO({
                    cx: e,
                    cy: r,
                    radius: o,
                    angle: u,
                    sign: s,
                    cornerRadius: i,
                    cornerIsExternal: c
                }),
                p = f.circleTangency,
                h = f.lineTangency,
                y = f.theta,
                d = PO({
                    cx: e,
                    cy: r,
                    radius: o,
                    angle: l,
                    sign: -s,
                    cornerRadius: i,
                    cornerIsExternal: c
                }),
                v = d.circleTangency,
                m = d.lineTangency,
                b = d.theta,
                g = c ? Math.abs(u - l) : Math.abs(u - l) - y - b;
            if (g < 0) return a ? "M ".concat(h.x, ",").concat(h.y, "\n        a").concat(i, ",").concat(i, ",0,0,1,").concat(2 * i, ",0\n        a").concat(i, ",").concat(i, ",0,0,1,").concat(2 * -i, ",0\n      ") : EO({
                cx: e,
                cy: r,
                innerRadius: n,
                outerRadius: o,
                startAngle: u,
                endAngle: l
            });
            var w = "M ".concat(h.x, ",").concat(h.y, "\n    A").concat(i, ",").concat(i, ",0,0,").concat(+(s < 0), ",").concat(p.x, ",").concat(p.y, "\n    A").concat(o, ",").concat(o, ",0,").concat(+(g > 180), ",").concat(+(s < 0), ",").concat(v.x, ",").concat(v.y, "\n    A").concat(i, ",").concat(i, ",0,0,").concat(+(s < 0), ",").concat(m.x, ",").concat(m.y, "\n  ");
            if (n > 0) {
                var O = PO({
                        cx: e,
                        cy: r,
                        radius: n,
                        angle: u,
                        sign: s,
                        isExternal: !0,
                        cornerRadius: i,
                        cornerIsExternal: c
                    }),
                    x = O.circleTangency,
                    j = O.lineTangency,
                    S = O.theta,
                    A = PO({
                        cx: e,
                        cy: r,
                        radius: n,
                        angle: l,
                        sign: -s,
                        isExternal: !0,
                        cornerRadius: i,
                        cornerIsExternal: c
                    }),
                    P = A.circleTangency,
                    E = A.lineTangency,
                    k = A.theta,
                    T = c ? Math.abs(u - l) : Math.abs(u - l) - S - k;
                if (T < 0 && 0 === i) return "".concat(w, "L").concat(e, ",").concat(r, "Z");
                w += "L".concat(E.x, ",").concat(E.y, "\n      A").concat(i, ",").concat(i, ",0,0,").concat(+(s < 0), ",").concat(P.x, ",").concat(P.y, "\n      A").concat(n, ",").concat(n, ",0,").concat(+(T > 180), ",").concat(+(s > 0), ",").concat(x.x, ",").concat(x.y, "\n      A").concat(i, ",").concat(i, ",0,0,").concat(+(s < 0), ",").concat(j.x, ",").concat(j.y, "Z")
            } else w += "L".concat(e, ",").concat(r, "Z");
            return w
        }({
            cx: r,
            cy: o,
            innerRadius: i,
            outerRadius: a,
            cornerRadius: Math.min(v, d / 2),
            forceCornerRadius: u,
            cornerIsExternal: l,
            startAngle: s,
            endAngle: f
        }) : EO({
            cx: r,
            cy: o,
            innerRadius: i,
            outerRadius: a,
            startAngle: s,
            endAngle: f
        }), n.createElement("path", xO({}, au(e, !0), {
            className: y,
            d: h,
            role: "img"
        }))
    };

function MO(t) {
    return (MO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function _O() {
    return _O = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, _O.apply(this, arguments)
}

function CO(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function DO(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? CO(Object(r), !0).forEach((function(e) {
            IO(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : CO(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function IO(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != MO(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != MO(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == MO(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
var NO = {
        curveBasisClosed: function(t) {
            return new _l(t)
        },
        curveBasisOpen: function(t) {
            return new Cl(t)
        },
        curveBasis: function(t) {
            return new Ml(t)
        },
        curveBumpX: function(t) {
            return new sl(t, !0)
        },
        curveBumpY: function(t) {
            return new sl(t, !1)
        },
        curveLinearClosed: function(t) {
            return new Dl(t)
        },
        curveLinear: il,
        curveMonotoneX: function(t) {
            return new Ll(t)
        },
        curveMonotoneY: function(t) {
            return new zl(t)
        },
        curveNatural: function(t) {
            return new Ul(t)
        },
        curveStep: function(t) {
            return new $l(t, .5)
        },
        curveStepAfter: function(t) {
            return new $l(t, 1)
        },
        curveStepBefore: function(t) {
            return new $l(t, 0)
        }
    },
    RO = function(t) {
        return t.x === +t.x && t.y === +t.y
    },
    BO = function(t) {
        return t.x
    },
    LO = function(t) {
        return t.y
    },
    zO = function(t) {
        var e, r = t.type,
            n = void 0 === r ? "linear" : r,
            o = t.points,
            i = void 0 === o ? [] : o,
            a = t.baseLine,
            c = t.layout,
            u = t.connectNulls,
            l = void 0 !== u && u,
            s = function(t, e) {
                if (A(t)) return t;
                var r = "curve".concat($u(t));
                return "curveMonotone" !== r && "curveBump" !== r || !e ? NO[r] || il : NO["".concat(r).concat("vertical" === e ? "Y" : "X")]
            }(n, c),
            f = l ? i.filter((function(t) {
                return RO(t)
            })) : i;
        if (Array.isArray(a)) {
            var p = l ? a.filter((function(t) {
                    return RO(t)
                })) : a,
                h = f.map((function(t, e) {
                    return DO(DO({}, t), {}, {
                        base: p[e]
                    })
                }));
            return (e = "vertical" === c ? ll().y(LO).x1(BO).x0((function(t) {
                return t.base.x
            })) : ll().x(BO).y1(LO).y0((function(t) {
                return t.base.y
            }))).defined(RO).curve(s), e(h)
        }
        return (e = "vertical" === c && Ec(a) ? ll().y(LO).x1(BO).x0(a) : Ec(a) ? ll().x(BO).y1(LO).y0(a) : ul().x(BO).y(LO)).defined(RO).curve(s), e(f)
    },
    FO = function(t) {
        var e = t.className,
            r = t.points,
            o = t.path,
            i = t.pathRef;
        if (!(r && r.length || o)) return null;
        var a = r && r.length ? zO(t) : o;
        return n.createElement("path", _O({}, au(t, !1), Wc(t), {
            className: hc("recharts-curve", e),
            d: a,
            ref: i
        }))
    },
    UO = Object.getOwnPropertyNames,
    WO = Object.getOwnPropertySymbols,
    $O = Object.prototype.hasOwnProperty;

function KO(t, e) {
    return function(r, n, o) {
        return t(r, n, o) && e(r, n, o)
    }
}

function qO(t) {
    return function(e, r, n) {
        if (!e || !r || "object" != typeof e || "object" != typeof r) return t(e, r, n);
        var o = n.cache,
            i = o.get(e),
            a = o.get(r);
        if (i && a) return i === r && a === e;
        o.set(e, r), o.set(r, e);
        var c = t(e, r, n);
        return o.delete(e), o.delete(r), c
    }
}

function VO(t) {
    return UO(t).concat(WO(t))
}
var XO = Object.hasOwn || function(t, e) {
    return $O.call(t, e)
};

function HO(t, e) {
    return t === e || !t && !e && t != t && e != e
}
var GO = "__v",
    YO = "__o",
    ZO = "_owner",
    JO = Object.getOwnPropertyDescriptor,
    QO = Object.keys;

function tx(t, e, r) {
    var n = t.length;
    if (e.length !== n) return !1;
    for (; n-- > 0;)
        if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
    return !0
}

function ex(t, e) {
    return HO(t.getTime(), e.getTime())
}

function rx(t, e) {
    return t.name === e.name && t.message === e.message && t.cause === e.cause && t.stack === e.stack
}

function nx(t, e) {
    return t === e
}

function ox(t, e, r) {
    var n = t.size;
    if (n !== e.size) return !1;
    if (!n) return !0;
    for (var o, i, a = new Array(n), c = t.entries(), u = 0;
        (o = c.next()) && !o.done;) {
        for (var l = e.entries(), s = !1, f = 0;
            (i = l.next()) && !i.done;)
            if (a[f]) f++;
            else {
                var p = o.value,
                    h = i.value;
                if (r.equals(p[0], h[0], u, f, t, e, r) && r.equals(p[1], h[1], p[0], h[0], t, e, r)) {
                    s = a[f] = !0;
                    break
                }
                f++
            }
        if (!s) return !1;
        u++
    }
    return !0
}
var ix = HO;

function ax(t, e, r) {
    var n = QO(t),
        o = n.length;
    if (QO(e).length !== o) return !1;
    for (; o-- > 0;)
        if (!hx(t, e, r, n[o])) return !1;
    return !0
}

function cx(t, e, r) {
    var n, o, i, a = VO(t),
        c = a.length;
    if (VO(e).length !== c) return !1;
    for (; c-- > 0;) {
        if (!hx(t, e, r, n = a[c])) return !1;
        if (o = JO(t, n), i = JO(e, n), (o || i) && (!o || !i || o.configurable !== i.configurable || o.enumerable !== i.enumerable || o.writable !== i.writable)) return !1
    }
    return !0
}

function ux(t, e) {
    return HO(t.valueOf(), e.valueOf())
}

function lx(t, e) {
    return t.source === e.source && t.flags === e.flags
}

function sx(t, e, r) {
    var n = t.size;
    if (n !== e.size) return !1;
    if (!n) return !0;
    for (var o, i, a = new Array(n), c = t.values();
        (o = c.next()) && !o.done;) {
        for (var u = e.values(), l = !1, s = 0;
            (i = u.next()) && !i.done;) {
            if (!a[s] && r.equals(o.value, i.value, o.value, i.value, t, e, r)) {
                l = a[s] = !0;
                break
            }
            s++
        }
        if (!l) return !1
    }
    return !0
}

function fx(t, e) {
    var r = t.length;
    if (e.length !== r) return !1;
    for (; r-- > 0;)
        if (t[r] !== e[r]) return !1;
    return !0
}

function px(t, e) {
    return t.hostname === e.hostname && t.pathname === e.pathname && t.protocol === e.protocol && t.port === e.port && t.hash === e.hash && t.username === e.username && t.password === e.password
}

function hx(t, e, r, n) {
    return !(n !== ZO && n !== YO && n !== GO || !t.$$typeof && !e.$$typeof) || XO(e, n) && r.equals(t[n], e[n], n, n, t, e, r)
}
var yx = "[object Arguments]",
    dx = "[object Boolean]",
    vx = "[object Date]",
    mx = "[object Error]",
    bx = "[object Map]",
    gx = "[object Number]",
    wx = "[object Object]",
    Ox = "[object RegExp]",
    xx = "[object Set]",
    jx = "[object String]",
    Sx = "[object URL]",
    Ax = Array.isArray,
    Px = "function" == typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView : null,
    Ex = Object.assign,
    kx = Object.prototype.toString.call.bind(Object.prototype.toString);
var Tx = Mx();

function Mx(t) {
    void 0 === t && (t = {});
    var e, r = t.circular,
        n = void 0 !== r && r,
        o = t.createInternalComparator,
        i = t.createState,
        a = t.strict,
        c = void 0 !== a && a,
        u = function(t) {
            var e = t.circular,
                r = t.createCustomConfig,
                n = t.strict,
                o = {
                    areArraysEqual: n ? cx : tx,
                    areDatesEqual: ex,
                    areErrorsEqual: rx,
                    areFunctionsEqual: nx,
                    areMapsEqual: n ? KO(ox, cx) : ox,
                    areNumbersEqual: ix,
                    areObjectsEqual: n ? cx : ax,
                    arePrimitiveWrappersEqual: ux,
                    areRegExpsEqual: lx,
                    areSetsEqual: n ? KO(sx, cx) : sx,
                    areTypedArraysEqual: n ? cx : fx,
                    areUrlsEqual: px
                };
            if (r && (o = Ex({}, o, r(o))), e) {
                var i = qO(o.areArraysEqual),
                    a = qO(o.areMapsEqual),
                    c = qO(o.areObjectsEqual),
                    u = qO(o.areSetsEqual);
                o = Ex({}, o, {
                    areArraysEqual: i,
                    areMapsEqual: a,
                    areObjectsEqual: c,
                    areSetsEqual: u
                })
            }
            return o
        }(t),
        l = function(t) {
            var e = t.areArraysEqual,
                r = t.areDatesEqual,
                n = t.areErrorsEqual,
                o = t.areFunctionsEqual,
                i = t.areMapsEqual,
                a = t.areNumbersEqual,
                c = t.areObjectsEqual,
                u = t.arePrimitiveWrappersEqual,
                l = t.areRegExpsEqual,
                s = t.areSetsEqual,
                f = t.areTypedArraysEqual,
                p = t.areUrlsEqual;
            return function(t, h, y) {
                if (t === h) return !0;
                if (null == t || null == h) return !1;
                var d = typeof t;
                if (d !== typeof h) return !1;
                if ("object" !== d) return "number" === d ? a(t, h, y) : "function" === d && o(t, h, y);
                var v = t.constructor;
                if (v !== h.constructor) return !1;
                if (v === Object) return c(t, h, y);
                if (Ax(t)) return e(t, h, y);
                if (null != Px && Px(t)) return f(t, h, y);
                if (v === Date) return r(t, h, y);
                if (v === RegExp) return l(t, h, y);
                if (v === Map) return i(t, h, y);
                if (v === Set) return s(t, h, y);
                var m = kx(t);
                return m === vx ? r(t, h, y) : m === Ox ? l(t, h, y) : m === bx ? i(t, h, y) : m === xx ? s(t, h, y) : m === wx ? "function" != typeof t.then && "function" != typeof h.then && c(t, h, y) : m === Sx ? p(t, h, y) : m === mx ? n(t, h, y) : m === yx ? c(t, h, y) : (m === dx || m === gx || m === jx) && u(t, h, y)
            }
        }(u);
    return function(t) {
        var e = t.circular,
            r = t.comparator,
            n = t.createState,
            o = t.equals,
            i = t.strict;
        if (n) return function(t, a) {
            var c = n(),
                u = c.cache,
                l = void 0 === u ? e ? new WeakMap : void 0 : u,
                s = c.meta;
            return r(t, a, {
                cache: l,
                equals: o,
                meta: s,
                strict: i
            })
        };
        if (e) return function(t, e) {
            return r(t, e, {
                cache: new WeakMap,
                equals: o,
                meta: void 0,
                strict: i
            })
        };
        var a = {
            cache: void 0,
            equals: o,
            meta: void 0,
            strict: i
        };
        return function(t, e) {
            return r(t, e, a)
        }
    }({
        circular: n,
        comparator: l,
        createState: i,
        equals: o ? o(l) : (e = l, function(t, r, n, o, i, a, c) {
            return e(t, r, c)
        }),
        strict: c
    })
}

function _x(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = -1;
    requestAnimationFrame((function n(o) {
        r < 0 && (r = o), o - r > e ? (t(o), r = -1) : function(t) {
            "undefined" != typeof requestAnimationFrame && requestAnimationFrame(t)
        }(n)
    }))
}

function Cx(t) {
    return (Cx = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Dx(t) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Ix(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ix(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Ix(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function Nx() {
    var t = function() {
            return null
        },
        e = !1,
        r = function r(n) {
            if (!e) {
                if (Array.isArray(n)) {
                    if (!n.length) return;
                    var o = Dx(n),
                        i = o[0],
                        a = o.slice(1);
                    return "number" == typeof i ? void _x(r.bind(null, a), i) : (r(i), void _x(r.bind(null, a)))
                }
                "object" === Cx(n) && t(n), "function" == typeof n && n()
            }
        };
    return {
        stop: function() {
            e = !0
        },
        start: function(t) {
            e = !1, r(t)
        },
        subscribe: function(e) {
            return t = e,
                function() {
                    t = function() {
                        return null
                    }
                }
        }
    }
}

function Rx(t) {
    return (Rx = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Bx(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Lx(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Bx(Object(r), !0).forEach((function(e) {
            zx(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Bx(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function zx(t, e, r) {
    return (e = function(t) {
        var e = function(t, e) {
            if ("object" !== Rx(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== Rx(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" === Rx(e) ? e : String(e)
    }(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
Mx({
    strict: !0
}), Mx({
    circular: !0
}), Mx({
    circular: !0,
    strict: !0
}), Mx({
    createInternalComparator: function() {
        return HO
    }
}), Mx({
    strict: !0,
    createInternalComparator: function() {
        return HO
    }
}), Mx({
    circular: !0,
    createInternalComparator: function() {
        return HO
    }
}), Mx({
    circular: !0,
    createInternalComparator: function() {
        return HO
    },
    strict: !0
});
var Fx = function(t) {
        return t
    },
    Ux = function(t, e) {
        return Object.keys(e).reduce((function(r, n) {
            return Lx(Lx({}, r), {}, zx({}, n, t(n, e[n])))
        }), {})
    },
    Wx = function(t, e, r) {
        return t.map((function(t) {
            return "".concat((n = t, n.replace(/([A-Z])/g, (function(t) {
                return "-".concat(t.toLowerCase())
            }))), " ").concat(e, "ms ").concat(r);
            var n
        })).join(",")
    };

function $x(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || qx(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Kx(t) {
    return function(t) {
        if (Array.isArray(t)) return Vx(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || qx(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function qx(t, e) {
    if (t) {
        if ("string" == typeof t) return Vx(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Vx(t, e) : void 0
    }
}

function Vx(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
var Xx = 1e-4,
    Hx = function(t, e) {
        return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1]
    },
    Gx = function(t, e) {
        return t.map((function(t, r) {
            return t * Math.pow(e, r)
        })).reduce((function(t, e) {
            return t + e
        }))
    },
    Yx = function(t, e) {
        return function(r) {
            var n = Hx(t, e);
            return Gx(n, r)
        }
    },
    Zx = function() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        var n = e[0],
            o = e[1],
            i = e[2],
            a = e[3];
        if (1 === e.length) switch (e[0]) {
            case "linear":
                n = 0, o = 0, i = 1, a = 1;
                break;
            case "ease":
                n = .25, o = .1, i = .25, a = 1;
                break;
            case "ease-in":
                n = .42, o = 0, i = 1, a = 1;
                break;
            case "ease-out":
                n = .42, o = 0, i = .58, a = 1;
                break;
            case "ease-in-out":
                n = 0, o = 0, i = .58, a = 1;
                break;
            default:
                var c = e[0].split("(");
                if ("cubic-bezier" === c[0] && 4 === c[1].split(")")[0].split(",").length) {
                    var u = $x(c[1].split(")")[0].split(",").map((function(t) {
                        return parseFloat(t)
                    })), 4);
                    n = u[0], o = u[1], i = u[2], a = u[3]
                }
        }
        var l, s, f = Yx(n, i),
            p = Yx(o, a),
            h = (l = n, s = i, function(t) {
                var e = Hx(l, s),
                    r = [].concat(Kx(e.map((function(t, e) {
                        return t * e
                    })).slice(1)), [0]);
                return Gx(r, t)
            }),
            y = function(t) {
                for (var e, r = t > 1 ? 1 : t, n = r, o = 0; o < 8; ++o) {
                    var i = f(n) - r,
                        a = h(n);
                    if (Math.abs(i - r) < Xx || a < Xx) return p(n);
                    n = (e = n - i / a) > 1 ? 1 : e < 0 ? 0 : e
                }
                return p(n)
            };
        return y.isStepper = !1, y
    },
    Jx = function() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        var n = e[0];
        if ("string" == typeof n) switch (n) {
            case "ease":
            case "ease-in-out":
            case "ease-out":
            case "ease-in":
            case "linear":
                return Zx(n);
            case "spring":
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.stiff,
                        r = void 0 === e ? 100 : e,
                        n = t.damping,
                        o = void 0 === n ? 8 : n,
                        i = t.dt,
                        a = void 0 === i ? 17 : i,
                        c = function(t, e, n) {
                            var i = n + (-(t - e) * r - n * o) * a / 1e3,
                                c = n * a / 1e3 + t;
                            return Math.abs(c - e) < Xx && Math.abs(i) < Xx ? [e, 0] : [c, i]
                        };
                    return c.isStepper = !0, c.dt = a, c
                }();
            default:
                if ("cubic-bezier" === n.split("(")[0]) return Zx(n)
        }
        return "function" == typeof n ? n : null
    };

function Qx(t) {
    return (Qx = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function tj(t) {
    return function(t) {
        if (Array.isArray(t)) return aj(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || ij(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function ej(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function rj(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ej(Object(r), !0).forEach((function(e) {
            nj(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ej(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function nj(t, e, r) {
    return (e = function(t) {
        var e = function(t, e) {
            if ("object" !== Qx(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" !== Qx(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" === Qx(e) ? e : String(e)
    }(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function oj(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || ij(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function ij(t, e) {
    if (t) {
        if ("string" == typeof t) return aj(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? aj(t, e) : void 0
    }
}

function aj(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
var cj = function(t, e, r) {
        return t + (e - t) * r
    },
    uj = function(t) {
        return t.from !== t.to
    },
    lj = function t(e, r, n) {
        var o = Ux((function(t, r) {
            if (uj(r)) {
                var n = oj(e(r.from, r.to, r.velocity), 2),
                    o = n[0],
                    i = n[1];
                return rj(rj({}, r), {}, {
                    from: o,
                    velocity: i
                })
            }
            return r
        }), r);
        return n < 1 ? Ux((function(t, e) {
            return uj(e) ? rj(rj({}, e), {}, {
                velocity: cj(e.velocity, o[t].velocity, n),
                from: cj(e.from, o[t].from, n)
            }) : e
        }), r) : t(e, o, n - 1)
    };
const sj = function(t, e, r, n, o) {
    var i, a, c, u, l = (i = t, a = e, [Object.keys(i), Object.keys(a)].reduce((function(t, e) {
            return t.filter((function(t) {
                return e.includes(t)
            }))
        }))),
        s = l.reduce((function(r, n) {
            return rj(rj({}, r), {}, nj({}, n, [t[n], e[n]]))
        }), {}),
        f = l.reduce((function(r, n) {
            return rj(rj({}, r), {}, nj({}, n, {
                from: t[n],
                velocity: 0,
                to: e[n]
            }))
        }), {}),
        p = -1,
        h = function() {
            return null
        };
    return h = r.isStepper ? function(n) {
            c || (c = n);
            var i = (n - c) / r.dt;
            f = lj(r, f, i), o(rj(rj(rj({}, t), e), Ux((function(t, e) {
                return e.from
            }), f))), c = n, Object.values(f).filter(uj).length && (p = requestAnimationFrame(h))
        } : function(i) {
            u || (u = i);
            var a = (i - u) / n,
                c = Ux((function(t, e) {
                    return cj.apply(void 0, tj(e).concat([r(a)]))
                }), s);
            if (o(rj(rj(rj({}, t), e), c)), a < 1) p = requestAnimationFrame(h);
            else {
                var l = Ux((function(t, e) {
                    return cj.apply(void 0, tj(e).concat([r(1)]))
                }), s);
                o(rj(rj(rj({}, t), e), l))
            }
        },
        function() {
            return requestAnimationFrame(h),
                function() {
                    cancelAnimationFrame(p)
                }
        }
};

function fj(t) {
    return (fj = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
var pj = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

function hj(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
            i = Object.keys(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
        return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function yj(t) {
    return function(t) {
        if (Array.isArray(t)) return dj(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return dj(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dj(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function dj(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function vj(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function mj(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? vj(Object(r), !0).forEach((function(e) {
            bj(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : vj(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function bj(t, e, r) {
    return (e = wj(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function gj(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, wj(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function wj(t) {
    var e = function(t, e) {
        if ("object" !== fj(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== fj(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" === fj(e) ? e : String(e)
}

function Oj(t, e) {
    return (Oj = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function xj(t) {
    var e = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (t) {
            return !1
        }
    }();
    return function() {
        var r, n = Aj(t);
        if (e) {
            var o = Aj(this).constructor;
            r = Reflect.construct(n, arguments, o)
        } else r = n.apply(this, arguments);
        return jj(this, r)
    }
}

function jj(t, e) {
    if (e && ("object" === fj(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return Sj(t)
}

function Sj(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function Aj(t) {
    return (Aj = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}
var Pj = function() {
    ! function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && Oj(t, e)
    }(e, r.PureComponent);
    var t = xj(e);

    function e(r, n) {
        var o;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var i = (o = t.call(this, r, n)).props,
            a = i.isActive,
            c = i.attributeName,
            u = i.from,
            l = i.to,
            s = i.steps,
            f = i.children,
            p = i.duration;
        if (o.handleStyleChange = o.handleStyleChange.bind(Sj(o)), o.changeStyle = o.changeStyle.bind(Sj(o)), !a || p <= 0) return o.state = {
            style: {}
        }, "function" == typeof f && (o.state = {
            style: l
        }), jj(o);
        if (s && s.length) o.state = {
            style: s[0].style
        };
        else if (u) {
            if ("function" == typeof f) return o.state = {
                style: u
            }, jj(o);
            o.state = {
                style: c ? bj({}, c, u) : u
            }
        } else o.state = {
            style: {}
        };
        return o
    }
    return gj(e, [{
        key: "componentDidMount",
        value: function() {
            var t = this.props,
                e = t.isActive,
                r = t.canBegin;
            this.mounted = !0, e && r && this.runAnimation(this.props)
        }
    }, {
        key: "componentDidUpdate",
        value: function(t) {
            var e = this.props,
                r = e.isActive,
                n = e.canBegin,
                o = e.attributeName,
                i = e.shouldReAnimate,
                a = e.to,
                c = e.from,
                u = this.state.style;
            if (n)
                if (r) {
                    if (!(Tx(t.to, a) && t.canBegin && t.isActive)) {
                        var l = !t.canBegin || !t.isActive;
                        this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                        var s = l || i ? c : t.to;
                        if (this.state && u) {
                            var f = {
                                style: o ? bj({}, o, s) : s
                            };
                            (o && u[o] !== s || !o && u !== s) && this.setState(f)
                        }
                        this.runAnimation(mj(mj({}, this.props), {}, {
                            from: s,
                            begin: 0
                        }))
                    }
                } else {
                    var p = {
                        style: o ? bj({}, o, a) : a
                    };
                    this.state && u && (o && u[o] !== a || !o && u !== a) && this.setState(p)
                }
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.mounted = !1;
            var t = this.props.onAnimationEnd;
            this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), t && t()
        }
    }, {
        key: "handleStyleChange",
        value: function(t) {
            this.changeStyle(t)
        }
    }, {
        key: "changeStyle",
        value: function(t) {
            this.mounted && this.setState({
                style: t
            })
        }
    }, {
        key: "runJSAnimation",
        value: function(t) {
            var e = this,
                r = t.from,
                n = t.to,
                o = t.duration,
                i = t.easing,
                a = t.begin,
                c = t.onAnimationEnd,
                u = t.onAnimationStart,
                l = sj(r, n, Jx(i), o, this.changeStyle);
            this.manager.start([u, a, function() {
                e.stopJSAnimation = l()
            }, o, c])
        }
    }, {
        key: "runStepAnimation",
        value: function(t) {
            var e = this,
                r = t.steps,
                n = t.begin,
                o = t.onAnimationStart,
                i = r[0],
                a = i.style,
                c = i.duration,
                u = void 0 === c ? 0 : c;
            return this.manager.start([o].concat(yj(r.reduce((function(t, n, o) {
                if (0 === o) return t;
                var i = n.duration,
                    a = n.easing,
                    c = void 0 === a ? "ease" : a,
                    u = n.style,
                    l = n.properties,
                    s = n.onAnimationEnd,
                    f = o > 0 ? r[o - 1] : n,
                    p = l || Object.keys(u);
                if ("function" == typeof c || "spring" === c) return [].concat(yj(t), [e.runJSAnimation.bind(e, {
                    from: f.style,
                    to: u,
                    duration: i,
                    easing: c
                }), i]);
                var h = Wx(p, i, c),
                    y = mj(mj(mj({}, f.style), u), {}, {
                        transition: h
                    });
                return [].concat(yj(t), [y, i, s]).filter(Fx)
            }), [a, Math.max(u, n)])), [t.onAnimationEnd]))
        }
    }, {
        key: "runAnimation",
        value: function(t) {
            this.manager || (this.manager = Nx());
            var e = t.begin,
                r = t.duration,
                n = t.attributeName,
                o = t.to,
                i = t.easing,
                a = t.onAnimationStart,
                c = t.onAnimationEnd,
                u = t.steps,
                l = t.children,
                s = this.manager;
            if (this.unSubscribe = s.subscribe(this.handleStyleChange), "function" != typeof i && "function" != typeof l && "spring" !== i)
                if (u.length > 1) this.runStepAnimation(t);
                else {
                    var f = n ? bj({}, n, o) : o,
                        p = Wx(Object.keys(f), r, i);
                    s.start([a, e, mj(mj({}, f), {}, {
                        transition: p
                    }), r, c])
                }
            else this.runJSAnimation(t)
        }
    }, {
        key: "render",
        value: function() {
            var t = this.props,
                e = t.children;
            t.begin;
            var o = t.duration;
            t.attributeName, t.easing;
            var i = t.isActive;
            t.steps, t.from, t.to, t.canBegin, t.onAnimationEnd, t.shouldReAnimate, t.onAnimationReStart;
            var a = hj(t, pj),
                c = r.Children.count(e),
                u = this.state.style;
            if ("function" == typeof e) return e(u);
            if (!i || 0 === c || o <= 0) return e;
            var l = function(t) {
                var e = t.props,
                    n = e.style,
                    o = void 0 === n ? {} : n,
                    i = e.className;
                return r.cloneElement(t, mj(mj({}, a), {}, {
                    style: mj(mj({}, o), u),
                    className: i
                }))
            };
            return 1 === c ? l(r.Children.only(e)) : n.createElement("div", null, r.Children.map(e, (function(t) {
                return l(t)
            })))
        }
    }]), e
}();

function Ej(t) {
    return (Ej = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function kj() {
    return kj = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, kj.apply(this, arguments)
}

function Tj(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Mj(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mj(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Mj(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function _j(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Cj(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? _j(Object(r), !0).forEach((function(e) {
            Dj(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _j(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Dj(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != Ej(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Ej(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == Ej(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
Pj.displayName = "Animate", Pj.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function() {},
    onAnimationStart: function() {}
}, Pj.propTypes = {
    from: y.oneOfType([y.object, y.string]),
    to: y.oneOfType([y.object, y.string]),
    attributeName: y.string,
    duration: y.number,
    begin: y.number,
    easing: y.oneOfType([y.string, y.func]),
    steps: y.arrayOf(y.shape({
        duration: y.number.isRequired,
        style: y.object.isRequired,
        easing: y.oneOfType([y.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), y.func]),
        properties: y.arrayOf("string"),
        onAnimationEnd: y.func
    })),
    children: y.oneOfType([y.node, y.func]),
    isActive: y.bool,
    canBegin: y.bool,
    onAnimationEnd: y.func,
    shouldReAnimate: y.bool,
    onAnimationStart: y.func,
    onAnimationReStart: y.func
};
var Ij = function(t, e, r, n, o) {
        var i, a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
            c = n >= 0 ? 1 : -1,
            u = r >= 0 ? 1 : -1,
            l = n >= 0 && r >= 0 || n < 0 && r < 0 ? 1 : 0;
        if (a > 0 && o instanceof Array) {
            for (var s = [0, 0, 0, 0], f = 0; f < 4; f++) s[f] = o[f] > a ? a : o[f];
            i = "M".concat(t, ",").concat(e + c * s[0]), s[0] > 0 && (i += "A ".concat(s[0], ",").concat(s[0], ",0,0,").concat(l, ",").concat(t + u * s[0], ",").concat(e)), i += "L ".concat(t + r - u * s[1], ",").concat(e), s[1] > 0 && (i += "A ".concat(s[1], ",").concat(s[1], ",0,0,").concat(l, ",\n        ").concat(t + r, ",").concat(e + c * s[1])), i += "L ".concat(t + r, ",").concat(e + n - c * s[2]), s[2] > 0 && (i += "A ".concat(s[2], ",").concat(s[2], ",0,0,").concat(l, ",\n        ").concat(t + r - u * s[2], ",").concat(e + n)), i += "L ".concat(t + u * s[3], ",").concat(e + n), s[3] > 0 && (i += "A ".concat(s[3], ",").concat(s[3], ",0,0,").concat(l, ",\n        ").concat(t, ",").concat(e + n - c * s[3])), i += "Z"
        } else if (a > 0 && o === +o && o > 0) {
            var p = Math.min(a, o);
            i = "M ".concat(t, ",").concat(e + c * p, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t + u * p, ",").concat(e, "\n            L ").concat(t + r - u * p, ",").concat(e, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t + r, ",").concat(e + c * p, "\n            L ").concat(t + r, ",").concat(e + n - c * p, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t + r - u * p, ",").concat(e + n, "\n            L ").concat(t + u * p, ",").concat(e + n, "\n            A ").concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t, ",").concat(e + n - c * p, " Z")
        } else i = "M ".concat(t, ",").concat(e, " h ").concat(r, " v ").concat(n, " h ").concat(-r, " Z");
        return i
    },
    Nj = function(t, e) {
        if (!t || !e) return !1;
        var r = t.x,
            n = t.y,
            o = e.x,
            i = e.y,
            a = e.width,
            c = e.height;
        if (Math.abs(a) > 0 && Math.abs(c) > 0) {
            var u = Math.min(o, o + a),
                l = Math.max(o, o + a),
                s = Math.min(i, i + c),
                f = Math.max(i, i + c);
            return r >= u && r <= l && n >= s && n <= f
        }
        return !1
    },
    Rj = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
    },
    Bj = function(t) {
        var e = Cj(Cj({}, Rj), t),
            o = r.useRef(),
            i = Tj(r.useState(-1), 2),
            a = i[0],
            c = i[1];
        r.useEffect((function() {
            if (o.current && o.current.getTotalLength) try {
                var t = o.current.getTotalLength();
                t && c(t)
            } catch (e) {}
        }), []);
        var u = e.x,
            l = e.y,
            s = e.width,
            f = e.height,
            p = e.radius,
            h = e.className,
            y = e.animationEasing,
            d = e.animationDuration,
            v = e.animationBegin,
            m = e.isAnimationActive,
            b = e.isUpdateAnimationActive;
        if (u !== +u || l !== +l || s !== +s || f !== +f || 0 === s || 0 === f) return null;
        var g = hc("recharts-rectangle", h);
        return b ? n.createElement(Pj, {
            canBegin: a > 0,
            from: {
                width: s,
                height: f,
                x: u,
                y: l
            },
            to: {
                width: s,
                height: f,
                x: u,
                y: l
            },
            duration: d,
            animationEasing: y,
            isActive: b
        }, (function(t) {
            var r = t.width,
                i = t.height,
                c = t.x,
                u = t.y;
            return n.createElement(Pj, {
                canBegin: a > 0,
                from: "0px ".concat(-1 === a ? 1 : a, "px"),
                to: "".concat(a, "px 0px"),
                attributeName: "strokeDasharray",
                begin: v,
                duration: d,
                isActive: m,
                easing: y
            }, n.createElement("path", kj({}, au(e, !0), {
                className: g,
                d: Ij(c, u, r, i, p),
                ref: o
            })))
        })) : n.createElement("path", kj({}, au(e, !0), {
            className: g,
            d: Ij(u, l, s, f, p)
        }))
    },
    Lj = ["points", "className", "baseLinePoints", "connectNulls"];

function zj() {
    return zj = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, zj.apply(this, arguments)
}

function Fj(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function Uj(t) {
    return function(t) {
        if (Array.isArray(t)) return Wj(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Wj(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wj(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Wj(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
var $j = function(t) {
        return t && t.x === +t.x && t.y === +t.y
    },
    Kj = function(t, e) {
        var r = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                e = [
                    []
                ];
            return t.forEach((function(t) {
                $j(t) ? e[e.length - 1].push(t) : e[e.length - 1].length > 0 && e.push([])
            })), $j(t[0]) && e[e.length - 1].push(t[0]), e[e.length - 1].length <= 0 && (e = e.slice(0, -1)), e
        }(t);
        e && (r = [r.reduce((function(t, e) {
            return [].concat(Uj(t), Uj(e))
        }), [])]);
        var n = r.map((function(t) {
            return t.reduce((function(t, e, r) {
                return "".concat(t).concat(0 === r ? "M" : "L").concat(e.x, ",").concat(e.y)
            }), "")
        })).join("");
        return 1 === r.length ? "".concat(n, "Z") : n
    },
    qj = function(t) {
        var e = t.points,
            r = t.className,
            o = t.baseLinePoints,
            i = t.connectNulls,
            a = Fj(t, Lj);
        if (!e || !e.length) return null;
        var c = hc("recharts-polygon", r);
        if (o && o.length) {
            var u = a.stroke && "none" !== a.stroke,
                l = function(t, e, r) {
                    var n = Kj(t, r);
                    return "".concat("Z" === n.slice(-1) ? n.slice(0, -1) : n, "L").concat(Kj(e.reverse(), r).slice(1))
                }(e, o, i);
            return n.createElement("g", {
                className: c
            }, n.createElement("path", zj({}, au(a, !0), {
                fill: "Z" === l.slice(-1) ? a.fill : "none",
                stroke: "none",
                d: l
            })), u ? n.createElement("path", zj({}, au(a, !0), {
                fill: "none",
                d: Kj(e, i)
            })) : null, u ? n.createElement("path", zj({}, au(a, !0), {
                fill: "none",
                d: Kj(o, i)
            })) : null)
        }
        var s = Kj(e, i);
        return n.createElement("path", zj({}, au(a, !0), {
            fill: "Z" === s.slice(-1) ? a.fill : "none",
            className: c,
            d: s
        }))
    };

function Vj() {
    return Vj = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, Vj.apply(this, arguments)
}
var Xj = function(t) {
    var e = t.cx,
        r = t.cy,
        o = t.r,
        i = hc("recharts-dot", t.className);
    return e === +e && r === +r && o === +o ? n.createElement("circle", Vj({}, au(t, !1), Wc(t), {
        className: i,
        cx: e,
        cy: r,
        r: o
    })) : null
};

function Hj(t) {
    return (Hj = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}
var Gj = ["x", "y", "top", "left", "width", "height", "className"];

function Yj() {
    return Yj = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, Yj.apply(this, arguments)
}

function Zj(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Jj(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != Hj(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Hj(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == Hj(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Qj(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}
var tS = function(t, e, r, n, o, i) {
        return "M".concat(t, ",").concat(o, "v").concat(n, "M").concat(i, ",").concat(e, "h").concat(r)
    },
    eS = function(t) {
        var e = t.x,
            r = void 0 === e ? 0 : e,
            o = t.y,
            i = void 0 === o ? 0 : o,
            a = t.top,
            c = void 0 === a ? 0 : a,
            u = t.left,
            l = void 0 === u ? 0 : u,
            s = t.width,
            f = void 0 === s ? 0 : s,
            p = t.height,
            h = void 0 === p ? 0 : p,
            y = t.className,
            d = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Zj(Object(r), !0).forEach((function(e) {
                        Jj(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Zj(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }({
                x: r,
                y: i,
                top: c,
                left: l,
                width: f,
                height: h
            }, Qj(t, Gj));
        return Ec(r) && Ec(i) && Ec(f) && Ec(h) && Ec(c) && Ec(l) ? n.createElement("path", Yj({}, au(d, !0), {
            className: hc("recharts-cross", y),
            d: tS(r, i, f, h, c, l)
        })) : null
    },
    rS = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];

function nS(t) {
    return (nS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function oS(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function iS() {
    return iS = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, iS.apply(this, arguments)
}

function aS(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function cS(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? aS(Object(r), !0).forEach((function(e) {
            uS(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : aS(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function uS(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != nS(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != nS(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == nS(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
var lS = function(t, e, r, n) {
        var o = "";
        return n.forEach((function(n, i) {
            var a = Rw(e, r, t, n);
            o += i ? "L ".concat(a.x, ",").concat(a.y) : "M ".concat(a.x, ",").concat(a.y)
        })), o += "Z"
    },
    sS = function(t) {
        var e = t.cx,
            r = t.cy,
            o = t.innerRadius,
            i = t.outerRadius,
            a = t.polarAngles,
            c = t.radialLines;
        if (!a || !a.length || !c) return null;
        var u = cS({
            stroke: "#ccc"
        }, au(t, !1));
        return n.createElement("g", {
            className: "recharts-polar-grid-angle"
        }, a.map((function(t) {
            var a = Rw(e, r, o, t),
                c = Rw(e, r, i, t);
            return n.createElement("line", iS({}, u, {
                key: "line-".concat(t),
                x1: a.x,
                y1: a.y,
                x2: c.x,
                y2: c.y
            }))
        })))
    },
    fS = function(t) {
        var e = t.cx,
            r = t.cy,
            o = t.radius,
            i = t.index,
            a = cS(cS({
                stroke: "#ccc"
            }, au(t, !1)), {}, {
                fill: "none"
            });
        return n.createElement("circle", iS({}, a, {
            className: hc("recharts-polar-grid-concentric-circle", t.className),
            key: "circle-".concat(i),
            cx: e,
            cy: r,
            r: o
        }))
    },
    pS = function(t) {
        var e = t.radius,
            r = t.index,
            o = cS(cS({
                stroke: "#ccc"
            }, au(t, !1)), {}, {
                fill: "none"
            });
        return n.createElement("path", iS({}, o, {
            className: hc("recharts-polar-grid-concentric-polygon", t.className),
            key: "path-".concat(r),
            d: lS(e, t.cx, t.cy, t.polarAngles)
        }))
    },
    hS = function(t) {
        var e = t.polarRadius,
            r = t.gridType;
        return e && e.length ? n.createElement("g", {
            className: "recharts-polar-grid-concentric"
        }, e.map((function(e, o) {
            var i = o;
            return "circle" === r ? n.createElement(fS, iS({
                key: i
            }, t, {
                radius: e,
                index: o
            })) : n.createElement(pS, iS({
                key: i
            }, t, {
                radius: e,
                index: o
            }))
        }))) : null
    },
    yS = function(t) {
        var e = t.cx,
            r = void 0 === e ? 0 : e,
            o = t.cy,
            i = void 0 === o ? 0 : o,
            a = t.innerRadius,
            c = void 0 === a ? 0 : a,
            u = t.outerRadius,
            l = void 0 === u ? 0 : u,
            s = t.gridType,
            f = void 0 === s ? "polygon" : s,
            p = t.radialLines,
            h = void 0 === p || p,
            y = oS(t, rS);
        return l <= 0 ? null : n.createElement("g", {
            className: "recharts-polar-grid"
        }, n.createElement(sS, iS({
            cx: r,
            cy: i,
            innerRadius: c,
            outerRadius: l,
            gridType: f,
            radialLines: h
        }, y)), n.createElement(hS, iS({
            cx: r,
            cy: i,
            innerRadius: c,
            outerRadius: l,
            gridType: f,
            radialLines: h
        }, y)))
    };
yS.displayName = "PolarGrid";
var dS = ub,
    vS = lb,
    mS = qs;
const bS = e((function(t, e) {
    return t && t.length ? dS(t, mS(e), vS) : void 0
}));
var gS = ub,
    wS = qs,
    OS = yb;
const xS = e((function(t, e) {
    return t && t.length ? gS(t, wS(e), OS) : void 0
}));
var jS = ["cx", "cy", "angle", "ticks", "axisLine"],
    SS = ["ticks", "tick", "angle", "tickFormatter", "stroke"];

function AS(t) {
    return (AS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function PS() {
    return PS = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, PS.apply(this, arguments)
}

function ES(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function kS(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ES(Object(r), !0).forEach((function(e) {
            NS(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ES(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function TS(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function MS(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, RS(n.key), n)
    }
}

function _S(t, e, r) {
    return e = DS(e),
        function(t, e) {
            if (e && ("object" === AS(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, CS() ? Reflect.construct(e, r || [], DS(t).constructor) : e.apply(t, r))
}

function CS() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (CS = function() {
        return !!t
    })()
}

function DS(t) {
    return (DS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function IS(t, e) {
    return (IS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function NS(t, e, r) {
    return (e = RS(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function RS(t) {
    var e = function(t, e) {
        if ("object" != AS(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != AS(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == AS(e) ? e : e + ""
}
var BS = function() {
    function t() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), _S(this, t, arguments)
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && IS(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "renderTickItem",
        value: function(t, e, r) {
            return n.isValidElement(t) ? n.cloneElement(t, e) : A(t) ? t(e) : n.createElement(Ah, PS({}, e, {
                className: "recharts-polar-radius-axis-tick-value"
            }), r)
        }
    }], (o = [{
        key: "getTickValueCoord",
        value: function(t) {
            var e = t.coordinate,
                r = this.props,
                n = r.angle,
                o = r.cx,
                i = r.cy;
            return Rw(o, i, e, n)
        }
    }, {
        key: "getTickTextAnchor",
        value: function() {
            var t;
            switch (this.props.orientation) {
                case "left":
                    t = "end";
                    break;
                case "right":
                    t = "start";
                    break;
                default:
                    t = "middle"
            }
            return t
        }
    }, {
        key: "getViewBox",
        value: function() {
            var t = this.props,
                e = t.cx,
                r = t.cy,
                n = t.angle,
                o = t.ticks,
                i = bS(o, (function(t) {
                    return t.coordinate || 0
                }));
            return {
                cx: e,
                cy: r,
                startAngle: n,
                endAngle: n,
                innerRadius: xS(o, (function(t) {
                    return t.coordinate || 0
                })).coordinate || 0,
                outerRadius: i.coordinate || 0
            }
        }
    }, {
        key: "renderAxisLine",
        value: function() {
            var t = this.props,
                e = t.cx,
                r = t.cy,
                o = t.angle,
                i = t.ticks,
                a = t.axisLine,
                c = TS(t, jS),
                u = i.reduce((function(t, e) {
                    return [Math.min(t[0], e.coordinate), Math.max(t[1], e.coordinate)]
                }), [1 / 0, -1 / 0]),
                l = Rw(e, r, u[0], o),
                s = Rw(e, r, u[1], o),
                f = kS(kS(kS({}, au(c, !1)), {}, {
                    fill: "none"
                }, au(a, !1)), {}, {
                    x1: l.x,
                    y1: l.y,
                    x2: s.x,
                    y2: s.y
                });
            return n.createElement("line", PS({
                className: "recharts-polar-radius-axis-line"
            }, f))
        }
    }, {
        key: "renderTicks",
        value: function() {
            var e = this,
                r = this.props,
                o = r.ticks,
                i = r.tick,
                a = r.angle,
                c = r.tickFormatter,
                u = r.stroke,
                l = TS(r, SS),
                s = this.getTickTextAnchor(),
                f = au(l, !1),
                p = au(i, !1),
                h = o.map((function(r, o) {
                    var l = e.getTickValueCoord(r),
                        h = kS(kS(kS(kS({
                            textAnchor: s,
                            transform: "rotate(".concat(90 - a, ", ").concat(l.x, ", ").concat(l.y, ")")
                        }, f), {}, {
                            stroke: "none",
                            fill: u
                        }, p), {}, {
                            index: o
                        }, l), {}, {
                            payload: r
                        });
                    return n.createElement(mu, PS({
                        className: hc("recharts-polar-radius-axis-tick", Ww(i)),
                        key: "tick-".concat(r.coordinate)
                    }, $c(e.props, r, o)), t.renderTickItem(i, h, c ? c(r.value, o) : r.value))
                }));
            return n.createElement(mu, {
                className: "recharts-polar-radius-axis-ticks"
            }, h)
        }
    }, {
        key: "render",
        value: function() {
            var t = this.props,
                e = t.ticks,
                r = t.axisLine,
                o = t.tick;
            return e && e.length ? n.createElement(mu, {
                className: hc("recharts-polar-radius-axis", this.props.className)
            }, r && this.renderAxisLine(), o && this.renderTicks(), nO.renderCallByParent(this.props, this.getViewBox())) : null
        }
    }]) && MS(e.prototype, o), i && MS(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();

function LS(t) {
    return (LS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function zS() {
    return zS = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, zS.apply(this, arguments)
}

function FS(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function US(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? FS(Object(r), !0).forEach((function(e) {
            XS(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : FS(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function WS(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, HS(n.key), n)
    }
}

function $S(t, e, r) {
    return e = qS(e),
        function(t, e) {
            if (e && ("object" === LS(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, KS() ? Reflect.construct(e, r || [], qS(t).constructor) : e.apply(t, r))
}

function KS() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (KS = function() {
        return !!t
    })()
}

function qS(t) {
    return (qS = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function VS(t, e) {
    return (VS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function XS(t, e, r) {
    return (e = HS(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function HS(t) {
    var e = function(t, e) {
        if ("object" != LS(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != LS(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == LS(e) ? e : e + ""
}
NS(BS, "displayName", "PolarRadiusAxis"), NS(BS, "axisType", "radiusAxis"), NS(BS, "defaultProps", {
    type: "number",
    radiusAxisId: 0,
    cx: 0,
    cy: 0,
    angle: 0,
    orientation: "right",
    stroke: "#ccc",
    axisLine: !0,
    tick: !0,
    tickCount: 5,
    allowDataOverflow: !1,
    scale: "auto",
    allowDuplicatedCategory: !0
});
var GS = Math.PI / 180,
    YS = 1e-5,
    ZS = function() {
        function t() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), $S(this, t, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && VS(t, e)
        }(t, r.PureComponent), e = t, i = [{
            key: "renderTickItem",
            value: function(t, e, r) {
                return n.isValidElement(t) ? n.cloneElement(t, e) : A(t) ? t(e) : n.createElement(Ah, zS({}, e, {
                    className: "recharts-polar-angle-axis-tick-value"
                }), r)
            }
        }], (o = [{
            key: "getTickLineCoord",
            value: function(t) {
                var e = this.props,
                    r = e.cx,
                    n = e.cy,
                    o = e.radius,
                    i = e.orientation,
                    a = e.tickSize || 8,
                    c = Rw(r, n, o, t.coordinate),
                    u = Rw(r, n, o + ("inner" === i ? -1 : 1) * a, t.coordinate);
                return {
                    x1: c.x,
                    y1: c.y,
                    x2: u.x,
                    y2: u.y
                }
            }
        }, {
            key: "getTickTextAnchor",
            value: function(t) {
                var e = this.props.orientation,
                    r = Math.cos(-t.coordinate * GS);
                return r > YS ? "outer" === e ? "start" : "end" : r < -YS ? "outer" === e ? "end" : "start" : "middle"
            }
        }, {
            key: "renderAxisLine",
            value: function() {
                var t = this.props,
                    e = t.cx,
                    r = t.cy,
                    o = t.radius,
                    i = t.axisLine,
                    a = t.axisLineType,
                    c = US(US({}, au(this.props, !1)), {}, {
                        fill: "none"
                    }, au(i, !1));
                if ("circle" === a) return n.createElement(Xj, zS({
                    className: "recharts-polar-angle-axis-line"
                }, c, {
                    cx: e,
                    cy: r,
                    r: o
                }));
                var u = this.props.ticks.map((function(t) {
                    return Rw(e, r, o, t.coordinate)
                }));
                return n.createElement(qj, zS({
                    className: "recharts-polar-angle-axis-line"
                }, c, {
                    points: u
                }))
            }
        }, {
            key: "renderTicks",
            value: function() {
                var e = this,
                    r = this.props,
                    o = r.ticks,
                    i = r.tick,
                    a = r.tickLine,
                    c = r.tickFormatter,
                    u = r.stroke,
                    l = au(this.props, !1),
                    s = au(i, !1),
                    f = US(US({}, l), {}, {
                        fill: "none"
                    }, au(a, !1)),
                    p = o.map((function(r, o) {
                        var p = e.getTickLineCoord(r),
                            h = US(US(US({
                                textAnchor: e.getTickTextAnchor(r)
                            }, l), {}, {
                                stroke: "none",
                                fill: u
                            }, s), {}, {
                                index: o,
                                payload: r,
                                x: p.x2,
                                y: p.y2
                            });
                        return n.createElement(mu, zS({
                            className: hc("recharts-polar-angle-axis-tick", Ww(i)),
                            key: "tick-".concat(r.coordinate)
                        }, $c(e.props, r, o)), a && n.createElement("line", zS({
                            className: "recharts-polar-angle-axis-tick-line"
                        }, f, p)), i && t.renderTickItem(i, h, c ? c(r.value, o) : r.value))
                    }));
                return n.createElement(mu, {
                    className: "recharts-polar-angle-axis-ticks"
                }, p)
            }
        }, {
            key: "render",
            value: function() {
                var t = this.props,
                    e = t.ticks,
                    r = t.radius,
                    o = t.axisLine;
                return r <= 0 || !e || !e.length ? null : n.createElement(mu, {
                    className: hc("recharts-polar-angle-axis", this.props.className)
                }, o && this.renderAxisLine(), this.renderTicks())
            }
        }]) && WS(e.prototype, o), i && WS(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
        var e, o, i
    }();
XS(ZS, "displayName", "PolarAngleAxis"), XS(ZS, "axisType", "angleAxis"), XS(ZS, "defaultProps", {
    type: "category",
    angleAxisId: 0,
    scale: "auto",
    cx: 0,
    cy: 0,
    orientation: "outer",
    axisLine: !0,
    tickLine: !0,
    tickSize: 8,
    tick: !0,
    hide: !1,
    allowDuplicatedCategory: !0
});
var JS = i,
    QS = l;
const tA = e((function(t) {
    return !0 === t || !1 === t || QS(t) && "[object Boolean]" == JS(t)
}));

function eA(t) {
    return (eA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function rA() {
    return rA = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, rA.apply(this, arguments)
}

function nA(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return oA(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return oA(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function oA(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function iA(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function aA(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? iA(Object(r), !0).forEach((function(e) {
            cA(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : iA(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function cA(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != eA(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != eA(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == eA(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
var uA, lA = function(t, e, r, n, o) {
        var i, a = r - n;
        return i = "M ".concat(t, ",").concat(e), i += "L ".concat(t + r, ",").concat(e), i += "L ".concat(t + r - a / 2, ",").concat(e + o), i += "L ".concat(t + r - a / 2 - n, ",").concat(e + o), i += "L ".concat(t, ",").concat(e, " Z")
    },
    sA = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
    },
    fA = function(t) {
        var e = aA(aA({}, sA), t),
            o = r.useRef(),
            i = nA(r.useState(-1), 2),
            a = i[0],
            c = i[1];
        r.useEffect((function() {
            if (o.current && o.current.getTotalLength) try {
                var t = o.current.getTotalLength();
                t && c(t)
            } catch (e) {}
        }), []);
        var u = e.x,
            l = e.y,
            s = e.upperWidth,
            f = e.lowerWidth,
            p = e.height,
            h = e.className,
            y = e.animationEasing,
            d = e.animationDuration,
            v = e.animationBegin,
            m = e.isUpdateAnimationActive;
        if (u !== +u || l !== +l || s !== +s || f !== +f || p !== +p || 0 === s && 0 === f || 0 === p) return null;
        var b = hc("recharts-trapezoid", h);
        return m ? n.createElement(Pj, {
            canBegin: a > 0,
            from: {
                upperWidth: 0,
                lowerWidth: 0,
                height: p,
                x: u,
                y: l
            },
            to: {
                upperWidth: s,
                lowerWidth: f,
                height: p,
                x: u,
                y: l
            },
            duration: d,
            animationEasing: y,
            isActive: m
        }, (function(t) {
            var r = t.upperWidth,
                i = t.lowerWidth,
                c = t.height,
                u = t.x,
                l = t.y;
            return n.createElement(Pj, {
                canBegin: a > 0,
                from: "0px ".concat(-1 === a ? 1 : a, "px"),
                to: "".concat(a, "px 0px"),
                attributeName: "strokeDasharray",
                begin: v,
                duration: d,
                easing: y
            }, n.createElement("path", rA({}, au(e, !0), {
                className: b,
                d: lA(u, l, r, i, c),
                ref: o
            })))
        })) : n.createElement("g", null, n.createElement("path", rA({}, au(e, !0), {
            className: b,
            d: lA(u, l, s, f, p)
        })))
    },
    pA = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

function hA(t) {
    return (hA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function yA(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function dA(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function vA(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? dA(Object(r), !0).forEach((function(e) {
            mA(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : dA(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function mA(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != hA(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != hA(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == hA(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function bA(t, e) {
    return vA(vA({}, e), t)
}

function gA(t) {
    var e = t.shapeType,
        r = t.elementProps;
    switch (e) {
        case "rectangle":
            return n.createElement(Bj, r);
        case "trapezoid":
            return n.createElement(fA, r);
        case "sector":
            return n.createElement(TO, r);
        case "symbols":
            if (function(t) {
                    return "symbols" === t
                }(e)) return n.createElement(ns, r);
            break;
        default:
            return null
    }
}

function wA(t) {
    return r.isValidElement(t) ? t.props : t
}

function OA(t) {
    var e, o = t.option,
        i = t.shapeType,
        a = t.propTransformer,
        c = void 0 === a ? bA : a,
        u = t.activeClassName,
        l = void 0 === u ? "recharts-active-shape" : u,
        s = t.isActive,
        f = yA(t, pA);
    if (r.isValidElement(o)) e = r.cloneElement(o, vA(vA({}, f), wA(o)));
    else if (A(o)) e = o(f);
    else if (Mr(o) && !tA(o)) {
        var p = c(o, f);
        e = n.createElement(gA, {
            shapeType: i,
            elementProps: p
        })
    } else {
        var h = f;
        e = n.createElement(gA, {
            shapeType: i,
            elementProps: h
        })
    }
    return s ? n.createElement(mu, {
        className: l
    }, e) : e
}

function xA(t, e) {
    return null != e && "trapezoids" in t.props
}

function jA(t, e) {
    return null != e && "sectors" in t.props
}

function SA(t, e) {
    return null != e && "points" in t.props
}

function AA(t, e) {
    var r, n, o = t.x === (null == e || null === (r = e.labelViewBox) || void 0 === r ? void 0 : r.x) || t.x === e.x,
        i = t.y === (null == e || null === (n = e.labelViewBox) || void 0 === n ? void 0 : n.y) || t.y === e.y;
    return o && i
}

function PA(t, e) {
    var r = t.endAngle === e.endAngle,
        n = t.startAngle === e.startAngle;
    return r && n
}

function EA(t, e) {
    var r = t.x === e.x,
        n = t.y === e.y,
        o = t.z === e.z;
    return r && n && o
}

function kA(t) {
    var e = t.activeTooltipItem,
        r = t.graphicalItem,
        n = t.itemData,
        o = function(t, e) {
            var r;
            return xA(t, e) ? r = "trapezoids" : jA(t, e) ? r = "sectors" : SA(t, e) && (r = "points"), r
        }(r, e),
        i = function(t, e) {
            var r, n;
            return xA(t, e) ? null === (r = e.tooltipPayload) || void 0 === r || null === (r = r[0]) || void 0 === r || null === (r = r.payload) || void 0 === r ? void 0 : r.payload : jA(t, e) ? null === (n = e.tooltipPayload) || void 0 === n || null === (n = n[0]) || void 0 === n || null === (n = n.payload) || void 0 === n ? void 0 : n.payload : SA(t, e) ? e.payload : {}
        }(r, e),
        a = n.filter((function(t, n) {
            var a = Eb(i, t),
                c = r.props[o].filter((function(t) {
                    var n = function(t, e) {
                        var r;
                        return xA(t, e) ? r = AA : jA(t, e) ? r = PA : SA(t, e) && (r = EA), r
                    }(r, e);
                    return n(t, e)
                })),
                u = r.props[o].indexOf(c[c.length - 1]);
            return a && n === u
        }));
    return n.indexOf(a[a.length - 1])
}

function TA(t) {
    return (TA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function MA() {
    return MA = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, MA.apply(this, arguments)
}

function _A(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function CA(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? _A(Object(r), !0).forEach((function(e) {
            LA(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _A(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function DA(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, zA(n.key), n)
    }
}

function IA(t, e, r) {
    return e = RA(e),
        function(t, e) {
            if (e && ("object" === TA(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, NA() ? Reflect.construct(e, r || [], RA(t).constructor) : e.apply(t, r))
}

function NA() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (NA = function() {
        return !!t
    })()
}

function RA(t) {
    return (RA = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function BA(t, e) {
    return (BA = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function LA(t, e, r) {
    return (e = zA(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function zA(t) {
    var e = function(t, e) {
        if ("object" != TA(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != TA(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == TA(e) ? e : e + ""
}
var FA = function() {
    function t(e) {
        var r;
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), LA(r = IA(this, t, [e]), "pieRef", null), LA(r, "sectorRefs", []), LA(r, "id", Mc("recharts-pie-")), LA(r, "handleAnimationEnd", (function() {
            var t = r.props.onAnimationEnd;
            r.setState({
                isAnimationFinished: !0
            }), A(t) && t()
        })), LA(r, "handleAnimationStart", (function() {
            var t = r.props.onAnimationStart;
            r.setState({
                isAnimationFinished: !1
            }), A(t) && t()
        })), r.state = {
            isAnimationFinished: !e.isAnimationActive,
            prevIsAnimationActive: e.isAnimationActive,
            prevAnimationId: e.animationId,
            sectorToFocus: 0
        }, r
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && BA(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "getDerivedStateFromProps",
        value: function(t, e) {
            return e.prevIsAnimationActive !== t.isAnimationActive ? {
                prevIsAnimationActive: t.isAnimationActive,
                prevAnimationId: t.animationId,
                curSectors: t.sectors,
                prevSectors: [],
                isAnimationFinished: !0
            } : t.isAnimationActive && t.animationId !== e.prevAnimationId ? {
                prevAnimationId: t.animationId,
                curSectors: t.sectors,
                prevSectors: e.curSectors,
                isAnimationFinished: !0
            } : t.sectors !== e.curSectors ? {
                curSectors: t.sectors,
                isAnimationFinished: !0
            } : null
        }
    }, {
        key: "getTextAnchor",
        value: function(t, e) {
            return t > e ? "start" : t < e ? "end" : "middle"
        }
    }, {
        key: "renderLabelLineItem",
        value: function(t, e, r) {
            if (n.isValidElement(t)) return n.cloneElement(t, e);
            if (A(t)) return t(e);
            var o = hc("recharts-pie-label-line", "boolean" != typeof t ? t.className : "");
            return n.createElement(FO, MA({}, e, {
                key: r,
                type: "linear",
                className: o
            }))
        }
    }, {
        key: "renderLabelItem",
        value: function(t, e, r) {
            if (n.isValidElement(t)) return n.cloneElement(t, e);
            var o = r;
            if (A(t) && (o = t(e), n.isValidElement(o))) return o;
            var i = hc("recharts-pie-label-text", "boolean" == typeof t || A(t) ? "" : t.className);
            return n.createElement(Ah, MA({}, e, {
                alignmentBaseline: "middle",
                className: i
            }), o)
        }
    }], (o = [{
        key: "isActiveIndex",
        value: function(t) {
            var e = this.props.activeIndex;
            return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e
        }
    }, {
        key: "hasActiveIndex",
        value: function() {
            var t = this.props.activeIndex;
            return Array.isArray(t) ? 0 !== t.length : t || 0 === t
        }
    }, {
        key: "renderLabels",
        value: function(e) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var r = this.props,
                o = r.label,
                i = r.labelLine,
                a = r.dataKey,
                c = r.valueKey,
                u = au(this.props, !1),
                l = au(o, !1),
                s = au(i, !1),
                f = o && o.offsetRadius || 20,
                p = e.map((function(e, r) {
                    var p = (e.startAngle + e.endAngle) / 2,
                        h = Rw(e.cx, e.cy, e.outerRadius + f, p),
                        y = CA(CA(CA(CA({}, u), e), {}, {
                            stroke: "none"
                        }, l), {}, {
                            index: r,
                            textAnchor: t.getTextAnchor(h.x, e.cx)
                        }, h),
                        d = CA(CA(CA(CA({}, u), e), {}, {
                            fill: "none",
                            stroke: e.fill
                        }, s), {}, {
                            index: r,
                            points: [Rw(e.cx, e.cy, e.outerRadius, p), h]
                        }),
                        v = a;
                    return yc(a) && yc(c) ? v = "value" : yc(a) && (v = c), n.createElement(mu, {
                        key: "label-".concat(e.startAngle, "-").concat(e.endAngle, "-").concat(e.midAngle, "-").concat(r)
                    }, i && t.renderLabelLineItem(i, d, "line"), t.renderLabelItem(o, y, tw(e, v)))
                }));
            return n.createElement(mu, {
                className: "recharts-pie-labels"
            }, p)
        }
    }, {
        key: "renderSectorsStatically",
        value: function(t) {
            var e = this,
                r = this.props,
                o = r.activeShape,
                i = r.blendStroke,
                a = r.inactiveShape;
            return t.map((function(r, c) {
                if (0 === (null == r ? void 0 : r.startAngle) && 0 === (null == r ? void 0 : r.endAngle) && 1 !== t.length) return null;
                var u = e.isActiveIndex(c),
                    l = a && e.hasActiveIndex() ? a : null,
                    s = u ? o : l,
                    f = CA(CA({}, r), {}, {
                        stroke: i ? r.fill : r.stroke,
                        tabIndex: -1
                    });
                return n.createElement(mu, MA({
                    ref: function(t) {
                        t && !e.sectorRefs.includes(t) && e.sectorRefs.push(t)
                    },
                    tabIndex: -1,
                    className: "recharts-pie-sector"
                }, $c(e.props, r, c), {
                    key: "sector-".concat(null == r ? void 0 : r.startAngle, "-").concat(null == r ? void 0 : r.endAngle, "-").concat(r.midAngle, "-").concat(c)
                }), n.createElement(OA, MA({
                    option: s,
                    isActive: u,
                    shapeType: "sector"
                }, f)))
            }))
        }
    }, {
        key: "renderSectorsWithAnimation",
        value: function() {
            var t = this,
                e = this.props,
                r = e.sectors,
                o = e.isAnimationActive,
                i = e.animationBegin,
                a = e.animationDuration,
                c = e.animationEasing,
                u = e.animationId,
                l = this.state,
                s = l.prevSectors,
                f = l.prevIsAnimationActive;
            return n.createElement(Pj, {
                begin: i,
                duration: a,
                isActive: o,
                easing: c,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "pie-".concat(u, "-").concat(f),
                onAnimationStart: this.handleAnimationStart,
                onAnimationEnd: this.handleAnimationEnd
            }, (function(e) {
                var o = e.t,
                    i = [],
                    a = (r && r[0]).startAngle;
                return r.forEach((function(t, e) {
                    var r = s && s[e],
                        n = e > 0 ? ve(t, "paddingAngle", 0) : 0;
                    if (r) {
                        var c = Dc(r.endAngle - r.startAngle, t.endAngle - t.startAngle),
                            u = CA(CA({}, t), {}, {
                                startAngle: a + n,
                                endAngle: a + c(o) + n
                            });
                        i.push(u), a = u.endAngle
                    } else {
                        var l = t.endAngle,
                            f = t.startAngle,
                            p = Dc(0, l - f)(o),
                            h = CA(CA({}, t), {}, {
                                startAngle: a + n,
                                endAngle: a + p + n
                            });
                        i.push(h), a = h.endAngle
                    }
                })), n.createElement(mu, null, t.renderSectorsStatically(i))
            }))
        }
    }, {
        key: "attachKeyboardHandlers",
        value: function(t) {
            var e = this;
            t.onkeydown = function(t) {
                if (!t.altKey) switch (t.key) {
                    case "ArrowLeft":
                        var r = ++e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[r].focus(), e.setState({
                            sectorToFocus: r
                        });
                        break;
                    case "ArrowRight":
                        var n = --e.state.sectorToFocus < 0 ? e.sectorRefs.length - 1 : e.state.sectorToFocus % e.sectorRefs.length;
                        e.sectorRefs[n].focus(), e.setState({
                            sectorToFocus: n
                        });
                        break;
                    case "Escape":
                        e.sectorRefs[e.state.sectorToFocus].blur(), e.setState({
                            sectorToFocus: 0
                        })
                }
            }
        }
    }, {
        key: "renderSectors",
        value: function() {
            var t = this.props,
                e = t.sectors,
                r = t.isAnimationActive,
                n = this.state.prevSectors;
            return !(r && e && e.length) || n && Eb(n, e) ? this.renderSectorsStatically(e) : this.renderSectorsWithAnimation()
        }
    }, {
        key: "componentDidMount",
        value: function() {
            this.pieRef && this.attachKeyboardHandlers(this.pieRef)
        }
    }, {
        key: "render",
        value: function() {
            var t = this,
                e = this.props,
                r = e.hide,
                o = e.sectors,
                i = e.className,
                a = e.label,
                c = e.cx,
                u = e.cy,
                l = e.innerRadius,
                s = e.outerRadius,
                f = e.isAnimationActive,
                p = this.state.isAnimationFinished;
            if (r || !o || !o.length || !Ec(c) || !Ec(u) || !Ec(l) || !Ec(s)) return null;
            var h = hc("recharts-pie", i);
            return n.createElement(mu, {
                tabIndex: this.props.rootTabIndex,
                className: h,
                ref: function(e) {
                    t.pieRef = e
                }
            }, this.renderSectors(), a && this.renderLabels(o), nO.renderCallByParent(this.props, null, !1), (!f || p) && vO.renderCallByParent(this.props, o, !1))
        }
    }]) && DA(e.prototype, o), i && DA(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();
uA = FA, LA(FA, "displayName", "Pie"), LA(FA, "defaultProps", {
    stroke: "#fff",
    fill: "#808080",
    legendType: "rect",
    cx: "50%",
    cy: "50%",
    startAngle: 0,
    endAngle: 360,
    innerRadius: 0,
    outerRadius: "80%",
    paddingAngle: 0,
    labelLine: !0,
    hide: !1,
    minAngle: 0,
    isAnimationActive: !xp.isSsr,
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: "ease",
    nameKey: "name",
    blendStroke: !1,
    rootTabIndex: 0
}), LA(FA, "parseDeltaAngle", (function(t, e) {
    return Ac(e - t) * Math.min(Math.abs(e - t), 360)
})), LA(FA, "getRealPieData", (function(t) {
    var e = t.data,
        r = t.children,
        n = au(t, !1),
        o = Qc(r, Wp);
    return e && e.length ? e.map((function(t, e) {
        return CA(CA(CA({
            payload: t
        }, n), t), o && o[e] && o[e].props)
    })) : o && o.length ? o.map((function(t) {
        return CA(CA({}, n), t.props)
    })) : []
})), LA(FA, "parseCoordinateOfPie", (function(t, e) {
    var r = e.top,
        n = e.left,
        o = e.width,
        i = e.height,
        a = Bw(o, i);
    return {
        cx: n + _c(t.cx, o, o / 2),
        cy: r + _c(t.cy, i, i / 2),
        innerRadius: _c(t.innerRadius, a, 0),
        outerRadius: _c(t.outerRadius, a, .8 * a),
        maxRadius: t.maxRadius || Math.sqrt(o * o + i * i) / 2
    }
})), LA(FA, "getComposedData", (function(t) {
    var e = t.item,
        r = t.offset,
        n = void 0 !== e.type.defaultProps ? CA(CA({}, e.type.defaultProps), e.props) : e.props,
        o = uA.getRealPieData(n);
    if (!o || !o.length) return null;
    var i = n.cornerRadius,
        a = n.startAngle,
        c = n.endAngle,
        u = n.paddingAngle,
        l = n.dataKey,
        s = n.nameKey,
        f = n.valueKey,
        p = n.tooltipType,
        h = Math.abs(n.minAngle),
        y = uA.parseCoordinateOfPie(n, r),
        d = uA.parseDeltaAngle(a, c),
        v = Math.abs(d),
        m = l;
    yc(l) && yc(f) ? (bu(!1, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'), m = "value") : yc(l) && (bu(!1, 'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'), m = f);
    var b, g, w = o.filter((function(t) {
            return 0 !== tw(t, m, 0)
        })).length,
        O = v - w * h - (v >= 360 ? w : w - 1) * u,
        x = o.reduce((function(t, e) {
            var r = tw(e, m, 0);
            return t + (Ec(r) ? r : 0)
        }), 0);
    x > 0 && (b = o.map((function(t, e) {
        var r, n = tw(t, m, 0),
            o = tw(t, s, e),
            c = (Ec(n) ? n : 0) / x,
            l = (r = e ? g.endAngle + Ac(d) * u * (0 !== n ? 1 : 0) : a) + Ac(d) * ((0 !== n ? h : 0) + c * O),
            f = (r + l) / 2,
            v = (y.innerRadius + y.outerRadius) / 2,
            b = [{
                name: o,
                value: n,
                payload: t,
                dataKey: m,
                type: p
            }],
            w = Rw(y.cx, y.cy, v, f);
        return g = CA(CA(CA({
            percent: c,
            cornerRadius: i,
            name: o,
            tooltipPayload: b,
            midAngle: f,
            middleRadius: v,
            tooltipPosition: w
        }, t), y), {}, {
            value: tw(t, m),
            startAngle: r,
            endAngle: l,
            payload: t,
            paddingAngle: Ac(d) * u
        })
    })));
    return CA(CA({}, y), {}, {
        sectors: b,
        data: o
    })
}));
const UA = e((function(t) {
    return t && t.length ? t[0] : void 0
}));
var WA = ["key"];

function $A(t) {
    return ($A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function KA(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function qA() {
    return qA = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, qA.apply(this, arguments)
}

function VA(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function XA(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? VA(Object(r), !0).forEach((function(e) {
            QA(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : VA(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function HA(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, tP(n.key), n)
    }
}

function GA(t, e, r) {
    return e = ZA(e),
        function(t, e) {
            if (e && ("object" === $A(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, YA() ? Reflect.construct(e, r || [], ZA(t).constructor) : e.apply(t, r))
}

function YA() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (YA = function() {
        return !!t
    })()
}

function ZA(t) {
    return (ZA = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function JA(t, e) {
    return (JA = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function QA(t, e, r) {
    return (e = tP(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function tP(t) {
    var e = function(t, e) {
        if ("object" != $A(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != $A(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == $A(e) ? e : e + ""
}
var eP = function() {
    function t() {
        var e;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return QA(e = GA(this, t, [].concat(n)), "state", {
            isAnimationFinished: !1
        }), QA(e, "handleAnimationEnd", (function() {
            var t = e.props.onAnimationEnd;
            e.setState({
                isAnimationFinished: !0
            }), A(t) && t()
        })), QA(e, "handleAnimationStart", (function() {
            var t = e.props.onAnimationStart;
            e.setState({
                isAnimationFinished: !1
            }), A(t) && t()
        })), QA(e, "handleMouseEnter", (function(t) {
            var r = e.props.onMouseEnter;
            r && r(e.props, t)
        })), QA(e, "handleMouseLeave", (function(t) {
            var r = e.props.onMouseLeave;
            r && r(e.props, t)
        })), e
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && JA(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "getDerivedStateFromProps",
        value: function(t, e) {
            return t.animationId !== e.prevAnimationId ? {
                prevAnimationId: t.animationId,
                curPoints: t.points,
                prevPoints: e.curPoints
            } : t.points !== e.curPoints ? {
                curPoints: t.points
            } : null
        }
    }, {
        key: "renderDotItem",
        value: function(t, e) {
            var r;
            if (n.isValidElement(t)) r = n.cloneElement(t, e);
            else if (A(t)) r = t(e);
            else {
                var o = e.key,
                    i = KA(e, WA);
                r = n.createElement(Xj, qA({}, i, {
                    key: o,
                    className: hc("recharts-radar-dot", "boolean" != typeof t ? t.className : "")
                }))
            }
            return r
        }
    }], (o = [{
        key: "renderDots",
        value: function(e) {
            var r = this.props,
                o = r.dot,
                i = r.dataKey,
                a = au(this.props, !1),
                c = au(o, !0),
                u = e.map((function(e, r) {
                    var n = XA(XA(XA({
                        key: "dot-".concat(r),
                        r: 3
                    }, a), c), {}, {
                        dataKey: i,
                        cx: e.x,
                        cy: e.y,
                        index: r,
                        payload: e
                    });
                    return t.renderDotItem(o, n)
                }));
            return n.createElement(mu, {
                className: "recharts-radar-dots"
            }, u)
        }
    }, {
        key: "renderPolygonStatically",
        value: function(t) {
            var e, r = this.props,
                o = r.shape,
                i = r.dot,
                a = r.isRange,
                c = r.baseLinePoints,
                u = r.connectNulls;
            return e = n.isValidElement(o) ? n.cloneElement(o, XA(XA({}, this.props), {}, {
                points: t
            })) : A(o) ? o(XA(XA({}, this.props), {}, {
                points: t
            })) : n.createElement(qj, qA({}, au(this.props, !0), {
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                points: t,
                baseLinePoints: a ? c : null,
                connectNulls: u
            })), n.createElement(mu, {
                className: "recharts-radar-polygon"
            }, e, i ? this.renderDots(t) : null)
        }
    }, {
        key: "renderPolygonWithAnimation",
        value: function() {
            var t = this,
                e = this.props,
                r = e.points,
                o = e.isAnimationActive,
                i = e.animationBegin,
                a = e.animationDuration,
                c = e.animationEasing,
                u = e.animationId,
                l = this.state.prevPoints;
            return n.createElement(Pj, {
                begin: i,
                duration: a,
                isActive: o,
                easing: c,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "radar-".concat(u),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, (function(e) {
                var n = e.t,
                    o = l && l.length / r.length,
                    i = r.map((function(t, e) {
                        var r = l && l[Math.floor(e * o)];
                        if (r) {
                            var i = Dc(r.x, t.x),
                                a = Dc(r.y, t.y);
                            return XA(XA({}, t), {}, {
                                x: i(n),
                                y: a(n)
                            })
                        }
                        var c = Dc(t.cx, t.x),
                            u = Dc(t.cy, t.y);
                        return XA(XA({}, t), {}, {
                            x: c(n),
                            y: u(n)
                        })
                    }));
                return t.renderPolygonStatically(i)
            }))
        }
    }, {
        key: "renderPolygon",
        value: function() {
            var t = this.props,
                e = t.points,
                r = t.isAnimationActive,
                n = t.isRange,
                o = this.state.prevPoints;
            return !(r && e && e.length) || n || o && Eb(o, e) ? this.renderPolygonStatically(e) : this.renderPolygonWithAnimation()
        }
    }, {
        key: "render",
        value: function() {
            var t = this.props,
                e = t.hide,
                r = t.className,
                o = t.points,
                i = t.isAnimationActive;
            if (e || !o || !o.length) return null;
            var a = this.state.isAnimationFinished,
                c = hc("recharts-radar", r);
            return n.createElement(mu, {
                className: c
            }, this.renderPolygon(), (!i || a) && vO.renderCallByParent(this.props, o))
        }
    }]) && HA(e.prototype, o), i && HA(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();

function rP(t) {
    return (rP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function nP() {
    return nP = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, nP.apply(this, arguments)
}

function oP(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function iP(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? oP(Object(r), !0).forEach((function(e) {
            aP(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : oP(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function aP(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != rP(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != rP(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == rP(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function cP(t) {
    return "string" == typeof t ? parseInt(t, 10) : t
}

function uP(t, e) {
    var r = "".concat(e.cx || t.cx),
        n = Number(r),
        o = "".concat(e.cy || t.cy),
        i = Number(o);
    return iP(iP(iP({}, e), t), {}, {
        cx: n,
        cy: i
    })
}

function lP(t) {
    return n.createElement(OA, nP({
        shapeType: "sector",
        propTransformer: uP
    }, t))
}
QA(eP, "displayName", "Radar"), QA(eP, "defaultProps", {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: !1,
    activeDot: !0,
    dot: !1,
    legendType: "rect",
    isAnimationActive: !xp.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
}), QA(eP, "getComposedData", (function(t) {
    var e = t.radiusAxis,
        r = t.angleAxis,
        n = t.displayedData,
        o = t.dataKey,
        i = t.bandSize,
        a = r.cx,
        c = r.cy,
        u = !1,
        l = [],
        s = "number" !== r.type && null != i ? i : 0;
    n.forEach((function(t, n) {
        var i = tw(t, r.dataKey, n),
            f = tw(t, o),
            p = r.scale(i) + s,
            h = Array.isArray(f) ? Ba(f) : f,
            y = yc(h) ? void 0 : e.scale(h);
        Array.isArray(f) && f.length >= 2 && (u = !0), l.push(XA(XA({}, Rw(a, c, y, p)), {}, {
            name: i,
            value: f,
            cx: a,
            cy: c,
            radius: y,
            angle: p,
            payload: t
        }))
    }));
    var f = [];
    return u && l.forEach((function(t) {
        if (Array.isArray(t.value)) {
            var r = UA(t.value),
                n = yc(r) ? void 0 : e.scale(r);
            f.push(XA(XA({}, t), {}, {
                radius: n
            }, Rw(a, c, n, t.angle)))
        } else f.push(t)
    })), {
        points: l,
        isRange: u,
        baseLinePoints: f
    }
}));
var sP = ["shape", "activeShape", "activeIndex", "cornerRadius"],
    fP = ["value", "background"];

function pP(t) {
    return (pP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function hP() {
    return hP = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, hP.apply(this, arguments)
}

function yP(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function dP(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? yP(Object(r), !0).forEach((function(e) {
            xP(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : yP(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function vP(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function mP(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, jP(n.key), n)
    }
}

function bP(t, e, r) {
    return e = wP(e),
        function(t, e) {
            if (e && ("object" === pP(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, gP() ? Reflect.construct(e, r || [], wP(t).constructor) : e.apply(t, r))
}

function gP() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (gP = function() {
        return !!t
    })()
}

function wP(t) {
    return (wP = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function OP(t, e) {
    return (OP = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function xP(t, e, r) {
    return (e = jP(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function jP(t) {
    var e = function(t, e) {
        if ("object" != pP(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != pP(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == pP(e) ? e : e + ""
}
var SP = function() {
    function t() {
        var e;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return xP(e = bP(this, t, [].concat(n)), "state", {
            isAnimationFinished: !1
        }), xP(e, "handleAnimationEnd", (function() {
            var t = e.props.onAnimationEnd;
            e.setState({
                isAnimationFinished: !0
            }), A(t) && t()
        })), xP(e, "handleAnimationStart", (function() {
            var t = e.props.onAnimationStart;
            e.setState({
                isAnimationFinished: !1
            }), A(t) && t()
        })), e
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && OP(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "getDerivedStateFromProps",
        value: function(t, e) {
            return t.animationId !== e.prevAnimationId ? {
                prevAnimationId: t.animationId,
                curData: t.data,
                prevData: e.curData
            } : t.data !== e.curData ? {
                curData: t.data
            } : null
        }
    }], (o = [{
        key: "getDeltaAngle",
        value: function() {
            var t = this.props,
                e = t.startAngle,
                r = t.endAngle;
            return Ac(r - e) * Math.min(Math.abs(r - e), 360)
        }
    }, {
        key: "renderSectorsStatically",
        value: function(t) {
            var e = this,
                r = this.props,
                o = r.shape,
                i = r.activeShape,
                a = r.activeIndex,
                c = r.cornerRadius,
                u = vP(r, sP),
                l = au(u, !1);
            return t.map((function(t, r) {
                var s = r === a,
                    f = dP(dP(dP(dP({}, l), {}, {
                        cornerRadius: cP(c)
                    }, t), $c(e.props, t, r)), {}, {
                        className: "recharts-radial-bar-sector ".concat(t.className),
                        forceCornerRadius: u.forceCornerRadius,
                        cornerIsExternal: u.cornerIsExternal,
                        isActive: s,
                        option: s ? i : o
                    });
                return n.createElement(lP, hP({}, f, {
                    key: "sector-".concat(r)
                }))
            }))
        }
    }, {
        key: "renderSectorsWithAnimation",
        value: function() {
            var t = this,
                e = this.props,
                r = e.data,
                o = e.isAnimationActive,
                i = e.animationBegin,
                a = e.animationDuration,
                c = e.animationEasing,
                u = e.animationId,
                l = this.state.prevData;
            return n.createElement(Pj, {
                begin: i,
                duration: a,
                isActive: o,
                easing: c,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "radialBar-".concat(u),
                onAnimationStart: this.handleAnimationStart,
                onAnimationEnd: this.handleAnimationEnd
            }, (function(e) {
                var o = e.t,
                    i = r.map((function(t, e) {
                        var r = l && l[e];
                        if (r) {
                            var n = Dc(r.startAngle, t.startAngle),
                                i = Dc(r.endAngle, t.endAngle);
                            return dP(dP({}, t), {}, {
                                startAngle: n(o),
                                endAngle: i(o)
                            })
                        }
                        var a = t.endAngle,
                            c = t.startAngle,
                            u = Dc(c, a);
                        return dP(dP({}, t), {}, {
                            endAngle: u(o)
                        })
                    }));
                return n.createElement(mu, null, t.renderSectorsStatically(i))
            }))
        }
    }, {
        key: "renderSectors",
        value: function() {
            var t = this.props,
                e = t.data,
                r = t.isAnimationActive,
                n = this.state.prevData;
            return !(r && e && e.length) || n && Eb(n, e) ? this.renderSectorsStatically(e) : this.renderSectorsWithAnimation()
        }
    }, {
        key: "renderBackground",
        value: function(t) {
            var e = this,
                r = this.props.cornerRadius,
                o = au(this.props.background, !1);
            return t.map((function(t, i) {
                t.value;
                var a = t.background,
                    c = vP(t, fP);
                if (!a) return null;
                var u = dP(dP(dP(dP(dP({
                    cornerRadius: cP(r)
                }, c), {}, {
                    fill: "#eee"
                }, a), o), $c(e.props, t, i)), {}, {
                    index: i,
                    className: hc("recharts-radial-bar-background-sector", null == o ? void 0 : o.className),
                    option: a,
                    isActive: !1
                });
                return n.createElement(lP, hP({}, u, {
                    key: "sector-".concat(i)
                }))
            }))
        }
    }, {
        key: "render",
        value: function() {
            var t = this.props,
                e = t.hide,
                r = t.data,
                o = t.className,
                i = t.background,
                a = t.isAnimationActive;
            if (e || !r || !r.length) return null;
            var c = this.state.isAnimationFinished,
                u = hc("recharts-area", o);
            return n.createElement(mu, {
                className: u
            }, i && n.createElement(mu, {
                className: "recharts-radial-bar-background"
            }, this.renderBackground(r)), n.createElement(mu, {
                className: "recharts-radial-bar-sectors"
            }, this.renderSectors()), (!a || c) && vO.renderCallByParent(dP({}, this.props), r))
        }
    }]) && mP(e.prototype, o), i && mP(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();
xP(SP, "displayName", "RadialBar"), xP(SP, "defaultProps", {
    angleAxisId: 0,
    radiusAxisId: 0,
    minPointSize: 0,
    hide: !1,
    legendType: "rect",
    data: [],
    isAnimationActive: !xp.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
    forceCornerRadius: !1,
    cornerIsExternal: !1
}), xP(SP, "getComposedData", (function(t) {
    var e = t.item,
        r = t.props,
        n = t.radiusAxis,
        o = t.radiusAxisTicks,
        i = t.angleAxis,
        a = t.angleAxisTicks,
        c = t.displayedData,
        u = t.dataKey,
        l = t.stackedData,
        s = t.barPosition,
        f = t.bandSize,
        p = t.dataStartIndex,
        h = hw(s, e);
    if (!h) return null;
    var y = i.cx,
        d = i.cy,
        v = r.layout,
        m = e.props,
        b = m.children,
        g = m.minPointSize,
        w = "radial" === v ? i : n,
        O = l ? w.scale.domain() : null,
        x = ww({
            numericAxis: w
        }),
        j = Qc(b, Wp);
    return {
        data: c.map((function(t, c) {
            var s, m, b, w, S, A;
            if (l ? s = yw(l[p + c], O) : (s = tw(t, u), Array.isArray(s) || (s = [x, s])), "radial" === v) {
                m = gw({
                    axis: n,
                    ticks: o,
                    bandSize: f,
                    offset: h.offset,
                    entry: t,
                    index: c
                }), S = i.scale(s[1]), w = i.scale(s[0]), b = m + h.size;
                var P = S - w;
                if (Math.abs(g) > 0 && Math.abs(P) < Math.abs(g)) S += Ac(P || g) * (Math.abs(g) - Math.abs(P));
                A = {
                    background: {
                        cx: y,
                        cy: d,
                        innerRadius: m,
                        outerRadius: b,
                        startAngle: r.startAngle,
                        endAngle: r.endAngle
                    }
                }
            } else {
                m = n.scale(s[0]), b = n.scale(s[1]), S = (w = gw({
                    axis: i,
                    ticks: a,
                    bandSize: f,
                    offset: h.offset,
                    entry: t,
                    index: c
                })) + h.size;
                var E = b - m;
                if (Math.abs(g) > 0 && Math.abs(E) < Math.abs(g)) b += Ac(E || g) * (Math.abs(g) - Math.abs(E))
            }
            return dP(dP(dP(dP({}, t), A), {}, {
                payload: t,
                value: l ? s : s[1],
                cx: y,
                cy: d,
                innerRadius: m,
                outerRadius: b,
                startAngle: w,
                endAngle: S
            }, j && j[c] && j[c].props), {}, {
                tooltipPayload: [Ew(e, t)],
                tooltipPosition: Rw(y, d, (m + b) / 2, (w + S) / 2)
            })
        })),
        layout: v
    }
}));
var AP = Math.ceil,
    PP = Math.max;
var EP = d,
    kP = 1 / 0;
var TP = function(t) {
        return t ? (t = EP(t)) === kP || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
    },
    MP = function(t, e, r, n) {
        for (var o = -1, i = PP(AP((e - t) / (r || 1)), 0), a = Array(i); i--;) a[n ? i : ++o] = t, t += r;
        return a
    },
    _P = Cn,
    CP = TP;
const DP = e(function(t) {
    return function(e, r, n) {
        return n && "number" != typeof n && _P(e, r, n) && (r = n = void 0), e = CP(e), void 0 === r ? (r = e, e = 0) : r = CP(r), n = void 0 === n ? e < r ? 1 : -1 : CP(n), MP(e, r, n, t)
    }
}());

function IP(t) {
    return (IP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function NP(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function RP(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? NP(Object(r), !0).forEach((function(e) {
            BP(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : NP(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function BP(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != IP(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != IP(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == IP(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}
var LP = ["Webkit", "Moz", "O", "ms"];

function zP(t) {
    return (zP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function FP() {
    return FP = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, FP.apply(this, arguments)
}

function UP(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function WP(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? UP(Object(r), !0).forEach((function(e) {
            HP(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : UP(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function $P(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, GP(n.key), n)
    }
}

function KP(t, e, r) {
    return e = VP(e),
        function(t, e) {
            if (e && ("object" === zP(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, qP() ? Reflect.construct(e, r || [], VP(t).constructor) : e.apply(t, r))
}

function qP() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (qP = function() {
        return !!t
    })()
}

function VP(t) {
    return (VP = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function XP(t, e) {
    return (XP = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function HP(t, e, r) {
    return (e = GP(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function GP(t) {
    var e = function(t, e) {
        if ("object" != zP(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != zP(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == zP(e) ? e : e + ""
}
var YP = function(t) {
        return t.changedTouches && !!t.changedTouches.length
    },
    ZP = function() {
        function t(e) {
            var r;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), HP(r = KP(this, t, [e]), "handleDrag", (function(t) {
                r.leaveTimer && (clearTimeout(r.leaveTimer), r.leaveTimer = null), r.state.isTravellerMoving ? r.handleTravellerMove(t) : r.state.isSlideMoving && r.handleSlideDrag(t)
            })), HP(r, "handleTouchMove", (function(t) {
                null != t.changedTouches && t.changedTouches.length > 0 && r.handleDrag(t.changedTouches[0])
            })), HP(r, "handleDragEnd", (function() {
                r.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !1
                }, (function() {
                    var t = r.props,
                        e = t.endIndex,
                        n = t.onDragEnd,
                        o = t.startIndex;
                    null == n || n({
                        endIndex: e,
                        startIndex: o
                    })
                })), r.detachDragEndListener()
            })), HP(r, "handleLeaveWrapper", (function() {
                (r.state.isTravellerMoving || r.state.isSlideMoving) && (r.leaveTimer = window.setTimeout(r.handleDragEnd, r.props.leaveTimeOut))
            })), HP(r, "handleEnterSlideOrTraveller", (function() {
                r.setState({
                    isTextActive: !0
                })
            })), HP(r, "handleLeaveSlideOrTraveller", (function() {
                r.setState({
                    isTextActive: !1
                })
            })), HP(r, "handleSlideDragStart", (function(t) {
                var e = YP(t) ? t.changedTouches[0] : t;
                r.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !0,
                    slideMoveStartX: e.pageX
                }), r.attachDragEndListener()
            })), r.travellerDragStartHandlers = {
                startX: r.handleTravellerDragStart.bind(r, "startX"),
                endX: r.handleTravellerDragStart.bind(r, "endX")
            }, r.state = {}, r
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && XP(t, e)
        }(t, r.PureComponent), e = t, i = [{
            key: "renderDefaultTraveller",
            value: function(t) {
                var e = t.x,
                    r = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.stroke,
                    c = Math.floor(r + i / 2) - 1;
                return n.createElement(n.Fragment, null, n.createElement("rect", {
                    x: e,
                    y: r,
                    width: o,
                    height: i,
                    fill: a,
                    stroke: "none"
                }), n.createElement("line", {
                    x1: e + 1,
                    y1: c,
                    x2: e + o - 1,
                    y2: c,
                    fill: "none",
                    stroke: "#fff"
                }), n.createElement("line", {
                    x1: e + 1,
                    y1: c + 2,
                    x2: e + o - 1,
                    y2: c + 2,
                    fill: "none",
                    stroke: "#fff"
                }))
            }
        }, {
            key: "renderTraveller",
            value: function(e, r) {
                return n.isValidElement(e) ? n.cloneElement(e, r) : A(e) ? e(r) : t.renderDefaultTraveller(r)
            }
        }, {
            key: "getDerivedStateFromProps",
            value: function(t, e) {
                var r = t.data,
                    n = t.width,
                    o = t.x,
                    i = t.travellerWidth,
                    a = t.updateId,
                    c = t.startIndex,
                    u = t.endIndex;
                if (r !== e.prevData || a !== e.prevUpdateId) return WP({
                    prevData: r,
                    prevTravellerWidth: i,
                    prevUpdateId: a,
                    prevX: o,
                    prevWidth: n
                }, r && r.length ? function(t) {
                    var e = t.data,
                        r = t.startIndex,
                        n = t.endIndex,
                        o = t.x,
                        i = t.width,
                        a = t.travellerWidth;
                    if (!e || !e.length) return {};
                    var c = e.length,
                        u = ty().domain(DP(0, c)).range([o, o + i - a]),
                        l = u.domain().map((function(t) {
                            return u(t)
                        }));
                    return {
                        isTextActive: !1,
                        isSlideMoving: !1,
                        isTravellerMoving: !1,
                        isTravellerFocused: !1,
                        startX: u(r),
                        endX: u(n),
                        scale: u,
                        scaleValues: l
                    }
                }({
                    data: r,
                    width: n,
                    x: o,
                    travellerWidth: i,
                    startIndex: c,
                    endIndex: u
                }) : {
                    scale: null,
                    scaleValues: null
                });
                if (e.scale && (n !== e.prevWidth || o !== e.prevX || i !== e.prevTravellerWidth)) {
                    e.scale.range([o, o + n - i]);
                    var l = e.scale.domain().map((function(t) {
                        return e.scale(t)
                    }));
                    return {
                        prevData: r,
                        prevTravellerWidth: i,
                        prevUpdateId: a,
                        prevX: o,
                        prevWidth: n,
                        startX: e.scale(t.startIndex),
                        endX: e.scale(t.endIndex),
                        scaleValues: l
                    }
                }
                return null
            }
        }, {
            key: "getIndexInRange",
            value: function(t, e) {
                for (var r = 0, n = t.length - 1; n - r > 1;) {
                    var o = Math.floor((r + n) / 2);
                    t[o] > e ? n = o : r = o
                }
                return e >= t[n] ? n : r
            }
        }], (o = [{
            key: "componentWillUnmount",
            value: function() {
                this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
            }
        }, {
            key: "getIndex",
            value: function(e) {
                var r = e.startX,
                    n = e.endX,
                    o = this.state.scaleValues,
                    i = this.props,
                    a = i.gap,
                    c = i.data.length - 1,
                    u = Math.min(r, n),
                    l = Math.max(r, n),
                    s = t.getIndexInRange(o, u),
                    f = t.getIndexInRange(o, l);
                return {
                    startIndex: s - s % a,
                    endIndex: f === c ? c : f - f % a
                }
            }
        }, {
            key: "getTextOfTick",
            value: function(t) {
                var e = this.props,
                    r = e.data,
                    n = e.tickFormatter,
                    o = e.dataKey,
                    i = tw(r[t], o, t);
                return A(n) ? n(i, t) : i
            }
        }, {
            key: "attachDragEndListener",
            value: function() {
                window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0)
            }
        }, {
            key: "detachDragEndListener",
            value: function() {
                window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0)
            }
        }, {
            key: "handleSlideDrag",
            value: function(t) {
                var e = this.state,
                    r = e.slideMoveStartX,
                    n = e.startX,
                    o = e.endX,
                    i = this.props,
                    a = i.x,
                    c = i.width,
                    u = i.travellerWidth,
                    l = i.startIndex,
                    s = i.endIndex,
                    f = i.onChange,
                    p = t.pageX - r;
                p > 0 ? p = Math.min(p, a + c - u - o, a + c - u - n) : p < 0 && (p = Math.max(p, a - n, a - o));
                var h = this.getIndex({
                    startX: n + p,
                    endX: o + p
                });
                h.startIndex === l && h.endIndex === s || !f || f(h), this.setState({
                    startX: n + p,
                    endX: o + p,
                    slideMoveStartX: t.pageX
                })
            }
        }, {
            key: "handleTravellerDragStart",
            value: function(t, e) {
                var r = YP(e) ? e.changedTouches[0] : e;
                this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: t,
                    brushMoveStartX: r.pageX
                }), this.attachDragEndListener()
            }
        }, {
            key: "handleTravellerMove",
            value: function(t) {
                var e = this.state,
                    r = e.brushMoveStartX,
                    n = e.movingTravellerId,
                    o = e.endX,
                    i = e.startX,
                    a = this.state[n],
                    c = this.props,
                    u = c.x,
                    l = c.width,
                    s = c.travellerWidth,
                    f = c.onChange,
                    p = c.gap,
                    h = c.data,
                    y = {
                        startX: this.state.startX,
                        endX: this.state.endX
                    },
                    d = t.pageX - r;
                d > 0 ? d = Math.min(d, u + l - s - a) : d < 0 && (d = Math.max(d, u - a)), y[n] = a + d;
                var v = this.getIndex(y),
                    m = v.startIndex,
                    b = v.endIndex;
                this.setState(HP(HP({}, n, a + d), "brushMoveStartX", t.pageX), (function() {
                    var t;
                    f && (t = h.length - 1, ("startX" === n && (o > i ? m % p == 0 : b % p == 0) || o < i && b === t || "endX" === n && (o > i ? b % p == 0 : m % p == 0) || o > i && b === t) && f(v))
                }))
            }
        }, {
            key: "handleTravellerMoveKeyboard",
            value: function(t, e) {
                var r = this,
                    n = this.state,
                    o = n.scaleValues,
                    i = n.startX,
                    a = n.endX,
                    c = this.state[e],
                    u = o.indexOf(c);
                if (-1 !== u) {
                    var l = u + t;
                    if (!(-1 === l || l >= o.length)) {
                        var s = o[l];
                        "startX" === e && s >= a || "endX" === e && s <= i || this.setState(HP({}, e, s), (function() {
                            r.props.onChange(r.getIndex({
                                startX: r.state.startX,
                                endX: r.state.endX
                            }))
                        }))
                    }
                }
            }
        }, {
            key: "renderBackground",
            value: function() {
                var t = this.props,
                    e = t.x,
                    r = t.y,
                    o = t.width,
                    i = t.height,
                    a = t.fill,
                    c = t.stroke;
                return n.createElement("rect", {
                    stroke: c,
                    fill: a,
                    x: e,
                    y: r,
                    width: o,
                    height: i
                })
            }
        }, {
            key: "renderPanorama",
            value: function() {
                var t = this.props,
                    e = t.x,
                    o = t.y,
                    i = t.width,
                    a = t.height,
                    c = t.data,
                    u = t.children,
                    l = t.padding,
                    s = r.Children.only(u);
                return s ? n.cloneElement(s, {
                    x: e,
                    y: o,
                    width: i,
                    height: a,
                    margin: l,
                    compact: !0,
                    data: c
                }) : null
            }
        }, {
            key: "renderTravellerLayer",
            value: function(e, r) {
                var o, i, a = this,
                    c = this.props,
                    u = c.y,
                    l = c.travellerWidth,
                    s = c.height,
                    f = c.traveller,
                    p = c.ariaLabel,
                    h = c.data,
                    y = c.startIndex,
                    d = c.endIndex,
                    v = Math.max(e, this.props.x),
                    m = WP(WP({}, au(this.props, !1)), {}, {
                        x: v,
                        y: u,
                        width: l,
                        height: s
                    }),
                    b = p || "Min value: ".concat(null === (o = h[y]) || void 0 === o ? void 0 : o.name, ", Max value: ").concat(null === (i = h[d]) || void 0 === i ? void 0 : i.name);
                return n.createElement(mu, {
                    tabIndex: 0,
                    role: "slider",
                    "aria-label": b,
                    "aria-valuenow": e,
                    className: "recharts-brush-traveller",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.travellerDragStartHandlers[r],
                    onTouchStart: this.travellerDragStartHandlers[r],
                    onKeyDown: function(t) {
                        ["ArrowLeft", "ArrowRight"].includes(t.key) && (t.preventDefault(), t.stopPropagation(), a.handleTravellerMoveKeyboard("ArrowRight" === t.key ? 1 : -1, r))
                    },
                    onFocus: function() {
                        a.setState({
                            isTravellerFocused: !0
                        })
                    },
                    onBlur: function() {
                        a.setState({
                            isTravellerFocused: !1
                        })
                    },
                    style: {
                        cursor: "col-resize"
                    }
                }, t.renderTraveller(f, m))
            }
        }, {
            key: "renderSlide",
            value: function(t, e) {
                var r = this.props,
                    o = r.y,
                    i = r.height,
                    a = r.stroke,
                    c = r.travellerWidth,
                    u = Math.min(t, e) + c,
                    l = Math.max(Math.abs(e - t) - c, 0);
                return n.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: {
                        cursor: "move"
                    },
                    stroke: "none",
                    fill: a,
                    fillOpacity: .2,
                    x: u,
                    y: o,
                    width: l,
                    height: i
                })
            }
        }, {
            key: "renderText",
            value: function() {
                var t = this.props,
                    e = t.startIndex,
                    r = t.endIndex,
                    o = t.y,
                    i = t.height,
                    a = t.travellerWidth,
                    c = t.stroke,
                    u = this.state,
                    l = u.startX,
                    s = u.endX,
                    f = {
                        pointerEvents: "none",
                        fill: c
                    };
                return n.createElement(mu, {
                    className: "recharts-brush-texts"
                }, n.createElement(Ah, FP({
                    textAnchor: "end",
                    verticalAnchor: "middle",
                    x: Math.min(l, s) - 5,
                    y: o + i / 2
                }, f), this.getTextOfTick(e)), n.createElement(Ah, FP({
                    textAnchor: "start",
                    verticalAnchor: "middle",
                    x: Math.max(l, s) + a + 5,
                    y: o + i / 2
                }, f), this.getTextOfTick(r)))
            }
        }, {
            key: "render",
            value: function() {
                var t = this.props,
                    e = t.data,
                    r = t.className,
                    o = t.children,
                    i = t.x,
                    a = t.y,
                    c = t.width,
                    u = t.height,
                    l = t.alwaysShowText,
                    s = this.state,
                    f = s.startX,
                    p = s.endX,
                    h = s.isTextActive,
                    y = s.isSlideMoving,
                    d = s.isTravellerMoving,
                    v = s.isTravellerFocused;
                if (!e || !e.length || !Ec(i) || !Ec(a) || !Ec(c) || !Ec(u) || c <= 0 || u <= 0) return null;
                var m, b, g, w, O = hc("recharts-brush", r),
                    x = 1 === n.Children.count(o),
                    j = (b = "none", g = (m = "userSelect").replace(/(\w)/, (function(t) {
                        return t.toUpperCase()
                    })), (w = LP.reduce((function(t, e) {
                        return RP(RP({}, t), {}, BP({}, e + g, b))
                    }), {}))[m] = b, w);
                return n.createElement(mu, {
                    className: O,
                    onMouseLeave: this.handleLeaveWrapper,
                    onTouchMove: this.handleTouchMove,
                    style: j
                }, this.renderBackground(), x && this.renderPanorama(), this.renderSlide(f, p), this.renderTravellerLayer(f, "startX"), this.renderTravellerLayer(p, "endX"), (h || y || d || v || l) && this.renderText())
            }
        }]) && $P(e.prototype, o), i && $P(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
        var e, o, i
    }();
HP(ZP, "displayName", "Brush"), HP(ZP, "defaultProps", {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    },
    leaveTimeOut: 1e3,
    alwaysShowText: !1
});
var JP = _f;
var QP = Ln,
    tE = qs,
    eE = function(t, e) {
        var r;
        return JP(t, (function(t, n, o) {
            return !(r = e(t, n, o))
        })), !!r
    },
    rE = v,
    nE = Cn;
const oE = e((function(t, e, r) {
    var n = rE(t) ? QP : eE;
    return r && nE(t, e, r) && (e = void 0), n(t, tE(e))
}));
var iE = function(t, e) {
        var r = t.alwaysShow,
            n = t.ifOverflow;
        return r && (n = "extendDomain"), n === e
    },
    aE = Ce,
    cE = Tf,
    uE = qs;
const lE = e((function(t, e) {
    var r = {};
    return e = uE(e), cE(t, (function(t, n, o) {
        aE(r, n, e(t, n, o))
    })), r
}));
var sE = _f;
var fE = function(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
            if (!e(t[r], r, t)) return !1;
        return !0
    },
    pE = function(t, e) {
        var r = !0;
        return sE(t, (function(t, n, o) {
            return r = !!e(t, n, o)
        })), r
    },
    hE = qs,
    yE = v,
    dE = Cn;
const vE = e((function(t, e, r) {
    var n = yE(t) ? fE : pE;
    return r && dE(t, e, r) && (e = void 0), n(t, hE(e))
}));
var mE = ["x", "y"];

function bE(t) {
    return (bE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function gE() {
    return gE = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, gE.apply(this, arguments)
}

function wE(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function OE(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? wE(Object(r), !0).forEach((function(e) {
            xE(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : wE(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function xE(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != bE(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != bE(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == bE(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function jE(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function SE(t, e) {
    var r = t.x,
        n = t.y,
        o = jE(t, mE),
        i = "".concat(r),
        a = parseInt(i, 10),
        c = "".concat(n),
        u = parseInt(c, 10),
        l = "".concat(e.height || o.height),
        s = parseInt(l, 10),
        f = "".concat(e.width || o.width),
        p = parseInt(f, 10);
    return OE(OE(OE(OE(OE({}, e), o), a ? {
        x: a
    } : {}), u ? {
        y: u
    } : {}), {}, {
        height: s,
        width: p,
        name: e.name,
        radius: e.radius
    })
}

function AE(t) {
    return n.createElement(OA, gE({
        shapeType: "rectangle",
        propTransformer: SE,
        activeClassName: "recharts-active-bar"
    }, t))
}
var PE, EE = ["value", "background"];

function kE(t) {
    return (kE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function TE(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function ME() {
    return ME = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, ME.apply(this, arguments)
}

function _E(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function CE(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? _E(Object(r), !0).forEach((function(e) {
            LE(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _E(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function DE(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, zE(n.key), n)
    }
}

function IE(t, e, r) {
    return e = RE(e),
        function(t, e) {
            if (e && ("object" === kE(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, NE() ? Reflect.construct(e, r || [], RE(t).constructor) : e.apply(t, r))
}

function NE() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (NE = function() {
        return !!t
    })()
}

function RE(t) {
    return (RE = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function BE(t, e) {
    return (BE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function LE(t, e, r) {
    return (e = zE(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function zE(t) {
    var e = function(t, e) {
        if ("object" != kE(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != kE(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == kE(e) ? e : e + ""
}
var FE = function() {
    function t() {
        var e;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return LE(e = IE(this, t, [].concat(n)), "state", {
            isAnimationFinished: !1
        }), LE(e, "id", Mc("recharts-bar-")), LE(e, "handleAnimationEnd", (function() {
            var t = e.props.onAnimationEnd;
            e.setState({
                isAnimationFinished: !0
            }), t && t()
        })), LE(e, "handleAnimationStart", (function() {
            var t = e.props.onAnimationStart;
            e.setState({
                isAnimationFinished: !1
            }), t && t()
        })), e
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && BE(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "getDerivedStateFromProps",
        value: function(t, e) {
            return t.animationId !== e.prevAnimationId ? {
                prevAnimationId: t.animationId,
                curData: t.data,
                prevData: e.curData
            } : t.data !== e.curData ? {
                curData: t.data
            } : null
        }
    }], (o = [{
        key: "renderRectanglesStatically",
        value: function(t) {
            var e = this,
                r = this.props,
                o = r.shape,
                i = r.dataKey,
                a = r.activeIndex,
                c = r.activeBar,
                u = au(this.props, !1);
            return t && t.map((function(t, r) {
                var l = r === a,
                    s = l ? c : o,
                    f = CE(CE(CE({}, u), t), {}, {
                        isActive: l,
                        option: s,
                        index: r,
                        dataKey: i,
                        onAnimationStart: e.handleAnimationStart,
                        onAnimationEnd: e.handleAnimationEnd
                    });
                return n.createElement(mu, ME({
                    className: "recharts-bar-rectangle"
                }, $c(e.props, t, r), {
                    key: "rectangle-".concat(null == t ? void 0 : t.x, "-").concat(null == t ? void 0 : t.y, "-").concat(null == t ? void 0 : t.value, "-").concat(r)
                }), n.createElement(AE, f))
            }))
        }
    }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
            var t = this,
                e = this.props,
                r = e.data,
                o = e.layout,
                i = e.isAnimationActive,
                a = e.animationBegin,
                c = e.animationDuration,
                u = e.animationEasing,
                l = e.animationId,
                s = this.state.prevData;
            return n.createElement(Pj, {
                begin: a,
                duration: c,
                isActive: i,
                easing: u,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "bar-".concat(l),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, (function(e) {
                var i = e.t,
                    a = r.map((function(t, e) {
                        var r = s && s[e];
                        if (r) {
                            var n = Dc(r.x, t.x),
                                a = Dc(r.y, t.y),
                                c = Dc(r.width, t.width),
                                u = Dc(r.height, t.height);
                            return CE(CE({}, t), {}, {
                                x: n(i),
                                y: a(i),
                                width: c(i),
                                height: u(i)
                            })
                        }
                        if ("horizontal" === o) {
                            var l = Dc(0, t.height)(i);
                            return CE(CE({}, t), {}, {
                                y: t.y + t.height - l,
                                height: l
                            })
                        }
                        var f = Dc(0, t.width)(i);
                        return CE(CE({}, t), {}, {
                            width: f
                        })
                    }));
                return n.createElement(mu, null, t.renderRectanglesStatically(a))
            }))
        }
    }, {
        key: "renderRectangles",
        value: function() {
            var t = this.props,
                e = t.data,
                r = t.isAnimationActive,
                n = this.state.prevData;
            return !(r && e && e.length) || n && Eb(n, e) ? this.renderRectanglesStatically(e) : this.renderRectanglesWithAnimation()
        }
    }, {
        key: "renderBackground",
        value: function() {
            var t = this,
                e = this.props,
                r = e.data,
                o = e.dataKey,
                i = e.activeIndex,
                a = au(this.props.background, !1);
            return r.map((function(e, r) {
                e.value;
                var c = e.background,
                    u = TE(e, EE);
                if (!c) return null;
                var l = CE(CE(CE(CE(CE({}, u), {}, {
                    fill: "#eee"
                }, c), a), $c(t.props, e, r)), {}, {
                    onAnimationStart: t.handleAnimationStart,
                    onAnimationEnd: t.handleAnimationEnd,
                    dataKey: o,
                    index: r,
                    className: "recharts-bar-background-rectangle"
                });
                return n.createElement(AE, ME({
                    key: "background-bar-".concat(r),
                    option: t.props.background,
                    isActive: r === i
                }, l))
            }))
        }
    }, {
        key: "renderErrorBar",
        value: function(t, e) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var r = this.props,
                o = r.data,
                i = r.xAxis,
                a = r.yAxis,
                c = r.layout,
                u = Qc(r.children, Wg);
            if (!u) return null;
            var l = "vertical" === c ? o[0].height / 2 : o[0].width / 2,
                s = function(t, e) {
                    var r = Array.isArray(t.value) ? t.value[1] : t.value;
                    return {
                        x: t.x,
                        y: t.y,
                        value: r,
                        errorVal: tw(t, e)
                    }
                },
                f = {
                    clipPath: t ? "url(#clipPath-".concat(e, ")") : null
                };
            return n.createElement(mu, f, u.map((function(t) {
                return n.cloneElement(t, {
                    key: "error-bar-".concat(e, "-").concat(t.props.dataKey),
                    data: o,
                    xAxis: i,
                    yAxis: a,
                    layout: c,
                    offset: l,
                    dataPointFormatter: s
                })
            })))
        }
    }, {
        key: "render",
        value: function() {
            var t = this.props,
                e = t.hide,
                r = t.data,
                o = t.className,
                i = t.xAxis,
                a = t.yAxis,
                c = t.left,
                u = t.top,
                l = t.width,
                s = t.height,
                f = t.isAnimationActive,
                p = t.background,
                h = t.id;
            if (e || !r || !r.length) return null;
            var y = this.state.isAnimationFinished,
                d = hc("recharts-bar", o),
                v = i && i.allowDataOverflow,
                m = a && a.allowDataOverflow,
                b = v || m,
                g = yc(h) ? this.id : h;
            return n.createElement(mu, {
                className: d
            }, v || m ? n.createElement("defs", null, n.createElement("clipPath", {
                id: "clipPath-".concat(g)
            }, n.createElement("rect", {
                x: v ? c : c - l / 2,
                y: m ? u : u - s / 2,
                width: v ? l : 2 * l,
                height: m ? s : 2 * s
            }))) : null, n.createElement(mu, {
                className: "recharts-bar-rectangles",
                clipPath: b ? "url(#clipPath-".concat(g, ")") : null
            }, p ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(b, g), (!f || y) && vO.renderCallByParent(this.props, r))
        }
    }]) && DE(e.prototype, o), i && DE(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();

function UE(t) {
    return (UE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function WE(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, VE(n.key), n)
    }
}

function $E(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function KE(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? $E(Object(r), !0).forEach((function(e) {
            qE(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $E(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function qE(t, e, r) {
    return (e = VE(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function VE(t) {
    var e = function(t, e) {
        if ("object" != UE(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != UE(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == UE(e) ? e : e + ""
}
PE = FE, LE(FE, "displayName", "Bar"), LE(FE, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    legendType: "rect",
    minPointSize: 0,
    hide: !1,
    data: [],
    layout: "vertical",
    activeBar: !1,
    isAnimationActive: !xp.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease"
}), LE(FE, "getComposedData", (function(t) {
    var e = t.props,
        r = t.item,
        n = t.barPosition,
        o = t.bandSize,
        i = t.xAxis,
        a = t.yAxis,
        c = t.xAxisTicks,
        u = t.yAxisTicks,
        l = t.stackedData,
        s = t.dataStartIndex,
        f = t.displayedData,
        p = t.offset,
        h = hw(n, r);
    if (!h) return null;
    var y = e.layout,
        d = r.type.defaultProps,
        v = void 0 !== d ? CE(CE({}, d), r.props) : r.props,
        m = v.dataKey,
        b = v.children,
        g = v.minPointSize,
        w = "horizontal" === y ? a : i,
        O = l ? w.scale.domain() : null,
        x = ww({
            numericAxis: w
        }),
        j = Qc(b, Wp),
        S = f.map((function(t, e) {
            var n, f, p, d, v, b;
            l ? n = yw(l[s + e], O) : (n = tw(t, m), Array.isArray(n) || (n = [x, n]));
            var w = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return function(r, n) {
                    if ("number" == typeof t) return t;
                    var o = "number" == typeof r;
                    return o ? t(r, n) : (o || kg(), e)
                }
            }(g, PE.defaultProps.minPointSize)(n[1], e);
            if ("horizontal" === y) {
                var S, A = [a.scale(n[0]), a.scale(n[1])],
                    P = A[0],
                    E = A[1];
                f = gw({
                    axis: i,
                    ticks: c,
                    bandSize: o,
                    offset: h.offset,
                    entry: t,
                    index: e
                }), p = null !== (S = null != E ? E : P) && void 0 !== S ? S : void 0, d = h.size;
                var k = P - E;
                if (v = Number.isNaN(k) ? 0 : k, b = {
                        x: f,
                        y: a.y,
                        width: d,
                        height: a.height
                    }, Math.abs(w) > 0 && Math.abs(v) < Math.abs(w)) {
                    var T = Ac(v || w) * (Math.abs(w) - Math.abs(v));
                    p -= T, v += T
                }
            } else {
                var M = [i.scale(n[0]), i.scale(n[1])],
                    _ = M[0],
                    C = M[1];
                if (f = _, p = gw({
                        axis: a,
                        ticks: u,
                        bandSize: o,
                        offset: h.offset,
                        entry: t,
                        index: e
                    }), d = C - _, v = h.size, b = {
                        x: i.x,
                        y: p,
                        width: i.width,
                        height: v
                    }, Math.abs(w) > 0 && Math.abs(d) < Math.abs(w)) d += Ac(d || w) * (Math.abs(w) - Math.abs(d))
            }
            return CE(CE(CE({}, t), {}, {
                x: f,
                y: p,
                width: d,
                height: v,
                value: l ? n : n[1],
                payload: t,
                background: b
            }, j && j[e] && j[e].props), {}, {
                tooltipPayload: [Ew(r, t)],
                tooltipPosition: {
                    x: f + d / 2,
                    y: p + v / 2
                }
            })
        }));
    return CE({
        data: S,
        layout: y
    }, p)
}));
var XE = function(t, e, r, n, o) {
        var i = t.width,
            a = t.height,
            c = t.layout,
            u = t.children,
            l = Object.keys(e),
            s = {
                left: r.left,
                leftMirror: r.left,
                right: i - r.right,
                rightMirror: i - r.right,
                top: r.top,
                topMirror: r.top,
                bottom: a - r.bottom,
                bottomMirror: a - r.bottom
            },
            f = !!tu(u, FE);
        return l.reduce((function(i, a) {
            var u, l, p, h, y, d = e[a],
                v = d.orientation,
                m = d.domain,
                b = d.padding,
                g = void 0 === b ? {} : b,
                w = d.mirror,
                O = d.reversed,
                x = "".concat(v).concat(w ? "Mirror" : "");
            if ("number" === d.type && ("gap" === d.padding || "no-gap" === d.padding)) {
                var j = m[1] - m[0],
                    S = 1 / 0,
                    A = d.categoricalDomain.sort(Nc);
                if (A.forEach((function(t, e) {
                        e > 0 && (S = Math.min((t || 0) - (A[e - 1] || 0), S))
                    })), Number.isFinite(S)) {
                    var P = S / j,
                        E = "vertical" === d.layout ? r.height : r.width;
                    if ("gap" === d.padding && (u = P * E / 2), "no-gap" === d.padding) {
                        var k = _c(t.barCategoryGap, P * E),
                            T = P * E / 2;
                        u = T - k - (T - k) / E * k
                    }
                }
            }
            l = "xAxis" === n ? [r.left + (g.left || 0) + (u || 0), r.left + r.width - (g.right || 0) - (u || 0)] : "yAxis" === n ? "horizontal" === c ? [r.top + r.height - (g.bottom || 0), r.top + (g.top || 0)] : [r.top + (g.top || 0) + (u || 0), r.top + r.height - (g.bottom || 0) - (u || 0)] : d.range, O && (l = [l[1], l[0]]);
            var M = sw(d, o, f),
                _ = M.scale,
                C = M.realScaleType;
            _.domain(m).range(l), pw(_);
            var D = mw(_, KE(KE({}, d), {}, {
                realScaleType: C
            }));
            "xAxis" === n ? (y = "top" === v && !w || "bottom" === v && w, p = r.left, h = s[x] - y * d.height) : "yAxis" === n && (y = "left" === v && !w || "right" === v && w, p = s[x] - y * d.width, h = r.top);
            var I = KE(KE(KE({}, d), D), {}, {
                realScaleType: C,
                x: p,
                y: h,
                scale: _,
                width: "xAxis" === n ? r.width : d.width,
                height: "yAxis" === n ? r.height : d.height
            });
            return I.bandSize = Aw(I, D), d.hide || "xAxis" !== n ? d.hide || (s[x] += (y ? -1 : 1) * I.width) : s[x] += (y ? -1 : 1) * I.height, KE(KE({}, i), {}, qE({}, a, I))
        }), {})
    },
    HE = function(t, e) {
        var r = t.x,
            n = t.y,
            o = e.x,
            i = e.y;
        return {
            x: Math.min(r, o),
            y: Math.min(n, i),
            width: Math.abs(o - r),
            height: Math.abs(i - n)
        }
    },
    GE = function() {
        function t(e) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.scale = e
        }
        return e = t, r = [{
            key: "domain",
            get: function() {
                return this.scale.domain
            }
        }, {
            key: "range",
            get: function() {
                return this.scale.range
            }
        }, {
            key: "rangeMin",
            get: function() {
                return this.range()[0]
            }
        }, {
            key: "rangeMax",
            get: function() {
                return this.range()[1]
            }
        }, {
            key: "bandwidth",
            get: function() {
                return this.scale.bandwidth
            }
        }, {
            key: "apply",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = e.bandAware,
                    n = e.position;
                if (void 0 !== t) {
                    if (n) switch (n) {
                        case "start":
                        default:
                            return this.scale(t);
                        case "middle":
                            var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                            return this.scale(t) + o;
                        case "end":
                            var i = this.bandwidth ? this.bandwidth() : 0;
                            return this.scale(t) + i
                    }
                    if (r) {
                        var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(t) + a
                    }
                    return this.scale(t)
                }
            }
        }, {
            key: "isInRange",
            value: function(t) {
                var e = this.range(),
                    r = e[0],
                    n = e[e.length - 1];
                return r <= n ? t >= r && t <= n : t >= n && t <= r
            }
        }], n = [{
            key: "create",
            value: function(e) {
                return new t(e)
            }
        }], r && WE(e.prototype, r), n && WE(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
        var e, r, n
    }();
qE(GE, "EPS", 1e-4);
var YE = function(t) {
    var e = Object.keys(t).reduce((function(e, r) {
        return KE(KE({}, e), {}, qE({}, r, GE.create(t[r])))
    }), {});
    return KE(KE({}, e), {}, {
        apply: function(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = r.bandAware,
                o = r.position;
            return lE(t, (function(t, r) {
                return e[r].apply(t, {
                    bandAware: n,
                    position: o
                })
            }))
        },
        isInRange: function(t) {
            return vE(t, (function(t, r) {
                return e[r].isInRange(t)
            }))
        }
    })
};
var ZE = function(t) {
        var e = t.width,
            r = t.height,
            n = function(t) {
                return (t % 180 + 180) % 180
            }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
            o = n * Math.PI / 180,
            i = Math.atan(r / e),
            a = o > i && o < Math.PI - i ? r / Math.sin(o) : e / Math.cos(o);
        return Math.abs(a)
    },
    JE = qs,
    QE = mr,
    tk = mo;
var ek = function(t) {
        return function(e, r, n) {
            var o = Object(e);
            if (!QE(e)) {
                var i = JE(r);
                e = tk(e), r = function(t) {
                    return i(o[t], t, o)
                }
            }
            var a = t(e, r, n);
            return a > -1 ? o[i ? e[a] : a] : void 0
        }
    },
    rk = TP;
var nk = Vs,
    ok = qs,
    ik = function(t) {
        var e = rk(t),
            r = e % 1;
        return e == e ? r ? e - r : e : 0
    },
    ak = Math.max;
const ck = e(ek((function(t, e, r) {
    var n = null == t ? 0 : t.length;
    if (!n) return -1;
    var o = null == r ? 0 : ik(r);
    return o < 0 && (o = ak(n + o, 0)), nk(t, ok(e), o)
})));
var uk = Kt((function(t) {
        return {
            x: t.left,
            y: t.top,
            width: t.width,
            height: t.height
        }
    }), (function(t) {
        return ["l", t.left, "t", t.top, "w", t.width, "h", t.height].join("")
    })),
    lk = r.createContext(void 0),
    sk = r.createContext(void 0),
    fk = r.createContext(void 0),
    pk = r.createContext({}),
    hk = r.createContext(void 0),
    yk = r.createContext(0),
    dk = r.createContext(0),
    vk = function(t) {
        var e = t.state,
            r = e.xAxisMap,
            o = e.yAxisMap,
            i = e.offset,
            a = t.clipPathId,
            c = t.children,
            u = t.width,
            l = t.height,
            s = uk(i);
        return n.createElement(lk.Provider, {
            value: r
        }, n.createElement(sk.Provider, {
            value: o
        }, n.createElement(pk.Provider, {
            value: i
        }, n.createElement(fk.Provider, {
            value: s
        }, n.createElement(hk.Provider, {
            value: a
        }, n.createElement(yk.Provider, {
            value: l
        }, n.createElement(dk.Provider, {
            value: u
        }, c)))))))
    },
    mk = function(t) {
        var e = r.useContext(lk);
        null == e && kg();
        var n = e[t];
        return null == n && kg(), n
    },
    bk = function(t) {
        var e = r.useContext(sk);
        null == e && kg();
        var n = e[t];
        return null == n && kg(), n
    },
    gk = function() {
        return r.useContext(dk)
    },
    wk = function() {
        return r.useContext(yk)
    };

function Ok(t) {
    return (Ok = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function xk(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Mk(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function jk(t, e, r) {
    return e = Ak(e),
        function(t, e) {
            if (e && ("object" === Ok(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, Sk() ? Reflect.construct(e, r || [], Ak(t).constructor) : e.apply(t, r))
}

function Sk() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (Sk = function() {
        return !!t
    })()
}

function Ak(t) {
    return (Ak = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function Pk(t, e) {
    return (Pk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function Ek(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function kk(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Ek(Object(r), !0).forEach((function(e) {
            Tk(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ek(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Tk(t, e, r) {
    return (e = Mk(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Mk(t) {
    var e = function(t, e) {
        if ("object" != Ok(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Ok(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == Ok(e) ? e : e + ""
}

function _k(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return Ck(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ck(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Ck(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function Dk() {
    return Dk = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, Dk.apply(this, arguments)
}

function Ik(t) {
    var e = t.x,
        o = t.y,
        i = t.segment,
        a = t.xAxisId,
        c = t.yAxisId,
        u = t.shape,
        l = t.className,
        s = t.alwaysShow,
        f = r.useContext(hk),
        p = mk(a),
        h = bk(c),
        y = r.useContext(fk);
    if (!f || !y) return null;
    bu(void 0 === s, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var d = function(t, e, r, n, o, i, a, c, u) {
        var l = o.x,
            s = o.y,
            f = o.width,
            p = o.height;
        if (r) {
            var h = u.y,
                y = t.y.apply(h, {
                    position: i
                });
            if (iE(u, "discard") && !t.y.isInRange(y)) return null;
            var d = [{
                x: l + f,
                y: y
            }, {
                x: l,
                y: y
            }];
            return "left" === c ? d.reverse() : d
        }
        if (e) {
            var v = u.x,
                m = t.x.apply(v, {
                    position: i
                });
            if (iE(u, "discard") && !t.x.isInRange(m)) return null;
            var b = [{
                x: m,
                y: s + p
            }, {
                x: m,
                y: s
            }];
            return "top" === a ? b.reverse() : b
        }
        if (n) {
            var g = u.segment.map((function(e) {
                return t.apply(e, {
                    position: i
                })
            }));
            return iE(u, "discard") && oE(g, (function(e) {
                return !t.isInRange(e)
            })) ? null : g
        }
        return null
    }(YE({
        x: p.scale,
        y: h.scale
    }), kc(e), kc(o), i && 2 === i.length, y, t.position, p.orientation, h.orientation, t);
    if (!d) return null;
    var v = _k(d, 2),
        m = v[0],
        b = m.x,
        g = m.y,
        w = v[1],
        O = w.x,
        x = w.y,
        j = kk(kk({
            clipPath: iE(t, "hidden") ? "url(#".concat(f, ")") : void 0
        }, au(t, !0)), {}, {
            x1: b,
            y1: g,
            x2: O,
            y2: x
        });
    return n.createElement(mu, {
        className: hc("recharts-reference-line", l)
    }, function(t, e) {
        return n.isValidElement(t) ? n.cloneElement(t, e) : A(t) ? t(e) : n.createElement("line", Dk({}, e, {
            className: "recharts-reference-line-line"
        }))
    }(u, j), nO.renderCallByParent(t, function(t) {
        var e = t.x1,
            r = t.y1,
            n = t.x2,
            o = t.y2;
        return HE({
            x: e,
            y: r
        }, {
            x: n,
            y: o
        })
    }({
        x1: b,
        y1: g,
        x2: O,
        y2: x
    })))
}
var Nk = function() {
    function t() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), jk(this, t, arguments)
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && Pk(t, e)
    }(t, n.Component), xk(t, [{
        key: "render",
        value: function() {
            return n.createElement(Ik, this.props)
        }
    }])
}();

function Rk() {
    return Rk = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, Rk.apply(this, arguments)
}

function Bk(t) {
    return (Bk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Lk(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function zk(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Lk(Object(r), !0).forEach((function(e) {
            qk(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Lk(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Fk(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Vk(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Uk(t, e, r) {
    return e = $k(e),
        function(t, e) {
            if (e && ("object" === Bk(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, Wk() ? Reflect.construct(e, r || [], $k(t).constructor) : e.apply(t, r))
}

function Wk() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (Wk = function() {
        return !!t
    })()
}

function $k(t) {
    return ($k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function Kk(t, e) {
    return (Kk = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function qk(t, e, r) {
    return (e = Vk(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Vk(t) {
    var e = function(t, e) {
        if ("object" != Bk(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Bk(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == Bk(e) ? e : e + ""
}
Tk(Nk, "displayName", "ReferenceLine"), Tk(Nk, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle"
});
var Xk = function() {
    function t() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), Uk(this, t, arguments)
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && Kk(t, e)
    }(t, n.Component), Fk(t, [{
        key: "render",
        value: function() {
            var e = this.props,
                r = e.x,
                o = e.y,
                i = e.r,
                a = e.alwaysShow,
                c = e.clipPathId,
                u = kc(r),
                l = kc(o);
            if (bu(void 0 === a, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !l) return null;
            var s = function(t) {
                var e = t.x,
                    r = t.y,
                    n = t.xAxis,
                    o = t.yAxis,
                    i = YE({
                        x: n.scale,
                        y: o.scale
                    }),
                    a = i.apply({
                        x: e,
                        y: r
                    }, {
                        bandAware: !0
                    });
                return iE(t, "discard") && !i.isInRange(a) ? null : a
            }(this.props);
            if (!s) return null;
            var f = s.x,
                p = s.y,
                h = this.props,
                y = h.shape,
                d = h.className,
                v = zk(zk({
                    clipPath: iE(this.props, "hidden") ? "url(#".concat(c, ")") : void 0
                }, au(this.props, !0)), {}, {
                    cx: f,
                    cy: p
                });
            return n.createElement(mu, {
                className: hc("recharts-reference-dot", d)
            }, t.renderDot(y, v), nO.renderCallByParent(this.props, {
                x: f - i,
                y: p - i,
                width: 2 * i,
                height: 2 * i
            }))
        }
    }])
}();

function Hk() {
    return Hk = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, Hk.apply(this, arguments)
}

function Gk(t) {
    return (Gk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function Yk(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function Zk(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Yk(Object(r), !0).forEach((function(e) {
            nT(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Yk(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Jk(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, oT(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function Qk(t, e, r) {
    return e = eT(e),
        function(t, e) {
            if (e && ("object" === Gk(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, tT() ? Reflect.construct(e, r || [], eT(t).constructor) : e.apply(t, r))
}

function tT() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (tT = function() {
        return !!t
    })()
}

function eT(t) {
    return (eT = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function rT(t, e) {
    return (rT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function nT(t, e, r) {
    return (e = oT(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function oT(t) {
    var e = function(t, e) {
        if ("object" != Gk(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != Gk(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == Gk(e) ? e : e + ""
}
qk(Xk, "displayName", "ReferenceDot"), qk(Xk, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1
}), qk(Xk, "renderDot", (function(t, e) {
    return n.isValidElement(t) ? n.cloneElement(t, e) : A(t) ? t(e) : n.createElement(Xj, Rk({}, e, {
        cx: e.cx,
        cy: e.cy,
        className: "recharts-reference-dot-dot"
    }))
}));
var iT = function() {
    function t() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), Qk(this, t, arguments)
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && rT(t, e)
    }(t, n.Component), Jk(t, [{
        key: "render",
        value: function() {
            var e = this.props,
                r = e.x1,
                o = e.x2,
                i = e.y1,
                a = e.y2,
                c = e.className,
                u = e.alwaysShow,
                l = e.clipPathId;
            bu(void 0 === u, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
            var s = kc(r),
                f = kc(o),
                p = kc(i),
                h = kc(a),
                y = this.props.shape;
            if (!(s || f || p || h || y)) return null;
            var d = function(t, e, r, n, o) {
                var i = o.x1,
                    a = o.x2,
                    c = o.y1,
                    u = o.y2,
                    l = o.xAxis,
                    s = o.yAxis;
                if (!l || !s) return null;
                var f = YE({
                        x: l.scale,
                        y: s.scale
                    }),
                    p = {
                        x: t ? f.x.apply(i, {
                            position: "start"
                        }) : f.x.rangeMin,
                        y: r ? f.y.apply(c, {
                            position: "start"
                        }) : f.y.rangeMin
                    },
                    h = {
                        x: e ? f.x.apply(a, {
                            position: "end"
                        }) : f.x.rangeMax,
                        y: n ? f.y.apply(u, {
                            position: "end"
                        }) : f.y.rangeMax
                    };
                return !iE(o, "discard") || f.isInRange(p) && f.isInRange(h) ? HE(p, h) : null
            }(s, f, p, h, this.props);
            if (!d && !y) return null;
            var v = iE(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
            return n.createElement(mu, {
                className: hc("recharts-reference-area", c)
            }, t.renderRect(y, Zk(Zk({
                clipPath: v
            }, au(this.props, !0)), d)), nO.renderCallByParent(this.props, d))
        }
    }])
}();

function aT(t, e, r) {
    if (e < 1) return [];
    if (1 === e && void 0 === r) return t;
    for (var n = [], o = 0; o < t.length; o += e) n.push(t[o]);
    return n
}

function cT(t, e, r, n, o) {
    if (t * e < t * n || t * e > t * o) return !1;
    var i = r();
    return t * (e - t * i / 2 - n) >= 0 && t * (e + t * i / 2 - o) <= 0
}

function uT(t) {
    return (uT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function lT(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function sT(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? lT(Object(r), !0).forEach((function(e) {
            fT(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : lT(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function fT(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != uT(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != uT(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == uT(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function pT(t, e, r) {
    var n = t.tick,
        o = t.ticks,
        i = t.viewBox,
        a = t.minTickGap,
        c = t.orientation,
        u = t.interval,
        l = t.tickFormatter,
        s = t.unit,
        f = t.angle;
    if (!o || !o.length || !n) return [];
    if (Ec(u) || xp.isSsr) return function(t, e) {
        return aT(t, e + 1)
    }(o, "number" == typeof u && Ec(u) ? u : 0);
    var p = [],
        h = "top" === c || "bottom" === c ? "width" : "height",
        y = s && "width" === h ? Yp(s, {
            fontSize: e,
            letterSpacing: r
        }) : {
            width: 0,
            height: 0
        },
        d = function(t, n) {
            var o = A(l) ? l(t.value, n) : t.value;
            return "width" === h ? function(t, e, r) {
                var n = {
                    width: t.width + e.width,
                    height: t.height + e.height
                };
                return ZE(n, r)
            }(Yp(o, {
                fontSize: e,
                letterSpacing: r
            }), y, f) : Yp(o, {
                fontSize: e,
                letterSpacing: r
            })[h]
        },
        v = o.length >= 2 ? Ac(o[1].coordinate - o[0].coordinate) : 1,
        m = function(t, e, r) {
            var n = "width" === r,
                o = t.x,
                i = t.y,
                a = t.width,
                c = t.height;
            return 1 === e ? {
                start: n ? o : i,
                end: n ? o + a : i + c
            } : {
                start: n ? o + a : i + c,
                end: n ? o : i
            }
        }(i, v, h);
    return "equidistantPreserveStart" === u ? function(t, e, r, n, o) {
        for (var i, a = (n || []).slice(), c = e.start, u = e.end, l = 0, s = 1, f = c, p = function() {
                var e = null == n ? void 0 : n[l];
                if (void 0 === e) return {
                    v: aT(n, s)
                };
                var i, a = l,
                    p = function() {
                        return void 0 === i && (i = r(e, a)), i
                    },
                    h = e.coordinate,
                    y = 0 === l || cT(t, h, p, f, u);
                y || (l = 0, f = c, s += 1), y && (f = h + t * (p() / 2 + o), l += s)
            }; s <= a.length;)
            if (i = p()) return i.v;
        return []
    }(v, m, d, o, a) : (p = "preserveStart" === u || "preserveStartEnd" === u ? function(t, e, r, n, o, i) {
        var a = (n || []).slice(),
            c = a.length,
            u = e.start,
            l = e.end;
        if (i) {
            var s = n[c - 1],
                f = r(s, c - 1),
                p = t * (s.coordinate + t * f / 2 - l);
            a[c - 1] = s = sT(sT({}, s), {}, {
                tickCoord: p > 0 ? s.coordinate - p * t : s.coordinate
            }), cT(t, s.tickCoord, (function() {
                return f
            }), u, l) && (l = s.tickCoord - t * (f / 2 + o), a[c - 1] = sT(sT({}, s), {}, {
                isShow: !0
            }))
        }
        for (var h = i ? c - 1 : c, y = function(e) {
                var n, i = a[e],
                    c = function() {
                        return void 0 === n && (n = r(i, e)), n
                    };
                if (0 === e) {
                    var s = t * (i.coordinate - t * c() / 2 - u);
                    a[e] = i = sT(sT({}, i), {}, {
                        tickCoord: s < 0 ? i.coordinate - s * t : i.coordinate
                    })
                } else a[e] = i = sT(sT({}, i), {}, {
                    tickCoord: i.coordinate
                });
                cT(t, i.tickCoord, c, u, l) && (u = i.tickCoord + t * (c() / 2 + o), a[e] = sT(sT({}, i), {}, {
                    isShow: !0
                }))
            }, d = 0; d < h; d++) y(d);
        return a
    }(v, m, d, o, a, "preserveStartEnd" === u) : function(t, e, r, n, o) {
        for (var i = (n || []).slice(), a = i.length, c = e.start, u = e.end, l = function(e) {
                var n, l = i[e],
                    s = function() {
                        return void 0 === n && (n = r(l, e)), n
                    };
                if (e === a - 1) {
                    var f = t * (l.coordinate + t * s() / 2 - u);
                    i[e] = l = sT(sT({}, l), {}, {
                        tickCoord: f > 0 ? l.coordinate - f * t : l.coordinate
                    })
                } else i[e] = l = sT(sT({}, l), {}, {
                    tickCoord: l.coordinate
                });
                cT(t, l.tickCoord, s, c, u) && (u = l.tickCoord - t * (s() / 2 + o), i[e] = sT(sT({}, l), {}, {
                    isShow: !0
                }))
            }, s = a - 1; s >= 0; s--) l(s);
        return i
    }(v, m, d, o, a), p.filter((function(t) {
        return t.isShow
    })))
}
nT(iT, "displayName", "ReferenceArea"), nT(iT, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: .5,
    stroke: "none",
    strokeWidth: 1
}), nT(iT, "renderRect", (function(t, e) {
    return n.isValidElement(t) ? n.cloneElement(t, e) : A(t) ? t(e) : n.createElement(Bj, Hk({}, e, {
        className: "recharts-reference-area-rect"
    }))
}));
var hT = ["viewBox"],
    yT = ["viewBox"],
    dT = ["ticks"];

function vT(t) {
    return (vT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function mT() {
    return mT = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, mT.apply(this, arguments)
}

function bT(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function gT(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? bT(Object(r), !0).forEach((function(e) {
            PT(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : bT(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function wT(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function OT(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, ET(n.key), n)
    }
}

function xT(t, e, r) {
    return e = ST(e),
        function(t, e) {
            if (e && ("object" === vT(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, jT() ? Reflect.construct(e, r || [], ST(t).constructor) : e.apply(t, r))
}

function jT() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (jT = function() {
        return !!t
    })()
}

function ST(t) {
    return (ST = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function AT(t, e) {
    return (AT = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function PT(t, e, r) {
    return (e = ET(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function ET(t) {
    var e = function(t, e) {
        if ("object" != vT(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != vT(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == vT(e) ? e : e + ""
}
var kT = function() {
    function t(e) {
        var r;
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), (r = xT(this, t, [e])).state = {
            fontSize: "",
            letterSpacing: ""
        }, r
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && AT(t, e)
    }(t, r.Component), e = t, i = [{
        key: "renderTickItem",
        value: function(t, e, r) {
            return n.isValidElement(t) ? n.cloneElement(t, e) : A(t) ? t(e) : n.createElement(Ah, mT({}, e, {
                className: "recharts-cartesian-axis-tick-value"
            }), r)
        }
    }], (o = [{
        key: "shouldComponentUpdate",
        value: function(t, e) {
            var r = t.viewBox,
                n = wT(t, hT),
                o = this.props,
                i = o.viewBox,
                a = wT(o, yT);
            return !Rc(r, i) || !Rc(n, a) || !Rc(e, this.state)
        }
    }, {
        key: "componentDidMount",
        value: function() {
            var t = this.layerReference;
            if (t) {
                var e = t.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
                e && this.setState({
                    fontSize: window.getComputedStyle(e).fontSize,
                    letterSpacing: window.getComputedStyle(e).letterSpacing
                })
            }
        }
    }, {
        key: "getTickLineCoord",
        value: function(t) {
            var e, r, n, o, i, a, c = this.props,
                u = c.x,
                l = c.y,
                s = c.width,
                f = c.height,
                p = c.orientation,
                h = c.tickSize,
                y = c.mirror,
                d = c.tickMargin,
                v = y ? -1 : 1,
                m = t.tickSize || h,
                b = Ec(t.tickCoord) ? t.tickCoord : t.coordinate;
            switch (p) {
                case "top":
                    e = r = t.coordinate, a = (n = (o = l + +!y * f) - v * m) - v * d, i = b;
                    break;
                case "left":
                    n = o = t.coordinate, i = (e = (r = u + +!y * s) - v * m) - v * d, a = b;
                    break;
                case "right":
                    n = o = t.coordinate, i = (e = (r = u + +y * s) + v * m) + v * d, a = b;
                    break;
                default:
                    e = r = t.coordinate, a = (n = (o = l + +y * f) + v * m) + v * d, i = b
            }
            return {
                line: {
                    x1: e,
                    y1: n,
                    x2: r,
                    y2: o
                },
                tick: {
                    x: i,
                    y: a
                }
            }
        }
    }, {
        key: "getTickTextAnchor",
        value: function() {
            var t, e = this.props,
                r = e.orientation,
                n = e.mirror;
            switch (r) {
                case "left":
                    t = n ? "start" : "end";
                    break;
                case "right":
                    t = n ? "end" : "start";
                    break;
                default:
                    t = "middle"
            }
            return t
        }
    }, {
        key: "getTickVerticalAnchor",
        value: function() {
            var t = this.props,
                e = t.orientation,
                r = t.mirror,
                n = "end";
            switch (e) {
                case "left":
                case "right":
                    n = "middle";
                    break;
                case "top":
                    n = r ? "start" : "end";
                    break;
                default:
                    n = r ? "end" : "start"
            }
            return n
        }
    }, {
        key: "renderAxisLine",
        value: function() {
            var t = this.props,
                e = t.x,
                r = t.y,
                o = t.width,
                i = t.height,
                a = t.orientation,
                c = t.mirror,
                u = t.axisLine,
                l = gT(gT(gT({}, au(this.props, !1)), au(u, !1)), {}, {
                    fill: "none"
                });
            if ("top" === a || "bottom" === a) {
                var s = +("top" === a && !c || "bottom" === a && c);
                l = gT(gT({}, l), {}, {
                    x1: e,
                    y1: r + s * i,
                    x2: e + o,
                    y2: r + s * i
                })
            } else {
                var f = +("left" === a && !c || "right" === a && c);
                l = gT(gT({}, l), {}, {
                    x1: e + f * o,
                    y1: r,
                    x2: e + f * o,
                    y2: r + i
                })
            }
            return n.createElement("line", mT({}, l, {
                className: hc("recharts-cartesian-axis-line", ve(u, "className"))
            }))
        }
    }, {
        key: "renderTicks",
        value: function(e, r, o) {
            var i = this,
                a = this.props,
                c = a.tickLine,
                u = a.stroke,
                l = a.tick,
                s = a.tickFormatter,
                f = a.unit,
                p = pT(gT(gT({}, this.props), {}, {
                    ticks: e
                }), r, o),
                h = this.getTickTextAnchor(),
                y = this.getTickVerticalAnchor(),
                d = au(this.props, !1),
                v = au(l, !1),
                m = gT(gT({}, d), {}, {
                    fill: "none"
                }, au(c, !1)),
                b = p.map((function(e, r) {
                    var o = i.getTickLineCoord(e),
                        a = o.line,
                        b = o.tick,
                        g = gT(gT(gT(gT({
                            textAnchor: h,
                            verticalAnchor: y
                        }, d), {}, {
                            stroke: "none",
                            fill: u
                        }, v), b), {}, {
                            index: r,
                            payload: e,
                            visibleTicksCount: p.length,
                            tickFormatter: s
                        });
                    return n.createElement(mu, mT({
                        className: "recharts-cartesian-axis-tick",
                        key: "tick-".concat(e.value, "-").concat(e.coordinate, "-").concat(e.tickCoord)
                    }, $c(i.props, e, r)), c && n.createElement("line", mT({}, m, a, {
                        className: hc("recharts-cartesian-axis-tick-line", ve(c, "className"))
                    })), l && t.renderTickItem(l, g, "".concat(A(s) ? s(e.value, r) : e.value).concat(f || "")))
                }));
            return n.createElement("g", {
                className: "recharts-cartesian-axis-ticks"
            }, b)
        }
    }, {
        key: "render",
        value: function() {
            var t = this,
                e = this.props,
                r = e.axisLine,
                o = e.width,
                i = e.height,
                a = e.ticksGenerator,
                c = e.className;
            if (e.hide) return null;
            var u = this.props,
                l = u.ticks,
                s = wT(u, dT),
                f = l;
            return A(a) && (f = l && l.length > 0 ? a(this.props) : a(s)), o <= 0 || i <= 0 || !f || !f.length ? null : n.createElement(mu, {
                className: hc("recharts-cartesian-axis", c),
                ref: function(e) {
                    t.layerReference = e
                }
            }, r && this.renderAxisLine(), this.renderTicks(f, this.state.fontSize, this.state.letterSpacing), nO.renderCallByParent(this.props))
        }
    }]) && OT(e.prototype, o), i && OT(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();
PT(kT, "displayName", "CartesianAxis"), PT(kT, "defaultProps", {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: !0,
    axisLine: !0,
    tick: !0,
    mirror: !1,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd"
});
var TT = ["x1", "y1", "x2", "y2", "key"],
    MT = ["offset"];

function _T(t) {
    return (_T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function CT(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function DT(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? CT(Object(r), !0).forEach((function(e) {
            IT(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : CT(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function IT(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != _T(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != _T(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == _T(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function NT() {
    return NT = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, NT.apply(this, arguments)
}

function RT(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}
var BT = function(t) {
    var e = t.fill;
    if (!e || "none" === e) return null;
    var r = t.fillOpacity,
        o = t.x,
        i = t.y,
        a = t.width,
        c = t.height,
        u = t.ry;
    return n.createElement("rect", {
        x: o,
        y: i,
        ry: u,
        width: a,
        height: c,
        stroke: "none",
        fill: e,
        fillOpacity: r,
        className: "recharts-cartesian-grid-bg"
    })
};

function LT(t, e) {
    var r;
    if (n.isValidElement(t)) r = n.cloneElement(t, e);
    else if (A(t)) r = t(e);
    else {
        var o = e.x1,
            i = e.y1,
            a = e.x2,
            c = e.y2,
            u = e.key,
            l = RT(e, TT),
            s = au(l, !1);
        s.offset;
        var f = RT(s, MT);
        r = n.createElement("line", NT({}, f, {
            x1: o,
            y1: i,
            x2: a,
            y2: c,
            fill: "none",
            key: u
        }))
    }
    return r
}

function zT(t) {
    var e = t.x,
        r = t.width,
        o = t.horizontal,
        i = void 0 === o || o,
        a = t.horizontalPoints;
    if (!i || !a || !a.length) return null;
    var c = a.map((function(n, o) {
        var a = DT(DT({}, t), {}, {
            x1: e,
            y1: n,
            x2: e + r,
            y2: n,
            key: "line-".concat(o),
            index: o
        });
        return LT(i, a)
    }));
    return n.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
    }, c)
}

function FT(t) {
    var e = t.y,
        r = t.height,
        o = t.vertical,
        i = void 0 === o || o,
        a = t.verticalPoints;
    if (!i || !a || !a.length) return null;
    var c = a.map((function(n, o) {
        var a = DT(DT({}, t), {}, {
            x1: n,
            y1: e,
            x2: n,
            y2: e + r,
            key: "line-".concat(o),
            index: o
        });
        return LT(i, a)
    }));
    return n.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
    }, c)
}

function UT(t) {
    var e = t.horizontalFill,
        r = t.fillOpacity,
        o = t.x,
        i = t.y,
        a = t.width,
        c = t.height,
        u = t.horizontalPoints,
        l = t.horizontal;
    if (!(void 0 === l || l) || !e || !e.length) return null;
    var s = u.map((function(t) {
        return Math.round(t + i - i)
    })).sort((function(t, e) {
        return t - e
    }));
    i !== s[0] && s.unshift(0);
    var f = s.map((function(t, u) {
        var l = !s[u + 1] ? i + c - t : s[u + 1] - t;
        if (l <= 0) return null;
        var f = u % e.length;
        return n.createElement("rect", {
            key: "react-".concat(u),
            y: t,
            x: o,
            height: l,
            width: a,
            stroke: "none",
            fill: e[f],
            fillOpacity: r,
            className: "recharts-cartesian-grid-bg"
        })
    }));
    return n.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
    }, f)
}

function WT(t) {
    var e = t.vertical,
        r = void 0 === e || e,
        o = t.verticalFill,
        i = t.fillOpacity,
        a = t.x,
        c = t.y,
        u = t.width,
        l = t.height,
        s = t.verticalPoints;
    if (!r || !o || !o.length) return null;
    var f = s.map((function(t) {
        return Math.round(t + a - a)
    })).sort((function(t, e) {
        return t - e
    }));
    a !== f[0] && f.unshift(0);
    var p = f.map((function(t, e) {
        var r = !f[e + 1] ? a + u - t : f[e + 1] - t;
        if (r <= 0) return null;
        var s = e % o.length;
        return n.createElement("rect", {
            key: "react-".concat(e),
            x: t,
            y: c,
            width: r,
            height: l,
            stroke: "none",
            fill: o[s],
            fillOpacity: i,
            className: "recharts-cartesian-grid-bg"
        })
    }));
    return n.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
    }, p)
}
var $T = function(t, e) {
        var r = t.xAxis,
            n = t.width,
            o = t.height,
            i = t.offset;
        return aw(pT(DT(DT(DT({}, kT.defaultProps), r), {}, {
            ticks: cw(r, !0),
            viewBox: {
                x: 0,
                y: 0,
                width: n,
                height: o
            }
        })), i.left, i.left + i.width, e)
    },
    KT = function(t, e) {
        var r = t.yAxis,
            n = t.width,
            o = t.height,
            i = t.offset;
        return aw(pT(DT(DT(DT({}, kT.defaultProps), r), {}, {
            ticks: cw(r, !0),
            viewBox: {
                x: 0,
                y: 0,
                width: n,
                height: o
            }
        })), i.top, i.top + i.height, e)
    },
    qT = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
    };

function VT(t) {
    var e, o, i, a, c, u, l, s, f = gk(),
        p = wk(),
        h = r.useContext(pk),
        y = DT(DT({}, t), {}, {
            stroke: null !== (e = t.stroke) && void 0 !== e ? e : qT.stroke,
            fill: null !== (o = t.fill) && void 0 !== o ? o : qT.fill,
            horizontal: null !== (i = t.horizontal) && void 0 !== i ? i : qT.horizontal,
            horizontalFill: null !== (a = t.horizontalFill) && void 0 !== a ? a : qT.horizontalFill,
            vertical: null !== (c = t.vertical) && void 0 !== c ? c : qT.vertical,
            verticalFill: null !== (u = t.verticalFill) && void 0 !== u ? u : qT.verticalFill,
            x: Ec(t.x) ? t.x : h.left,
            y: Ec(t.y) ? t.y : h.top,
            width: Ec(t.width) ? t.width : h.width,
            height: Ec(t.height) ? t.height : h.height
        }),
        d = y.x,
        v = y.y,
        m = y.width,
        b = y.height,
        g = y.syncWithTicks,
        w = y.horizontalValues,
        O = y.verticalValues,
        x = (l = r.useContext(lk), Cc(l)),
        j = (s = r.useContext(sk), ck(s, (function(t) {
            return vE(t.domain, Number.isFinite)
        })) || Cc(s));
    if (!Ec(m) || m <= 0 || !Ec(b) || b <= 0 || !Ec(d) || d !== +d || !Ec(v) || v !== +v) return null;
    var S = y.verticalCoordinatesGenerator || $T,
        P = y.horizontalCoordinatesGenerator || KT,
        E = y.horizontalPoints,
        k = y.verticalPoints;
    if ((!E || !E.length) && A(P)) {
        var T = w && w.length,
            M = P({
                yAxis: j ? DT(DT({}, j), {}, {
                    ticks: T ? w : j.ticks
                }) : void 0,
                width: f,
                height: p,
                offset: h
            }, !!T || g);
        bu(Array.isArray(M), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(_T(M), "]")), Array.isArray(M) && (E = M)
    }
    if ((!k || !k.length) && A(S)) {
        var _ = O && O.length,
            C = S({
                xAxis: x ? DT(DT({}, x), {}, {
                    ticks: _ ? O : x.ticks
                }) : void 0,
                width: f,
                height: p,
                offset: h
            }, !!_ || g);
        bu(Array.isArray(C), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(_T(C), "]")), Array.isArray(C) && (k = C)
    }
    return n.createElement("g", {
        className: "recharts-cartesian-grid"
    }, n.createElement(BT, {
        fill: y.fill,
        fillOpacity: y.fillOpacity,
        x: y.x,
        y: y.y,
        width: y.width,
        height: y.height,
        ry: y.ry
    }), n.createElement(zT, NT({}, y, {
        offset: h,
        horizontalPoints: E,
        xAxis: x,
        yAxis: j
    })), n.createElement(FT, NT({}, y, {
        offset: h,
        verticalPoints: k,
        xAxis: x,
        yAxis: j
    })), n.createElement(UT, NT({}, y, {
        horizontalPoints: E
    })), n.createElement(WT, NT({}, y, {
        verticalPoints: k
    })))
}
VT.displayName = "CartesianGrid";
var XT = ["type", "layout", "connectNulls", "ref"],
    HT = ["key"];

function GT(t) {
    return (GT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function YT(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function ZT() {
    return ZT = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, ZT.apply(this, arguments)
}

function JT(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function QT(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? JT(Object(r), !0).forEach((function(e) {
            cM(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : JT(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function tM(t) {
    return function(t) {
        if (Array.isArray(t)) return eM(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return eM(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eM(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function eM(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function rM(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, uM(n.key), n)
    }
}

function nM(t, e, r) {
    return e = iM(e),
        function(t, e) {
            if (e && ("object" === GT(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, oM() ? Reflect.construct(e, r || [], iM(t).constructor) : e.apply(t, r))
}

function oM() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (oM = function() {
        return !!t
    })()
}

function iM(t) {
    return (iM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function aM(t, e) {
    return (aM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function cM(t, e, r) {
    return (e = uM(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function uM(t) {
    var e = function(t, e) {
        if ("object" != GT(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != GT(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == GT(e) ? e : e + ""
}
var lM = function() {
    function t() {
        var e;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return cM(e = nM(this, t, [].concat(n)), "state", {
            isAnimationFinished: !0,
            totalLength: 0
        }), cM(e, "generateSimpleStrokeDasharray", (function(t, e) {
            return "".concat(e, "px ").concat(t - e, "px")
        })), cM(e, "getStrokeDasharray", (function(r, n, o) {
            var i = o.reduce((function(t, e) {
                return t + e
            }));
            if (!i) return e.generateSimpleStrokeDasharray(n, r);
            for (var a = Math.floor(r / i), c = r % i, u = n - r, l = [], s = 0, f = 0; s < o.length; f += o[s], ++s)
                if (f + o[s] > c) {
                    l = [].concat(tM(o.slice(0, s)), [c - f]);
                    break
                }
            var p = l.length % 2 == 0 ? [0, u] : [u];
            return [].concat(tM(t.repeat(o, a)), tM(l), p).map((function(t) {
                return "".concat(t, "px")
            })).join(", ")
        })), cM(e, "id", Mc("recharts-line-")), cM(e, "pathRef", (function(t) {
            e.mainCurve = t
        })), cM(e, "handleAnimationEnd", (function() {
            e.setState({
                isAnimationFinished: !0
            }), e.props.onAnimationEnd && e.props.onAnimationEnd()
        })), cM(e, "handleAnimationStart", (function() {
            e.setState({
                isAnimationFinished: !1
            }), e.props.onAnimationStart && e.props.onAnimationStart()
        })), e
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && aM(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "getDerivedStateFromProps",
        value: function(t, e) {
            return t.animationId !== e.prevAnimationId ? {
                prevAnimationId: t.animationId,
                curPoints: t.points,
                prevPoints: e.curPoints
            } : t.points !== e.curPoints ? {
                curPoints: t.points
            } : null
        }
    }, {
        key: "repeat",
        value: function(t, e) {
            for (var r = t.length % 2 != 0 ? [].concat(tM(t), [0]) : t, n = [], o = 0; o < e; ++o) n = [].concat(tM(n), tM(r));
            return n
        }
    }, {
        key: "renderDotItem",
        value: function(t, e) {
            var r;
            if (n.isValidElement(t)) r = n.cloneElement(t, e);
            else if (A(t)) r = t(e);
            else {
                var o = e.key,
                    i = YT(e, HT),
                    a = hc("recharts-line-dot", "boolean" != typeof t ? t.className : "");
                r = n.createElement(Xj, ZT({
                    key: o
                }, i, {
                    className: a
                }))
            }
            return r
        }
    }], (o = [{
        key: "componentDidMount",
        value: function() {
            if (this.props.isAnimationActive) {
                var t = this.getTotalLength();
                this.setState({
                    totalLength: t
                })
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            if (this.props.isAnimationActive) {
                var t = this.getTotalLength();
                t !== this.state.totalLength && this.setState({
                    totalLength: t
                })
            }
        }
    }, {
        key: "getTotalLength",
        value: function() {
            var t = this.mainCurve;
            try {
                return t && t.getTotalLength && t.getTotalLength() || 0
            } catch (e) {
                return 0
            }
        }
    }, {
        key: "renderErrorBar",
        value: function(t, e) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var r = this.props,
                o = r.points,
                i = r.xAxis,
                a = r.yAxis,
                c = r.layout,
                u = Qc(r.children, Wg);
            if (!u) return null;
            var l = function(t, e) {
                    return {
                        x: t.x,
                        y: t.y,
                        value: t.value,
                        errorVal: tw(t.payload, e)
                    }
                },
                s = {
                    clipPath: t ? "url(#clipPath-".concat(e, ")") : null
                };
            return n.createElement(mu, s, u.map((function(t) {
                return n.cloneElement(t, {
                    key: "bar-".concat(t.props.dataKey),
                    data: o,
                    xAxis: i,
                    yAxis: a,
                    layout: c,
                    dataPointFormatter: l
                })
            })))
        }
    }, {
        key: "renderDots",
        value: function(e, r, o) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var i = this.props,
                a = i.dot,
                c = i.points,
                u = i.dataKey,
                l = au(this.props, !1),
                s = au(a, !0),
                f = c.map((function(e, r) {
                    var n = QT(QT(QT({
                        key: "dot-".concat(r),
                        r: 3
                    }, l), s), {}, {
                        index: r,
                        cx: e.x,
                        cy: e.y,
                        value: e.value,
                        dataKey: u,
                        payload: e.payload,
                        points: c
                    });
                    return t.renderDotItem(a, n)
                })),
                p = {
                    clipPath: e ? "url(#clipPath-".concat(r ? "" : "dots-").concat(o, ")") : null
                };
            return n.createElement(mu, ZT({
                className: "recharts-line-dots",
                key: "dots"
            }, p), f)
        }
    }, {
        key: "renderCurveStatically",
        value: function(t, e, r, o) {
            var i = this.props,
                a = i.type,
                c = i.layout,
                u = i.connectNulls;
            i.ref;
            var l = YT(i, XT),
                s = QT(QT(QT({}, au(l, !0)), {}, {
                    fill: "none",
                    className: "recharts-line-curve",
                    clipPath: e ? "url(#clipPath-".concat(r, ")") : null,
                    points: t
                }, o), {}, {
                    type: a,
                    layout: c,
                    connectNulls: u
                });
            return n.createElement(FO, ZT({}, s, {
                pathRef: this.pathRef
            }))
        }
    }, {
        key: "renderCurveWithAnimation",
        value: function(t, e) {
            var r = this,
                o = this.props,
                i = o.points,
                a = o.strokeDasharray,
                c = o.isAnimationActive,
                u = o.animationBegin,
                l = o.animationDuration,
                s = o.animationEasing,
                f = o.animationId,
                p = o.animateNewValues,
                h = o.width,
                y = o.height,
                d = this.state,
                v = d.prevPoints,
                m = d.totalLength;
            return n.createElement(Pj, {
                begin: u,
                duration: l,
                isActive: c,
                easing: s,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "line-".concat(f),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, (function(n) {
                var o = n.t;
                if (v) {
                    var c = v.length / i.length,
                        u = i.map((function(t, e) {
                            var r = Math.floor(e * c);
                            if (v[r]) {
                                var n = v[r],
                                    i = Dc(n.x, t.x),
                                    a = Dc(n.y, t.y);
                                return QT(QT({}, t), {}, {
                                    x: i(o),
                                    y: a(o)
                                })
                            }
                            if (p) {
                                var u = Dc(2 * h, t.x),
                                    l = Dc(y / 2, t.y);
                                return QT(QT({}, t), {}, {
                                    x: u(o),
                                    y: l(o)
                                })
                            }
                            return QT(QT({}, t), {}, {
                                x: t.x,
                                y: t.y
                            })
                        }));
                    return r.renderCurveStatically(u, t, e)
                }
                var l, s = Dc(0, m)(o);
                if (a) {
                    var f = "".concat(a).split(/[,\s]+/gim).map((function(t) {
                        return parseFloat(t)
                    }));
                    l = r.getStrokeDasharray(s, m, f)
                } else l = r.generateSimpleStrokeDasharray(m, s);
                return r.renderCurveStatically(i, t, e, {
                    strokeDasharray: l
                })
            }))
        }
    }, {
        key: "renderCurve",
        value: function(t, e) {
            var r = this.props,
                n = r.points,
                o = r.isAnimationActive,
                i = this.state,
                a = i.prevPoints,
                c = i.totalLength;
            return o && n && n.length && (!a && c > 0 || !Eb(a, n)) ? this.renderCurveWithAnimation(t, e) : this.renderCurveStatically(n, t, e)
        }
    }, {
        key: "render",
        value: function() {
            var t, e = this.props,
                r = e.hide,
                o = e.dot,
                i = e.points,
                a = e.className,
                c = e.xAxis,
                u = e.yAxis,
                l = e.top,
                s = e.left,
                f = e.width,
                p = e.height,
                h = e.isAnimationActive,
                y = e.id;
            if (r || !i || !i.length) return null;
            var d = this.state.isAnimationFinished,
                v = 1 === i.length,
                m = hc("recharts-line", a),
                b = c && c.allowDataOverflow,
                g = u && u.allowDataOverflow,
                w = b || g,
                O = yc(y) ? this.id : y,
                x = null !== (t = au(o, !1)) && void 0 !== t ? t : {
                    r: 3,
                    strokeWidth: 2
                },
                j = x.r,
                S = void 0 === j ? 3 : j,
                A = x.strokeWidth,
                P = void 0 === A ? 2 : A,
                E = (ou(o) ? o : {}).clipDot,
                k = void 0 === E || E,
                T = 2 * S + P;
            return n.createElement(mu, {
                className: m
            }, b || g ? n.createElement("defs", null, n.createElement("clipPath", {
                id: "clipPath-".concat(O)
            }, n.createElement("rect", {
                x: b ? s : s - f / 2,
                y: g ? l : l - p / 2,
                width: b ? f : 2 * f,
                height: g ? p : 2 * p
            })), !k && n.createElement("clipPath", {
                id: "clipPath-dots-".concat(O)
            }, n.createElement("rect", {
                x: s - T / 2,
                y: l - T / 2,
                width: f + T,
                height: p + T
            }))) : null, !v && this.renderCurve(w, O), this.renderErrorBar(w, O), (v || o) && this.renderDots(w, k, O), (!h || d) && vO.renderCallByParent(this.props, i))
        }
    }]) && rM(e.prototype, o), i && rM(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();
cM(lM, "displayName", "Line"), cM(lM, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: !1,
    activeDot: !0,
    dot: !0,
    legendType: "line",
    stroke: "#3182bd",
    strokeWidth: 1,
    fill: "#fff",
    points: [],
    isAnimationActive: !xp.isSsr,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
    hide: !1,
    label: !1
}), cM(lM, "getComposedData", (function(t) {
    var e = t.props,
        r = t.xAxis,
        n = t.yAxis,
        o = t.xAxisTicks,
        i = t.yAxisTicks,
        a = t.dataKey,
        c = t.bandSize,
        u = t.displayedData,
        l = t.offset,
        s = e.layout;
    return QT({
        points: u.map((function(t, e) {
            var u = tw(t, a);
            return "horizontal" === s ? {
                x: bw({
                    axis: r,
                    ticks: o,
                    bandSize: c,
                    entry: t,
                    index: e
                }),
                y: yc(u) ? null : n.scale(u),
                value: u,
                payload: t
            } : {
                x: yc(u) ? null : r.scale(u),
                y: bw({
                    axis: n,
                    ticks: i,
                    bandSize: c,
                    entry: t,
                    index: e
                }),
                value: u,
                payload: t
            }
        })),
        layout: s
    }, l)
}));
var sM, fM = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
    pM = ["key"];

function hM(t) {
    return (hM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function yM(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function dM() {
    return dM = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, dM.apply(this, arguments)
}

function vM(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function mM(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? vM(Object(r), !0).forEach((function(e) {
            jM(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : vM(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function bM(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, SM(n.key), n)
    }
}

function gM(t, e, r) {
    return e = OM(e),
        function(t, e) {
            if (e && ("object" === hM(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, wM() ? Reflect.construct(e, r || [], OM(t).constructor) : e.apply(t, r))
}

function wM() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (wM = function() {
        return !!t
    })()
}

function OM(t) {
    return (OM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function xM(t, e) {
    return (xM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function jM(t, e, r) {
    return (e = SM(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function SM(t) {
    var e = function(t, e) {
        if ("object" != hM(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != hM(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == hM(e) ? e : e + ""
}
var AM = function() {
    function t() {
        var e;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return jM(e = gM(this, t, [].concat(n)), "state", {
            isAnimationFinished: !0
        }), jM(e, "id", Mc("recharts-area-")), jM(e, "handleAnimationEnd", (function() {
            var t = e.props.onAnimationEnd;
            e.setState({
                isAnimationFinished: !0
            }), A(t) && t()
        })), jM(e, "handleAnimationStart", (function() {
            var t = e.props.onAnimationStart;
            e.setState({
                isAnimationFinished: !1
            }), A(t) && t()
        })), e
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && xM(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "getDerivedStateFromProps",
        value: function(t, e) {
            return t.animationId !== e.prevAnimationId ? {
                prevAnimationId: t.animationId,
                curPoints: t.points,
                curBaseLine: t.baseLine,
                prevPoints: e.curPoints,
                prevBaseLine: e.curBaseLine
            } : t.points !== e.curPoints || t.baseLine !== e.curBaseLine ? {
                curPoints: t.points,
                curBaseLine: t.baseLine
            } : null
        }
    }], (o = [{
        key: "renderDots",
        value: function(e, r, o) {
            var i = this.props.isAnimationActive,
                a = this.state.isAnimationFinished;
            if (i && !a) return null;
            var c = this.props,
                u = c.dot,
                l = c.points,
                s = c.dataKey,
                f = au(this.props, !1),
                p = au(u, !0),
                h = l.map((function(e, r) {
                    var n = mM(mM(mM({
                        key: "dot-".concat(r),
                        r: 3
                    }, f), p), {}, {
                        index: r,
                        cx: e.x,
                        cy: e.y,
                        dataKey: s,
                        value: e.value,
                        payload: e.payload,
                        points: l
                    });
                    return t.renderDotItem(u, n)
                })),
                y = {
                    clipPath: e ? "url(#clipPath-".concat(r ? "" : "dots-").concat(o, ")") : null
                };
            return n.createElement(mu, dM({
                className: "recharts-area-dots"
            }, y), h)
        }
    }, {
        key: "renderHorizontalRect",
        value: function(t) {
            var e = this.props,
                r = e.baseLine,
                o = e.points,
                i = e.strokeWidth,
                a = o[0].x,
                c = o[o.length - 1].x,
                u = t * Math.abs(a - c),
                l = hb(o.map((function(t) {
                    return t.y || 0
                })));
            return Ec(r) && "number" == typeof r ? l = Math.max(r, l) : r && Array.isArray(r) && r.length && (l = Math.max(hb(r.map((function(t) {
                return t.y || 0
            }))), l)), Ec(l) ? n.createElement("rect", {
                x: a < c ? a : a - u,
                y: 0,
                width: u,
                height: Math.floor(l + (i ? parseInt("".concat(i), 10) : 1))
            }) : null
        }
    }, {
        key: "renderVerticalRect",
        value: function(t) {
            var e = this.props,
                r = e.baseLine,
                o = e.points,
                i = e.strokeWidth,
                a = o[0].y,
                c = o[o.length - 1].y,
                u = t * Math.abs(a - c),
                l = hb(o.map((function(t) {
                    return t.x || 0
                })));
            return Ec(r) && "number" == typeof r ? l = Math.max(r, l) : r && Array.isArray(r) && r.length && (l = Math.max(hb(r.map((function(t) {
                return t.x || 0
            }))), l)), Ec(l) ? n.createElement("rect", {
                x: 0,
                y: a < c ? a : a - u,
                width: l + (i ? parseInt("".concat(i), 10) : 1),
                height: Math.floor(u)
            }) : null
        }
    }, {
        key: "renderClipRect",
        value: function(t) {
            return "vertical" === this.props.layout ? this.renderVerticalRect(t) : this.renderHorizontalRect(t)
        }
    }, {
        key: "renderAreaStatically",
        value: function(t, e, r, o) {
            var i = this.props,
                a = i.layout,
                c = i.type,
                u = i.stroke,
                l = i.connectNulls,
                s = i.isRange;
            i.ref;
            var f = yM(i, fM);
            return n.createElement(mu, {
                clipPath: r ? "url(#clipPath-".concat(o, ")") : null
            }, n.createElement(FO, dM({}, au(f, !0), {
                points: t,
                connectNulls: l,
                type: c,
                baseLine: e,
                layout: a,
                stroke: "none",
                className: "recharts-area-area"
            })), "none" !== u && n.createElement(FO, dM({}, au(this.props, !1), {
                className: "recharts-area-curve",
                layout: a,
                type: c,
                connectNulls: l,
                fill: "none",
                points: t
            })), "none" !== u && s && n.createElement(FO, dM({}, au(this.props, !1), {
                className: "recharts-area-curve",
                layout: a,
                type: c,
                connectNulls: l,
                fill: "none",
                points: e
            })))
        }
    }, {
        key: "renderAreaWithAnimation",
        value: function(t, e) {
            var r = this,
                o = this.props,
                i = o.points,
                a = o.baseLine,
                c = o.isAnimationActive,
                u = o.animationBegin,
                l = o.animationDuration,
                s = o.animationEasing,
                f = o.animationId,
                p = this.state,
                h = p.prevPoints,
                y = p.prevBaseLine;
            return n.createElement(Pj, {
                begin: u,
                duration: l,
                isActive: c,
                easing: s,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "area-".concat(f),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, (function(o) {
                var c = o.t;
                if (h) {
                    var u, l = h.length / i.length,
                        s = i.map((function(t, e) {
                            var r = Math.floor(e * l);
                            if (h[r]) {
                                var n = h[r],
                                    o = Dc(n.x, t.x),
                                    i = Dc(n.y, t.y);
                                return mM(mM({}, t), {}, {
                                    x: o(c),
                                    y: i(c)
                                })
                            }
                            return t
                        }));
                    return u = Ec(a) && "number" == typeof a ? Dc(y, a)(c) : yc(a) || Sc(a) ? Dc(y, 0)(c) : a.map((function(t, e) {
                        var r = Math.floor(e * l);
                        if (y[r]) {
                            var n = y[r],
                                o = Dc(n.x, t.x),
                                i = Dc(n.y, t.y);
                            return mM(mM({}, t), {}, {
                                x: o(c),
                                y: i(c)
                            })
                        }
                        return t
                    })), r.renderAreaStatically(s, u, t, e)
                }
                return n.createElement(mu, null, n.createElement("defs", null, n.createElement("clipPath", {
                    id: "animationClipPath-".concat(e)
                }, r.renderClipRect(c))), n.createElement(mu, {
                    clipPath: "url(#animationClipPath-".concat(e, ")")
                }, r.renderAreaStatically(i, a, t, e)))
            }))
        }
    }, {
        key: "renderArea",
        value: function(t, e) {
            var r = this.props,
                n = r.points,
                o = r.baseLine,
                i = r.isAnimationActive,
                a = this.state,
                c = a.prevPoints,
                u = a.prevBaseLine,
                l = a.totalLength;
            return i && n && n.length && (!c && l > 0 || !Eb(c, n) || !Eb(u, o)) ? this.renderAreaWithAnimation(t, e) : this.renderAreaStatically(n, o, t, e)
        }
    }, {
        key: "render",
        value: function() {
            var t, e = this.props,
                r = e.hide,
                o = e.dot,
                i = e.points,
                a = e.className,
                c = e.top,
                u = e.left,
                l = e.xAxis,
                s = e.yAxis,
                f = e.width,
                p = e.height,
                h = e.isAnimationActive,
                y = e.id;
            if (r || !i || !i.length) return null;
            var d = this.state.isAnimationFinished,
                v = 1 === i.length,
                m = hc("recharts-area", a),
                b = l && l.allowDataOverflow,
                g = s && s.allowDataOverflow,
                w = b || g,
                O = yc(y) ? this.id : y,
                x = null !== (t = au(o, !1)) && void 0 !== t ? t : {
                    r: 3,
                    strokeWidth: 2
                },
                j = x.r,
                S = void 0 === j ? 3 : j,
                A = x.strokeWidth,
                P = void 0 === A ? 2 : A,
                E = (ou(o) ? o : {}).clipDot,
                k = void 0 === E || E,
                T = 2 * S + P;
            return n.createElement(mu, {
                className: m
            }, b || g ? n.createElement("defs", null, n.createElement("clipPath", {
                id: "clipPath-".concat(O)
            }, n.createElement("rect", {
                x: b ? u : u - f / 2,
                y: g ? c : c - p / 2,
                width: b ? f : 2 * f,
                height: g ? p : 2 * p
            })), !k && n.createElement("clipPath", {
                id: "clipPath-dots-".concat(O)
            }, n.createElement("rect", {
                x: u - T / 2,
                y: c - T / 2,
                width: f + T,
                height: p + T
            }))) : null, v ? null : this.renderArea(w, O), (o || v) && this.renderDots(w, k, O), (!h || d) && vO.renderCallByParent(this.props, i))
        }
    }]) && bM(e.prototype, o), i && bM(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();

function PM(t) {
    return (PM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function EM(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, DM(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function kM(t, e, r) {
    return e = MM(e),
        function(t, e) {
            if (e && ("object" === PM(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, TM() ? Reflect.construct(e, r || [], MM(t).constructor) : e.apply(t, r))
}

function TM() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (TM = function() {
        return !!t
    })()
}

function MM(t) {
    return (MM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function _M(t, e) {
    return (_M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function CM(t, e, r) {
    return (e = DM(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function DM(t) {
    var e = function(t, e) {
        if ("object" != PM(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != PM(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == PM(e) ? e : e + ""
}
sM = AM, jM(AM, "displayName", "Area"), jM(AM, "defaultProps", {
    stroke: "#3182bd",
    fill: "#3182bd",
    fillOpacity: .6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: "line",
    connectNulls: !1,
    points: [],
    dot: !1,
    activeDot: !0,
    hide: !1,
    isAnimationActive: !xp.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
}), jM(AM, "getBaseValue", (function(t, e, r, n) {
    var o = t.layout,
        i = t.baseValue,
        a = e.props.baseValue,
        c = null != a ? a : i;
    if (Ec(c) && "number" == typeof c) return c;
    var u = "horizontal" === o ? n : r,
        l = u.scale.domain();
    if ("number" === u.type) {
        var s = Math.max(l[0], l[1]),
            f = Math.min(l[0], l[1]);
        return "dataMin" === c ? f : "dataMax" === c || s < 0 ? s : Math.max(Math.min(l[0], l[1]), 0)
    }
    return "dataMin" === c ? l[0] : "dataMax" === c ? l[1] : l[0]
})), jM(AM, "getComposedData", (function(t) {
    var e, r = t.props,
        n = t.item,
        o = t.xAxis,
        i = t.yAxis,
        a = t.xAxisTicks,
        c = t.yAxisTicks,
        u = t.bandSize,
        l = t.dataKey,
        s = t.stackedData,
        f = t.dataStartIndex,
        p = t.displayedData,
        h = t.offset,
        y = r.layout,
        d = s && s.length,
        v = sM.getBaseValue(r, n, o, i),
        m = "horizontal" === y,
        b = !1,
        g = p.map((function(t, e) {
            var r;
            d ? r = s[f + e] : (r = tw(t, l), Array.isArray(r) ? b = !0 : r = [v, r]);
            var n = null == r[1] || d && null == tw(t, l);
            return m ? {
                x: bw({
                    axis: o,
                    ticks: a,
                    bandSize: u,
                    entry: t,
                    index: e
                }),
                y: n ? null : i.scale(r[1]),
                value: r,
                payload: t
            } : {
                x: n ? null : o.scale(r[1]),
                y: bw({
                    axis: i,
                    ticks: c,
                    bandSize: u,
                    entry: t,
                    index: e
                }),
                value: r,
                payload: t
            }
        }));
    return e = d || b ? g.map((function(t) {
        var e = Array.isArray(t.value) ? t.value[0] : null;
        return m ? {
            x: t.x,
            y: null != e && null != t.y ? i.scale(e) : null
        } : {
            x: null != e ? o.scale(e) : null,
            y: t.y
        }
    })) : m ? i.scale(v) : o.scale(v), mM({
        points: g,
        baseLine: e,
        layout: y,
        isRange: b
    }, h)
})), jM(AM, "renderDotItem", (function(t, e) {
    var r;
    if (n.isValidElement(t)) r = n.cloneElement(t, e);
    else if (A(t)) r = t(e);
    else {
        var o = hc("recharts-area-dot", "boolean" != typeof t ? t.className : ""),
            i = e.key,
            a = yM(e, pM);
        r = n.createElement(Xj, dM({}, a, {
            key: i,
            className: o
        }))
    }
    return r
}));
var IM = function() {
    function t() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), kM(this, t, arguments)
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && _M(t, e)
    }(t, n.Component), EM(t, [{
        key: "render",
        value: function() {
            return null
        }
    }])
}();
CM(IM, "displayName", "ZAxis"), CM(IM, "defaultProps", {
    zAxisId: 0,
    range: [64, 64],
    scale: "auto",
    type: "number"
});
var NM = ["option", "isActive"];

function RM() {
    return RM = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, RM.apply(this, arguments)
}

function BM(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function LM(t) {
    var e = t.option,
        r = t.isActive,
        o = BM(t, NM);
    return "string" == typeof e ? n.createElement(OA, RM({
        option: n.createElement(ns, RM({
            type: e
        }, o)),
        isActive: r,
        shapeType: "symbols"
    }, o)) : n.createElement(OA, RM({
        option: e,
        isActive: r,
        shapeType: "symbols"
    }, o))
}

function zM(t) {
    return (zM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function FM() {
    return FM = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, FM.apply(this, arguments)
}

function UM(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function WM(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? UM(Object(r), !0).forEach((function(e) {
            HM(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : UM(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function $M(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, GM(n.key), n)
    }
}

function KM(t, e, r) {
    return e = VM(e),
        function(t, e) {
            if (e && ("object" === zM(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, qM() ? Reflect.construct(e, r || [], VM(t).constructor) : e.apply(t, r))
}

function qM() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (qM = function() {
        return !!t
    })()
}

function VM(t) {
    return (VM = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function XM(t, e) {
    return (XM = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function HM(t, e, r) {
    return (e = GM(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function GM(t) {
    var e = function(t, e) {
        if ("object" != zM(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != zM(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == zM(e) ? e : e + ""
}
var YM = function() {
    function t() {
        var e;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return HM(e = KM(this, t, [].concat(n)), "state", {
            isAnimationFinished: !1
        }), HM(e, "handleAnimationEnd", (function() {
            e.setState({
                isAnimationFinished: !0
            })
        })), HM(e, "handleAnimationStart", (function() {
            e.setState({
                isAnimationFinished: !1
            })
        })), HM(e, "id", Mc("recharts-scatter-")), e
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && XM(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "getDerivedStateFromProps",
        value: function(t, e) {
            return t.animationId !== e.prevAnimationId ? {
                prevAnimationId: t.animationId,
                curPoints: t.points,
                prevPoints: e.curPoints
            } : t.points !== e.curPoints ? {
                curPoints: t.points
            } : null
        }
    }], (o = [{
        key: "renderSymbolsStatically",
        value: function(t) {
            var e = this,
                r = this.props,
                o = r.shape,
                i = r.activeShape,
                a = r.activeIndex,
                c = au(this.props, !1);
            return t.map((function(t, r) {
                var u = a === r,
                    l = u ? i : o,
                    s = WM(WM({}, c), t);
                return n.createElement(mu, FM({
                    className: "recharts-scatter-symbol",
                    key: "symbol-".concat(null == t ? void 0 : t.cx, "-").concat(null == t ? void 0 : t.cy, "-").concat(null == t ? void 0 : t.size, "-").concat(r)
                }, $c(e.props, t, r), {
                    role: "img"
                }), n.createElement(LM, FM({
                    option: l,
                    isActive: u,
                    key: "symbol-".concat(r)
                }, s)))
            }))
        }
    }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
            var t = this,
                e = this.props,
                r = e.points,
                o = e.isAnimationActive,
                i = e.animationBegin,
                a = e.animationDuration,
                c = e.animationEasing,
                u = e.animationId,
                l = this.state.prevPoints;
            return n.createElement(Pj, {
                begin: i,
                duration: a,
                isActive: o,
                easing: c,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "pie-".concat(u),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, (function(e) {
                var o = e.t,
                    i = r.map((function(t, e) {
                        var r = l && l[e];
                        if (r) {
                            var n = Dc(r.cx, t.cx),
                                i = Dc(r.cy, t.cy),
                                a = Dc(r.size, t.size);
                            return WM(WM({}, t), {}, {
                                cx: n(o),
                                cy: i(o),
                                size: a(o)
                            })
                        }
                        var c = Dc(0, t.size);
                        return WM(WM({}, t), {}, {
                            size: c(o)
                        })
                    }));
                return n.createElement(mu, null, t.renderSymbolsStatically(i))
            }))
        }
    }, {
        key: "renderSymbols",
        value: function() {
            var t = this.props,
                e = t.points,
                r = t.isAnimationActive,
                n = this.state.prevPoints;
            return !(r && e && e.length) || n && Eb(n, e) ? this.renderSymbolsStatically(e) : this.renderSymbolsWithAnimation()
        }
    }, {
        key: "renderErrorBar",
        value: function() {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var t = this.props,
                e = t.points,
                r = t.xAxis,
                o = t.yAxis,
                i = Qc(t.children, Wg);
            return i ? i.map((function(t, i) {
                var a = t.props,
                    c = a.direction,
                    u = a.dataKey;
                return n.cloneElement(t, {
                    key: "".concat(c, "-").concat(u, "-").concat(e[i]),
                    data: e,
                    xAxis: r,
                    yAxis: o,
                    layout: "x" === c ? "vertical" : "horizontal",
                    dataPointFormatter: function(t, e) {
                        return {
                            x: t.cx,
                            y: t.cy,
                            value: "x" === c ? +t.node.x : +t.node.y,
                            errorVal: tw(t, e)
                        }
                    }
                })
            })) : null
        }
    }, {
        key: "renderLine",
        value: function() {
            var t, e, r = this.props,
                o = r.points,
                i = r.line,
                a = r.lineType,
                c = r.lineJointType,
                u = au(this.props, !1),
                l = au(i, !1);
            if ("joint" === a) t = o.map((function(t) {
                return {
                    x: t.cx,
                    y: t.cy
                }
            }));
            else if ("fitting" === a) {
                var s = function(t) {
                        if (!t || !t.length) return null;
                        for (var e = t.length, r = 0, n = 0, o = 0, i = 0, a = 1 / 0, c = -1 / 0, u = 0, l = 0, s = 0; s < e; s++) r += u = t[s].cx || 0, n += l = t[s].cy || 0, o += u * l, i += u * u, a = Math.min(a, u), c = Math.max(c, u);
                        var f = e * i != r * r ? (e * o - r * n) / (e * i - r * r) : 0;
                        return {
                            xmin: a,
                            xmax: c,
                            a: f,
                            b: (n - f * r) / e
                        }
                    }(o),
                    f = s.xmin,
                    p = s.xmax,
                    h = s.a,
                    y = s.b,
                    d = function(t) {
                        return h * t + y
                    };
                t = [{
                    x: f,
                    y: d(f)
                }, {
                    x: p,
                    y: d(p)
                }]
            }
            var v = WM(WM(WM({}, u), {}, {
                fill: "none",
                stroke: u && u.fill
            }, l), {}, {
                points: t
            });
            return e = n.isValidElement(i) ? n.cloneElement(i, v) : A(i) ? i(v) : n.createElement(FO, FM({}, v, {
                type: c
            })), n.createElement(mu, {
                className: "recharts-scatter-line",
                key: "recharts-scatter-line"
            }, e)
        }
    }, {
        key: "render",
        value: function() {
            var t = this.props,
                e = t.hide,
                r = t.points,
                o = t.line,
                i = t.className,
                a = t.xAxis,
                c = t.yAxis,
                u = t.left,
                l = t.top,
                s = t.width,
                f = t.height,
                p = t.id,
                h = t.isAnimationActive;
            if (e || !r || !r.length) return null;
            var y = this.state.isAnimationFinished,
                d = hc("recharts-scatter", i),
                v = a && a.allowDataOverflow,
                m = c && c.allowDataOverflow,
                b = v || m,
                g = yc(p) ? this.id : p;
            return n.createElement(mu, {
                className: d,
                clipPath: b ? "url(#clipPath-".concat(g, ")") : null
            }, v || m ? n.createElement("defs", null, n.createElement("clipPath", {
                id: "clipPath-".concat(g)
            }, n.createElement("rect", {
                x: v ? u : u - s / 2,
                y: m ? l : l - f / 2,
                width: v ? s : 2 * s,
                height: m ? f : 2 * f
            }))) : null, o && this.renderLine(), this.renderErrorBar(), n.createElement(mu, {
                key: "recharts-scatter-symbols"
            }, this.renderSymbols()), (!h || y) && vO.renderCallByParent(this.props, r))
        }
    }]) && $M(e.prototype, o), i && $M(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();

function ZM(t) {
    return (ZM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function JM(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, o_(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function QM(t, e, r) {
    return e = e_(e),
        function(t, e) {
            if (e && ("object" === ZM(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, t_() ? Reflect.construct(e, r || [], e_(t).constructor) : e.apply(t, r))
}

function t_() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (t_ = function() {
        return !!t
    })()
}

function e_(t) {
    return (e_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function r_(t, e) {
    return (r_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function n_(t, e, r) {
    return (e = o_(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function o_(t) {
    var e = function(t, e) {
        if ("object" != ZM(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != ZM(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == ZM(e) ? e : e + ""
}

function i_() {
    return i_ = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, i_.apply(this, arguments)
}

function a_(t) {
    var e = t.xAxisId,
        r = gk(),
        o = wk(),
        i = mk(e);
    return null == i ? null : n.createElement(kT, i_({}, i, {
        className: hc("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
        viewBox: {
            x: 0,
            y: 0,
            width: r,
            height: o
        },
        ticksGenerator: function(t) {
            return cw(t, !0)
        }
    }))
}
HM(YM, "displayName", "Scatter"), HM(YM, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: "circle",
    lineType: "joint",
    lineJointType: "linear",
    data: [],
    shape: "circle",
    hide: !1,
    isAnimationActive: !xp.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "linear"
}), HM(YM, "getComposedData", (function(t) {
    var e = t.xAxis,
        r = t.yAxis,
        n = t.zAxis,
        o = t.item,
        i = t.displayedData,
        a = t.xAxisTicks,
        c = t.yAxisTicks,
        u = t.offset,
        l = o.props.tooltipType,
        s = Qc(o.props.children, Wp),
        f = yc(e.dataKey) ? o.props.dataKey : e.dataKey,
        p = yc(r.dataKey) ? o.props.dataKey : r.dataKey,
        h = n && n.dataKey,
        y = n ? n.range : IM.defaultProps.range,
        d = y && y[0],
        v = e.scale.bandwidth ? e.scale.bandwidth() : 0,
        m = r.scale.bandwidth ? r.scale.bandwidth() : 0,
        b = i.map((function(t, i) {
            var u = tw(t, f),
                y = tw(t, p),
                b = !yc(h) && tw(t, h) || "-",
                g = [{
                    name: yc(e.dataKey) ? o.props.name : e.name || e.dataKey,
                    unit: e.unit || "",
                    value: u,
                    payload: t,
                    dataKey: f,
                    type: l
                }, {
                    name: yc(r.dataKey) ? o.props.name : r.name || r.dataKey,
                    unit: r.unit || "",
                    value: y,
                    payload: t,
                    dataKey: p,
                    type: l
                }];
            "-" !== b && g.push({
                name: n.name || n.dataKey,
                unit: n.unit || "",
                value: b,
                payload: t,
                dataKey: h,
                type: l
            });
            var w = bw({
                    axis: e,
                    ticks: a,
                    bandSize: v,
                    entry: t,
                    index: i,
                    dataKey: f
                }),
                O = bw({
                    axis: r,
                    ticks: c,
                    bandSize: m,
                    entry: t,
                    index: i,
                    dataKey: p
                }),
                x = "-" !== b ? n.scale(b) : d,
                j = Math.sqrt(Math.max(x, 0) / Math.PI);
            return WM(WM({}, t), {}, {
                cx: w,
                cy: O,
                x: w - j,
                y: O - j,
                xAxis: e,
                yAxis: r,
                zAxis: n,
                width: 2 * j,
                height: 2 * j,
                size: x,
                node: {
                    x: u,
                    y: y,
                    z: b
                },
                tooltipPayload: g,
                tooltipPosition: {
                    x: w,
                    y: O
                },
                payload: t
            }, s && s[i] && s[i].props)
        }));
    return WM({
        points: b
    }, u)
}));
var c_ = function() {
    function t() {
        return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), QM(this, t, arguments)
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && r_(t, e)
    }(t, n.Component), JM(t, [{
        key: "render",
        value: function() {
            return n.createElement(a_, this.props)
        }
    }])
}();

function u_(t) {
    return (u_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function l_(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, d_(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function s_(t, e, r) {
    return e = p_(e),
        function(t, e) {
            if (e && ("object" === u_(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, f_() ? Reflect.construct(e, r || [], p_(t).constructor) : e.apply(t, r))
}

function f_() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (f_ = function() {
        return !!t
    })()
}

function p_(t) {
    return (p_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function h_(t, e) {
    return (h_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function y_(t, e, r) {
    return (e = d_(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function d_(t) {
    var e = function(t, e) {
        if ("object" != u_(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != u_(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == u_(e) ? e : e + ""
}

function v_() {
    return v_ = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, v_.apply(this, arguments)
}
n_(c_, "displayName", "XAxis"), n_(c_, "defaultProps", {
    allowDecimals: !0,
    hide: !1,
    orientation: "bottom",
    width: 0,
    height: 30,
    mirror: !1,
    xAxisId: 0,
    tickCount: 5,
    type: "category",
    padding: {
        left: 0,
        right: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1,
    allowDuplicatedCategory: !0
});
var m_ = function(t) {
        var e = t.yAxisId,
            r = gk(),
            o = wk(),
            i = bk(e);
        return null == i ? null : n.createElement(kT, v_({}, i, {
            className: hc("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
            viewBox: {
                x: 0,
                y: 0,
                width: r,
                height: o
            },
            ticksGenerator: function(t) {
                return cw(t, !0)
            }
        }))
    },
    b_ = function() {
        function t() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), s_(this, t, arguments)
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && h_(t, e)
        }(t, n.Component), l_(t, [{
            key: "render",
            value: function() {
                return n.createElement(m_, this.props)
            }
        }])
    }();

function g_(t) {
    return function(t) {
        if (Array.isArray(t)) return w_(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return w_(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w_(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function w_(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
y_(b_, "displayName", "YAxis"), y_(b_, "defaultProps", {
    allowDuplicatedCategory: !0,
    allowDecimals: !0,
    hide: !1,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: !1,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    padding: {
        top: 0,
        bottom: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1
});
var O_ = function(t, e, r, n, o) {
        var i = Qc(t, Nk),
            a = Qc(t, Xk),
            c = [].concat(g_(i), g_(a)),
            u = Qc(t, iT),
            l = "".concat(n, "Id"),
            s = n[0],
            f = e;
        if (c.length && (f = c.reduce((function(t, e) {
                if (e.props[l] === r && iE(e.props, "extendDomain") && Ec(e.props[s])) {
                    var n = e.props[s];
                    return [Math.min(t[0], n), Math.max(t[1], n)]
                }
                return t
            }), f)), u.length) {
            var p = "".concat(s, "1"),
                h = "".concat(s, "2");
            f = u.reduce((function(t, e) {
                if (e.props[l] === r && iE(e.props, "extendDomain") && Ec(e.props[p]) && Ec(e.props[h])) {
                    var n = e.props[p],
                        o = e.props[h];
                    return [Math.min(t[0], n, o), Math.max(t[1], n, o)]
                }
                return t
            }), f)
        }
        return o && o.length && (f = o.reduce((function(t, e) {
            return Ec(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t
        }), f)), f
    },
    x_ = {
        exports: {}
    };
! function(t) {
    var e = Object.prototype.hasOwnProperty,
        r = "~";

    function n() {}

    function o(t, e, r) {
        this.fn = t, this.context = e, this.once = r || !1
    }

    function i(t, e, n, i, a) {
        if ("function" != typeof n) throw new TypeError("The listener must be a function");
        var c = new o(n, i || t, a),
            u = r ? r + e : e;
        return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], c] : t._events[u].push(c) : (t._events[u] = c, t._eventsCount++), t
    }

    function a(t, e) {
        0 == --t._eventsCount ? t._events = new n : delete t._events[e]
    }

    function c() {
        this._events = new n, this._eventsCount = 0
    }
    Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (r = !1)), c.prototype.eventNames = function() {
        var t, n, o = [];
        if (0 === this._eventsCount) return o;
        for (n in t = this._events) e.call(t, n) && o.push(r ? n.slice(1) : n);
        return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o
    }, c.prototype.listeners = function(t) {
        var e = r ? r + t : t,
            n = this._events[e];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var o = 0, i = n.length, a = new Array(i); o < i; o++) a[o] = n[o].fn;
        return a
    }, c.prototype.listenerCount = function(t) {
        var e = r ? r + t : t,
            n = this._events[e];
        return n ? n.fn ? 1 : n.length : 0
    }, c.prototype.emit = function(t, e, n, o, i, a) {
        var c = r ? r + t : t;
        if (!this._events[c]) return !1;
        var u, l, s = this._events[c],
            f = arguments.length;
        if (s.fn) {
            switch (s.once && this.removeListener(t, s.fn, void 0, !0), f) {
                case 1:
                    return s.fn.call(s.context), !0;
                case 2:
                    return s.fn.call(s.context, e), !0;
                case 3:
                    return s.fn.call(s.context, e, n), !0;
                case 4:
                    return s.fn.call(s.context, e, n, o), !0;
                case 5:
                    return s.fn.call(s.context, e, n, o, i), !0;
                case 6:
                    return s.fn.call(s.context, e, n, o, i, a), !0
            }
            for (l = 1, u = new Array(f - 1); l < f; l++) u[l - 1] = arguments[l];
            s.fn.apply(s.context, u)
        } else {
            var p, h = s.length;
            for (l = 0; l < h; l++) switch (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f) {
                case 1:
                    s[l].fn.call(s[l].context);
                    break;
                case 2:
                    s[l].fn.call(s[l].context, e);
                    break;
                case 3:
                    s[l].fn.call(s[l].context, e, n);
                    break;
                case 4:
                    s[l].fn.call(s[l].context, e, n, o);
                    break;
                default:
                    if (!u)
                        for (p = 1, u = new Array(f - 1); p < f; p++) u[p - 1] = arguments[p];
                    s[l].fn.apply(s[l].context, u)
            }
        }
        return !0
    }, c.prototype.on = function(t, e, r) {
        return i(this, t, e, r, !1)
    }, c.prototype.once = function(t, e, r) {
        return i(this, t, e, r, !0)
    }, c.prototype.removeListener = function(t, e, n, o) {
        var i = r ? r + t : t;
        if (!this._events[i]) return this;
        if (!e) return a(this, i), this;
        var c = this._events[i];
        if (c.fn) c.fn !== e || o && !c.once || n && c.context !== n || a(this, i);
        else {
            for (var u = 0, l = [], s = c.length; u < s; u++)(c[u].fn !== e || o && !c[u].once || n && c[u].context !== n) && l.push(c[u]);
            l.length ? this._events[i] = 1 === l.length ? l[0] : l : a(this, i)
        }
        return this
    }, c.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = r ? r + t : t, this._events[e] && a(this, e)) : (this._events = new n, this._eventsCount = 0), this
    }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, t.exports = c
}(x_);
var j_ = new(e(x_.exports)),
    S_ = "recharts.syncMouseEvents";

function A_(t) {
    return (A_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function P_(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, k_(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function E_(t, e, r) {
    return (e = k_(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function k_(t) {
    var e = function(t, e) {
        if ("object" != A_(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e);
            if ("object" != A_(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(t)
    }(t, "string");
    return "symbol" == A_(e) ? e : e + ""
}
var T_ = function() {
    return P_((function t() {
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), E_(this, "activeIndex", 0), E_(this, "coordinateList", []), E_(this, "layout", "horizontal")
    }), [{
        key: "setDetails",
        value: function(t) {
            var e, r = t.coordinateList,
                n = void 0 === r ? null : r,
                o = t.container,
                i = void 0 === o ? null : o,
                a = t.layout,
                c = void 0 === a ? null : a,
                u = t.offset,
                l = void 0 === u ? null : u,
                s = t.mouseHandlerCallback,
                f = void 0 === s ? null : s;
            this.coordinateList = null !== (e = null != n ? n : this.coordinateList) && void 0 !== e ? e : [], this.container = null != i ? i : this.container, this.layout = null != c ? c : this.layout, this.offset = null != l ? l : this.offset, this.mouseHandlerCallback = null != f ? f : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
    }, {
        key: "focus",
        value: function() {
            this.spoofMouse()
        }
    }, {
        key: "keyboardEvent",
        value: function(t) {
            if (0 !== this.coordinateList.length) switch (t.key) {
                case "ArrowRight":
                    if ("horizontal" !== this.layout) return;
                    this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
                    break;
                case "ArrowLeft":
                    if ("horizontal" !== this.layout) return;
                    this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse()
            }
        }
    }, {
        key: "setIndex",
        value: function(t) {
            this.activeIndex = t
        }
    }, {
        key: "spoofMouse",
        value: function() {
            var t, e;
            if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
                var r = this.container.getBoundingClientRect(),
                    n = r.x,
                    o = r.y,
                    i = r.height,
                    a = this.coordinateList[this.activeIndex].coordinate,
                    c = (null === (t = window) || void 0 === t ? void 0 : t.scrollX) || 0,
                    u = (null === (e = window) || void 0 === e ? void 0 : e.scrollY) || 0,
                    l = n + a + c,
                    s = o + this.offset.top + i / 2 + u;
                this.mouseHandlerCallback({
                    pageX: l,
                    pageY: s
                })
            }
        }
    }])
}();

function M_(t) {
    var e = t.cx,
        r = t.cy,
        n = t.radius,
        o = t.startAngle,
        i = t.endAngle;
    return {
        points: [Rw(e, r, n, o), Rw(e, r, n, i)],
        cx: e,
        cy: r,
        radius: n,
        startAngle: o,
        endAngle: i
    }
}

function __(t, e, r) {
    var n, o, i, a;
    if ("horizontal" === t) i = n = e.x, o = r.top, a = r.top + r.height;
    else if ("vertical" === t) a = o = e.y, n = r.left, i = r.left + r.width;
    else if (null != e.cx && null != e.cy) {
        if ("centric" !== t) return M_(e);
        var c = e.cx,
            u = e.cy,
            l = e.innerRadius,
            s = e.outerRadius,
            f = e.angle,
            p = Rw(c, u, l, f),
            h = Rw(c, u, s, f);
        n = p.x, o = p.y, i = h.x, a = h.y
    }
    return [{
        x: n,
        y: o
    }, {
        x: i,
        y: a
    }]
}

function C_(t) {
    return (C_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function D_(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function I_(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? D_(Object(r), !0).forEach((function(e) {
            N_(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : D_(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function N_(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != C_(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != C_(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == C_(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function R_(t) {
    var e, n, o, i = t.element,
        a = t.tooltipEventType,
        c = t.isActive,
        u = t.activeCoordinate,
        l = t.activePayload,
        s = t.offset,
        f = t.activeTooltipIndex,
        p = t.tooltipAxisBandSize,
        h = t.layout,
        y = t.chartName,
        d = null !== (e = i.props.cursor) && void 0 !== e ? e : null === (n = i.type.defaultProps) || void 0 === n ? void 0 : n.cursor;
    if (!i || !d || !c || !u || "ScatterChart" !== y && "axis" !== a) return null;
    var v = FO;
    if ("ScatterChart" === y) o = u, v = eS;
    else if ("BarChart" === y) o = function(t, e, r, n) {
        var o = n / 2;
        return {
            stroke: "none",
            fill: "#ccc",
            x: "horizontal" === t ? e.x - o : r.left + .5,
            y: "horizontal" === t ? r.top + .5 : e.y - o,
            width: "horizontal" === t ? n : r.width - 1,
            height: "horizontal" === t ? r.height - 1 : n
        }
    }(h, u, s, p), v = Bj;
    else if ("radial" === h) {
        var m = M_(u),
            b = m.cx,
            g = m.cy,
            w = m.radius;
        o = {
            cx: b,
            cy: g,
            startAngle: m.startAngle,
            endAngle: m.endAngle,
            innerRadius: w,
            outerRadius: w
        }, v = TO
    } else o = {
        points: __(h, u, s)
    }, v = FO;
    var O = I_(I_(I_(I_({
        stroke: "#ccc",
        pointerEvents: "none"
    }, s), o), au(d, !1)), {}, {
        payload: l,
        payloadIndex: f,
        className: hc("recharts-tooltip-cursor", d.className)
    });
    return r.isValidElement(d) ? r.cloneElement(d, O) : r.createElement(v, O)
}
var B_ = ["item"],
    L_ = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

function z_(t) {
    return (z_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function F_() {
    return F_ = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, F_.apply(this, arguments)
}

function U_(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || G_(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function W_(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function $_(t, e, r) {
    return e && function(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, tC(n.key), n)
        }
    }(t.prototype, e), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t
}

function K_(t, e, r) {
    return e = V_(e),
        function(t, e) {
            if (e && ("object" === z_(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, q_() ? Reflect.construct(e, r || [], V_(t).constructor) : e.apply(t, r))
}

function q_() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (q_ = function() {
        return !!t
    })()
}

function V_(t) {
    return (V_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function X_(t, e) {
    return (X_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function H_(t) {
    return function(t) {
        if (Array.isArray(t)) return Y_(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || G_(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function G_(t, e) {
    if (t) {
        if ("string" == typeof t) return Y_(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Y_(t, e) : void 0
    }
}

function Y_(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function Z_(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function J_(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Z_(Object(r), !0).forEach((function(e) {
            Q_(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Z_(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function Q_(t, e, r) {
    return (e = tC(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function tC(t) {
    var e = function(t, e) {
        if ("object" != z_(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != z_(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == z_(e) ? e : e + ""
}
var eC = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
    },
    rC = {
        width: "100%",
        height: "100%"
    },
    nC = {
        x: 0,
        y: 0
    };

function oC(t) {
    return t
}
var iC = function(t, e) {
    var r = e.graphicalItems,
        n = e.dataStartIndex,
        o = e.dataEndIndex,
        i = (null != r ? r : []).reduce((function(t, e) {
            var r = e.props.data;
            return r && r.length ? [].concat(H_(t), H_(r)) : t
        }), []);
    return i.length > 0 ? i : t && t.length && Ec(n) && Ec(o) ? t.slice(n, o + 1) : []
};

function aC(t) {
    return "number" === t ? [0, "auto"] : void 0
}
var cC = function(t, e, r, n) {
        var o = t.graphicalItems,
            i = t.tooltipAxis,
            a = iC(e, t);
        return r < 0 || !o || !o.length || r >= a.length ? null : o.reduce((function(o, c) {
            var u, l, s = null !== (u = c.props.data) && void 0 !== u ? u : e;
            (s && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= r && (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)), i.dataKey && !i.allowDuplicatedCategory) ? l = Ic(void 0 === s ? a : s, i.dataKey, n): l = s && s[r] || a[r];
            return l ? [].concat(H_(o), [Ew(c, l)]) : o
        }), [])
    },
    uC = function(t, e, r, n) {
        var o = n || {
                x: t.chartX,
                y: t.chartY
            },
            i = function(t, e) {
                return "horizontal" === e ? t.x : "vertical" === e ? t.y : "centric" === e ? t.angle : t.radius
            }(o, r),
            a = t.orderedTooltipTicks,
            c = t.tooltipAxis,
            u = t.tooltipTicks,
            l = function(t) {
                var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    o = arguments.length > 3 ? arguments[3] : void 0,
                    i = -1,
                    a = null !== (e = null == r ? void 0 : r.length) && void 0 !== e ? e : 0;
                if (a <= 1) return 0;
                if (o && "angleAxis" === o.axisType && Math.abs(Math.abs(o.range[1] - o.range[0]) - 360) <= 1e-6)
                    for (var c = o.range, u = 0; u < a; u++) {
                        var l = u > 0 ? n[u - 1].coordinate : n[a - 1].coordinate,
                            s = n[u].coordinate,
                            f = u >= a - 1 ? n[0].coordinate : n[u + 1].coordinate,
                            p = void 0;
                        if (Ac(s - l) !== Ac(f - s)) {
                            var h = [];
                            if (Ac(f - s) === Ac(c[1] - c[0])) {
                                p = f;
                                var y = s + c[1] - c[0];
                                h[0] = Math.min(y, (y + l) / 2), h[1] = Math.max(y, (y + l) / 2)
                            } else {
                                p = l;
                                var d = f + c[1] - c[0];
                                h[0] = Math.min(s, (d + s) / 2), h[1] = Math.max(s, (d + s) / 2)
                            }
                            var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
                            if (t > v[0] && t <= v[1] || t >= h[0] && t <= h[1]) {
                                i = n[u].index;
                                break
                            }
                        } else {
                            var m = Math.min(l, f),
                                b = Math.max(l, f);
                            if (t > (m + s) / 2 && t <= (b + s) / 2) {
                                i = n[u].index;
                                break
                            }
                        }
                    } else
                        for (var g = 0; g < a; g++)
                            if (0 === g && t <= (r[g].coordinate + r[g + 1].coordinate) / 2 || g > 0 && g < a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2 && t <= (r[g].coordinate + r[g + 1].coordinate) / 2 || g === a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2) {
                                i = r[g].index;
                                break
                            }
                return i
            }(i, a, u, c);
        if (l >= 0 && u) {
            var s = u[l] && u[l].value,
                f = cC(t, e, l, s),
                p = function(t, e, r, n) {
                    var o = e.find((function(t) {
                        return t && t.index === r
                    }));
                    if (o) {
                        if ("horizontal" === t) return {
                            x: o.coordinate,
                            y: n.y
                        };
                        if ("vertical" === t) return {
                            x: n.x,
                            y: o.coordinate
                        };
                        if ("centric" === t) {
                            var i = o.coordinate,
                                a = n.radius;
                            return J_(J_(J_({}, n), Rw(n.cx, n.cy, a, i)), {}, {
                                angle: i,
                                radius: a
                            })
                        }
                        var c = o.coordinate,
                            u = n.angle;
                        return J_(J_(J_({}, n), Rw(n.cx, n.cy, c, u)), {}, {
                            angle: u,
                            radius: c
                        })
                    }
                    return nC
                }(r, a, l, o);
            return {
                activeTooltipIndex: l,
                activeLabel: s,
                activePayload: f,
                activeCoordinate: p
            }
        }
        return null
    },
    lC = function(t, e) {
        var r = e.axes,
            n = e.graphicalItems,
            o = e.axisType,
            i = e.axisIdKey,
            a = e.stackGroups,
            c = e.dataStartIndex,
            u = e.dataEndIndex,
            l = t.layout,
            s = t.children,
            f = t.stackOffset,
            p = iw(l, o);
        return r.reduce((function(e, r) {
            var h, y = void 0 !== r.type.defaultProps ? J_(J_({}, r.type.defaultProps), r.props) : r.props,
                d = y.type,
                v = y.dataKey,
                m = y.allowDataOverflow,
                b = y.allowDuplicatedCategory,
                g = y.scale,
                w = y.ticks,
                O = y.includeHidden,
                x = y[i];
            if (e[x]) return e;
            var j, S, A, P = iC(t.data, {
                    graphicalItems: n.filter((function(t) {
                        var e;
                        return (i in t.props ? t.props[i] : null === (e = t.type.defaultProps) || void 0 === e ? void 0 : e[i]) === x
                    })),
                    dataStartIndex: c,
                    dataEndIndex: u
                }),
                E = P.length;
            (function(t, e, r) {
                if ("number" === r && !0 === e && Array.isArray(t)) {
                    var n = null == t ? void 0 : t[0],
                        o = null == t ? void 0 : t[1];
                    if (n && o && Ec(n) && Ec(o)) return !0
                }
                return !1
            })(y.domain, m, d) && (j = Sw(y.domain, null, m), !p || "number" !== d && "auto" === g || (A = ew(P, v, "category")));
            var k = aC(d);
            if (!j || 0 === j.length) {
                var T, M = null !== (T = y.domain) && void 0 !== T ? T : k;
                if (v) {
                    if (j = ew(P, v, d), "category" === d && p) {
                        var _ = function(t) {
                            if (!Array.isArray(t)) return !1;
                            for (var e = t.length, r = {}, n = 0; n < e; n++) {
                                if (r[t[n]]) return !0;
                                r[t[n]] = !0
                            }
                            return !1
                        }(j);
                        b && _ ? (S = j, j = DP(0, E)) : b || (j = Pw(M, j, r).reduce((function(t, e) {
                            return t.indexOf(e) >= 0 ? t : [].concat(H_(t), [e])
                        }), []))
                    } else if ("category" === d) j = b ? j.filter((function(t) {
                        return "" !== t && !yc(t)
                    })) : Pw(M, j, r).reduce((function(t, e) {
                        return t.indexOf(e) >= 0 || "" === e || yc(e) ? t : [].concat(H_(t), [e])
                    }), []);
                    else if ("number" === d) {
                        var C = function(t, e, r, n, o) {
                            var i = e.map((function(e) {
                                return nw(t, e, r, o, n)
                            })).filter((function(t) {
                                return !yc(t)
                            }));
                            return i && i.length ? i.reduce((function(t, e) {
                                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])]
                            }), [1 / 0, -1 / 0]) : null
                        }(P, n.filter((function(t) {
                            var e, r, n = i in t.props ? t.props[i] : null === (e = t.type.defaultProps) || void 0 === e ? void 0 : e[i],
                                o = "hide" in t.props ? t.props.hide : null === (r = t.type.defaultProps) || void 0 === r ? void 0 : r.hide;
                            return n === x && (O || !o)
                        })), v, o, l);
                        C && (j = C)
                    }!p || "number" !== d && "auto" === g || (A = ew(P, v, "category"))
                } else j = p ? DP(0, E) : a && a[x] && a[x].hasStack && "number" === d ? "expand" === f ? [0, 1] : Ow(a[x].stackGroups, c, u) : ow(P, n.filter((function(t) {
                    var e = i in t.props ? t.props[i] : t.type.defaultProps[i],
                        r = "hide" in t.props ? t.props.hide : t.type.defaultProps.hide;
                    return e === x && (O || !r)
                })), d, l, !0);
                if ("number" === d) j = O_(s, j, x, o, w), M && (j = Sw(M, j, m));
                else if ("category" === d && M) {
                    var D = M;
                    j.every((function(t) {
                        return D.indexOf(t) >= 0
                    })) && (j = D)
                }
            }
            return J_(J_({}, e), {}, Q_({}, x, J_(J_({}, y), {}, {
                axisType: o,
                domain: j,
                categoricalDomain: A,
                duplicateDomain: S,
                originalDomain: null !== (h = y.domain) && void 0 !== h ? h : k,
                isCategorical: p,
                layout: l
            })))
        }), {})
    },
    sC = function(t, e) {
        var r = e.axisType,
            n = void 0 === r ? "xAxis" : r,
            o = e.AxisComp,
            i = e.graphicalItems,
            a = e.stackGroups,
            c = e.dataStartIndex,
            u = e.dataEndIndex,
            l = t.children,
            s = "".concat(n, "Id"),
            f = Qc(l, o),
            p = {};
        return f && f.length ? p = lC(t, {
            axes: f,
            graphicalItems: i,
            axisType: n,
            axisIdKey: s,
            stackGroups: a,
            dataStartIndex: c,
            dataEndIndex: u
        }) : i && i.length && (p = function(t, e) {
            var r = e.graphicalItems,
                n = e.Axis,
                o = e.axisType,
                i = e.axisIdKey,
                a = e.stackGroups,
                c = e.dataStartIndex,
                u = e.dataEndIndex,
                l = t.layout,
                s = t.children,
                f = iC(t.data, {
                    graphicalItems: r,
                    dataStartIndex: c,
                    dataEndIndex: u
                }),
                p = f.length,
                h = iw(l, o),
                y = -1;
            return r.reduce((function(t, e) {
                var d, v = (void 0 !== e.type.defaultProps ? J_(J_({}, e.type.defaultProps), e.props) : e.props)[i],
                    m = aC("number");
                return t[v] ? t : (y++, h ? d = DP(0, p) : a && a[v] && a[v].hasStack ? (d = Ow(a[v].stackGroups, c, u), d = O_(s, d, v, o)) : (d = Sw(m, ow(f, r.filter((function(t) {
                    var e, r, n = i in t.props ? t.props[i] : null === (e = t.type.defaultProps) || void 0 === e ? void 0 : e[i],
                        o = "hide" in t.props ? t.props.hide : null === (r = t.type.defaultProps) || void 0 === r ? void 0 : r.hide;
                    return n === v && !o
                })), "number", l), n.defaultProps.allowDataOverflow), d = O_(s, d, v, o)), J_(J_({}, t), {}, Q_({}, v, J_(J_({
                    axisType: o
                }, n.defaultProps), {}, {
                    hide: !0,
                    orientation: ve(eC, "".concat(o, ".").concat(y % 2), null),
                    domain: d,
                    originalDomain: m,
                    isCategorical: h,
                    layout: l
                }))))
            }), {})
        }(t, {
            Axis: o,
            graphicalItems: i,
            axisType: n,
            axisIdKey: s,
            stackGroups: a,
            dataStartIndex: c,
            dataEndIndex: u
        })), p
    },
    fC = function(t) {
        var e = t.children,
            r = t.defaultShowTooltip,
            n = tu(e, ZP),
            o = 0,
            i = 0;
        return t.data && 0 !== t.data.length && (i = t.data.length - 1), n && n.props && (n.props.startIndex >= 0 && (o = n.props.startIndex), n.props.endIndex >= 0 && (i = n.props.endIndex)), {
            chartX: 0,
            chartY: 0,
            dataStartIndex: o,
            dataEndIndex: i,
            activeTooltipIndex: -1,
            isTooltipActive: Boolean(r)
        }
    },
    pC = function(t) {
        return "horizontal" === t ? {
            numericAxisName: "yAxis",
            cateAxisName: "xAxis"
        } : "vertical" === t ? {
            numericAxisName: "xAxis",
            cateAxisName: "yAxis"
        } : "centric" === t ? {
            numericAxisName: "radiusAxis",
            cateAxisName: "angleAxis"
        } : {
            numericAxisName: "angleAxis",
            cateAxisName: "radiusAxis"
        }
    },
    hC = function(t, e) {
        var r = t.props,
            n = (t.graphicalItems, t.xAxisMap),
            o = void 0 === n ? {} : n,
            i = t.yAxisMap,
            a = void 0 === i ? {} : i,
            c = r.width,
            u = r.height,
            l = r.children,
            s = r.margin || {},
            f = tu(l, ZP),
            p = tu(l, Pf),
            h = Object.keys(a).reduce((function(t, e) {
                var r = a[e],
                    n = r.orientation;
                return r.mirror || r.hide ? t : J_(J_({}, t), {}, Q_({}, n, t[n] + r.width))
            }), {
                left: s.left || 0,
                right: s.right || 0
            }),
            y = Object.keys(o).reduce((function(t, e) {
                var r = o[e],
                    n = r.orientation;
                return r.mirror || r.hide ? t : J_(J_({}, t), {}, Q_({}, n, ve(t, "".concat(n)) + r.height))
            }), {
                top: s.top || 0,
                bottom: s.bottom || 0
            }),
            d = J_(J_({}, y), h),
            v = d.bottom;
        f && (d.bottom += f.props.height || ZP.defaultProps.height), p && e && (d = function(t, e, r, n) {
            var o = r.children,
                i = r.width,
                a = r.margin,
                c = i - (a.left || 0) - (a.right || 0),
                u = Xg({
                    children: o,
                    legendWidth: c
                });
            if (u) {
                var l = n || {},
                    s = l.width,
                    f = l.height,
                    p = u.align,
                    h = u.verticalAlign,
                    y = u.layout;
                if (("vertical" === y || "horizontal" === y && "middle" === h) && "center" !== p && Ec(t[p])) return Jg(Jg({}, t), {}, Qg({}, p, t[p] + (s || 0)));
                if (("horizontal" === y || "vertical" === y && "center" === p) && "middle" !== h && Ec(t[h])) return Jg(Jg({}, t), {}, Qg({}, h, t[h] + (f || 0)))
            }
            return t
        }(d, 0, r, e));
        var m = c - d.left - d.right,
            b = u - d.top - d.bottom;
        return J_(J_({
            brushBottom: v
        }, d), {}, {
            width: Math.max(m, 0),
            height: Math.max(b, 0)
        })
    },
    yC = function(t, e) {
        return "xAxis" === e ? t[e].width : "yAxis" === e ? t[e].height : void 0
    },
    dC = function(t) {
        var e = t.chartName,
            o = t.GraphicalChild,
            i = t.defaultTooltipEventType,
            a = void 0 === i ? "axis" : i,
            c = t.validateTooltipEventTypes,
            u = void 0 === c ? ["axis"] : c,
            l = t.axisComponents,
            s = t.legendContent,
            f = t.formatAxisMap,
            p = t.defaultProps,
            y = function(t, e) {
                var r = e.graphicalItems,
                    n = e.stackGroups,
                    o = e.offset,
                    i = e.updateId,
                    a = e.dataStartIndex,
                    c = e.dataEndIndex,
                    u = t.barSize,
                    s = t.layout,
                    f = t.barGap,
                    p = t.barCategoryGap,
                    h = t.maxBarSize,
                    y = pC(s),
                    d = y.numericAxisName,
                    v = y.cateAxisName,
                    m = function(t) {
                        return !(!t || !t.length) && t.some((function(t) {
                            var e = Gc(t && t.type);
                            return e && e.indexOf("Bar") >= 0
                        }))
                    }(r),
                    b = [];
                return r.forEach((function(r, y) {
                    var g = iC(t.data, {
                            graphicalItems: [r],
                            dataStartIndex: a,
                            dataEndIndex: c
                        }),
                        w = void 0 !== r.type.defaultProps ? J_(J_({}, r.type.defaultProps), r.props) : r.props,
                        O = w.dataKey,
                        x = w.maxBarSize,
                        j = w["".concat(d, "Id")],
                        S = w["".concat(v, "Id")],
                        A = l.reduce((function(t, r) {
                            var n = e["".concat(r.axisType, "Map")],
                                o = w["".concat(r.axisType, "Id")];
                            n && n[o] || "zAxis" === r.axisType || kg();
                            var i = n[o];
                            return J_(J_({}, t), {}, Q_(Q_({}, r.axisType, i), "".concat(r.axisType, "Ticks"), cw(i)))
                        }), {}),
                        P = A[v],
                        E = A["".concat(v, "Ticks")],
                        k = n && n[j] && n[j].hasStack && function(t, e) {
                            var r, n = (null !== (r = t.type) && void 0 !== r && r.defaultProps ? Jg(Jg({}, t.type.defaultProps), t.props) : t.props).stackId;
                            if (kc(n)) {
                                var o = e[n];
                                if (o) {
                                    var i = o.items.indexOf(t);
                                    return i >= 0 ? o.stackedData[i] : null
                                }
                            }
                            return null
                        }(r, n[j].stackGroups),
                        T = Gc(r.type).indexOf("Bar") >= 0,
                        M = Aw(P, E),
                        _ = [],
                        C = m && function(t) {
                            var e = t.barSize,
                                r = t.totalSize,
                                n = t.stackGroups,
                                o = void 0 === n ? {} : n;
                            if (!o) return {};
                            for (var i = {}, a = Object.keys(o), c = 0, u = a.length; c < u; c++)
                                for (var l = o[a[c]].stackGroups, s = Object.keys(l), f = 0, p = s.length; f < p; f++) {
                                    var h = l[s[f]],
                                        y = h.items,
                                        d = h.cateAxisId,
                                        v = y.filter((function(t) {
                                            return Gc(t.type).indexOf("Bar") >= 0
                                        }));
                                    if (v && v.length) {
                                        var m = v[0].type.defaultProps,
                                            b = void 0 !== m ? Jg(Jg({}, m), v[0].props) : v[0].props,
                                            g = b.barSize,
                                            w = b[d];
                                        i[w] || (i[w] = []);
                                        var O = yc(g) ? e : g;
                                        i[w].push({
                                            item: v[0],
                                            stackList: v.slice(1),
                                            barSize: yc(O) ? void 0 : _c(O, r, 0)
                                        })
                                    }
                                }
                            return i
                        }({
                            barSize: u,
                            stackGroups: n,
                            totalSize: yC(A, v)
                        });
                    if (T) {
                        var D, I, N = yc(x) ? h : x,
                            R = null !== (D = null !== (I = Aw(P, E, !0)) && void 0 !== I ? I : N) && void 0 !== D ? D : 0;
                        _ = function(t) {
                            var e = t.barGap,
                                r = t.barCategoryGap,
                                n = t.bandSize,
                                o = t.sizeList,
                                i = void 0 === o ? [] : o,
                                a = t.maxBarSize,
                                c = i.length;
                            if (c < 1) return null;
                            var u, l = _c(e, n, 0, !0),
                                s = [];
                            if (i[0].barSize === +i[0].barSize) {
                                var f = !1,
                                    p = n / c,
                                    h = i.reduce((function(t, e) {
                                        return t + e.barSize || 0
                                    }), 0);
                                (h += (c - 1) * l) >= n && (h -= (c - 1) * l, l = 0), h >= n && p > 0 && (f = !0, h = c * (p *= .9));
                                var y = {
                                    offset: ((n - h) / 2 | 0) - l,
                                    size: 0
                                };
                                u = i.reduce((function(t, e) {
                                    var r = {
                                            item: e.item,
                                            position: {
                                                offset: y.offset + y.size + l,
                                                size: f ? p : e.barSize
                                            }
                                        },
                                        n = [].concat(Gg(t), [r]);
                                    return y = n[n.length - 1].position, e.stackList && e.stackList.length && e.stackList.forEach((function(t) {
                                        n.push({
                                            item: t,
                                            position: y
                                        })
                                    })), n
                                }), s)
                            } else {
                                var d = _c(r, n, 0, !0);
                                n - 2 * d - (c - 1) * l <= 0 && (l = 0);
                                var v = (n - 2 * d - (c - 1) * l) / c;
                                v > 1 && (v >>= 0);
                                var m = a === +a ? Math.min(v, a) : v;
                                u = i.reduce((function(t, e, r) {
                                    var n = [].concat(Gg(t), [{
                                        item: e.item,
                                        position: {
                                            offset: d + (v + l) * r + (v - m) / 2,
                                            size: m
                                        }
                                    }]);
                                    return e.stackList && e.stackList.length && e.stackList.forEach((function(t) {
                                        n.push({
                                            item: t,
                                            position: n[n.length - 1].position
                                        })
                                    })), n
                                }), s)
                            }
                            return u
                        }({
                            barGap: f,
                            barCategoryGap: p,
                            bandSize: R !== M ? R : M,
                            sizeList: C[S],
                            maxBarSize: N
                        }), R !== M && (_ = _.map((function(t) {
                            return J_(J_({}, t), {}, {
                                position: J_(J_({}, t.position), {}, {
                                    offset: t.position.offset - R / 2
                                })
                            })
                        })))
                    }
                    var B, L, z = r && r.type && r.type.getComposedData;
                    z && b.push({
                        props: J_(J_({}, z(J_(J_({}, A), {}, {
                            displayedData: g,
                            props: t,
                            dataKey: O,
                            item: r,
                            bandSize: M,
                            barPosition: _,
                            offset: o,
                            stackedData: k,
                            layout: s,
                            dataStartIndex: a,
                            dataEndIndex: c
                        }))), {}, Q_(Q_(Q_({
                            key: r.key || "item-".concat(y)
                        }, d, A[d]), v, A[v]), "animationId", i)),
                        childIndex: (B = r, L = t.children, Jc(L).indexOf(B)),
                        item: r
                    })
                })), b
            },
            d = function(t, r) {
                var n = t.props,
                    i = t.dataStartIndex,
                    a = t.dataEndIndex,
                    c = t.updateId;
                if (!eu({
                        props: n
                    })) return null;
                var u = n.children,
                    s = n.layout,
                    p = n.stackOffset,
                    h = n.data,
                    d = n.reverseStackOrder,
                    v = pC(s),
                    m = v.numericAxisName,
                    b = v.cateAxisName,
                    g = Qc(u, o),
                    w = function(t, e, r, n, o, i) {
                        if (!t) return null;
                        var a = (i ? e.reverse() : e).reduce((function(t, e) {
                            var o, i = null !== (o = e.type) && void 0 !== o && o.defaultProps ? Jg(Jg({}, e.type.defaultProps), e.props) : e.props,
                                a = i.stackId;
                            if (i.hide) return t;
                            var c = i[r],
                                u = t[c] || {
                                    hasStack: !1,
                                    stackGroups: {}
                                };
                            if (kc(a)) {
                                var l = u.stackGroups[a] || {
                                    numericAxisId: r,
                                    cateAxisId: n,
                                    items: []
                                };
                                l.items.push(e), u.hasStack = !0, u.stackGroups[a] = l
                            } else u.stackGroups[Mc("_stackId_")] = {
                                numericAxisId: r,
                                cateAxisId: n,
                                items: [e]
                            };
                            return Jg(Jg({}, t), {}, Qg({}, c, u))
                        }), {});
                        return Object.keys(a).reduce((function(e, i) {
                            var c = a[i];
                            return c.hasStack && (c.stackGroups = Object.keys(c.stackGroups).reduce((function(e, i) {
                                var a = c.stackGroups[i];
                                return Jg(Jg({}, e), {}, Qg({}, i, {
                                    numericAxisId: r,
                                    cateAxisId: n,
                                    items: a.items,
                                    stackedData: vw(t, a.items, o)
                                }))
                            }), {})), Jg(Jg({}, e), {}, Qg({}, i, c))
                        }), {})
                    }(h, g, "".concat(m, "Id"), "".concat(b, "Id"), p, d),
                    O = l.reduce((function(t, e) {
                        var r = "".concat(e.axisType, "Map");
                        return J_(J_({}, t), {}, Q_({}, r, sC(n, J_(J_({}, e), {}, {
                            graphicalItems: g,
                            stackGroups: e.axisType === m && w,
                            dataStartIndex: i,
                            dataEndIndex: a
                        }))))
                    }), {}),
                    x = hC(J_(J_({}, O), {}, {
                        props: n,
                        graphicalItems: g
                    }), null == r ? void 0 : r.legendBBox);
                Object.keys(O).forEach((function(t) {
                    O[t] = f(n, O[t], x, t.replace("Map", ""), e)
                }));
                var j, S, A = O["".concat(b, "Map")],
                    P = (j = Cc(A), {
                        tooltipTicks: S = cw(j, !1, !0),
                        orderedTooltipTicks: Gf(S, (function(t) {
                            return t.coordinate
                        })),
                        tooltipAxis: j,
                        tooltipAxisBandSize: Aw(j, S)
                    }),
                    E = y(n, J_(J_({}, O), {}, {
                        dataStartIndex: i,
                        dataEndIndex: a,
                        updateId: c,
                        graphicalItems: g,
                        stackGroups: w,
                        offset: x
                    }));
                return J_(J_({
                    formattedGraphicalItems: E,
                    graphicalItems: g,
                    offset: x,
                    stackGroups: w
                }, P), O)
            },
            v = function() {
                function t(o) {
                    var i, a, c;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), Q_(c = K_(this, t, [o]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Q_(c, "accessibilityManager", new T_), Q_(c, "handleLegendBBoxUpdate", (function(t) {
                        if (t) {
                            var e = c.state,
                                r = e.dataStartIndex,
                                n = e.dataEndIndex,
                                o = e.updateId;
                            c.setState(J_({
                                legendBBox: t
                            }, d({
                                props: c.props,
                                dataStartIndex: r,
                                dataEndIndex: n,
                                updateId: o
                            }, J_(J_({}, c.state), {}, {
                                legendBBox: t
                            }))))
                        }
                    })), Q_(c, "handleReceiveSyncEvent", (function(t, e, r) {
                        if (c.props.syncId === t) {
                            if (r === c.eventEmitterSymbol && "function" != typeof c.props.syncMethod) return;
                            c.applySyncEvent(e)
                        }
                    })), Q_(c, "handleBrushChange", (function(t) {
                        var e = t.startIndex,
                            r = t.endIndex;
                        if (e !== c.state.dataStartIndex || r !== c.state.dataEndIndex) {
                            var n = c.state.updateId;
                            c.setState((function() {
                                return J_({
                                    dataStartIndex: e,
                                    dataEndIndex: r
                                }, d({
                                    props: c.props,
                                    dataStartIndex: e,
                                    dataEndIndex: r,
                                    updateId: n
                                }, c.state))
                            })), c.triggerSyncEvent({
                                dataStartIndex: e,
                                dataEndIndex: r
                            })
                        }
                    })), Q_(c, "handleMouseEnter", (function(t) {
                        var e = c.getMouseInfo(t);
                        if (e) {
                            var r = J_(J_({}, e), {}, {
                                isTooltipActive: !0
                            });
                            c.setState(r), c.triggerSyncEvent(r);
                            var n = c.props.onMouseEnter;
                            A(n) && n(r, t)
                        }
                    })), Q_(c, "triggeredAfterMouseMove", (function(t) {
                        var e = c.getMouseInfo(t),
                            r = e ? J_(J_({}, e), {}, {
                                isTooltipActive: !0
                            }) : {
                                isTooltipActive: !1
                            };
                        c.setState(r), c.triggerSyncEvent(r);
                        var n = c.props.onMouseMove;
                        A(n) && n(r, t)
                    })), Q_(c, "handleItemMouseEnter", (function(t) {
                        c.setState((function() {
                            return {
                                isTooltipActive: !0,
                                activeItem: t,
                                activePayload: t.tooltipPayload,
                                activeCoordinate: t.tooltipPosition || {
                                    x: t.cx,
                                    y: t.cy
                                }
                            }
                        }))
                    })), Q_(c, "handleItemMouseLeave", (function() {
                        c.setState((function() {
                            return {
                                isTooltipActive: !1
                            }
                        }))
                    })), Q_(c, "handleMouseMove", (function(t) {
                        t.persist(), c.throttleTriggeredAfterMouseMove(t)
                    })), Q_(c, "handleMouseLeave", (function(t) {
                        c.throttleTriggeredAfterMouseMove.cancel();
                        var e = {
                            isTooltipActive: !1
                        };
                        c.setState(e), c.triggerSyncEvent(e);
                        var r = c.props.onMouseLeave;
                        A(r) && r(e, t)
                    })), Q_(c, "handleOuterEvent", (function(t) {
                        var e, r = function(t) {
                                var e = t && t.type;
                                return e && Hc[e] ? Hc[e] : null
                            }(t),
                            n = ve(c.props, "".concat(r));
                        r && A(n) && n(null !== (e = /.*touch.*/i.test(r) ? c.getMouseInfo(t.changedTouches[0]) : c.getMouseInfo(t)) && void 0 !== e ? e : {}, t)
                    })), Q_(c, "handleClick", (function(t) {
                        var e = c.getMouseInfo(t);
                        if (e) {
                            var r = J_(J_({}, e), {}, {
                                isTooltipActive: !0
                            });
                            c.setState(r), c.triggerSyncEvent(r);
                            var n = c.props.onClick;
                            A(n) && n(r, t)
                        }
                    })), Q_(c, "handleMouseDown", (function(t) {
                        var e = c.props.onMouseDown;
                        A(e) && e(c.getMouseInfo(t), t)
                    })), Q_(c, "handleMouseUp", (function(t) {
                        var e = c.props.onMouseUp;
                        A(e) && e(c.getMouseInfo(t), t)
                    })), Q_(c, "handleTouchMove", (function(t) {
                        null != t.changedTouches && t.changedTouches.length > 0 && c.throttleTriggeredAfterMouseMove(t.changedTouches[0])
                    })), Q_(c, "handleTouchStart", (function(t) {
                        null != t.changedTouches && t.changedTouches.length > 0 && c.handleMouseDown(t.changedTouches[0])
                    })), Q_(c, "handleTouchEnd", (function(t) {
                        null != t.changedTouches && t.changedTouches.length > 0 && c.handleMouseUp(t.changedTouches[0])
                    })), Q_(c, "handleDoubleClick", (function(t) {
                        var e = c.props.onDoubleClick;
                        A(e) && e(c.getMouseInfo(t), t)
                    })), Q_(c, "handleContextMenu", (function(t) {
                        var e = c.props.onContextMenu;
                        A(e) && e(c.getMouseInfo(t), t)
                    })), Q_(c, "triggerSyncEvent", (function(t) {
                        void 0 !== c.props.syncId && j_.emit(S_, c.props.syncId, t, c.eventEmitterSymbol)
                    })), Q_(c, "applySyncEvent", (function(t) {
                        var e = c.props,
                            r = e.layout,
                            n = e.syncMethod,
                            o = c.state.updateId,
                            i = t.dataStartIndex,
                            a = t.dataEndIndex;
                        if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex) c.setState(J_({
                            dataStartIndex: i,
                            dataEndIndex: a
                        }, d({
                            props: c.props,
                            dataStartIndex: i,
                            dataEndIndex: a,
                            updateId: o
                        }, c.state)));
                        else if (void 0 !== t.activeTooltipIndex) {
                            var u = t.chartX,
                                l = t.chartY,
                                s = t.activeTooltipIndex,
                                f = c.state,
                                p = f.offset,
                                h = f.tooltipTicks;
                            if (!p) return;
                            if ("function" == typeof n) s = n(h, t);
                            else if ("value" === n) {
                                s = -1;
                                for (var y = 0; y < h.length; y++)
                                    if (h[y].value === t.activeLabel) {
                                        s = y;
                                        break
                                    }
                            }
                            var v = J_(J_({}, p), {}, {
                                    x: p.left,
                                    y: p.top
                                }),
                                m = Math.min(u, v.x + v.width),
                                b = Math.min(l, v.y + v.height),
                                g = h[s] && h[s].value,
                                w = cC(c.state, c.props.data, s),
                                O = h[s] ? {
                                    x: "horizontal" === r ? h[s].coordinate : m,
                                    y: "horizontal" === r ? b : h[s].coordinate
                                } : nC;
                            c.setState(J_(J_({}, t), {}, {
                                activeLabel: g,
                                activeCoordinate: O,
                                activePayload: w,
                                activeTooltipIndex: s
                            }))
                        } else c.setState(t)
                    })), Q_(c, "renderCursor", (function(t) {
                        var r, o = c.state,
                            i = o.isTooltipActive,
                            a = o.activeCoordinate,
                            u = o.activePayload,
                            l = o.offset,
                            s = o.activeTooltipIndex,
                            f = o.tooltipAxisBandSize,
                            p = c.getTooltipEventType(),
                            h = null !== (r = t.props.active) && void 0 !== r ? r : i,
                            y = c.props.layout,
                            d = t.key || "_recharts-cursor";
                        return n.createElement(R_, {
                            key: d,
                            activeCoordinate: a,
                            activePayload: u,
                            activeTooltipIndex: s,
                            chartName: e,
                            element: t,
                            isActive: h,
                            layout: y,
                            offset: l,
                            tooltipAxisBandSize: f,
                            tooltipEventType: p
                        })
                    })), Q_(c, "renderPolarAxis", (function(t, e, n) {
                        var o = ve(t, "type.axisType"),
                            i = ve(c.state, "".concat(o, "Map")),
                            a = t.type.defaultProps,
                            u = void 0 !== a ? J_(J_({}, a), t.props) : t.props,
                            l = i && i[u["".concat(o, "Id")]];
                        return r.cloneElement(t, J_(J_({}, l), {}, {
                            className: hc(o, l.className),
                            key: t.key || "".concat(e, "-").concat(n),
                            ticks: cw(l, !0)
                        }))
                    })), Q_(c, "renderPolarGrid", (function(t) {
                        var e = t.props,
                            n = e.radialLines,
                            o = e.polarAngles,
                            i = e.polarRadius,
                            a = c.state,
                            u = a.radiusAxisMap,
                            l = a.angleAxisMap,
                            s = Cc(u),
                            f = Cc(l),
                            p = f.cx,
                            h = f.cy,
                            y = f.innerRadius,
                            d = f.outerRadius;
                        return r.cloneElement(t, {
                            polarAngles: Array.isArray(o) ? o : cw(f, !0).map((function(t) {
                                return t.coordinate
                            })),
                            polarRadius: Array.isArray(i) ? i : cw(s, !0).map((function(t) {
                                return t.coordinate
                            })),
                            cx: p,
                            cy: h,
                            innerRadius: y,
                            outerRadius: d,
                            key: t.key || "polar-grid",
                            radialLines: n
                        })
                    })), Q_(c, "renderLegend", (function() {
                        var t = c.state.formattedGraphicalItems,
                            e = c.props,
                            n = e.children,
                            o = e.width,
                            i = e.height,
                            a = c.props.margin || {},
                            u = o - (a.left || 0) - (a.right || 0),
                            l = Xg({
                                children: n,
                                formattedGraphicalItems: t,
                                legendWidth: u,
                                legendContent: s
                            });
                        if (!l) return null;
                        var f = l.item,
                            p = W_(l, B_);
                        return r.cloneElement(f, J_(J_({}, p), {}, {
                            chartWidth: o,
                            chartHeight: i,
                            margin: a,
                            onBBoxUpdate: c.handleLegendBBoxUpdate
                        }))
                    })), Q_(c, "renderTooltip", (function() {
                        var t, e = c.props,
                            n = e.children,
                            o = e.accessibilityLayer,
                            i = tu(n, Ip);
                        if (!i) return null;
                        var a = c.state,
                            u = a.isTooltipActive,
                            l = a.activeCoordinate,
                            s = a.activePayload,
                            f = a.activeLabel,
                            p = a.offset,
                            h = null !== (t = i.props.active) && void 0 !== t ? t : u;
                        return r.cloneElement(i, {
                            viewBox: J_(J_({}, p), {}, {
                                x: p.left,
                                y: p.top
                            }),
                            active: h,
                            label: f,
                            payload: h ? s : [],
                            coordinate: l,
                            accessibilityLayer: o
                        })
                    })), Q_(c, "renderBrush", (function(t) {
                        var e = c.props,
                            n = e.margin,
                            o = e.data,
                            i = c.state,
                            a = i.offset,
                            u = i.dataStartIndex,
                            l = i.dataEndIndex,
                            s = i.updateId;
                        return r.cloneElement(t, {
                            key: t.key || "_recharts-brush",
                            onChange: lw(c.handleBrushChange, t.props.onChange),
                            data: o,
                            x: Ec(t.props.x) ? t.props.x : a.left,
                            y: Ec(t.props.y) ? t.props.y : a.top + a.height + a.brushBottom - (n.bottom || 0),
                            width: Ec(t.props.width) ? t.props.width : a.width,
                            startIndex: u,
                            endIndex: l,
                            updateId: "brush-".concat(s)
                        })
                    })), Q_(c, "renderReferenceElement", (function(t, e, n) {
                        if (!t) return null;
                        var o = c.clipPathId,
                            i = c.state,
                            a = i.xAxisMap,
                            u = i.yAxisMap,
                            l = i.offset,
                            s = t.type.defaultProps || {},
                            f = t.props,
                            p = f.xAxisId,
                            h = void 0 === p ? s.xAxisId : p,
                            y = f.yAxisId,
                            d = void 0 === y ? s.yAxisId : y;
                        return r.cloneElement(t, {
                            key: t.key || "".concat(e, "-").concat(n),
                            xAxis: a[h],
                            yAxis: u[d],
                            viewBox: {
                                x: l.left,
                                y: l.top,
                                width: l.width,
                                height: l.height
                            },
                            clipPathId: o
                        })
                    })), Q_(c, "renderActivePoints", (function(e) {
                        var r = e.item,
                            n = e.activePoint,
                            o = e.basePoint,
                            i = e.childIndex,
                            a = e.isRange,
                            c = [],
                            u = r.props.key,
                            l = void 0 !== r.item.type.defaultProps ? J_(J_({}, r.item.type.defaultProps), r.item.props) : r.item.props,
                            s = l.activeDot,
                            f = J_(J_({
                                index: i,
                                dataKey: l.dataKey,
                                cx: n.x,
                                cy: n.y,
                                r: 4,
                                fill: rw(r.item),
                                strokeWidth: 2,
                                stroke: "#fff",
                                payload: n.payload,
                                value: n.value
                            }, au(s, !1)), Wc(s));
                        return c.push(t.renderActiveDot(s, f, "".concat(u, "-activePoint-").concat(i))), o ? c.push(t.renderActiveDot(s, J_(J_({}, f), {}, {
                            cx: o.x,
                            cy: o.y
                        }), "".concat(u, "-basePoint-").concat(i))) : a && c.push(null), c
                    })), Q_(c, "renderGraphicChild", (function(t, e, n) {
                        var o = c.filterFormatItem(t, e, n);
                        if (!o) return null;
                        var i = c.getTooltipEventType(),
                            a = c.state,
                            u = a.isTooltipActive,
                            l = a.tooltipAxis,
                            s = a.activeTooltipIndex,
                            f = a.activeLabel,
                            p = tu(c.props.children, Ip),
                            h = o.props,
                            y = h.points,
                            d = h.isRange,
                            v = h.baseLine,
                            m = void 0 !== o.item.type.defaultProps ? J_(J_({}, o.item.type.defaultProps), o.item.props) : o.item.props,
                            b = m.activeDot,
                            g = m.hide,
                            w = m.activeBar,
                            O = m.activeShape,
                            x = Boolean(!g && u && p && (b || w || O)),
                            j = {};
                        "axis" !== i && p && "click" === p.props.trigger ? j = {
                            onClick: lw(c.handleItemMouseEnter, t.props.onClick)
                        } : "axis" !== i && (j = {
                            onMouseLeave: lw(c.handleItemMouseLeave, t.props.onMouseLeave),
                            onMouseEnter: lw(c.handleItemMouseEnter, t.props.onMouseEnter)
                        });
                        var S = r.cloneElement(t, J_(J_({}, o.props), j));
                        if (x) {
                            if (!(s >= 0)) {
                                var A, P = (null !== (A = c.getItemByXY(c.state.activeCoordinate)) && void 0 !== A ? A : {
                                        graphicalItem: S
                                    }).graphicalItem,
                                    E = P.item,
                                    k = void 0 === E ? t : E,
                                    T = P.childIndex,
                                    M = J_(J_(J_({}, o.props), j), {}, {
                                        activeIndex: T
                                    });
                                return [r.cloneElement(k, M), null, null]
                            }
                            var _, C;
                            if (l.dataKey && !l.allowDuplicatedCategory) {
                                var D = "function" == typeof l.dataKey ? function(t) {
                                    return "function" == typeof l.dataKey ? l.dataKey(t.payload) : null
                                } : "payload.".concat(l.dataKey.toString());
                                _ = Ic(y, D, f), C = d && v && Ic(v, D, f)
                            } else _ = null == y ? void 0 : y[s], C = d && v && v[s];
                            if (O || w) {
                                var I = void 0 !== t.props.activeIndex ? t.props.activeIndex : s;
                                return [r.cloneElement(t, J_(J_(J_({}, o.props), j), {}, {
                                    activeIndex: I
                                })), null, null]
                            }
                            if (!yc(_)) return [S].concat(H_(c.renderActivePoints({
                                item: o,
                                activePoint: _,
                                basePoint: C,
                                childIndex: s,
                                isRange: d
                            })))
                        }
                        return d ? [S, null, null] : [S, null]
                    })), Q_(c, "renderCustomized", (function(t, e, n) {
                        return r.cloneElement(t, J_(J_({
                            key: "recharts-customized-".concat(n)
                        }, c.props), c.state))
                    })), Q_(c, "renderMap", {
                        CartesianGrid: {
                            handler: oC,
                            once: !0
                        },
                        ReferenceArea: {
                            handler: c.renderReferenceElement
                        },
                        ReferenceLine: {
                            handler: oC
                        },
                        ReferenceDot: {
                            handler: c.renderReferenceElement
                        },
                        XAxis: {
                            handler: oC
                        },
                        YAxis: {
                            handler: oC
                        },
                        Brush: {
                            handler: c.renderBrush,
                            once: !0
                        },
                        Bar: {
                            handler: c.renderGraphicChild
                        },
                        Line: {
                            handler: c.renderGraphicChild
                        },
                        Area: {
                            handler: c.renderGraphicChild
                        },
                        Radar: {
                            handler: c.renderGraphicChild
                        },
                        RadialBar: {
                            handler: c.renderGraphicChild
                        },
                        Scatter: {
                            handler: c.renderGraphicChild
                        },
                        Pie: {
                            handler: c.renderGraphicChild
                        },
                        Funnel: {
                            handler: c.renderGraphicChild
                        },
                        Tooltip: {
                            handler: c.renderCursor,
                            once: !0
                        },
                        PolarGrid: {
                            handler: c.renderPolarGrid,
                            once: !0
                        },
                        PolarAngleAxis: {
                            handler: c.renderPolarAxis
                        },
                        PolarRadiusAxis: {
                            handler: c.renderPolarAxis
                        },
                        Customized: {
                            handler: c.renderCustomized
                        }
                    }), c.clipPathId = "".concat(null !== (i = o.id) && void 0 !== i ? i : Mc("recharts"), "-clip"), c.throttleTriggeredAfterMouseMove = h(c.triggeredAfterMouseMove, null !== (a = o.throttleDelay) && void 0 !== a ? a : 1e3 / 60), c.state = {}, c
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && X_(t, e)
                }(t, r.Component), $_(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var t, e;
                        this.addListener(), this.accessibilityManager.setDetails({
                            container: this.container,
                            offset: {
                                left: null !== (t = this.props.margin.left) && void 0 !== t ? t : 0,
                                top: null !== (e = this.props.margin.top) && void 0 !== e ? e : 0
                            },
                            coordinateList: this.state.tooltipTicks,
                            mouseHandlerCallback: this.triggeredAfterMouseMove,
                            layout: this.props.layout
                        }), this.displayDefaultTooltip()
                    }
                }, {
                    key: "displayDefaultTooltip",
                    value: function() {
                        var t = this.props,
                            e = t.children,
                            r = t.data,
                            n = t.height,
                            o = t.layout,
                            i = tu(e, Ip);
                        if (i) {
                            var a = i.props.defaultIndex;
                            if (!("number" != typeof a || a < 0 || a > this.state.tooltipTicks.length - 1)) {
                                var c = this.state.tooltipTicks[a] && this.state.tooltipTicks[a].value,
                                    u = cC(this.state, r, a, c),
                                    l = this.state.tooltipTicks[a].coordinate,
                                    s = (this.state.offset.top + n) / 2,
                                    f = "horizontal" === o ? {
                                        x: l,
                                        y: s
                                    } : {
                                        y: l,
                                        x: s
                                    },
                                    p = this.state.formattedGraphicalItems.find((function(t) {
                                        return "Scatter" === t.item.type.name
                                    }));
                                p && (f = J_(J_({}, f), p.props.points[a].tooltipPosition), u = p.props.points[a].tooltipPayload);
                                var h = {
                                    activeTooltipIndex: a,
                                    isTooltipActive: !0,
                                    activeLabel: c,
                                    activePayload: u,
                                    activeCoordinate: f
                                };
                                this.setState(h), this.renderCursor(i), this.accessibilityManager.setIndex(a)
                            }
                        }
                    }
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function(t, e) {
                        if (!this.props.accessibilityLayer) return null;
                        var r, n;
                        (this.state.tooltipTicks !== e.tooltipTicks && this.accessibilityManager.setDetails({
                            coordinateList: this.state.tooltipTicks
                        }), this.props.layout !== t.layout && this.accessibilityManager.setDetails({
                            layout: this.props.layout
                        }), this.props.margin !== t.margin) && this.accessibilityManager.setDetails({
                            offset: {
                                left: null !== (r = this.props.margin.left) && void 0 !== r ? r : 0,
                                top: null !== (n = this.props.margin.top) && void 0 !== n ? n : 0
                            }
                        });
                        return null
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t) {
                        cu([tu(t.children, Ip)], [tu(this.props.children, Ip)]) || this.displayDefaultTooltip()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
                    }
                }, {
                    key: "getTooltipEventType",
                    value: function() {
                        var t = tu(this.props.children, Ip);
                        if (t && "boolean" == typeof t.props.shared) {
                            var e = t.props.shared ? "axis" : "item";
                            return u.indexOf(e) >= 0 ? e : a
                        }
                        return a
                    }
                }, {
                    key: "getMouseInfo",
                    value: function(t) {
                        if (!this.container) return null;
                        var e, r = this.container,
                            n = r.getBoundingClientRect(),
                            o = {
                                top: (e = n).top + window.scrollY - document.documentElement.clientTop,
                                left: e.left + window.scrollX - document.documentElement.clientLeft
                            },
                            i = {
                                chartX: Math.round(t.pageX - o.left),
                                chartY: Math.round(t.pageY - o.top)
                            },
                            a = n.width / r.offsetWidth || 1,
                            c = this.inRange(i.chartX, i.chartY, a);
                        if (!c) return null;
                        var u = this.state,
                            l = u.xAxisMap,
                            s = u.yAxisMap,
                            f = this.getTooltipEventType(),
                            p = uC(this.state, this.props.data, this.props.layout, c);
                        if ("axis" !== f && l && s) {
                            var h = Cc(l).scale,
                                y = Cc(s).scale,
                                d = h && h.invert ? h.invert(i.chartX) : null,
                                v = y && y.invert ? y.invert(i.chartY) : null;
                            return J_(J_({}, i), {}, {
                                xValue: d,
                                yValue: v
                            }, p)
                        }
                        return p ? J_(J_({}, i), p) : null
                    }
                }, {
                    key: "inRange",
                    value: function(t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            n = this.props.layout,
                            o = t / r,
                            i = e / r;
                        if ("horizontal" === n || "vertical" === n) {
                            var a = this.state.offset;
                            return o >= a.left && o <= a.left + a.width && i >= a.top && i <= a.top + a.height ? {
                                x: o,
                                y: i
                            } : null
                        }
                        var c = this.state,
                            u = c.angleAxisMap,
                            l = c.radiusAxisMap;
                        if (u && l) {
                            var s = Cc(u);
                            return Uw({
                                x: o,
                                y: i
                            }, s)
                        }
                        return null
                    }
                }, {
                    key: "parseEventsOfWrapper",
                    value: function() {
                        var t = this.props.children,
                            e = this.getTooltipEventType(),
                            r = tu(t, Ip),
                            n = {};
                        return r && "axis" === e && (n = "click" === r.props.trigger ? {
                            onClick: this.handleClick
                        } : {
                            onMouseEnter: this.handleMouseEnter,
                            onDoubleClick: this.handleDoubleClick,
                            onMouseMove: this.handleMouseMove,
                            onMouseLeave: this.handleMouseLeave,
                            onTouchMove: this.handleTouchMove,
                            onTouchStart: this.handleTouchStart,
                            onTouchEnd: this.handleTouchEnd,
                            onContextMenu: this.handleContextMenu
                        }), J_(J_({}, Wc(this.props, this.handleOuterEvent)), n)
                    }
                }, {
                    key: "addListener",
                    value: function() {
                        j_.on(S_, this.handleReceiveSyncEvent)
                    }
                }, {
                    key: "removeListener",
                    value: function() {
                        j_.removeListener(S_, this.handleReceiveSyncEvent)
                    }
                }, {
                    key: "filterFormatItem",
                    value: function(t, e, r) {
                        for (var n = this.state.formattedGraphicalItems, o = 0, i = n.length; o < i; o++) {
                            var a = n[o];
                            if (a.item === t || a.props.key === t.key || e === Gc(a.item.type) && r === a.childIndex) return a
                        }
                        return null
                    }
                }, {
                    key: "renderClipPath",
                    value: function() {
                        var t = this.clipPathId,
                            e = this.state.offset,
                            r = e.left,
                            o = e.top,
                            i = e.height,
                            a = e.width;
                        return n.createElement("defs", null, n.createElement("clipPath", {
                            id: t
                        }, n.createElement("rect", {
                            x: r,
                            y: o,
                            height: i,
                            width: a
                        })))
                    }
                }, {
                    key: "getXScales",
                    value: function() {
                        var t = this.state.xAxisMap;
                        return t ? Object.entries(t).reduce((function(t, e) {
                            var r = U_(e, 2),
                                n = r[0],
                                o = r[1];
                            return J_(J_({}, t), {}, Q_({}, n, o.scale))
                        }), {}) : null
                    }
                }, {
                    key: "getYScales",
                    value: function() {
                        var t = this.state.yAxisMap;
                        return t ? Object.entries(t).reduce((function(t, e) {
                            var r = U_(e, 2),
                                n = r[0],
                                o = r[1];
                            return J_(J_({}, t), {}, Q_({}, n, o.scale))
                        }), {}) : null
                    }
                }, {
                    key: "getXScaleByAxisId",
                    value: function(t) {
                        var e;
                        return null === (e = this.state.xAxisMap) || void 0 === e || null === (e = e[t]) || void 0 === e ? void 0 : e.scale
                    }
                }, {
                    key: "getYScaleByAxisId",
                    value: function(t) {
                        var e;
                        return null === (e = this.state.yAxisMap) || void 0 === e || null === (e = e[t]) || void 0 === e ? void 0 : e.scale
                    }
                }, {
                    key: "getItemByXY",
                    value: function(t) {
                        var e = this.state,
                            r = e.formattedGraphicalItems,
                            n = e.activeItem;
                        if (r && r.length)
                            for (var o = 0, i = r.length; o < i; o++) {
                                var a = r[o],
                                    c = a.props,
                                    u = a.item,
                                    l = void 0 !== u.type.defaultProps ? J_(J_({}, u.type.defaultProps), u.props) : u.props,
                                    s = Gc(u.type);
                                if ("Bar" === s) {
                                    var f = (c.data || []).find((function(e) {
                                        return Nj(t, e)
                                    }));
                                    if (f) return {
                                        graphicalItem: a,
                                        payload: f
                                    }
                                } else if ("RadialBar" === s) {
                                    var p = (c.data || []).find((function(e) {
                                        return Uw(t, e)
                                    }));
                                    if (p) return {
                                        graphicalItem: a,
                                        payload: p
                                    }
                                } else if (xA(a, n) || jA(a, n) || SA(a, n)) {
                                    var h = kA({
                                            graphicalItem: a,
                                            activeTooltipItem: n,
                                            itemData: l.data
                                        }),
                                        y = void 0 === l.activeIndex ? h : l.activeIndex;
                                    return {
                                        graphicalItem: J_(J_({}, a), {}, {
                                            childIndex: y
                                        }),
                                        payload: SA(a, n) ? l.data[h] : a.props.data[h]
                                    }
                                }
                            }
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        if (!eu(this)) return null;
                        var e, r, o = this.props,
                            i = o.children,
                            a = o.className,
                            c = o.width,
                            u = o.height,
                            l = o.style,
                            s = o.compact,
                            f = o.title,
                            p = o.desc,
                            h = W_(o, L_),
                            y = au(h, !1);
                        if (s) return n.createElement(vk, {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId
                        }, n.createElement(hu, F_({}, y, {
                            width: c,
                            height: u,
                            title: f,
                            desc: p
                        }), this.renderClipPath(), lu(i, this.renderMap)));
                        this.props.accessibilityLayer && (y.tabIndex = null !== (e = this.props.tabIndex) && void 0 !== e ? e : 0, y.role = null !== (r = this.props.role) && void 0 !== r ? r : "application", y.onKeyDown = function(e) {
                            t.accessibilityManager.keyboardEvent(e)
                        }, y.onFocus = function() {
                            t.accessibilityManager.focus()
                        });
                        var d = this.parseEventsOfWrapper();
                        return n.createElement(vk, {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId
                        }, n.createElement("div", F_({
                            className: hc("recharts-wrapper", a),
                            style: J_({
                                position: "relative",
                                cursor: "default",
                                width: c,
                                height: u
                            }, l)
                        }, d, {
                            ref: function(e) {
                                t.container = e
                            }
                        }), n.createElement(hu, F_({}, y, {
                            width: c,
                            height: u,
                            title: f,
                            desc: p,
                            style: rC
                        }), this.renderClipPath(), lu(i, this.renderMap)), this.renderLegend(), this.renderTooltip()))
                    }
                }])
            }();
        Q_(v, "displayName", e), Q_(v, "defaultProps", J_({
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            },
            reverseStackOrder: !1,
            syncMethod: "index"
        }, p)), Q_(v, "getDerivedStateFromProps", (function(t, e) {
            var r = t.dataKey,
                n = t.data,
                o = t.children,
                i = t.width,
                a = t.height,
                c = t.layout,
                u = t.stackOffset,
                l = t.margin,
                s = e.dataStartIndex,
                f = e.dataEndIndex;
            if (void 0 === e.updateId) {
                var p = fC(t);
                return J_(J_(J_({}, p), {}, {
                    updateId: 0
                }, d(J_(J_({
                    props: t
                }, p), {}, {
                    updateId: 0
                }), e)), {}, {
                    prevDataKey: r,
                    prevData: n,
                    prevWidth: i,
                    prevHeight: a,
                    prevLayout: c,
                    prevStackOffset: u,
                    prevMargin: l,
                    prevChildren: o
                })
            }
            if (r !== e.prevDataKey || n !== e.prevData || i !== e.prevWidth || a !== e.prevHeight || c !== e.prevLayout || u !== e.prevStackOffset || !Rc(l, e.prevMargin)) {
                var h = fC(t),
                    y = {
                        chartX: e.chartX,
                        chartY: e.chartY,
                        isTooltipActive: e.isTooltipActive
                    },
                    v = J_(J_({}, uC(e, n, c)), {}, {
                        updateId: e.updateId + 1
                    }),
                    m = J_(J_(J_({}, h), y), v);
                return J_(J_(J_({}, m), d(J_({
                    props: t
                }, m), e)), {}, {
                    prevDataKey: r,
                    prevData: n,
                    prevWidth: i,
                    prevHeight: a,
                    prevLayout: c,
                    prevStackOffset: u,
                    prevMargin: l,
                    prevChildren: o
                })
            }
            if (!cu(o, e.prevChildren)) {
                var b, g, w, O, x = tu(o, ZP),
                    j = x && null !== (b = null === (g = x.props) || void 0 === g ? void 0 : g.startIndex) && void 0 !== b ? b : s,
                    S = x && null !== (w = null === (O = x.props) || void 0 === O ? void 0 : O.endIndex) && void 0 !== w ? w : f,
                    A = j !== s || S !== f,
                    P = !yc(n) && !A ? e.updateId : e.updateId + 1;
                return J_(J_({
                    updateId: P
                }, d(J_(J_({
                    props: t
                }, e), {}, {
                    updateId: P,
                    dataStartIndex: j,
                    dataEndIndex: S
                }), e)), {}, {
                    prevChildren: o,
                    dataStartIndex: j,
                    dataEndIndex: S
                })
            }
            return null
        })), Q_(v, "renderActiveDot", (function(t, e, o) {
            var i;
            return i = r.isValidElement(t) ? r.cloneElement(t, e) : A(t) ? t(e) : n.createElement(Xj, e), n.createElement(mu, {
                className: "recharts-active-dot",
                key: o
            }, i)
        }));
        var m = r.forwardRef((function(t, e) {
            return n.createElement(v, F_({}, t, {
                ref: e
            }))
        }));
        return m.displayName = v.displayName, m
    },
    vC = dC({
        chartName: "LineChart",
        GraphicalChild: lM,
        axisComponents: [{
            axisType: "xAxis",
            AxisComp: c_
        }, {
            axisType: "yAxis",
            AxisComp: b_
        }],
        formatAxisMap: XE
    }),
    mC = dC({
        chartName: "BarChart",
        GraphicalChild: FE,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
            axisType: "xAxis",
            AxisComp: c_
        }, {
            axisType: "yAxis",
            AxisComp: b_
        }],
        formatAxisMap: XE
    }),
    bC = dC({
        chartName: "PieChart",
        GraphicalChild: FA,
        validateTooltipEventTypes: ["item"],
        defaultTooltipEventType: "item",
        legendContent: "children",
        axisComponents: [{
            axisType: "angleAxis",
            AxisComp: ZS
        }, {
            axisType: "radiusAxis",
            AxisComp: BS
        }],
        formatAxisMap: Lw,
        defaultProps: {
            layout: "centric",
            startAngle: 0,
            endAngle: 360,
            cx: "50%",
            cy: "50%",
            innerRadius: 0,
            outerRadius: "80%"
        }
    }),
    gC = ["#1890FF", "#66B5FF", "#41D9C7", "#2FC25B", "#6EDB8F", "#9AE65C", "#FACC14", "#E6965C", "#57AD71", "#223273", "#738AE6", "#7564CC", "#8543E0", "#A877ED", "#5C8EE6", "#13C2C2", "#70E0E0", "#5CA3E6", "#3436C7", "#8082FF", "#DD81E6", "#F04864", "#FA7D92", "#D598D9"],
    wC = ["width", "height", "className", "style", "children", "type"];

function OC(t) {
    return (OC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function xC() {
    return xC = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, xC.apply(this, arguments)
}

function jC(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function SC(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, CC(n.key), n)
    }
}

function AC(t, e, r) {
    return e = EC(e),
        function(t, e) {
            if (e && ("object" === OC(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, PC() ? Reflect.construct(e, r || [], EC(t).constructor) : e.apply(t, r))
}

function PC() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (PC = function() {
        return !!t
    })()
}

function EC(t) {
    return (EC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function kC(t, e) {
    return (kC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function TC(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function MC(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? TC(Object(r), !0).forEach((function(e) {
            _C(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : TC(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function _C(t, e, r) {
    return (e = CC(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function CC(t) {
    var e = function(t, e) {
        if ("object" != OC(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != OC(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == OC(e) ? e : e + ""
}
var DC = "value",
    IC = function t(e) {
        var r, n = e.depth,
            o = e.node,
            i = e.index,
            a = e.valueKey,
            c = o.children,
            u = n + 1,
            l = c && c.length ? c.map((function(e, r) {
                return t({
                    depth: u,
                    node: e,
                    index: r,
                    valueKey: a
                })
            })) : null;
        return r = c && c.length ? l.reduce((function(t, e) {
            return t + e[DC]
        }), 0) : Sc(o[a]) || o[a] <= 0 ? 0 : o[a], MC(MC({}, o), {}, _C(_C(_C({
            children: l
        }, DC, r), "depth", n), "index", i))
    },
    NC = function(t, e, r) {
        var n = e * e,
            o = t.area * t.area,
            i = t.reduce((function(t, e) {
                return {
                    min: Math.min(t.min, e.area),
                    max: Math.max(t.max, e.area)
                }
            }), {
                min: 1 / 0,
                max: 0
            }),
            a = i.min,
            c = i.max;
        return o ? Math.max(n * c * r / o, o / (n * a * r)) : 1 / 0
    },
    RC = function(t, e, r, n) {
        return e === r.width ? function(t, e, r, n) {
            var o = e ? Math.round(t.area / e) : 0;
            (n || o > r.height) && (o = r.height);
            for (var i, a = r.x, c = 0, u = t.length; c < u; c++)(i = t[c]).x = a, i.y = r.y, i.height = o, i.width = Math.min(o ? Math.round(i.area / o) : 0, r.x + r.width - a), a += i.width;
            return i.width += r.x + r.width - a, MC(MC({}, r), {}, {
                y: r.y + o,
                height: r.height - o
            })
        }(t, e, r, n) : function(t, e, r, n) {
            var o = e ? Math.round(t.area / e) : 0;
            (n || o > r.width) && (o = r.width);
            for (var i, a = r.y, c = 0, u = t.length; c < u; c++)(i = t[c]).x = r.x, i.y = a, i.width = o, i.height = Math.min(o ? Math.round(i.area / o) : 0, r.y + r.height - a), a += i.height;
            return i && (i.height += r.y + r.height - a), MC(MC({}, r), {}, {
                x: r.x + o,
                width: r.width - o
            })
        }(t, e, r, n)
    },
    BC = function t(e, r) {
        var n = e.children;
        if (n && n.length) {
            var o, i, a = function(t) {
                    return {
                        x: t.x,
                        y: t.y,
                        width: t.width,
                        height: t.height
                    }
                }(e),
                c = [],
                u = 1 / 0,
                l = Math.min(a.width, a.height),
                s = function(t, e) {
                    var r = e < 0 ? 0 : e;
                    return t.map((function(t) {
                        var e = t[DC] * r;
                        return MC(MC({}, t), {}, {
                            area: Sc(e) || e <= 0 ? 0 : e
                        })
                    }))
                }(n, a.width * a.height / e[DC]),
                f = s.slice();
            for (c.area = 0; f.length > 0;) c.push(o = f[0]), c.area += o.area, (i = NC(c, l, r)) <= u ? (f.shift(), u = i) : (c.area -= c.pop().area, a = RC(c, l, a, !1), l = Math.min(a.width, a.height), c.length = c.area = 0, u = 1 / 0);
            return c.length && (a = RC(c, l, a, !0), c.length = c.area = 0), MC(MC({}, e), {}, {
                children: s.map((function(e) {
                    return t(e, r)
                }))
            })
        }
        return e
    },
    LC = {
        isTooltipActive: !1,
        isAnimationFinished: !1,
        activeNode: null,
        formatRoot: null,
        currentRoot: null,
        nestIndex: []
    },
    zC = function() {
        function t() {
            var e;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            return _C(e = AC(this, t, [].concat(n)), "state", MC({}, LC)), _C(e, "handleAnimationEnd", (function() {
                var t = e.props.onAnimationEnd;
                e.setState({
                    isAnimationFinished: !0
                }), A(t) && t()
            })), _C(e, "handleAnimationStart", (function() {
                var t = e.props.onAnimationStart;
                e.setState({
                    isAnimationFinished: !1
                }), A(t) && t()
            })), e
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && kC(t, e)
        }(t, r.PureComponent), e = t, o = [{
            key: "handleMouseEnter",
            value: function(t, e) {
                e.persist();
                var r = this.props,
                    n = r.onMouseEnter;
                tu(r.children, Ip) ? this.setState({
                    isTooltipActive: !0,
                    activeNode: t
                }, (function() {
                    n && n(t, e)
                })) : n && n(t, e)
            }
        }, {
            key: "handleMouseLeave",
            value: function(t, e) {
                e.persist();
                var r = this.props,
                    n = r.onMouseLeave;
                tu(r.children, Ip) ? this.setState({
                    isTooltipActive: !1,
                    activeNode: null
                }, (function() {
                    n && n(t, e)
                })) : n && n(t, e)
            }
        }, {
            key: "handleClick",
            value: function(t) {
                var e = this.props,
                    r = e.onClick;
                if ("nest" === e.type && t.children) {
                    var n = this.props,
                        o = n.width,
                        i = n.height,
                        a = n.dataKey,
                        c = n.aspectRatio,
                        u = IC({
                            depth: 0,
                            node: MC(MC({}, t), {}, {
                                x: 0,
                                y: 0,
                                width: o,
                                height: i
                            }),
                            index: 0,
                            valueKey: a
                        }),
                        l = BC(u, c),
                        s = this.state.nestIndex;
                    s.push(t), this.setState({
                        formatRoot: l,
                        currentRoot: u,
                        nestIndex: s
                    })
                }
                r && r(t)
            }
        }, {
            key: "handleNestIndex",
            value: function(t, e) {
                var r = this.state.nestIndex,
                    n = this.props,
                    o = n.width,
                    i = n.height,
                    a = n.dataKey,
                    c = n.aspectRatio,
                    u = IC({
                        depth: 0,
                        node: MC(MC({}, t), {}, {
                            x: 0,
                            y: 0,
                            width: o,
                            height: i
                        }),
                        index: 0,
                        valueKey: a
                    }),
                    l = BC(u, c);
                r = r.slice(0, e + 1), this.setState({
                    formatRoot: l,
                    currentRoot: t,
                    nestIndex: r
                })
            }
        }, {
            key: "renderItem",
            value: function(t, e, r) {
                var o = this,
                    i = this.props,
                    a = i.isAnimationActive,
                    c = i.animationBegin,
                    u = i.animationDuration,
                    l = i.animationEasing,
                    s = i.isUpdateAnimationActive,
                    f = i.type,
                    p = i.animationId,
                    h = i.colorPanel,
                    y = this.state.isAnimationFinished,
                    d = e.width,
                    v = e.height,
                    m = e.x,
                    b = e.y,
                    g = e.depth,
                    w = parseInt("".concat((2 * Math.random() - 1) * d), 10),
                    O = {};
                return (r || "nest" === f) && (O = {
                    onMouseEnter: this.handleMouseEnter.bind(this, e),
                    onMouseLeave: this.handleMouseLeave.bind(this, e),
                    onClick: this.handleClick.bind(this, e)
                }), a ? n.createElement(Pj, {
                    begin: c,
                    duration: u,
                    isActive: a,
                    easing: l,
                    key: "treemap-".concat(p),
                    from: {
                        x: m,
                        y: b,
                        width: d,
                        height: v
                    },
                    to: {
                        x: m,
                        y: b,
                        width: d,
                        height: v
                    },
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd
                }, (function(r) {
                    var i = r.x,
                        p = r.y,
                        d = r.width,
                        v = r.height;
                    return n.createElement(Pj, {
                        from: "translate(".concat(w, "px, ").concat(w, "px)"),
                        to: "translate(0, 0)",
                        attributeName: "transform",
                        begin: c,
                        easing: l,
                        isActive: a,
                        duration: u
                    }, n.createElement(mu, O, g > 2 && !y ? null : o.constructor.renderContentItem(t, MC(MC({}, e), {}, {
                        isAnimationActive: a,
                        isUpdateAnimationActive: !s,
                        width: d,
                        height: v,
                        x: i,
                        y: p
                    }), f, h)))
                })) : n.createElement(mu, O, this.constructor.renderContentItem(t, MC(MC({}, e), {}, {
                    isAnimationActive: !1,
                    isUpdateAnimationActive: !1,
                    width: d,
                    height: v,
                    x: m,
                    y: b
                }), f, h))
            }
        }, {
            key: "renderNode",
            value: function(t, e) {
                var r = this,
                    o = this.props,
                    i = o.content,
                    a = o.type,
                    c = MC(MC(MC({}, au(this.props, !1)), e), {}, {
                        root: t
                    }),
                    u = !e.children || !e.children.length;
                return !(this.state.currentRoot.children || []).filter((function(t) {
                    return t.depth === e.depth && t.name === e.name
                })).length && t.depth && "nest" === a ? null : n.createElement(mu, {
                    key: "recharts-treemap-node-".concat(c.x, "-").concat(c.y, "-").concat(c.name),
                    className: "recharts-treemap-depth-".concat(e.depth)
                }, this.renderItem(i, c, u), e.children && e.children.length ? e.children.map((function(t) {
                    return r.renderNode(e, t)
                })) : null)
            }
        }, {
            key: "renderAllNodes",
            value: function() {
                var t = this.state.formatRoot;
                return t ? this.renderNode(t, t) : null
            }
        }, {
            key: "renderTooltip",
            value: function() {
                var t = this.props,
                    e = t.children,
                    r = t.nameKey,
                    o = tu(e, Ip);
                if (!o) return null;
                var i = this.props,
                    a = i.width,
                    c = i.height,
                    u = this.state,
                    l = u.isTooltipActive,
                    s = u.activeNode,
                    f = {
                        x: 0,
                        y: 0,
                        width: a,
                        height: c
                    },
                    p = s ? {
                        x: s.x + s.width / 2,
                        y: s.y + s.height / 2
                    } : null,
                    h = l && s ? [{
                        payload: s,
                        name: tw(s, r, ""),
                        value: tw(s, DC)
                    }] : [];
                return n.cloneElement(o, {
                    viewBox: f,
                    active: l,
                    coordinate: p,
                    label: "",
                    payload: h
                })
            }
        }, {
            key: "renderNestIndex",
            value: function() {
                var t = this,
                    e = this.props,
                    r = e.nameKey,
                    o = e.nestIndexContent,
                    i = this.state.nestIndex;
                return n.createElement("div", {
                    className: "recharts-treemap-nest-index-wrapper",
                    style: {
                        marginTop: "8px",
                        textAlign: "center"
                    }
                }, i.map((function(e, i) {
                    var a = ve(e, r, "root"),
                        c = null;
                    return n.isValidElement(o) && (c = n.cloneElement(o, e, i)), c = A(o) ? o(e, i) : a, n.createElement("div", {
                        onClick: t.handleNestIndex.bind(t, e, i),
                        key: "nest-index-".concat(Mc()),
                        className: "recharts-treemap-nest-index-box",
                        style: {
                            cursor: "pointer",
                            display: "inline-block",
                            padding: "0 7px",
                            background: "#000",
                            color: "#fff",
                            marginRight: "3px"
                        }
                    }, c)
                })))
            }
        }, {
            key: "render",
            value: function() {
                if (!eu(this)) return null;
                var t = this.props,
                    e = t.width,
                    r = t.height,
                    o = t.className,
                    i = t.style,
                    a = t.children,
                    c = t.type,
                    u = jC(t, wC),
                    l = au(u, !1);
                return n.createElement("div", {
                    className: hc("recharts-wrapper", o),
                    style: MC(MC({}, i), {}, {
                        position: "relative",
                        cursor: "default",
                        width: e,
                        height: r
                    }),
                    role: "region"
                }, n.createElement(hu, xC({}, l, {
                    width: e,
                    height: "nest" === c ? r - 30 : r
                }), this.renderAllNodes(), iu(a)), this.renderTooltip(), "nest" === c && this.renderNestIndex())
            }
        }], i = [{
            key: "getDerivedStateFromProps",
            value: function(t, e) {
                if (t.data !== e.prevData || t.type !== e.prevType || t.width !== e.prevWidth || t.height !== e.prevHeight || t.dataKey !== e.prevDataKey || t.aspectRatio !== e.prevAspectRatio) {
                    var r = IC({
                            depth: 0,
                            node: {
                                children: t.data,
                                x: 0,
                                y: 0,
                                width: t.width,
                                height: t.height
                            },
                            index: 0,
                            valueKey: t.dataKey
                        }),
                        n = BC(r, t.aspectRatio);
                    return MC(MC({}, e), {}, {
                        formatRoot: n,
                        currentRoot: r,
                        nestIndex: [r],
                        prevAspectRatio: t.aspectRatio,
                        prevData: t.data,
                        prevWidth: t.width,
                        prevHeight: t.height,
                        prevDataKey: t.dataKey,
                        prevType: t.type
                    })
                }
                return null
            }
        }, {
            key: "renderContentItem",
            value: function(t, e, r, o) {
                if (n.isValidElement(t)) return n.cloneElement(t, e);
                if (A(t)) return t(e);
                var i = e.x,
                    a = e.y,
                    c = e.width,
                    u = e.height,
                    l = e.index,
                    s = null;
                c > 10 && u > 10 && e.children && "nest" === r && (s = n.createElement(qj, {
                    points: [{
                        x: i + 2,
                        y: a + u / 2
                    }, {
                        x: i + 6,
                        y: a + u / 2 + 3
                    }, {
                        x: i + 2,
                        y: a + u / 2 + 6
                    }]
                }));
                var f = null,
                    p = Yp(e.name);
                c > 20 && u > 20 && p.width < c && p.height < u && (f = n.createElement("text", {
                    x: i + 8,
                    y: a + u / 2 + 7,
                    fontSize: 14
                }, e.name));
                var h = o || gC;
                return n.createElement("g", null, n.createElement(Bj, xC({
                    fill: e.depth < 2 ? h[l % h.length] : "rgba(255,255,255,0)",
                    stroke: "#fff"
                }, fc(e, "children"), {
                    role: "img"
                })), s, f)
            }
        }], o && SC(e.prototype, o), i && SC(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
        var e, o, i
    }();
_C(zC, "displayName", "Treemap"), _C(zC, "defaultProps", {
    aspectRatio: .5 * (1 + Math.sqrt(5)),
    dataKey: "value",
    type: "flat",
    isAnimationActive: !xp.isSsr,
    isUpdateAnimationActive: !xp.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "linear"
});
var FC = qs,
    UC = function(t, e) {
        for (var r, n = -1, o = t.length; ++n < o;) {
            var i = e(t[n]);
            void 0 !== i && (r = void 0 === r ? i : r + i)
        }
        return r
    };
const WC = e((function(t, e) {
    return t && t.length ? UC(t, FC(e)) : 0
}));
var $C = ["width", "height", "className", "style", "children"],
    KC = ["sourceX", "sourceY", "sourceControlX", "targetX", "targetY", "targetControlX", "linkWidth"];

function qC(t) {
    return (qC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function VC(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
        if (null == t) return {};
        var r = {};
        for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (e.indexOf(n) >= 0) continue;
                r[n] = t[n]
            }
        return r
    }(t, e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
}

function XC() {
    return XC = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, XC.apply(this, arguments)
}

function HC(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, rD(n.key), n)
    }
}

function GC(t, e, r) {
    return e = ZC(e),
        function(t, e) {
            if (e && ("object" === qC(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, YC() ? Reflect.construct(e, r || [], ZC(t).constructor) : e.apply(t, r))
}

function YC() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (YC = function() {
        return !!t
    })()
}

function ZC(t) {
    return (ZC = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function JC(t, e) {
    return (JC = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function QC(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function tD(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? QC(Object(r), !0).forEach((function(e) {
            eD(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : QC(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function eD(t, e, r) {
    return (e = rD(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function rD(t) {
    var e = function(t, e) {
        if ("object" != qC(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != qC(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == qC(e) ? e : e + ""
}
var nD = {
        x: 0,
        y: 0
    },
    oD = function(t) {
        return t.y + t.dy / 2
    },
    iD = function(t) {
        return t && t.value || 0
    },
    aD = function(t, e) {
        return e.reduce((function(e, r) {
            return e + iD(t[r])
        }), 0)
    },
    cD = function(t, e, r) {
        return r.reduce((function(r, n) {
            var o = e[n],
                i = t[o.source];
            return r + oD(i) * iD(e[n])
        }), 0)
    },
    uD = function(t, e, r) {
        return r.reduce((function(r, n) {
            var o = e[n],
                i = t[o.target];
            return r + oD(i) * iD(e[n])
        }), 0)
    },
    lD = function(t, e) {
        return t.y - e.y
    },
    sD = function t(e, r) {
        for (var n = r.targetNodes, o = 0, i = n.length; o < i; o++) {
            var a = e[n[o]];
            a && (a.depth = Math.max(r.depth + 1, a.depth), t(e, a))
        }
    },
    fD = function(t, e, r) {
        for (var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o = 0, i = t.length; o < i; o++) {
            var a = t[o],
                c = a.length;
            n && a.sort(lD);
            for (var u = 0, l = 0; l < c; l++) {
                var s = a[l],
                    f = u - s.y;
                f > 0 && (s.y += f), u = s.y + s.dy + r
            }
            u = e + r;
            for (var p = c - 1; p >= 0; p--) {
                var h = a[p],
                    y = h.y + h.dy + r - u;
                if (!(y > 0)) break;
                h.y -= y, u = h.y
            }
        }
    },
    pD = function(t, e, r, n) {
        for (var o = 0, i = e.length; o < i; o++)
            for (var a = e[o], c = 0, u = a.length; c < u; c++) {
                var l = a[c];
                if (l.sourceLinks.length) {
                    var s = aD(r, l.sourceLinks),
                        f = cD(t, r, l.sourceLinks) / s;
                    l.y += (f - oD(l)) * n
                }
            }
    },
    hD = function(t, e, r, n) {
        for (var o = e.length - 1; o >= 0; o--)
            for (var i = e[o], a = 0, c = i.length; a < c; a++) {
                var u = i[a];
                if (u.targetLinks.length) {
                    var l = aD(r, u.targetLinks),
                        s = uD(t, r, u.targetLinks) / l;
                    u.y += (s - oD(u)) * n
                }
            }
    },
    yD = function(t) {
        var e = t.data,
            r = t.width,
            n = t.height,
            o = t.iterations,
            i = t.nodeWidth,
            a = t.nodePadding,
            c = t.sort,
            u = e.links,
            l = function(t, e, r) {
                for (var n = t.nodes, o = t.links, i = n.map((function(t, e) {
                        var r = function(t, e) {
                            for (var r = [], n = [], o = [], i = [], a = 0, c = t.length; a < c; a++) {
                                var u = t[a];
                                u.source === e && (o.push(u.target), i.push(a)), u.target === e && (r.push(u.source), n.push(a))
                            }
                            return {
                                sourceNodes: r,
                                sourceLinks: n,
                                targetLinks: i,
                                targetNodes: o
                            }
                        }(o, e);
                        return tD(tD(tD({}, t), r), {}, {
                            value: Math.max(aD(o, r.sourceLinks), aD(o, r.targetLinks)),
                            depth: 0
                        })
                    })), a = 0, c = i.length; a < c; a++) {
                    var u = i[a];
                    u.sourceNodes.length || sD(i, u)
                }
                var l = bS(i, (function(t) {
                    return t.depth
                })).depth;
                if (l >= 1)
                    for (var s = (e - r) / l, f = 0, p = i.length; f < p; f++) {
                        var h = i[f];
                        h.targetNodes.length || (h.depth = l), h.x = h.depth * s, h.dx = r
                    }
                return {
                    tree: i,
                    maxDepth: l
                }
            }(e, r, i),
            s = l.tree,
            f = function(t) {
                for (var e = [], r = 0, n = t.length; r < n; r++) {
                    var o = t[r];
                    e[o.depth] || (e[o.depth] = []), e[o.depth].push(o)
                }
                return e
            }(s),
            p = function(t, e, r, n) {
                for (var o = bb(t.map((function(t) {
                        return (e - (t.length - 1) * r) / WC(t, iD)
                    }))), i = 0, a = t.length; i < a; i++)
                    for (var c = 0, u = t[i].length; c < u; c++) {
                        var l = t[i][c];
                        l.y = c, l.dy = l.value * o
                    }
                return n.map((function(t) {
                    return tD(tD({}, t), {}, {
                        dy: iD(t) * o
                    })
                }))
            }(f, n, a, u);
        fD(f, n, a, c);
        for (var h = 1, y = 1; y <= o; y++) hD(s, f, p, h *= .99), fD(f, n, a, c), pD(s, f, p, h), fD(f, n, a, c);
        return function(t, e) {
            for (var r = 0, n = t.length; r < n; r++) {
                var o = t[r],
                    i = 0,
                    a = 0;
                o.targetLinks.sort((function(r, n) {
                    return t[e[r].target].y - t[e[n].target].y
                })), o.sourceLinks.sort((function(r, n) {
                    return t[e[r].source].y - t[e[n].source].y
                }));
                for (var c = 0, u = o.targetLinks.length; c < u; c++) {
                    var l = e[o.targetLinks[c]];
                    l && (l.sy = i, i += l.dy)
                }
                for (var s = 0, f = o.sourceLinks.length; s < f; s++) {
                    var p = e[o.sourceLinks[s]];
                    p && (p.ty = a, a += p.dy)
                }
            }
        }(s, p), {
            nodes: s,
            links: p
        }
    },
    dD = function() {
        function t() {
            var e;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            return eD(e = GC(this, t, [].concat(n)), "state", {
                activeElement: null,
                activeElementType: null,
                isTooltipActive: !1,
                nodes: [],
                links: []
            }), e
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && JC(t, e)
        }(t, r.PureComponent), e = t, i = [{
            key: "getDerivedStateFromProps",
            value: function(t, e) {
                var r = t.data,
                    n = t.width,
                    o = t.height,
                    i = t.margin,
                    a = t.iterations,
                    c = t.nodeWidth,
                    u = t.nodePadding,
                    l = t.sort;
                if (r !== e.prevData || n !== e.prevWidth || o !== e.prevHeight || !Rc(i, e.prevMargin) || a !== e.prevIterations || c !== e.prevNodeWidth || u !== e.prevNodePadding || l !== e.sort) {
                    var s = n - (i && i.left || 0) - (i && i.right || 0),
                        f = o - (i && i.top || 0) - (i && i.bottom || 0),
                        p = yD({
                            data: r,
                            width: s,
                            height: f,
                            iterations: a,
                            nodeWidth: c,
                            nodePadding: u,
                            sort: l
                        }),
                        h = p.links,
                        y = p.nodes;
                    return tD(tD({}, e), {}, {
                        nodes: y,
                        links: h,
                        prevData: r,
                        prevWidth: a,
                        prevHeight: o,
                        prevMargin: i,
                        prevNodePadding: u,
                        prevNodeWidth: c,
                        prevIterations: a,
                        prevSort: l
                    })
                }
                return null
            }
        }, {
            key: "renderLinkItem",
            value: function(t, e) {
                if (n.isValidElement(t)) return n.cloneElement(t, e);
                if (A(t)) return t(e);
                var r = e.sourceX,
                    o = e.sourceY,
                    i = e.sourceControlX,
                    a = e.targetX,
                    c = e.targetY,
                    u = e.targetControlX,
                    l = e.linkWidth,
                    s = VC(e, KC);
                return n.createElement("path", XC({
                    className: "recharts-sankey-link",
                    d: "\n          M".concat(r, ",").concat(o, "\n          C").concat(i, ",").concat(o, " ").concat(u, ",").concat(c, " ").concat(a, ",").concat(c, "\n        "),
                    fill: "none",
                    stroke: "#333",
                    strokeWidth: l,
                    strokeOpacity: "0.2"
                }, au(s, !1)))
            }
        }, {
            key: "renderNodeItem",
            value: function(t, e) {
                return n.isValidElement(t) ? n.cloneElement(t, e) : A(t) ? t(e) : n.createElement(Bj, XC({
                    className: "recharts-sankey-node",
                    fill: "#0088fe",
                    fillOpacity: "0.8"
                }, au(e, !1), {
                    role: "img"
                }))
            }
        }], (o = [{
            key: "handleMouseEnter",
            value: function(t, e, r) {
                var n = this.props,
                    o = n.onMouseEnter,
                    i = tu(n.children, Ip);
                i ? this.setState((function(r) {
                    return "hover" === i.props.trigger ? tD(tD({}, r), {}, {
                        activeElement: t,
                        activeElementType: e,
                        isTooltipActive: !0
                    }) : r
                }), (function() {
                    o && o(t, e, r)
                })) : o && o(t, e, r)
            }
        }, {
            key: "handleMouseLeave",
            value: function(t, e, r) {
                var n = this.props,
                    o = n.onMouseLeave,
                    i = tu(n.children, Ip);
                i ? this.setState((function(t) {
                    return "hover" === i.props.trigger ? tD(tD({}, t), {}, {
                        activeElement: void 0,
                        activeElementType: void 0,
                        isTooltipActive: !1
                    }) : t
                }), (function() {
                    o && o(t, e, r)
                })) : o && o(t, e, r)
            }
        }, {
            key: "handleClick",
            value: function(t, e, r) {
                var n = this.props,
                    o = n.onClick,
                    i = tu(n.children, Ip);
                i && "click" === i.props.trigger && (this.state.isTooltipActive ? this.setState((function(t) {
                    return tD(tD({}, t), {}, {
                        activeElement: void 0,
                        activeElementType: void 0,
                        isTooltipActive: !1
                    })
                })) : this.setState((function(r) {
                    return tD(tD({}, r), {}, {
                        activeElement: t,
                        activeElementType: e,
                        isTooltipActive: !0
                    })
                }))), o && o(t, e, r)
            }
        }, {
            key: "renderLinks",
            value: function(t, e) {
                var r = this,
                    o = this.props,
                    i = o.linkCurvature,
                    a = o.link,
                    c = o.margin,
                    u = ve(c, "top") || 0,
                    l = ve(c, "left") || 0;
                return n.createElement(mu, {
                    className: "recharts-sankey-links",
                    key: "recharts-sankey-links"
                }, t.map((function(t, o) {
                    var c, s, f = t.sy,
                        p = t.ty,
                        h = t.dy,
                        y = e[t.source],
                        d = e[t.target],
                        v = y.x + y.dx + l,
                        m = d.x + l,
                        b = (s = m - (c = +v), function(t) {
                            return c + s * t
                        }),
                        g = b(i),
                        w = b(1 - i),
                        O = tD({
                            sourceX: v,
                            targetX: m,
                            sourceY: y.y + f + h / 2 + u,
                            targetY: d.y + p + h / 2 + u,
                            sourceControlX: g,
                            targetControlX: w,
                            sourceRelativeY: f,
                            targetRelativeY: p,
                            linkWidth: h,
                            index: o,
                            payload: tD(tD({}, t), {}, {
                                source: y,
                                target: d
                            })
                        }, au(a, !1)),
                        x = {
                            onMouseEnter: r.handleMouseEnter.bind(r, O, "link"),
                            onMouseLeave: r.handleMouseLeave.bind(r, O, "link"),
                            onClick: r.handleClick.bind(r, O, "link")
                        };
                    return n.createElement(mu, XC({
                        key: "link-".concat(t.source, "-").concat(t.target, "-").concat(t.value)
                    }, x), r.constructor.renderLinkItem(a, O))
                })))
            }
        }, {
            key: "renderNodes",
            value: function(t) {
                var e = this,
                    r = this.props,
                    o = r.node,
                    i = r.margin,
                    a = ve(i, "top") || 0,
                    c = ve(i, "left") || 0;
                return n.createElement(mu, {
                    className: "recharts-sankey-nodes",
                    key: "recharts-sankey-nodes"
                }, t.map((function(t, r) {
                    var i = t.x,
                        u = t.y,
                        l = t.dx,
                        s = t.dy,
                        f = tD(tD({}, au(o, !1)), {}, {
                            x: i + c,
                            y: u + a,
                            width: l,
                            height: s,
                            index: r,
                            payload: t
                        }),
                        p = {
                            onMouseEnter: e.handleMouseEnter.bind(e, f, "node"),
                            onMouseLeave: e.handleMouseLeave.bind(e, f, "node"),
                            onClick: e.handleClick.bind(e, f, "node")
                        };
                    return n.createElement(mu, XC({
                        key: "node-".concat(t.x, "-").concat(t.y, "-").concat(t.value)
                    }, p), e.constructor.renderNodeItem(o, f))
                })))
            }
        }, {
            key: "renderTooltip",
            value: function() {
                var t = this.props,
                    e = t.children,
                    r = t.width,
                    o = t.height,
                    i = t.nameKey,
                    a = tu(e, Ip);
                if (!a) return null;
                var c, u = this.state,
                    l = u.isTooltipActive,
                    s = u.activeElement,
                    f = u.activeElementType,
                    p = {
                        x: 0,
                        y: 0,
                        width: r,
                        height: o
                    },
                    h = s ? (c = s, "node" === f ? {
                        x: c.x + c.width / 2,
                        y: c.y + c.height / 2
                    } : {
                        x: (c.sourceX + c.targetX) / 2,
                        y: (c.sourceY + c.targetY) / 2
                    }) : nD,
                    y = s ? function(t, e, r) {
                        var n = t.payload;
                        if ("node" === e) return [{
                            payload: t,
                            name: tw(n, r, ""),
                            value: tw(n, "value")
                        }];
                        if (n.source && n.target) {
                            var o = tw(n.source, r, ""),
                                i = tw(n.target, r, "");
                            return [{
                                payload: t,
                                name: "".concat(o, " - ").concat(i),
                                value: tw(n, "value")
                            }]
                        }
                        return []
                    }(s, f, i) : [];
                return n.cloneElement(a, {
                    viewBox: p,
                    active: l,
                    coordinate: h,
                    label: "",
                    payload: y
                })
            }
        }, {
            key: "render",
            value: function() {
                if (!eu(this)) return null;
                var t = this.props,
                    e = t.width,
                    r = t.height,
                    o = t.className,
                    i = t.style,
                    a = t.children,
                    c = VC(t, $C),
                    u = this.state,
                    l = u.links,
                    s = u.nodes,
                    f = au(c, !1);
                return n.createElement("div", {
                    className: hc("recharts-wrapper", o),
                    style: tD(tD({}, i), {}, {
                        position: "relative",
                        cursor: "default",
                        width: e,
                        height: r
                    }),
                    role: "region"
                }, n.createElement(hu, XC({}, f, {
                    width: e,
                    height: r
                }), iu(a), this.renderLinks(l, s), this.renderNodes(s)), this.renderTooltip())
            }
        }]) && HC(e.prototype, o), i && HC(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
        var e, o, i
    }();
eD(dD, "displayName", "Sankey"), eD(dD, "defaultProps", {
    nameKey: "name",
    dataKey: "value",
    nodePadding: 10,
    nodeWidth: 10,
    linkCurvature: .5,
    iterations: 32,
    margin: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    },
    sort: !0
});
var vD = dC({
        chartName: "RadarChart",
        GraphicalChild: eP,
        axisComponents: [{
            axisType: "angleAxis",
            AxisComp: ZS
        }, {
            axisType: "radiusAxis",
            AxisComp: BS
        }],
        formatAxisMap: Lw,
        defaultProps: {
            layout: "centric",
            startAngle: 90,
            endAngle: -270,
            cx: "50%",
            cy: "50%",
            innerRadius: 0,
            outerRadius: "80%"
        }
    }),
    mD = dC({
        chartName: "ScatterChart",
        GraphicalChild: YM,
        defaultTooltipEventType: "item",
        validateTooltipEventTypes: ["item"],
        axisComponents: [{
            axisType: "xAxis",
            AxisComp: c_
        }, {
            axisType: "yAxis",
            AxisComp: b_
        }, {
            axisType: "zAxis",
            AxisComp: IM
        }],
        formatAxisMap: XE
    }),
    bD = dC({
        chartName: "AreaChart",
        GraphicalChild: AM,
        axisComponents: [{
            axisType: "xAxis",
            AxisComp: c_
        }, {
            axisType: "yAxis",
            AxisComp: b_
        }],
        formatAxisMap: XE
    }),
    gD = dC({
        chartName: "RadialBarChart",
        GraphicalChild: SP,
        legendContent: "children",
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
            axisType: "angleAxis",
            AxisComp: ZS
        }, {
            axisType: "radiusAxis",
            AxisComp: BS
        }],
        formatAxisMap: Lw,
        defaultProps: {
            layout: "radial",
            startAngle: 0,
            endAngle: 360,
            cx: "50%",
            cy: "50%",
            innerRadius: 0,
            outerRadius: "80%"
        }
    }),
    wD = dC({
        chartName: "ComposedChart",
        GraphicalChild: [lM, AM, FE, YM],
        axisComponents: [{
            axisType: "xAxis",
            AxisComp: c_
        }, {
            axisType: "yAxis",
            AxisComp: b_
        }, {
            axisType: "zAxis",
            AxisComp: IM
        }],
        formatAxisMap: XE
    });

function OD() {
    return OD = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, OD.apply(this, arguments)
}

function xD(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e);
                else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || SD(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function jD(t) {
    return function(t) {
        if (Array.isArray(t)) return AD(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }(t) || SD(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function SD(t, e) {
    if (t) {
        if ("string" == typeof t) return AD(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? AD(t, e) : void 0
    }
}

function AD(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}
var PD = {
    fontWeight: "bold",
    paintOrder: "stroke fill",
    fontSize: ".75rem",
    stroke: "#FFF",
    fill: "black",
    pointerEvents: "none"
};

function ED(t) {
    if (!t.children || 0 === t.children.length) return 1;
    var e = t.children.map((function(t) {
        return ED(t)
    }));
    return 1 + Math.max.apply(Math, jD(e))
}
var kD, TD = function(t) {
    var e = t.className,
        o = t.data,
        i = t.children,
        a = t.width,
        c = t.height,
        u = t.padding,
        l = void 0 === u ? 2 : u,
        s = t.dataKey,
        f = void 0 === s ? "value" : s,
        p = t.ringPadding,
        h = void 0 === p ? 2 : p,
        y = t.innerRadius,
        d = void 0 === y ? 50 : y,
        v = t.fill,
        m = void 0 === v ? "#333" : v,
        b = t.stroke,
        g = void 0 === b ? "#FFF" : b,
        w = t.textOptions,
        O = void 0 === w ? PD : w,
        x = t.outerRadius,
        j = void 0 === x ? Math.min(a, c) / 2 : x,
        S = t.cx,
        A = void 0 === S ? a / 2 : S,
        P = t.cy,
        E = void 0 === P ? c / 2 : P,
        k = t.startAngle,
        T = void 0 === k ? 0 : k,
        M = t.endAngle,
        _ = void 0 === M ? 360 : M,
        C = t.onClick,
        D = t.onMouseEnter,
        I = t.onMouseLeave,
        N = xD(r.useState(!1), 2),
        R = N[0],
        B = N[1],
        L = xD(r.useState(null), 2),
        z = L[0],
        F = L[1],
        U = Od([0, o[f]], [0, _]),
        W = (j - d) / ED(o),
        $ = [],
        K = new Map([]);
    ! function t(e, r) {
        var o = r.radius,
            i = r.innerR,
            a = r.initialAngle,
            c = r.childColor,
            u = a;
        e && e.forEach((function(e) {
            var r, a, s = U(e[f]),
                p = u,
                y = null !== (r = null !== (a = null == e ? void 0 : e.fill) && void 0 !== a ? a : c) && void 0 !== r ? r : m,
                d = Rw(0, 0, i + o / 2, -(p + s - s / 2)),
                v = d.x,
                b = d.y;
            u += s, $.push(n.createElement("g", {
                "aria-label": e.name,
                tabIndex: 0
            }, n.createElement(TO, {
                onClick: function() {
                    return t = e, void(C && C(t));
                    var t
                },
                onMouseEnter: function(t) {
                    return function(t, e) {
                        D && D(t, e), F(t), B(!0)
                    }(e, t)
                },
                onMouseLeave: function(t) {
                    return function(t, e) {
                        I && I(t, e), F(null), B(!1)
                    }(e, t)
                },
                fill: y,
                stroke: g,
                strokeWidth: l,
                startAngle: p,
                endAngle: p + s,
                innerRadius: i,
                outerRadius: i + o,
                cx: A,
                cy: E
            }), n.createElement(Ah, OD({}, O, {
                alignmentBaseline: "middle",
                textAnchor: "middle",
                x: v + A,
                y: E - b
            }), e[f])));
            var w = Rw(A, E, i + o / 2, p),
                x = w.x,
                j = w.y;
            return K.set(e.name, {
                x: x,
                y: j
            }), t(e.children, {
                radius: o,
                innerR: i + o + h,
                initialAngle: p,
                childColor: y
            })
        }))
    }(o.children, {
        radius: W,
        innerR: d,
        initialAngle: T
    });
    var q = hc("recharts-sunburst", e);
    return n.createElement("div", {
        className: hc("recharts-wrapper", e),
        style: {
            position: "relative",
            width: a,
            height: c
        },
        role: "region"
    }, n.createElement(hu, {
        width: a,
        height: c
    }, i, n.createElement(mu, {
        className: q
    }, $)), function() {
        var t = tu([i], Ip);
        if (!t || !z) return null;
        var e = {
            x: 0,
            y: 0,
            width: a,
            height: c
        };
        return n.cloneElement(t, {
            viewBox: e,
            coordinate: K.get(z.name),
            payload: [z],
            active: R
        })
    }())
};

function MD(t) {
    return (MD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function _D() {
    return _D = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, _D.apply(this, arguments)
}

function CD(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function DD(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? CD(Object(r), !0).forEach((function(e) {
            ID(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : CD(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function ID(t, e, r) {
    var n;
    return n = function(t, e) {
        if ("object" != MD(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != MD(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(e, "string"), (e = "symbol" == MD(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function ND(t, e) {
    var r = "".concat(e.x || t.x),
        n = parseInt(r, 10),
        o = "".concat(e.y || t.y),
        i = parseInt(o, 10),
        a = "".concat((null == e ? void 0 : e.height) || (null == t ? void 0 : t.height)),
        c = parseInt(a, 10);
    return DD(DD(DD({}, e), wA(t)), {}, {
        height: c,
        x: n,
        y: i
    })
}

function RD(t) {
    return n.createElement(OA, _D({
        shapeType: "trapezoid",
        propTransformer: ND
    }, t))
}

function BD(t, e) {
    return function(t) {
        if (Array.isArray(t)) return t
    }(t) || function(t, e) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null != r) {
            var n, o, i, a, c = [],
                u = !0,
                l = !1;
            try {
                if (i = (r = r.call(t)).next, 0 === e) {
                    if (Object(r) !== r) return;
                    u = !1
                } else
                    for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
            } catch (s) {
                l = !0, o = s
            } finally {
                try {
                    if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                } finally {
                    if (l) throw o
                }
            }
            return c
        }
    }(t, e) || function(t, e) {
        if (!t) return;
        if ("string" == typeof t) return LD(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return LD(t, e)
    }(t, e) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function LD(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function zD(t) {
    return (zD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function FD() {
    return FD = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }, FD.apply(this, arguments)
}

function UD(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.push.apply(r, n)
    }
    return r
}

function WD(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? UD(Object(r), !0).forEach((function(e) {
            HD(t, e, r[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : UD(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }))
    }
    return t
}

function $D(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, GD(n.key), n)
    }
}

function KD(t, e, r) {
    return e = VD(e),
        function(t, e) {
            if (e && ("object" === zD(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t)
        }(t, qD() ? Reflect.construct(e, r || [], VD(t).constructor) : e.apply(t, r))
}

function qD() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (qD = function() {
        return !!t
    })()
}

function VD(t) {
    return (VD = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
}

function XD(t, e) {
    return (XD = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t
    })(t, e)
}

function HD(t, e, r) {
    return (e = GD(e)) in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function GD(t) {
    var e = function(t, e) {
        if ("object" != zD(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != zD(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }(t, "string");
    return "symbol" == zD(e) ? e : e + ""
}
var YD = function() {
    function t() {
        var e;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return HD(e = KD(this, t, [].concat(n)), "state", {
            isAnimationFinished: !1
        }), HD(e, "handleAnimationEnd", (function() {
            var t = e.props.onAnimationEnd;
            e.setState({
                isAnimationFinished: !0
            }), A(t) && t()
        })), HD(e, "handleAnimationStart", (function() {
            var t = e.props.onAnimationStart;
            e.setState({
                isAnimationFinished: !1
            }), A(t) && t()
        })), e
    }
    return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && XD(t, e)
    }(t, r.PureComponent), e = t, i = [{
        key: "getDerivedStateFromProps",
        value: function(t, e) {
            return t.animationId !== e.prevAnimationId ? {
                prevAnimationId: t.animationId,
                curTrapezoids: t.trapezoids,
                prevTrapezoids: e.curTrapezoids
            } : t.trapezoids !== e.curTrapezoids ? {
                curTrapezoids: t.trapezoids
            } : null
        }
    }], (o = [{
        key: "isActiveIndex",
        value: function(t) {
            var e = this.props.activeIndex;
            return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e
        }
    }, {
        key: "renderTrapezoidsStatically",
        value: function(t) {
            var e = this,
                r = this.props,
                o = r.shape,
                i = r.activeShape;
            return t.map((function(t, r) {
                var a = e.isActiveIndex(r) ? i : o,
                    c = WD(WD({}, t), {}, {
                        isActive: e.isActiveIndex(r),
                        stroke: t.stroke
                    });
                return n.createElement(mu, FD({
                    className: "recharts-funnel-trapezoid"
                }, $c(e.props, t, r), {
                    key: "trapezoid-".concat(null == t ? void 0 : t.x, "-").concat(null == t ? void 0 : t.y, "-").concat(null == t ? void 0 : t.name, "-").concat(null == t ? void 0 : t.value),
                    role: "img"
                }), n.createElement(RD, FD({
                    option: a
                }, c)))
            }))
        }
    }, {
        key: "renderTrapezoidsWithAnimation",
        value: function() {
            var t = this,
                e = this.props,
                r = e.trapezoids,
                o = e.isAnimationActive,
                i = e.animationBegin,
                a = e.animationDuration,
                c = e.animationEasing,
                u = e.animationId,
                l = this.state.prevTrapezoids;
            return n.createElement(Pj, {
                begin: i,
                duration: a,
                isActive: o,
                easing: c,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "funnel-".concat(u),
                onAnimationStart: this.handleAnimationStart,
                onAnimationEnd: this.handleAnimationEnd
            }, (function(e) {
                var o = e.t,
                    i = r.map((function(t, e) {
                        var r = l && l[e];
                        if (r) {
                            var n = Dc(r.x, t.x),
                                i = Dc(r.y, t.y),
                                a = Dc(r.upperWidth, t.upperWidth),
                                c = Dc(r.lowerWidth, t.lowerWidth),
                                u = Dc(r.height, t.height);
                            return WD(WD({}, t), {}, {
                                x: n(o),
                                y: i(o),
                                upperWidth: a(o),
                                lowerWidth: c(o),
                                height: u(o)
                            })
                        }
                        var s = Dc(t.x + t.upperWidth / 2, t.x),
                            f = Dc(t.y + t.height / 2, t.y),
                            p = Dc(0, t.upperWidth),
                            h = Dc(0, t.lowerWidth),
                            y = Dc(0, t.height);
                        return WD(WD({}, t), {}, {
                            x: s(o),
                            y: f(o),
                            upperWidth: p(o),
                            lowerWidth: h(o),
                            height: y(o)
                        })
                    }));
                return n.createElement(mu, null, t.renderTrapezoidsStatically(i))
            }))
        }
    }, {
        key: "renderTrapezoids",
        value: function() {
            var t = this.props,
                e = t.trapezoids,
                r = t.isAnimationActive,
                n = this.state.prevTrapezoids;
            return !(r && e && e.length) || n && Eb(n, e) ? this.renderTrapezoidsStatically(e) : this.renderTrapezoidsWithAnimation()
        }
    }, {
        key: "render",
        value: function() {
            var t = this.props,
                e = t.hide,
                r = t.trapezoids,
                o = t.className,
                i = t.isAnimationActive,
                a = this.state.isAnimationFinished;
            if (e || !r || !r.length) return null;
            var c = hc("recharts-trapezoids", o);
            return n.createElement(mu, {
                className: c
            }, this.renderTrapezoids(), (!i || a) && vO.renderCallByParent(this.props, r))
        }
    }]) && $D(e.prototype, o), i && $D(e, i), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
    var e, o, i
}();
kD = YD, HD(YD, "displayName", "Funnel"), HD(YD, "defaultProps", {
    stroke: "#fff",
    fill: "#808080",
    legendType: "rect",
    labelLine: !0,
    hide: !1,
    isAnimationActive: !xp.isSsr,
    animationBegin: 400,
    animationDuration: 1500,
    animationEasing: "ease",
    nameKey: "name",
    lastShapeType: "triangle"
}), HD(YD, "getRealFunnelData", (function(t) {
    var e = t.props,
        r = e.data,
        n = e.children,
        o = au(t.props, !1),
        i = Qc(n, Wp);
    return r && r.length ? r.map((function(t, e) {
        return WD(WD(WD({
            payload: t
        }, o), t), i && i[e] && i[e].props)
    })) : i && i.length ? i.map((function(t) {
        return WD(WD({}, o), t.props)
    })) : []
})), HD(YD, "getRealWidthHeight", (function(t, e) {
    var r = t.props.width,
        n = e.width,
        o = e.height,
        i = e.left,
        a = e.right,
        c = e.top,
        u = e.bottom,
        l = o,
        s = n;
    return xc(r) ? s = r : bc(r) && (s = s * parseFloat(r) / 100), {
        realWidth: s - i - a - 50,
        realHeight: l - u - c,
        offsetX: (n - s) / 2,
        offsetY: (o - l) / 2
    }
})), HD(YD, "getComposedData", (function(t) {
    var e = t.item,
        r = t.offset,
        n = kD.getRealFunnelData(e),
        o = e.props,
        i = o.dataKey,
        a = o.nameKey,
        c = o.tooltipType,
        u = o.lastShapeType,
        l = o.reversed,
        s = r.left,
        f = r.top,
        p = kD.getRealWidthHeight(e, r),
        h = p.realHeight,
        y = p.realWidth,
        d = p.offsetX,
        v = p.offsetY,
        m = Math.max.apply(null, n.map((function(t) {
            return tw(t, i, 0)
        }))),
        b = n.length,
        g = h / b,
        w = {
            x: r.left,
            y: r.top,
            width: r.width,
            height: r.height
        },
        O = n.map((function(t, e) {
            var r, o = tw(t, i, 0),
                l = tw(t, a, e),
                p = o;
            if (e !== b - 1)(r = tw(n[e + 1], i, 0)) instanceof Array && (r = BD(r, 1)[0]);
            else if (o instanceof Array && 2 === o.length) {
                var h = BD(o, 2);
                p = h[0], r = h[1]
            } else r = "rectangle" === u ? p : 0;
            var O = (m - p) * y / (2 * m) + f + 25 + d,
                x = g * e + s + v,
                j = p / m * y,
                S = r / m * y,
                A = [{
                    name: l,
                    value: p,
                    payload: t,
                    dataKey: i,
                    type: c
                }],
                P = {
                    x: O + j / 2,
                    y: x + g / 2
                };
            return WD(WD({
                x: O,
                y: x,
                width: Math.max(j, S),
                upperWidth: j,
                lowerWidth: S,
                height: g,
                name: l,
                val: p,
                tooltipPayload: A,
                tooltipPosition: P
            }, fc(t, "width")), {}, {
                payload: t,
                parentViewBox: w,
                labelViewBox: {
                    x: O + (j - S) / 4,
                    y: x,
                    width: Math.abs(j - S) / 2 + Math.min(j, S),
                    height: g
                }
            })
        }));
    return l && (O = O.map((function(t, e) {
        var r = t.y - e * g + (b - 1 - e) * g;
        return WD(WD({}, t), {}, {
            upperWidth: t.lowerWidth,
            lowerWidth: t.upperWidth,
            x: t.x - (t.lowerWidth - t.upperWidth) / 2,
            y: t.y - e * g + (b - 1 - e) * g,
            tooltipPosition: WD(WD({}, t.tooltipPosition), {}, {
                y: r + g / 2
            }),
            labelViewBox: WD(WD({}, t.labelViewBox), {}, {
                y: r
            })
        })
    }))), {
        trapezoids: O,
        data: n
    }
}));
var ZD = dC({
    chartName: "FunnelChart",
    GraphicalChild: YD,
    validateTooltipEventTypes: ["item"],
    defaultTooltipEventType: "item",
    axisComponents: [],
    defaultProps: {
        layout: "centric"
    }
});
export {
    AM as Area, bD as AreaChart, FE as Bar, mC as BarChart, ZP as Brush, kT as CartesianAxis, VT as CartesianGrid, Wp as Cell, wD as ComposedChart, eS as Cross, FO as Curve, wO as Customized, ds as DefaultLegendContent, op as DefaultTooltipContent, Xj as Dot, Wg as ErrorBar, YD as Funnel, ZD as FunnelChart, xp as Global, nO as Label, vO as LabelList, mu as Layer, Pf as Legend, lM as Line, vC as LineChart, FA as Pie, bC as PieChart, ZS as PolarAngleAxis, yS as PolarGrid, BS as PolarRadiusAxis, qj as Polygon, eP as Radar, vD as RadarChart, SP as RadialBar, gD as RadialBarChart, Bj as Rectangle, iT as ReferenceArea, Xk as ReferenceDot, Nk as ReferenceLine, Up as ResponsiveContainer, dD as Sankey, YM as Scatter, mD as ScatterChart, TO as Sector, TD as SunburstChart, hu as Surface, ns as Symbols, Ah as Text, Ip as Tooltip, fA as Trapezoid, zC as Treemap, c_ as XAxis, b_ as YAxis, IM as ZAxis
};