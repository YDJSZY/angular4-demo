/**
 * Created by luwenwei on 16-4-28.
 */
define(["angularAMD"],function () {
    return {
        advs_make_default:function (rootScope) {
            var order = {
                "status":1,
                "put_type":1
            };
            if(this.myInformation.user_type==3){
                order.advertiser = this.myInformation.user_id
            }
            return order;
        },

        paymentRecord_make_default: function (){
            var obj = {
                "subject":this.myInformation.username+"广告主充值"
            }
            return obj;
        },

        adCharge_make_default: function () {
            var obj = {
                "operator_type":1
            }
            return obj;
        }
    }
})