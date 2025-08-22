var t = Object.defineProperty,
    e = Object.defineProperties,
    i = Object.getOwnPropertyDescriptors,
    s = Object.getOwnPropertySymbols,
    r = Object.prototype.hasOwnProperty,
    n = Object.prototype.propertyIsEnumerable,
    a = Math.pow,
    o = (e, i, s) => i in e ? t(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[i] = s,
    h = (t, e) => {
        for (var i in e || (e = {})) r.call(e, i) && o(t, i, e[i]);
        if (s)
            for (var i of s(e)) n.call(e, i) && o(t, i, e[i]);
        return t
    },
    l = (t, s) => e(t, i(s)),
    u = (t, e) => {
        var i = {};
        for (var a in t) r.call(t, a) && e.indexOf(a) < 0 && (i[a] = t[a]);
        if (null != t && s)
            for (var a of s(t)) e.indexOf(a) < 0 && n.call(t, a) && (i[a] = t[a]);
        return i
    },
    c = (t, e, i) => new Promise(((s, r) => {
        var n = t => {
                try {
                    o(i.next(t))
                } catch (e) {
                    r(e)
                }
            },
            a = t => {
                try {
                    o(i.throw(t))
                } catch (e) {
                    r(e)
                }
            },
            o = t => t.done ? s(t.value) : Promise.resolve(t.value).then(n, a);
        o((i = i.apply(t, e)).next())
    }));

function d(t) {
    let e = t[0],
        i = t[1],
        s = t[2];
    return Math.sqrt(e * e + i * i + s * s)
}

function g(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
}

function p(t, e, i) {
    return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t
}

function m(t, e, i) {
    return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t
}

function f(t, e, i) {
    return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t
}

function x(t) {
    let e = t[0],
        i = t[1],
        s = t[2];
    return e * e + i * i + s * s
}

function w(t, e) {
    let i = e[0],
        s = e[1],
        r = e[2],
        n = i * i + s * s + r * r;
    return n > 0 && (n = 1 / Math.sqrt(n)), t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t
}

function y(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
}

function b(t, e, i) {
    let s = e[0],
        r = e[1],
        n = e[2],
        a = i[0],
        o = i[1],
        h = i[2];
    return t[0] = r * h - n * o, t[1] = n * a - s * h, t[2] = s * o - r * a, t
}

function v(t, e, i, s) {
    let r = e[0],
        n = e[1],
        a = e[2];
    return t[0] = r + s * (i[0] - r), t[1] = n + s * (i[1] - n), t[2] = a + s * (i[2] - a), t
}
const M = function() {
    const t = [0, 0, 0],
        e = [0, 0, 0];
    return function(i, s) {
        g(t, i), g(e, s), w(t, t), w(e, e);
        let r = y(t, e);
        return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r)
    }
}();
class E extends Array {
    constructor(t = 0, e = t, i = t) {
        return super(t, e, i), this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(t) {
        this[0] = t
    }
    set y(t) {
        this[1] = t
    }
    set z(t) {
        this[2] = t
    }
    set(t, e = t, i = t) {
        return t.length ? this.copy(t) : (function(t, e, i, s) {
            t[0] = e, t[1] = i, t[2] = s
        }(this, t, e, i), this)
    }
    copy(t) {
        return g(this, t), this
    }
    add(t, e) {
        return e ? p(this, t, e) : p(this, this, t), this
    }
    sub(t, e) {
        return e ? m(this, t, e) : m(this, this, t), this
    }
    multiply(t) {
        var e, i, s;
        return t.length ? (i = this, s = t, (e = this)[0] = i[0] * s[0], e[1] = i[1] * s[1], e[2] = i[2] * s[2]) : f(this, this, t), this
    }
    divide(t) {
        var e, i, s;
        return t.length ? (i = this, s = t, (e = this)[0] = i[0] / s[0], e[1] = i[1] / s[1], e[2] = i[2] / s[2]) : f(this, this, 1 / t), this
    }
    inverse(t = this) {
        var e, i;
        return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], e[2] = 1 / i[2], this
    }
    len() {
        return d(this)
    }
    distance(t) {
        return t ? function(t, e) {
            let i = e[0] - t[0],
                s = e[1] - t[1],
                r = e[2] - t[2];
            return Math.sqrt(i * i + s * s + r * r)
        }(this, t) : d(this)
    }
    squaredLen() {
        return x(this)
    }
    squaredDistance(t) {
        return t ? function(t, e) {
            let i = e[0] - t[0],
                s = e[1] - t[1],
                r = e[2] - t[2];
            return i * i + s * s + r * r
        }(this, t) : x(this)
    }
    negate(t = this) {
        var e, i;
        return i = t, (e = this)[0] = -i[0], e[1] = -i[1], e[2] = -i[2], this
    }
    cross(t, e) {
        return e ? b(this, t, e) : b(this, this, t), this
    }
    scale(t) {
        return f(this, this, t), this
    }
    normalize() {
        return w(this, this), this
    }
    dot(t) {
        return y(this, t)
    }
    equals(t) {
        return i = t, (e = this)[0] === i[0] && e[1] === i[1] && e[2] === i[2];
        var e, i
    }
    applyMatrix3(t) {
        return function(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2];
            t[0] = s * i[0] + r * i[3] + n * i[6], t[1] = s * i[1] + r * i[4] + n * i[7], t[2] = s * i[2] + r * i[5] + n * i[8]
        }(this, this, t), this
    }
    applyMatrix4(t) {
        return function(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                a = i[3] * s + i[7] * r + i[11] * n + i[15];
            a = a || 1, t[0] = (i[0] * s + i[4] * r + i[8] * n + i[12]) / a, t[1] = (i[1] * s + i[5] * r + i[9] * n + i[13]) / a, t[2] = (i[2] * s + i[6] * r + i[10] * n + i[14]) / a
        }(this, this, t), this
    }
    scaleRotateMatrix4(t) {
        return function(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                a = i[3] * s + i[7] * r + i[11] * n + i[15];
            a = a || 1, t[0] = (i[0] * s + i[4] * r + i[8] * n) / a, t[1] = (i[1] * s + i[5] * r + i[9] * n) / a, t[2] = (i[2] * s + i[6] * r + i[10] * n) / a
        }(this, this, t), this
    }
    applyQuaternion(t) {
        return function(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                a = i[0],
                o = i[1],
                h = i[2],
                l = o * n - h * r,
                u = h * s - a * n,
                c = a * r - o * s,
                d = o * c - h * u,
                g = h * l - a * c,
                p = a * u - o * l,
                m = 2 * i[3];
            l *= m, u *= m, c *= m, d *= 2, g *= 2, p *= 2, t[0] = s + l + d, t[1] = r + u + g, t[2] = n + c + p
        }(this, this, t), this
    }
    angle(t) {
        return M(this, t)
    }
    lerp(t, e) {
        return v(this, this, t, e), this
    }
    smoothLerp(t, e, i) {
        return function(t, e, i, s, r) {
            const n = Math.exp(-s * r);
            let a = e[0],
                o = e[1],
                h = e[2];
            t[0] = i[0] + (a - i[0]) * n, t[1] = i[1] + (o - i[1]) * n, t[2] = i[2] + (h - i[2]) * n
        }(this, this, t, e, i), this
    }
    clone() {
        return new E(this[0], this[1], this[2])
    }
    fromArray(t, e = 0) {
        return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
    }
    transformDirection(t) {
        const e = this[0],
            i = this[1],
            s = this[2];
        return this[0] = t[0] * e + t[4] * i + t[8] * s, this[1] = t[1] * e + t[5] * i + t[9] * s, this[2] = t[2] * e + t[6] * i + t[10] * s, this.normalize()
    }
}
const A = new E;
let _ = 1,
    T = 1,
    F = !1;
class R {
    constructor(t, e = {}) {
        t.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = t, this.attributes = e, this.id = _++, this.VAOs = {}, this.drawRange = {
            start: 0,
            count: 0
        }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
        for (let i in e) this.addAttribute(i, e[i])
    }
    addAttribute(t, e) {
        if (this.attributes[t] = e, e.id = T++, e.size = e.size || 1, e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e.normalized = e.normalized || !1, e.stride = e.stride || 0, e.offset = e.offset || 0, e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size), e.divisor = e.instanced || 0, e.needsUpdate = !1, e.usage = e.usage || this.gl.STATIC_DRAW, e.buffer || this.updateAttribute(e), e.divisor) {
            if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== e.count * e.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
            this.instancedCount = e.count * e.divisor
        } else "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
    }
    updateAttribute(t) {
        const e = !t.buffer;
        e && (t.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.buffer), e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data), t.needsUpdate = !1
    }
    setIndex(t) {
        this.addAttribute("index", t)
    }
    setDrawRange(t, e) {
        this.drawRange.start = t, this.drawRange.count = e
    }
    setInstancedCount(t) {
        this.instancedCount = t
    }
    createVAO(t) {
        this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t)
    }
    bindAttributes(t) {
        t.attributeLocations.forEach(((t, {
            name: e,
            type: i
        }) => {
            if (!this.attributes[e]) return void console.warn(`active attribute ${e} not being supplied`);
            const s = this.attributes[e];
            this.gl.bindBuffer(s.target, s.buffer), this.glState.boundBuffer = s.buffer;
            let r = 1;
            35674 === i && (r = 2), 35675 === i && (r = 3), 35676 === i && (r = 4);
            const n = s.size / r,
                a = 1 === r ? 0 : r * r * 4,
                o = 1 === r ? 0 : 4 * r;
            for (let h = 0; h < r; h++) this.gl.vertexAttribPointer(t + h, n, s.type, s.normalized, s.stride + a, s.offset + h * o), this.gl.enableVertexAttribArray(t + h), this.gl.renderer.vertexAttribDivisor(t + h, s.divisor)
        })), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
    }
    draw({
        program: t,
        mode: e = this.gl.TRIANGLES
    }) {
        var i;
        this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach(((t, {
            name: e
        }) => {
            const i = this.attributes[e];
            i.needsUpdate && this.updateAttribute(i)
        }));
        let s = 2;
        (null == (i = this.attributes.index) ? void 0 : i.type) === this.gl.UNSIGNED_INT && (s = 4), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * s, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * s) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
    }
    getPosition() {
        const t = this.attributes.position;
        return t.data ? t : F ? void 0 : (console.warn("No position buffer data found to compute bounds"), F = !0)
    }
    computeBoundingBox(t) {
        t || (t = this.getPosition());
        const e = t.data,
            i = t.size;
        this.bounds || (this.bounds = {
            min: new E,
            max: new E,
            center: new E,
            scale: new E,
            radius: 1 / 0
        });
        const s = this.bounds.min,
            r = this.bounds.max,
            n = this.bounds.center,
            a = this.bounds.scale;
        s.set(1 / 0), r.set(-1 / 0);
        for (let o = 0, h = e.length; o < h; o += i) {
            const t = e[o],
                i = e[o + 1],
                n = e[o + 2];
            s.x = Math.min(t, s.x), s.y = Math.min(i, s.y), s.z = Math.min(n, s.z), r.x = Math.max(t, r.x), r.y = Math.max(i, r.y), r.z = Math.max(n, r.z)
        }
        a.sub(r, s), n.add(s, r).divide(2)
    }
    computeBoundingSphere(t) {
        t || (t = this.getPosition());
        const e = t.data,
            i = t.size;
        this.bounds || this.computeBoundingBox(t);
        let s = 0;
        for (let r = 0, n = e.length; r < n; r += i) A.fromArray(e, r), s = Math.max(s, this.bounds.center.squaredDistance(A));
        this.bounds.radius = Math.sqrt(s)
    }
    remove() {
        for (let t in this.VAOs) this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
        for (let t in this.attributes) this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t]
    }
}
let S = 1;
const P = {};
class L {
    constructor(t, {
        vertex: e,
        fragment: i,
        uniforms: s = {},
        transparent: r = !1,
        cullFace: n = t.BACK,
        frontFace: a = t.CCW,
        depthTest: o = !0,
        depthWrite: h = !0,
        depthFunc: l = t.LEQUAL
    } = {}) {
        t.canvas || console.error("gl not passed as first argument to Program"), this.gl = t, this.uniforms = s, this.id = S++, e || console.warn("vertex shader not supplied"), i || console.warn("fragment shader not supplied"), this.transparent = r, this.cullFace = n, this.frontFace = a, this.depthTest = o, this.depthWrite = h, this.depthFunc = l, this.blendFunc = {}, this.blendEquation = {}, this.stencilFunc = {}, this.stencilOp = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)), this.vertexShader = t.createShader(t.VERTEX_SHADER), this.fragmentShader = t.createShader(t.FRAGMENT_SHADER), this.program = t.createProgram(), t.attachShader(this.program, this.vertexShader), t.attachShader(this.program, this.fragmentShader), this.setShaders({
            vertex: e,
            fragment: i
        })
    }
    setShaders({
        vertex: t,
        fragment: e
    }) {
        if (t && (this.gl.shaderSource(this.vertexShader, t), this.gl.compileShader(this.vertexShader), "" !== this.gl.getShaderInfoLog(this.vertexShader) && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}\nVertex Shader\n${z(t)}`)), e && (this.gl.shaderSource(this.fragmentShader, e), this.gl.compileShader(this.fragmentShader), "" !== this.gl.getShaderInfoLog(this.fragmentShader) && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}\nFragment Shader\n${z(e)}`)), this.gl.linkProgram(this.program), !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) return console.warn(this.gl.getProgramInfoLog(this.program));
        this.uniformLocations = new Map;
        let i = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
        for (let n = 0; n < i; n++) {
            let t = this.gl.getActiveUniform(this.program, n);
            this.uniformLocations.set(t, this.gl.getUniformLocation(this.program, t.name));
            const e = t.name.match(/(\w+)/g);
            t.uniformName = e[0], t.nameComponents = e.slice(1)
        }
        this.attributeLocations = new Map;
        const s = [],
            r = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
        for (let n = 0; n < r; n++) {
            const t = this.gl.getActiveAttrib(this.program, n),
                e = this.gl.getAttribLocation(this.program, t.name); - 1 !== e && (s[e] = t.name, this.attributeLocations.set(t, e))
        }
        this.attributeOrder = s.join("")
    }
    setBlendFunc(t, e, i, s) {
        this.blendFunc.src = t, this.blendFunc.dst = e, this.blendFunc.srcAlpha = i, this.blendFunc.dstAlpha = s, t && (this.transparent = !0)
    }
    setBlendEquation(t, e) {
        this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = e
    }
    setStencilFunc(t, e, i) {
        this.stencilRef = e, this.stencilFunc.func = t, this.stencilFunc.ref = e, this.stencilFunc.mask = i
    }
    setStencilOp(t, e, i) {
        this.stencilOp.stencilFail = t, this.stencilOp.depthFail = e, this.stencilOp.depthPass = i
    }
    applyState() {
        this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha), this.stencilFunc.func || this.stencilOp.stencilFail ? this.gl.renderer.enable(this.gl.STENCIL_TEST) : this.gl.renderer.disable(this.gl.STENCIL_TEST), this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask), this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass)
    }
    use({
        flipFaces: t = !1
    } = {}) {
        let e = -1;
        this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach(((t, i) => {
            let s = this.uniforms[i.uniformName];
            for (const e of i.nameComponents) {
                if (!s) break;
                if (!(e in s)) {
                    if (Array.isArray(s.value)) break;
                    s = void 0;
                    break
                }
                s = s[e]
            }
            if (!s) return B(`Active uniform ${i.name} has not been supplied`);
            if (s && void 0 === s.value) return B(`${i.name} uniform is missing a value parameter`);
            if (s.value.texture) return e += 1, s.value.update(e), C(this.gl, i.type, t, e);
            if (s.value.length && s.value[0].texture) {
                const r = [];
                return s.value.forEach((t => {
                    e += 1, t.update(e), r.push(e)
                })), C(this.gl, i.type, t, r)
            }
            C(this.gl, i.type, t, s.value)
        })), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
    }
    remove() {
        this.gl.deleteProgram(this.program)
    }
}

function C(t, e, i, s) {
    s = s.length ? function(t) {
        const e = t.length,
            i = t[0].length;
        if (void 0 === i) return t;
        const s = e * i;
        let r = P[s];
        r || (P[s] = r = new Float32Array(s));
        for (let n = 0; n < e; n++) r.set(t[n], n * i);
        return r
    }(s) : s;
    const r = t.renderer.state.uniformLocations.get(i);
    if (s.length)
        if (void 0 === r || r.length !== s.length) t.renderer.state.uniformLocations.set(i, s.slice(0));
        else {
            if (function(t, e) {
                    if (t.length !== e.length) return !1;
                    for (let i = 0, s = t.length; i < s; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
                }(r, s)) return;
            r.set ? r.set(s) : function(t, e) {
                for (let i = 0, s = t.length; i < s; i++) t[i] = e[i]
            }(r, s), t.renderer.state.uniformLocations.set(i, r)
        }
    else {
        if (r === s) return;
        t.renderer.state.uniformLocations.set(i, s)
    }
    switch (e) {
        case 5126:
            return s.length ? t.uniform1fv(i, s) : t.uniform1f(i, s);
        case 35664:
            return t.uniform2fv(i, s);
        case 35665:
            return t.uniform3fv(i, s);
        case 35666:
            return t.uniform4fv(i, s);
        case 35670:
        case 5124:
        case 35678:
        case 36306:
        case 35680:
        case 36289:
            return s.length ? t.uniform1iv(i, s) : t.uniform1i(i, s);
        case 35671:
        case 35667:
            return t.uniform2iv(i, s);
        case 35672:
        case 35668:
            return t.uniform3iv(i, s);
        case 35673:
        case 35669:
            return t.uniform4iv(i, s);
        case 35674:
            return t.uniformMatrix2fv(i, !1, s);
        case 35675:
            return t.uniformMatrix3fv(i, !1, s);
        case 35676:
            return t.uniformMatrix4fv(i, !1, s)
    }
}

function z(t) {
    let e = t.split("\n");
    for (let i = 0; i < e.length; i++) e[i] = i + 1 + ": " + e[i];
    return e.join("\n")
}
let O = 0;

function B(t) {
    O > 100 || (console.warn(t), O++, O > 100 && console.warn("More than 100 program warnings - stopping logs."))
}
const I = new E;
let U = 1;
class N {
    constructor({
        canvas: t = document.createElement("canvas"),
        width: e = 300,
        height: i = 150,
        dpr: s = 1,
        alpha: r = !1,
        depth: n = !0,
        stencil: a = !1,
        antialias: o = !1,
        premultipliedAlpha: h = !1,
        preserveDrawingBuffer: l = !1,
        powerPreference: u = "default",
        autoClear: c = !0,
        webgl: d = 2
    } = {}) {
        const g = {
            alpha: r,
            depth: n,
            stencil: a,
            antialias: o,
            premultipliedAlpha: h,
            preserveDrawingBuffer: l,
            powerPreference: u
        };
        this.dpr = s, this.alpha = r, this.color = !0, this.depth = n, this.stencil = a, this.premultipliedAlpha = h, this.autoClear = c, this.id = U++, 2 === d && (this.gl = t.getContext("webgl2", g)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", g)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(e, i), this.state = {}, this.state.blendFunc = {
            src: this.gl.ONE,
            dst: this.gl.ZERO
        }, this.state.blendEquation = {
            modeRGB: this.gl.FUNC_ADD
        }, this.state.cullFace = !1, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LEQUAL, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
            x: 0,
            y: 0,
            width: null,
            height: null
        }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map, this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
    }
    setSize(t, e) {
        this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = e * this.dpr, this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
            width: t + "px",
            height: e + "px"
        })
    }
    setViewport(t, e, i = 0, s = 0) {
        this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t, this.state.viewport.height = e, this.state.viewport.x = i, this.state.viewport.y = s, this.gl.viewport(i, s, t, e))
    }
    setScissor(t, e, i = 0, s = 0) {
        this.gl.scissor(i, s, t, e)
    }
    enable(t) {
        !0 !== this.state[t] && (this.gl.enable(t), this.state[t] = !0)
    }
    disable(t) {
        !1 !== this.state[t] && (this.gl.disable(t), this.state[t] = !1)
    }
    setBlendFunc(t, e, i, s) {
        this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === s || (this.state.blendFunc.src = t, this.state.blendFunc.dst = e, this.state.blendFunc.srcAlpha = i, this.state.blendFunc.dstAlpha = s, void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, s) : this.gl.blendFunc(t, e))
    }
    setBlendEquation(t, e) {
        t = t || this.gl.FUNC_ADD, this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e || (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = e, void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
    }
    setCullFace(t) {
        this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t))
    }
    setFrontFace(t) {
        this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t))
    }
    setDepthMask(t) {
        this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t))
    }
    setDepthFunc(t) {
        this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t))
    }
    setStencilMask(t) {
        this.state.stencilMask !== t && (this.state.stencilMask = t, this.gl.stencilMask(t))
    }
    setStencilFunc(t, e, i) {
        this.state.stencilFunc === t && this.state.stencilRef === e && this.state.stencilFuncMask === i || (this.state.stencilFunc = t || this.gl.ALWAYS, this.state.stencilRef = e || 0, this.state.stencilFuncMask = i || 0, this.gl.stencilFunc(t || this.gl.ALWAYS, e || 0, i || 0))
    }
    setStencilOp(t, e, i) {
        this.state.stencilFail === t && this.state.stencilDepthFail === e && this.state.stencilDepthPass === i || (this.state.stencilFail = t, this.state.stencilDepthFail = e, this.state.stencilDepthPass = i, this.gl.stencilOp(t, e, i))
    }
    activeTexture(t) {
        this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t))
    }
    bindFramebuffer({
        target: t = this.gl.FRAMEBUFFER,
        buffer: e = null
    } = {}) {
        this.state.framebuffer !== e && (this.state.framebuffer = e, this.gl.bindFramebuffer(t, e))
    }
    getExtension(t, e, i) {
        return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? this.extensions[t] ? this.extensions[t][i].bind(this.extensions[t]) : null : this.extensions[t])
    }
    sortOpaque(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
    }
    sortTransparent(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
    }
    sortUI(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
    }
    getRenderList({
        scene: t,
        camera: e,
        frustumCull: i,
        sort: s
    }) {
        let r = [];
        if (e && i && e.updateFrustum(), t.traverse((t => {
                if (!t.visible) return !0;
                t.draw && (i && t.frustumCulled && e && !e.frustumIntersectsMesh(t) || r.push(t))
            })), s) {
            const t = [],
                i = [],
                s = [];
            r.forEach((r => {
                r.program.transparent ? r.program.depthTest ? i.push(r) : s.push(r) : t.push(r), r.zDepth = 0, 0 === r.renderOrder && r.program.depthTest && e && (r.worldMatrix.getTranslation(I), I.applyMatrix4(e.projectionViewMatrix), r.zDepth = I.z)
            })), t.sort(this.sortOpaque), i.sort(this.sortTransparent), s.sort(this.sortUI), r = t.concat(i, s)
        }
        return r
    }
    render({
        scene: t,
        camera: e,
        target: i = null,
        update: s = !0,
        sort: r = !0,
        frustumCull: n = !0,
        clear: a
    }) {
        null === i ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)), (a || this.autoClear && !1 !== a) && (!this.depth || i && !i.depth || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), (this.stencil || !i || i.stencil) && (this.enable(this.gl.STENCIL_TEST), this.setStencilMask(255)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), s && t.updateMatrixWorld(), e && e.updateMatrixWorld();
        this.getRenderList({
            scene: t,
            camera: e,
            frustumCull: n,
            sort: r
        }).forEach((t => {
            t.draw({
                camera: e
            })
        }))
    }
}

