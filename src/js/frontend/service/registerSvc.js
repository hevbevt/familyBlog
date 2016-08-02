/**
 * Created by duanhe on 16/8/2.
 */
var RegisterSvc = function (HTTP) {
    return{
        register: function (param) {
            var config = {
                method: 'POST',
                url: '/api/reg',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param({
                    'name': param.name,
                    'password': param.password,
                    'password-repeat': param.password_re,
                    'email': param.email
                })
            };
            return HTTP.svc(config);
        }
    }
};
blog.factory('RegisterSvc', ['HTTP', RegisterSvc]);