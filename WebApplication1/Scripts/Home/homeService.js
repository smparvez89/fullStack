﻿var HomeJService = function () {
    var validatePassword, getNames;

    validatePassword = function validatePassword(userName, password) {
        //var form = $('#__AjaxAntiForgeryForm');
        //var token = $('input[name="__RequestVerificationToken"]', form).val();
        var defer = $.Deferred();
        $.ajax({
            type: "POST",
            url: "/Home/GetSecuredData",
            //contentType: "application/json; charset=utf-8",
            data: {
                "userName": + userName.toString(),
                "password": + password.toString() 
            },
            dataType: "html",
            success: function (result, status, xhr) {
                defer.resolve(result);
            },
            error: function (xhr, status, error) {
                defer.reject(xhr, status, error);
            }
        });

        return defer.promise();
    };

    return {
        validatePassword: validatePassword

    }
}();