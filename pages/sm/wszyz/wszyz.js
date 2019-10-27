var a = getApp();

Page({
    data: {
        navbar: [ "装备", "附魔/宝石", "星蕴/特技", "附加属性", "属性" ],
        winHeight: "",
        currentTab: 0,
        equipArray: [],
        showCanvas: !0,
        shareImgUrl: [],
        equipIndexArray: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        equipIndex: 0,
        equipPlace: [ {
            name: "武器",
            value: "武器"
        }, {
            name: "信物左",
            value: "信物左"
        }, {
            name: "信物中",
            value: "信物中"
        }, {
            name: "信物右",
            value: "信物右"
        }, {
            name: "头",
            value: "头"
        }, {
            name: "衣服",
            value: "衣服"
        }, {
            name: "护腕",
            value: "护腕"
        }, {
            name: "腰带",
            value: "腰带"
        }, {
            name: "裤",
            value: "裤"
        }, {
            name: "鞋",
            value: "鞋"
        }, {
            name: "项链",
            value: "项链"
        }, {
            name: "配1",
            value: "配1"
        }, {
            name: "配2",
            value: "配2"
        }, {
            name: "戒指1",
            value: "戒指1"
        }, {
            name: "戒指2",
            value: "戒指2"
        } ],
        enchantIndex: 0,
        enchantPlace: [ {
            name: "武器",
            value: "武器",
            show: !1
        }, {
            name: "头",
            value: "头",
            show: !1
        }, {
            name: "衣服",
            value: "衣服",
            show: !1
        }, {
            name: "护腕",
            value: "护腕",
            show: !1
        }, {
            name: "腰带",
            value: "腰带",
            show: !1
        }, {
            name: "裤",
            value: "裤",
            show: !1
        }, {
            name: "鞋",
            value: "鞋",
            show: !1
        } ],
        enchantIndexArray: [ 0, 0, 0, 0, 0, 0, 0 ],
        enchantArray: [],
        foodIndex: 0,
        foodPlace: [ {
            name: "攻击食品",
            value: "攻击食品",
            show: !1
        }, {
            name: "防御食品",
            value: "防御食品",
            show: !1
        }, {
            name: "辅助食品",
            value: "辅助食品",
            show: !1
        } ],
        foodIndexArray: [ 0, 0, 0, 0, 0, 0 ],
        foodArray: [],
        stoneIndex: 0,
        stonePlace: [ {
            name: "信物左",
            value: "信物左",
            show: !1
        }, {
            name: "信物左",
            value: "信物左",
            show: !1
        }, {
            name: "信物中",
            value: "信物中",
            show: !1
        }, {
            name: "信物中",
            value: "信物中",
            show: !1
        }, {
            name: "信物右",
            value: "信物右",
            show: !1
        }, {
            name: "信物右",
            value: "信物右",
            show: !1
        }, {
            name: "项链",
            value: "项链",
            show: !1
        }, {
            name: "戒指",
            value: "戒指",
            show: !1
        }, {
            name: "戒指",
            value: "戒指",
            show: !1
        } ],
        stoneIndexArray: [ 2, 0, 2, 0, 2, 2, 0, 0, 0 ],
        stoneArray: [],
        starArray: [ {
            name: "属性",
            value: 0
        }, {
            name: "攻击",
            value: 0
        }, {
            name: "强度",
            value: 0
        }, {
            name: "专精",
            value: 0
        }, {
            name: "会心",
            value: 0
        }, {
            name: "急速",
            value: 0
        }, {
            name: "法力",
            value: 0
        }, {
            name: "治疗",
            value: 0
        } ],
        zhiyouArray: [ {
            name: "1%会心",
            value: 0,
            checked: !1
        }, {
            name: "1%专精",
            value: 1,
            checked: !1
        }, {
            name: "1%强度",
            value: 2,
            checked: !1
        } ],
        zhiyouList: [],
        xlwArray: [ {
            name: "1%会心",
            value: 0,
            checked: !0
        }, {
            name: "1%强度",
            value: 1,
            checked: !1
        }, {
            name: "1%急速",
            value: 2,
            checked: !1
        } ],
        xlwBuff: 0,
        "属性": -1,
        "攻击": -1,
        "会心": -1,
        "强度": -1,
        "治疗": -1,
        "专精": -1,
        "急速": -1,
        "法力": -1,
        zongzheng: 0,
        kangchi: 0,
        propertyList: [ {
            name: "属性",
            value: 0,
            percent: 0
        }, {
            name: "攻击",
            value: 0,
            percent: 0
        }, {
            name: "强度",
            value: 0,
            percent: 0
        }, {
            name: "专精",
            value: 0,
            percent: 0
        }, {
            name: "会心",
            value: 0,
            percent: 0
        }, {
            name: "急速",
            value: 0,
            percent: 0
        }, {
            name: "法力",
            value: 0,
            percent: 0
        }, {
            name: "治疗",
            value: 0,
            percent: 0
        } ],
        zhiliao: 0
    },
    mutiCheckBox: function(a) {
        this.setData({
            zhiyouList: a.detail.value
        }), this.updatePorperty();
    },
    singleCheckBox: function(a) {
        this.setData({
            xlwBuff: a.detail.value
        }), this.updatePorperty();
    },
    equipPickerChange: function(a) {
        this.data.index;
        var t = a.target.dataset.idx;
        this.data.equipIndexArray[t] = a.detail.value, this.setData({
            equipIndexArray: this.data.equipIndexArray
        }), this.updatePorperty();
    },
    enchantPickerChange: function(a) {
        this.data.index;
        var t = a.target.dataset.idx;
        this.data.enchantIndexArray[t] = a.detail.value, this.setData({
            enchantIndexArray: this.data.enchantIndexArray
        }), this.updatePorperty();
    },
    stonePickerChange: function(a) {
        this.data.index;
        var t = a.target.dataset.idx;
        this.data.stoneIndexArray[t] = a.detail.value, this.setData({
            stoneIndexArray: this.data.stoneIndexArray
        }), this.updatePorperty();
    },
    foodPickerChange: function(a) {
        this.data.index;
        var t = a.target.dataset.idx;
        this.data.foodIndexArray[t] = a.detail.value, this.setData({
            foodIndexArray: this.data.foodIndexArray
        }), this.updatePorperty();
    },
    kangchiSlider: function(a) {
        var t = 0;
        1 == a.detail.value && (t = 2), 2 == a.detail.value && (t = 4), 3 == a.detail.value && (t = 8), 
        4 == a.detail.value && (t = 12), 5 == a.detail.value && (t = 18), this.setData({
            kangchi: t
        }), this.updatePorperty();
    },
    zongzhengSlider: function(a) {
        var t = 0;
        1 == a.detail.value && (t = 1.5), 2 == a.detail.value && (t = 3), 3 == a.detail.value && (t = 6), 
        this.setData({
            zongzheng: t
        }), this.updatePorperty();
    },
    starInputChange: function(a) {
        this.data.index;
        var t = a.target.dataset.idx;
        this.data.starArray[t].value = parseInt(a.detail.value), this.setData({
            starArray: this.data.starArray
        }), this.updatePorperty();
    },
    navbarTap: function(a) {
        var t = this;
        t.setData({
            currentTab: a.currentTarget.dataset.idx,
            TypeItem: t.data.navbar[t.data.currentTab]
        });
    },
    onLoad: function() {
        var a = this, t = this;
        for (var e in this.data.propertyList) "属性" == this.data.propertyList[e].name && (this.data.属性 = e), 
        "攻击" == this.data.propertyList[e].name && (this.data.攻击 = e), "会心" == this.data.propertyList[e].name && (this.data.会心 = e), 
        "强度" == this.data.propertyList[e].name && (this.data.强度 = e), "治疗" == this.data.propertyList[e].name && (this.data.治疗 = e), 
        "专精" == this.data.propertyList[e].name && (this.data.专精 = e), "急速" == this.data.propertyList[e].name && (this.data.急速 = e), 
        "法力" == this.data.propertyList[e].name && (this.data.法力 = e);
        wx.getSystemInfo({
            success: function(a) {
                var e = a.windowHeight * (750 / a.windowWidth) - 180;
                t.setData({
                    winHeight: e
                });
            }
        });
        var r = wx.cloud.database();
        r.collection("enchant").where({
            _openid: this.data.openid
        }).get({
            success: function(t) {
                a.setData({
                    enchantArray: t.data[0].enchant_Health
                });
            }
        }), r.collection("stone").where({
            _openid: this.data.openid
        }).get({
            success: function(t) {
                a.setData({
                    stoneArray: t.data[0].stone_Health
                });
            }
        }), r.collection("food").where({
            _openid: this.data.openid
        }).get({
            success: function(t) {
                a.setData({
                    foodArray: t.data[0].food
                });
            }
        }), r.collection("equipN").where({
            _openid: this.data.openid
        }).get({
            success: function(t) {
                a.setData({
                    equipArray: t.data[0].equipSMN
                });
            }
        });
    },
    getDecimal: function(a) {
        return Math.round(100 * a) / 100;
    },
    updatePorperty: function() {
        for (var a in this.data.propertyList) {
            this.data.propertyList[a].value = 0;
            for (var t in this.data.equipPlace) "属性" == this.data.propertyList[a].name && null != this.data.equipArray[t][this.data.equipIndexArray[t]].属性 && "" != this.data.equipArray[t][this.data.equipIndexArray[t]].属性 && (this.data.propertyList[a].value += this.data.equipArray[t][this.data.equipIndexArray[t]].属性), 
            "攻击" == this.data.propertyList[a].name && null != this.data.equipArray[t][this.data.equipIndexArray[t]].攻击 && "" != this.data.equipArray[t][this.data.equipIndexArray[t]].攻击 && (this.data.propertyList[a].value += this.data.equipArray[t][this.data.equipIndexArray[t]].攻击), 
            "会心" == this.data.propertyList[a].name && null != this.data.equipArray[t][this.data.equipIndexArray[t]].会心 && "" != this.data.equipArray[t][this.data.equipIndexArray[t]].会心 && (this.data.propertyList[a].value += this.data.equipArray[t][this.data.equipIndexArray[t]].会心), 
            "治疗" == this.data.propertyList[a].name && null != this.data.equipArray[t][this.data.equipIndexArray[t]].治疗 && "" != this.data.equipArray[t][this.data.equipIndexArray[t]].治疗 && (this.data.propertyList[a].value += this.data.equipArray[t][this.data.equipIndexArray[t]].治疗), 
            "急速" == this.data.propertyList[a].name && null != this.data.equipArray[t][this.data.equipIndexArray[t]].急速 && "" != this.data.equipArray[t][this.data.equipIndexArray[t]].急速 && (this.data.propertyList[a].value += this.data.equipArray[t][this.data.equipIndexArray[t]].急速), 
            "强度" == this.data.propertyList[a].name && null != this.data.equipArray[t][this.data.equipIndexArray[t]].强度 && "" != this.data.equipArray[t][this.data.equipIndexArray[t]].强度 && (this.data.propertyList[a].value += this.data.equipArray[t][this.data.equipIndexArray[t]].强度), 
            "专精" == this.data.propertyList[a].name && null != this.data.equipArray[t][this.data.equipIndexArray[t]].专精 && "" != this.data.equipArray[t][this.data.equipIndexArray[t]].专精 && (this.data.propertyList[a].value += this.data.equipArray[t][this.data.equipIndexArray[t]].专精), 
            "法力" == this.data.propertyList[a].name && null != this.data.equipArray[t][this.data.equipIndexArray[t]].法力 && "" != this.data.equipArray[t][this.data.equipIndexArray[t]].法力 && (this.data.propertyList[a].value += this.data.equipArray[t][this.data.equipIndexArray[t]].法力);
            for (var t in this.data.enchantPlace) "属性" == this.data.propertyList[a].name && null != this.data.enchantArray[t][this.data.enchantIndexArray[t]].属性 && (this.data.propertyList[a].value += this.data.enchantArray[t][this.data.enchantIndexArray[t]].属性), 
            "攻击" == this.data.propertyList[a].name && null != this.data.enchantArray[t][this.data.enchantIndexArray[t]].攻击 && (this.data.propertyList[a].value += this.data.enchantArray[t][this.data.enchantIndexArray[t]].攻击), 
            "会心" == this.data.propertyList[a].name && null != this.data.enchantArray[t][this.data.enchantIndexArray[t]].会心 && (this.data.propertyList[a].value += this.data.enchantArray[t][this.data.enchantIndexArray[t]].会心), 
            "治疗" == this.data.propertyList[a].name && null != this.data.enchantArray[t][this.data.enchantIndexArray[t]].治疗 && (this.data.propertyList[a].value += this.data.enchantArray[t][this.data.enchantIndexArray[t]].治疗), 
            "急速" == this.data.propertyList[a].name && null != this.data.enchantArray[t][this.data.enchantIndexArray[t]].急速 && (this.data.propertyList[a].value += this.data.enchantArray[t][this.data.enchantIndexArray[t]].急速), 
            "强度" == this.data.propertyList[a].name && null != this.data.enchantArray[t][this.data.enchantIndexArray[t]].强度 && (this.data.propertyList[a].value += this.data.enchantArray[t][this.data.enchantIndexArray[t]].强度), 
            "专精" == this.data.propertyList[a].name && null != this.data.enchantArray[t][this.data.enchantIndexArray[t]].专精 && (this.data.propertyList[a].value += this.data.enchantArray[t][this.data.enchantIndexArray[t]].专精), 
            "法力" == this.data.propertyList[a].name && null != this.data.enchantArray[t][this.data.enchantIndexArray[t]].法力 && (this.data.propertyList[a].value += this.data.enchantArray[t][this.data.enchantIndexArray[t]].法力);
            for (var t in this.data.stonePlace) "属性" == this.data.propertyList[a].name && null != this.data.stoneArray[t][this.data.stoneIndexArray[t]].属性 && (this.data.propertyList[a].value += this.data.stoneArray[t][this.data.stoneIndexArray[t]].属性), 
            "攻击" == this.data.propertyList[a].name && null != this.data.stoneArray[t][this.data.stoneIndexArray[t]].攻击 && (this.data.propertyList[a].value += this.data.stoneArray[t][this.data.stoneIndexArray[t]].攻击), 
            "会心" == this.data.propertyList[a].name && null != this.data.stoneArray[t][this.data.stoneIndexArray[t]].会心 && (this.data.propertyList[a].value += this.data.stoneArray[t][this.data.stoneIndexArray[t]].会心), 
            "治疗" == this.data.propertyList[a].name && null != this.data.stoneArray[t][this.data.stoneIndexArray[t]].治疗 && (this.data.propertyList[a].value += this.data.stoneArray[t][this.data.stoneIndexArray[t]].治疗), 
            "急速" == this.data.propertyList[a].name && null != this.data.stoneArray[t][this.data.stoneIndexArray[t]].急速 && (this.data.propertyList[a].value += this.data.stoneArray[t][this.data.stoneIndexArray[t]].急速), 
            "强度" == this.data.propertyList[a].name && null != this.data.stoneArray[t][this.data.stoneIndexArray[t]].强度 && (this.data.propertyList[a].value += this.data.stoneArray[t][this.data.stoneIndexArray[t]].强度), 
            "专精" == this.data.propertyList[a].name && null != this.data.stoneArray[t][this.data.stoneIndexArray[t]].专精 && (this.data.propertyList[a].value += this.data.stoneArray[t][this.data.stoneIndexArray[t]].专精), 
            "法力" == this.data.propertyList[a].name && null != this.data.stoneArray[t][this.data.stoneIndexArray[t]].法力 && (this.data.propertyList[a].value += this.data.stoneArray[t][this.data.stoneIndexArray[t]].法力);
            for (var t in this.data.foodPlace) "属性" == this.data.propertyList[a].name && null != this.data.foodArray[t][this.data.foodIndexArray[t]].属性 && (this.data.propertyList[a].value += this.data.foodArray[t][this.data.foodIndexArray[t]].属性), 
            "攻击" == this.data.propertyList[a].name && null != this.data.foodArray[t][this.data.foodIndexArray[t]].攻击 && (this.data.propertyList[a].value += this.data.foodArray[t][this.data.foodIndexArray[t]].攻击), 
            "会心" == this.data.propertyList[a].name && null != this.data.foodArray[t][this.data.foodIndexArray[t]].会心 && (this.data.propertyList[a].value += this.data.foodArray[t][this.data.foodIndexArray[t]].会心), 
            "治疗" == this.data.propertyList[a].name && null != this.data.foodArray[t][this.data.foodIndexArray[t]].治疗 && (this.data.propertyList[a].value += this.data.foodArray[t][this.data.foodIndexArray[t]].治疗), 
            "急速" == this.data.propertyList[a].name && null != this.data.foodArray[t][this.data.foodIndexArray[t]].急速 && (this.data.propertyList[a].value += this.data.foodArray[t][this.data.foodIndexArray[t]].急速), 
            "强度" == this.data.propertyList[a].name && null != this.data.foodArray[t][this.data.foodIndexArray[t]].强度 && (this.data.propertyList[a].value += this.data.foodArray[t][this.data.foodIndexArray[t]].强度), 
            "专精" == this.data.propertyList[a].name && null != this.data.foodArray[t][this.data.foodIndexArray[t]].专精 && (this.data.propertyList[a].value += this.data.foodArray[t][this.data.foodIndexArray[t]].专精);
            for (var t in this.data.starArray) this.data.propertyList[a].name == this.data.starArray[t].name && null != this.data.starArray[t].value && (isNaN(this.data.starArray[t].value) || (this.data.propertyList[a].value += this.data.starArray[t].value));
        }
        this.data.propertyList[this.data.属性].value += 40, this.data.propertyList[this.data.攻击].value += 15, 
        this.data.propertyList[this.data.攻击].value += .15 * this.data.propertyList[this.data.属性].value, 
        this.data.propertyList[this.data.会心].value += .3 * this.data.propertyList[this.data.属性].value, 
        this.data.propertyList[this.data.强度].value += .3 * this.data.propertyList[this.data.属性].value, 
        this.data.propertyList[this.data.治疗].value += .5 * this.data.propertyList[this.data.属性].value, 
        this.data.propertyList[this.data.治疗].value += .5 * this.data.propertyList[this.data.攻击].value, 
        this.data.propertyList[this.data.法力].value = this.data.propertyList[this.data.法力].value + 8e3, 
        this.data.propertyList[this.data.属性].percent = this.data.propertyList[this.data.属性].value, 
        this.data.propertyList[this.data.攻击].percent = this.data.propertyList[this.data.攻击].value, 
        this.data.propertyList[this.data.专精].percent = this.data.propertyList[this.data.专精].value, 
        this.data.propertyList[this.data.会心].percent = .075 * this.data.propertyList[this.data.会心].value, 
        this.data.propertyList[this.data.强度].percent = this.data.propertyList[this.data.强度].value, 
        this.data.propertyList[this.data.急速].percent = this.data.propertyList[this.data.急速].value / 12, 
        this.data.propertyList[this.data.法力].percent = this.data.propertyList[this.data.法力].value, 
        0 == this.data.xlwBuff ? this.data.propertyList[this.data.会心].percent += 1 : 1 == this.data.xlwBuff ? this.data.propertyList[this.data.强度].percent += 10 : 2 == this.data.xlwBuff && (this.data.propertyList[this.data.急速].percent += 1), 
        -1 != this.data.zhiyouList.indexOf("0") && (this.data.propertyList[this.data.会心].percent += 1), 
        -1 != this.data.zhiyouList.indexOf("1") && (this.data.propertyList[this.data.专精].percent += 10), 
        -1 != this.data.zhiyouList.indexOf("2") && (this.data.propertyList[this.data.强度].percent += 10), 
        this.data.propertyList[this.data.治疗].value = this.data.propertyList[this.data.治疗].value * (1 + (.2 + this.data.zongzheng / 100) * (1 + this.data.kangchi / 100) + 5e-4 * this.data.propertyList[this.data.强度].percent), 
        this.data.propertyList[this.data.治疗].percent = this.data.propertyList[this.data.治疗].value;
        for (var a in this.data.propertyList) this.data.propertyList[a].value = this.getDecimal(this.data.propertyList[a].value), 
        this.data.propertyList[a].percent = this.getDecimal(this.data.propertyList[a].percent);
        this.data.propertyList[this.data.法力].value = "", this.data.propertyList[this.data.治疗].value = "", 
        this.setData({
            propertyList: this.data.propertyList
        });
    },
    drawCanvas: function() {
        var a = this, t = new Promise(function(a, t) {
            wx.getImageInfo({
                src: "../../../image/sm_bg_middle.jpg",
                success: function(t) {
                    a(t);
                }
            });
        }), e = new Promise(function(a, t) {
            wx.getImageInfo({
                src: "../../../image/code.jpg",
                success: function(t) {
                    a(t);
                }
            });
        });
        Promise.all([ t, e ]).then(function(t) {
            console.log(t);
            var e = wx.createCanvasContext("shareImg");
            e.setFillStyle("white"), e.fillRect(0, 0, 863, 485), e.setGlobalAlpha(.2), e.drawImage("../../../" + t[0].path, 0, 0, 863, 485), 
            e.setGlobalAlpha(1), e.setTextAlign("left"), e.setFillStyle("black"), e.setFontSize(30), 
            e.fillText("古剑奇谭网络版配装器", 250, 40), e.setFontSize(24), e.fillText("门派：司命    专精：娲圣祝由咒", 450, 80), 
            e.setFontSize(18);
            for (i = 0; i < a.data.equipArray.length; i++) e.fillText(a.data.equipArray[i][a.data.equipIndexArray[i]].nameShort, 40, 27 * i + 80);
            e.setFontSize(8), e.setFillStyle("#666666");
            for (i = 0; i < a.data.equipArray.length; i++) e.fillText(a.data.equipArray[i][a.data.equipIndexArray[i]].nameLong, 40, 27 * i + 90);
            e.setFontSize(12), e.fillText(a.data.stoneArray[0][a.data.stoneIndexArray[0]].nameShort, 200, 107), 
            e.fillText(a.data.stoneArray[1][a.data.stoneIndexArray[1]].nameShort, 280, 107), 
            e.fillText(a.data.stoneArray[2][a.data.stoneIndexArray[2]].nameShort, 200, 134), 
            e.fillText(a.data.stoneArray[3][a.data.stoneIndexArray[3]].nameShort, 280, 134), 
            e.fillText(a.data.stoneArray[4][a.data.stoneIndexArray[4]].nameShort, 200, 161), 
            e.fillText(a.data.stoneArray[5][a.data.stoneIndexArray[5]].nameShort, 280, 161), 
            e.fillText(a.data.stoneArray[6][a.data.stoneIndexArray[6]].nameShort, 200, 350), 
            e.fillText(a.data.stoneArray[7][a.data.stoneIndexArray[7]].nameShort, 200, 431), 
            e.fillText(a.data.stoneArray[8][a.data.stoneIndexArray[8]].nameShort, 200, 458), 
            e.fillText(a.data.enchantArray[0][a.data.enchantIndexArray[0]].name, 200, 80), e.fillText(a.data.enchantArray[1][a.data.enchantIndexArray[1]].name, 200, 188), 
            e.fillText(a.data.enchantArray[2][a.data.enchantIndexArray[2]].name, 200, 215), 
            e.fillText(a.data.enchantArray[3][a.data.enchantIndexArray[3]].name, 200, 242), 
            e.fillText(a.data.enchantArray[4][a.data.enchantIndexArray[4]].name, 200, 269), 
            e.fillText(a.data.enchantArray[5][a.data.enchantIndexArray[5]].name, 200, 296), 
            e.fillText(a.data.enchantArray[6][a.data.enchantIndexArray[6]].name, 200, 323), 
            e.setFontSize(24), e.setFillStyle("black"), e.fillText("星蕴", 450, 130), e.setFontSize(18);
            for (i = 0; i < a.data.starArray.length; i++) e.fillText(a.data.starArray[i].name, 450 + i % 2 * 100, 25 * (i - i % 2) / 2 + 155);
            e.setTextAlign("right"), e.setFillStyle("#666666");
            for (i = 0; i < a.data.starArray.length; i++) e.fillText(a.data.starArray[i].value, 530 + i % 2 * 100, 25 * (i - i % 2) / 2 + 155);
            e.setTextAlign("left"), e.setFontSize(24), e.setFillStyle("black"), e.fillText("附加属性", 450, 265), 
            e.setFontSize(18);
            for (var r = new Array(), i = 0; i < a.data.foodArray.length; i++) 0 != a.data.foodIndexArray[i] && r.push(a.data.foodArray[i][a.data.foodIndexArray[i]].nameShort);
            0 != a.data.zongzheng && r.push("宗正" + a.data.zongzheng + "%治疗强化"), 0 != a.data.kangchi && r.push("亢池" + a.data.kangchi + "%治疗强化加成"), 
            0 == a.data.xlwBuff ? r.push("血露薇1%会心") : 1 == a.data.xlwBuff ? r.push("血露薇1%强度") : 2 == a.data.xlwBuff && r.push("血露薇1%急速"), 
            -1 != a.data.zhiyouList.indexOf("0") && r.push("挚友1%会心"), -1 != a.data.zhiyouList.indexOf("1") && r.push("挚友1%专精"), 
            -1 != a.data.zhiyouList.indexOf("2") && r.push("挚友1%强度");
            for (i = 0; i < r.length; i++) e.fillText(r[i], 450, 23 * i + 290);
            e.setFontSize(24), e.setFillStyle("black"), e.fillText("面板", 700, 130), e.setFontSize(18);
            for (i = 0; i < a.data.propertyList.length; i++) e.setFillStyle("black"), e.fillText(a.data.propertyList[i].name, 700, 25 * i + 155), 
            e.setFillStyle("#666666"), e.setTextAlign("right"), e.fillText(a.data.propertyList[i].percent, 800, 25 * i + 155), 
            e.setTextAlign("left");
            e.drawImage("../../../" + t[1].path, 713, 335, 150, 150), e.stroke(), e.draw(!1, a.showCanvas);
        });
    },
    showCanvas: function() {
        var a = this;
        wx.canvasToTempFilePath({
            canvasId: "shareImg",
            success: function(t) {
                var e = [];
                e.push(t.tempFilePath), a.setData({
                    shareImgUrl: e,
                    showCanvas: !1
                });
            }
        }, this);
    },
    save: function() {
        wx.saveImageToPhotosAlbum({
            filePath: this.data.shareImgUrl[0]
        }), wx.showToast({
            title: "保存成功",
            icon: "succes",
            duration: 1e3,
            mask: !0
        }), this.setData({
            showCanvas: !0
        });
    },
    previewImage: function() {
        wx.previewImage({
            urls: this.data.shareImgUrl
        });
    },
    closeCanvas: function() {
        this.setData({
            showCanvas: !0
        });
    },
    footerTap: a.footerTap
});