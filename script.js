const $ = document;

const wrapper = $.querySelector(".wrapper");
const input = $.querySelector("input");
const button = $.querySelector("button");
const img = $.querySelector("img");


button.addEventListener("click", () => {
    let inputValue = input.value.trim();


    if (inputValue) {
        button.innerHTML = "Please wait while your QR is generating...";


        img.setAttribute(
            "src",
            `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`
        );

        img.addEventListener("load", () => {
            wrapper.classList.add("active");
            button.innerHTML = "Create Custom QR";
        });
    }
});
input.addEventListener("keyup", () => {
    if (!input.value.trim()) {
        wrapper.classList.remove("active");
    }
});