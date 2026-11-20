/*
Bài 4: Tìm người chơi đạt mốc điểm cao nhất (find hoặc filter + map)
Dùng lại mảng racers ở Bài 2:

Lọc ra tất cả người chơi có points >= 950.

Chỉ lấy ra danh sách tên của những người đó (dạng mảng chuỗi ["Bowser", "Rosalina", "Daisy"] — lưu ý thứ tự phụ thuộc vào việc bạn sort trước hay sau khi lọc).

Thử tự kiểm tra xem nếu đổi thứ tự giữa filter và map thì kết quả có thay đổi không.
*/

const racers = [
    { name: "Toad", points: 750 },
    { name: "Bowser", points: 1200 },
    { name: "Daisy", points: 950 },
    { name: "Wario", points: 600 },
    { name: "Rosalina", points: 1200 }
];
let racersFilter = racers.filter(racer => racer.points >= 950);
let racersSorted = racersFilter.sort ((a,b) => b.points - a.points);
let racersMap = racersSorted.map (racer => racer.name);
console.log(racersMap);
