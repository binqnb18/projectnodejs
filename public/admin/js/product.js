// Change Status
console.log("JavaScript is running!");

const buttonsChangeStatus = document.querySelectorAll("[button-change-status]");

if(buttonsChangeStatus.length > 0){
    const formChangeStatus = document.querySelector("#form-change-status");
    const path = formChangeStatus.getAttribute("data-path");

    buttonsChangeStatus.forEach(button => {
        button.addEventListener("click", () => {
            const statusCurrent = button.getAttribute("data-status");
            const id = button.getAttribute("data-id");

            // Kiểm tra xem id có hợp lệ không
            if (!id) {
                console.error("ID sản phẩm không tồn tại hoặc không hợp lệ.");
                return;
            }

            console.log("ID sản phẩm:", id);
            console.log("Trạng thái hiện tại:", statusCurrent);

            let statusChange = statusCurrent == "active" ? "inactive" : "active";

            console.log("Trạng thái mới:", statusChange);

            const action = path + `/${statusChange}/${id}?_method=PATCH`;
            formChangeStatus.action = action;

            // Gửi form để thay đổi trạng thái
            formChangeStatus.submit();
        });
    });
}

// End Change Status    

// Delete Item
const buttonsDelete = document.querySelectorAll("[button-delete]");
if (buttonsDelete.length > 0) {
    const formDeleteItem = document.querySelector("#form-delete-item");
    const path = formDeleteItem.getAttribute("data-path");

    buttonsDelete.forEach(button => {
        button.addEventListener("click", () => {
            const isConfirm = confirm("Bạn có chắc muốn xóa sản phẩm này?");
            if (isConfirm) {
                const id = button.getAttribute("data-id");
                // Xây dựng URL với id của sản phẩm
                const action = `${path}/${id}?_method=DELETE`;
                formDeleteItem.action = action; // Cập nhật action của form
                formDeleteItem.submit(); // Gửi form xóa sản phẩm
            }
        });
    });
}
// End Delete Item



