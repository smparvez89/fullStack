var homeController = function homeController(HomeJService) {
    $(document).ready(function () {
        $("#submit").click(function (e) {
            if ($("#usernameInput").val() == "")
                alert("Username cannot be empty");
            else if ($("#passwordInput").val() == "")
                alert("Password cannot be empty");
            else {

                HomeJService.validatePassword($("#usernameInput").val(), $("#passwordInput").val())
                    .then(function (result) {
                        $("#dataDiv").html(result);
                        //alert('Success');
                    })
                    .fail(function (xhr, status, error) {
                        $("#dataDiv").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        //alert('Fail');
                    });
            }
        });
    });
}(HomeJService)