function D(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
}

function k(t, e, i, s, r) {
    return t[0] = e, t[1] = i, t[2] = s, t[3] = r, t
}

function G(t, e) {
    let i = e[0],
        s = e[1],
        r = e[2],
        n = e[3],
        a = i * i + s * s + r * r + n * n;
    return a > 0 && (a = 1 / Math.sqrt(a)), t[0] = i * a, t[1] = s * a, t[2] = r * a, t[3] = n * a, t
}

function j(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
}

function V(t, e, i) {
    let s = e[0],
        r = e[1],
        n = e[2],
        a = e[3],
        o = i[0],
        h = i[1],
        l = i[2],
        u = i[3];
    return t[0] = s * u + a * o + r * l - n * h, t[1] = r * u + a * h + n * o - s * l, t[2] = n * u + a * l + s * h - r * o, t[3] = a * u - s * o - r * h - n * l, t
}
const X = D,
    W = k,
    q = j,
    Y = G;
class H extends Array {
    constructor(t = 0, e = 0, i = 0, s = 1) {
        super(t, e, i, s), this.onChange = () => {}, this._target = this;
        const r = ["0", "1", "2", "3"];
        return new Proxy(this, {
            set(t, e) {
                const i = Reflect.set(...arguments);
                return i && r.includes(e) && t.onChange(), i
            }
        })
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    get w() {
        return this[3]
    }
    set x(t) {
        this._target[0] = t, this.onChange()
    }
    set y(t) {
        this._target[1] = t, this.onChange()
    }
    set z(t) {
        this._target[2] = t, this.onChange()
    }
    set w(t) {
        this._target[3] = t, this.onChange()
    }
    identity() {
        var t;
        return (t = this._target)[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, this.onChange(), this
    }
    set(t, e, i, s) {
        return t.length ? this.copy(t) : (W(this._target, t, e, i, s), this.onChange(), this)
    }
    rotateX(t) {
        return function(t, e, i) {
            i *= .5;
            let s = e[0],
                r = e[1],
                n = e[2],
                a = e[3],
                o = Math.sin(i),
                h = Math.cos(i);
            t[0] = s * h + a * o, t[1] = r * h + n * o, t[2] = n * h - r * o, t[3] = a * h - s * o
        }(this._target, this._target, t), this.onChange(), this
    }
    rotateY(t) {
        return function(t, e, i) {
            i *= .5;
            let s = e[0],
                r = e[1],
                n = e[2],
                a = e[3],
                o = Math.sin(i),
                h = Math.cos(i);
            t[0] = s * h - n * o, t[1] = r * h + a * o, t[2] = n * h + s * o, t[3] = a * h - r * o
        }(this._target, this._target, t), this.onChange(), this
    }
    rotateZ(t) {
        return function(t, e, i) {
            i *= .5;
            let s = e[0],
                r = e[1],
                n = e[2],
                a = e[3],
                o = Math.sin(i),
                h = Math.cos(i);
            t[0] = s * h + r * o, t[1] = r * h - s * o, t[2] = n * h + a * o, t[3] = a * h - n * o
        }(this._target, this._target, t), this.onChange(), this
    }
    inverse(t = this._target) {
        return function(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = e[3],
                a = i * i + s * s + r * r + n * n,
                o = a ? 1 / a : 0;
            t[0] = -i * o, t[1] = -s * o, t[2] = -r * o, t[3] = n * o
        }(this._target, t), this.onChange(), this
    }
    conjugate(t = this._target) {
        var e, i;
        return e = this._target, i = t, e[0] = -i[0], e[1] = -i[1], e[2] = -i[2], e[3] = i[3], this.onChange(), this
    }
    copy(t) {
        return X(this._target, t), this.onChange(), this
    }
    normalize(t = this._target) {
        return Y(this._target, t), this.onChange(), this
    }
    multiply(t, e) {
        return e ? V(this._target, t, e) : V(this._target, this._target, t), this.onChange(), this
    }
    dot(t) {
        return q(this._target, t)
    }
    fromMatrix3(t) {
        return function(t, e) {
            let i, s = e[0] + e[4] + e[8];
            if (s > 0) i = Math.sqrt(s + 1), t[3] = .5 * i, i = .5 / i, t[0] = (e[5] - e[7]) * i, t[1] = (e[6] - e[2]) * i, t[2] = (e[1] - e[3]) * i;
            else {
                let s = 0;
                e[4] > e[0] && (s = 1), e[8] > e[3 * s + s] && (s = 2);
                let r = (s + 1) % 3,
                    n = (s + 2) % 3;
                i = Math.sqrt(e[3 * s + s] - e[3 * r + r] - e[3 * n + n] + 1), t[s] = .5 * i, i = .5 / i, t[3] = (e[3 * r + n] - e[3 * n + r]) * i, t[r] = (e[3 * r + s] + e[3 * s + r]) * i, t[n] = (e[3 * n + s] + e[3 * s + n]) * i
            }
        }(this._target, t), this.onChange(), this
    }
    fromEuler(t, e) {
        return function(t, e, i = "YXZ") {
            let s = Math.sin(.5 * e[0]),
                r = Math.cos(.5 * e[0]),
                n = Math.sin(.5 * e[1]),
                a = Math.cos(.5 * e[1]),
                o = Math.sin(.5 * e[2]),
                h = Math.cos(.5 * e[2]);
            "XYZ" === i ? (t[0] = s * a * h + r * n * o, t[1] = r * n * h - s * a * o, t[2] = r * a * o + s * n * h, t[3] = r * a * h - s * n * o) : "YXZ" === i ? (t[0] = s * a * h + r * n * o, t[1] = r * n * h - s * a * o, t[2] = r * a * o - s * n * h, t[3] = r * a * h + s * n * o) : "ZXY" === i ? (t[0] = s * a * h - r * n * o, t[1] = r * n * h + s * a * o, t[2] = r * a * o + s * n * h, t[3] = r * a * h - s * n * o) : "ZYX" === i ? (t[0] = s * a * h - r * n * o, t[1] = r * n * h + s * a * o, t[2] = r * a * o - s * n * h, t[3] = r * a * h + s * n * o) : "YZX" === i ? (t[0] = s * a * h + r * n * o, t[1] = r * n * h + s * a * o, t[2] = r * a * o - s * n * h, t[3] = r * a * h - s * n * o) : "XZY" === i && (t[0] = s * a * h - r * n * o, t[1] = r * n * h - s * a * o, t[2] = r * a * o + s * n * h, t[3] = r * a * h + s * n * o)
        }(this._target, t, t.order), e || this.onChange(), this
    }
    fromAxisAngle(t, e) {
        return function(t, e, i) {
            i *= .5;
            let s = Math.sin(i);
            t[0] = s * e[0], t[1] = s * e[1], t[2] = s * e[2], t[3] = Math.cos(i)
        }(this._target, t, e), this.onChange(), this
    }
    slerp(t, e) {
        return function(t, e, i, s) {
            let r, n, a, o, h, l = e[0],
                u = e[1],
                c = e[2],
                d = e[3],
                g = i[0],
                p = i[1],
                m = i[2],
                f = i[3];
            n = l * g + u * p + c * m + d * f, n < 0 && (n = -n, g = -g, p = -p, m = -m, f = -f), 1 - n > 1e-6 ? (r = Math.acos(n), a = Math.sin(r), o = Math.sin((1 - s) * r) / a, h = Math.sin(s * r) / a) : (o = 1 - s, h = s), t[0] = o * l + h * g, t[1] = o * u + h * p, t[2] = o * c + h * m, t[3] = o * d + h * f
        }(this._target, this._target, t, e), this.onChange(), this
    }
    fromArray(t, e = 0) {
        return this._target[0] = t[e], this._target[1] = t[e + 1], this._target[2] = t[e + 2], this._target[3] = t[e + 3], this.onChange(), this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
    }
}

function K(t) {
    let e = t[0],
        i = t[1],
        s = t[2],
        r = t[3],
        n = t[4],
        a = t[5],
        o = t[6],
        h = t[7],
        l = t[8],
        u = t[9],
        c = t[10],
        d = t[11],
        g = t[12],
        p = t[13],
        m = t[14],
        f = t[15];
    return (e * a - i * n) * (c * f - d * m) - (e * o - s * n) * (u * f - d * p) + (e * h - r * n) * (u * m - c * p) + (i * o - s * a) * (l * f - d * g) - (i * h - r * a) * (l * m - c * g) + (s * h - r * o) * (l * p - u * g)
}

function Z(t, e, i) {
    let s = e[0],
        r = e[1],
        n = e[2],
        a = e[3],
        o = e[4],
        h = e[5],
        l = e[6],
        u = e[7],
        c = e[8],
        d = e[9],
        g = e[10],
        p = e[11],
        m = e[12],
        f = e[13],
        x = e[14],
        w = e[15],
        y = i[0],
        b = i[1],
        v = i[2],
        M = i[3];
    return t[0] = y * s + b * o + v * c + M * m, t[1] = y * r + b * h + v * d + M * f, t[2] = y * n + b * l + v * g + M * x, t[3] = y * a + b * u + v * p + M * w, y = i[4], b = i[5], v = i[6], M = i[7], t[4] = y * s + b * o + v * c + M * m, t[5] = y * r + b * h + v * d + M * f, t[6] = y * n + b * l + v * g + M * x, t[7] = y * a + b * u + v * p + M * w, y = i[8], b = i[9], v = i[10], M = i[11], t[8] = y * s + b * o + v * c + M * m, t[9] = y * r + b * h + v * d + M * f, t[10] = y * n + b * l + v * g + M * x, t[11] = y * a + b * u + v * p + M * w, y = i[12], b = i[13], v = i[14], M = i[15], t[12] = y * s + b * o + v * c + M * m, t[13] = y * r + b * h + v * d + M * f, t[14] = y * n + b * l + v * g + M * x, t[15] = y * a + b * u + v * p + M * w, t
}

function $(t, e) {
    let i = e[0],
        s = e[1],
        r = e[2],
        n = e[4],
        a = e[5],
        o = e[6],
        h = e[8],
        l = e[9],
        u = e[10];
    return t[0] = Math.hypot(i, s, r), t[1] = Math.hypot(n, a, o), t[2] = Math.hypot(h, l, u), t
}
const Q = function() {
    const t = [1, 1, 1];
    return function(e, i) {
        let s = t;
        $(s, i);
        let r = 1 / s[0],
            n = 1 / s[1],
            a = 1 / s[2],
            o = i[0] * r,
            h = i[1] * n,
            l = i[2] * a,
            u = i[4] * r,
            c = i[5] * n,
            d = i[6] * a,
            g = i[8] * r,
            p = i[9] * n,
            m = i[10] * a,
            f = o + c + m,
            x = 0;
        return f > 0 ? (x = 2 * Math.sqrt(f + 1), e[3] = .25 * x, e[0] = (d - p) / x, e[1] = (g - l) / x, e[2] = (h - u) / x) : o > c && o > m ? (x = 2 * Math.sqrt(1 + o - c - m), e[3] = (d - p) / x, e[0] = .25 * x, e[1] = (h + u) / x, e[2] = (g + l) / x) : c > m ? (x = 2 * Math.sqrt(1 + c - o - m), e[3] = (g - l) / x, e[0] = (h + u) / x, e[1] = .25 * x, e[2] = (d + p) / x) : (x = 2 * Math.sqrt(1 + m - o - c), e[3] = (h - u) / x, e[0] = (g + l) / x, e[1] = (d + p) / x, e[2] = .25 * x), e
    }
}();

function J(t, e, i) {
    return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t[6] = e[6] + i[6], t[7] = e[7] + i[7], t[8] = e[8] + i[8], t[9] = e[9] + i[9], t[10] = e[10] + i[10], t[11] = e[11] + i[11], t[12] = e[12] + i[12], t[13] = e[13] + i[13], t[14] = e[14] + i[14], t[15] = e[15] + i[15], t
}

function tt(t, e, i) {
    return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t[6] = e[6] - i[6], t[7] = e[7] - i[7], t[8] = e[8] - i[8], t[9] = e[9] - i[9], t[10] = e[10] - i[10], t[11] = e[11] - i[11], t[12] = e[12] - i[12], t[13] = e[13] - i[13], t[14] = e[14] - i[14], t[15] = e[15] - i[15], t
}
class et extends Array {
    constructor(t = 1, e = 0, i = 0, s = 0, r = 0, n = 1, a = 0, o = 0, h = 0, l = 0, u = 1, c = 0, d = 0, g = 0, p = 0, m = 1) {
        return super(t, e, i, s, r, n, a, o, h, l, u, c, d, g, p, m), this
    }
    get x() {
        return this[12]
    }
    get y() {
        return this[13]
    }
    get z() {
        return this[14]
    }
    get w() {
        return this[15]
    }
    set x(t) {
        this[12] = t
    }
    set y(t) {
        this[13] = t
    }
    set z(t) {
        this[14] = t
    }
    set w(t) {
        this[15] = t
    }
    set(t, e, i, s, r, n, a, o, h, l, u, c, d, g, p, m) {
        return t.length ? this.copy(t) : (function(t, e, i, s, r, n, a, o, h, l, u, c, d, g, p, m, f) {
            t[0] = e, t[1] = i, t[2] = s, t[3] = r, t[4] = n, t[5] = a, t[6] = o, t[7] = h, t[8] = l, t[9] = u, t[10] = c, t[11] = d, t[12] = g, t[13] = p, t[14] = m, t[15] = f
        }(this, t, e, i, s, r, n, a, o, h, l, u, c, d, g, p, m), this)
    }
    translate(t, e = this) {
        return function(t, e, i) {
            let s, r, n, a, o, h, l, u, c, d, g, p, m = i[0],
                f = i[1],
                x = i[2];
            e === t ? (t[12] = e[0] * m + e[4] * f + e[8] * x + e[12], t[13] = e[1] * m + e[5] * f + e[9] * x + e[13], t[14] = e[2] * m + e[6] * f + e[10] * x + e[14], t[15] = e[3] * m + e[7] * f + e[11] * x + e[15]) : (s = e[0], r = e[1], n = e[2], a = e[3], o = e[4], h = e[5], l = e[6], u = e[7], c = e[8], d = e[9], g = e[10], p = e[11], t[0] = s, t[1] = r, t[2] = n, t[3] = a, t[4] = o, t[5] = h, t[6] = l, t[7] = u, t[8] = c, t[9] = d, t[10] = g, t[11] = p, t[12] = s * m + o * f + c * x + e[12], t[13] = r * m + h * f + d * x + e[13], t[14] = n * m + l * f + g * x + e[14], t[15] = a * m + u * f + p * x + e[15])
        }(this, e, t), this
    }
    rotate(t, e, i = this) {
        return function(t, e, i, s) {
            let r, n, a, o, h, l, u, c, d, g, p, m, f, x, w, y, b, v, M, E, A, _, T, F, R = s[0],
                S = s[1],
                P = s[2],
                L = Math.hypot(R, S, P);
            Math.abs(L) < 1e-6 || (L = 1 / L, R *= L, S *= L, P *= L, r = Math.sin(i), n = Math.cos(i), a = 1 - n, o = e[0], h = e[1], l = e[2], u = e[3], c = e[4], d = e[5], g = e[6], p = e[7], m = e[8], f = e[9], x = e[10], w = e[11], y = R * R * a + n, b = S * R * a + P * r, v = P * R * a - S * r, M = R * S * a - P * r, E = S * S * a + n, A = P * S * a + R * r, _ = R * P * a + S * r, T = S * P * a - R * r, F = P * P * a + n, t[0] = o * y + c * b + m * v, t[1] = h * y + d * b + f * v, t[2] = l * y + g * b + x * v, t[3] = u * y + p * b + w * v, t[4] = o * M + c * E + m * A, t[5] = h * M + d * E + f * A, t[6] = l * M + g * E + x * A, t[7] = u * M + p * E + w * A, t[8] = o * _ + c * T + m * F, t[9] = h * _ + d * T + f * F, t[10] = l * _ + g * T + x * F, t[11] = u * _ + p * T + w * F, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]))
        }(this, i, t, e), this
    }
    scale(t, e = this) {
        return function(t, e, i) {
            let s = i[0],
                r = i[1],
                n = i[2];
            t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t[3] = e[3] * s, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]
        }(this, e, "number" == typeof t ? [t, t, t] : t), this
    }
    add(t, e) {
        return e ? J(this, t, e) : J(this, this, t), this
    }
    sub(t, e) {
        return e ? tt(this, t, e) : tt(this, this, t), this
    }
    multiply(t, e) {
        var i, s, r;
        return t.length ? e ? Z(this, t, e) : Z(this, this, t) : (s = this, r = t, (i = this)[0] = s[0] * r, i[1] = s[1] * r, i[2] = s[2] * r, i[3] = s[3] * r, i[4] = s[4] * r, i[5] = s[5] * r, i[6] = s[6] * r, i[7] = s[7] * r, i[8] = s[8] * r, i[9] = s[9] * r, i[10] = s[10] * r, i[11] = s[11] * r, i[12] = s[12] * r, i[13] = s[13] * r, i[14] = s[14] * r, i[15] = s[15] * r), this
    }
    identity() {
        var t;
        return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    }
    copy(t) {
        var e, i;
        return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
    }
    fromPerspective({
        fov: t,
        aspect: e,
        near: i,
        far: s
    } = {}) {
        return function(t, e, i, s, r) {
            let n = 1 / Math.tan(e / 2),
                a = 1 / (s - r);
            t[0] = n / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (r + s) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * r * s * a, t[15] = 0
        }(this, t, e, i, s), this
    }
    fromOrthogonal({
        left: t,
        right: e,
        bottom: i,
        top: s,
        near: r,
        far: n
    }) {
        return function(t, e, i, s, r, n, a) {
            let o = 1 / (e - i),
                h = 1 / (s - r),
                l = 1 / (n - a);
            t[0] = -2 * o, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * h, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + i) * o, t[13] = (r + s) * h, t[14] = (a + n) * l, t[15] = 1
        }(this, t, e, i, s, r, n), this
    }
    fromQuaternion(t) {
        return function(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = e[3],
                a = i + i,
                o = s + s,
                h = r + r,
                l = i * a,
                u = s * a,
                c = s * o,
                d = r * a,
                g = r * o,
                p = r * h,
                m = n * a,
                f = n * o,
                x = n * h;
            t[0] = 1 - c - p, t[1] = u + x, t[2] = d - f, t[3] = 0, t[4] = u - x, t[5] = 1 - l - p, t[6] = g + m, t[7] = 0, t[8] = d + f, t[9] = g - m, t[10] = 1 - l - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1
        }(this, t), this
    }
    setPosition(t) {
        return this.x = t[0], this.y = t[1], this.z = t[2], this
    }
    inverse(t = this) {
        return function(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = e[3],
                a = e[4],
                o = e[5],
                h = e[6],
                l = e[7],
                u = e[8],
                c = e[9],
                d = e[10],
                g = e[11],
                p = e[12],
                m = e[13],
                f = e[14],
                x = e[15],
                w = i * o - s * a,
                y = i * h - r * a,
                b = i * l - n * a,
                v = s * h - r * o,
                M = s * l - n * o,
                E = r * l - n * h,
                A = u * m - c * p,
                _ = u * f - d * p,
                T = u * x - g * p,
                F = c * f - d * m,
                R = c * x - g * m,
                S = d * x - g * f,
                P = w * S - y * R + b * F + v * T - M * _ + E * A;
            P && (P = 1 / P, t[0] = (o * S - h * R + l * F) * P, t[1] = (r * R - s * S - n * F) * P, t[2] = (m * E - f * M + x * v) * P, t[3] = (d * M - c * E - g * v) * P, t[4] = (h * T - a * S - l * _) * P, t[5] = (i * S - r * T + n * _) * P, t[6] = (f * b - p * E - x * y) * P, t[7] = (u * E - d * b + g * y) * P, t[8] = (a * R - o * T + l * A) * P, t[9] = (s * T - i * R - n * A) * P, t[10] = (p * M - m * b + x * w) * P, t[11] = (c * b - u * M - g * w) * P, t[12] = (o * _ - a * F - h * A) * P, t[13] = (i * F - s * _ + r * A) * P, t[14] = (m * y - p * v - f * w) * P, t[15] = (u * v - c * y + d * w) * P)
        }(this, t), this
    }
    compose(t, e, i) {
        return function(t, e, i, s) {
            const r = t,
                n = e[0],
                a = e[1],
                o = e[2],
                h = e[3],
                l = n + n,
                u = a + a,
                c = o + o,
                d = n * l,
                g = n * u,
                p = n * c,
                m = a * u,
                f = a * c,
                x = o * c,
                w = h * l,
                y = h * u,
                b = h * c,
                v = s[0],
                M = s[1],
                E = s[2];
            r[0] = (1 - (m + x)) * v, r[1] = (g + b) * v, r[2] = (p - y) * v, r[3] = 0, r[4] = (g - b) * M, r[5] = (1 - (d + x)) * M, r[6] = (f + w) * M, r[7] = 0, r[8] = (p + y) * E, r[9] = (f - w) * E, r[10] = (1 - (d + m)) * E, r[11] = 0, r[12] = i[0], r[13] = i[1], r[14] = i[2], r[15] = 1
        }(this, t, e, i), this
    }
    decompose(t, e, i) {
        return function(t, e, i, s) {
            let r = d([t[0], t[1], t[2]]);
            const n = d([t[4], t[5], t[6]]),
                a = d([t[8], t[9], t[10]]);
            K(t) < 0 && (r = -r), i[0] = t[12], i[1] = t[13], i[2] = t[14];
            const o = t.slice(),
                h = 1 / r,
                l = 1 / n,
                u = 1 / a;
            o[0] *= h, o[1] *= h, o[2] *= h, o[4] *= l, o[5] *= l, o[6] *= l, o[8] *= u, o[9] *= u, o[10] *= u, Q(e, o), s[0] = r, s[1] = n, s[2] = a
        }(this, t, e, i), this
    }
    getRotation(t) {
        return Q(t, this), this
    }
    getTranslation(t) {
        var e, i;
        return i = this, (e = t)[0] = i[12], e[1] = i[13], e[2] = i[14], this
    }
    getScaling(t) {
        return $(t, this), this
    }
    getMaxScaleOnAxis() {
        return function(t) {
            let e = t[0],
                i = t[1],
                s = t[2],
                r = t[4],
                n = t[5],
                a = t[6],
                o = t[8],
                h = t[9],
                l = t[10];
            const u = e * e + i * i + s * s,
                c = r * r + n * n + a * a,
                d = o * o + h * h + l * l;
            return Math.sqrt(Math.max(u, c, d))
        }(this)
    }
    lookAt(t, e, i) {
        return function(t, e, i, s) {
            let r = e[0],
                n = e[1],
                a = e[2],
                o = s[0],
                h = s[1],
                l = s[2],
                u = r - i[0],
                c = n - i[1],
                d = a - i[2],
                g = u * u + c * c + d * d;
            0 === g ? d = 1 : (g = 1 / Math.sqrt(g), u *= g, c *= g, d *= g);
            let p = h * d - l * c,
                m = l * u - o * d,
                f = o * c - h * u;
            g = p * p + m * m + f * f, 0 === g && (l ? o += 1e-6 : h ? l += 1e-6 : h += 1e-6, p = h * d - l * c, m = l * u - o * d, f = o * c - h * u, g = p * p + m * m + f * f), g = 1 / Math.sqrt(g), p *= g, m *= g, f *= g, t[0] = p, t[1] = m, t[2] = f, t[3] = 0, t[4] = c * f - d * m, t[5] = d * p - u * f, t[6] = u * m - c * p, t[7] = 0, t[8] = u, t[9] = c, t[10] = d, t[11] = 0, t[12] = r, t[13] = n, t[14] = a, t[15] = 1
        }(this, t, e, i), this
    }
    determinant() {
        return K(this)
    }
    fromArray(t, e = 0) {
        return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this[4] = t[e + 4], this[5] = t[e + 5], this[6] = t[e + 6], this[7] = t[e + 7], this[8] = t[e + 8], this[9] = t[e + 9], this[10] = t[e + 10], this[11] = t[e + 11], this[12] = t[e + 12], this[13] = t[e + 13], this[14] = t[e + 14], this[15] = t[e + 15], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t[e + 4] = this[4], t[e + 5] = this[5], t[e + 6] = this[6], t[e + 7] = this[7], t[e + 8] = this[8], t[e + 9] = this[9], t[e + 10] = this[10], t[e + 11] = this[11], t[e + 12] = this[12], t[e + 13] = this[13], t[e + 14] = this[14], t[e + 15] = this[15], t
    }
}
const it = new et;
class st extends Array {
    constructor(t = 0, e = t, i = t, s = "YXZ") {
        super(t, e, i), this.order = s, this.onChange = () => {}, this._target = this;
        const r = ["0", "1", "2"];
        return new Proxy(this, {
            set(t, e) {
                const i = Reflect.set(...arguments);
                return i && r.includes(e) && t.onChange(), i
            }
        })
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    set x(t) {
        this._target[0] = t, this.onChange()
    }
    set y(t) {
        this._target[1] = t, this.onChange()
    }
    set z(t) {
        this._target[2] = t, this.onChange()
    }
    set(t, e = t, i = t) {
        return t.length ? this.copy(t) : (this._target[0] = t, this._target[1] = e, this._target[2] = i, this.onChange(), this)
    }
    copy(t) {
        return this._target[0] = t[0], this._target[1] = t[1], this._target[2] = t[2], this.onChange(), this
    }
    reorder(t) {
        return this._target.order = t, this.onChange(), this
    }
    fromRotationMatrix(t, e = this.order) {
        return function(t, e, i = "YXZ") {
            "XYZ" === i ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)), Math.abs(e[8]) < .99999 ? (t[0] = Math.atan2(-e[9], e[10]), t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]), t[2] = 0)) : "YXZ" === i ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)), Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]), t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]), t[2] = 0)) : "ZXY" === i ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)), Math.abs(e[6]) < .99999 ? (t[1] = Math.atan2(-e[2], e[10]), t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0, t[2] = Math.atan2(e[1], e[0]))) : "ZYX" === i ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)), Math.abs(e[2]) < .99999 ? (t[0] = Math.atan2(e[6], e[10]), t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0, t[2] = Math.atan2(-e[4], e[5]))) : "YZX" === i ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)), Math.abs(e[1]) < .99999 ? (t[0] = Math.atan2(-e[9], e[5]), t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0, t[1] = Math.atan2(e[8], e[10]))) : "XZY" === i && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)), Math.abs(e[4]) < .99999 ? (t[0] = Math.atan2(e[6], e[5]), t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]), t[1] = 0))
        }(this._target, t, e), this.onChange(), this
    }
    fromQuaternion(t, e = this.order, i) {
        return it.fromQuaternion(t), this._target.fromRotationMatrix(it, e), i || this.onChange(), this
    }
    fromArray(t, e = 0) {
        return this._target[0] = t[e], this._target[1] = t[e + 1], this._target[2] = t[e + 2], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
    }
}
class rt {
    constructor() {
        this.parent = null, this.children = [], this.visible = !0, this.matrix = new et, this.worldMatrix = new et, this.matrixAutoUpdate = !0, this.worldMatrixNeedsUpdate = !1, this.position = new E, this.quaternion = new H, this.scale = new E(1), this.rotation = new st, this.up = new E(0, 1, 0), this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0), this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0)
    }
    setParent(t, e = !0) {
        this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, e && t && t.addChild(this, !1)
    }
    addChild(t, e = !0) {
        ~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1)
    }
    removeChild(t, e = !0) {
        ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1)
    }
    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
        for (let e = 0, i = this.children.length; e < i; e++) this.children[e].updateMatrixWorld(t)
    }
    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0
    }
    traverse(t) {
        if (!t(this))
            for (let e = 0, i = this.children.length; e < i; e++) this.children[e].traverse(t)
    }
    decompose() {
        this.matrix.decompose(this.quaternion._target, this.position, this.scale), this.rotation.fromQuaternion(this.quaternion)
    }
    lookAt(t, e = !1) {
        e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion._target), this.rotation.fromQuaternion(this.quaternion)
    }
}
const nt = new et,
    at = new E,
    ot = new E;
