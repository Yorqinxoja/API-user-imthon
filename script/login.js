const $loginForm = document.querySelector("#loginForm");
const $inputs = $loginForm.querySelectorAll("input");

 const handleLoginAction = (e) => {
    e.preventDefault();
    try {
        const values = Array.from($inputs).map(input => input.value);
        const user = {
            email: $inputs [0].value,
            password: $inputs [1].value,
        }
        fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "success") {
                    location.replace(location.origin + "/pages/dashboard.html")
                }
                else {
                    alert("Login failed :" + data.message)
                }
            })
    }   
    catch (error) {
        console.log(error)
    }
}

$loginForm.addEventListener("submit",handleLoginAction);