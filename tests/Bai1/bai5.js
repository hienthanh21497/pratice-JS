/*
Bài 5: Hàm lọc và tổng hợp báo cáo đơn hàng (function + for...of / filter + map)
Cho danh sách đơn hàng:

JavaScript
const orders = [
  { id: "ORD-01", customer: "Mario", total: 1250, status: "paid" },
  { id: "ORD-02", customer: "Luigi", total: 450, status: "pending" },
  { id: "ORD-03", customer: "Peach", total: 3200, status: "paid" },
  { id: "ORD-04", customer: "Toad", total: 800, status: "cancelled" },
  { id: "ORD-05", customer: "Yoshi", total: 1500, status: "paid" }
];
Viết hàm buildPaidSummary(orderList, minTotal) nhận vào mảng đơn hàng và mức tiền tối thiểu:
Lọc các đơn có status === "paid" và total >= minTotal.
Dùng vòng lặp (ví dụ for...of hoặc for thường) để tính tổng doanh thu của các đơn hợp lệ này.
Tạo mảng dòng báo cáo bằng .map(...) theo mẫu:"ORD-03 - Peach: 3,200 coins"
return một object gồm: { count, totalFormatted, lines } (trong đó totalFormatted có dấu phẩy hàng nghìn bằng .toLocaleString("en-US")).
*/
const orders = [
  { id: "ORD-01", customer: "Mario", total: 1250, status: "paid" },
  { id: "ORD-02", customer: "Luigi", total: 450, status: "pending" },
  { id: "ORD-03", customer: "Peach", total: 3200, status: "paid" },
  { id: "ORD-04", customer: "Toad", total: 800, status: "cancelled" },
  { id: "ORD-05", customer: "Yoshi", total: 1500, status: "paid" }
];
function buildPaidSummary(orderList, minTotal) {
  let orderFilter = orderList.filter(order => {
    return order.status === "paid" && order.total >= minTotal;
  })

  let tongDoanhThu = 0;
  for (const order of orderFilter) {
    tongDoanhThu += order.total
  };

  let baoCao = orderFilter.map(order => `${order.id} - ${order.customer}: ${order.total.toLocaleString("en-US")} coins`);

  return {
    count: orderFilter.length,
    totalFormatted: tongDoanhThu.toLocaleString("en-US"),
    lines: baoCao
  };
}
console.log (buildPaidSummary(orders, 1200));