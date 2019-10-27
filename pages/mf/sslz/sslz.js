var a = getApp();

Page({
    data: {
        navbar: [ "装备", "附魔/宝石", "星蕴/特技", "附加属性", "属性" ],
        winHeight: "",
        currentTab: 0,
        shareImgUrl: [],
        equipList: [],
        levelList: [],
        equipMutliArray: [],
        equipMutilIndexArray: [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ],
        equipDetail: [ {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        }, {
            "法强": 20,
            "专注": 20
        } ],
        equipIndexArray: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        equipIndex: 0,
        equipPlace: [ {
            name: "武器"
        }, {
            name: "信物左"
        }, {
            name: "信物中"
        }, {
            name: "信物右"
        }, {
            name: "头"
        }, {
            name: "衣服"
        }, {
            name: "护腕"
        }, {
            name: "腰带"
        }, {
            name: "裤"
        }, {
            name: "鞋"
        }, {
            name: "项链"
        }, {
            name: "配1"
        }, {
            name: "配2"
        }, {
            name: "戒指1"
        }, {
            name: "戒指2"
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
        stoneIndexArray: [ 2, 2, 0, 2, 0, 2, 0, 0, 0 ],
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
            name: "专注",
            value: 0
        }, {
            name: "急速",
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
            name: "1%专注",
            value: 1,
            checked: !1
        }, {
            name: "1%强度",
            value: 2,
            checked: !1
        }, {
            name: "1%急速",
            value: 3,
            checked: !1
        } ],
        xlwBuff: 0,
        "属性": -1,
        "攻击": -1,
        "会心": -1,
        "强度": -1,
        "专注": -1,
        "专精": -1,
        "急速": -1,
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
            name: "专注",
            value: 0,
            percent: 0
        }, {
            name: "急速",
            value: 0,
            percent: 0
        } ],
        huben: 0,
        kanglong: 0,
        tianqiang: 0,
        jianhe: 0,
        zuizhong: 0,
        showCanvas: !0
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
    hubenSlider: function(a) {
        var t = 0;
        1 == a.detail.value && (t = 1), 2 == a.detail.value && (t = 2), 3 == a.detail.value && (t = 4.5), 
        4 == a.detail.value && (t = 7), 5 == a.detail.value && (t = 10), this.setData({
            huben: t
        }), this.updatePorperty();
    },
    jianheSlider: function(a) {
        var t = 0;
        0 == a.detail.value && (t = 0), 1 == a.detail.value && (t = 1.25), 2 == a.detail.value && (t = 2.5), 
        3 == a.detail.value && (t = 5), 4 == a.detail.value && (t = 10), this.setData({
            jianhe: t
        }), this.updatePorperty();
    },
    tianqiangSlider: function(a) {
        var t = 0;
        1 == a.detail.value && (t = 3), 2 == a.detail.value && (t = 5), 3 == a.detail.value && (t = 8), 
        this.setData({
            tianqiang: t
        }), this.updatePorperty();
    },
    kanglongSlider: function(a) {
        this.setData({
            kanglong: a.detail.value
        }), this.updatePorperty();
    },
    bossSlider: function(a) {
        this.setData({
            bossMingzhong: a.detail.value
        }), this.updatePorperty();
    },
    zhuanjingSlider: function(a) {
        this.setData({
            zjPercent: a.detail.value
        }), this.updatePorperty();
    },
    jzySwitch: function(a) {
        this.setData({
            jzy: a.detail.value
        }), this.updatePorperty();
    },
    yanguangSwitch: function(a) {
        this.setData({
            yanguang: a.detail.value
        }), this.updatePorperty();
    },
    chongmingSwitch: function(a) {
        this.setData({
            chongming: a.detail.value
        }), this.updatePorperty();
    },
    onLoad: function() {
        var a = this, t = this;
        for (var e in this.data.propertyList) "属性" == this.data.propertyList[e].name && (this.data.属性 = e), 
        "攻击" == this.data.propertyList[e].name && (this.data.攻击 = e), "会心" == this.data.propertyList[e].name && (this.data.会心 = e), 
        "强度" == this.data.propertyList[e].name && (this.data.强度 = e), "专注" == this.data.propertyList[e].name && (this.data.专注 = e), 
        "专精" == this.data.propertyList[e].name && (this.data.专精 = e), "急速" == this.data.propertyList[e].name && (this.data.急速 = e);
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
                    enchantArray: t.data[0].enchant_DPS
                });
            }
        }), r.collection("stone").where({
            _openid: this.data.openid
        }).get({
            success: function(t) {
                a.setData({
                    stoneArray: t.data[0].stone_DPS
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
        }), r.collection("equipment").doc("mfdps").get({
            success: function(t) {
                console.log(t);
                var e = [], r = t.data.equipListMFD;
                for (var n in r) {
                    var i = [];
                    for (var s in r[n]) i.push(r[n][s].name);
                    e.push([ i, r[n][0].level.split(";") ]);
                }
                a.setData({
                    equipList: r,
                    levelList: t.data.level,
                    equipMutliArray: e
                });
            }
        });
    },
    bindMultiPickerChange: function(a) {
        var t = a.target.dataset.idx, e = {
            equipMutilIndexArray: this.data.equipMutilIndexArray
        };
        null == a.detail.value[0] && (a.detail.value[0] = 0), null == a.detail.value[1] && (a.detail.value[1] = 0), 
        e.equipMutilIndexArray[t] = a.detail.value, this.setData(e), this.updatePorperty();
    },
    bindMultiPickerColumnChange: function(a) {
        var t = a.target.dataset.idx, e = {
            equipMutliArray: this.data.equipMutliArray
        };
        switch (a.detail.column) {
          case 0:
            var r = this.data.equipList[t][a.detail.value].level;
            e.equipMutliArray[t][1] = r.split(";");
        }
        this.setData(e);
    },
    getLevelDetail: function(a, t) {
        var e = {
            levelList: this.data.levelList
        };
        switch (t) {
          case "65":
            return e.levelList[a].level65;

          case "75":
            return e.levelList[a].level75;

          case "80":
            return e.levelList[a].level80;

          case "90":
            return e.levelList[a].level90;

          case "95":
            return e.levelList[a].level95;

          case "100":
            return e.levelList[a].level100;

          case "105":
            return e.levelList[a].level105;

          case "110":
            return e.levelList[a].level110;

          case "115":
            return e.levelList[a].level115;

          case "120":
            return e.levelList[a].level120;

          case "125":
            return e.levelList[a].level125;

          case "130":
            return e.levelList[a].level130;

          case "135":
            return e.levelList[a].level135;
        }
    },
    getDecimal: function(a) {
        return Math.round(100 * a) / 100;
    },
    updatePorperty: function() {
        for (var a = {
            propertyList: this.data.propertyList,
            zuizhong: this.data.zuizhong,
            equipMutilIndexArray: this.data.equipMutilIndexArray,
            equipList: this.data.equipList,
            enchantArray: this.data.enchantArray,
            enchantIndexArray: this.data.enchantIndexArray,
            stoneArray: this.data.stoneArray,
            stoneIndexArray: this.data.stoneIndexArray,
            foodArray: this.data.foodArray,
            foodIndexArray: this.data.foodIndexArray,
            starArray: this.data.starArray
        }, t = 0; t < a.propertyList.length; ++t) a.propertyList[t].value = 0;
        for (t = 0; t < a.equipMutilIndexArray.length; ++t) for (var e = a.equipList[t][a.equipMutilIndexArray[t][0]].detail.split(";"), r = a.equipList[t][a.equipMutilIndexArray[t][0]].level.split(";")[a.equipMutilIndexArray[t][1]], n = this.getLevelDetail(t, r).split(";"), i = 0; i < e.length; ++i) "攻击" == e[i] && (a.propertyList[this.data.攻击].value += parseFloat(n[i])), 
        "属性" == e[i] && (a.propertyList[this.data.属性].value += parseFloat(n[i])), "专注" == e[i] && (a.propertyList[this.data.专注].value += parseFloat(n[i])), 
        "专精" == e[i] && (a.propertyList[this.data.专精].value += parseFloat(n[i])), "急速" == e[i] && (a.propertyList[this.data.急速].value += parseFloat(n[i])), 
        "会心" == e[i] && (a.propertyList[this.data.会心].value += parseFloat(n[i])), "强度" == e[i] && (a.propertyList[this.data.强度].value += parseFloat(n[i]));
        for (t = 0; t < a.enchantArray.length; ++t) null != a.enchantArray[t][a.enchantIndexArray[t]].属性 && (a.propertyList[this.data.属性].value += a.enchantArray[t][a.enchantIndexArray[t]].属性), 
        null != a.enchantArray[t][a.enchantIndexArray[t]].攻击 && (a.propertyList[this.data.攻击].value += a.enchantArray[t][a.enchantIndexArray[t]].攻击), 
        null != a.enchantArray[t][a.enchantIndexArray[t]].会心 && (a.propertyList[this.data.会心].value += a.enchantArray[t][a.enchantIndexArray[t]].会心), 
        null != a.enchantArray[t][a.enchantIndexArray[t]].专注 && (a.propertyList[this.data.专注].value += a.enchantArray[t][a.enchantIndexArray[t]].专注), 
        null != a.enchantArray[t][a.enchantIndexArray[t]].急速 && (a.propertyList[this.data.急速].value += a.enchantArray[t][a.enchantIndexArray[t]].急速), 
        null != a.enchantArray[t][a.enchantIndexArray[t]].强度 && (a.propertyList[this.data.强度].value += a.enchantArray[t][a.enchantIndexArray[t]].强度), 
        null != a.enchantArray[t][a.enchantIndexArray[t]].专精 && (a.propertyList[this.data.专精].value += a.enchantArray[t][a.enchantIndexArray[t]].专精);
        for (t = 0; t < a.foodArray.length; ++t) null != a.foodArray[t][a.foodIndexArray[t]].属性 && (a.propertyList[this.data.属性].value += a.foodArray[t][a.foodIndexArray[t]].属性), 
        null != a.foodArray[t][a.foodIndexArray[t]].攻击 && (a.propertyList[this.data.攻击].value += a.foodArray[t][a.foodIndexArray[t]].攻击), 
        null != a.foodArray[t][a.foodIndexArray[t]].会心 && (a.propertyList[this.data.会心].value += a.foodArray[t][a.foodIndexArray[t]].会心), 
        null != a.foodArray[t][a.foodIndexArray[t]].专注 && (a.propertyList[this.data.专注].value += a.foodArray[t][a.foodIndexArray[t]].专注), 
        null != a.foodArray[t][a.foodIndexArray[t]].急速 && (a.propertyList[this.data.急速].value += a.foodArray[t][a.foodIndexArray[t]].急速), 
        null != a.foodArray[t][a.foodIndexArray[t]].强度 && (a.propertyList[this.data.强度].value += a.foodArray[t][a.foodIndexArray[t]].强度), 
        null != a.foodArray[t][a.foodIndexArray[t]].专精 && (a.propertyList[this.data.专精].value += a.foodArray[t][a.foodIndexArray[t]].专精);
        for (t = 0; t < a.stoneArray.length; ++t) null != a.stoneArray[t][a.stoneIndexArray[t]].属性 && (a.propertyList[this.data.属性].value += a.stoneArray[t][a.stoneIndexArray[t]].属性), 
        null != a.stoneArray[t][a.stoneIndexArray[t]].攻击 && (a.propertyList[this.data.攻击].value += a.stoneArray[t][a.stoneIndexArray[t]].攻击), 
        null != a.stoneArray[t][a.stoneIndexArray[t]].会心 && (a.propertyList[this.data.会心].value += a.stoneArray[t][a.stoneIndexArray[t]].会心), 
        null != a.stoneArray[t][a.stoneIndexArray[t]].专注 && (a.propertyList[this.data.专注].value += a.stoneArray[t][a.stoneIndexArray[t]].专注), 
        null != a.stoneArray[t][a.stoneIndexArray[t]].急速 && (a.propertyList[this.data.急速].value += a.stoneArray[t][a.stoneIndexArray[t]].急速), 
        null != a.stoneArray[t][a.stoneIndexArray[t]].强度 && (a.propertyList[this.data.强度].value += a.stoneArray[t][a.stoneIndexArray[t]].强度), 
        null != a.stoneArray[t][a.stoneIndexArray[t]].专精 && (a.propertyList[this.data.专精].value += a.stoneArray[t][a.stoneIndexArray[t]].专精);
        for (t = 0; t < a.starArray.length; ++t) "属性" == a.starArray[t].name && (a.propertyList[this.data.属性].value += a.starArray[t].value), 
        "攻击" == a.starArray[t].name && (a.propertyList[this.data.攻击].value += a.starArray[t].value), 
        "会心" == a.starArray[t].name && (a.propertyList[this.data.会心].value += a.starArray[t].value), 
        "专注" == a.starArray[t].name && (a.propertyList[this.data.专注].value += a.starArray[t].value), 
        "急速" == a.starArray[t].name && (a.propertyList[this.data.急速].value += a.starArray[t].value), 
        "强度" == a.starArray[t].name && (a.propertyList[this.data.强度].value += a.starArray[t].value), 
        "专精" == a.starArray[t].name && (a.propertyList[this.data.专精].value += a.starArray[t].value);
        a.propertyList[this.data.攻击].value += .3 * a.propertyList[this.data.属性].value, a.propertyList[this.data.会心].value += .5 * a.propertyList[this.data.属性].value, 
        a.propertyList[this.data.强度].value += .7 * a.propertyList[this.data.属性].value, a.propertyList[this.data.属性].value += 40, 
        a.propertyList[this.data.强度].value += 28, a.propertyList[this.data.会心].value += 20, 
        a.propertyList[this.data.专注].value += 14, a.propertyList[this.data.攻击].value = 1.2 * a.propertyList[this.data.攻击].value, 
        a.propertyList[this.data.攻击].value += 32;
        var s = this.data.jianhe * a.propertyList[this.data.属性].value / 100;
        a.propertyList[this.data.攻击].value += .3 * s * 1.2, a.propertyList[this.data.会心].value += .5 * s, 
        a.propertyList[this.data.强度].value += .7 * s, a.propertyList[this.data.属性].percent = a.propertyList[this.data.属性].value + s, 
        a.propertyList[this.data.攻击].percent = a.propertyList[this.data.攻击].value, a.propertyList[this.data.专精].percent = a.propertyList[this.data.专精].value, 
        a.propertyList[this.data.会心].percent = .075 * a.propertyList[this.data.会心].value + this.data.kanglong, 
        a.propertyList[this.data.专注].percent = .06 * a.propertyList[this.data.专注].value + 80 + this.data.huben, 
        a.propertyList[this.data.强度].percent = a.propertyList[this.data.强度].value, a.propertyList[this.data.急速].percent = a.propertyList[this.data.急速].value / 12, 
        0 == this.data.xlwBuff ? a.propertyList[this.data.会心].percent += 1 : 1 == this.data.xlwBuff ? a.propertyList[this.data.专注].percent += 1 : 2 == this.data.xlwBuff ? a.propertyList[this.data.强度].percent += 10 : 3 == this.data.xlwBuff && (a.propertyList[this.data.急速].percent += 1), 
        -1 != this.data.zhiyouList.indexOf("0") && (a.propertyList[this.data.会心].percent += 1), 
        -1 != this.data.zhiyouList.indexOf("1") && (a.propertyList[this.data.专精].percent += 10), 
        -1 != this.data.zhiyouList.indexOf("2") && (a.propertyList[this.data.强度].percent += 10);
        for (var l in this.data.propertyList) a.propertyList[l].value = this.getDecimal(a.propertyList[l].value), 
        a.propertyList[l].percent = this.getDecimal(a.propertyList[l].percent);
        a.zuizhong = this.getDecimal(a.propertyList[this.data.攻击].value * (1 + a.propertyList[this.data.强度].percent / 1e3)), 
        this.setData(a);
    },
    drawCanvas: function() {
        var a = this, t = new Promise(function(a, t) {
            wx.getImageInfo({
                src: "../../../image/mf_bg_middle.jpg",
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
            e.fillText("古剑奇谭网络版配装器", 250, 40), e.setFontSize(24), e.fillText("门派：妙法    专精：三十六章", 450, 80), 
            e.setFontSize(18);
            for (n = 0; n < a.data.equipList.length; n++) e.fillText(a.data.equipList[n][a.data.equipMutilIndexArray[n][0]].name, 40, 27 * n + 80);
            e.setFontSize(8), e.setFillStyle("#666666");
            for (n = 0; n < a.data.equipList.length; n++) e.fillText(a.data.equipList[n][a.data.equipMutilIndexArray[n][0]].description, 40, 27 * n + 90);
            e.setFontSize(12);
            for (n = 0; n < a.data.equipList.length; n++) e.fillText(a.data.equipList[n][a.data.equipMutilIndexArray[n][0]].from, 200, 27 * n + 88);
            for (n = 0; n < a.data.levelList.length; n++) e.fillText(a.data.equipList[n][a.data.equipMutilIndexArray[n][0]].level.split(";")[a.data.equipMutilIndexArray[n][1]], 280, 27 * n + 88);
            e.setFontSize(12), e.fillText(a.data.stoneArray[0][a.data.stoneIndexArray[0]].nameShort, 200, 103), 
            e.fillText(a.data.stoneArray[1][a.data.stoneIndexArray[1]].nameShort, 280, 103), 
            e.fillText(a.data.stoneArray[2][a.data.stoneIndexArray[2]].nameShort, 200, 130), 
            e.fillText(a.data.stoneArray[3][a.data.stoneIndexArray[3]].nameShort, 280, 130), 
            e.fillText(a.data.stoneArray[4][a.data.stoneIndexArray[4]].nameShort, 200, 157), 
            e.fillText(a.data.stoneArray[5][a.data.stoneIndexArray[5]].nameShort, 280, 157), 
            e.fillText(a.data.stoneArray[6][a.data.stoneIndexArray[6]].nameShort, 200, 346), 
            e.fillText(a.data.stoneArray[7][a.data.stoneIndexArray[7]].nameShort, 200, 427), 
            e.fillText(a.data.stoneArray[8][a.data.stoneIndexArray[8]].nameShort, 200, 454), 
            e.fillText(a.data.enchantArray[0][a.data.enchantIndexArray[0]].name, 200, 76), e.fillText(a.data.enchantArray[1][a.data.enchantIndexArray[1]].name, 200, 184), 
            e.fillText(a.data.enchantArray[2][a.data.enchantIndexArray[2]].name, 200, 211), 
            e.fillText(a.data.enchantArray[3][a.data.enchantIndexArray[3]].name, 200, 238), 
            e.fillText(a.data.enchantArray[4][a.data.enchantIndexArray[4]].name, 200, 265), 
            e.fillText(a.data.enchantArray[5][a.data.enchantIndexArray[5]].name, 200, 292), 
            e.fillText(a.data.enchantArray[6][a.data.enchantIndexArray[6]].name, 200, 319), 
            e.setFontSize(24), e.setFillStyle("black"), e.fillText("星蕴", 450, 130), e.setFontSize(18);
            for (n = 0; n < a.data.starArray.length; n++) e.fillText(a.data.starArray[n].name, 450 + n % 2 * 100, 25 * (n - n % 2) / 2 + 155);
            e.setTextAlign("right"), e.setFillStyle("#666666");
            for (n = 0; n < a.data.starArray.length; n++) e.fillText(a.data.starArray[n].value, 530 + n % 2 * 100, 25 * (n - n % 2) / 2 + 155);
            e.setTextAlign("left"), e.setFontSize(24), e.setFillStyle("black"), e.fillText("附加属性", 450, 265), 
            e.setFontSize(18);
            for (var r = new Array(), n = 0; n < a.data.foodArray.length; n++) 0 != a.data.foodIndexArray[n] && r.push(a.data.foodArray[n][a.data.foodIndexArray[n]].nameShort);
            0 != a.data.huben && r.push("虎贲" + a.data.huben + "%命中"), 0 != a.data.kanglong && r.push("亢行" + a.data.kanglong + "%会心"), 
            0 != a.data.jianhe && r.push("兼和" + a.data.jianhe + "%主属性"), 0 == a.data.xlwBuff ? r.push("血露薇1%会心") : 1 == a.data.xlwBuff ? r.push("血露薇1%专注") : 2 == a.data.xlwBuff ? r.push("血露薇1%强度") : 3 == a.data.xlwBuff && r.push("血露薇1%急速"), 
            -1 != a.data.zhiyouList.indexOf("0") && r.push("挚友1%会心"), -1 != a.data.zhiyouList.indexOf("1") && r.push("挚友1%专精"), 
            -1 != a.data.zhiyouList.indexOf("2") && r.push("挚友1%强度");
            for (n = 0; n < r.length; n++) e.fillText(r[n], 450, 23 * n + 290);
            e.setFontSize(24), e.setFillStyle("black"), e.fillText("面板", 700, 130), e.setFontSize(18);
            for (n = 0; n < a.data.propertyList.length; n++) e.setFillStyle("black"), e.fillText(a.data.propertyList[n].name, 700, 25 * n + 155), 
            e.setFillStyle("#666666"), e.setTextAlign("right"), e.fillText(a.data.propertyList[n].percent, 800, 25 * n + 155), 
            e.setTextAlign("left");
            e.setFillStyle("black"), e.fillText("最终", 700, 330), e.setFillStyle("#666666"), 
            e.setTextAlign("right"), e.fillText(a.data.zuizhong, 800, 330), e.setTextAlign("left"), 
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