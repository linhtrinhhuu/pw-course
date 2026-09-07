// Lặp từ 1 tới 100
// Trong mỗi vòng lặp, in ra:
// Nếu giá trị của vòng lặp chia hết cho 2, in “Số <i> là số chẵn”
// Nếu giá trị của vòng lặp không chia hết cho 2, in “Số <i> là số lẻ”

for (let i = 1; i <= 100; i++) {
    let kiemTraChanLe = i % 2;
    if (kiemTraChanLe === 0) {
        console.log("Số " + i + " là số chắn");
    }
    if (kiemTraChanLe !== 0) {
        console.log("Số " + i + " là số lẻ");
    }
}