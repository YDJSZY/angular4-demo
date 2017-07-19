/**
 * Created by luwenwe on 2017/7/12.
 */
var dataFields = {
    fields : [
        {
            "name": "ID",
            "fieldName": "id",
            "show": true,
            "use": true,
            "sort": true
        },
        {
            "name": "上渠道",
            "fieldName": "origin_name",
            "show": true,
            "use": true,
            "editShow":true,
            "model":"editingObject.origin",
            "inputType":"select",
            "placeholder":"必填",
            "dataSource":"origins",
            "required": true,
            "validate": function (obj) {
                if(!obj.hasOwnProperty("origin") || !obj["origin"]) return "required";
            },
        },
        {
            "name": "总收益",
            "fieldName": "total",
            "show": true,
            "use": true,
            "editShow":true,
            "model":"editingObject.total",
            "inputType":"text",
        }
    ],
    fieldShow : {
        id: true,
        origin_name:true,
        total:true
    }
}

export {dataFields}