class ht extends rt {
    constructor(t, {
        near: e = .1,
        far: i = 100,
        fov: s = 45,
        aspect: r = 1,
        left: n,
        right: a,
        bottom: o,
        top: h,
        zoom: l = 1
    } = {}) {
        super(), Object.assign(this, {
            near: e,
            far: i,
            fov: s,
            aspect: r,
            left: n,
            right: a,
            bottom: o,
            top: h,
            zoom: l
        }), this.projectionMatrix = new et, this.viewMatrix = new et, this.projectionViewMatrix = new et, this.worldPosition = new E, this.type = n || a ? "orthographic" : "perspective", "orthographic" === this.type ? this.orthographic() : this.perspective()
    }
    perspective({
        near: t = this.near,
        far: e = this.far,
        fov: i = this.fov,
        aspect: s = this.aspect
    } = {}) {
        return Object.assign(this, {
            near: t,
            far: e,
            fov: i,
            aspect: s
        }), this.projectionMatrix.fromPerspective({
            fov: i * (Math.PI / 180),
            aspect: s,
            near: t,
            far: e
        }), this.type = "perspective", this
    }
    orthographic({
        near: t = this.near,
        far: e = this.far,
        left: i = this.left || -1,
        right: s = this.right || 1,
        bottom: r = this.bottom || -1,
        top: n = this.top || 1,
        zoom: a = this.zoom
    } = {}) {
        return Object.assign(this, {
            near: t,
            far: e,
            left: i,
            right: s,
            bottom: r,
            top: n,
            zoom: a
        }), i /= a, s /= a, r /= a, n /= a, this.projectionMatrix.fromOrthogonal({
            left: i,
            right: s,
            bottom: r,
            top: n,
            near: t,
            far: e
        }), this.type = "orthographic", this
    }
    updateMatrixWorld() {
        return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this
    }
    updateProjectionMatrix() {
        return "perspective" === this.type ? this.perspective() : this.orthographic()
    }
    lookAt(t) {
        return super.lookAt(t, !0), this
    }
    project(t) {
        return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this
    }
    unproject(t) {
        return t.applyMatrix4(nt.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this
    }
    updateFrustum() {
        this.frustum || (this.frustum = [new E, new E, new E, new E, new E, new E]);
        const t = this.projectionViewMatrix;
        this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12], this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12], this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13], this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13], this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14], this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
        for (let e = 0; e < 6; e++) {
            const t = 1 / this.frustum[e].distance();
            this.frustum[e].multiply(t), this.frustum[e].constant *= t
        }
    }
    frustumIntersectsMesh(t, e = t.worldMatrix) {
        if (!t.geometry.attributes.position) return !0;
        if (t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere(), !t.geometry.bounds) return !0;
        const i = at;
        i.copy(t.geometry.bounds.center), i.applyMatrix4(e);
        const s = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(i, s)
    }
    frustumIntersectsSphere(t, e) {
        const i = ot;
        for (let s = 0; s < 6; s++) {
            const r = this.frustum[s];
            if (i.copy(r).dot(t) + r.constant < -e) return !1
        }
        return !0
    }
}

function lt(t, e, i) {
    let s = e[0],
        r = e[1],
        n = e[2],
        a = e[3],
        o = e[4],
        h = e[5],
        l = e[6],
        u = e[7],
        c = e[8],
        d = i[0],
        g = i[1],
        p = i[2],
        m = i[3],
        f = i[4],
        x = i[5],
        w = i[6],
        y = i[7],
        b = i[8];
    return t[0] = d * s + g * a + p * l, t[1] = d * r + g * o + p * u, t[2] = d * n + g * h + p * c, t[3] = m * s + f * a + x * l, t[4] = m * r + f * o + x * u, t[5] = m * n + f * h + x * c, t[6] = w * s + y * a + b * l, t[7] = w * r + y * o + b * u, t[8] = w * n + y * h + b * c, t
}
class ut extends Array {
    constructor(t = 1, e = 0, i = 0, s = 0, r = 1, n = 0, a = 0, o = 0, h = 1) {
        return super(t, e, i, s, r, n, a, o, h), this
    }
    set(t, e, i, s, r, n, a, o, h) {
        return t.length ? this.copy(t) : (function(t, e, i, s, r, n, a, o, h, l) {
            t[0] = e, t[1] = i, t[2] = s, t[3] = r, t[4] = n, t[5] = a, t[6] = o, t[7] = h, t[8] = l
        }(this, t, e, i, s, r, n, a, o, h), this)
    }
    translate(t, e = this) {
        return function(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                a = e[3],
                o = e[4],
                h = e[5],
                l = e[6],
                u = e[7],
                c = e[8],
                d = i[0],
                g = i[1];
            t[0] = s, t[1] = r, t[2] = n, t[3] = a, t[4] = o, t[5] = h, t[6] = d * s + g * a + l, t[7] = d * r + g * o + u, t[8] = d * n + g * h + c
        }(this, e, t), this
    }
    rotate(t, e = this) {
        return function(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                a = e[3],
                o = e[4],
                h = e[5],
                l = e[6],
                u = e[7],
                c = e[8],
                d = Math.sin(i),
                g = Math.cos(i);
            t[0] = g * s + d * a, t[1] = g * r + d * o, t[2] = g * n + d * h, t[3] = g * a - d * s, t[4] = g * o - d * r, t[5] = g * h - d * n, t[6] = l, t[7] = u, t[8] = c
        }(this, e, t), this
    }
    scale(t, e = this) {
        return function(t, e, i) {
            let s = i[0],
                r = i[1];
            t[0] = s * e[0], t[1] = s * e[1], t[2] = s * e[2], t[3] = r * e[3], t[4] = r * e[4], t[5] = r * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8]
        }(this, e, t), this
    }
    multiply(t, e) {
        return e ? lt(this, t, e) : lt(this, this, t), this
    }
    identity() {
        var t;
        return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, this
    }
    copy(t) {
        var e, i;
        return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
    }
    fromMatrix4(t) {
        var e, i;
        return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[4], e[4] = i[5], e[5] = i[6], e[6] = i[8], e[7] = i[9], e[8] = i[10], this
    }
    fromQuaternion(t) {
        return function(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = e[3],
                a = i + i,
                o = s + s,
                h = r + r,
                l = i * a,
                u = s * a,
                c = s * o,
                d = r * a,
                g = r * o,
                p = r * h,
                m = n * a,
                f = n * o,
                x = n * h;
            t[0] = 1 - c - p, t[3] = u - x, t[6] = d + f, t[1] = u + x, t[4] = 1 - l - p, t[7] = g - m, t[2] = d - f, t[5] = g + m, t[8] = 1 - l - c
        }(this, t), this
    }
    fromBasis(t, e, i) {
        return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this
    }
    inverse(t = this) {
        return function(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = e[3],
                a = e[4],
                o = e[5],
                h = e[6],
                l = e[7],
                u = e[8],
                c = u * a - o * l,
                d = -u * n + o * h,
                g = l * n - a * h,
                p = i * c + s * d + r * g;
            p && (p = 1 / p, t[0] = c * p, t[1] = (-u * s + r * l) * p, t[2] = (o * s - r * a) * p, t[3] = d * p, t[4] = (u * i - r * h) * p, t[5] = (-o * i + r * n) * p, t[6] = g * p, t[7] = (-l * i + s * h) * p, t[8] = (a * i - s * n) * p)
        }(this, t), this
    }
    getNormalMatrix(t) {
        return function(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = e[3],
                a = e[4],
                o = e[5],
                h = e[6],
                l = e[7],
                u = e[8],
                c = e[9],
                d = e[10],
                g = e[11],
                p = e[12],
                m = e[13],
                f = e[14],
                x = e[15],
                w = i * o - s * a,
                y = i * h - r * a,
                b = i * l - n * a,
                v = s * h - r * o,
                M = s * l - n * o,
                E = r * l - n * h,
                A = u * m - c * p,
                _ = u * f - d * p,
                T = u * x - g * p,
                F = c * f - d * m,
                R = c * x - g * m,
                S = d * x - g * f,
                P = w * S - y * R + b * F + v * T - M * _ + E * A;
            P && (P = 1 / P, t[0] = (o * S - h * R + l * F) * P, t[1] = (h * T - a * S - l * _) * P, t[2] = (a * R - o * T + l * A) * P, t[3] = (r * R - s * S - n * F) * P, t[4] = (i * S - r * T + n * _) * P, t[5] = (s * T - i * R - n * A) * P, t[6] = (m * E - f * M + x * v) * P, t[7] = (f * b - p * E - x * y) * P, t[8] = (p * M - m * b + x * w) * P)
        }(this, t), this
    }
}
let ct = 0;
class dt extends rt {
    constructor(t, {
        geometry: e,
        program: i,
        mode: s = t.TRIANGLES,
        frustumCulled: r = !0,
        renderOrder: n = 0
    } = {}) {
        super(), t.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = t, this.id = ct++, this.geometry = e, this.program = i, this.mode = s, this.frustumCulled = r, this.renderOrder = n, this.modelViewMatrix = new et, this.normalMatrix = new ut, this.beforeRenderCallbacks = [], this.afterRenderCallbacks = []
    }
    onBeforeRender(t) {
        return this.beforeRenderCallbacks.push(t), this
    }
    onAfterRender(t) {
        return this.afterRenderCallbacks.push(t), this
    }
    draw({
        camera: t
    } = {}) {
        t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
            modelMatrix: {
                value: null
            },
            viewMatrix: {
                value: null
            },
            modelViewMatrix: {
                value: null
            },
            normalMatrix: {
                value: null
            },
            projectionMatrix: {
                value: null
            },
            cameraPosition: {
                value: null
            }
        }), this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.worldPosition, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix), this.beforeRenderCallbacks.forEach((e => e && e({
            mesh: this,
            camera: t
        })));
        let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({
            flipFaces: e
        }), this.geometry.draw({
            mode: this.mode,
            program: this.program
        }), this.afterRenderCallbacks.forEach((e => e && e({
            mesh: this,
            camera: t
        })))
    }
}
const gt = new Uint8Array(4);

function pt(t) {
    return !(t & t - 1)
}
let mt = 1;
class ft {
    constructor(t, {
        image: e,
        target: i = t.TEXTURE_2D,
        type: s = t.UNSIGNED_BYTE,
        format: r = t.RGBA,
        internalFormat: n = r,
        wrapS: a = t.CLAMP_TO_EDGE,
        wrapT: o = t.CLAMP_TO_EDGE,
        wrapR: h = t.CLAMP_TO_EDGE,
        generateMipmaps: l = i === (t.TEXTURE_2D || t.TEXTURE_CUBE_MAP),
        minFilter: u = (l ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR),
        magFilter: c = t.LINEAR,
        premultiplyAlpha: d = !1,
        unpackAlignment: g = 4,
        flipY: p = i == (t.TEXTURE_2D || t.TEXTURE_3D),
        anisotropy: m = 0,
        level: f = 0,
        width: x,
        height: w = x,
        length: y = 1
    } = {}) {
        this.gl = t, this.id = mt++, this.image = e, this.target = i, this.type = s, this.format = r, this.internalFormat = n, this.minFilter = u, this.magFilter = c, this.wrapS = a, this.wrapT = o, this.wrapR = h, this.generateMipmaps = l, this.premultiplyAlpha = d, this.unpackAlignment = g, this.flipY = p, this.anisotropy = Math.min(m, this.gl.renderer.parameters.maxAnisotropy), this.level = f, this.width = x, this.height = w, this.length = y, this.texture = this.gl.createTexture(), this.store = {
            image: null
        }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0
    }
    bind() {
        this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
    }
    update(t = 0) {
        const e = !(this.image === this.store.image && !this.needsUpdate);
        if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), e) {
            if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.wrapR !== this.state.wrapR && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_R, this.wrapR), this.state.wrapR = this.wrapR), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
                if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
                    for (let t = 0; t < 6; t++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, this.level, this.internalFormat, this.format, this.type, this.image[t]);
                else if (ArrayBuffer.isView(this.image)) this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image) : this.target !== this.gl.TEXTURE_2D_ARRAY && this.target !== this.gl.TEXTURE_3D || this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
                else if (this.image.isCompressedTexture)
                    for (let t = 0; t < this.image.length; t++) this.gl.compressedTexImage2D(this.target, t, this.internalFormat, this.image[t].width, this.image[t].height, 0, this.image[t].data);
                else this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
                this.generateMipmaps && (this.gl.renderer.isWebgl2 || pt(this.image.width) && pt(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR)), this.onUpdate && this.onUpdate()
            } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                for (let t = 0; t < 6; t++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, gt);
            else this.width ? this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, gt);
            this.store.image = this.image
        }
    }
}
class xt {
    constructor(t, {
        width: e = t.canvas.width,
        height: i = t.canvas.height,
        target: s = t.FRAMEBUFFER,
        color: r = 1,
        depth: n = !0,
        stencil: a = !1,
        depthTexture: o = !1,
        wrapS: h = t.CLAMP_TO_EDGE,
        wrapT: l = t.CLAMP_TO_EDGE,
        wrapR: u = t.CLAMP_TO_EDGE,
        minFilter: c = t.LINEAR,
        magFilter: d = c,
        type: g = t.UNSIGNED_BYTE,
        format: p = t.RGBA,
        internalFormat: m = p,
        unpackAlignment: f,
        premultiplyAlpha: x
    } = {}) {
        this.gl = t, this.width = e, this.height = i, this.depth = n, this.stencil = a, this.buffer = this.gl.createFramebuffer(), this.target = s, this.gl.renderer.bindFramebuffer(this), this.textures = [];
        const w = [];
        for (let y = 0; y < r; y++) this.textures.push(new ft(t, {
            width: e,
            height: i,
            wrapS: h,
            wrapT: l,
            wrapR: u,
            minFilter: c,
            magFilter: d,
            type: g,
            format: p,
            internalFormat: m,
            unpackAlignment: f,
            premultiplyAlpha: x,
            flipY: !1,
            generateMipmaps: !1
        })), this.textures[y].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + y, this.gl.TEXTURE_2D, this.textures[y].texture, 0), w.push(this.gl.COLOR_ATTACHMENT0 + y);
        w.length > 1 && this.gl.renderer.drawBuffers(w), this.texture = this.textures[0], o && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new ft(t, {
            width: e,
            height: i,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST,
            format: this.stencil ? this.gl.DEPTH_STENCIL : this.gl.DEPTH_COMPONENT,
            internalFormat: t.renderer.isWebgl2 ? this.stencil ? this.gl.DEPTH24_STENCIL8 : this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
            type: this.stencil ? this.gl.UNSIGNED_INT_24_8 : this.gl.UNSIGNED_INT
        }), this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.stencil ? this.gl.DEPTH_STENCIL_ATTACHMENT : this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (n && !a && (this.depthBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)), a && !n && (this.stencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, i), this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)), n && a && (this.depthStencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, i), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))), this.gl.renderer.bindFramebuffer({
            target: this.target
        })
    }
    setSize(t, e) {
        if (this.width !== t || this.height !== e) {
            this.width = t, this.height = e, this.gl.renderer.bindFramebuffer(this);
            for (let i = 0; i < this.textures.length; i++) this.textures[i].width = t, this.textures[i].height = e, this.textures[i].needsUpdate = !0, this.textures[i].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0);
            this.depthTexture ? (this.depthTexture.width = t, this.depthTexture.height = e, this.depthTexture.needsUpdate = !0, this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (this.depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, t, e)), this.stencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, t, e)), this.depthStencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, t, e))), this.gl.renderer.bindFramebuffer({
                target: this.target
            })
        }
    }
}
const wt = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000"
};

