tinymce.PluginManager.add("media", function(e, t) {
    function n(e) {
        return -1 != e.indexOf(".mp3") ? "audio/mpeg" : -1 != e.indexOf(".wav") ? "audio/wav" : -1 != e.indexOf(".mp4") ? "video/mp4" : -1 != e.indexOf(".webm") ? "video/webm" : -1 != e.indexOf(".ogg") ? "video/ogg" : ""
    }
    function r() {
        function t(e) {
            var t, i, o, a;
            t = n.find("#width")[0], i = n.find("#height")[0], o = t.value(), a = i.value(), n.find("#constrain")[0].checked() && r && l && o && a && (e.control == t ? (a = Math.round(o / r * a), i.value(a)) : (o = Math.round(a / l * o), t.value(o))), r = o, l = a
        }
        var n, r, l, c;
        c = s(e.selection.getNode()), r = c.width, l = c.height, n = e.windowManager.open({
            title: "Insert/edit video",
            data: c,
            bodyType: "tabpanel",
            body: [{
                title: "General",
                type: "form",
                onShowTab: function() {
                    this.fromJSON(a(this.next().find("#embed").value()))
                },
                items: [{
                    type: 'container',
                    layout: 'flex',
                    classes: 'combobox has-open',
                    label: 'Source',
                    direction: 'row',
                    align: 2,
                    items: [{
                        name: 'source1',
                        type: 'textbox',
                        filetype: 'video',
                        size: 35,
                        classes: 'video3_' + e.id,
                        autofocus: true,
                        label: 'Source'
                    }, {
                        name: 'upl_video',
                        type: 'button',
                        classes: 'btn open',
                        icon: 'browse',
                        onclick: function() {
                            var win, data, dom = e.dom;
                            var width, height, imageListCtrl;
                            win = e.windowManager.open({
                                title: 'Video Manager',
                                data: data,
                                classes: 'filemanager',
                                file: tinyMCE.baseURL + '/plugins/filemanager/dialog.php?type=3&editor=' + e.id + '&lang=' + tinymce.settings.language + '&subfolder=' + tinymce.settings.subfolder,
                                filetype: 'video',
                                width: 900,
                                height: 600,
                                inline: 1
                            })
                        },
                        tooltip: 'Select video'
                    }]
                }, {
                    type: 'container',
                    layout: 'flex',
                    classes: 'combobox has-open',
                    label: 'Alternative source',
                    direction: 'row',
                    align: 2,
                    items: [{
                        name: 'source2',
                        type: 'textbox',
                        filetype: 'video',
                        size: 35,
                        classes: 'video4_' + e.id,
                        autofocus: true,
                        label: 'Alternative source'
                    }, {
                        name: 'upl_video1',
                        type: 'button',
                        classes: 'btn open',
                        icon: 'browse',
                        onclick: function() {
                            var win, data, dom = e.dom;
                            var width, height, imageListCtrl;
                            win = e.windowManager.open({
                                title: 'Video Manager',
                                data: data,
                                classes: 'filemanager',
                                file: tinyMCE.baseURL + '/plugins/filemanager/dialog.php?type=4&editor=' + e.id + '&lang=' + tinymce.settings.language + '&subfolder=' + tinymce.settings.subfolder,
                                filetype: 'video',
                                width: 900,
                                height: 600,
                                inline: 1
                            })
                        },
                        tooltip: 'Select video'
                    }]
                }, {
                    type: 'container',
                    layout: 'flex',
                    classes: 'combobox has-open',
                    label: 'Poster',
                    direction: 'row',
                    align: 2,
                    items: [{
                        name: 'poster',
                        type: 'textbox',
                        filetype: 'video',
                        size: 35,
                        classes: 'video5_' + e.id,
                        autofocus: true,
                        label: 'Poster'
                    }, {
                        name: 'upl_video2',
                        type: 'button',
                        classes: 'btn open',
                        icon: 'browse',
                        onclick: function() {
                            var win, data, dom = e.dom;
                            var width, height, imageListCtrl;
                            win = e.windowManager.open({
                                title: 'Video Manager',
                                data: data,
                                classes: 'filemanager',
                                file: tinyMCE.baseURL + '/plugins/filemanager/dialog.php?type=5&editor=' + e.id + '&lang=' + tinymce.settings.language + '&subfolder=' + tinymce.settings.subfolder,
                                filetype: 'video',
                                width: 900,
                                height: 600,
                                inline: 1
                            })
                        },
                        tooltip: 'Select video'
                    }]
                }, {
                    type: "container",
                    label: "Dimensions",
                    layout: "flex",
                    direction: "row",
                    align: "center",
                    spacing: 5,
                    items: [{
                        name: "width",
                        type: "textbox",
                        maxLength: 3,
                        size: 3,
                        onchange: t
                    }, {
                        type: "label",
                        text: "x"
                    }, {
                        name: "height",
                        type: "textbox",
                        maxLength: 3,
                        size: 3,
                        onchange: t
                    }, {
                        name: "constrain",
                        type: "checkbox",
                        checked: !0,
                        text: "Constrain proportions"
                    }]
                }]
            }, {
                title: "Embed",
                type: "panel",
                layout: "flex",
                direction: "column",
                align: "stretch",
                padding: 10,
                spacing: 10,
                onShowTab: function() {
                    this.find("#embed").value(o(this.parent().toJSON()))
                },
                items: [{
                    type: "label",
                    text: "Paste your embed code below:"
                }, {
                    type: "textbox",
                    flex: 1,
                    name: "embed",
                    value: i(),
                    multiline: !0,
                    label: "Source"
                }]
            }],
            onSubmit: function() {
                e.insertContent(o(this.toJSON()))
            }
        })
    }
    function i() {
        var t = e.selection.getNode();
        return t.getAttribute("data-mce-object") ? e.selection.getContent() : void 0
    }
    function o(r) {
        var i = "";
        return r.source1 || (tinymce.extend(r, a(r.embed)), r.source1) ? (r.source1 = e.convertURL(r.source1, "source"), r.source2 = e.convertURL(r.source2, "source"), r.source1mime = n(r.source1), r.source2mime = n(r.source2), r.poster = e.convertURL(r.poster, "poster"), r.flashPlayerUrl = e.convertURL(t + "/moxieplayer.swf", "movie"), r.embed ? i = l(r.embed, r, !0) : (tinymce.each(c, function(e) {
            var t, n, i;
            if (t = e.regex.exec(r.source1)) {
                for (i = e.url, n = 0; t[n]; n++) i = i.replace("$" + n, function() {
                    return t[n]
                });
                r.source1 = i, r.type = e.type, r.width = e.w, r.height = e.h
            }
        }), r.width = r.width || 300, r.height = r.height || 150, tinymce.each(r, function(t, n) {
            r[n] = e.dom.encode(t)
        }), "iframe" == r.type ? i += '<iframe src="' + r.source1 + '" width="' + r.width + '" height="' + r.height + '"></iframe>' : -1 != r.source1mime.indexOf("audio") ? e.settings.audio_template_callback ? i = e.settings.audio_template_callback(r) : i += '<audio controls="controls" src="' + r.source1 + '">' + (r.source2 ? '\n<source src="' + r.source2 + '"' + (r.source2mime ? ' type="' + r.source2mime + '"' : "") + " />\n" : "") + "</audio>" : i = e.settings.video_template_callback ? e.settings.video_template_callback(r) : '<video width="' + r.width + '" height="' + r.height + '"' + (r.poster ? ' poster="' + r.poster + '"' : "") + ' controls="controls">\n' + '<source src="' + r.source1 + '"' + (r.source1mime ? ' type="' + r.source1mime + '"' : "") + " />\n" + (r.source2 ? '<source src="' + r.source2 + '"' + (r.source2mime ? ' type="' + r.source2mime + '"' : "") + " />\n" : "") + "</video>"), i) : ""
    }
    function a(e) {
        var t = {};
        return new tinymce.html.SaxParser({
            validate: !1,
            special: "script,noscript",
            start: function(e, n) {
                t.source1 || "param" != e || (t.source1 = n.map.movie), ("iframe" == e || "object" == e || "embed" == e || "video" == e || "audio" == e) && (t = tinymce.extend(n.map, t)), "source" == e && (t.source1 ? t.source2 || (t.source2 = n.map.src) : t.source1 = n.map.src)
            }
        }).parse(e), t.source1 = t.source1 || t.src || t.data, t.source2 = t.source2 || "", t.poster = t.poster || "", t
    }
    function s(t) {
        return t.getAttribute("data-mce-object") ? a(e.serializer.serialize(t, {
            selection: !0
        })) : {}
    }
    function l(e, t, n) {
        function r(e, t) {
            var n, r, i, o;
            for (n in t) if (i = "" + t[n], e.map[n]) for (r = e.length; r--;) o = e[r], o.name == n && (i ? (e.map[n] = i, o.value = i) : (delete e.map[n], e.splice(r, 1)));
            else i && (e.push({
                name: n,
                value: i
            }), e.map[n] = i)
        }
        var i = new tinymce.html.Writer,
            o = 0;
        return new tinymce.html.SaxParser({
            validate: !1,
            special: "script,noscript",
            comment: function(e) {
                i.comment(e)
            },
            cdata: function(e) {
                i.cdata(e)
            },
            text: function(e, t) {
                i.text(e, t)
            },
            start: function(e, a, s) {
                switch (e) {
                case "video":
                case "object":
                case "img":
                case "iframe":
                    r(a, {
                        width: t.width,
                        height: t.height
                    })
                }
                if (n) switch (e) {
                case "video":
                    r(a, {
                        poster: t.poster,
                        src: ""
                    }), t.source2 && r(a, {
                        src: ""
                    });
                    break;
                case "iframe":
                    r(a, {
                        src: t.source1
                    });
                    break;
                case "source":
                    if (o++, 2 >= o && (r(a, {
                        src: t["source" + o],
                        type: t["source" + o + "mime"]
                    }), !t["source" + o])) return
                }
                i.start(e, a, s)
            },
            end: function(e) {
                if ("video" == e && n) for (var a = 1; 2 >= a; a++) if (t["source" + a]) {
                    var s = [];
                    s.map = {}, a > o && (r(s, {
                        src: t["source" + a],
                        type: t["source" + a + "mime"]
                    }), i.start("source", s, !0))
                }
                i.end(e)
            }
        }, new tinymce.html.Schema({})).parse(e), i.getContent()
    }
    var c = [{
        regex: /youtu\.be\/([a-z1-9.-_]+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: "http://www.youtube.com/embed/$1"
    }, {
        regex: /youtube\.com(.+)v=([^&]+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: "http://www.youtube.com/embed/$2"
    }, {
        regex: /vimeo\.com\/([0-9]+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: "http://player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc"
    }, {
        regex: /maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: 'http://maps.google.com/maps/ms?msid=$2&output=embed"'
    }];
    e.on("ResolveName", function(e) {
        var t;
        (t = e.target.getAttribute("data-mce-object")) && (e.name = t)
    }), e.on("preInit", function() {
        var t = e.schema.getSpecialElements();
        tinymce.each("video audio iframe object".split(" "), function(e) {
            t[e] = RegExp("</" + e + "[^>]*>", "gi")
        }), e.schema.addValidElements("object[id|style|width|height|classid|codebase|*],embed[id|style|width|height|type|src|*],video[*],audio[*]");
        var n = e.schema.getBoolAttrs();
        tinymce.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "), function(e) {
            n[e] = {}
        }), e.parser.addNodeFilter("iframe,video,audio,object,embed", function(t, n) {
            for (var r, i, o, a, s, l, c, u = t.length; u--;) {
                for (i = t[u], o = new tinymce.html.Node("img", 1), o.shortEnded = !0, l = i.attributes, r = l.length; r--;) a = l[r].name, s = l[r].value, "width" !== a && "height" !== a && "style" !== a && (("data" == a || "src" == a) && (s = e.convertURL(s, a)), o.attr("data-mce-p-" + a, s));
                c = i.firstChild && i.firstChild.value, c && (o.attr("data-mce-html", escape(c)), o.firstChild = null), o.attr({
                    width: i.attr("width") || "300",
                    height: i.attr("height") || ("audio" == n ? "30" : "150"),
                    style: i.attr("style"),
                    src: tinymce.Env.transparentSrc,
                    "data-mce-object": n,
                    "class": "mce-object mce-object-" + n
                }), i.replace(o)
            }
        }), e.serializer.addAttributeFilter("data-mce-object", function(e, t) {
            for (var n, r, i, o, a, s, l = e.length; l--;) {
                for (n = e[l], r = new tinymce.html.Node(n.attr(t), 1), "audio" != n.attr(t) && r.attr({
                    width: n.attr("width"),
                    height: n.attr("height")
                }), r.attr({
                    style: n.attr("style")
                }), o = n.attributes, i = o.length; i--;) {
                    var c = o[i].name;
                    0 === c.indexOf("data-mce-p-") && r.attr(c.substr(11), o[i].value)
                }
                a = n.attr("data-mce-html"), a && (s = new tinymce.html.Node("#text", 3), s.raw = !0, s.value = unescape(a), r.append(s)), n.replace(r)
            }
        })
    }), e.on("ObjectSelected", function(e) {
        "audio" == e.target.getAttribute("data-mce-object") && e.preventDefault()
    }), e.on("objectResized", function(e) {
        var t, n = e.target;
        n.getAttribute("data-mce-object") && (t = n.getAttribute("data-mce-html"), t && (t = unescape(t), n.setAttribute("data-mce-html", escape(l(t, {
            width: e.width,
            height: e.height
        })))))
    }), e.addButton("media", {
        tooltip: "Insert/edit video",
        onclick: r,
        stateSelector: "img[data-mce-object=video]"
    }), e.addMenuItem("media", {
        icon: "media",
        text: "Insert video",
        onclick: r,
        context: "insert",
        prependToContext: !0
    })
});