/**
 * Created by luwenwe on 2017/6/20.
 */
const cm = require("commonMethods");
const _constants = require("constants");
const UploadFile = require("uploadFile");
Function.prototype.before = function (func,context) {
    var self = this;
    return function () {
        func.apply(context,arguments);
        return self.apply(context,arguments);
    }
}//装饰模式

Function.prototype.after = function (func,context) {
    var self = this;
    return function () {
        self.apply(context,arguments);
        return func.apply(context,arguments);
    }
}//装饰模式

class Exclusive {
    constructor(clickTargets,exclusivePanel,showPanelFn){
        this.clickTargets = document.getElementsByClassName(clickTargets);
        this.exclusivePanel = document.getElementById(exclusivePanel);
        this.showPanelFn = showPanelFn;
        this.lastTargetElement = null;
        this.init();
    }

    init() {

    }

    exclusiveWorking(targetElement,showPanelFn) {
        if(this.lastTargetElement && this.lastTargetElement!=targetElement){
            for(var i = 0,l = this.clickTargets.length;i < l;i++){
                this.clickTargets[i].$show = false;
            }
        }
        targetElement.$show = !targetElement.$show;
        if(!targetElement.$show){
            this.exclusivePanel.style.display = "none";
            return;
        }
        showPanelFn();
        this.exclusivePanel.style.display = "block";
        this.lastTargetElement = targetElement;
    }
}

class TableSort {
    constructor(sortData,table,initSort){
        this.sortData = sortData;
        this.tbElement = table;
        this.initSort = initSort;
        this.setSortData();
    }

    setSortData() {
        var sortObj = {}
        for(var field of this.sortData){
            if(field.sort) {
                sortObj[field.fieldName] = true;
            }
        }
        this.sortData = sortObj;
        if(this.initSort){
            var initSort;
            if(this.initSort.indexOf("-")!=-1){
                initSort = this.initSort.split("-")[1];
                this.sortData[initSort] = true;
            }else{
                initSort = this.initSort;
                this.sortData[initSort] = false;
            }
            setTimeout(function () {
                var target = $(this.tbElement).find(".sort[sort-name="+initSort+"]");
                this.beginSort(target,initSort)
            }.bind(this))

        }
    }

    beginSort(target,field) {
        if(this.sortData[field]){
            this.sortData[field] = false;
            $(this.tbElement).find(".sort").removeClass().addClass("fa fa-sort sort");
            $(target).removeClass().addClass("fa fa-sort-amount-desc sort");
            return "-"+field;
        }else{
            this.sortData[field] = true;
            $(this.tbElement).find(".sort").removeClass().addClass("fa fa-sort sort");
            $(target).removeClass().addClass("fa fa-sort-amount-asc sort");
            return field;
        }
    }
}

class EditModel{
    constructor(data){
        this.editDatas = data;
        this.template = "";
    }

