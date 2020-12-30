/**
 * Khối 1:
 * Chiều dài HCN: length
 * Chiều rộng HCN: width
 * 
 * Khối 2: 
 * Bước 1: Khai báo các biến (length, width, perimeter, acreage)
 * Bước 2: nhập giá trị cho length và width
 * Bước 3: Xây dựng công thức tính toán
 * perimeter = (length + width) *2;
 * acreage = length * width
 * Bước 4: Xuất giá trị perimeter và acreage cho người xem
 * 
 * Khối 3:
 * Chu vi HCN: perimeter
 * Diện tích HCN: acreage
 */

//  Khai báo biến
 var length, width, perimeter, acreage, number, dozens, unit, sum = 0;

 console.log('Bài 4: ');
//  Nhập giá trị

length = 10;
console.log('Chiều dài: ' + length);
width = 5;
console.log('Chiều rộng: ' + width);

// Tính chu vi và diện tích
perimeter = (length + width) * 2;
acreage = length * width;

// In ra chu vi và diện tích cho người dùng

console.log('Chu vi: ' + perimeter +'\n' + 'Diện tích: ' + acreage);
console.log('-------------------------');
console.log('Bài 5: ');
/**
 * Khối 1:
 * Số: number
 * 
 * Khối 2: 
 * Bước 1: Khai báo các biến (number, dozens, unit, sum)
 * Bước 2: nhập giá trị cho number
 * Bước 3: Xây dựng công thức tính toán
 * dozens = number / 10;
 * unit = number % 10;
 * sum = dozens + unit;
 * Bước 4: Xuất giá trị sum cho người xem
 * 
 * Khối 3:
 * Tổng 2 ký số của số vừa nhập: sum
 */

 number = 16;
 console.log('Số: ' + number);

 dozens = Math.floor(number / 10);
 console.log('Số hàng chục: ' + dozens);
 unit = number % 10;
 console.log('Số hàng đơn vị: ' + unit);


 sum = dozens + unit;
 console.log('Tổng 2 ký số của số vừa nhập là: ' + sum);