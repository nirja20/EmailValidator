console.log("This is my script");

const submitBtn = document.getElementById("submitBtn");
const resultCont = document.getElementById("resultCont");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`;

    let key = "ema_live_V3WQ8l0zvxQsjLrSV6LGntzSvFGzQUJILgg8qRs1";

    // Get user input 
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("username").value 

    console.log("Checking email:", email);

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    try {
        let res = await fetch(url);
        let result = await res.json();

        let str = ``;
        for (let key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") {
                str += `<div><strong>${key}</strong>: ${result[key]}</div>`;
            }
        }

        resultCont.innerHTML = str;
    } catch (error) {
        resultCont.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
});
