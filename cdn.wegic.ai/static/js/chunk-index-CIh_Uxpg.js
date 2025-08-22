var e = Object.defineProperty,
    t = Object.defineProperties,
    n = Object.getOwnPropertyDescriptors,
    r = Object.getOwnPropertySymbols,
    i = Object.prototype.hasOwnProperty,
    o = Object.prototype.propertyIsEnumerable,
    l = (t, n, r) => n in t ? e(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[n] = r,
    s = (e, t) => {
        for (var n in t || (t = {})) i.call(t, n) && l(e, n, t[n]);
        if (r)
            for (var n of r(t)) o.call(t, n) && l(e, n, t[n]);
        return e
    };
import {
    r as c,
    k as a,
    j as u
} from "./chunk-index-wjlp3off.js";
import {
    t as d
} from "./chunk-index-Ba4MOjoi.js";
import "./chunk-index-D4eDL30o.js";
const f = {
        position: "absolute",
        width: 0,
        height: 0,
        pointerEvents: "none",
        opacity: 0,
        left: 0,
        top: 0
    },
    h = {
        position: "relative",
        display: "inline-block",
        whiteSpace: "nowrap"
    },
    p = {
        width: "fit-content",
        height: "fit-content"
    };
const m = c.forwardRef(((e, r) => {
    const {
        data: i,
        style: o,
        className: l,
        renderItem: m,
        maxCount: g = "responsive",
        minCount: v = 0,
        renderRest: w,
        onUpdate: y
    } = e, b = a.useRef(null), j = a.useRef(null), R = function(e) {
        const {
            data: t,
            maxCount: n,
            minCount: r,
            containerRef: i,
            restRef: o,
            onUpdate: l
        } = e, [s, a] = c.useState(t.length), u = c.useCallback(d((() => {
            if (!i.current || !o.current) return;
            const e = i.current.getBoundingClientRect().width,
                s = o.current.children[0].getBoundingClientRect().width,
                c = [];
            let u = t.length;
            if ("responsive" === n || "number" == typeof n) {
                const o = i.current.querySelectorAll('[data-overflow-type="item"]'),
                    l = "number" == typeof n ? n : t.length;
                let a = 0;
                u = 0;
                for (let t = 0; t < Math.min(o.length, l); t++) {
                    const n = o[t].children[0].getBoundingClientRect().width;
                    if (!(a + n <= (t < o.length - 1 ? e - s : e))) break;
                    c.push(n), a += n, u++
                }
                if (u < r)
                    for (; u < r && u < o.length;) {
                        const e = o[u].children[0].getBoundingClientRect().width;
                        c.push(e), u++
                    }
                "number" == typeof n && u > n && (u = n, c.length = n)
            }
            u < t.length && c.push(s);
            const d = Math.max(Math.min(u, t.length), r);
            a(d), null == l || l(c, d < t.length)
        }), 16), [t, n, r, i, o, l]);
        return c.useEffect((() => {
            if (!i.current || !o.current) return;
            u();
            let e = null;
            return window.ResizeObserver ? (e = new ResizeObserver(u), e.observe(i.current)) : window.addEventListener("resize", u), () => {
                null == e || e.disconnect(), window.removeEventListener("resize", u)
            }
        }), [u]), s
    }({
        data: i,
        maxCount: g,
        minCount: v,
        containerRef: b,
        restRef: j,
        onUpdate: y
    }), x = i.slice(R);
    return u.jsxs("div", {
        ref: e => {
            b.current = e, "function" == typeof r ? r(e) : r && (r.current = e)
        },
        style: (C = s({}, o), O = {
            position: "relative",
            width: "100%"
        }, t(C, n(O))),
        className: l,
        children: [i.map(((e, t) => u.jsx("div", {
            "data-overflow-type": "item",
            style: s(s({}, h), t >= R ? f : {}),
            children: u.jsx("div", {
                style: p,
                children: m(e, t)
            })
        }, t))), u.jsx("div", {
            ref: j,
            "data-overflow-type": "rest",
            style: s(s({}, h), 0 === x.length ? f : {}),
            children: u.jsx("div", {
                style: p,
                children: w(x)
            })
        })]
    });
    var C, O
}));
export {
    m as
    default
};