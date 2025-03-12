function validateForm() {
    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let id_card = document.getElementById("id-card").value.trim();
    let address = document.getElementById("address").value.trim();

    if (!name || !dob || !id_card || !address) {
        alert("Vui lòng nhập đầy đủ thông tin trước khi vào thi!");
        return;
    }

    // Kiểm tra CCCD phải là 12 chữ số
    if (id_card.length !== 12 || !/^\d+$/.test(id_card)) { 
        alert("Số CCCD không hợp lệ!");
        return;
    }

    // Kiểm tra ngày sinh không vượt quá ngày hiện tại
    let dobDate = new Date(dob);
    let currentDate = new Date();

    if (dobDate > currentDate) {
        alert("Ngày sinh không hợp lệ!");
        return;
    }

    // Nếu hợp lệ, chuyển hướng đến trang khảo sát
    window.location.href = 'Survey.html';
}
