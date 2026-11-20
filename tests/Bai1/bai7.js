/*
Bài 7: Tìm cặp chỉ số có tổng mục tiêu trong mảng (function + vòng lặp lồng nhau + return)
Khác với các bài đếm bội số trước, lần này bạn làm bài kiểu Two Sum kinh điển:
Viết hàm findTargetPairs(numbers, target) nhận vào mảng số numbers (ví dụ [2, 7, 11, 15, -2, 9]) và số đích target (ví dụ 9):

Dùng vòng lặp lồng nhau (i và j = i + 1) để tìm mọi cặp phần tử khác vị trí có numbers[i] + numbers[j] === target.

Mỗi cặp hợp lệ đẩy vào một mảng kết quả dạng chuỗi, ví dụ "2 + 7 = 9 (index 0 & 1)".

return mảng các chuỗi tìm được (nếu không có cặp nào thì trả về mảng rỗng [])
*/