/*
Bài 2: Xếp hạng người chơi có phân tách huy hiệu (sort + forEach + if / else if / else)
Cho mảng kết quả vòng đua:
JavaScript
const racers = [
  { name: "Toad", points: 750 },
  { name: "Bowser", points: 1200 },
  { name: "Daisy", points: 950 },
  { name: "Wario", points: 600 },
  { name: "Rosalina", points: 1200 }
];
Yêu cầu:
Sắp xếp mảng racers theo points từ cao xuống thấp.
Duyệt từng phần tử kèm chỉ số index và in ra theo quy tắc:
Hạng 1 (index === 0): thêm "🏆 TOP 1:" ở đầu dòng
Hạng 2 (index === 1): thêm "🥈 TOP 2:" ở đầu dòng
Hạng 3 (index === 2): thêm "🥉 TOP 3:" ở đầu dòng
Từ hạng 4 trở đi: thêm "#" + (index + 1) ở đầu dòng
Định dạng điểm số có dấu phẩy hàng nghìn (1,200).
*/
const racers = [
  { name: "Toad", points: 750 },
  { name: "Bowser", points: 1200 },
  { name: "Daisy", points: 950 },
  { name: "Wario", points: 600 },
  { name: "Rosalina", points: 1200 }
];
let racersSort = racers.sort((a,b) => b.sort - a.sort)
racers.forEach(function(racer,i) {
    let xepHang = ""
    if (i === 0) {
        xepHang = `🏆 TOP 1:`
    }
    else if (i ===1) {
        xepHang = `🥈 TOP 2:`
    }
    else if (i === 2) {
        xepHang = `🥉 TOP 3:`
    }
    else {
        xepHang = `# ${i+1}`
    }
    console.log(`${xepHang} ${racer.name} ${racer.points.toLocaleString("en-US")}`)
})
