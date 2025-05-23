!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Scrollbar = e())
    : (t.Scrollbar = e());
})(this, function () {
  return (
    (n = [
      function (n, t, e) {
        !function (t) {
          function e(t) {
            return t && t.Math == Math && t;
          }
          n.exports =
            e("object" == typeof globalThis && globalThis) ||
            e("object" == typeof window && window) ||
            e("object" == typeof self && self) ||
            e("object" == typeof t && t) ||
            Function("return this")();
        }.call(this, e(68));
      },
      function (t, e, n) {
        var r = n(0),
          o = n(50),
          i = n(3),
          u = n(29),
          c = n(55),
          n = n(75),
          s = o("wks"),
          a = r.Symbol,
          f = n ? a : (a && a.withoutSetter) || u;
        t.exports = function (t) {
          return (
            i(s, t) ||
              (c && i(a, t) ? (s[t] = a[t]) : (s[t] = f("Symbol." + t))),
            s[t]
          );
        };
      },
      function (t, e) {
        t.exports = function (t) {
          return "object" == typeof t ? null !== t : "function" == typeof t;
        };
      },
      function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
          return n.call(t, e);
        };
      },
      function (t, e) {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      function (t, e, n) {
        var r = n(6),
          o = n(45),
          i = n(7),
          u = n(25),
          c = Object.defineProperty;
        e.f = r
          ? c
          : function (t, e, n) {
              if ((i(t), (e = u(e, !0)), i(n), o))
                try {
                  return c(t, e, n);
                } catch (t) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (t[e] = n.value), t;
            };
      },
      function (t, e, n) {
        n = n(4);
        t.exports = !n(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      function (t, e, n) {
        var r = n(2);
        t.exports = function (t) {
          if (r(t)) return t;
          throw TypeError(String(t) + " is not an object");
        };
      },
      function (t, e, n) {
        var r = n(6),
          o = n(5),
          i = n(14);
        t.exports = r
          ? function (t, e, n) {
              return o.f(t, e, i(1, n));
            }
          : function (t, e, n) {
              return (t[e] = n), t;
            };
      },
      function (t, e, n) {
        var r,
          o,
          i,
          u,
          c,
          s,
          a,
          f,
          l = n(49),
          p = n(0),
          h = n(2),
          d = n(8),
          y = n(3),
          v = n(27),
          n = n(16),
          p = p.WeakMap;
        (a = l
          ? ((r = new p()),
            (o = r.get),
            (i = r.has),
            (u = r.set),
            (c = function (t, e) {
              return u.call(r, t, e), e;
            }),
            (s = function (t) {
              return o.call(r, t) || {};
            }),
            function (t) {
              return i.call(r, t);
            })
          : ((n[(f = v("state"))] = !0),
            (c = function (t, e) {
              return d(t, f, e), e;
            }),
            (s = function (t) {
              return y(t, f) ? t[f] : {};
            }),
            function (t) {
              return y(t, f);
            })),
          (t.exports = {
            set: c,
            get: s,
            has: a,
            enforce: function (t) {
              return a(t) ? s(t) : c(t, {});
            },
            getterFor: function (e) {
              return function (t) {
                if (h(t) && (t = s(t)).type === e) return t;
                throw TypeError("Incompatible receiver, " + e + " required");
              };
            },
          });
      },
      function (t, e, n) {
        n = n(0);
        t.exports = n;
      },
      function (t, e, n) {
        var u = n(0),
          c = n(8),
          s = n(3),
          a = n(26),
          r = n(47),
          n = n(9),
          o = n.get,
          f = n.enforce,
          l = String(String).split("String");
        (t.exports = function (t, e, n, r) {
          var o = !!r && !!r.unsafe,
            i = !!r && !!r.enumerable,
            r = !!r && !!r.noTargetGet;
          "function" == typeof n &&
            ("string" != typeof e || s(n, "name") || c(n, "name", e),
            (f(n).source = l.join("string" == typeof e ? e : ""))),
            t !== u
              ? (o ? !r && t[e] && (i = !0) : delete t[e],
                i ? (t[e] = n) : c(t, e, n))
              : i
              ? (t[e] = n)
              : a(e, n);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && o(this).source) || r(this);
        });
      },
      function (t, e) {
        t.exports = {};
      },
      function (t, e, n) {
        var a = n(0),
          f = n(43).f,
          l = n(8),
          p = n(11),
          h = n(26),
          d = n(69),
          y = n(53);
        t.exports = function (t, e) {
          var n,
            r,
            o,
            i,
            u = t.target,
            c = t.global,
            s = t.stat;
          if ((n = c ? a : s ? a[u] || h(u, {}) : (a[u] || {}).prototype))
            for (r in e) {
              if (
                ((o = e[r]),
                (i = t.noTargetGet ? (i = f(n, r)) && i.value : n[r]),
                !y(c ? r : u + (s ? "." : "#") + r, t.forced) && void 0 !== i)
              ) {
                if (typeof o == typeof i) continue;
                d(o, i);
              }
              (t.sham || (i && i.sham)) && l(o, "sham", !0), p(n, r, o, t);
            }
        };
      },
      function (t, e) {
        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e,
          };
        };
      },
      function (t, e, n) {
        var r = n(22),
          o = n(24);
        t.exports = function (t) {
          return r(o(t));
        };
      },
      function (t, e) {
        t.exports = {};
      },
      function (t, e, n) {
        var r = n(31),
          o = Math.min;
        t.exports = function (t) {
          return 0 < t ? o(r(t), 9007199254740991) : 0;
        };
      },
      function (t, e, n) {
        function r(t) {
          c(t, f, { value: { objectID: "O" + ++l, weakData: {} } });
        }
        var o = n(16),
          i = n(2),
          u = n(3),
          c = n(5).f,
          s = n(29),
          a = n(74),
          f = s("meta"),
          l = 0,
          p =
            Object.isExtensible ||
            function () {
              return !0;
            },
          h = (t.exports = {
            REQUIRED: !1,
            fastKey: function (t, e) {
              if (!i(t))
                return "symbol" == typeof t
                  ? t
                  : ("string" == typeof t ? "S" : "P") + t;
              if (!u(t, f)) {
                if (!p(t)) return "F";
                if (!e) return "E";
                r(t);
              }
              return t[f].objectID;
            },
            getWeakData: function (t, e) {
              if (!u(t, f)) {
                if (!p(t)) return !0;
                if (!e) return !1;
                r(t);
              }
              return t[f].weakData;
            },
            onFreeze: function (t) {
              return a && h.REQUIRED && p(t) && !u(t, f) && r(t), t;
            },
          });
        o[f] = !0;
      },
      function (t, e, n) {
        var i = n(76);
        t.exports = function (r, o, t) {
          if ((i(r), void 0 === o)) return r;
          switch (t) {
            case 0:
              return function () {
                return r.call(o);
              };
            case 1:
              return function (t) {
                return r.call(o, t);
              };
            case 2:
              return function (t, e) {
                return r.call(o, t, e);
              };
            case 3:
              return function (t, e, n) {
                return r.call(o, t, e, n);
              };
          }
          return function () {
            return r.apply(o, arguments);
          };
        };
      },
      function (t, e, n) {
        var r = n(24);
        t.exports = function (t) {
          return Object(r(t));
        };
      },
      function (t, e, n) {
        "use strict";
        var v = n(13),
          m = n(0),
          g = n(53),
          x = n(11),
          b = n(18),
          w = n(33),
          S = n(35),
          _ = n(2),
          E = n(4),
          O = n(59),
          T = n(36),
          A = n(77);
        t.exports = function (n, t, e) {
          function r(t) {
            var n = h[t];
            x(
              h,
              t,
              "add" == t
                ? function (t) {
                    return n.call(this, 0 === t ? 0 : t), this;
                  }
                : "delete" == t
                ? function (t) {
                    return !(f && !_(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function (t) {
                    return f && !_(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function (t) {
                    return !(f && !_(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : function (t, e) {
                    return n.call(this, 0 === t ? 0 : t, e), this;
                  }
            );
          }
          var o,
            i,
            u,
            c,
            s,
            a = -1 !== n.indexOf("Map"),
            f = -1 !== n.indexOf("Weak"),
            l = a ? "set" : "add",
            p = m[n],
            h = p && p.prototype,
            d = p,
            y = {};
          return (
            g(
              n,
              "function" != typeof p ||
                !(
                  f ||
                  (h.forEach &&
                    !E(function () {
                      new p().entries().next();
                    }))
                )
            )
              ? ((d = e.getConstructor(t, n, a, l)), (b.REQUIRED = !0))
              : g(n, !0) &&
                ((i = (o = new d())[l](f ? {} : -0, 1) != o),
                (u = E(function () {
                  o.has(1);
                })),
                (c = O(function (t) {
                  new p(t);
                })),
                (s =
                  !f &&
                  E(function () {
                    for (var t = new p(), e = 5; e--; ) t[l](e, e);
                    return !t.has(-0);
                  })),
                c ||
                  (((d = t(function (t, e) {
                    S(t, d, n);
                    t = A(new p(), t, d);
                    return null != e && w(e, t[l], t, a), t;
                  })).prototype = h).constructor = d),
                (u || s) && (r("delete"), r("has"), a && r("get")),
                (s || i) && r(l),
                f && h.clear && delete h.clear),
            (y[n] = d),
            v({ global: !0, forced: d != p }, y),
            T(d, n),
            f || e.setStrong(d, n, a),
            d
          );
        };
      },
      function (t, e, n) {
        var r = n(4),
          o = n(23),
          i = "".split;
        t.exports = r(function () {
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (t) {
              return "String" == o(t) ? i.call(t, "") : Object(t);
            }
          : Object;
      },
      function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
          return n.call(t).slice(8, -1);
        };
      },
      function (t, e) {
        t.exports = function (t) {
          if (null == t) throw TypeError("Can't call method on " + t);
          return t;
        };
      },
      function (t, e, n) {
        var o = n(2);
        t.exports = function (t, e) {
          if (!o(t)) return t;
          var n, r;
          if (e && "function" == typeof (n = t.toString) && !o((r = n.call(t))))
            return r;
          if ("function" == typeof (n = t.valueOf) && !o((r = n.call(t))))
            return r;
          if (e || "function" != typeof (n = t.toString) || o((r = n.call(t))))
            throw TypeError("Can't convert object to primitive value");
          return r;
        };
      },
      function (t, e, n) {
        var r = n(0),
          o = n(8);
        t.exports = function (e, n) {
          try {
            o(r, e, n);
          } catch (t) {
            r[e] = n;
          }
          return n;
        };
      },
      function (t, e, n) {
        var r = n(50),
          o = n(29),
          i = r("keys");
        t.exports = function (t) {
          return i[t] || (i[t] = o(t));
        };
      },
      function (t, e) {
        t.exports = !1;
      },
      function (t, e) {
        var n = 0,
          r = Math.random();
        t.exports = function (t) {
          return (
            "Symbol(" +
            String(void 0 === t ? "" : t) +
            ")_" +
            (++n + r).toString(36)
          );
        };
      },
      function (t, e, n) {
        function r(t) {
          return "function" == typeof t ? t : void 0;
        }
        var o = n(10),
          i = n(0);
        t.exports = function (t, e) {
          return arguments.length < 2
            ? r(o[t]) || r(i[t])
            : (o[t] && o[t][e]) || (i[t] && i[t][e]);
        };
      },
      function (t, e) {
        var n = Math.ceil,
          r = Math.floor;
        t.exports = function (t) {
          return isNaN((t = +t)) ? 0 : (0 < t ? r : n)(t);
        };
      },
      function (t, e) {
        t.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      function (t, e, n) {
        function p(t, e) {
          (this.stopped = t), (this.result = e);
        }
        var h = n(7),
          d = n(54),
          y = n(17),
          v = n(19),
          m = n(56),
          g = n(58);
        (t.exports = function (t, e, n, r, o) {
          var i,
            u,
            c,
            s,
            a,
            f,
            l = v(e, n, r ? 2 : 1);
          if (o) i = t;
          else {
            if ("function" != typeof (e = m(t)))
              throw TypeError("Target is not iterable");
            if (d(e)) {
              for (u = 0, c = y(t.length); u < c; u++)
                if (
                  (s = r ? l(h((f = t[u]))[0], f[1]) : l(t[u])) &&
                  s instanceof p
                )
                  return s;
              return new p(!1);
            }
            i = e.call(t);
          }
          for (a = i.next; !(f = a.call(i)).done; )
            if (
              "object" == typeof (s = g(i, l, f.value, r)) &&
              s &&
              s instanceof p
            )
              return s;
          return new p(!1);
        }).stop = function (t) {
          return new p(!0, t);
        };
      },
      function (t, e, n) {
        var r = {};
        (r[n(1)("toStringTag")] = "z"),
          (t.exports = "[object z]" === String(r));
      },
      function (t, e) {
        t.exports = function (t, e, n) {
          if (t instanceof e) return t;
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        };
      },
      function (t, e, n) {
        var r = n(5).f,
          o = n(3),
          i = n(1)("toStringTag");
        t.exports = function (t, e, n) {
          t &&
            !o((t = n ? t : t.prototype), i) &&
            r(t, i, { configurable: !0, value: e });
        };
      },
      function (t, e, n) {
        function r() {}
        function o(t) {
          return "<script>" + t + "</script>";
        }
        var i,
          u = n(7),
          c = n(79),
          s = n(32),
          a = n(16),
          f = n(80),
          l = n(46),
          p = n(27)("IE_PROTO"),
          h = function () {
            try {
              i = document.domain && new ActiveXObject("htmlfile");
            } catch (n) {}
            var t, e;
            h = i
              ? ((t = i).write(o("")),
                t.close(),
                (e = t.parentWindow.Object),
                (t = null),
                e)
              : (((t = l("iframe")).style.display = "none"),
                f.appendChild(t),
                (t.src = String("javascript:")),
                (t = t.contentWindow.document).open(),
                t.write(o("document.F=Object")),
                t.close(),
                t.F);
            for (var n = s.length; n--; ) delete h.prototype[s[n]];
            return h();
          };
        (a[p] = !0),
          (t.exports =
            Object.create ||
            function (t, e) {
              var n;
              return (
                null !== t
                  ? ((r.prototype = u(t)),
                    (n = new r()),
                    (r.prototype = null),
                    (n[p] = t))
                  : (n = h()),
                void 0 === e ? n : c(n, e)
              );
            });
      },
      function (t, e, n) {
        var o = n(11);
        t.exports = function (t, e, n) {
          for (var r in e) o(t, r, e[r], n);
          return t;
        };
      },
      function (t, e, n) {
        "use strict";
        function y() {
          return this;
        }
        var v = n(13),
          m = n(81),
          g = n(64),
          x = n(60),
          b = n(36),
          w = n(8),
          S = n(11),
          r = n(1),
          _ = n(28),
          E = n(12),
          n = n(63),
          O = n.IteratorPrototype,
          T = n.BUGGY_SAFARI_ITERATORS,
          A = r("iterator");
        t.exports = function (t, e, n, r, o, i, u) {
          m(n, e, r);
          function c(t) {
            if (t === o && h) return h;
            if (!T && t in l) return l[t];
            switch (t) {
              case "keys":
              case "values":
              case "entries":
                return function () {
                  return new n(this, t);
                };
            }
            return function () {
              return new n(this);
            };
          }
          var s,
            a,
            r = e + " Iterator",
            f = !1,
            l = t.prototype,
            p = l[A] || l["@@iterator"] || (o && l[o]),
            h = (!T && p) || c(o),
            d = ("Array" == e && l.entries) || p;
          if (
            (d &&
              ((d = g(d.call(new t()))),
              O !== Object.prototype &&
                d.next &&
                (_ ||
                  g(d) === O ||
                  (x ? x(d, O) : "function" != typeof d[A] && w(d, A, y)),
                b(d, r, !0, !0),
                _ && (E[r] = y))),
            "values" == o &&
              p &&
              "values" !== p.name &&
              ((f = !0),
              (h = function () {
                return p.call(this);
              })),
            (_ && !u) || l[A] === h || w(l, A, h),
            (E[e] = h),
            o)
          )
            if (
              ((s = {
                values: c("values"),
                keys: i ? h : c("keys"),
                entries: c("entries"),
              }),
              u)
            )
              for (a in s) (!T && !f && a in l) || S(l, a, s[a]);
            else v({ target: e, proto: !0, forced: T || f }, s);
          return s;
        };
      },
      function (t, e, n) {
        var r = n(34),
          o = n(11),
          n = n(84);
        r || o(Object.prototype, "toString", n, { unsafe: !0 });
      },
      function (t, e, n) {
        "use strict";
        var r = n(85).charAt,
          o = n(9),
          n = n(39),
          i = o.set,
          u = o.getterFor("String Iterator");
        n(
          String,
          "String",
          function (t) {
            i(this, { type: "String Iterator", string: String(t), index: 0 });
          },
          function () {
            var t = u(this),
              e = t.string,
              n = t.index;
            return n >= e.length
              ? { value: void 0, done: !0 }
              : ((e = r(e, n)), (t.index += e.length), { value: e, done: !1 });
          }
        );
      },
      function (t, e, n) {
        var r,
          o = n(0),
          i = n(86),
          u = n(87),
          c = n(8),
          n = n(1),
          s = n("iterator"),
          a = n("toStringTag"),
          f = u.values;
        for (r in i) {
          var l = o[r],
            p = l && l.prototype;
          if (p) {
            if (p[s] !== f)
              try {
                c(p, s, f);
              } catch (t) {
                p[s] = f;
              }
            if ((p[a] || c(p, a, r), i[r]))
              for (var h in u)
                if (p[h] !== u[h])
                  try {
                    c(p, h, u[h]);
                  } catch (t) {
                    p[h] = u[h];
                  }
          }
        }
      },
      function (t, e, n) {
        var r = n(6),
          o = n(44),
          i = n(14),
          u = n(15),
          c = n(25),
          s = n(3),
          a = n(45),
          f = Object.getOwnPropertyDescriptor;
        e.f = r
          ? f
          : function (t, e) {
              if (((t = u(t)), (e = c(e, !0)), a))
                try {
                  return f(t, e);
                } catch (t) {}
              if (s(t, e)) return i(!o.f.call(t, e), t[e]);
            };
      },
      function (t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
          o = Object.getOwnPropertyDescriptor,
          i = o && !r.call({ 1: 2 }, 1);
        e.f = i
          ? function (t) {
              t = o(this, t);
              return !!t && t.enumerable;
            }
          : r;
      },
      function (t, e, n) {
        var r = n(6),
          o = n(4),
          i = n(46);
        t.exports =
          !r &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(i("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      function (t, e, n) {
        var r = n(0),
          n = n(2),
          o = r.document,
          i = n(o) && n(o.createElement);
        t.exports = function (t) {
          return i ? o.createElement(t) : {};
        };
      },
      function (t, e, n) {
        var n = n(48),
          r = Function.toString;
        "function" != typeof n.inspectSource &&
          (n.inspectSource = function (t) {
            return r.call(t);
          }),
          (t.exports = n.inspectSource);
      },
      function (t, e, n) {
        var r = n(0),
          n = n(26),
          r = r["__core-js_shared__"] || n("__core-js_shared__", {});
        t.exports = r;
      },
      function (t, e, n) {
        var r = n(0),
          n = n(47),
          r = r.WeakMap;
        t.exports = "function" == typeof r && /native code/.test(n(r));
      },
      function (t, e, n) {
        var r = n(28),
          o = n(48);
        (t.exports = function (t, e) {
          return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
          version: "3.6.4",
          mode: r ? "pure" : "global",
          copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)",
        });
      },
      function (t, e, n) {
        var u = n(3),
          c = n(15),
          s = n(72).indexOf,
          a = n(16);
        t.exports = function (t, e) {
          var n,
            r = c(t),
            o = 0,
            i = [];
          for (n in r) !u(a, n) && u(r, n) && i.push(n);
          for (; e.length > o; ) !u(r, (n = e[o++])) || ~s(i, n) || i.push(n);
          return i;
        };
      },
      function (t, e) {
        e.f = Object.getOwnPropertySymbols;
      },
      function (t, e, n) {
        function r(t, e) {
          return (
            (t = c[u(t)]) == a ||
            (t != s && ("function" == typeof e ? o(e) : !!e))
          );
        }
        var o = n(4),
          i = /#|\.prototype\./,
          u = (r.normalize = function (t) {
            return String(t).replace(i, ".").toLowerCase();
          }),
          c = (r.data = {}),
          s = (r.NATIVE = "N"),
          a = (r.POLYFILL = "P");
        t.exports = r;
      },
      function (t, e, n) {
        var r = n(1),
          o = n(12),
          i = r("iterator"),
          u = Array.prototype;
        t.exports = function (t) {
          return void 0 !== t && (o.Array === t || u[i] === t);
        };
      },
      function (t, e, n) {
        n = n(4);
        t.exports =
          !!Object.getOwnPropertySymbols &&
          !n(function () {
            return !String(Symbol());
          });
      },
      function (t, e, n) {
        var r = n(57),
          o = n(12),
          i = n(1)("iterator");
        t.exports = function (t) {
          if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
        };
      },
      function (t, e, n) {
        var r = n(34),
          o = n(23),
          i = n(1)("toStringTag"),
          u =
            "Arguments" ==
            o(
              (function () {
                return arguments;
              })()
            );
        t.exports = r
          ? o
          : function (t) {
              var e;
              return void 0 === t
                ? "Undefined"
                : null === t
                ? "Null"
                : "string" ==
                  typeof (e = (function (t, e) {
                    try {
                      return t[e];
                    } catch (t) {}
                  })((t = Object(t)), i))
                ? e
                : u
                ? o(t)
                : "Object" == (e = o(t)) && "function" == typeof t.callee
                ? "Arguments"
                : e;
            };
      },
      function (t, e, n) {
        var o = n(7);
        t.exports = function (t, e, n, r) {
          try {
            return r ? e(o(n)[0], n[1]) : e(n);
          } catch (e) {
            r = t.return;
            throw (void 0 !== r && o(r.call(t)), e);
          }
        };
      },
      function (t, e, n) {
        var o = n(1)("iterator"),
          i = !1;
        try {
          var r = 0,
            u = {
              next: function () {
                return { done: !!r++ };
              },
              return: function () {
                i = !0;
              },
            };
          (u[o] = function () {
            return this;
          }),
            Array.from(u, function () {
              throw 2;
            });
        } catch (t) {}
        t.exports = function (t, e) {
          if (!e && !i) return !1;
          var n = !1;
          try {
            var r = {};
            (r[o] = function () {
              return {
                next: function () {
                  return { done: (n = !0) };
                },
              };
            }),
              t(r);
          } catch (t) {}
          return n;
        };
      },
      function (t, e, n) {
        var o = n(7),
          i = n(78);
        t.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var n,
                  r = !1,
                  t = {};
                try {
                  (n = Object.getOwnPropertyDescriptor(
                    Object.prototype,
                    "__proto__"
                  ).set).call(t, []),
                    (r = t instanceof Array);
                } catch (n) {}
                return function (t, e) {
                  return o(t), i(e), r ? n.call(t, e) : (t.__proto__ = e), t;
                };
              })()
            : void 0);
      },
      function (t, e, n) {
        "use strict";
        var a = n(5).f,
          f = n(37),
          l = n(38),
          p = n(19),
          h = n(35),
          d = n(33),
          u = n(39),
          c = n(83),
          y = n(6),
          v = n(18).fastKey,
          n = n(9),
          m = n.set,
          g = n.getterFor;
        t.exports = {
          getConstructor: function (t, n, r, o) {
            function i(t, e, n) {
              var r,
                o = s(t),
                i = u(t, e);
              return (
                i
                  ? (i.value = n)
                  : ((o.last = i =
                      {
                        index: (r = v(e, !0)),
                        key: e,
                        value: n,
                        previous: (e = o.last),
                        next: void 0,
                        removed: !1,
                      }),
                    o.first || (o.first = i),
                    e && (e.next = i),
                    y ? o.size++ : t.size++,
                    "F" !== r && (o.index[r] = i)),
                t
              );
            }
            function u(t, e) {
              var n,
                t = s(t),
                r = v(e);
              if ("F" !== r) return t.index[r];
              for (n = t.first; n; n = n.next) if (n.key == e) return n;
            }
            var c = t(function (t, e) {
                h(t, c, n),
                  m(t, {
                    type: n,
                    index: f(null),
                    first: void 0,
                    last: void 0,
                    size: 0,
                  }),
                  y || (t.size = 0),
                  null != e && d(e, t[o], t, r);
              }),
              s = g(n);
            return (
              l(c.prototype, {
                clear: function () {
                  for (var t = s(this), e = t.index, n = t.first; n; )
                    (n.removed = !0),
                      n.previous && (n.previous = n.previous.next = void 0),
                      delete e[n.index],
                      (n = n.next);
                  (t.first = t.last = void 0),
                    y ? (t.size = 0) : (this.size = 0);
                },
                delete: function (t) {
                  var e,
                    n,
                    r = s(this),
                    t = u(this, t);
                  return (
                    t &&
                      ((e = t.next),
                      (n = t.previous),
                      delete r.index[t.index],
                      (t.removed = !0),
                      n && (n.next = e),
                      e && (e.previous = n),
                      r.first == t && (r.first = e),
                      r.last == t && (r.last = n),
                      y ? r.size-- : this.size--),
                    !!t
                  );
                },
                forEach: function (t) {
                  for (
                    var e,
                      n = s(this),
                      r = p(t, 1 < arguments.length ? arguments[1] : void 0, 3);
                    (e = e ? e.next : n.first);

                  )
                    for (r(e.value, e.key, this); e && e.removed; )
                      e = e.previous;
                },
                has: function (t) {
                  return !!u(this, t);
                },
              }),
              l(
                c.prototype,
                r
                  ? {
                      get: function (t) {
                        t = u(this, t);
                        return t && t.value;
                      },
                      set: function (t, e) {
                        return i(this, 0 === t ? 0 : t, e);
                      },
                    }
                  : {
                      add: function (t) {
                        return i(this, (t = 0 === t ? 0 : t), t);
                      },
                    }
              ),
              y &&
                a(c.prototype, "size", {
                  get: function () {
                    return s(this).size;
                  },
                }),
              c
            );
          },
          setStrong: function (t, e, n) {
            var r = e + " Iterator",
              o = g(e),
              i = g(r);
            u(
              t,
              e,
              function (t, e) {
                m(this, {
                  type: r,
                  target: t,
                  state: o(t),
                  kind: e,
                  last: void 0,
                });
              },
              function () {
                for (var t = i(this), e = t.kind, n = t.last; n && n.removed; )
                  n = n.previous;
                return t.target && (t.last = n = n ? n.next : t.state.first)
                  ? "keys" == e
                    ? { value: n.key, done: !1 }
                    : "values" == e
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                  : { value: (t.target = void 0), done: !0 };
              },
              n ? "entries" : "values",
              !n,
              !0
            ),
              c(e);
          },
        };
      },
      function (t, e, n) {
        var r = n(51),
          o = n(32);
        t.exports =
          Object.keys ||
          function (t) {
            return r(t, o);
          };
      },
      function (t, e, n) {
        "use strict";
        var r,
          o,
          i = n(64),
          u = n(8),
          c = n(3),
          s = n(1),
          n = n(28),
          s = s("iterator"),
          a = !1;
        [].keys &&
          ("next" in (o = [].keys())
            ? (i = i(i(o))) !== Object.prototype && (r = i)
            : (a = !0)),
          null == r && (r = {}),
          n ||
            c(r, s) ||
            u(r, s, function () {
              return this;
            }),
          (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: a });
      },
      function (t, e, n) {
        var r = n(3),
          o = n(20),
          i = n(27),
          n = n(82),
          u = i("IE_PROTO"),
          c = Object.prototype;
        t.exports = n
          ? Object.getPrototypeOf
          : function (t) {
              return (
                (t = o(t)),
                r(t, u)
                  ? t[u]
                  : "function" == typeof t.constructor &&
                    t instanceof t.constructor
                  ? t.constructor.prototype
                  : t instanceof Object
                  ? c
                  : null
              );
            };
      },
      function (t, e, n) {
        t.exports = n(104);
      },
      function (t, e, n) {
        n(67), n(40), n(41), n(42);
        n = n(10);
        t.exports = n.Map;
      },
      function (t, e, n) {
        "use strict";
        var r = n(21),
          n = n(61);
        t.exports = r(
          "Map",
          function (t) {
            return function () {
              return t(this, arguments.length ? arguments[0] : void 0);
            };
          },
          n
        );
      },
      function (t, e) {
        var n = (function () {
          return this;
        })();
        try {
          n = n || new Function("return this")();
        } catch (t) {
          "object" == typeof window && (n = window);
        }
        t.exports = n;
      },
      function (t, e, n) {
        var c = n(3),
          s = n(70),
          a = n(43),
          f = n(5);
        t.exports = function (t, e) {
          for (var n = s(e), r = f.f, o = a.f, i = 0; i < n.length; i++) {
            var u = n[i];
            c(t, u) || r(t, u, o(e, u));
          }
        };
      },
      function (t, e, n) {
        var r = n(30),
          o = n(71),
          i = n(52),
          u = n(7);
        t.exports =
          r("Reflect", "ownKeys") ||
          function (t) {
            var e = o.f(u(t)),
              n = i.f;
            return n ? e.concat(n(t)) : e;
          };
      },
      function (t, e, n) {
        var r = n(51),
          o = n(32).concat("length", "prototype");
        e.f =
          Object.getOwnPropertyNames ||
          function (t) {
            return r(t, o);
          };
      },
      function (t, e, n) {
        function r(c) {
          return function (t, e, n) {
            var r,
              o = s(t),
              i = a(o.length),
              u = f(n, i);
            if (c && e != e) {
              for (; u < i; ) if ((r = o[u++]) != r) return !0;
            } else
              for (; u < i; u++)
                if ((c || u in o) && o[u] === e) return c || u || 0;
            return !c && -1;
          };
        }
        var s = n(15),
          a = n(17),
          f = n(73);
        t.exports = { includes: r(!0), indexOf: r(!1) };
      },
      function (t, e, n) {
        var r = n(31),
          o = Math.max,
          i = Math.min;
        t.exports = function (t, e) {
          t = r(t);
          return t < 0 ? o(t + e, 0) : i(t, e);
        };
      },
      function (t, e, n) {
        n = n(4);
        t.exports = !n(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      function (t, e, n) {
        n = n(55);
        t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      function (t, e) {
        t.exports = function (t) {
          if ("function" != typeof t)
            throw TypeError(String(t) + " is not a function");
          return t;
        };
      },
      function (t, e, n) {
        var r = n(2),
          o = n(60);
        t.exports = function (t, e, n) {
          return (
            o &&
              "function" == typeof (e = e.constructor) &&
              e !== n &&
              r((e = e.prototype)) &&
              e !== n.prototype &&
              o(t, e),
            t
          );
        };
      },
      function (t, e, n) {
        var r = n(2);
        t.exports = function (t) {
          if (r(t) || null === t) return t;
          throw TypeError("Can't set " + String(t) + " as a prototype");
        };
      },
      function (t, e, n) {
        var r = n(6),
          u = n(5),
          c = n(7),
          s = n(62);
        t.exports = r
          ? Object.defineProperties
          : function (t, e) {
              c(t);
              for (var n, r = s(e), o = r.length, i = 0; i < o; )
                u.f(t, (n = r[i++]), e[n]);
              return t;
            };
      },
      function (t, e, n) {
        n = n(30);
        t.exports = n("document", "documentElement");
      },
      function (t, e, n) {
        "use strict";
        function r() {
          return this;
        }
        var o = n(63).IteratorPrototype,
          i = n(37),
          u = n(14),
          c = n(36),
          s = n(12);
        t.exports = function (t, e, n) {
          e += " Iterator";
          return (
            (t.prototype = i(o, { next: u(1, n) })),
            c(t, e, !1, !0),
            (s[e] = r),
            t
          );
        };
      },
      function (t, e, n) {
        n = n(4);
        t.exports = !n(function () {
          function t() {}
          return (
            (t.prototype.constructor = null),
            Object.getPrototypeOf(new t()) !== t.prototype
          );
        });
      },
      function (t, e, n) {
        "use strict";
        var r = n(30),
          o = n(5),
          i = n(1),
          u = n(6),
          c = i("species");
        t.exports = function (t) {
          var t = r(t),
            e = o.f;
          u &&
            t &&
            !t[c] &&
            e(t, c, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      function (t, e, n) {
        "use strict";
        var r = n(34),
          o = n(57);
        t.exports = r
          ? {}.toString
          : function () {
              return "[object " + o(this) + "]";
            };
      },
      function (t, e, n) {
        function r(o) {
          return function (t, e) {
            var n,
              t = String(u(t)),
              e = i(e),
              r = t.length;
            return e < 0 || r <= e
              ? o
                ? ""
                : void 0
              : (n = t.charCodeAt(e)) < 55296 ||
                56319 < n ||
                e + 1 === r ||
                (r = t.charCodeAt(e + 1)) < 56320 ||
                57343 < r
              ? o
                ? t.charAt(e)
                : n
              : o
              ? t.slice(e, e + 2)
              : r - 56320 + ((n - 55296) << 10) + 65536;
          };
        }
        var i = n(31),
          u = n(24);
        t.exports = { codeAt: r(!1), charAt: r(!0) };
      },
      function (t, e) {
        t.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      function (t, e, n) {
        "use strict";
        var r = n(15),
          o = n(88),
          i = n(12),
          u = n(9),
          n = n(39),
          c = u.set,
          s = u.getterFor("Array Iterator");
        (t.exports = n(
          Array,
          "Array",
          function (t, e) {
            c(this, {
              type: "Array Iterator",
              target: r(t),
              index: 0,
              kind: e,
            });
          },
          function () {
            var t = s(this),
              e = t.target,
              n = t.kind,
              r = t.index++;
            return !e || r >= e.length
              ? { value: (t.target = void 0), done: !0 }
              : "keys" == n
              ? { value: r, done: !1 }
              : "values" == n
              ? { value: e[r], done: !1 }
              : { value: [r, e[r]], done: !1 };
          },
          "values"
        )),
          (i.Arguments = i.Array),
          o("keys"),
          o("values"),
          o("entries");
      },
      function (t, e, n) {
        var r = n(1),
          o = n(37),
          n = n(5),
          i = r("unscopables"),
          u = Array.prototype;
        null == u[i] && n.f(u, i, { configurable: !0, value: o(null) }),
          (t.exports = function (t) {
            u[i][t] = !0;
          });
      },
      function (t, e, n) {
        n(90), n(40), n(41), n(42);
        n = n(10);
        t.exports = n.Set;
      },
      function (t, e, n) {
        "use strict";
        var r = n(21),
          n = n(61);
        t.exports = r(
          "Set",
          function (t) {
            return function () {
              return t(this, arguments.length ? arguments[0] : void 0);
            };
          },
          n
        );
      },
      function (t, e, n) {
        n(40), n(92), n(42);
        n = n(10);
        t.exports = n.WeakMap;
      },
      function (t, e, n) {
        "use strict";
        function r(t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        }
        var o,
          i,
          u,
          c,
          s,
          a = n(0),
          f = n(38),
          l = n(18),
          p = n(21),
          h = n(93),
          d = n(2),
          y = n(9).enforce,
          n = n(49),
          a = !a.ActiveXObject && "ActiveXObject" in a,
          v = Object.isExtensible,
          t = (t.exports = p("WeakMap", r, h));
        n &&
          a &&
          ((o = h.getConstructor(r, "WeakMap", !0)),
          (l.REQUIRED = !0),
          (p = t.prototype),
          (i = p.delete),
          (u = p.has),
          (c = p.get),
          (s = p.set),
          f(p, {
            delete: function (t) {
              var e;
              return d(t) && !v(t)
                ? ((e = y(this)).frozen || (e.frozen = new o()),
                  i.call(this, t) || e.frozen.delete(t))
                : i.call(this, t);
            },
            has: function (t) {
              var e;
              return d(t) && !v(t)
                ? ((e = y(this)).frozen || (e.frozen = new o()),
                  u.call(this, t) || e.frozen.has(t))
                : u.call(this, t);
            },
            get: function (t) {
              var e;
              return d(t) && !v(t)
                ? ((e = y(this)).frozen || (e.frozen = new o()),
                  u.call(this, t) ? c.call(this, t) : e.frozen.get(t))
                : c.call(this, t);
            },
            set: function (t, e) {
              var n;
              return (
                d(t) && !v(t)
                  ? ((n = y(this)).frozen || (n.frozen = new o()),
                    u.call(this, t) ? s.call(this, t, e) : n.frozen.set(t, e))
                  : s.call(this, t, e),
                this
              );
            },
          }));
      },
      function (t, e, n) {
        "use strict";
        function s(t) {
          return t.frozen || (t.frozen = new r());
        }
        function r() {
          this.entries = [];
        }
        function o(t, e) {
          return u(t.entries, function (t) {
            return t[0] === e;
          });
        }
        var a = n(38),
          f = n(18).getWeakData,
          l = n(7),
          p = n(2),
          h = n(35),
          d = n(33),
          i = n(94),
          y = n(3),
          n = n(9),
          v = n.set,
          m = n.getterFor,
          u = i.find,
          c = i.findIndex,
          g = 0;
        (r.prototype = {
          get: function (t) {
            t = o(this, t);
            if (t) return t[1];
          },
          has: function (t) {
            return !!o(this, t);
          },
          set: function (t, e) {
            var n = o(this, t);
            n ? (n[1] = e) : this.entries.push([t, e]);
          },
          delete: function (e) {
            var t = c(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && this.entries.splice(t, 1), !!~t;
          },
        }),
          (t.exports = {
            getConstructor: function (t, n, r, o) {
              function i(t, e, n) {
                var r = c(t),
                  o = f(l(e), !0);
                return !0 === o ? s(r).set(e, n) : (o[r.id] = n), t;
              }
              var u = t(function (t, e) {
                  h(t, u, n),
                    v(t, { type: n, id: g++, frozen: void 0 }),
                    null != e && d(e, t[o], t, r);
                }),
                c = m(n);
              return (
                a(u.prototype, {
                  delete: function (t) {
                    var e = c(this);
                    if (!p(t)) return !1;
                    var n = f(t);
                    return !0 === n
                      ? s(e).delete(t)
                      : n && y(n, e.id) && delete n[e.id];
                  },
                  has: function (t) {
                    var e = c(this);
                    if (!p(t)) return !1;
                    var n = f(t);
                    return !0 === n ? s(e).has(t) : n && y(n, e.id);
                  },
                }),
                a(
                  u.prototype,
                  r
                    ? {
                        get: function (t) {
                          var e,
                            n = c(this);
                          if (p(t))
                            return !0 === (e = f(t))
                              ? s(n).get(t)
                              : e
                              ? e[n.id]
                              : void 0;
                        },
                        set: function (t, e) {
                          return i(this, t, e);
                        },
                      }
                    : {
                        add: function (t) {
                          return i(this, t, !0);
                        },
                      }
                ),
                u
              );
            },
          });
      },
      function (t, e, n) {
        function r(p) {
          var h = 1 == p,
            d = 2 == p,
            y = 3 == p,
            v = 4 == p,
            m = 6 == p,
            g = 5 == p || m;
          return function (t, e, n, r) {
            for (
              var o,
                i,
                u = w(t),
                c = b(u),
                s = x(e, n, 3),
                a = S(c.length),
                f = 0,
                e = r || _,
                l = h ? e(t, a) : d ? e(t, 0) : void 0;
              f < a;
              f++
            )
              if ((g || f in c) && ((i = s((o = c[f]), f, u)), p))
                if (h) l[f] = i;
                else if (i)
                  switch (p) {
                    case 3:
                      return !0;
                    case 5:
                      return o;
                    case 6:
                      return f;
                    case 2:
                      E.call(l, o);
                  }
                else if (v) return !1;
            return m ? -1 : y || v ? v : l;
          };
        }
        var x = n(19),
          b = n(22),
          w = n(20),
          S = n(17),
          _ = n(95),
          E = [].push;
        t.exports = {
          forEach: r(0),
          map: r(1),
          filter: r(2),
          some: r(3),
          every: r(4),
          find: r(5),
          findIndex: r(6),
        };
      },
      function (t, e, n) {
        var r = n(2),
          o = n(96),
          i = n(1)("species");
        t.exports = function (t, e) {
          var n;
          return new (
            void 0 ===
            (n =
              o(t) &&
              (("function" == typeof (n = t.constructor) &&
                (n === Array || o(n.prototype))) ||
                (r(n) && null === (n = n[i])))
                ? void 0
                : n)
              ? Array
              : n
          )(0 === e ? 0 : e);
        };
      },
      function (t, e, n) {
        var r = n(23);
        t.exports =
          Array.isArray ||
          function (t) {
            return "Array" == r(t);
          };
      },
      function (t, e, n) {
        n(41), n(98);
        n = n(10);
        t.exports = n.Array.from;
      },
      function (t, e, n) {
        var r = n(13),
          o = n(99);
        r(
          {
            target: "Array",
            stat: !0,
            forced: !n(59)(function (t) {
              Array.from(t);
            }),
          },
          { from: o }
        );
      },
      function (t, e, n) {
        "use strict";
        var h = n(19),
          d = n(20),
          y = n(58),
          v = n(54),
          m = n(17),
          g = n(100),
          x = n(56);
        t.exports = function (t) {
          var e,
            n,
            r,
            o,
            i,
            u,
            c = d(t),
            t = "function" == typeof this ? this : Array,
            s = arguments.length,
            a = 1 < s ? arguments[1] : void 0,
            f = void 0 !== a,
            l = x(c),
            p = 0;
          if (
            (f && (a = h(a, 2 < s ? arguments[2] : void 0, 2)),
            null == l || (t == Array && v(l)))
          )
            for (n = new t((e = m(c.length))); p < e; p++)
              (u = f ? a(c[p], p) : c[p]), g(n, p, u);
          else
            for (
              i = (o = l.call(c)).next, n = new t();
              !(r = i.call(o)).done;
              p++
            )
              (u = f ? y(o, a, [r.value, p], !0) : r.value), g(n, p, u);
          return (n.length = p), n;
        };
      },
      function (t, e, n) {
        "use strict";
        var r = n(25),
          o = n(5),
          i = n(14);
        t.exports = function (t, e, n) {
          e = r(e);
          e in t ? o.f(t, e, i(0, n)) : (t[e] = n);
        };
      },
      function (t, e, n) {
        n(102);
        n = n(10);
        t.exports = n.Object.assign;
      },
      function (t, e, n) {
        var r = n(13),
          n = n(103);
        r(
          { target: "Object", stat: !0, forced: Object.assign !== n },
          { assign: n }
        );
      },
      function (t, e, n) {
        "use strict";
        var p = n(6),
          r = n(4),
          h = n(62),
          d = n(52),
          y = n(44),
          v = n(20),
          m = n(22),
          o = Object.assign,
          i = Object.defineProperty;
        t.exports =
          !o ||
          r(function () {
            if (
              p &&
              1 !==
                o(
                  { b: 1 },
                  o(
                    i({}, "a", {
                      enumerable: !0,
                      get: function () {
                        i(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var t = {},
              e = {},
              n = Symbol();
            return (
              (t[n] = 7),
              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                e[t] = t;
              }),
              7 != o({}, t)[n] || "abcdefghijklmnopqrst" != h(o({}, e)).join("")
            );
          })
            ? function (t, e) {
                for (
                  var n = v(t), r = arguments.length, o = 1, i = d.f, u = y.f;
                  o < r;

                )
                  for (
                    var c,
                      s = m(arguments[o++]),
                      a = i ? h(s).concat(i(s)) : h(s),
                      f = a.length,
                      l = 0;
                    l < f;

                  )
                    (c = a[l++]), (p && !u.call(s, c)) || (n[c] = s[c]);
                return n;
              }
            : o;
      },
      function (R, t, e) {
        "use strict";
        e.r(t);
        var n = {},
          r =
            (e.r(n),
            e.d(n, "keyboardHandler", function () {
              return K;
            }),
            e.d(n, "mouseHandler", function () {
              return J;
            }),
            e.d(n, "resizeHandler", function () {
              return Z;
            }),
            e.d(n, "selectHandler", function () {
              return $;
            }),
            e.d(n, "touchHandler", function () {
              return tt;
            }),
            e.d(n, "wheelHandler", function () {
              return et;
            }),
            function (t, e) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                })(t, e);
            }),
          f = function () {
            return (f =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          };
        function o(t, e, n, r) {
          var o,
            i = arguments.length,
            u =
              i < 3
                ? e
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(e, n))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            u = Reflect.decorate(t, e, n, r);
          else
            for (var c = t.length - 1; 0 <= c; c--)
              (o = t[c]) &&
                (u = (i < 3 ? o(u) : 3 < i ? o(e, n, u) : o(e, n)) || u);
          3 < i && u && Object.defineProperty(e, n, u);
        }
        e(66), e(89), e(91), e(97), e(101);
        var i,
          u = new WeakMap();
        function c() {
          if (void 0 !== i) return i;
          var t = !1;
          try {
            var e = function () {},
              n = Object.defineProperty({}, "passive", {
                enumerable: !0,
                get: function () {
                  return (t = !0);
                },
              });
            window.addEventListener("testPassive", e, n),
              window.removeEventListener("testPassive", e, n);
          } catch (t) {}
          return (i = !!t && { passive: !1 });
        }
        function d(t) {
          var o = u.get(t) || [];
          return (
            u.set(t, o),
            function (e, t, n) {
              function r(t) {
                t.defaultPrevented || n(t);
              }
              t.split(/\s+/g).forEach(function (t) {
                o.push({ elem: e, eventName: t, handler: r }),
                  e.addEventListener(t, r, c());
              });
            }
          );
        }
        function y(t) {
          t = t.touches ? t.touches[t.touches.length - 1] : t;
          return { x: t.clientX, y: t.clientY };
        }
        function v(e, t) {
          return (t = void 0 === t ? [] : t).some(function (t) {
            return e === t;
          });
        }
        var s = ["webkit", "moz", "ms", "o"],
          C = new RegExp("^-(?!(?:" + s.join("|") + ")-)");
        function m(n, r) {
          var t, o;
          (t = r),
            (o = {}),
            Object.keys(t).forEach(function (e) {
              var n;
              C.test(e)
                ? ((n = t[e]),
                  (e = e.replace(/^-/, "")),
                  (o[e] = n),
                  s.forEach(function (t) {
                    o["-" + t + "-" + e] = n;
                  }))
                : (o[e] = t[e]);
            }),
            (r = o),
            Object.keys(r).forEach(function (t) {
              var e = t.replace(/^-/, "").replace(/-([a-z])/g, function (t, e) {
                return e.toUpperCase();
              });
              n.style[e] = r[t];
            });
        }
        l.prototype.update = function (t) {
          var e = this.velocity,
            n = this.updateTime,
            r = this.lastPosition,
            o = Date.now(),
            t = y(t),
            r = { x: -(t.x - r.x), y: -(t.y - r.y) },
            n = o - n || 16.7,
            i = (r.y / n) * 16.7;
          (e.x = (r.x / n) * 16.7 * this.velocityMultiplier),
            (e.y = i * this.velocityMultiplier),
            (this.delta = r),
            (this.updateTime = o),
            (this.lastPosition = t);
        };
        var N = l,
          F =
            (Object.defineProperty(a.prototype, "_primitiveValue", {
              get: function () {
                return { x: 0, y: 0 };
              },
              enumerable: !0,
              configurable: !0,
            }),
            (a.prototype.isActive = function () {
              return void 0 !== this._activeTouchID;
            }),
            (a.prototype.getDelta = function () {
              var t = this._getActiveTracker();
              return t ? f({}, t.delta) : this._primitiveValue;
            }),
            (a.prototype.getVelocity = function () {
              var t = this._getActiveTracker();
              return t ? f({}, t.velocity) : this._primitiveValue;
            }),
            (a.prototype.getEasingDistance = function (t) {
              var n = 1 - t,
                r = { x: 0, y: 0 },
                o = this.getVelocity();
              return (
                Object.keys(o).forEach(function (t) {
                  for (var e = Math.abs(o[t]) <= 10 ? 0 : o[t]; 0 !== e; )
                    (r[t] += e), (e = (e * n) | 0);
                }),
                r
              );
            }),
            (a.prototype.track = function (t) {
              var e = this,
                t = t.targetTouches;
              return (
                Array.from(t).forEach(function (t) {
                  e._add(t);
                }),
                this._touchList
              );
            }),
            (a.prototype.update = function (t) {
              var e = this,
                n = t.touches,
                t = t.changedTouches;
              return (
                Array.from(n).forEach(function (t) {
                  e._renew(t);
                }),
                this._setActiveID(t),
                this._touchList
              );
            }),
            (a.prototype.release = function (t) {
              var e = this;
              delete this._activeTouchID,
                Array.from(t.changedTouches).forEach(function (t) {
                  e._delete(t);
                });
            }),
            (a.prototype._add = function (t) {
              this._has(t) && this._delete(t);
              var e = new N(t);
              this._touchList[t.identifier] = e;
            }),
            (a.prototype._renew = function (t) {
              this._has(t) && this._touchList[t.identifier].update(t);
            }),
            (a.prototype._delete = function (t) {
              delete this._touchList[t.identifier];
            }),
            (a.prototype._has = function (t) {
              return this._touchList.hasOwnProperty(t.identifier);
            }),
            (a.prototype._setActiveID = function (t) {
              this._activeTouchID = t[t.length - 1].identifier;
            }),
            (a.prototype._getActiveTracker = function () {
              return this._touchList[this._activeTouchID];
            }),
            a);
        function a() {
          this._touchList = {};
        }
        function l(t) {
          (this.velocityMultiplier = window.devicePixelRatio),
            (this.updateTime = Date.now()),
            (this.delta = { x: 0, y: 0 }),
            (this.velocity = { x: 0, y: 0 }),
            (this.lastPosition = { x: 0, y: 0 }),
            (this.lastPosition = y(t));
        }
        function g(t, e, n) {
          return Math.max(e, Math.min(n, t));
        }
        function H(i, u, c) {
          void 0 === u && (u = 0);
          var s,
            a = -1 / 0;
          return function () {
            for (var t, e, n = this, r = [], o = 0; o < arguments.length; o++)
              r[o] = arguments[o];
            c &&
              ((e = (t = Date.now()) - a), (a = t), u <= e && i.apply(this, r)),
              clearTimeout(s),
              (s = setTimeout(function () {
                i.apply(n, r);
              }, u));
          };
        }
        function W(r, o) {
          return (
            void 0 === r && (r = -1 / 0),
            void 0 === o && (o = 1 / 0),
            function (t, e) {
              var n = "_" + e;
              Object.defineProperty(t, e, {
                get: function () {
                  return this[n];
                },
                set: function (t) {
                  Object.defineProperty(this, n, {
                    value: g(t, r, o),
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  });
                },
                enumerable: !0,
                configurable: !0,
              });
            }
          );
        }
        function p(t, e) {
          var n = "_" + e;
          Object.defineProperty(t, e, {
            get: function () {
              return this[n];
            },
            set: function (t) {
              Object.defineProperty(this, n, {
                value: !!t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              });
            },
            enumerable: !0,
            configurable: !0,
          });
        }
        function B() {
          for (var o = [], t = 0; t < arguments.length; t++)
            o[t] = arguments[t];
          return function (t, e, n) {
            var r = n.value;
            return {
              get: function () {
                return (
                  this.hasOwnProperty(e) ||
                    Object.defineProperty(this, e, {
                      value: H.apply(
                        void 0,
                        (function () {
                          for (
                            var t = 0, e = 0, n = arguments.length;
                            e < n;
                            e++
                          )
                            t += arguments[e].length;
                          for (var r = Array(t), o = 0, e = 0; e < n; e++)
                            for (
                              var i = arguments[e], u = 0, c = i.length;
                              u < c;
                              u++, o++
                            )
                              r[o] = i[u];
                          return r;
                        })([r], o)
                      ),
                    }),
                  this[e]
                );
              },
            };
          };
        }
        Object.defineProperty(x.prototype, "wheelEventTarget", {
          get: function () {
            return this.delegateTo;
          },
          set: function (t) {
            console.warn(
              "[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."
            ),
              (this.delegateTo = t);
          },
          enumerable: !0,
          configurable: !0,
        }),
          o([W(0, 1)], x.prototype, "damping", void 0),
          o([W(0, 1 / 0)], x.prototype, "thumbMinSize", void 0),
          o([p], x.prototype, "renderByPixels", void 0),
          o([p], x.prototype, "alwaysShowTracks", void 0),
          o([p], x.prototype, "continuousScrolling", void 0);
        var h,
          G = x;
        function x(e) {
          var n = this;
          void 0 === e && (e = {}),
            (this.damping = 0.1),
            (this.thumbMinSize = 20),
            (this.renderByPixels = !0),
            (this.alwaysShowTracks = !1),
            (this.continuousScrolling = !0),
            (this.delegateTo = null),
            (this.plugins = {}),
            Object.keys(e).forEach(function (t) {
              n[t] = e[t];
            });
        }
        ((L = h = h || {}).X = "x"), (L.Y = "y");
        (S.prototype.attachTo = function (t) {
          t.appendChild(this.element);
        }),
          (S.prototype.update = function (t, e, n) {
            (this.realSize = Math.min(e / n, 1) * e),
              (this.displaySize = Math.max(this.realSize, this._minSize)),
              (this.offset =
                (t / n) * (e + (this.realSize - this.displaySize))),
              m(this.element, this._getStyle());
          }),
          (S.prototype._getStyle = function () {
            switch (this._direction) {
              case h.X:
                return {
                  width: this.displaySize + "px",
                  "-transform": "translate3d(" + this.offset + "px, 0, 0)",
                };
              case h.Y:
                return {
                  height: this.displaySize + "px",
                  "-transform": "translate3d(0, " + this.offset + "px, 0)",
                };
              default:
                return null;
            }
          });
        var X = S,
          U =
            ((w.prototype.attachTo = function (t) {
              t.appendChild(this.element);
            }),
            (w.prototype.show = function () {
              this._isShown ||
                ((this._isShown = !0), this.element.classList.add("show"));
            }),
            (w.prototype.hide = function () {
              this._isShown &&
                ((this._isShown = !1), this.element.classList.remove("show"));
            }),
            (w.prototype.update = function (t, e, n) {
              m(this.element, { display: n <= e ? "none" : "block" }),
                this.thumb.update(t, e, n);
            }),
            w),
          V =
            ((b.prototype.update = function () {
              var t = this._scrollbar,
                e = t.size,
                t = t.offset;
              this.xAxis.update(t.x, e.container.width, e.content.width),
                this.yAxis.update(t.y, e.container.height, e.content.height);
            }),
            (b.prototype.autoHideOnIdle = function () {
              this._scrollbar.options.alwaysShowTracks ||
                (this.xAxis.hide(), this.yAxis.hide());
            }),
            o([B(300)], b.prototype, "autoHideOnIdle", null),
            b),
          Y = new WeakMap();
        function b(t) {
          var e = (this._scrollbar = t).options.thumbMinSize;
          (this.xAxis = new U(h.X, e)),
            (this.yAxis = new U(h.Y, e)),
            this.xAxis.attachTo(t.containerEl),
            this.yAxis.attachTo(t.containerEl),
            t.options.alwaysShowTracks &&
              (this.xAxis.show(), this.yAxis.show());
        }
        function w(t, e) {
          void 0 === e && (e = 0),
            (this.element = document.createElement("div")),
            (this._isShown = !1),
            (this.element.className = "scrollbar-track scrollbar-track-" + t),
            (this.thumb = new X(t, e)),
            this.thumb.attachTo(this.element);
        }
        function S(t, e) {
          void 0 === e && (e = 0),
            (this._direction = t),
            (this._minSize = e),
            (this.element = document.createElement("div")),
            (this.displaySize = 0),
            (this.realSize = 0),
            (this.offset = 0),
            (this.element.className = "scrollbar-thumb scrollbar-thumb-" + t);
        }
        function q(t) {
          return Math.pow(t - 1, 3) + 1;
        }
        (A.prototype.onInit = function () {}),
          (A.prototype.onDestroy = function () {}),
          (A.prototype.onUpdate = function () {}),
          (A.prototype.onRender = function (t) {}),
          (A.prototype.transformDelta = function (t, e) {
            return f({}, t);
          }),
          (A.pluginName = ""),
          (A.defaultOptions = {});
        var _,
          E,
          O,
          Q = A,
          T = { order: new Set(), constructors: {} };
        function A(t, e) {
          var n = this.constructor;
          (this.scrollbar = t),
            (this.name = n.pluginName),
            (this.options = f(f({}, n.defaultOptions), e));
        }
        function K(r) {
          var t = d(r),
            o = r.containerEl;
          t(o, "keydown", function (e) {
            var t,
              n = document.activeElement;
            (n !== o && !o.contains(n)) ||
              (("INPUT" === n.tagName ||
                "SELECT" === n.tagName ||
                "TEXTAREA" === n.tagName ||
                n.isContentEditable) &&
                !n.disabled) ||
              ((n = (function (t, e) {
                var n,
                  r = t.size,
                  o = t.limit,
                  i = t.offset;
                switch (e) {
                  case _.TAB:
                    return (
                      (n = t),
                      void requestAnimationFrame(function () {
                        n.scrollIntoView(document.activeElement, {
                          offsetTop: n.size.container.height / 2,
                          offsetLeft: n.size.container.width / 2,
                          onlyScrollIfNeeded: !0,
                        });
                      })
                    );
                  case _.SPACE:
                    return [0, 200];
                  case _.PAGE_UP:
                    return [0, 40 - r.container.height];
                  case _.PAGE_DOWN:
                    return [0, r.container.height - 40];
                  case _.END:
                    return [0, o.y - i.y];
                  case _.HOME:
                    return [0, -i.y];
                  case _.LEFT:
                    return [-40, 0];
                  case _.UP:
                    return [0, -40];
                  case _.RIGHT:
                    return [40, 0];
                  case _.DOWN:
                    return [0, 40];
                  default:
                    return null;
                }
              })(r, e.keyCode || e.which)) &&
                ((t = n[0]),
                (n = n[1]),
                r.addTransformableMomentum(t, n, e, function (t) {
                  t
                    ? e.preventDefault()
                    : (r.containerEl.blur(),
                      r.parent && r.parent.containerEl.focus());
                })));
          });
        }
        function J(i) {
          var r,
            o,
            u,
            c,
            s,
            t = d(i),
            a = i.containerEl,
            e = i.track,
            f = e.xAxis,
            l = e.yAxis;
          function p(t, e) {
            var n = i.size,
              r = i.limit,
              o = i.offset;
            return t === E.X
              ? g(
                  (e /
                    (n.container.width +
                      (f.thumb.realSize - f.thumb.displaySize))) *
                    n.content.width,
                  0,
                  r.x
                ) - o.x
              : t === E.Y
              ? g(
                  (e /
                    (n.container.height +
                      (l.thumb.realSize - l.thumb.displaySize))) *
                    n.content.height,
                  0,
                  r.y
                ) - o.y
              : 0;
          }
          function h(t) {
            return v(t, [f.element, f.thumb.element])
              ? E.X
              : v(t, [l.element, l.thumb.element])
              ? E.Y
              : void 0;
          }
          t(a, "click", function (t) {
            var e, n, r;
            !o &&
              v(t.target, [f.element, l.element]) &&
              ((e = h((n = t.target))),
              (n = n.getBoundingClientRect()),
              (t = y(t)),
              e === E.X &&
                ((r = t.x - n.left - f.thumb.displaySize / 2),
                i.setMomentum(p(e, r), 0)),
              e === E.Y &&
                ((r = t.y - n.top - l.thumb.displaySize / 2),
                i.setMomentum(0, p(e, r))));
          }),
            t(a, "mousedown", function (t) {
              var e, n;
              v(t.target, [f.thumb.element, l.thumb.element]) &&
                ((r = !0),
                (e = t.target),
                (t = y(t)),
                (n = e.getBoundingClientRect()),
                (c = h(e)),
                (u = { x: t.x - n.left, y: t.y - n.top }),
                (s = a.getBoundingClientRect()),
                m(i.containerEl, { "-user-select": "none" }));
            }),
            t(window, "mousemove", function (t) {
              var e;
              r &&
                ((o = !0),
                (t = y(t)),
                c === E.X &&
                  ((e = t.x - u.x - s.left), i.setMomentum(p(c, e), 0)),
                c === E.Y &&
                  ((e = t.y - u.y - s.top), i.setMomentum(0, p(c, e))));
            }),
            t(window, "mouseup blur", function () {
              (r = o = !1), m(i.containerEl, { "-user-select": "" });
            });
        }
        function Z(t) {
          d(t)(window, "resize", H(t.update.bind(t), 300));
        }
        function $(c) {
          var s,
            t = d(c),
            e = c.containerEl,
            n = c.contentEl,
            a = !1,
            r = !1;
          t(window, "mousemove", function (t) {
            var e, n, r, o, i, u;
            a &&
              (cancelAnimationFrame(s),
              (function t(e) {
                var n,
                  r = e.x,
                  o = e.y;
                (r || o) &&
                  ((e = c.offset),
                  (n = c.limit),
                  c.setMomentum(
                    g(e.x + r, 0, n.x) - e.x,
                    g(e.y + o, 0, n.y) - e.y
                  ),
                  (s = requestAnimationFrame(function () {
                    t({ x: r, y: o });
                  })));
              })(
                ((e = c.bounding),
                (n = e.top),
                (r = e.right),
                (o = e.bottom),
                (e = e.left),
                (t = y(t)),
                (i = t.x),
                (t = t.y),
                (u = { x: 0, y: 0 }),
                (0 === i && 0 === t) ||
                  (r - 20 < i
                    ? (u.x = i - r + 20)
                    : i < e + 20 && (u.x = i - e - 20),
                  o - 20 < t
                    ? (u.y = t - o + 20)
                    : t < n + 20 && (u.y = t - n - 20),
                  (u.x *= 2),
                  (u.y *= 2)),
                u)
              ));
          }),
            t(n, "contextmenu", function () {
              (r = !0), cancelAnimationFrame(s), (a = !1);
            }),
            t(n, "mousedown", function () {
              r = !1;
            }),
            t(n, "selectstart", function () {
              r || (cancelAnimationFrame(s), (a = !0));
            }),
            t(window, "mouseup blur", function () {
              cancelAnimationFrame(s), (r = a = !1);
            }),
            t(e, "scroll", function (t) {
              t.preventDefault(), (e.scrollTop = e.scrollLeft = 0);
            });
        }
        function tt(r) {
          var n,
            t = r.options.delegateTo || r.containerEl,
            o = new F(),
            e = d(r),
            i = 0;
          e(t, "touchstart", function (t) {
            o.track(t),
              r.setMomentum(0, 0),
              0 === i &&
                ((n = r.options.damping),
                (r.options.damping = Math.max(n, 0.5))),
              i++;
          }),
            e(t, "touchmove", function (e) {
              var t, n;
              (O && O !== r) ||
                (o.update(e),
                (t = (n = o.getDelta()).x),
                (n = n.y),
                r.addTransformableMomentum(t, n, e, function (t) {
                  t && e.cancelable && (e.preventDefault(), (O = r));
                }));
            }),
            e(t, "touchcancel touchend", function (t) {
              var e = o.getEasingDistance(n);
              r.addTransformableMomentum(e.x, e.y, t),
                0 == --i && (r.options.damping = n),
                o.release(t),
                (O = null);
            });
        }
        function et(r) {
          d(r)(
            r.options.delegateTo || r.containerEl,
            "onwheel" in window ||
              document.implementation.hasFeature("Events.wheel", "3.0")
              ? "wheel"
              : "mousewheel",
            function (e) {
              var t,
                n =
                  "deltaX" in (t = e)
                    ? ((n = rt(t.deltaMode)),
                      {
                        x: (t.deltaX / P.STANDARD) * n,
                        y: (t.deltaY / P.STANDARD) * n,
                      })
                    : "wheelDeltaX" in t
                    ? {
                        x: t.wheelDeltaX / P.OTHERS,
                        y: t.wheelDeltaY / P.OTHERS,
                      }
                    : { x: 0, y: t.wheelDelta / P.OTHERS };
              r.addTransformableMomentum(n.x, n.y, e, function (t) {
                t && e.preventDefault();
              });
            }
          );
        }
        ((L = _ = _ || {})[(L.TAB = 9)] = "TAB"),
          (L[(L.SPACE = 32)] = "SPACE"),
          (L[(L.PAGE_UP = 33)] = "PAGE_UP"),
          (L[(L.PAGE_DOWN = 34)] = "PAGE_DOWN"),
          (L[(L.END = 35)] = "END"),
          (L[(L.HOME = 36)] = "HOME"),
          (L[(L.LEFT = 37)] = "LEFT"),
          (L[(L.UP = 38)] = "UP"),
          (L[(L.RIGHT = 39)] = "RIGHT"),
          (L[(L.DOWN = 40)] = "DOWN"),
          ((L = E = E || {})[(L.X = 0)] = "X"),
          (L[(L.Y = 1)] = "Y");
        var P = { STANDARD: 1, OTHERS: -3 },
          nt = [1, 28, 500],
          rt = function (t) {
            return nt[t] || nt[0];
          },
          j = new Map(),
          ot =
            (Object.defineProperty(k.prototype, "parent", {
              get: function () {
                for (var t = this.containerEl.parentElement; t; ) {
                  var e = j.get(t);
                  if (e) return e;
                  t = t.parentElement;
                }
                return null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(k.prototype, "scrollTop", {
              get: function () {
                return this.offset.y;
              },
              set: function (t) {
                this.setPosition(this.scrollLeft, t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(k.prototype, "scrollLeft", {
              get: function () {
                return this.offset.x;
              },
              set: function (t) {
                this.setPosition(t, this.scrollTop);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (k.prototype.getSize = function () {
              return (
                (e = (t = this).containerEl),
                (t = t.contentEl),
                (n = getComputedStyle(e)),
                (r = [
                  "paddingTop",
                  "paddingBottom",
                  "paddingLeft",
                  "paddingRight",
                ].map(function (t) {
                  return n[t] ? parseFloat(n[t]) : 0;
                })),
                (o = r[0] + r[1]),
                (r = r[2] + r[3]),
                {
                  container: { width: e.clientWidth, height: e.clientHeight },
                  content: {
                    width: t.offsetWidth - t.clientWidth + t.scrollWidth + r,
                    height:
                      t.offsetHeight - t.clientHeight + t.scrollHeight + o,
                  },
                }
              );
              var t, e, n, r, o;
            }),
            (k.prototype.update = function () {
              var t, e, n, r;
              (e = (t = this).getSize()),
                (n = {
                  x: Math.max(e.content.width - e.container.width, 0),
                  y: Math.max(e.content.height - e.container.height, 0),
                }),
                (r = t.containerEl.getBoundingClientRect()),
                (r = {
                  top: Math.max(r.top, 0),
                  right: Math.min(r.right, window.innerWidth),
                  bottom: Math.min(r.bottom, window.innerHeight),
                  left: Math.max(r.left, 0),
                }),
                (t.size = e),
                (t.limit = n),
                (t.bounding = r),
                t.track.update(),
                t.setPosition(),
                this._plugins.forEach(function (t) {
                  t.onUpdate();
                });
            }),
            (k.prototype.isVisible = function (t) {
              return (
                (t = t),
                (e = (e = this).bounding),
                (t = t.getBoundingClientRect()),
                (n = Math.max(e.top, t.top)),
                (r = Math.max(e.left, t.left)),
                (o = Math.min(e.right, t.right)),
                n < Math.min(e.bottom, t.bottom) && r < o
              );
              var e, n, r, o;
            }),
            (k.prototype.setPosition = function (t, e, n) {
              var r,
                o,
                i,
                u,
                c,
                s = this,
                a =
                  (void 0 === t && (t = this.offset.x),
                  void 0 === e && (e = this.offset.y),
                  void 0 === n && (n = {}),
                  (t = t),
                  (e = e),
                  (o = (r = this).options),
                  (i = r.offset),
                  (u = r.limit),
                  (c = r.track),
                  (r = r.contentEl),
                  o.renderByPixels &&
                    ((t = Math.round(t)), (e = Math.round(e))),
                  (t = g(t, 0, u.x)),
                  (e = g(e, 0, u.y)),
                  t !== i.x && c.xAxis.show(),
                  e !== i.y && c.yAxis.show(),
                  o.alwaysShowTracks || c.autoHideOnIdle(),
                  t === i.x && e === i.y
                    ? null
                    : (m(r, {
                        "-transform":
                          "translate3d(" +
                          -(i.x = t) +
                          "px, " +
                          -(i.y = e) +
                          "px, 0)",
                      }),
                      c.update(),
                      { offset: f({}, i), limit: f({}, u) }));
              a &&
                !n.withoutCallbacks &&
                this._listeners.forEach(function (t) {
                  t.call(s, a);
                });
            }),
            (k.prototype.scrollTo = function (t, e, n, r) {
              var o, i, u, c, s, a, f, l, p, h;
              void 0 === t && (t = this.offset.x),
                void 0 === e && (e = this.offset.y),
                (o = this),
                (t = t),
                (e = e),
                void 0 === (i = n = void 0 === n ? 0 : n) && (i = 0),
                (r = (n = void 0 === (r = void 0 === r ? {} : r) ? {} : r)
                  .easing),
                (u = void 0 === r ? q : r),
                (c = n.callback),
                (r = o.options),
                (n = o.offset),
                (s = o.limit),
                r.renderByPixels && ((t = Math.round(t)), (e = Math.round(e))),
                (a = n.x),
                (f = n.y),
                (l = g(t, 0, s.x) - a),
                (p = g(e, 0, s.y) - f),
                (h = Date.now()),
                cancelAnimationFrame(Y.get(o)),
                (function t() {
                  var e = Date.now() - h,
                    n = i ? u(Math.min(e / i, 1)) : 1;
                  o.setPosition(a + l * n, f + p * n),
                    i <= e
                      ? "function" == typeof c && c.call(o)
                      : ((n = requestAnimationFrame(t)), Y.set(o, n));
                })();
            }),
            (k.prototype.scrollIntoView = function (t, e) {
              var n, r, o, i, u, c, s, a, f;
              (n = this),
                (t = t),
                (r =
                  void 0 ===
                    (r = (e = void 0 === (e = void 0 === e ? {} : e) ? {} : e)
                      .alignToTop) || r),
                (o = void 0 !== (o = e.onlyScrollIfNeeded) && o),
                (i = void 0 === (i = e.offsetTop) ? 0 : i),
                (u = void 0 === (u = e.offsetLeft) ? 0 : u),
                (e = void 0 === (e = e.offsetBottom) ? 0 : e),
                (c = n.containerEl),
                (s = n.bounding),
                (a = n.offset),
                (f = n.limit),
                t &&
                  c.contains(t) &&
                  ((c = t.getBoundingClientRect()),
                  (o && n.isVisible(t)) ||
                    ((o = r ? c.top - s.top - i : c.bottom - s.bottom + e),
                    n.setMomentum(c.left - s.left - u, g(o, -a.y, f.y - a.y))));
            }),
            (k.prototype.addListener = function (t) {
              if ("function" != typeof t)
                throw new TypeError(
                  "[smooth-scrollbar] scrolling listener should be a function"
                );
              this._listeners.add(t);
            }),
            (k.prototype.removeListener = function (t) {
              this._listeners.delete(t);
            }),
            (k.prototype.addTransformableMomentum = function (t, e, n, r) {
              this._updateDebounced();
              (t = this._plugins.reduce(
                function (t, e) {
                  return e.transformDelta(t, n) || t;
                },
                { x: t, y: e }
              )),
                (e = !this._shouldPropagateMomentum(t.x, t.y));
              e && this.addMomentum(t.x, t.y), r && r.call(this, e);
            }),
            (k.prototype.addMomentum = function (t, e) {
              this.setMomentum(this._momentum.x + t, this._momentum.y + e);
            }),
            (k.prototype.setMomentum = function (t, e) {
              0 === this.limit.x && (t = 0),
                0 === this.limit.y && (e = 0),
                this.options.renderByPixels &&
                  ((t = Math.round(t)), (e = Math.round(e))),
                (this._momentum.x = t),
                (this._momentum.y = e);
            }),
            (k.prototype.updatePluginOptions = function (e, n) {
              this._plugins.forEach(function (t) {
                t.name === e && Object.assign(t.options, n);
              });
            }),
            (k.prototype.destroy = function () {
              var t,
                e = this.containerEl,
                n = this.contentEl;
              (t = this),
                (r = u.get(t)) &&
                  (r.forEach(function (t) {
                    var e = t.elem,
                      n = t.eventName,
                      t = t.handler;
                    e.removeEventListener(n, t, c());
                  }),
                  u.delete(t)),
                this._listeners.clear(),
                this.setMomentum(0, 0),
                cancelAnimationFrame(this._renderID),
                this._observer && this._observer.disconnect(),
                j.delete(this.containerEl);
              for (var r = Array.from(n.childNodes); e.firstChild; )
                e.removeChild(e.firstChild);
              r.forEach(function (t) {
                e.appendChild(t);
              }),
                m(e, { overflow: "" }),
                (e.scrollTop = this.scrollTop),
                (e.scrollLeft = this.scrollLeft),
                this._plugins.forEach(function (t) {
                  t.onDestroy();
                }),
                (this._plugins.length = 0);
            }),
            (k.prototype._init = function () {
              var e = this;
              this.update(),
                Object.keys(n).forEach(function (t) {
                  n[t](e);
                }),
                this._plugins.forEach(function (t) {
                  t.onInit();
                }),
                this._render();
            }),
            (k.prototype._updateDebounced = function () {
              this.update();
            }),
            (k.prototype._shouldPropagateMomentum = function (t, e) {
              void 0 === t && (t = 0), void 0 === e && (e = 0);
              var n = this.options,
                r = this.offset,
                o = this.limit;
              if (!n.continuousScrolling) return !1;
              0 === o.x && 0 === o.y && this._updateDebounced();
              (n = g(t + r.x, 0, o.x)), (t = g(e + r.y, 0, o.y));
              return (
                n === r.x &&
                t === r.y &&
                (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y)
              );
            }),
            (k.prototype._render = function () {
              var t,
                e,
                n = this._momentum,
                r =
                  ((n.x || n.y) &&
                    ((t = this._nextTick("x")),
                    (e = this._nextTick("y")),
                    (n.x = t.momentum),
                    (n.y = e.momentum),
                    this.setPosition(t.position, e.position)),
                  f({}, this._momentum));
              this._plugins.forEach(function (t) {
                t.onRender(r);
              }),
                (this._renderID = requestAnimationFrame(
                  this._render.bind(this)
                ));
            }),
            (k.prototype._nextTick = function (t) {
              var e = this.options,
                n = this.offset,
                r = this._momentum,
                n = n[t],
                r = r[t];
              if (Math.abs(r) <= 0.1) return { momentum: 0, position: n + r };
              t = r * (1 - e.damping);
              return (
                e.renderByPixels && (t |= 0),
                { momentum: t, position: n + r - t }
              );
            }),
            o([B(100, !0)], k.prototype, "_updateDebounced", null),
            k),
          it = "smooth-scrollbar-style",
          M = !1;
        function k(t, e) {
          var n,
            r,
            o = this,
            i =
              ((this.offset = { x: 0, y: 0 }),
              (this.limit = { x: 1 / 0, y: 1 / 0 }),
              (this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }),
              (this._plugins = []),
              (this._momentum = { x: 0, y: 0 }),
              (this._listeners = new Set()),
              (this.containerEl = t),
              (this.contentEl = document.createElement("div"))),
            e =
              ((this.options = new G(e)),
              t.setAttribute("data-scrollbar", "true"),
              t.setAttribute("tabindex", "-1"),
              m(t, { overflow: "hidden", outline: "none" }),
              window.navigator.msPointerEnabled &&
                (t.style.msTouchAction = "none"),
              (i.className = "scroll-content"),
              Array.from(t.childNodes).forEach(function (t) {
                i.appendChild(t);
              }),
              t.appendChild(i),
              (this.track = new V(this)),
              (this.size = this.getSize()),
              (this._plugins =
                ((r = (n = this).options.plugins),
                Array.from(T.order)
                  .filter(function (t) {
                    return !1 !== r[t];
                  })
                  .map(function (t) {
                    var e = new T.constructors[t](n, r[t]);
                    return (r[t] = e.options), e;
                  }))),
              t.scrollLeft),
            u = t.scrollTop,
            e =
              ((t.scrollLeft = t.scrollTop = 0),
              this.setPosition(e, u, { withoutCallbacks: !0 }),
              window.ResizeObserver);
          "function" == typeof e &&
            ((this._observer = new e(function () {
              o.update();
            })),
            this._observer.observe(i)),
            j.set(t, this),
            requestAnimationFrame(function () {
              o._init();
            });
        }
        function ut() {
          var t;
          M ||
            "undefined" == typeof window ||
            (((t = document.createElement("style")).id = it),
            (t.textContent =
              "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n"),
            document.head && document.head.appendChild(t),
            (M = !0));
        }
        e.d(t, "ScrollbarPlugin", function () {
          return Q;
        });
        r((z = I), (L = D = ot)),
          (z.prototype =
            null === L
              ? Object.create(L)
              : ((ct.prototype = L.prototype), new ct())),
          (I.init = function (t, e) {
            if (t && 1 === t.nodeType)
              return ut(), j.has(t) ? j.get(t) : new ot(t, e);
            throw new TypeError(
              "expect element to be DOM Element, but got " + t
            );
          }),
          (I.initAll = function (e) {
            return Array.from(
              document.querySelectorAll("[data-scrollbar]"),
              function (t) {
                return I.init(t, e);
              }
            );
          }),
          (I.has = function (t) {
            return j.has(t);
          }),
          (I.get = function (t) {
            return j.get(t);
          }),
          (I.getAll = function () {
            return Array.from(j.values());
          }),
          (I.destroy = function (t) {
            t = j.get(t);
            t && t.destroy();
          }),
          (I.destroyAll = function () {
            j.forEach(function (t) {
              t.destroy();
            });
          }),
          (I.use = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              t.forEach(function (t) {
                var e = t.pluginName;
                if (!e) throw new TypeError("plugin name is required");
                T.order.add(e), (T.constructors[e] = t);
              });
            }.apply(void 0, t);
          }),
          (I.attachStyle = ut),
          (I.detachStyle = function () {
            var t;
            M &&
              "undefined" != typeof window &&
              (t = document.getElementById(it)) &&
              t.parentNode &&
              (t.parentNode.removeChild(t), (M = !1));
          }),
          (I.version = "8.8.4"),
          (I.ScrollbarPlugin = Q);
        var D,
          z,
          L,
          e = I;
        function I() {
          return (null !== D && D.apply(this, arguments)) || this;
        }
        function ct() {
          this.constructor = z;
        }
        t.default = e;
      },
    ]),
    (r = {}),
    (o.m = n),
    (o.c = r),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ""),
    o((o.s = 65)).default
  );
  function o(t) {
    if (r[t]) return r[t].exports;
    var e = (r[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  var n, r;
});