    setTemplate(){
        for(var data of this.editDatas){
            if(data.editShow){
                var wrapper = `<div class="col-sm-6 col-md-6 col-xs-12" data-ng-if="${data.switchShowFunc || true}"><div class="form-group">`
                switch (data.inputType) {
                    case "label":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                            <div class="col-sm-8 col-md-8 col-xs-8">
                                <label id="id_${data.fieldName}" name="${data.fieldName}" placeholder="${data.placeholder || ''}" data-ng-bind="${data.model}">
                            </div></div></div>`;
                        break;
                    case "text":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                            <div class="col-sm-8 col-md-8 col-xs-8">
                                <input type="text" id="id_${data.fieldName}" name="${data.fieldName}" placeholder="${data.placeholder || ''}" class="form-control" ng-class="{'warning-border':${data.required} && !${data.model} && ${data.model} !==0}" data-ng-model="${data.model}">
                            </div></div></div>`;
                        break;
                    case "number":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                            <div class="col-sm-8 col-md-8 col-xs-8">
                                <input type="number" id="id_${data.fieldName}" name="${data.fieldName}" placeholder="${data.placeholder || ''}" class="form-control" ng-class="{'warning-border':${data.required} && !${data.model} && ${data.model} !==0}" data-ng-model="${data.model}">
                            </div></div></div>`;
                        break;
                    case "textarea":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                            <div class="col-sm-8 col-md-8 col-xs-8">
                                <textarea id="id_${data.fieldName}" name="${data.fieldName}" placeholder="${data.placeholder || ''}" class="form-control" ng-class="{'warning-border':${data.required} && !${data.model} && ${data.model} !==0}" data-ng-model="${data.model}"></textarea>
                            </div></div></div>`;
                        break;
                    case "switch":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                            <div class="col-sm-8 col-md-8 col-xs-8">
                                <switch id="id_${data.fieldName}" name="${data.fieldName}" data-ng-model="${data.model}"></switch>
                            </div></div></div>`;
                        break;
                    case "select":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                            <div class="col-sm-8 col-md-8 col-xs-8" style="height: 34px;">
                                <ui-select id="id_${data.fieldName}" allow-clear style="padding-bottom: 1px" ng-model="${data.model}" ng-class="{'warning-border':${data.required} && !${data.model} && ${data.model} !==0}" theme="bootstrap">
                                    <ui-select-match allow-clear="true" placeholder="${data.placeholder || ''}">{{$select.selected.description}}</ui-select-match>
                                    <ui-select-choices group-by="'${data.groupBy}'" repeat="target.code as target in ${data.dataSource} | filter: $select.search">
                                        <div ng-bind-html="target.description | highlight: $select.search"></div>
                                    </ui-select-choices>
                                </ui-select>
                            </div></div></div>`;
                        break;
                    case "multiple":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                            <div class="col-sm-8 col-md-8 col-xs-8">
                                <ui-select id="id_${data.fieldName}" style="padding-bottom: 1px;" data-ng-model="${data.model}" multiple ng-class="{'warning-border':${data.required} && !${data.model} && ${data.model} !==0}" theme="bootstrap" close-on-select="false">
                                    <ui-select-match allow-clear="true" placeholder="${data.placeholder || ''}">{{$item.description}}</ui-select-match>
                                    <ui-select-choices group-by="'${data.groupBy}'" repeat="target.code as target in ${data.dataSource} | filter: $select.search">
                                        <div ng-bind-html="target.description | highlight: $select.search"></div>
                                    </ui-select-choices>
                                </ui-select>
                            </div></div></div>`;
                        break;
                    case "paginationSelect":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                                <div class="col-sm-8 col-xs-8 col-md-8">
                                    <pagination-select search="true" get-data="${data.config.getData}" use-pagination="${data.config.usePagination}"
                                                       select-value="${data.config.selectVal}" select-model="${data.model}"
                                                       place-holder="${data.config.placeHolder || '请选择'}" parse-response="${data.config.parseResponse}">
                                    </pagination-select>
                                </div></div></div>`;
                        break;
                    case "date":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                            <div class="col-sm-8 col-md-8 col-xs-8">
                                <input type="text" date-format="${data.format}" min-view="${data.minView}" datepicker id="id_${data.fieldName}" name="${data.fieldName}" placeholder="${data.placeholder || ''}" class="form-control" ng-class="{'warning-border':${data.required} && !${data.model} && ${data.model} !==0}" data-ng-model="${data.model}">
                            </div></div></div>`;
                        break;
                    case "file":
                        this.template+=wrapper+
                            `<label for="id_${data.fieldName}" class="col-sm-3 col-md-3 col-xs-3 control-label">${data.name}</label>
                            <div class="col-sm-8 col-md-8 col-xs-8">
                                <div class="input-group">
                                    <input type="text" id="id_${data.fieldName}" name="${data.fieldName}" placeholder="${data.placeholder || ''}" class="form-control" ng-class="{'warning-border':${data.required} && !${data.model} && ${data.model} !==0}" data-ng-model="${data.model}">
                                    <span class="input-group-btn">
                                        <button class="btn btn-success" data-ng-click="importFile('${data.config.title}','${data.config.uploadFunc}',${data.config.fileId})"><i class="fa fa-upload"></i></button>
                                    </span>
                                </div>
                            </div></div></div>`
                }
            }
        }
        return this.template;
    }
}

var mixin = function(cls,$scope) {
    var mixinCls = cls;//需要聚合的类
    if(Object.prototype.toString.call(cls) !== "[object Array]"){
        mixinCls = [cls]
    };
    return function () {
        var scope = $scope;
        class Target extends BindScope{
            constructor(scope){
                super(scope);
                this.mixin();
                scope.$watch("filters",function (newVal,oldVal) {
                    if(newVal!=oldVal) {
                        this.$scope.loadFirstPage(this.filters);
                    }
                }.bind(this),true)
            }
            mixin(){
                var self = this;
                for(var cls of mixinCls){
                    var $cls = new cls(scope);
                    for(var p in $cls){
                        this[p] = $cls[p];
                    }
                    var setTargetProto = function (obj) {
                        if(obj.__proto__.constructor.name==="Object") return;
                        var _proto_ = Object.getOwnPropertyNames(obj.__proto__);
                        for(var prop of _proto_){
                            if(prop==="constructor") continue;
                            self[prop] = obj.__proto__[prop].bind(scope);
                        }
                        setTargetProto(obj.__proto__);
                    }
                    setTargetProto($cls);
                }
            }
        };
        return Target;
    }
}

class BindScope{
    constructor($scope){
        this.$scope = $scope;
        this.protoProperties = [];
    }

    searchProtoProperties(obj) {
        if(obj.__proto__ && obj.__proto__.constructor!=BindScope){
            this.protoProperties = this.protoProperties.concat(Object.getOwnPropertyNames(obj.__proto__));
            return this.searchProtoProperties(obj.__proto__);
        }
        this.protoProperties = this.protoProperties.concat(Object.getOwnPropertyNames(obj.__proto__));
        return this.export_to_scope(this.protoProperties);
    }

    export_to_scope(protoProperties) {
        for(var p of protoProperties){
            if(p=="constructor") continue;
            this.$scope[p] = this[p].bind(this.$scope);
        }
        return this.$scope;
    }//将Crud的所有方法挂载到当前scope上

    start() {
        for(var p in this){
            if(p.indexOf("$")==-1){
                this.$scope[p] = this[p];
            }
        }
        this.searchProtoProperties(this);
        this.$scope.$on("$viewContentLoaded",function () {
            $('.modal').modal({backdrop: 'static', keyboard: false, show:false});
            this.showLoading();
            this.run();
        }.bind(this.$scope))
    }

    run() {
        this.loadFirstPage();
    }
}

class SimplePage {
    constructor($scope){
        this.apiPrefix = "/api/v1/admin/";
        this.objectList = [];
        this.editingObject = {};
        this.filters = {};
        this.editingMode = "";
        this.editing = false;
        this.booleanArray = [{description:"是",code:true,flag:1},{description:"否",code:false,flag:0}];
        this.enabledFilters = [{code:"true",description:"启用"},{code:"false",description:"禁用"}];
        this.loadObjectParams = {"page":1, "page_size":20, "ordering":"", "search":"", "begin_time":"", "end_time":""};
        this.paginationMessage = {"totalRecords":null,"totalPages":1,"currentPage":1,"pageReady":false,"currentTimestamp":null};
        this._constants = _constants[$scope.currentRoute];
        this.storage = $scope.getLocalStorage();//utils/rootScopeFn.js//getLocalStorage
        this.currRouteStorage = this.storage[$scope.currentRoute] ? this.storage[$scope.currentRoute] : this.storage[$scope.currentRoute] = {};//获取当前页面的localStorage
        this.constantConfig = angular.extend({},this._constants,this.currRouteStorage);
    }

    makeUrl(restApi) {
        if(restApi.startsWith("/")) {
            return "/api/v1/admin" + restApi;
        } else {
            return "/api/v1/admin/" + restApi;
        }
    }

    loadFirstPage (params) {
        params = angular.extend({page:1},params || {});
        this.loadObjects(params,true);
    }//载入第一页

    loadObjects (params,reset) {
        this.loadObjectParams = angular.extend(this.loadObjectParams,params || {});
        this.http({
            "url": this.makeUrl(this.baseUrl),
            "method": "get",
            "params": this.loadObjectParams,
            "headers": {'loading': true}
        }).then(function (response) {
            this.parseResponse(response);
            if(reset) this.paginationMessage.currentTimestamp = new Date().getTime();
        }.bind(this))
    }//载入资源

    parseResponse (response) {
        this.responseStore = response.data;
        this.objectList = response.data.results;
        this.paginationMessage["totalRecords"] = response.data.count;
        this.paginationMessage["totalPages"] = response.data.num_pages;
        this.paginationMessage["pageReady"] = true;
        this.paginationMessage["currentPage"] = this.loadObjectParams.page;
        this.paginationMessage["summary"] = response.data.summary;
        if(this.translateResponse) this.translateResponse();
        return this.objectList;
    }

    runTooltip() {
        setTimeout(function () {
            $("[data-toggle='tooltip']").tooltip();
            $("[data-toggle='popover']").popover();
        },500)
    }

    caculateWidth() {
        setTimeout(function () {
            var child = $(".handle")[0],w = 0;
            $(child).children().each(function (index,item) {
                w+=$(item).outerWidth(true);
            })
            $("#handle").outerWidth(w+60);
        },50)
    }

    dateRangeChange (date,loadObject) {
        this.loadObjectParams.begin_time = new Date(date["beginDate"]).getTime();
        this.loadObjectParams.end_time = new Date(date["endDate"]).getTime();
        this.currRouteStorage.dateRangeName = date.dateRangeName;//当前页面的日期选择
        this.setLocalStorage(this.storage);
        if(loadObject) {
            this.loadFirstPage();
        }
    }//处理发送给后端的日期格式

    render (fieldObj,order) {
        this.currentObject = order;
        var key = fieldObj["fieldName"];
        if(fieldObj["translate"]){
            return fieldObj["render"].apply(this,[order[key],order])
        }
        return order[key];
    }

    setTableSort(element) {
        this.ordersSort = new TableSort(this.dataFields,element || $("#"+this.tableId),this.loadObjectParams.ordering);
    }

    sort (event,field) {
        var o = this.ordersSort.beginSort(event.target,field);
        this.loadObjects({ordering:o});
    }

    quickSearch(keyWord,id) {
        var id = id || "text-search",keyWord = keyWord || "search";
        var textSearch = $("#"+id).val();
        textSearch = textSearch.replace(/\s/g,"");
        this.loadFirstPage({[keyWord]: textSearch});
    }
}

class Crud{
    constructor(){
        this.toasterObj = {"create": "创建成功!", "edit": "编辑成功!","true":"success","false":"error"};
    }

    translateResponse(obj,option) {
        if(obj){
            var i = cm.findObjectIndexById(this.objectList,obj.id);
            this.objectList.splice(i,1,obj);
        }else if(option){
            var i = cm.findObjectIndexById(this.objectList,option.id);
            var obj = angular.copy(cm.findObjectById(this.objectList,option.id));
            obj[option.key] = option.value;
            this.objectList.splice(i,1,obj);
        }
        this.runTooltip();
        if(this.hasBlockType) this._translateResponse(obj,option)
    }

    _translateResponse(obj,option) {
        if(obj){
            var $obj = this.blockRender(obj);
            var i = cm.findObjectIndexById(this.$objectList,$obj.id);
            this.$objectList.splice(i,1,$obj);
        }else if(option){
            var $obj = cm.findObjectById(this.$objectList,option.id);
            $obj["$"+option.key] = option.value;
        }else{
            this.$objectList = []
            for(var $o of this.objectList){
                var $obj = this.blockRender($o);
                this.$objectList.push($obj)
            }
        }
    }

    blockRender(order) {
        this.currentObject = order;
        var obj = {};
        for(var i = 0,l = this.dataFields.length; i < l; i++) {
            var fieldName = this.dataFields[i]["fieldName"]
            var key = fieldName == "id" ? "id" : "$"+fieldName;
            if(this.dataFields[i]["translate"]){
                var func = this.dataFields[i].hasOwnProperty("original") ? "original" : "render";
                var result = this.dataFields[i][func].apply(this,[order[fieldName],order]);
                obj[key] = result;
            }else {
                obj[key] = order[fieldName];
            }
        }
        return obj;
    }

    switchUse(id,enabled,url,field) {
        var obj = {};
        if(field){
            obj[field] = enabled;
        }else{
            obj.enabled = enabled;
        }
        var url = url || this.baseUrl;
        this.http({
            "url":this.makeUrl(url+id+"/"),
            "method":"PATCH",
            "data":obj
        }).then(function (response) {
            if(response.status == 200 || response.status == 201) {
                var e = enabled ? "已启用" : "已禁用";
                this.translateResponse(null,{id:id,key:field || "enabled",value:enabled})
                this.toaster.pop("success","",e);
                return;
            }
            this.toaster.pop("error","","操作失败");
        }.bind(this))
    }

    editCallBack() {}

    createCallBack() {}

    beforeSave(obj) {
        return obj;
    }

    edit (id){
        $("#editModal").modal("show");
        this.modalType = "editType";
        this.editingObject = angular.copy(cm.findObjectById(this.objectList,id));
        this.crud_title = "编辑";
        this.editCallBack();
    }

    create() {
        $("#editModal").modal("show");
        this.modalType = "createType";
        this.crud_title = "新增";
        this.editingObject = {};
        this.createCallBack();
    }

    remove(id) {
        var f = window.confirm("确定删除吗?");
        if(!f) return;
        this.http({
            "url":this.makeUrl(this.baseUrl)+id+"/",
            "method":"DELETE"
        }).then(function (res) {
            if(res.status==200 || res.status==201 || res.status==204){
                this.toaster.pop("success","","删除成功");
                this.loadFirstPage();
                return;
            }
            this.toaster.pop("error","","操作失败");
        }.bind(this))
    }

    clean(obj) {
        var errorList = [],required = false,toasterMessage = [];
        this.validatePass = false;
        for(var i = 0,l = this.dataFields.length;i < l;i++) {
            if(this.dataFields[i]["required"] || this.dataFields[i]["validate"]){
                var mes = this.dataFields[i]["validate"](obj,this);
                if(mes) errorList.push(mes);
            }
        }
        for(var j = 0, t = errorList.length; j < t; j++) {
            if(errorList[j] == "required"){
                required = true;
                continue;
            }
            toasterMessage.push(errorList[j]);
        }
        if(required) toasterMessage.splice(0,0,"必填项不能为空");
        if(toasterMessage.length>0) {
            this.toaster.pop('error', "", toasterMessage.join(";"));
            this.validatePass = false;
            return this.validatePass;
        }
        this.validatePass = true;
        return this.validatePass;
    }

    async save (id) {
        var editingObject = angular.copy(this.editingObject),saveUrl = this.baseUrl;
        if(this.clean(editingObject)==false) return;
        var url,method;
        editingObject = this.beforeSave(editingObject);
        if(!id){
            url = this.makeUrl(saveUrl);
            method = "POST";
        }else{
            url = this.makeUrl(saveUrl+id+"/");
            method = "PUT"
        }
        this.http({
            "url": url,
            "method": method,
            "data": editingObject
        }).then(function (response){
            if (response.status == 200 || response.status == 201) {
                if (id) {
                    this.toaster.pop("success", "", "编辑成功");
                    this.translateResponse(response.data);
                } else {
                    this.loadFirstPage();
                    this.toaster.pop("success", "", "创建成功")
                }
                $("#editModal").modal("hide");
                this.modalType = "";
                return;
            } else{
                this.responseError(response);
            }
        }.bind(this),function (e) {
            this.toaster.pop("error","","操作失败");
            console.debug(e);
        }.bind(this))
    }

    responseError (response) {
        this.toaster.pop("error","","操作失败");
    }

    getRound (val) {
        var btnCls = val ? "btn-success" : "btn-danger", faCls = val ? "fa-check" : "fa-times"
        return `<div class='btn-icon btn-icon-round btn-icon-xs ${btnCls}'><i class='fa ${faCls}'></i></div>`;
    }

    setTooltip (val,count) {
        var _val = this.filter("substrText")(val, count || 20);
        return `<span data-original-title="${val}" data-toggle="tooltip">${_val}</span>`
    }

    importFile(title,uploadFn,fileId) {
        var id = fileId || "file_container";
        document.getElementById(id).innerHTML = "";
        this.uploadFile = new UploadFile(id,true);
        this.uploadBtnTitle = "上传";
        this.uploadFinish = true;
        $("#uploadModal").modal("show");
        this.uploadTitle = title;
        this.uploadFn = this[uploadFn];
    }

    saveUploadFile() {
        var myFile = this.uploadFile.getFiles();
        if(myFile.length==0) {
            this.toaster.pop("error","","请选择要上传的文件。")
            return false;
        }
        this.uploadFinish = false;
        this.uploadBtnTitle = "文件上传中。。。";
        this.uploadFn.apply(this,[myFile]);
    }
}

module.exports = {
    "simplePage":SimplePage,
    "crud":Crud,
    "tableSort":TableSort,
    "editModel":EditModel,
    "exclusive":Exclusive,
    "uploadFile":UploadFile,
    "mixin":mixin
}