/**
 * Created by Apple on 16/8/25.
 */
function rootScopeFn($http) {
    this.localStorage = window.localStorage;
    this.constants = {};
    this.loading = false;
    this.http = $http;
    
    this.getMyInfo = function () {
        this.http({
            "url":"/api/v1/admin/my_info/",
            "method":"get"
        }).then(function (res) {
            this.myInfo = res.data;
        }.bind(this))
    }

    this.getMyPermission = function (perm) {
        if(this.myInfo.is_superuser) return true;
        return this.myInfo.permissions.indexOf(perm)!=-1;
    }

    this.asOptions = function (enumerationName){
        if(enumerationName == "boolean") {
            return this.booleanConstants;
        }
        var l = this.constants[enumerationName] || [];
        return l;
    };

    this.displayConstant = function (enumerationName, constantValue) {
        if(enumerationName == "boolean") {
            if(constantValue === "0" || !constantValue) {
                return "否";
            } else {
                return "是";
            }
        }
        var l = this.constants[enumerationName] || [];
        for(var i = 0; i < l.length; ++i) {
            if(l[i].code == constantValue) {
                return l[i].description || l[i].name;
            }
        }
        return "";
    };

    this.getConstantArrayValue = function(group, value) {
        var cs = this.constants[group];
        if(!cs) {
            console.log("found invalid constant: " + group + name);
            return -1;
        }
        for(var i = 0; i < cs.length; ++i) {
            if(cs[i][0] === value){
                return cs[i][2];
            }
        }
        return "";
    }

    this.getConstantObjectValue = function(group, name) {
        var cs = this.constants[group];
        if(!cs) {
            console.log("found invalid constant: " + group + name);
            return -1;
        }
        for(var i = 0; i < cs.length; ++i) {
            if(cs[i]["code"] === name){
                return cs[i]["description"];
            }
        }
        return -1;
    }

    this.getConstantList = function(group) {
        var cs = this.constants[group];
        if(!cs) {
            console.log("found invalid constant: " + group + name);
            return [];
        }
        var result = [];
        for(var i = 0; i < cs.length; ++i) {
            result.push([cs[i][2], cs[i][0]]);
        }
        return result;
    }

    this.showLoading = function (global) {
        if(this.loading) return;
        var p, c;
        if(global){
            p = "fakeloader1";
            c = "spinner1";
        }else{
            p = "fakeloader6";
            c = "spinner2";
        }
        $('.' + c).show();
        $("." + p).fadeIn("fast",function () {
            this.loading = true;
        }.bind(this));
    };

    this.hideLoading  = function (global) {
        var p;
        if(global){
            p = "fakeloader1";
        }else{
            p = "fakeloader6";
        }
        $("."+p).fadeOut("fast",function () {
            this.loading = false;
        }.bind(this));
    };

    this.getLocalStorage = function () {
        if(!this.localStorage.hasOwnProperty("order")){
            var storage = {};
            this.setLocalStorage(storage);
        }
        if(!this.localStorage.getItem("order")) return {};
        return JSON.parse(this.localStorage.getItem("order"));
    }
    
    this.setLocalStorage = function (storage) {
        try {
            this.localStorage.setItem("order",JSON.stringify(storage));
        }catch (e){
            console.debug(e)
        }
    }
}

module.exports = rootScopeFn;