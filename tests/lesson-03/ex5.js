// In ra các giá trị chia hết cho 3 từ 1000 đến 2000
for (let i = 1000; i <= 2000; i++) {
    let kiemTraChiaHetChoBa = i % 3;
    if (kiemTraChiaHetChoBa === 0) {
        console.log(i);
    }
}
