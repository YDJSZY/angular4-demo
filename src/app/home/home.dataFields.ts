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
            "name": "用户名",
            "fieldName": "username",
            "show": true,
            "use": true,
            "edit":true,
            "model":"editingObject.username",
            "inputType":"text",
            "placeholder":"必填",
            "hint":"请填写用户名",
            "required": true,
            "validators":[{
                "name":"required",
                "required":"required",
                "description":"必填"
            },],
            "render":function (value) {
                return `<a href="#" style="color: #337ab7;">${value}</a>`
            }
        },
        {
            "name": "密码",
            "fieldName": "password",
            "show": true,
            "use": true,
            "edit":true,
            "model":"editingObject.password",
            "inputType":"password",
            "hint":"请填写密码",
            "required": true,
            "validators":[{
                "name":"required",
                "required":"required",
                "description":"必填"
            },{
                "name":"customValidator",
                "customValidator":function (control){
                    var value = control.value;
                    if(value && (value.length > 16 || value.length < 6)) return {"customValidator":true};
                    return null;
                },
                "description":"6~16"
            }],
            "render":function (value) {
                return "¥"+value;
            }
        },
        {
            "name": "选择日期",
            "fieldName": "myDate",
            "show": true,
            "use": true,
            "edit":true,
            "hint":"请选择日期",
            "placeholder":"开始时间",
            "required":true,
            "model":"editingObject.myDate",
            "inputType":"date",
            "validators":[{
                "name":"required",
                "required":"required",
                "description":"必选"
            }],
            "render":function (value) {
                return "¥"+value;
            }
        },
        {
            "name": "描述",
            "fieldName": "description",
            "show": true,
            "use": true,
            "edit":true,
            "model":"editingObject.enabled",
            "inputType":"textarea",
            "render":function (value) {
                return "¥"+value;
            }
        },
        {
            "name": "爱好",
            "fieldName": "hobby",
            "show": true,
            "use": true,
            "edit":true,
            "model":"editingObject.hobby",
            "inputType":"select",
            "placeholder":"请选择爱好",
            "hint":"这是你的爱好",
            "source":"selectData",
            /*"validators":[{
                "name":"required",
                "required":"required",
                "description":"必选"
            }],*/
            "render":function (value) {
                return "¥"+value;
            }
        },
        {
            "name": "确定",
            "fieldName": "confirm",
            "show": true,
            "use": true,
            "edit":true,
            "model":"editingObject.confirm",
            "inputType":"switch",
            "render":function (value) {
                return "¥"+value;
            }
        },
        {
            "name": "启用",
            "fieldName": "enabled",
            "show": true,
            "use": true,
            "edit":true,
            "model":"editingObject.enabled",
            "inputType":"switch",
            "hint":"开关",
            "render":function (value) {
                return "¥"+value;
            }
        },
    ],
    fieldShow : {
        id: true,
        username:true,
        password:true,
        hobby:true,
        checkbox:true,
        myDate:true,
        enabled:true
    }
}

export {dataFields}