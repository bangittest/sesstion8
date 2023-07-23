function checkColor() {
    let colorInput = document.getElementById("color").value;
    let result = document.getElementById("result");

    if (colorInput === "xanh" || colorInput === "đỏ" || colorInput === "vàng") {
        result.innerHTML = "Màu bạn vừa nhập là: " + colorInput;
    } else {
        result.innerHTML = "Màu không hợp lệ!";
    }
}
