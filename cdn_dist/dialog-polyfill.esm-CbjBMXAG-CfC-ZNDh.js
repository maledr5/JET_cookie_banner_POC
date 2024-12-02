var d = window.CustomEvent;
(!d || typeof d == "object") && (d = function(t, e) {
  e = e || {};
  var o = document.createEvent("CustomEvent");
  return o.initCustomEvent(t, !!e.bubbles, !!e.cancelable, e.detail || null), o;
}, d.prototype = window.Event.prototype);
function f(t, e) {
  var o = "on" + e.type.toLowerCase();
  return typeof t[o] == "function" && t[o](e), t.dispatchEvent(e);
}
function w(t) {
  for (; t && t !== document.body; ) {
    var e = window.getComputedStyle(t), o = function(i, a) {
      return !(e[i] === void 0 || e[i] === a);
    };
    if (e.opacity < 1 || o("zIndex", "auto") || o("transform", "none") || o("mixBlendMode", "normal") || o("filter", "none") || o("perspective", "none") || e.isolation === "isolate" || e.position === "fixed" || e.webkitOverflowScrolling === "touch")
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function u(t) {
  for (; t; ) {
    if (t.localName === "dialog")
      return (
        /** @type {HTMLDialogElement} */
        t
      );
    t.parentElement ? t = t.parentElement : t.parentNode ? t = t.parentNode.host : t = null;
  }
  return null;
}
function b(t) {
  for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
    t = t.shadowRoot.activeElement;
  t && t.blur && t !== document.body && t.blur();
}
function E(t, e) {
  for (var o = 0; o < t.length; ++o)
    if (t[o] === e)
      return !0;
  return !1;
}
function h(t) {
  return !t || !t.hasAttribute("method") ? !1 : t.getAttribute("method").toLowerCase() === "dialog";
}
function v(t) {
  var e = ["button", "input", "keygen", "select", "textarea"], o = e.map(function(s) {
    return s + ":not([disabled])";
  });
  o.push('[tabindex]:not([disabled]):not([tabindex=""])');
  var i = t.querySelector(o.join(", "));
  if (!i && "attachShadow" in Element.prototype)
    for (var a = t.querySelectorAll("*"), r = 0; r < a.length && !(a[r].tagName && a[r].shadowRoot && (i = v(a[r].shadowRoot), i)); r++)
      ;
  return i;
}
function m(t) {
  return t.isConnected || document.body.contains(t);
}
function y(t) {
  if (t.submitter)
    return t.submitter;
  var e = t.target;
  if (!(e instanceof HTMLFormElement))
    return null;
  var o = n.formSubmitter;
  if (!o) {
    var i = t.target, a = "getRootNode" in i && i.getRootNode() || document;
    o = a.activeElement;
  }
  return !o || o.form !== e ? null : o;
}
function M(t) {
  if (!t.defaultPrevented) {
    var e = (
      /** @type {!HTMLFormElement} */
      t.target
    ), o = n.imagemapUseValue, i = y(t);
    o === null && i && (o = i.value);
    var a = u(e);
    if (a) {
      var r = i && i.getAttribute("formmethod") || e.getAttribute("method");
      r === "dialog" && (t.preventDefault(), o != null ? a.close(o) : a.close());
    }
  }
}
function _(t) {
  if (this.dialog_ = t, this.replacedStyleTop_ = !1, this.openAsModal_ = !1, t.hasAttribute("role") || t.setAttribute("role", "dialog"), t.show = this.show.bind(this), t.showModal = this.showModal.bind(this), t.close = this.close.bind(this), t.addEventListener("submit", M, !1), "returnValue" in t || (t.returnValue = ""), "MutationObserver" in window) {
    var e = new MutationObserver(this.maybeHideModal.bind(this));
    e.observe(t, { attributes: !0, attributeFilter: ["open"] });
  } else {
    var o = !1, i = (function() {
      o ? this.downgradeModal() : this.maybeHideModal(), o = !1;
    }).bind(this), a, r = function(s) {
      if (s.target === t) {
        var c = "DOMNodeRemoved";
        o |= s.type.substr(0, c.length) === c, window.clearTimeout(a), a = window.setTimeout(i, 0);
      }
    };
    ["DOMAttrModified", "DOMNodeRemoved", "DOMNodeRemovedFromDocument"].forEach(function(s) {
      t.addEventListener(s, r);
    });
  }
  Object.defineProperty(t, "open", {
    set: this.setOpen.bind(this),
    get: t.hasAttribute.bind(t, "open")
  }), this.backdrop_ = document.createElement("div"), this.backdrop_.className = "backdrop", this.backdrop_.addEventListener("mouseup", this.backdropMouseEvent_.bind(this)), this.backdrop_.addEventListener("mousedown", this.backdropMouseEvent_.bind(this)), this.backdrop_.addEventListener("click", this.backdropMouseEvent_.bind(this));
}
_.prototype = /** @type {HTMLDialogElement.prototype} */
{
  get dialog() {
    return this.dialog_;
  },
  /**
   * Maybe remove this dialog from the modal top layer. This is called when
   * a modal dialog may no longer be tenable, e.g., when the dialog is no
   * longer open or is no longer part of the DOM.
   */
  maybeHideModal: function() {
    this.dialog_.hasAttribute("open") && m(this.dialog_) || this.downgradeModal();
  },
  /**
   * Remove this dialog from the modal top layer, leaving it as a non-modal.
   */
  downgradeModal: function() {
    this.openAsModal_ && (this.openAsModal_ = !1, this.dialog_.style.zIndex = "", this.replacedStyleTop_ && (this.dialog_.style.top = "", this.replacedStyleTop_ = !1), this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_), n.dm.removeDialog(this));
  },
  /**
   * @param {boolean} value whether to open or close this dialog
   */
  setOpen: function(t) {
    t ? this.dialog_.hasAttribute("open") || this.dialog_.setAttribute("open", "") : (this.dialog_.removeAttribute("open"), this.maybeHideModal());
  },
  /**
   * Handles mouse events ('mouseup', 'mousedown', 'click') on the fake .backdrop element, redirecting them as if
   * they were on the dialog itself.
   *
   * @param {!Event} e to redirect
   */
  backdropMouseEvent_: function(t) {
    if (this.dialog_.hasAttribute("tabindex"))
      this.dialog_.focus();
    else {
      var e = document.createElement("div");
      this.dialog_.insertBefore(e, this.dialog_.firstChild), e.tabIndex = -1, e.focus(), this.dialog_.removeChild(e);
    }
    var o = document.createEvent("MouseEvents");
    o.initMouseEvent(
      t.type,
      t.bubbles,
      t.cancelable,
      window,
      t.detail,
      t.screenX,
      t.screenY,
      t.clientX,
      t.clientY,
      t.ctrlKey,
      t.altKey,
      t.shiftKey,
      t.metaKey,
      t.button,
      t.relatedTarget
    ), this.dialog_.dispatchEvent(o), t.stopPropagation();
  },
  /**
   * Focuses on the first focusable element within the dialog. This will always blur the current
   * focus, even if nothing within the dialog is found.
   */
  focus_: function() {
    var t = this.dialog_.querySelector("[autofocus]:not([disabled])");
    !t && this.dialog_.tabIndex >= 0 && (t = this.dialog_), t || (t = v(this.dialog_)), b(document.activeElement), t && t.focus();
  },
  /**
   * Sets the zIndex for the backdrop and dialog.
   *
   * @param {number} dialogZ
   * @param {number} backdropZ
   */
  updateZIndex: function(t, e) {
    if (t < e)
      throw new Error("dialogZ should never be < backdropZ");
    this.dialog_.style.zIndex = t, this.backdrop_.style.zIndex = e;
  },
  /**
   * Shows the dialog. If the dialog is already open, this does nothing.
   */
  show: function() {
    this.dialog_.open || (this.setOpen(!0), this.focus_());
  },
  /**
   * Show this dialog modally.
   */
  showModal: function() {
    if (this.dialog_.hasAttribute("open"))
      throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");
    if (!m(this.dialog_))
      throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");
    if (!n.dm.pushDialog(this))
      throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");
    w(this.dialog_.parentElement) && console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"), this.setOpen(!0), this.openAsModal_ = !0, n.needsCentering(this.dialog_) ? (n.reposition(this.dialog_), this.replacedStyleTop_ = !0) : this.replacedStyleTop_ = !1, this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling), this.focus_();
  },
  /**
   * Closes this HTMLDialogElement. This is optional vs clearing the open
   * attribute, however this fires a 'close' event.
   *
   * @param {string=} opt_returnValue to use as the returnValue
   */
  close: function(t) {
    if (!this.dialog_.hasAttribute("open"))
      throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");
    this.setOpen(!1), t !== void 0 && (this.dialog_.returnValue = t);
    var e = new d("close", {
      bubbles: !1,
      cancelable: !1
    });
    f(this.dialog_, e);
  }
};
var n = {};
n.reposition = function(t) {
  var e = document.body.scrollTop || document.documentElement.scrollTop, o = e + (window.innerHeight - t.offsetHeight) / 2;
  t.style.top = Math.max(e, o) + "px";
};
n.isInlinePositionSetByStylesheet = function(t) {
  for (var e = 0; e < document.styleSheets.length; ++e) {
    var o = document.styleSheets[e], i = null;
    try {
      i = o.cssRules;
    } catch {
    }
    if (i)
      for (var a = 0; a < i.length; ++a) {
        var r = i[a], s = null;
        try {
          s = document.querySelectorAll(r.selectorText);
        } catch {
        }
        if (!(!s || !E(s, t))) {
          var c = r.style.getPropertyValue("top"), g = r.style.getPropertyValue("bottom");
          if (c && c !== "auto" || g && g !== "auto")
            return !0;
        }
      }
  }
  return !1;
};
n.needsCentering = function(t) {
  var e = window.getComputedStyle(t);
  return e.position !== "absolute" || t.style.top !== "auto" && t.style.top !== "" || t.style.bottom !== "auto" && t.style.bottom !== "" ? !1 : !n.isInlinePositionSetByStylesheet(t);
};
n.forceRegisterDialog = function(t) {
  if ((window.HTMLDialogElement || t.showModal) && console.warn("This browser already supports <dialog>, the polyfill may not work correctly", t), t.localName !== "dialog")
    throw new Error("Failed to register dialog: The element is not a dialog.");
  new _(
    /** @type {!HTMLDialogElement} */
    t
  );
};
n.registerDialog = function(t) {
  t.showModal || n.forceRegisterDialog(t);
};
n.DialogManager = function() {
  this.pendingDialogStack = [];
  var t = this.checkDOM_.bind(this);
  this.overlay = document.createElement("div"), this.overlay.className = "_dialog_overlay", this.overlay.addEventListener("click", (function(e) {
    this.forwardTab_ = void 0, e.stopPropagation(), t([]);
  }).bind(this)), this.handleKey_ = this.handleKey_.bind(this), this.handleFocus_ = this.handleFocus_.bind(this), this.zIndexLow_ = 1e5, this.zIndexHigh_ = 100150, this.forwardTab_ = void 0, "MutationObserver" in window && (this.mo_ = new MutationObserver(function(e) {
    var o = [];
    e.forEach(function(i) {
      for (var a = 0, r; r = i.removedNodes[a]; ++a) {
        if (r instanceof Element)
          r.localName === "dialog" && o.push(r);
        else continue;
        o = o.concat(r.querySelectorAll("dialog"));
      }
    }), o.length && t(o);
  }));
};
n.DialogManager.prototype.blockDocument = function() {
  document.documentElement.addEventListener("focus", this.handleFocus_, !0), document.addEventListener("keydown", this.handleKey_), this.mo_ && this.mo_.observe(document, { childList: !0, subtree: !0 });
};
n.DialogManager.prototype.unblockDocument = function() {
  document.documentElement.removeEventListener("focus", this.handleFocus_, !0), document.removeEventListener("keydown", this.handleKey_), this.mo_ && this.mo_.disconnect();
};
n.DialogManager.prototype.updateStacking = function() {
  for (var t = this.zIndexHigh_, e = 0, o; o = this.pendingDialogStack[e]; ++e)
    o.updateZIndex(--t, --t), e === 0 && (this.overlay.style.zIndex = --t);
  var i = this.pendingDialogStack[0];
  if (i) {
    var a = i.dialog.parentNode || document.body;
    a.appendChild(this.overlay);
  } else this.overlay.parentNode && this.overlay.parentNode.removeChild(this.overlay);
};
n.DialogManager.prototype.containedByTopDialog_ = function(t) {
  for (; t = u(t); ) {
    for (var e = 0, o; o = this.pendingDialogStack[e]; ++e)
      if (o.dialog === t)
        return e === 0;
    t = t.parentElement;
  }
  return !1;
};
n.DialogManager.prototype.handleFocus_ = function(t) {
  var e = t.composedPath ? t.composedPath()[0] : t.target;
  if (!this.containedByTopDialog_(e) && document.activeElement !== document.documentElement && (t.preventDefault(), t.stopPropagation(), b(
    /** @type {Element} */
    e
  ), this.forwardTab_ !== void 0)) {
    var o = this.pendingDialogStack[0], i = o.dialog, a = i.compareDocumentPosition(e);
    return a & Node.DOCUMENT_POSITION_PRECEDING && (this.forwardTab_ ? o.focus_() : e !== document.documentElement && document.documentElement.focus()), !1;
  }
};
n.DialogManager.prototype.handleKey_ = function(t) {
  if (this.forwardTab_ = void 0, t.keyCode === 27) {
    t.preventDefault(), t.stopPropagation();
    var e = new d("cancel", {
      bubbles: !1,
      cancelable: !0
    }), o = this.pendingDialogStack[0];
    o && f(o.dialog, e) && o.dialog.close();
  } else t.keyCode === 9 && (this.forwardTab_ = !t.shiftKey);
};
n.DialogManager.prototype.checkDOM_ = function(t) {
  var e = this.pendingDialogStack.slice();
  e.forEach(function(o) {
    t.indexOf(o.dialog) !== -1 ? o.downgradeModal() : o.maybeHideModal();
  });
};
n.DialogManager.prototype.pushDialog = function(t) {
  var e = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
  return this.pendingDialogStack.length >= e ? !1 : (this.pendingDialogStack.unshift(t) === 1 && this.blockDocument(), this.updateStacking(), !0);
};
n.DialogManager.prototype.removeDialog = function(t) {
  var e = this.pendingDialogStack.indexOf(t);
  e !== -1 && (this.pendingDialogStack.splice(e, 1), this.pendingDialogStack.length === 0 && this.unblockDocument(), this.updateStacking());
};
n.dm = new n.DialogManager();
n.formSubmitter = null;
n.imagemapUseValue = null;
if (window.HTMLDialogElement === void 0) {
  var p = document.createElement("form");
  if (p.setAttribute("method", "dialog"), p.method !== "dialog") {
    var l = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, "method");
    if (l) {
      var D = l.get;
      l.get = function() {
        return h(this) ? "dialog" : D.call(this);
      };
      var k = l.set;
      l.set = function(t) {
        return typeof t == "string" && t.toLowerCase() === "dialog" ? this.setAttribute("method", t) : k.call(this, t);
      }, Object.defineProperty(HTMLFormElement.prototype, "method", l);
    }
  }
  document.addEventListener("click", function(t) {
    if (n.formSubmitter = null, n.imagemapUseValue = null, !t.defaultPrevented) {
      var e = (
        /** @type {Element} */
        t.target
      );
      if ("composedPath" in t) {
        var o = t.composedPath();
        e = o.shift() || e;
      }
      if (!(!e || !h(e.form))) {
        var i = e.type === "submit" && ["button", "input"].indexOf(e.localName) > -1;
        if (!i) {
          if (!(e.localName === "input" && e.type === "image"))
            return;
          n.imagemapUseValue = t.offsetX + "," + t.offsetY;
        }
        var a = u(e);
        a && (n.formSubmitter = e);
      }
    }
  }, !1), document.addEventListener("submit", function(t) {
    var e = t.target, o = u(e);
    if (!o) {
      var i = y(t), a = i && i.getAttribute("formmethod") || e.getAttribute("method");
      a === "dialog" && t.preventDefault();
    }
  });
  var S = HTMLFormElement.prototype.submit, T = function() {
    if (!h(this))
      return S.call(this);
    var t = u(this);
    t && t.close();
  };
  HTMLFormElement.prototype.submit = T;
}
export {
  n as default
};
