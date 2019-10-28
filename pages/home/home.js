Page({
    data: {
        notice: "123123123",
        showCanvas: !0
    },
    onLoad: function(a) {
        this.setData({});
    },
    onReady: function() {
        var a = this;
        wx.cloud.database().collection("notice").where({
            _openid: this.data.openid
        }).get({
            success: function(o) {
                console.log(o.data[0].notice), a.setData({
                    showCanvas: !1,
                    notice: o.data[0].notice
                });
            }
        });
    },
    ok: function(a) {
        this.setData({
            showCanvas: !0
        });
    },
    NavigatorToSSLZ: function() {
        wx.navigateTo({
            url: "/pages/mf/sslz/sslz"
        });
    },
    NavigatorToHLZ: function() {
        wx.navigateTo({
            url: "/pages/sm/hlz/hlz"
        });
    },
    NavigatorToSHJ: function() {
        wx.navigateTo({
            url: "/pages/yj/shj/shj"
        });
    },
    NavigatorToLCFJ: function() {
        wx.navigateTo({
            url: "/pages/tg/lcfj/lcfj"
        });
    },
    NavigatorToFXP: function() {
        wx.navigateTo({
            url: "/pages/yj/fxp/fxp"
        });
    },
    NavigatorToQMGZ: function() {
        wx.navigateTo({
            url: "/pages/zy/qmgz/qmgz"
        });
    },
    NavigatorToDJJW: function() {
        wx.navigateTo({
            url: "/pages/zf/djjw/djjw"
        });
    },
    NavigatorToDYS: function() {
        wx.navigateTo({
            url: "/pages/mf/dys/dys"
        });
    },
    NavigatorToWSZYZ: function() {
        wx.navigateTo({
            url: "/pages/sm/wszyz/wszyz"
        });
    },
    NavigatorToSYXJ: function() {
        wx.navigateTo({
            url: "/pages/zy/syxj/syxj"
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});