function yt(t) {
    4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
    const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e || console.warn(`Unable to convert hex string ${t} to rgb values`), [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
}

function bt(t) {
    return void 0 === t ? [0, 0, 0] : 3 === arguments.length ? arguments : isNaN(t) ? "#" === t[0] ? yt(t) : wt[t.toLowerCase()] ? yt(wt[t.toLowerCase()]) : (console.warn("Color format not recognised"), [0, 0, 0]) : (e = t, [((e = parseInt(e)) >> 16 & 255) / 255, (e >> 8 & 255) / 255, (255 & e) / 255]);
    var e
}
class vt extends Array {
    constructor(t) {
        return Array.isArray(t) ? super(...t) : super(...bt(...arguments))
    }
    get r() {
        return this[0]
    }
    get g() {
        return this[1]
    }
    get b() {
        return this[2]
    }
    set r(t) {
        this[0] = t
    }
    set g(t) {
        this[1] = t
    }
    set b(t) {
        this[2] = t
    }
    set(t) {
        return Array.isArray(t) ? this.copy(t) : this.copy(bt(...arguments))
    }
    copy(t) {
        return this[0] = t[0], this[1] = t[1], this[2] = t[2], this
    }
}

function Mt(t, e, i) {
    return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
}

function Et(t, e, i) {
    return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
}

function At(t, e, i) {
    return t[0] = e[0] * i, t[1] = e[1] * i, t
}

function _t(t) {
    var e = t[0],
        i = t[1];
    return Math.sqrt(e * e + i * i)
}

function Tt(t, e) {
    return t[0] * e[1] - t[1] * e[0]
}
class Ft extends Array {
    constructor(t = 0, e = t) {
        return super(t, e), this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    set x(t) {
        this[0] = t
    }
    set y(t) {
        this[1] = t
    }
    set(t, e = t) {
        return t.length ? this.copy(t) : (function(t, e, i) {
            t[0] = e, t[1] = i
        }(this, t, e), this)
    }
    copy(t) {
        var e, i;
        return i = t, (e = this)[0] = i[0], e[1] = i[1], this
    }
    add(t, e) {
        return e ? Mt(this, t, e) : Mt(this, this, t), this
    }
    sub(t, e) {
        return e ? Et(this, t, e) : Et(this, this, t), this
    }
    multiply(t) {
        var e, i, s;
        return t.length ? (i = this, s = t, (e = this)[0] = i[0] * s[0], e[1] = i[1] * s[1]) : At(this, this, t), this
    }
    divide(t) {
        var e, i, s;
        return t.length ? (i = this, s = t, (e = this)[0] = i[0] / s[0], e[1] = i[1] / s[1]) : At(this, this, 1 / t), this
    }
    inverse(t = this) {
        var e, i;
        return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], this
    }
    len() {
        return _t(this)
    }
    distance(t) {
        return t ? (e = this, s = (i = t)[0] - e[0], r = i[1] - e[1], Math.sqrt(s * s + r * r)) : _t(this);
        var e, i, s, r
    }
    squaredLen() {
        return this.squaredDistance()
    }
    squaredDistance(t) {
        return t ? (e = this, s = (i = t)[0] - e[0], r = i[1] - e[1], s * s + r * r) : function(t) {
            var e = t[0],
                i = t[1];
            return e * e + i * i
        }(this);
        var e, i, s, r
    }
    negate(t = this) {
        var e, i;
        return i = t, (e = this)[0] = -i[0], e[1] = -i[1], this
    }
    cross(t, e) {
        return e ? Tt(t, e) : Tt(this, t)
    }
    scale(t) {
        return At(this, this, t), this
    }
    normalize() {
        var t, e, i, s, r;
        return t = this, i = (e = this)[0], s = e[1], (r = i * i + s * s) > 0 && (r = 1 / Math.sqrt(r)), t[0] = e[0] * r, t[1] = e[1] * r, this
    }
    dot(t) {
        return i = t, (e = this)[0] * i[0] + e[1] * i[1];
        var e, i
    }
    equals(t) {
        return i = t, (e = this)[0] === i[0] && e[1] === i[1];
        var e, i
    }
    applyMatrix3(t) {
        var e, i, s, r, n;
        return e = this, s = t, r = (i = this)[0], n = i[1], e[0] = s[0] * r + s[3] * n + s[6], e[1] = s[1] * r + s[4] * n + s[7], this
    }
    applyMatrix4(t) {
        return function(t, e, i) {
            let s = e[0],
                r = e[1];
            t[0] = i[0] * s + i[4] * r + i[12], t[1] = i[1] * s + i[5] * r + i[13]
        }(this, this, t), this
    }
    lerp(t, e) {
        return function(t, e, i, s) {
            var r = e[0],
                n = e[1];
            t[0] = r + s * (i[0] - r), t[1] = n + s * (i[1] - n)
        }(this, this, t, e), this
    }
    smoothLerp(t, e, i) {
        return function(t, e, i, s, r) {
            const n = Math.exp(-s * r);
            let a = e[0],
                o = e[1];
            t[0] = i[0] + (a - i[0]) * n, t[1] = i[1] + (o - i[1]) * n
        }(this, this, t, e, i), this
    }
    clone() {
        return new Ft(this[0], this[1])
    }
    fromArray(t, e = 0) {
        return this[0] = t[e], this[1] = t[e + 1], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t
    }
}
class Rt extends Array {
    constructor(t = 0, e = t, i = t, s = t) {
        return super(t, e, i, s), this
    }
    get x() {
        return this[0]
    }
    get y() {
        return this[1]
    }
    get z() {
        return this[2]
    }
    get w() {
        return this[3]
    }
    set x(t) {
        this[0] = t
    }
    set y(t) {
        this[1] = t
    }
    set z(t) {
        this[2] = t
    }
    set w(t) {
        this[3] = t
    }
    set(t, e = t, i = t, s = t) {
        return t.length ? this.copy(t) : (k(this, t, e, i, s), this)
    }
    copy(t) {
        return D(this, t), this
    }
    normalize() {
        return G(this, this), this
    }
    multiply(t) {
        var e, i, s;
        return i = this, s = t, (e = this)[0] = i[0] * s, e[1] = i[1] * s, e[2] = i[2] * s, e[3] = i[3] * s, this
    }
    dot(t) {
        return j(this, t)
    }
    fromArray(t, e = 0) {
        return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this
    }
    toArray(t = [], e = 0) {
        return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
    }
}
class St extends R {
    constructor(t, {
        width: e = 1,
        height: i = 1,
        widthSegments: s = 1,
        heightSegments: r = 1,
        attributes: n = {}
    } = {}) {
        const a = s,
            o = r,
            h = (a + 1) * (o + 1),
            l = a * o * 6,
            u = new Float32Array(3 * h),
            c = new Float32Array(3 * h),
            d = new Float32Array(2 * h),
            g = l > 65536 ? new Uint32Array(l) : new Uint16Array(l);
        St.buildPlane(u, c, d, g, e, i, 0, a, o), Object.assign(n, {
            position: {
                size: 3,
                data: u
            },
            normal: {
                size: 3,
                data: c
            },
            uv: {
                size: 2,
                data: d
            },
            index: {
                data: g
            }
        }), super(t, n)
    }
    static buildPlane(t, e, i, s, r, n, a, o, h, l = 0, u = 1, c = 2, d = 1, g = -1, p = 0, m = 0) {
        const f = p,
            x = r / o,
            w = n / h;
        for (let y = 0; y <= h; y++) {
            let b = y * w - n / 2;
            for (let n = 0; n <= o; n++, p++) {
                let w = n * x - r / 2;
                if (t[3 * p + l] = w * d, t[3 * p + u] = b * g, t[3 * p + c] = a / 2, e[3 * p + l] = 0, e[3 * p + u] = 0, e[3 * p + c] = a >= 0 ? 1 : -1, i[2 * p] = n / o, i[2 * p + 1] = 1 - y / h, y === h || n === o) continue;
                let v = f + n + y * (o + 1),
                    M = f + n + (y + 1) * (o + 1),
                    E = f + n + (y + 1) * (o + 1) + 1,
                    A = f + n + y * (o + 1) + 1;
                s[6 * m] = v, s[6 * m + 1] = M, s[6 * m + 2] = A, s[6 * m + 3] = M, s[6 * m + 4] = E, s[6 * m + 5] = A, m++
            }
        }
    }
}
class Pt extends R {
    constructor(t, {
        width: e = 1,
        height: i = 1,
        depth: s = 1,
        widthSegments: r = 1,
        heightSegments: n = 1,
        depthSegments: a = 1,
        attributes: o = {}
    } = {}) {
        const h = r,
            l = n,
            u = a,
            c = (h + 1) * (l + 1) * 2 + (h + 1) * (u + 1) * 2 + (l + 1) * (u + 1) * 2,
            d = 6 * (h * l * 2 + h * u * 2 + l * u * 2),
            g = new Float32Array(3 * c),
            p = new Float32Array(3 * c),
            m = new Float32Array(2 * c),
            f = c > 65536 ? new Uint32Array(d) : new Uint16Array(d);
        let x = 0,
            w = 0;
        St.buildPlane(g, p, m, f, s, i, e, u, l, 2, 1, 0, -1, -1, x, w), x += (u + 1) * (l + 1), w += u * l, St.buildPlane(g, p, m, f, s, i, -e, u, l, 2, 1, 0, 1, -1, x, w), x += (u + 1) * (l + 1), w += u * l, St.buildPlane(g, p, m, f, e, s, i, u, h, 0, 2, 1, 1, 1, x, w), x += (h + 1) * (u + 1), w += h * u, St.buildPlane(g, p, m, f, e, s, -i, u, h, 0, 2, 1, 1, -1, x, w), x += (h + 1) * (u + 1), w += h * u, St.buildPlane(g, p, m, f, e, i, -s, h, l, 0, 1, 2, -1, -1, x, w), x += (h + 1) * (l + 1), w += h * l, St.buildPlane(g, p, m, f, e, i, s, h, l, 0, 1, 2, 1, -1, x, w), Object.assign(o, {
            position: {
                size: 3,
                data: g
            },
            normal: {
                size: 3,
                data: p
            },
            uv: {
                size: 2,
                data: m
            },
            index: {
                data: f
            }
        }), super(t, o)
    }
}
class Lt extends R {
    constructor(t, {
        radius: e = .5,
        widthSegments: i = 16,
        heightSegments: s = Math.ceil(.5 * i),
        phiStart: r = 0,
        phiLength: n = 2 * Math.PI,
        thetaStart: a = 0,
        thetaLength: o = Math.PI,
        attributes: h = {}
    } = {}) {
        const l = i,
            u = s,
            c = r,
            d = n,
            g = a,
            p = o,
            m = (l + 1) * (u + 1),
            f = l * u * 6,
            x = new Float32Array(3 * m),
            w = new Float32Array(3 * m),
            y = new Float32Array(2 * m),
            b = m > 65536 ? new Uint32Array(f) : new Uint16Array(f);
        let v = 0,
            M = 0,
            A = 0,
            _ = g + p;
        const T = [];
        let F = new E;
        for (let E = 0; E <= u; E++) {
            let t = [],
                i = E / u;
            for (let s = 0; s <= l; s++, v++) {
                let r = s / l,
                    n = -e * Math.cos(c + r * d) * Math.sin(g + i * p),
                    a = e * Math.cos(g + i * p),
                    o = e * Math.sin(c + r * d) * Math.sin(g + i * p);
                x[3 * v] = n, x[3 * v + 1] = a, x[3 * v + 2] = o, F.set(n, a, o).normalize(), w[3 * v] = F.x, w[3 * v + 1] = F.y, w[3 * v + 2] = F.z, y[2 * v] = r, y[2 * v + 1] = 1 - i, t.push(M++)
            }
            T.push(t)
        }
        for (let E = 0; E < u; E++)
            for (let t = 0; t < l; t++) {
                let e = T[E][t + 1],
                    i = T[E][t],
                    s = T[E + 1][t],
                    r = T[E + 1][t + 1];
                (0 !== E || g > 0) && (b[3 * A] = e, b[3 * A + 1] = i, b[3 * A + 2] = r, A++), (E !== u - 1 || _ < Math.PI) && (b[3 * A] = i, b[3 * A + 1] = s, b[3 * A + 2] = r, A++)
            }
        Object.assign(h, {
            position: {
                size: 3,
                data: x
            },
            normal: {
                size: 3,
                data: w
            },
            uv: {
                size: 2,
                data: y
            },
            index: {
                data: b
            }
        }), super(t, h)
    }
}
class Ct extends R {
    constructor(t, {
        radiusTop: e = .5,
        radiusBottom: i = .5,
        height: s = 1,
        radialSegments: r = 8,
        heightSegments: n = 1,
        openEnded: a = !1,
        thetaStart: o = 0,
        thetaLength: h = 2 * Math.PI,
        attributes: l = {}
    } = {}) {
        const u = r,
            c = n,
            d = o,
            g = h,
            p = a ? 0 : i && e ? 2 : 1,
            m = (u + 1) * (c + 1 + p) + p,
            f = u * c * 6 + p * u * 3,
            x = new Float32Array(3 * m),
            w = new Float32Array(3 * m),
            y = new Float32Array(2 * m),
            b = m > 65536 ? new Uint32Array(f) : new Uint16Array(f);
        let v = 0,
            M = 0;
        const A = [];

        function _(t) {
            let r;
            const n = !0 === t ? e : i,
                a = !0 === t ? 1 : -1,
                o = v;
            for (x.set([0, .5 * s * a, 0], 3 * v), w.set([0, a, 0], 3 * v), y.set([.5, .5], 2 * v), v++, r = 0; r <= u; r++) {
                const t = r / u * g + d,
                    e = Math.cos(t),
                    i = Math.sin(t);
                x.set([n * i, .5 * s * a, n * e], 3 * v), w.set([0, a, 0], 3 * v), y.set([.5 * e + .5, .5 * i * a + .5], 2 * v), v++
            }
            for (r = 0; r < u; r++) {
                const e = o + r + 1;
                t ? b.set([e, e + 1, o], 3 * M) : b.set([e + 1, e, o], 3 * M), M++
            }
        }! function() {
            let t, r;
            const n = new E,
                a = (i - e) / s;
            for (r = 0; r <= c; r++) {
                const o = [],
                    h = r / c,
                    l = h * (i - e) + e;
                for (t = 0; t <= u; t++) {
                    const e = t / u,
                        i = e * g + d,
                        r = Math.sin(i),
                        c = Math.cos(i);
                    x.set([l * r, (.5 - h) * s, l * c], 3 * v), n.set(r, a, c).normalize(), w.set([n.x, n.y, n.z], 3 * v), y.set([e, 1 - h], 2 * v), o.push(v++)
                }
                A.push(o)
            }
            for (t = 0; t < u; t++)
                for (r = 0; r < c; r++) {
                    const e = A[r][t],
                        i = A[r + 1][t],
                        s = A[r + 1][t + 1],
                        n = A[r][t + 1];
                    b.set([e, i, n, i, s, n], 3 * M), M += 2
                }
        }(), a || (e && _(!0), i && _(!1)), Object.assign(l, {
            position: {
                size: 3,
                data: x
            },
            normal: {
                size: 3,
                data: w
            },
            uv: {
                size: 2,
                data: y
            },
            index: {
                data: b
            }
        }), super(t, l)
    }
}
class zt extends R {
    constructor(t, {
        attributes: e = {}
    } = {}) {
        Object.assign(e, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3])
            },
            uv: {
                size: 2,
                data: new Float32Array([0, 0, 2, 0, 0, 2])
            }
        }), super(t, e)
    }
}
class Ot extends R {
    constructor(t, {
        radius: e = .5,
        tube: i = .2,
        radialSegments: s = 8,
        tubularSegments: r = 6,
        arc: n = 2 * Math.PI,
        attributes: a = {}
    } = {}) {
        const o = (s + 1) * (r + 1),
            h = s * r * 6,
            l = new Float32Array(3 * o),
            u = new Float32Array(3 * o),
            c = new Float32Array(2 * o),
            d = o > 65536 ? new Uint32Array(h) : new Uint16Array(h),
            g = new E,
            p = new E,
            m = new E;
        let f = 0;
        for (let x = 0; x <= s; x++)
            for (let t = 0; t <= r; t++, f++) {
                const a = t / r * n,
                    o = x / s * Math.PI * 2;
                p.x = (e + i * Math.cos(o)) * Math.cos(a), p.y = (e + i * Math.cos(o)) * Math.sin(a), p.z = i * Math.sin(o), l.set([p.x, p.y, p.z], 3 * f), g.x = e * Math.cos(a), g.y = e * Math.sin(a), m.sub(p, g).normalize(), u.set([m.x, m.y, m.z], 3 * f), c.set([t / r, x / s], 2 * f)
            }
        f = 0;
        for (let x = 1; x <= s; x++)
            for (let t = 1; t <= r; t++, f++) {
                const e = (r + 1) * x + t - 1,
                    i = (r + 1) * (x - 1) + t - 1,
                    s = (r + 1) * (x - 1) + t,
                    n = (r + 1) * x + t;
                d.set([e, i, n, i, s, n], 6 * f)
            }
        Object.assign(a, {
            position: {
                size: 3,
                data: l
            },
            normal: {
                size: 3,
                data: u
            },
            uv: {
                size: 2,
                data: c
            },
            index: {
                data: d
            }
        }), super(t, a)
    }
}
const Bt = -1,
    It = 0,
    Ut = 1,
    Nt = 2,
    Dt = 3,
    kt = new E,
    Gt = new Ft,
    jt = new Ft;

function Vt(t, {
    element: e = document,
    enabled: i = !0,
    target: s = new E,
    ease: r = .25,
    inertia: n = .85,
    enableRotate: a = !0,
    rotateSpeed: o = .1,
    autoRotate: h = !1,
    autoRotateSpeed: l = 1,
    enableZoom: u = !0,
    zoomSpeed: c = 1,
    zoomStyle: d = "dolly",
    enablePan: g = !0,
    panSpeed: p = .1,
    minPolarAngle: m = 0,
    maxPolarAngle: f = Math.PI,
    minAzimuthAngle: x = -1 / 0,
    maxAzimuthAngle: w = 1 / 0,
    minDistance: y = 0,
    maxDistance: b = 1 / 0
} = {}) {
    this.enabled = i, this.target = s, this.zoomStyle = d, r = r || 1, n = n || 0, this.minDistance = y, this.maxDistance = b;
    const v = {
            radius: 1,
            phi: 0,
            theta: 0
        },
        M = {
            radius: 1,
            phi: 0,
            theta: 0
        },
        A = {
            radius: 1,
            phi: 0,
            theta: 0
        },
        _ = new E,
        T = new E;
    T.copy(t.position).sub(this.target), A.radius = M.radius = T.distance(), A.theta = M.theta = Math.atan2(T.x, T.z), A.phi = M.phi = Math.acos(Math.min(Math.max(T.y / M.radius, -1), 1)), this.offset = T, this.update = () => {
        h && function() {
            const t = 2 * Math.PI / 60 / 60 * l;
            v.theta -= t
        }(), M.radius *= v.radius, M.theta += v.theta, M.phi += v.phi, M.theta = Math.max(x, Math.min(w, M.theta)), M.phi = Math.max(m, Math.min(f, M.phi)), M.radius = Math.max(this.minDistance, Math.min(this.maxDistance, M.radius)), A.phi += (M.phi - A.phi) * r, A.theta += (M.theta - A.theta) * r, A.radius += (M.radius - A.radius) * r, this.target.add(_);
        let e = A.radius * Math.sin(Math.max(1e-6, A.phi));
        T.x = e * Math.sin(A.theta), T.y = A.radius * Math.cos(A.phi), T.z = e * Math.cos(A.theta), t.position.copy(this.target).add(T), t.lookAt(this.target), v.theta *= n, v.phi *= n, _.multiply(n), v.radius = 1
    }, this.forcePosition = () => {
        T.copy(t.position).sub(this.target), A.radius = M.radius = T.distance(), A.theta = M.theta = Math.atan2(T.x, T.z), A.phi = M.phi = Math.acos(Math.min(Math.max(T.y / M.radius, -1), 1)), t.lookAt(this.target)
    };
    const F = new Ft,
        R = new Ft,
        S = new Ft;
    let P = Bt;

    function L() {
        return Math.pow(.95, c)
    }
    this.mouseButtons = {
        ORBIT: 0,
        ZOOM: 1,
        PAN: 2
    };
    const C = (i, s) => {
            let r = e === document ? document.body : e;
            kt.copy(t.position).sub(this.target);
            let n = kt.distance();
            var a, o;
            n *= Math.tan((t.fov || 45) / 2 * Math.PI / 180), a = 2 * i * n / r.clientHeight, o = t.matrix, kt.set(o[0], o[1], o[2]), kt.multiply(-a), _.add(kt),
                function(t, e) {
                    kt.set(e[4], e[5], e[6]), kt.multiply(t), _.add(kt)
                }(2 * s * n / r.clientHeight, t.matrix)
        },
        z = e => {
            "dolly" === this.zoomStyle ? v.radius /= e : (t.fov /= e, "orthographic" === t.type ? t.orthographic() : t.perspective())
        };

    function O(t, i) {
        Gt.set(t, i), jt.sub(Gt, F).multiply(o);
        let s = e === document ? document.body : e;
        v.theta -= 2 * Math.PI * jt.x / s.clientHeight, v.phi -= 2 * Math.PI * jt.y / s.clientHeight, F.copy(Gt)
    }

    function B(t, e) {
        Gt.set(t, e), jt.sub(Gt, R).multiply(p), C(jt.x, jt.y), R.copy(Gt)
    }
    const I = t => {
            if (this.enabled) {
                switch (t.button) {
                    case this.mouseButtons.ORBIT:
                        if (!1 === a) return;
                        F.set(t.clientX, t.clientY), P = It;
                        break;
                    case this.mouseButtons.ZOOM:
                        if (!1 === u) return;
                        S.set(t.clientX, t.clientY), P = Ut;
                        break;
                    case this.mouseButtons.PAN:
                        if (!1 === g) return;
                        R.set(t.clientX, t.clientY), P = Nt
                }
                P !== Bt && (window.addEventListener("mousemove", U, !1), window.addEventListener("mouseup", N, !1))
            }
        },
        U = t => {
            if (this.enabled) switch (P) {
                case It:
                    if (!1 === a) return;
                    O(t.clientX, t.clientY);
                    break;
                case Ut:
                    if (!1 === u) return;
                    ! function(t) {
                        Gt.set(t.clientX, t.clientY), jt.sub(Gt, S), jt.y > 0 ? z(L()) : jt.y < 0 && z(1 / L()), S.copy(Gt)
                    }(t);
                    break;
                case Nt:
                    if (!1 === g) return;
                    B(t.clientX, t.clientY)
            }
        },
        N = () => {
            window.removeEventListener("mousemove", U, !1), window.removeEventListener("mouseup", N, !1), P = Bt
        },
        D = t => {
            this.enabled && u && (P === Bt || P === It) && (t.stopPropagation(), t.preventDefault(), t.deltaY < 0 ? z(1 / L()) : t.deltaY > 0 && z(L()))
        },
        k = t => {
            if (this.enabled) switch (t.preventDefault(), t.touches.length) {
                case 1:
                    if (!1 === a) return;
                    F.set(t.touches[0].pageX, t.touches[0].pageY), P = It;
                    break;
                case 2:
                    if (!1 === u && !1 === g) return;
                    ! function(t) {
                        if (u) {
                            let e = t.touches[0].pageX - t.touches[1].pageX,
                                i = t.touches[0].pageY - t.touches[1].pageY,
                                s = Math.sqrt(e * e + i * i);
                            S.set(0, s)
                        }
                        if (g) {
                            let e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
                                i = .5 * (t.touches[0].pageY + t.touches[1].pageY);
                            R.set(e, i)
                        }
                    }(t), P = Dt;
                    break;
                default:
                    P = Bt
            }
        },
        G = t => {
            if (this.enabled) switch (t.preventDefault(), t.stopPropagation(), t.touches.length) {
                case 1:
                    if (!1 === a) return;
                    O(t.touches[0].pageX, t.touches[0].pageY);
                    break;
                case 2:
                    if (!1 === u && !1 === g) return;
                    ! function(t) {
                        if (u) {
                            let e = t.touches[0].pageX - t.touches[1].pageX,
                                i = t.touches[0].pageY - t.touches[1].pageY,
                                s = Math.sqrt(e * e + i * i);
                            Gt.set(0, s), jt.set(0, Math.pow(Gt.y / S.y, c)), z(jt.y), S.copy(Gt)
                        }
                        g && B(.5 * (t.touches[0].pageX + t.touches[1].pageX), .5 * (t.touches[0].pageY + t.touches[1].pageY))
                    }(t);
                    break;
                default:
                    P = Bt
            }
        },
        j = () => {
            this.enabled && (P = Bt)
        },
        V = t => {
            this.enabled && t.preventDefault()
        };
    this.remove = function() {
        e.removeEventListener("contextmenu", V), e.removeEventListener("mousedown", I), e.removeEventListener("wheel", D), e.removeEventListener("touchstart", k), e.removeEventListener("touchend", j), e.removeEventListener("touchmove", G), window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", N)
    }, e.addEventListener("contextmenu", V, !1), e.addEventListener("mousedown", I, !1), e.addEventListener("wheel", D, {
        passive: !1
    }), e.addEventListener("touchstart", k, {
        passive: !1
    }), e.addEventListener("touchend", j, !1), e.addEventListener("touchmove", G, {
        passive: !1
    })
}
const Xt = new Ft,
    Wt = new Ft,
    qt = new Ft,
    Yt = new E,
    Ht = new E,
    Kt = new E,
    Zt = new E,
    $t = new E,
    Qt = new E,
    Jt = new E,
    te = new E,
    ee = new E,
    ie = new E,
    se = new E,
    re = new et;
