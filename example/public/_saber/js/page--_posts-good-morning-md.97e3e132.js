(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        72: function (e, t, i) {
            "use strict";
            i.r(t);
            var a = i(0),
                s = function (e) {
                    var t, i, a, s, n = (s = void 0, {
                            attributes: {
                                slug: "good-morning",
                                layout: t = "post",
                                title: "Good Morning",
                                date: "2016-04-01",
                                tags: [i = "diary"],
                                categories: [a = "life"],
                                openGraph: {
                                    title: "hey hey"
                                },
                                markdownHeadings: [],
                                excerpt: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed orci nec erat sollicitudin laoreet.</p>\n",
                                createdAt: new Date(14594688e5),
                                updatedAt: new Date(1557135401084),
                                type: t,
                                permalink: "/posts/good-morning.html"
                            },
                            internal: s,
                            contentType: "markdown",
                            content: s,
                            tags: [{
                                name: i,
                                permalink: "/tags/diary"
                            }],
                            categories: [{
                                name: a,
                                permalink: "/categories/life"
                            }]
                        }),
                        u = e.options.beforeCreate || [];
                    e.options.beforeCreate = [function () {
                        this.$page = n
                    }].concat(u);
                    ["layout", "transition"].forEach(function (t) {
                        var i = e.options.PageComponent;
                        i && (e.options[t] = i[t]), void 0 === e.options[t] && (e.options[t] = n.attributes[t])
                    }), e.options.name = "page-wrapper-" + n.attributes.slug.replace(/[^0-9a-z\-]/i, "-")
                },
                n = Object(a.a)({}, function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("layout-manager", [t("p", [this._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed orci nec erat sollicitudin laoreet.")]), this._v(" "), t("p", [this._v("Vestibulum aliquam enim nec metus condimentum sodales. Donec tristique erat sem, nec accumsan risus volutpat ut. Nulla vulputate non sapien non interdum. Quisque id aliquam sem. Praesent egestas ultrices vulputate. Ut commodo risus ut varius gravida.")]), this._v(" "), t("p", [this._v("Ut ornare congue sapien, at tristique leo porttitor id. Integer euismod porttitor blandit. Donec vulputate nibh at arcu placerat, in mollis urna molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sit amet luctus augue, vel faucibus nisl. Maecenas sem enim, volutpat et mauris vel, scelerisque imperdiet sem. Nullam ultricies lacus feugiat ligula egestas, sit amet laoreet ante malesuada. Aliquam dignissim posuere nisi eget elementum. Proin nec gravida tellus. Sed ut lectus fringilla, dapibus purus vitae, varius diam. Nunc congue congue dui quis luctus. Integer elementum est at lobortis ornare. Fusce lobortis turpis eget enim ultricies egestas. Morbi iaculis, massa a commodo ornare, mauris lacus egestas turpis, et iaculis ipsum risus a nulla. Phasellus a nulla molestie, mattis lectus gravida, varius lectus.")])])
                }, [], !1, null, null, null);
            "function" == typeof s && s(n);
            t.default = n.exports
        }
    }
]);