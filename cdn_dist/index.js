const lo = (n, e, t) => {
  const r = n[e];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((o, l) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      l.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + e + (e.split("/").length !== t ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = globalThis, Ht = st.ShadowRoot && (st.ShadyCSS === void 0 || st.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Dt = Symbol(), ri = /* @__PURE__ */ new WeakMap();
let ki = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Dt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Ht && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = ri.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && ri.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const se = (n) => new ki(typeof n == "string" ? n : n + "", void 0, Dt), co = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, o, l) => r + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + n[l + 1], n[0]);
  return new ki(t, n, Dt);
}, ho = (n, e) => {
  if (Ht) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), o = st.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = t.cssText, n.appendChild(r);
  }
}, ai = Ht ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return se(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: po, defineProperty: vo, getOwnPropertyDescriptor: uo, getOwnPropertyNames: mo, getOwnPropertySymbols: bo, getPrototypeOf: go } = Object, ce = globalThis, si = ce.trustedTypes, fo = si ? si.emptyScript : "", Tt = ce.reactiveElementPolyfillSupport, Ye = (n, e) => n, lt = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? fo : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let t = n;
  switch (e) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, Vt = (n, e) => !po(n, e), li = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: Vt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), ce.litPropertyMetadata ?? (ce.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Se = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = li) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(e, r, t);
      o !== void 0 && vo(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: o, set: l } = uo(this.prototype, e) ?? { get() {
      return this[t];
    }, set(d) {
      this[t] = d;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(d) {
      const u = o == null ? void 0 : o.call(this);
      l.call(this, d), this.requestUpdate(e, u, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? li;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ye("elementProperties"))) return;
    const e = go(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ye("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ye("properties"))) {
      const t = this.properties, r = [...mo(t), ...bo(t)];
      for (const o of r) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, o] of t) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const o = this._$Eu(t, r);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const o of r) t.unshift(ai(o));
    } else e !== void 0 && t.push(ai(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ho(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$EC(e, t) {
    var l;
    const r = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, r);
    if (o !== void 0 && r.reflect === !0) {
      const d = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : lt).toAttribute(t, r.type);
      this._$Em = e, d == null ? this.removeAttribute(o) : this.setAttribute(o, d), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l;
    const r = this.constructor, o = r._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const d = r.getPropertyOptions(o), u = typeof d.converter == "function" ? { fromAttribute: d.converter } : ((l = d.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? d.converter : lt;
      this._$Em = o, this[o] = u.fromAttribute(t, d.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, r) {
    if (e !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(e)), !(r.hasChanged ?? Vt)(this[e], t)) return;
      this.P(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, r) {
    this._$AL.has(e) || this._$AL.set(e, t), r.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
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
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, d] of this._$Ep) this[l] = d;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, d] of o) d.wrapped !== !0 || this._$AL.has(l) || this[l] === void 0 || this.P(l, this[l], d);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(t)) : this._$EU();
    } catch (o) {
      throw e = !1, this._$EU(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
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
Se.elementStyles = [], Se.shadowRootOptions = { mode: "open" }, Se[Ye("elementProperties")] = /* @__PURE__ */ new Map(), Se[Ye("finalized")] = /* @__PURE__ */ new Map(), Tt == null || Tt({ ReactiveElement: Se }), (ce.reactiveElementVersions ?? (ce.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ze = globalThis, ct = Ze.trustedTypes, ci = ct ? ct.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, jt = "$lit$", ae = `lit$${Math.random().toFixed(9).slice(2)}$`, Ut = "?" + ae, yo = `<${Ut}>`, ke = document, et = () => ke.createComment(""), tt = (n) => n === null || typeof n != "object" && typeof n != "function", Wt = Array.isArray, xi = (n) => Wt(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", Ot = `[ 	
\f\r]`, qe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, di = /-->/g, hi = />/g, fe = RegExp(`>|${Ot}(?:([^\\s"'>=/]+)(${Ot}*=${Ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), pi = /'/g, vi = /"/g, Ai = /^(?:script|style|textarea|title)$/i, wo = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), y = wo(1), de = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), ui = /* @__PURE__ */ new WeakMap(), $e = ke.createTreeWalker(ke, 129);
function _i(n, e) {
  if (!Wt(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ci !== void 0 ? ci.createHTML(e) : e;
}
const Ei = (n, e) => {
  const t = n.length - 1, r = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", d = qe;
  for (let u = 0; u < t; u++) {
    const h = n[u];
    let f, k, g = -1, A = 0;
    for (; A < h.length && (d.lastIndex = A, k = d.exec(h), k !== null); ) A = d.lastIndex, d === qe ? k[1] === "!--" ? d = di : k[1] !== void 0 ? d = hi : k[2] !== void 0 ? (Ai.test(k[2]) && (o = RegExp("</" + k[2], "g")), d = fe) : k[3] !== void 0 && (d = fe) : d === fe ? k[0] === ">" ? (d = o ?? qe, g = -1) : k[1] === void 0 ? g = -2 : (g = d.lastIndex - k[2].length, f = k[1], d = k[3] === void 0 ? fe : k[3] === '"' ? vi : pi) : d === vi || d === pi ? d = fe : d === di || d === hi ? d = qe : (d = fe, o = void 0);
    const $ = d === fe && n[u + 1].startsWith("/>") ? " " : "";
    l += d === qe ? h + yo : g >= 0 ? (r.push(f), h.slice(0, g) + jt + h.slice(g) + ae + $) : h + ae + (g === -2 ? u : $);
  }
  return [_i(n, l + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class it {
  constructor({ strings: e, _$litType$: t }, r) {
    let o;
    this.parts = [];
    let l = 0, d = 0;
    const u = e.length - 1, h = this.parts, [f, k] = Ei(e, t);
    if (this.el = it.createElement(f, r), $e.currentNode = this.el.content, t === 2 || t === 3) {
      const g = this.el.content.firstChild;
      g.replaceWith(...g.childNodes);
    }
    for (; (o = $e.nextNode()) !== null && h.length < u; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const g of o.getAttributeNames()) if (g.endsWith(jt)) {
          const A = k[d++], $ = o.getAttribute(g).split(ae), C = /([.?@])?(.*)/.exec(A);
          h.push({ type: 1, index: l, name: C[2], strings: $, ctor: C[1] === "." ? zi : C[1] === "?" ? Mi : C[1] === "@" ? Li : ot }), o.removeAttribute(g);
        } else g.startsWith(ae) && (h.push({ type: 6, index: l }), o.removeAttribute(g));
        if (Ai.test(o.tagName)) {
          const g = o.textContent.split(ae), A = g.length - 1;
          if (A > 0) {
            o.textContent = ct ? ct.emptyScript : "";
            for (let $ = 0; $ < A; $++) o.append(g[$], et()), $e.nextNode(), h.push({ type: 2, index: ++l });
            o.append(g[A], et());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Ut) h.push({ type: 2, index: l });
      else {
        let g = -1;
        for (; (g = o.data.indexOf(ae, g + 1)) !== -1; ) h.push({ type: 7, index: l }), g += ae.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const r = ke.createElement("template");
    return r.innerHTML = e, r;
  }
}
function xe(n, e, t = n, r) {
  var d, u;
  if (e === de) return e;
  let o = r !== void 0 ? (d = t._$Co) == null ? void 0 : d[r] : t._$Cl;
  const l = tt(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((u = o == null ? void 0 : o._$AO) == null || u.call(o, !1), l === void 0 ? o = void 0 : (o = new l(n), o._$AT(n, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = o : t._$Cl = o), o !== void 0 && (e = xe(n, o._$AS(n, e.values), o, r)), e;
}
let Si = class {
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
    const { el: { content: t }, parts: r } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? ke).importNode(t, !0);
    $e.currentNode = o;
    let l = $e.nextNode(), d = 0, u = 0, h = r[0];
    for (; h !== void 0; ) {
      if (d === h.index) {
        let f;
        h.type === 2 ? f = new ut(l, l.nextSibling, this, e) : h.type === 1 ? f = new h.ctor(l, h.name, h.strings, this, e) : h.type === 6 && (f = new Ti(l, this, e)), this._$AV.push(f), h = r[++u];
      }
      d !== (h == null ? void 0 : h.index) && (l = $e.nextNode(), d++);
    }
    return $e.currentNode = ke, o;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}, ut = class Ci {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, o) {
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = xe(this, e, t), tt(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== de && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : xi(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== w && tt(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ke.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: r } = e, o = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = it.createElement(_i(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const d = new Si(o, this), u = d.u(this.options);
      d.p(t), this.T(u), this._$AH = d;
    }
  }
  _$AC(e) {
    let t = ui.get(e.strings);
    return t === void 0 && ui.set(e.strings, t = new it(e)), t;
  }
  k(e) {
    Wt(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, o = 0;
    for (const l of e) o === t.length ? t.push(r = new Ci(this.O(et()), this.O(et()), this, this.options)) : r = t[o], r._$AI(l), o++;
    o < t.length && (this._$AR(r && r._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}, ot = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, o, l) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = w;
  }
  _$AI(e, t = this, r, o) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) e = xe(this, e, t, 0), d = !tt(e) || e !== this._$AH && e !== de, d && (this._$AH = e);
    else {
      const u = e;
      let h, f;
      for (e = l[0], h = 0; h < l.length - 1; h++) f = xe(this, u[r + h], t, h), f === de && (f = this._$AH[h]), d || (d = !tt(f) || f !== this._$AH[h]), f === w ? e = w : e !== w && (e += (f ?? "") + l[h + 1]), this._$AH[h] = f;
    }
    d && !o && this.j(e);
  }
  j(e) {
    e === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, zi = class extends ot {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === w ? void 0 : e;
  }
};
class Mi extends ot {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== w);
  }
}
let Li = class extends ot {
  constructor(e, t, r, o, l) {
    super(e, t, r, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = xe(this, e, t, 0) ?? w) === de) return;
    const r = this._$AH, o = e === w && r !== w || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, l = e !== w && (r === w || o);
    o && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, Ti = class {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    xe(this, e);
  }
};
const $o = { M: jt, P: ae, A: Ut, C: 1, L: Ei, R: Si, D: xi, V: xe, I: ut, H: ot, N: Mi, U: Li, B: zi, F: Ti }, Bt = Ze.litHtmlPolyfillSupport;
Bt == null || Bt(it, ut), (Ze.litHtmlVersions ?? (Ze.litHtmlVersions = [])).push("3.2.1");
const ko = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = r._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = o = new ut(e.insertBefore(et(), l), l, void 0, t ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let j = class extends Se {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ko(t, this.renderRoot, this.renderOptions);
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
    return de;
  }
};
var $i;
j._$litElement$ = !0, j.finalized = !0, ($i = globalThis.litElementHydrateSupport) == null || $i.call(globalThis, { LitElement: j });
const It = globalThis.litElementPolyfillSupport;
It == null || It({ LitElement: j });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xo = { attribute: !0, type: String, converter: lt, reflect: !1, hasChanged: Vt }, Ao = (n = xo, e, t) => {
  const { kind: r, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), l.set(t.name, n), r === "accessor") {
    const { name: d } = t;
    return { set(u) {
      const h = e.get.call(this);
      e.set.call(this, u), this.requestUpdate(d, h, n);
    }, init(u) {
      return u !== void 0 && this.P(d, void 0, n), u;
    } };
  }
  if (r === "setter") {
    const { name: d } = t;
    return function(u) {
      const h = this[d];
      e.call(this, u), this.requestUpdate(d, h, n);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function v(n) {
  return (e, t) => typeof t == "object" ? Ao(n, e, t) : ((r, o, l) => {
    const d = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, d ? { ...r, wrapped: !0 } : r), d ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(n, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function nt(n) {
  return v({ ...n, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oi = (n, e, t) => (t.configurable = !0, t.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(n, e, t), t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Kt(n, e) {
  return (t, r, o) => {
    const l = (d) => {
      var u;
      return ((u = d.renderRoot) == null ? void 0 : u.querySelector(n)) ?? null;
    };
    return Oi(t, r, { get() {
      return l(this);
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let _o;
function Eo(n) {
  return (e, t) => Oi(e, t, { get() {
    return (this.renderRoot ?? _o ?? (_o = document.createDocumentFragment())).querySelectorAll(n);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bi = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Ii = (n) => (...e) => ({ _$litDirective$: n, values: e });
let Ni = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, r) {
    this._$Ct = e, this._$AM = t, this._$Ci = r;
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
const { I: So } = $o, mi = () => document.createComment(""), Ge = (n, e, t) => {
  var l;
  const r = n._$AA.parentNode, o = e === void 0 ? n._$AB : e._$AA;
  if (t === void 0) {
    const d = r.insertBefore(mi(), o), u = r.insertBefore(mi(), o);
    t = new So(d, u, n, n.options);
  } else {
    const d = t._$AB.nextSibling, u = t._$AM, h = u !== n;
    if (h) {
      let f;
      (l = t._$AQ) == null || l.call(t, n), t._$AM = n, t._$AP !== void 0 && (f = n._$AU) !== u._$AU && t._$AP(f);
    }
    if (d !== o || h) {
      let f = t._$AA;
      for (; f !== d; ) {
        const k = f.nextSibling;
        r.insertBefore(f, o), f = k;
      }
    }
  }
  return t;
}, ye = (n, e, t = n) => (n._$AI(e, t), n), Co = {}, zo = (n, e = Co) => n._$AH = e, Mo = (n) => n._$AH, Nt = (n) => {
  var r;
  (r = n._$AP) == null || r.call(n, !1, !0);
  let e = n._$AA;
  const t = n._$AB.nextSibling;
  for (; e !== t; ) {
    const o = e.nextSibling;
    e.remove(), e = o;
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bi = (n, e, t) => {
  const r = /* @__PURE__ */ new Map();
  for (let o = e; o <= t; o++) r.set(n[o], o);
  return r;
}, Lo = Ii(class extends Ni {
  constructor(n) {
    if (super(n), n.type !== Bi.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(n, e, t) {
    let r;
    t === void 0 ? t = e : e !== void 0 && (r = e);
    const o = [], l = [];
    let d = 0;
    for (const u of n) o[d] = r ? r(u, d) : d, l[d] = t(u, d), d++;
    return { values: l, keys: o };
  }
  render(n, e, t) {
    return this.dt(n, e, t).values;
  }
  update(n, [e, t, r]) {
    const o = Mo(n), { values: l, keys: d } = this.dt(e, t, r);
    if (!Array.isArray(o)) return this.ut = d, l;
    const u = this.ut ?? (this.ut = []), h = [];
    let f, k, g = 0, A = o.length - 1, $ = 0, C = l.length - 1;
    for (; g <= A && $ <= C; ) if (o[g] === null) g++;
    else if (o[A] === null) A--;
    else if (u[g] === d[$]) h[$] = ye(o[g], l[$]), g++, $++;
    else if (u[A] === d[C]) h[C] = ye(o[A], l[C]), A--, C--;
    else if (u[g] === d[C]) h[C] = ye(o[g], l[C]), Ge(n, h[C + 1], o[g]), g++, C--;
    else if (u[A] === d[$]) h[$] = ye(o[A], l[$]), Ge(n, o[g], o[A]), A--, $++;
    else if (f === void 0 && (f = bi(d, $, C), k = bi(u, g, A)), f.has(u[g])) if (f.has(u[A])) {
      const O = k.get(d[$]), D = O !== void 0 ? o[O] : null;
      if (D === null) {
        const Ee = Ge(n, o[g]);
        ye(Ee, l[$]), h[$] = Ee;
      } else h[$] = ye(D, l[$]), Ge(n, o[g], D), o[O] = null;
      $++;
    } else Nt(o[A]), A--;
    else Nt(o[g]), g++;
    for (; $ <= C; ) {
      const O = Ge(n, h[C + 1]);
      ye(O, l[$]), h[$++] = O;
    }
    for (; g <= A; ) {
      const O = o[g++];
      O !== null && Nt(O);
    }
    return this.ut = d, zo(n, h), de;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = Ii(class extends Ni {
  constructor(n) {
    var e;
    if (super(n), n.type !== Bi.ATTRIBUTE || n.name !== "class" || ((e = n.strings) == null ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(n) {
    return " " + Object.keys(n).filter((e) => n[e]).join(" ") + " ";
  }
  update(n, [e]) {
    var r, o;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), n.strings !== void 0 && (this.nt = new Set(n.strings.join(" ").split(/\s/).filter((l) => l !== "")));
      for (const l in e) e[l] && !((r = this.nt) != null && r.has(l)) && this.st.add(l);
      return this.render(e);
    }
    const t = n.element.classList;
    for (const l of this.st) l in e || (t.remove(l), this.st.delete(l));
    for (const l in e) {
      const d = !!e[l];
      d === this.st.has(l) || (o = this.nt) != null && o.has(l) || (d ? (t.add(l), this.st.add(l)) : (t.remove(l), this.st.delete(l)));
    }
    return de;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I = (n) => n ?? w, M = (n, e, t) => function(r, o) {
  const l = `#${o}`;
  Object.defineProperty(r, o, {
    get() {
      return this[l];
    },
    set(d) {
      e.includes(d) ? this[l] = d : (console.error(
        `<${n}> Invalid value "${d}" provided for property "${o}".`,
        `Must be one of: ${e.join(" | ")}.`,
        `Falling back to default value: "${t}"`
      ), this[l] = t);
    },
    configurable: !0
  });
}, To = (n) => function(e, t) {
  const r = `#${t}`;
  Object.defineProperty(e, t, {
    get() {
      return this[r];
    },
    set(o) {
      (o == null || typeof o == "string" && o.trim() === "") && console.error(`<${n}> Missing required attribute "${t}"`), this[r] = o;
    },
    configurable: !0
  });
};
function q(n, e) {
  customElements.get(n) ? console.warn(`PIE Web Component: "${n}" has already been defined. Please ensure the component is only being defined once in your application.`) : customElements.define(n, e);
}
function Oo(n) {
  return new CustomEvent(n.type, {
    detail: {
      sourceEvent: n
    },
    bubbles: n.bubbles,
    cancelable: n.cancelable
  });
}
function X(n, e, t) {
  e.startsWith("pie-") || console.warn("A custom event name should start with `pie-`");
  const r = new CustomEvent(e, {
    bubbles: !0,
    composed: !0,
    detail: t
  });
  n.dispatchEvent(r);
}
const Pi = (n) => {
  class e extends n {
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
}, Ri = (n) => {
  const e = class extends n {
    get form() {
      return this._internals.form;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...o) {
      super(...o), this._internals = this.attachInternals();
    }
  };
  return e.formAssociated = !0, e;
}, Bo = "*,*:after,*:before{box-sizing:inherit}@keyframes rotate360{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.c-spinner{--spinner-size: 24px;--spinner-left-color: hsl(var(--spinner-base-color-h), var(--spinner-base-color-s), var(--spinner-base-color-l), 1);--spinner-right-color: hsl(var(--spinner-base-color-h), var(--spinner-base-color-s), var(--spinner-base-color-l), .35);block-size:var(--spinner-size);inline-size:var(--spinner-size);border-radius:var(--dt-radius-rounded-e);border-width:calc(var(--spinner-size) / 8);border-style:solid;border-color:var(--spinner-left-color) var(--spinner-right-color) var(--spinner-right-color) var(--spinner-left-color);will-change:transform;animation:rotate360 1.15s linear infinite;--spinner-base-color-h: var(--dt-color-content-brand-h);--spinner-base-color-s: var(--dt-color-content-brand-s);--spinner-base-color-l: var(--dt-color-content-brand-l)}.c-spinner.c-spinner--secondary{--spinner-base-color-h: var(--dt-color-content-interactive-secondary-h);--spinner-base-color-s: var(--dt-color-content-interactive-secondary-s);--spinner-base-color-l: var(--dt-color-content-interactive-secondary-l)}.c-spinner.c-spinner--inverse{--spinner-base-color-h: var(--dt-color-content-inverse-h);--spinner-base-color-s: var(--dt-color-content-inverse-s);--spinner-base-color-l: var(--dt-color-content-inverse-l)}.c-spinner.c-spinner--xsmall{--spinner-size: 16px}.c-spinner.c-spinner--small{--spinner-size: 20px}.c-spinner.c-spinner--large{--spinner-size: 32px}.c-spinner.c-spinner--xlarge{--spinner-size: 48px}.c-spinner-label{position:absolute;display:block;height:1px;width:1px;overflow:hidden;padding:1px;white-space:nowrap}", Io = ["xsmall", "small", "medium", "large", "xlarge"], No = ["brand", "secondary", "inverse"], dt = {
  size: "medium",
  variant: "brand"
};
var Po = Object.defineProperty, qt = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && Po(e, t, o), o;
};
const Gt = "pie-spinner", Fi = class extends j {
  constructor() {
    super(...arguments), this.size = dt.size, this.variant = dt.variant;
  }
  render() {
    const { variant: e, size: t } = this, r = {
      "c-spinner": !0,
      [`c-spinner--${t}`]: !0,
      [`c-spinner--${e}`]: !0
    };
    return y`
            <div
                data-test-id="pie-spinner"
                class="${J(r)}"
                role="status"
                aria-live="polite">
                ${this.renderAriaLabel()}
            </div>`;
  }
  renderAriaLabel() {
    var e;
    return (e = this.aria) != null && e.label ? y`
        <span class="c-spinner-label">
            ${this.aria.label}
        </span>` : w;
  }
};
Fi.styles = se(Bo);
let mt = Fi;
qt([
  v({ type: Object })
], mt.prototype, "aria");
qt([
  v(),
  M(Gt, Io, dt.size)
], mt.prototype, "size");
qt([
  v(),
  M(Gt, No, dt.variant)
], mt.prototype, "variant");
q(Gt, mt);
(function() {
  (function(n) {
    const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), D = {
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
    }, Ee = (a, i) => {
      for (let s in D) {
        i[s] = null;
        let c = null;
        const p = D[s];
        Object.defineProperty(i, s, {
          get() {
            return c;
          },
          set(m) {
            c = m, a.isConnected ? a.setAttribute(p, m) : k.set(a, i);
          }
        });
      }
    };
    function Te(a) {
      const i = o.get(a), { form: s } = i;
      Re(a, s, i), Pe(a, i.labels);
    }
    const Oe = (a, i = !1) => {
      const s = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
        acceptNode(m) {
          return o.has(m) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      let c = s.nextNode();
      const p = !i || a.disabled;
      for (; c; )
        c.formDisabledCallback && p && ve(c, a.disabled), c = s.nextNode();
    }, Be = { attributes: !0, attributeFilter: ["disabled", "name"] }, te = ne() ? new MutationObserver((a) => {
      for (const i of a) {
        const s = i.target;
        if (i.attributeName === "disabled" && (s.constructor.formAssociated ? ve(s, s.hasAttribute("disabled")) : s.localName === "fieldset" && Oe(s)), i.attributeName === "name" && s.constructor.formAssociated) {
          const c = o.get(s), p = f.get(s);
          c.setFormValue(p);
        }
      }
    }) : {};
    function he(a) {
      a.forEach((i) => {
        const { addedNodes: s, removedNodes: c } = i, p = Array.from(s), m = Array.from(c);
        p.forEach((b) => {
          var E;
          if (o.has(b) && b.constructor.formAssociated && Te(b), k.has(b)) {
            const x = k.get(b);
            Object.keys(D).filter((S) => x[S] !== null).forEach((S) => {
              b.setAttribute(D[S], x[S]);
            }), k.delete(b);
          }
          if (O.has(b)) {
            const x = O.get(b);
            b.setAttribute("internals-valid", x.validity.valid.toString()), b.setAttribute("internals-invalid", (!x.validity.valid).toString()), b.setAttribute("aria-invalid", (!x.validity.valid).toString()), O.delete(b);
          }
          if (b.localName === "form") {
            const x = h.get(b), S = document.createTreeWalker(b, NodeFilter.SHOW_ELEMENT, {
              acceptNode(ge) {
                return o.has(ge) && ge.constructor.formAssociated && !(x && x.has(ge)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
              }
            });
            let Y = S.nextNode();
            for (; Y; )
              Te(Y), Y = S.nextNode();
          }
          b.localName === "fieldset" && ((E = te.observe) === null || E === void 0 || E.call(te, b, Be), Oe(b, !0));
        }), m.forEach((b) => {
          const E = o.get(b);
          E && r.get(E) && Ie(E), u.has(b) && u.get(b).disconnect();
        });
      });
    }
    function gt(a) {
      a.forEach((i) => {
        const { removedNodes: s } = i;
        s.forEach((c) => {
          const p = $.get(i.target);
          o.has(c) && He(c), p.disconnect();
        });
      });
    }
    const ft = (a) => {
      var i, s;
      const c = new MutationObserver(gt);
      !((i = window == null ? void 0 : window.ShadyDOM) === null || i === void 0) && i.inUse && a.mode && a.host && (a = a.host), (s = c.observe) === null || s === void 0 || s.call(c, a, { childList: !0 }), $.set(a, c);
    };
    ne() && new MutationObserver(he);
    const pe = {
      childList: !0,
      subtree: !0
    }, ve = (a, i) => {
      a.toggleAttribute("internals-disabled", i), i ? a.setAttribute("aria-disabled", "true") : a.removeAttribute("aria-disabled"), a.formDisabledCallback && a.formDisabledCallback.apply(a, [i]);
    }, Ie = (a) => {
      r.get(a).forEach((i) => {
        i.remove();
      }), r.set(a, []);
    }, Ne = (a, i) => {
      const s = document.createElement("input");
      return s.type = "hidden", s.name = a.getAttribute("name"), a.after(s), r.get(i).push(s), s;
    }, yt = (a, i) => {
      var s;
      r.set(i, []), (s = te.observe) === null || s === void 0 || s.call(te, a, Be);
    }, Pe = (a, i) => {
      if (i.length) {
        Array.from(i).forEach((c) => c.addEventListener("click", a.click.bind(a)));
        let s = i[0].id;
        i[0].id || (s = `${i[0].htmlFor}_Label`, i[0].id = s), a.setAttribute("aria-labelledby", s);
      }
    }, ie = (a) => {
      const i = Array.from(a.elements).filter((m) => !m.tagName.includes("-") && m.validity).map((m) => m.validity.valid), s = h.get(a) || [], c = Array.from(s).filter((m) => m.isConnected).map((m) => o.get(m).validity.valid), p = [...i, ...c].includes(!1);
      a.toggleAttribute("internals-invalid", p), a.toggleAttribute("internals-valid", !p);
    }, wt = (a) => {
      ie(oe(a.target));
    }, $t = (a) => {
      ie(oe(a.target));
    }, kt = (a) => {
      const i = ["button[type=submit]", "input[type=submit]", "button:not([type])"].map((s) => `${s}:not([disabled])`).map((s) => `${s}:not([form])${a.id ? `,${s}[form='${a.id}']` : ""}`).join(",");
      a.addEventListener("click", (s) => {
        if (s.target.closest(i)) {
          const c = h.get(a);
          if (a.noValidate)
            return;
          c.size && Array.from(c).reverse().map((p) => o.get(p).reportValidity()).includes(!1) && s.preventDefault();
        }
      });
    }, xt = (a) => {
      const i = h.get(a.target);
      i && i.size && i.forEach((s) => {
        s.constructor.formAssociated && s.formResetCallback && s.formResetCallback.apply(s);
      });
    }, Re = (a, i, s) => {
      if (i) {
        const c = h.get(i);
        if (c)
          c.add(a);
        else {
          const p = /* @__PURE__ */ new Set();
          p.add(a), h.set(i, p), kt(i), i.addEventListener("reset", xt), i.addEventListener("input", wt), i.addEventListener("change", $t);
        }
        d.set(i, { ref: a, internals: s }), a.constructor.formAssociated && a.formAssociatedCallback && setTimeout(() => {
          a.formAssociatedCallback.apply(a, [i]);
        }, 0), ie(i);
      }
    }, oe = (a) => {
      let i = a.parentNode;
      return i && i.tagName !== "FORM" && (i = oe(i)), i;
    }, B = (a, i, s = DOMException) => {
      if (!a.constructor.formAssociated)
        throw new s(i);
    }, Fe = (a, i, s) => {
      const c = h.get(a);
      return c && c.size && c.forEach((p) => {
        o.get(p)[s]() || (i = !1);
      }), i;
    }, He = (a) => {
      if (a.constructor.formAssociated) {
        const i = o.get(a), { labels: s, form: c } = i;
        Pe(a, s), Re(a, c, i);
      }
    };
    function ne() {
      return typeof MutationObserver < "u";
    }
    class At {
      constructor() {
        this.badInput = !1, this.customError = !1, this.patternMismatch = !1, this.rangeOverflow = !1, this.rangeUnderflow = !1, this.stepMismatch = !1, this.tooLong = !1, this.tooShort = !1, this.typeMismatch = !1, this.valid = !0, this.valueMissing = !1, Object.seal(this);
      }
    }
    const _t = (a) => (a.badInput = !1, a.customError = !1, a.patternMismatch = !1, a.rangeOverflow = !1, a.rangeUnderflow = !1, a.stepMismatch = !1, a.tooLong = !1, a.tooShort = !1, a.typeMismatch = !1, a.valid = !0, a.valueMissing = !1, a), Et = (a, i, s) => (a.valid = St(i), Object.keys(i).forEach((c) => a[c] = i[c]), s && ie(s), a), St = (a) => {
      let i = !0;
      for (let s in a)
        s !== "valid" && a[s] !== !1 && (i = !1);
      return i;
    }, ue = /* @__PURE__ */ new WeakMap();
    function De(a, i) {
      a.toggleAttribute(i, !0), a.part && a.part.add(i);
    }
    class me extends Set {
      static get isPolyfilled() {
        return !0;
      }
      constructor(i) {
        if (super(), !i || !i.tagName || i.tagName.indexOf("-") === -1)
          throw new TypeError("Illegal constructor");
        ue.set(this, i);
      }
      add(i) {
        if (!/^--/.test(i) || typeof i != "string")
          throw new DOMException(`Failed to execute 'add' on 'CustomStateSet': The specified value ${i} must start with '--'.`);
        const s = super.add(i), c = ue.get(this), p = `state${i}`;
        return c.isConnected ? De(c, p) : setTimeout(() => {
          De(c, p);
        }), s;
      }
      clear() {
        for (let [i] of this.entries())
          this.delete(i);
        super.clear();
      }
      delete(i) {
        const s = super.delete(i), c = ue.get(this);
        return c.isConnected ? (c.toggleAttribute(`state${i}`, !1), c.part && c.part.remove(`state${i}`)) : setTimeout(() => {
          c.toggleAttribute(`state${i}`, !1), c.part && c.part.remove(`state${i}`);
        }), s;
      }
    }
    function Ve(a, i, s, c) {
      if (s === "a" && !c) throw new TypeError("Private accessor was defined without a getter");
      if (typeof i == "function" ? a !== i || !c : !i.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return s === "m" ? c : s === "a" ? c.call(a) : c ? c.value : i.get(a);
    }
    function Ct(a, i, s, c, p) {
      if (typeof i == "function" ? a !== i || !p : !i.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return i.set(a, s), s;
    }
    var G;
    class zt {
      constructor(i) {
        G.set(this, void 0), Ct(this, G, i);
        for (let s = 0; s < i.length; s++) {
          let c = i[s];
          this[s] = c, c.hasAttribute("name") && (this[c.getAttribute("name")] = c);
        }
        Object.freeze(this);
      }
      get length() {
        return Ve(this, G, "f").length;
      }
      [(G = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return Ve(this, G, "f")[Symbol.iterator]();
      }
      item(i) {
        return this[i] == null ? null : this[i];
      }
      namedItem(i) {
        return this[i] == null ? null : this[i];
      }
    }
    function Mt() {
      const a = HTMLFormElement.prototype.checkValidity;
      HTMLFormElement.prototype.checkValidity = s;
      const i = HTMLFormElement.prototype.reportValidity;
      HTMLFormElement.prototype.reportValidity = c;
      function s(...m) {
        let b = a.apply(this, m);
        return Fe(this, b, "checkValidity");
      }
      function c(...m) {
        let b = i.apply(this, m);
        return Fe(this, b, "reportValidity");
      }
      const { get: p } = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "elements");
      Object.defineProperty(HTMLFormElement.prototype, "elements", {
        get(...m) {
          const b = p.call(this, ...m), E = Array.from(h.get(this) || []);
          if (E.length === 0)
            return b;
          const x = Array.from(b).concat(E).sort((S, Y) => S.compareDocumentPosition ? S.compareDocumentPosition(Y) & 2 ? 1 : -1 : 0);
          return new zt(x);
        }
      });
    }
    class je {
      static get isPolyfilled() {
        return !0;
      }
      constructor(i) {
        if (!i || !i.tagName || i.tagName.indexOf("-") === -1)
          throw new TypeError("Illegal constructor");
        const s = i.getRootNode(), c = new At();
        this.states = new me(i), e.set(this, i), t.set(this, c), o.set(i, this), Ee(i, this), yt(i, this), Object.seal(this), s instanceof DocumentFragment && ft(s);
      }
      checkValidity() {
        const i = e.get(this);
        if (B(i, "Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !this.willValidate)
          return !0;
        const s = t.get(this);
        if (!s.valid) {
          const c = new Event("invalid", {
            bubbles: !1,
            cancelable: !0,
            composed: !1
          });
          i.dispatchEvent(c);
        }
        return s.valid;
      }
      get form() {
        const i = e.get(this);
        B(i, "Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element.");
        let s;
        return i.constructor.formAssociated === !0 && (s = oe(i)), s;
      }
      get labels() {
        const i = e.get(this);
        B(i, "Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.");
        const s = i.getAttribute("id"), c = i.getRootNode();
        return c && s ? c.querySelectorAll(`[for="${s}"]`) : [];
      }
      reportValidity() {
        const i = e.get(this);
        if (B(i, "Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !this.willValidate)
          return !0;
        const s = this.checkValidity(), c = A.get(this);
        if (c && !i.constructor.formAssociated)
          throw new DOMException("Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.");
        return !s && c && (i.focus(), c.focus()), s;
      }
      setFormValue(i) {
        const s = e.get(this);
        if (B(s, "Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element."), Ie(this), i != null && !(i instanceof FormData)) {
          if (s.getAttribute("name")) {
            const c = Ne(s, this);
            c.value = i;
          }
        } else i != null && i instanceof FormData && Array.from(i).reverse().forEach(([c, p]) => {
          if (typeof p == "string") {
            const m = Ne(s, this);
            m.name = c, m.value = p;
          }
        });
        f.set(s, i);
      }
      setValidity(i, s, c) {
        const p = e.get(this);
        if (B(p, "Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !i)
          throw new TypeError("Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present.");
        A.set(this, c);
        const m = t.get(this), b = {};
        for (const S in i)
          b[S] = i[S];
        Object.keys(b).length === 0 && _t(m);
        const E = Object.assign(Object.assign({}, m), b);
        delete E.valid;
        const { valid: x } = Et(m, E, this.form);
        if (!x && !s)
          throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.");
        l.set(this, x ? "" : s), p.isConnected ? (p.toggleAttribute("internals-invalid", !x), p.toggleAttribute("internals-valid", x), p.setAttribute("aria-invalid", `${!x}`)) : O.set(p, this);
      }
      get shadowRoot() {
        const i = e.get(this);
        return g.get(i) || null;
      }
      get validationMessage() {
        const i = e.get(this);
        return B(i, "Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element."), l.get(this);
      }
      get validity() {
        const i = e.get(this);
        return B(i, "Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element."), t.get(this);
      }
      get willValidate() {
        const i = e.get(this);
        return B(i, "Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element."), !(i.disabled || i.hasAttribute("disabled") || i.hasAttribute("readonly"));
      }
    }
    function Lt() {
      if (typeof window > "u" || !window.ElementInternals || !HTMLElement.prototype.attachInternals)
        return !1;
      class a extends HTMLElement {
        constructor() {
          super(), this.internals = this.attachInternals();
        }
      }
      const i = `element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g, "")}`;
      customElements.define(i, a);
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
      ].every((c) => c in s.internals);
    }
    let Ue = !1, We = !1;
    function be(a) {
      We || (We = !0, window.CustomStateSet = me, a && (HTMLElement.prototype.attachInternals = function(...i) {
        const s = a.call(this, i);
        return s.states = new me(this), s;
      }));
    }
    function Ke(a = !0) {
      if (!Ue) {
        if (Ue = !0, typeof window < "u" && (window.ElementInternals = je), typeof CustomElementRegistry < "u") {
          const i = CustomElementRegistry.prototype.define;
          CustomElementRegistry.prototype.define = function(s, c, p) {
            if (c.formAssociated) {
              const m = c.prototype.connectedCallback;
              c.prototype.connectedCallback = function() {
                C.has(this) || (C.set(this, !0), this.hasAttribute("disabled") && ve(this, !0)), m != null && m.apply(this), He(this);
              };
            }
            i.call(this, s, c, p);
          };
        }
        if (typeof HTMLElement < "u" && (HTMLElement.prototype.attachInternals = function() {
          if (this.tagName) {
            if (this.tagName.indexOf("-") === -1)
              throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.");
          } else return {};
          if (o.has(this))
            throw new DOMException("DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
          return new je(this);
        }), typeof Element < "u") {
          let i = function(...c) {
            const p = s.apply(this, c);
            if (g.set(this, p), ne()) {
              const m = new MutationObserver(he);
              window.ShadyDOM ? m.observe(this, pe) : m.observe(p, pe), u.set(this, m);
            }
            return p;
          };
          const s = Element.prototype.attachShadow;
          Element.prototype.attachShadow = i;
        }
        ne() && typeof document < "u" && new MutationObserver(he).observe(document.documentElement, pe), typeof HTMLFormElement < "u" && Mt(), (a || typeof window < "u" && !window.CustomStateSet) && be();
      }
    }
    return customElements.polyfillWrapFlushCallback || (Lt() ? typeof window < "u" && !window.CustomStateSet && be(HTMLElement.prototype.attachInternals) : Ke(!1)), n.forceCustomStateSetPolyfill = be, n.forceElementInternalsPolyfill = Ke, Object.defineProperty(n, "__esModule", { value: !0 }), n;
  })({});
})();
const Ro = ["button", "a"], Fo = ["xsmall", "small-productive", "small-expressive", "medium", "large"], Ho = ["submit", "button", "reset"], Do = [
  "primary",
  "secondary",
  "outline",
  "outline-inverse",
  "ghost",
  "inverse",
  "ghost-inverse",
  "destructive",
  "destructive-ghost"
], Vo = ["leading", "trailing"], F = {
  tag: "button",
  size: "medium",
  type: "submit",
  variant: "primary",
  iconPlacement: "leading",
  disabled: !1,
  isLoading: !1,
  isFullWidth: !1,
  isResponsive: !1
}, jo = "*,*:after,*:before{box-sizing:inherit}.o-btn{--btn-border-radius: var(--dt-radius-rounded-e);--btn-font-family: var(--dt-font-interactive-l-family);--btn-font-weight: var(--dt-font-interactive-l-weight);--btn-bg-color: var(--dt-color-interactive-brand);--btn-text-color: var(--dt-color-content-interactive-primary);--btn-height--xsmall: 32px;--btn-height--small: 40px;--btn-height--medium: 48px;--btn-height--large: 56px;--icon-display-override: block;position:relative;display:inline-flex;gap:var(--dt-spacing-b);align-items:center;justify-content:center;height:var(--btn-height);padding:var(--btn-padding);border:none;border-radius:var(--btn-border-radius);outline:none;background-color:var(--btn-bg-color);font-family:var(--btn-font-family);font-size:var(--btn-font-size);font-weight:var(--btn-font-weight);color:var(--btn-text-color);line-height:var(--btn-line-height);cursor:pointer;-webkit-user-select:none;user-select:none;text-decoration:none;inline-size:var(--btn-inline-size)}.o-btn.o-btn--primary:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--hover-modifier)))}.o-btn.o-btn--primary:active:not(:disabled),.o-btn.o-btn--primary.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--active-modifier)))}.o-btn.o-btn--primary.o-btn--xsmall,.o-btn.o-btn--primary.o-btn--small-productive{--btn-bg-color: var(--dt-color-interactive-primary)}.o-btn.o-btn--primary.o-btn--xsmall:hover:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive:hover:not(:disabled){--hover-modifier: var(--dt-color-hover-02);--btn-bg-color: hsl(var(--dt-color-interactive-primary-h), var(--dt-color-interactive-primary-s), calc(var(--dt-color-interactive-primary-l) + var(--hover-modifier)))}.o-btn.o-btn--primary.o-btn--xsmall:active:not(:disabled),.o-btn.o-btn--primary.o-btn--xsmall.is-loading:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive:active:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive.is-loading:not(:disabled){--active-modifier: var(--dt-color-active-02);--btn-bg-color: hsl(var(--dt-color-interactive-primary-h), var(--dt-color-interactive-primary-s), calc(var(--dt-color-interactive-primary-l) + var(--active-modifier)))}@media (min-width: 769px){.o-btn.o-btn--primary.o-btn--xsmall.o-btn--expressive.o-btn--responsive,.o-btn.o-btn--primary.o-btn--small-productive.o-btn--responsive{--btn-bg-color: var(--dt-color-interactive-brand)}.o-btn.o-btn--primary.o-btn--xsmall.o-btn--expressive.o-btn--responsive:hover:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive.o-btn--responsive:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--hover-modifier)))}.o-btn.o-btn--primary.o-btn--xsmall.o-btn--expressive.o-btn--responsive:active:not(:disabled),.o-btn.o-btn--primary.o-btn--xsmall.o-btn--expressive.o-btn--responsive.is-loading:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive.o-btn--responsive:active:not(:disabled),.o-btn.o-btn--primary.o-btn--small-productive.o-btn--responsive.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--active-modifier)))}}.o-btn.o-btn--secondary{--btn-bg-color: var(--dt-color-interactive-secondary);--btn-text-color: var(--dt-color-content-interactive-secondary)}.o-btn.o-btn--secondary:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-secondary-h), var(--dt-color-interactive-secondary-s), calc(var(--dt-color-interactive-secondary-l) + var(--hover-modifier)))}.o-btn.o-btn--secondary:active:not(:disabled),.o-btn.o-btn--secondary.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-secondary-h), var(--dt-color-interactive-secondary-s), calc(var(--dt-color-interactive-secondary-l) + var(--active-modifier)))}.o-btn.o-btn--outline{--btn-bg-color: transparent;--btn-text-color: var(--dt-color-content-interactive-secondary);border:1px solid var(--dt-color-border-strong)}.o-btn.o-btn--outline:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-btn.o-btn--outline:active:not(:disabled),.o-btn.o-btn--outline.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-btn.o-btn--ghost{--btn-bg-color: transparent;--btn-text-color: var(--dt-color-content-link)}.o-btn.o-btn--ghost:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-btn.o-btn--ghost:active:not(:disabled),.o-btn.o-btn--ghost.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-btn.o-btn--inverse{--btn-bg-color: var(--dt-color-interactive-inverse);--btn-text-color: var(--dt-color-content-interactive-secondary)}.o-btn.o-btn--inverse:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-inverse-h), var(--dt-color-interactive-inverse-s), calc(var(--dt-color-interactive-inverse-l) + var(--hover-modifier)))}.o-btn.o-btn--inverse:active:not(:disabled),.o-btn.o-btn--inverse.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-inverse-h), var(--dt-color-interactive-inverse-s), calc(var(--dt-color-interactive-inverse-l) + var(--active-modifier)))}.o-btn.o-btn--ghost-inverse,.o-btn.o-btn--outline-inverse{--btn-bg-color: transparent;--btn-text-color: var(--dt-color-content-interactive-primary)}.o-btn.o-btn--ghost-inverse:hover:not(:disabled),.o-btn.o-btn--outline-inverse:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-container-default-h), var(--dt-color-container-default-s), var(--dt-color-container-default-l), var(--hover-modifier))}.o-btn.o-btn--ghost-inverse:active:not(:disabled),.o-btn.o-btn--ghost-inverse.is-loading:not(:disabled),.o-btn.o-btn--outline-inverse:active:not(:disabled),.o-btn.o-btn--outline-inverse.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-container-default-h), var(--dt-color-container-default-s), var(--dt-color-container-default-l), var(--active-modifier))}.o-btn.o-btn--outline-inverse:not([disabled]){border:1px solid var(--dt-color-border-strong)}.o-btn.o-btn--destructive{--btn-bg-color: var(--dt-color-support-error)}.o-btn.o-btn--destructive:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-support-error-h), var(--dt-color-support-error-s), calc(var(--dt-color-support-error-l) + var(--hover-modifier)))}.o-btn.o-btn--destructive:active:not(:disabled),.o-btn.o-btn--destructive.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-support-error-h), var(--dt-color-support-error-s), calc(var(--dt-color-support-error-l) + var(--active-modifier)))}.o-btn.o-btn--destructive-ghost{--btn-bg-color: transparent;--btn-text-color: var(--dt-color-content-interactive-error)}.o-btn.o-btn--destructive-ghost:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-btn.o-btn--destructive-ghost:active:not(:disabled),.o-btn.o-btn--destructive-ghost.is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-btn.o-btn--xsmall{--btn-height: var(--btn-height--xsmall);--btn-padding: 6px var(--dt-spacing-b);--btn-font-size: calc(var(--dt-font-size-14) * 1px);--btn-line-height: calc(var(--dt-font-size-14-line-height) * 1px);--icon-size-override: 16px}@media (min-width: 769px){.o-btn.o-btn--xsmall.o-btn--responsive{--btn-height: var(--btn-height--small);--btn-padding: 8px var(--dt-spacing-d);--btn-font-size: calc(var(--dt-font-size-16) * 1px);--btn-line-height: calc(var(--dt-font-size-16-line-height) * 1px);--icon-size-override: 20px}.o-btn.o-btn--xsmall.o-btn--responsive.o-btn--expressive{--btn-height: var(--btn-height--small);--btn-padding: 6px var(--dt-spacing-d);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 20px}}.o-btn.o-btn--small-expressive{--btn-height: var(--btn-height--small);--btn-padding: 6px var(--dt-spacing-d);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 20px}@media (min-width: 769px){.o-btn.o-btn--small-expressive.o-btn--responsive{--btn-height: var(--btn-height--medium);--btn-padding: 10px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}}.o-btn.o-btn--small-productive{--btn-height: var(--btn-height--small);--btn-padding: 8px var(--dt-spacing-d);--btn-font-size: calc(var(--dt-font-size-16) * 1px);--btn-line-height: calc(var(--dt-font-size-16-line-height) * 1px);--icon-size-override: 20px}@media (min-width: 769px){.o-btn.o-btn--small-productive.o-btn--responsive{--btn-height: var(--btn-height--medium);--btn-padding: 10px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}}.o-btn.o-btn--medium{--btn-height: var(--btn-height--medium);--btn-padding: 10px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}@media (min-width: 769px){.o-btn.o-btn--medium.o-btn--responsive{--btn-height: var(--btn-height--large);--btn-padding: 14px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}}.o-btn.o-btn--large{--btn-height: var(--btn-height--large);--btn-padding: 14px var(--dt-spacing-e);--btn-font-size: calc(var(--dt-font-size-20) * 1px);--btn-line-height: calc(var(--dt-font-size-20-line-height) * 1px);--icon-size-override: 24px}.o-btn.o-btn--fullWidth{--btn-inline-size: 100%}.o-btn[disabled]{--btn-text-color: var(--dt-color-content-disabled) !important;cursor:not-allowed}.o-btn[disabled]:not(.o-btn--ghost,.o-btn--ghost-inverse,.o-btn--destructive-ghost){--btn-bg-color: var(--dt-color-disabled-01) !important}.o-btn[disabled].o-btn--outline{border-color:var(--dt-color-disabled-01)!important}.o-btn.is-loading>*:not(pie-spinner){visibility:hidden}.o-btn.is-loading pie-spinner{position:absolute}.o-btn:focus-visible{box-shadow:0 0 0 2px var(--dt-color-focus-inner),0 0 0 4px var(--dt-color-focus-outer);outline:none}::slotted(svg){height:var(--icon-size-override);width:var(--icon-size-override)}";
var Uo = Object.defineProperty, T = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && Uo(e, t, o), o;
};
const Me = "pie-button", Hi = class extends Ri(j) {
  constructor() {
    super(...arguments), this.tag = F.tag, this.size = F.size, this.type = F.type, this.variant = F.variant, this.iconPlacement = F.iconPlacement, this.disabled = F.disabled, this.isLoading = F.isLoading, this.isFullWidth = F.isFullWidth, this.isResponsive = F.isResponsive, this._handleFormKeyDown = (e) => {
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
    var t, r;
    e.has("type") && (this.type === "submit" ? (t = this.form) == null || t.addEventListener("keydown", this._handleFormKeyDown) : (r = this.form) == null || r.removeEventListener("keydown", this._handleFormKeyDown));
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
    if (!this.form) return;
    const t = document.createElement("button");
    t.type = e, t.style.position = "absolute", t.style.width = "1px", t.style.height = "1px", t.style.padding = "0", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.border = "0", t.style.whiteSpace = "nowrap", e === "submit" && (this.name && (t.name = this.name), this.value && (t.value = this.value), this.formaction && t.setAttribute("formaction", this.formaction), this.formenctype && t.setAttribute("formenctype", this.formenctype), this.formmethod && t.setAttribute("formmethod", this.formmethod), this.formnovalidate && t.setAttribute("formnovalidate", "formnovalidate"), this.formtarget && t.setAttribute("formtarget", this.formtarget)), this.form.append(t), t.click(), t.remove();
  }
  _handleClick() {
    this.form && (this.isLoading || this.tag === "button" && (this.type === "submit" ? (this.formnovalidate || this.form.reportValidity()) && this._simulateNativeButtonClick("submit") : this.type === "reset" && this._simulateNativeButtonClick("reset")));
  }
  /**
   * Template for the loading state
   *
   * @private
   */
  renderSpinner() {
    const { size: e, variant: t, disabled: r } = this, o = e && e.includes("small") ? "small" : "medium";
    let l;
    return r ? l = t === "ghost-inverse" ? "inverse" : "secondary" : l = ["primary", "destructive", "outline-inverse", "ghost-inverse"].includes(this.variant) ? "inverse" : "secondary", y`
            <pie-spinner
                size="${o}"
                variant="${l}">
            </pie-spinner>`;
  }
  renderAnchor(e) {
    const {
      href: t,
      iconPlacement: r,
      rel: o,
      target: l
    } = this;
    return y`
            <a
                href="${I(t)}"
                rel="${I(o)}"
                target="${I(l)}"
                class="${J(e)}">
                ${r === "leading" ? y`<slot name="icon"></slot>` : w}
                <slot></slot>
                ${r === "trailing" ? y`<slot name="icon"></slot>` : w}
            </a>`;
  }
  renderButton(e) {
    const {
      disabled: t,
      iconPlacement: r,
      isLoading: o,
      type: l
    } = this, d = {
      ...e,
      "is-loading": o
    };
    return y`
            <button
                @click=${this._handleClick}
                class=${J(d)}
                type=${l}
                ?disabled=${t}>
                    ${o ? this.renderSpinner() : w}
                    ${r === "leading" ? y`<slot name="icon"></slot>` : w}
                    <slot></slot>
                    ${r === "trailing" ? y`<slot name="icon"></slot>` : w}
            </button>`;
  }
  render() {
    const {
      isFullWidth: e,
      isResponsive: t,
      responsiveSize: r,
      size: o,
      tag: l,
      variant: d
    } = this, u = {
      "o-btn": !0,
      "o-btn--fullWidth": e,
      "o-btn--responsive": t,
      [`o-btn--${r}`]: !!(t && r),
      [`o-btn--${d}`]: !0,
      [`o-btn--${o}`]: !0
    };
    return l === "a" ? this.renderAnchor(u) : this.renderButton(u);
  }
  focus() {
    var e, t;
    (t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("button")) == null || t.focus();
  }
};
Hi.styles = se(jo);
let L = Hi;
T([
  v({ type: String }),
  M(Me, Ro, F.tag)
], L.prototype, "tag");
T([
  v({ type: String }),
  M(Me, Fo, F.size)
], L.prototype, "size");
T([
  v({ type: String }),
  M(Me, Ho, F.type)
], L.prototype, "type");
T([
  v({ type: String }),
  M(Me, Do, F.variant)
], L.prototype, "variant");
T([
  v({ type: String }),
  M(Me, Vo, F.iconPlacement)
], L.prototype, "iconPlacement");
T([
  v({ type: Boolean })
], L.prototype, "disabled");
T([
  v({ type: Boolean, reflect: !0 })
], L.prototype, "isLoading");
T([
  v({ type: Boolean })
], L.prototype, "isFullWidth");
T([
  v({ type: Boolean })
], L.prototype, "isResponsive");
T([
  v({ type: String })
], L.prototype, "name");
T([
  v({ type: String })
], L.prototype, "value");
T([
  v({ type: String })
], L.prototype, "formaction");
T([
  v({ type: String })
], L.prototype, "formenctype");
T([
  v({ type: String })
], L.prototype, "formmethod");
T([
  v({ type: Boolean })
], L.prototype, "formnovalidate");
T([
  v({ type: String })
], L.prototype, "formtarget");
T([
  v({ type: String })
], L.prototype, "responsiveSize");
T([
  v({ type: String })
], L.prototype, "href");
T([
  v({ type: String })
], L.prototype, "rel");
T([
  v({ type: String })
], L.prototype, "target");
q(Me, L);
const Wo = "*,*:after,*:before{box-sizing:inherit}.c-divider{--divider-bg-color: var(--dt-color-divider-default);--divider-width: 100%;--divider-min-width: 16px;--divider-height: 1px;--divider-label-max-width: 90%;width:var(--divider-width)}.c-divider,.c-divider hr{margin:0;border:0;background-color:var(--divider-bg-color)}.c-divider:not(.c-divider--labelled){height:var(--divider-height)}.c-divider.c-divider--labelled{display:flex;align-items:center;text-align:center;gap:var(--dt-spacing-b);background-color:transparent}.c-divider.c-divider--labelled .c-divider-label{max-width:var(--divider-label-max-width);word-wrap:break-word}.c-divider.c-divider--labelled hr{flex-grow:1;height:var(--divider-height);min-width:var(--divider-min-width)}.c-divider.c-divider--labelled.c-divider--inverse{color:var(--dt-color-content-inverse)}.c-divider.c-divider--inverse{--divider-bg-color: var(--dt-color-divider-inverse)}.c-divider.c-divider--vertical{--divider-width: 1px;--divider-height: 100%}", Ko = ["default", "inverse"], qo = ["horizontal", "vertical"], Xe = {
  variant: "default",
  orientation: "horizontal",
  label: ""
};
var Go = Object.defineProperty, Yt = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && Go(e, t, o), o;
};
const re = "pie-divider", Di = class extends j {
  constructor() {
    super(...arguments), this.variant = Xe.variant, this.orientation = Xe.orientation, this.label = Xe.label;
  }
  render() {
    const { variant: e, orientation: t, label: r } = this, o = r.length > 0 && t === "horizontal", l = {
      "c-divider": !0,
      "c-divider--inverse": e === "inverse",
      "c-divider--vertical": t === "vertical",
      "c-divider--labelled": o
    };
    return y`
            ${o ? y`
                <div
                    id="${re}"
                    data-test-id="${re}"
                    class="${J(l)}"
                    aria-labelledby="${re}-label">
                        <hr aria-hidden="true"/>
                        <span id="${re}-label" class="c-divider-label">${r}</span>
                        <hr aria-hidden="true"/>
                </div>` : y`
                <hr id="${re}"
                    data-test-id="${re}"
                    class="${J(l)}"
                    aria-hidden="true"
                />`}`;
  }
};
Di.styles = se(Wo);
let bt = Di;
Yt([
  v({ type: String }),
  M(re, Ko, Xe.variant)
], bt.prototype, "variant");
Yt([
  v({ type: String }),
  M(re, qo, Xe.orientation)
], bt.prototype, "orientation");
Yt([
  v({ type: String })
], bt.prototype, "label");
q(re, bt);
const Yo = "*,*:after,*:before{box-sizing:inherit}:host{--btn-dimension-default: 48px;--icon-size-override: 24px}.o-iconBtn{--btn-border-radius: var(--dt-radius-rounded-e);--btn-bg-color: var(--dt-color-interactive-brand);--btn-icon-fill: var(--dt-color-content-interactive-primary);--icon-display-override: block;block-size:var(--btn-dimension, var(--btn-dimension-default));inline-size:var(--btn-dimension, var(--btn-dimension-default));border-color:var(--btn-border-color);border-radius:var(--btn-border-radius);background-color:var(--btn-bg-color);color:var(--btn-icon-fill);cursor:pointer;-webkit-user-select:none;user-select:none;outline:none;border:none;display:flex;align-items:center;justify-content:center}.o-iconBtn:focus-visible{box-shadow:0 0 0 2px var(--dt-color-focus-inner),0 0 0 4px var(--dt-color-focus-outer);outline:none}.o-iconBtn svg{height:var(--icon-size-override);width:var(--icon-size-override)}.o-iconBtn[variant=primary]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--hover-modifier)))}.o-iconBtn[variant=primary]:active:not(:disabled),.o-iconBtn[variant=primary].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-brand-h), var(--dt-color-interactive-brand-s), calc(var(--dt-color-interactive-brand-l) + var(--active-modifier)))}.o-iconBtn[variant=secondary]{--btn-bg-color: var(--dt-color-interactive-secondary);--btn-icon-fill: var(--dt-color-content-interactive-secondary)}.o-iconBtn[variant=secondary]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-secondary-h), var(--dt-color-interactive-secondary-s), calc(var(--dt-color-interactive-secondary-l) + var(--hover-modifier)))}.o-iconBtn[variant=secondary]:active:not(:disabled),.o-iconBtn[variant=secondary].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-secondary-h), var(--dt-color-interactive-secondary-s), calc(var(--dt-color-interactive-secondary-l) + var(--active-modifier)))}.o-iconBtn[variant=outline]{--btn-bg-color: transparent;--btn-icon-fill: var(--dt-color-content-interactive-brand);border:1px solid var(--dt-color-border-strong)}.o-iconBtn[variant=outline]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-iconBtn[variant=outline]:active:not(:disabled),.o-iconBtn[variant=outline].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-iconBtn[variant=ghost]{--btn-bg-color: transparent;--btn-icon-fill: var(--dt-color-content-interactive-brand)}.o-iconBtn[variant=ghost]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-iconBtn[variant=ghost]:active:not(:disabled),.o-iconBtn[variant=ghost].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-iconBtn[variant=ghost-secondary]{--btn-bg-color: transparent;--btn-icon-fill: var(--dt-color-content-interactive-secondary)}.o-iconBtn[variant=ghost-secondary]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--hover-modifier))}.o-iconBtn[variant=ghost-secondary]:active:not(:disabled),.o-iconBtn[variant=ghost-secondary].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-black-h), var(--dt-color-black-s), var(--dt-color-black-l), var(--active-modifier))}.o-iconBtn[variant=inverse]{--btn-bg-color: var(--dt-color-interactive-inverse);--btn-icon-fill: var(--dt-color-content-interactive-brand)}.o-iconBtn[variant=inverse]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--btn-bg-color: hsl(var(--dt-color-interactive-inverse-h), var(--dt-color-interactive-inverse-s), calc(var(--dt-color-interactive-inverse-l) + var(--hover-modifier)))}.o-iconBtn[variant=inverse]:active:not(:disabled),.o-iconBtn[variant=inverse].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--btn-bg-color: hsl(var(--dt-color-interactive-inverse-h), var(--dt-color-interactive-inverse-s), calc(var(--dt-color-interactive-inverse-l) + var(--active-modifier)))}.o-iconBtn[variant=ghost-inverse]{--btn-bg-color: transparent;--btn-icon-fill: var(--dt-color-content-inverse)}.o-iconBtn[variant=ghost-inverse]:hover:not(:disabled){--hover-modifier: calc(-1 * var(--dt-color-hover-01));--hover-modifier: var(--dt-color-hover-01);--btn-bg-color: hsl(var(--dt-color-container-default-h), var(--dt-color-container-default-s), var(--dt-color-container-default-l), var(--hover-modifier))}.o-iconBtn[variant=ghost-inverse]:active:not(:disabled),.o-iconBtn[variant=ghost-inverse].is-loading:not(:disabled){--active-modifier: calc(-1 * var(--dt-color-active-01));--active-modifier: var(--dt-color-active-01);--btn-bg-color: hsl(var(--dt-color-container-default-h), var(--dt-color-container-default-s), var(--dt-color-container-default-l), var(--active-modifier))}.o-iconBtn[disabled]{--btn-icon-fill: var(--dt-color-content-disabled);cursor:not-allowed}.o-iconBtn[disabled]:not([variant=ghost],[variant=ghost-secondary],[variant=ghost-inverse]){--btn-bg-color: var(--dt-color-disabled-01)}.o-iconBtn[disabled][variant=outline]{border-color:var(--dt-color-disabled-01)}.o-iconBtn[size=xsmall]{--btn-dimension: 32px;--icon-size-override: 20px}.o-iconBtn[size=small]{--btn-dimension: 40px}.o-iconBtn[size=large]{--btn-dimension: 56px;--icon-size-override: 28px}", Zo = ["xsmall", "small", "medium", "large"], Xo = [
  "primary",
  "secondary",
  "outline",
  "ghost",
  "ghost-secondary",
  "inverse",
  "ghost-inverse"
], ze = {
  size: "medium",
  variant: "primary",
  disabled: !1,
  isLoading: !1
};
var Jo = Object.defineProperty, rt = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && Jo(e, t, o), o;
};
const Zt = "pie-icon-button", Vi = class extends j {
  constructor() {
    super(...arguments), this.size = ze.size, this.variant = ze.variant, this.disabled = ze.disabled, this.isLoading = ze.isLoading;
  }
  /**
   * Template for the loading state
   *
   * @private
   */
  renderSpinner() {
    const { variant: e, size: t, disabled: r } = this, o = t === "xsmall" ? "small" : "medium";
    let l = "brand";
    return e != null && e.includes("secondary") && (l = "secondary"), (e === "primary" && !r || e === "ghost-inverse") && (l = "inverse"), y`
                <pie-spinner
                    size="${o}"
                    variant="${l}">
                </pie-spinner>`;
  }
  render() {
    const {
      disabled: e,
      size: t,
      variant: r,
      isLoading: o,
      aria: l
    } = this;
    return y`
            <button
                class="o-iconBtn"
                data-test-id="pie-icon-button"
                size="${t || "medium"}"
                variant="${r || "primary"}"
                ?disabled="${e}"
                ?isLoading="${o}"
                aria-label="${I(l == null ? void 0 : l.label)}"
                aria-labelledby="${I(l == null ? void 0 : l.labelledby)}"
                aria-describedby="${I(l == null ? void 0 : l.describedby)}"
                aria-expanded="${I(l == null ? void 0 : l.expanded)}"
                aria-controls="${I(l == null ? void 0 : l.controls)}">
                ${o ? this.renderSpinner() : y`<slot></slot>`}
            </button>`;
  }
};
Vi.styles = se(Yo);
let Le = Vi;
rt([
  v({ type: Object })
], Le.prototype, "aria");
rt([
  v(),
  M(Zt, Zo, ze.size)
], Le.prototype, "size");
rt([
  v(),
  M(Zt, Xo, ze.variant)
], Le.prototype, "variant");
rt([
  v({ type: Boolean })
], Le.prototype, "disabled");
rt([
  v({ type: Boolean })
], Le.prototype, "isLoading");
q(Zt, Le);
const Qo = "*,*:after,*:before{box-sizing:inherit}.c-link{--link-font-family: var(--dt-font-interactive-l-family);--link-font-size: calc(var(--dt-font-size-16) * 1px);--link-line-height: calc(var(--dt-font-size-16-line-height) * 1px);--link-font-weight: var(--dt-font-weight-regular);--link-text-color: var(--dt-color-content-link);--link-text-decoration: var(--dt-font-style-underline);--link-icon-size: 16px;--link-icon-offset-top: var(--dt-spacing-a);display:inline-block;font-family:var(--link-font-family);font-size:var(--link-font-size);line-height:var(--link-line-height);font-weight:var(--link-font-weight);color:var(--link-text-color);text-decoration:var(--link-text-decoration);cursor:pointer}.c-link:hover,.c-link:active{--link-text-decoration: none}.c-link.c-link--high-visibility{--link-text-color: var(--dt-color-content-link-distinct)}.c-link.c-link--inverse{--link-text-color: var(--dt-color-content-link-inverse)}.c-link.c-link--small{--link-font-size: calc(var(--dt-font-size-14) * 1px);--link-line-height: calc(var(--dt-font-size-14-line-height) * 1px);--link-icon-offset-top: 2px}.c-link.c-link--underline-reversed.c-link--standalone{--link-text-decoration: none}.c-link.c-link--underline-reversed.c-link--standalone:hover,.c-link.c-link--underline-reversed.c-link--standalone:active{--link-text-decoration: var(--dt-font-style-underline)}.c-link.c-link--bold{--link-font-weight: var(--dt-font-weight-bold)}.c-link.c-link--standalone{display:block;width:fit-content}.c-link.c-link--hasVisited:visited{color:var(--dt-color-content-link-visited)}.c-link.c-link--hasVisited:visited.c-link--inverse{color:var(--dt-color-content-link-visited-inverse)}.c-link:focus-visible{outline:none;border-radius:2px;box-shadow:0 0 0 2px var(--dt-color-focus-inner),0 0 0 4px var(--dt-color-focus-outer)}button.c-link{outline:none;border:none;-webkit-user-select:none;user-select:none;background:transparent;padding:0}.c-link-content{display:flex;gap:var(--dt-spacing-a)}::slotted(.c-pieIcon),::slotted(svg){display:inline-flex;margin-block-start:var(--link-icon-offset-top);height:var(--link-icon-size);width:var(--link-icon-size)}", en = ["default", "high-visibility", "inverse"], tn = ["small", "medium"], on = ["leading", "trailing"], nn = ["a", "button"], rn = ["submit", "button", "reset", "menu"], an = ["default", "reversed"], R = {
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
var sn = Object.defineProperty, W = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && sn(e, t, o), o;
};
const Ae = "pie-link", ji = class extends j {
  constructor() {
    super(...arguments), this.tag = R.tag, this.variant = R.variant, this.size = R.size, this.underline = R.underline, this.iconPlacement = R.iconPlacement, this.isBold = R.isBold, this.isStandalone = R.isStandalone, this.hasVisited = R.hasVisited, this.type = R.type;
  }
  /**
   * Renders the link content.
   * Icons are only shown in block elements
   * @private
   */
  renderContent() {
    const { iconPlacement: e, isStandalone: t } = this;
    return y`
            <span class="c-link-content">
                ${t && e === "leading" ? y`<slot name="icon"></slot>` : w}
                <slot></slot>
                ${t && e === "trailing" ? y`<slot name="icon"></slot>` : w}
            </span>`;
  }
  /**
   * Renders the link as a button element.
   *
   * @private
   */
  renderButton(e) {
    var t;
    return y`
            <button
                data-test-id="pie-link"
                class="${J(e)}"
                type=${this.type}
                aria-label=${I((t = this.aria) == null ? void 0 : t.label)}>
                ${this.renderContent()}
            </button>`;
  }
  /**
   * Renders the link as an anchor element.
   *
   * @private
   */
  renderAnchor(e) {
    var t;
    return y`
            <a
                data-test-id="pie-link"
                class="${J(e)}"
                href=${I(this.href)}
                target=${I(this.target)}
                rel=${I(this.rel)}
                aria-label=${I((t = this.aria) == null ? void 0 : t.label)}>
                ${this.renderContent()}
            </a>`;
  }
  render() {
    const e = {
      "c-link": !0,
      [`c-link--${this.variant}`]: !0,
      [`c-link--${this.size}`]: !0,
      "c-link--underline-reversed": this.underline === "reversed",
      "c-link--bold": this.isBold,
      "c-link--standalone": this.isStandalone,
      "c-link--hasVisited": this.hasVisited
    };
    return this.tag === "button" ? this.renderButton(e) : this.renderAnchor(e);
  }
};
ji.styles = se(Qo);
let H = ji;
W([
  v(),
  M(Ae, nn, R.tag)
], H.prototype, "tag");
W([
  v({ type: String }),
  M(Ae, en, R.variant)
], H.prototype, "variant");
W([
  v({ type: String }),
  M(Ae, tn, R.size)
], H.prototype, "size");
W([
  v({ type: String }),
  M(Ae, an, R.underline)
], H.prototype, "underline");
W([
  v({ type: String }),
  M(Ae, on, R.iconPlacement)
], H.prototype, "iconPlacement");
W([
  v({ type: String, reflect: !0 })
], H.prototype, "href");
W([
  v({ type: String, reflect: !0 })
], H.prototype, "target");
W([
  v({ type: String, reflect: !0 })
], H.prototype, "rel");
W([
  v({ type: Boolean })
], H.prototype, "isBold");
W([
  v({ type: Boolean })
], H.prototype, "isStandalone");
W([
  v({ type: Boolean })
], H.prototype, "hasVisited");
W([
  v({ type: String }),
  M(Ae, rn, R.type)
], H.prototype, "type");
W([
  v({ type: Object })
], H.prototype, "aria");
q(Ae, H);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ui = Symbol.for(""), ln = (n) => {
  if ((n == null ? void 0 : n.r) === Ui) return n == null ? void 0 : n._$litStatic$;
}, cn = (n) => ({ _$litStatic$: n, r: Ui }), gi = /* @__PURE__ */ new Map(), dn = (n) => (e, ...t) => {
  const r = t.length;
  let o, l;
  const d = [], u = [];
  let h, f = 0, k = !1;
  for (; f < r; ) {
    for (h = e[f]; f < r && (l = t[f], (o = ln(l)) !== void 0); ) h += o + e[++f], k = !0;
    f !== r && u.push(l), d.push(h), f++;
  }
  if (f === r && d.push(e[r]), k) {
    const g = d.join("$$lit$$");
    (e = gi.get(g)) === void 0 && (d.raw = d, gi.set(g, e = d)), t = u;
  }
  return n(e, ...t);
}, K = dn(y), ht = {
  xs: 16,
  s: 20,
  m: 24,
  l: 28,
  xl: 32,
  xxl: 40
}, Wi = Object.keys(ht), Ki = "xs", qi = 8, pt = 32;
function hn(n, e, t) {
  const r = parseInt(n, 10), o = r % t === 0;
  return r >= e && o;
}
const Gi = {
  large: (n) => hn(n, pt, qi),
  regular: (n) => Wi.includes(n)
};
function pn(n) {
  const e = Gi.large(n);
  return { isValid: e, size: e ? n : pt };
}
function vn(n) {
  const e = Gi.regular(n), t = e ? ht[n] : ht[Ki];
  return { isValid: e, size: t };
}
const un = (n, e, t, r) => {
  const o = n.endsWith("Large") || n.endsWith("-large");
  let l, d;
  if (t) {
    if ({ isValid: l, size: d } = o ? pn(t) : vn(t), !l) {
      const u = o ? `Invalid prop "size" value supplied to "${r}". The prop value should be a number equal or greater than ${pt} and multiple of ${qi}.` : `Invalid prop "size" value supplied to "${r}". The prop value should be one of the following values: ${Wi.join(", ")}.`;
      console.error(u);
    }
  } else
    d = o ? pt : ht[Ki];
  return {
    class: [n, e].filter(Boolean).join(" "),
    width: d,
    height: d
  };
};
var mn = Object.defineProperty, Xt = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && mn(e, t, o), o;
};
const Yi = class extends j {
  firstUpdated() {
    this.updateIconSize();
  }
  willUpdate(e) {
    e.has("size") && this.updateIconSize();
  }
  updateIconSize() {
    const e = un(this.class, "", this.size, this.name);
    this._svgWidth = e.width, this._svgHeight = e.height;
  }
};
Yi.styles = co`
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
let _e = Yi;
Xt([
  v({ type: String, reflect: !0 })
], _e.prototype, "size");
Xt([
  nt()
], _e.prototype, "_svgWidth");
Xt([
  nt()
], _e.prototype, "_svgHeight");
var bn = Object.defineProperty, Zi = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && bn(e, t, o), o;
};
const gn = "icon-close";
let Jt = class extends _e {
  constructor() {
    super(...arguments), this.size = "xs", this.class = "c-pieIcon c-pieIcon--close", this.name = "IconClose";
  }
  render() {
    return y`<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--close"><path d="M11.868 3.205 8 7.073 4.133 3.205l-.928.928L7.073 8l-3.868 3.868.928.927L8 8.928l3.868 3.867.927-.927L8.928 8l3.867-3.867-.927-.928Z"></path></svg>`;
  }
};
Zi([
  v({ type: String, reflect: !0 })
], Jt.prototype, "size");
Zi([
  v({ type: String, reflect: !0 })
], Jt.prototype, "class");
q(gn, Jt);
var fn = Object.defineProperty, Xi = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && fn(e, t, o), o;
};
const yn = "icon-chevron-left";
let Qt = class extends _e {
  constructor() {
    super(...arguments), this.size = "xs", this.class = "c-pieIcon c-pieIcon--chevronLeft", this.name = "IconChevronLeft";
  }
  render() {
    return y`<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chevronLeft"><path d="M10.96 2.82 5.605 8l5.399 5.197-.875.963-5.565-5.364a1.164 1.164 0 0 1 0-1.671l5.495-5.25.901.945Z"></path></svg>`;
  }
};
Xi([
  v({ type: String, reflect: !0 })
], Qt.prototype, "size");
Xi([
  v({ type: String, reflect: !0 })
], Qt.prototype, "class");
q(yn, Qt);
var wn = Object.defineProperty, Ji = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && wn(e, t, o), o;
};
const $n = "icon-chevron-right";
let ei = class extends _e {
  constructor() {
    super(...arguments), this.size = "xs", this.class = "c-pieIcon c-pieIcon--chevronRight", this.name = "IconChevronRight";
  }
  render() {
    return y`<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--chevronRight"><path d="M5.044 13.18 10.399 8 5 2.82l.875-.962 5.539 5.346a1.164 1.164 0 0 1 0 1.636l-5.469 5.285-.901-.945Z"></path></svg>`;
  }
};
Ji([
  v({ type: String, reflect: !0 })
], ei.prototype, "size");
Ji([
  v({ type: String, reflect: !0 })
], ei.prototype, "class");
q($n, ei);
function kn(n) {
  if (Array.isArray(n)) {
    for (var e = 0, t = Array(n.length); e < n.length; e++)
      t[e] = n[e];
    return t;
  } else
    return Array.from(n);
}
var ti = !1;
if (typeof window < "u") {
  var fi = {
    get passive() {
      ti = !0;
    }
  };
  window.addEventListener("testPassive", null, fi), window.removeEventListener("testPassive", null, fi);
}
var Qi = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), le = [], vt = !1, eo = -1, Je = void 0, Qe = void 0, to = function(n) {
  return le.some(function(e) {
    return !!(e.options.allowTouchMove && e.options.allowTouchMove(n));
  });
}, ii = function(n) {
  var e = n || window.event;
  return to(e.target) || e.touches.length > 1 ? !0 : (e.preventDefault && e.preventDefault(), !1);
}, xn = function(n) {
  if (Qe === void 0) {
    var e = !!n, t = window.innerWidth - document.documentElement.clientWidth;
    e && t > 0 && (Qe = document.body.style.paddingRight, document.body.style.paddingRight = t + "px");
  }
  Je === void 0 && (Je = document.body.style.overflow, document.body.style.overflow = "hidden");
}, An = function() {
  Qe !== void 0 && (document.body.style.paddingRight = Qe, Qe = void 0), Je !== void 0 && (document.body.style.overflow = Je, Je = void 0);
}, _n = function(n) {
  return n ? n.scrollHeight - n.scrollTop <= n.clientHeight : !1;
}, En = function(n, e) {
  var t = n.targetTouches[0].clientY - eo;
  return to(n.target) ? !1 : e && e.scrollTop === 0 && t > 0 || _n(e) && t < 0 ? ii(n) : (n.stopPropagation(), !0);
}, Sn = function(n, e) {
  if (!n) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (!le.some(function(r) {
    return r.targetElement === n;
  })) {
    var t = {
      targetElement: n,
      options: {}
    };
    le = [].concat(kn(le), [t]), Qi ? (n.ontouchstart = function(r) {
      r.targetTouches.length === 1 && (eo = r.targetTouches[0].clientY);
    }, n.ontouchmove = function(r) {
      r.targetTouches.length === 1 && En(r, n);
    }, vt || (document.addEventListener("touchmove", ii, ti ? { passive: !1 } : void 0), vt = !0)) : xn(e);
  }
}, Cn = function(n) {
  if (!n) {
    console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    return;
  }
  le = le.filter(function(e) {
    return e.targetElement !== n;
  }), Qi ? (n.ontouchstart = null, n.ontouchmove = null, vt && le.length === 0 && (document.removeEventListener("touchmove", ii, ti ? { passive: !1 } : void 0), vt = !1)) : le.length || An();
};
const zn = '*,*:after,*:before{box-sizing:inherit}dialog{position:absolute;left:0;right:0;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border:solid;padding:1em;background:#fff;color:#000;display:block}dialog:not([open]){display:none}dialog+.backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#0000001a}._dialog_overlay{position:fixed;top:0;right:0;bottom:0;left:0}dialog.fixed{position:fixed;top:50%;transform:translateY(-50%)}.c-modal{--modal-size-s: 450px;--modal-size-m: 600px;--modal-size-l: 1080px;--modal-border-radius: var(--dt-radius-rounded-d);--modal-font: var(--dt-font-interactive-l-family);--modal-bg-color: var(--dt-color-container-default);--modal-elevation: var(--dt-elevation-04);border-radius:var(--modal-border-radius);border:none;box-shadow:var(--modal-elevation);font-family:var(--modal-font);background-color:var(--modal-bg-color);padding:0;--modal-margin-none: var(--dt-spacing-none);--modal-margin-small: var(--dt-spacing-g);--modal-margin-large: var(--dt-spacing-j);--modal-margin-block: var(--modal-margin-small);--modal-block-size: fit-content;--modal-inline-size: 75%;--modal-max-block-size: calc(100vh - calc(var(--modal-margin-block) * 2));--modal-max-inline-size: var(--modal-size-m);block-size:var(--modal-block-size);inline-size:var(--modal-inline-size);max-block-size:var(--modal-max-block-size);max-inline-size:var(--modal-max-inline-size)}.c-modal:focus-visible{outline:none}@media (max-width: 767px){.c-modal pie-icon-button{--btn-dimension: 40px}}.c-modal[open]{display:flex;flex-direction:column}@media (min-width: 769px){.c-modal{--modal-margin-block: var(--modal-margin-large)}}.c-modal.c-modal--small{--modal-max-inline-size: var(--modal-size-s)}@media (min-width: 769px){.c-modal.c-modal--small{--modal-margin-block: var(--modal-margin-large)}}.c-modal.c-modal--large{--modal-inline-size: 75%;--modal-max-inline-size: var(--modal-size-l);--modal-margin-block: var(--modal-margin-large)}@media (max-width: 767px){.c-modal.c-modal--large,.c-modal.c-modal--medium.c-modal--fullWidthBelowMid{--modal-margin-block: var(--modal-margin-none);--modal-border-radius: var(--dt-radius-rounded-none);--modal-block-size: 100%;--modal-inline-size: 100%;--modal-max-inline-size: 100%}.c-modal.c-modal--large>.c-modal-scrollContainer,.c-modal.c-modal--medium.c-modal--fullWidthBelowMid>.c-modal-scrollContainer{block-size:100%}}.c-modal.c-modal--top{margin-block-start:var(--dt-spacing-j);max-block-size:calc(100% - var(--dt-spacing-j) * 2)}@media (max-width: 767px){.c-modal.c-modal--top.c-modal--large,.c-modal.c-modal--top.c-modal--fullWidthBelowMid.c-modal--medium{margin-block-start:var(--dt-spacing-none);max-block-size:100%}}.c-modal::backdrop{background:var(--dt-color-overlay)}@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none){.c-modal::backdrop{background:#0000008c}}.c-modal .c-modal-footer{--modal-button-spacing: var(--dt-spacing-d);--modal-footer-padding: var(--dt-spacing-d);display:flex;flex-flow:row-reverse;flex-wrap:wrap;gap:var(--modal-button-spacing);padding:var(--modal-footer-padding)}@media (min-width: 769px){.c-modal .c-modal-footer{--modal-footer-padding: var(--dt-spacing-e)}}@media (max-width: 767px){.c-modal .c-modal-footer.c-modal-footer--stackedActions{flex-direction:column}}.c-modal .c-modal-header{display:grid;grid-template-areas:"back heading close";grid-template-columns:minmax(0,max-content) minmax(0,1fr) minmax(0,max-content);align-items:start}.c-modal .c-modal-heading{--modal-header-font-size: calc(var(--dt-font-heading-m-size--narrow) * 1px);--modal-header-font-line-height: calc(var(--dt-font-heading-m-line-height--narrow) * 1px);--modal-header-font-weight: var(--dt-font-heading-m-weight);font-size:var(--modal-header-font-size);line-height:var(--modal-header-font-line-height);font-weight:var(--modal-header-font-weight);margin:0;grid-area:heading;margin-inline-start:var(--dt-spacing-d);margin-inline-end:var(--dt-spacing-d);margin-block:14px}@media (min-width: 769px){.c-modal .c-modal-heading{--modal-header-font-size: calc(var(--dt-font-heading-m-size--wide) * 1px);--modal-header-font-line-height: calc(var(--dt-font-heading-m-line-height--wide) * 1px);margin-inline-start:var(--dt-spacing-e);margin-inline-end:var(--dt-spacing-e);margin-block:20px}}.c-modal .c-modal-backBtn+.c-modal-heading{margin-inline-start:var(--dt-spacing-b)}@media (min-width: 769px){.c-modal .c-modal-backBtn+.c-modal-heading{margin-inline-start:var(--dt-spacing-c)}}.c-modal.c-modal--dismissible .c-modal-heading{margin-inline-end:var(--dt-spacing-d)}@media (min-width: 769px){.c-modal.c-modal--dismissible .c-modal-heading{margin-inline-end:var(--dt-spacing-e)}}.c-modal .c-modal-backBtn{grid-area:back;margin-block-start:var(--dt-spacing-b);margin-block-end:var(--dt-spacing-b);margin-inline-start:var(--dt-spacing-b);margin-inline-end:var(--dt-spacing-none)}@media (min-width: 769px){.c-modal .c-modal-backBtn{margin-block-start:var(--dt-spacing-c);margin-block-end:var(--dt-spacing-c);margin-inline-start:var(--dt-spacing-c);margin-inline-end:var(--dt-spacing-none)}}.c-modal .c-modal-closeBtn{grid-area:close;margin-block-start:var(--dt-spacing-b);margin-block-end:var(--dt-spacing-b);margin-inline-start:var(--dt-spacing-none);margin-inline-end:var(--dt-spacing-b)}@media (min-width: 769px){.c-modal .c-modal-closeBtn{margin-block-start:var(--dt-spacing-c);margin-block-end:var(--dt-spacing-c);margin-inline-start:var(--dt-spacing-none);margin-inline-end:var(--dt-spacing-c)}}.c-modal .c-modal-content{--modal-content-font-size: calc(var(--dt-font-size-16) * 1px);--modal-content-font-weight: var(--dt-font-weight-regular);--modal-content-line-height: calc(var(--dt-font-size-16-line-height) * 1px);--modal-content-padding-block: var(--dt-spacing-a);--modal-content-padding-inline: var(--dt-spacing-d);--modal-content-padding-block-end: var(--dt-spacing-e);--modal-content-min-block-size: var(--dt-spacing-j);position:relative;min-block-size:calc(var(--modal-content-min-block-size) + var(--modal-content-padding-block) + var(--modal-content-padding-block-end));font-size:var(--modal-content-font-size);line-height:var(--modal-content-line-height);font-weight:var(--modal-content-font-weight);padding-inline-start:var(--modal-content-padding-inline);padding-inline-end:var(--modal-content-padding-inline);padding-block-start:var(--modal-content-padding-block);padding-block-end:var(--modal-content-padding-block-end);flex-grow:1}@media (min-width: 769px){.c-modal .c-modal-content{--modal-content-padding-inline: var(--dt-spacing-e)}}.c-modal .c-modal-content:not(:last-child){padding-block-end:var(--modal-content-padding-block);min-block-size:var(--modal-content-min-block-size)}.c-modal .c-modal-content--scrollable{background:linear-gradient(to bottom,transparent,var(--dt-color-container-default) 75%) center bottom,linear-gradient(transparent,var(--dt-color-border-strong)) center bottom;background-repeat:no-repeat;background-size:100% 48px,100% 12px;background-attachment:local,scroll}.c-modal>.c-modal-scrollContainer{display:flex;flex-direction:column;overflow-y:auto;--bg-scroll-end: linear-gradient(rgba(255, 255, 255, 0), var(--dt-color-container-default) 70%) 0 100%;--bg-scroll-bottom: radial-gradient(farthest-corner at 50% 100%, rgba(0, 0, 0, .3), rgba(0, 0, 0, 0)) 0 100%;--bg-size-scroll-end: 100% 40px;--bg-size-scroll-bottom: 100% 8px;background:var(--bg-scroll-end),var(--bg-scroll-bottom);background-repeat:no-repeat;background-size:var(--bg-size-scroll-end),var(--bg-size-scroll-bottom);background-attachment:local,scroll}.c-modal>.c-modal-scrollContainer .c-modal-content{flex-shrink:0}.c-modal.c-modal--pinnedFooter .c-modal-content{overflow-y:auto}.c-modal.c-modal--loading .c-modal-content pie-spinner{position:absolute;left:50%;top:calc(50% - (var(--modal-content-padding-block-end) - var(--modal-content-padding-block)) / 2);transform:translate(-50%,-50%)}.c-modal.c-modal--loading .c-modal-content .c-modal-contentInner{display:none}.c-modal.c-modal--loading .c-modal-content:not(:last-child) pie-spinner{top:50%}@supports not (aspect-ratio: 1/1){.c-modal .c-modal-scrollContainer{background:none}}', Mn = ["h1", "h2", "h3", "h4", "h5", "h6"], Ln = ["small", "medium", "large"], Tn = ["top", "center"], yi = "pie-modal-close", Pt = "pie-modal-open", wi = "pie-modal-back", On = "pie-modal-leading-action-click", Bn = "pie-modal-supporting-action-click", V = {
  hasBackButton: !1,
  hasStackedActions: !1,
  headingLevel: "h2",
  isOpen: !1,
  isDismissible: !1,
  isFooterPinned: !0,
  isFullWidthBelowMid: !1,
  isLoading: !1,
  position: "center",
  size: "medium"
};
var In = Object.defineProperty, P = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && In(e, t, o), o;
};
const at = "pie-modal", io = class extends Pi(j) {
  constructor() {
    super(...arguments), this.headingLevel = V.headingLevel, this.hasBackButton = V.hasBackButton, this.hasStackedActions = V.hasStackedActions, this.isDismissible = V.isDismissible, this.isFooterPinned = V.isFooterPinned, this.isFullWidthBelowMid = V.isFullWidthBelowMid, this.isLoading = V.isLoading, this.isOpen = V.isOpen, this.position = V.position, this.size = V.size, this._backButtonClicked = !1, this._escKeyAbortController = null, this._preventModalKeyboardDismissal = (e) => {
      e.key === "Escape" && e.preventDefault();
    }, this._handleDialogLightDismiss = (e) => {
      if (!this.isDismissible || e.target !== e.currentTarget)
        return;
      const t = this._dialog.getBoundingClientRect(), {
        top: r = 0,
        bottom: o = 0,
        left: l = 0,
        right: d = 0
      } = t || {};
      r === 0 && o === 0 && l === 0 && d === 0 || (e.clientY < r || e.clientY > o || e.clientX < l || e.clientX > d) && (this.isOpen = !1);
    };
  }
  get _modalScrollContainer() {
    return this._dialog.querySelector(".c-modal-scrollContainer");
  }
  connectedCallback() {
    super.connectedCallback(), this._abortController = new AbortController();
    const { signal: e } = this._abortController;
    this.addEventListener("click", (t) => this._handleDialogLightDismiss(t)), this._setupEscKeyListener(), document.addEventListener(Pt, (t) => this._handleModalOpened(t), { signal: e }), document.addEventListener(yi, (t) => this._handleModalClosed(t), { signal: e }), document.addEventListener(wi, (t) => this._handleModalClosed(t), { signal: e });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._abortController.abort(), this._enableBodyScroll(), this._removeEscKeyEventListener();
  }
  async firstUpdated(e) {
    (await import("./dialog-polyfill.esm-CbjBMXAG-CfC-ZNDh.js").then((r) => r.default)).registerDialog(this._dialog);
    const { signal: t } = this._abortController;
    this._dialog.addEventListener("close", () => {
      this.isOpen = !1;
    }, { signal: t }), this._handleModalOpenStateOnFirstRender(e);
  }
  updated(e) {
    this._handleModalOpenStateChanged(e), this._handleIsDismissibleChanged(e);
  }
  _handleIsDismissibleChanged(e) {
    const t = e.get("isDismissible"), r = this.isDismissible;
    !t && r && this._removeEscKeyEventListener(), t && !r && this._setupEscKeyListener();
  }
  /**
   * Opens the dialog element and disables page scrolling
   */
  _handleModalOpened(e) {
    const { targetModal: t } = e.detail;
    if (t === this) {
      if (this._disableBodyScroll(), this._dialog.hasAttribute("open") || !this._dialog.isConnected)
        return;
      this._setupEscKeyListener(), this._dialog.showModal();
    }
  }
  /**
   * Closes the dialog element and re-enables page scrolling
   */
  _handleModalClosed(e) {
    const { targetModal: t } = e.detail;
    t === this && (this._enableBodyScroll(), this._dialog.close(), this._returnFocus(), this._removeEscKeyEventListener());
  }
  /**
   * Sets up an event listener on the Escape key to prevent dismissing the modal if isDismissible is false
   */
  _setupEscKeyListener() {
    if (!this._escKeyAbortController && !this.isDismissible) {
      this._escKeyAbortController = new AbortController();
      const { signal: e } = this._escKeyAbortController;
      document.addEventListener("keydown", (t) => this._preventModalKeyboardDismissal(t), { signal: e });
    }
  }
  /**
   * Removes any event listeners set up that are listening to keyboard events and nulls the existing AbortController.
   */
  _removeEscKeyEventListener() {
    var e;
    (e = this._escKeyAbortController) == null || e.abort(), this._escKeyAbortController = null;
  }
  // Handles the value of the isOpen property on first render of the component
  _handleModalOpenStateOnFirstRender(e) {
    e.get("isOpen") === void 0 && this.isOpen && X(this, Pt, { targetModal: this });
  }
  // Handles changes to the modal isOpen property by dispatching any appropriate events
  _handleModalOpenStateChanged(e) {
    const t = e.get("isOpen");
    t !== void 0 && (t ? this._backButtonClicked ? (this._backButtonClicked = !1, X(this, wi, { targetModal: this })) : X(this, yi, { targetModal: this }) : X(this, Pt, { targetModal: this }));
  }
  _handleActionClick(e) {
    e === "leading" ? (this._dialog.close("leading"), X(this, On, { targetModal: this })) : e === "supporting" && (this._dialog.close("supporting"), X(this, Bn, { targetModal: this }));
  }
  /**
   * Return focus to the specified element, providing the selector is valid
   * and the chosen element can be found.
   */
  _returnFocus() {
    var e, t;
    const r = (e = this.returnFocusAfterCloseSelector) == null ? void 0 : e.trim();
    r && ((t = document.querySelector(r)) == null || t.focus());
  }
  /**
   * Enables body scroll by unlocking the scroll container.
   */
  _enableBodyScroll() {
    this._modalScrollContainer && Cn(this._modalScrollContainer);
  }
  /**
   * Disables body scroll by locking the scroll container.
   */
  _disableBodyScroll() {
    this._modalScrollContainer && ("scrollTo" in window && window.scrollTo(0, 0), Sn(this._modalScrollContainer));
  }
  /**
   * Template for the close button element. Called within the
   * main render function.
   *
   * @private
   */
  renderCloseButton() {
    var e;
    return this.isDismissible ? K`
            <pie-icon-button
                @click="${() => {
      this.isOpen = !1;
    }}"
                variant="ghost-secondary"
                class="c-modal-closeBtn"
                aria-label="${((e = this.aria) == null ? void 0 : e.close) || w}"
                data-test-id="modal-close-button">
                <icon-close></icon-close>
            </pie-icon-button>` : w;
  }
  /**
   * Template for the back button element. Called within the
   * main render function.
   *
   * @private
   */
  renderBackButton() {
    var e;
    return this.hasBackButton ? K`
            <pie-icon-button
                @click="${() => {
      this._backButtonClicked = !0, this.isOpen = !1;
    }}"
                variant="ghost-secondary"
                class="c-modal-backBtn"
                aria-label="${I((e = this.aria) == null ? void 0 : e.back)}"
                data-test-id="modal-back-button">
                ${this.isRTL ? K`<icon-chevron-right></icon-chevron-right>` : K`<icon-chevron-left></icon-chevron-left>`}
            </pie-icon-button>
        ` : w;
  }
  /**
   * Renders the "leadingAction" button if the text is provided.
   *
   * If `leadingAction.text` is not provided, the button is not rendered.
   * If `leadingAction.variant` is not provided, the default value of "primary" is used.
   * The (optional) aria-label is read from `leadingAction.ariaLabel`.
   *
   * @private
   */
  renderLeadingAction() {
    const { ariaLabel: e, text: t, variant: r = "primary" } = this.leadingAction || {};
    return t ? K`
            <pie-button
                variant="${r}"
                aria-label="${I(e)}"
                type="submit"
                ?isFullWidth="${this.hasStackedActions}"
                @click="${() => this._handleActionClick("leading")}"
                data-test-id="modal-leading-action">
                ${t}
            </pie-button>
        ` : w;
  }
  /**
   * Renders the "supportingAction" button if the text is provided.
   * You cannot have a supporting action without a leading action.
   *
   * If either `supportingAction.text` or `leadingAction.text` are not provided, the button is not rendered.
   * If `supportingAction.variant` is not provided, the default value of "ghost" is used.
   * The (optional) aria-label is read from `supportingAction.ariaLabel`.
   *
   * @private
   */
  renderSupportingAction() {
    var e;
    const { ariaLabel: t, text: r, variant: o = "ghost" } = this.supportingAction || {};
    return !r || !((e = this.leadingAction) != null && e.text) ? w : K`
            <pie-button
                variant="${o}"
                aria-label="${I(t)}"
                type="reset"
                ?isFullWidth="${this.hasStackedActions}"
                @click="${() => this._handleActionClick("supporting")}"
                data-test-id="modal-supporting-action">
                ${r}
            </pie-button>
        `;
  }
  /**
   * Renders the modal footer if a leading action is provided.
   * Additionally renders the supporting action if it is provided.
   *
   * @private
   */
  renderModalFooter() {
    var e, t;
    if (!((e = this.leadingAction) != null && e.text))
      return (t = this.supportingAction) != null && t.text && console.warn("You cannot have a supporting action without a leading action. If you only need one button then use a leading action instead."), w;
    const r = {
      "c-modal-footer": !0,
      "c-modal-footer--stackedActions": this.hasStackedActions
    };
    return K`
            <footer class="${J(r)}" data-test-id="pie-modal-footer">
                ${this.renderLeadingAction()}
                ${this.renderSupportingAction()}
            </footer>`;
  }
  /**
   * Renders the loading spinner if `isLoading` is true.
   * @private
   */
  renderLoadingSpinner() {
    return this.isLoading ? K`<pie-spinner size="xlarge" variant="secondary"></pie-spinner>` : w;
  }
  /**
   * Renders the modal inner content and footer of the modal.
   * @private
   */
  renderModalContentAndFooter() {
    return K`
            <article class="c-modal-scrollContainer c-modal-content c-modal-content--scrollable">
                <div class="c-modal-contentInner" data-test-id="modal-content-inner">
                    <slot></slot>
                </div>
                ${this.renderLoadingSpinner()}
            </article>
            ${this.renderModalFooter()}`;
  }
  /**
   * Renders the modal heading content in the correct heading tag
   * @private
   */
  renderHeading() {
    const { heading: e, headingLevel: t } = this, r = cn(t);
    return K`
            <${r} class="c-modal-heading">
                ${e}
            </${r}>
        `;
  }
  render() {
    const {
      aria: e,
      isDismissible: t,
      isFooterPinned: r,
      isFullWidthBelowMid: o,
      isLoading: l,
      position: d,
      size: u
    } = this, h = l && (e == null ? void 0 : e.loading) || void 0, f = {
      "c-modal": !0,
      [`c-modal--${u}`]: !0,
      "c-modal--top": d === "top",
      "c-modal--dismissible": t,
      "c-modal--loading": l,
      "c-modal--pinnedFooter": r,
      "c-modal--fullWidthBelowMid": o
    };
    return K`
        <dialog
            id="dialog"
            class="${J(f)}"
            aria-busy="${l ? "true" : "false"}"
            aria-label="${I(h)}"
            data-test-id="pie-modal">
            <header class="c-modal-header" data-test-id="modal-header">
                ${this.renderBackButton()}
                ${this.renderHeading()}
                ${this.renderCloseButton()}
            </header>
            ${// We need to wrap the remaining content in a shared scrollable container if the footer is not pinned
    r ? this.renderModalContentAndFooter() : K`
                    <div class="c-modal-scrollContainer">
                        ${this.renderModalContentAndFooter()}
                    </div>`}
        </dialog>`;
  }
};
io.styles = se(zn);
let N = io;
P([
  v({ type: Object })
], N.prototype, "aria");
P([
  v({ type: String }),
  To(at)
], N.prototype, "heading");
P([
  v(),
  M(at, Mn, V.headingLevel)
], N.prototype, "headingLevel");
P([
  v({ type: Boolean })
], N.prototype, "hasBackButton");
P([
  v({ type: Boolean })
], N.prototype, "hasStackedActions");
P([
  v({ type: Boolean, reflect: !0 })
], N.prototype, "isDismissible");
P([
  v({ type: Boolean })
], N.prototype, "isFooterPinned");
P([
  v({ type: Boolean })
], N.prototype, "isFullWidthBelowMid");
P([
  v({ type: Boolean, reflect: !0 })
], N.prototype, "isLoading");
P([
  v({ type: Boolean })
], N.prototype, "isOpen");
P([
  v({ type: Object })
], N.prototype, "leadingAction");
P([
  v(),
  M(at, Tn, V.position)
], N.prototype, "position");
P([
  v()
], N.prototype, "returnFocusAfterCloseSelector");
P([
  v(),
  M(at, Ln, V.size)
], N.prototype, "size");
P([
  v({ type: Object })
], N.prototype, "supportingAction");
P([
  Kt("dialog")
], N.prototype, "_dialog");
q(at, N);
var Nn = Object.defineProperty, oo = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && Nn(e, t, o), o;
};
const Pn = "icon-check";
class oi extends _e {
  constructor() {
    super(...arguments), this.size = "xs", this.class = "c-pieIcon c-pieIcon--check", this.name = "IconCheck";
  }
  render() {
    return y`<svg width="${this._svgWidth}" height="${this._svgHeight}" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16" class="c-pieIcon c-pieIcon--check"><path d="M5.865 12.489a1.217 1.217 0 0 1-.875-.385L1.875 8.656l.98-.875 3.028 3.369 7.253-7.822.963.875-7.35 7.875a1.216 1.216 0 0 1-.875.385l-.009.026Z"></path></svg>`;
  }
}
oo([
  v({ type: String, reflect: !0 })
], oi.prototype, "size");
oo([
  v({ type: String, reflect: !0 })
], oi.prototype, "class");
q(Pn, oi);
(function() {
  (function(n) {
    const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), D = {
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
    }, Ee = (a, i) => {
      for (let s in D) {
        i[s] = null;
        let c = null;
        const p = D[s];
        Object.defineProperty(i, s, {
          get() {
            return c;
          },
          set(m) {
            c = m, a.isConnected ? a.setAttribute(p, m) : k.set(a, i);
          }
        });
      }
    };
    function Te(a) {
      const i = o.get(a), { form: s } = i;
      Re(a, s, i), Pe(a, i.labels);
    }
    const Oe = (a, i = !1) => {
      const s = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
        acceptNode(m) {
          return o.has(m) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      let c = s.nextNode();
      const p = !i || a.disabled;
      for (; c; )
        c.formDisabledCallback && p && ve(c, a.disabled), c = s.nextNode();
    }, Be = { attributes: !0, attributeFilter: ["disabled", "name"] }, te = ne() ? new MutationObserver((a) => {
      for (const i of a) {
        const s = i.target;
        if (i.attributeName === "disabled" && (s.constructor.formAssociated ? ve(s, s.hasAttribute("disabled")) : s.localName === "fieldset" && Oe(s)), i.attributeName === "name" && s.constructor.formAssociated) {
          const c = o.get(s), p = f.get(s);
          c.setFormValue(p);
        }
      }
    }) : {};
    function he(a) {
      a.forEach((i) => {
        const { addedNodes: s, removedNodes: c } = i, p = Array.from(s), m = Array.from(c);
        p.forEach((b) => {
          var E;
          if (o.has(b) && b.constructor.formAssociated && Te(b), k.has(b)) {
            const x = k.get(b);
            Object.keys(D).filter((S) => x[S] !== null).forEach((S) => {
              b.setAttribute(D[S], x[S]);
            }), k.delete(b);
          }
          if (O.has(b)) {
            const x = O.get(b);
            b.setAttribute("internals-valid", x.validity.valid.toString()), b.setAttribute("internals-invalid", (!x.validity.valid).toString()), b.setAttribute("aria-invalid", (!x.validity.valid).toString()), O.delete(b);
          }
          if (b.localName === "form") {
            const x = h.get(b), S = document.createTreeWalker(b, NodeFilter.SHOW_ELEMENT, {
              acceptNode(ge) {
                return o.has(ge) && ge.constructor.formAssociated && !(x && x.has(ge)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
              }
            });
            let Y = S.nextNode();
            for (; Y; )
              Te(Y), Y = S.nextNode();
          }
          b.localName === "fieldset" && ((E = te.observe) === null || E === void 0 || E.call(te, b, Be), Oe(b, !0));
        }), m.forEach((b) => {
          const E = o.get(b);
          E && r.get(E) && Ie(E), u.has(b) && u.get(b).disconnect();
        });
      });
    }
    function gt(a) {
      a.forEach((i) => {
        const { removedNodes: s } = i;
        s.forEach((c) => {
          const p = $.get(i.target);
          o.has(c) && He(c), p.disconnect();
        });
      });
    }
    const ft = (a) => {
      var i, s;
      const c = new MutationObserver(gt);
      !((i = window == null ? void 0 : window.ShadyDOM) === null || i === void 0) && i.inUse && a.mode && a.host && (a = a.host), (s = c.observe) === null || s === void 0 || s.call(c, a, { childList: !0 }), $.set(a, c);
    };
    ne() && new MutationObserver(he);
    const pe = {
      childList: !0,
      subtree: !0
    }, ve = (a, i) => {
      a.toggleAttribute("internals-disabled", i), i ? a.setAttribute("aria-disabled", "true") : a.removeAttribute("aria-disabled"), a.formDisabledCallback && a.formDisabledCallback.apply(a, [i]);
    }, Ie = (a) => {
      r.get(a).forEach((i) => {
        i.remove();
      }), r.set(a, []);
    }, Ne = (a, i) => {
      const s = document.createElement("input");
      return s.type = "hidden", s.name = a.getAttribute("name"), a.after(s), r.get(i).push(s), s;
    }, yt = (a, i) => {
      var s;
      r.set(i, []), (s = te.observe) === null || s === void 0 || s.call(te, a, Be);
    }, Pe = (a, i) => {
      if (i.length) {
        Array.from(i).forEach((c) => c.addEventListener("click", a.click.bind(a)));
        let s = i[0].id;
        i[0].id || (s = `${i[0].htmlFor}_Label`, i[0].id = s), a.setAttribute("aria-labelledby", s);
      }
    }, ie = (a) => {
      const i = Array.from(a.elements).filter((m) => !m.tagName.includes("-") && m.validity).map((m) => m.validity.valid), s = h.get(a) || [], c = Array.from(s).filter((m) => m.isConnected).map((m) => o.get(m).validity.valid), p = [...i, ...c].includes(!1);
      a.toggleAttribute("internals-invalid", p), a.toggleAttribute("internals-valid", !p);
    }, wt = (a) => {
      ie(oe(a.target));
    }, $t = (a) => {
      ie(oe(a.target));
    }, kt = (a) => {
      const i = ["button[type=submit]", "input[type=submit]", "button:not([type])"].map((s) => `${s}:not([disabled])`).map((s) => `${s}:not([form])${a.id ? `,${s}[form='${a.id}']` : ""}`).join(",");
      a.addEventListener("click", (s) => {
        if (s.target.closest(i)) {
          const c = h.get(a);
          if (a.noValidate)
            return;
          c.size && Array.from(c).reverse().map((p) => o.get(p).reportValidity()).includes(!1) && s.preventDefault();
        }
      });
    }, xt = (a) => {
      const i = h.get(a.target);
      i && i.size && i.forEach((s) => {
        s.constructor.formAssociated && s.formResetCallback && s.formResetCallback.apply(s);
      });
    }, Re = (a, i, s) => {
      if (i) {
        const c = h.get(i);
        if (c)
          c.add(a);
        else {
          const p = /* @__PURE__ */ new Set();
          p.add(a), h.set(i, p), kt(i), i.addEventListener("reset", xt), i.addEventListener("input", wt), i.addEventListener("change", $t);
        }
        d.set(i, { ref: a, internals: s }), a.constructor.formAssociated && a.formAssociatedCallback && setTimeout(() => {
          a.formAssociatedCallback.apply(a, [i]);
        }, 0), ie(i);
      }
    }, oe = (a) => {
      let i = a.parentNode;
      return i && i.tagName !== "FORM" && (i = oe(i)), i;
    }, B = (a, i, s = DOMException) => {
      if (!a.constructor.formAssociated)
        throw new s(i);
    }, Fe = (a, i, s) => {
      const c = h.get(a);
      return c && c.size && c.forEach((p) => {
        o.get(p)[s]() || (i = !1);
      }), i;
    }, He = (a) => {
      if (a.constructor.formAssociated) {
        const i = o.get(a), { labels: s, form: c } = i;
        Pe(a, s), Re(a, c, i);
      }
    };
    function ne() {
      return typeof MutationObserver < "u";
    }
    class At {
      constructor() {
        this.badInput = !1, this.customError = !1, this.patternMismatch = !1, this.rangeOverflow = !1, this.rangeUnderflow = !1, this.stepMismatch = !1, this.tooLong = !1, this.tooShort = !1, this.typeMismatch = !1, this.valid = !0, this.valueMissing = !1, Object.seal(this);
      }
    }
    const _t = (a) => (a.badInput = !1, a.customError = !1, a.patternMismatch = !1, a.rangeOverflow = !1, a.rangeUnderflow = !1, a.stepMismatch = !1, a.tooLong = !1, a.tooShort = !1, a.typeMismatch = !1, a.valid = !0, a.valueMissing = !1, a), Et = (a, i, s) => (a.valid = St(i), Object.keys(i).forEach((c) => a[c] = i[c]), s && ie(s), a), St = (a) => {
      let i = !0;
      for (let s in a)
        s !== "valid" && a[s] !== !1 && (i = !1);
      return i;
    }, ue = /* @__PURE__ */ new WeakMap();
    function De(a, i) {
      a.toggleAttribute(i, !0), a.part && a.part.add(i);
    }
    class me extends Set {
      static get isPolyfilled() {
        return !0;
      }
      constructor(i) {
        if (super(), !i || !i.tagName || i.tagName.indexOf("-") === -1)
          throw new TypeError("Illegal constructor");
        ue.set(this, i);
      }
      add(i) {
        if (!/^--/.test(i) || typeof i != "string")
          throw new DOMException(`Failed to execute 'add' on 'CustomStateSet': The specified value ${i} must start with '--'.`);
        const s = super.add(i), c = ue.get(this), p = `state${i}`;
        return c.isConnected ? De(c, p) : setTimeout(() => {
          De(c, p);
        }), s;
      }
      clear() {
        for (let [i] of this.entries())
          this.delete(i);
        super.clear();
      }
      delete(i) {
        const s = super.delete(i), c = ue.get(this);
        return c.isConnected ? (c.toggleAttribute(`state${i}`, !1), c.part && c.part.remove(`state${i}`)) : setTimeout(() => {
          c.toggleAttribute(`state${i}`, !1), c.part && c.part.remove(`state${i}`);
        }), s;
      }
    }
    function Ve(a, i, s, c) {
      if (s === "a" && !c) throw new TypeError("Private accessor was defined without a getter");
      if (typeof i == "function" ? a !== i || !c : !i.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return s === "m" ? c : s === "a" ? c.call(a) : c ? c.value : i.get(a);
    }
    function Ct(a, i, s, c, p) {
      if (typeof i == "function" ? a !== i || !p : !i.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return i.set(a, s), s;
    }
    var G;
    class zt {
      constructor(i) {
        G.set(this, void 0), Ct(this, G, i);
        for (let s = 0; s < i.length; s++) {
          let c = i[s];
          this[s] = c, c.hasAttribute("name") && (this[c.getAttribute("name")] = c);
        }
        Object.freeze(this);
      }
      get length() {
        return Ve(this, G, "f").length;
      }
      [(G = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
        return Ve(this, G, "f")[Symbol.iterator]();
      }
      item(i) {
        return this[i] == null ? null : this[i];
      }
      namedItem(i) {
        return this[i] == null ? null : this[i];
      }
    }
    function Mt() {
      const a = HTMLFormElement.prototype.checkValidity;
      HTMLFormElement.prototype.checkValidity = s;
      const i = HTMLFormElement.prototype.reportValidity;
      HTMLFormElement.prototype.reportValidity = c;
      function s(...m) {
        let b = a.apply(this, m);
        return Fe(this, b, "checkValidity");
      }
      function c(...m) {
        let b = i.apply(this, m);
        return Fe(this, b, "reportValidity");
      }
      const { get: p } = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "elements");
      Object.defineProperty(HTMLFormElement.prototype, "elements", {
        get(...m) {
          const b = p.call(this, ...m), E = Array.from(h.get(this) || []);
          if (E.length === 0)
            return b;
          const x = Array.from(b).concat(E).sort((S, Y) => S.compareDocumentPosition ? S.compareDocumentPosition(Y) & 2 ? 1 : -1 : 0);
          return new zt(x);
        }
      });
    }
    class je {
      static get isPolyfilled() {
        return !0;
      }
      constructor(i) {
        if (!i || !i.tagName || i.tagName.indexOf("-") === -1)
          throw new TypeError("Illegal constructor");
        const s = i.getRootNode(), c = new At();
        this.states = new me(i), e.set(this, i), t.set(this, c), o.set(i, this), Ee(i, this), yt(i, this), Object.seal(this), s instanceof DocumentFragment && ft(s);
      }
      checkValidity() {
        const i = e.get(this);
        if (B(i, "Failed to execute 'checkValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !this.willValidate)
          return !0;
        const s = t.get(this);
        if (!s.valid) {
          const c = new Event("invalid", {
            bubbles: !1,
            cancelable: !0,
            composed: !1
          });
          i.dispatchEvent(c);
        }
        return s.valid;
      }
      get form() {
        const i = e.get(this);
        B(i, "Failed to read the 'form' property from 'ElementInternals': The target element is not a form-associated custom element.");
        let s;
        return i.constructor.formAssociated === !0 && (s = oe(i)), s;
      }
      get labels() {
        const i = e.get(this);
        B(i, "Failed to read the 'labels' property from 'ElementInternals': The target element is not a form-associated custom element.");
        const s = i.getAttribute("id"), c = i.getRootNode();
        return c && s ? c.querySelectorAll(`[for="${s}"]`) : [];
      }
      reportValidity() {
        const i = e.get(this);
        if (B(i, "Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !this.willValidate)
          return !0;
        const s = this.checkValidity(), c = A.get(this);
        if (c && !i.constructor.formAssociated)
          throw new DOMException("Failed to execute 'reportValidity' on 'ElementInternals': The target element is not a form-associated custom element.");
        return !s && c && (i.focus(), c.focus()), s;
      }
      setFormValue(i) {
        const s = e.get(this);
        if (B(s, "Failed to execute 'setFormValue' on 'ElementInternals': The target element is not a form-associated custom element."), Ie(this), i != null && !(i instanceof FormData)) {
          if (s.getAttribute("name")) {
            const c = Ne(s, this);
            c.value = i;
          }
        } else i != null && i instanceof FormData && Array.from(i).reverse().forEach(([c, p]) => {
          if (typeof p == "string") {
            const m = Ne(s, this);
            m.name = c, m.value = p;
          }
        });
        f.set(s, i);
      }
      setValidity(i, s, c) {
        const p = e.get(this);
        if (B(p, "Failed to execute 'setValidity' on 'ElementInternals': The target element is not a form-associated custom element."), !i)
          throw new TypeError("Failed to execute 'setValidity' on 'ElementInternals': 1 argument required, but only 0 present.");
        A.set(this, c);
        const m = t.get(this), b = {};
        for (const S in i)
          b[S] = i[S];
        Object.keys(b).length === 0 && _t(m);
        const E = Object.assign(Object.assign({}, m), b);
        delete E.valid;
        const { valid: x } = Et(m, E, this.form);
        if (!x && !s)
          throw new DOMException("Failed to execute 'setValidity' on 'ElementInternals': The second argument should not be empty if one or more flags in the first argument are true.");
        l.set(this, x ? "" : s), p.isConnected ? (p.toggleAttribute("internals-invalid", !x), p.toggleAttribute("internals-valid", x), p.setAttribute("aria-invalid", `${!x}`)) : O.set(p, this);
      }
      get shadowRoot() {
        const i = e.get(this);
        return g.get(i) || null;
      }
      get validationMessage() {
        const i = e.get(this);
        return B(i, "Failed to read the 'validationMessage' property from 'ElementInternals': The target element is not a form-associated custom element."), l.get(this);
      }
      get validity() {
        const i = e.get(this);
        return B(i, "Failed to read the 'validity' property from 'ElementInternals': The target element is not a form-associated custom element."), t.get(this);
      }
      get willValidate() {
        const i = e.get(this);
        return B(i, "Failed to read the 'willValidate' property from 'ElementInternals': The target element is not a form-associated custom element."), !(i.disabled || i.hasAttribute("disabled") || i.hasAttribute("readonly"));
      }
    }
    function Lt() {
      if (typeof window > "u" || !window.ElementInternals || !HTMLElement.prototype.attachInternals)
        return !1;
      class a extends HTMLElement {
        constructor() {
          super(), this.internals = this.attachInternals();
        }
      }
      const i = `element-internals-feature-detection-${Math.random().toString(36).replace(/[^a-z]+/g, "")}`;
      customElements.define(i, a);
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
      ].every((c) => c in s.internals);
    }
    let Ue = !1, We = !1;
    function be(a) {
      We || (We = !0, window.CustomStateSet = me, a && (HTMLElement.prototype.attachInternals = function(...i) {
        const s = a.call(this, i);
        return s.states = new me(this), s;
      }));
    }
    function Ke(a = !0) {
      if (!Ue) {
        if (Ue = !0, typeof window < "u" && (window.ElementInternals = je), typeof CustomElementRegistry < "u") {
          const i = CustomElementRegistry.prototype.define;
          CustomElementRegistry.prototype.define = function(s, c, p) {
            if (c.formAssociated) {
              const m = c.prototype.connectedCallback;
              c.prototype.connectedCallback = function() {
                C.has(this) || (C.set(this, !0), this.hasAttribute("disabled") && ve(this, !0)), m != null && m.apply(this), He(this);
              };
            }
            i.call(this, s, c, p);
          };
        }
        if (typeof HTMLElement < "u" && (HTMLElement.prototype.attachInternals = function() {
          if (this.tagName) {
            if (this.tagName.indexOf("-") === -1)
              throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': Unable to attach ElementInternals to non-custom elements.");
          } else return {};
          if (o.has(this))
            throw new DOMException("DOMException: Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");
          return new je(this);
        }), typeof Element < "u") {
          let i = function(...c) {
            const p = s.apply(this, c);
            if (g.set(this, p), ne()) {
              const m = new MutationObserver(he);
              window.ShadyDOM ? m.observe(this, pe) : m.observe(p, pe), u.set(this, m);
            }
            return p;
          };
          const s = Element.prototype.attachShadow;
          Element.prototype.attachShadow = i;
        }
        ne() && typeof document < "u" && new MutationObserver(he).observe(document.documentElement, pe), typeof HTMLFormElement < "u" && Mt(), (a || typeof window < "u" && !window.CustomStateSet) && be();
      }
    }
    return customElements.polyfillWrapFlushCallback || (Lt() ? typeof window < "u" && !window.CustomStateSet && be(HTMLElement.prototype.attachInternals) : Ke(!1)), n.forceCustomStateSetPolyfill = be, n.forceElementInternalsPolyfill = Ke, Object.defineProperty(n, "__esModule", { value: !0 }), n;
  })({});
})();
const Rn = "*,*:after,*:before{box-sizing:inherit}*,*:before,*:after{cursor:inherit}.c-switch-wrapper{display:inline-flex;align-items:center;gap:var(--dt-spacing-b);font-family:var(--dt-font-body-l-family);cursor:pointer}.c-switch-wrapper[disabled]{cursor:not-allowed}.c-switch{--switch-bg-color: var(--dt-color-interactive-form);--switch-bg-color--checked: var(--dt-color-interactive-brand);--switch-bg-color--disabled: var(--dt-color-disabled-01);--switch-width: 48px;--switch-height: 24px;--switch-control-size: 20px;--switch-padding: 2px;--switch-radius: var(--dt-radius-rounded-e);--switch-translation: calc(var(--switch-width) - var(--switch-control-size) - 2 * var(--switch-padding));position:relative;display:flex;width:var(--switch-width);height:var(--switch-height);flex-shrink:0;padding:var(--switch-padding);border-radius:var(--switch-radius);background-color:var(--switch-bg-color)}@media (prefers-reduced-motion: no-preference){.c-switch{transition:background-color .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch:hover{background-color:hsl(var(--dt-color-interactive-form-h),var(--dt-color-interactive-form-s),calc(var(--dt-color-interactive-form-l) - var(--dt-color-hover-01)))}.c-switch:focus,.c-switch:focus-within{box-shadow:0 0 0 2px var(--dt-color-focus-inner),0 0 0 4px var(--dt-color-focus-outer);outline:none}.c-switch:active{background-color:hsl(var(--dt-color-interactive-form-h),var(--dt-color-interactive-form-s),calc(var(--dt-color-interactive-form-l) - var(--dt-color-active-01)))}.c-switch[checked]{background-color:var(--switch-bg-color--checked)}@media (prefers-reduced-motion: no-preference){.c-switch[checked]{transition:background-color .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch[checked]:hover{background-color:hsl(var(--dt-color-interactive-brand-h),var(--dt-color-interactive-brand-s),calc(var(--dt-color-interactive-brand-l) - var(--dt-color-hover-01)))}.c-switch[checked]:focus,.c-switch[checked]:focus-within{background-color:var(--switch-bg-color--checked)}.c-switch[checked]:active{background-color:hsl(var(--dt-color-interactive-brand-h),var(--dt-color-interactive-brand-s),calc(var(--dt-color-interactive-brand-l) - var(--dt-color-active-01)))}[disabled] .c-switch{background-color:var(--switch-bg-color--disabled);pointer-events:none}.c-switch-input{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0;left:50%;transform:translate(-50%) translateY(-50%);bottom:0}.c-switch-input:disabled{background-color:transparent}.c-switch-control{position:absolute;left:2px;width:var(--switch-control-size);height:var(--switch-control-size);border-radius:var(--switch-radius);background-color:var(--dt-color-interactive-light);padding:var(--switch-padding)}@media (prefers-reduced-motion: no-preference){.c-switch-control{transition:transform .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch-wrapper--rtl .c-switch-control{position:absolute;left:initial;right:2px}.c-switch-input:checked+.c-switch-control{transform:translate(var(--switch-translation))}@media (prefers-reduced-motion: no-preference){.c-switch-input:checked+.c-switch-control{transition:transform .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch-input:checked+.c-switch-control .c-pieIcon--check{color:var(--switch-bg-color--checked)}@media (prefers-reduced-motion: no-preference){.c-switch-input:checked+.c-switch-control .c-pieIcon--check{transition:color .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch-input:disabled~.c-switch-control{color:var(--switch-bg-color--disabled)}.c-switch-input:disabled~.c-switch-control .c-pieIcon--check{color:var(--switch-bg-color--disabled)}@media (prefers-reduced-motion: no-preference){.c-switch-input:disabled~.c-switch-control .c-pieIcon--check{transition:color .15s cubic-bezier(.4,0,.9,1) 0s}}.c-switch-description{position:absolute;display:block;height:1px;width:1px;overflow:hidden;padding:1px;white-space:nowrap}.c-switch-wrapper--rtl .c-switch-input:checked+.c-switch-control{transform:translate(calc(-1 * var(--switch-translation)))}@media (prefers-reduced-motion: no-preference){.c-switch-wrapper--rtl .c-switch-input:checked+.c-switch-control{transition:transform .15s cubic-bezier(.4,0,.9,1) 0s}}", Fn = ["leading", "trailing"], Ce = {
  checked: !1,
  disabled: !1,
  labelPlacement: "leading",
  required: !1,
  value: "on"
};
var Hn = Object.defineProperty, Q = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && Hn(e, t, o), o;
};
const no = "pie-switch", ro = class extends Ri(Pi(j)) {
  constructor() {
    super(...arguments), this.labelPlacement = Ce.labelPlacement, this.checked = Ce.checked, this.required = Ce.required, this.value = Ce.value, this.disabled = Ce.disabled;
  }
  firstUpdated() {
    var e;
    this.handleFormAssociation(), (e = this.input) == null || e.addEventListener("invalid", (t) => {
      this.dispatchEvent(new Event("invalid", t));
    });
  }
  updated() {
    this.handleFormAssociation();
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
    const r = Oo(e);
    this.dispatchEvent(r), this.handleFormAssociation();
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
   * If a label is provided, renders it if `labelPlacement` matches the given position.
   * If no label is provided, or `labelPlacement` does not match the given position, nothing is rendered.
   *
   * @private
   */
  renderSwitchLabel(e) {
    const { label: t, labelPlacement: r } = this;
    return !t || r !== e ? w : y`
            <span data-test-id="switch-label-${r}">
                ${t}
            </span>`;
  }
  renderAriaDescription() {
    var e;
    return (e = this.aria) != null && e.describedBy ? y`
            <div
                id="switch-description"
                data-test-id="switch-description"
                class="c-switch-description">
                ${this.aria.describedBy}
            </div>` : w;
  }
  render() {
    const {
      aria: e,
      checked: t,
      disabled: r,
      isRTL: o,
      required: l
    } = this;
    return y`
            <label
                class="${J({
      "c-switch-wrapper": !0,
      "c-switch-wrapper--rtl": o
    })}"
                ?disabled=${r}>
                ${this.renderSwitchLabel("leading")}
                <div
                    data-test-id="switch-component"
                    class="c-switch"
                    ?checked=${t}>
                    <input
                        data-test-id="switch-input"
                        role="switch"
                        type="checkbox"
                        class="c-switch-input"
                        .required=${l}
                        .checked="${t}"
                        .disabled="${r}"
                        @change="${this.handleChange}"
                        aria-label="${I(e == null ? void 0 : e.label)}"
                        aria-describedby="${e != null && e.describedBy ? "switch-description" : w}">
                    <div class="c-switch-control">
                        ${t ? y`<icon-check></icon-check>` : w}
                    </div>
                </div>
                ${this.renderSwitchLabel("trailing")}
                ${this.renderAriaDescription()}
            </label>`;
  }
};
ro.styles = se(Rn);
let Z = ro;
Q([
  v({ type: String })
], Z.prototype, "label");
Q([
  v({ type: String }),
  M(no, Fn, Ce.labelPlacement)
], Z.prototype, "labelPlacement");
Q([
  v({ type: Object })
], Z.prototype, "aria");
Q([
  v({ type: Boolean, reflect: !0 })
], Z.prototype, "checked");
Q([
  v({ type: Boolean, reflect: !0 })
], Z.prototype, "required");
Q([
  v({ type: String })
], Z.prototype, "value");
Q([
  v({ type: String })
], Z.prototype, "name");
Q([
  v({ type: Boolean, reflect: !0 })
], Z.prototype, "disabled");
Q([
  Kt('input[type="checkbox"]')
], Z.prototype, "input");
Q([
  Kt("label")
], Z.prototype, "focusTarget");
q(no, Z);
const Ft = {
  banner: {
    title: "Cookies",
    description: "We use our own and third party cookies and other tech to enhance and personalise your user experience, optimize analytics, and show ads with third parties (read our <linkStatement>Statement</linkStatement>). Necessary cookies are always set. Click <linkNecessaryOnly>Necessary only</linkNecessaryOnly> to continue without accepting more. Click <linkManagePreferences>Manage preferences</linkManagePreferences> to share your preferences or <linkAcceptAll>Accept all</linkAcceptAll>.",
    cta: {
      managePreferences: "Manage preferences",
      necessaryOnly: "Necessary only",
      acceptAll: "Accept all"
    }
  },
  preferencesManagement: {
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
  }
}, Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" })), Vn = "*,*:after,*:before{box-sizing:inherit}*{margin:0}.c-cookieBanner{--cb-font-family: var(--dt-font-interactive-l-family);--cb-font-size: calc(var(--dt-font-body-l-size) * 1px);--cb-line-height: calc(var(--dt-font-body-l-line-height) * 1px);--cb-font-weight: var(--dt-font-body-l-weight);--cb-padding-inline: var(--dt-spacing-d);--cb-padding-block: var(--dt-spacing-d);--cb-offset: 0;color-scheme:only dark;background-color:var(--dt-color-background-dark);color:var(--dt-color-content-inverse);font-family:var(--cb-font-family);font-size:var(--cb-font-size);line-height:var(--cb-line-height);font-weight:var(--cb-font-weight);padding-block-start:var(--cb-padding-block);padding-block-end:var(--cb-padding-block);max-height:432px;position:fixed;bottom:var(--cb-offset);left:var(--cb-offset);right:var(--cb-offset);border-top-left-radius:var(--dt-radius-rounded-c);border-top-right-radius:var(--dt-radius-rounded-c);z-index:var(--dt-z-index-cookie-banner)}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner{--cb-padding-inline: var(--dt-spacing-f);--cb-offset: var(--dt-spacing-d);max-height:90%;border-bottom-left-radius:var(--dt-radius-rounded-c);border-bottom-right-radius:var(--dt-radius-rounded-c)}}.c-cookieBanner[isCookieBannerHidden]{display:none}@media (prefers-reduced-motion: no-preference){.c-cookieBanner{animation:.5s animate-enter ease-out}@keyframes animate-enter{0%{transform:translate3d(0,75%,0)}to{transform:translateZ(0)}}}.c-cookieBanner-title,.c-cookieBanner-body,.c-cookieBanner-actions{padding-inline-start:var(--cb-padding-inline);padding-inline-end:var(--cb-padding-inline)}.c-cookieBanner-title{--cb-title-font-size: var(--dt-font-heading-s-size--narrow);--cb-title-line-height: var(--dt-font-heading-s-line-height--narrow);font-size:calc(var(--cb-title-font-size) * 1px);font-weight:var(--dt-font-heading-s-weight);line-height:calc(var(--cb-title-line-height) * 1px)}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner-title{--cb-title-font-size: var(--dt-font-heading-s-size--wide);--cb-title-line-height: var(--dt-font-heading-s-line-height--wide)}}.c-cookieBanner-body{--cb-scroll-shadow-color: var(--dt-color-black);margin-block-start:var(--dt-spacing-a);max-height:200px;overflow-y:auto;background:linear-gradient(to bottom,transparent,var(--dt-color-background-dark) 75%) center bottom,linear-gradient(transparent,var(--cb-scroll-shadow-color)) center bottom;background-repeat:no-repeat;background-size:100% 48px,100% 8px;background-attachment:local,scroll}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner-body{max-height:150px}}.c-cookieBanner-actions{--cb-actions-flex-dir: column;margin-block-start:var(--dt-spacing-d);display:flex;gap:var(--dt-spacing-d);flex-direction:var(--cb-actions-flex-dir)}.c-cookieBanner-actions>pie-link{text-align:center;align-self:center}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner-actions{--cb-actions-flex-dir: row-reverse;justify-content:flex-start;align-items:center}}.c-cookieBanner-subheading{--cb-subheading-font-size: var(--dt-font-heading-s-size--narrow);--cb-subheading-line-height: var(--dt-font-heading-s-line-height--narrow);font-size:calc(var(--cb-subheading-font-size) * 1px);font-weight:var(--dt-font-heading-s-weight);line-height:calc(var(--cb-subheading-line-height) * 1px)}@media (min-width: 700px) and (orientation: landscape){.c-cookieBanner-subheading{--cb-subheading-font-size: var(--dt-font-heading-s-size--wide);--cb-subheading-line-height: var(--dt-font-heading-s-line-height--wide)}}.c-cookieBanner-description{font-size:calc(var(--dt-font-body-s-size) * 1px);line-height:calc(var(--dt-font-body-s-line-height) * 1px)}.c-cookieBanner-preference{display:flex;gap:var(--dt-spacing-d);justify-content:space-between;margin-block-start:var(--dt-spacing-e);margin-block-end:var(--dt-spacing-e)}.c-cookieBanner-preference p{margin-block-start:var(--dt-spacing-b)}.c-cookieBanner-preference:last-child{margin-block-end:0}", _ = {
  BULGARIAN: "bg",
  CATALAN: "ca",
  DANISH: "da",
  DUTCH: "nl",
  ENGLISH: "en",
  FRENCH: "fr",
  GERMAN: "de",
  HEBREW: "he",
  ITALIAN: "it",
  POLISH: "pl",
  SLOVAK: "sk",
  SPANISH: "es"
}, z = {
  AUSTRALIA: "au",
  AUSTRIA: "at",
  BELGIUM: "be",
  BULGARIA: "bg",
  CANADA: "ca",
  DENMARK: "dk",
  FRANCE: "fr",
  GERMANY: "de",
  GREAT_BRITAIN: "gb",
  IRELAND: "ie",
  ISRAEL: "il",
  ITALY: "it",
  LUXEMBOURG: "lu",
  NETHERLANDS: "nl",
  POLAND: "pl",
  SLOVAKIA: "sk",
  SPAIN: "es",
  SWITZERLAND: "ch"
}, jn = "pie-cookie-banner-accept-all", Un = "pie-cookie-banner-necessary-only", Wn = "pie-cookie-banner-manage-prefs", Kn = "pie-cookie-banner-prefs-saved", qn = [
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
], we = {
  hasPrimaryActionsOnly: !1,
  defaultPreferences: {},
  country: z.GREAT_BRITAIN,
  language: _.ENGLISH,
  cookieStatementLink: "",
  cookieTechnologiesLink: ""
}, Rt = /* @__PURE__ */ new Set([
  `${_.BULGARIAN}`,
  `${_.DANISH}`,
  `${_.ENGLISH}-${z.FRANCE}`,
  `${_.FRENCH}-${z.FRANCE}`,
  `${_.FRENCH}`,
  `${_.GERMAN}`,
  `${_.ENGLISH}`,
  `${_.HEBREW}`,
  `${_.ITALIAN}`,
  `${_.DUTCH}`,
  `${_.POLISH}`,
  `${_.SLOVAK}`,
  `${_.CATALAN}`,
  `${_.SPANISH}`
]), Gn = /* @__PURE__ */ new Map([
  [z.AUSTRALIA, `${_.ENGLISH}`],
  [z.AUSTRIA, `${_.GERMAN}`],
  [z.BELGIUM, `${_.DUTCH}`],
  [z.BULGARIA, `${_.BULGARIAN}`],
  [z.CANADA, `${_.ENGLISH}`],
  [z.DENMARK, `${_.DANISH}`],
  [z.FRANCE, `${_.FRENCH}-${z.FRANCE}`],
  [z.GERMANY, `${_.GERMAN}`],
  [z.GREAT_BRITAIN, `${_.ENGLISH}`],
  [z.IRELAND, `${_.ENGLISH}`],
  [z.ISRAEL, `${_.HEBREW}`],
  [z.ITALY, `${_.ITALIAN}`],
  [z.LUXEMBOURG, `${_.FRENCH}`],
  [z.NETHERLANDS, `${_.DUTCH}`],
  [z.POLAND, `${_.POLISH}`],
  [z.SLOVAKIA, `${_.SLOVAK}`],
  [z.SPAIN, `${_.SPANISH}`],
  [z.SWITZERLAND, `${_.GERMAN}`]
]);
function ao(n) {
  console.error(`[localisation-utils]: ${n}`);
}
function Yn(n, e) {
  const t = (o) => String.prototype.split.call(e, o).filter(Boolean).reduce((l, d) => l != null && typeof l == "object" ? l[d] : l, n), r = t(/[,[\]]+?/) || t(/[,[\].]+?/);
  return typeof r != "string" ? "" : r;
}
function so(n, e) {
  if (!n) throw new Error('"locale" parameter cannot be empty');
  if (!e) throw new Error('"key" parameter cannot be empty');
  const t = Yn(n, e);
  return t || (ao(`Couldn't find a value for the key "${e}", it will be used as fallback.`), e);
}
function Zn(n) {
  const t = n.map((o) => `(<${o}.*>.*</${o}>)`).join("|");
  return new RegExp(t, "igm");
}
function Xn(n, e) {
  const t = Object.keys(e);
  if (t.length === 0) return [n];
  const r = Zn(t);
  return n.split(r).filter((o) => !!o).map((o) => {
    if (!o.match(r)) return o;
    const d = o.match(/<(.*)>(.*)<\/.*>/);
    if (!d) return o;
    const [, u, h] = d;
    return [u, h];
  }).map((o) => {
    if (!Array.isArray(o)) return o;
    const [d, u] = o, h = e[d];
    return h || typeof h == "function" ? h(u) : (ao(`Custom tag "${d}" does not have a matching enhancer function`), u);
  });
}
function Jn(n, e, t) {
  if (!n) throw new Error('"locale" parameter cannot be empty');
  if (!e) throw new Error('"key" parameter cannot be empty');
  if (!t) throw new Error('"customTagEnhancers" parameter cannot be empty');
  const r = so(n, e);
  return Xn(r, t);
}
var Qn = Object.defineProperty, ee = (n, e, t, r) => {
  for (var o = void 0, l = n.length - 1, d; l >= 0; l--)
    (d = n[l]) && (o = d(e, t, o) || o);
  return o && Qn(e, t, o), o;
};
const er = "pie-cookie-banner", ni = class ni extends j {
  constructor() {
    super(...arguments), this._isCookieBannerHidden = !1, this._isModalOpen = !1, this._locale = Ft, this.hasPrimaryActionsOnly = we.hasPrimaryActionsOnly, this.defaultPreferences = we.defaultPreferences, this.cookieStatementLink = we.cookieStatementLink, this.cookieTechnologiesLink = we.cookieTechnologiesLink, this.country = we.country, this.language = we.language, this._getLocaleString = (e, t) => {
      let r = `${e}-${t}`.toLowerCase();
      if (Rt.has(r) || (r = `${e}`.toLowerCase(), Rt.has(r)))
        return r;
      const o = Gn.get(t.toLowerCase());
      return o && Rt.has(o) ? o : `${we.language}`;
    }, this._customTagEnhancers = {
      linkStatement: (e) => y`<pie-link href="${this.cookieStatementLink}" variant="inverse" target="_blank" data-test-id="cookie-statement-link">${e}</pie-link>`,
      linkNecessaryOnly: (e) => y`<pie-link data-test-id="body-necessary-only" tag="button" variant="inverse" @click="${this._onNecessaryOnly}">${e}</pie-link>`,
      linkManagePreferences: (e) => y`<pie-link data-test-id="body-manage-prefs" tag="button" variant="inverse" @click="${this._openManagePreferencesModal}">${e}</pie-link>`,
      linkAcceptAll: (e) => y`<pie-link data-test-id="body-accept-all" tag="button" variant="inverse" @click="${this._onAcceptAll}">${e}</pie-link>`,
      linkCookieStatement: (e) => y`<pie-link href="${this.cookieStatementLink}" size="small" target="_blank" data-test-id="cookie-statement-link">${e}</pie-link>`,
      linkCookieTechList: (e) => y`<pie-link href="${this.cookieTechnologiesLink}" size="small" target="_blank" data-test-id="cookie-technology-link">${e}</pie-link>`
    }, this._onNecessaryOnly = () => {
      X(this, Un), this._isCookieBannerHidden = !0;
    }, this._onAcceptAll = () => {
      X(this, jn), this._isCookieBannerHidden = !0;
    }, this._openManagePreferencesModal = () => {
      this._isCookieBannerHidden = !0, X(this, Wn), this._isModalOpen = !0;
    }, this._handleSwitchStates = (e) => {
      const { id: t } = e == null ? void 0 : e.currentTarget, r = [...this._preferencesNodes].find(({ id: o }) => o === "all");
      if (t === r.id) {
        const { checked: o } = e.target;
        this._preferencesNodes.forEach((l) => {
          l.checked = l.disabled ? l.checked : o;
        });
      } else
        r.checked = [...this._preferencesNodes].filter(({ id: o }) => o !== "all").every(({ checked: o }) => o);
    };
  }
  async updated(e) {
    (e.has("language") || e.has("country")) && await this._setLocaleBasedOnCountryAndLanguage(this.language, this.country);
  }
  // Dynamically import locale JSON based on country and language
  async _setLocaleBasedOnCountryAndLanguage(e, t) {
    try {
      const r = this._getLocaleString(e, t);
      this._locale = (await lo(/* @__PURE__ */ Object.assign({ "../locales/bg.js": () => import("./bg-DGJESQ4e.js"), "../locales/ca.js": () => import("./ca-Bcf7sXQS.js"), "../locales/da.js": () => import("./da-zmkmo2qP.js"), "../locales/de.js": () => import("./de-CCDQDaL_.js"), "../locales/en-fr.js": () => import("./en-fr-B3W1OBz4.js"), "../locales/en.js": () => Promise.resolve().then(() => Dn), "../locales/es.js": () => import("./es-BGd5IeE8.js"), "../locales/fr-fr.js": () => import("./fr-fr-Bj0z2tFA.js"), "../locales/fr.js": () => import("./fr-ZJirJTQ1.js"), "../locales/he.js": () => import("./he-CD4nZodw.js"), "../locales/it.js": () => import("./it-C20n5M6-.js"), "../locales/nl.js": () => import("./nl-potC62A2.js"), "../locales/pl.js": () => import("./pl-BZMXvf-W.js"), "../locales/sk.js": () => import("./sk-B2GkzqzB.js") }), `../locales/${r}.js`, 3)).default;
    } catch {
      this._locale = Ft;
    }
  }
  _localiseText(e) {
    return so(this._locale, e);
  }
  _localiseRichText(e) {
    return Jn(this._locale, e, this._customTagEnhancers);
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
    [...this._preferencesNodes].filter(({ id: t }) => t !== "all").forEach(({ id: t, checked: r }) => {
      e = { ...e, [t]: r };
    }), X(this, Kn, e), this._isModalOpen = !1, this._isCookieBannerHidden = !0;
  }
  /**
   * Renders the content of the preference item.
   * @private
   */
  renderPreference({
    id: e,
    checked: t,
    disabled: r,
    hasDivider: o,
    hasDescription: l
  }) {
    var g;
    const d = this._localiseText(`preferencesManagement.${e}.title`), u = `preferencesManagement.${e}.description`, h = l && this._localiseText(u), k = ["functional", "personalized", "analytical"].every((A) => {
      var $;
      return (($ = this.defaultPreferences) == null ? void 0 : $[A]) === !0;
    });
    return y`
            <div class="c-cookieBanner-preference">
                <div>
                    <h3 class="c-cookieBanner-subheading">${d}</h3>
                     ${h ? y`<p class="c-cookieBanner-description">${h}</p>` : w}
                 </div>
                <pie-switch
                    id="${e}"
                    ?checked="${((g = this.defaultPreferences) == null ? void 0 : g[e]) || k || t}"
                    ?disabled="${r}"
                    @change="${this._handleSwitchStates}">
                </pie-switch>
            </div>
            ${o ? y`<pie-divider></pie-divider>` : w}`;
  }
  /**
   * Renders the modal content.
   * @private
   */
  renderModalContent() {
    return y`
            <p class="c-cookieBanner-description" data-test-id="modal-description">
                ${this._localiseRichText("preferencesManagement.description")}
            </p>
            ${Lo(
      qn,
      ({ id: e }) => e,
      (e) => this.renderPreference(e)
    )}`;
  }
  render() {
    const e = {
      text: this._localiseText("preferencesManagement.cta.save.label"),
      ariaLabel: this._localiseText("preferencesManagement.cta.save.label")
    };
    return y`
        <pie-modal
            .isOpen="${this._isModalOpen}"
            hasBackButton
            hasStackedActions
            isFullWidthBelowMid
            heading="${this._localiseText("preferencesManagement.title")}"
            .leadingAction=${e}
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
                    isBold>
                    ${this._localiseText("banner.cta.managePreferences")}
                </pie-link>
            </div>
        </aside>`;
  }
};
ni.styles = se(Vn);
let U = ni;
ee([
  nt()
], U.prototype, "_isCookieBannerHidden");
ee([
  nt()
], U.prototype, "_isModalOpen");
ee([
  nt()
], U.prototype, "_locale");
ee([
  v({ type: Boolean })
], U.prototype, "hasPrimaryActionsOnly");
ee([
  v({ type: Object })
], U.prototype, "defaultPreferences");
ee([
  v({ type: String })
], U.prototype, "cookieStatementLink");
ee([
  v({ type: String })
], U.prototype, "cookieTechnologiesLink");
ee([
  v({ type: String })
], U.prototype, "country");
ee([
  v({ type: String })
], U.prototype, "language");
ee([
  Eo("pie-switch")
], U.prototype, "_preferencesNodes");
q(er, U);
export {
  z as Country,
  _ as Language,
  jn as ON_COOKIE_BANNER_ACCEPT_ALL,
  Wn as ON_COOKIE_BANNER_MANAGE_PREFS,
  Un as ON_COOKIE_BANNER_NECESSARY_ONLY,
  Kn as ON_COOKIE_BANNER_PREFS_SAVED,
  U as PieCookieBanner,
  Rt as availableLocales,
  Gn as defaultLocaleForCountry,
  we as defaultProps,
  qn as preferences
};
