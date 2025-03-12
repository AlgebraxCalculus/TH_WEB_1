document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("messageModal");
    let finishButton = document.getElementById("finishButton");
    let closeModalBtn = document.getElementById("closeModal");

    // Hiển thị modal khi bấm nút "Kết thúc"
    if (modal && finishButton && closeModalBtn) {
        finishButton.addEventListener("click", function () {
            modal.style.display = "block";
        });

        closeModalBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }


    // Xử lý sự kiện click vào button trong grid để cuộn đến câu hỏi tương ứng
    let questionButtons = document.querySelectorAll(".grid button");

    questionButtons.forEach(button => {
        button.addEventListener("click", function () {
            let questionNumber = this.textContent.trim(); // Lấy số từ nút bấm
            let questionId = "q" + questionNumber; // Tạo ID câu hỏi tương ứng

            let questionElement = document.getElementById(questionId);
            if (questionElement) {
                questionElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Thêm chức năng đổi màu button khi câu hỏi được hoàn thành
    function updateButtonState(questionId) {
        let button = document.querySelector(`.grid button:nth-child(${parseInt(questionId.replace("q", ""))})`);
        if (button) {
            button.style.backgroundColor = "green";
            button.style.color = "white";
        }
    }

    // Xử lý sự kiện cho radio button (câu hỏi trắc nghiệm)
    let radioGroups = document.querySelectorAll(".question input[type='radio']");
    radioGroups.forEach(radio => {
        radio.addEventListener("change", function () {
            updateButtonState(this.name); // 'this.name' chính là 'q8' chẳng hạn
        });
    });

    let checkBoxGroups = document.querySelectorAll(".question input[type='checkbox']");
    checkBoxGroups.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        let checkboxes = document.querySelectorAll(`input[name="${this.name}"]`);
        let isChecked = Array.from(checkboxes).some(cb => cb.checked);
        if (isChecked) {
            updateButtonState(this.name);
        }
    });
});

    // Xử lý sự kiện cho textarea (câu hỏi tự luận)
    let textAreas = document.querySelectorAll(".question textarea");
    textAreas.forEach(textarea => {
        textarea.addEventListener("input", function () {
            if (this.value.trim() !== "") {
                updateButtonState(this.name); // 'this.name' chính là 'q31' chẳng hạn
            }
        });
    });
});
