(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const u of o.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Tc =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ms = { exports: {} },
  Sl = {},
  vs = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yr = Symbol.for("react.element"),
  Mc = Symbol.for("react.portal"),
  Lc = Symbol.for("react.fragment"),
  Ic = Symbol.for("react.strict_mode"),
  Rc = Symbol.for("react.profiler"),
  Dc = Symbol.for("react.provider"),
  Fc = Symbol.for("react.context"),
  Uc = Symbol.for("react.forward_ref"),
  Ac = Symbol.for("react.suspense"),
  $c = Symbol.for("react.memo"),
  Bc = Symbol.for("react.lazy"),
  iu = Symbol.iterator;
function Vc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (iu && e[iu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ys = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gs = Object.assign,
  ws = {};
function Cn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ws),
    (this.updater = n || ys);
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xs() {}
xs.prototype = Cn.prototype;
function si(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ws),
    (this.updater = n || ys);
}
var ai = (si.prototype = new xs());
ai.constructor = si;
gs(ai, Cn.prototype);
ai.isPureReactComponent = !0;
var uu = Array.isArray,
  Ss = Object.prototype.hasOwnProperty,
  ci = { current: null },
  ks = { key: !0, ref: !0, __self: !0, __source: !0 };
function Es(e, t, n) {
  var r,
    l = {},
    o = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ss.call(t, r) && !ks.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), a = 0; a < i; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) l[r] === void 0 && (l[r] = i[r]);
  return {
    $$typeof: yr,
    type: e,
    key: o,
    ref: u,
    props: l,
    _owner: ci.current,
  };
}
function Hc(e, t) {
  return {
    $$typeof: yr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function fi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yr;
}
function Qc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var su = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qc("" + e.key)
    : t.toString(36);
}
function Ar(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (o) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case yr:
          case Mc:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (l = l(u)),
      (e = r === "" ? "." + Vl(u, 0) : r),
      uu(l)
        ? ((n = ""),
          e != null && (n = e.replace(su, "$&/") + "/"),
          Ar(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (fi(l) &&
            (l = Hc(
              l,
              n +
                (!l.key || (u && u.key === l.key)
                  ? ""
                  : ("" + l.key).replace(su, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), uu(e)))
    for (var i = 0; i < e.length; i++) {
      o = e[i];
      var s = r + Vl(o, i);
      u += Ar(o, t, n, s, l);
    }
  else if (((s = Vc(e)), typeof s == "function"))
    for (e = s.call(e), i = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Vl(o, i++)), (u += Ar(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return u;
}
function kr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ar(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Wc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ge = { current: null },
  $r = { transition: null },
  Kc = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: $r,
    ReactCurrentOwner: ci,
  };
function Cs() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: kr,
  forEach: function (e, t, n) {
    kr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      kr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      kr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!fi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = Cn;
U.Fragment = Lc;
U.Profiler = Rc;
U.PureComponent = si;
U.StrictMode = Ic;
U.Suspense = Ac;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kc;
U.act = Cs;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = gs({}, e.props),
    l = e.key,
    o = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (u = ci.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (s in t)
      Ss.call(t, s) &&
        !ks.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var a = 0; a < s; a++) i[a] = arguments[a + 2];
    r.children = i;
  }
  return { $$typeof: yr, type: e.type, key: l, ref: o, props: r, _owner: u };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dc, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Es;
U.createFactory = function (e) {
  var t = Es.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: Uc, render: e };
};
U.isValidElement = fi;
U.lazy = function (e) {
  return { $$typeof: Bc, _payload: { _status: -1, _result: e }, _init: Wc };
};
U.memo = function (e, t) {
  return { $$typeof: $c, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = $r.transition;
  $r.transition = {};
  try {
    e();
  } finally {
    $r.transition = t;
  }
};
U.unstable_act = Cs;
U.useCallback = function (e, t) {
  return ge.current.useCallback(e, t);
};
U.useContext = function (e) {
  return ge.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return ge.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return ge.current.useEffect(e, t);
};
U.useId = function () {
  return ge.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return ge.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return ge.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return ge.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return ge.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return ge.current.useRef(e);
};
U.useState = function (e) {
  return ge.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return ge.current.useTransition();
};
U.version = "18.3.1";
vs.exports = U;
var ue = vs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yc = ue,
  Gc = Symbol.for("react.element"),
  Xc = Symbol.for("react.fragment"),
  Zc = Object.prototype.hasOwnProperty,
  qc = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ns(e, t, n) {
  var r,
    l = {},
    o = null,
    u = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) Zc.call(t, r) && !Jc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Gc,
    type: e,
    key: o,
    ref: u,
    props: l,
    _owner: qc.current,
  };
}
Sl.Fragment = Xc;
Sl.jsx = Ns;
Sl.jsxs = Ns;
ms.exports = Sl;
var v = ms.exports,
  js = { exports: {} },
  Te = {},
  _s = { exports: {} },
  Ps = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, L) {
    var R = _.length;
    _.push(L);
    e: for (; 0 < R; ) {
      var H = (R - 1) >>> 1,
        b = _[H];
      if (0 < l(b, L)) (_[H] = L), (_[R] = b), (R = H);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var L = _[0],
      R = _.pop();
    if (R !== L) {
      _[0] = R;
      e: for (var H = 0, b = _.length, Ge = b >>> 1; H < Ge; ) {
        var et = 2 * (H + 1) - 1,
          It = _[et],
          Ue = et + 1,
          Rt = _[Ue];
        if (0 > l(It, R))
          Ue < b && 0 > l(Rt, It)
            ? ((_[H] = Rt), (_[Ue] = R), (H = Ue))
            : ((_[H] = It), (_[et] = R), (H = et));
        else if (Ue < b && 0 > l(Rt, R)) (_[H] = Rt), (_[Ue] = R), (H = Ue);
        else break e;
      }
    }
    return L;
  }
  function l(_, L) {
    var R = _.sortIndex - L.sortIndex;
    return R !== 0 ? R : _.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var u = Date,
      i = u.now();
    e.unstable_now = function () {
      return u.now() - i;
    };
  }
  var s = [],
    a = [],
    f = 1,
    d = null,
    m = 3,
    S = !1,
    g = !1,
    N = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(_) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= _)
        r(a), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(a);
    }
  }
  function k(_) {
    if (((N = !1), h(_), !g))
      if (n(s) !== null) (g = !0), On(j);
      else {
        var L = n(a);
        L !== null && Tn(k, L.startTime - _);
      }
  }
  function j(_, L) {
    (g = !1), N && ((N = !1), p(M), (M = -1)), (S = !0);
    var R = m;
    try {
      for (
        h(L), d = n(s);
        d !== null && (!(d.expirationTime > L) || (_ && !xe()));

      ) {
        var H = d.callback;
        if (typeof H == "function") {
          (d.callback = null), (m = d.priorityLevel);
          var b = H(d.expirationTime <= L);
          (L = e.unstable_now()),
            typeof b == "function" ? (d.callback = b) : d === n(s) && r(s),
            h(L);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var Ge = !0;
      else {
        var et = n(a);
        et !== null && Tn(k, et.startTime - L), (Ge = !1);
      }
      return Ge;
    } finally {
      (d = null), (m = R), (S = !1);
    }
  }
  var T = !1,
    z = null,
    M = -1,
    G = 5,
    D = -1;
  function xe() {
    return !(e.unstable_now() - D < G);
  }
  function dt() {
    if (z !== null) {
      var _ = e.unstable_now();
      D = _;
      var L = !0;
      try {
        L = z(!0, _);
      } finally {
        L ? Lt() : ((T = !1), (z = null));
      }
    } else T = !1;
  }
  var Lt;
  if (typeof c == "function")
    Lt = function () {
      c(dt);
    };
  else if (typeof MessageChannel < "u") {
    var _n = new MessageChannel(),
      Pn = _n.port2;
    (_n.port1.onmessage = dt),
      (Lt = function () {
        Pn.postMessage(null);
      });
  } else
    Lt = function () {
      I(dt, 0);
    };
  function On(_) {
    (z = _), T || ((T = !0), Lt());
  }
  function Tn(_, L) {
    M = I(function () {
      _(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || S || ((g = !0), On(j));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (G = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = m;
      }
      var R = m;
      m = L;
      try {
        return _();
      } finally {
        m = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, L) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var R = m;
      m = _;
      try {
        return L();
      } finally {
        m = R;
      }
    }),
    (e.unstable_scheduleCallback = function (_, L, R) {
      var H = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? H + R : H))
          : (R = H),
        _)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = R + b),
        (_ = {
          id: f++,
          callback: L,
          priorityLevel: _,
          startTime: R,
          expirationTime: b,
          sortIndex: -1,
        }),
        R > H
          ? ((_.sortIndex = R),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (N ? (p(M), (M = -1)) : (N = !0), Tn(k, R - H)))
          : ((_.sortIndex = b), t(s, _), g || S || ((g = !0), On(j))),
        _
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (_) {
      var L = m;
      return function () {
        var R = m;
        m = L;
        try {
          return _.apply(this, arguments);
        } finally {
          m = R;
        }
      };
    });
})(Ps);
_s.exports = Ps;
var bc = _s.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ef = ue,
  Oe = bc;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Os = new Set(),
  er = {};
function Gt(e, t) {
  yn(e, t), yn(e + "Capture", t);
}
function yn(e, t) {
  for (er[e] = t, e = 0; e < t.length; e++) Os.add(t[e]);
}
var ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  vo = Object.prototype.hasOwnProperty,
  tf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  au = {},
  cu = {};
