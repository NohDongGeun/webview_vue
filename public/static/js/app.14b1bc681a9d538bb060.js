webpackJsonp(
  [2],
  {
    '3KXA': function (t, e) {},
    NHnr: function (t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 })
      var i = n('7+uW'),
        s = {
          render: function () {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'div',
              { attrs: { id: 'app' } },
              [
                e(
                  'keep-alive',
                  [this.$route.meta.keepAlive ? e('router-view') : this._e()],
                  1,
                ),
                this._v(' '),
                this.$route.meta.keepAlive ? this._e() : e('router-view'),
              ],
              1,
            )
          },
          staticRenderFns: [],
        }
      var a = n('VU/8')(
          {},
          s,
          !1,
          function (t) {
            n('l/8t')
          },
          null,
          null,
        ).exports,
        o = n('/ocq')
      i.a.use(o.a)
      var r = new o.a({
          routes: [
            {
              path: '/index',
              component: function () {
                return n.e(0).then(n.bind(null, 'Qt9A'))
              },
              meta: { keepAlive: !0 },
            },
            { path: '*', redirect: '/index' },
          ],
        }),
        l = n('NYxO')
      i.a.use(l.a)
      var p = new l.a.Store({
          state: { token: '' },
          getters: {},
          mutations: {
            set_token: function (t, e) {
              t.token = e
            },
          },
          actions: {},
        }),
        u =
          (Boolean,
          String,
          {
            name: 'load-more',
            props: { showLoading: { type: Boolean, default: !0 }, tip: String },
          }),
        c = {
          render: function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {
                staticClass: 'vux-loadmore weui-loadmore',
                class: {
                  'weui-loadmore_line': !t.showLoading,
                  'weui-loadmore_dot': !t.showLoading && !t.tip,
                },
              },
              [
                t.showLoading
                  ? n('i', { staticClass: 'weui-loading' })
                  : t._e(),
                t._v(' '),
                n(
                  'span',
                  {
                    directives: [
                      {
                        name: 'show',
                        rawName: 'v-show',
                        value: t.tip || !t.showLoading,
                        expression: 'tip || !showLoading',
                      },
                    ],
                    staticClass: 'weui-loadmore__tips',
                  },
                  [t._v(t._s(t.tip))],
                ),
              ],
            )
          },
          staticRenderFns: [],
        }
      var d = n('VU/8')(
          u,
          c,
          !1,
          function (t) {
            n('3KXA')
          },
          null,
          null,
        ).exports,
        v =
          (Array,
          {
            components: { LoadMore: d },
            props: { json: Array },
            data: function () {
              return {}
            },
            methods: {},
          }),
        m = {
          render: function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e
            return i('div', { staticClass: 'vux-1px-t' }, [
              i(
                'ul',
                {
                  staticClass: 'list',
                  staticStyle: { 'list-style-type': 'none' },
                },
                t._l(t.json, function (e, s) {
                  return i('li', { key: s, staticClass: 'list_item' }, [
                    i('div', [
                      i('img', {
                        staticClass: 'item_img',
                        attrs: { src: n('getP') },
                      }),
                      t._v(' '),
                      i('p', { staticClass: 'item_title' }),
                      t._v(' '),
                      i('p', { staticClass: 'item_name' }, [t._v('최신폰')]),
                      t._v(' '),
                      i('p', { staticClass: 'item_type' }, [
                        t._v('가격：' + t._s(e)),
                      ]),
                      t._v(' '),
                      i('p', { staticClass: 'item_num' }, [
                        t._v('출시 시간：2020-09-18'),
                      ]),
                      t._v(' '),
                      i('div', { staticClass: 'item_line' }),
                    ]),
                  ])
                }),
              ),
            ])
          },
          staticRenderFns: [],
        }
      var _ = n('VU/8')(
          v,
          m,
          !1,
          function (t) {
            n('VTSw')
          },
          'data-v-38ff050f',
          null,
        ).exports,
        f = n('mtWM'),
        w = n.n(f),
        h = n('7t+N'),
        g = n.n(h)
      ;(window.jQuery = g.a),
        (window.$ = g.a),
        (i.a.prototype.$http = w.a),
        (w.a.defaults.baseURL = 'http://10.0.9.6:8082'),
        (i.a.config.productionTip = !1),
        i.a.component('my-list', _),
        new i.a({
          el: '#app',
          router: r,
          store: p,
          components: { App: a },
          template: '<App/>',
        })
    },
    VTSw: function (t, e) {},
    getP: function (t, e, n) {
      t.exports = n.p + 'static/img/banner.ff349ab.jpeg'
    },
    'l/8t': function (t, e) {},
  },
  ['NHnr'],
)
