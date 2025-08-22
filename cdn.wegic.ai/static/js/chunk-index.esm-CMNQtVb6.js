var t = Object.defineProperty,
    e = Object.getOwnPropertySymbols,
    i = Object.prototype.hasOwnProperty,
    r = Object.prototype.propertyIsEnumerable,
    a = (e, i, r) => i in e ? t(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[i] = r,
    o = (t, o) => {
        for (var s in o || (o = {})) i.call(o, s) && a(t, s, o[s]);
        if (e)
            for (var s of e(o)) r.call(o, s) && a(t, s, o[s]);
        return t
    },
    s = ["x", "y", "z"],
    n = function(t) {
        Object.assign(this, {
            uniforms: {},
            geometry: {
                vertices: [{
                    x: 0,
                    y: 0,
                    z: 0
                }]
            },
            mode: 0,
            modifiers: {},
            attributes: [],
            multiplier: 1,
            buffers: []
        }), Object.assign(this, t), this.prepareProgram(), this.prepareUniforms(), this.prepareAttributes()
    };
n.prototype.compileShader = function(t, e) {
    var i = this.gl.createShader(t);
    return this.gl.shaderSource(i, e), this.gl.compileShader(i), i
}, n.prototype.prepareProgram = function() {
    var t = this.gl,
        e = this.vertex,
        i = this.fragment,
        r = t.createProgram();
    t.attachShader(r, this.compileShader(35633, e)), t.attachShader(r, this.compileShader(35632, i)), t.linkProgram(r), t.useProgram(r), this.program = r
}, n.prototype.prepareUniforms = function() {
    for (var t = Object.keys(this.uniforms), e = 0; e < t.length; e += 1) {
        var i = this.gl.getUniformLocation(this.program, t[e]);
        this.uniforms[t[e]].location = i
    }
}, n.prototype.prepareAttributes = function() {
    void 0 !== this.geometry.vertices && this.attributes.push({
        name: "aPosition",
        size: 3
    }), void 0 !== this.geometry.normal && this.attributes.push({
        name: "aNormal",
        size: 3
    }), this.attributeKeys = [];
    for (var t = 0; t < this.attributes.length; t += 1) this.attributeKeys.push(this.attributes[t].name), this.prepareAttribute(this.attributes[t])
}, n.prototype.prepareAttribute = function(t) {
    for (var e = this.geometry, i = this.multiplier, r = e.vertices, a = e.normal, o = new Float32Array(i * r.length * t.size), n = 0; n < i; n += 1)
        for (var f = t.data && t.data(n, i), l = n * r.length * t.size, c = 0; c < r.length; c += 1)
            for (var h = 0; h < t.size; h += 1) {
                var u = this.modifiers[t.name];
                o[l] = void 0 !== u ? u(f, c, h, this) : "aPosition" === t.name ? r[c][s[h]] : "aNormal" === t.name ? a[c][s[h]] : f[h], l += 1
            }
    this.attributes[this.attributeKeys.indexOf(t.name)].data = o, this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(t.name)])
}, n.prototype.prepareBuffer = function(t) {
    var e = t.data,
        i = t.name,
        r = t.size,
        a = this.gl.createBuffer();
    this.gl.bindBuffer(34962, a), this.gl.bufferData(34962, e, 35044);
    var o = this.gl.getAttribLocation(this.program, i);
    this.gl.enableVertexAttribArray(o), this.gl.vertexAttribPointer(o, r, 5126, !1, 0, 0), this.buffers[this.attributeKeys.indexOf(t.name)] = {
        buffer: a,
        location: o,
        size: r
    }
}, n.prototype.render = function(t) {
    var e = this,
        i = this.uniforms,
        r = this.multiplier,
        a = this.gl;
    a.useProgram(this.program);
    for (var o = 0; o < this.buffers.length; o += 1) {
        var s = this.buffers[o],
            n = s.location,
            f = s.buffer,
            l = s.size;
        a.enableVertexAttribArray(n), a.bindBuffer(34962, f), a.vertexAttribPointer(n, l, 5126, !1, 0, 0)
    }
    Object.keys(t).forEach((function(e) {
        i[e].value = t[e].value
    })), Object.keys(i).forEach((function(t) {
        var r = i[t];
        e.uniformMap[r.type](r.location, r.value)
    })), a.drawArrays(this.mode, 0, r * this.geometry.vertices.length), this.onRender && this.onRender(this)
}, n.prototype.destroy = function() {
    for (var t = 0; t < this.buffers.length; t += 1) this.gl.deleteBuffer(this.buffers[t].buffer);
    this.gl.deleteProgram(this.program), this.gl = null
};
var f = function(t) {
    var e = this,
        i = t || {},
        r = i.canvas;
    void 0 === r && (r = document.querySelector("canvas"));
    var a = i.context;
    void 0 === a && (a = {});
    var o = i.contextType;
    void 0 === o && (o = "experimental-webgl");
    var s = i.settings;
    void 0 === s && (s = {});
    var n = r.getContext(o, Object.assign({
        alpha: !1,
        antialias: !1
    }, a));
    Object.assign(this, {
        gl: n,
        canvas: r,
        uniforms: {},
        instances: new Map,
        shouldRender: !0
    }), Object.assign(this, {
        devicePixelRatio: 1,
        clearColor: [1, 1, 1, 1],
        position: {
            x: 0,
            y: 0,
            z: 2
        },
        clip: [.001, 100]
    }), Object.assign(this, s), this.uniformMap = {
        float: function(t, e) {
            return n.uniform1f(t, e)
        },
        vec2: function(t, e) {
            return n.uniform2fv(t, e)
        },
        vec3: function(t, e) {
            return n.uniform3fv(t, e)
        },
        vec4: function(t, e) {
            return n.uniform4fv(t, e)
        },
        mat2: function(t, e) {
            return n.uniformMatrix2fv(t, !1, e)
        },
        mat3: function(t, e) {
            return n.uniformMatrix3fv(t, !1, e)
        },
        mat4: function(t, e) {
            return n.uniformMatrix4fv(t, !1, e)
        }
    }, n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL), !1 === n.getContextAttributes().alpha && (n.clearColor.apply(n, this.clearColor), n.clearDepth(1)), this.onSetup && this.onSetup(n), window.addEventListener("resize", (function() {
        return e.resize()
    })), this.resize(), this.render()
};
f.prototype.resize = function() {
    var t = this.gl,
        e = this.canvas,
        i = this.devicePixelRatio,
        r = this.position;
    e.width = e.clientWidth * i, e.height = e.clientHeight * i;
    var a = t.drawingBufferWidth,
        o = t.drawingBufferHeight,
        s = a / o;
    t.viewport(0, 0, a, o);
    var n = Math.tan(Math.PI / 180 * 22.5),
        f = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r.x, r.y, (s < 1 ? 1 : s) * -r.z, 1];
    this.uniforms.uProjectionMatrix = {
        type: "mat4",
        value: [.5 / n, 0, 0, 0, 0, s / n * .5, 0, 0, 0, 0, -(this.clip[1] + this.clip[0]) / (this.clip[1] - this.clip[0]), -1, 0, 0, -2 * this.clip[1] * (this.clip[0] / (this.clip[1] - this.clip[0])), 0]
    }, this.uniforms.uViewMatrix = {
        type: "mat4",
        value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }, this.uniforms.uModelMatrix = {
        type: "mat4",
        value: f
    }
}, f.prototype.toggle = function(t) {
    t !== this.shouldRender && (this.shouldRender = void 0 !== t ? t : !this.shouldRender, this.shouldRender && this.render())
}, f.prototype.render = function() {
    var t = this;
    this.gl.clear(16640), this.instances.forEach((function(e) {
        e.render(t.uniforms)
    })), this.onRender && this.onRender(this), this.shouldRender && requestAnimationFrame((function() {
        return t.render()
    }))
}, f.prototype.add = function(t, e) {
    void 0 === e && (e = {
        uniforms: {}
    }), void 0 === e.uniforms && (e.uniforms = {}), Object.assign(e.uniforms, JSON.parse(JSON.stringify(this.uniforms))), Object.assign(e, {
        gl: this.gl,
        uniformMap: this.uniformMap
    });
    var i = new n(e);
    return this.instances.set(t, i), i
}, f.prototype.remove = function(t) {
    var e = this.instances.get(t);
    void 0 !== e && (e.destroy(), this.instances.delete(t))
}, f.prototype.destroy = function() {
    var t = this;
    this.instances.forEach((function(e, i) {
        e.destroy(), t.instances.delete(i)
    })), this.toggle(!1)
};
var l = "phi",
    c = "theta",
    h = "mapSamples",
    u = "mapBrightness",
    p = "baseColor",
    v = "markerColor",
    m = "glowColor",
    g = "markers",
    d = "diffuse",
    b = "devicePixelRatio",
    y = "dark",
    A = "offset",
    x = "scale",
    w = "opacity",
    E = "mapBaseBrightness",
    z = {
        [l]: "A",
        [c]: "B",
        [h]: "l",
        [u]: "E",
        [p]: "R",
        [v]: "S",
        [m]: "y",
        [d]: "F",
        [y]: "G",
        [A]: "x",
        [x]: "C",
        [w]: "H",
        [E]: "I"
    },
    {
        PI: M,
        sin: C,
        cos: P
    } = Math,
    R = t => [].concat(...t.map((t => {
        let [e, i] = t.location;
        e = e * M / 180, i = i * M / 180 - M;
        let r = P(e);
        return [-r * P(i), C(e), r * C(i), t.size]
    })), [0, 0, 0, 0]),
    B = (t, e) => {
        let i = (t, i, r) => ({
                type: t,
                value: void 0 === e[i] ? r : e[i]
            }),
            r = t.getContext("webgl") ? "webgl" : "experimental-webgl",
            a = new f({
                canvas: t,
                contextType: r,
                context: o({
                    alpha: !0,
                    stencil: !1,
                    antialias: !0,
                    depth: !1,
                    preserveDrawingBuffer: !1
                }, e.context),
                settings: {
                    [b]: e[b] || 1,
                    onSetup: t => {
                        let e = t.RGB,
                            i = t.UNSIGNED_BYTE,
                            r = t.TEXTURE_2D,
                            a = t.createTexture();
                        t.bindTexture(r, a), t.texImage2D(r, 0, e, 1, 1, 0, e, i, new Uint8Array([0, 0, 0, 0]));
                        let o = new Image;
                        o.onload = () => {
                            t.bindTexture(r, a), t.texImage2D(r, 0, e, e, i, o), t.generateMipmap(r);
                            let s = t.getParameter(t.CURRENT_PROGRAM),
                                n = t.getUniformLocation(s, "J");
                            t.texParameteri(r, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(r, t.TEXTURE_MAG_FILTER, t.NEAREST), t.uniform1i(n, 0)
                        }, o.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg=="
                    }
                }
            });
        return a.add("", {
            vertex: "attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}",
            fragment: "precision highp float;uniform vec2 t,x;uniform vec3 R,S,y;uniform vec4 z[64];uniform float A,B,l,C,D,E,F,G,H,I;uniform sampler2D J;float K=1./l;mat3 L(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 w(vec3 c,out float v){c=c.xzy;float p=max(2.,floor(log2(2.236068*l*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1.,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*l+1.),-e.x*f.x+d.x*(f.y*l+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 r;for(float h=0.;h<4.;h+=1.){vec2 s=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+s);if(j>l)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float k=fract(b)*6.283185,i=1.-2.*j*K,m=sqrt(1.-i*i);vec3 o=vec3(cos(k)*m,sin(k)*m,i);float u=length(c-o);if(u<n)n=u,r=o;}v=n;return r.xzy;}void main(){vec2 b=(gl_FragCoord.xy/t*2.-1.)/C-x*vec2(1.,-1.)/t;b.x*=t.x/t.y;float c=dot(b,b);vec4 M=vec4(0.);float m=0.;if(c<=.64){for(int d=0;d<2;d++){vec4 e=vec4(0.);float a;vec3 u=vec3(0.,0.,1.),f=normalize(vec3(b,sqrt(.64-c)));f.z*=d>0?-1.:1.,u.z*=d>0?-1.:1.;vec3 g=f*L(B,A),h=w(g,a);float n=asin(h.y),i=acos(-h.x/cos(n));i=h.z<0.?-i:i;float N=max(texture2D(J,vec2(i*.5/3.141593,-(n/3.141593+.5))).x,I),O=smoothstep(8e-3,0.,a),j=dot(f,u),v=pow(j,F)*E,o=N*O*v,T=mix((1.-o)*pow(j,.4),o,G)+.1;e+=vec4(R*T,1.);int U=int(D);float p=0.;for(int k=0;k<64;k++){if(k>=U)break;vec4 q=z[k];vec3 r=q.xyz,P=r-g;float s=q.w;if(dot(P,P)>s*s*4.)continue;vec3 V=w(r,a);a=length(V-g),a<s?p+=smoothstep(s*.5,0.,a):0.;}p=min(1.,p*v),e.xyz=mix(e.xyz,S,p),e.xyz+=pow(1.-j,4.)*y,M+=e*(1.+(d>0?-H:H))/2.;}m=pow(dot(normalize(vec3(-b,sqrt(1.-c))),vec3(0.,0.,1.)),4.)*smoothstep(0.,1.,.2/(c-.64));}else{float Q=sqrt(.2/(c-.64));m=smoothstep(.5,1.,Q/(Q+1.));}gl_FragColor=M+vec4(m*y,m);}",
            uniforms: {
                t: {
                    type: "vec2",
                    value: [e.width, e.height]
                },
                A: i("float", "phi"),
                B: i("float", c),
                l: i("float", h),
                E: i("float", u),
                I: i("float", E),
                R: i("vec3", p),
                S: i("vec3", v),
                F: i("float", d),
                y: i("vec3", m),
                G: i("float", y),
                z: {
                    type: "vec4",
                    value: R(e[g])
                },
                D: {
                    type: "float",
                    value: e[g].length
                },
                x: i("vec2", A, [0, 0]),
                C: i("float", x, 1),
                H: i("float", w, 1)
            },
            mode: 4,
            geometry: {
                vertices: [{
                    x: -100,
                    y: 100,
                    z: 0
                }, {
                    x: -100,
                    y: -100,
                    z: 0
                }, {
                    x: 100,
                    y: 100,
                    z: 0
                }, {
                    x: 100,
                    y: -100,
                    z: 0
                }, {
                    x: -100,
                    y: -100,
                    z: 0
                }, {
                    x: 100,
                    y: 100,
                    z: 0
                }]
            },
            onRender: ({
                uniforms: t
            }) => {
                let i = {};
                if (e.onRender) {
                    i = e.onRender(i) || i;
                    for (let e in z) void 0 !== i[e] && (t[z[e]].value = i[e]);
                    void 0 !== i[g] && (t.z.value = R(i[g]), t.D.value = i[g].length), i.width && i.height && (t.t.value = [i.width, i.height])
                }
            }
        }), a
    };
export {
    B as
    default
};