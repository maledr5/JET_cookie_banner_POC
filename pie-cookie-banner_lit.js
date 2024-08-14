/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = globalThis, Nt = tt.ShadowRoot && (tt.ShadyCSS === void 0 || tt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ft = Symbol(), ei = /* @__PURE__ */ new WeakMap();
let mi = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ft)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Nt && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = ei.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && ei.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const te = (r) => new mi(typeof r == "string" ? r : r + "", void 0, Ft), Zi = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, i, l) => n + ((c) => {
    if (c._$cssResult$ === !0)
      return c.cssText;
    if (typeof c == "number")
      return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[l + 1], r[0]);
  return new mi(t, r, Ft);
}, Gi = (r, e) => {
  if (Nt)
    r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else
    for (const t of e) {
      const n = document.createElement("style"), i = tt.litNonce;
      i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, r.appendChild(n);
    }
}, ti = Nt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules)
    t += n.cssText;
  return te(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ji, defineProperty: Xi, getOwnPropertyDescriptor: Qi, getOwnPropertyNames: eo, getOwnPropertySymbols: to, getPrototypeOf: io } = Object, oe = globalThis, ii = oe.trustedTypes, oo = ii ? ii.emptyScript : "", zt = oe.reactiveElementPolyfillSupport, He = (r, e) => r, it = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? oo : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Vt = (r, e) => !Ji(r, e), oi = { attribute: !0, type: String, converter: it, reflect: !1, hasChanged: Vt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), oe.litPropertyMetadata ?? (oe.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let $e = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = oi) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), i = this.getPropertyDescriptor(e, n, t);
      i !== void 0 && Xi(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: i, set: l } = Qi(this.prototype, e) ?? { get() {
      return this[t];
    }, set(c) {
      this[t] = c;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(c) {
      const v = i == null ? void 0 : i.call(this);
      l.call(this, c), this.requestUpdate(e, v, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? oi;
  }
  static _$Ei() {
    if (this.hasOwnProperty(He("elementProperties")))
      return;
    const e = io(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(He("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(He("properties"))) {
      const t = this.properties, n = [...eo(t), ...to(t)];
      for (const i of n)
        this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0)
        for (const [n, i] of t)
          this.elementProperties.set(n, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const i = this._$Eu(t, n);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const i of n)
        t.unshift(ti(i));
    } else
      e !== void 0 && t.push(ti(e));
    return t;
  }
  static _$Eu(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const n of t.keys())
      this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Gi(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostConnected) == null ? void 0 : n.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) == null ? void 0 : n.call(t);
    });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$EC(e, t) {
    var l;
    const n = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, n);
    if (i !== void 0 && n.reflect === !0) {
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : it).toAttribute(t, n.type);
      this._$Em = e, c == null ? this.removeAttribute(i) : this.setAttribute(i, c), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l;
    const n = this.constructor, i = n._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const c = n.getPropertyOptions(i), v = typeof c.converter == "function" ? { fromAttribute: c.converter } : ((l = c.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? c.converter : it;
      this._$Em = i, this[i] = v.fromAttribute(t, c.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, n) {
    if (e !== void 0) {
      if (n ?? (n = this.constructor.getPropertyOptions(e)), !(n.hasChanged ?? Vt)(this[e], t))
        return;
      this.P(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, n) {
    this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, c] of this._$Ep)
          this[l] = c;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0)
        for (const [l, c] of i)
          c.wrapped !== !0 || this._$AL.has(l) || this[l] === void 0 || this.P(l, this[l], c);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((i) => {
        var l;
        return (l = i.hostUpdate) == null ? void 0 : l.call(i);
      }), this.update(t)) : this._$EU();
    } catch (i) {
      throw e = !1, this._$EU(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var i;
      return (i = n.hostUpdated) == null ? void 0 : i.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
$e.elementStyles = [], $e.shadowRootOptions = { mode: "open" }, $e[He("elementProperties")] = /* @__PURE__ */ new Map(), $e[He("finalized")] = /* @__PURE__ */ new Map(), zt == null || zt({ ReactiveElement: $e }), (oe.reactiveElementVersions ?? (oe.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const We = globalThis, ot = We.trustedTypes, ni = ot ? ot.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Rt = "$lit$", ee = `lit$${Math.random().toFixed(9).slice(2)}$`, Dt = "?" + ee, no = `<${Dt}>`, ge = document, Ke = () => ge.createComment(""), Ye = (r) => r === null || typeof r != "object" && typeof r != "function", bi = Array.isArray, gi = (r) => bi(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Mt = `[ 	
\f\r]`, Re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ri = /-->/g, ai = />/g, ue = RegExp(`>|${Mt}(?:([^\\s"'>=/]+)(${Mt}*=${Mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), si = /'/g, li = /"/g, fi = /^(?:script|style|textarea|title)$/i, ro = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), k = ro(1), ne = Symbol.for("lit-noChange"), y = Symbol.for("lit-nothing"), ci = /* @__PURE__ */ new WeakMap(), be = ge.createTreeWalker(ge, 129);
function yi(r, e) {
  if (!Array.isArray(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return ni !== void 0 ? ni.createHTML(e) : e;
}
const wi = (r, e) => {
  const t = r.length - 1, n = [];
  let i, l = e === 2 ? "<svg>" : "", c = Re;
  for (let v = 0; v < t; v++) {
    const h = r[v];
    let f, w, g = -1, x = 0;
    for (; x < h.length && (c.lastIndex = x, w = c.exec(h), w !== null); )
      x = c.lastIndex, c === Re ? w[1] === "!--" ? c = ri : w[1] !== void 0 ? c = ai : w[2] !== void 0 ? (fi.test(w[2]) && (i = RegExp("</" + w[2], "g")), c = ue) : w[3] !== void 0 && (c = ue) : c === ue ? w[0] === ">" ? (c = i ?? Re, g = -1) : w[1] === void 0 ? g = -2 : (g = c.lastIndex - w[2].length, f = w[1], c = w[3] === void 0 ? ue : w[3] === '"' ? li : si) : c === li || c === si ? c = ue : c === ri || c === ai ? c = Re : (c = ue, i = void 0);
    const $ = c === ue && r[v + 1].startsWith("/>") ? " " : "";
    l += c === Re ? h + no : g >= 0 ? (n.push(f), h.slice(0, g) + Rt + h.slice(g) + ee + $) : h + ee + (g === -2 ? v : $);
  }
  return [yi(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : "")), n];
};
class Ze {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let l = 0, c = 0;
    const v = e.length - 1, h = this.parts, [f, w] = wi(e, t);
    if (this.el = Ze.createElement(f, n), be.currentNode = this.el.content, t === 2) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (i = be.nextNode()) !== null && h.length < v; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (const g of i.getAttributeNames())
            if (g.endsWith(Rt)) {
              const x = w[c++], $ = i.getAttribute(g).split(ee), _ = /([.?@])?(.*)/.exec(x);
              h.push({ type: 1, index: l, name: _[2], strings: $, ctor: _[1] === "." ? xi : _[1] === "?" ? Ai : _[1] === "@" ? _i : Ge }), i.removeAttribute(g);
            } else
              g.startsWith(ee) && (h.push({ type: 6, index: l }), i.removeAttribute(g));
        if (fi.test(i.tagName)) {
          const g = i.textContent.split(ee), x = g.length - 1;
          if (x > 0) {
            i.textContent = ot ? ot.emptyScript : "";
            for (let $ = 0; $ < x; $++)
              i.append(g[$], Ke()), be.nextNode(), h.push({ type: 2, index: ++l });
            i.append(g[x], Ke());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === Dt)
          h.push({ type: 2, index: l });
        else {
          let g = -1;
          for (; (g = i.data.indexOf(ee, g + 1)) !== -1; )
            h.push({ type: 7, index: l }), g += ee.length - 1;
        }
      l++;
    }
  }
  static createElement(e, t) {
    const n = ge.createElement("template");
    return n.innerHTML = e, n;
  }
}
function fe(r, e, t = r, n) {
  var c, v;
  if (e === ne)
    return e;
  let i = n !== void 0 ? (c = t._$Co) == null ? void 0 : c[n] : t._$Cl;
  const l = Ye(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== l && ((v = i == null ? void 0 : i._$AO) == null || v.call(i, !1), l === void 0 ? i = void 0 : (i = new l(r), i._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = i : t._$Cl = i), i !== void 0 && (e = fe(r, i._$AS(r, e.values), i, n)), e;
}
let $i = class {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: n } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? ge).importNode(t, !0);
    be.currentNode = i;
    let l = be.nextNode(), c = 0, v = 0, h = n[0];
    for (; h !== void 0; ) {
      if (c === h.index) {
        let f;
        h.type === 2 ? f = new ct(l, l.nextSibling, this, e) : h.type === 1 ? f = new h.ctor(l, h.name, h.strings, this, e) : h.type === 6 && (f = new Ei(l, this, e)), this._$AV.push(f), h = n[++v];
      }
      c !== (h == null ? void 0 : h.index) && (l = be.nextNode(), c++);
    }
    return be.currentNode = ge, i;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}, ct = class ki {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, i) {
    this.type = 2, this._$AH = y, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = fe(this, e, t), Ye(e) ? e === y || e == null || e === "" ? (this._$AH !== y && this._$AR(), this._$AH = y) : e !== this._$AH && e !== ne && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : gi(e) ? this.k(e) : this._(e);
  }
  S(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.S(e));
  }
  _(e) {
    this._$AH !== y && Ye(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ge.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, i = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Ze.createElement(yi(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === i)
      this._$AH.p(t);
    else {
      const c = new $i(i, this), v = c.u(this.options);
      c.p(t), this.T(v), this._$AH = c;
    }
  }
  _$AC(e) {
    let t = ci.get(e.strings);
    return t === void 0 && ci.set(e.strings, t = new Ze(e)), t;
  }
  k(e) {
    bi(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const l of e)
      i === t.length ? t.push(n = new ki(this.S(Ke()), this.S(Ke()), this, this.options)) : n = t[i], n._$AI(l), i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
};
class Ge {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, i, l) {
    this.type = 1, this._$AH = y, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = y;
  }
  _$AI(e, t = this, n, i) {
    const l = this.strings;
    let c = !1;
    if (l === void 0)
      e = fe(this, e, t, 0), c = !Ye(e) || e !== this._$AH && e !== ne, c && (this._$AH = e);
    else {
      const v = e;
      let h, f;
      for (e = l[0], h = 0; h < l.length - 1; h++)
        f = fe(this, v[n + h], t, h), f === ne && (f = this._$AH[h]), c || (c = !Ye(f) || f !== this._$AH[h]), f === y ? e = y : e !== y && (e += (f ?? "") + l[h + 1]), this._$AH[h] = f;
    }
    c && !i && this.j(e);
  }
  j(e) {
    e === y ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class xi extends Ge {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === y ? void 0 : e;
  }
}
let Ai = class extends Ge {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== y);
  }
};
class _i extends Ge {
  constructor(e, t, n, i, l) {
    super(e, t, n, i, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = fe(this, e, t, 0) ?? y) === ne)
      return;
    const n = this._$AH, i = e === y && n !== y || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== y && (n === y || i);
    i && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
let Ei = class {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    fe(this, e);
  }
};
const ao = { P: Rt, A: ee, C: Dt, M: 1, L: wi, R: $i, D: gi, V: fe, I: ct, H: Ge, N: Ai, U: _i, B: xi, F: Ei }, Ct = We.litHtmlPolyfillSupport;
Ct == null || Ct(Ze, ct), (We.litHtmlVersions ?? (We.litHtmlVersions = [])).push("3.1.4");
const so = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let i = n._$litPart$;
  if (i === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = i = new ct(e.insertBefore(Ke(), l), l, void 0, t ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let V = class extends $e {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = so(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return ne;
  }
};
var ui;
V._$litElement$ = !0, V.finalized = !0, (ui = globalThis.litElementHydrateSupport) == null || ui.call(globalThis, { LitElement: V });
const Tt = globalThis.litElementPolyfillSupport;
Tt == null || Tt({ LitElement: V });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.6");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lo = { attribute: !0, type: String, converter: it, reflect: !1, hasChanged: Vt }, co = (r = lo, e, t) => {
  const { kind: n, metadata: i } = t;
  let l = globalThis.litPropertyMetadata.get(i);
  if (l === void 0 && globalThis.litPropertyMetadata.set(i, l = /* @__PURE__ */ new Map()), l.set(t.name, r), n === "accessor") {
    const { name: c } = t;
    return { set(v) {
      const h = e.get.call(this);
      e.set.call(this, v), this.requestUpdate(c, h, r);
    }, init(v) {
      return v !== void 0 && this.P(c, void 0, r), v;
    } };
  }
  if (n === "setter") {
    const { name: c } = t;
    return function(v) {
      const h = this[c];
      e.call(this, v), this.requestUpdate(c, h, r);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function u(r) {
  return (e, t) => typeof t == "object" ? co(r, e, t) : ((n, i, l) => {
    const c = i.hasOwnProperty(l);
    return i.constructor.createProperty(l, c ? { ...n, wrapped: !0 } : n), c ? Object.getOwnPropertyDescriptor(i, l) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function dt(r) {
  return u({ ...r, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It = (r, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(r, e, t), t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function jt(r, e) {
  return (t, n, i) => {
    const l = (c) => {
      var v;
      return ((v = c.renderRoot) == null ? void 0 : v.querySelector(r)) ?? null;
    };
    if (e) {
      const { get: c, set: v } = typeof n == "object" ? t : i ?? (() => {
        const h = Symbol();
        return { get() {
          return this[h];
        }, set(f) {
          this[h] = f;
        } };
      })();
      return It(t, n, { get() {
        let h = c.call(this);
        return h === void 0 && (h = l(this), (h !== null || this.hasUpdated) && v.call(this, h)), h;
      } });
    }
    return It(t, n, { get() {
      return l(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let ho;
function po(r) {
  return (e, t) => It(e, t, { get() {
    return (this.renderRoot ?? ho ?? (ho = document.createDocumentFragment())).querySelectorAll(r);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Si = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, zi = (r) => (...e) => ({ _$litDirective$: r, values: e });
let Mi = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    this._$Ct = e, this._$AM = t, this._$Ci = n;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: vo } = ao, di = () => document.createComment(""), De = (r, e, t) => {
  var l;
  const n = r._$AA.parentNode, i = e === void 0 ? r._$AB : e._$AA;
  if (t === void 0) {
    const c = n.insertBefore(di(), i), v = n.insertBefore(di(), i);
    t = new vo(c, v, r, r.options);
  } else {
    const c = t._$AB.nextSibling, v = t._$AM, h = v !== r;
    if (h) {
      let f;
      (l = t._$AQ) == null || l.call(t, r), t._$AM = r, t._$AP !== void 0 && (f = r._$AU) !== v._$AU && t._$AP(f);
    }
    if (c !== i || h) {
      let f = t._$AA;
      for (; f !== c; ) {
        const w = f.nextSibling;
        n.insertBefore(f, i), f = w;
      }
    }
  }
  return t;
}, me = (r, e, t = r) => (r._$AI(e, t), r), uo = {}, mo = (r, e = uo) => r._$AH = e, bo = (r) => r._$AH, Ot = (r) => {
  var n;
  (n = r._$AP) == null || n.call(r, !1, !0);
  let e = r._$AA;
  const t = r._$AB.nextSibling;
  for (; e !== t; ) {
    const i = e.nextSibling;
    e.remove(), e = i;
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hi = (r, e, t) => {
  const n = /* @__PURE__ */ new Map();
  for (let i = e; i <= t; i++)
    n.set(r[i], i);
  return n;
}, go = zi(class extends Mi {
  constructor(r) {
    if (super(r), r.type !== Si.CHILD)
      throw Error("repeat() can only be used in text expressions");
  }
  dt(r, e, t) {
    let n;
    t === void 0 ? t = e : e !== void 0 && (n = e);
    const i = [], l = [];
    let c = 0;
    for (const v of r)
      i[c] = n ? n(v, c) : c, l[c] = t(v, c), c++;
    return { values: l, keys: i };
  }
  render(r, e, t) {
    return this.dt(r, e, t).values;
  }
  update(r, [e, t, n]) {
    const i = bo(r), { values: l, keys: c } = this.dt(e, t, n);
    if (!Array.isArray(i))
      return this.ut = c, l;
    const v = this.ut ?? (this.ut = []), h = [];
    let f, w, g = 0, x = i.length - 1, $ = 0, _ = l.length - 1;
    for (; g <= x && $ <= _; )
      if (i[g] === null)
        g++;
      else if (i[x] === null)
        x--;
      else if (v[g] === c[$])
        h[$] = me(i[g], l[$]), g++, $++;
      else if (v[x] === c[_])
        h[_] = me(i[x], l[_]), x--, _--;
      else if (v[g] === c[_])
        h[_] = me(i[g], l[_]), De(r, h[_ + 1], i[g]), g++, _--;
      else if (v[x] === c[$])
        h[$] = me(i[x], l[$]), De(r, i[g], i[x]), x--, $++;
      else if (f === void 0 && (f = hi(c, $, _), w = hi(v, g, x)), f.has(v[g]))
        if (f.has(v[x])) {
          const C = w.get(c[$]), F = C !== void 0 ? i[C] : null;
          if (F === null) {
            const we = De(r, i[g]);
            me(we, l[$]), h[$] = we;
          } else
            h[$] = me(F, l[$]), De(r, i[g], F), i[C] = null;
          $++;
        } else
          Ot(i[x]), x--;
      else
        Ot(i[g]), g++;
    for (; $ <= _; ) {
      const C = De(r, h[_ + 1]);
      me(C, l[$]), h[$++] = C;
    }
    for (; g <= x; ) {
      const C = i[g++];
      C !== null && Ot(C);
    }
    return this.ut = c, mo(r, h), ne;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ci = zi(class extends Mi {
  constructor(r) {
    var e;
    if (super(r), r.type !== Si.ATTRIBUTE || r.name !== "class" || ((e = r.strings) == null ? void 0 : e.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return " " + Object.keys(r).filter((e) => r[e]).join(" ") + " ";
  }
  update(r, [e]) {
    var n, i;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), r.strings !== void 0 && (this.nt = new Set(r.strings.join(" ").split(/\s/).filter((l) => l !== "")));
      for (const l in e)
        e[l] && !((n = this.nt) != null && n.has(l)) && this.st.add(l);
      return this.render(e);
    }
    const t = r.element.classList;
    for (const l of this.st)
      l in e || (t.remove(l), this.st.delete(l));
    for (const l in e) {
      const c = !!e[l];
      c === this.st.has(l) || (i = this.nt) != null && i.has(l) || (c ? (t.add(l), this.st.add(l)) : (t.remove(l), this.st.delete(l)));
    }
    return ne;
  }
}), z = (r, e, t) => function(n, i) {
  const l = `#${i}`;
  Object.defineProperty(n, i, {
    get() {
      return this[l];
    },
    set(c) {
      e.includes(c) ? this[l] = c : (console.error(
        `<${r}> Invalid value "${c}" provided for property "${i}".`,
        `Must be one of: ${e.join(" | ")}.`,
        `Falling back to default value: "${t}"`
      ), this[l] = t);
    },
    configurable: !0
  });
}, fo = (r) => function(e, t) {
  const n = `#${t}`;
  Object.defineProperty(e, t, {
    get() {
      return this[n];
    },
    set(i) {
      (i == null || typeof i == "string" && i.trim() === "") && console.error(`<${r}> Missing required attribute "${t}"`), this[n] = i;
    },
    configurable: !0
  });
};
function j(r, e) {
  customElements.get(r) ? console.warn(`PIE Web Component: "${r}" has already been defined. Please ensure the component is only being defined once in your application.`) : customElements.define(r, e);
}
function yo(r) {
  return new CustomEvent(r.type, {
    detail: {
      sourceEvent: r
    },
    bubbles: r.bubbles,
    cancelable: r.cancelable
  });
}
function K(r, e, t) {
  e.startsWith("pie-") || console.warn("A custom event name should start with `pie-`");
  const n = new CustomEvent(e, {
    bubbles: !0,
    composed: !0,
    detail: t
  });
  r.dispatchEvent(n);
}
const Ti = (r) => {
  class e extends r {
    /**
     * A getter to determine whether the text direction is right-to-left (RTL).
     * If the `dir` property is present on the component, it will be used to determine the text direction.
     * If running on the client-side (not SSR) and the `dir` property is not present, the text direction will be inferred
     * from the document's root element. This inference is not available during SSR.
     * In all other cases, it will return `false`, indicating a left-to-right (LTR) text direction.
     *
     * @returns {boolean} - Returns `true` if the text direction is RTL, otherwise `false`.
     */
    get isRTL() {
      return this.dir ? this.dir === "rtl" : this.dir ? !1 : document.documentElement.getAttribute("dir") === "rtl";
    }
  }
  return e;
}, Oi = (r) => {
  class e extends r {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...n) {
      super(...n), this._internals = this.attachInternals();
    }
    get form() {
      return this._internals.form;
    }
  }
  return e.formAssociated = !0, e;
}, wo = `*,*:after,*:before{box-sizing:inherit}@keyframes rotate360{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.c-spinner{--spinner-size: 24px;--spinner-left-color: hsl(var(--spinner-base-color-h), var(--spinner-base-color-s), var(--spinner-base-color-l), 1);--spinner-right-color: hsl(var(--spinner-base-color-h), var(--spinner-base-color-s), var(--spinner-base-color-l), .35);block-size:var(--spinner-size);inline-size:var(--spinner-size);border-radius:var(--dt-radius-rounded-e);border-width:calc(var(--spinner-size) / 8);border-style:solid;border-color:var(--spinner-left-color) var(--spinner-right-color) var(--spinner-right-color) var(--spinner-left-color);will-change:transform;animation:rotate360 1.15s linear infinite;--spinner-base-color-h: var(--dt-color-content-brand-h);--spinner-base-color-s: var(--dt-color-content-brand-s);--spinner-base-color-l: var(--dt-color-content-brand-l)}.c-spinner[variant=secondary]{--spinner-base-color-h: var(--dt-color-content-interactive-secondary-h);--spinner-base-color-s: var(--dt-color-content-interactive-secondary-s);--spinner-base-color-l: var(--dt-color-content-interactive-secondary-l)}.c-spinner[variant=inverse]{--spinner-base-color-h: var(--dt-color-content-inverse-h);--spinner-base-color-s: var(--dt-color-content-inverse-s);--spinner-base-color-l: var(--dt-color-content-inverse-l)}.c-spinner[size=xsmall]{--spinner-size: 16px}.c-spinner[size=small]{--spinner-size: 20px}.c-spinner[size=large]{--spinner-size: 32px}.c-spinner[size=xlarge]{--spinner-size: 48px}.c-spinner-label{position:absolute;display:block;height:1px;width:1px;overflow:hidden;padding:1px;white-space:nowrap}
`, $o = ["xsmall", "small", "medium", "large", "xlarge"], ko = ["brand", "secondary", "inverse"], nt = {
  size: "medium",
  variant: "brand"
};
var xo = Object.defineProperty, Ao = Object.getOwnPropertyDescriptor, Ht = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Ao(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && xo(e, t, i), i;
};
const Wt = "pie-spinner";
let Je = class extends V {
  constructor() {
    super(...arguments), this.size = nt.size, this.variant = nt.variant;
  }
  render() {
    const { variant: e, size: t, aria: n } = this;
    return k`
            <div
                data-test-id="pie-spinner"
                class="c-spinner"
                role="status"
                aria-live="polite"
                size="${t}"
                variant="${e}">
                   ${n != null && n.label ? k`<span class="c-spinner-label">${n.label}</span>` : y}
                </div>`;
  }
};
Je.styles = te(wo);
Ht([
  u({ type: Object })
], Je.prototype, "aria", 2);
Ht([
  u(),
  z(Wt, $o, nt.size)
], Je.prototype, "size", 2);
Ht([
  u(),
  z(Wt, ko, nt.variant)
], Je.prototype, "variant", 2);
j(Wt, Je);
const _o = ["xsmall", "small-productive", "small-expressive", "medium", "large"], Eo = ["submit", "button", "reset"], So = [
  "primary",
  "secondary",
  "outline",
  "outline-inverse",
  "ghost",
  "inverse",
  "ghost-inverse",
  "destructive",
  "destructive-ghost"
], zo = ["leading", "trailing"], D = {
  size: "medium",
  type: "submit",
  variant: "primary",
  iconPlacement: "leading",
  disabled: !1,
  isLoading: !1,
  isFullWidth: !1,
  isResponsive: !1
}, Mo = `*,*:after,*:before{box-sizing:inherit}.o-btn{--btn-border-radius: var(--dt-radius-rounded-e);--btn-font-family: var(--dt-font-interactive-l-family);--btn-font-weight: var(--dt-font-interactive-l-weight);--btn-bg-color: var(--dt-color-interactive-brand);--btn-text-color: var(--dt-color-content-interactive-primary);--btn-height--xsmall: 32px;--btn-height--small: 40px;--btn-height--medium: 48px;--btn-height--large: 56px;--icon-display-override: block;position:relative;display:flex;gap:var(--dt-spacing-b);align-items:center;justify-content:center;height:var(--btn-height);padding:var(--btn-padding);border:none;border-radius:var(--btn-border-radius);outline:none;background-color:var(--btn-bg-color);font-family:var(--btn-font-family);font-size:var(--btn-font-size);font-weight:var(--btn-font-weight);color:var(--btn-text-color);line-height:var(--btn-line-height);cursor:pointer;-webkit-user-select:none;user-select:none;inline-size:var(--btn-inline-size)}.o-btn.o-btn--primary:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--hover-modifier)))}.o-btn.o-btn--primary:active:not(:disabled),.o-btn.o-btn--primary.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--active-modifier)))}.o-btn.o-btn--primary.o-btn--xsmall,.o-btn.o-btn--primary.o-btn--small-productive{--btn-bg-color: var(--dt-color-interactive-primary)}.o-btn.o-btn--primary.o-btn--xsmall:hover:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive:hover:not(:disabled){--hover-modifier: var(--dt-color-hover-02);--btn-bg-color: hsl(var(--dt-color-interactive-primary-h), var(--dt-color-interactive-primary-s), calc(var(--dt-color-interactive-primary-l) + var(--hover-modifier)))}.o-btn.o-btn--primary.o-btn--xsmall:active:not(:disabled),.o-btn.o-btn--primary.o-btn--xsmall.is-loading:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive:active:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive.is-loading:not(:disabled){--active-modifier: var(--dt-color-active-02);--btn-bg-color: hsl(var(--dt-color-interactive-primary-h), var(--dt-color-interactive-primary-s), calc(var(--dt-color-interactive-primary-l) + var(--active-modifier)))}@media (min-width: 769px){.o-btn.o-btn--primary.o-btn--xsmall.o-btn--expressive.o-btn--responsive,.o-btn.o-btn--primary.o-btn--small-productive.o-btn--responsive{--btn-bg-color: var(--dt-color-interactive-brand)}.o-btn.o-btn--primary.o-btn--xsmall.o-btn--expressive.o-btn--responsive:hover:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive.o-btn--responsive:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--hover-modifier)))}.o-btn.o-btn--primary.o-btn--xsmall.o-btn--expressive.o-btn--responsive:active:not(:disabled),.o-btn.o-btn--primary.o-btn--xsmall.o-btn--expressive.o-btn--responsive.is-loading:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive.o-btn--responsive:active:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive.o-btn--responsive.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--active-modifier)))}}.o-btn.o-btn--secondary{--btn-bg-color: var(--dt-color-interactive-secondary);--btn-text-color: var(--dt-color-content-interactive-secondary)}.o-btn.o-btn--secondary:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-secondary-h), var(--dt-color-interactive-secondary-s), calc(var(--dt-color-interactive-secondary-l) + var(--hover-modifier)))}.o-btn.o-btn--secondary:active:not(:disabled),.o-btn.o-btn--secondary.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-secondary-h), var(--dt-color-interactive-secondary-s), calc(var(--dt-color-interactive-secondary-l) + var(--active-modifier)))}.o-btn.o-btn--outline{--btn-bg-color: transparent;--btn-text-color: var(--dt-color-content-interactive-secondary);border:1px solid var(--dt-color-border-strong)}.o-btn.o-btn--outline:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-btn.o-btn--outline:active:not(:disabled),.o-btn.o-btn--outline.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-btn.o-btn--ghost{--btn-bg-color: transparent;--btn-text-color: var(--dt-color-content-link)}.o-btn.o-btn--ghost:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-btn.o-btn--ghost:active:not(:disabled),.o-btn.o-btn--ghost.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-btn.o-btn--inverse{--btn-bg-color: var(--dt-color-interactive-inverse);--btn-text-color: var(--dt-color-content-interactive-secondary)}.o-btn.o-btn--inverse:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-inverse-h), var(--dt-color-interactive-inverse-s), calc(var(--dt-color-interactive-inverse-l) + var(--hover-modifier)))}.o-btn.o-btn--inverse:active:not(:disabled),.o-btn.o-btn--inverse.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-inverse-h), var(--dt-color-interactive-inverse-s), calc(var(--dt-color-interactive-inverse-l) + var(--active-modifier)))}.o-btn.o-btn--ghost-inverse,.o-btn.o-btn--outline-inverse{--btn-bg-color: transparent;--btn-text-color: var(--dt-color-content-interactive-primary)}.o-btn.o-btn--ghost-inverse:hover:not(:disabled),.o-btn.o-btn--outline-inverse:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-container-default-h), var(--dt-color-container-default-s), var(--dt-color-container-default-l), var(--hover-modifier))}.o-btn.o-btn--ghost-inverse:active:not(:disabled),.o-btn.o-btn--ghost-inverse.is-loading:not(:disabled),.o-btn.o-btn--outline-inverse:active:not(:disabled),.o-btn.o-btn--outline-inverse.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-container-default-h), var(--dt-color-container-default-s), var(--dt-color-container-default-l), var(--active-modifier))}.o-btn.o-btn--outline-inverse:not([disabled]){border:1px solid var(--dt-color-border-strong)}.o-btn.o-btn--destructive{--btn-bg-color: var(--dt-color-support-error)}.o-btn.o-btn--destructive:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-support-error-h), var(--dt-color-support-error-s), calc(var(--dt-color-support-error-l) + var(--hover-modifier)))}.o-btn.o-btn--destructive:active:not(:disabled),.o-btn.o-btn--destructive.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-support-error-h), var(--dt-color-support-error-s), calc(var(--dt-color-support-error-l) + var(--active-modifier)))}.o-btn.o-btn--destructive-ghost{--btn-bg-color: transparent;--btn-text-color: var(--dt-color-content-interactive-error)}.o-btn.o-btn--destructive-ghost:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-btn.o-btn--destructive-ghost:active:not(:disabled),.o-btn.o-btn--destructive-ghost.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-btn.o-btn--xsmall{--btn-height: var(--btn-height--xsmall);--btn-padding: 6px var(--dt-spacing-b);--btn-font-size: calc(var(--dt-font-size-14) * 1px);--btn-line-height: calc(var(--dt-font-size-14-line-height) * 1px);--icon-size-override: 16px}@media (min-width: 769px){.o-btn.o-btn--xsmall.o-btn--responsive{--btn-height: var(--btn-height--small);--btn-padding: 8px var(--dt-spacing-d);--btn-font-size: calc(var(--dt-font-size-16) * 1px);--btn-line-height: calc(var(--dt-font-size-16-line-height) * 1px);--icon-size-override: 20px}.o-btn.o-btn--xsmall.o-btn--responsive.o-btn--expressive{--btn-height: var(--btn-height--small);--btn-padding: 6px var(--dt-spacing-d);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 20px}}.o-btn.o-btn--small-expressive{--btn-height: var(--btn-height--small);--btn-padding: 6px var(--dt-spacing-d);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 20px}@media (min-width: 769px){.o-btn.o-btn--small-expressive.o-btn--responsive{--btn-height: var(--btn-height--medium);--btn-padding: 10px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}}.o-btn.o-btn--small-productive{--btn-height: var(--btn-height--small);--btn-padding: 8px var(--dt-spacing-d);--btn-font-size: calc(var(--dt-font-size-16) * 1px);--btn-line-height: calc(var(--dt-font-size-16-line-height) * 1px);--icon-size-override: 20px}@media (min-width: 769px){.o-btn.o-btn--small-productive.o-btn--responsive{--btn-height: var(--btn-height--medium);--btn-padding: 10px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}}.o-btn.o-btn--medium{--btn-height: var(--btn-height--medium);--btn-padding: 10px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}@media (min-width: 769px){.o-btn.o-btn--medium.o-btn--responsive{--btn-height: var(--btn-height--large);--btn-padding: 14px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}}.o-btn.o-btn--large{--btn-height: var(--btn-height--large);--btn-padding: 14px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}.o-btn.o-btn--fullWidth{--btn-inline-size: 100%}.o-btn[disabled]{--btn-text-color: var(--dt-color-content-disabled) !important;cursor:not-allowed}.o-btn[disabled]:not(.o-btn--ghost,.o-btn--ghost-inverse,.o-btn--destructive-ghost){--btn-bg-color: var(--dt-color-disabled-01) !important}.o-btn[disabled].o-btn--outline{border-color:var(--dt-color-disabled-01)!important}.o-btn.is-loading>*:not(pie-spinner){visibility:hidden}.o-btn.is-loading pie-spinner{position:absolute}.o-btn:focus-visible{box-shadow:0 0 0 2px var(--dt-color-focus-inner),0 0 0 4px var(--dt-color-focus-outer);outline:none}::slotted(svg){height:var(--icon-size-override);width:var(--icon-size-override)}
`;
(function() {
  (function(r) {
    const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), F = {
      ariaAtomic: "aria-atomic",
      ariaAutoComplete: "aria-autocomplete",
      ariaBusy: "aria-busy",
      ariaChecked: "aria-checked",
      ariaColCount: "aria-colcount",
      ariaColIndex: "aria-colindex",
      ariaColIndexText: "aria-colindextext",
      ariaColSpan: "aria-colspan",
      ariaCurrent: "aria-current",
      ariaDescription: "aria-description",
      ariaDisabled: "aria-disabled",
      ariaExpanded: "aria-expanded",
      ariaHasPopup: "aria-haspopup",
      ariaHidden: "aria-hidden",
      ariaInvalid: "aria-invalid",
      ariaKeyShortcuts: "aria-keyshortcuts",
      ariaLabel: "aria-label",
      ariaLevel: "aria-level",
      ariaLive: "aria-live",
      ariaModal: "aria-modal",
      ariaMultiLine: "aria-multiline",
      ariaMultiSelectable: "aria-multiselectable",
      ariaOrientation: "aria-orientation",
      ariaPlaceholder: "aria-placeholder",
      ariaPosInSet: "aria-posinset",
      ariaPressed: "aria-pressed",
      ariaReadOnly: "aria-readonly",
      ariaRelevant: "aria-relevant",
      ariaRequired: "aria-required",
      ariaRoleDescription: "aria-roledescription",
      ariaRowCount: "aria-rowcount",
      ariaRowIndex: "aria-rowindex",
      ariaRowIndexText: "aria-rowindextext",
      ariaRowSpan: "aria-rowspan",
      ariaSelected: "aria-selected",
      ariaSetSize: "aria-setsize",
      ariaSort: "aria-sort",
      ariaValueMax: "aria-valuemax",
      ariaValueMin: "aria-valuemin",
      ariaValueNow: "aria-valuenow",
      ariaValueText: "aria-valuetext",
      role: "role"
    }, we = (a, o) => {
      for (let s in F) {
        o[s] = null;
        let d = null;
        const p = F[s];
        Object.defineProperty(o, s, {
          get() {
            return d;
          },
          set(m) {
            d = m, a.isConnected ? a.setAttribute(p, m) : w.set(a, o);
          }
        });
      }
    };
    function _e(a) {
      const o = i.get(a), { form: s } = o;
      Te(a, s, o), Ce(a, o.labels);
    }
    const Ee = (a, o = !1) => {
      const s = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
        acceptNode(m) {
          return i.has(m) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      let d = s.nextNode();
      const p = !o || a.disabled;
      for (; d; )
        d.formDisabledCallback && p && ce(d, a.disabled), d = s.nextNode();
    }, Se = { attributes: !0, attributeFilter: ["disabled", "name"] }, G = Q() ? new MutationObserver((a) => {
      for (const o of a) {
        const s = o.target;
        if (o.attributeName === "disabled" && (s.constructor.formAssociated ? ce(s, s.hasAttribute("disabled")) : s.localName === "fieldset" && Ee(s)), o.attributeName === "name" && s.constructor.formAssociated) {
          const d = i.get(s), p = f.get(s);
          d.setFormValue(p);
        }
      }
    }) : {};
    function se(a) {
      a.forEach((o) => {
        const { addedNodes: s, removedNodes: d } = o, p = Array.from(s), m = Array.from(d);
        p.forEach((b) => {
          var E;
          if (i.has(b) && b.constructor.formAssociated && _e(b), w.has(b)) {
            const A = w.get(b);
            Object.keys(F).filter((S) => A[S] !== null).forEach((S) => {
              b.setAttribute(F[S], A[S]);
            }), w.delete(b);
          }
          if (C.has(b)) {
            const A = C.get(b);
            b.setAttribute("internals-valid", A.validity.valid.toString()), b.setAttribute("internals-invalid", (!A.validity.valid).toString()), b.setAttribute("aria-invalid", (!A.validity.valid).toString()), C.delete(b);
          }
          if (b.localName === "form") {
            const A = h.get(b), S = document.createTreeWalker(b, NodeFilter.SHOW_ELEMENT, {
              acceptNode(ve) {
                return i.has(ve) && ve.constructor.formAssociated && !(A && A.has(ve)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
              }
            });
            let U = S.nextNode();
            for (; U; )
              _e(U), U = S.nextNode();
          }
          b.localName === "fieldset" && ((E = G.observe) === null || E === void 0 || E.call(G, b, Se), Ee(b, !0));
        }), m.forEach((b) => {
          const E = i.get(b);
          E && n.get(E) && ze(E), v.has(b) && v.get(b).disconnect();
        });
      });
    }
    function vt(a) {
      a.forEach((o) => {
        const { removedNodes: s } = o;
        s.forEach((d) => {
          const p = $.get(o.target);
          i.has(d) && Pe(d), p.disconnect();
        });
      });
    }
    const ut = (a) => {
      var o, s;
      const d = new MutationObserver(vt);
      !((o = window == null ? void 0 : window.ShadyDOM) === null || o === void 0) && o.inUse && a.mode && a.host && (a = a.host), (s = d.observe) === null || s === void 0 || s.call(d, a, { childList: !0 }), $.set(a, d);
    };
    Q() && new MutationObserver(se);
    const le = {
      childList: !0,
      subtree: !0
    }, ce = (a, o) => {
      a.toggleAttribute("internals-disabled", o), o ? a.setAttribute("aria-disabled", "true") : a.removeAttribute("aria-disabled"), a.formDisabledCallback && a.formDisabledCallback.apply(a, [o]);
    }, ze = (a) => {
      n.get(a).forEach((o) => {
        o.remove();
      }), n.set(a, []);
    }, Me = (a, o) => {
      const s = document.createElement("input");
      return s.type = "hidden", s.name = a.getAttribute("name"), a.after(s), n.get(o).push(s), s;
    }, mt = (a, o) => {
      var s;
      n.set(o, []), (s = G.observe) === null || s === void 0 || s.call(G, a, Se);
    }, Ce = (a, o) => {
      if (o.length) {
        Array.from(o).forEach((d) => d.addEventListener("click", a.click.bind(a)));
        let s = o[0].id;
        o[0].id || (s = `${o[0].htmlFor}_Label`, o[0].id = s), a.setAttribute("aria-labelledby", s);
      }
    }, J = (a) => {
      const o = Array.from(a.elements).filter((m) => !m.tagName.includes("-") && m.validity).map((m) => m.validity.valid), s = h.get(a) || [], d = Array.from(s).filter((m) => m.isConnected).map((m) => i.get(m).validity.valid), p = [...o, ...d].includes(!1);
      a.toggleAttribute("internals-invalid", p), a.toggleAttribute("internals-valid", !p);
    }, bt = (a) => {
      J(X(a.target));
    }, gt = (a) => {
      J(X(a.target));
    }, ft = (a) => {
      const o = ["button[type=submit]", "input[type=submit]", "button:not([type])"].map((s) => `${s}:not([disabled])`).map((s) => `${s}:not([form])${a.id ? `,${s}[form='${a.id}']` : ""}`).join(",");
      a.addEventListener("click", (s) => {
        if (s.target.closest(o)) {
          const d = h.get(a);
          if (a.noValidate)
            return;
          d.size && Array.from(d).reverse().map((p) => i.get(p).reportValidity()).includes(!1) && s.preventDefault();
        }
      });
    }, yt = (a) => {
      const o = h.get(a.target);
      o && o.size && o.forEach((s) => {
        s.constructor.formAssociated && s.formResetCallback && s.formResetCallback.apply(s);
      });
    }, Te = (a, o, s) => {
      if (o) {
        const d = h.get(o);
        if (d)
          d.add(a);
        else {
          const p = /* @__PURE__ */ new Set();
          p.add(a), h.set(o, p), ft(o), o.addEventListener("reset", yt), o.addEventListener("input", bt), o.addEventListener("change", gt);
        }
        c.set(o, { ref: a, internals: s }), a.constructor.formAssociated && a.formAssociatedCallback && setTimeout(() => {
          a.formAssociatedCallback.apply(a, [o]);
        }, 0), J(o);
      }
    }, X = (a) => {
      let o = a.parentNode;
      return o && o.tagName !== "FORM" && (o = X(o)), o;
    }, T = (a, o, s = DOMException) => {
      if (!a.constructor.formAssociated)
        throw new s(o);
    }, Oe = (a, o, s) => {
      const d = h.get(a);
      return d && d.size && d.forEach((p) => {
        i.get(p)[s]() || (o = !1);
      }), o;
    }, Pe = (a) => {
      if (a.constructor.formAssociated) {
        const o = i.get(a), { labels: s, form: d } = o;
        Ce(a, s), Te(a, d, o);
      }
    };
    function Q() {
      return typeof MutationObserver < "u";
    }
    class wt {
      constructor() {
        this.badInput = !1, this.customError = !1, this.patternMismatch = !1, this.rangeOverflow = !1, this.rangeUnderflow = !1, this.stepMismatch = !1, this.tooLong = !1, this.tooShort = !1, this.typeMismatch = !1, this.valid = !0, this.valueMissing = !1, Object.seal(this);
      }
    }
    const $t = (a) => (a.badInput = !1, a.customError = !1, a.patternMismatch = !1, a.rangeOverflow = !1, a.rangeUnderflow = !1, a.stepMismatch = !1, a.tooLong = !1, a.tooShort = !1, a.typeMismatch = !1, a.valid = !0, a.valueMissing = !1, a), kt = (a, o, s) => (a.valid = xt(o), Object.keys(o).forEach((d) => a[d] = o[d]), s && J(s), a), xt = (a) => {
      let o = !0;
      for (let s in a)
        s !== "valid" && a[s] !== !1 && (o = !1);
      return o;
    }, de = /* @__PURE__ */ new WeakMap();
    function Be(a, o) {
      a.toggleAttribute(o, !0), a.part && a.part.add(o);
    }
    class he extends Set {
      static get isPolyfilled() {
        return !0;
      }
      constructor(o) {
        if (super(), !o || !o.tagName || o.tagName.indexOf("-") === -1)
          throw new TypeError("Illegal constructor");
        de.set(this, o);
      }
      add(o) {
        if (!/^--/.test(o) || typeof o != "string")
          throw new DOMException(`Failed to execute 'add' on 'CustomStateSet': The specified value ${o} must start with '--'.`);
        const s = super.add(o), d = de.get(this), p = `state${o}`;
        return d.isConnected ? Be(d, p) : setTimeout(() => {
          Be(d, p);
        }), s;
      }
      clear() {
        for (let [o] of this.entries())
          this.delete(o);
        super.clear();
      }
      delete(o) {
        const s = super.delete(o), d = de.get(this);
        return d.isConnected ? (d.toggleAttribute(`state${o}`, !1), d.part && d.part.remove(`state${o}`)) : setTimeout(() => {
          d.toggleAttribute(`state${o}`, !1), d.part && d.part.remove(`state${o}`);
        }), s;
      }
    }
    function Le(a, o, s, d) {
      if (s === "a" && !d)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof o == "function" ? a !== o || !d : !o.has(a))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return s === "m" ? d : s === "a" ? d.call(a) : d ? d.value : o.get(a);
    }
    function At(a, o, s, d, p) {
      if (d === "m")
        throw new TypeError("Private method is not writable");
      if (d === "a" && !p)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof o == "function" ? a !== o || !p : !o.has(a))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return d === "a" ? p.call(a, s) : p ? p.value = s : o.set(a, s), s;
    }
    var W;
    class _t {
      constructor(o) {
        W.set(this, void 0), At(this, W, o, "f");
        for (let s = 0; s < o.length; s++) {
          let d = o[s];
          this[s] = d, d.hasAttribute("name") && (this[d.getAttribute("name")] = d);
        }
        Object.freeze(this);
      }
      get length() {
        return Le(this, W, "f").length;
      }
      [(W = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return Le(this, W, "f")[Symbol.iterator]();
      }
      item(o) {
        return this[o] == null ? null : this[o];
      }
      namedItem(o) {
        return this[o] == null ? null : this[o];
      }
    }
    function Et() {
      const a = HTMLFormElement.prototype.checkValidity;
      HTMLFormElement.prototype.checkValidity = s;
      const o = HTMLFormElement.prototype.reportValidity;
      HTMLFormElement.prototype.reportValidity = d;
      function s(...m) {
        let b = a.apply(this, m);
        return Oe(this, b, "checkValidity");
      }
      function d(...m) {
        let b = o.apply(this, m);
        return Oe(this, b, "reportValidity");
      }
      const { get: p } = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "elements");
      Object.defineProperty(HTMLFormElement.prototype, "elements", {
        get(...m) {
          const b = p.call(this, ...m), E = Array.from(h.get(this) || []);
          if (E.length === 0)
            return b;
          const A = Array.from(b).concat(E).sort((S, U) => S.compareDocumentPosition ? S.compareDocumentPosition(U) & 2 ? 1 : -1 : 0);
          return new _t(A);
        }
      });
    }
    class Ie {
      static get isPolyfilled() {
        return !0;
      }
      constructor(o) {
        if (!o || !o.tagName || o.tagName.indexOf("-") === -1)
          throw new TypeError("Illegal constructor");
        const s = o.getRootNode(), d = new wt();
        this.states = new he(o), e.set(this, o), t.set(this, d), i.set(o, this), we(o, this), mt(o, this), Object.seal(this), s instanceof DocumentFragment && ut(s);
      }
      checkValidity() {
        const o = e.get(this);
        if (T(o, "Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !this.willValidate)
          return !0;
        const s = t.get(this);
        if (!s.valid) {
          const d = new Event("invalid", {
            bubbles: !1,
            cancelable: !0,
            composed: !1
          });
          o.dispatchEvent(d);
        }
        return s.valid;
      }
      get form() {
        const o = e.get(this);
        T(o, "Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element.");
        let s;
        return o.constructor.formAssociated === !0 && (s = X(o)), s;
      }
      get labels() {
        const o = e.get(this);
        T(o, "Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.");
        const s = o.getAttribute("id"), d = o.getRootNode();
        return d && s ? d.querySelectorAll(`[for="${s}"]`) : [];
      }
      reportValidity() {
        const o = e.get(this);
        if (T(o, "Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !this.willValidate)
          return !0;
        const s = this.checkValidity(), d = x.get(this);
        if (d && !o.constructor.formAssociated)
          throw new DOMException("Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.");
        return !s && d && (o.focus(), d.focus()), s;
      }
      setFormValue(o) {
        const s = e.get(this);
        if (T(s, "Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element."), ze(this), o != null && !(o instanceof FormData)) {
          if (s.getAttribute("name")) {
            const d = Me(s, this);
            d.value = o;
          }
        } else
          o != null && o instanceof FormData && Array.from(o).reverse().forEach(([d, p]) => {
            if (typeof p == "string") {
              const m = Me(s, this);
              m.name = d, m.value = p;
            }
          });
        f.set(s, o);
      }
      setValidity(o, s, d) {
        const p = e.get(this);
        if (T(p, "Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !o)
          throw new TypeError("Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present.");
        x.set(this, d);
        const m = t.get(this), b = {};
        for (const S in o)
          b[S] = o[S];
        Object.keys(b).length === 0 && $t(m);
        const E = Object.assign(Object.assign({}, m), b);
        delete E.valid;
        const { valid: A } = kt(m, E, this.form);
        if (!A && !s)
          throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.");
        l.set(this, A ? "" : s), p.isConnected ? (p.toggleAttribute("internals-invalid", !A), p.toggleAttribute("internals-valid", A), p.setAttribute("aria-invalid", `${!A}`)) : C.set(p, this);
      }
      get shadowRoot() {
        const o = e.get(this);
        return g.get(o) || null;
      }
      get validationMessage() {
        const o = e.get(this);
        return T(o, "Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element."), l.get(this);
      }
      get validity() {
        const o = e.get(this);
        return T(o, "Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element."), t.get(this);
      }
      get willValidate() {
        const o = e.get(this);
        return T(o, "Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element."), !(o.disabled || o.hasAttribute("disabled") || o.hasAttribute("readonly"));
      }
    }
    function St() {
      if (typeof window > "u" || !window.ElementInternals || !HTMLElement.prototype.attachInternals)
        return !1;
      class a extends HTMLElement {
        constructor() {
          super(), this.internals = this.attachInternals();
        }
      }
      const o = `element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g, "")}`;
      customElements.define(o, a);
      const s = new a();
      return [
        "shadowRoot",
        "form",
        "willValidate",
        "validity",
        "validationMessage",
        "labels",
        "setFormValue",
        "setValidity",
        "checkValidity",
        "reportValidity"
      ].every((d) => d in s.internals);
    }
    let Ne = !1, Fe = !1;
    function pe(a) {
      Fe || (Fe = !0, window.CustomStateSet = he, a && (HTMLElement.prototype.attachInternals = function(...o) {
        const s = a.call(this, o);
        return s.states = new he(this), s;
      }));
    }
    function Ve(a = !0) {
      if (!Ne) {
        if (Ne = !0, typeof window < "u" && (window.ElementInternals = Ie), typeof CustomElementRegistry < "u") {
          const o = CustomElementRegistry.prototype.define;
          CustomElementRegistry.prototype.define = function(s, d, p) {
            if (d.formAssociated) {
              const m = d.prototype.connectedCallback;
              d.prototype.connectedCallback = function() {
                _.has(this) || (_.set(this, !0), this.hasAttribute("disabled") && ce(this, !0)), m != null && m.apply(this), Pe(this);
              };
            }
            o.call(this, s, d, p);
          };
        }
        if (typeof HTMLElement < "u" && (HTMLElement.prototype.attachInternals = function() {
          if (this.tagName) {
            if (this.tagName.indexOf("-") === -1)
              throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.");
          } else
            return {};
          if (i.has(this))
            throw new DOMException("DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
          return new Ie(this);
        }), typeof Element < "u") {
          let o = function(...d) {
            const p = s.apply(this, d);
            if (g.set(this, p), Q()) {
              const m = new MutationObserver(se);
              window.ShadyDOM ? m.observe(this, le) : m.observe(p, le), v.set(this, m);
            }
            return p;
          };
          const s = Element.prototype.attachShadow;
          Element.prototype.attachShadow = o;
        }
        Q() && typeof document < "u" && new MutationObserver(se).observe(document.documentElement, le), typeof HTMLFormElement < "u" && Et(), (a || typeof window < "u" && !window.CustomStateSet) && pe();
      }
    }
    return customElements.polyfillWrapFlushCallback || (St() ? typeof window < "u" && !window.CustomStateSet && pe(HTMLElement.prototype.attachInternals) : Ve(!1)), r.forceCustomStateSetPolyfill = pe, r.forceElementInternalsPolyfill = Ve, Object.defineProperty(r, "__esModule", { value: !0 }), r;
  })({});
})();
var Co = Object.defineProperty, To = Object.getOwnPropertyDescriptor, B = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? To(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && Co(e, t, i), i;
};
const Xe = "pie-button";
let O = class extends Oi(V) {
  constructor() {
    super(...arguments), this.size = D.size, this.type = D.type, this.variant = D.variant, this.iconPlacement = D.iconPlacement, this.disabled = D.disabled, this.isLoading = D.isLoading, this.isFullWidth = D.isFullWidth, this.isResponsive = D.isResponsive, this._handleFormKeyDown = (e) => {
      if (!(e.key !== "Enter" || this.type !== "submit" || this.disabled)) {
        if (e.target instanceof HTMLElement) {
          const t = e.target.tagName.toLowerCase();
          if (t === "button" || t === "pie-button")
            return;
        }
        e.preventDefault(), this._handleClick();
      }
    };
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), this.type === "submit" && ((e = this.form) == null || e.addEventListener("keydown", this._handleFormKeyDown));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), this.type === "submit" && ((e = this.form) == null || e.removeEventListener("keydown", this._handleFormKeyDown));
  }
  updated(e) {
    var t, n;
    super.updated(e), e.has("type") && (this.type === "submit" ? (t = this.form) == null || t.addEventListener("keydown", this._handleFormKeyDown) : (n = this.form) == null || n.removeEventListener("keydown", this._handleFormKeyDown));
  }
  /**
   * This method creates an invisible button of the same type as pie-button. It is then clicked, and immediately removed from the DOM.
   * This is done so that we trigger native form actions, such as submit and reset in the browser. The performance impact of adding and removing a single button to the DOM
   * should be neglible, however this should be monitored.
   * This is the only viable way of guaranteeing native button behaviour when using a web component in place of an actual HTML button.
   *
   * TODO: if we need to repeat this logic elsewhere, then we should consider moving this code to a shared class or mixin.
   */
  _simulateNativeButtonClick(e) {
    if (!this.form)
      return;
    const t = document.createElement("button");
    t.type = e, t.style.position = "absolute", t.style.width = "1px", t.style.height = "1px", t.style.padding = "0", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.border = "0", t.style.whiteSpace = "nowrap", e === "submit" && (this.name && (t.name = this.name), this.value && (t.value = this.value), this.formaction && t.setAttribute("formaction", this.formaction), this.formenctype && t.setAttribute("formenctype", this.formenctype), this.formmethod && t.setAttribute("formmethod", this.formmethod), this.formnovalidate && t.setAttribute("formnovalidate", "formnovalidate"), this.formtarget && t.setAttribute("formtarget", this.formtarget)), this.form.append(t), t.click(), t.remove();
  }
  _handleClick() {
    !this.isLoading && this.form && (this.type === "submit" && (this.formnovalidate || this.form.reportValidity()) && this._simulateNativeButtonClick("submit"), this.type === "reset" && this._simulateNativeButtonClick("reset"));
  }
  /**
   * Template for the loading state
   *
   * @private
   */
  renderSpinner() {
    const { size: e, variant: t, disabled: n } = this, i = e && e.includes("small") ? "small" : "medium";
    let l;
    return n ? l = t === "ghost-inverse" ? "inverse" : "secondary" : l = ["primary", "destructive", "outline-inverse", "ghost-inverse"].includes(this.variant) ? "inverse" : "secondary", k`
                    <pie-spinner
                        size="${i}"
                        variant="${l}">
                    </pie-spinner>`;
  }
  render() {
    const {
      type: e,
      disabled: t,
      isFullWidth: n,
      variant: i,
      size: l,
      isLoading: c,
      isResponsive: v,
      iconPlacement: h,
      responsiveSize: f
    } = this, w = {
      "o-btn": !0,
      "o-btn--fullWidth": n,
      "o-btn--responsive": v,
      [`o-btn--${f}`]: !!(v && f),
      [`o-btn--${i}`]: !0,
      [`o-btn--${l}`]: !0,
      "is-loading": c
    };
    return k`
            <button
                @click=${this._handleClick}
                class=${Ci(w)}
                type=${e || "submit"}
                ?disabled=${t}>
                    ${c ? this.renderSpinner() : y}
                    ${h === "leading" ? k`<slot name="icon"></slot>` : y}
                    <slot></slot>
                    ${h === "trailing" ? k`<slot name="icon"></slot>` : y}
            </button>`;
  }
  focus() {
    var e, t;
    (t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("button")) == null || t.focus();
  }
};
O.styles = te(Mo);
B([
  u(),
  z(Xe, _o, D.size)
], O.prototype, "size", 2);
B([
  u(),
  z(Xe, Eo, D.type)
], O.prototype, "type", 2);
B([
  u(),
  z(Xe, So, D.variant)
], O.prototype, "variant", 2);
B([
  u({ type: String }),
  z(Xe, zo, D.iconPlacement)
], O.prototype, "iconPlacement", 2);
B([
  u({ type: Boolean })
], O.prototype, "disabled", 2);
B([
  u({ type: Boolean, reflect: !0 })
], O.prototype, "isLoading", 2);
B([
  u({ type: Boolean })
], O.prototype, "isFullWidth", 2);
B([
  u({ type: Boolean })
], O.prototype, "isResponsive", 2);
B([
  u({ type: String })
], O.prototype, "name", 2);
B([
  u({ type: String })
], O.prototype, "value", 2);
B([
  u()
], O.prototype, "formaction", 2);
B([
  u()
], O.prototype, "formenctype", 2);
B([
  u()
], O.prototype, "formmethod", 2);
B([
  u({ type: Boolean })
], O.prototype, "formnovalidate", 2);
B([
  u()
], O.prototype, "formtarget", 2);
B([
  u({ type: String })
], O.prototype, "responsiveSize", 2);
j(Xe, O);
const Oo = `*,*:after,*:before{box-sizing:inherit}.c-divider{--divider-bg-color: var(--dt-color-divider-default);--divider-width: 100%;--divider-height: 1px;margin:0;border:0;width:var(--divider-width);height:var(--divider-height);background-color:var(--divider-bg-color)}.c-divider[variant=inverse]{--divider-bg-color: var(--dt-color-divider-inverse)}.c-divider[orientation=vertical]{--divider-width: 1px;--divider-height: 100%}
`, Po = ["default", "inverse"], Bo = ["horizontal", "vertical"], rt = {
  variant: "default",
  orientation: "horizontal"
};
var Lo = Object.defineProperty, Io = Object.getOwnPropertyDescriptor, Pi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Io(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && Lo(e, t, i), i;
};
const Ut = "pie-divider";
let ht = class extends V {
  constructor() {
    super(...arguments), this.variant = rt.variant, this.orientation = rt.orientation;
  }
  render() {
    const { variant: e, orientation: t } = this;
    return k`
            <hr
                data-test-id="pie-divider"
                aria-hidden="true"
                class="c-divider"
                variant=${e}
                orientation=${t}
            />`;
  }
};
ht.styles = te(Oo);
Pi([
  u({ type: String }),
  z(Ut, Po, rt.variant)
], ht.prototype, "variant", 2);
Pi([
  u({ type: String }),
  z(Ut, Bo, rt.orientation)
], ht.prototype, "orientation", 2);
j(Ut, ht);
const No = `*,*:after,*:before{box-sizing:inherit}:host{--btn-dimension-default: 48px;--icon-size-override: 24px}.o-iconBtn{--btn-border-radius: var(--dt-radius-rounded-e);--btn-bg-color: var(--dt-color-interactive-brand);--btn-icon-fill: var(--dt-color-content-interactive-primary);--icon-display-override: block;block-size:var(--btn-dimension, var(--btn-dimension-default));inline-size:var(--btn-dimension, var(--btn-dimension-default));border-color:var(--btn-border-color);border-radius:var(--btn-border-radius);background-color:var(--btn-bg-color);color:var(--btn-icon-fill);cursor:pointer;-webkit-user-select:none;user-select:none;outline:none;border:none;display:flex;align-items:center;justify-content:center}.o-iconBtn:focus-visible{box-shadow:0 0 0 2px var(--dt-color-focus-inner),0 0 0 4px var(--dt-color-focus-outer);outline:none}.o-iconBtn svg{height:var(--icon-size-override);width:var(--icon-size-override)}.o-iconBtn[variant=primary]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--hover-modifier)))}.o-iconBtn[variant=primary]:active:not(:disabled),.o-iconBtn[variant=primary].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--active-modifier)))}.o-iconBtn[variant=secondary]{--btn-bg-color: var(--dt-color-interactive-secondary);--btn-icon-fill: var(--dt-color-content-interactive-secondary)}.o-iconBtn[variant=secondary]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-secondary-h), var(--dt-color-interactive-secondary-s), calc(var(--dt-color-interactive-secondary-l) + var(--hover-modifier)))}.o-iconBtn[variant=secondary]:active:not(:disabled),.o-iconBtn[variant=secondary].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-secondary-h), var(--dt-color-interactive-secondary-s), calc(var(--dt-color-interactive-secondary-l) + var(--active-modifier)))}.o-iconBtn[variant=outline]{--btn-bg-color: transparent;--btn-icon-fill: var(--dt-color-content-interactive-brand);border:1px solid var(--dt-color-border-strong)}.o-iconBtn[variant=outline]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-iconBtn[variant=outline]:active:not(:disabled),.o-iconBtn[variant=outline].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-iconBtn[variant=ghost]{--btn-bg-color: transparent;--btn-icon-fill: var(--dt-color-content-interactive-brand)}.o-iconBtn[variant=ghost]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-iconBtn[variant=ghost]:active:not(:disabled),.o-iconBtn[variant=ghost].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-iconBtn[variant=ghost-secondary]{--btn-bg-color: transparent;--btn-icon-fill: var(--dt-color-content-interactive-secondary)}.o-iconBtn[variant=ghost-secondary]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-iconBtn[variant=ghost-secondary]:active:not(:disabled),.o-iconBtn[variant=ghost-secondary].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-iconBtn[variant=inverse]{--btn-bg-color: var(--dt-color-interactive-inverse);--btn-icon-fill: var(--dt-color-content-interactive-brand)}.o-iconBtn[variant=inverse]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-inverse-h), var(--dt-color-interactive-inverse-s), calc(var(--dt-color-interactive-inverse-l) + var(--hover-modifier)))}.o-iconBtn[variant=inverse]:active:not(:disabled),.o-iconBtn[variant=inverse].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-inverse-h), var(--dt-color-interactive-inverse-s), calc(var(--dt-color-interactive-inverse-l) + var(--active-modifier)))}.o-iconBtn[variant=ghost-inverse]{--btn-bg-color: transparent;--btn-icon-fill: var(--dt-color-content-inverse)}.o-iconBtn[variant=ghost-inverse]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-container-default-h), var(--dt-color-container-default-s), var(--dt-color-container-default-l), var(--hover-modifier))}.o-iconBtn[variant=ghost-inverse]:active:not(:disabled),.o-iconBtn[variant=ghost-inverse].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-container-default-h), var(--dt-color-container-default-s), var(--dt-color-container-default-l), var(--active-modifier))}.o-iconBtn[disabled]{--btn-icon-fill: var(--dt-color-content-disabled);cursor:not-allowed}.o-iconBtn[disabled]:not([variant=ghost],[variant=ghost-secondary],[variant=ghost-inverse]){--btn-bg-color: var(--dt-color-disabled-01)}.o-iconBtn[disabled][variant=outline]{border-color:var(--dt-color-disabled-01)}.o-iconBtn[size=xsmall]{--btn-dimension: 32px;--icon-size-override: 20px}.o-iconBtn[size=small]{--btn-dimension: 40px}.o-iconBtn[size=large]{--btn-dimension: 56px;--icon-size-override: 28px}
`, Fo = ["xsmall", "small", "medium", "large"], Vo = [
  "primary",
  "secondary",
  "outline",
  "ghost",
  "ghost-secondary",
  "inverse",
  "ghost-inverse"
], xe = {
  size: "medium",
  variant: "primary",
  disabled: !1,
  isLoading: !1
};
var Ro = Object.defineProperty, Do = Object.getOwnPropertyDescriptor, pt = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Do(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && Ro(e, t, i), i;
};
const qt = "pie-icon-button";
let Ae = class extends V {
  constructor() {
    super(...arguments), this.size = xe.size, this.variant = xe.variant, this.disabled = xe.disabled, this.isLoading = xe.isLoading;
  }
  /**
   * Template for the loading state
   *
   * @private
   */
  renderSpinner() {
    const { variant: e, size: t, disabled: n } = this, i = t === "xsmall" ? "small" : "medium";
    let l = "brand";
    return e != null && e.includes("secondary") && (l = "secondary"), (e === "primary" && !n || e === "ghost-inverse") && (l = "inverse"), k`
                <pie-spinner
                    size="${i}"
                    variant="${l}">
                </pie-spinner>`;
  }
  render() {
    const {
      disabled: e,
      size: t,
      variant: n,
      isLoading: i
    } = this;
    return k`
            <button
                class="o-iconBtn"
                size="${t || "medium"}"
                variant="${n || "primary"}"
                ?disabled="${e}"
                ?isLoading="${i}">
                ${i ? this.renderSpinner() : k`<slot></slot>`}
            </button>`;
  }
};
Ae.styles = te(No);
pt([
  u(),
  z(qt, Fo, xe.size)
], Ae.prototype, "size", 2);
pt([
  u(),
  z(qt, Vo, xe.variant)
], Ae.prototype, "variant", 2);
pt([
  u({ type: Boolean })
], Ae.prototype, "disabled", 2);
pt([
  u({ type: Boolean })
], Ae.prototype, "isLoading", 2);
j(qt, Ae);
const jo = `*,*:after,*:before{box-sizing:inherit}.c-link{--link-font-family: var(--dt-font-interactive-l-family);--link-font-size: calc(var(--dt-font-size-16) * 1px);--link-line-height: calc(var(--dt-font-size-16-line-height) * 1px);--link-font-weight: var(--dt-font-weight-regular);--link-text-color: var(--dt-color-content-link);--link-text-decoration: var(--dt-font-style-underline);--link-icon-size: 16px;--link-icon-offset-top: var(--dt-spacing-a);display:inline-block;font-family:var(--link-font-family);font-size:var(--link-font-size);line-height:var(--link-line-height);font-weight:var(--link-font-weight);color:var(--link-text-color);text-decoration:var(--link-text-decoration);cursor:pointer}.c-link:hover,.c-link:active{--link-text-decoration: none}.c-link[tag=button]{outline:none;border:none;-webkit-user-select:none;user-select:none;background:transparent;padding:0}.c-link[variant=high-visibility]{--link-text-color: var(--dt-color-content-link-distinct)}.c-link[variant=inverse]{--link-text-color: var(--dt-color-content-link-inverse)}.c-link[size=small]{--link-font-size: calc(var(--dt-font-size-14) * 1px);--link-line-height: calc(var(--dt-font-size-14-line-height) * 1px);--link-icon-offset-top: 2px}.c-link[underline=reversed][isStandalone]{--link-text-decoration: none}.c-link[underline=reversed][isStandalone]:hover,.c-link[underline=reversed][isStandalone]:active{--link-text-decoration: var(--dt-font-style-underline)}.c-link[isBold]{--link-font-weight: var(--dt-font-weight-bold)}.c-link[isStandalone]{display:block;width:fit-content}.c-link[hasVisited]:visited{color:var(--dt-color-content-link-visited)}.c-link[hasVisited]:visited[variant=inverse]{color:var(--dt-color-content-link-visited-inverse)}.c-link:focus-visible{outline:none;border-radius:2px;box-shadow:0 0 0 2px var(--dt-color-focus-inner),0 0 0 4px var(--dt-color-focus-outer)}.c-link-content{display:flex;gap:var(--dt-spacing-a)}::slotted(.c-pieIcon),::slotted(svg){display:inline-flex;margin-block-start:var(--link-icon-offset-top);height:var(--link-icon-size);width:var(--link-icon-size)}
`, Ho = ["default", "high-visibility", "inverse"], Wo = ["small", "medium"], Uo = ["leading", "trailing"], qo = ["a", "button"], Ko = ["submit", "button", "reset", "menu"], Yo = ["default", "reversed"], I = {
  tag: "a",
  variant: "default",
  size: "medium",
  underline: "default",
  isBold: !1,
  isStandalone: !1,
  hasVisited: !1,
  iconPlacement: "leading",
  type: "submit"
};
var Zo = Object.defineProperty, Go = Object.getOwnPropertyDescriptor, R = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Go(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && Zo(e, t, i), i;
};
const ye = "pie-link";
let N = class extends V {
  constructor() {
    super(...arguments), this.tag = I.tag, this.variant = I.variant, this.size = I.size, this.underline = I.underline, this.iconPlacement = I.iconPlacement, this.isBold = I.isBold, this.isStandalone = I.isStandalone, this.hasVisited = I.hasVisited, this.type = I.type;
  }
  /**
   * Renders the link content.
   * Icons are only shown in block elements
   * @private
   */
  renderContent() {
    const { iconPlacement: e, isStandalone: t } = this;
    return k`
                <span class="c-link-content">
                    ${t && e === "leading" ? k`<slot name="icon"></slot>` : y}
                    <slot></slot>
                    ${t && e === "trailing" ? k`<slot name="icon"></slot>` : y}
                </span>`;
  }
  /**
   * Renders the link as a button element.
   *
   * @private
   */
  renderButton() {
    var e;
    return k`
            <button
                data-test-id="pie-link"
                class="c-link"
                tag=${this.tag || "button"}
                variant=${this.variant || "default"}
                size=${this.size || "medium"}
                underline=${this.underline || "default"}
                ?isBold=${this.isBold}
                ?isStandalone=${this.isStandalone}
                ?hasVisited=${this.hasVisited}
                type=${this.type || "submit"}
                aria-label=${((e = this.aria) == null ? void 0 : e.label) || y}>
                    ${this.renderContent()}
            </button>`;
  }
  /**
   * Renders the link as an anchor element.
   *
   * @private
   */
  renderAnchor() {
    var e;
    return k`
            <a
                data-test-id="pie-link"
                class="c-link"
                tag=${this.tag || "a"}
                variant=${this.variant || "default"}
                size=${this.size || "medium"}
                underline=${this.underline || "default"}
                ?isBold=${this.isBold}
                ?isStandalone=${this.isStandalone}
                ?hasVisited=${this.hasVisited}
                href=${this.href || ""}
                target=${this.target || y}
                rel=${this.rel || y}
                aria-label=${((e = this.aria) == null ? void 0 : e.label) || y}>
                    ${this.renderContent()}
            </a>`;
  }
  render() {
    return this.tag === "button" ? this.renderButton() : this.renderAnchor();
  }
};
N.styles = te(jo);
R([
  u(),
  z(ye, qo, I.tag)
], N.prototype, "tag", 2);
R([
  u({ type: String }),
  z(ye, Ho, I.variant)
], N.prototype, "variant", 2);
R([
  u({ type: String }),
  z(ye, Wo, I.size)
], N.prototype, "size", 2);
R([
  u({ type: String }),
  z(ye, Yo, I.underline)
], N.prototype, "underline", 2);
R([
  u({ type: String }),
  z(ye, Uo, I.iconPlacement)
], N.prototype, "iconPlacement", 2);
R([
  u({ type: String, reflect: !0 })
], N.prototype, "href", 2);
R([
  u({ type: String, reflect: !0 })
], N.prototype, "target", 2);
R([
  u({ type: String, reflect: !0 })
], N.prototype, "rel", 2);
R([
  u({ type: Boolean })
], N.prototype, "isBold", 2);
R([
  u({ type: Boolean })
], N.prototype, "isStandalone", 2);
R([
  u({ type: Boolean })
], N.prototype, "hasVisited", 2);
R([
  u(),
  z(ye, Ko, I.type)
], N.prototype, "type", 2);
R([
  u({ type: Object })
], N.prototype, "aria", 2);
j(ye, N);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bi = Symbol.for(""), Jo = (r) => {
  if ((r == null ? void 0 : r.r) === Bi)
    return r == null ? void 0 : r._$litStatic$;
}, Xo = (r) => ({ _$litStatic$: r, r: Bi }), pi = /* @__PURE__ */ new Map(), Qo = (r) => (e, ...t) => {
  const n = t.length;
  let i, l;
  const c = [], v = [];
  let h, f = 0, w = !1;
  for (; f < n; ) {
    for (h = e[f]; f < n && (l = t[f], (i = Jo(l)) !== void 0); )
      h += i + e[++f], w = !0;
    f !== n && v.push(l), c.push(h), f++;
  }
  if (f === n && c.push(e[n]), w) {
    const g = c.join("$$lit$$");
    (e = pi.get(g)) === void 0 && (c.raw = c, pi.set(g, e = c)), t = v;
  }
  return r(e, ...t);
}, q = Qo(k);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pt = (r) => r ?? y, at = {
  xs: 16,
  s: 20,
  m: 24,
  l: 28,
  xl: 32,
  xxl: 40
}, Li = Object.keys(at), Ii = "xs", Ni = 8, st = 32;
function en(r, e, t) {
  const n = parseInt(r, 10), i = n % t === 0;
  return n >= e && i;
}
const Fi = {
  large: (r) => en(r, st, Ni),
  regular: (r) => Li.includes(r)
};
function tn(r) {
  const e = Fi.large(r);
  return { isValid: e, size: e ? r : st };
}
function on(r) {
  const e = Fi.regular(r), t = e ? at[r] : at[Ii];
  return { isValid: e, size: t };
}
const nn = (r, e, t, n) => {
  const i = r.endsWith("Large") || r.endsWith("-large");
  let l, c;
  if (t) {
    if ({ isValid: l, size: c } = i ? tn(t) : on(t), !l) {
      const v = i ? `Invalid prop "size" value supplied to "${n}". The prop value should be a number equal or greater than ${st} and multiple of ${Ni}.` : `Invalid prop "size" value supplied to "${n}". The prop value should be one of the following values: ${Li.join(", ")}.`;
      console.error(v);
    }
  } else
    c = i ? st : at[Ii];
  return {
    class: [r, e].filter(Boolean).join(" "),
    width: c,
    height: c
  };
};
var rn = Object.defineProperty, an = Object.getOwnPropertyDescriptor, Kt = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? an(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && rn(e, t, i), i;
};
let re = class extends V {
  firstUpdated() {
    this.updateIconSize();
  }
  willUpdate(e) {
    e.has("size") && this.updateIconSize();
  }
  updateIconSize() {
    const e = nn(this.class, "", this.size, this.name);
    this._svgWidth = e.width, this._svgHeight = e.height;
  }
};
re.styles = Zi`
        :host {
            display: inline-block;
            /* Inline SVGs can cause an additional ~4px height in their containers (such as this host).*/
            line-height: 0;
        }

        :host svg {
            /* When the --icon-size-override CSS variable does not exist, the height and width in the HTML attributes will be used. */
            width: var(--icon-size-override);
            height: var(--icon-size-override);
        }
    `;
Kt([
  u({ type: String, reflect: !0 })
], re.prototype, "size", 2);
Kt([
  dt()
], re.prototype, "_svgWidth", 2);
Kt([
  dt()
], re.prototype, "_svgHeight", 2);
var sn = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, Vi = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? ln(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && sn(e, t, i), i;
};
const cn = "icon-close";
let Yt = class extends re {
  constructor() {
    super(...arguments), this.size = "xs", this.class = "c-pieIcon c-pieIcon--close", this.name = "IconClose";
  }
  render() {
    return k`<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--close"><path d="M11.868 3.205 8 7.072 4.133 3.205l-.928.927L7.073 8l-3.868 3.867.928.928L8 8.927l3.868 3.868.927-.928L8.928 8l3.867-3.868-.927-.927Z"></path></svg>`;
  }
};
Vi([
  u({ type: String, reflect: !0 })
], Yt.prototype, "size", 2);
Vi([
  u({ type: String, reflect: !0 })
], Yt.prototype, "class", 2);
j(cn, Yt);
var dn = Object.defineProperty, hn = Object.getOwnPropertyDescriptor, Ri = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? hn(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && dn(e, t, i), i;
};
const pn = "icon-chevron-left";
let Zt = class extends re {
  constructor() {
    super(...arguments), this.size = "xs", this.class = "c-pieIcon c-pieIcon--chevronLeft", this.name = "IconChevronLeft";
  }
  render() {
    return k`<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chevronLeft"><path d="M10.96 2.82 5.605 8l5.399 5.197-.875.963-5.565-5.364a1.164 1.164 0 0 1 0-1.671l5.495-5.25.901.945Z"></path></svg>`;
  }
};
Ri([
  u({ type: String, reflect: !0 })
], Zt.prototype, "size", 2);
Ri([
  u({ type: String, reflect: !0 })
], Zt.prototype, "class", 2);
j(pn, Zt);
var vn = Object.defineProperty, un = Object.getOwnPropertyDescriptor, Di = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? un(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && vn(e, t, i), i;
};
const mn = "icon-chevron-right";
class Gt extends re {
  constructor() {
    super(...arguments), this.size = "xs", this.class = "c-pieIcon c-pieIcon--chevronRight", this.name = "IconChevronRight";
  }
  render() {
    return k`<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chevronRight"><path d="M5.044 13.18 10.399 8 5 2.82l.875-.962 5.539 5.346a1.164 1.164 0 0 1 0 1.636l-5.469 5.285-.901-.945Z"></path></svg>`;
  }
}
Di([
  u({ type: String, reflect: !0 })
], Gt.prototype, "size", 2);
Di([
  u({ type: String, reflect: !0 })
], Gt.prototype, "class", 2);
j(mn, Gt);
function bn(r) {
  if (Array.isArray(r)) {
    for (var e = 0, t = Array(r.length); e < r.length; e++)
      t[e] = r[e];
    return t;
  } else
    return Array.from(r);
}
var Jt = !1;
if (typeof window < "u") {
  var vi = {
    get passive() {
      Jt = !0;
    }
  };
  window.addEventListener("testPassive", null, vi), window.removeEventListener("testPassive", null, vi);
}
var ji = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), ie = [], lt = !1, Hi = -1, Ue = void 0, qe = void 0, Wi = function(r) {
  return ie.some(function(e) {
    return !!(e.options.allowTouchMove && e.options.allowTouchMove(r));
  });
}, Xt = function(r) {
  var e = r || window.event;
  return Wi(e.target) || e.touches.length > 1 ? !0 : (e.preventDefault && e.preventDefault(), !1);
}, gn = function(r) {
  if (qe === void 0) {
    var e = !!r && r.reserveScrollBarGap === !0, t = window.innerWidth - document.documentElement.clientWidth;
    e && t > 0 && (qe = document.body.style.paddingRight, document.body.style.paddingRight = t + "px");
  }
  Ue === void 0 && (Ue = document.body.style.overflow, document.body.style.overflow = "hidden");
}, fn = function() {
  qe !== void 0 && (document.body.style.paddingRight = qe, qe = void 0), Ue !== void 0 && (document.body.style.overflow = Ue, Ue = void 0);
}, yn = function(r) {
  return r ? r.scrollHeight - r.scrollTop <= r.clientHeight : !1;
}, wn = function(r, e) {
  var t = r.targetTouches[0].clientY - Hi;
  return Wi(r.target) ? !1 : e && e.scrollTop === 0 && t > 0 || yn(e) && t < 0 ? Xt(r) : (r.stopPropagation(), !0);
}, $n = function(r, e) {
  if (!r) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (!ie.some(function(n) {
    return n.targetElement === r;
  })) {
    var t = {
      targetElement: r,
      options: e || {}
    };
    ie = [].concat(bn(ie), [t]), ji ? (r.ontouchstart = function(n) {
      n.targetTouches.length === 1 && (Hi = n.targetTouches[0].clientY);
    }, r.ontouchmove = function(n) {
      n.targetTouches.length === 1 && wn(n, r);
    }, lt || (document.addEventListener("touchmove", Xt, Jt ? { passive: !1 } : void 0), lt = !0)) : gn(e);
  }
}, kn = function(r) {
  if (!r) {
    console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    return;
  }
  ie = ie.filter(function(e) {
    return e.targetElement !== r;
  }), ji ? (r.ontouchstart = null, r.ontouchmove = null, lt && ie.length === 0 && (document.removeEventListener("touchmove", Xt, Jt ? { passive: !1 } : void 0), lt = !1)) : ie.length || fn();
};
const xn = `*,*:after,*:before{box-sizing:inherit}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:white;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.1)}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.c-modal{--modal-size-s: 450px;--modal-size-m: 600px;--modal-size-l: 1080px;--modal-border-radius: var(--dt-radius-rounded-d);--modal-font: var(--dt-font-interactive-l-family);--modal-bg-color: var(--dt-color-container-default);--modal-elevation: var(--dt-elevation-04);border-radius:var(--modal-border-radius);border:none;box-shadow:var(--modal-elevation);font-family:var(--modal-font);background-color:var(--modal-bg-color);padding:0;--modal-margin-none: var(--dt-spacing-none);--modal-margin-small: var(--dt-spacing-g);--modal-margin-large: var(--dt-spacing-j);--modal-margin-block: var(--modal-margin-small);--modal-block-size: fit-content;--modal-inline-size: 75%;--modal-max-block-size: calc(100vh - calc(var(--modal-margin-block) * 2));--modal-max-inline-size: var(--modal-size-m);block-size:var(--modal-block-size);inline-size:var(--modal-inline-size);max-block-size:var(--modal-max-block-size);max-inline-size:var(--modal-max-inline-size)}.c-modal:focus-visible{outline:none}@media (width < 768px){.c-modal pie-icon-button{--btn-dimension: 40px}}.c-modal[open]{display:flex;flex-direction:column}@media (min-width: 768px){.c-modal{--modal-margin-block: var(--modal-margin-large)}}.c-modal[size=small]{--modal-max-inline-size: var(--modal-size-s)}@media (min-width: 768px){.c-modal[size=small]{--modal-margin-block: var(--modal-margin-large)}}.c-modal[size=large]{--modal-inline-size: 75%;--modal-max-inline-size: var(--modal-size-l);--modal-margin-block: var(--modal-margin-large)}@media (width < 768px){.c-modal[size=large],.c-modal[size=medium][isfullwidthbelowmid]{--modal-margin-block: var(--modal-margin-none);--modal-border-radius: var(--dt-radius-rounded-none);--modal-block-size: 100%;--modal-inline-size: 100%;--modal-max-inline-size: 100%}.c-modal[size=large]>.c-modal-scrollContainer,.c-modal[size=medium][isfullwidthbelowmid]>.c-modal-scrollContainer{block-size:100%}}.c-modal[position=top]{margin-block-start:var(--dt-spacing-j);max-block-size:calc(100% - var(--dt-spacing-j) * 2)}@media (width < 768px){.c-modal[position=top][size=large],.c-modal[position=top][isfullwidthbelowmid][size=medium]{margin-block-start:var(--dt-spacing-none);max-block-size:100%}}.c-modal::backdrop{background:rgba(0,0,0,.55)}.c-modal .c-modal-footer{--modal-button-spacing: var(--dt-spacing-d);--modal-footer-padding: var(--dt-spacing-d);display:flex;flex-flow:row-reverse;flex-wrap:wrap;gap:var(--modal-button-spacing);padding:var(--modal-footer-padding)}@media (min-width: 768px){.c-modal .c-modal-footer{--modal-footer-padding: var(--dt-spacing-e)}}@media (width < 768px){.c-modal[hasstackedactions] .c-modal-footer{flex-direction:column}}.c-modal .c-modal-header{display:grid;grid-template-areas:"back heading close";grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content);align-items:start}.c-modal .c-modal-heading{--modal-header-font-size: calc(var(--dt-font-heading-m-size--narrow) * 1px);--modal-header-font-line-height: calc(var(--dt-font-heading-m-line-height--narrow) * 1px);--modal-header-font-weight: var(--dt-font-heading-m-weight);font-size:var(--modal-header-font-size);line-height:var(--modal-header-font-line-height);font-weight:var(--modal-header-font-weight);margin:0;grid-area:heading;margin-inline-start:var(--dt-spacing-d);margin-inline-end:var(--dt-spacing-d);margin-block:14px}@media (min-width: 768px){.c-modal .c-modal-heading{--modal-header-font-size: calc(var(--dt-font-heading-m-size--wide) * 1px);--modal-header-font-line-height: calc(var(--dt-font-heading-m-line-height--wide) * 1px);margin-inline-start:var(--dt-spacing-e);margin-inline-end:var(--dt-spacing-e);margin-block:20px}}.c-modal[hasbackbutton] .c-modal-heading{margin-inline-start:var(--dt-spacing-b)}@media (min-width: 768px){.c-modal[hasbackbutton] .c-modal-heading{margin-inline-start:var(--dt-spacing-c)}}.c-modal[isdismissible] .c-modal-heading{margin-inline-end:var(--dt-spacing-d)}@media (min-width: 768px){.c-modal[isdismissible] .c-modal-heading{margin-inline-end:var(--dt-spacing-e)}}.c-modal .c-modal-backBtn{grid-area:back;margin-block-start:var(--dt-spacing-b);margin-block-end:var(--dt-spacing-b);margin-inline-start:var(--dt-spacing-b);margin-inline-end:var(--dt-spacing-none)}@media (min-width: 768px){.c-modal .c-modal-backBtn{margin-block-start:var(--dt-spacing-c);margin-block-end:var(--dt-spacing-c);margin-inline-start:var(--dt-spacing-c);margin-inline-end:var(--dt-spacing-none)}}.c-modal .c-modal-closeBtn{grid-area:close;margin-block-start:var(--dt-spacing-b);margin-block-end:var(--dt-spacing-b);margin-inline-start:var(--dt-spacing-none);margin-inline-end:var(--dt-spacing-b)}@media (min-width: 768px){.c-modal .c-modal-closeBtn{margin-block-start:var(--dt-spacing-c);margin-block-end:var(--dt-spacing-c);margin-inline-start:var(--dt-spacing-none);margin-inline-end:var(--dt-spacing-c)}}.c-modal .c-modal-content{--modal-content-font-size: calc(var(--dt-font-size-16) * 1px);--modal-content-font-weight: var(--dt-font-weight-regular);--modal-content-line-height: calc(var(--dt-font-size-16-line-height) * 1px);--modal-content-padding-block: var(--dt-spacing-a);--modal-content-padding-inline: var(--dt-spacing-d);position:relative;min-block-size:var(--dt-spacing-j);font-size:var(--modal-content-font-size);line-height:var(--modal-content-line-height);font-weight:var(--modal-content-font-weight);padding-inline-start:var(--modal-content-padding-inline);padding-inline-end:var(--modal-content-padding-inline);padding-block-start:var(--modal-content-padding-block);padding-block-end:var(--modal-content-padding-block-end);flex-grow:1}@media (min-width: 768px){.c-modal .c-modal-content{--modal-content-padding-inline: var(--dt-spacing-e)}}.c-modal .c-modal-content.c-modal-hasFooterActions{padding-block-end:var(--modal-content-padding-block)}.c-modal .c-modal-content--scrollable{background:linear-gradient(to bottom,transparent,var(--dt-color-container-default) 75%) center bottom,linear-gradient(transparent,var(--dt-color-border-strong)) center bottom;background-repeat:no-repeat;background-size:100% 48px,100% 12px;background-attachment:local,scroll}.c-modal>.c-modal-scrollContainer{display:flex;flex-direction:column;overflow-y:auto;--bg-scroll-end: linear-gradient(rgba(255, 255, 255, 0), var(--dt-color-container-default) 70%) 0 100%;--bg-scroll-bottom: radial-gradient(farthest-corner at 50% 100%, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0)) 0 100%;--bg-size-scroll-end: 100% 40px;--bg-size-scroll-bottom: 100% 8px;background:var(--bg-scroll-end),var(--bg-scroll-bottom);background-repeat:no-repeat;background-size:var(--bg-size-scroll-end),var(--bg-size-scroll-bottom);background-attachment:local,scroll}.c-modal>.c-modal-scrollContainer .c-modal-content{flex-shrink:0}.c-modal[isfooterpinned] .c-modal-content{overflow-y:auto}.c-modal[isLoading] .c-modal-content pie-spinner{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.c-modal[isLoading] .c-modal-content .c-modal-contentInner{display:none}@supports not (aspect-ratio: 1/1){.c-modal .c-modal-scrollContainer{background:none}}
`, An = ["h1", "h2", "h3", "h4", "h5", "h6"], _n = ["small", "medium", "large"], En = ["top", "center"], Bt = "pie-modal-close", et = "pie-modal-open", Lt = "pie-modal-back", Sn = "pie-modal-leading-action-click", zn = "pie-modal-supporting-action-click", L = {
  hasBackButton: !1,
  hasStackedActions: !1,
  headingLevel: "h2",
  isOpen: !1,
  isDismissible: !1,
  isFooterPinned: !0,
  isFullWidthBelowMid: !1,
  isLoading: !1,
  leadingActionVariant: "primary",
  position: "center",
  size: "medium",
  supportingActionVariant: "ghost"
};
var Mn = Object.defineProperty, Cn = Object.getOwnPropertyDescriptor, P = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Cn(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && Mn(e, t, i), i;
};
const Qe = "pie-modal";
class M extends Ti(V) {
  constructor() {
    super(...arguments), this.headingLevel = L.headingLevel, this.hasBackButton = L.hasBackButton, this.hasStackedActions = L.hasStackedActions, this.isDismissible = L.isDismissible, this.isFooterPinned = L.isFooterPinned, this.isFullWidthBelowMid = L.isFullWidthBelowMid, this.isLoading = L.isLoading, this.isOpen = L.isOpen, this.leadingActionVariant = L.leadingActionVariant, this.position = L.position, this.size = L.size, this.supportingActionVariant = L.supportingActionVariant, this._backButtonClicked = !1, this._handleDialogCancelEvent = (e) => {
      this.isDismissible || e.preventDefault();
    }, this._handleDialogLightDismiss = (e) => {
      var t;
      if (!this.isDismissible)
        return;
      const n = (t = this._dialog) == null ? void 0 : t.getBoundingClientRect(), {
        top: i = 0,
        bottom: l = 0,
        left: c = 0,
        right: v = 0
      } = n || {};
      i === 0 && l === 0 && c === 0 && v === 0 || (e.clientY < i || e.clientY > l || e.clientX < c || e.clientX > v) && (this.isOpen = !1);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", (e) => this._handleDialogLightDismiss(e)), document.addEventListener(et, (e) => this._handleModalOpened(e)), document.addEventListener(Bt, (e) => this._handleModalClosed(e)), document.addEventListener(Lt, (e) => this._handleModalClosed(e));
  }
  disconnectedCallback() {
    document.removeEventListener(et, (e) => this._handleModalOpened(e)), document.removeEventListener(Bt, (e) => this._handleModalClosed(e)), document.removeEventListener(Lt, (e) => this._handleModalClosed(e)), super.disconnectedCallback();
  }
  async firstUpdated(e) {
    super.firstUpdated(e), this._dialog && ((await import("../dialog-polyfill.esm-209f54f8-19fb8758.js").then((t) => t.default)).registerDialog(this._dialog), this._dialog.addEventListener("cancel", (t) => this._handleDialogCancelEvent(t)), this._dialog.addEventListener("close", () => {
      this.isOpen = !1;
    })), this._handleModalOpenStateOnFirstRender(e);
  }
  updated(e) {
    super.updated(e), this._handleModalOpenStateChanged(e);
  }
  /**
   * Opens the dialog element and disables page scrolling
   */
  _handleModalOpened(e) {
    var t, n, i, l;
    const { targetModal: c } = e.detail;
    if (c === this) {
      const v = (t = this._dialog) == null ? void 0 : t.querySelector(".c-modal-scrollContainer");
      if (v && ("scrollTo" in window && window.scrollTo(0, 0), $n(v)), (n = this._dialog) != null && n.hasAttribute("open") || !((i = this._dialog) != null && i.isConnected))
        return;
      (l = this._dialog) == null || l.showModal();
    }
  }
  /**
   * Closes the dialog element and re-enables page scrolling
   */
  _handleModalClosed(e) {
    var t, n;
    const { targetModal: i } = e.detail;
    if (i === this) {
      const l = (t = this._dialog) == null ? void 0 : t.querySelector(".c-modal-scrollContainer");
      l && kn(l), (n = this._dialog) == null || n.close(), this._returnFocus();
    }
  }
  // Handles the value of the isOpen property on first render of the component
  _handleModalOpenStateOnFirstRender(e) {
    e.get("isOpen") === void 0 && this.isOpen && K(this, et, { targetModal: this });
  }
  // Handles changes to the modal isOpen property by dispatching any appropriate events
  _handleModalOpenStateChanged(e) {
    const t = e.get("isOpen");
    t !== void 0 && (t ? this._backButtonClicked ? (this._backButtonClicked = !1, K(this, Lt, { targetModal: this })) : K(this, Bt, { targetModal: this }) : K(this, et, { targetModal: this }));
  }
  _handleActionClick(e) {
    var t, n;
    e === "leading" ? ((t = this._dialog) == null || t.close("leading"), K(this, Sn, { targetModal: this })) : e === "supporting" && ((n = this._dialog) == null || n.close("supporting"), K(this, zn, { targetModal: this }));
  }
  /**
   * Return focus to the specified element, providing the selector is valid
   * and the chosen element can be found.
   */
  _returnFocus() {
    var e, t;
    const n = (e = this.returnFocusAfterCloseSelector) == null ? void 0 : e.trim();
    n && ((t = document.querySelector(n)) == null || t.focus());
  }
  /**
   * Template for the close button element. Called within the
   * main render function.
   *
   * @private
   */
  renderCloseButton() {
    var e;
    return this.isDismissible ? q`
            <pie-icon-button
                @click="${() => {
      this.isOpen = !1;
    }}"
                variant="ghost-secondary"
                class="c-modal-closeBtn"
                aria-label="${((e = this.aria) == null ? void 0 : e.close) || y}"
                data-test-id="modal-close-button">
                <icon-close></icon-close>
            </pie-icon-button>` : y;
  }
  /**
   * Template for the back button element. Called within the
   * main render function.
   *
   * @private
   */
  renderBackButton() {
    var e;
    return this.hasBackButton ? q`
            <pie-icon-button
                @click="${() => {
      this._backButtonClicked = !0, this.isOpen = !1;
    }}"
                variant="ghost-secondary"
                class="c-modal-backBtn"
                aria-label="${Pt((e = this.aria) == null ? void 0 : e.back)}"
                data-test-id="modal-back-button">
                ${this.isRTL ? q`<icon-chevron-right></icon-chevron-right>` : q`<icon-chevron-left></icon-chevron-left>`}
            </pie-icon-button>
        ` : y;
  }
  /**
   * Renders the "leadingAction" button if the text is provided.
   *
   * If `leadingActionText` is not provided, the button is not rendered.
   * If `leadingActionVariant` is not provided, the default value is used.
   * The (optional) aria-label is read from the `aria` prop's `leadingActionLabel` property.
   *
   * @private
   */
  renderLeadingAction() {
    var e;
    return this.leadingActionText ? q`
            <pie-button
                variant="${this.leadingActionVariant}"
                aria-label="${Pt((e = this.aria) == null ? void 0 : e.leadingActionLabel)}"
                type="submit"
                ?isFullWidth="${this.hasStackedActions}"
                @click="${() => this._handleActionClick("leading")}"
                data-test-id="modal-leading-action">
                ${this.leadingActionText}
            </pie-button>
        ` : y;
  }
  /**
   * Renders the "supportingAction" button if the text is provided.
   * You cannot have a supporting action without a leading action.
   *
   * If `supportingActionText` or `leadingActionText` are not provided, the button is not rendered.
   * If `supportingActionVariant` is not provided, the default value is used.
   *
   * @private
   */
  renderSupportingAction() {
    var e;
    return this.supportingActionText ? this.leadingActionText ? q`
            <pie-button
                variant="${this.supportingActionVariant}"
                aria-label="${Pt((e = this.aria) == null ? void 0 : e.supportingActionLabel)}"
                type="reset"
                ?isFullWidth="${this.hasStackedActions}"
                @click="${() => this._handleActionClick("supporting")}"
                data-test-id="modal-supporting-action">
                ${this.supportingActionText}
            </pie-button>
        ` : (console.warn("You cannot have a supporting action without a leading action. If you only need one button then use a leading action instead."), y) : y;
  }
  /**
   * Renders the modal inner content and footer of the modal.
   * @private
   */
  renderModalContentAndFooter() {
    const e = !!this.leadingActionText;
    return q`
            <article class=${Ci({
      "c-modal-scrollContainer": !0,
      "c-modal-content": !0,
      "c-modal-content--scrollable": !0,
      "c-modal-hasFooterActions": e
    })}>
                <div class="c-modal-contentInner" data-test-id="modal-content-inner">
                    <slot></slot>
                </div>
                ${this.isLoading ? q`<pie-spinner size="xlarge" variant="secondary"></pie-spinner>` : y}
            </article>
            ${e ? q`
                <footer class="c-modal-footer" data-test-id="pie-modal-footer">
                    ${this.renderLeadingAction()}
                    ${this.renderSupportingAction()}
                </footer>` : y}`;
  }
  render() {
    const {
      aria: e,
      hasBackButton: t,
      hasStackedActions: n,
      heading: i,
      headingLevel: l,
      isDismissible: c,
      isFooterPinned: v,
      isFullWidthBelowMid: h,
      isLoading: f,
      leadingActionText: w,
      position: g,
      size: x,
      supportingActionText: $
    } = this, _ = Xo(l);
    return q`
        <dialog
            id="dialog"
            class="c-modal"
            size="${x}"
            position="${g}"
            ?hasActions=${w || $}
            ?hasBackButton=${t}
            ?hasStackedActions=${n}
            ?isDismissible=${c}
            ?isFooterPinned=${v}
            ?isFullWidthBelowMid=${h}
            ?isLoading=${f}
            aria-busy="${f ? "true" : "false"}"
            aria-label="${f && (e == null ? void 0 : e.loading) || y}"
            data-test-id="pie-modal">
            <header class="c-modal-header"
            data-test-id="modal-header">
                ${this.renderBackButton()}
                <${_} class="c-modal-heading">
                    ${i}
                </${_}>
                ${this.renderCloseButton()}
            </header>
            ${// We need to wrap the remaining content in a shared scrollable container if the footer is not pinned
    v ? this.renderModalContentAndFooter() : q`
                        <div class="c-modal-scrollContainer">
                            ${this.renderModalContentAndFooter()}
                        </div>
                        `}
        </dialog>`;
  }
}
M.styles = te(xn);
P([
  u({ type: Object })
], M.prototype, "aria", 2);
P([
  u({ type: String }),
  fo(Qe)
], M.prototype, "heading", 2);
P([
  u(),
  z(Qe, An, L.headingLevel)
], M.prototype, "headingLevel", 2);
P([
  u({ type: Boolean })
], M.prototype, "hasBackButton", 2);
P([
  u({ type: Boolean })
], M.prototype, "hasStackedActions", 2);
P([
  u({ type: Boolean, reflect: !0 })
], M.prototype, "isDismissible", 2);
P([
  u({ type: Boolean })
], M.prototype, "isFooterPinned", 2);
P([
  u({ type: Boolean })
], M.prototype, "isFullWidthBelowMid", 2);
P([
  u({ type: Boolean, reflect: !0 })
], M.prototype, "isLoading", 2);
P([
  u({ type: Boolean })
], M.prototype, "isOpen", 2);
P([
  u({ type: String })
], M.prototype, "leadingActionText", 2);
P([
  u({ type: String })
], M.prototype, "leadingActionVariant", 2);
P([
  u(),
  z(Qe, En, L.position)
], M.prototype, "position", 2);
P([
  u()
], M.prototype, "returnFocusAfterCloseSelector", 2);
P([
  u(),
  z(Qe, _n, L.size)
], M.prototype, "size", 2);
P([
  u({ type: String })
], M.prototype, "supportingActionText", 2);
P([
  u({ type: String })
], M.prototype, "supportingActionVariant", 2);
P([
  jt("dialog")
], M.prototype, "_dialog", 2);
j(Qe, M);
var Tn = Object.defineProperty, On = Object.getOwnPropertyDescriptor, Ui = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? On(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && Tn(e, t, i), i;
};
const Pn = "icon-check";
let Qt = class extends re {
  constructor() {
    super(...arguments), this.size = "xs", this.class = "c-pieIcon c-pieIcon--check", this.name = "IconCheck";
  }
  render() {
    return k`<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--check"><path d="M5.865 12.489a1.217 1.217 0 0 1-.875-.385L1.875 8.656l.98-.875 3.028 3.369 7.253-7.822.963.875-7.35 7.875a1.216 1.216 0 0 1-.875.385l-.009.026Z"></path></svg>`;
  }
};
Ui([
  u({ type: String, reflect: !0 })
], Qt.prototype, "size", 2);
Ui([
  u({ type: String, reflect: !0 })
], Qt.prototype, "class", 2);
j(Pn, Qt);
const Bn = `*,*:after,*:before{box-sizing:inherit}*,*:before,*:after{cursor:inherit}.c-switch-wrapper{display:inline-flex;align-items:center;gap:var(--dt-spacing-b);font-family:var(--dt-font-body-l-family);cursor:pointer}.c-switch-wrapper[disabled]{cursor:not-allowed}.c-switch{--switch-bg-color: var(--dt-color-interactive-form);--switch-bg-color--checked: var(--dt-color-interactive-brand);--switch-bg-color--disabled: var(--dt-color-disabled-01);--switch-width: 48px;--switch-height: 24px;--switch-control-size: 20px;--switch-padding: 2px;--switch-radius: var(--dt-radius-rounded-e);--switch-translation: calc(var(--switch-width) - var(--switch-control-size) - 2 * var(--switch-padding));position:relative;display:flex;width:var(--switch-width);height:var(--switch-height);flex-shrink:0;padding:var(--switch-padding);border-radius:var(--switch-radius);background-color:var(--switch-bg-color)}@media (prefers-reduced-motion: no-preference){.c-switch{transition:background-color .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch:hover{background-color:hsl(var(--dt-color-interactive-form-h),var(--dt-color-interactive-form-s),calc(var(--dt-color-interactive-form-l) - var(--dt-color-hover-01)))}.c-switch:focus,.c-switch:focus-within{box-shadow:0 0 0 2px var(--dt-color-focus-inner),0 0 0 4px var(--dt-color-focus-outer);outline:none}.c-switch:active{background-color:hsl(var(--dt-color-interactive-form-h),var(--dt-color-interactive-form-s),calc(var(--dt-color-interactive-form-l) - var(--dt-color-active-01)))}.c-switch[checked]{background-color:var(--switch-bg-color--checked)}@media (prefers-reduced-motion: no-preference){.c-switch[checked]{transition:background-color .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch[checked]:hover{background-color:hsl(var(--dt-color-interactive-brand-h),var(--dt-color-interactive-brand-s),calc(var(--dt-color-interactive-brand-l) - var(--dt-color-hover-01)))}.c-switch[checked]:focus,.c-switch[checked]:focus-within{background-color:var(--switch-bg-color--checked)}.c-switch[checked]:active{background-color:hsl(var(--dt-color-interactive-brand-h),var(--dt-color-interactive-brand-s),calc(var(--dt-color-interactive-brand-l) - var(--dt-color-active-01)))}[disabled] .c-switch{background-color:var(--switch-bg-color--disabled);pointer-events:none}.c-switch-input{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;left:50%;transform:translate(-50%) translateY(-50%);bottom:0}.c-switch-input:disabled{background-color:transparent}.c-switch-control{position:absolute;left:2px;width:var(--switch-control-size);height:var(--switch-control-size);border-radius:var(--switch-radius);background-color:var(--dt-color-interactive-light);padding:var(--switch-padding)}@media (prefers-reduced-motion: no-preference){.c-switch-control{transition:transform .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch-input:checked+.c-switch-control{transform:translate(var(--switch-translation))}@media (prefers-reduced-motion: no-preference){.c-switch-input:checked+.c-switch-control{transition:transform .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch-input:checked+.c-switch-control .c-pieIcon--check{color:var(--switch-bg-color--checked)}@media (prefers-reduced-motion: no-preference){.c-switch-input:checked+.c-switch-control .c-pieIcon--check{transition:color .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch-input:disabled~.c-switch-control{color:var(--switch-bg-color--disabled)}.c-switch-input:disabled~.c-switch-control .c-pieIcon--check{color:var(--switch-bg-color--disabled)}@media (prefers-reduced-motion: no-preference){.c-switch-input:disabled~.c-switch-control .c-pieIcon--check{transition:color .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch-description{position:absolute;display:block;height:1px;width:1px;overflow:hidden;padding:1px;white-space:nowrap}.c-switch-wrapper[data-is-rtl] .c-switch-control{position:absolute;left:initial;right:2px}.c-switch-wrapper[data-is-rtl] .c-switch-input:checked+.c-switch-control{transform:translate(calc(-1 * var(--switch-translation)))}@media (prefers-reduced-motion: no-preference){.c-switch-wrapper[data-is-rtl] .c-switch-input:checked+.c-switch-control{transition:transform .15s cubic-bezier(.4,0,.9,1) 0s}}
`, Ln = ["leading", "trailing"], ke = {
  checked: !1,
  required: !1,
  disabled: !1,
  value: "on",
  labelPlacement: "leading"
};
(function() {
  (function(r) {
    const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), F = {
      ariaAtomic: "aria-atomic",
      ariaAutoComplete: "aria-autocomplete",
      ariaBusy: "aria-busy",
      ariaChecked: "aria-checked",
      ariaColCount: "aria-colcount",
      ariaColIndex: "aria-colindex",
      ariaColIndexText: "aria-colindextext",
      ariaColSpan: "aria-colspan",
      ariaCurrent: "aria-current",
      ariaDescription: "aria-description",
      ariaDisabled: "aria-disabled",
      ariaExpanded: "aria-expanded",
      ariaHasPopup: "aria-haspopup",
      ariaHidden: "aria-hidden",
      ariaInvalid: "aria-invalid",
      ariaKeyShortcuts: "aria-keyshortcuts",
      ariaLabel: "aria-label",
      ariaLevel: "aria-level",
      ariaLive: "aria-live",
      ariaModal: "aria-modal",
      ariaMultiLine: "aria-multiline",
      ariaMultiSelectable: "aria-multiselectable",
      ariaOrientation: "aria-orientation",
      ariaPlaceholder: "aria-placeholder",
      ariaPosInSet: "aria-posinset",
      ariaPressed: "aria-pressed",
      ariaReadOnly: "aria-readonly",
      ariaRelevant: "aria-relevant",
      ariaRequired: "aria-required",
      ariaRoleDescription: "aria-roledescription",
      ariaRowCount: "aria-rowcount",
      ariaRowIndex: "aria-rowindex",
      ariaRowIndexText: "aria-rowindextext",
      ariaRowSpan: "aria-rowspan",
      ariaSelected: "aria-selected",
      ariaSetSize: "aria-setsize",
      ariaSort: "aria-sort",
      ariaValueMax: "aria-valuemax",
      ariaValueMin: "aria-valuemin",
      ariaValueNow: "aria-valuenow",
      ariaValueText: "aria-valuetext",
      role: "role"
    }, we = (a, o) => {
      for (let s in F) {
        o[s] = null;
        let d = null;
        const p = F[s];
        Object.defineProperty(o, s, {
          get() {
            return d;
          },
          set(m) {
            d = m, a.isConnected ? a.setAttribute(p, m) : w.set(a, o);
          }
        });
      }
    };
    function _e(a) {
      const o = i.get(a), { form: s } = o;
      Te(a, s, o), Ce(a, o.labels);
    }
    const Ee = (a, o = !1) => {
      const s = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
        acceptNode(m) {
          return i.has(m) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      let d = s.nextNode();
      const p = !o || a.disabled;
      for (; d; )
        d.formDisabledCallback && p && ce(d, a.disabled), d = s.nextNode();
    }, Se = { attributes: !0, attributeFilter: ["disabled", "name"] }, G = Q() ? new MutationObserver((a) => {
      for (const o of a) {
        const s = o.target;
        if (o.attributeName === "disabled" && (s.constructor.formAssociated ? ce(s, s.hasAttribute("disabled")) : s.localName === "fieldset" && Ee(s)), o.attributeName === "name" && s.constructor.formAssociated) {
          const d = i.get(s), p = f.get(s);
          d.setFormValue(p);
        }
      }
    }) : {};
    function se(a) {
      a.forEach((o) => {
        const { addedNodes: s, removedNodes: d } = o, p = Array.from(s), m = Array.from(d);
        p.forEach((b) => {
          var E;
          if (i.has(b) && b.constructor.formAssociated && _e(b), w.has(b)) {
            const A = w.get(b);
            Object.keys(F).filter((S) => A[S] !== null).forEach((S) => {
              b.setAttribute(F[S], A[S]);
            }), w.delete(b);
          }
          if (C.has(b)) {
            const A = C.get(b);
            b.setAttribute("internals-valid", A.validity.valid.toString()), b.setAttribute("internals-invalid", (!A.validity.valid).toString()), b.setAttribute("aria-invalid", (!A.validity.valid).toString()), C.delete(b);
          }
          if (b.localName === "form") {
            const A = h.get(b), S = document.createTreeWalker(b, NodeFilter.SHOW_ELEMENT, {
              acceptNode(ve) {
                return i.has(ve) && ve.constructor.formAssociated && !(A && A.has(ve)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
              }
            });
            let U = S.nextNode();
            for (; U; )
              _e(U), U = S.nextNode();
          }
          b.localName === "fieldset" && ((E = G.observe) === null || E === void 0 || E.call(G, b, Se), Ee(b, !0));
        }), m.forEach((b) => {
          const E = i.get(b);
          E && n.get(E) && ze(E), v.has(b) && v.get(b).disconnect();
        });
      });
    }
    function vt(a) {
      a.forEach((o) => {
        const { removedNodes: s } = o;
        s.forEach((d) => {
          const p = $.get(o.target);
          i.has(d) && Pe(d), p.disconnect();
        });
      });
    }
    const ut = (a) => {
      var o, s;
      const d = new MutationObserver(vt);
      !((o = window == null ? void 0 : window.ShadyDOM) === null || o === void 0) && o.inUse && a.mode && a.host && (a = a.host), (s = d.observe) === null || s === void 0 || s.call(d, a, { childList: !0 }), $.set(a, d);
    };
    Q() && new MutationObserver(se);
    const le = {
      childList: !0,
      subtree: !0
    }, ce = (a, o) => {
      a.toggleAttribute("internals-disabled", o), o ? a.setAttribute("aria-disabled", "true") : a.removeAttribute("aria-disabled"), a.formDisabledCallback && a.formDisabledCallback.apply(a, [o]);
    }, ze = (a) => {
      n.get(a).forEach((o) => {
        o.remove();
      }), n.set(a, []);
    }, Me = (a, o) => {
      const s = document.createElement("input");
      return s.type = "hidden", s.name = a.getAttribute("name"), a.after(s), n.get(o).push(s), s;
    }, mt = (a, o) => {
      var s;
      n.set(o, []), (s = G.observe) === null || s === void 0 || s.call(G, a, Se);
    }, Ce = (a, o) => {
      if (o.length) {
        Array.from(o).forEach((d) => d.addEventListener("click", a.click.bind(a)));
        let s = o[0].id;
        o[0].id || (s = `${o[0].htmlFor}_Label`, o[0].id = s), a.setAttribute("aria-labelledby", s);
      }
    }, J = (a) => {
      const o = Array.from(a.elements).filter((m) => !m.tagName.includes("-") && m.validity).map((m) => m.validity.valid), s = h.get(a) || [], d = Array.from(s).filter((m) => m.isConnected).map((m) => i.get(m).validity.valid), p = [...o, ...d].includes(!1);
      a.toggleAttribute("internals-invalid", p), a.toggleAttribute("internals-valid", !p);
    }, bt = (a) => {
      J(X(a.target));
    }, gt = (a) => {
      J(X(a.target));
    }, ft = (a) => {
      const o = ["button[type=submit]", "input[type=submit]", "button:not([type])"].map((s) => `${s}:not([disabled])`).map((s) => `${s}:not([form])${a.id ? `,${s}[form='${a.id}']` : ""}`).join(",");
      a.addEventListener("click", (s) => {
        if (s.target.closest(o)) {
          const d = h.get(a);
          if (a.noValidate)
            return;
          d.size && Array.from(d).reverse().map((p) => i.get(p).reportValidity()).includes(!1) && s.preventDefault();
        }
      });
    }, yt = (a) => {
      const o = h.get(a.target);
      o && o.size && o.forEach((s) => {
        s.constructor.formAssociated && s.formResetCallback && s.formResetCallback.apply(s);
      });
    }, Te = (a, o, s) => {
      if (o) {
        const d = h.get(o);
        if (d)
          d.add(a);
        else {
          const p = /* @__PURE__ */ new Set();
          p.add(a), h.set(o, p), ft(o), o.addEventListener("reset", yt), o.addEventListener("input", bt), o.addEventListener("change", gt);
        }
        c.set(o, { ref: a, internals: s }), a.constructor.formAssociated && a.formAssociatedCallback && setTimeout(() => {
          a.formAssociatedCallback.apply(a, [o]);
        }, 0), J(o);
      }
    }, X = (a) => {
      let o = a.parentNode;
      return o && o.tagName !== "FORM" && (o = X(o)), o;
    }, T = (a, o, s = DOMException) => {
      if (!a.constructor.formAssociated)
        throw new s(o);
    }, Oe = (a, o, s) => {
      const d = h.get(a);
      return d && d.size && d.forEach((p) => {
        i.get(p)[s]() || (o = !1);
      }), o;
    }, Pe = (a) => {
      if (a.constructor.formAssociated) {
        const o = i.get(a), { labels: s, form: d } = o;
        Ce(a, s), Te(a, d, o);
      }
    };
    function Q() {
      return typeof MutationObserver < "u";
    }
    class wt {
      constructor() {
        this.badInput = !1, this.customError = !1, this.patternMismatch = !1, this.rangeOverflow = !1, this.rangeUnderflow = !1, this.stepMismatch = !1, this.tooLong = !1, this.tooShort = !1, this.typeMismatch = !1, this.valid = !0, this.valueMissing = !1, Object.seal(this);
      }
    }
    const $t = (a) => (a.badInput = !1, a.customError = !1, a.patternMismatch = !1, a.rangeOverflow = !1, a.rangeUnderflow = !1, a.stepMismatch = !1, a.tooLong = !1, a.tooShort = !1, a.typeMismatch = !1, a.valid = !0, a.valueMissing = !1, a), kt = (a, o, s) => (a.valid = xt(o), Object.keys(o).forEach((d) => a[d] = o[d]), s && J(s), a), xt = (a) => {
      let o = !0;
      for (let s in a)
        s !== "valid" && a[s] !== !1 && (o = !1);
      return o;
    }, de = /* @__PURE__ */ new WeakMap();
    function Be(a, o) {
      a.toggleAttribute(o, !0), a.part && a.part.add(o);
    }
    class he extends Set {
      static get isPolyfilled() {
        return !0;
      }
      constructor(o) {
        if (super(), !o || !o.tagName || o.tagName.indexOf("-") === -1)
          throw new TypeError("Illegal constructor");
        de.set(this, o);
      }
      add(o) {
        if (!/^--/.test(o) || typeof o != "string")
          throw new DOMException(`Failed to execute 'add' on 'CustomStateSet': The specified value ${o} must start with '--'.`);
        const s = super.add(o), d = de.get(this), p = `state${o}`;
        return d.isConnected ? Be(d, p) : setTimeout(() => {
          Be(d, p);
        }), s;
      }
      clear() {
        for (let [o] of this.entries())
          this.delete(o);
        super.clear();
      }
      delete(o) {
        const s = super.delete(o), d = de.get(this);
        return d.isConnected ? (d.toggleAttribute(`state${o}`, !1), d.part && d.part.remove(`state${o}`)) : setTimeout(() => {
          d.toggleAttribute(`state${o}`, !1), d.part && d.part.remove(`state${o}`);
        }), s;
      }
    }
    function Le(a, o, s, d) {
      if (s === "a" && !d)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof o == "function" ? a !== o || !d : !o.has(a))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return s === "m" ? d : s === "a" ? d.call(a) : d ? d.value : o.get(a);
    }
    function At(a, o, s, d, p) {
      if (d === "m")
        throw new TypeError("Private method is not writable");
      if (d === "a" && !p)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof o == "function" ? a !== o || !p : !o.has(a))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return d === "a" ? p.call(a, s) : p ? p.value = s : o.set(a, s), s;
    }
    var W;
    class _t {
      constructor(o) {
        W.set(this, void 0), At(this, W, o, "f");
        for (let s = 0; s < o.length; s++) {
          let d = o[s];
          this[s] = d, d.hasAttribute("name") && (this[d.getAttribute("name")] = d);
        }
        Object.freeze(this);
      }
      get length() {
        return Le(this, W, "f").length;
      }
      [(W = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return Le(this, W, "f")[Symbol.iterator]();
      }
      item(o) {
        return this[o] == null ? null : this[o];
      }
      namedItem(o) {
        return this[o] == null ? null : this[o];
      }
    }
    function Et() {
      const a = HTMLFormElement.prototype.checkValidity;
      HTMLFormElement.prototype.checkValidity = s;
      const o = HTMLFormElement.prototype.reportValidity;
      HTMLFormElement.prototype.reportValidity = d;
      function s(...m) {
        let b = a.apply(this, m);
        return Oe(this, b, "checkValidity");
      }
      function d(...m) {
        let b = o.apply(this, m);
        return Oe(this, b, "reportValidity");
      }
      const { get: p } = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "elements");
      Object.defineProperty(HTMLFormElement.prototype, "elements", {
        get(...m) {
          const b = p.call(this, ...m), E = Array.from(h.get(this) || []);
          if (E.length === 0)
            return b;
          const A = Array.from(b).concat(E).sort((S, U) => S.compareDocumentPosition ? S.compareDocumentPosition(U) & 2 ? 1 : -1 : 0);
          return new _t(A);
        }
      });
    }
    class Ie {
      static get isPolyfilled() {
        return !0;
      }
      constructor(o) {
        if (!o || !o.tagName || o.tagName.indexOf("-") === -1)
          throw new TypeError("Illegal constructor");
        const s = o.getRootNode(), d = new wt();
        this.states = new he(o), e.set(this, o), t.set(this, d), i.set(o, this), we(o, this), mt(o, this), Object.seal(this), s instanceof DocumentFragment && ut(s);
      }
      checkValidity() {
        const o = e.get(this);
        if (T(o, "Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !this.willValidate)
          return !0;
        const s = t.get(this);
        if (!s.valid) {
          const d = new Event("invalid", {
            bubbles: !1,
            cancelable: !0,
            composed: !1
          });
          o.dispatchEvent(d);
        }
        return s.valid;
      }
      get form() {
        const o = e.get(this);
        T(o, "Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element.");
        let s;
        return o.constructor.formAssociated === !0 && (s = X(o)), s;
      }
      get labels() {
        const o = e.get(this);
        T(o, "Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.");
        const s = o.getAttribute("id"), d = o.getRootNode();
        return d && s ? d.querySelectorAll(`[for="${s}"]`) : [];
      }
      reportValidity() {
        const o = e.get(this);
        if (T(o, "Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !this.willValidate)
          return !0;
        const s = this.checkValidity(), d = x.get(this);
        if (d && !o.constructor.formAssociated)
          throw new DOMException("Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.");
        return !s && d && (o.focus(), d.focus()), s;
      }
      setFormValue(o) {
        const s = e.get(this);
        if (T(s, "Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element."), ze(this), o != null && !(o instanceof FormData)) {
          if (s.getAttribute("name")) {
            const d = Me(s, this);
            d.value = o;
          }
        } else
          o != null && o instanceof FormData && Array.from(o).reverse().forEach(([d, p]) => {
            if (typeof p == "string") {
              const m = Me(s, this);
              m.name = d, m.value = p;
            }
          });
        f.set(s, o);
      }
      setValidity(o, s, d) {
        const p = e.get(this);
        if (T(p, "Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !o)
          throw new TypeError("Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present.");
        x.set(this, d);
        const m = t.get(this), b = {};
        for (const S in o)
          b[S] = o[S];
        Object.keys(b).length === 0 && $t(m);
        const E = Object.assign(Object.assign({}, m), b);
        delete E.valid;
        const { valid: A } = kt(m, E, this.form);
        if (!A && !s)
          throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.");
        l.set(this, A ? "" : s), p.isConnected ? (p.toggleAttribute("internals-invalid", !A), p.toggleAttribute("internals-valid", A), p.setAttribute("aria-invalid", `${!A}`)) : C.set(p, this);
      }
      get shadowRoot() {
        const o = e.get(this);
        return g.get(o) || null;
      }
      get validationMessage() {
        const o = e.get(this);
        return T(o, "Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element."), l.get(this);
      }
      get validity() {
        const o = e.get(this);
        return T(o, "Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element."), t.get(this);
      }
      get willValidate() {
        const o = e.get(this);
        return T(o, "Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element."), !(o.disabled || o.hasAttribute("disabled") || o.hasAttribute("readonly"));
      }
    }
    function St() {
      if (typeof window > "u" || !window.ElementInternals || !HTMLElement.prototype.attachInternals)
        return !1;
      class a extends HTMLElement {
        constructor() {
          super(), this.internals = this.attachInternals();
        }
      }
      const o = `element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g, "")}`;
      customElements.define(o, a);
      const s = new a();
      return [
        "shadowRoot",
        "form",
        "willValidate",
        "validity",
        "validationMessage",
        "labels",
        "setFormValue",
        "setValidity",
        "checkValidity",
        "reportValidity"
      ].every((d) => d in s.internals);
    }
    let Ne = !1, Fe = !1;
    function pe(a) {
      Fe || (Fe = !0, window.CustomStateSet = he, a && (HTMLElement.prototype.attachInternals = function(...o) {
        const s = a.call(this, o);
        return s.states = new he(this), s;
      }));
    }
    function Ve(a = !0) {
      if (!Ne) {
        if (Ne = !0, typeof window < "u" && (window.ElementInternals = Ie), typeof CustomElementRegistry < "u") {
          const o = CustomElementRegistry.prototype.define;
          CustomElementRegistry.prototype.define = function(s, d, p) {
            if (d.formAssociated) {
              const m = d.prototype.connectedCallback;
              d.prototype.connectedCallback = function() {
                _.has(this) || (_.set(this, !0), this.hasAttribute("disabled") && ce(this, !0)), m != null && m.apply(this), Pe(this);
              };
            }
            o.call(this, s, d, p);
          };
        }
        if (typeof HTMLElement < "u" && (HTMLElement.prototype.attachInternals = function() {
          if (this.tagName) {
            if (this.tagName.indexOf("-") === -1)
              throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.");
          } else
            return {};
          if (i.has(this))
            throw new DOMException("DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
          return new Ie(this);
        }), typeof Element < "u") {
          let o = function(...d) {
            const p = s.apply(this, d);
            if (g.set(this, p), Q()) {
              const m = new MutationObserver(se);
              window.ShadyDOM ? m.observe(this, le) : m.observe(p, le), v.set(this, m);
            }
            return p;
          };
          const s = Element.prototype.attachShadow;
          Element.prototype.attachShadow = o;
        }
        Q() && typeof document < "u" && new MutationObserver(se).observe(document.documentElement, le), typeof HTMLFormElement < "u" && Et(), (a || typeof window < "u" && !window.CustomStateSet) && pe();
      }
    }
    return customElements.polyfillWrapFlushCallback || (St() ? typeof window < "u" && !window.CustomStateSet && pe(HTMLElement.prototype.attachInternals) : Ve(!1)), r.forceCustomStateSetPolyfill = pe, r.forceElementInternalsPolyfill = Ve, Object.defineProperty(r, "__esModule", { value: !0 }), r;
  })({});
})();
var In = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Y = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Nn(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && In(e, t, i), i;
};
const qi = "pie-switch";
class H extends Oi(Ti(V)) {
  constructor() {
    super(...arguments), this.labelPlacement = ke.labelPlacement, this.checked = ke.checked, this.required = ke.required, this.value = ke.value, this.disabled = ke.disabled;
  }
  firstUpdated(e) {
    var t;
    super.firstUpdated(e), this.handleFormAssociation(), (t = this.input) == null || t.addEventListener("invalid", (n) => {
      this.dispatchEvent(new Event("invalid", n));
    });
  }
  updated(e) {
    super.updated(e), this.handleFormAssociation();
  }
  /**
   * Ensures that the form value and validation state are in sync with the component.
   */
  handleFormAssociation() {
    this._internals.form && this.name && this.value && (this.disabled ? (this._internals.setFormValue(null), this._internals.setValidity({})) : this.checked ? (this._internals.setFormValue(this.value), this._internals.setValidity({})) : (this._internals.setFormValue(null), this._internals.setValidity(this.validity, this.validationMessage, this.input)));
  }
  /**
   * The handleChange function updates the checkbox state and emits an event for consumers.
   * @param {Event} event - This should be the change event that was listened for on an input element with `type="checkbox"`.
   */
  handleChange(e) {
    const { checked: t } = e == null ? void 0 : e.currentTarget;
    this.checked = t;
    const n = yo(e);
    this.dispatchEvent(n), this.handleFormAssociation();
  }
  /**
   * Returns a boolean value which indicates validity of the value of the component. If the value is invalid, this method also fires the invalid event on the component.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
   * @returns boolean
   */
  checkValidity() {
    return this.input.checkValidity();
  }
  /**
   * If the value is invalid, this method also fires the invalid event on the element, and (if the event isn't canceled) reports the problem to the user.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
   * @returns boolean
   */
  reportValidity() {
    return this.input.reportValidity();
  }
  /**
   * Allows a consumer to set a custom validation message on the switch. An empty string counts as valid.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
   */
  setCustomValidity(e) {
    var t;
    (t = this.input) == null || t.setCustomValidity(e), this._internals.setValidity(this.validity, this.validationMessage, this.input);
  }
  /**
   * (Read-only) returns a ValidityState with the validity states that this element is in.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validity
   */
  get validity() {
    return this.input.validity;
  }
  /**
   * (Read-only) Returns a string representing a localized message that describes the validation constraints that the control does not satisfy (if any).
   * This string is empty if the component is valid.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
   */
  get validationMessage() {
    return this.input.validationMessage;
  }
  /**
   * Renders the label for a switch if provided.
   * if invalid value is passed, nothing gets rendered
   *
   * @private
   */
  renderSwitchLabel() {
    const { label: e, labelPlacement: t } = this;
    return e ? k`
                <span data-test-id="switch-label-${t}">
                    ${e}
                </span>` : k``;
  }
  render() {
    const {
      labelPlacement: e,
      aria: t,
      checked: n,
      required: i,
      disabled: l,
      isRTL: c
    } = this, v = "switch-description";
    return k`
            <label
                class="c-switch-wrapper"
                ?data-is-rtl=${c}
                ?disabled=${l}>
                ${e === "leading" ? this.renderSwitchLabel() : y}
                <div
                    data-test-id="switch-component"
                    class="c-switch"
                    ?checked=${n}>
                    <input
                        data-test-id="switch-input"
                        role="switch"
                        type="checkbox"
                        class="c-switch-input"
                        .required=${i}
                        .checked="${n}"
                        .disabled="${l}"
                        @change="${this.handleChange}"
                        aria-label="${(t == null ? void 0 : t.label) || y}"
                        aria-describedby="${t != null && t.describedBy ? v : y}">
                    <div class="c-switch-control">
                        ${n ? k`<icon-check></icon-check>` : y}
                    </div>
                </div>
                ${e === "trailing" ? this.renderSwitchLabel() : y}
                ${t != null && t.describedBy ? k`<div id="${v}" data-test-id="${v}" class="c-switch-description">${t == null ? void 0 : t.describedBy}</div>` : y}
            </label>
        `;
  }
}
H.styles = te(Bn);
Y([
  jt('input[type="checkbox"]')
], H.prototype, "input", 2);
Y([
  u({ type: String })
], H.prototype, "label", 2);
Y([
  u({ type: String }),
  z(qi, Ln, ke.labelPlacement)
], H.prototype, "labelPlacement", 2);
Y([
  u({ type: Object })
], H.prototype, "aria", 2);
Y([
  u({ type: Boolean, reflect: !0 })
], H.prototype, "checked", 2);
Y([
  u({ type: Boolean, reflect: !0 })
], H.prototype, "required", 2);
Y([
  u({ type: String })
], H.prototype, "value", 2);
Y([
  u({ type: String })
], H.prototype, "name", 2);
Y([
  u({ type: Boolean, reflect: !0 })
], H.prototype, "disabled", 2);
Y([
  jt("label")
], H.prototype, "focusTarget", 2);
j(qi, H);
const Fn = {
  title: "Cookies",
  description: "We use our own and third party cookies and other tech to enhance and personalise your user experience, optimize analytics, and show ads with third parties (read our <linkStatement>Statement</linkStatement>). Necessary cookies are always set. Click <linkNecessaryOnly>Necessary only</linkNecessaryOnly> to continue without accepting more. Click <linkManagePreferences>Manage preferences</linkManagePreferences> to share your preferences or <linkAcceptAll>Accept all</linkAcceptAll>.",
  cta: {
    managePreferences: "Manage preferences",
    necessaryOnly: "Necessary only",
    acceptAll: "Accept all"
  }
}, Vn = {
  title: "Manage your preferences",
  description: "You can find all the information in the <linkCookieStatement>Cookie Statement</linkCookieStatement> and <linkCookieTechList>Cookie technology list</linkCookieTechList>.",
  all: {
    title: "Turn all on"
  },
  necessary: {
    title: "Necessary",
    description: "These cookies are necessary to ensure that the website and its features function properly. Services you have asked for cannot be provided without these cookies."
  },
  functional: {
    title: "Functional",
    description: "These cookies allow the website to remember the choices you make to give you better functionality and personal features."
  },
  analytical: {
    title: "Analytical",
    description: "These analytical cookies, including statistics, are used to understand how visitors interact with the website and we can measure and improve the performance of our website."
  },
  personalized: {
    title: "Personalised (targeting and advertising)",
    description: "These marketing cookies are used to tailor the delivery of information to you based upon your interest and to measure the effectiveness of such advertisements, both on our website and our advertising partners' websites."
  },
  cta: {
    save: {
      label: "Save",
      ariaLabel: ""
    }
  }
}, Rn = {
  banner: Fn,
  preferencesManagement: Vn
}, Dn = `*,*:after,*:before{box-sizing:inherit}*{margin:0}.c-cookieBanner{--cb-font-family: var(--dt-font-interactive-l-family);--cb-font-size: calc(var(--dt-font-body-l-size) * 1px);--cb-line-height: calc(var(--dt-font-body-l-line-height) * 1px);--cb-font-weight: var(--dt-font-body-l-weight);--cb-padding-inline: var(--dt-spacing-d);--cb-padding-block: var(--dt-spacing-d);--cb-offset: 0;color-scheme:only dark;background-color:var(--dt-color-background-dark);color:var(--dt-color-content-inverse);font-family:var(--cb-font-family);font-size:var(--cb-font-size);line-height:var(--cb-line-height);font-weight:var(--cb-font-weight);padding-block-start:var(--cb-padding-block);padding-block-end:var(--cb-padding-block);max-height:432px;position:fixed;bottom:var(--cb-offset);left:var(--cb-offset);right:var(--cb-offset);border-top-left-radius:var(--dt-radius-rounded-c);border-top-right-radius:var(--dt-radius-rounded-c);z-index:var(--dt-z-index-cookie-banner)}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner{--cb-padding-inline: var(--dt-spacing-f);--cb-offset: var(--dt-spacing-d);max-height:90%;border-bottom-left-radius:var(--dt-radius-rounded-c);border-bottom-right-radius:var(--dt-radius-rounded-c)}}.c-cookieBanner[isCookieBannerHidden]{display:none}@media (prefers-reduced-motion: no-preference){.c-cookieBanner{animation:.5s animate-enter ease-out}@keyframes animate-enter{0%{transform:translate3d(0,75%,0)}to{transform:translateZ(0)}}}.c-cookieBanner-title,.c-cookieBanner-body,.c-cookieBanner-actions{padding-inline-start:var(--cb-padding-inline);padding-inline-end:var(--cb-padding-inline)}.c-cookieBanner-title{--cb-title-font-size: var(--dt-font-heading-s-size--narrow);--cb-title-line-height: var(--dt-font-heading-s-line-height--narrow);font-size:calc(var(--cb-title-font-size) * 1px);font-weight:var(--dt-font-heading-s-weight);line-height:calc(var(--cb-title-line-height) * 1px)}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner-title{--cb-title-font-size: var(--dt-font-heading-s-size--wide);--cb-title-line-height: var(--dt-font-heading-s-line-height--wide)}}.c-cookieBanner-body{--cb-scroll-shadow-color: var(--dt-color-black);margin-block-start:var(--dt-spacing-a);max-height:200px;overflow-y:auto;background:linear-gradient(to bottom,transparent,var(--dt-color-background-dark) 75%) center bottom,linear-gradient(transparent,var(--cb-scroll-shadow-color)) center bottom;background-repeat:no-repeat;background-size:100% 48px,100% 8px;background-attachment:local,scroll}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner-body{max-height:150px}}.c-cookieBanner-actions{--cb-actions-flex-dir: column;margin-block-start:var(--dt-spacing-d);display:flex;gap:var(--dt-spacing-d);flex-direction:var(--cb-actions-flex-dir)}.c-cookieBanner-actions>pie-link{text-align:center;align-self:center}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner-actions{--cb-actions-flex-dir: row-reverse;justify-content:flex-start;align-items:center}}.c-cookieBanner-subheading{--cb-subheading-font-size: var(--dt-font-heading-s-size--narrow);--cb-subheading-line-height: var(--dt-font-heading-s-line-height--narrow);font-size:calc(var(--cb-subheading-font-size) * 1px);font-weight:var(--dt-font-heading-s-weight);line-height:calc(var(--cb-subheading-line-height) * 1px)}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner-subheading{--cb-subheading-font-size: var(--dt-font-heading-s-size--wide);--cb-subheading-line-height: var(--dt-font-heading-s-line-height--wide)}}.c-cookieBanner-description{font-size:calc(var(--dt-font-body-s-size) * 1px);line-height:calc(var(--dt-font-body-s-line-height) * 1px)}.c-cookieBanner-preference{display:flex;gap:var(--dt-spacing-d);justify-content:space-between;margin-block-start:var(--dt-spacing-e);margin-block-end:var(--dt-spacing-e)}.c-cookieBanner-preference p{margin-block-start:var(--dt-spacing-b)}.c-cookieBanner-preference:last-child{margin-block-end:0}
`, jn = "pie-cookie-banner-accept-all", Hn = "pie-cookie-banner-necessary-only", Wn = "pie-cookie-banner-manage-prefs", Un = "pie-cookie-banner-prefs-saved", qn = [
  {
    id: "all",
    hasDivider: !0,
    hasDescription: !1
  },
  {
    id: "necessary",
    checked: !0,
    disabled: !0,
    hasDescription: !0
  },
  {
    id: "functional",
    hasDescription: !0
  },
  {
    id: "analytical",
    hasDescription: !0
  },
  {
    id: "personalized",
    hasDescription: !0
  }
];
function Ki(r) {
  console.error(`[localisation-utils]: ${r}`);
}
function Kn(r, e) {
  const t = (i) => String.prototype.split.call(e, i).filter(Boolean).reduce((l, c) => l != null && typeof l == "object" ? l[c] : l, r), n = t(/[,[\]]+?/) || t(/[,[\].]+?/);
  return typeof n != "string" ? "" : n;
}
function Yi(r, e) {
  if (!r)
    throw new Error('"locale" parameter cannot be empty');
  if (!e)
    throw new Error('"key" parameter cannot be empty');
  const t = Kn(r, e);
  return t || (Ki(`Couldn't find a value for the key "${e}", it will be used as fallback.`), e);
}
function Yn(r) {
  const t = r.map((i) => `(<${i}.*>.*</${i}>)`).join("|");
  return new RegExp(t, "igm");
}
function Zn(r, e) {
  const t = Object.keys(e);
  if (t.length === 0)
    return [r];
  const n = Yn(t);
  return r.split(n).filter((i) => !!i).map((i) => {
    if (!i.match(n))
      return i;
    const c = i.match(/<(.*)>(.*)<\/.*>/);
    if (!c)
      return i;
    const [, v, h] = c;
    return [v, h];
  }).map((i) => {
    if (!Array.isArray(i))
      return i;
    const [c, v] = i, h = e[c];
    return h || typeof h == "function" ? h(v) : (Ki(`Custom tag "${c}" does not have a matching enhancer function`), v);
  });
}
function Gn(r, e, t) {
  if (!r)
    throw new Error('"locale" parameter cannot be empty');
  if (!e)
    throw new Error('"key" parameter cannot be empty');
  if (!t)
    throw new Error('"customTagEnhancers" parameter cannot be empty');
  const n = Yi(r, e);
  return Zn(n, t);
}
var Jn = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, ae = (r, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? Xn(e, t) : e, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (i = (n ? c(e, t, i) : c(i)) || i);
  return n && i && Jn(e, t, i), i;
};
const je = {
  hasPrimaryActionsOnly: !1,
  defaultPreferences: {},
  locale: Rn,
  cookieStatementLink: "",
  cookieTechnologiesLink: ""
}, Qn = "pie-cookie-banner";
class Z extends V {
  constructor() {
    super(...arguments), this._isCookieBannerHidden = !1, this._isModalOpen = !1, this.hasPrimaryActionsOnly = je.hasPrimaryActionsOnly, this.defaultPreferences = je.defaultPreferences, this.locale = je.locale, this.cookieStatementLink = je.cookieStatementLink, this.cookieTechnologiesLink = je.cookieTechnologiesLink, this._customTagEnhancers = {
      linkStatement: (e) => k`<pie-link href="${this.cookieStatementLink}" variant="inverse" target="_blank" data-test-id="cookie-statement-link">${e}</pie-link>`,
      linkNecessaryOnly: (e) => k`<pie-link data-test-id="body-necessary-only" tag="button" variant="inverse" @click="${this._onNecessaryOnly}">${e}</pie-link>`,
      linkManagePreferences: (e) => k`<pie-link data-test-id="body-manage-prefs" tag="button" variant="inverse" @click="${this._openManagePreferencesModal}">${e}</pie-link>`,
      linkAcceptAll: (e) => k`<pie-link data-test-id="body-accept-all" tag="button" variant="inverse" @click="${this._onAcceptAll}">${e}</pie-link>`,
      linkCookieStatement: (e) => k`<pie-link href="${this.cookieStatementLink}" size="small" target="_blank" data-test-id="cookie-statement-link">${e}</pie-link>`,
      linkCookieTechList: (e) => k`<pie-link href="${this.cookieTechnologiesLink}" size="small" target="_blank" data-test-id="cookie-technology-link">${e}</pie-link>`
    }, this._onNecessaryOnly = () => {
      K(this, Hn), this._isCookieBannerHidden = !0;
    }, this._onAcceptAll = () => {
      K(this, jn), this._isCookieBannerHidden = !0;
    }, this._openManagePreferencesModal = () => {
      this._isCookieBannerHidden = !0, K(this, Wn), this._isModalOpen = !0;
    }, this._handleSwitchStates = (e) => {
      const { id: t } = e == null ? void 0 : e.currentTarget, n = [...this._preferencesNodes].find(({ id: i }) => i === "all");
      if (t === n.id) {
        const { checked: i } = e.target;
        this._preferencesNodes.forEach((l) => {
          l.checked = l.disabled ? l.checked : i;
        });
      } else
        n.checked = [...this._preferencesNodes].filter(({ id: i }) => i !== "all").every(({ checked: i }) => i);
    };
  }
  _localiseText(e) {
    return Yi(this.locale, e);
  }
  _localiseRichText(e) {
    return Gn(this.locale, e, this._customTagEnhancers);
  }
  /**
   * Handles closing the modal and re-displaying the cookie banner
   * and making the cookie banner visible
   */
  _displayCookieBanner() {
    this._isModalOpen = !1, this._isCookieBannerHidden = !1;
  }
  /**
   * Handles saving the user cookie preferences, closing the modal and the cookie banner
   * Creates a state object for the save event, indicating the checked status
   * of each preference except for the `all` preference.
   * @example {
   *  functional: false,
   *  necessary: true
   * }
   */
  _handlePreferencesSaved() {
    let e = {};
    [...this._preferencesNodes].filter(({ id: t }) => t !== "all").forEach(({ id: t, checked: n }) => {
      e = { ...e, [t]: n };
    }), K(this, Un, e), this._isModalOpen = !1, this._isCookieBannerHidden = !0;
  }
  /**
   * Renders the content of the preference item.
   * @private
   */
  renderPreference({
    id: e,
    checked: t,
    disabled: n,
    hasDivider: i,
    hasDescription: l
  }) {
    var g;
    const c = this._localiseText(`preferencesManagement.${e}.title`), v = `preferencesManagement.${e}.description`, h = l && this._localiseText(v), w = ["functional", "personalized", "analytical"].every((x) => {
      var $;
      return (($ = this.defaultPreferences) == null ? void 0 : $[x]) === !0;
    });
    return k`
            <div class="c-cookieBanner-preference">
                <div>
                    <h3 class="c-cookieBanner-subheading">${c}</h3>
                     ${h ? k`<p class="c-cookieBanner-description">${h}</p>` : y}
                 </div>
                <pie-switch
                    id="${e}"
                    ?checked="${((g = this.defaultPreferences) == null ? void 0 : g[e]) || w || t}"
                    ?disabled="${n}"
                    @change="${this._handleSwitchStates}">
                </pie-switch>
            </div>
            ${i ? k`<pie-divider></pie-divider>` : y}`;
  }
  /**
   * Renders the modal content.
   * @private
   */
  renderModalContent() {
    return k`
            <p class="c-cookieBanner-description" data-test-id="modal-description">
                ${this._localiseRichText("preferencesManagement.description")}
            </p>
            ${go(
      qn,
      ({ id: e }) => e,
      (e) => this.renderPreference(e)
    )}`;
  }
  render() {
    return k`
        <pie-modal
            .isOpen="${this._isModalOpen}"
            hasBackButton
            hasStackedActions
            isFullWidthBelowMid
            heading="${this._localiseText("preferencesManagement.title")}"
            leadingActionText="${this._localiseText("preferencesManagement.cta.save.label")}"
            leadingActionVariant="primary"
            .aria=${{ leadingActionLabel: this._localiseText("preferencesManagement.cta.save.label") }}
            @pie-modal-leading-action-click="${this._handlePreferencesSaved}"
            @pie-modal-back="${this._displayCookieBanner}">
                ${this.renderModalContent()}
        </pie-modal>
        <aside data-test-id="pie-cookie-banner" class="c-cookieBanner" ?isCookieBannerHidden=${this._isCookieBannerHidden}>
            <h2 class="c-cookieBanner-title">${this._localiseText("banner.title")}</h2>
            <div class="c-cookieBanner-body" data-test-id="banner-description">
                <p>${this._localiseRichText("banner.description")}</p>
            </div>

            <div class="c-cookieBanner-actions">
                <pie-button
                    data-test-id="actions-accept-all"
                    @click="${this._onAcceptAll}"
                    variant="primary"
                    isFullWidth
                    size="small-expressive">
                    ${this._localiseText("banner.cta.acceptAll")}
                </pie-button>
                <pie-button
                    data-test-id="actions-necessary-only"
                    @click="${this._onNecessaryOnly}"
                    variant="${this.hasPrimaryActionsOnly ? "primary" : "outline-inverse"}"
                    isFullWidth
                    size="small-expressive">
                    ${this._localiseText("banner.cta.necessaryOnly")}
                </pie-button>
                <pie-link
                    data-test-id="actions-manage-prefs"
                    @click="${this._openManagePreferencesModal}"
                    tag="button"
                    variant="inverse"
                    isBold="true">
                    ${this._localiseText("banner.cta.managePreferences")}
                </pie-link>
            </div>
        </aside>`;
  }
}
Z.styles = te(Dn);
ae([
  dt()
], Z.prototype, "_isCookieBannerHidden", 2);
ae([
  dt()
], Z.prototype, "_isModalOpen", 2);
ae([
  u({ type: Boolean })
], Z.prototype, "hasPrimaryActionsOnly", 2);
ae([
  u({ type: Object })
], Z.prototype, "defaultPreferences", 2);
ae([
  u({ type: Object })
], Z.prototype, "locale", 2);
ae([
  u({ type: String })
], Z.prototype, "cookieStatementLink", 2);
ae([
  u({ type: String })
], Z.prototype, "cookieTechnologiesLink", 2);
ae([
  po("pie-switch")
], Z.prototype, "_preferencesNodes", 2);
j(Qn, Z);
export {
  jn as ON_COOKIE_BANNER_ACCEPT_ALL,
  Wn as ON_COOKIE_BANNER_MANAGE_PREFS,
  Hn as ON_COOKIE_BANNER_NECESSARY_ONLY,
  Un as ON_COOKIE_BANNER_PREFS_SAVED,
  Z as PieCookieBanner,
  je as defaultProps,
  qn as preferences
};
