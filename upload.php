<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $targetDir = "images/";
    $targetFile = $targetDir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Kiểm tra xem có phải là ảnh không
    $check = getimagesize($_FILES["file"]["tmp_name"]);
    if ($check === false) {
        echo "File không phải là ảnh.";
        $uploadOk = 0;
    }

    // Kiểm tra nếu file đã tồn tại
    if (file_exists($targetFile)) {
        echo "Xin lỗi, file đã tồn tại.";
        $uploadOk = 0;
    }

    // Giới hạn kích thước file (5MB)
    if ($_FILES["file"]["size"] > 5000000) {
        echo "Xin lỗi, file quá lớn.";
        $uploadOk = 0;
    }

    // Chỉ cho phép một số định dạng ảnh
    if (!in_array($imageFileType, ["jpg", "jpeg", "png", "gif"])) {
        echo "Chỉ chấp nhận các định dạng JPG, JPEG, PNG, GIF.";
        $uploadOk = 0;
    }

    // Nếu không có lỗi, tiến hành upload
    if ($uploadOk == 1) {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
            echo "Ảnh " . htmlspecialchars(basename($_FILES["file"]["name"])) . " đã được tải lên.";
        } else {
            echo "Có lỗi xảy ra khi tải ảnh.";
        }
    }
} else {
    echo "Yêu cầu không hợp lệ.";
}
?>
