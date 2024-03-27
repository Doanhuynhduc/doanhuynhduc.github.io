$(document).ready(function(){
    // Ngày cụ thể trong quá khứ (định dạng yyyy-mm-dd hh:mm:ss)
    var ngayXua = new Date('2022-02-14');

    // Hàm cập nhật kết quả
    function capNhatKetQua() {
        // Ngày hiện tại
        var ngayHienTai = new Date();
        
        // Tính số lượng milliseconds giữa ngày hiện tại và ngày cụ thể trong quá khứ
        var soMilliseconds = ngayHienTai - ngayXua;
        
        // Tính số năm, tháng, ngày, giờ, phút, giây
        var soNam = ngayHienTai.getFullYear() - ngayXua.getFullYear();
        var soThang = ngayHienTai.getMonth() - ngayXua.getMonth();
        var soNgay = ngayHienTai.getDate() - ngayXua.getDate();
        var soGio = ngayHienTai.getHours() - ngayXua.getHours();
        var soPhut = ngayHienTai.getMinutes() - ngayXua.getMinutes();
        var soGiay = ngayHienTai.getSeconds() - ngayXua.getSeconds();
        
        // Điều chỉnh kết quả nếu số giây, phút, giờ, ngày âm
        if (soGiay < 0) { soGiay += 60; soPhut -= 1; }
        if (soPhut < 0) { soPhut += 60; soGio -= 1; }
        if (soGio < 0) { soGio += 24; soNgay -= 1; }
        if (soNgay < 0) {
            var ngayTruoc = new Date(ngayHienTai.getFullYear(), ngayHienTai.getMonth(), 0);
            soNgay += ngayTruoc.getDate();
            soThang -= 1;
        }
        if (soThang < 0) { soThang += 12; soNam -= 1; }
        
        // Hiển thị kết quả
        $('.year_time').html(soNam);
    $('.month_time').html(soThang);
    $('.day_time').html(soNgay);
    $('.hour_time').html(soGio);
    $('.minutes_time').html(soPhut);
    $('.seconds_time').html(soGiay);
    }

    // Cập nhật kết quả ban đầu
    capNhatKetQua();

    // Cập nhật kết quả sau mỗi giây
    setInterval(capNhatKetQua, 1000);


});