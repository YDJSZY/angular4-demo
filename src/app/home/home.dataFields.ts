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
            "sort": true,
            "use": true,
            "edit":true,
            "model":"editingObject.username",
            "inputType":"text",
            "placeholder":"必填",
            "required": true,
            "validators":[{
                "name":"required",
                "required":"required",
                "description":"必填"
            }],
            "validateFunc":function (formValue){
                if(!formValue.hasOwnProperty(this.fieldName) || !formValue[this.fieldName]) return "required";
            },
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
            "required": true,
            "placeholder":"必填",
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
                return value;
            }
        },
        {
            "name": "人数",
            "fieldName": "people",
            "show": true,
            "use": true,
            "edit":true,
            "model":"editingObject.people",
            "inputType":"number",
            "required": true,
            "placeholder":"必填",
            "validators":[{
                "name":"required",
                "required":"required",
                "description":"必填"
            }]
        },
        {
            "name": "选择日期",
            "fieldName": "myDate",
            "show": true,
            "use": true,
            "edit":true,
            "placeholder":"必选",
            "required":true,
           /* "format":"YYYY-MM-DD HH:mm:ss",
            "showTime":true,*/
            "model":"editingObject.myDate",
            "inputType":"date",
            "validators":[{
                "name":"required",
                "required":"required",
                "description":"必选"
            }],
            "render":function (value) {
                return value;
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
            "placeholder":"必选",
            "source":"selectData",
            "mode":"multiple",
            "required":true,
            "validators":[{
                "name":"required",
                "required":"required",
                "description":"必选"
            }],
            "render":function (value) {
                return value;
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
                return value;
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
            "render":function (value) {
                return value;
            }
        },
        {
            "name": "描述",
            "fieldName": "description",
            "show": true,
            "use": true,
            "edit":true,
            "model":"editingObject.description",
            "inputType":"textarea",
            "render":function (value) {
                return value;
            }
        },
    ],
    fieldShow : {
        id: true,
        username:true,
        password:true,
        hobby:true,
        myDate:true,
        confirm:true,
        enabled:true,
        description:true,
        people:true
    }
}

export {dataFields}