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
                        $('#empDataDiv').empty();
                        $("#dataDiv").html(result);
                        if (result.toString() == "Hello admin, your secured information is .......") {
                            getEmpData();

                        }
                        //alert('Success');
                    })
                    .fail(function (xhr, status, error) {
                        $("#dataDiv").html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                        //alert('Fail');
                    });
            }
        });

      
            function getEmpData() {
                HomeJService.getEmpData(1)
                    .then(function (result) {
                        var html;
                        html = "<table><tr><th>Emp ID</th><th>First Name</th><th>Last Name</th><th>Contact</th></tr>";
                        for (var i = 0; i < result.length; i++) {
                            html = html + "<tr><td>" + result[i].EmpID + "</td><td>" + result[i].FirstName + "</td><td>" + result[i].LastName + "</td><td>" + result[i].Contact + "</td></tr>";
                        }
                        html = html + "</table>";
                        $('#empDataDiv').append(html);
                    })
                    .fail(function () { });
            }
        
    });
}(HomeJService)


