/*
Bài 3: Đếm cặp số theo điều kiện tổng và tránh trùng (vòng lặp lồng nhau + count)
Viết hàm countPairsDivisibleBy13() tìm và in các cặp số nguyên (a, b) với a, b nằm trong khoảng từ 1 đến 60 sao cho:

Tổng (a + b) chia hết cho 13.

Mỗi cặp chỉ được đếm 1 lần ((1, 12) và (12, 1) tính là một).

Lưu ý điểm mới: Lần này không cho phép hai số bằng nhau (a phải khác b).

Yêu cầu:

In mỗi cặp hợp lệ theo mẫu: (a, b) = tong (ví dụ (1, 12) = 13).

Cuối cùng in ra tổng số cặp đếm được (chỉ in một lần sau khi kết thúc vòng lặp).
*/

function countPairsDivisibleBy13() {
    let count = 0;
    for (i = 1; i <= 60; i++) {
        for (j = i + 1; j <= 60; j++) {
            if ((i + j) % 13 === 0) {
                count++;
                console.log(`(${i}, ${j}) = ${i + j}`);
            }
        }
    }
    console.log(`Tổng số cặp chia hết cho 13 là: ${count}`);
}
countPairsDivisibleBy13()