class ne {
    constructor() {
        this.origin = new E, this.direction = new E
    }
    castMouse(t, e = [0, 0]) {
        if ("orthographic" === t.type) {
            const {
                left: i,
                right: s,
                bottom: r,
                top: n,
                zoom: a
            } = t, o = i / a + (s - i) / a * (.5 * e[0] + .5), h = r / a + (n - r) / a * (.5 * e[1] + .5);
            this.origin.set(o, h, 0), this.origin.applyMatrix4(t.worldMatrix), this.direction.x = -t.worldMatrix[8], this.direction.y = -t.worldMatrix[9], this.direction.z = -t.worldMatrix[10]
        } else t.worldMatrix.getTranslation(this.origin), this.direction.set(e[0], e[1], .5), t.unproject(this.direction), this.direction.sub(this.origin).normalize()
    }
    intersectBounds(t, {
        maxDistance: e,
        output: i = []
    } = {}) {
        Array.isArray(t) || (t = [t]);
        const s = re,
            r = Yt,
            n = Ht,
            a = i;
        return a.length = 0, t.forEach((t => {
            t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere();
            const i = t.geometry.bounds;
            let o;
            if (s.inverse(t.worldMatrix), e && (n.copy(this.direction).scaleRotateMatrix4(s), o = e * n.len()), r.copy(this.origin).applyMatrix4(s), n.copy(this.direction).transformDirection(s), e && r.distance(i.center) - i.radius > o) return;
            let h = 0;
            if ("sphere" === t.geometry.raycast) {
                if (r.distance(i.center) > i.radius && (h = this.intersectSphere(i, r, n), !h)) return
            } else if ((r.x < i.min.x || r.x > i.max.x || r.y < i.min.y || r.y > i.max.y || r.z < i.min.z || r.z > i.max.z) && (h = this.intersectBox(i, r, n), !h)) return;
            e && h > o || (t.hit || (t.hit = {
                localPoint: new E,
                point: new E
            }), t.hit.localPoint.copy(n).multiply(h).add(r), t.hit.point.copy(t.hit.localPoint).applyMatrix4(t.worldMatrix), t.hit.distance = t.hit.point.distance(this.origin), a.push(t))
        })), a.sort(((t, e) => t.hit.distance - e.hit.distance)), a
    }
    intersectMeshes(t, {
        cullFace: e = !0,
        maxDistance: i,
        includeUV: s = !0,
        includeNormal: r = !0,
        output: n = []
    } = {}) {
        const a = this.intersectBounds(t, {
            maxDistance: i,
            output: n
        });
        if (!a.length) return a;
        const o = re,
            h = Yt,
            l = Ht,
            u = Kt,
            c = Zt,
            d = $t,
            g = Qt,
            p = Jt,
            m = te,
            f = Xt,
            x = Wt,
            w = qt;
        for (let y = a.length - 1; y >= 0; y--) {
            const t = a[y];
            let n;
            o.inverse(t.worldMatrix), i && (l.copy(this.direction).scaleRotateMatrix4(o), n = i * l.len()), h.copy(this.origin).applyMatrix4(o), l.copy(this.direction).transformDirection(o);
            let b, v, M, A = 0;
            const _ = t.geometry,
                T = _.attributes,
                F = T.index,
                R = T.position,
                S = Math.max(0, _.drawRange.start),
                P = Math.min(F ? F.count : R.count, _.drawRange.start + _.drawRange.count),
                L = R.size;
            for (let s = S; s < P; s += 3) {
                const t = F ? F.data[s] : s,
                    r = F ? F.data[s + 1] : s + 1,
                    a = F ? F.data[s + 2] : s + 2;
                u.fromArray(R.data, t * L), c.fromArray(R.data, r * L), d.fromArray(R.data, a * L);
                const o = this.intersectTriangle(u, c, d, e, h, l, p);
                o && (i && o > n || (!A || o < A) && (A = o, b = t, v = r, M = a, g.copy(p)))
            }
            A || a.splice(y, 1), t.hit.localPoint.copy(l).multiply(A).add(h), t.hit.point.copy(t.hit.localPoint).applyMatrix4(t.worldMatrix), t.hit.distance = t.hit.point.distance(this.origin), t.hit.faceNormal || (t.hit.localFaceNormal = new E, t.hit.faceNormal = new E, t.hit.uv = new Ft, t.hit.localNormal = new E, t.hit.normal = new E), t.hit.localFaceNormal.copy(g), t.hit.faceNormal.copy(t.hit.localFaceNormal).transformDirection(t.worldMatrix), (s || r) && (u.fromArray(R.data, 3 * b), c.fromArray(R.data, 3 * v), d.fromArray(R.data, 3 * M), this.getBarycoord(t.hit.localPoint, u, c, d, m)), s && T.uv && (f.fromArray(T.uv.data, 2 * b), x.fromArray(T.uv.data, 2 * v), w.fromArray(T.uv.data, 2 * M), t.hit.uv.set(f.x * m.x + x.x * m.y + w.x * m.z, f.y * m.x + x.y * m.y + w.y * m.z)), r && T.normal && (u.fromArray(T.normal.data, 3 * b), c.fromArray(T.normal.data, 3 * v), d.fromArray(T.normal.data, 3 * M), t.hit.localNormal.set(u.x * m.x + c.x * m.y + d.x * m.z, u.y * m.x + c.y * m.y + d.y * m.z, u.z * m.x + c.z * m.y + d.z * m.z), t.hit.normal.copy(t.hit.localNormal).transformDirection(t.worldMatrix))
        }
        return a.sort(((t, e) => t.hit.distance - e.hit.distance)), a
    }
    intersectPlane(t, e = this.origin, i = this.direction) {
        const s = Yt;
        s.sub(t.origin, e);
        const r = s.dot(t.normal),
            n = i.dot(t.normal);
        if (0 == n) return 0;
        const a = r / n;
        return a <= 0 ? 0 : e.add(i.scale(a))
    }
    intersectSphere(t, e = this.origin, i = this.direction) {
        const s = Kt;
        s.sub(t.center, e);
        const r = s.dot(i),
            n = s.dot(s) - r * r,
            a = t.radius * t.radius;
        if (n > a) return 0;
        const o = Math.sqrt(a - n),
            h = r - o,
            l = r + o;
        return h < 0 && l < 0 ? 0 : h < 0 ? l : h
    }
    intersectBox(t, e = this.origin, i = this.direction) {
        let s, r, n, a, o, h;
        const l = 1 / i.x,
            u = 1 / i.y,
            c = 1 / i.z,
            d = t.min,
            g = t.max;
        return s = ((l >= 0 ? d.x : g.x) - e.x) * l, r = ((l >= 0 ? g.x : d.x) - e.x) * l, n = ((u >= 0 ? d.y : g.y) - e.y) * u, a = ((u >= 0 ? g.y : d.y) - e.y) * u, s > a || n > r ? 0 : (n > s && (s = n), a < r && (r = a), o = ((c >= 0 ? d.z : g.z) - e.z) * c, h = ((c >= 0 ? g.z : d.z) - e.z) * c, s > h || o > r ? 0 : (o > s && (s = o), h < r && (r = h), r < 0 ? 0 : s >= 0 ? s : r))
    }
    intersectTriangle(t, e, i, s = !0, r = this.origin, n = this.direction, a = Jt) {
        const o = te,
            h = ee,
            l = ie;
        o.sub(e, t), h.sub(i, t), a.cross(o, h);
        let u, c = n.dot(a);
        if (!c) return 0;
        if (c > 0) {
            if (s) return 0;
            u = 1
        } else u = -1, c = -c;
        l.sub(r, t);
        let d = u * n.dot(h.cross(l, h));
        if (d < 0) return 0;
        let g = u * n.dot(o.cross(l));
        if (g < 0) return 0;
        if (d + g > c) return 0;
        let p = -u * l.dot(a);
        return p < 0 ? 0 : p / c
    }
    getBarycoord(t, e, i, s, r = te) {
        const n = ee,
            a = ie,
            o = se;
        n.sub(s, e), a.sub(i, e), o.sub(t, e);
        const h = n.dot(n),
            l = n.dot(a),
            u = n.dot(o),
            c = a.dot(a),
            d = a.dot(o),
            g = h * c - l * l;
        if (0 === g) return r.set(-2, -1, -1);
        const p = 1 / g,
            m = (c * u - l * d) * p,
            f = (h * d - l * u) * p;
        return r.set(1 - m - f, f, m)
    }
}
const ae = "catmullrom",
    oe = "cubicbezier",
    he = "quadraticbezier",
    le = new E,
    ue = new E,
    ce = new E,
    de = new E;

function ge(t, e, i, s) {
    const r = 1 - t;
    le.copy(e).scale(a(r, 2)), ue.copy(i).scale(2 * r * t), ce.copy(s).scale(a(t, 2));
    const n = new E;
    return n.add(le, ue).add(ce), n
}

function pe(t, e, i, s, r) {
    const n = 1 - t;
    le.copy(e).scale(a(n, 3)), ue.copy(i).scale(3 * a(n, 2) * t), ce.copy(s).scale(3 * n * a(t, 2)), de.copy(r).scale(a(t, 3));
    const o = new E;
    return o.add(le, ue).add(ce).add(de), o
}
class me {
    constructor({
        points: t = [new E(0, 0, 0), new E(0, 1, 0), new E(1, 1, 0), new E(1, 0, 0)],
        divisions: e = 12,
        type: i = ae
    } = {}) {
        this.points = t, this.divisions = e, this.type = i
    }
    _getQuadraticBezierPoints(t = this.divisions) {
        const e = [],
            i = this.points.length;
        if (i < 3) return console.warn("Not enough points provided."), [];
        const s = this.points[0];
        let r = this.points[1],
            n = this.points[2];
        for (let o = 0; o <= t; o++) {
            const i = ge(o / t, s, r, n);
            e.push(i)
        }
        let a = 3;
        for (; i - a > 0;) {
            s.copy(n), r = n.scale(2).sub(r), n = this.points[a];
            for (let i = 1; i <= t; i++) {
                const a = ge(i / t, s, r, n);
                e.push(a)
            }
            a++
        }
        return e
    }
    _getCubicBezierPoints(t = this.divisions) {
        const e = [],
            i = this.points.length;
        if (i < 4) return console.warn("Not enough points provided."), [];
        let s = this.points[0],
            r = this.points[1],
            n = this.points[2],
            a = this.points[3];
        for (let h = 0; h <= t; h++) {
            const i = pe(h / t, s, r, n, a);
            e.push(i)
        }
        let o = 4;
        for (; i - o > 1;) {
            s.copy(a), r = a.scale(2).sub(n), n = this.points[o], a = this.points[o + 1];
            for (let i = 1; i <= t; i++) {
                const o = pe(i / t, s, r, n, a);
                e.push(o)
            }
            o += 2
        }
        return e
    }
    _getCatmullRomPoints(t = this.divisions, e = .168, i = .168) {
        const s = [];
        if (this.points.length <= 2) return this.points;
        let r;
        return this.points.forEach(((n, a) => {
            if (0 === a) r = n;
            else {
                const [o, h] = function(t, e, i = .168, s = .168) {
                    if (e < 1 ? le.sub(t[1], t[0]).scale(i).add(t[0]) : le.sub(t[e + 1], t[e - 1]).scale(i).add(t[e]), e > t.length - 3) {
                        const e = t.length - 1;
                        ue.sub(t[e - 1], t[e]).scale(s).add(t[e])
                    } else ue.sub(t[e], t[e + 2]).scale(s).add(t[e + 1]);
                    return [le.clone(), ue.clone()]
                }(this.points, a - 1, e, i), l = new me({
                    points: [r, o, h, n],
                    type: oe
                });
                s.pop(), s.push(...l.getPoints(t)), r = n
            }
        })), s
    }
    getPoints(t = this.divisions, e = .168, i = .168) {
        const s = this.type;
        return s === he ? this._getQuadraticBezierPoints(t) : s === oe ? this._getCubicBezierPoints(t) : s === ae ? this._getCatmullRomPoints(t, e, i) : this.points
    }
}
me.CATMULLROM = ae, me.CUBICBEZIER = oe, me.QUADRATICBEZIER = he;
class fe {
    constructor() {
        this._len = -1, this.tiltStart = 0, this.tiltEnd = 0
    }
    getLength() {
        return this._len < 0 && this.updateLength(), this._len
    }
    getTiltAt(t) {
        return this.tiltStart * (1 - t) * this.tiltEnd * t
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(t) {
        return this._len = t._len, this.tiltStart = t.tiltStart, this.tiltEnd = t.tiltEnd, this
    }
}
const xe = [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213],
    we = [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872],
    ye = t => 180 * t / Math.PI,
    be = (t, e, i) => Math.max(e, Math.min(t, i));

function ve(t, e, i, s) {
    const r = e[0],
        n = e[1],
        a = e[2],
        o = 1 - s;
    return t[0] = r * r * o + s, t[1] = n * r * o + a * i, t[2] = a * r * o - n * i, t[3] = 0, t[4] = r * n * o - a * i, t[5] = n * n * o + s, t[6] = a * n * o + r * i, t[7] = 0, t[8] = r * a * o + n * i, t[9] = n * a * o - r * i, t[10] = a * a * o + s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
}

function Me(t, e, i, s = e, r = i) {
    const n = Math.sin(t),
        a = Math.cos(t),
        o = a * e.x + n * i.x,
        h = a * e.y + n * i.y,
        l = a * e.z + n * i.z,
        u = a * i.x - n * e.x,
        c = a * i.y - n * e.y,
        d = a * i.z - n * e.z;
    s.set(o, h, l), r.set(u, c, d)
}
const Ee = new E;

function Ae(t, e, i, s, r) {
    const n = 1 - t;
    return n * n * n * e + 3 * n * n * t * i + 3 * n * t * t * s + t * t * t * r
}

function _e(t, e, i, s, r) {
    const n = 1 - t;
    return 3 * n * n * (i - e) + 6 * n * t * (s - i) + 3 * t * t * (r - s)
}
class Te extends fe {
    constructor(t, e, i, s, r = 0, n = 0) {
        super(), this.p0 = t, this.p1 = e, this.p2 = i, this.p3 = s, this.tiltStart = r, this.tiltEnd = n, this._len = -1
    }
    updateLength() {
        const t = xe.length;
        let e = 0;
        for (let i, s = 0; s < t; s++) i = .5 * xe[s] + .5, e += we[s] * this.getDerivativeAt(i, Ee).len();
        this._len = .5 * e
    }
    getPointAt(t, e = new E) {
        return e.x = Ae(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x), e.y = Ae(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y), e.z = Ae(t, this.p0.z, this.p1.z, this.p2.z, this.p3.z), e
    }
    getDerivativeAt(t, e = new E) {
        return e.x = _e(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x), e.y = _e(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y), e.z = _e(t, this.p0.z, this.p1.z, this.p2.z, this.p3.z), e
    }
    getTangentAt(t, e = new E) {
        return this.getDerivativeAt(t, e).normalize()
    }
    lastPoint() {
        return this.p3
    }
}
const Fe = new E;

function Re(t, e, i, s) {
    const r = 1 - t;
    return r * r * e + 2 * r * t * i + t * t * s
}

function Se(t, e, i, s) {
    return 2 * (1 - t) * (i - e) + 2 * t * (s - i)
}
class Pe extends fe {
    constructor(t, e, i, s = 0, r = 0) {
        super(), this.p0 = t, this.p1 = e, this.p2 = i, this.tiltStart = s, this.tiltEnd = r, this._len = -1
    }
    updateLength() {
        const t = xe.length;
        let e = 0;
        for (let i, s = 0; s < t; s++) i = .5 * xe[s] + .5, e += we[s] * this.getDerivativeAt(i, Fe).len();
        this._len = .5 * e
    }
    getPointAt(t, e = new E) {
        return e.x = Re(t, this.p0.x, this.p1.x, this.p2.x), e.y = Re(t, this.p0.y, this.p1.y, this.p2.y), e.z = Re(t, this.p0.z, this.p1.z, this.p2.z), e
    }
    getDerivativeAt(t, e = new E) {
        return e.x = Se(t, this.p0.x, this.p1.x, this.p2.x), e.y = Se(t, this.p0.y, this.p1.y, this.p2.y), e.z = Se(t, this.p0.z, this.p1.z, this.p2.z), e
    }
    getTangentAt(t, e = new E) {
        return this.getDerivativeAt(t, e).normalize()
    }
    lastPoint() {
        return this.p2
    }
}
const Le = new E;
class Ce extends fe {
    constructor(t, e, i = 0, s = 0) {
        super(), this.p0 = t, this.p1 = e, this.tiltStart = i, this.tiltEnd = s, this._len = -1
    }
    updateLength() {
        this._len = Le.sub(this.p1, this.p0).len()
    }
    getPointAt(t, e = new E) {
        return v(e, this.p0, this.p1, t), e
    }
    getTangentAt(t, e = new E) {
        return e.sub(this.p1, this.p0).normalize()
    }
    lastPoint() {
        return this.p1
    }
}
const ze = new E,
    Oe = new et;

function Be(t, e) {
    if (null == this[t]) throw new Error(e)
}
class Ie {
    constructor() {
        this._segments = [], this._lengthOffsets = null, this._totalLength = -1, this._lastPoint = null, this._lastTilt = 0, this._assertLastPoint = Be.bind(this, "_lastPoint", "Can`t get previous point of curve. Did you forget moveTo command?"), this.tiltFunction = null
    }
    moveTo(t, e = 0) {
        this._totalLength = -1, this._lastPoint = t, this._lastTilt = e
    }
    bezierCurveTo(t, e, i, s = 0) {
        this._assertLastPoint();
        const r = new Te(this._lastPoint, t, e, i, this._lastTilt, s);
        return this.addSegment(r), this
    }
    quadraticCurveTo(t, e, i = 0) {
        this._assertLastPoint();
        const s = new Pe(this._lastPoint, t, e, this._lastTilt, i);
        return this.addSegment(s), this
    }
    lineTo(t, e = 0) {
        this._assertLastPoint();
        const i = new Ce(this._lastPoint, t, this._lastTilt, e);
        return this.addSegment(i), this
    }
    addSegment(t) {
        return this._totalLength = -1, this._lastPoint = t.lastPoint(), this._lastTilt = t.tiltEnd, this._segments.push(t), this
    }
    getSegments() {
        return this._segments
    }
    updateLength() {
        const t = this._segments.length;
        this._lengthOffsets = new Array(t);
        let e = 0;
        for (let i = 0; i < t; i++) this._lengthOffsets[i] = e, e += this._segments[i].getLength();
        this._totalLength = e
    }
    getLength() {
        return this._totalLength < 0 && this.updateLength(), this._totalLength
    }
    findSegmentIndexAtLength(t) {
        const e = this.getLength();
        if (t <= 0) return [0, 0];
        if (t >= e) return [this._segments.length - 1, 1];
        let i, s = 0,
            r = this._lengthOffsets.length - 1,
            n = -1;
        for (; s <= r;) {
            if (i = Math.ceil((s + r) / 2), 0 === i || i === this._lengthOffsets.length - 1 || t >= this._lengthOffsets[i] && t < this._lengthOffsets[i + 1]) {
                n = i;
                break
            }
            t < this._lengthOffsets[i] ? r = i - 1 : s = i + 1
        }
        const a = this._segments[n].getLength();
        return [n, (t - this._lengthOffsets[n]) / a]
    }
    getPointAtLength(t, e = new E) {
        const [i, s] = this.findSegmentIndexAtLength(t);
        return this._segments[i].getPointAt(s, e)
    }
    getPointAt(t, e = new E) {
        const i = this.getLength();
        return this.getPointAtLength(t * i, e)
    }
    getTangentAtLength(t, e = new E) {
        const [i, s] = this.findSegmentIndexAtLength(t);
        return this._segments[i].getTangentAt(s, e)
    }
    getTangentAt(t, e = new E) {
        const i = this.getLength();
        return this.getTangentAtLength(t * i, e)
    }
    getTiltAtLength(t) {
        const [e, i] = this.findSegmentIndexAtLength(t);
        return this._segments[e].getTiltAt(i)
    }
    getTiltAt(t) {
        const e = this.getLength();
        return this.getTiltAtLength(t * e)
    }
    getPoints(t = 64) {
        const e = new Array(t + 1);
        for (let i = 0; i <= t; i++) e[i] = this.getPointAt(i / t);
        return e
    }
    computeFrenetFrames(t = 64, e = !1) {
        var i;
        const s = new Array(t + 1),
            r = new Array(t + 1),
            n = null != (i = this.tiltFunction) ? i : t => t,
            a = this.getLength();
        for (let g = 0; g <= t; g++) {
            const [e, i] = this.findSegmentIndexAtLength(a * g / t), o = this._segments[e];
            s[g] = o.getTangentAt(i), r[g] = n(o.getTiltAt(i), g / t, this)
        }
        const o = Math.abs(s[0].x),
            h = Math.abs(s[0].y),
            l = Math.abs(s[0].z),
            u = new E;
        o < h && o < l ? u.set(1, 0, 0) : h < o && h < l ? u.set(0, 1, 0) : u.set(0, 0, 1);
        const c = new Array(t + 1),
            d = new Array(t + 1);
        c[0] = new E, d[0] = new E, ze.cross(s[0], u).normalize(), c[0].cross(s[0], ze), d[0].cross(s[0], c[0]);
        for (let g = 1; g < s.length; g++) {
            c[g] = c[g - 1].clone(), d[g] = new E, ze.cross(s[g - 1], s[g]);
            const t = ze.len();
            if (t > Number.EPSILON) {
                ze.scale(1 / t);
                const e = be(s[g - 1].dot(s[g]), -1, 1),
                    i = be(t, -1, 1);
                ve(Oe, ze, i, e), c[g].applyMatrix4(Oe)
            }
            d[g].cross(s[g], c[g])
        }
        for (let g = 0; g < r.length; g++) Me(r[g] * Math.PI / 180, c[g], d[g]);
        if (!0 === e) {
            const t = c[c.length - 1];
            let e = Math.acos(be(c[0].dot(t), -1, 1)) / (c.length - 1);
            s[0].dot(ze.cross(c[0], t)) > 0 && (e = -e);
            for (let i = 1; i < c.length - 1; i++) {
                const t = e * i;
                Me(t, c[i], d[i]), r[i] += ye(t)
            }
            c[c.length - 1] = c[0].clone(), d[d.length - 1] = d[0].clone()
        }
        return {
            tangents: s,
            normals: c,
            binormals: d,
            tilts: r
        }
    }
}
const Ue = new E,
    Ne = new E,
    De = new Ft,
    ke = new E;
class Ge extends R {
    constructor(t, {
        path: e,
        radius: i = 1,
        tubularSegments: s = 64,
        radialSegments: r = 8,
        closed: n = !1,
        attributes: a = {}
    } = {}) {
        super(t, a), this.path = e, this.radius = i, this.tubularSegments = s, this.radialSegments = r, this.closed = n, this.frenetFrames = e.computeFrenetFrames(s, n);
        const o = (s + 1) * (r + 1),
            h = s * r * 6;
        this.positions = new Float32Array(3 * o), this.normals = new Float32Array(3 * o), this.uvs = new Float32Array(2 * o), this.indices = o > 65536 ? new Uint32Array(h) : new Uint16Array(h), this._generateAttributes(), this._generateIndices(), this.addAttribute("position", {
            size: 3,
            data: this.positions
        }), this.addAttribute("normal", {
            size: 3,
            data: this.normals
        }), this.addAttribute("uv", {
            size: 2,
            data: this.uvs
        }), this.setIndex({
            data: this.indices
        })
    }
    _generateAttributes() {
        for (let t = 0; t <= this.tubularSegments; t++) {
            let e = t;
            t === this.tubularSegments && (e = this.closed ? 0 : this.tubularSegments), this.path.getPointAt(e / this.tubularSegments, ke);
            const i = this.frenetFrames.normals[e],
                s = this.frenetFrames.binormals[e];
            for (let r = 0; r <= this.radialSegments; r++) {
                const e = r / this.radialSegments * Math.PI * 2,
                    n = Math.sin(e),
                    a = -Math.cos(e),
                    o = t * (this.radialSegments + 1) + r;
                Ne.x = a * i.x + n * s.x, Ne.y = a * i.y + n * s.y, Ne.z = a * i.z + n * s.z, this.normals.set(Ne, 3 * o), Ue.x = ke.x + this.radius * Ne.x, Ue.y = ke.y + this.radius * Ne.y, Ue.z = ke.z + this.radius * Ne.z, this.positions.set(Ue, 3 * o), De.x = t / this.tubularSegments, De.y = r / this.radialSegments, this.uvs.set(De, 2 * o)
            }
        }
    }
    _generateIndices() {
        for (let t = 1; t <= this.tubularSegments; t++)
            for (let e = 1; e <= this.radialSegments; e++) {
                const i = (this.radialSegments + 1) * (t - 1) + (e - 1),
                    s = (this.radialSegments + 1) * t + (e - 1),
                    r = (this.radialSegments + 1) * t + e,
                    n = (this.radialSegments + 1) * (t - 1) + e,
                    a = (t - 1) * this.radialSegments + (e - 1);
                this.indices.set([i, s, n, s, r, n], 6 * a)
            }
    }
}
class je {
    constructor(t, {
        width: e,
        height: i,
        dpr: s,
        wrapS: r = t.CLAMP_TO_EDGE,
        wrapT: n = t.CLAMP_TO_EDGE,
        minFilter: a = t.LINEAR,
        magFilter: o = t.LINEAR,
        geometry: h = new zt(t),
        targetOnly: l = null,
        depth: u = !0
    } = {}) {
        this.gl = t, this.passes = [], this.geometry = h, this.uniform = {
            value: null
        }, this.targetOnly = l, s && (this.dpr = s), e && (this.width = e), i && (this.height = i), s = this.dpr || this.gl.renderer.dpr, this.resolutionWidth = Math.floor(this.width || this.gl.renderer.width * s), this.resolutionHeight = Math.floor(this.height || this.gl.renderer.height * s);
        let c = {
            dpr: this.dpr,
            width: this.resolutionWidth,
            height: this.resolutionHeight,
            wrapS: r,
            wrapT: n,
            minFilter: a,
            magFilter: o,
            depth: u
        };
        const d = this.fbo = {
            read: new xt(this.gl, c),
            write: new xt(this.gl, c),
            swap: () => {
                let t = d.read;
                d.read = d.write, d.write = t
            }
        }
    }
    addPass({
        vertex: t = Ve,
        fragment: e = Xe,
        uniforms: i = {},
        textureUniform: s = "tMap",
        enabled: r = !0
    } = {}) {
        i[s] = {
            value: this.fbo.read.texture
        };
        const n = new L(this.gl, {
                vertex: t,
                fragment: e,
                uniforms: i
            }),
            a = {
                mesh: new dt(this.gl, {
                    geometry: this.geometry,
                    program: n
                }),
                program: n,
                uniforms: i,
                enabled: r,
                textureUniform: s
            };
        return this.passes.push(a), a
    }
    resize({
        width: t,
        height: e,
        dpr: i
    } = {}) {
        i && (this.dpr = i), t && (this.width = t), e && (this.height = e), i = this.dpr || this.gl.renderer.dpr, this.resolutionWidth = Math.floor(this.width || this.gl.renderer.width * i), this.resolutionHeight = Math.floor(this.height || this.gl.renderer.height * i), this.fbo.read.setSize(this.resolutionWidth, this.resolutionHeight), this.fbo.write.setSize(this.resolutionWidth, this.resolutionHeight)
    }
    render({
        scene: t,
        camera: e,
        texture: i,
        target: s = null,
        update: r = !0,
        sort: n = !0,
        frustumCull: a = !0,
        beforePostCallbacks: o
    }) {
        const h = this.passes.filter((t => t.enabled));
        i || (this.gl.renderer.render({
            scene: t,
            camera: e,
            target: h.length || !s && this.targetOnly ? this.fbo.write : s,
            update: r,
            sort: n,
            frustumCull: a
        }), this.fbo.swap(), o && o.forEach((t => t && t()))), h.forEach(((t, e) => {
            t.mesh.program.uniforms[t.textureUniform].value = !e && i ? i : this.fbo.read.texture, this.gl.renderer.render({
                scene: t.mesh,
                target: e !== h.length - 1 || !s && this.targetOnly ? this.fbo.write : s,
                clear: !0
            }), this.fbo.swap()
        })), this.uniform.value = this.fbo.read.texture
    }
}
const Ve = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
    Xe = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n",
    We = new E,
    qe = new H,
    Ye = new E,
    He = new E,
    Ke = new H,
    Ze = new E;
class $e {
    constructor({
        objects: t,
        data: e
    }) {
        this.objects = t, this.data = e, this.elapsed = 0, this.weight = 1, this.duration = e.frames.length - 1
    }
    update(t = 1, e) {
        const i = e ? 1 : this.weight / t,
            s = this.elapsed % this.duration,
            r = Math.floor(s),
            n = s - r,
            a = this.data.frames[r],
            o = this.data.frames[(r + 1) % this.duration];
        this.objects.forEach(((t, e) => {
            We.fromArray(a.position, 3 * e), qe.fromArray(a.quaternion, 4 * e), Ye.fromArray(a.scale, 3 * e), He.fromArray(o.position, 3 * e), Ke.fromArray(o.quaternion, 4 * e), Ze.fromArray(o.scale, 3 * e), We.lerp(He, n), qe.slerp(Ke, n), Ye.lerp(Ze, n), t.position.lerp(We, i), t.quaternion.slerp(qe, i), t.scale.lerp(Ye, i)
        }))
    }
}
const Qe = new et;
class Je extends dt {
    constructor(t, {
        rig: e,
        geometry: i,
        program: s,
        mode: r = t.TRIANGLES
    } = {}) {
        super(t, {
            geometry: i,
            program: s,
            mode: r
        }), this.createBones(e), this.createBoneTexture(), this.animations = [], Object.assign(this.program.uniforms, {
            boneTexture: {
                value: this.boneTexture
            },
            boneTextureSize: {
                value: this.boneTextureSize
            }
        })
    }
    createBones(t) {
        if (this.root = new rt, this.bones = [], t.bones && t.bones.length) {
            for (let e = 0; e < t.bones.length; e++) {
                const i = new rt;
                i.position.fromArray(t.bindPose.position, 3 * e), i.quaternion.fromArray(t.bindPose.quaternion, 4 * e), i.scale.fromArray(t.bindPose.scale, 3 * e), this.bones.push(i)
            }
            t.bones.forEach(((t, e) => {
                if (this.bones[e].name = t.name, -1 === t.parent) return this.bones[e].setParent(this.root);
                this.bones[e].setParent(this.bones[t.parent])
            })), this.root.updateMatrixWorld(!0), this.bones.forEach((t => {
                t.bindInverse = new et(...t.worldMatrix).inverse()
            }))
        }
    }
    createBoneTexture() {
        if (!this.bones.length) return;
        const t = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(4 * this.bones.length)) / Math.LN2)));
        this.boneMatrices = new Float32Array(t * t * 4), this.boneTextureSize = t, this.boneTexture = new ft(this.gl, {
            image: this.boneMatrices,
            generateMipmaps: !1,
            type: this.gl.FLOAT,
            internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST,
            flipY: !1,
            width: t
        })
    }
    addAnimation(t) {
        const e = new $e({
            objects: this.bones,
            data: t
        });
        return this.animations.push(e), e
    }
    update() {
        let t = 0;
        this.animations.forEach((e => t += e.weight)), this.animations.forEach(((e, i) => {
            e.update(t, 0 === i)
        }))
    }
    draw({
        camera: t
    } = {}) {
        this.root.updateMatrixWorld(!0), this.bones.forEach(((t, e) => {
            Qe.multiply(t.worldMatrix, t.bindInverse), this.boneMatrices.set(Qe, 16 * e)
        })), this.boneTexture && (this.boneTexture.needsUpdate = !0), super.draw({
            camera: t
        })
    }
}

