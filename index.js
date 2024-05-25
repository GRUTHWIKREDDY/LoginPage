<script>
        function fun() {
            document.getElementById("login_content").style.display = "block";
            document.getElementById("signup_content").style.display = "none";
        }
    
        function fun1() {
            document.getElementById("signup_content").style.display = "block";
            document.getElementById("login_content").style.display = "none";
        }
    
        function fun11() {
            var nameField = document.getElementById("name");
            var emailField = document.getElementById("email");
            var strongPasswordField = document.getElementById("Strong_password");
            var passwordShowField = document.getElementById("password_show");
            var error_mgs = document.getElementById("bug1");
    
            if (nameField.value === "" || emailField.value === "") {
                error_mgs.textContent = "*Please fill in all the fields";
                document.child.append(error_mgs);
                alert("Please fill in all the fields");
                strongPasswordField.disabled = true;
                passwordShowField.disabled = true;
            } else {
                error_mgs.textContent = "account created";
                document.child.append(error_mgs);
                strongPasswordField.disabled = false;
                passwordShowField.disabled = false;
            }
        }
    
        function remove() {
            document.getElementById("login_content").style.display = "none";
            document.getElementById("signup_content").style.display = "none";
        }
    
        function show() {
            var x = document.getElementById("password_show");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }
    
        let pass = document.getElementById("Strong_password");
        pass.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("eye").click();
            }
        });
    
        let input1 = document.getElementById("name");
        input1.addEventListener("keydown", (event) => {
            // Check if the pressed key is a number
            if (event.key >= '0' && event.key <= '9') {
                let error_mgs = document.getElementById("bug1");
                error_mgs.textContent = "*You can't use numbers in the username";
                document.child.append(error_mgs);
                event.preventDefault(); // Prevent the input
            }
        });
     
        let input2 = document.getElementById("Strong_password");
        input2.addEventListener("keydown", (event) => {
            var nameField = document.getElementById("name");
            var emailField = document.getElementById("email");
            var strongPasswordField = document.getElementById("Strong_password");
            var error_mgs = document.getElementById("bug1");
    
            if (nameField.value === "" || emailField.value === "") {
                alert("Please fill in all the fields");
                error_mgs.textContent = "*Please fill in all the fields before entering the password";
                document.childNodes.append(error_mgs);
                event.preventDefault();
                strongPasswordField.disabled = true;
            } else {
                strongPasswordField.disabled = false;
            }
        });
    
        // function fun111() {
        //     var strongPasswordField = document.getElementById("Strong_password");
        //     var passwordShowField = document.getElementById("password_show");
        //     if (strongPasswordField.value === passwordShowField.value) {
        //         alert("password matched");
        //         console.log(passwordShowField.value);
        //     } else {
        //         alert("password not matched");
        //     }
        // }
    
        let checkfull = document.getElementById("finalsubmit");
        checkfull.addEventListener("click", (event) => {
            var strongPasswordField = document.getElementById("Strong_password");
            var passwordShowField = document.getElementById("password_show");
            var error_mgs = document.getElementById("bug1");
    
            if (strongPasswordField.value == passwordShowField.value //&& strongPasswordField.value != "" && passwordShowField.value != ""
            ) {
                alert("password matched");
                error_mgs.textContent = "Password matched";
                console.log(passwordShowField.value);
            } else {
                alert("password not matchedd");
                error_mgs.appendChild.textContent = "Password not matchedd";
            }
        });
    </script>