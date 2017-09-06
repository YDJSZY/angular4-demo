/**
 * Created by luwenwe on 2017/8/23.
 */
declare var $:any
export class TableSort {
    dataFields:Array<any>
    sortData:Object
    tbElement:any
    initSort:String
    constructor(dataFields,table,initSort?){
        this.dataFields = dataFields;
        this.tbElement = table;
        this.initSort = initSort;
        this.setSortData();
    }

    setSortData() {
        var sortObj = {}
        for(var field of this.dataFields){
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
                var target = $(this.tbElement).find(".sort[sortName="+initSort+"]");
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
