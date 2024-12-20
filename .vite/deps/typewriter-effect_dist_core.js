import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/typewriter-effect/dist/core.js
var require_core = __commonJS({
  "node_modules/typewriter-effect/dist/core.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Typewriter", [], t) : "object" == typeof exports ? exports.Typewriter = t() : e.Typewriter = t();
    }("undefined" != typeof self ? self : exports, () => (() => {
      var e = { 75: function(e2) {
        (function() {
          var t2, n2, r2, o, a, i;
          "undefined" != typeof performance && null !== performance && performance.now ? e2.exports = function() {
            return performance.now();
          } : "undefined" != typeof process && null !== process && process.hrtime ? (e2.exports = function() {
            return (t2() - a) / 1e6;
          }, n2 = process.hrtime, o = (t2 = function() {
            var e3;
            return 1e9 * (e3 = n2())[0] + e3[1];
          })(), i = 1e9 * process.uptime(), a = o - i) : Date.now ? (e2.exports = function() {
            return Date.now() - r2;
          }, r2 = Date.now()) : (e2.exports = function() {
            return (/* @__PURE__ */ new Date()).getTime() - r2;
          }, r2 = (/* @__PURE__ */ new Date()).getTime());
        }).call(this);
      }, 4087: (e2, t2, n2) => {
        for (var r2 = n2(75), o = "undefined" == typeof window ? n2.g : window, a = ["moz", "webkit"], i = "AnimationFrame", s = o["request" + i], u = o["cancel" + i] || o["cancelRequest" + i], l = 0; !s && l < a.length; l++) s = o[a[l] + "Request" + i], u = o[a[l] + "Cancel" + i] || o[a[l] + "CancelRequest" + i];
        if (!s || !u) {
          var c = 0, p = 0, d = [];
          s = function(e3) {
            if (0 === d.length) {
              var t3 = r2(), n3 = Math.max(0, 16.666666666666668 - (t3 - c));
              c = n3 + t3, setTimeout(function() {
                var e4 = d.slice(0);
                d.length = 0;
                for (var t4 = 0; t4 < e4.length; t4++) if (!e4[t4].cancelled) try {
                  e4[t4].callback(c);
                } catch (e5) {
                  setTimeout(function() {
                    throw e5;
                  }, 0);
                }
              }, Math.round(n3));
            }
            return d.push({ handle: ++p, callback: e3, cancelled: false }), p;
          }, u = function(e3) {
            for (var t3 = 0; t3 < d.length; t3++) d[t3].handle === e3 && (d[t3].cancelled = true);
          };
        }
        e2.exports = function(e3) {
          return s.call(o, e3);
        }, e2.exports.cancel = function() {
          u.apply(o, arguments);
        }, e2.exports.polyfill = function(e3) {
          e3 || (e3 = o), e3.requestAnimationFrame = s, e3.cancelAnimationFrame = u;
        };
      } }, t = {};
      function n(r2) {
        var o = t[r2];
        if (void 0 !== o) return o.exports;
        var a = t[r2] = { exports: {} };
        return e[r2].call(a.exports, a, a.exports, n), a.exports;
      }
      n.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return n.d(t2, { a: t2 }), t2;
      }, n.d = (e2, t2) => {
        for (var r2 in t2) n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window) return window;
        }
      }(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
      var r = {};
      return (() => {
        "use strict";
        n.d(r, { default: () => C });
        var e2 = n(4087), t2 = n.n(e2);
        const o = function(e3) {
          return new RegExp(/<[a-z][\s\S]*>/i).test(e3);
        }, a = function(e3, t3) {
          return Math.floor(Math.random() * (t3 - e3 + 1)) + e3;
        };
        var i = "TYPE_CHARACTER", s = "REMOVE_CHARACTER", u = "REMOVE_ALL", l = "REMOVE_LAST_VISIBLE_NODE", c = "PAUSE_FOR", p = "CALL_FUNCTION", d = "ADD_HTML_TAG_ELEMENT", f = "CHANGE_DELETE_SPEED", v = "CHANGE_DELAY", h = "CHANGE_CURSOR", m = "PASTE_STRING", y = "HTML_TAG";
        function g(e3) {
          return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, g(e3);
        }
        function E(e3, t3) {
          var n2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(e3);
            t3 && (r2 = r2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function w(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n2 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? E(Object(n2), true).forEach(function(t4) {
              A(e3, t4, n2[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : E(Object(n2)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
            });
          }
          return e3;
        }
        function b(e3) {
          return function(e4) {
            if (Array.isArray(e4)) return T(e4);
          }(e3) || function(e4) {
            if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"]) return Array.from(e4);
          }(e3) || function(e4, t3) {
            if (e4) {
              if ("string" == typeof e4) return T(e4, t3);
              var n2 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === n2 && e4.constructor && (n2 = e4.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e4) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? T(e4, t3) : void 0;
            }
          }(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function T(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
          return r2;
        }
        function S(e3, t3) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, N(r2.key), r2);
          }
        }
        function A(e3, t3, n2) {
          return (t3 = N(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
        }
        function N(e3) {
          var t3 = function(e4, t4) {
            if ("object" !== g(e4) || null === e4) return e4;
            var n2 = e4[Symbol.toPrimitive];
            if (void 0 !== n2) {
              var r2 = n2.call(e4, "string");
              if ("object" !== g(r2)) return r2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" === g(t3) ? t3 : String(t3);
        }
        const C = function() {
          function n2(r3, g3) {
            var E2 = this;
            if (function(e3, t3) {
              if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }(this, n2), A(this, "state", { cursorAnimation: null, lastFrameTime: null, pauseUntil: null, eventQueue: [], eventLoop: null, eventLoopPaused: false, reverseCalledEvents: [], calledEvents: [], visibleNodes: [], initialOptions: null, elements: { container: null, wrapper: document.createElement("span"), cursor: document.createElement("span") } }), A(this, "options", { strings: null, cursor: "|", delay: "natural", pauseFor: 1500, deleteSpeed: "natural", loop: false, autoStart: false, devMode: false, skipAddStyles: false, wrapperClassName: "Typewriter__wrapper", cursorClassName: "Typewriter__cursor", stringSplitter: null, onCreateTextNode: null, onRemoveNode: null }), A(this, "setupWrapperElement", function() {
              E2.state.elements.container && (E2.state.elements.wrapper.className = E2.options.wrapperClassName, E2.state.elements.cursor.className = E2.options.cursorClassName, E2.state.elements.cursor.innerHTML = E2.options.cursor, E2.state.elements.container.innerHTML = "", E2.state.elements.container.appendChild(E2.state.elements.wrapper), E2.state.elements.container.appendChild(E2.state.elements.cursor));
            }), A(this, "start", function() {
              return E2.state.eventLoopPaused = false, E2.runEventLoop(), E2;
            }), A(this, "pause", function() {
              return E2.state.eventLoopPaused = true, E2;
            }), A(this, "stop", function() {
              return E2.state.eventLoop && ((0, e2.cancel)(E2.state.eventLoop), E2.state.eventLoop = null), E2;
            }), A(this, "pauseFor", function(e3) {
              return E2.addEventToQueue(c, { ms: e3 }), E2;
            }), A(this, "typeOutAllStrings", function() {
              return "string" == typeof E2.options.strings ? (E2.typeString(E2.options.strings).pauseFor(E2.options.pauseFor), E2) : (E2.options.strings.forEach(function(e3) {
                E2.typeString(e3).pauseFor(E2.options.pauseFor).deleteAll(E2.options.deleteSpeed);
              }), E2);
            }), A(this, "typeString", function(e3) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (o(e3)) return E2.typeOutHTMLString(e3, t3);
              if (e3) {
                var n3 = (E2.options || {}).stringSplitter, r4 = "function" == typeof n3 ? n3(e3) : e3.split("");
                E2.typeCharacters(r4, t3);
              }
              return E2;
            }), A(this, "pasteString", function(e3) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              return o(e3) ? E2.typeOutHTMLString(e3, t3, true) : (e3 && E2.addEventToQueue(m, { character: e3, node: t3 }), E2);
            }), A(this, "typeOutHTMLString", function(e3) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n3 = arguments.length > 2 ? arguments[2] : void 0, r4 = function(e4) {
                var t4 = document.createElement("div");
                return t4.innerHTML = e4, t4.childNodes;
              }(e3);
              if (r4.length > 0) for (var o2 = 0; o2 < r4.length; o2++) {
                var a2 = r4[o2], i2 = a2.innerHTML;
                a2 && 3 !== a2.nodeType ? (a2.innerHTML = "", E2.addEventToQueue(d, { node: a2, parentNode: t3 }), n3 ? E2.pasteString(i2, a2) : E2.typeString(i2, a2)) : a2.textContent && (n3 ? E2.pasteString(a2.textContent, t3) : E2.typeString(a2.textContent, t3));
              }
              return E2;
            }), A(this, "deleteAll", function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
              return E2.addEventToQueue(u, { speed: e3 }), E2;
            }), A(this, "changeDeleteSpeed", function(e3) {
              if (!e3) throw new Error("Must provide new delete speed");
              return E2.addEventToQueue(f, { speed: e3 }), E2;
            }), A(this, "changeDelay", function(e3) {
              if (!e3) throw new Error("Must provide new delay");
              return E2.addEventToQueue(v, { delay: e3 }), E2;
            }), A(this, "changeCursor", function(e3) {
              if (!e3) throw new Error("Must provide new cursor");
              return E2.addEventToQueue(h, { cursor: e3 }), E2;
            }), A(this, "deleteChars", function(e3) {
              if (!e3) throw new Error("Must provide amount of characters to delete");
              for (var t3 = 0; t3 < e3; t3++) E2.addEventToQueue(s);
              return E2;
            }), A(this, "callFunction", function(e3, t3) {
              if (!e3 || "function" != typeof e3) throw new Error("Callback must be a function");
              return E2.addEventToQueue(p, { cb: e3, thisArg: t3 }), E2;
            }), A(this, "typeCharacters", function(e3) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (!e3 || !Array.isArray(e3)) throw new Error("Characters must be an array");
              return e3.forEach(function(e4) {
                E2.addEventToQueue(i, { character: e4, node: t3 });
              }), E2;
            }), A(this, "removeCharacters", function(e3) {
              if (!e3 || !Array.isArray(e3)) throw new Error("Characters must be an array");
              return e3.forEach(function() {
                E2.addEventToQueue(s);
              }), E2;
            }), A(this, "addEventToQueue", function(e3, t3) {
              var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return E2.addEventToStateProperty(e3, t3, n3, "eventQueue");
            }), A(this, "addReverseCalledEvent", function(e3, t3) {
              var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return E2.options.loop ? E2.addEventToStateProperty(e3, t3, n3, "reverseCalledEvents") : E2;
            }), A(this, "addEventToStateProperty", function(e3, t3) {
              var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r4 = arguments.length > 3 ? arguments[3] : void 0, o2 = { eventName: e3, eventArgs: t3 || {} };
              return E2.state[r4] = n3 ? [o2].concat(b(E2.state[r4])) : [].concat(b(E2.state[r4]), [o2]), E2;
            }), A(this, "runEventLoop", function() {
              E2.state.lastFrameTime || (E2.state.lastFrameTime = Date.now());
              var e3 = Date.now(), n3 = e3 - E2.state.lastFrameTime;
              if (!E2.state.eventQueue.length) {
                if (!E2.options.loop) return;
                E2.state.eventQueue = b(E2.state.calledEvents), E2.state.calledEvents = [], E2.options = w({}, E2.state.initialOptions);
              }
              if (E2.state.eventLoop = t2()(E2.runEventLoop), !E2.state.eventLoopPaused) {
                if (E2.state.pauseUntil) {
                  if (e3 < E2.state.pauseUntil) return;
                  E2.state.pauseUntil = null;
                }
                var r4, o2 = b(E2.state.eventQueue), g4 = o2.shift();
                if (!(n3 <= (r4 = g4.eventName === l || g4.eventName === s ? "natural" === E2.options.deleteSpeed ? a(40, 80) : E2.options.deleteSpeed : "natural" === E2.options.delay ? a(120, 160) : E2.options.delay))) {
                  var T3 = g4.eventName, S2 = g4.eventArgs;
                  switch (E2.logInDevMode({ currentEvent: g4, state: E2.state, delay: r4 }), T3) {
                    case m:
                    case i:
                      var A2 = S2.character, N2 = S2.node, C2 = document.createTextNode(A2), _ = C2;
                      E2.options.onCreateTextNode && "function" == typeof E2.options.onCreateTextNode && (_ = E2.options.onCreateTextNode(A2, C2)), _ && (N2 ? N2.appendChild(_) : E2.state.elements.wrapper.appendChild(_)), E2.state.visibleNodes = [].concat(b(E2.state.visibleNodes), [{ type: "TEXT_NODE", character: A2, node: _ }]);
                      break;
                    case s:
                      o2.unshift({ eventName: l, eventArgs: { removingCharacterNode: true } });
                      break;
                    case c:
                      var O = g4.eventArgs.ms;
                      E2.state.pauseUntil = Date.now() + parseInt(O);
                      break;
                    case p:
                      var L = g4.eventArgs, D = L.cb, M = L.thisArg;
                      D.call(M, { elements: E2.state.elements });
                      break;
                    case d:
                      var x = g4.eventArgs, P = x.node, j = x.parentNode;
                      j ? j.appendChild(P) : E2.state.elements.wrapper.appendChild(P), E2.state.visibleNodes = [].concat(b(E2.state.visibleNodes), [{ type: y, node: P, parentNode: j || E2.state.elements.wrapper }]);
                      break;
                    case u:
                      var R = E2.state.visibleNodes, k = S2.speed, Q = [];
                      k && Q.push({ eventName: f, eventArgs: { speed: k, temp: true } });
                      for (var F = 0, H = R.length; F < H; F++) Q.push({ eventName: l, eventArgs: { removingCharacterNode: false } });
                      k && Q.push({ eventName: f, eventArgs: { speed: E2.options.deleteSpeed, temp: true } }), o2.unshift.apply(o2, Q);
                      break;
                    case l:
                      var I = g4.eventArgs.removingCharacterNode;
                      if (E2.state.visibleNodes.length) {
                        var U = E2.state.visibleNodes.pop(), q = U.type, G = U.node, Y = U.character;
                        E2.options.onRemoveNode && "function" == typeof E2.options.onRemoveNode && E2.options.onRemoveNode({ node: G, character: Y }), G && G.parentNode.removeChild(G), q === y && I && o2.unshift({ eventName: l, eventArgs: {} });
                      }
                      break;
                    case f:
                      E2.options.deleteSpeed = g4.eventArgs.speed;
                      break;
                    case v:
                      E2.options.delay = g4.eventArgs.delay;
                      break;
                    case h:
                      E2.options.cursor = g4.eventArgs.cursor, E2.state.elements.cursor.innerHTML = g4.eventArgs.cursor;
                  }
                  E2.options.loop && (g4.eventName === l || g4.eventArgs && g4.eventArgs.temp || (E2.state.calledEvents = [].concat(b(E2.state.calledEvents), [g4]))), E2.state.eventQueue = o2, E2.state.lastFrameTime = e3;
                }
              }
            }), r3) if ("string" == typeof r3) {
              var T2 = document.querySelector(r3);
              if (!T2) throw new Error("Could not find container element");
              this.state.elements.container = T2;
            } else this.state.elements.container = r3;
            g3 && (this.options = w(w({}, this.options), g3)), this.state.initialOptions = w({}, this.options), this.init();
          }
          var r2, g2;
          return r2 = n2, (g2 = [{ key: "init", value: function() {
            var e3, t3;
            this.setupWrapperElement(), this.addEventToQueue(h, { cursor: this.options.cursor }, true), this.addEventToQueue(u, null, true), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e3 = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t3 = document.createElement("style")).appendChild(document.createTextNode(e3)), document.head.appendChild(t3), window.___TYPEWRITER_JS_STYLES_ADDED___ = true), true === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
          } }, { key: "logInDevMode", value: function(e3) {
            this.options.devMode && console.log(e3);
          } }]) && S(r2.prototype, g2), Object.defineProperty(r2, "prototype", { writable: false }), n2;
        }();
      })(), r.default;
    })());
  }
});
export default require_core();
//# sourceMappingURL=typewriter-effect_dist_core.js.map