function ti({
    font: t,
    text: e,
    width: i = 1 / 0,
    align: s = "left",
    size: r = 1,
    letterSpacing: n = 0,
    lineHeight: a = 1.4,
    wordSpacing: o = 0,
    wordBreak: h = !1
}) {
    const l = this;
    let u, c, d, g;
    const p = /\n/,
        m = /\s/;

    function f() {
        t.common.lineHeight, d = t.common.base, g = r / d;
        let i = e.replace(/[ \n]/g, "").length;
        c = {
            position: new Float32Array(4 * i * 3),
            uv: new Float32Array(4 * i * 2),
            id: new Float32Array(4 * i),
            index: new Uint16Array(6 * i)
        };
        for (let t = 0; t < i; t++) c.id.set([t, t, t, t], 4 * t), c.index.set([4 * t, 4 * t + 2, 4 * t + 1, 4 * t + 1, 4 * t + 2, 4 * t + 3], 6 * t);
        x()
    }

    function x() {
        const d = [];
        let f = 0,
            x = 0,
            y = 0,
            b = v();

        function v() {
            const t = {
                width: 0,
                glyphs: []
            };
            return d.push(t), x = f, y = 0, t
        }
        let M = 0;
        for (; f < e.length && M < 100;) {
            M++;
            const t = e[f];
            if (!b.width && m.test(t)) {
                f++, x = f, y = 0;
                continue
            }
            if (p.test(t)) {
                f++, b = v();
                continue
            }
            const s = u[t] || u[" "];
            if (b.glyphs.length) {
                const t = b.glyphs[b.glyphs.length - 1][0];
                let e = w(s.id, t.id) * g;
                b.width += e, y += e
            }
            b.glyphs.push([s, b.width]);
            let a = 0;
            if (m.test(t) ? (x = f, y = 0, a += o * r) : a += n * r, a += s.xadvance * g, b.width += a, y += a, b.width > i) {
                if (h && b.glyphs.length > 1) {
                    b.width -= a, b.glyphs.pop(), b = v();
                    continue
                }
                if (!h && y !== b.width) {
                    let t = f - x + 1;
                    b.glyphs.splice(-t, t), f = x, b.width -= y, b = v();
                    continue
                }
            }
            f++, M = 0
        }
        b.width || d.pop(),
            function(e) {
                const i = t.common.scaleW,
                    n = t.common.scaleH;
                let o = .07 * r,
                    h = 0;
                for (let t = 0; t < e.length; t++) {
                    let l = e[t];
                    for (let t = 0; t < l.glyphs.length; t++) {
                        const e = l.glyphs[t][0];
                        let r = l.glyphs[t][1];
                        if ("center" === s ? r -= .5 * l.width : "right" === s && (r -= l.width), m.test(e.char)) continue;
                        r += e.xoffset * g, o -= e.yoffset * g;
                        let a = e.width * g,
                            u = e.height * g;
                        c.position.set([r, o - u, 0, r, o, 0, r + a, o - u, 0, r + a, o, 0], 4 * h * 3);
                        let d = e.x / i,
                            p = e.width / i,
                            f = 1 - e.y / n,
                            x = e.height / n;
                        c.uv.set([d, f - x, d, f, d + p, f - x, d + p, f], 4 * h * 2), o += e.yoffset * g, h++
                    }
                    o -= r * a
                }
                l.buffers = c, l.numLines = e.length, l.height = l.numLines * r * a, l.width = Math.max(...e.map((t => t.width)))
            }(d)
    }

    function w(e, i) {
        for (let s = 0; s < t.kernings.length; s++) {
            let r = t.kernings[s];
            if (!(r.first < e) && !(r.second < i)) return r.first > e || r.first === e && r.second > i ? 0 : r.amount
        }
        return 0
    }
    u = {}, t.chars.forEach((t => u[t.char] = t)), f(), this.resize = function(t) {
        ({
            width: i
        } = t), x()
    }, this.update = function(t) {
        ({
            text: e
        } = t), f()
    }
}

function ei(t) {
    return new L(t, {
        vertex: "\n    precision highp float;\n    precision highp int;\n\n    attribute vec3 position;\n    attribute vec3 normal;\n\n    uniform mat3 normalMatrix;\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    varying vec3 vNormal;\n\n    void main() {\n        vNormal = normalize(normalMatrix * normal);\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n",
        fragment: "\n    precision highp float;\n    precision highp int;\n\n    varying vec3 vNormal;\n\n    void main() {\n        gl_FragColor.rgb = normalize(vNormal);\n        gl_FragColor.a = 1.0;\n    }\n",
        cullFace: !1
    })
}
class ii {
    constructor(t, {
        size: e = 128,
        falloff: i = .3,
        alpha: s = 1,
        dissipation: r = .98,
        type: n
    } = {}) {
        const a = this;
        this.gl = t, this.uniform = {
                value: null
            }, this.mask = {
                read: null,
                write: null,
                swap: () => {
                    let t = a.mask.read;
                    a.mask.read = a.mask.write, a.mask.write = t, a.uniform.value = a.mask.read.texture
                }
            },
            function() {
                n || (n = t.HALF_FLOAT || t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES);
                let i = t.renderer.isWebgl2 || t.renderer.extensions[`OES_texture_${n===t.FLOAT?"":"half_"}float_linear`] ? t.LINEAR : t.NEAREST;
                const s = {
                    width: e,
                    height: e,
                    type: n,
                    format: t.RGBA,
                    internalFormat: t.renderer.isWebgl2 ? n === t.FLOAT ? t.RGBA32F : t.RGBA16F : t.RGBA,
                    minFilter: i,
                    depth: !1
                };
                a.mask.read = new xt(t, s), a.mask.write = new xt(t, s), a.mask.swap()
            }(), this.aspect = 1, this.mouse = new Ft, this.velocity = new Ft, this.mesh = new dt(t, {
                geometry: new zt(t),
                program: new L(t, {
                    vertex: si,
                    fragment: ri,
                    uniforms: {
                        tMap: a.uniform,
                        uFalloff: {
                            value: .5 * i
                        },
                        uAlpha: {
                            value: s
                        },
                        uDissipation: {
                            value: r
                        },
                        uAspect: {
                            value: 1
                        },
                        uMouse: {
                            value: a.mouse
                        },
                        uVelocity: {
                            value: a.velocity
                        }
                    },
                    depthTest: !1
                })
            })
    }
    update() {
        this.mesh.program.uniforms.uAspect.value = this.aspect, this.gl.renderer.render({
            scene: this.mesh,
            target: this.mask.write,
            clear: !1
        }), this.mask.swap()
    }
}
const si = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
    ri = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n\n    uniform float uFalloff;\n    uniform float uAlpha;\n    uniform float uDissipation;\n    \n    uniform float uAspect;\n    uniform vec2 uMouse;\n    uniform vec2 uVelocity;\n\n    varying vec2 vUv;\n\n    void main() {\n        vec4 color = texture2D(tMap, vUv) * uDissipation;\n\n        vec2 cursor = vUv - uMouse;\n        cursor.x *= uAspect;\n\n        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));\n        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;\n\n        color.rgb = mix(color.rgb, stamp, vec3(falloff));\n\n        gl_FragColor = color;\n    }\n";
class ni {
    constructor(t, {
        data: e = new Float32Array(16),
        geometry: i = new zt(t),
        type: s
    }) {
        this.gl = t;
        const r = e;
        this.passes = [], this.geometry = i, this.dataLength = r.length / 4, this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2)), this.coords = new Float32Array(2 * this.dataLength);
        for (let o = 0; o < this.dataLength; o++) {
            const t = o % this.size / this.size,
                e = Math.floor(o / this.size) / this.size;
            this.coords.set([t, e], 2 * o)
        }
        const n = (() => {
            if (r.length === this.size * this.size * 4) return r; {
                const t = new Float32Array(this.size * this.size * 4);
                return t.set(r), t
            }
        })();
        this.uniform = {
            value: new ft(t, {
                image: n,
                target: t.TEXTURE_2D,
                type: t.FLOAT,
                format: t.RGBA,
                internalFormat: t.renderer.isWebgl2 ? t.RGBA32F : t.RGBA,
                wrapS: t.CLAMP_TO_EDGE,
                wrapT: t.CLAMP_TO_EDGE,
                generateMipmaps: !1,
                minFilter: t.NEAREST,
                magFilter: t.NEAREST,
                width: this.size,
                flipY: !1
            })
        };
        const a = {
            width: this.size,
            height: this.size,
            type: s || t.HALF_FLOAT || t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES,
            format: t.RGBA,
            internalFormat: t.renderer.isWebgl2 ? s === t.FLOAT ? t.RGBA32F : t.RGBA16F : t.RGBA,
            minFilter: t.NEAREST,
            depth: !1,
            unpackAlignment: 1
        };
        this.fbo = {
            read: new xt(t, a),
            write: new xt(t, a),
            swap: () => {
                let t = this.fbo.read;
                this.fbo.read = this.fbo.write, this.fbo.write = t, this.uniform.value = this.fbo.read.texture
            }
        }
    }
    addPass({
        vertex: t = ai,
        fragment: e = oi,
        uniforms: i = {},
        textureUniform: s = "tMap",
        enabled: r = !0
    } = {}) {
        i[s] = this.uniform;
        const n = new L(this.gl, {
                vertex: t,
                fragment: e,
                uniforms: i
            }),
            a = {
                mesh: new dt(this.gl, {
                    geometry: this.geometry,
                    program: n
                }),
                program: n,
                uniforms: i,
                enabled: r,
                textureUniform: s
            };
        return this.passes.push(a), a
    }
    render() {
        this.passes.filter((t => t.enabled)).forEach(((t, e) => {
            this.gl.renderer.render({
                scene: t.mesh,
                target: this.fbo.write,
                clear: !1
            }), this.fbo.swap()
        }))
    }
}
const ai = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
    oi = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n",
    hi = new E;
class li {
    constructor(t, {
        points: e,
        vertex: i = ui,
        fragment: s = ci,
        uniforms: r = {},
        attributes: n = {}
    }) {
        this.gl = t, this.points = e, this.count = e.length, this.position = new Float32Array(3 * this.count * 2), this.prev = new Float32Array(3 * this.count * 2), this.next = new Float32Array(3 * this.count * 2);
        const a = new Float32Array(1 * this.count * 2),
            o = new Float32Array(2 * this.count * 2),
            h = new Uint16Array(3 * (this.count - 1) * 2);
        for (let c = 0; c < this.count; c++) {
            a.set([-1, 1], 2 * c);
            const t = c / (this.count - 1);
            if (o.set([0, t, 1, t], 4 * c), c === this.count - 1) continue;
            const e = 2 * c;
            h.set([e + 0, e + 1, e + 2], 3 * (e + 0)), h.set([e + 2, e + 1, e + 3], 3 * (e + 1))
        }
        const l = this.geometry = new R(t, Object.assign(n, {
            position: {
                size: 3,
                data: this.position
            },
            prev: {
                size: 3,
                data: this.prev
            },
            next: {
                size: 3,
                data: this.next
            },
            side: {
                size: 1,
                data: a
            },
            uv: {
                size: 2,
                data: o
            },
            index: {
                size: 1,
                data: h
            }
        }));
        this.updateGeometry(), r.uResolution || (this.resolution = r.uResolution = {
            value: new Ft
        }), r.uDPR || (this.dpr = r.uDPR = {
            value: 1
        }), r.uThickness || (this.thickness = r.uThickness = {
            value: 1
        }), r.uColor || (this.color = r.uColor = {
            value: new vt("#000")
        }), r.uMiter || (this.miter = r.uMiter = {
            value: 1
        }), this.resize();
        const u = this.program = new L(t, {
            vertex: i,
            fragment: s,
            uniforms: r
        });
        this.mesh = new dt(t, {
            geometry: l,
            program: u
        })
    }
    updateGeometry() {
        this.points.forEach(((t, e) => {
            t.toArray(this.position, 3 * e * 2), t.toArray(this.position, 3 * e * 2 + 3), e ? (t.toArray(this.next, 3 * (e - 1) * 2), t.toArray(this.next, 3 * (e - 1) * 2 + 3)) : (hi.copy(t).sub(this.points[e + 1]).add(t), hi.toArray(this.prev, 3 * e * 2), hi.toArray(this.prev, 3 * e * 2 + 3)), e === this.points.length - 1 ? (hi.copy(t).sub(this.points[e - 1]).add(t), hi.toArray(this.next, 3 * e * 2), hi.toArray(this.next, 3 * e * 2 + 3)) : (t.toArray(this.prev, 3 * (e + 1) * 2), t.toArray(this.prev, 3 * (e + 1) * 2 + 3))
        })), this.geometry.attributes.position.needsUpdate = !0, this.geometry.attributes.prev.needsUpdate = !0, this.geometry.attributes.next.needsUpdate = !0
    }
    resize() {
        this.resolution && this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height), this.dpr && (this.dpr.value = this.gl.renderer.dpr)
    }
}
const ui = "\n    precision highp float;\n\n    attribute vec3 position;\n    attribute vec3 next;\n    attribute vec3 prev;\n    attribute vec2 uv;\n    attribute float side;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n    uniform vec2 uResolution;\n    uniform float uDPR;\n    uniform float uThickness;\n    uniform float uMiter;\n\n    varying vec2 vUv;\n\n    vec4 getPosition() {\n        mat4 mvp = projectionMatrix * modelViewMatrix;\n        vec4 current = mvp * vec4(position, 1);\n        vec4 nextPos = mvp * vec4(next, 1);\n        vec4 prevPos = mvp * vec4(prev, 1);\n\n        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n        vec2 currentScreen = current.xy / current.w * aspect;\n        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n    \n        vec2 dir1 = normalize(currentScreen - prevScreen);\n        vec2 dir2 = normalize(nextScreen - currentScreen);\n        vec2 dir = normalize(dir1 + dir2);\n    \n        vec2 normal = vec2(-dir.y, dir.x);\n        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n        normal /= aspect;\n\n        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n        float pixelWidth = current.w * pixelWidthRatio;\n        normal *= pixelWidth * uThickness;\n        current.xy -= normal * side;\n    \n        return current;\n    }\n\n    void main() {\n        vUv = uv;\n        gl_Position = getPosition();\n    }\n",
    ci = "\n    precision highp float;\n\n    uniform vec3 uColor;\n    \n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor.rgb = uColor;\n        gl_FragColor.a = 1.0;\n    }\n";
class di {
    constructor(t, {
        light: e = new ht(t),
        width: i = 1024,
        height: s = i
    }) {
        this.gl = t, this.light = e, this.target = new xt(t, {
            width: i,
            height: s
        }), this.targetUniform = {
            value: this.target.texture
        }, this.depthProgram = new L(t, {
            vertex: gi,
            fragment: pi,
            cullFace: !1
        }), this.castMeshes = []
    }
    add({
        mesh: t,
        receive: e = !0,
        cast: i = !0,
        vertex: s = gi,
        fragment: r = pi,
        uniformProjection: n = "shadowProjectionMatrix",
        uniformView: a = "shadowViewMatrix",
        uniformTexture: o = "tShadow"
    }) {
        e && !t.program.uniforms[n] && (t.program.uniforms[n] = {
            value: this.light.projectionMatrix
        }, t.program.uniforms[a] = {
            value: this.light.viewMatrix
        }, t.program.uniforms[o] = this.targetUniform), i && (this.castMeshes.push(t), t.colorProgram = t.program, t.depthProgram || (t.depthProgram = s !== gi || r !== pi ? new L(this.gl, {
            vertex: s,
            fragment: r,
            cullFace: !1
        }) : this.depthProgram))
    }
    setSize({
        width: t = 1024,
        height: e = t
    }) {
        this.target = new xt(this.gl, {
            width: t,
            height: e
        }), this.targetUniform.value = this.target.texture
    }
    render({
        scene: t
    }) {
        t.traverse((t => {
            t.draw && (~this.castMeshes.indexOf(t) ? t.program = t.depthProgram : (t.isForceVisibility = t.visible, t.visible = !1))
        })), this.gl.renderer.render({
            scene: t,
            camera: this.light,
            target: this.target
        }), t.traverse((t => {
            t.draw && (~this.castMeshes.indexOf(t) ? t.program = t.colorProgram : t.visible = t.isForceVisibility)
        }))
    }
}
const gi = "\n    attribute vec3 position;\n    attribute vec2 uv;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    void main() {\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n",
    pi = "\n    precision highp float;\n\n    vec4 packRGBA (float v) {\n        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);\n        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;\n        return pack;\n    }\n\n    void main() {\n        gl_FragColor = packRGBA(gl_FragCoord.z);\n    }\n";
