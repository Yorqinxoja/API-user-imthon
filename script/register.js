document.addEventListener('DOMContentLoaded', () => {
    const $signupForm = document.querySelector("#signupForm");
    const $inputs = $signupForm.querySelectorAll("input");

    const handleRegisterAction = (e) => {
        e.preventDefault();

        try {
            const user = {
                name: $inputs[0].value,
                email: $inputs[1].value,
                password: $inputs[2].value
            };

            fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "success") {
                    location.replace(location.origin + "/pages/login.html");
                } else {
                    alert("Registration failed: " + data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("An error occurred. Please try again.");
            });
        }   
        catch (error) {
            console.log(error);
            alert("An unexpected error occurred. Please try again.");
        }
    };

    $signupForm.addEventListener('submit', handleRegisterAction);
});
