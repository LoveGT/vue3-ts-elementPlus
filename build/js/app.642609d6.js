;(function (e) {
	function t(t) {
		for (
			var o, c, u = t[0], i = t[1], l = t[2], s = 0, p = [];
			s < u.length;
			s++
		)
			(c = u[s]),
				Object.prototype.hasOwnProperty.call(r, c) && r[c] && p.push(r[c][0]),
				(r[c] = 0)
		for (o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
		f && f(t)
		while (p.length) p.shift()()
		return a.push.apply(a, l || []), n()
	}
	function n() {
		for (var e, t = 0; t < a.length; t++) {
			for (var n = a[t], o = !0, c = 1; c < n.length; c++) {
				var i = n[c]
				0 !== r[i] && (o = !1)
			}
			o && (a.splice(t--, 1), (e = u((u.s = n[0]))))
		}
		return e
	}
	var o = {},
		r = { app: 0 },
		a = []
	function c(e) {
		return (
			u.p +
			'js/' +
			({}[e] || e) +
			'.' +
			{ 'chunk-2d0de903': '50d27950', 'chunk-2d229048': 'c53b7dcd' }[e] +
			'.js'
		)
	}
	function u(t) {
		if (o[t]) return o[t].exports
		var n = (o[t] = { i: t, l: !1, exports: {} })
		return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports
	}
	;(u.e = function (e) {
		var t = [],
			n = r[e]
		if (0 !== n)
			if (n) t.push(n[2])
			else {
				var o = new Promise(function (t, o) {
					n = r[e] = [t, o]
				})
				t.push((n[2] = o))
				var a,
					i = document.createElement('script')
				;(i.charset = 'utf-8'),
					(i.timeout = 120),
					u.nc && i.setAttribute('nonce', u.nc),
					(i.src = c(e))
				var l = new Error()
				a = function (t) {
					;(i.onerror = i.onload = null), clearTimeout(s)
					var n = r[e]
					if (0 !== n) {
						if (n) {
							var o = t && ('load' === t.type ? 'missing' : t.type),
								a = t && t.target && t.target.src
							;(l.message =
								'Loading chunk ' + e + ' failed.\n(' + o + ': ' + a + ')'),
								(l.name = 'ChunkLoadError'),
								(l.type = o),
								(l.request = a),
								n[1](l)
						}
						r[e] = void 0
					}
				}
				var s = setTimeout(function () {
					a({ type: 'timeout', target: i })
				}, 12e4)
				;(i.onerror = i.onload = a), document.head.appendChild(i)
			}
		return Promise.all(t)
	}),
		(u.m = e),
		(u.c = o),
		(u.d = function (e, t, n) {
			u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
		}),
		(u.r = function (e) {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 })
		}),
		(u.t = function (e, t) {
			if ((1 & t && (e = u(e)), 8 & t)) return e
			if (4 & t && 'object' === typeof e && e && e.__esModule) return e
			var n = Object.create(null)
			if (
				(u.r(n),
				Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
				2 & t && 'string' != typeof e)
			)
				for (var o in e)
					u.d(
						n,
						o,
						function (t) {
							return e[t]
						}.bind(null, o)
					)
			return n
		}),
		(u.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e['default']
					  }
					: function () {
							return e
					  }
			return u.d(t, 'a', t), t
		}),
		(u.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}),
		(u.p = ''),
		(u.oe = function (e) {
			throw (console.error(e), e)
		})
	var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
		l = i.push.bind(i)
	;(i.push = t), (i = i.slice())
	for (var s = 0; s < i.length; s++) t(i[s])
	var f = l
	a.push([0, 'chunk-vendors']), n()
})({
	0: function (e, t, n) {
		e.exports = n('cd49')
	},
	b2e0: function (e, t, n) {},
	cd49: function (e, t, n) {
		'use strict'
		n.r(t)
		n('e260'), n('e6cf'), n('cca6'), n('a79d')
		var o = n('7a23'),
			r = n('b85c'),
			a = (n('efe7'), n('c026')),
			c = n.n(a),
			u = (n('5b96'), n('d867')),
			i = n.n(u),
			l = (n('021b'), n('9951')),
			s = n.n(l),
			f = (n('cbe4'), n('6c9f')),
			p = n.n(f),
			d = (n('34c0'), n('aff9')),
			b = n.n(d),
			h = (n('0bd6'), n('05c2')),
			g = n.n(h),
			m = (n('8ac7'), n('e661')),
			v = n.n(m),
			j = (n('4af4'), n('44fb')),
			O = n.n(j),
			y = (n('b0c0'), n('f3fc'), [O.a, v.a, g.a, b.a, p.a, s.a, i.a, c.a]),
			w = function (e) {
				var t,
					n = Object(r['a'])(y)
				try {
					for (n.s(); !(t = n.n()).done; ) {
						var o = t.value
						e.component(o.name, o)
					}
				} catch (a) {
					n.e(a)
				} finally {
					n.f()
				}
			}
		function k(e) {
			w(e)
		}
		var x = n('bc3a'),
			P = n.n(x)
		P.a
			.request({
				method: 'get',
				url: 'http://123.207.32.32:8000/home/multidata'
			})
			.then(function (e) {
				console.log(e, 'res')
			}),
			(P.a.defaults.baseURL = 'http://httpbin.org'),
			(P.a.defaults.timeout = 1e4),
			(P.a.defaults.headers = { name: 'gaoto', height: '188' }),
			P.a
				.get('/get', { params: { name: 'gaotao', age: 18 } })
				.then(function (e) {
					console.log(e.data, ' get')
				}),
			P.a
				.post('/post', { data: { name: 'gaotao', age: 18 } })
				.then(function (e) {
					console.log(e.data, ' post')
				}),
			P.a
				.all([
					P.a.get('/get', { params: { name: 'gaotao', age: 28 } }),
					P.a.post('/post', { data: { name: 'xiaohong', age: 24 } })
				])
				.then(function (e) {
					console.log(e[0].data), console.log(e[1].data)
				}),
			P.a.interceptors.request.use(
				function (e) {
					return e
				},
				function (e) {
					return console.log('请求发送错误'), e
				}
			),
			P.a.interceptors.response.use(
				function (e) {
					return console.log('响应成功的拦截'), e
				},
				function (e) {
					return console.log('响应失败的拦截'), e
				}
			)
		var _ = { class: 'app' },
			C = Object(o['createTextVNode'])('登录'),
			N = Object(o['createTextVNode'])('首页')
		function S(e, t, n, r, a, c) {
			var u = Object(o['resolveComponent'])('router-link'),
				i = Object(o['resolveComponent'])('router-view')
			return (
				Object(o['openBlock'])(),
				Object(o['createBlock'])('div', _, [
					Object(o['createVNode'])(
						u,
						{ to: '/login' },
						{
							default: Object(o['withCtx'])(function () {
								return [C]
							}),
							_: 1
						}
					),
					Object(o['createVNode'])(
						u,
						{ to: '/main' },
						{
							default: Object(o['withCtx'])(function () {
								return [N]
							}),
							_: 1
						}
					),
					Object(o['createVNode'])(
						'h3',
						null,
						Object(o['toDisplayString'])(e.$store.state.name),
						1
					),
					Object(o['createVNode'])(i)
				])
			)
		}
		var T = Object(o['defineComponent'])({ name: 'App', components: {} })
		n('eb1f')
		T.render = S
		var V = T,
			M = (n('d3b7'), n('3ca3'), n('ddb0'), n('6c02')),
			q = [
				{ path: '/', redirect: '/login' },
				{
					path: '/login',
					component: function () {
						return n.e('chunk-2d229048').then(n.bind(null, 'dc3f'))
					}
				},
				{
					path: '/main',
					component: function () {
						return n.e('chunk-2d0de903').then(n.bind(null, '85d4'))
					}
				}
			],
			A = Object(M['a'])({ routes: q, history: Object(M['b'])() }),
			E = A,
			L = n('5502'),
			B = Object(L['a'])({
				state: function () {
					return { name: 'gaotao' }
				}
			}),
			J = B,
			D = Object(o['createApp'])(V)
		k(D),
			D.use(E),
			D.use(J),
			D.mount('#app'),
			console.log('https://gaotao.org/prod'),
			console.log('kobe')
	},
	eb1f: function (e, t, n) {
		'use strict'
		n('b2e0')
	}
})
//# sourceMappingURL=app.642609d6.js.map