class mi extends ft {
    constructor(t, {
        buffer: e,
        wrapS: i = t.CLAMP_TO_EDGE,
        wrapT: s = t.CLAMP_TO_EDGE,
        anisotropy: r = 0,
        minFilter: n,
        magFilter: a
    } = {}) {
        if (super(t, {
                generateMipmaps: !1,
                wrapS: i,
                wrapT: s,
                anisotropy: r,
                minFilter: n,
                magFilter: a
            }), e) return this.parseBuffer(e)
    }
    parseBuffer(t) {
        const e = new fi(t);
        e.mipmaps.isCompressedTexture = !0, this.image = e.mipmaps, this.internalFormat = e.glInternalFormat, e.numberOfMipmapLevels > 1 ? this.minFilter === this.gl.LINEAR && (this.minFilter = this.gl.NEAREST_MIPMAP_LINEAR) : this.minFilter === this.gl.NEAREST_MIPMAP_LINEAR && (this.minFilter = this.gl.LINEAR)
    }
}

function fi(t) {
    const e = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
        i = new Uint8Array(t, 0, 12);
    for (let u = 0; u < i.length; u++)
        if (i[u] !== e[u]) return console.error("File missing KTX identifier");
    const s = Uint32Array.BYTES_PER_ELEMENT,
        r = new DataView(t, 12, 13 * s),
        n = 67305985 === r.getUint32(0, !0);
    if (0 !== r.getUint32(1 * s, n)) return console.warn("only compressed formats currently supported");
    this.glInternalFormat = r.getUint32(4 * s, n);
    let a = r.getUint32(6 * s, n),
        o = r.getUint32(7 * s, n);
    this.numberOfFaces = r.getUint32(10 * s, n), this.numberOfMipmapLevels = Math.max(1, r.getUint32(11 * s, n));
    const h = r.getUint32(12 * s, n);
    this.mipmaps = [];
    let l = 64 + h;
    for (let u = 0; u < this.numberOfMipmapLevels; u++) {
        const e = new Int32Array(t, l, 1)[0];
        l += 4;
        for (let i = 0; i < this.numberOfFaces; i++) {
            const i = new Uint8Array(t, l, e);
            this.mipmaps.push({
                data: i,
                width: a,
                height: o
            }), l += e, l += 3 - (e + 3) % 4
        }
        a >>= 1, o >>= 1
    }
}
let xi = {};
const wi = [];
class yi {
    static load(t, {
        src: e,
        wrapS: i = t.CLAMP_TO_EDGE,
        wrapT: s = t.CLAMP_TO_EDGE,
        anisotropy: r = 0,
        format: n = t.RGBA,
        internalFormat: a = n,
        generateMipmaps: o = !0,
        minFilter: h = (o ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR),
        magFilter: l = t.LINEAR,
        premultiplyAlpha: u = !1,
        unpackAlignment: c = 4,
        flipY: d = !0
    } = {}) {
        const g = this.getSupportedExtensions(t);
        let p = "none";
        if ("string" == typeof e && (p = e.split(".").pop().split("?")[0].toLowerCase()), "object" == typeof e)
            for (const x in e)
                if (g.includes(x.toLowerCase())) {
                    p = x.toLowerCase(), e = e[x];
                    break
                }
        const m = e + i + s + r + n + a + o + h + l + u + c + d + t.renderer.id;
        if (xi[m]) return xi[m];
        let f;
        switch (p) {
            case "ktx":
            case "pvrtc":
            case "s3tc":
            case "etc":
            case "etc1":
            case "astc":
                f = new mi(t, {
                    src: e,
                    wrapS: i,
                    wrapT: s,
                    anisotropy: r,
                    minFilter: h,
                    magFilter: l
                }), f.loaded = this.loadKTX(e, f);
                break;
            case "webp":
            case "jpg":
            case "jpeg":
            case "png":
                f = new ft(t, {
                    wrapS: i,
                    wrapT: s,
                    anisotropy: r,
                    format: n,
                    internalFormat: a,
                    generateMipmaps: o,
                    minFilter: h,
                    magFilter: l,
                    premultiplyAlpha: u,
                    unpackAlignment: c,
                    flipY: d
                }), f.loaded = this.loadImage(t, e, f, d);
                break;
            default:
                console.warn("No supported format supplied"), f = new ft(t)
        }
        return f.ext = p, xi[m] = f, f
    }
    static getSupportedExtensions(t) {
        if (wi.length) return wi;
        const e = {
            pvrtc: t.renderer.getExtension("WEBGL_compressed_texture_pvrtc") || t.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
            s3tc: t.renderer.getExtension("WEBGL_compressed_texture_s3tc"),
            etc1: t.renderer.getExtension("WEBGL_compressed_texture_etc1"),
            astc: t.renderer.getExtension("WEBGL_compressed_texture_astc"),
            bc7: t.renderer.getExtension("EXT_texture_compression_bptc")
        };
        for (const i in e) e[i] && wi.push(i);
        return wi.push("png", "jpg", "webp"), wi
    }
    static loadKTX(t, e) {
        return fetch(t).then((t => t.arrayBuffer())).then((t => e.parseBuffer(t)))
    }
    static loadImage(t, e, i, s) {
        return function(t, e) {
            return new Promise(((i, s) => {
                if (function() {
                        if (!navigator.userAgent.toLowerCase().includes("chrome")) return !1;
                        try {
                            createImageBitmap
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }()) fetch(t, {
                    mode: "cors"
                }).then((t => t.blob())).then((t => createImageBitmap(t, {
                    imageOrientation: e ? "flipY" : "none",
                    premultiplyAlpha: "none"
                }))).then(i).catch((t => s(t)));
                else {
                    const e = new Image;
                    e.crossOrigin = "", e.src = t, e.onerror = ({
                        type: t
                    }) => s(`${t}: Loading image`), e.onload = () => i(e)
                }
            }))
        }(e, s).then((e => (t.renderer.isWebgl2 || bi(e.width) && bi(e.height) || (i.generateMipmaps && (i.generateMipmaps = !1), i.minFilter === t.NEAREST_MIPMAP_LINEAR && (i.minFilter = t.LINEAR), i.wrapS === t.REPEAT && (i.wrapS = i.wrapT = t.CLAMP_TO_EDGE)), i.image = e, i.onUpdate = () => {
            e.close && e.close(), i.onUpdate = null
        }, e)))
    }
    static clearCache() {
        xi = {}
    }
}

function bi(t) {
    return Math.log2(t) % 1 == 0
}
const vi = new E,
    Mi = new E,
    Ei = new E,
    Ai = new E,
    _i = new H,
    Ti = new H,
    Fi = new H,
    Ri = new H;
class Si {
    constructor(t, e = 1) {
        this.data = t, this.elapsed = 0, this.weight = e, this.loop = !0, this.startTime = t.reduce(((t, {
            times: e
        }) => Math.min(t, e[0])), 1 / 0), this.endTime = t.reduce(((t, {
            times: e
        }) => Math.max(t, e[e.length - 1])), 0), this.duration = this.endTime - this.startTime
    }
    update(t = 1, e) {
        const i = e ? 1 : this.weight / t,
            s = this.duration ? (this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration - .001)) + this.startTime : 0;
        this.data.forEach((({
            node: t,
            transform: e,
            interpolation: r,
            times: n,
            values: a
        }) => {
            if (!this.duration) {
                let s = vi,
                    r = 3;
                return "quaternion" === e && (s = _i, r = 4), s.fromArray(a, 0), void(4 === r ? t[e].slerp(s, i) : t[e].lerp(s, i))
            }
            const o = Math.max(1, n.findIndex((t => t > s))) - 1,
                h = o + 1;
            let l = (s - n[o]) / (n[h] - n[o]);
            "STEP" === r && (l = 0);
            let u = vi,
                c = Mi,
                d = Ei,
                g = Ai,
                p = 3;
            "quaternion" === e && (u = _i, c = Ti, d = Fi, g = Ri, p = 4), "CUBICSPLINE" === r ? (u.fromArray(a, o * p * 3 + 1 * p), c.fromArray(a, o * p * 3 + 2 * p), d.fromArray(a, h * p * 3 + 0 * p), g.fromArray(a, h * p * 3 + 1 * p), u = this.cubicSplineInterpolate(l, u, c, d, g), 4 === p && u.normalize()) : (u.fromArray(a, o * p), g.fromArray(a, h * p), 4 === p ? u.slerp(g, l) : u.lerp(g, l)), 4 === p ? t[e].slerp(u, i) : t[e].lerp(u, i)
        }))
    }
    cubicSplineInterpolate(t, e, i, s, r) {
        const n = t * t,
            a = n * t,
            o = 3 * n - 2 * a,
            h = a - n,
            l = 1 - o,
            u = h - n + t;
        for (let c = 0; c < e.length; c++) e[c] = l * e[c] + u * (1 - t) * i[c] + o * r[c] + h * t * s[c];
        return e
    }
}
const Pi = new et,
    Li = new et;
class Ci extends dt {
    constructor(t, {
        skeleton: e,
        geometry: i,
        program: s,
        mode: r = t.TRIANGLES
    } = {}) {
        super(t, {
            geometry: i,
            program: s,
            mode: r
        }), this.skeleton = e, this.program = s, this.createBoneTexture()
    }
    createBoneTexture() {
        if (!this.skeleton.joints.length) return;
        const t = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(4 * this.skeleton.joints.length)) / Math.LN2)));
        this.boneMatrices = new Float32Array(t * t * 4), this.boneTextureSize = t, this.boneTexture = new ft(this.gl, {
            image: this.boneMatrices,
            generateMipmaps: !1,
            type: this.gl.FLOAT,
            internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST,
            flipY: !1,
            width: t
        })
    }
    updateUniforms() {
        this.skeleton.joints.forEach(((t, e) => {
            Pi.multiply(t.worldMatrix, t.bindInverse), this.boneMatrices.set(Pi, 16 * e)
        })), this.boneTexture.needsUpdate = !0, this.program.uniforms.boneTexture.value = this.boneTexture, this.program.uniforms.boneTextureSize.value = this.boneTextureSize
    }
    draw({
        camera: t
    } = {}) {
        this.program.uniforms.boneTexture || Object.assign(this.program.uniforms, {
            boneTexture: {
                value: this.boneTexture
            },
            boneTextureSize: {
                value: this.boneTextureSize
            }
        }), this.updateUniforms();
        const e = this.worldMatrix;
        this.worldMatrix = Li, super.draw({
            camera: t
        }), this.worldMatrix = e
    }
}
class zi extends dt {
    constructor(...t) {
        super(...t), this.frustumCulled = !1, this.isInstancedMesh = !0
    }
    addFrustumCull() {
        this.instanceTransforms = null, this.instanceLightmapScaleOffset = null, this.totalInstanceCount = 0, this.frustumCullFunction = null, this.instanceRenderList = null, this.geometry.attributes.instanceMatrix || console.error(`mesh ${this.name?`"${this.name}" `:""}missing instanceMatrix attribute; unable to frustum cull`);
        const t = this.geometry.attributes.instanceMatrix.data;
        this.instanceTransforms = [];
        for (let e = 0, i = 0; e < t.length; e += 16, i++) {
            const s = new rt;
            s.index = i, s.matrix.fromArray(t, e), s.decompose(), this.instanceTransforms.push(s), s.setParent(this.parent)
        }
        if (this.totalInstanceCount = this.instanceTransforms.length, this.geometry.attributes.lightmapScaleOffset) {
            const t = this.geometry.attributes.lightmapScaleOffset.data;
            for (let e = 0, i = 0; e < t.length; e += 4, i++) this.instanceTransforms[i].lightmapData = (new Rt).fromArray(t, e)
        }
        this.frustumCullFunction = ({
            camera: t
        }) => {
            this.instanceRenderList = [], this.instanceTransforms.forEach((e => {
                t.frustumIntersectsMesh(this, e.worldMatrix) && this.instanceRenderList.push(e)
            })), this.instanceRenderList.forEach(((t, e) => {
                t.matrix.toArray(this.geometry.attributes.instanceMatrix.data, 16 * e), t.lightmapData && (t.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, 4 * e), this.geometry.attributes.lightmapScaleOffset.needsUpdate = !0)
            })), this.geometry.instancedCount = this.instanceRenderList.length, this.geometry.attributes.instanceMatrix.needsUpdate = !0
        }, this.onBeforeRender(this.frustumCullFunction)
    }
    removeFrustumCull() {
        this.offBeforeRender(this.frustumCullFunction), this.geometry.instancedCount = this.totalInstanceCount, this.instanceTransforms.forEach(((t, e) => {
            t.matrix.toArray(this.geometry.attributes.instanceMatrix.data, 16 * e), t.lightmapData && (t.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, 4 * e), this.geometry.attributes.lightmapScaleOffset.needsUpdate = !0)
        })), this.geometry.attributes.instanceMatrix.needsUpdate = !0
    }
}
const Oi = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array,
        "image/jpeg": Uint8Array,
        "image/png": Uint8Array,
        "image/webp": Uint8Array
    },
    Bi = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    },
    Ii = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv2",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
    },
    Ui = {
        translation: "position",
        rotation: "quaternion",
        scale: "scale"
    };
