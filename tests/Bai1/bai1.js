/* 
Bài 1: Lọc và định dạng danh sách vật phẩm (filter + map)
Cho mảng các object vật phẩm trong game:
JavaScript
const items = [
  { name: "Mushroom", price: 100, inStock: true },
  { name: "Star", price: 1500, inStock: false },
  { name: "Fire Flower", price: 350, inStock: true },
  { name: "1-Up Mushroom", price: 2000, inStock: true },
  { name: "Shell", price: 80, inStock: false }
];
Yêu cầu:

Lọc ra các vật phẩm đang còn hàng (inStock === true).

Biến đổi danh sách đó thành mảng chuỗi hiển thị theo mẫu:"[Tên vật phẩm] - [Giá có dấu phẩy ngăn cách hàng nghìn] coins"
(Ví dụ: "Fire Flower - 350 coins", "1-Up Mushroom - 2,000 coins").

In mảng kết quả cuối cùng ra màn hình.
*/
const items = [
  { name: "Mushroom", price: 100, inStock: true },
  { name: "Star", price: 1500, inStock: false },
  { name: "Fire Flower", price: 350, inStock: true },
  { name: "1-Up Mushroom", price: 2000, inStock: true },
  { name: "Shell", price: 80, inStock: false }
];

let itemsFilter = items.filter(item => item.inStock === true)
// console.log(`${items.name} - ${items.price.toLocaleString("en-US")} coins`)
let newItems = itemsFilter.map(item => (`${item.name} - ${item.price.toLocaleString("en-US")} coins`))
    console.log(newItems)