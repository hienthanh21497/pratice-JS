## Phần 1: Điều kiện, vòng lặp

**Bài 1.** Tính tổng các số chẵn từ 1 đến 100.

**Bài 2.** In bảng cửu chương của một số `n` bất kỳ (ví dụ `n = 7`).

**Bài 3.** Cho `let hour = 14`. Dùng `if...else if...else` in ra "Chào buổi sáng" (6-11), "Chào buổi chiều" (12-17), "Chào buổi tối" (18-22), còn lại in "Chúc ngủ ngon".

## Phần 2: Object, array, function

**Bài 4.** Tạo object `hocVien` có `name`, `age`, `"Trường học"` và `khoaHoc` (object con có `name`, `level`). Sau đó:
- In `khoaHoc.name` và `"Trường học"`.
- Thêm thuộc tính `email` và `"số điện thoại"`.
- Xóa thuộc tính `age`.
- In lại toàn bộ object.

**Bài 5.** Viết hàm `tinhChuVi(dai, rong)` dùng `return`. `tinhChuVi(5, 10)` → `30`.

**Bài 6.** Viết hàm `timMax(arr)` trả về số lớn nhất, dùng vòng `for`, không dùng `Math.max`.

**Bài 7.** Viết hàm `demSoLe(arr)` trả về số phần tử lẻ. `demSoLe([1, 2, 3, 4, 5])` → `3`.

## Phần 3: break, continue, vòng lặp nâng cao

**Bài 8.** Dùng `break` để tìm và in số nguyên tố đầu tiên lớn hơn 50.

**Bài 9.** Dùng `continue` để in các số từ 1 đến 20 không chia hết cho 3.

**Bài 10.** Cho object `person` có 4 thuộc tính. Dùng `for...in` in ra dạng `key: value` và đếm số key.

**Bài 11.** Cho `const scores = [85, 42, 91, 67, 55]`. Dùng `forEach` in xếp loại từng điểm (trên 90 là "Xuất sắc", trên 75 là "Giỏi", trên 60 là "Khá", trên 45 là "TB", còn lại là "Yếu"). Làm hai cách: `if...else if` và toán tử điều kiện lồng nhau.

## Phần 4: Hàm tiện ích cho chuỗi và mảng

**Bài 12.** Cho `let email = "   Nguyen.Van.A@Gmail.COM  "`. Chuẩn hóa thành chữ thường, bỏ khoảng trắng, rồi dùng `split("@")` để in riêng username và domain.

**Bài 13.** Đổi `"2024-01-25"` thành `"25/01/2024"` bằng `split`.

**Bài 14.** Với `const numbers = [5, 12, 8, 130, 44, 3]`: lọc các số lớn hơn 10, nhân đôi bằng `map`, rồi sắp xếp giảm dần bằng `sort`.

**Bài 15.** Bắt đầu từ `let arr = [1, 2, 3, 4, 5]`, thực hiện lần lượt và in mảng sau mỗi bước: `push(6)`, `unshift(0)`, chèn `99` vào vị trí 3 bằng `splice`, `pop()`, `shift()`, xóa phần tử ở index 2.

**Bài 16.** Viết hàm `demTu(chuoi)` trả về số từ trong câu, bỏ qua khoảng trắng thừa ở hai đầu. `demTu("  Hoc Playwright cung hoctest  ")` → `4`.

## Phần 5: Bài tổng hợp

**Bài 17.** Mở rộng bài Two Sum:
- (a) `findFirstPair(numbers, target)` chỉ trả về cặp đầu tiên tìm được.
- (b) `findTriplets(numbers, target)` tìm bộ ba có tổng bằng `target`.
- (c) Tự thử các trường hợp biên: mảng rỗng, mảng một phần tử, có số trùng, không có cặp nào.

**Bài 18.** Cho danh sách:
```js
const students = [
  { name: "An", score: 85 },
  { name: "Binh", score: 42 },
  { name: "Chi", score: 91 },
];
```
Viết hàm trả về mảng tên các học viên đạt (điểm trên 60), sắp xếp theo điểm giảm dần. Kết quả mong đợi: `["Chi", "An"]`.