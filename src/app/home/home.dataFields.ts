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
            "dataSource":"origins",
            "required": true,
            "validators":[{
                "name":"required",
                "required":"required",
                "description":"必填"
            }],
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
            "name": "爱好",
            "fieldName": "hobby",
            "show": true,
            "use": true,
            "edit":true,
            "model":"editingObject.hobby",
            "inputType":"select",
            "source":"selectData",
            "validators":[{
                "name":"required",
                "required":"required",
                "description":"必选"
            }],
            "render":function (value) {
                return "¥"+value;
            }
        }
    ],
    fieldShow : {
        id: true,
        username:true,
        password:true,
        hobby:true
    }
}

export {dataFields}