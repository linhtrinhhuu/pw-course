// Các thông số sức khỏe được tính như sau:

// Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
// Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
// Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10

// Phạm vi áp dụng: Công thức áp dụng cho 100 < chiều cao < 200

// Ví dụ: Nếu bạn cao 1,7m, tức 170cm thì :

// Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
// Cân nặng tối đa là: 70kg
// Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
// Yêu cầu: Tạo file ex2.js, thêm vào code đáp án cho đề bài sau:

// Khai báo chiều cao của bạn (cm)
// In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.

const chieuCaoCuaToi = 171;

// Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
const canNangLyTuong = (chieuCaoCuaToi - 100) * 9 / 10;

// Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
const mucCanToiDa = chieuCaoCuaToi - 100;

// Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
const mucCanToiThieu = (chieuCaoCuaToi - 100) * 8 / 10;

// Phạm vi áp dụng: Công thức áp dụng cho 100 < chiều cao < 200
if (chieuCaoCuaToi > 100 && chieuCaoCuaToi < 200) {
    console.log("Cân cân nặng lý tưởng của bạn là: " + canNangLyTuong + "kg; \nCân nặng tối đa là: " + mucCanToiDa + "kg; \nCân nặng tối thiểu là: " + mucCanToiThieu + "kg.");
}
