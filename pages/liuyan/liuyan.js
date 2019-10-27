Page({
    data: {
        height: 20,
        focus: !1
    },
    bindButtonTap: function() {
        this.setData({
            focus: !0
        });
    },
    bindTextAreaBlur: function(e) {
        console.log(e.detail.value);
    },
    bindFormSubmit: function(e) {
        var t = this, a = wx.cloud.database();
        "" != e.detail.value.textarea && a.collection("message").add({
            data: {
                message: e.detail.value.textarea
            },
            success: function(a) {
                t.setData({
                    messageId: a._id,
                    message: e.detail.value.textarea
                }), wx.showToast({
                    title: "留言成功",
                    success: function(e) {
                        setTimeout(function() {
                            wx.redirectTo({
                                url: "/pages/home/home"
                            });
                        }, 1500);
                    }
                });
            },
            fail: function(e) {
                wx.showToast({
                    icon: "none",
                    title: "留言失败"
                });
            }
        });
    }
});