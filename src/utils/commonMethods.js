var commonMethods =  {
    toggleDetail: function(obj) {
        if(!obj) return false;
        obj.showDetail = !obj.showDetail;
        return obj;
    },

    isDetailShown:function (obj) {
        if(!obj) return false;
        return obj.showDetail;
    },

    runTop :function (){
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    },

    emptyPropetyValue: function (obj,exc) {
        var o = $.extend({},obj);
        var propetyCount = Object.keys(obj).length,t = 0;
        if(exc){
            delete o[exc];
            propetyCount = Object.keys(o).length;
        }
        for(var p in o) {
            if(o.hasOwnProperty(p) && !o[p]) t++;
        }
        if(t == propetyCount) return true;
        return false;
    },

    findObjectById:function (objectList, id) {
        for(var i = 0; i < objectList.length; ++i) {
            var obj = objectList[i];
            if(obj.id == id) {
                return obj;
            }
        }
        return null;
    },

    findObjectIndexById:function (objectList, id) {
        for(var i = 0; i < objectList.length; ++i) {
            var obj = objectList[i];
            if(obj.id == id) {
                return i;
            }
        }
        return null;
    },

    uploadFile: function (myFile,url,filename) {
        var formData = new FormData();
        formData.append(filename || "filename", myFile[0]);
        return this.http({
            "url": this.makeUrl(url),
            "data": formData,
            "method": "POST",
            "headers": {'Content-Type': undefined},
            "transformRequest": angular.identity,
        })
    },

    getUsers: function (page,search) {
        var params = {search:search || "",page:page || 1,page_size:20}
        return this.http({
            url:"/api/v1/admin/novel_users/",
            params:params,
            method:"GET"
        })
    },

    parseUsers: function (res) {
        var results = [];
        for(var r of res.data.results){
            var obj = {id:r.id,name:r.wechat.nickname+"("+r.username+")"};
            results.push(obj);
        }
        return results;
    },

    exportFile: function (url) {
        this.http({
            "url":this.makeUrl(url),
            "method":"GET",
            "params":this.loadObjectParams
        }).then(function (response) {
            if(response.data.success){
                this.toaster.pop("success","",response.data.message);
                return;
            }
            this.toaster.pop("error","",response.data.message);
        }.bind(this))
    },

    backTop: function(){
        var timer = null;
        var back_top = document.getElementById("back_top");
        var clientH = document.documentElement.clientHeight||document.body.clientHeight;
        window.onscroll = function(){
            var oTop = document.documentElement.scrollTop||document.body.scrollTop;
            if(oTop >= clientH){
                back_top.style.display="block";
            }
            else{
                back_top.style.display="none";
            }
        }
        back_top.onclick = function(){
            timer = setInterval(function(){
                var iTop = document.documentElement.scrollTop||document.body.scrollTop;
                var speed = Math.floor(-iTop/5);
                document.documentElement.scrollTop=document.body.scrollTop=iTop+speed;
                if(iTop==0){
                    clearInterval(timer);
                }
            },30)
        }
    },//回到顶部
}

module.exports = commonMethods;



