/**
 * Created by duanhe on 16/8/2.
 */
blog.factory('HTTP', ['$http','$q', function($http,$q){
    return {
        svc:function(config,onSuccess){
            var deferred = $q.defer();
            config.method = config.method || 'GET';
            $http(config).success(function(resp){
                if(resp && resp.ret){
                    if(onSuccess) deferred.resolve(onSuccess(resp));
                    else deferred.resolve(resp);
                }else{
                    if(resp) deferred.reject(resp.errorMsg);
                    else deferred.reject(Message.serverError);
                }
            }).error(function(){
                deferred.reject(Message.serverError);
            });
            return deferred.promise;
        },
    };
}]);