class Ni {
    static setDracoManager(t) {
        this.dracoManager = t
    }
    static setBasisManager(t) {
        this.basisManager = t
    }
    static load(t, e) {
        return c(this, null, (function*() {
            const i = e.split("/").slice(0, -1).join("/") + "/",
                s = yield this.parseDesc(e);
            return this.parse(t, s, i)
        }))
    }
    static parse(t, e, i) {
        return c(this, null, (function*() {
            var s, r;
            (void 0 === e.asset || e.asset.version[0] < 2) && console.warn("Only GLTF >=2.0 supported. Attempting to parse."), (null == (s = e.extensionsRequired) ? void 0 : s.includes("KHR_draco_mesh_compression")) && !this.dracoManager && console.warn("KHR_draco_mesh_compression extension required but no manager supplied. Use .setDracoManager()"), (null == (r = e.extensionsRequired) ? void 0 : r.includes("KHR_texture_basisu")) && !this.basisManager && console.warn("KHR_texture_basisu extension required but no manager supplied. Use .setBasisManager()");
            const n = yield this.loadBuffers(e, i);
            t.renderer.bindVertexArray(null);
            const a = this.parseBufferViews(t, e, n),
                o = yield this.parseImages(t, e, i, a), h = this.parseTextures(t, e, o), l = this.parseMaterials(t, e, h), u = this.parseSkins(t, e, a), c = yield this.parseMeshes(t, e, a, l, u), [d, g] = this.parseNodes(t, e, c, u, o);
            this.populateSkins(u, d);
            const p = this.parseAnimations(t, e, d, a),
                m = this.parseScenes(e, d),
                f = m[e.scene],
                x = this.parseLights(t, e, d, m);
            for (let t = d.length; t >= 0; t--) d[t] || d.splice(t, 1);
            return {
                json: e,
                buffers: n,
                bufferViews: a,
                cameras: g,
                images: o,
                textures: h,
                materials: l,
                meshes: c,
                nodes: d,
                lights: x,
                animations: p,
                scenes: m,
                scene: f
            }
        }))
    }
    static parseDesc(t) {
        return fetch(t, {
            mode: "cors"
        }).then((t => t.arrayBuffer())).then((t => {
            const e = new TextDecoder;
            return "glTF" === e.decode(new Uint8Array(t, 0, 4)) ? this.unpackGLB(t) : JSON.parse(e.decode(t))
        }))
    }
    static unpackGLB(t) {
        const e = new Uint32Array(t, 0, 3);
        if (1179937895 !== e[0]) throw new Error("Invalid glTF asset.");
        if (2 !== e[1]) throw new Error(`Unsupported glTF binary version, "${e[1]}".`);
        const i = new Uint32Array(t, 12, 2),
            s = i[0];
        if (1313821514 !== i[1]) throw new Error("Unexpected GLB layout.");
        const r = (new TextDecoder).decode(t.slice(20, 20 + s)),
            n = JSON.parse(r);
        if (20 + s === t.byteLength) return n;
        const a = new Uint32Array(t, 20 + s, 2);
        if (5130562 !== a[1]) throw new Error("Unexpected GLB layout.");
        const o = 20 + s + 8,
            h = a[0],
            l = t.slice(o, o + h);
        return n.buffers[0].binary = l, n
    }
    static resolveURI(t, e) {
        return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t)
    }
    static loadBuffers(t, e) {
        return t.buffers ? Promise.all(t.buffers.map((t => {
            if (t.binary) return t.binary;
            const i = this.resolveURI(t.uri, e);
            return fetch(i, {
                mode: "cors"
            }).then((t => t.arrayBuffer()))
        }))) : null
    }
    static parseBufferViews(t, e, i) {
        if (!e.bufferViews) return null;
        const s = e.bufferViews;
        return e.meshes && e.meshes.forEach((({
            primitives: i
        }) => {
            i.forEach((({
                attributes: i,
                indices: r,
                extensions: n
            }) => {
                for (const t in i) {
                    const r = e.accessors[i[t]];
                    void 0 === r.bufferView && n && n.KHR_draco_mesh_compression && (r.bufferView = n.KHR_draco_mesh_compression.bufferView, s[r.bufferView].isDraco = !0), s[r.bufferView].isAttribute = !0
                }
                if (void 0 !== r) {
                    const i = e.accessors[r];
                    void 0 === i.bufferView && n && n.KHR_draco_mesh_compression && (i.bufferView = n.KHR_draco_mesh_compression.bufferView, s[i.bufferView].isDraco = !0), s[i.bufferView].isAttribute = !0, s[i.bufferView].target = t.ELEMENT_ARRAY_BUFFER
                }
            }))
        })), e.accessors.forEach((({
            bufferView: t,
            componentType: e
        }) => {
            void 0 !== t && (s[t].componentType = e)
        })), e.images && e.images.forEach((({
            uri: t,
            bufferView: e,
            mimeType: i
        }) => {
            void 0 !== e && (s[e].mimeType = i)
        })), s.forEach((({
            buffer: e,
            byteOffset: r = 0,
            byteLength: n,
            byteStride: a,
            target: o = t.ARRAY_BUFFER,
            name: h,
            extensions: l,
            extras: u,
            componentType: c,
            mimeType: d,
            isAttribute: g,
            isDraco: p
        }, m) => {
            if (s[m].data = i[e].slice(r, r + n), !g || p) return;
            const f = t.createBuffer();
            t.bindBuffer(o, f), t.renderer.state.boundBuffer = f, t.bufferData(o, s[m].data, t.STATIC_DRAW), s[m].buffer = f
        })), s
    }
    static parseImages(t, e, i, s) {
        return e.images ? Promise.all(e.images.map((t => c(this, [t], (function*({
            uri: t,
            bufferView: e,
            mimeType: r,
            name: n
        }) {
            if ("image/ktx2" === r) {
                const {
                    data: t
                } = s[e];
                return yield this.basisManager.parseTexture(t)
            }
            const a = new Image;
            if (a.name = n, t) a.src = this.resolveURI(t, i);
            else if (void 0 !== e) {
                const {
                    data: t
                } = s[e], i = new Blob([t], {
                    type: r
                });
                a.src = URL.createObjectURL(i)
            }
            return a.ready = new Promise((t => {
                a.onload = () => t()
            })), a
        }))))) : null
    }
    static parseTextures(t, e, i) {
        return e.textures ? e.textures.map((s => this.createTexture(t, e, i, s))) : null
    }
    static createTexture(t, e, i, {
        sampler: s,
        source: r,
        name: n,
        extensions: a,
        extras: o
    }) {
        void 0 === r && a && (a.EXT_texture_webp && (r = a.EXT_texture_webp.source), a.KHR_texture_basisu && (r = a.KHR_texture_basisu.source));
        const h = i[r];
        if (h.texture) return h.texture;
        const l = {
                flipY: !1,
                wrapS: t.REPEAT,
                wrapT: t.REPEAT
            },
            u = void 0 !== s ? e.samplers[s] : null;
        if (u && ["magFilter", "minFilter", "wrapS", "wrapT"].forEach((t => {
                u[t] && (l[t] = u[t])
            })), h.isBasis) {
            l.image = h, l.internalFormat = h.internalFormat, h.isCompressedTexture && (l.generateMipmaps = !1, h.length > 1 && (this.minFilter = t.NEAREST_MIPMAP_LINEAR));
            const e = new ft(t, l);
            return e.name = n, h.texture = e, e
        }
        const c = new ft(t, l);
        return c.name = n, h.texture = c, h.ready.then((() => {
            c.image = h
        })), c
    }
    static parseMaterials(t, e, i) {
        return e.materials ? e.materials.map((({
            name: t,
            extensions: e,
            extras: s,
            pbrMetallicRoughness: r = {},
            normalTexture: n,
            occlusionTexture: a,
            emissiveTexture: o,
            emissiveFactor: h = [0, 0, 0],
            alphaMode: l = "OPAQUE",
            alphaCutoff: u = .5,
            doubleSided: c = !1
        }) => {
            const {
                baseColorFactor: d = [1, 1, 1, 1],
                baseColorTexture: g,
                metallicFactor: p = 1,
                roughnessFactor: m = 1,
                metallicRoughnessTexture: f
            } = r;
            return g && (g.texture = i[g.index]), n && (n.texture = i[n.index]), f && (f.texture = i[f.index]), a && (a.texture = i[a.index]), o && (o.texture = i[o.index]), {
                name: t,
                extensions: e,
                extras: s,
                baseColorFactor: d,
                baseColorTexture: g,
                metallicFactor: p,
                roughnessFactor: m,
                metallicRoughnessTexture: f,
                normalTexture: n,
                occlusionTexture: a,
                emissiveTexture: o,
                emissiveFactor: h,
                alphaMode: l,
                alphaCutoff: u,
                doubleSided: c
            }
        })) : null
    }
    static parseSkins(t, e, i) {
        return e.skins ? e.skins.map((({
            inverseBindMatrices: t,
            skeleton: s,
            joints: r
        }) => ({
            inverseBindMatrices: this.parseAccessor(t, e, i),
            skeleton: s,
            joints: r
        }))) : null
    }
    static parseMeshes(t, e, i, s, r) {
        return e.meshes ? Promise.all(e.meshes.map(((n, a) => c(this, [n, a], (function*({
            primitives: n,
            weights: a,
            name: o,
            extensions: h,
            extras: l = {}
        }, u) {
            let d = 0,
                g = [],
                p = !1;
            return e.nodes && e.nodes.forEach((({
                mesh: t,
                skin: e,
                extras: i
            }) => {
                t === u && (d++, void 0 !== e && g.push(e), i && i.lightmap_scale_offset && (p = !0))
            })), !!g.length ? ((n = yield Promise.all(g.map((a => c(this, null, (function*() {
                return (yield this.parsePrimitives(t, n, e, i, s, 1, p)).map((({
                    geometry: e,
                    program: i,
                    mode: s
                }) => {
                    const n = new Ci(t, {
                        skeleton: r[a],
                        geometry: e,
                        program: i,
                        mode: s
                    });
                    return n.name = o, n.extras = l, h && (n.extensions = h), n.frustumCulled = !1, n
                }))
            })))))).instanceCount = 0, n.numInstances = d) : n = (yield this.parsePrimitives(t, n, e, i, s, d, p)).map((({
                geometry: e,
                program: i,
                mode: s
            }) => {
                const r = new(e.attributes.instanceMatrix ? zi : dt)(t, {
                    geometry: e,
                    program: i,
                    mode: s
                });
                return r.name = o, r.extras = l, h && (r.extensions = h), r.numInstances = d, r
            })), {
                primitives: n,
                weights: a,
                name: o
            }
        }))))) : null
    }
    static parsePrimitives(t, e, i, s, r, n, a) {
        return Promise.all(e.map((e => c(this, [e], (function*({
            attributes: e,
            indices: o,
            material: h,
            mode: l = 4,
            targets: u,
            extensions: c,
            extras: d
        }) {
            const g = new ei(t);
            void 0 !== h && (g.gltfMaterial = r[h]);
            const p = new R(t);
            if (d && (p.extras = d), c && (p.extensions = c), c && c.KHR_draco_mesh_compression) {
                const r = c.KHR_draco_mesh_compression.bufferView,
                    n = c.KHR_draco_mesh_compression.attributes,
                    a = {},
                    o = {},
                    h = {},
                    l = {};
                for (const t in e) {
                    const s = i.accessors[e[t]],
                        r = Ii[t];
                    a[r] = n[t], o[r] = s.componentType, h[r] = Oi[s.componentType].name, l[r] = !0 === s.normalized
                }
                const {
                    data: u
                } = s[r], d = yield this.dracoManager.decodeGeometry(u, {
                    attributeIds: a,
                    attributeTypes: h
                });
                for (let e = 0; e < d.attributes.length; e++) {
                    const i = d.attributes[e],
                        s = i.name,
                        r = i.array,
                        n = i.itemSize,
                        a = o[s],
                        h = l[s],
                        u = t.createBuffer();
                    t.bindBuffer(t.ARRAY_BUFFER, u), t.renderer.state.boundBuffer = u, t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW), p.addAttribute(s, {
                        data: r,
                        size: n,
                        type: a,
                        normalized: h,
                        buffer: u
                    })
                }
                if (d.index) {
                    const e = d.index.array,
                        i = d.index.itemSize,
                        s = t.createBuffer();
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, s), t.renderer.state.boundBuffer = s, t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW), p.addAttribute("index", {
                        data: e,
                        size: i,
                        type: 5125,
                        normalized: !1,
                        buffer: s
                    })
                }
            } else {
                for (const t in e) p.addAttribute(Ii[t], this.parseAccessor(e[t], i, s));
                void 0 !== o && p.addAttribute("index", this.parseAccessor(o, i, s))
            }
            return n > 1 && p.addAttribute("instanceMatrix", {
                instanced: 1,
                size: 16,
                data: new Float32Array(16 * n)
            }), a && p.addAttribute("lightmapScaleOffset", {
                instanced: 1,
                size: 4,
                data: new Float32Array(4 * n)
            }), {
                geometry: p,
                program: g,
                mode: l
            }
        })))))
    }
    static parseAccessor(t, e, i) {
        const {
            bufferView: s,
            byteOffset: r = 0,
            componentType: n,
            normalized: a = !1,
            count: o,
            type: h,
            min: l,
            max: u,
            sparse: c
        } = e.accessors[t], {
            data: d,
            buffer: g,
            byteOffset: p = 0,
            byteStride: m = 0,
            target: f
        } = i[s], x = Bi[h], w = Oi[n], y = m / w.BYTES_PER_ELEMENT;
        let b;
        if (!!m && y !== x) {
            const t = new w(d, r);
            b = new w(o * x);
            for (let e = 0; e < o; e++) {
                const i = y * e,
                    s = i + x;
                b.set(t.slice(i, s), e * x)
            }
        } else b = new w(d, r, o * x);
        return {
            data: b,
            size: x,
            type: n,
            normalized: a,
            buffer: g,
            stride: m,
            offset: r,
            count: o,
            min: l,
            max: u
        }
    }
    static parseNodes(t, e, i, s, r) {
        if (!e.nodes) return null;
        const n = [],
            a = e.nodes.map((({
                camera: s,
                children: a,
                skin: o,
                matrix: h,
                mesh: l,
                rotation: u,
                scale: c,
                translation: d,
                weights: g,
                name: p,
                extensions: m,
                extras: f
            }) => {
                const x = void 0 !== s,
                    w = x ? new ht(t) : new rt;
                if (x) {
                    const t = e.cameras[s];
                    if ("perspective" === t.type) {
                        const {
                            yfov: e,
                            znear: i,
                            zfar: s
                        } = t.perspective;
                        w.perspective({
                            fov: e * (180 / Math.PI),
                            near: i,
                            far: s
                        })
                    } else {
                        const {
                            xmag: e,
                            ymag: i,
                            znear: s,
                            zfar: r
                        } = t.orthographic;
                        w.orthographic({
                            near: s,
                            far: r,
                            left: -e,
                            right: e,
                            top: -i,
                            bottom: i
                        })
                    }
                    n.push(w)
                }
                p && (w.name = p), f && (w.extras = f), m && (w.extensions = m), f && void 0 !== f.lightmapTexture && (f.lightmapTexture.texture = this.createTexture(t, e, r, {
                    source: f.lightmapTexture.index
                })), h ? (w.matrix.copy(h), w.decompose()) : (u && w.quaternion.copy(u), c && w.scale.copy(c), d && w.position.copy(d), w.updateMatrix());
                let y = !1,
                    b = !0,
                    v = !1;
                if (void 0 !== l && (void 0 !== o ? (i[l].primitives[i[l].primitives.instanceCount].forEach((t => {
                        f && Object.assign(t.extras, f), t.setParent(w)
                    })), i[l].primitives.instanceCount++, i[l].primitives.instanceCount === i[l].primitives.numInstances && (delete i[l].primitives.numInstances, delete i[l].primitives.instanceCount)) : i[l].primitives.forEach((t => {
                        f && Object.assign(t.extras, f), t.geometry.isInstanced && (y = !0, t.instanceCount ? b = !1 : t.instanceCount = 0, t.geometry.attributes.instanceMatrix && (v = !0, w.matrix.toArray(t.geometry.attributes.instanceMatrix.data, 16 * t.instanceCount)), t.geometry.attributes.lightmapScaleOffset && t.geometry.attributes.lightmapScaleOffset.data.set(f.lightmap_scale_offset, 4 * t.instanceCount), t.instanceCount++, t.instanceCount === t.numInstances && (delete t.numInstances, delete t.instanceCount, t.geometry.attributes.instanceMatrix && (t.geometry.attributes.instanceMatrix.needsUpdate = !0), t.geometry.attributes.lightmapScaleOffset && (t.geometry.attributes.lightmapScaleOffset.needsUpdate = !0))), y ? b && t.setParent(w) : t.setParent(w)
                    }))), v) {
                    if (!b) return null;
                    w.matrix.identity(), w.decompose()
                }
                return w
            }));
        return e.nodes.forEach((({
            children: t = []
        }, e) => {
            t.forEach((t => {
                a[t] && a[t].setParent(a[e])
            }))
        })), i.forEach((({
            primitives: t
        }, e) => {
            t.forEach(((t, e) => {
                t.isInstancedMesh && t.addFrustumCull()
            }))
        })), [a, n]
    }
    static populateSkins(t, e) {
        t && t.forEach((t => {
            t.joints = t.joints.map(((i, s) => {
                const r = e[i];
                return r.skin = t, r.bindInverse = new et(...t.inverseBindMatrices.data.slice(16 * s, 16 * (s + 1))), r
            })), t.skeleton && (t.skeleton = e[t.skeleton])
        }))
    }
    static parseAnimations(t, e, i, s) {
        return e.animations ? e.animations.map((({
            channels: t,
            samplers: r,
            name: n
        }, a) => {
            const o = t.map((({
                sampler: t,
                target: n
            }) => {
                const {
                    input: o,
                    interpolation: h = "LINEAR",
                    output: l
                } = r[t], {
                    node: u,
                    path: c
                } = n, d = i[u], g = Ui[c], p = this.parseAccessor(o, e, s).data, m = this.parseAccessor(l, e, s).data;
                return d.animations || (d.animations = []), d.animations.includes(a) || d.animations.push(a), {
                    node: d,
                    transform: g,
                    interpolation: h,
                    times: p,
                    values: m
                }
            }));
            return {
                name: n,
                animation: new Si(o)
            }
        })) : null
    }
    static parseScenes(t, e) {
        return t.scenes ? t.scenes.map((({
            nodes: t = [],
            name: i,
            extensions: s,
            extras: r
        }) => {
            const n = t.reduce(((t, i) => (e[i] && t.push(e[i]), t)), []);
            return n.extras = r, n
        })) : null
    }
    static parseLights(t, e, i, s) {
        var r, n;
        const a = {
            directional: [],
            point: [],
            spot: []
        };
        s.forEach((t => t.forEach((t => t.updateMatrixWorld()))));
        const o = (null == (n = null == (r = e.extensions) ? void 0 : r.KHR_lights_punctual) ? void 0 : n.lights) || [];
        return i.forEach((t => {
            var e;
            if (!(null == (e = null == t ? void 0 : t.extensions) ? void 0 : e.KHR_lights_punctual)) return;
            const i = t.extensions.KHR_lights_punctual.light,
                s = o[i],
                r = {
                    name: s.name || "",
                    color: {
                        value: (new E).set(s.color || 1)
                    }
                };
            switch (void 0 !== s.intensity && r.color.value.multiply(s.intensity), s.type) {
                case "directional":
                    r.direction = {
                        value: new E(0, 0, 1).transformDirection(t.worldMatrix)
                    };
                    break;
                case "point":
                    r.position = {
                        value: (new E).applyMatrix4(t.worldMatrix)
                    }, r.distance = {
                        value: s.range
                    }, r.decay = {
                        value: 2
                    };
                    break;
                case "spot":
                    Object.assign(r, s)
            }
            a[s.type].push(r)
        })), a
    }
}
let Di, ki = 0;
class Gi {
    constructor(t) {
        this.onMessage = this.onMessage.bind(this), this.queue = new Map, this.initWorker(t)
    }
    initWorker(t) {
        this.worker = new Worker(t), this.worker.onmessage = this.onMessage
    }
    onMessage({
        data: t
    }) {
        const {
            id: e,
            error: i,
            geometry: s
        } = t;
        if (i) return void console.log(i, e);
        const r = this.queue.get(e);
        this.queue.delete(e), r(s)
    }
    decodeGeometry(t, e) {
        let i;
        ki++, this.worker.postMessage({
            id: ki,
            buffer: t,
            config: e
        });
        const s = new Promise((t => i = t));
        return this.queue.set(ki, i), s
    }
}
let ji = 0;
class Vi {
    constructor(t, e) {
        Di || (Di = this.getSupportedFormat(e)), this.onMessage = this.onMessage.bind(this), this.queue = new Map, this.initWorker(t)
    }
    getSupportedFormat(t = document.createElement("canvas").getContext("webgl")) {
        return t.getExtension("WEBGL_compressed_texture_astc") ? "astc" : t.getExtension("EXT_texture_compression_bptc") ? "bptc" : t.getExtension("WEBGL_compressed_texture_s3tc") ? "s3tc" : t.getExtension("WEBGL_compressed_texture_etc1") ? "etc1" : t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc") ? "pvrtc" : "none"
    }
    initWorker(t) {
        this.worker = new Worker(t), this.worker.onmessage = this.onMessage
    }
    onMessage({
        data: t
    }) {
        const {
            id: e,
            error: i,
            image: s
        } = t;
        if (i) return void console.log(i, e);
        const r = this.queue.get(e);
        this.queue.delete(e), s.isBasis = !0, r(s)
    }
    parseTexture(t) {
        let e;
        ji++, this.worker.postMessage({
            id: ji,
            buffer: t,
            supportedFormat: Di
        });
        const i = new Promise((t => e = t));
        return this.queue.set(ji, e), i
    }
}
class Xi extends dt {
    constructor(t, e = {}) {
        var i = e,
            {
                geometry: s,
                wireColor: r = new vt(0, .75, .5)
            } = i,
            n = u(i, ["geometry", "wireColor"]);
        const a = new L(t, {
                vertex: qi,
                fragment: Yi,
                uniforms: {
                    wireColor: {
                        value: r
                    }
                }
            }),
            o = s.attributes.position.data,
            c = [],
            d = new Set;

        function g(t) {
            for (let e = 0; e < t.length; e += 2) Wi(3 * t[e], 3 * t[e + 1], o, d) && c.push(t[e], t[e + 1])
        }
        if (s.attributes.index) {
            const t = s.attributes.index.data;
            for (let e = 0; e < t.length; e += 3) g([t[e], t[e + 1], t[e + 1], t[e + 2], t[e + 2], t[e]])
        } else {
            const t = Math.floor(o.length / 3);
            for (let e = 0; e < t; e += 3) g([e, e + 1, e + 1, e + 2, e + 2, e])
        }
        const p = c.length > 65536 ? new Uint32Array(c) : new Uint16Array(c),
            m = new R(t, {
                position: h({}, s.attributes.position),
                index: {
                    data: p
                }
            });
        super(t, l(h({}, n), {
            mode: t.LINES,
            geometry: m,
            program: a
        }))
    }
}

function Wi(t, e, i, s) {
    const r = [i[t], i[t + 1], i[t + 2], i[e], i[e + 1], i[e + 2]].join("#"),
        n = [i[e], i[e + 1], i[e + 2], i[t], i[t + 1], i[t + 2]].join("#"),
        a = s.size;
    return s.add(r), s.add(n), s.size - a == 2
}
const qi = "\nattribute vec3 position;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main() {    \n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
    Yi = "\nprecision highp float;\nuniform vec3 wireColor;\n\nvoid main() {    \n    gl_FragColor = vec4(wireColor, 1.0);\n}\n";
class Hi extends dt {
    constructor(t, e = {}) {
        var i = e,
            {
                size: s = 1,
                symmetric: r = !1,
                xColor: n = new E(.96, .21, .32),
                yColor: a = new E(.44, .64, .11),
                zColor: o = new E(.18, .52, .89)
            } = i,
            c = u(i, ["size", "symmetric", "xColor", "yColor", "zColor"]);
        const d = r ? -s : 0,
            g = new Float32Array([d, 0, 0, s, 0, 0, 0, d, 0, 0, s, 0, 0, 0, d, 0, 0, s]),
            p = new Float32Array([...n, ...n, ...a, ...a, ...o, ...o]),
            m = new R(t, {
                position: {
                    size: 3,
                    data: g
                },
                color: {
                    size: 3,
                    data: p
                }
            }),
            f = new L(t, {
                vertex: Ki,
                fragment: Zi
            });
        super(t, l(h({}, c), {
            mode: t.LINES,
            geometry: m,
            program: f
        }))
    }
}
const Ki = "\nattribute vec3 position;\nattribute vec3 color;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec3 vColor;\n\nvoid main() {    \n    vColor = color;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
    Zi = "\nprecision highp float;\nvarying vec3 vColor;\n\nvoid main() {    \n    gl_FragColor = vec4(vColor, 1.0);\n}\n";
class $i extends dt {
    constructor(t, e = {}) {
        var i = e,
            {
                size: s = 10,
                divisions: r = 10,
                color: n = new E(.75, .75, .75)
            } = i,
            a = u(i, ["size", "divisions", "color"]);
        const o = new Float32Array(3 * (2 * (s + 1) * 2)),
            c = s / 2;
        for (let h = 0; h <= r; h++) {
            const t = h / r * s - c;
            o.set([t, 0, -c, t, 0, c], 12 * h), o.set([-c, 0, t, c, 0, t], 12 * h + 6)
        }
        const d = new R(t, {
                position: {
                    size: 3,
                    data: o
                }
            }),
            g = new L(t, {
                vertex: Qi,
                fragment: Ji,
                uniforms: {
                    color: {
                        value: n
                    }
                }
            });
        super(t, l(h({}, a), {
            mode: t.LINES,
            geometry: d,
            program: g
        }))
    }
}
const Qi = "\nattribute vec3 position;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvoid main() {    \n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
    Ji = "\nprecision highp float;\nuniform vec3 color;\n\nvoid main() {    \n    gl_FragColor = vec4(color, 1.0);\n}\n";
class ts extends dt {
    constructor(t, e = {}) {
        var i = e,
            {
                size: s = .1,
                color: r = new E(.86, .16, .86)
            } = i,
            n = u(i, ["size", "color"]);
        const a = t.gl,
            o = t.geometry.attributes.normal.count,
            c = new Float32Array(2 * o * 3),
            d = new Float32Array(2 * o * 3),
            g = new Float32Array(2 * o),
            p = t.geometry.attributes.normal.data,
            m = t.geometry.attributes.position.data,
            f = new Float32Array([0, s]);
        for (let h = 0; h < o; h++) {
            const t = 6 * h,
                e = 3 * h,
                i = m.subarray(e, e + 3);
            c.set(i, t), c.set(i, t + 3);
            const s = p.subarray(e, e + 3);
            d.set(s, t), d.set(s, t + 3), g.set(f, 2 * h)
        }
        const x = new R(a, {
                position: {
                    size: 3,
                    data: c
                },
                normal: {
                    size: 3,
                    data: d
                },
                size: {
                    size: 1,
                    data: g
                }
            }),
            w = new L(a, {
                vertex: es,
                fragment: is,
                uniforms: {
                    color: {
                        value: r
                    },
                    worldNormalMatrix: {
                        value: new ut
                    },
                    objectWorldMatrix: {
                        value: t.worldMatrix
                    }
                }
            });
        super(a, l(h({}, n), {
            mode: a.LINES,
            geometry: x,
            program: w
        })), this.object = t
    }
    draw(t) {
        this.program.uniforms.worldNormalMatrix.value.getNormalMatrix(this.object.worldMatrix), super.draw(t)
    }
}
const es = "\nattribute vec3 position;\nattribute vec3 normal;\nattribute float size;\n\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 objectWorldMatrix;\nuniform mat3 worldNormalMatrix;\n\nvoid main() {\n    vec3 n = normalize(worldNormalMatrix * normal) * size;\n    vec3 p = (objectWorldMatrix * vec4(position, 1.0)).xyz;\n    gl_Position = projectionMatrix * viewMatrix * vec4(p + n, 1.0);\n}\n",
    is = "\nprecision highp float;\nuniform vec3 color;\n\nvoid main() {    \n    gl_FragColor = vec4(color, 1.0);\n}\n",
    ss = new E,
    rs = new E,
    ns = new E,
    as = new E,
    os = new E;
class hs extends dt {
    constructor(t, e = {}) {
        var i = e,
            {
                size: s = .1,
                color: r = new E(.15, .86, .86)
            } = i,
            n = u(i, ["size", "color"]);
        const a = t.gl,
            o = t.geometry.attributes.position.data,
            c = new Float32Array([0, s]),
            d = t.geometry.attributes.index,
            g = d ? t => d.data[t] : t => t,
            p = d ? d.data.length : Math.floor(o.length / 3),
            m = Math.floor(p / 3),
            f = new Float32Array(2 * m * 3),
            x = new Float32Array(2 * m * 3),
            w = new Float32Array(2 * m);
        for (let h = 0; h < p; h += 3) {
            ss.fromArray(o, 3 * g(h + 0)), rs.fromArray(o, 3 * g(h + 1)), ns.fromArray(o, 3 * g(h + 2)), as.add(ss, rs).add(ns).multiply(1 / 3), ss.sub(ss, rs), ns.sub(ns, rs), os.cross(ns, ss).normalize();
            const t = 2 * h;
            f.set(as, t), f.set(as, t + 3), x.set(os, t), x.set(os, t + 3), w.set(c, h / 3 * 2)
        }
        const y = new R(a, {
                position: {
                    size: 3,
                    data: f
                },
                normal: {
                    size: 3,
                    data: x
                },
                size: {
                    size: 1,
                    data: w
                }
            }),
            b = new L(a, {
                vertex: ls,
                fragment: us,
                uniforms: {
                    color: {
                        value: r
                    },
                    worldNormalMatrix: {
                        value: new ut
                    },
                    objectWorldMatrix: {
                        value: t.worldMatrix
                    }
                }
            });
        super(a, l(h({}, n), {
            mode: a.LINES,
            geometry: y,
            program: b
        })), this.object = t
    }
    draw(t) {
        this.program.uniforms.worldNormalMatrix.value.getNormalMatrix(this.object.worldMatrix), super.draw(t)
    }
}
const ls = "\nattribute vec3 position;\nattribute vec3 normal;\nattribute float size;\n\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 objectWorldMatrix;\nuniform mat3 worldNormalMatrix;\n\nvoid main() {\n    vec3 n = normalize(worldNormalMatrix * normal) * size;\n    vec3 p = (objectWorldMatrix * vec4(position, 1.0)).xyz;\n    gl_Position = projectionMatrix * viewMatrix * vec4(p + n, 1.0);\n}\n",
    us = "\nprecision highp float;\nuniform vec3 color;\n\nvoid main() {    \n    gl_FragColor = vec4(color, 1.0);\n}\n";
class cs extends ft {
    constructor(t, e) {
        super(t, l(h({}, e), {
            target: t.TEXTURE_3D,
            width: e.width ? e.width : 2,
            height: e.height ? e.height : 2
        }));
        const i = new Image;
        i.crossOrigin = "*", i.src = e.src, i.onload = () => {
            let s = document.createElement("canvas");
            s.width = i.width, s.height = i.height;
            let r = s.getContext("2d");
            r.scale(1, -1), r.translate(0, -i.height), r.drawImage(i, 0, 0);
            const n = r.getImageData(0, 0, i.width, i.height).data;
            let a;
            switch (s = null, r = null, this.format) {
                case t.RED:
                    a = 1;
                    break;
                case t.RG:
                    a = 2;
                    break;
                case t.RGB:
                    a = 3;
                    break;
                default:
                    a = 4
            }
            const o = this.width * this.height * this.length * a,
                h = this.type === t.UNSIGNED_BYTE ? new Uint8Array(o) : new Float32Array(o);
            let l = 0;
            for (let t = 0; t < this.length; t++)
                for (let s = 0; s < this.height; s++)
                    for (let r = 0; r < this.width; r++) {
                        let o = t % e.tileCountX * this.width,
                            u = Math.floor(t / e.tileCountX) * (this.width * this.height * e.tileCountX),
                            c = r + o + (s * i.width + u);
                        let d = [n[4 * c], n[4 * c + 1], n[4 * c + 2], n[4 * c + 3]];
                        for (let t = 0; t < a; t++) this.type === this.gl.UNSIGNED_BYTE ? h[l++] = d[t] : h[l++] = d[t] / 255
                    }
            this.image = h, this.needsUpdate = !0
        }
    }
}
export {
    $e as Animation, Hi as AxesHelper, Vi as BasisManager, Pt as Box, ht as Camera, vt as Color, me as Curve, Ct as Cylinder, Gi as DracoManager, st as Euler, hs as FaceNormalsHelper, ii as Flowmap, Si as GLTFAnimation, Ni as GLTFLoader, Ci as GLTFSkin, ni as GPGPU, R as Geometry, $i as GridHelper, zi as InstancedMesh, mi as KTXTexture, ut as Mat3, et as Mat4, dt as Mesh, ei as NormalProgram, Vt as Orbit, Ie as Path, St as Plane, li as Polyline, je as Post, L as Program, H as Quat, ne as Raycast, xt as RenderTarget, N as Renderer, di as Shadow, Je as Skin, Lt as Sphere, ti as Text, ft as Texture, cs as Texture3D, yi as TextureLoader, Ot as Torus, rt as Transform, zt as Triangle, Ge as Tube, Ft as Vec2, E as Vec3, Rt as Vec4, ts as VertexNormalsHelper, Xi as WireMesh
};