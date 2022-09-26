"use strict";
var KTAppChat = (function () {
    var e = function (e) {
        var t = e.querySelector('[data-kt-element="messages"]'),
            n = e.querySelector('[data-kt-element="input"]');
        if (0 !== n.value.length) {
            var o,
                a = t.querySelector('[data-kt-element="template-out"]'),
                l = t.querySelector('[data-kt-element="template-in"]');
            (o = a.cloneNode(!0)).classList.remove("d-none"),
                (o.querySelector('[data-kt-element="message-text"]').innerText = n.value),
                (n.value = ""),
                t.appendChild(o),
                (t.scrollTop = t.scrollHeight),
                setTimeout(function () {
                    (o = l.cloneNode(!0)).classList.remove("d-none"), (o.querySelector('[data-kt-element="message-text"]').innerText = "Thank you for your awesome support!"), t.appendChild(o), (t.scrollTop = t.scrollHeight);
                }, 2e3);
        }
    };
    return {
        init: function (t) {
            !(function (t) {
                t &&
                    (KTUtil.on(t, '[data-kt-element="input"]', "keydown", function (n) {
                        if (13 == n.keyCode) return e(t), n.preventDefault(), !1;
                    }),
                    KTUtil.on(t, '[data-kt-element="send"]', "click", function (n) {
                        e(t);
                    }));
            })(t);
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTAppChat.init(document.querySelector("#kt_chat_messenger")), KTAppChat.init(document.querySelector("#kt_drawer_chat_messenger"));
});
