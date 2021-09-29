;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-2d229048'],
	{
		dc3f: function (e, t, c) {
			'use strict'
			c.r(t)
			var n = c('7a23'),
				o = Object(n['createVNode'])('h2', null, 'hello login', -1),
				r = Object(n['createTextVNode'])('nihao'),
				a = Object(n['createTextVNode'])('nihao'),
				i = Object(n['createTextVNode'])('nihao'),
				u = Object(n['createTextVNode'])('nihao'),
				d = Object(n['createTextVNode'])('nihao')
			function b(e, t, c, b, j, O) {
				var l = Object(n['resolveComponent'])('el-button'),
					p = Object(n['resolveComponent'])('el-input')
				return (
					Object(n['openBlock'])(),
					Object(n['createBlock'])('div', null, [
						o,
						Object(n['createVNode'])(
							l,
							{ plain: '' },
							{
								default: Object(n['withCtx'])(function () {
									return [r]
								}),
								_: 1
							}
						),
						Object(n['createVNode'])(l, {
							type: 'primary',
							icon: 'el-icon-edit',
							circle: ''
						}),
						Object(n['createVNode'])(
							l,
							{ type: 'success' },
							{
								default: Object(n['withCtx'])(function () {
									return [a]
								}),
								_: 1
							}
						),
						Object(n['createVNode'])(
							l,
							{ type: 'warning' },
							{
								default: Object(n['withCtx'])(function () {
									return [i]
								}),
								_: 1
							}
						),
						Object(n['createVNode'])(
							l,
							{ type: 'danger' },
							{
								default: Object(n['withCtx'])(function () {
									return [u]
								}),
								_: 1
							}
						),
						Object(n['createVNode'])(
							l,
							{ type: 'success' },
							{
								default: Object(n['withCtx'])(function () {
									return [d]
								}),
								_: 1
							}
						),
						Object(n['createVNode'])(p)
					])
				)
			}
			var j = Object(n['defineComponent'])({
				setup: function () {
					return {}
				},
				components: {}
			})
			j.render = b
			t['default'] = j
		}
	}
])
//# sourceMappingURL=chunk-2d229048.c53b7dcd.js.map
