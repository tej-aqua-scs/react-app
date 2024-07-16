/* eslint-disable */
exports.__esModule = true;
var $protobuf = require("protobufjs/minimal");
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
var User = (function() {
    function User(p) {
        this.id = "";
        this.username = "";
        this.email = "";
        if (p) {
            for (var k in p)
                if (p.hasOwnProperty(k))
                    this[k] = p[k];
        }
    }
    User.encode = function encode(m, w) {
        if (!w)
            w = $Writer.create();
        if (m.id != null && Object.hasOwnProperty.call(m, "id"))
            w.uint32(10).string(m.id);
        if (m.username != null && Object.hasOwnProperty.call(m, "username"))
            w.uint32(18).string(m.username);
        if (m.email != null && Object.hasOwnProperty.call(m, "email"))
            w.uint32(26).string(m.email);
        return w;
    };
    User.decode = function decode(r, l) {
        if (!(r instanceof $Reader))
            r = $Reader.create(r);
        var c = l === undefined ? r.len : r.pos + l, m = new $root.User();
        while (r.pos < c) {
            var t = r.uint32();
            switch (t >>> 3) {
            case 1:
                m.id = r.string();
                break;
            case 2:
                m.username = r.string();
                break;
            case 3:
                m.email = r.string();
                break;
            default:
                r.skipType(t & 7);
                break;
            }
        }
        return m;
    };
    return User;
})();
exports.User = User;