function nf(e) {
  return vo.call(cu, e)
    ? !0
    : vo.call(au, e)
    ? !1
    : tf.test(e)
    ? (cu[e] = !0)
    : ((au[e] = !0), !1);
}
function rf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function lf(e, t, n, r) {
  if (t === null || typeof t > "u" || rf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, l, o, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = u);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var di = /[\-:]([a-z])/g;
function pi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(di, pi);
    fe[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(di, pi);
    fe[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(di, pi);
  fe[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hi(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (lf(t, n, l, r) && (n = null),
    r || l === null
      ? nf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ft = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Er = Symbol.for("react.element"),
  Jt = Symbol.for("react.portal"),
  bt = Symbol.for("react.fragment"),
  mi = Symbol.for("react.strict_mode"),
  yo = Symbol.for("react.profiler"),
  Ts = Symbol.for("react.provider"),
  zs = Symbol.for("react.context"),
  vi = Symbol.for("react.forward_ref"),
  go = Symbol.for("react.suspense"),
  wo = Symbol.for("react.suspense_list"),
  yi = Symbol.for("react.memo"),
  ht = Symbol.for("react.lazy"),
  Ms = Symbol.for("react.offscreen"),
  fu = Symbol.iterator;
function Ln(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fu && e[fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  Hl;
function Bn(e) {
  if (Hl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hl = (t && t[1]) || "";
    }
  return (
    `
` +
    Hl +
    e
  );
}
var Ql = !1;
function Wl(e, t) {
  if (!e || Ql) return "";
  Ql = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          u = l.length - 1,
          i = o.length - 1;
        1 <= u && 0 <= i && l[u] !== o[i];

      )
        i--;
      for (; 1 <= u && 0 <= i; u--, i--)
        if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if ((u--, i--, 0 > i || l[u] !== o[i])) {
                var s =
                  `
` + l[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= u && 0 <= i);
          break;
        }
    }
  } finally {
    (Ql = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Bn(e) : "";
}
function of(e) {
  switch (e.tag) {
    case 5:
      return Bn(e.type);
    case 16:
      return Bn("Lazy");
    case 13:
      return Bn("Suspense");
    case 19:
      return Bn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wl(e.type, !1)), e;
    case 11:
      return (e = Wl(e.type.render, !1)), e;
    case 1:
      return (e = Wl(e.type, !0)), e;
    default:
      return "";
  }
}
function xo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bt:
      return "Fragment";
    case Jt:
      return "Portal";
    case yo:
      return "Profiler";
    case mi:
      return "StrictMode";
    case go:
      return "Suspense";
    case wo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case zs:
        return (e.displayName || "Context") + ".Consumer";
      case Ts:
        return (e._context.displayName || "Context") + ".Provider";
      case vi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yi:
        return (
          (t = e.displayName || null), t !== null ? t : xo(e.type) || "Memo"
        );
      case ht:
        (t = e._payload), (e = e._init);
        try {
          return xo(e(t));
        } catch {}
    }
  return null;
}
function uf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xo(t);
    case 8:
      return t === mi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ls(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function sf(e) {
  var t = Ls(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (u) {
          (r = "" + u), o.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Cr(e) {
  e._valueTracker || (e._valueTracker = sf(e));
}
function Is(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ls(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function So(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function du(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rs(e, t) {
  (t = t.checked), t != null && hi(e, "checked", t, !1);
}
function ko(e, t) {
  Rs(e, t);
  var n = Pt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Eo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Eo(e, t.type, Pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Eo(e, t, n) {
  (t !== "number" || qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vn = Array.isArray;
function fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Vn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pt(n) };
}
function Ds(e, t) {
  var n = Pt(t.value),
    r = Pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function mu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function No(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Nr,
  Us = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Nr = Nr || document.createElement("div"),
          Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Nr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function tr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  af = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wn).forEach(function (e) {
  af.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wn[t] = Wn[e]);
  });
});
function As(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wn.hasOwnProperty(e) && Wn[e])
    ? ("" + t).trim()
    : t + "px";
}
function $s(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = As(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var cf = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function jo(e, t) {
  if (t) {
    if (cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function _o(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Po = null;
function gi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Oo = null,
  dn = null,
  pn = null;
function vu(e) {
  if ((e = xr(e))) {
    if (typeof Oo != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = jl(t)), Oo(e.stateNode, e.type, t));
  }
}
function Bs(e) {
  dn ? (pn ? pn.push(e) : (pn = [e])) : (dn = e);
}
function Vs() {
  if (dn) {
    var e = dn,
      t = pn;
    if (((pn = dn = null), vu(e), t)) for (e = 0; e < t.length; e++) vu(t[e]);
  }
}
function Hs(e, t) {
  return e(t);
}
function Qs() {}
var Kl = !1;
function Ws(e, t, n) {
  if (Kl) return e(t, n);
  Kl = !0;
  try {
    return Hs(e, t, n);
  } finally {
    (Kl = !1), (dn !== null || pn !== null) && (Qs(), Vs());
  }
}
function nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var To = !1;
if (ut)
  try {
    var In = {};
    Object.defineProperty(In, "passive", {
      get: function () {
        To = !0;
      },
    }),
      window.addEventListener("test", In, In),
      window.removeEventListener("test", In, In);
  } catch {
    To = !1;
  }
function ff(e, t, n, r, l, o, u, i, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var Kn = !1,
  Jr = null,
  br = !1,
  zo = null,
  df = {
    onError: function (e) {
      (Kn = !0), (Jr = e);
    },
  };
function pf(e, t, n, r, l, o, u, i, s) {
  (Kn = !1), (Jr = null), ff.apply(df, arguments);
}
function hf(e, t, n, r, l, o, u, i, s) {
  if ((pf.apply(this, arguments), Kn)) {
    if (Kn) {
      var a = Jr;
      (Kn = !1), (Jr = null);
    } else throw Error(E(198));
    br || ((br = !0), (zo = a));
  }
}
function Xt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ks(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function yu(e) {
  if (Xt(e) !== e) throw Error(E(188));
}
function mf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return yu(l), e;
        if (o === r) return yu(l), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var u = !1, i = l.child; i; ) {
        if (i === n) {
          (u = !0), (n = l), (r = o);
          break;
        }
        if (i === r) {
          (u = !0), (r = l), (n = o);
          break;
        }
        i = i.sibling;
      }
      if (!u) {
        for (i = o.child; i; ) {
          if (i === n) {
            (u = !0), (n = o), (r = l);
            break;
          }
          if (i === r) {
            (u = !0), (r = o), (n = l);
            break;
          }
          i = i.sibling;
        }
        if (!u) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Ys(e) {
  return (e = mf(e)), e !== null ? Gs(e) : null;
}
function Gs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xs = Oe.unstable_scheduleCallback,
  gu = Oe.unstable_cancelCallback,
  vf = Oe.unstable_shouldYield,
  yf = Oe.unstable_requestPaint,
  ne = Oe.unstable_now,
  gf = Oe.unstable_getCurrentPriorityLevel,
  wi = Oe.unstable_ImmediatePriority,
  Zs = Oe.unstable_UserBlockingPriority,
  el = Oe.unstable_NormalPriority,
  wf = Oe.unstable_LowPriority,
  qs = Oe.unstable_IdlePriority,
  kl = null,
  Je = null;
function xf(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function")
    try {
      Je.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var We = Math.clz32 ? Math.clz32 : Ef,
  Sf = Math.log,
  kf = Math.LN2;
function Ef(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sf(e) / kf) | 0)) | 0;
}
var jr = 64,
  _r = 4194304;
function Hn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var i = u & ~l;
    i !== 0 ? (r = Hn(i)) : ((o &= u), o !== 0 && (r = Hn(o)));
  } else (u = n & ~l), u !== 0 ? (r = Hn(u)) : o !== 0 && (r = Hn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - We(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Cf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Nf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var u = 31 - We(o),
      i = 1 << u,
      s = l[u];
    s === -1
      ? (!(i & n) || i & r) && (l[u] = Cf(i, t))
      : s <= t && (e.expiredLanes |= i),
      (o &= ~i);
  }
}
function Mo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Js() {
  var e = jr;
  return (jr <<= 1), !(jr & 4194240) && (jr = 64), e;
}
function Yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - We(t)),
    (e[t] = n);
}
function jf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - We(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function xi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var B = 0;
function bs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ea,
  Si,
  ta,
  na,
  ra,
  Lo = !1,
  Pr = [],
  xt = null,
  St = null,
  kt = null,
  rr = new Map(),
  lr = new Map(),
  vt = [],
  _f =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      kt = null;
      break;
    case "pointerover":
    case "pointerout":
      rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      lr.delete(t.pointerId);
  }
}
function Rn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = xr(t)), t !== null && Si(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Pf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (xt = Rn(xt, e, t, n, r, l)), !0;
    case "dragenter":
      return (St = Rn(St, e, t, n, r, l)), !0;
    case "mouseover":
      return (kt = Rn(kt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return rr.set(o, Rn(rr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), lr.set(o, Rn(lr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function la(e) {
  var t = Ut(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ks(n)), t !== null)) {
          (e.blockedOn = t),
            ra(e.priority, function () {
              ta(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Po = r), n.target.dispatchEvent(r), (Po = null);
    } else return (t = xr(n)), t !== null && Si(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xu(e, t, n) {
  Br(e) && n.delete(t);
}
function Of() {
  (Lo = !1),
    xt !== null && Br(xt) && (xt = null),
    St !== null && Br(St) && (St = null),
    kt !== null && Br(kt) && (kt = null),
    rr.forEach(xu),
    lr.forEach(xu);
}
function Dn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Lo ||
      ((Lo = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Of)));
}
function or(e) {
  function t(l) {
    return Dn(l, e);
  }
  if (0 < Pr.length) {
    Dn(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && Dn(xt, e),
      St !== null && Dn(St, e),
      kt !== null && Dn(kt, e),
      rr.forEach(t),
      lr.forEach(t),
      n = 0;
    n < vt.length;
    n++
  )
    (r = vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vt.length && ((n = vt[0]), n.blockedOn === null); )
    la(n), n.blockedOn === null && vt.shift();
}
var hn = ft.ReactCurrentBatchConfig,
  nl = !0;
function Tf(e, t, n, r) {
  var l = B,
    o = hn.transition;
  hn.transition = null;
  try {
    (B = 1), ki(e, t, n, r);
  } finally {
    (B = l), (hn.transition = o);
  }
}
function zf(e, t, n, r) {
  var l = B,
    o = hn.transition;
  hn.transition = null;
  try {
    (B = 4), ki(e, t, n, r);
  } finally {
    (B = l), (hn.transition = o);
  }
}
function ki(e, t, n, r) {
  if (nl) {
    var l = Io(e, t, n, r);
    if (l === null) ro(e, t, r, rl, n), wu(e, r);
    else if (Pf(l, e, t, n, r)) r.stopPropagation();
    else if ((wu(e, r), t & 4 && -1 < _f.indexOf(e))) {
      for (; l !== null; ) {
        var o = xr(l);
        if (
          (o !== null && ea(o),
          (o = Io(e, t, n, r)),
          o === null && ro(e, t, r, rl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ro(e, t, r, null, n);
  }
}
var rl = null;
function Io(e, t, n, r) {
  if (((rl = null), (e = gi(r)), (e = Ut(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ks(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (rl = e), null;
}
function oa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (gf()) {
        case wi:
          return 1;
        case Zs:
          return 4;
        case el:
        case wf:
          return 16;
        case qs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gt = null,
  Ei = null,
  Vr = null;
function ia() {
  if (Vr) return Vr;
  var e,
    t = Ei,
    n = t.length,
    r,
    l = "value" in gt ? gt.value : gt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
  return (Vr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Hr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Or() {
  return !0;
}
function Su() {
  return !1;
}
function ze(e) {
  function t(n, r, l, o, u) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = u),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(o) : o[i]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Or
        : Su),
      (this.isPropagationStopped = Su),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Or));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Or));
      },
      persist: function () {},
      isPersistent: Or,
    }),
    t
  );
}
var Nn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ci = ze(Nn),
  wr = J({}, Nn, { view: 0, detail: 0 }),
  Mf = ze(wr),
  Gl,
  Xl,
  Fn,
  El = J({}, wr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ni,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fn &&
            (Fn && e.type === "mousemove"
              ? ((Gl = e.screenX - Fn.screenX), (Xl = e.screenY - Fn.screenY))
              : (Xl = Gl = 0),
            (Fn = e)),
          Gl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xl;
    },
  }),
  ku = ze(El),
  Lf = J({}, El, { dataTransfer: 0 }),
  If = ze(Lf),
  Rf = J({}, wr, { relatedTarget: 0 }),
  Zl = ze(Rf),
  Df = J({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ff = ze(Df),
  Uf = J({}, Nn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Af = ze(Uf),
  $f = J({}, Nn, { data: 0 }),
  Eu = ze($f),
  Bf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Hf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Qf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hf[e]) ? !!t[e] : !1;
}
function Ni() {
  return Qf;
}
var Wf = J({}, wr, {
    key: function (e) {
      if (e.key) {
        var t = Bf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Hr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Vf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ni,
    charCode: function (e) {
      return e.type === "keypress" ? Hr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Hr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Kf = ze(Wf),
  Yf = J({}, El, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cu = ze(Yf),
  Gf = J({}, wr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ni,
  }),
  Xf = ze(Gf),
  Zf = J({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qf = ze(Zf),
  Jf = J({}, El, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  bf = ze(Jf),
  ed = [9, 13, 27, 32],
  ji = ut && "CompositionEvent" in window,
  Yn = null;
ut && "documentMode" in document && (Yn = document.documentMode);
var td = ut && "TextEvent" in window && !Yn,
  ua = ut && (!ji || (Yn && 8 < Yn && 11 >= Yn)),
  Nu = " ",
  ju = !1;
function sa(e, t) {
  switch (e) {
    case "keyup":
      return ed.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function aa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function nd(e, t) {
  switch (e) {
    case "compositionend":
      return aa(t);
    case "keypress":
      return t.which !== 32 ? null : ((ju = !0), Nu);
    case "textInput":
      return (e = t.data), e === Nu && ju ? null : e;
    default:
      return null;
  }
}
function rd(e, t) {
  if (en)
    return e === "compositionend" || (!ji && sa(e, t))
      ? ((e = ia()), (Vr = Ei = gt = null), (en = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ua && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ld = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ld[e.type] : t === "textarea";
}
function ca(e, t, n, r) {
  Bs(r),
    (t = ll(t, "onChange")),
    0 < t.length &&
      ((n = new Ci("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gn = null,
  ir = null;
function od(e) {
  Sa(e, 0);
}
function Cl(e) {
  var t = rn(e);
  if (Is(t)) return e;
}
function id(e, t) {
  if (e === "change") return t;
}
var fa = !1;
if (ut) {
  var ql;
  if (ut) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var Pu = document.createElement("div");
      Pu.setAttribute("oninput", "return;"),
        (Jl = typeof Pu.oninput == "function");
    }
    ql = Jl;
  } else ql = !1;
  fa = ql && (!document.documentMode || 9 < document.documentMode);
}
function Ou() {
  Gn && (Gn.detachEvent("onpropertychange", da), (ir = Gn = null));
}
function da(e) {
  if (e.propertyName === "value" && Cl(ir)) {
    var t = [];
    ca(t, ir, e, gi(e)), Ws(od, t);
  }
}
function ud(e, t, n) {
  e === "focusin"
    ? (Ou(), (Gn = t), (ir = n), Gn.attachEvent("onpropertychange", da))
    : e === "focusout" && Ou();
}
function sd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Cl(ir);
}
function ad(e, t) {
  if (e === "click") return Cl(t);
}
function cd(e, t) {
  if (e === "input" || e === "change") return Cl(t);
}
function fd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == "function" ? Object.is : fd;
function ur(e, t) {
  if (Ye(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vo.call(t, l) || !Ye(e[l], t[l])) return !1;
  }
  return !0;
}
function Tu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, t) {
  var n = Tu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Tu(n);
  }
}
function pa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ha() {
  for (var e = window, t = qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qr(e.document);
  }
  return t;
}
function _i(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function dd(e) {
  var t = ha(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _i(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = zu(n, o));
        var u = zu(n, r);
        l &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var pd = ut && "documentMode" in document && 11 >= document.documentMode,
  tn = null,
  Ro = null,
  Xn = null,
  Do = !1;
function Mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Do ||
    tn == null ||
    tn !== qr(r) ||
    ((r = tn),
    "selectionStart" in r && _i(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Xn && ur(Xn, r)) ||
      ((Xn = r),
      (r = ll(Ro, "onSelect")),
      0 < r.length &&
        ((t = new Ci("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tn))));
}
function Tr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nn = {
    animationend: Tr("Animation", "AnimationEnd"),
    animationiteration: Tr("Animation", "AnimationIteration"),
    animationstart: Tr("Animation", "AnimationStart"),
    transitionend: Tr("Transition", "TransitionEnd"),
  },
  bl = {},
  ma = {};
ut &&
  ((ma = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nn.animationend.animation,
    delete nn.animationiteration.animation,
    delete nn.animationstart.animation),
  "TransitionEvent" in window || delete nn.transitionend.transition);
function Nl(e) {
  if (bl[e]) return bl[e];
  if (!nn[e]) return e;
  var t = nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ma) return (bl[e] = t[n]);
  return e;
}
var va = Nl("animationend"),
  ya = Nl("animationiteration"),
  ga = Nl("animationstart"),
  wa = Nl("transitionend"),
  xa = new Map(),
  Lu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Tt(e, t) {
  xa.set(e, t), Gt(t, [e]);
}
for (var eo = 0; eo < Lu.length; eo++) {
  var to = Lu[eo],
    hd = to.toLowerCase(),
    md = to[0].toUpperCase() + to.slice(1);
  Tt(hd, "on" + md);
}
Tt(va, "onAnimationEnd");
Tt(ya, "onAnimationIteration");
Tt(ga, "onAnimationStart");
Tt("dblclick", "onDoubleClick");
Tt("focusin", "onFocus");
Tt("focusout", "onBlur");
Tt(wa, "onTransitionEnd");
yn("onMouseEnter", ["mouseout", "mouseover"]);
yn("onMouseLeave", ["mouseout", "mouseover"]);
yn("onPointerEnter", ["pointerout", "pointerover"]);
yn("onPointerLeave", ["pointerout", "pointerover"]);
Gt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Gt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  vd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
function Iu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), hf(r, t, void 0, e), (e.currentTarget = null);
}
function Sa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u],
            s = i.instance,
            a = i.currentTarget;
          if (((i = i.listener), s !== o && l.isPropagationStopped())) break e;
          Iu(l, i, a), (o = s);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((i = r[u]),
            (s = i.instance),
            (a = i.currentTarget),
            (i = i.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Iu(l, i, a), (o = s);
        }
    }
  }
  if (br) throw ((e = zo), (br = !1), (zo = null), e);
}
function K(e, t) {
  var n = t[Bo];
  n === void 0 && (n = t[Bo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ka(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
  var r = 0;
  t && (r |= 4), ka(n, e, r, t);
}
var zr = "_reactListening" + Math.random().toString(36).slice(2);
function sr(e) {
  if (!e[zr]) {
    (e[zr] = !0),
      Os.forEach(function (n) {
        n !== "selectionchange" && (vd.has(n) || no(n, !1, e), no(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zr] || ((t[zr] = !0), no("selectionchange", !1, t));
  }
}
function ka(e, t, n, r) {
  switch (oa(t)) {
    case 1:
      var l = Tf;
      break;
    case 4:
      l = zf;
      break;
    default:
      l = ki;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !To ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ro(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var s = u.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = u.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            u = u.return;
          }
        for (; i !== null; ) {
          if (((u = Ut(i)), u === null)) return;
          if (((s = u.tag), s === 5 || s === 6)) {
            r = o = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  Ws(function () {
    var a = o,
      f = gi(n),
      d = [];
    e: {
      var m = xa.get(e);
      if (m !== void 0) {
        var S = Ci,
          g = e;
        switch (e) {
          case "keypress":
            if (Hr(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Kf;
            break;
          case "focusin":
            (g = "focus"), (S = Zl);
            break;
          case "focusout":
            (g = "blur"), (S = Zl);
            break;
          case "beforeblur":
          case "afterblur":
            S = Zl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = ku;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = If;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Xf;
            break;
          case va:
          case ya:
          case ga:
            S = Ff;
            break;
          case wa:
            S = qf;
            break;
          case "scroll":
            S = Mf;
            break;
          case "wheel":
            S = bf;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Af;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Cu;
        }
        var N = (t & 4) !== 0,
          I = !N && e === "scroll",
          p = N ? (m !== null ? m + "Capture" : null) : m;
        N = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var k = h.stateNode;
          if (
            (h.tag === 5 &&
              k !== null &&
              ((h = k),
              p !== null && ((k = nr(c, p)), k != null && N.push(ar(c, k, h)))),
            I)
          )
            break;
          c = c.return;
        }
        0 < N.length &&
          ((m = new S(m, g, null, n, f)), d.push({ event: m, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Po &&
            (g = n.relatedTarget || n.fromElement) &&
            (Ut(g) || g[st]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            f.window === f
              ? f
              : (m = f.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((g = n.relatedTarget || n.toElement),
              (S = a),
              (g = g ? Ut(g) : null),
              g !== null &&
                ((I = Xt(g)), g !== I || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((S = null), (g = a)),
          S !== g)
        ) {
          if (
            ((N = ku),
            (k = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((N = Cu),
              (k = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (I = S == null ? m : rn(S)),
            (h = g == null ? m : rn(g)),
            (m = new N(k, c + "leave", S, n, f)),
            (m.target = I),
            (m.relatedTarget = h),
            (k = null),
            Ut(f) === a &&
              ((N = new N(p, c + "enter", g, n, f)),
              (N.target = h),
              (N.relatedTarget = I),
              (k = N)),
            (I = k),
            S && g)
          )
            t: {
              for (N = S, p = g, c = 0, h = N; h; h = qt(h)) c++;
              for (h = 0, k = p; k; k = qt(k)) h++;
              for (; 0 < c - h; ) (N = qt(N)), c--;
              for (; 0 < h - c; ) (p = qt(p)), h--;
              for (; c--; ) {
                if (N === p || (p !== null && N === p.alternate)) break t;
                (N = qt(N)), (p = qt(p));
              }
              N = null;
            }
          else N = null;
          S !== null && Ru(d, m, S, N, !1),
            g !== null && I !== null && Ru(d, I, g, N, !0);
        }
      }
      e: {
        if (
          ((m = a ? rn(a) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var j = id;
        else if (_u(m))
          if (fa) j = cd;
          else {
            j = sd;
            var T = ud;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (j = ad);
        if (j && (j = j(e, a))) {
          ca(d, j, n, f);
          break e;
        }
        T && T(e, m, a),
          e === "focusout" &&
            (T = m._wrapperState) &&
            T.controlled &&
            m.type === "number" &&
            Eo(m, "number", m.value);
      }
      switch (((T = a ? rn(a) : window), e)) {
        case "focusin":
          (_u(T) || T.contentEditable === "true") &&
            ((tn = T), (Ro = a), (Xn = null));
          break;
        case "focusout":
          Xn = Ro = tn = null;
          break;
        case "mousedown":
          Do = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Do = !1), Mu(d, n, f);
          break;
        case "selectionchange":
          if (pd) break;
        case "keydown":
        case "keyup":
          Mu(d, n, f);
      }
      var z;
      if (ji)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        en
          ? sa(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (ua &&
          n.locale !== "ko" &&
          (en || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && en && (z = ia())
            : ((gt = f),
              (Ei = "value" in gt ? gt.value : gt.textContent),
              (en = !0))),
        (T = ll(a, M)),
        0 < T.length &&
          ((M = new Eu(M, e, null, n, f)),
          d.push({ event: M, listeners: T }),
          z ? (M.data = z) : ((z = aa(n)), z !== null && (M.data = z)))),
        (z = td ? nd(e, n) : rd(e, n)) &&
          ((a = ll(a, "onBeforeInput")),
          0 < a.length &&
            ((f = new Eu("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: a }),
            (f.data = z)));
    }
    Sa(d, t);
  });
}
function ar(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ll(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = nr(e, n)),
      o != null && r.unshift(ar(e, o, l)),
      (o = nr(e, t)),
      o != null && r.push(ar(e, o, l))),
      (e = e.return);
  }
  return r;
}
function qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ru(e, t, n, r, l) {
  for (var o = t._reactName, u = []; n !== null && n !== r; ) {
    var i = n,
      s = i.alternate,
      a = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      l
        ? ((s = nr(n, o)), s != null && u.unshift(ar(n, s, i)))
        : l || ((s = nr(n, o)), s != null && u.push(ar(n, s, i)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var yd = /\r\n?/g,
  gd = /\u0000|\uFFFD/g;
function Du(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      yd,
      `
`
    )
    .replace(gd, "");
}
function Mr(e, t, n) {
  if (((t = Du(t)), Du(e) !== t && n)) throw Error(E(425));
}
function ol() {}
var Fo = null,
  Uo = null;
function Ao(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $o = typeof setTimeout == "function" ? setTimeout : void 0,
  wd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fu = typeof Promise == "function" ? Promise : void 0,
  xd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fu < "u"
      ? function (e) {
          return Fu.resolve(null).then(e).catch(Sd);
        }
      : $o;
function Sd(e) {
  setTimeout(function () {
    throw e;
  });
}
function lo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), or(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  or(t);
}
function Et(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Uu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + jn,
  cr = "__reactProps$" + jn,
  st = "__reactContainer$" + jn,
  Bo = "__reactEvents$" + jn,
  kd = "__reactListeners$" + jn,
  Ed = "__reactHandles$" + jn;
function Ut(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[st] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Uu(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = Uu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function xr(e) {
  return (
    (e = e[qe] || e[st]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function jl(e) {
  return e[cr] || null;
}
var Vo = [],
  ln = -1;
function zt(e) {
  return { current: e };
}
function Y(e) {
  0 > ln || ((e.current = Vo[ln]), (Vo[ln] = null), ln--);
}
function V(e, t) {
  ln++, (Vo[ln] = e.current), (e.current = t);
}
var Ot = {},
  me = zt(Ot),
  Ee = zt(!1),
  Ht = Ot;
function gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ot;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ce(e) {
  return (e = e.childContextTypes), e != null;
}
function il() {
  Y(Ee), Y(me);
}
function Au(e, t, n) {
  if (me.current !== Ot) throw Error(E(168));
  V(me, t), V(Ee, n);
}
function Ea(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, uf(e) || "Unknown", l));
  return J({}, n, r);
}
function ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ot),
    (Ht = me.current),
    V(me, e),
    V(Ee, Ee.current),
    !0
  );
}
function $u(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Ea(e, t, Ht)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Ee),
      Y(me),
      V(me, e))
    : Y(Ee),
    V(Ee, n);
}
var rt = null,
  _l = !1,
  oo = !1;
function Ca(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function Cd(e) {
  (_l = !0), Ca(e);
}
function Mt() {
  if (!oo && rt !== null) {
    oo = !0;
    var e = 0,
      t = B;
    try {
      var n = rt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (_l = !1);
    } catch (l) {
      throw (rt !== null && (rt = rt.slice(e + 1)), Xs(wi, Mt), l);
    } finally {
      (B = t), (oo = !1);
    }
  }
  return null;
}
var on = [],
  un = 0,
  sl = null,
  al = 0,
  Me = [],
  Le = 0,
  Qt = null,
  lt = 1,
  ot = "";
function Dt(e, t) {
  (on[un++] = al), (on[un++] = sl), (sl = e), (al = t);
}
function Na(e, t, n) {
  (Me[Le++] = lt), (Me[Le++] = ot), (Me[Le++] = Qt), (Qt = e);
  var r = lt;
  e = ot;
  var l = 32 - We(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - We(t) + l;
  if (30 < o) {
    var u = l - (l % 5);
    (o = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (l -= u),
      (lt = (1 << (32 - We(t) + l)) | (n << l) | r),
      (ot = o + e);
  } else (lt = (1 << o) | (n << l) | r), (ot = e);
}
function Pi(e) {
  e.return !== null && (Dt(e, 1), Na(e, 1, 0));
}
function Oi(e) {
  for (; e === sl; )
    (sl = on[--un]), (on[un] = null), (al = on[--un]), (on[un] = null);
  for (; e === Qt; )
    (Qt = Me[--Le]),
      (Me[Le] = null),
      (ot = Me[--Le]),
      (Me[Le] = null),
      (lt = Me[--Le]),
      (Me[Le] = null);
}
var Pe = null,
  _e = null,
  X = !1,
  Qe = null;
function ja(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Bu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pe = e), (_e = Et(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pe = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qt !== null ? { id: lt, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pe = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ho(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qo(e) {
  if (X) {
    var t = _e;
    if (t) {
      var n = t;
      if (!Bu(e, t)) {
        if (Ho(e)) throw Error(E(418));
        t = Et(n.nextSibling);
        var r = Pe;
        t && Bu(e, t)
          ? ja(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Pe = e));
      }
    } else {
      if (Ho(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (Pe = e);
    }
  }
}
function Vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pe = e;
}
function Lr(e) {
  if (e !== Pe) return !1;
  if (!X) return Vu(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ao(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (Ho(e)) throw (_a(), Error(E(418)));
    for (; t; ) ja(e, t), (t = Et(t.nextSibling));
  }
  if ((Vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = Et(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Pe ? Et(e.stateNode.nextSibling) : null;
  return !0;
}
function _a() {
  for (var e = _e; e; ) e = Et(e.nextSibling);
}
function wn() {
  (_e = Pe = null), (X = !1);
}
function Ti(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var Nd = ft.ReactCurrentBatchConfig;
function Un(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (u) {
            var i = l.refs;
            u === null ? delete i[o] : (i[o] = u);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Ir(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Hu(e) {
  var t = e._init;
  return t(e._payload);
}
function Pa(e) {
  function t(p, c) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [c]), (p.flags |= 16)) : h.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function l(p, c) {
    return (p = _t(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, c, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((p.flags |= 2), c) : h)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function u(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function i(p, c, h, k) {
    return c === null || c.tag !== 6
      ? ((c = po(h, p.mode, k)), (c.return = p), c)
      : ((c = l(c, h)), (c.return = p), c);
  }
  function s(p, c, h, k) {
    var j = h.type;
    return j === bt
      ? f(p, c, h.props.children, k, h.key)
      : c !== null &&
        (c.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === ht &&
            Hu(j) === c.type))
      ? ((k = l(c, h.props)), (k.ref = Un(p, c, h)), (k.return = p), k)
      : ((k = Zr(h.type, h.key, h.props, null, p.mode, k)),
        (k.ref = Un(p, c, h)),
        (k.return = p),
        k);
  }
  function a(p, c, h, k) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = ho(h, p.mode, k)), (c.return = p), c)
      : ((c = l(c, h.children || [])), (c.return = p), c);
  }
  function f(p, c, h, k, j) {
    return c === null || c.tag !== 7
      ? ((c = Vt(h, p.mode, k, j)), (c.return = p), c)
      : ((c = l(c, h)), (c.return = p), c);
  }
  function d(p, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = po("" + c, p.mode, h)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Er:
          return (
            (h = Zr(c.type, c.key, c.props, null, p.mode, h)),
            (h.ref = Un(p, null, c)),
            (h.return = p),
            h
          );
        case Jt:
          return (c = ho(c, p.mode, h)), (c.return = p), c;
        case ht:
          var k = c._init;
          return d(p, k(c._payload), h);
      }
      if (Vn(c) || Ln(c))
        return (c = Vt(c, p.mode, h, null)), (c.return = p), c;
      Ir(p, c);
    }
    return null;
  }
  function m(p, c, h, k) {
    var j = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return j !== null ? null : i(p, c, "" + h, k);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Er:
          return h.key === j ? s(p, c, h, k) : null;
        case Jt:
          return h.key === j ? a(p, c, h, k) : null;
        case ht:
          return (j = h._init), m(p, c, j(h._payload), k);
      }
      if (Vn(h) || Ln(h)) return j !== null ? null : f(p, c, h, k, null);
      Ir(p, h);
    }
    return null;
  }
  function S(p, c, h, k, j) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (p = p.get(h) || null), i(c, p, "" + k, j);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Er:
          return (p = p.get(k.key === null ? h : k.key) || null), s(c, p, k, j);
        case Jt:
          return (p = p.get(k.key === null ? h : k.key) || null), a(c, p, k, j);
        case ht:
          var T = k._init;
          return S(p, c, h, T(k._payload), j);
      }
      if (Vn(k) || Ln(k)) return (p = p.get(h) || null), f(c, p, k, j, null);
      Ir(c, k);
    }
    return null;
  }
  function g(p, c, h, k) {
    for (
      var j = null, T = null, z = c, M = (c = 0), G = null;
      z !== null && M < h.length;
      M++
    ) {
      z.index > M ? ((G = z), (z = null)) : (G = z.sibling);
      var D = m(p, z, h[M], k);
      if (D === null) {
        z === null && (z = G);
        break;
      }
      e && z && D.alternate === null && t(p, z),
        (c = o(D, c, M)),
        T === null ? (j = D) : (T.sibling = D),
        (T = D),
        (z = G);
    }
    if (M === h.length) return n(p, z), X && Dt(p, M), j;
    if (z === null) {
      for (; M < h.length; M++)
        (z = d(p, h[M], k)),
          z !== null &&
            ((c = o(z, c, M)), T === null ? (j = z) : (T.sibling = z), (T = z));
      return X && Dt(p, M), j;
    }
    for (z = r(p, z); M < h.length; M++)
      (G = S(z, p, M, h[M], k)),
        G !== null &&
          (e && G.alternate !== null && z.delete(G.key === null ? M : G.key),
          (c = o(G, c, M)),
          T === null ? (j = G) : (T.sibling = G),
          (T = G));
    return (
      e &&
        z.forEach(function (xe) {
          return t(p, xe);
        }),
      X && Dt(p, M),
      j
    );
  }
  function N(p, c, h, k) {
    var j = Ln(h);
    if (typeof j != "function") throw Error(E(150));
    if (((h = j.call(h)), h == null)) throw Error(E(151));
    for (
      var T = (j = null), z = c, M = (c = 0), G = null, D = h.next();
      z !== null && !D.done;
      M++, D = h.next()
    ) {
      z.index > M ? ((G = z), (z = null)) : (G = z.sibling);
      var xe = m(p, z, D.value, k);
      if (xe === null) {
        z === null && (z = G);
        break;
      }
      e && z && xe.alternate === null && t(p, z),
        (c = o(xe, c, M)),
        T === null ? (j = xe) : (T.sibling = xe),
        (T = xe),
        (z = G);
    }
    if (D.done) return n(p, z), X && Dt(p, M), j;
    if (z === null) {
      for (; !D.done; M++, D = h.next())
        (D = d(p, D.value, k)),
          D !== null &&
            ((c = o(D, c, M)), T === null ? (j = D) : (T.sibling = D), (T = D));
      return X && Dt(p, M), j;
    }
    for (z = r(p, z); !D.done; M++, D = h.next())
      (D = S(z, p, M, D.value, k)),
        D !== null &&
          (e && D.alternate !== null && z.delete(D.key === null ? M : D.key),
          (c = o(D, c, M)),
          T === null ? (j = D) : (T.sibling = D),
          (T = D));
    return (
      e &&
        z.forEach(function (dt) {
          return t(p, dt);
        }),
      X && Dt(p, M),
      j
    );
  }
  function I(p, c, h, k) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === bt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Er:
          e: {
            for (var j = h.key, T = c; T !== null; ) {
              if (T.key === j) {
                if (((j = h.type), j === bt)) {
                  if (T.tag === 7) {
                    n(p, T.sibling),
                      (c = l(T, h.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  T.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === ht &&
                    Hu(j) === T.type)
                ) {
                  n(p, T.sibling),
                    (c = l(T, h.props)),
                    (c.ref = Un(p, T, h)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, T);
                break;
              } else t(p, T);
              T = T.sibling;
            }
            h.type === bt
              ? ((c = Vt(h.props.children, p.mode, k, h.key)),
                (c.return = p),
                (p = c))
              : ((k = Zr(h.type, h.key, h.props, null, p.mode, k)),
                (k.ref = Un(p, c, h)),
                (k.return = p),
                (p = k));
          }
          return u(p);
        case Jt:
          e: {
            for (T = h.key; c !== null; ) {
              if (c.key === T)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(p, c.sibling),
                    (c = l(c, h.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = ho(h, p.mode, k)), (c.return = p), (p = c);
          }
          return u(p);
        case ht:
          return (T = h._init), I(p, c, T(h._payload), k);
      }
      if (Vn(h)) return g(p, c, h, k);
      if (Ln(h)) return N(p, c, h, k);
      Ir(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = l(c, h)), (c.return = p), (p = c))
          : (n(p, c), (c = po(h, p.mode, k)), (c.return = p), (p = c)),
        u(p))
      : n(p, c);
  }
  return I;
}
var xn = Pa(!0),
  Oa = Pa(!1),
  cl = zt(null),
  fl = null,
  sn = null,
  zi = null;
function Mi() {
  zi = sn = fl = null;
}
function Li(e) {
  var t = cl.current;
  Y(cl), (e._currentValue = t);
}
function Wo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mn(e, t) {
  (fl = e),
    (zi = sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (zi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), sn === null)) {
      if (fl === null) throw Error(E(308));
      (sn = e), (fl.dependencies = { lanes: 0, firstContext: e });
    } else sn = sn.next = e;
  return t;
}
var At = null;
function Ii(e) {
  At === null ? (At = [e]) : At.push(e);
}
function Ta(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ii(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    at(e, r)
  );
}
function at(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function Ri(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function za(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), A & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      at(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ii(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    at(e, n)
  );
}
function Qr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xi(e, n);
  }
}
function Qu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function dl(e, t, n, r) {
  var l = e.updateQueue;
  mt = !1;
  var o = l.firstBaseUpdate,
    u = l.lastBaseUpdate,
    i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i,
      a = s.next;
    (s.next = null), u === null ? (o = a) : (u.next = a), (u = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (i = f.lastBaseUpdate),
      i !== u &&
        (i === null ? (f.firstBaseUpdate = a) : (i.next = a),
        (f.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var d = l.baseState;
    (u = 0), (f = a = s = null), (i = o);
    do {
      var m = i.lane,
        S = i.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next =
            {
              eventTime: S,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var g = e,
            N = i;
          switch (((m = t), (S = n), N.tag)) {
            case 1:
              if (((g = N.payload), typeof g == "function")) {
                d = g.call(S, d, m);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = N.payload),
                (m = typeof g == "function" ? g.call(S, d, m) : g),
                m == null)
              )
                break e;
              d = J({}, d, m);
              break e;
            case 2:
              mt = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [i]) : m.push(i));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          f === null ? ((a = f = S), (s = d)) : (f = f.next = S),
          (u |= m);
      if (((i = i.next), i === null)) {
        if (((i = l.shared.pending), i === null)) break;
        (m = i),
          (i = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = d),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (u |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Kt |= u), (e.lanes = u), (e.memoizedState = d);
  }
}
function Wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var Sr = {},
  be = zt(Sr),
  fr = zt(Sr),
  dr = zt(Sr);
function $t(e) {
  if (e === Sr) throw Error(E(174));
  return e;
}
function Di(e, t) {
  switch ((V(dr, t), V(fr, e), V(be, Sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : No(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = No(t, e));
  }
  Y(be), V(be, t);
}
function Sn() {
  Y(be), Y(fr), Y(dr);
}
function Ma(e) {
  $t(dr.current);
  var t = $t(be.current),
    n = No(t, e.type);
  t !== n && (V(fr, e), V(be, n));
}
function Fi(e) {
  fr.current === e && (Y(be), Y(fr));
}
var Z = zt(0);
function pl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var io = [];
function Ui() {
  for (var e = 0; e < io.length; e++)
    io[e]._workInProgressVersionPrimary = null;
  io.length = 0;
}
var Wr = ft.ReactCurrentDispatcher,
  uo = ft.ReactCurrentBatchConfig,
  Wt = 0,
  q = null,
  le = null,
  ie = null,
  hl = !1,
  Zn = !1,
  pr = 0,
  jd = 0;
function de() {
  throw Error(E(321));
}
function Ai(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ye(e[n], t[n])) return !1;
  return !0;
}
function $i(e, t, n, r, l, o) {
  if (
    ((Wt = o),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wr.current = e === null || e.memoizedState === null ? Td : zd),
    (e = n(r, l)),
    Zn)
  ) {
    o = 0;
    do {
      if (((Zn = !1), (pr = 0), 25 <= o)) throw Error(E(301));
      (o += 1),
        (ie = le = null),
        (t.updateQueue = null),
        (Wr.current = Md),
        (e = n(r, l));
    } while (Zn);
  }
  if (
    ((Wr.current = ml),
    (t = le !== null && le.next !== null),
    (Wt = 0),
    (ie = le = q = null),
    (hl = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Bi() {
  var e = pr !== 0;
  return (pr = 0), e;
}
function Ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ie === null ? (q.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function Fe() {
  if (le === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ie === null ? q.memoizedState : ie.next;
  if (t !== null) (ie = t), (le = e);
  else {
    if (e === null) throw Error(E(310));
    (le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ie === null ? (q.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function so(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = le,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var u = l.next;
      (l.next = o.next), (o.next = u);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var i = (u = null),
      s = null,
      a = o;
    do {
      var f = a.lane;
      if ((Wt & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: f,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((i = s = d), (u = r)) : (s = s.next = d),
          (q.lanes |= f),
          (Kt |= f);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (u = r) : (s.next = i),
      Ye(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (q.lanes |= o), (Kt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ao(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var u = (l = l.next);
    do (o = e(o, u.action)), (u = u.next);
    while (u !== l);
    Ye(o, t.memoizedState) || (ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function La() {}
function Ia(e, t) {
  var n = q,
    r = Fe(),
    l = t(),
    o = !Ye(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ke = !0)),
    (r = r.queue),
    Vi(Fa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      mr(9, Da.bind(null, n, r, l, t), void 0, null),
      se === null)
    )
      throw Error(E(349));
    Wt & 30 || Ra(n, t, l);
  }
  return l;
}
function Ra(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Da(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ua(t) && Aa(e);
}
function Fa(e, t, n) {
  return n(function () {
    Ua(t) && Aa(e);
  });
}
function Ua(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ye(e, n);
  } catch {
    return !0;
  }
}
function Aa(e) {
  var t = at(e, 1);
  t !== null && Ke(t, e, 1, -1);
}
function Ku(e) {
  var t = Ze();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Od.bind(null, q, e)),
    [t.memoizedState, e]
  );
}
function mr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $a() {
  return Fe().memoizedState;
}
function Kr(e, t, n, r) {
  var l = Ze();
  (q.flags |= e),
    (l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pl(e, t, n, r) {
  var l = Fe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (le !== null) {
    var u = le.memoizedState;
    if (((o = u.destroy), r !== null && Ai(r, u.deps))) {
      l.memoizedState = mr(t, n, o, r);
      return;
    }
  }
  (q.flags |= e), (l.memoizedState = mr(1 | t, n, o, r));
}
function Yu(e, t) {
  return Kr(8390656, 8, e, t);
}
function Vi(e, t) {
  return Pl(2048, 8, e, t);
}
function Ba(e, t) {
  return Pl(4, 2, e, t);
}
function Va(e, t) {
  return Pl(4, 4, e, t);
}
function Ha(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pl(4, 4, Ha.bind(null, t, e), n)
  );
}
function Hi() {}
function Wa(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ai(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ka(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ai(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ya(e, t, n) {
  return Wt & 21
    ? (Ye(n, t) || ((n = Js()), (q.lanes |= n), (Kt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function _d(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = uo.transition;
  uo.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (uo.transition = r);
  }
}
function Ga() {
  return Fe().memoizedState;
}
function Pd(e, t, n) {
  var r = jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xa(e))
  )
    Za(t, n);
  else if (((n = Ta(e, t, n, r)), n !== null)) {
    var l = ye();
    Ke(n, e, r, l), qa(n, t, r);
  }
}
function Od(e, t, n) {
  var r = jt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xa(e)) Za(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var u = t.lastRenderedState,
          i = o(u, n);
        if (((l.hasEagerState = !0), (l.eagerState = i), Ye(i, u))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Ii(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ta(e, t, l, r)),
      n !== null && ((l = ye()), Ke(n, e, r, l), qa(n, t, r));
  }
}
function Xa(e) {
  var t = e.alternate;
  return e === q || (t !== null && t === q);
}
function Za(e, t) {
  Zn = hl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function qa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xi(e, n);
  }
}
var ml = {
    readContext: De,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  Td = {
    readContext: De,
    useCallback: function (e, t) {
      return (Ze().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: Yu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Kr(4194308, 4, Ha.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Kr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Kr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ze();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ze();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Pd.bind(null, q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ze();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ku,
    useDebugValue: Hi,
    useDeferredValue: function (e) {
      return (Ze().memoizedState = e);
    },
    useTransition: function () {
      var e = Ku(!1),
        t = e[0];
      return (e = _d.bind(null, e[1])), (Ze().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        l = Ze();
      if (X) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(E(349));
        Wt & 30 || Ra(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Yu(Fa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        mr(9, Da.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ze(),
        t = se.identifierPrefix;
      if (X) {
        var n = ot,
          r = lt;
        (n = (r & ~(1 << (32 - We(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = jd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  zd = {
    readContext: De,
    useCallback: Wa,
    useContext: De,
    useEffect: Vi,
    useImperativeHandle: Qa,
    useInsertionEffect: Ba,
    useLayoutEffect: Va,
    useMemo: Ka,
    useReducer: so,
    useRef: $a,
    useState: function () {
      return so(hr);
    },
    useDebugValue: Hi,
    useDeferredValue: function (e) {
      var t = Fe();
      return Ya(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = so(hr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: La,
    useSyncExternalStore: Ia,
    useId: Ga,
    unstable_isNewReconciler: !1,
  },
  Md = {
    readContext: De,
    useCallback: Wa,
    useContext: De,
    useEffect: Vi,
    useImperativeHandle: Qa,
    useInsertionEffect: Ba,
    useLayoutEffect: Va,
    useMemo: Ka,
    useReducer: ao,
    useRef: $a,
    useState: function () {
      return ao(hr);
    },
    useDebugValue: Hi,
    useDeferredValue: function (e) {
      var t = Fe();
      return le === null ? (t.memoizedState = e) : Ya(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(hr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: La,
    useSyncExternalStore: Ia,
    useId: Ga,
    unstable_isNewReconciler: !1,
  };
function Ve(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ko(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      l = jt(e),
      o = it(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ct(e, o, l)),
      t !== null && (Ke(t, e, l, r), Qr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      l = jt(e),
      o = it(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ct(e, o, l)),
      t !== null && (Ke(t, e, l, r), Qr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = jt(e),
      l = it(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ct(e, l, r)),
      t !== null && (Ke(t, e, r, n), Qr(t, e, r));
  },
};
function Gu(e, t, n, r, l, o, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ur(n, r) || !ur(l, o)
      : !0
  );
}
function Ja(e, t, n) {
  var r = !1,
    l = Ot,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = De(o))
      : ((l = Ce(t) ? Ht : me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? gn(e, l) : Ot)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Xu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
}
function Yo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ri(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = De(o))
    : ((o = Ce(t) ? Ht : me.current), (l.context = gn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ko(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ol.enqueueReplaceState(l, l.state, null),
      dl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function kn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += of(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Go(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ld = typeof WeakMap == "function" ? WeakMap : Map;
function ba(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yl || ((yl = !0), (li = r)), Go(e, t);
    }),
    n
  );
}
function ec(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Go(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Go(e, t),
          typeof r != "function" &&
            (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    n
  );
}
function Zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ld();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Yd.bind(null, e, t, n)), t.then(e, e));
}
function qu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ju(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = it(-1, 1)), (t.tag = 2), Ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Id = ft.ReactCurrentOwner,
  ke = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Oa(t, null, n, r) : xn(t, e.child, n, r);
}
function bu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    mn(t, l),
    (r = $i(e, t, n, r, o, l)),
    (n = Bi()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (X && n && Pi(t), (t.flags |= 1), ve(e, t, r, l), t.child)
  );
}
function es(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !qi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), tc(e, t, o, r, l))
      : ((e = Zr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var u = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ur), n(u, r) && e.ref === t.ref)
    )
      return ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = _t(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ur(o, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ke = !0);
      else return (t.lanes = e.lanes), ct(e, t, l);
  }
  return Xo(e, t, n, r, l);
}
function nc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(cn, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(cn, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        V(cn, je),
        (je |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(cn, je),
      (je |= r);
  return ve(e, t, l, n), t.child;
}
function rc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xo(e, t, n, r, l) {
  var o = Ce(n) ? Ht : me.current;
  return (
    (o = gn(t, o)),
    mn(t, l),
    (n = $i(e, t, n, r, o, l)),
    (r = Bi()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (X && r && Pi(t), (t.flags |= 1), ve(e, t, n, l), t.child)
  );
}
function ts(e, t, n, r, l) {
  if (Ce(n)) {
    var o = !0;
    ul(t);
  } else o = !1;
  if ((mn(t, l), t.stateNode === null))
    Yr(e, t), Ja(t, n, r), Yo(t, n, r, l), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      i = t.memoizedProps;
    u.props = i;
    var s = u.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = De(a))
      : ((a = Ce(n) ? Ht : me.current), (a = gn(t, a)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((i !== r || s !== a) && Xu(t, u, r, a)),
      (mt = !1);
    var m = t.memoizedState;
    (u.state = m),
      dl(t, r, u, l),
      (s = t.memoizedState),
      i !== r || m !== s || Ee.current || mt
        ? (typeof f == "function" && (Ko(t, n, f, r), (s = t.memoizedState)),
          (i = mt || Gu(t, n, i, r, m, s, a))
            ? (d ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (u.props = r),
          (u.state = s),
          (u.context = a),
          (r = i))
        : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      za(e, t),
      (i = t.memoizedProps),
      (a = t.type === t.elementType ? i : Ve(t.type, i)),
      (u.props = a),
      (d = t.pendingProps),
      (m = u.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = De(s))
        : ((s = Ce(n) ? Ht : me.current), (s = gn(t, s)));
    var S = n.getDerivedStateFromProps;
    (f =
      typeof S == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((i !== d || m !== s) && Xu(t, u, r, s)),
      (mt = !1),
      (m = t.memoizedState),
      (u.state = m),
      dl(t, r, u, l);
    var g = t.memoizedState;
    i !== d || m !== g || Ee.current || mt
      ? (typeof S == "function" && (Ko(t, n, S, r), (g = t.memoizedState)),
        (a = mt || Gu(t, n, a, r, m, g, s) || !1)
          ? (f ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, g, s),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, g, s)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (i === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (u.props = r),
        (u.state = g),
        (u.context = s),
        (r = a))
      : (typeof u.componentDidUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zo(e, t, n, r, o, l);
}
function Zo(e, t, n, r, l, o) {
  rc(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return l && $u(t, n, !1), ct(e, t, o);
  (r = t.stateNode), (Id.current = t);
  var i =
    u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = xn(t, e.child, null, o)), (t.child = xn(t, null, i, o)))
      : ve(e, t, i, o),
    (t.memoizedState = r.state),
    l && $u(t, n, !0),
    t.child
  );
}
function lc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Au(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Au(e, t.context, !1),
    Di(e, t.containerInfo);
}
function ns(e, t, n, r, l) {
  return wn(), Ti(l), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var qo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Jo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = Z.current,
    o = !1,
    u = (t.flags & 128) !== 0,
    i;
  if (
    ((i = u) ||
      (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    i
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    V(Z, l & 1),
    e === null)
  )
    return (
      Qo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = u))
                : (o = Ml(u, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Jo(n)),
              (t.memoizedState = qo),
              e)
            : Qi(t, u))
    );
  if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
    return Rd(e, t, u, r, i, l, n);
  if (o) {
    (o = r.fallback), (u = t.mode), (l = e.child), (i = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = _t(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      i !== null ? (o = _t(i, o)) : ((o = Vt(o, u, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? Jo(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (o.memoizedState = u),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = qo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = _t(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qi(e, t) {
  return (
    (t = Ml({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Rr(e, t, n, r) {
  return (
    r !== null && Ti(r),
    xn(t, e.child, null, n),
    (e = Qi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Rd(e, t, n, r, l, o, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = co(Error(E(422)))), Rr(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ml({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Vt(o, l, u, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && xn(t, e.child, null, u),
        (t.child.memoizedState = Jo(u)),
        (t.memoizedState = qo),
        o);
  if (!(t.mode & 1)) return Rr(e, t, u, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
    return (r = i), (o = Error(E(419))), (r = co(o, r, void 0)), Rr(e, t, u, r);
  }
  if (((i = (u & e.childLanes) !== 0), ke || i)) {
    if (((r = se), r !== null)) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | u) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), at(e, l), Ke(r, e, l, -1));
    }
    return Zi(), (r = co(Error(E(421)))), Rr(e, t, u, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Gd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (_e = Et(l.nextSibling)),
      (Pe = t),
      (X = !0),
      (Qe = null),
      e !== null &&
        ((Me[Le++] = lt),
        (Me[Le++] = ot),
        (Me[Le++] = Qt),
        (lt = e.id),
        (ot = e.overflow),
        (Qt = t)),
      (t = Qi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wo(e.return, t, n);
}
function fo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function ic(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ve(e, t, r.children, n), (r = Z.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rs(e, n, t);
        else if (e.tag === 19) rs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && pl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          fo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && pl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        fo(t, !0, n, null, o);
        break;
      case "together":
        fo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Dd(e, t, n) {
  switch (t.tag) {
    case 3:
      lc(t), wn();
      break;
    case 5:
      Ma(t);
      break;
    case 1:
      Ce(t.type) && ul(t);
      break;
    case 4:
      Di(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      V(cl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? oc(e, t, n)
          : (V(Z, Z.current & 1),
            (e = ct(e, t, n)),
            e !== null ? e.sibling : null);
      V(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ic(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        V(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nc(e, t, n);
  }
  return ct(e, t, n);
}
var uc, bo, sc, ac;
uc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
bo = function () {};
sc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), $t(be.current);
    var o = null;
    switch (n) {
      case "input":
        (l = So(e, l)), (r = So(e, r)), (o = []);
        break;
      case "select":
        (l = J({}, l, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Co(e, l)), (r = Co(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ol);
    }
    jo(n, r);
    var u;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var i = l[a];
          for (u in i) i.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (er.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((i = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== i && (s != null || i != null))
      )
        if (a === "style")
          if (i) {
            for (u in i)
              !i.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ""));
            for (u in s)
              s.hasOwnProperty(u) &&
                i[u] !== s[u] &&
                (n || (n = {}), (n[u] = s[u]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (i = i ? i.__html : void 0),
              s != null && i !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (er.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && K("scroll", e),
                  o || i === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
ac = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function An(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Fd(e, t, n) {
  var r = t.pendingProps;
  switch ((Oi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Ce(t.type) && il(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Sn(),
        Y(Ee),
        Y(me),
        Ui(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (ui(Qe), (Qe = null)))),
        bo(e, t),
        pe(t),
        null
      );
    case 5:
      Fi(t);
      var l = $t(dr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return pe(t), null;
        }
        if (((e = $t(be.current)), Lr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[qe] = t), (r[cr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Qn.length; l++) K(Qn[l], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K("error", r), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              du(r, o), K("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                K("invalid", r);
              break;
            case "textarea":
              hu(r, o), K("invalid", r);
          }
          jo(n, o), (l = null);
          for (var u in o)
            if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (o.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, i, e),
                    (l = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (o.suppressHydrationWarning !== !0 &&
                      Mr(r.textContent, i, e),
                    (l = ["children", "" + i]))
                : er.hasOwnProperty(u) &&
                  i != null &&
                  u === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              Cr(r), pu(r, o, !0);
              break;
            case "textarea":
              Cr(r), mu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ol);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === "select" &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[qe] = t),
            (e[cr] = r),
            uc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = _o(n, r)), n)) {
              case "dialog":
                K("cancel", e), K("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Qn.length; l++) K(Qn[l], e);
                l = r;
                break;
              case "source":
                K("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                K("error", e), K("load", e), (l = r);
                break;
              case "details":
                K("toggle", e), (l = r);
                break;
              case "input":
                du(e, r), (l = So(e, r)), K("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = J({}, r, { value: void 0 })),
                  K("invalid", e);
                break;
              case "textarea":
                hu(e, r), (l = Co(e, r)), K("invalid", e);
                break;
              default:
                l = r;
            }
            jo(n, l), (i = l);
            for (o in i)
              if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style"
                  ? $s(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Us(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && tr(e, s)
                    : typeof s == "number" && tr(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (er.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && K("scroll", e)
                      : s != null && hi(e, o, s, u));
              }
            switch (n) {
              case "input":
                Cr(e), pu(e, r, !1);
                break;
              case "textarea":
                Cr(e), mu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? fn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ol);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) ac(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = $t(dr.current)), $t(be.current), Lr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (o = r.nodeValue !== n) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Mr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Mr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (Y(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && _e !== null && t.mode & 1 && !(t.flags & 128))
          _a(), wn(), (t.flags |= 98560), (o = !1);
        else if (((o = Lr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(E(317));
            o[qe] = t;
          } else
            wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (o = !1);
        } else Qe !== null && (ui(Qe), (Qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? oe === 0 && (oe = 3) : Zi())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Sn(), bo(e, t), e === null && sr(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return Li(t.type._context), pe(t), null;
    case 17:
      return Ce(t.type) && il(), pe(t), null;
    case 19:
      if ((Y(Z), (o = t.memoizedState), o === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
        if (r) An(o, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = pl(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    An(o, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (u = o.alternate),
                    u === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = u.childLanes),
                        (o.lanes = u.lanes),
                        (o.child = u.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = u.memoizedProps),
                        (o.memoizedState = u.memoizedState),
                        (o.updateQueue = u.updateQueue),
                        (o.type = u.type),
                        (e = u.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ne() > En &&
            ((t.flags |= 128), (r = !0), An(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = pl(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              An(o, !0),
              o.tail === null && o.tailMode === "hidden" && !u.alternate && !X)
            )
              return pe(t), null;
          } else
            2 * ne() - o.renderingStartTime > En &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), An(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = o.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (o.last = u));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ne()),
          (t.sibling = null),
          (n = Z.current),
          V(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Xi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Ud(e, t) {
  switch ((Oi(t), t.tag)) {
    case 1:
      return (
        Ce(t.type) && il(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Sn(),
        Y(Ee),
        Y(me),
        Ui(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fi(t), null;
    case 13:
      if ((Y(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        wn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(Z), null;
    case 4:
      return Sn(), null;
    case 10:
      return Li(t.type._context), null;
    case 22:
    case 23:
      return Xi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dr = !1,
  he = !1,
  Ad = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function ei(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var ls = !1;
function $d(e, t) {
  if (((Fo = nl), (e = ha()), _i(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            i = -1,
            s = -1,
            a = 0,
            f = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              d !== n || (l !== 0 && d.nodeType !== 3) || (i = u + l),
                d !== o || (r !== 0 && d.nodeType !== 3) || (s = u + r),
                d.nodeType === 3 && (u += d.nodeValue.length),
                (S = d.firstChild) !== null;

            )
              (m = d), (d = S);
            for (;;) {
              if (d === e) break t;
              if (
                (m === n && ++a === l && (i = u),
                m === o && ++f === r && (s = u),
                (S = d.nextSibling) !== null)
              )
                break;
              (d = m), (m = d.parentNode);
            }
            d = S;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Uo = { focusedElem: e, selectionRange: n }, nl = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var N = g.memoizedProps,
                    I = g.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : Ve(t.type, N),
                      I
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (k) {
          te(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (g = ls), (ls = !1), g;
}
function qn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ei(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Tl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ti(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function cc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[cr], delete t[Bo], delete t[kd], delete t[Ed])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function fc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function os(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || fc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ni(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ni(e, t, n), e = e.sibling; e !== null; ) ni(e, t, n), (e = e.sibling);
}
function ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ri(e, t, n), e = e.sibling; e !== null; ) ri(e, t, n), (e = e.sibling);
}
var ae = null,
  He = !1;
function pt(e, t, n) {
  for (n = n.child; n !== null; ) dc(e, t, n), (n = n.sibling);
}
function dc(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function")
    try {
      Je.onCommitFiberUnmount(kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      he || an(n, t);
    case 6:
      var r = ae,
        l = He;
      (ae = null),
        pt(e, t, n),
        (ae = r),
        (He = l),
        ae !== null &&
          (He
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (He
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? lo(e.parentNode, n)
              : e.nodeType === 1 && lo(e, n),
            or(e))
          : lo(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (l = He),
        (ae = n.stateNode.containerInfo),
        (He = !0),
        pt(e, t, n),
        (ae = r),
        (He = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            u = o.destroy;
          (o = o.tag),
            u !== void 0 && (o & 2 || o & 4) && ei(n, t, u),
            (l = l.next);
        } while (l !== r);
      }
      pt(e, t, n);
      break;
    case 1:
      if (
        !he &&
        (an(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (i) {
          te(n, t, i);
        }
      pt(e, t, n);
      break;
    case 21:
      pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), pt(e, t, n), (he = r))
        : pt(e, t, n);
      break;
    default:
      pt(e, t, n);
  }
}
function is(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ad()),
      t.forEach(function (r) {
        var l = Xd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          u = t,
          i = u;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (ae = i.stateNode), (He = !1);
              break e;
            case 3:
              (ae = i.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (ae = i.stateNode.containerInfo), (He = !0);
              break e;
          }
          i = i.return;
        }
        if (ae === null) throw Error(E(160));
        dc(o, u, l), (ae = null), (He = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        te(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) pc(t, e), (t = t.sibling);
}
function pc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Be(t, e), Xe(e), r & 4)) {
        try {
          qn(3, e, e.return), Tl(3, e);
        } catch (N) {
          te(e, e.return, N);
        }
        try {
          qn(5, e, e.return);
        } catch (N) {
          te(e, e.return, N);
        }
      }
      break;
    case 1:
      Be(t, e), Xe(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (
        (Be(t, e),
        Xe(e),
        r & 512 && n !== null && an(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          tr(l, "");
        } catch (N) {
          te(e, e.return, N);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          u = n !== null ? n.memoizedProps : o,
          i = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            i === "input" && o.type === "radio" && o.name != null && Rs(l, o),
              _o(i, u);
            var a = _o(i, o);
            for (u = 0; u < s.length; u += 2) {
              var f = s[u],
                d = s[u + 1];
              f === "style"
                ? $s(l, d)
                : f === "dangerouslySetInnerHTML"
                ? Us(l, d)
                : f === "children"
                ? tr(l, d)
                : hi(l, f, d, a);
            }
            switch (i) {
              case "input":
                ko(l, o);
                break;
              case "textarea":
                Ds(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? fn(l, !!o.multiple, S, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? fn(l, !!o.multiple, o.defaultValue, !0)
                      : fn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[cr] = o;
          } catch (N) {
            te(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((Be(t, e), Xe(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (N) {
          te(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        (Be(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          or(t.containerInfo);
        } catch (N) {
          te(e, e.return, N);
        }
      break;
    case 4:
      Be(t, e), Xe(e);
      break;
    case 13:
      Be(t, e),
        Xe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Yi = ne())),
        r & 4 && is(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (a = he) || f), Be(t, e), (he = a)) : Be(t, e),
        Xe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !f && e.mode & 1)
        )
          for (P = e, f = e.child; f !== null; ) {
            for (d = P = f; P !== null; ) {
              switch (((m = P), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qn(4, m, m.return);
                  break;
                case 1:
                  an(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (N) {
                      te(r, n, N);
                    }
                  }
                  break;
                case 5:
                  an(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ss(d);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (P = S)) : ss(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (l = d.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((i = d.stateNode),
                      (s = d.memoizedProps.style),
                      (u =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (i.style.display = As("display", u)));
              } catch (N) {
                te(e, e.return, N);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (N) {
                te(e, e.return, N);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Be(t, e), Xe(e), r & 4 && is(e);
      break;
    case 21:
      break;
    default:
      Be(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (tr(l, ""), (r.flags &= -33));
          var o = os(e);
          ri(e, o, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            i = os(e);
          ni(e, i, u);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      te(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bd(e, t, n) {
  (P = e), hc(e);
}
function hc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      o = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || Dr;
      if (!u) {
        var i = l.alternate,
          s = (i !== null && i.memoizedState !== null) || he;
        i = Dr;
        var a = he;
        if (((Dr = u), (he = s) && !a))
          for (P = l; P !== null; )
            (u = P),
              (s = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? as(l)
                : s !== null
                ? ((s.return = u), (P = s))
                : as(l);
        for (; o !== null; ) (P = o), hc(o), (o = o.sibling);
        (P = l), (Dr = i), (he = a);
      }
      us(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (P = o)) : us(e);
  }
}
function us(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ve(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Wu(t, o, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wu(t, u, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var f = a.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && or(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        he || (t.flags & 512 && ti(t));
      } catch (m) {
        te(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function ss(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function as(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Tl(4, t);
          } catch (s) {
            te(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              te(t, l, s);
            }
          }
          var o = t.return;
          try {
            ti(t);
          } catch (s) {
            te(t, o, s);
          }
          break;
        case 5:
          var u = t.return;
          try {
            ti(t);
          } catch (s) {
            te(t, u, s);
          }
      }
    } catch (s) {
      te(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (P = i);
      break;
    }
    P = t.return;
  }
}
var Vd = Math.ceil,
  vl = ft.ReactCurrentDispatcher,
  Wi = ft.ReactCurrentOwner,
  Re = ft.ReactCurrentBatchConfig,
  A = 0,
  se = null,
  re = null,
  ce = 0,
  je = 0,
  cn = zt(0),
  oe = 0,
  vr = null,
  Kt = 0,
  zl = 0,
  Ki = 0,
  Jn = null,
  Se = null,
  Yi = 0,
  En = 1 / 0,
  nt = null,
  yl = !1,
  li = null,
  Nt = null,
  Fr = !1,
  wt = null,
  gl = 0,
  bn = 0,
  oi = null,
  Gr = -1,
  Xr = 0;
function ye() {
  return A & 6 ? ne() : Gr !== -1 ? Gr : (Gr = ne());
}
function jt(e) {
  return e.mode & 1
    ? A & 2 && ce !== 0
      ? ce & -ce
      : Nd.transition !== null
      ? (Xr === 0 && (Xr = Js()), Xr)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : oa(e.type))),
        e)
    : 1;
}
function Ke(e, t, n, r) {
  if (50 < bn) throw ((bn = 0), (oi = null), Error(E(185)));
  gr(e, n, r),
    (!(A & 2) || e !== se) &&
      (e === se && (!(A & 2) && (zl |= n), oe === 4 && yt(e, ce)),
      Ne(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((En = ne() + 500), _l && Mt()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Nf(e, t);
  var r = tl(e, e === se ? ce : 0);
  if (r === 0)
    n !== null && gu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gu(n), t === 1))
      e.tag === 0 ? Cd(cs.bind(null, e)) : Ca(cs.bind(null, e)),
        xd(function () {
          !(A & 6) && Mt();
        }),
        (n = null);
    else {
      switch (bs(r)) {
        case 1:
          n = wi;
          break;
        case 4:
          n = Zs;
          break;
        case 16:
          n = el;
          break;
        case 536870912:
          n = qs;
          break;
        default:
          n = el;
      }
      n = kc(n, mc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function mc(e, t) {
  if (((Gr = -1), (Xr = 0), A & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = tl(e, e === se ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var o = yc();
    (se !== e || ce !== t) && ((nt = null), (En = ne() + 500), Bt(e, t));
    do
      try {
        Wd();
        break;
      } catch (i) {
        vc(e, i);
      }
    while (!0);
    Mi(),
      (vl.current = o),
      (A = l),
      re !== null ? (t = 0) : ((se = null), (ce = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Mo(e)), l !== 0 && ((r = l), (t = ii(e, l)))), t === 1)
    )
      throw ((n = vr), Bt(e, 0), yt(e, r), Ne(e, ne()), n);
    if (t === 6) yt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Hd(l) &&
          ((t = wl(e, r)),
          t === 2 && ((o = Mo(e)), o !== 0 && ((r = o), (t = ii(e, o)))),
          t === 1))
      )
        throw ((n = vr), Bt(e, 0), yt(e, r), Ne(e, ne()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Ft(e, Se, nt);
          break;
        case 3:
          if (
            (yt(e, r), (r & 130023424) === r && ((t = Yi + 500 - ne()), 10 < t))
          ) {
            if (tl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = $o(Ft.bind(null, e, Se, nt), t);
            break;
          }
          Ft(e, Se, nt);
          break;
        case 4:
          if ((yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - We(r);
            (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Vd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $o(Ft.bind(null, e, Se, nt), r);
            break;
          }
          Ft(e, Se, nt);
          break;
        case 5:
          Ft(e, Se, nt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ne(e, ne()), e.callbackNode === n ? mc.bind(null, e) : null;
}
function ii(e, t) {
  var n = Jn;
  return (
    e.current.memoizedState.isDehydrated && (Bt(e, t).flags |= 256),
    (e = wl(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && ui(t)),
    e
  );
}
function ui(e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function Hd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ye(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function yt(e, t) {
  for (
    t &= ~Ki,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - We(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cs(e) {
  if (A & 6) throw Error(E(327));
  vn();
  var t = tl(e, 0);
  if (!(t & 1)) return Ne(e, ne()), null;
  var n = wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Mo(e);
    r !== 0 && ((t = r), (n = ii(e, r)));
  }
  if (n === 1) throw ((n = vr), Bt(e, 0), yt(e, t), Ne(e, ne()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ft(e, Se, nt),
    Ne(e, ne()),
    null
  );
}
function Gi(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    (A = n), A === 0 && ((En = ne() + 500), _l && Mt());
  }
}
function Yt(e) {
  wt !== null && wt.tag === 0 && !(A & 6) && vn();
  var t = A;
  A |= 1;
  var n = Re.transition,
    r = B;
  try {
    if (((Re.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Re.transition = n), (A = t), !(A & 6) && Mt();
  }
}
function Xi() {
  (je = cn.current), Y(cn);
}
function Bt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), wd(n)), re !== null))
    for (n = re.return; n !== null; ) {
      var r = n;
      switch ((Oi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && il();
          break;
        case 3:
          Sn(), Y(Ee), Y(me), Ui();
          break;
        case 5:
          Fi(r);
          break;
        case 4:
          Sn();
          break;
        case 13:
          Y(Z);
          break;
        case 19:
          Y(Z);
          break;
        case 10:
          Li(r.type._context);
          break;
        case 22:
        case 23:
          Xi();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (re = e = _t(e.current, null)),
    (ce = je = t),
    (oe = 0),
    (vr = null),
    (Ki = zl = Kt = 0),
    (Se = Jn = null),
    At !== null)
  ) {
    for (t = 0; t < At.length; t++)
      if (((n = At[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var u = o.next;
          (o.next = l), (r.next = u);
        }
        n.pending = r;
      }
    At = null;
  }
  return e;
}
function vc(e, t) {
  do {
    var n = re;
    try {
      if ((Mi(), (Wr.current = ml), hl)) {
        for (var r = q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        hl = !1;
      }
      if (
        ((Wt = 0),
        (ie = le = q = null),
        (Zn = !1),
        (pr = 0),
        (Wi.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (vr = t), (re = null);
        break;
      }
      e: {
        var o = e,
          u = n.return,
          i = n,
          s = t;
        if (
          ((t = ce),
          (i.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            f = i,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue),
                (f.memoizedState = m.memoizedState),
                (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var S = qu(u);
          if (S !== null) {
            (S.flags &= -257),
              Ju(S, u, i, o, t),
              S.mode & 1 && Zu(o, a, t),
              (t = S),
              (s = a);
            var g = t.updateQueue;
            if (g === null) {
              var N = new Set();
              N.add(s), (t.updateQueue = N);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Zu(o, a, t), Zi();
              break e;
            }
            s = Error(E(426));
          }
        } else if (X && i.mode & 1) {
          var I = qu(u);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              Ju(I, u, i, o, t),
              Ti(kn(s, i));
            break e;
          }
        }
        (o = s = kn(s, i)),
          oe !== 4 && (oe = 2),
          Jn === null ? (Jn = [o]) : Jn.push(o),
          (o = u);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = ba(o, s, t);
              Qu(o, p);
              break e;
            case 1:
              i = s;
              var c = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Nt === null || !Nt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = ec(o, i, t);
                Qu(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      wc(n);
    } catch (j) {
      (t = j), re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function yc() {
  var e = vl.current;
  return (vl.current = ml), e === null ? ml : e;
}
function Zi() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    se === null || (!(Kt & 268435455) && !(zl & 268435455)) || yt(se, ce);
}
function wl(e, t) {
  var n = A;
  A |= 2;
  var r = yc();
  (se !== e || ce !== t) && ((nt = null), Bt(e, t));
  do
    try {
      Qd();
      break;
    } catch (l) {
      vc(e, l);
    }
  while (!0);
  if ((Mi(), (A = n), (vl.current = r), re !== null)) throw Error(E(261));
  return (se = null), (ce = 0), oe;
}
function Qd() {
  for (; re !== null; ) gc(re);
}
function Wd() {
  for (; re !== null && !vf(); ) gc(re);
}
function gc(e) {
  var t = Sc(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? wc(e) : (re = t),
    (Wi.current = null);
}
function wc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ud(n, t)), n !== null)) {
        (n.flags &= 32767), (re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (re = null);
        return;
      }
    } else if (((n = Fd(n, t, je)), n !== null)) {
      re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Ft(e, t, n) {
  var r = B,
    l = Re.transition;
  try {
    (Re.transition = null), (B = 1), Kd(e, t, n, r);
  } finally {
    (Re.transition = l), (B = r);
  }
  return null;
}
function Kd(e, t, n, r) {
  do vn();
  while (wt !== null);
  if (A & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (jf(e, o),
    e === se && ((re = se = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fr ||
      ((Fr = !0),
      kc(el, function () {
        return vn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Re.transition), (Re.transition = null);
    var u = B;
    B = 1;
    var i = A;
    (A |= 4),
      (Wi.current = null),
      $d(e, n),
      pc(n, e),
      dd(Uo),
      (nl = !!Fo),
      (Uo = Fo = null),
      (e.current = n),
      Bd(n),
      yf(),
      (A = i),
      (B = u),
      (Re.transition = o);
  } else e.current = n;
  if (
    (Fr && ((Fr = !1), (wt = e), (gl = l)),
    (o = e.pendingLanes),
    o === 0 && (Nt = null),
    xf(n.stateNode),
    Ne(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (yl) throw ((yl = !1), (e = li), (li = null), e);
  return (
    gl & 1 && e.tag !== 0 && vn(),
    (o = e.pendingLanes),
    o & 1 ? (e === oi ? bn++ : ((bn = 0), (oi = e))) : (bn = 0),
    Mt(),
    null
  );
}
function vn() {
  if (wt !== null) {
    var e = bs(gl),
      t = Re.transition,
      n = B;
    try {
      if (((Re.transition = null), (B = 16 > e ? 16 : e), wt === null))
        var r = !1;
      else {
        if (((e = wt), (wt = null), (gl = 0), A & 6)) throw Error(E(331));
        var l = A;
        for (A |= 4, P = e.current; P !== null; ) {
          var o = P,
            u = o.child;
          if (P.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var a = i[s];
                for (P = a; P !== null; ) {
                  var f = P;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qn(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (P = d);
                  else
                    for (; P !== null; ) {
                      f = P;
                      var m = f.sibling,
                        S = f.return;
                      if ((cc(f), f === a)) {
                        P = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (P = m);
                        break;
                      }
                      P = S;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var N = g.child;
                if (N !== null) {
                  g.child = null;
                  do {
                    var I = N.sibling;
                    (N.sibling = null), (N = I);
                  } while (N !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (P = u);
          else
            e: for (; P !== null; ) {
              if (((o = P), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qn(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (P = p);
                break e;
              }
              P = o.return;
            }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          u = P;
          var h = u.child;
          if (u.subtreeFlags & 2064 && h !== null) (h.return = u), (P = h);
          else
            e: for (u = c; P !== null; ) {
              if (((i = P), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tl(9, i);
                  }
                } catch (j) {
                  te(i, i.return, j);
                }
              if (i === u) {
                P = null;
                break e;
              }
              var k = i.sibling;
              if (k !== null) {
                (k.return = i.return), (P = k);
                break e;
              }
              P = i.return;
            }
        }
        if (
          ((A = l), Mt(), Je && typeof Je.onPostCommitFiberRoot == "function")
        )
          try {
            Je.onPostCommitFiberRoot(kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Re.transition = t);
    }
  }
  return !1;
}
function fs(e, t, n) {
  (t = kn(n, t)),
    (t = ba(e, t, 1)),
    (e = Ct(e, t, 1)),
    (t = ye()),
    e !== null && (gr(e, 1, t), Ne(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) fs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Nt === null || !Nt.has(r)))
        ) {
          (e = kn(n, e)),
            (e = ec(t, e, 1)),
            (t = Ct(t, e, 1)),
            (e = ye()),
            t !== null && (gr(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Yd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ce & n) === n &&
      (oe === 4 || (oe === 3 && (ce & 130023424) === ce && 500 > ne() - Yi)
        ? Bt(e, 0)
        : (Ki |= n)),
    Ne(e, t);
}
function xc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _r), (_r <<= 1), !(_r & 130023424) && (_r = 4194304))
      : (t = 1));
  var n = ye();
  (e = at(e, t)), e !== null && (gr(e, t, n), Ne(e, n));
}
function Gd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xc(e, n);
}
function Xd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), xc(e, n);
}
var Sc;
Sc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), Dd(e, t, n);
      ke = !!(e.flags & 131072);
    }
  else (ke = !1), X && t.flags & 1048576 && Na(t, al, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yr(e, t), (e = t.pendingProps);
      var l = gn(t, me.current);
      mn(t, n), (l = $i(null, t, r, e, l, n));
      var o = Bi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ce(r) ? ((o = !0), ul(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ri(t),
            (l.updater = Ol),
            (t.stateNode = l),
            (l._reactInternals = t),
            Yo(t, r, e, n),
            (t = Zo(null, t, r, !0, o, n)))
          : ((t.tag = 0), X && o && Pi(t), ve(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = qd(r)),
          (e = Ve(r, e)),
          l)
        ) {
          case 0:
            t = Xo(null, t, r, e, n);
            break e;
          case 1:
            t = ts(null, t, r, e, n);
            break e;
          case 11:
            t = bu(null, t, r, e, n);
            break e;
          case 14:
            t = es(null, t, r, Ve(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        Xo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        ts(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((lc(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          za(e, t),
          dl(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = kn(Error(E(423)), t)), (t = ns(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = kn(Error(E(424)), t)), (t = ns(e, t, r, n, l));
            break e;
          } else
            for (
              _e = Et(t.stateNode.containerInfo.firstChild),
                Pe = t,
                X = !0,
                Qe = null,
                n = Oa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ma(t),
        e === null && Qo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (u = l.children),
        Ao(r, l) ? (u = null) : o !== null && Ao(r, o) && (t.flags |= 32),
        rc(e, t),
        ve(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && Qo(t), null;
    case 13:
      return oc(e, t, n);
    case 4:
      return (
        Di(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        bu(e, t, r, l, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (u = l.value),
          V(cl, r._currentValue),
          (r._currentValue = u),
          o !== null)
        )
          if (Ye(o.value, u)) {
            if (o.children === l.children && !Ee.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var i = o.dependencies;
              if (i !== null) {
                u = o.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = it(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var f = a.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Wo(o.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((u = o.return), u === null)) throw Error(E(341));
                (u.lanes |= n),
                  (i = u.alternate),
                  i !== null && (i.lanes |= n),
                  Wo(u, n, t),
                  (u = o.sibling);
              } else u = o.child;
              if (u !== null) u.return = o;
              else
                for (u = o; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((o = u.sibling), o !== null)) {
                    (o.return = u.return), (u = o);
                    break;
                  }
                  u = u.return;
                }
              o = u;
            }
        ve(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        mn(t, n),
        (l = De(l)),
        (r = r(l)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ve(r, t.pendingProps)),
        (l = Ve(r.type, l)),
        es(e, t, r, l, n)
      );
    case 15:
      return tc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ve(r, l)),
        Yr(e, t),
        (t.tag = 1),
        Ce(r) ? ((e = !0), ul(t)) : (e = !1),
        mn(t, n),
        Ja(t, r, l),
        Yo(t, r, l, n),
        Zo(null, t, r, !0, e, n)
      );
    case 19:
      return ic(e, t, n);
    case 22:
      return nc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function kc(e, t) {
  return Xs(e, t);
}
function Zd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, r) {
  return new Zd(e, t, n, r);
}
function qi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qd(e) {
  if (typeof e == "function") return qi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vi)) return 11;
    if (e === yi) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zr(e, t, n, r, l, o) {
  var u = 2;
  if (((r = e), typeof e == "function")) qi(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case bt:
        return Vt(n.children, l, o, t);
      case mi:
        (u = 8), (l |= 8);
        break;
      case yo:
        return (
          (e = Ie(12, n, t, l | 2)), (e.elementType = yo), (e.lanes = o), e
        );
      case go:
        return (e = Ie(13, n, t, l)), (e.elementType = go), (e.lanes = o), e;
      case wo:
        return (e = Ie(19, n, t, l)), (e.elementType = wo), (e.lanes = o), e;
      case Ms:
        return Ml(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ts:
              u = 10;
              break e;
            case zs:
              u = 9;
              break e;
            case vi:
              u = 11;
              break e;
            case yi:
              u = 14;
              break e;
            case ht:
              (u = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ie(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Vt(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function Ml(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = Ms),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function po(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function ho(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Jd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yl(0)),
    (this.expirationTimes = Yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ji(e, t, n, r, l, o, u, i, s) {
  return (
    (e = new Jd(e, t, n, i, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ie(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ri(o),
    e
  );
}
function bd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Jt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ec(e) {
  if (!e) return Ot;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ce(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ce(n)) return Ea(e, n, t);
  }
  return t;
}
function Cc(e, t, n, r, l, o, u, i, s) {
  return (
    (e = Ji(n, r, !0, e, l, o, u, i, s)),
    (e.context = Ec(null)),
    (n = e.current),
    (r = ye()),
    (l = jt(n)),
    (o = it(r, l)),
    (o.callback = t ?? null),
    Ct(n, o, l),
    (e.current.lanes = l),
    gr(e, l, r),
    Ne(e, r),
    e
  );
}
function Ll(e, t, n, r) {
  var l = t.current,
    o = ye(),
    u = jt(l);
  return (
    (n = Ec(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(o, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ct(l, t, u)),
    e !== null && (Ke(e, l, u, o), Qr(e, l, u)),
    u
  );
}
function xl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ds(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bi(e, t) {
  ds(e, t), (e = e.alternate) && ds(e, t);
}
function ep() {
  return null;
}
var Nc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function eu(e) {
  this._internalRoot = e;
}
Il.prototype.render = eu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Ll(e, t, null, null);
};
Il.prototype.unmount = eu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yt(function () {
      Ll(null, e, null, null);
    }),
      (t[st] = null);
  }
};
function Il(e) {
  this._internalRoot = e;
}
Il.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = na();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++);
    vt.splice(n, 0, e), n === 0 && la(e);
  }
};
function tu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ps() {}
function tp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = xl(u);
        o.call(a);
      };
    }
    var u = Cc(t, r, e, 0, null, !1, !1, "", ps);
    return (
      (e._reactRootContainer = u),
      (e[st] = u.current),
      sr(e.nodeType === 8 ? e.parentNode : e),
      Yt(),
      u
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var a = xl(s);
      i.call(a);
    };
  }
  var s = Ji(e, 0, !1, null, null, !1, !1, "", ps);
  return (
    (e._reactRootContainer = s),
    (e[st] = s.current),
    sr(e.nodeType === 8 ? e.parentNode : e),
    Yt(function () {
      Ll(t, s, n, r);
    }),
    s
  );
}
function Dl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var s = xl(u);
        i.call(s);
      };
    }
    Ll(t, u, e, l);
  } else u = tp(n, t, e, l, r);
  return xl(u);
}
ea = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hn(t.pendingLanes);
        n !== 0 &&
          (xi(t, n | 1), Ne(t, ne()), !(A & 6) && ((En = ne() + 500), Mt()));
      }
      break;
    case 13:
      Yt(function () {
        var r = at(e, 1);
        if (r !== null) {
          var l = ye();
          Ke(r, e, 1, l);
        }
      }),
        bi(e, 1);
  }
};
Si = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ke(t, e, 134217728, n);
    }
    bi(e, 134217728);
  }
};
ta = function (e) {
  if (e.tag === 13) {
    var t = jt(e),
      n = at(e, t);
    if (n !== null) {
      var r = ye();
      Ke(n, e, t, r);
    }
    bi(e, t);
  }
};
na = function () {
  return B;
};
ra = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Oo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ko(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = jl(r);
            if (!l) throw Error(E(90));
            Is(r), ko(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ds(e, n);
      break;
    case "select":
      (t = n.value), t != null && fn(e, !!n.multiple, t, !1);
  }
};
Hs = Gi;
Qs = Yt;
var np = { usingClientEntryPoint: !1, Events: [xr, rn, jl, Bs, Vs, Gi] },
  $n = {
    findFiberByHostInstance: Ut,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  rp = {
    bundleType: $n.bundleType,
    version: $n.version,
    rendererPackageName: $n.rendererPackageName,
    rendererConfig: $n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ys(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $n.findFiberByHostInstance || ep,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ur.isDisabled && Ur.supportsFiber)
    try {
      (kl = Ur.inject(rp)), (Je = Ur);
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
Te.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tu(t)) throw Error(E(200));
  return bd(e, t, null, n);
};
Te.createRoot = function (e, t) {
  if (!tu(e)) throw Error(E(299));
  var n = !1,
    r = "",
    l = Nc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ji(e, 1, !1, null, null, n, !1, r, l)),
    (e[st] = t.current),
    sr(e.nodeType === 8 ? e.parentNode : e),
    new eu(t)
  );
};
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Ys(t)), (e = e === null ? null : e.stateNode), e;
};
Te.flushSync = function (e) {
  return Yt(e);
};
Te.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(E(200));
  return Dl(null, e, t, !0, n);
};
Te.hydrateRoot = function (e, t, n) {
  if (!tu(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    u = Nc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = Cc(t, null, e, 1, n ?? null, l, !1, o, u)),
    (e[st] = t.current),
    sr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Il(t);
};
Te.render = function (e, t, n) {
  if (!Rl(t)) throw Error(E(200));
  return Dl(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Yt(function () {
        Dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[st] = null);
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = Gi;
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Dl(e, t, n, !1, r);
};
Te.version = "18.3.1-next-f1338f8080-20240426";
function jc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc);
    } catch (e) {
      console.error(e);
    }
}
jc(), (js.exports = Te);
var lp = js.exports,
  _c,
  hs = lp;
(_c = hs.createRoot), hs.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var op = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ip = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Zt = (e, t) => {
    const n = ue.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: u,
          className: i = "",
          children: s,
          ...a
        },
        f
      ) =>
        ue.createElement(
          "svg",
          {
            ref: f,
            ...op,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: u ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${ip(e)}`, i].join(" "),
            ...a,
          },
          [
            ...t.map(([d, m]) => ue.createElement(d, m)),
            ...(Array.isArray(s) ? s : [s]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const up = Zt("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = Zt("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ap = Zt("Calculator", [
  [
    "rect",
    { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" },
  ],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cp = Zt("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fp = Zt("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dp = Zt("Triangle", [
  [
    "path",
    {
      d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "14u9p9",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pp = Zt("Trophy", [
    ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
    ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    [
      "path",
      {
        d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
        key: "1nw9bq",
      },
    ],
    [
      "path",
      {
        d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
        key: "1np0yb",
      },
    ],
    ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
  ]),
  hp = () => {
    const [e, t] = ue.useState({ a: "", b: "", c: "", A: "", B: "", C: "" }),
      [n, r] = ue.useState(""),
      l = (i) => {
        const { name: s, value: a } = i.target;
        t((f) => ({ ...f, [s]: a }));
      },
      o = () => {
        try {
          const i = {
            a: parseFloat(e.a),
            b: parseFloat(e.b),
            c: parseFloat(e.c),
            A: parseFloat(e.A),
            B: parseFloat(e.B),
            C: parseFloat(e.C),
          };
          let s = "";
          const a = [e.a, e.b, e.c].filter((d) => d !== "").length,
            f = [e.A, e.B, e.C].filter((d) => d !== "").length;
          if (a + f < 3)
            s = "Se necesitan al menos 3 valores para resolver el triángulo.";
          else if (a === 3) {
            const d = (i.a * i.a + i.b * i.b - i.c * i.c) / (2 * i.a * i.b);
            s = `Usando la ley del coseno:
Ángulo C = ${(Math.acos(d) * (180 / Math.PI)).toFixed(2)}°`;
          } else
            a === 2 &&
              f === 1 &&
              (s = "Se puede resolver usando la ley del seno.");
          r(s);
        } catch {
          r("Error en los cálculos. Verifica los valores ingresados.");
        }
      },
      u = () => {
        t({ a: "", b: "", c: "", A: "", B: "", C: "" }), r("");
      };
    return v.jsxs("div", {
      className: "space-y-6",
      children: [
        v.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            v.jsxs("div", {
              className: "space-y-4",
              children: [
                v.jsx("h3", {
                  className: "text-xl font-semibold text-gray-800",
                  children: "Lados",
                }),
                v.jsx("div", {
                  className: "space-y-3",
                  children: ["a", "b", "c"].map((i) =>
                    v.jsxs(
                      "div",
                      {
                        className: "flex items-center",
                        children: [
                          v.jsxs("label", {
                            className: "w-24 text-gray-700",
                            children: ["Lado ", i, ":"],
                          }),
                          v.jsx("input", {
                            type: "number",
                            name: i,
                            value: e[i],
                            onChange: l,
                            className:
                              "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500",
                            placeholder: "Longitud",
                          }),
                        ],
                      },
                      i
                    )
                  ),
                }),
              ],
            }),
            v.jsxs("div", {
              className: "space-y-4",
              children: [
                v.jsx("h3", {
                  className: "text-xl font-semibold text-gray-800",
                  children: "Ángulos",
                }),
                v.jsx("div", {
                  className: "space-y-3",
                  children: ["A", "B", "C"].map((i) =>
                    v.jsxs(
                      "div",
                      {
                        className: "flex items-center",
                        children: [
                          v.jsxs("label", {
                            className: "w-24 text-gray-700",
                            children: ["Ángulo ", i, ":"],
                          }),
                          v.jsx("input", {
                            type: "number",
                            name: i,
                            value: e[i],
                            onChange: l,
                            className:
                              "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500",
                            placeholder: "Grados",
                            min: "0",
                            max: "180",
                          }),
                        ],
                      },
                      i
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className: "flex space-x-4",
          children: [
            v.jsx("button", {
              onClick: o,
              className:
                "flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors",
              children: "Calcular",
            }),
            v.jsxs("button", {
              onClick: u,
              className:
                "px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center",
              children: [v.jsx(fp, { className: "w-5 h-5 mr-2" }), "Reiniciar"],
            }),
          ],
        }),
        n &&
          v.jsxs("div", {
            className: "mt-6 p-4 bg-gray-50 rounded-lg",
            children: [
              v.jsx("h4", {
                className: "text-lg font-semibold text-gray-800 mb-2",
                children: "Resultados:",
              }),
              v.jsx("pre", {
                className: "whitespace-pre-wrap text-gray-700",
                children: n,
              }),
            ],
          }),
      ],
    });
  },
  mp = () =>
    v.jsxs("div", {
      className: "space-y-8",
      children: [
        v.jsxs("section", {
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold text-gray-800 mb-4",
              children: "Ley del Seno",
            }),
            v.jsxs("div", {
              className: "bg-blue-50 p-6 rounded-lg",
              children: [
                v.jsx("p", {
                  className: "text-lg mb-4",
                  children:
                    "La ley del seno establece que en cualquier triángulo, la relación entre el seno de un ángulo y el lado opuesto es constante:",
                }),
                v.jsx("div", {
                  className: "bg-white p-4 rounded-lg shadow-sm text-center",
                  children: v.jsx("p", {
                    className: "text-xl font-mono",
                    children: "a/sin(A) = b/sin(B) = c/sin(C) = 2R",
                  }),
                }),
                v.jsx("p", {
                  className: "mt-4 text-gray-600",
                  children:
                    "Donde R es el radio del círculo circunscrito al triángulo.",
                }),
              ],
            }),
          ],
        }),
        v.jsxs("section", {
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold text-gray-800 mb-4",
              children: "Ley del Coseno",
            }),
            v.jsxs("div", {
              className: "bg-indigo-50 p-6 rounded-lg",
              children: [
                v.jsx("p", {
                  className: "text-lg mb-4",
                  children:
                    "La ley del coseno relaciona un lado de un triángulo con los otros dos lados y el ángulo comprendido entre ellos:",
                }),
                v.jsx("div", {
                  className: "bg-white p-4 rounded-lg shadow-sm text-center",
                  children: v.jsx("p", {
                    className: "text-xl font-mono",
                    children: "c² = a² + b² - 2ab·cos(C)",
                  }),
                }),
                v.jsx("p", {
                  className: "mt-4 text-gray-600",
                  children:
                    "Esta ley es una generalización del teorema de Pitágoras.",
                }),
              ],
            }),
          ],
        }),
        v.jsxs("section", {
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold text-gray-800 mb-4",
              children: "Ley de la Tangente",
            }),
            v.jsxs("div", {
              className: "bg-purple-50 p-6 rounded-lg",
              children: [
                v.jsx("p", {
                  className: "text-lg mb-4",
                  children:
                    "La ley de la tangente relaciona los lados y ángulos de un triángulo:",
                }),
                v.jsx("div", {
                  className: "bg-white p-4 rounded-lg shadow-sm text-center",
                  children: v.jsx("p", {
                    className: "text-xl font-mono",
                    children: "(a+b)/(a-b) = tan((A+B)/2)/tan((A-B)/2)",
                  }),
                }),
                v.jsx("p", {
                  className: "mt-4 text-gray-600",
                  children:
                    "Esta ley es útil cuando se conocen dos lados y un ángulo opuesto.",
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className: "mt-8 p-4 bg-yellow-50 rounded-lg",
          children: [
            v.jsx("h3", {
              className: "text-lg font-semibold text-gray-800 mb-2",
              children: "💡 Tip de Estudio",
            }),
            v.jsx("p", {
              className: "text-gray-700",
              children:
                "Practica con la calculadora interactiva para reforzar estos conceptos. Intenta resolver problemas variando los valores de lados y ángulos.",
            }),
          ],
        }),
      ],
    }),
  vp = ({ title: e, imageUrl: t, problem: n, solution: r }) =>
    v.jsxs("div", {
      className: "bg-white rounded-lg shadow-md overflow-hidden",
      children: [
        v.jsx("img", { src: t, alt: e, className: "w-full h-48 object-cover" }),
        v.jsxs("div", {
          className: "p-6",
          children: [
            v.jsx("h3", {
              className: "text-xl font-bold text-gray-800 mb-3",
              children: e,
            }),
            v.jsxs("div", {
              className: "space-y-4",
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("h4", {
                      className: "font-semibold text-gray-700 mb-2",
                      children: "Problema:",
                    }),
                    v.jsx("p", { className: "text-gray-600", children: n }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("h4", {
                      className: "font-semibold text-gray-700 mb-2",
                      children: "Solución:",
                    }),
                    v.jsx("p", { className: "text-gray-600", children: r }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  yp = () => {
    const e = [
      {
        title: "El Faro y el Barco",
        imageUrl:
          "https://images.unsplash.com/photo-1577724513470-8a509a8ca44b?auto=format&fit=crop&q=80&w=800",
        problem:
          "Un faro observa un barco con un ángulo de elevación de 30°. Si el faro tiene una altura de 50 metros, ¿a qué distancia está el barco de la base del faro?",
        solution:
          "Usando tangente: distancia = altura / tan(30°) = 50 / 0.577 ≈ 86.6 metros",
      },
      {
        title: "La Torre Inclinada",
        imageUrl:
          "https://images.unsplash.com/photo-1603714790006-0e57cc4e3c91?auto=format&fit=crop&q=80&w=800",
        problem:
          "Una torre de 20 metros está inclinada formando un ángulo de 75° con el suelo. ¿Cuál es la distancia desde la punta de la torre hasta el suelo?",
        solution:
          "Usando ley del seno: distancia = 20 / sin(75°) ≈ 20.7 metros",
      },
      {
        title: "El Puente Colgante",
        imageUrl:
          "https://images.unsplash.com/photo-1624891571802-7029767287d4?auto=format&fit=crop&q=80&w=800",
        problem:
          "Un puente colgante forma un triángulo con sus cables. Si la distancia entre los postes es de 100m y los cables miden 60m cada uno, ¿cuál es el ángulo que forman los cables con el suelo?",
        solution:
          "Usando ley del coseno: ángulo = arccos((2(60²) - 100²)/(2(60)(60))) ≈ 56.4°",
      },
    ];
    return v.jsxs("div", {
      className: "space-y-8",
      children: [
        v.jsx("h2", {
          className: "text-2xl font-bold text-gray-800 mb-6",
          children: "Ejemplos Prácticos",
        }),
        v.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: e.map((t, n) => v.jsx(vp, { ...t }, n)),
        }),
      ],
    });
  },
  gp = ({ onLogin: e }) => {
    const [t, n] = ue.useState(""),
      r = (l) => {
        l.preventDefault(), t.trim() && e({ name: t.trim(), score: 0 });
      };
    return v.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center",
      children: v.jsxs("div", {
        className: "bg-white p-8 rounded-xl shadow-lg max-w-md w-full",
        children: [
          v.jsxs("div", {
            className: "text-center mb-8",
            children: [
              v.jsx("h1", {
                className: "text-3xl font-bold text-gray-900 mb-2",
                children: "Bienvenido a Trigonautas",
              }),
              v.jsx("p", {
                className: "text-gray-600",
                children: "Ingresa tu nombre para comenzar la aventura",
              }),
            ],
          }),
          v.jsxs("form", {
            onSubmit: r,
            className: "space-y-6",
            children: [
              v.jsxs("div", {
                children: [
                  v.jsx("label", {
                    htmlFor: "name",
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: "Nombre",
                  }),
                  v.jsx("input", {
                    type: "text",
                    id: "name",
                    value: t,
                    onChange: (l) => n(l.target.value),
                    className:
                      "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                    placeholder: "Ingresa tu nombre",
                    required: !0,
                  }),
                ],
              }),
              v.jsx("button", {
                type: "submit",
                className:
                  "w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors",
                children: "Comenzar",
              }),
            ],
          }),
        ],
      }),
    });
  };
var Pc = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(ue);
  })(typeof self < "u" ? self : Tc, function (n) {
    return (function (r) {
      var l = {};
      function o(u) {
        if (l[u]) return l[u].exports;
        var i = (l[u] = { i: u, l: !1, exports: {} });
        return r[u].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
      }
      return (
        (o.m = r),
        (o.c = l),
        (o.d = function (u, i, s) {
          o.o(u, i) || Object.defineProperty(u, i, { enumerable: !0, get: s });
        }),
        (o.r = function (u) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(u, "__esModule", { value: !0 });
        }),
        (o.t = function (u, i) {
          if (
            (1 & i && (u = o(u)),
            8 & i || (4 & i && typeof u == "object" && u && u.__esModule))
          )
            return u;
          var s = Object.create(null);
          if (
            (o.r(s),
            Object.defineProperty(s, "default", { enumerable: !0, value: u }),
            2 & i && typeof u != "string")
          )
            for (var a in u)
              o.d(
                s,
                a,
                function (f) {
                  return u[f];
                }.bind(null, a)
              );
          return s;
        }),
        (o.n = function (u) {
          var i =
            u && u.__esModule
              ? function () {
                  return u.default;
                }
              : function () {
                  return u;
                };
          return o.d(i, "a", i), i;
        }),
        (o.o = function (u, i) {
          return Object.prototype.hasOwnProperty.call(u, i);
        }),
        (o.p = ""),
        o((o.s = 2))
      );
    })([
      function (r, l) {
        r.exports = n;
      },
      function (r, l, o) {
        var u = {
          linear: function (i, s, a, f) {
            return ((a - s) * i) / f + s;
          },
          easeInQuad: function (i, s, a, f) {
            return (a - s) * (i /= f) * i + s;
          },
          easeOutQuad: function (i, s, a, f) {
            return -(a - s) * (i /= f) * (i - 2) + s;
          },
          easeInOutQuad: function (i, s, a, f) {
            var d = a - s;
            return (i /= f / 2) < 1
              ? (d / 2) * i * i + s
              : (-d / 2) * (--i * (i - 2) - 1) + s;
          },
          easeInCubic: function (i, s, a, f) {
            return (a - s) * (i /= f) * i * i + s;
          },
          easeOutCubic: function (i, s, a, f) {
            return (a - s) * ((i = i / f - 1) * i * i + 1) + s;
          },
          easeInOutCubic: function (i, s, a, f) {
            var d = a - s;
            return (i /= f / 2) < 1
              ? (d / 2) * i * i * i + s
              : (d / 2) * ((i -= 2) * i * i + 2) + s;
          },
          easeInQuart: function (i, s, a, f) {
            return (a - s) * (i /= f) * i * i * i + s;
          },
          easeOutQuart: function (i, s, a, f) {
            return -(a - s) * ((i = i / f - 1) * i * i * i - 1) + s;
          },
          easeInOutQuart: function (i, s, a, f) {
            var d = a - s;
            return (i /= f / 2) < 1
              ? (d / 2) * i * i * i * i + s
              : (-d / 2) * ((i -= 2) * i * i * i - 2) + s;
          },
          easeInQuint: function (i, s, a, f) {
            return (a - s) * (i /= f) * i * i * i * i + s;
          },
          easeOutQuint: function (i, s, a, f) {
            return (a - s) * ((i = i / f - 1) * i * i * i * i + 1) + s;
          },
          easeInOutQuint: function (i, s, a, f) {
            var d = a - s;
            return (i /= f / 2) < 1
              ? (d / 2) * i * i * i * i * i + s
              : (d / 2) * ((i -= 2) * i * i * i * i + 2) + s;
          },
          easeInSine: function (i, s, a, f) {
            var d = a - s;
            return -d * Math.cos((i / f) * (Math.PI / 2)) + d + s;
          },
          easeOutSine: function (i, s, a, f) {
            return (a - s) * Math.sin((i / f) * (Math.PI / 2)) + s;
          },
          easeInOutSine: function (i, s, a, f) {
            return (-(a - s) / 2) * (Math.cos((Math.PI * i) / f) - 1) + s;
          },
          easeInExpo: function (i, s, a, f) {
            return i == 0 ? s : (a - s) * Math.pow(2, 10 * (i / f - 1)) + s;
          },
          easeOutExpo: function (i, s, a, f) {
            var d = a - s;
            return i == f ? s + d : d * (1 - Math.pow(2, (-10 * i) / f)) + s;
          },
          easeInOutExpo: function (i, s, a, f) {
            var d = a - s;
            return i === 0
              ? s
              : i === f
              ? s + d
              : (i /= f / 2) < 1
              ? (d / 2) * Math.pow(2, 10 * (i - 1)) + s
              : (d / 2) * (2 - Math.pow(2, -10 * --i)) + s;
          },
          easeInCirc: function (i, s, a, f) {
            return -(a - s) * (Math.sqrt(1 - (i /= f) * i) - 1) + s;
          },
          easeOutCirc: function (i, s, a, f) {
            return (a - s) * Math.sqrt(1 - (i = i / f - 1) * i) + s;
          },
          easeInOutCirc: function (i, s, a, f) {
            var d = a - s;
            return (i /= f / 2) < 1
              ? (-d / 2) * (Math.sqrt(1 - i * i) - 1) + s
              : (d / 2) * (Math.sqrt(1 - (i -= 2) * i) + 1) + s;
          },
          easeInElastic: function (i, s, a, f) {
            var d,
              m,
              S,
              g = a - s;
            return (
              (S = 1.70158),
              i === 0
                ? s
                : (i /= f) == 1
                ? s + g
                : ((m = 0) || (m = 0.3 * f),
                  (d = g) < Math.abs(g)
                    ? ((d = g), (S = m / 4))
                    : (S = (m / (2 * Math.PI)) * Math.asin(g / d)),
                  -d *
                    Math.pow(2, 10 * (i -= 1)) *
                    Math.sin(((i * f - S) * (2 * Math.PI)) / m) +
                    s)
            );
          },
          easeOutElastic: function (i, s, a, f) {
            var d,
              m,
              S,
              g = a - s;
            return (
              (S = 1.70158),
              i === 0
                ? s
                : (i /= f) == 1
                ? s + g
                : ((m = 0) || (m = 0.3 * f),
                  (d = g) < Math.abs(g)
                    ? ((d = g), (S = m / 4))
                    : (S = (m / (2 * Math.PI)) * Math.asin(g / d)),
                  d *
                    Math.pow(2, -10 * i) *
                    Math.sin(((i * f - S) * (2 * Math.PI)) / m) +
                    g +
                    s)
            );
          },
          easeInOutElastic: function (i, s, a, f) {
            var d,
              m,
              S,
              g = a - s;
            return (
              (S = 1.70158),
              i === 0
                ? s
                : (i /= f / 2) == 2
                ? s + g
                : ((m = 0) || (m = f * 0.44999999999999996),
                  (d = g) < Math.abs(g)
                    ? ((d = g), (S = m / 4))
                    : (S = (m / (2 * Math.PI)) * Math.asin(g / d)),
                  i < 1
                    ? d *
                        Math.pow(2, 10 * (i -= 1)) *
                        Math.sin(((i * f - S) * (2 * Math.PI)) / m) *
                        -0.5 +
                      s
                    : d *
                        Math.pow(2, -10 * (i -= 1)) *
                        Math.sin(((i * f - S) * (2 * Math.PI)) / m) *
                        0.5 +
                      g +
                      s)
            );
          },
          easeInBack: function (i, s, a, f, d) {
            return (
              d === void 0 && (d = 1.70158),
              (a - s) * (i /= f) * i * ((d + 1) * i - d) + s
            );
          },
          easeOutBack: function (i, s, a, f, d) {
            return (
              d === void 0 && (d = 1.70158),
              (a - s) * ((i = i / f - 1) * i * ((d + 1) * i + d) + 1) + s
            );
          },
          easeInOutBack: function (i, s, a, f, d) {
            var m = a - s;
            return (
              d === void 0 && (d = 1.70158),
              (i /= f / 2) < 1
                ? (m / 2) * (i * i * ((1 + (d *= 1.525)) * i - d)) + s
                : (m / 2) * ((i -= 2) * i * ((1 + (d *= 1.525)) * i + d) + 2) +
                  s
            );
          },
          easeInBounce: function (i, s, a, f) {
            var d = a - s;
            return d - u.easeOutBounce(f - i, 0, d, f) + s;
          },
          easeOutBounce: function (i, s, a, f) {
            var d = a - s;
            return (i /= f) < 0.36363636363636365
              ? d * (7.5625 * i * i) + s
              : i < 0.7272727272727273
              ? d * (7.5625 * (i -= 0.5454545454545454) * i + 0.75) + s
              : i < 0.9090909090909091
              ? d * (7.5625 * (i -= 0.8181818181818182) * i + 0.9375) + s
              : d * (7.5625 * (i -= 0.9545454545454546) * i + 0.984375) + s;
          },
          easeInOutBounce: function (i, s, a, f) {
            var d = a - s;
            return i < f / 2
              ? 0.5 * u.easeInBounce(2 * i, 0, d, f) + s
              : 0.5 * u.easeOutBounce(2 * i - f, 0, d, f) + 0.5 * d + s;
          },
        };
        r.exports = u;
      },
      function (r, l, o) {
        r.exports = o(3);
      },
      function (r, l, o) {
        o.r(l),
          o.d(l, "ReactConfetti", function () {
            return Rt;
          });
        var u,
          i,
          s = o(0),
          a = o.n(s),
          f = o(1),
          d = o.n(f);
        function m(y, x) {
          return y + Math.random() * (x - y);
        }
        function S(y, x) {
          for (var C = 0; C < x.length; C++) {
            var w = x[C];
            (w.enumerable = w.enumerable || !1),
              (w.configurable = !0),
              "value" in w && (w.writable = !0),
              Object.defineProperty(y, w.key, w);
          }
        }
        function g(y, x, C) {
          return (
            x in y
              ? Object.defineProperty(y, x, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (y[x] = C),
            y
          );
        }
        (function (y) {
          (y[(y.Circle = 0)] = "Circle"),
            (y[(y.Square = 1)] = "Square"),
            (y[(y.Strip = 2)] = "Strip");
        })(u || (u = {})),
          (function (y) {
            (y[(y.Positive = 1)] = "Positive"),
              (y[(y.Negative = -1)] = "Negative");
          })(i || (i = {}));
        var N = (function () {
          function y(w, $, O, F) {
            (function (Fl, Ul) {
              if (!(Fl instanceof Ul))
                throw new TypeError("Cannot call a class as a function");
            })(this, y),
              g(this, "context", void 0),
              g(this, "radius", void 0),
              g(this, "x", void 0),
              g(this, "y", void 0),
              g(this, "w", void 0),
              g(this, "h", void 0),
              g(this, "vx", void 0),
              g(this, "vy", void 0),
              g(this, "shape", void 0),
              g(this, "angle", void 0),
              g(this, "angularSpin", void 0),
              g(this, "color", void 0),
              g(this, "rotateY", void 0),
              g(this, "rotationDirection", void 0),
              g(this, "getOptions", void 0),
              (this.getOptions = $);
            var Q,
              ee,
              W = this.getOptions(),
              tt = W.colors,
              Ae = W.initialVelocityX,
              $e = W.initialVelocityY;
            (this.context = w),
              (this.x = O),
              (this.y = F),
              (this.w = m(5, 20)),
              (this.h = m(5, 20)),
              (this.radius = m(5, 10)),
              (this.vx =
                typeof Ae == "number" ? m(-Ae, Ae) : m(Ae.min, Ae.max)),
              (this.vy = typeof $e == "number" ? m(-$e, 0) : m($e.min, $e.max)),
              (this.shape =
                ((Q = 0),
                (ee = 2),
                Math.floor(Q + Math.random() * (ee - Q + 1)))),
              (this.angle = (m(0, 360) * Math.PI) / 180),
              (this.angularSpin = m(-0.2, 0.2)),
              (this.color = tt[Math.floor(Math.random() * tt.length)]),
              (this.rotateY = m(0, 1)),
              (this.rotationDirection = m(0, 1) ? i.Positive : i.Negative);
          }
          var x, C;
          return (
            (x = y),
            (C = [
              {
                key: "update",
                value: function () {
                  var w = this.getOptions(),
                    $ = w.gravity,
                    O = w.wind,
                    F = w.friction,
                    Q = w.opacity,
                    ee = w.drawShape;
                  (this.x += this.vx),
                    (this.y += this.vy),
                    (this.vy += $),
                    (this.vx += O),
                    (this.vx *= F),
                    (this.vy *= F),
                    this.rotateY >= 1 && this.rotationDirection === i.Positive
                      ? (this.rotationDirection = i.Negative)
                      : this.rotateY <= -1 &&
                        this.rotationDirection === i.Negative &&
                        (this.rotationDirection = i.Positive);
                  var W = 0.1 * this.rotationDirection;
                  if (
                    ((this.rotateY += W),
                    (this.angle += this.angularSpin),
                    this.context.save(),
                    this.context.translate(this.x, this.y),
                    this.context.rotate(this.angle),
                    this.context.scale(1, this.rotateY),
                    this.context.rotate(this.angle),
                    this.context.beginPath(),
                    (this.context.fillStyle = this.color),
                    (this.context.strokeStyle = this.color),
                    (this.context.globalAlpha = Q),
                    (this.context.lineCap = "round"),
                    (this.context.lineWidth = 2),
                    ee && typeof ee == "function")
                  )
                    ee.call(this, this.context);
                  else
                    switch (this.shape) {
                      case u.Circle:
                        this.context.beginPath(),
                          this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                          this.context.fill();
                        break;
                      case u.Square:
                        this.context.fillRect(
                          -this.w / 2,
                          -this.h / 2,
                          this.w,
                          this.h
                        );
                        break;
                      case u.Strip:
                        this.context.fillRect(
                          -this.w / 6,
                          -this.h / 2,
                          this.w / 3,
                          this.h
                        );
                    }
                  this.context.closePath(), this.context.restore();
                },
              },
            ]) && S(x.prototype, C),
            y
          );
        })();
        function I(y, x, C) {
          return (
            x in y
              ? Object.defineProperty(y, x, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (y[x] = C),
            y
          );
        }
        var p = function y(x, C) {
          var w = this;
          (function (O, F) {
            if (!(O instanceof F))
              throw new TypeError("Cannot call a class as a function");
          })(this, y),
            I(this, "canvas", void 0),
            I(this, "context", void 0),
            I(this, "getOptions", void 0),
            I(this, "x", 0),
            I(this, "y", 0),
            I(this, "w", 0),
            I(this, "h", 0),
            I(this, "lastNumberOfPieces", 0),
            I(this, "tweenInitTime", Date.now()),
            I(this, "particles", []),
            I(this, "particlesGenerated", 0),
            I(this, "removeParticleAt", function (O) {
              w.particles.splice(O, 1);
            }),
            I(this, "getParticle", function () {
              var O = m(w.x, w.w + w.x),
                F = m(w.y, w.h + w.y);
              return new N(w.context, w.getOptions, O, F);
            }),
            I(this, "animate", function () {
              var O = w.canvas,
                F = w.context,
                Q = w.particlesGenerated,
                ee = w.lastNumberOfPieces,
                W = w.getOptions(),
                tt = W.run,
                Ae = W.recycle,
                $e = W.numberOfPieces,
                Fl = W.debug,
                Ul = W.tweenFunction,
                Al = W.tweenDuration;
              if (!tt) return !1;
              var $l = w.particles.length,
                zn = Ae ? $l : Q,
                Bl = Date.now();
              if (zn < $e) {
                ee !== $e &&
                  ((w.tweenInitTime = Bl), (w.lastNumberOfPieces = $e));
                for (
                  var nu = w.tweenInitTime,
                    Oc = Ul(
                      Bl - nu > Al ? Al : Math.max(0, Bl - nu),
                      zn,
                      $e,
                      Al
                    ),
                    ru = Math.round(Oc - zn),
                    lu = 0;
                  lu < ru;
                  lu++
                )
                  w.particles.push(w.getParticle());
                w.particlesGenerated += ru;
              }
              return (
                Fl &&
                  ((F.font = "12px sans-serif"),
                  (F.fillStyle = "#333"),
                  (F.textAlign = "right"),
                  F.fillText(
                    "Particles: ".concat($l),
                    O.width - 10,
                    O.height - 20
                  )),
                w.particles.forEach(function (Mn, ou) {
                  Mn.update(),
                    (Mn.y > O.height ||
                      Mn.y < -100 ||
                      Mn.x > O.width + 100 ||
                      Mn.x < -100) &&
                      (Ae && zn <= $e
                        ? (w.particles[ou] = w.getParticle())
                        : w.removeParticleAt(ou));
                }),
                $l > 0 || zn < $e
              );
            }),
            (this.canvas = x);
          var $ = this.canvas.getContext("2d");
          if (!$) throw new Error("Could not get canvas context");
          (this.context = $), (this.getOptions = C);
        };
        function c(y, x) {
          var C = Object.keys(y);
          if (Object.getOwnPropertySymbols) {
            var w = Object.getOwnPropertySymbols(y);
            x &&
              (w = w.filter(function ($) {
                return Object.getOwnPropertyDescriptor(y, $).enumerable;
              })),
              C.push.apply(C, w);
          }
          return C;
        }
        function h(y) {
          for (var x = 1; x < arguments.length; x++) {
            var C = arguments[x] != null ? arguments[x] : {};
            x % 2
              ? c(Object(C), !0).forEach(function (w) {
                  j(y, w, C[w]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C))
              : c(Object(C)).forEach(function (w) {
                  Object.defineProperty(
                    y,
                    w,
                    Object.getOwnPropertyDescriptor(C, w)
                  );
                });
          }
          return y;
        }
        function k(y, x) {
          for (var C = 0; C < x.length; C++) {
            var w = x[C];
            (w.enumerable = w.enumerable || !1),
              (w.configurable = !0),
              "value" in w && (w.writable = !0),
              Object.defineProperty(y, w.key, w);
          }
        }
        function j(y, x, C) {
          return (
            x in y
              ? Object.defineProperty(y, x, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (y[x] = C),
            y
          );
        }
        var T = {
            width: typeof window < "u" ? window.innerWidth : 300,
            height: typeof window < "u" ? window.innerHeight : 200,
            numberOfPieces: 200,
            friction: 0.99,
            wind: 0,
            gravity: 0.1,
            initialVelocityX: 4,
            initialVelocityY: 10,
            colors: [
              "#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFEB3B",
              "#FFC107",
              "#FF9800",
              "#FF5722",
              "#795548",
            ],
            opacity: 1,
            debug: !1,
            tweenFunction: d.a.easeInOutQuad,
            tweenDuration: 5e3,
            recycle: !0,
            run: !0,
          },
          z = (function () {
            function y(w, $) {
              var O = this;
              (function (Q, ee) {
                if (!(Q instanceof ee))
                  throw new TypeError("Cannot call a class as a function");
              })(this, y),
                j(this, "canvas", void 0),
                j(this, "context", void 0),
                j(this, "_options", void 0),
                j(this, "generator", void 0),
                j(this, "rafId", void 0),
                j(this, "setOptionsWithDefaults", function (Q) {
                  var ee = {
                    confettiSource: { x: 0, y: 0, w: O.canvas.width, h: 0 },
                  };
                  (O._options = h(h(h({}, ee), T), Q)),
                    Object.assign(O, Q.confettiSource);
                }),
                j(this, "update", function () {
                  var Q = O.options,
                    ee = Q.run,
                    W = Q.onConfettiComplete,
                    tt = O.canvas,
                    Ae = O.context;
                  ee &&
                    ((Ae.fillStyle = "white"),
                    Ae.clearRect(0, 0, tt.width, tt.height)),
                    O.generator.animate()
                      ? (O.rafId = requestAnimationFrame(O.update))
                      : (W &&
                          typeof W == "function" &&
                          O.generator.particlesGenerated > 0 &&
                          W.call(O, O),
                        (O._options.run = !1));
                }),
                j(this, "reset", function () {
                  O.generator &&
                    O.generator.particlesGenerated > 0 &&
                    ((O.generator.particlesGenerated = 0),
                    (O.generator.particles = []),
                    (O.generator.lastNumberOfPieces = 0));
                }),
                j(this, "stop", function () {
                  (O.options = { run: !1 }),
                    O.rafId &&
                      (cancelAnimationFrame(O.rafId), (O.rafId = void 0));
                }),
                (this.canvas = w);
              var F = this.canvas.getContext("2d");
              if (!F) throw new Error("Could not get canvas context");
              (this.context = F),
                (this.generator = new p(this.canvas, function () {
                  return O.options;
                })),
                (this.options = $),
                this.update();
            }
            var x, C;
            return (
              (x = y),
              (C = [
                {
                  key: "options",
                  get: function () {
                    return this._options;
                  },
                  set: function (w) {
                    var $ = this._options && this._options.run,
                      O = this._options && this._options.recycle;
                    this.setOptionsWithDefaults(w),
                      this.generator &&
                        (Object.assign(
                          this.generator,
                          this.options.confettiSource
                        ),
                        typeof w.recycle == "boolean" &&
                          w.recycle &&
                          O === !1 &&
                          (this.generator.lastNumberOfPieces =
                            this.generator.particles.length)),
                      typeof w.run == "boolean" &&
                        w.run &&
                        $ === !1 &&
                        this.update();
                  },
                },
              ]) && k(x.prototype, C),
              y
            );
          })();
        function M(y) {
          return (
            (function (x) {
              if (Array.isArray(x)) return Pn(x);
            })(y) ||
            (function (x) {
              if (typeof Symbol < "u" && Symbol.iterator in Object(x))
                return Array.from(x);
            })(y) ||
            _n(y) ||
            (function () {
              throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function G(y) {
          return (G =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
              ? function (x) {
                  return typeof x;
                }
              : function (x) {
                  return x &&
                    typeof Symbol == "function" &&
                    x.constructor === Symbol &&
                    x !== Symbol.prototype
                    ? "symbol"
                    : typeof x;
                })(y);
        }
        function D() {
          return (D =
            Object.assign ||
            function (y) {
              for (var x = 1; x < arguments.length; x++) {
                var C = arguments[x];
                for (var w in C)
                  Object.prototype.hasOwnProperty.call(C, w) && (y[w] = C[w]);
              }
              return y;
            }).apply(this, arguments);
        }
        function xe(y, x) {
          var C = Object.keys(y);
          if (Object.getOwnPropertySymbols) {
            var w = Object.getOwnPropertySymbols(y);
            x &&
              (w = w.filter(function ($) {
                return Object.getOwnPropertyDescriptor(y, $).enumerable;
              })),
              C.push.apply(C, w);
          }
          return C;
        }
        function dt(y) {
          for (var x = 1; x < arguments.length; x++) {
            var C = arguments[x] != null ? arguments[x] : {};
            x % 2
              ? xe(Object(C), !0).forEach(function (w) {
                  Ge(y, w, C[w]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(C))
              : xe(Object(C)).forEach(function (w) {
                  Object.defineProperty(
                    y,
                    w,
                    Object.getOwnPropertyDescriptor(C, w)
                  );
                });
          }
          return y;
        }
        function Lt(y, x) {
          return (
            (function (C) {
              if (Array.isArray(C)) return C;
            })(y) ||
            (function (C, w) {
              if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(C)))) {
                var $ = [],
                  O = !0,
                  F = !1,
                  Q = void 0;
                try {
                  for (
                    var ee, W = C[Symbol.iterator]();
                    !(O = (ee = W.next()).done) &&
                    ($.push(ee.value), !w || $.length !== w);
                    O = !0
                  );
                } catch (tt) {
                  (F = !0), (Q = tt);
                } finally {
                  try {
                    O || W.return == null || W.return();
                  } finally {
                    if (F) throw Q;
                  }
                }
                return $;
              }
            })(y, x) ||
            _n(y, x) ||
            (function () {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            })()
          );
        }
        function _n(y, x) {
          if (y) {
            if (typeof y == "string") return Pn(y, x);
            var C = Object.prototype.toString.call(y).slice(8, -1);
            return (
              C === "Object" && y.constructor && (C = y.constructor.name),
              C === "Map" || C === "Set"
                ? Array.from(y)
                : C === "Arguments" ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)
                ? Pn(y, x)
                : void 0
            );
          }
        }
        function Pn(y, x) {
          (x == null || x > y.length) && (x = y.length);
          for (var C = 0, w = new Array(x); C < x; C++) w[C] = y[C];
          return w;
        }
        function On(y, x) {
          if (!(y instanceof x))
            throw new TypeError("Cannot call a class as a function");
        }
        function Tn(y, x) {
          for (var C = 0; C < x.length; C++) {
            var w = x[C];
            (w.enumerable = w.enumerable || !1),
              (w.configurable = !0),
              "value" in w && (w.writable = !0),
              Object.defineProperty(y, w.key, w);
          }
        }
        function _(y, x) {
          return (_ =
            Object.setPrototypeOf ||
            function (C, w) {
              return (C.__proto__ = w), C;
            })(y, x);
        }
        function L(y) {
          var x = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })();
          return function () {
            var C,
              w = b(y);
            if (x) {
              var $ = b(this).constructor;
              C = Reflect.construct(w, arguments, $);
            } else C = w.apply(this, arguments);
            return R(this, C);
          };
        }
        function R(y, x) {
          return !x || (G(x) !== "object" && typeof x != "function") ? H(y) : x;
        }
        function H(y) {
          if (y === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return y;
        }
        function b(y) {
          return (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (x) {
                return x.__proto__ || Object.getPrototypeOf(x);
              })(y);
        }
        function Ge(y, x, C) {
          return (
            x in y
              ? Object.defineProperty(y, x, {
                  value: C,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (y[x] = C),
            y
          );
        }
        var et = a.a.createRef(),
          It = (function (y) {
            (function (O, F) {
              if (typeof F != "function" && F !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (O.prototype = Object.create(F && F.prototype, {
                constructor: { value: O, writable: !0, configurable: !0 },
              })),
                F && _(O, F);
            })($, y);
            var x,
              C,
              w = L($);
            function $(O) {
              var F;
              On(this, $);
              for (
                var Q = arguments.length,
                  ee = new Array(Q > 1 ? Q - 1 : 0),
                  W = 1;
                W < Q;
                W++
              )
                ee[W - 1] = arguments[W];
              return (
                Ge(
                  H((F = w.call.apply(w, [this, O].concat(ee)))),
                  "canvas",
                  a.a.createRef()
                ),
                Ge(H(F), "confetti", void 0),
                (F.canvas = O.canvasRef || et),
                F
              );
            }
            return (
              (x = $),
              (C = [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.canvas.current) {
                      var O = Ue(this.props)[0];
                      this.confetti = new z(this.canvas.current, O);
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var O = Ue(this.props)[0];
                    this.confetti && (this.confetti.options = O);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.confetti && this.confetti.stop(),
                      (this.confetti = void 0);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var O = Lt(Ue(this.props), 2),
                      F = O[0],
                      Q = O[1],
                      ee = dt(
                        {
                          zIndex: 2,
                          position: "absolute",
                          pointerEvents: "none",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        },
                        Q.style
                      );
                    return a.a.createElement(
                      "canvas",
                      D(
                        { width: F.width, height: F.height, ref: this.canvas },
                        Q,
                        { style: ee }
                      )
                    );
                  },
                },
              ]) && Tn(x.prototype, C),
              $
            );
          })(s.Component);
        function Ue(y) {
          var x = {},
            C = {},
            w = [].concat(M(Object.keys(T)), [
              "confettiSource",
              "drawShape",
              "onConfettiComplete",
            ]),
            $ = ["canvasRef"];
          for (var O in y) {
            var F = y[O];
            w.includes(O)
              ? (x[O] = F)
              : $.includes(O)
              ? ($[O] = F)
              : (C[O] = F);
          }
          return [x, C, {}];
        }
        Ge(It, "defaultProps", dt({}, T)),
          Ge(It, "displayName", "ReactConfetti");
        var Rt = a.a.forwardRef(function (y, x) {
          return a.a.createElement(It, D({ canvasRef: x }, y));
        });
        l.default = Rt;
      },
    ]).default;
  });
})(Pc);
var wp = Pc.exports;
const xp = zc(wp),
  mo = [
    {
      id: 1,
      title: "El Edificio Misterioso",
      description:
        "Un edificio proyecta una sombra de 30 metros cuando el ángulo de elevación del sol es de 45°. ¿Cuál es la altura del edificio en metros?",
      imageUrl:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800",
      correctAnswer: 30,
      points: 100,
      hint: "Usa la tangente: tan(45°) = altura/sombra",
    },
    {
      id: 2,
      title: "El Puente Suspendido",
      description:
        "Un puente suspendido tiene cables que forman un ángulo de 60° con la horizontal. Si la altura del puente es de 50 metros, ¿cuál es la longitud de los cables en metros?",
      imageUrl:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
      correctAnswer: 57.7,
      points: 150,
      hint: "Usa el seno: altura = longitud * sin(60°)",
    },
    {
      id: 3,
      title: "La Torre de Vigilancia",
      description:
        "Desde una torre de vigilancia de 100 metros de altura, se observa un barco con un ángulo de depresión de 30°. ¿A qué distancia está el barco de la base de la torre en metros?",
      imageUrl:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
      correctAnswer: 173.2,
      points: 200,
      hint: "Usa la tangente: tan(30°) = altura/distancia",
    },
  ],
  Sp = ({ user: e, onScoreUpdate: t }) => {
    const [n, r] = ue.useState(0),
      [l, o] = ue.useState(""),
      [u, i] = ue.useState(!1),
      [s, a] = ue.useState(null),
      [f, d] = ue.useState([]),
      [m, S] = ue.useState(!1),
      g = (p) => {
        p.preventDefault();
        const c = parseFloat(l),
          h = mo[n];
        Math.abs(c - h.correctAnswer) <= 0.5
          ? (f.includes(h.id) ||
              (t({ ...e, score: e.score + h.points }),
              d([...f, h.id]),
              S(!0),
              setTimeout(() => S(!1), 5e3)),
            a("correct"))
          : a("incorrect");
      },
      N = mo[n],
      I = f.includes(N.id);
    return v.jsxs("div", {
      className: "space-y-8",
      children: [
        m && v.jsx(xp, {}),
        v.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            v.jsx("h2", {
              className: "text-2xl font-bold text-gray-800",
              children: "Desafíos Trigonométricos",
            }),
            v.jsx("div", {
              className: "flex space-x-2",
              children: mo.map((p, c) =>
                v.jsx(
                  "button",
                  {
                    onClick: () => {
                      r(c), o(""), a(null), i(!1);
                    },
                    className: `w-8 h-8 rounded-full flex items-center justify-center ${
                      n === c
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`,
                    children: c + 1,
                  },
                  c
                )
              ),
            }),
          ],
        }),
        v.jsxs("div", {
          className: "bg-white rounded-lg shadow-lg overflow-hidden",
          children: [
            v.jsx("img", {
              src: N.imageUrl,
              alt: N.title,
              className: "w-full h-64 object-cover",
            }),
            v.jsxs("div", {
              className: "p-6",
              children: [
                v.jsx("h3", {
                  className: "text-xl font-bold text-gray-800 mb-4",
                  children: N.title,
                }),
                v.jsx("p", {
                  className: "text-gray-600 mb-6",
                  children: N.description,
                }),
                v.jsxs("form", {
                  onSubmit: g,
                  className: "space-y-4",
                  children: [
                    v.jsxs("div", {
                      children: [
                        v.jsx("label", {
                          htmlFor: "answer",
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "Tu respuesta (en metros):",
                        }),
                        v.jsx("input", {
                          type: "number",
                          id: "answer",
                          step: "0.1",
                          value: l,
                          onChange: (p) => o(p.target.value),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                          placeholder: "Ingresa tu respuesta",
                          required: !0,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "flex space-x-4",
                      children: [
                        v.jsx("button", {
                          type: "submit",
                          className:
                            "flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors",
                          disabled: I,
                          children: I ? "Completado" : "Verificar Respuesta",
                        }),
                        v.jsx("button", {
                          type: "button",
                          onClick: () => i(!u),
                          className:
                            "px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
                          children: u ? "Ocultar Pista" : "Mostrar Pista",
                        }),
                      ],
                    }),
                  ],
                }),
                u &&
                  v.jsx("div", {
                    className: "mt-4 p-4 bg-yellow-50 rounded-lg",
                    children: v.jsxs("p", {
                      className: "text-yellow-800",
                      children: ["💡 Pista: ", N.hint],
                    }),
                  }),
                s &&
                  v.jsx("div", {
                    className: `mt-4 p-4 rounded-lg ${
                      s === "correct"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`,
                    children:
                      s === "correct"
                        ? "¡Correcto! ¡Has resuelto el desafío!"
                        : "Incorrecto. Intenta de nuevo.",
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  kp = ({ user: e }) =>
    v.jsxs("div", {
      className: "flex items-center space-x-4",
      children: [
        v.jsx("span", { className: "text-gray-700", children: e.name }),
        v.jsxs("div", {
          className: "flex items-center bg-yellow-100 px-3 py-1 rounded-full",
          children: [
            v.jsx(pp, { className: "w-4 h-4 text-yellow-600 mr-1" }),
            v.jsxs("span", {
              className: "text-yellow-800 font-medium",
              children: [e.score, " puntos"],
            }),
          ],
        }),
      ],
    });
function Ep() {
  const [e, t] = ue.useState("theory"),
    [n, r] = ue.useState(null);
  return n
    ? v.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50",
        children: [
          v.jsx("nav", {
            className: "bg-white shadow-md",
            children: v.jsx("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: v.jsxs("div", {
                className: "flex justify-between h-16",
                children: [
                  v.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      v.jsx(dp, { className: "h-8 w-8 text-indigo-600" }),
                      v.jsx("span", {
                        className: "ml-2 text-2xl font-bold text-gray-800",
                        children: "Trigonautas",
                      }),
                    ],
                  }),
                  v.jsx(kp, { user: n }),
                ],
              }),
            }),
          }),
          v.jsxs("main", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
              v.jsxs("div", {
                className: "text-center mb-8",
                children: [
                  v.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Explora el Universo de la Trigonometría",
                  }),
                  v.jsx("p", {
                    className: "text-lg text-gray-600",
                    children:
                      "Embárcate en un viaje matemático con los Trigonautas",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "bg-white rounded-xl shadow-lg overflow-hidden mb-8",
                children: [
                  v.jsxs("div", {
                    className: "flex border-b",
                    children: [
                      v.jsx("button", {
                        onClick: () => t("theory"),
                        className: `flex-1 py-4 px-6 text-center ${
                          e === "theory"
                            ? "bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`,
                        children: v.jsxs("div", {
                          className: "flex items-center justify-center",
                          children: [
                            v.jsx(cp, { className: "w-5 h-5 mr-2" }),
                            v.jsx("span", { children: "Teoría" }),
                          ],
                        }),
                      }),
                      v.jsx("button", {
                        onClick: () => t("calculator"),
                        className: `flex-1 py-4 px-6 text-center ${
                          e === "calculator"
                            ? "bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`,
                        children: v.jsxs("div", {
                          className: "flex items-center justify-center",
                          children: [
                            v.jsx(ap, { className: "w-5 h-5 mr-2" }),
                            v.jsx("span", { children: "Calculadora" }),
                          ],
                        }),
                      }),
                      v.jsx("button", {
                        onClick: () => t("examples"),
                        className: `flex-1 py-4 px-6 text-center ${
                          e === "examples"
                            ? "bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`,
                        children: v.jsxs("div", {
                          className: "flex items-center justify-center",
                          children: [
                            v.jsx(sp, { className: "w-5 h-5 mr-2" }),
                            v.jsx("span", { children: "Ejemplos" }),
                          ],
                        }),
                      }),
                      v.jsx("button", {
                        onClick: () => t("challenges"),
                        className: `flex-1 py-4 px-6 text-center ${
                          e === "challenges"
                            ? "bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`,
                        children: v.jsxs("div", {
                          className: "flex items-center justify-center",
                          children: [
                            v.jsx(up, { className: "w-5 h-5 mr-2" }),
                            v.jsx("span", { children: "Desafíos" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "p-6",
                    children: [
                      e === "theory" && v.jsx(mp, {}),
                      e === "calculator" && v.jsx(hp, {}),
                      e === "examples" && v.jsx(yp, {}),
                      e === "challenges" &&
                        v.jsx(Sp, { user: n, onScoreUpdate: r }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : v.jsx(gp, { onLogin: r });
}
_c(document.getElementById("root")).render(
  v.jsx(ue.StrictMode, { children: v.jsx(Ep, {}) })
);
