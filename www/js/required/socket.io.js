/*!
 * Socket.IO v3.0.2
 * (c) 2014-2020 Guillermo Rauch
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition (root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory(); } else if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof exports === 'object') { exports.io = factory(); } else { root.io = factory(); }
})((() => {
  if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else if (typeof global !== 'undefined') {
    return global;
  } else {
    return Function('return this')();
  }
})(), function () {
  return /******/ (function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	const installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__ (moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/ 		if (installedModules[moduleId]) {
        /******/ 			return installedModules[moduleId].exports;
        /******/ 		}
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		const module = installedModules[moduleId] = {
        /******/ 			i: moduleId,
        /******/ 			l: false,
        /******/ 			exports: {}
        /******/ 		};
      /******/
      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ 		// Flag the module as loaded
      /******/ 		module.l = true;
      /******/
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports;
      /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
      /******/ 		if (!__webpack_require__.o(exports, name)) {
        /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/ 		}
      /******/ 	};
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
      /******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/ 		}
      /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/ 	};
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
      /******/ 		if (mode & 1) value = __webpack_require__(value);
      /******/ 		if (mode & 8) return value;
      /******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /******/ 		const ns = Object.create(null);
      /******/ 		__webpack_require__.r(ns);
      /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
      /******/ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
      /******/ 		return ns;
      /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
      /******/ 		const getter = module && module.__esModule
      /******/ 			? function getDefault () { return module.default; }
      /******/ 			: function getModuleExports () { return module; };
      /******/ 		__webpack_require__.d(getter, 'a', getter);
      /******/ 		return getter;
      /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = '';
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = './build/index.js');
    /******/ })
  /************************************************************************/
  /******/ ({

    /***/ './build/index.js':
    /*! ************************!*\
  !*** ./build/index.js ***!
  \************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.Socket = exports.io = exports.Manager = exports.protocol = void 0;

      const url_1 = __webpack_require__(/*! ./url */ './build/url.js');

      const manager_1 = __webpack_require__(/*! ./manager */ './build/manager.js');

      const socket_1 = __webpack_require__(/*! ./socket */ './build/socket.js');

      Object.defineProperty(exports, 'Socket', {
        enumerable: true,
        get: function get () {
          return socket_1.Socket;
        }
      });

      const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('socket.io-client');
      /**
 * Module exports.
 */

      module.exports = exports = lookup;
      /**
 * Managers cache.
 */

      const cache = exports.managers = {};

      function lookup (uri, opts) {
        if (_typeof(uri) === 'object') {
          opts = uri;
          uri = undefined;
        }

        opts = opts || {};
        const parsed = url_1.url(uri);
        const source = parsed.source;
        const id = parsed.id;
        const path = parsed.path;
        const sameNamespace = cache[id] && path in cache[id].nsps;
        const newConnection = opts.forceNew || opts['force new connection'] || opts.multiplex === false || sameNamespace;
        let io;

        if (newConnection) {
          debug('ignoring socket cache for %s', source);
          io = new manager_1.Manager(source, opts);
        } else {
          if (!cache[id]) {
            debug('new io instance for %s', source);
            cache[id] = new manager_1.Manager(source, opts);
          }

          io = cache[id];
        }

        if (parsed.query && !opts.query) {
          opts.query = parsed.query;
        }

        return io.socket(parsed.path, opts);
      }

      exports.io = lookup;
      /**
 * Protocol version.
 *
 * @public
 */

      const socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ './node_modules/socket.io-parser/dist/index.js');

      Object.defineProperty(exports, 'protocol', {
        enumerable: true,
        get: function get () {
          return socket_io_parser_1.protocol;
        }
      });
      /**
 * `connect`.
 *
 * @param {String} uri
 * @public
 */

      exports.connect = lookup;
      /**
 * Expose constructors for standalone build.
 *
 * @public
 */

      const manager_2 = __webpack_require__(/*! ./manager */ './build/manager.js');

      Object.defineProperty(exports, 'Manager', {
        enumerable: true,
        get: function get () {
          return manager_2.Manager;
        }
      });
      /***/ },

    /***/ './build/manager.js':
    /*! **************************!*\
  !*** ./build/manager.js ***!
  \**************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _get (target, property, receiver) { if (typeof Reflect !== 'undefined' && Reflect.get) { _get = Reflect.get; } else { _get = function _get (target, property, receiver) { const base = _superPropBase(target, property); if (!base) return; const desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

      function _superPropBase (object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

      function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

      function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.Manager = void 0;

      const eio = __webpack_require__(/*! engine.io-client */ './node_modules/engine.io-client/lib/index.js');

      const socket_1 = __webpack_require__(/*! ./socket */ './build/socket.js');

      const Emitter = __webpack_require__(/*! component-emitter */ './node_modules/component-emitter/index.js');

      const parser = __webpack_require__(/*! socket.io-parser */ './node_modules/socket.io-parser/dist/index.js');

      const on_1 = __webpack_require__(/*! ./on */ './build/on.js');

      const bind = __webpack_require__(/*! component-bind */ './node_modules/component-bind/index.js');

      const Backoff = __webpack_require__(/*! backo2 */ './node_modules/backo2/index.js');

      const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('socket.io-client:manager');

      const Manager = /* #__PURE__ */(function (_Emitter) {
        _inherits(Manager, _Emitter);

        const _super = _createSuper(Manager);

        function Manager (uri, opts) {
          let _this;

          _classCallCheck(this, Manager);

          _this = _super.call(this);
          _this.nsps = {};
          _this.subs = [];
          _this.connecting = [];

          if (uri && _typeof(uri) === 'object') {
            opts = uri;
            uri = undefined;
          }

          opts = opts || {};
          opts.path = opts.path || '/socket.io';
          _this.opts = opts;

          _this.reconnection(opts.reconnection !== false);

          _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);

          _this.reconnectionDelay(opts.reconnectionDelay || 1000);

          _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);

          _this.randomizationFactor(opts.randomizationFactor || 0.5);

          _this.backoff = new Backoff({
            min: _this.reconnectionDelay(),
            max: _this.reconnectionDelayMax(),
            jitter: _this.randomizationFactor()
          });

          _this.timeout(opts.timeout == null ? 20000 : opts.timeout);

          _this._readyState = 'closed';
          _this.uri = uri;

          const _parser = opts.parser || parser;

          _this.encoder = new _parser.Encoder();
          _this.decoder = new _parser.Decoder();
          _this._autoConnect = opts.autoConnect !== false;
          if (_this._autoConnect) _this.open();
          return _this;
        }

        _createClass(Manager, [{
          key: 'reconnection',
          value: function reconnection (v) {
            if (!arguments.length) return this._reconnection;
            this._reconnection = !!v;
            return this;
          }
        }, {
          key: 'reconnectionAttempts',
          value: function reconnectionAttempts (v) {
            if (v === undefined) return this._reconnectionAttempts;
            this._reconnectionAttempts = v;
            return this;
          }
        }, {
          key: 'reconnectionDelay',
          value: function reconnectionDelay (v) {
            if (v === undefined) return this._reconnectionDelay;
            this._reconnectionDelay = v;
            this.backoff && this.backoff.setMin(v);
            return this;
          }
        }, {
          key: 'randomizationFactor',
          value: function randomizationFactor (v) {
            if (v === undefined) return this._randomizationFactor;
            this._randomizationFactor = v;
            this.backoff && this.backoff.setJitter(v);
            return this;
          }
        }, {
          key: 'reconnectionDelayMax',
          value: function reconnectionDelayMax (v) {
            if (v === undefined) return this._reconnectionDelayMax;
            this._reconnectionDelayMax = v;
            this.backoff && this.backoff.setMax(v);
            return this;
          }
        }, {
          key: 'timeout',
          value: function timeout (v) {
            if (!arguments.length) return this._timeout;
            this._timeout = v;
            return this;
          }
          /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */

        }, {
          key: 'maybeReconnectOnOpen',
          value: function maybeReconnectOnOpen () {
            // Only try to reconnect if it's the first time we're connecting
            if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
              // keeps reconnection from firing twice for the same reconnection loop
              this.reconnect();
            }
          }
          /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return {Manager} self
     * @public
     */

        }, {
          key: 'open',
          value: function open (fn) {
            const _this2 = this;

            debug('readyState %s', this._readyState);
            if (~this._readyState.indexOf('open')) return this;
            debug('opening %s', this.uri);
            this.engine = eio(this.uri, this.opts);
            const socket = this.engine;
            const self = this;
            this._readyState = 'opening';
            this.skipReconnect = false; // emit `open`

            const openSub = on_1.on(socket, 'open', function () {
              self.onopen();
              fn && fn();
            }); // emit `error`

            const errorSub = on_1.on(socket, 'error', function (err) {
              debug('error');
              self.cleanup();
              self._readyState = 'closed';

              _get(_getPrototypeOf(Manager.prototype), 'emit', _this2).call(_this2, 'error', err);

              if (fn) {
                fn(err);
              } else {
                // Only do this if there is no fn to handle the error
                self.maybeReconnectOnOpen();
              }
            });

            if (this._timeout !== false) {
              const timeout = this._timeout;
              debug('connect attempt will timeout after %d', timeout);

              if (timeout === 0) {
                openSub.destroy(); // prevents a race condition with the 'open' event
              } // set timer

              const timer = setTimeout(function () {
                debug('connect attempt timed out after %d', timeout);
                openSub.destroy();
                socket.close();
                socket.emit('error', new Error('timeout'));
              }, timeout);
              this.subs.push({
                destroy: function destroy () {
                  clearTimeout(timer);
                }
              });
            }

            this.subs.push(openSub);
            this.subs.push(errorSub);
            return this;
          }
          /**
     * Alias for open()
     *
     * @return {Manager} self
     * @public
     */

        }, {
          key: 'connect',
          value: function connect (fn) {
            return this.open(fn);
          }
          /**
     * Called upon transport open.
     *
     * @private
     */

        }, {
          key: 'onopen',
          value: function onopen () {
            debug('open'); // clear old subs

            this.cleanup(); // mark as open

            this._readyState = 'open';

            _get(_getPrototypeOf(Manager.prototype), 'emit', this).call(this, 'open'); // add new subs

            const socket = this.engine;
            this.subs.push(on_1.on(socket, 'data', bind(this, 'ondata')));
            this.subs.push(on_1.on(socket, 'ping', bind(this, 'onping')));
            this.subs.push(on_1.on(socket, 'error', bind(this, 'onerror')));
            this.subs.push(on_1.on(socket, 'close', bind(this, 'onclose')));
            this.subs.push(on_1.on(this.decoder, 'decoded', bind(this, 'ondecoded')));
          }
          /**
     * Called upon a ping.
     *
     * @private
     */

        }, {
          key: 'onping',
          value: function onping () {
            _get(_getPrototypeOf(Manager.prototype), 'emit', this).call(this, 'ping');
          }
          /**
     * Called with data.
     *
     * @private
     */

        }, {
          key: 'ondata',
          value: function ondata (data) {
            this.decoder.add(data);
          }
          /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */

        }, {
          key: 'ondecoded',
          value: function ondecoded (packet) {
            _get(_getPrototypeOf(Manager.prototype), 'emit', this).call(this, 'packet', packet);
          }
          /**
     * Called upon socket error.
     *
     * @private
     */

        }, {
          key: 'onerror',
          value: function onerror (err) {
            debug('error', err);

            _get(_getPrototypeOf(Manager.prototype), 'emit', this).call(this, 'error', err);
          }
          /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */

        }, {
          key: 'socket',
          value: function socket (nsp, opts) {
            let socket = this.nsps[nsp];

            if (!socket) {
              socket = new socket_1.Socket(this, nsp, opts);
              this.nsps[nsp] = socket;
              var self = this;
              socket.on('connecting', onConnecting);

              if (this._autoConnect) {
                // manually call here since connecting event is fired before listening
                onConnecting();
              }
            }

            function onConnecting () {
              if (!~self.connecting.indexOf(socket)) {
                self.connecting.push(socket);
              }
            }

            return socket;
          }
          /**
     * Called upon a socket close.
     *
     * @param {Socket} socket
     * @private
     */

        }, {
          key: '_destroy',
          value: function _destroy (socket) {
            const index = this.connecting.indexOf(socket);
            if (~index) this.connecting.splice(index, 1);
            if (this.connecting.length) return;

            this._close();
          }
          /**
     * Writes a packet.
     *
     * @param {Object} packet
     * @private
     */

        }, {
          key: '_packet',
          value: function _packet (packet) {
            debug('writing packet %j', packet);
            if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;
            const encodedPackets = this.encoder.encode(packet);

            for (let i = 0; i < encodedPackets.length; i++) {
              this.engine.write(encodedPackets[i], packet.options);
            }
          }
          /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */

        }, {
          key: 'cleanup',
          value: function cleanup () {
            debug('cleanup');
            const subsLength = this.subs.length;

            for (let i = 0; i < subsLength; i++) {
              const sub = this.subs.shift();
              sub.destroy();
            }

            this.decoder.destroy();
          }
          /**
     * Close the current socket.
     *
     * @private
     */

        }, {
          key: '_close',
          value: function _close () {
            debug('disconnect');
            this.skipReconnect = true;
            this._reconnecting = false;

            if (this._readyState === 'opening') {
              // `onclose` will not fire because
              // an open event never happened
              this.cleanup();
            }

            this.backoff.reset();
            this._readyState = 'closed';
            if (this.engine) this.engine.close();
          }
          /**
     * Alias for close()
     *
     * @private
     */

        }, {
          key: 'disconnect',
          value: function disconnect () {
            return this._close();
          }
          /**
     * Called upon engine close.
     *
     * @private
     */

        }, {
          key: 'onclose',
          value: function onclose (reason) {
            debug('onclose');
            this.cleanup();
            this.backoff.reset();
            this._readyState = 'closed';

            _get(_getPrototypeOf(Manager.prototype), 'emit', this).call(this, 'close', reason);

            if (this._reconnection && !this.skipReconnect) {
              this.reconnect();
            }
          }
          /**
     * Attempt a reconnection.
     *
     * @private
     */

        }, {
          key: 'reconnect',
          value: function reconnect () {
            const _this3 = this;

            if (this._reconnecting || this.skipReconnect) return this;
            const self = this;

            if (this.backoff.attempts >= this._reconnectionAttempts) {
              debug('reconnect failed');
              this.backoff.reset();

              _get(_getPrototypeOf(Manager.prototype), 'emit', this).call(this, 'reconnect_failed');

              this._reconnecting = false;
            } else {
              const delay = this.backoff.duration();
              debug('will wait %dms before reconnect attempt', delay);
              this._reconnecting = true;
              const timer = setTimeout(function () {
                if (self.skipReconnect) return;
                debug('attempting reconnect');

                _get(_getPrototypeOf(Manager.prototype), 'emit', _this3).call(_this3, 'reconnect_attempt', self.backoff.attempts); // check again for the case socket closed in above events

                if (self.skipReconnect) return;
                self.open(function (err) {
                  if (err) {
                    debug('reconnect attempt error');
                    self._reconnecting = false;
                    self.reconnect();

                    _get(_getPrototypeOf(Manager.prototype), 'emit', _this3).call(_this3, 'reconnect_error', err);
                  } else {
                    debug('reconnect success');
                    self.onreconnect();
                  }
                });
              }, delay);
              this.subs.push({
                destroy: function destroy () {
                  clearTimeout(timer);
                }
              });
            }
          }
          /**
     * Called upon successful reconnect.
     *
     * @private
     */

        }, {
          key: 'onreconnect',
          value: function onreconnect () {
            const attempt = this.backoff.attempts;
            this._reconnecting = false;
            this.backoff.reset();

            _get(_getPrototypeOf(Manager.prototype), 'emit', this).call(this, 'reconnect', attempt);
          }
        }]);

        return Manager;
      }(Emitter));

      exports.Manager = Manager;
      /***/ },

    /***/ './build/on.js':
    /*! *********************!*\
  !*** ./build/on.js ***!
  \*********************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.on = void 0;

      function on (obj, ev, fn) {
        obj.on(ev, fn);
        return {
          destroy: function destroy () {
            obj.removeListener(ev, fn);
          }
        };
      }

      exports.on = on;
      /***/ },

    /***/ './build/socket.js':
    /*! *************************!*\
  !*** ./build/socket.js ***!
  \*************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function _createForOfIteratorHelper (o, allowArrayLike) { let it; if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === 'number') { if (it) o = it; let i = 0; const F = function F () {}; return { s: F, n: function n () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e (_e) { throw _e; }, f: F }; } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); } let normalCompletion = true; let didErr = false; let err; return { s: function s () { it = o[Symbol.iterator](); }, n: function n () { const step = it.next(); normalCompletion = step.done; return step; }, e: function e (_e2) { didErr = true; err = _e2; }, f: function f () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

      function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

      function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _get (target, property, receiver) { if (typeof Reflect !== 'undefined' && Reflect.get) { _get = Reflect.get; } else { _get = function _get (target, property, receiver) { const base = _superPropBase(target, property); if (!base) return; const desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

      function _superPropBase (object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

      function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

      function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.Socket = void 0;

      const socket_io_parser_1 = __webpack_require__(/*! socket.io-parser */ './node_modules/socket.io-parser/dist/index.js');

      const Emitter = __webpack_require__(/*! component-emitter */ './node_modules/component-emitter/index.js');

      const on_1 = __webpack_require__(/*! ./on */ './build/on.js');

      const bind = __webpack_require__(/*! component-bind */ './node_modules/component-bind/index.js');

      const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('socket.io-client:socket');
      /**
 * Internal events.
 * These events can't be emitted by the user.
 */

      const RESERVED_EVENTS = {
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
        newListener: 1,
        removeListener: 1
      };

      const Socket = /* #__PURE__ */(function (_Emitter) {
        _inherits(Socket, _Emitter);

        const _super = _createSuper(Socket);

        /**
   * `Socket` constructor.
   *
   * @public
   */
        function Socket (io, nsp, opts) {
          let _this;

          _classCallCheck(this, Socket);

          _this = _super.call(this);
          _this.ids = 0;
          _this.acks = {};
          _this.receiveBuffer = [];
          _this.sendBuffer = [];
          _this.flags = {};
          _this.io = io;
          _this.nsp = nsp;
          _this.ids = 0;
          _this.acks = {};
          _this.receiveBuffer = [];
          _this.sendBuffer = [];
          _this.connected = false;
          _this.disconnected = true;
          _this.flags = {};

          if (opts && opts.auth) {
            _this.auth = opts.auth;
          }

          if (_this.io._autoConnect) _this.open();
          return _this;
        }
        /**
   * Subscribe to open, close and packet events
   *
   * @private
   */

        _createClass(Socket, [{
          key: 'subEvents',
          value: function subEvents () {
            if (this.subs) return;
            const io = this.io;
            this.subs = [on_1.on(io, 'open', bind(this, 'onopen')), on_1.on(io, 'packet', bind(this, 'onpacket')), on_1.on(io, 'close', bind(this, 'onclose'))];
          }
          /**
     * "Opens" the socket.
     *
     * @public
     */

        }, {
          key: 'connect',
          value: function connect () {
            if (this.connected) return this;
            this.subEvents();
            if (!this.io._reconnecting) this.io.open(); // ensure open

            if (this.io._readyState === 'open') this.onopen();
            return this;
          }
          /**
     * Alias for connect()
     */

        }, {
          key: 'open',
          value: function open () {
            return this.connect();
          }
          /**
     * Sends a `message` event.
     *
     * @return {Socket} self
     * @public
     */

        }, {
          key: 'send',
          value: function send () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            args.unshift('message');
            this.emit.apply(this, args);
            return this;
          }
          /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @param {String} ev - event name
     * @return {Socket} self
     * @public
     */

        }, {
          key: 'emit',
          value: function emit (ev) {
            if (RESERVED_EVENTS.hasOwnProperty(ev)) {
              throw new Error('"' + ev + '" is a reserved event name');
            }

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            args.unshift(ev);
            const packet = {
              type: socket_io_parser_1.PacketType.EVENT,
              data: args
            };
            packet.options = {};
            packet.options.compress = this.flags.compress !== false; // event ack callback

            if (typeof args[args.length - 1] === 'function') {
              debug('emitting packet with ack id %d', this.ids);
              this.acks[this.ids] = args.pop();
              packet.id = this.ids++;
            }

            const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
            const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);

            if (discardPacket) {
              debug('discard packet as the transport is not currently writable');
            } else if (this.connected) {
              this.packet(packet);
            } else {
              this.sendBuffer.push(packet);
            }

            this.flags = {};
            return this;
          }
          /**
     * Sends a packet.
     *
     * @param {Object} packet
     * @private
     */

        }, {
          key: 'packet',
          value: function packet (_packet) {
            _packet.nsp = this.nsp;

            this.io._packet(_packet);
          }
          /**
     * Called upon engine `open`.
     *
     * @private
     */

        }, {
          key: 'onopen',
          value: function onopen () {
            const _this2 = this;

            debug('transport is open - connecting');

            if (typeof this.auth === 'function') {
              this.auth(function (data) {
                _this2.packet({
                  type: socket_io_parser_1.PacketType.CONNECT,
                  data
                });
              });
            } else {
              this.packet({
                type: socket_io_parser_1.PacketType.CONNECT,
                data: this.auth
              });
            }
          }
          /**
     * Called upon engine `close`.
     *
     * @param {String} reason
     * @private
     */

        }, {
          key: 'onclose',
          value: function onclose (reason) {
            debug('close (%s)', reason);
            this.connected = false;
            this.disconnected = true;
            delete this.id;

            _get(_getPrototypeOf(Socket.prototype), 'emit', this).call(this, 'disconnect', reason);
          }
          /**
     * Called with socket packet.
     *
     * @param {Object} packet
     * @private
     */

        }, {
          key: 'onpacket',
          value: function onpacket (packet) {
            const sameNamespace = packet.nsp === this.nsp;
            if (!sameNamespace) return;

            switch (packet.type) {
              case socket_io_parser_1.PacketType.CONNECT:
                var id = packet.data.sid;
                this.onconnect(id);
                break;

              case socket_io_parser_1.PacketType.EVENT:
                this.onevent(packet);
                break;

              case socket_io_parser_1.PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;

              case socket_io_parser_1.PacketType.ACK:
                this.onack(packet);
                break;

              case socket_io_parser_1.PacketType.BINARY_ACK:
                this.onack(packet);
                break;

              case socket_io_parser_1.PacketType.DISCONNECT:
                this.ondisconnect();
                break;

              case socket_io_parser_1.PacketType.CONNECT_ERROR:
                var err = new Error(packet.data.message); // @ts-ignore

                err.data = packet.data.data;

                _get(_getPrototypeOf(Socket.prototype), 'emit', this).call(this, 'connect_error', err);

                break;
            }
          }
          /**
     * Called upon a server event.
     *
     * @param {Object} packet
     * @private
     */

        }, {
          key: 'onevent',
          value: function onevent (packet) {
            const args = packet.data || [];
            debug('emitting event %j', args);

            if (packet.id != null) {
              debug('attaching ack callback to event');
              args.push(this.ack(packet.id));
            }

            if (this.connected) {
              this.emitEvent(args);
            } else {
              this.receiveBuffer.push(args);
            }
          }
        }, {
          key: 'emitEvent',
          value: function emitEvent (args) {
            if (this._anyListeners && this._anyListeners.length) {
              const listeners = this._anyListeners.slice();

              const _iterator = _createForOfIteratorHelper(listeners);
              let _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  const listener = _step.value;
                  listener.apply(this, args);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            _get(_getPrototypeOf(Socket.prototype), 'emit', this).apply(this, args);
          }
          /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */

        }, {
          key: 'ack',
          value: function ack (id) {
            const self = this;
            let sent = false;
            return function () {
              // prevent double callbacks
              if (sent) return;
              sent = true;

              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              debug('sending ack %j', args);
              self.packet({
                type: socket_io_parser_1.PacketType.ACK,
                id,
                data: args
              });
            };
          }
          /**
     * Called upon a server acknowlegement.
     *
     * @param {Object} packet
     * @private
     */

        }, {
          key: 'onack',
          value: function onack (packet) {
            const ack = this.acks[packet.id];

            if (typeof ack === 'function') {
              debug('calling ack %s with %j', packet.id, packet.data);
              ack.apply(this, packet.data);
              delete this.acks[packet.id];
            } else {
              debug('bad ack %s', packet.id);
            }
          }
          /**
     * Called upon server connect.
     *
     * @private
     */

        }, {
          key: 'onconnect',
          value: function onconnect (id) {
            this.id = id;
            this.connected = true;
            this.disconnected = false;

            _get(_getPrototypeOf(Socket.prototype), 'emit', this).call(this, 'connect');

            this.emitBuffered();
          }
          /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */

        }, {
          key: 'emitBuffered',
          value: function emitBuffered () {
            for (let i = 0; i < this.receiveBuffer.length; i++) {
              this.emitEvent(this.receiveBuffer[i]);
            }

            this.receiveBuffer = [];

            for (let _i = 0; _i < this.sendBuffer.length; _i++) {
              this.packet(this.sendBuffer[_i]);
            }

            this.sendBuffer = [];
          }
          /**
     * Called upon server disconnect.
     *
     * @private
     */

        }, {
          key: 'ondisconnect',
          value: function ondisconnect () {
            debug('server disconnect (%s)', this.nsp);
            this.destroy();
            this.onclose('io server disconnect');
          }
          /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */

        }, {
          key: 'destroy',
          value: function destroy () {
            if (this.subs) {
              // clean subscriptions to avoid reconnections
              for (let i = 0; i < this.subs.length; i++) {
                this.subs[i].destroy();
              }

              this.subs = null;
            }

            this.io._destroy(this);
          }
          /**
     * Disconnects the socket manually.
     *
     * @return {Socket} self
     * @public
     */

        }, {
          key: 'disconnect',
          value: function disconnect () {
            if (this.connected) {
              debug('performing disconnect (%s)', this.nsp);
              this.packet({
                type: socket_io_parser_1.PacketType.DISCONNECT
              });
            } // remove socket from pool

            this.destroy();

            if (this.connected) {
              // fire events
              this.onclose('io client disconnect');
            }

            return this;
          }
          /**
     * Alias for disconnect()
     *
     * @return {Socket} self
     * @public
     */

        }, {
          key: 'close',
          value: function close () {
            return this.disconnect();
          }
          /**
     * Sets the compress flag.
     *
     * @param {Boolean} compress - if `true`, compresses the sending data
     * @return {Socket} self
     * @public
     */

        }, {
          key: 'compress',
          value: function compress (_compress) {
            this.flags.compress = _compress;
            return this;
          }
          /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @returns {Socket} self
     * @public
     */

        }, {
          key: 'onAny',

          /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @param listener
     * @public
     */
          value: function onAny (listener) {
            this._anyListeners = this._anyListeners || [];

            this._anyListeners.push(listener);

            return this;
          }
          /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     * @public
     */

        }, {
          key: 'prependAny',
          value: function prependAny (listener) {
            this._anyListeners = this._anyListeners || [];

            this._anyListeners.unshift(listener);

            return this;
          }
          /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param listener
     * @public
     */

        }, {
          key: 'offAny',
          value: function offAny (listener) {
            if (!this._anyListeners) {
              return this;
            }

            if (listener) {
              const listeners = this._anyListeners;

              for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                  listeners.splice(i, 1);
                  return this;
                }
              }
            } else {
              this._anyListeners = [];
            }

            return this;
          }
          /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     *
     * @public
     */

        }, {
          key: 'listenersAny',
          value: function listenersAny () {
            return this._anyListeners || [];
          }
        }, {
          key: 'volatile',
          get: function get () {
            this.flags.volatile = true;
            return this;
          }
        }]);

        return Socket;
      }(Emitter));

      exports.Socket = Socket;
      /***/ },

    /***/ './build/url.js':
    /*! **********************!*\
  !*** ./build/url.js ***!
  \**********************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.url = void 0;

      const parseuri = __webpack_require__(/*! parseuri */ './node_modules/parseuri/index.js');

      const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('socket.io-client:url');
      /**
 * URL parser.
 *
 * @param {String} uri - url
 * @param {Object} loc - An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @public
 */

      function url (uri, loc) {
        let obj = uri; // default to window.location

        loc = loc || typeof location !== 'undefined' && location;
        if (uri == null) uri = loc.protocol + '//' + loc.host; // relative path support

        if (typeof uri === 'string') {
          if (uri.charAt(0) === '/') {
            if (uri.charAt(1) === '/') {
              uri = loc.protocol + uri;
            } else {
              uri = loc.host + uri;
            }
          }

          if (!/^(https?|wss?):\/\//.test(uri)) {
            debug('protocol-less url %s', uri);

            if (typeof loc !== 'undefined') {
              uri = loc.protocol + '//' + uri;
            } else {
              uri = 'https://' + uri;
            }
          } // parse

          debug('parse %s', uri);
          obj = parseuri(uri);
        } // make sure we treat `localhost:80` and `localhost` equally

        if (!obj.port) {
          if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = '80';
          } else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = '443';
          }
        }

        obj.path = obj.path || '/';
        const ipv6 = obj.host.indexOf(':') !== -1;
        const host = ipv6 ? '[' + obj.host + ']' : obj.host; // define unique id

        obj.id = obj.protocol + '://' + host + ':' + obj.port; // define href

        obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
        return obj;
      }

      exports.url = url;
      /***/ },

    /***/ './node_modules/backo2/index.js':
    /*! **************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      /**
 * Expose `Backoff`.
 */
      module.exports = Backoff;
      /**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

      function Backoff (opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
      }
      /**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

      Backoff.prototype.duration = function () {
        let ms = this.ms * Math.pow(this.factor, this.attempts++);

        if (this.jitter) {
          const rand = Math.random();
          const deviation = Math.floor(rand * this.jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }

        return Math.min(ms, this.max) | 0;
      };
      /**
 * Reset the number of attempts.
 *
 * @api public
 */

      Backoff.prototype.reset = function () {
        this.attempts = 0;
      };
      /**
 * Set the minimum duration
 *
 * @api public
 */

      Backoff.prototype.setMin = function (min) {
        this.ms = min;
      };
      /**
 * Set the maximum duration
 *
 * @api public
 */

      Backoff.prototype.setMax = function (max) {
        this.max = max;
      };
      /**
 * Set the jitter
 *
 * @api public
 */

      Backoff.prototype.setJitter = function (jitter) {
        this.jitter = jitter;
      };
      /***/ },

    /***/ './node_modules/base64-arraybuffer/lib/base64-arraybuffer.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      /*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
      (function () {
        'use strict';

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

        const lookup = new Uint8Array(256);

        for (let i = 0; i < chars.length; i++) {
          lookup[chars.charCodeAt(i)] = i;
        }

        exports.encode = function (arraybuffer) {
          const bytes = new Uint8Array(arraybuffer);
          let i;
          const len = bytes.length;
          let base64 = '';

          for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
            base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
            base64 += chars[bytes[i + 2] & 63];
          }

          if (len % 3 === 2) {
            base64 = base64.substring(0, base64.length - 1) + '=';
          } else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2) + '==';
          }

          return base64;
        };

        exports.decode = function (base64) {
          let bufferLength = base64.length * 0.75;
          const len = base64.length;
          let i;
          let p = 0;
          let encoded1;
          let encoded2;
          let encoded3;
          let encoded4;

          if (base64[base64.length - 1] === '=') {
            bufferLength--;

            if (base64[base64.length - 2] === '=') {
              bufferLength--;
            }
          }

          const arraybuffer = new ArrayBuffer(bufferLength);
          const bytes = new Uint8Array(arraybuffer);

          for (i = 0; i < len; i += 4) {
            encoded1 = lookup[base64.charCodeAt(i)];
            encoded2 = lookup[base64.charCodeAt(i + 1)];
            encoded3 = lookup[base64.charCodeAt(i + 2)];
            encoded4 = lookup[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }

          return arraybuffer;
        };
      })();
      /***/ },

    /***/ './node_modules/component-bind/index.js':
    /*! **********************************************!*\
  !*** ./node_modules/component-bind/index.js ***!
  \**********************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      /**
 * Slice reference.
 */
      const slice = [].slice;
      /**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

      module.exports = function (obj, fn) {
        if (typeof fn === 'string') fn = obj[fn];
        if (typeof fn !== 'function') throw new Error('bind() requires a function');
        const args = slice.call(arguments, 2);
        return function () {
          return fn.apply(obj, args.concat(slice.call(arguments)));
        };
      };
      /***/ },

    /***/ './node_modules/component-emitter/index.js':
    /*! *************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      /**
 * Expose `Emitter`.
 */
      if (true) {
        module.exports = Emitter;
      }
      /**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

      function Emitter (obj) {
        if (obj) return mixin(obj);
      }

      /**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

      function mixin (obj) {
        for (const key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }

        return obj;
      }
      /**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

      Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
      };
      /**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

      Emitter.prototype.once = function (event, fn) {
        function on () {
          this.off(event, on);
          fn.apply(this, arguments);
        }

        on.fn = fn;
        this.on(event, on);
        return this;
      };
      /**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
        this._callbacks = this._callbacks || {}; // all

        if (arguments.length == 0) {
          this._callbacks = {};
          return this;
        } // specific event

        const callbacks = this._callbacks['$' + event];
        if (!callbacks) return this; // remove all handlers

        if (arguments.length == 1) {
          delete this._callbacks['$' + event];
          return this;
        } // remove specific handler

        let cb;

        for (let i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];

          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        } // Remove event specific arrays for event types that no
        // one is subscribed for to avoid memory leak.

        if (callbacks.length === 0) {
          delete this._callbacks['$' + event];
        }

        return this;
      };
      /**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

      Emitter.prototype.emit = function (event) {
        this._callbacks = this._callbacks || {};
        const args = new Array(arguments.length - 1);
        let callbacks = this._callbacks['$' + event];

        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }

        if (callbacks) {
          callbacks = callbacks.slice(0);

          for (var i = 0, len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }

        return this;
      };
      /**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

      Emitter.prototype.listeners = function (event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
      };
      /**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

      Emitter.prototype.hasListeners = function (event) {
        return !!this.listeners(event).length;
      };
      /***/ },

    /***/ './node_modules/debug/src/browser.js':
    /*! *******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function (process) {
        function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

        /* eslint-env browser */

        /**
 * This is the web browser implementation of `debug()`.
 */
        exports.log = log;
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = localstorage();
        /**
 * Colors.
 */

        exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
        /**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
        // eslint-disable-next-line complexity

        function useColors () {
          // NB: In an Electron preload script, document will be defined but not fully
          // initialized. Since we know we're in Chrome, we'll just detect this case
          // explicitly
          if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
            return true;
          } // Internet Explorer and Edge do not support colors.

          if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
            return false;
          } // Is webkit? http://stackoverflow.com/a/16459606/376773
          // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632

          return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }
        /**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

        function formatArgs (args) {
          args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

          if (!this.useColors) {
            return;
          }

          const c = 'color: ' + this.color;
          args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
          // arguments passed either before or after the %c, so we need to
          // figure out the correct index to insert the CSS into

          let index = 0;
          let lastC = 0;
          args[0].replace(/%[a-zA-Z%]/g, function (match) {
            if (match === '%%') {
              return;
            }

            index++;

            if (match === '%c') {
              // We only are interested in the *last* %c
              // (the user may have provided their own)
              lastC = index;
            }
          });
          args.splice(lastC, 0, c);
        }
        /**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

        function log () {
          let _console;

          // This hackery is required for IE8/9, where
          // the `console.log` function doesn't have 'apply'
          return (typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
        }
        /**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

        function save (namespaces) {
          try {
            if (namespaces) {
              exports.storage.setItem('debug', namespaces);
            } else {
              exports.storage.removeItem('debug');
            }
          } catch (error) { // Swallow
            // XXX (@Qix-) should we be logging these?
          }
        }
        /**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

        function load () {
          let r;

          try {
            r = exports.storage.getItem('debug');
          } catch (error) { // Swallow
            // XXX (@Qix-) should we be logging these?
          } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG

          if (!r && typeof process !== 'undefined' && 'env' in process) {
            r = process.env.DEBUG;
          }

          return r;
        }
        /**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

        function localstorage () {
          try {
            // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
            // The Browser also has localStorage in the global context.
            return localStorage;
          } catch (error) { // Swallow
            // XXX (@Qix-) should we be logging these?
          }
        }

        module.exports = __webpack_require__(/*! ./common */ './node_modules/debug/src/common.js')(exports);
        const formatters = module.exports.formatters;
        /**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

        formatters.j = function (v) {
          try {
            return JSON.stringify(v);
          } catch (error) {
            return '[UnexpectedJSONParseError]: ' + error.message;
          }
        };
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! ./../../process/browser.js */ './node_modules/process/browser.js')));
      /***/ },

    /***/ './node_modules/debug/src/common.js':
    /*! ******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

      function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

      function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

      function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter); }

      function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

      function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

      /**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
      function setup (env) {
        createDebug.debug = createDebug;
        createDebug.default = createDebug;
        createDebug.coerce = coerce;
        createDebug.disable = disable;
        createDebug.enable = enable;
        createDebug.enabled = enabled;
        createDebug.humanize = __webpack_require__(/*! ms */ './node_modules/ms/index.js');
        Object.keys(env).forEach(function (key) {
          createDebug[key] = env[key];
        });
        /**
  * Active `debug` instances.
  */

        createDebug.instances = [];
        /**
  * The currently active debug mode names, and names to skip.
  */

        createDebug.names = [];
        createDebug.skips = [];
        /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

        createDebug.formatters = {};
        /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

        function selectColor (namespace) {
          let hash = 0;

          for (let i = 0; i < namespace.length; i++) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
          }

          return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
        }

        createDebug.selectColor = selectColor;
        /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

        function createDebug (namespace) {
          let prevTime;

          function debug () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            // Disabled?
            if (!debug.enabled) {
              return;
            }

            const self = debug; // Set `diff` timestamp

            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);

            if (typeof args[0] !== 'string') {
              // Anything else let's inspect with %O
              args.unshift('%O');
            } // Apply any `formatters` transformations

            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
              // If we encounter an escaped % then don't increase the array index
              if (match === '%%') {
                return match;
              }

              index++;
              const formatter = createDebug.formatters[format];

              if (typeof formatter === 'function') {
                const val = args[index];
                match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

                args.splice(index, 1);
                index--;
              }

              return match;
            }); // Apply env-specific formatting (colors, etc.)

            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
          }

          debug.namespace = namespace;
          debug.enabled = createDebug.enabled(namespace);
          debug.useColors = createDebug.useColors();
          debug.color = selectColor(namespace);
          debug.destroy = destroy;
          debug.extend = extend; // Debug.formatArgs = formatArgs;
          // debug.rawLog = rawLog;
          // env-specific initialization logic for debug instances

          if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
          }

          createDebug.instances.push(debug);
          return debug;
        }

        function destroy () {
          const index = createDebug.instances.indexOf(this);

          if (index !== -1) {
            createDebug.instances.splice(index, 1);
            return true;
          }

          return false;
        }

        function extend (namespace, delimiter) {
          const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
          newDebug.log = this.log;
          return newDebug;
        }
        /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */

        function enable (namespaces) {
          createDebug.save(namespaces);
          createDebug.names = [];
          createDebug.skips = [];
          let i;
          const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
          const len = split.length;

          for (i = 0; i < len; i++) {
            if (!split[i]) {
              // ignore empty strings
              continue;
            }

            namespaces = split[i].replace(/\*/g, '.*?');

            if (namespaces[0] === '-') {
              createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
            } else {
              createDebug.names.push(new RegExp('^' + namespaces + '$'));
            }
          }

          for (i = 0; i < createDebug.instances.length; i++) {
            const instance = createDebug.instances[i];
            instance.enabled = createDebug.enabled(instance.namespace);
          }
        }
        /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */

        function disable () {
          const namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
            return '-' + namespace;
          }))).join(',');
          createDebug.enable('');
          return namespaces;
        }
        /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */

        function enabled (name) {
          if (name[name.length - 1] === '*') {
            return true;
          }

          let i;
          let len;

          for (i = 0, len = createDebug.skips.length; i < len; i++) {
            if (createDebug.skips[i].test(name)) {
              return false;
            }
          }

          for (i = 0, len = createDebug.names.length; i < len; i++) {
            if (createDebug.names[i].test(name)) {
              return true;
            }
          }

          return false;
        }
        /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */

        function toNamespace (regexp) {
          return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
        }
        /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */

        function coerce (val) {
          if (val instanceof Error) {
            return val.stack || val.message;
          }

          return val;
        }

        createDebug.enable(createDebug.load());
        return createDebug;
      }

      module.exports = setup;
      /***/ },

    /***/ './node_modules/engine.io-client/lib/globalThis.browser.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/globalThis.browser.js ***!
  \*****************************************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      module.exports = (function () {
        if (typeof self !== 'undefined') {
          return self;
        } else if (typeof window !== 'undefined') {
          return window;
        } else {
          return Function('return this')();
        }
      }());
      /***/ },

    /***/ './node_modules/engine.io-client/lib/index.js':
    /*! ****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/index.js ***!
  \****************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      const Socket = __webpack_require__(/*! ./socket */ './node_modules/engine.io-client/lib/socket.js');

      module.exports = function (uri, opts) {
        return new Socket(uri, opts);
      };
      /**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

      module.exports.Socket = Socket;
      module.exports.protocol = Socket.protocol; // this is an int

      module.exports.Transport = __webpack_require__(/*! ./transport */ './node_modules/engine.io-client/lib/transport.js');
      module.exports.transports = __webpack_require__(/*! ./transports/index */ './node_modules/engine.io-client/lib/transports/index.js');
      module.exports.parser = __webpack_require__(/*! engine.io-parser */ './node_modules/engine.io-parser/lib/index.js');
      /***/ },

    /***/ './node_modules/engine.io-client/lib/socket.js':
    /*! *****************************************************!*\
  !*** ./node_modules/engine.io-client/lib/socket.js ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      function _extends () { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

      function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      const transports = __webpack_require__(/*! ./transports/index */ './node_modules/engine.io-client/lib/transports/index.js');

      const Emitter = __webpack_require__(/*! component-emitter */ './node_modules/component-emitter/index.js');

      const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('engine.io-client:socket');

      const parser = __webpack_require__(/*! engine.io-parser */ './node_modules/engine.io-parser/lib/index.js');

      const parseuri = __webpack_require__(/*! parseuri */ './node_modules/parseuri/index.js');

      const parseqs = __webpack_require__(/*! parseqs */ './node_modules/parseqs/index.js');

      const Socket = /* #__PURE__ */(function (_Emitter) {
        _inherits(Socket, _Emitter);

        const _super = _createSuper(Socket);

        /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} options
   * @api public
   */
        function Socket (uri) {
          let _this;

          let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Socket);

          _this = _super.call(this);

          if (uri && _typeof(uri) === 'object') {
            opts = uri;
            uri = null;
          }

          if (uri) {
            uri = parseuri(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
            opts.port = uri.port;
            if (uri.query) opts.query = uri.query;
          } else if (opts.host) {
            opts.hostname = parseuri(opts.host).host;
          }

          _this.secure = opts.secure != null ? opts.secure : typeof location !== 'undefined' && location.protocol === 'https:';

          if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = _this.secure ? '443' : '80';
          }

          _this.hostname = opts.hostname || (typeof location !== 'undefined' ? location.hostname : 'localhost');
          _this.port = opts.port || (typeof location !== 'undefined' && location.port ? location.port : _this.secure ? 443 : 80);
          _this.transports = opts.transports || ['polling', 'websocket'];
          _this.readyState = '';
          _this.writeBuffer = [];
          _this.prevBufferLen = 0;
          _this.opts = _extends({
            path: '/engine.io',
            agent: false,
            withCredentials: false,
            upgrade: true,
            jsonp: true,
            timestampParam: 't',
            policyPort: 843,
            rememberUpgrade: false,
            rejectUnauthorized: true,
            perMessageDeflate: {
              threshold: 1024
            },
            transportOptions: {}
          }, opts);
          _this.opts.path = _this.opts.path.replace(/\/$/, '') + '/';

          if (typeof _this.opts.query === 'string') {
            _this.opts.query = parseqs.decode(_this.opts.query);
          } // set on handshake

          _this.id = null;
          _this.upgrades = null;
          _this.pingInterval = null;
          _this.pingTimeout = null; // set on heartbeat

          _this.pingTimeoutTimer = null;

          _this.open();

          return _this;
        }
        /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */

        _createClass(Socket, [{
          key: 'createTransport',
          value: function createTransport (name) {
            debug('creating transport "%s"', name);
            const query = clone(this.opts.query); // append engine.io protocol identifier

            query.EIO = parser.protocol; // transport name

            query.transport = name; // session id if we already have one

            if (this.id) query.sid = this.id;

            const opts = _extends({}, this.opts.transportOptions[name], this.opts, {
              query,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port
            });

            debug('options: %j', opts);
            return new transports[name](opts);
          }
          /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */

        }, {
          key: 'open',
          value: function open () {
            let transport;

            if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
              transport = 'websocket';
            } else if (this.transports.length === 0) {
              // Emit error on next tick so it can be listened to
              const self = this;
              setTimeout(function () {
                self.emit('error', 'No transports available');
              }, 0);
              return;
            } else {
              transport = this.transports[0];
            }

            this.readyState = 'opening'; // Retry with the next transport if the transport is disabled (jsonp: false)

            try {
              transport = this.createTransport(transport);
            } catch (e) {
              debug('error while creating transport: %s', e);
              this.transports.shift();
              this.open();
              return;
            }

            transport.open();
            this.setTransport(transport);
          }
          /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */

        }, {
          key: 'setTransport',
          value: function setTransport (transport) {
            debug('setting transport %s', transport.name);
            const self = this;

            if (this.transport) {
              debug('clearing existing transport %s', this.transport.name);
              this.transport.removeAllListeners();
            } // set up transport

            this.transport = transport; // set up transport listeners

            transport.on('drain', function () {
              self.onDrain();
            }).on('packet', function (packet) {
              self.onPacket(packet);
            }).on('error', function (e) {
              self.onError(e);
            }).on('close', function () {
              self.onClose('transport close');
            });
          }
          /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */

        }, {
          key: 'probe',
          value: function probe (name) {
            debug('probing transport "%s"', name);
            let transport = this.createTransport(name, {
              probe: 1
            });
            let failed = false;
            const self = this;
            Socket.priorWebsocketSuccess = false;

            function onTransportOpen () {
              if (self.onlyBinaryUpgrades) {
                const upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
                failed = failed || upgradeLosesBinary;
              }

              if (failed) return;
              debug('probe transport "%s" opened', name);
              transport.send([{
                type: 'ping',
                data: 'probe'
              }]);
              transport.once('packet', function (msg) {
                if (failed) return;

                if (msg.type === 'pong' && msg.data === 'probe') {
                  debug('probe transport "%s" pong', name);
                  self.upgrading = true;
                  self.emit('upgrading', transport);
                  if (!transport) return;
                  Socket.priorWebsocketSuccess = transport.name === 'websocket';
                  debug('pausing current transport "%s"', self.transport.name);
                  self.transport.pause(function () {
                    if (failed) return;
                    if (self.readyState === 'closed') return;
                    debug('changing transport and sending upgrade packet');
                    cleanup();
                    self.setTransport(transport);
                    transport.send([{
                      type: 'upgrade'
                    }]);
                    self.emit('upgrade', transport);
                    transport = null;
                    self.upgrading = false;
                    self.flush();
                  });
                } else {
                  debug('probe transport "%s" failed', name);
                  const err = new Error('probe error');
                  err.transport = transport.name;
                  self.emit('upgradeError', err);
                }
              });
            }

            function freezeTransport () {
              if (failed) return; // Any callback called by transport should be ignored since now

              failed = true;
              cleanup();
              transport.close();
              transport = null;
            } // Handle any error that happens while probing

            function onerror (err) {
              const error = new Error('probe error: ' + err);
              error.transport = transport.name;
              freezeTransport();
              debug('probe transport "%s" failed because of error: %s', name, err);
              self.emit('upgradeError', error);
            }

            function onTransportClose () {
              onerror('transport closed');
            } // When the socket is closed while we're probing

            function onclose () {
              onerror('socket closed');
            } // When the socket is upgraded while we're probing

            function onupgrade (to) {
              if (transport && to.name !== transport.name) {
                debug('"%s" works - aborting "%s"', to.name, transport.name);
                freezeTransport();
              }
            } // Remove all listeners on the transport and on self

            function cleanup () {
              transport.removeListener('open', onTransportOpen);
              transport.removeListener('error', onerror);
              transport.removeListener('close', onTransportClose);
              self.removeListener('close', onclose);
              self.removeListener('upgrading', onupgrade);
            }

            transport.once('open', onTransportOpen);
            transport.once('error', onerror);
            transport.once('close', onTransportClose);
            this.once('close', onclose);
            this.once('upgrading', onupgrade);
            transport.open();
          }
          /**
     * Called when connection is deemed open.
     *
     * @api public
     */

        }, {
          key: 'onOpen',
          value: function onOpen () {
            debug('socket open');
            this.readyState = 'open';
            Socket.priorWebsocketSuccess = this.transport.name === 'websocket';
            this.emit('open');
            this.flush(); // we check for `readyState` in case an `open`
            // listener already closed the socket

            if (this.readyState === 'open' && this.opts.upgrade && this.transport.pause) {
              debug('starting upgrade probes');
              let i = 0;
              const l = this.upgrades.length;

              for (; i < l; i++) {
                this.probe(this.upgrades[i]);
              }
            }
          }
          /**
     * Handles a packet.
     *
     * @api private
     */

        }, {
          key: 'onPacket',
          value: function onPacket (packet) {
            if (this.readyState === 'opening' || this.readyState === 'open' || this.readyState === 'closing') {
              debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
              this.emit('packet', packet); // Socket is live - any packet counts

              this.emit('heartbeat');

              switch (packet.type) {
                case 'open':
                  this.onHandshake(JSON.parse(packet.data));
                  break;

                case 'ping':
                  this.resetPingTimeout();
                  this.sendPacket('pong');
                  this.emit('pong');
                  break;

                case 'error':
                  var err = new Error('server error');
                  err.code = packet.data;
                  this.onError(err);
                  break;

                case 'message':
                  this.emit('data', packet.data);
                  this.emit('message', packet.data);
                  break;
              }
            } else {
              debug('packet received with socket readyState "%s"', this.readyState);
            }
          }
          /**
     * Called upon handshake completion.
     *
     * @param {Object} handshake obj
     * @api private
     */

        }, {
          key: 'onHandshake',
          value: function onHandshake (data) {
            this.emit('handshake', data);
            this.id = data.sid;
            this.transport.query.sid = data.sid;
            this.upgrades = this.filterUpgrades(data.upgrades);
            this.pingInterval = data.pingInterval;
            this.pingTimeout = data.pingTimeout;
            this.onOpen(); // In case open handler closes socket

            if (this.readyState === 'closed') return;
            this.resetPingTimeout();
          }
          /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */

        }, {
          key: 'resetPingTimeout',
          value: function resetPingTimeout () {
            const _this2 = this;

            clearTimeout(this.pingTimeoutTimer);
            this.pingTimeoutTimer = setTimeout(function () {
              _this2.onClose('ping timeout');
            }, this.pingInterval + this.pingTimeout);
          }
          /**
     * Called on `drain` event
     *
     * @api private
     */

        }, {
          key: 'onDrain',
          value: function onDrain () {
            this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
            // for example, when upgrading, upgrade packet is sent over,
            // and a nonzero prevBufferLen could cause problems on `drain`

            this.prevBufferLen = 0;

            if (this.writeBuffer.length === 0) {
              this.emit('drain');
            } else {
              this.flush();
            }
          }
          /**
     * Flush write buffers.
     *
     * @api private
     */

        }, {
          key: 'flush',
          value: function flush () {
            if (this.readyState !== 'closed' && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
              debug('flushing %d packets in socket', this.writeBuffer.length);
              this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
              // splice writeBuffer and callbackBuffer on `drain`

              this.prevBufferLen = this.writeBuffer.length;
              this.emit('flush');
            }
          }
          /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */

        }, {
          key: 'write',
          value: function write (msg, options, fn) {
            this.sendPacket('message', msg, options, fn);
            return this;
          }
        }, {
          key: 'send',
          value: function send (msg, options, fn) {
            this.sendPacket('message', msg, options, fn);
            return this;
          }
          /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */

        }, {
          key: 'sendPacket',
          value: function sendPacket (type, data, options, fn) {
            if (typeof data === 'function') {
              fn = data;
              data = undefined;
            }

            if (typeof options === 'function') {
              fn = options;
              options = null;
            }

            if (this.readyState === 'closing' || this.readyState === 'closed') {
              return;
            }

            options = options || {};
            options.compress = options.compress !== false;
            const packet = {
              type,
              data,
              options
            };
            this.emit('packetCreate', packet);
            this.writeBuffer.push(packet);
            if (fn) this.once('flush', fn);
            this.flush();
          }
          /**
     * Closes the connection.
     *
     * @api private
     */

        }, {
          key: 'close',
          value: function close () {
            const self = this;

            if (this.readyState === 'opening' || this.readyState === 'open') {
              this.readyState = 'closing';

              if (this.writeBuffer.length) {
                this.once('drain', function () {
                  if (this.upgrading) {
                    waitForUpgrade();
                  } else {
                    close();
                  }
                });
              } else if (this.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            }

            function close () {
              self.onClose('forced close');
              debug('socket closing - telling transport to close');
              self.transport.close();
            }

            function cleanupAndClose () {
              self.removeListener('upgrade', cleanupAndClose);
              self.removeListener('upgradeError', cleanupAndClose);
              close();
            }

            function waitForUpgrade () {
              // wait for upgrade to finish since we can't send packets while pausing a transport
              self.once('upgrade', cleanupAndClose);
              self.once('upgradeError', cleanupAndClose);
            }

            return this;
          }
          /**
     * Called upon transport error
     *
     * @api private
     */

        }, {
          key: 'onError',
          value: function onError (err) {
            debug('socket error %j', err);
            Socket.priorWebsocketSuccess = false;
            this.emit('error', err);
            this.onClose('transport error', err);
          }
          /**
     * Called upon transport close.
     *
     * @api private
     */

        }, {
          key: 'onClose',
          value: function onClose (reason, desc) {
            if (this.readyState === 'opening' || this.readyState === 'open' || this.readyState === 'closing') {
              debug('socket close with reason: "%s"', reason);
              const self = this; // clear timers

              clearTimeout(this.pingIntervalTimer);
              clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

              this.transport.removeAllListeners('close'); // ensure transport won't stay open

              this.transport.close(); // ignore further transport communication

              this.transport.removeAllListeners(); // set ready state

              this.readyState = 'closed'; // clear session id

              this.id = null; // emit close event

              this.emit('close', reason, desc); // clean buffers after, so users can still
              // grab the buffers on `close` event

              self.writeBuffer = [];
              self.prevBufferLen = 0;
            }
          }
          /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */

        }, {
          key: 'filterUpgrades',
          value: function filterUpgrades (upgrades) {
            const filteredUpgrades = [];
            let i = 0;
            const j = upgrades.length;

            for (; i < j; i++) {
              if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
            }

            return filteredUpgrades;
          }
        }]);

        return Socket;
      }(Emitter));

      Socket.priorWebsocketSuccess = false;
      /**
 * Protocol version.
 *
 * @api public
 */

      Socket.protocol = parser.protocol; // this is an int

      function clone (obj) {
        const o = {};

        for (const i in obj) {
          if (obj.hasOwnProperty(i)) {
            o[i] = obj[i];
          }
        }

        return o;
      }

      module.exports = Socket;
      /***/ },

    /***/ './node_modules/engine.io-client/lib/transport.js':
    /*! ********************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transport.js ***!
  \********************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

      function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      const parser = __webpack_require__(/*! engine.io-parser */ './node_modules/engine.io-parser/lib/index.js');

      const Emitter = __webpack_require__(/*! component-emitter */ './node_modules/component-emitter/index.js');

      const Transport = /* #__PURE__ */(function (_Emitter) {
        _inherits(Transport, _Emitter);

        const _super = _createSuper(Transport);

        /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
        function Transport (opts) {
          let _this;

          _classCallCheck(this, Transport);

          _this = _super.call(this);
          _this.opts = opts;
          _this.query = opts.query;
          _this.readyState = '';
          _this.socket = opts.socket;
          return _this;
        }
        /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */

        _createClass(Transport, [{
          key: 'onError',
          value: function onError (msg, desc) {
            const err = new Error(msg);
            err.type = 'TransportError';
            err.description = desc;
            this.emit('error', err);
            return this;
          }
          /**
     * Opens the transport.
     *
     * @api public
     */

        }, {
          key: 'open',
          value: function open () {
            if (this.readyState === 'closed' || this.readyState === '') {
              this.readyState = 'opening';
              this.doOpen();
            }

            return this;
          }
          /**
     * Closes the transport.
     *
     * @api private
     */

        }, {
          key: 'close',
          value: function close () {
            if (this.readyState === 'opening' || this.readyState === 'open') {
              this.doClose();
              this.onClose();
            }

            return this;
          }
          /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api private
     */

        }, {
          key: 'send',
          value: function send (packets) {
            if (this.readyState === 'open') {
              this.write(packets);
            } else {
              throw new Error('Transport not open');
            }
          }
          /**
     * Called upon open
     *
     * @api private
     */

        }, {
          key: 'onOpen',
          value: function onOpen () {
            this.readyState = 'open';
            this.writable = true;
            this.emit('open');
          }
          /**
     * Called with data.
     *
     * @param {String} data
     * @api private
     */

        }, {
          key: 'onData',
          value: function onData (data) {
            const packet = parser.decodePacket(data, this.socket.binaryType);
            this.onPacket(packet);
          }
          /**
     * Called with a decoded packet.
     */

        }, {
          key: 'onPacket',
          value: function onPacket (packet) {
            this.emit('packet', packet);
          }
          /**
     * Called upon close.
     *
     * @api private
     */

        }, {
          key: 'onClose',
          value: function onClose () {
            this.readyState = 'closed';
            this.emit('close');
          }
        }]);

        return Transport;
      }(Emitter));

      module.exports = Transport;
      /***/ },

    /***/ './node_modules/engine.io-client/lib/transports/index.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/index.js ***!
  \***************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      const XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ './node_modules/engine.io-client/lib/xmlhttprequest.js');

      const XHR = __webpack_require__(/*! ./polling-xhr */ './node_modules/engine.io-client/lib/transports/polling-xhr.js');

      const JSONP = __webpack_require__(/*! ./polling-jsonp */ './node_modules/engine.io-client/lib/transports/polling-jsonp.js');

      const websocket = __webpack_require__(/*! ./websocket */ './node_modules/engine.io-client/lib/transports/websocket.js');

      exports.polling = polling;
      exports.websocket = websocket;
      /**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

      function polling (opts) {
        let xhr;
        let xd = false;
        let xs = false;
        const jsonp = opts.jsonp !== false;

        if (typeof location !== 'undefined') {
          const isSSL = location.protocol === 'https:';
          let port = location.port; // some user agents have empty `location.port`

          if (!port) {
            port = isSSL ? 443 : 80;
          }

          xd = opts.hostname !== location.hostname || port !== opts.port;
          xs = opts.secure !== isSSL;
        }

        opts.xdomain = xd;
        opts.xscheme = xs;
        xhr = new XMLHttpRequest(opts);

        if ('open' in xhr && !opts.forceJSONP) {
          return new XHR(opts);
        } else {
          if (!jsonp) throw new Error('JSONP disabled');
          return new JSONP(opts);
        }
      }
      /***/ },

    /***/ './node_modules/engine.io-client/lib/transports/polling-jsonp.js':
    /*! ***********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-jsonp.js ***!
  \***********************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _get (target, property, receiver) { if (typeof Reflect !== 'undefined' && Reflect.get) { _get = Reflect.get; } else { _get = function _get (target, property, receiver) { const base = _superPropBase(target, property); if (!base) return; const desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

      function _superPropBase (object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

      function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

      function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      const Polling = __webpack_require__(/*! ./polling */ './node_modules/engine.io-client/lib/transports/polling.js');

      const globalThis = __webpack_require__(/*! ../globalThis */ './node_modules/engine.io-client/lib/globalThis.browser.js');

      const rNewline = /\n/g;
      const rEscapedNewline = /\\n/g;
      /**
 * Global JSONP callbacks.
 */

      let callbacks;
      /**
 * Noop.
 */

      function empty () {}

      const JSONPPolling = /* #__PURE__ */(function (_Polling) {
        _inherits(JSONPPolling, _Polling);

        const _super = _createSuper(JSONPPolling);

        /**
   * JSONP Polling constructor.
   *
   * @param {Object} opts.
   * @api public
   */
        function JSONPPolling (opts) {
          let _this;

          _classCallCheck(this, JSONPPolling);

          _this = _super.call(this, opts);
          _this.query = _this.query || {}; // define global callbacks array if not present
          // we do this here (lazily) to avoid unneeded global pollution

          if (!callbacks) {
            // we need to consider multiple engines in the same page
            callbacks = globalThis.___eio = globalThis.___eio || [];
          } // callback identifier

          _this.index = callbacks.length; // add callback to jsonp global

          const self = _assertThisInitialized(_this);

          callbacks.push(function (msg) {
            self.onData(msg);
          }); // append to query string

          _this.query.j = _this.index; // prevent spurious errors from being emitted when the window is unloaded

          if (typeof addEventListener === 'function') {
            addEventListener('beforeunload', function () {
              if (self.script) self.script.onerror = empty;
            }, false);
          }

          return _this;
        }
        /**
   * JSONP only supports binary as base64 encoded strings
   */

        _createClass(JSONPPolling, [{
          key: 'doClose',

          /**
     * Closes the socket.
     *
     * @api private
     */
          value: function doClose () {
            if (this.script) {
              this.script.parentNode.removeChild(this.script);
              this.script = null;
            }

            if (this.form) {
              this.form.parentNode.removeChild(this.form);
              this.form = null;
              this.iframe = null;
            }

            _get(_getPrototypeOf(JSONPPolling.prototype), 'doClose', this).call(this);
          }
          /**
     * Starts a poll cycle.
     *
     * @api private
     */

        }, {
          key: 'doPoll',
          value: function doPoll () {
            const self = this;
            const script = document.createElement('script');

            if (this.script) {
              this.script.parentNode.removeChild(this.script);
              this.script = null;
            }

            script.async = true;
            script.src = this.uri();

            script.onerror = function (e) {
              self.onError('jsonp poll error', e);
            };

            const insertAt = document.getElementsByTagName('script')[0];

            if (insertAt) {
              insertAt.parentNode.insertBefore(script, insertAt);
            } else {
              (document.head || document.body).appendChild(script);
            }

            this.script = script;
            const isUAgecko = typeof navigator !== 'undefined' && /gecko/i.test(navigator.userAgent);

            if (isUAgecko) {
              setTimeout(function () {
                const iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
                document.body.removeChild(iframe);
              }, 100);
            }
          }
          /**
     * Writes with a hidden iframe.
     *
     * @param {String} data to send
     * @param {Function} called upon flush.
     * @api private
     */

        }, {
          key: 'doWrite',
          value: function doWrite (data, fn) {
            const self = this;
            let iframe;

            if (!this.form) {
              const form = document.createElement('form');
              const area = document.createElement('textarea');
              const id = this.iframeId = 'eio_iframe_' + this.index;
              form.className = 'socketio';
              form.style.position = 'absolute';
              form.style.top = '-1000px';
              form.style.left = '-1000px';
              form.target = id;
              form.method = 'POST';
              form.setAttribute('accept-charset', 'utf-8');
              area.name = 'd';
              form.appendChild(area);
              document.body.appendChild(form);
              this.form = form;
              this.area = area;
            }

            this.form.action = this.uri();

            function complete () {
              initIframe();
              fn();
            }

            function initIframe () {
              if (self.iframe) {
                try {
                  self.form.removeChild(self.iframe);
                } catch (e) {
                  self.onError('jsonp polling iframe removal error', e);
                }
              }

              try {
                // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
                const html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
                iframe = document.createElement(html);
              } catch (e) {
                iframe = document.createElement('iframe');
                iframe.name = self.iframeId;
                iframe.src = 'javascript:0';
              }

              iframe.id = self.iframeId;
              self.form.appendChild(iframe);
              self.iframe = iframe;
            }

            initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
            // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

            data = data.replace(rEscapedNewline, '\\\n');
            this.area.value = data.replace(rNewline, '\\n');

            try {
              this.form.submit();
            } catch (e) {}

            if (this.iframe.attachEvent) {
              this.iframe.onreadystatechange = function () {
                if (self.iframe.readyState === 'complete') {
                  complete();
                }
              };
            } else {
              this.iframe.onload = complete;
            }
          }
        }, {
          key: 'supportsBinary',
          get: function get () {
            return false;
          }
        }]);

        return JSONPPolling;
      }(Polling));

      module.exports = JSONPPolling;
      /***/ },

    /***/ './node_modules/engine.io-client/lib/transports/polling-xhr.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling-xhr.js ***!
  \*********************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function _extends () { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

      function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      /* global attachEvent */
      const XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ './node_modules/engine.io-client/lib/xmlhttprequest.js');

      const Polling = __webpack_require__(/*! ./polling */ './node_modules/engine.io-client/lib/transports/polling.js');

      const Emitter = __webpack_require__(/*! component-emitter */ './node_modules/component-emitter/index.js');

      const _require = __webpack_require__(/*! ../util */ './node_modules/engine.io-client/lib/util.js');
      const pick = _require.pick;

      const globalThis = __webpack_require__(/*! ../globalThis */ './node_modules/engine.io-client/lib/globalThis.browser.js');

      const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('engine.io-client:polling-xhr');
      /**
 * Empty function
 */

      function empty () {}

      const hasXHR2 = (function () {
        const XMLHttpRequest = __webpack_require__(/*! xmlhttprequest-ssl */ './node_modules/engine.io-client/lib/xmlhttprequest.js');

        const xhr = new XMLHttpRequest({
          xdomain: false
        });
        return xhr.responseType != null;
      }());

      const XHR = /* #__PURE__ */(function (_Polling) {
        _inherits(XHR, _Polling);

        const _super = _createSuper(XHR);

        /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @api public
   */
        function XHR (opts) {
          let _this;

          _classCallCheck(this, XHR);

          _this = _super.call(this, opts);

          if (typeof location !== 'undefined') {
            const isSSL = location.protocol === 'https:';
            let port = location.port; // some user agents have empty `location.port`

            if (!port) {
              port = isSSL ? 443 : 80;
            }

            _this.xd = typeof location !== 'undefined' && opts.hostname !== location.hostname || port !== opts.port;
            _this.xs = opts.secure !== isSSL;
          }
          /**
     * XHR supports binary
     */

          const forceBase64 = opts && opts.forceBase64;
          _this.supportsBinary = hasXHR2 && !forceBase64;
          return _this;
        }
        /**
   * Creates a request.
   *
   * @param {String} method
   * @api private
   */

        _createClass(XHR, [{
          key: 'request',
          value: function request () {
            const opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _extends(opts, {
              xd: this.xd,
              xs: this.xs
            }, this.opts);

            return new Request(this.uri(), opts);
          }
          /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */

        }, {
          key: 'doWrite',
          value: function doWrite (data, fn) {
            const req = this.request({
              method: 'POST',
              data
            });
            const self = this;
            req.on('success', fn);
            req.on('error', function (err) {
              self.onError('xhr post error', err);
            });
          }
          /**
     * Starts a poll cycle.
     *
     * @api private
     */

        }, {
          key: 'doPoll',
          value: function doPoll () {
            debug('xhr poll');
            const req = this.request();
            const self = this;
            req.on('data', function (data) {
              self.onData(data);
            });
            req.on('error', function (err) {
              self.onError('xhr poll error', err);
            });
            this.pollXhr = req;
          }
        }]);

        return XHR;
      }(Polling));

      var Request = /* #__PURE__ */(function (_Emitter) {
        _inherits(Request, _Emitter);

        const _super2 = _createSuper(Request);

        /**
   * Request constructor
   *
   * @param {Object} options
   * @api public
   */
        function Request (uri, opts) {
          let _this2;

          _classCallCheck(this, Request);

          _this2 = _super2.call(this);
          _this2.opts = opts;
          _this2.method = opts.method || 'GET';
          _this2.uri = uri;
          _this2.async = opts.async !== false;
          _this2.data = undefined !== opts.data ? opts.data : null;

          _this2.create();

          return _this2;
        }
        /**
   * Creates the XHR object and sends the request.
   *
   * @api private
   */

        _createClass(Request, [{
          key: 'create',
          value: function create () {
            const opts = pick(this.opts, 'agent', 'enablesXDR', 'pfx', 'key', 'passphrase', 'cert', 'ca', 'ciphers', 'rejectUnauthorized');
            opts.xdomain = !!this.opts.xd;
            opts.xscheme = !!this.opts.xs;
            const xhr = this.xhr = new XMLHttpRequest(opts);
            const self = this;

            try {
              debug('xhr open %s: %s', this.method, this.uri);
              xhr.open(this.method, this.uri, this.async);

              try {
                if (this.opts.extraHeaders) {
                  xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

                  for (const i in this.opts.extraHeaders) {
                    if (this.opts.extraHeaders.hasOwnProperty(i)) {
                      xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                    }
                  }
                }
              } catch (e) {}

              if (this.method === 'POST') {
                try {
                  xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                } catch (e) {}
              }

              try {
                xhr.setRequestHeader('Accept', '*/*');
              } catch (e) {} // ie6 check

              if ('withCredentials' in xhr) {
                xhr.withCredentials = this.opts.withCredentials;
              }

              if (this.opts.requestTimeout) {
                xhr.timeout = this.opts.requestTimeout;
              }

              if (this.hasXDR()) {
                xhr.onload = function () {
                  self.onLoad();
                };

                xhr.onerror = function () {
                  self.onError(xhr.responseText);
                };
              } else {
                xhr.onreadystatechange = function () {
                  if (xhr.readyState !== 4) return;

                  if (xhr.status === 200 || xhr.status === 1223) {
                    self.onLoad();
                  } else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    setTimeout(function () {
                      self.onError(typeof xhr.status === 'number' ? xhr.status : 0);
                    }, 0);
                  }
                };
              }

              debug('xhr data %s', this.data);
              xhr.send(this.data);
            } catch (e) {
              // Need to defer since .create() is called directly from the constructor
              // and thus the 'error' event can only be only bound *after* this exception
              // occurs.  Therefore, also, we cannot throw here at all.
              setTimeout(function () {
                self.onError(e);
              }, 0);
              return;
            }

            if (typeof document !== 'undefined') {
              this.index = Request.requestsCount++;
              Request.requests[this.index] = this;
            }
          }
          /**
     * Called upon successful response.
     *
     * @api private
     */

        }, {
          key: 'onSuccess',
          value: function onSuccess () {
            this.emit('success');
            this.cleanup();
          }
          /**
     * Called if we have data.
     *
     * @api private
     */

        }, {
          key: 'onData',
          value: function onData (data) {
            this.emit('data', data);
            this.onSuccess();
          }
          /**
     * Called upon error.
     *
     * @api private
     */

        }, {
          key: 'onError',
          value: function onError (err) {
            this.emit('error', err);
            this.cleanup(true);
          }
          /**
     * Cleans up house.
     *
     * @api private
     */

        }, {
          key: 'cleanup',
          value: function cleanup (fromError) {
            if (typeof this.xhr === 'undefined' || this.xhr === null) {
              return;
            } // xmlhttprequest

            if (this.hasXDR()) {
              this.xhr.onload = this.xhr.onerror = empty;
            } else {
              this.xhr.onreadystatechange = empty;
            }

            if (fromError) {
              try {
                this.xhr.abort();
              } catch (e) {}
            }

            if (typeof document !== 'undefined') {
              delete Request.requests[this.index];
            }

            this.xhr = null;
          }
          /**
     * Called upon load.
     *
     * @api private
     */

        }, {
          key: 'onLoad',
          value: function onLoad () {
            const data = this.xhr.responseText;

            if (data !== null) {
              this.onData(data);
            }
          }
          /**
     * Check if it has XDomainRequest.
     *
     * @api private
     */

        }, {
          key: 'hasXDR',
          value: function hasXDR () {
            return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
          }
          /**
     * Aborts the request.
     *
     * @api public
     */

        }, {
          key: 'abort',
          value: function abort () {
            this.cleanup();
          }
        }]);

        return Request;
      }(Emitter));
      /**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

      Request.requestsCount = 0;
      Request.requests = {};

      if (typeof document !== 'undefined') {
        if (typeof attachEvent === 'function') {
          attachEvent('onunload', unloadHandler);
        } else if (typeof addEventListener === 'function') {
          const terminationEvent = 'onpagehide' in globalThis ? 'pagehide' : 'unload';
          addEventListener(terminationEvent, unloadHandler, false);
        }
      }

      function unloadHandler () {
        for (const i in Request.requests) {
          if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
          }
        }
      }

      module.exports = XHR;
      module.exports.Request = Request;
      /***/ },

    /***/ './node_modules/engine.io-client/lib/transports/polling.js':
    /*! *****************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/polling.js ***!
  \*****************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

      function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      const Transport = __webpack_require__(/*! ../transport */ './node_modules/engine.io-client/lib/transport.js');

      const parseqs = __webpack_require__(/*! parseqs */ './node_modules/parseqs/index.js');

      const parser = __webpack_require__(/*! engine.io-parser */ './node_modules/engine.io-parser/lib/index.js');

      const yeast = __webpack_require__(/*! yeast */ './node_modules/yeast/index.js');

      const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('engine.io-client:polling');

      const Polling = /* #__PURE__ */(function (_Transport) {
        _inherits(Polling, _Transport);

        const _super = _createSuper(Polling);

        function Polling () {
          _classCallCheck(this, Polling);

          return _super.apply(this, arguments);
        }

        _createClass(Polling, [{
          key: 'doOpen',

          /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */
          value: function doOpen () {
            this.poll();
          }
          /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */

        }, {
          key: 'pause',
          value: function pause (onPause) {
            const self = this;
            this.readyState = 'pausing';

            function pause () {
              debug('paused');
              self.readyState = 'paused';
              onPause();
            }

            if (this.polling || !this.writable) {
              let total = 0;

              if (this.polling) {
                debug('we are currently polling - waiting to pause');
                total++;
                this.once('pollComplete', function () {
                  debug('pre-pause polling complete');
                  --total || pause();
                });
              }

              if (!this.writable) {
                debug('we are currently writing - waiting to pause');
                total++;
                this.once('drain', function () {
                  debug('pre-pause writing complete');
                  --total || pause();
                });
              }
            } else {
              pause();
            }
          }
          /**
     * Starts polling cycle.
     *
     * @api public
     */

        }, {
          key: 'poll',
          value: function poll () {
            debug('polling');
            this.polling = true;
            this.doPoll();
            this.emit('poll');
          }
          /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */

        }, {
          key: 'onData',
          value: function onData (data) {
            const self = this;
            debug('polling got data %s', data);

            const callback = function callback (packet, index, total) {
              // if its the first message we consider the transport open
              if (self.readyState === 'opening' && packet.type === 'open') {
                self.onOpen();
              } // if its a close packet, we close the ongoing requests

              if (packet.type === 'close') {
                self.onClose();
                return false;
              } // otherwise bypass onData and handle the message

              self.onPacket(packet);
            }; // decode payload

            parser.decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing

            if (this.readyState !== 'closed') {
              // if we got data we're not polling
              this.polling = false;
              this.emit('pollComplete');

              if (this.readyState === 'open') {
                this.poll();
              } else {
                debug('ignoring poll - transport state "%s"', this.readyState);
              }
            }
          }
          /**
     * For polling, send a close packet.
     *
     * @api private
     */

        }, {
          key: 'doClose',
          value: function doClose () {
            const self = this;

            function close () {
              debug('writing close packet');
              self.write([{
                type: 'close'
              }]);
            }

            if (this.readyState === 'open') {
              debug('transport open - closing');
              close();
            } else {
              // in case we're trying to close while
              // handshaking is in progress (GH-164)
              debug('transport not open - deferring close');
              this.once('open', close);
            }
          }
          /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */

        }, {
          key: 'write',
          value: function write (packets) {
            const _this = this;

            this.writable = false;
            parser.encodePayload(packets, function (data) {
              _this.doWrite(data, function () {
                _this.writable = true;

                _this.emit('drain');
              });
            });
          }
          /**
     * Generates uri for connection.
     *
     * @api private
     */

        }, {
          key: 'uri',
          value: function uri () {
            let query = this.query || {};
            const schema = this.opts.secure ? 'https' : 'http';
            let port = ''; // cache busting is forced

            if (this.opts.timestampRequests !== false) {
              query[this.opts.timestampParam] = yeast();
            }

            if (!this.supportsBinary && !query.sid) {
              query.b64 = 1;
            }

            query = parseqs.encode(query); // avoid port if default for schema

            if (this.opts.port && (schema === 'https' && Number(this.opts.port) !== 443 || schema === 'http' && Number(this.opts.port) !== 80)) {
              port = ':' + this.opts.port;
            } // prepend ? to query

            if (query.length) {
              query = '?' + query;
            }

            const ipv6 = this.opts.hostname.indexOf(':') !== -1;
            return schema + '://' + (ipv6 ? '[' + this.opts.hostname + ']' : this.opts.hostname) + port + this.opts.path + query;
          }
        }, {
          key: 'name',

          /**
     * Transport name.
     */
          get: function get () {
            return 'polling';
          }
        }]);

        return Polling;
      }(Transport));

      module.exports = Polling;
      /***/ },

    /***/ './node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js':
    /*! ***************************************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js ***!
  \***************************************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      const globalThis = __webpack_require__(/*! ../globalThis */ './node_modules/engine.io-client/lib/globalThis.browser.js');

      module.exports = {
        WebSocket: globalThis.WebSocket || globalThis.MozWebSocket,
        usingBrowserWebSocket: true,
        defaultBinaryType: 'arraybuffer'
      };
      /***/ },

    /***/ './node_modules/engine.io-client/lib/transports/websocket.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/transports/websocket.js ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

      function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      const Transport = __webpack_require__(/*! ../transport */ './node_modules/engine.io-client/lib/transport.js');

      const parser = __webpack_require__(/*! engine.io-parser */ './node_modules/engine.io-parser/lib/index.js');

      const parseqs = __webpack_require__(/*! parseqs */ './node_modules/parseqs/index.js');

      const yeast = __webpack_require__(/*! yeast */ './node_modules/yeast/index.js');

      const _require = __webpack_require__(/*! ../util */ './node_modules/engine.io-client/lib/util.js');
      const pick = _require.pick;

      const _require2 = __webpack_require__(/*! ./websocket-constructor */ './node_modules/engine.io-client/lib/transports/websocket-constructor.browser.js');
      const WebSocket = _require2.WebSocket;
      const usingBrowserWebSocket = _require2.usingBrowserWebSocket;
      const defaultBinaryType = _require2.defaultBinaryType;

      const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('engine.io-client:websocket'); // detect ReactNative environment

      const isReactNative = typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';

      const WS = /* #__PURE__ */(function (_Transport) {
        _inherits(WS, _Transport);

        const _super = _createSuper(WS);

        /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
        function WS (opts) {
          let _this;

          _classCallCheck(this, WS);

          _this = _super.call(this, opts);
          _this.supportsBinary = !opts.forceBase64;
          return _this;
        }
        /**
   * Transport name.
   *
   * @api public
   */

        _createClass(WS, [{
          key: 'doOpen',

          /**
     * Opens socket.
     *
     * @api private
     */
          value: function doOpen () {
            if (!this.check()) {
              // let probe timeout
              return;
            }

            const uri = this.uri();
            const protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed

            const opts = isReactNative ? {} : pick(this.opts, 'agent', 'perMessageDeflate', 'pfx', 'key', 'passphrase', 'cert', 'ca', 'ciphers', 'rejectUnauthorized', 'localAddress');

            if (this.opts.extraHeaders) {
              opts.headers = this.opts.extraHeaders;
            }

            try {
              this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
            } catch (err) {
              return this.emit('error', err);
            }

            this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
            this.addEventListeners();
          }
          /**
     * Adds event listeners to the socket
     *
     * @api private
     */

        }, {
          key: 'addEventListeners',
          value: function addEventListeners () {
            const self = this;

            this.ws.onopen = function () {
              self.onOpen();
            };

            this.ws.onclose = function () {
              self.onClose();
            };

            this.ws.onmessage = function (ev) {
              self.onData(ev.data);
            };

            this.ws.onerror = function (e) {
              self.onError('websocket error', e);
            };
          }
          /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */

        }, {
          key: 'write',
          value: function write (packets) {
            const self = this;
            this.writable = false; // encodePacket efficient as it uses WS framing
            // no need for encodePayload

            let total = packets.length;
            let i = 0;
            const l = total;

            for (; i < l; i++) {
              (function (packet) {
                parser.encodePacket(packet, self.supportsBinary, function (data) {
                  // always create a new object (GH-437)
                  const opts = {};

                  if (!usingBrowserWebSocket) {
                    if (packet.options) {
                      opts.compress = packet.options.compress;
                    }

                    if (self.opts.perMessageDeflate) {
                      const len = typeof data === 'string' ? Buffer.byteLength(data) : data.length;

                      if (len < self.opts.perMessageDeflate.threshold) {
                        opts.compress = false;
                      }
                    }
                  } // Sometimes the websocket has already been closed but the browser didn't
                  // have a chance of informing us about it yet, in that case send will
                  // throw an error

                  try {
                    if (usingBrowserWebSocket) {
                      // TypeError is thrown when passing the second argument on Safari
                      self.ws.send(data);
                    } else {
                      self.ws.send(data, opts);
                    }
                  } catch (e) {
                    debug('websocket closed before onclose event');
                  }

                  --total || done();
                });
              })(packets[i]);
            }

            function done () {
              self.emit('flush'); // fake drain
              // defer to next tick to allow Socket to clear writeBuffer

              setTimeout(function () {
                self.writable = true;
                self.emit('drain');
              }, 0);
            }
          }
          /**
     * Called upon close
     *
     * @api private
     */

        }, {
          key: 'onClose',
          value: function onClose () {
            Transport.prototype.onClose.call(this);
          }
          /**
     * Closes socket.
     *
     * @api private
     */

        }, {
          key: 'doClose',
          value: function doClose () {
            if (typeof this.ws !== 'undefined') {
              this.ws.close();
            }
          }
          /**
     * Generates uri for connection.
     *
     * @api private
     */

        }, {
          key: 'uri',
          value: function uri () {
            let query = this.query || {};
            const schema = this.opts.secure ? 'wss' : 'ws';
            let port = ''; // avoid port if default for schema

            if (this.opts.port && (schema === 'wss' && Number(this.opts.port) !== 443 || schema === 'ws' && Number(this.opts.port) !== 80)) {
              port = ':' + this.opts.port;
            } // append timestamp to URI

            if (this.opts.timestampRequests) {
              query[this.opts.timestampParam] = yeast();
            } // communicate binary support capabilities

            if (!this.supportsBinary) {
              query.b64 = 1;
            }

            query = parseqs.encode(query); // prepend ? to query

            if (query.length) {
              query = '?' + query;
            }

            const ipv6 = this.opts.hostname.indexOf(':') !== -1;
            return schema + '://' + (ipv6 ? '[' + this.opts.hostname + ']' : this.opts.hostname) + port + this.opts.path + query;
          }
          /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */

        }, {
          key: 'check',
          value: function check () {
            return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
          }
        }, {
          key: 'name',
          get: function get () {
            return 'websocket';
          }
        }]);

        return WS;
      }(Transport));

      module.exports = WS;
      /***/ },

    /***/ './node_modules/engine.io-client/lib/util.js':
    /*! ***************************************************!*\
  !*** ./node_modules/engine.io-client/lib/util.js ***!
  \***************************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      module.exports.pick = function (obj) {
        for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          attr[_key - 1] = arguments[_key];
        }

        return attr.reduce(function (acc, k) {
          acc[k] = obj[k];
          return acc;
        }, {});
      };
      /***/ },

    /***/ './node_modules/engine.io-client/lib/xmlhttprequest.js':
    /*! *************************************************************!*\
  !*** ./node_modules/engine.io-client/lib/xmlhttprequest.js ***!
  \*************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      // browser shim for xmlhttprequest module
      const hasCORS = __webpack_require__(/*! has-cors */ './node_modules/has-cors/index.js');

      const globalThis = __webpack_require__(/*! ./globalThis */ './node_modules/engine.io-client/lib/globalThis.browser.js');

      module.exports = function (opts) {
        const xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
        // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

        const xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
        // https://github.com/Automattic/engine.io-client/pull/217

        const enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

        try {
          if (typeof XMLHttpRequest !== 'undefined' && (!xdomain || hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
        // because loading bar keeps flashing when using jsonp-polling
        // https://github.com/yujiosaka/socke.io-ie8-loading-example

        try {
          if (typeof XDomainRequest !== 'undefined' && !xscheme && enablesXDR) {
            return new XDomainRequest();
          }
        } catch (e) {}

        if (!xdomain) {
          try {
            return new globalThis[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
          } catch (e) {}
        }
      };
      /***/ },

    /***/ './node_modules/engine.io-parser/lib/commons.js':
    /*! ******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/commons.js ***!
  \******************************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      const PACKET_TYPES = Object.create(null); // no Map = no polyfill

      PACKET_TYPES.open = '0';
      PACKET_TYPES.close = '1';
      PACKET_TYPES.ping = '2';
      PACKET_TYPES.pong = '3';
      PACKET_TYPES.message = '4';
      PACKET_TYPES.upgrade = '5';
      PACKET_TYPES.noop = '6';
      const PACKET_TYPES_REVERSE = Object.create(null);
      Object.keys(PACKET_TYPES).forEach(function (key) {
        PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
      });
      const ERROR_PACKET = {
        type: 'error',
        data: 'parser error'
      };
      module.exports = {
        PACKET_TYPES,
        PACKET_TYPES_REVERSE,
        ERROR_PACKET
      };
      /***/ },

    /***/ './node_modules/engine.io-parser/lib/decodePacket.browser.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/decodePacket.browser.js ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      const _require = __webpack_require__(/*! ./commons */ './node_modules/engine.io-parser/lib/commons.js');
      const PACKET_TYPES_REVERSE = _require.PACKET_TYPES_REVERSE;
      const ERROR_PACKET = _require.ERROR_PACKET;

      const withNativeArrayBuffer = typeof ArrayBuffer === 'function';
      let base64decoder;

      if (withNativeArrayBuffer) {
        base64decoder = __webpack_require__(/*! base64-arraybuffer */ './node_modules/base64-arraybuffer/lib/base64-arraybuffer.js');
      }

      const decodePacket = function decodePacket (encodedPacket, binaryType) {
        if (typeof encodedPacket !== 'string') {
          return {
            type: 'message',
            data: mapBinary(encodedPacket, binaryType)
          };
        }

        const type = encodedPacket.charAt(0);

        if (type === 'b') {
          return {
            type: 'message',
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
          };
        }

        const packetType = PACKET_TYPES_REVERSE[type];

        if (!packetType) {
          return ERROR_PACKET;
        }

        return encodedPacket.length > 1
          ? {
              type: PACKET_TYPES_REVERSE[type],
              data: encodedPacket.substring(1)
            }
          : {
              type: PACKET_TYPES_REVERSE[type]
            };
      };

      var decodeBase64Packet = function decodeBase64Packet (data, binaryType) {
        if (base64decoder) {
          const decoded = base64decoder.decode(data);
          return mapBinary(decoded, binaryType);
        } else {
          return {
            base64: true,
            data
          }; // fallback for old browsers
        }
      };

      var mapBinary = function mapBinary (data, binaryType) {
        switch (binaryType) {
          case 'blob':
            return data instanceof ArrayBuffer ? new Blob([data]) : data;

          case 'arraybuffer':
          default:
            return data;
    // assuming the data is already an ArrayBuffer
        }
      };

      module.exports = decodePacket;
      /***/ },

    /***/ './node_modules/engine.io-parser/lib/encodePacket.browser.js':
    /*! *******************************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/encodePacket.browser.js ***!
  \*******************************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      const _require = __webpack_require__(/*! ./commons */ './node_modules/engine.io-parser/lib/commons.js');
      const PACKET_TYPES = _require.PACKET_TYPES;

      const withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && Object.prototype.toString.call(Blob) === '[object BlobConstructor]';
      const withNativeArrayBuffer = typeof ArrayBuffer === 'function'; // ArrayBuffer.isView method is not defined in IE10

      const isView = function isView (obj) {
        return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
      };

      const encodePacket = function encodePacket (_ref, supportsBinary, callback) {
        const type = _ref.type;
        const data = _ref.data;

        if (withNativeBlob && data instanceof Blob) {
          if (supportsBinary) {
            return callback(data);
          } else {
            return encodeBlobAsBase64(data, callback);
          }
        } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
          if (supportsBinary) {
            return callback(data instanceof ArrayBuffer ? data : data.buffer);
          } else {
            return encodeBlobAsBase64(new Blob([data]), callback);
          }
        } // plain string

        return callback(PACKET_TYPES[type] + (data || ''));
      };

      var encodeBlobAsBase64 = function encodeBlobAsBase64 (data, callback) {
        const fileReader = new FileReader();

        fileReader.onload = function () {
          const content = fileReader.result.split(',')[1];
          callback('b' + content);
        };

        return fileReader.readAsDataURL(data);
      };

      module.exports = encodePacket;
      /***/ },

    /***/ './node_modules/engine.io-parser/lib/index.js':
    /*! ****************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/index.js ***!
  \****************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      const encodePacket = __webpack_require__(/*! ./encodePacket */ './node_modules/engine.io-parser/lib/encodePacket.browser.js');

      const decodePacket = __webpack_require__(/*! ./decodePacket */ './node_modules/engine.io-parser/lib/decodePacket.browser.js');

      const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

      const encodePayload = function encodePayload (packets, callback) {
        // some packets may be added to the array while encoding, so the initial length must be saved
        const length = packets.length;
        const encodedPackets = new Array(length);
        let count = 0;
        packets.forEach(function (packet, i) {
          // force base64 encoding for binary packets
          encodePacket(packet, false, function (encodedPacket) {
            encodedPackets[i] = encodedPacket;

            if (++count === length) {
              callback(encodedPackets.join(SEPARATOR));
            }
          });
        });
      };

      const decodePayload = function decodePayload (encodedPayload, binaryType) {
        const encodedPackets = encodedPayload.split(SEPARATOR);
        const packets = [];

        for (let i = 0; i < encodedPackets.length; i++) {
          const decodedPacket = decodePacket(encodedPackets[i], binaryType);
          packets.push(decodedPacket);

          if (decodedPacket.type === 'error') {
            break;
          }
        }

        return packets;
      };

      module.exports = {
        protocol: 4,
        encodePacket,
        encodePayload,
        decodePacket,
        decodePayload
      };
      /***/ },

    /***/ './node_modules/has-cors/index.js':
    /*! ****************************************!*\
  !*** ./node_modules/has-cors/index.js ***!
  \****************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      /**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */
      try {
        module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
      } catch (err) {
        // if XMLHttp support is disabled in IE then it will throw
        // when trying to create
        module.exports = false;
      }
      /***/ },

    /***/ './node_modules/ms/index.js':
    /*! **********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      /**
 * Helpers.
 */
      const s = 1000;
      const m = s * 60;
      const h = m * 60;
      const d = h * 24;
      const w = d * 7;
      const y = d * 365.25;
      /**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

      module.exports = function (val, options) {
        options = options || {};

        const type = _typeof(val);

        if (type === 'string' && val.length > 0) {
          return parse(val);
        } else if (type === 'number' && isFinite(val)) {
          return options.long ? fmtLong(val) : fmtShort(val);
        }

        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
      };
      /**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

      function parse (str) {
        str = String(str);

        if (str.length > 100) {
          return;
        }

        const match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

        if (!match) {
          return;
        }

        const n = parseFloat(match[1]);
        const type = (match[2] || 'ms').toLowerCase();

        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;

          case 'weeks':
          case 'week':
          case 'w':
            return n * w;

          case 'days':
          case 'day':
          case 'd':
            return n * d;

          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;

          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;

          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;

          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;

          default:
            return undefined;
        }
      }
      /**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

      function fmtShort (ms) {
        const msAbs = Math.abs(ms);

        if (msAbs >= d) {
          return Math.round(ms / d) + 'd';
        }

        if (msAbs >= h) {
          return Math.round(ms / h) + 'h';
        }

        if (msAbs >= m) {
          return Math.round(ms / m) + 'm';
        }

        if (msAbs >= s) {
          return Math.round(ms / s) + 's';
        }

        return ms + 'ms';
      }
      /**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

      function fmtLong (ms) {
        const msAbs = Math.abs(ms);

        if (msAbs >= d) {
          return plural(ms, msAbs, d, 'day');
        }

        if (msAbs >= h) {
          return plural(ms, msAbs, h, 'hour');
        }

        if (msAbs >= m) {
          return plural(ms, msAbs, m, 'minute');
        }

        if (msAbs >= s) {
          return plural(ms, msAbs, s, 'second');
        }

        return ms + ' ms';
      }
      /**
 * Pluralization helper.
 */

      function plural (ms, msAbs, n, name) {
        const isPlural = msAbs >= n * 1.5;
        return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
      }
      /***/ },

    /***/ './node_modules/parseqs/index.js':
    /*! ***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      /**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
      exports.encode = function (obj) {
        let str = '';

        for (const i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (str.length) str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
          }
        }

        return str;
      };
      /**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

      exports.decode = function (qs) {
        const qry = {};
        const pairs = qs.split('&');

        for (let i = 0, l = pairs.length; i < l; i++) {
          const pair = pairs[i].split('=');
          qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }

        return qry;
      };
      /***/ },

    /***/ './node_modules/parseuri/index.js':
    /*! ****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      /**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
      const re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      const parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

      module.exports = function parseuri (str) {
        const src = str;
        const b = str.indexOf('[');
        const e = str.indexOf(']');

        if (b != -1 && e != -1) {
          str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
        }

        const m = re.exec(str || '');
        const uri = {};
        let i = 14;

        while (i--) {
          uri[parts[i]] = m[i] || '';
        }

        if (b != -1 && e != -1) {
          uri.source = src;
          uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
          uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
          uri.ipv6uri = true;
        }

        uri.pathNames = pathNames(uri, uri.path);
        uri.queryKey = queryKey(uri, uri.query);
        return uri;
      };

      function pathNames (obj, path) {
        const regx = /\/{2,9}/g;
        const names = path.replace(regx, '/').split('/');

        if (path.substr(0, 1) == '/' || path.length === 0) {
          names.splice(0, 1);
        }

        if (path.substr(path.length - 1, 1) == '/') {
          names.splice(names.length - 1, 1);
        }

        return names;
      }

      function queryKey (uri, query) {
        const data = {};
        query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
          if ($1) {
            data[$1] = $2;
          }
        });
        return data;
      }
      /***/ },

    /***/ './node_modules/process/browser.js':
    /*! *****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
    /*! no static exports found */
    /***/ function (module, exports) {
      // shim for using process in browser
      const process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      let cachedSetTimeout;
      let cachedClearTimeout;

      function defaultSetTimout () {
        throw new Error('setTimeout has not been defined');
      }

      function defaultClearTimeout () {
        throw new Error('clearTimeout has not been defined');
      }

      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout (fun) {
        if (cachedSetTimeout === setTimeout) {
          // normal enviroments in sane situations
          return setTimeout(fun, 0);
        } // if setTimeout wasn't available but was latter defined

        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout (marker) {
        if (cachedClearTimeout === clearTimeout) {
          // normal enviroments in sane situations
          return clearTimeout(marker);
        } // if clearTimeout wasn't available but was latter defined

        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

      let queue = [];
      let draining = false;
      let currentQueue;
      let queueIndex = -1;

      function cleanUpNextTick () {
        if (!draining || !currentQueue) {
          return;
        }

        draining = false;

        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }

        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue () {
        if (draining) {
          return;
        }

        const timeout = runTimeout(cleanUpNextTick);
        draining = true;
        let len = queue.length;

        while (len) {
          currentQueue = queue;
          queue = [];

          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }

          queueIndex = -1;
          len = queue.length;
        }

        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        const args = new Array(arguments.length - 1);

        if (arguments.length > 1) {
          for (let i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }

        queue.push(new Item(fun, args));

        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      }; // v8 likes predictible objects

      function Item (fun, array) {
        this.fun = fun;
        this.array = array;
      }

      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues

      process.versions = {};

      function noop () {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };

      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };

      process.umask = function () {
        return 0;
      };
      /***/ },

    /***/ './node_modules/socket.io-parser/dist/binary.js':
    /*! ******************************************************!*\
  !*** ./node_modules/socket.io-parser/dist/binary.js ***!
  \******************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.reconstructPacket = exports.deconstructPacket = void 0;

      const is_binary_1 = __webpack_require__(/*! ./is-binary */ './node_modules/socket.io-parser/dist/is-binary.js');
      /**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */

      function deconstructPacket (packet) {
        const buffers = [];
        const packetData = packet.data;
        const pack = packet;
        pack.data = _deconstructPacket(packetData, buffers);
        pack.attachments = buffers.length; // number of binary 'attachments'

        return {
          packet: pack,
          buffers
        };
      }

      exports.deconstructPacket = deconstructPacket;

      function _deconstructPacket (data, buffers) {
        if (!data) return data;

        if (is_binary_1.isBinary(data)) {
          const placeholder = {
            _placeholder: true,
            num: buffers.length
          };
          buffers.push(data);
          return placeholder;
        } else if (Array.isArray(data)) {
          const newData = new Array(data.length);

          for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
          }

          return newData;
        } else if (_typeof(data) === 'object' && !(data instanceof Date)) {
          const _newData = {};

          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              _newData[key] = _deconstructPacket(data[key], buffers);
            }
          }

          return _newData;
        }

        return data;
      }
      /**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */

      function reconstructPacket (packet, buffers) {
        packet.data = _reconstructPacket(packet.data, buffers);
        packet.attachments = undefined; // no longer useful

        return packet;
      }

      exports.reconstructPacket = reconstructPacket;

      function _reconstructPacket (data, buffers) {
        if (!data) return data;

        if (data && data._placeholder) {
          return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        } else if (Array.isArray(data)) {
          for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
          }
        } else if (_typeof(data) === 'object') {
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              data[key] = _reconstructPacket(data[key], buffers);
            }
          }
        }

        return data;
      }
      /***/ },

    /***/ './node_modules/socket.io-parser/dist/index.js':
    /*! *****************************************************!*\
  !*** ./node_modules/socket.io-parser/dist/index.js ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      function _get (target, property, receiver) { if (typeof Reflect !== 'undefined' && Reflect.get) { _get = Reflect.get; } else { _get = function _get (target, property, receiver) { const base = _superPropBase(target, property); if (!base) return; const desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

      function _superPropBase (object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

      function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

      function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

      function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

      function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } return _assertThisInitialized(self); }

      function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

      function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

      function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.Decoder = exports.Encoder = exports.PacketType = exports.protocol = void 0;

      const Emitter = __webpack_require__(/*! component-emitter */ './node_modules/component-emitter/index.js');

      const binary_1 = __webpack_require__(/*! ./binary */ './node_modules/socket.io-parser/dist/binary.js');

      const is_binary_1 = __webpack_require__(/*! ./is-binary */ './node_modules/socket.io-parser/dist/is-binary.js');

      const debug = __webpack_require__(/*! debug */ './node_modules/debug/src/browser.js')('socket.io-parser');
      /**
 * Protocol version.
 *
 * @public
 */

      exports.protocol = 5;
      let PacketType;

      (function (PacketType) {
        PacketType[PacketType.CONNECT = 0] = 'CONNECT';
        PacketType[PacketType.DISCONNECT = 1] = 'DISCONNECT';
        PacketType[PacketType.EVENT = 2] = 'EVENT';
        PacketType[PacketType.ACK = 3] = 'ACK';
        PacketType[PacketType.CONNECT_ERROR = 4] = 'CONNECT_ERROR';
        PacketType[PacketType.BINARY_EVENT = 5] = 'BINARY_EVENT';
        PacketType[PacketType.BINARY_ACK = 6] = 'BINARY_ACK';
      })(PacketType = exports.PacketType || (exports.PacketType = {}));
      /**
 * A socket.io Encoder instance
 */

      const Encoder = /* #__PURE__ */(function () {
        function Encoder () {
          _classCallCheck(this, Encoder);
        }

        _createClass(Encoder, [{
          key: 'encode',

          /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
          value: function encode (obj) {
            debug('encoding packet %j', obj);

            if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
              if (is_binary_1.hasBinary(obj)) {
                obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
                return this.encodeAsBinary(obj);
              }
            }

            return [this.encodeAsString(obj)];
          }
          /**
     * Encode packet as string.
     */

        }, {
          key: 'encodeAsString',
          value: function encodeAsString (obj) {
            // first is type
            let str = '' + obj.type; // attachments if we have them

            if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
              str += obj.attachments + '-';
            } // if we have a namespace other than `/`
            // we append it followed by a comma `,`

            if (obj.nsp && obj.nsp !== '/') {
              str += obj.nsp + ',';
            } // immediately followed by the id

            if (obj.id != null) {
              str += obj.id;
            } // json data

            if (obj.data != null) {
              str += JSON.stringify(obj.data);
            }

            debug('encoded %j as %s', obj, str);
            return str;
          }
          /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */

        }, {
          key: 'encodeAsBinary',
          value: function encodeAsBinary (obj) {
            const deconstruction = binary_1.deconstructPacket(obj);
            const pack = this.encodeAsString(deconstruction.packet);
            const buffers = deconstruction.buffers;
            buffers.unshift(pack); // add packet info to beginning of data list

            return buffers; // write all the buffers
          }
        }]);

        return Encoder;
      }());

      exports.Encoder = Encoder;
      /**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */

      const Decoder = /* #__PURE__ */(function (_Emitter) {
        _inherits(Decoder, _Emitter);

        const _super = _createSuper(Decoder);

        function Decoder () {
          _classCallCheck(this, Decoder);

          return _super.call(this);
        }
        /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */

        _createClass(Decoder, [{
          key: 'add',
          value: function add (obj) {
            let packet;

            if (typeof obj === 'string') {
              packet = this.decodeString(obj);

              if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

                if (packet.attachments === 0) {
                  _get(_getPrototypeOf(Decoder.prototype), 'emit', this).call(this, 'decoded', packet);
                }
              } else {
                // non-binary full packet
                _get(_getPrototypeOf(Decoder.prototype), 'emit', this).call(this, 'decoded', packet);
              }
            } else if (is_binary_1.isBinary(obj) || obj.base64) {
              // raw binary data
              if (!this.reconstructor) {
                throw new Error('got binary data when not reconstructing a packet');
              } else {
                packet = this.reconstructor.takeBinaryData(obj);

                if (packet) {
                  // received final buffer
                  this.reconstructor = null;

                  _get(_getPrototypeOf(Decoder.prototype), 'emit', this).call(this, 'decoded', packet);
                }
              }
            } else {
              throw new Error('Unknown type: ' + obj);
            }
          }
          /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */

        }, {
          key: 'decodeString',
          value: function decodeString (str) {
            let i = 0; // look up type

            const p = {
              type: Number(str.charAt(0))
            };

            if (PacketType[p.type] === undefined) {
              throw new Error('unknown packet type ' + p.type);
            } // look up attachments if type binary

            if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
              const start = i + 1;

              while (str.charAt(++i) !== '-' && i != str.length) {}

              const buf = str.substring(start, i);

              if (buf != Number(buf) || str.charAt(i) !== '-') {
                throw new Error('Illegal attachments');
              }

              p.attachments = Number(buf);
            } // look up namespace (if any)

            if (str.charAt(i + 1) === '/') {
              const _start = i + 1;

              while (++i) {
                const c = str.charAt(i);
                if (c === ',') break;
                if (i === str.length) break;
              }

              p.nsp = str.substring(_start, i);
            } else {
              p.nsp = '/';
            } // look up id

            const next = str.charAt(i + 1);

            if (next !== '' && Number(next) == next) {
              const _start2 = i + 1;

              while (++i) {
                const _c = str.charAt(i);

                if (_c == null || Number(_c) != _c) {
                  --i;
                  break;
                }

                if (i === str.length) break;
              }

              p.id = Number(str.substring(_start2, i + 1));
            } // look up json data

            if (str.charAt(++i)) {
              const payload = tryParse(str.substr(i));

              if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
              } else {
                throw new Error('invalid payload');
              }
            }

            debug('decoded %s as %j', str, p);
            return p;
          }
        }, {
          key: 'destroy',

          /**
     * Deallocates a parser's resources
     */
          value: function destroy () {
            if (this.reconstructor) {
              this.reconstructor.finishedReconstruction();
            }
          }
        }], [{
          key: 'isPayloadValid',
          value: function isPayloadValid (type, payload) {
            switch (type) {
              case PacketType.CONNECT:
                return _typeof(payload) === 'object';

              case PacketType.DISCONNECT:
                return payload === undefined;

              case PacketType.CONNECT_ERROR:
                return typeof payload === 'string' || _typeof(payload) === 'object';

              case PacketType.EVENT:
              case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && typeof payload[0] === 'string';

              case PacketType.ACK:
              case PacketType.BINARY_ACK:
                return Array.isArray(payload);
            }
          }
        }]);

        return Decoder;
      }(Emitter));

      exports.Decoder = Decoder;

      function tryParse (str) {
        try {
          return JSON.parse(str);
        } catch (e) {
          return false;
        }
      }
      /**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */

      var BinaryReconstructor = /* #__PURE__ */(function () {
        function BinaryReconstructor (packet) {
          _classCallCheck(this, BinaryReconstructor);

          this.packet = packet;
          this.buffers = [];
          this.reconPack = packet;
        }
        /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */

        _createClass(BinaryReconstructor, [{
          key: 'takeBinaryData',
          value: function takeBinaryData (binData) {
            this.buffers.push(binData);

            if (this.buffers.length === this.reconPack.attachments) {
              // done with buffer list
              const packet = binary_1.reconstructPacket(this.reconPack, this.buffers);
              this.finishedReconstruction();
              return packet;
            }

            return null;
          }
          /**
     * Cleans up binary packet reconstruction variables.
     */

        }, {
          key: 'finishedReconstruction',
          value: function finishedReconstruction () {
            this.reconPack = null;
            this.buffers = [];
          }
        }]);

        return BinaryReconstructor;
      }());
      /***/ },

    /***/ './node_modules/socket.io-parser/dist/is-binary.js':
    /*! *********************************************************!*\
  !*** ./node_modules/socket.io-parser/dist/is-binary.js ***!
  \*********************************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj); }

      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.hasBinary = exports.isBinary = void 0;
      const withNativeArrayBuffer = typeof ArrayBuffer === 'function';

      const isView = function isView (obj) {
        return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
      };

      const toString = Object.prototype.toString;
      const withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
      const withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
      /**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */

      function isBinary (obj) {
        return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
      }

      exports.isBinary = isBinary;

      function hasBinary (obj, toJSON) {
        if (!obj || _typeof(obj) !== 'object') {
          return false;
        }

        if (Array.isArray(obj)) {
          for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
              return true;
            }
          }

          return false;
        }

        if (isBinary(obj)) {
          return true;
        }

        if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
          return hasBinary(obj.toJSON(), true);
        }

        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
          }
        }

        return false;
      }

      exports.hasBinary = hasBinary;
      /***/ },

    /***/ './node_modules/yeast/index.js':
    /*! *************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
    /*! no static exports found */
    /***/ function (module, exports, __webpack_require__) {
      'use strict';

      const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('');
      const length = 64;
      const map = {};
      let seed = 0;
      let i = 0;
      let prev;
      /**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

      function encode (num) {
        let encoded = '';

        do {
          encoded = alphabet[num % length] + encoded;
          num = Math.floor(num / length);
        } while (num > 0);

        return encoded;
      }
      /**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */

      function decode (str) {
        let decoded = 0;

        for (i = 0; i < str.length; i++) {
          decoded = decoded * length + map[str.charAt(i)];
        }

        return decoded;
      }
      /**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */

      function yeast () {
        const now = encode(+new Date());
        if (now !== prev) return seed = 0, prev = now;
        return now + '.' + encode(seed++);
      } //
      // Map each character to its index.
      //

      for (; i < length; i++) {
        map[alphabet[i]] = i;
      } //
      // Expose the `yeast`, `encode` and `decode` functions.
      //

      yeast.encode = encode;
      yeast.decode = decode;
      module.exports = yeast;
      /***/ }

    /******/ });
});
// # sourceMappingURL=socket.io.js.map
