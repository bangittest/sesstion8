// let x = 1;
// let y = 1;
// let z = '1';
// //toán tưr so sánh == chỉ có giá trị, không so sánh kiểu dữ liệu
// let rs1 = (x === y) // true
// let rs2 = (x == z)

// console.log(rs1, rs2);

// //toán tử so sánh === so sánh giá trị lẫn so sánh kiểu dữ liệu
// let rs3 = (x === y) //true
// let rs4 = (x === z) //false

// console.log(rs3, rs4);

// //so sánh khác nhau "!=" "!=="
// console.log(x != y)//false
// console.log(x != z)//false

// console.log(x !== y)//false
// console.log(x !== z)//true

// console.log(2 >= 2)
// let number = 5;
// //1 số chia hết cho 3
// let condition1 = number % 3 == 0;
// //1 số chia hết cho 5
// let condition2 = number % 5 == 0;
// // vừa chi hết cho 3 vừa chi hết cho 5
// let condition3 = condition1 && condition2;
// // hoặc chia hết cho 3 hoặc chia hết cho 5
// let condition4 = condition1 || condition2;
// console.log("condition1" + condition1);
// console.log("condition2" + condition2);
// console.log("condition3" + condition3);
// console.log("condition4" + condition4);
// //let dk =(number%3 ==0);
// console.log(!condition1);
// console.log(!condition3);

// // number = undefined;

// console.log(typeof (number));


// let condition = (4 || 3 % 5 == 0 && 4 > 3 || 5 - 6 > 0)
// //nếu x%2 ==0 thì x chia hết cho2
// //nếu không thì chia hết cho 2
// //cú pháp
// if(x % 2 == 0){
//     // nếu diều kiện đúng
//     console.log(x + "chia hết cho 2 ");
//     console.log (`${x} chia heets cho 2`)
// }else {
//     // nếu điều kiện sai
//     console.log(`${x} khong chia hết cho 2`)

// }

// // xử lí phần sai
// if (!x % 2 == 0) {
//         console.log(`${x} khong chia hết cho 2`)
// }

// if(!(x%2==0)){
//     console.log(`${x} không chia hêt cho 2`);
// }
// tính diện tích hình tròn dựa vào bán kính nếu nó > 0
// pi*r^2
// let radius = prompt("Nhập vào bán kính hình tròn");
// if(radius>0){
//     // tính diện tích
//     let area= Math.PI * Math.pow(radius,2);
//     document.write(`Diện tích của hình tròn có bán kính
//      ${radius} là ${Math.round(area)}`);
// }

// // let a, b, c;
// // if){

// // }


// //câu lệnh lồng
// if (x % 3 == 0) {
//     //chia het cho3
//     if (x % 5 == 0) {
//         //vừa chia hết cho 3 và vừa chia hết cho 5

//     } else {
//         //chia hết cho 3 nhưng không chia hết cho 5

//     }
// } else {
//     //không chia hết cho 3
//     if (x % 5 == 0) {
//         //chia hết cho 5 nhưng không chia hết cho3
//     } else {
//         //vừa chia hết cho 3 vừa không chia hết cho 5
//     }
// }


// //đánh giá xếp loại của học sinh dự vào điểm trung bình
// if (dtb >= 8.0 && dtb <= 10) {
//     //học sinh giỏi
// } else if (dtb > 7.0) {
//     //khá
// } else if (dtb > 6.5) {
//     //trung bình
// } else {

// }
//     //yếu


// let weight = +prompt(`nhập cân nặng vào đây (kg):`);
// let height = +prompt(`nhập chỉ số chiều cao vao đây (m):`)
// let bmi = weight / (height * height)
// console.log(bmi)

// if (bmi < 18.5) {
//     document.write("Cân nặng thấp");
// } else if (bmi < 25) {
//     document.write("Cân nặng bình thường");
// } else if (bmi < 30) {
//     document.write("Tiền béo phì")
// } else if (bmi < 35) {
//     document.write("Béo phì độ 1")

// } else if (bmi < 40) {
//     document.write("Béo phì cấp độ 2")

// } else {
//    document.write("béo phi cấp độ 3");
// }


//so sánh bằng sưitch case
// let choice = +prompt(`nhập vào 1 số bất kì`);

// switch (choice) {
//     case 0:
//         //khôis code thực thi
//         document.write("số không");
//         break;
//         case 0:
//         //khôis code thực thi
//         document.write("số không");
//         break;
//         case 1:
//         //khôis code thực thi
//         document.write("số một");
//         break;
//         case 2:
//         //khôis code thực thi
//         document.write("số hai");
//         break;
//         case 3:
//         //khôis code thực thi
//         document.write("số ba");
//         break;
//         case 4:
//         //khôis code thực thi
//         document.write("số bốn");
//         break;
//         case 5:
//         //khôis code thực thi
//         document.write("số năm");
//         break;
//         case 6:
//         //khôis code thực thi
//         document.write("số sáu");
//         break;
//         case 7:
//         //khôis code thực thi
//         document.write("số bảy");
//         break;
//         case 8:
//         //khôis code thực thi
//         document.write("số tám");
//         break;
//         case 9:
//         //khôis code thực thi
//         document.write("số chín");
//         break;

//     default:
//         document.write(`không hợp lệ`)
//         break;
// }

// ddem so ngat trong thansg

// let month = +prompt(`nhap so thang can tim`)

// switch (month) {
//     case 1:
//         document.write( `thang1` )

//         break;
//     case 2:
//         document.write(`thang2`)
//         break;
//     case 3:
//         document.write( `thang3` )
//         break;
//     case 4:
//         document.write(`thang4`)
//         break;
//     case 5:
//         document.write( `thang5` )
//         break;
//     case 6:
//         document.write(`thang6`)
//         break;
//     case 7:
//         document.write( `thang7` )
//         break;
//     case 8:
//         document.write(`thang8`)
//         break
//     case 9:
//         document.write(`thang9`)
//         case 7:
//         document.write( `thang7` )
//         break;
//     case 10:
//         document.write(`thang8`)
//         break
//     case 11:
//         document.write(`thang9`)
//         break

//     default:
//         break;
// }
// nhập giá trị a,b,c
// let a = +prompt("Nhập vào số a ");
// let b = +prompt("Nhập vào số b ");
// let c = +prompt("Nhập vào số c ");
// giả sử a lớn nhất

// so sánh a với b và c

// if (a < b || a < c) {
//   // b lớn hơn a
//   if (b < c) {
//     // c lớn nhất
//     console.log(`Giá trị lớn nhất là ${c}`);
//   } else {
//     // b lớn nhất
//     console.log(`Giá trị lớn nhất là ${b}`);

//   }
// } else {
//     // a lớn nhất
//     console.log(`Giá trị lớn nhất là ${a}`);

// }

// if (a > b && a > c) {
//   // a lớn nhất
//   console.log(`Giá trị lớn nhất là ${a}`);
// } else {
//   if (b < c) {
//     // c lớn nhất
//     console.log(`Giá trị lớn nhất là ${c}`);
//   } else {
//     // b lớn nhất
//     console.log(`Giá trị lớn nhất là ${b}`);
//   }
// }
// bai 1
// let a = +prompt(`Nhap phan tu a`)
// let b = +prompt(`Nhap phan tu b`)
// let c = +prompt(`nhap phan tu c`)
// if (a > b && a>c) {
//     console.log(`gia tri lon nhat la ${a}`);
//     // a lon nhat

// } else
//     if (b < c) {
//         // c lon nhat
//         console.log(`gia tri lon nhat la ${c}`)

//     }else {
//         // b lon nhat
//         console.log(`gia tri lon nhat la ${b}`)
//     }



// bai 1
// let age = +prompt(`nhap so tuoi cua ban vao day:`)
// if (age >= 18) {
//     console.log(`ban da du tuoi 18 tuoi`)

// } else
//     console.log(`ban ko du 18 tuoi`)

// bai 2
// let time = +prompt(`Nhap so gio trong ngay`)
// if (time <= 18) {
//     console.log(`good day`)

// } else if (time <= 24) {
//     console.log(`good evening`)


// } else {
//     console.warn(`khong dung`)
// }


// bai 3

// let time = +prompt(`Nhap so h trong ngay vao day`)
// if (time < 10) {
//     document.write(`good morning ${time} gio`)


// } else if (time <= 20) {
//     document.write(`good day ${time} gio`)

// } else if(time <= 24){
//     document.write(`good evening`)
// }
// else {
//     document.write(`ko dung`)
// }


// bai4{
// let so1 = +prompt(`Nhap so vao  day`)
// if (so1%2==0) {
//         document.write(`la so chan`)
// } else
//     document.write(`la so le`)


// bai5
// let sochanle = +prompt(`nhap so can tim`);
// let tinh = sochanle % 2 ;

// switch (tinh) {
//     case 0:
//         document.write("so chan");

//         break;
//     case 1:
//         document.write("so le")
//         break;
//     default:
//         document.write("nhaap sai nhaap lai")
// }


// bai7
// let x = +prompt(`nhap so can tim`)
// if (x == 0) {
//     document.write(`gia tri la 0`)

// } else if (x > 0) {
//     document.write(`gia tri duong`)



// } else if (x < 0) {
//     document.write(`gia tri nguyen am`)

// }

// bai 6
// let color = prompt("Nhập một màu (xanh, đỏ, hoặc vàng):");

// if (color === "xanh" || color === "do" || color === "vang") {
//     document.write("Màu bạn vừa nhập là: " + color);
// } else {
//     alert("Màu không hợp lệ!");
// }

// bai 8
// let weight=+prompt (`nhap can nang vao day`)
// let height = +prompt(`nhap chieu cao vao day`)
// let bmi = weight/(height*height)
// if (bmi < 18.5) {
//     document.write(`gay`)

// }else if (bmi < 25) {
//     document.write(`binh thuong`)

// } else if (bmi < 30) {
//     document.write(`beo`)
// } else if (bmi < 40) {
//     document.write(`beso cap do 2`)
// } else {
//     document.write(`beo phi max`)
// }




// bai 9
// let DTB = +prompt(`nhap so diem trung binh vao day`);

// if (DTB < 6.4) {
//     document.write(`trung binh`)

// } else if (DTB < 8) {
//     document.write(`kha`)

// } else if (DTB <= 10) {
//     document.write(`gioi`)

// } else {
//     document.write(`yeu`)
// }




// bai 10

// let month = +prompt(`nhap so thang can tim`)

// switch (month) {
//     case 1:
//         document.write(`thang 1 có 31`)

//         break;
//     case 2:
//         document.write(`thang2 co 28`)
//         break;
//     case 3:
//         document.write(`thang3 có 30`)
//         break;
//     case 4:
//         document.write(`thang4 có 31`)
//         break;
//     case 5:
//         document.write(`thang5  có 30`)
//         break;
//     case 6:
//         document.write(`thang6 có 30`)
//         break;
//     case 7:
//         document.write(`thang7 có 31`)
//         break;
//     case 8:
//         document.write(`thang8 có 30`)
//         break
//     case 9:
//         document.write(`thang9 có 29`)
//     case 10:
//         document.write(`thang10 có 30`)
//         break;
//     case 11:
//         document.write(`thang11 có 31`)
//         break
//     case 12:
//         document.write(`thang12 có 30`)
//         break

//     default:
//         break;
// }


// tim min max
// let a = +prompt("Nhập số a: ");
// let b = +prompt("Nhập số b: ");
// let c = +prompt("Nhập số c: ");

// let max = Math.max(a, b, c);
// let min = Math.min(a, b, c);

// document.write(`max la:  ${+ max} \; min la: ${+ min}`)



// let date = prompt("Nhập ngày sinh: ");
// let month = prompt("Nhập tháng sinh: ");

// let zodiac = "";

// switch (month) {
//     case 1:
//         if (date < 20) {
//             zodiac = "Ma Kết";
//         } else {
//             zodiac = "Bảo Bình";
//         }
//         break;
//     case 2:
//         if (date < 19) {
//             zodiac = "Bảo Bình";
//         } else {
//             zodiac = "Song Ngư";
//         }
//         break;
//     case 3:
//         if (date < 21) {
//             zodiac = "Song Ngư";
//         } else {
//             zodiac = "Bạch Dương";
//         }
//         break;
//     case 4:
//         if (date < 20) {
//             zodiac = "Bạch Dương";
//         } else {
//             zodiac = "Kim Ngưu";
//         }
//         break;
//     case 5:
//         if (date < 21) {
//             zodiac = "Kim Ngưu";
//         } else {
//             zodiac = "Song Tử";
//         }
//         break;
//     case 6:
//         if (date < 22) {
//             zodiac = "Song Tử";
//         } else {
//             zodiac = "Cự Giải";
//         }
//         break;
//     case 7:
//         if (date < 23) {
//             zodiac = "Cự Giải";
//         } else {
//             zodiac = "Sư Tử";
//         }
//         break;
//     case 8:
//         if (date < 23) {
//             zodiac = "Sư Tử";
//         } else {
//             zodiac = "Xử Nữ";
//         }
//         break;
//     case 9:
//         if (date < 23) {
//             zodiac = "Xử Nữ";
//         } else {
//             zodiac = "Thiên Bình";
//         }
//         break;
//     case 10:
//         if (date < 24) {
//             zodiac = "Thiên Bình";
//         } else {
//             zodiac = "Bọ Cạp";
//         }
//         break;
//     case 11:
//         if (date < 23) {
//             zodiac = "Bọ Cạp";
//         } else {
//             zodiac = "Nhân Mã";
//         }
//         break;
//     case 12:
//         if (date < 22) {
//             zodiac = "Nhân Mã";
//         } else {
//             zodiac = "Ma Kết";
//         }
//         break;
//     default:
//         zodiac = "Không hợp lệ";
// }

// document.write("Cung hoàng đạo của bạn là: " + zodiac);





// let num1 = +prompt(`nhap so thứ nhất `)
// let char = prompt(`chọn các phép tính + ,-,*,/:`)
// let num2 = +prompt(`Nhập số thứ 2`)
// let result;
// switch (char) {
//     case '+':
//         result = Number(num1) + Number(num2);

//         break;
//     case '-':

//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;

//         break;
//     case '/':
//         result = num1 / num2;
//         break;
//     default:
//         alert(`Phep tinh khong hop le`)


// }
// // alert(`ket qua la :${result}`);
// document.write(`ket qua la : ${result}`)


// luyện tập cấu trúc điều kiện 01
// bài 1
// let a = +prompt(`nhap so a vao day :`)
// let b = +prompt(`nhap so b vao day:`)
// if (a % b == 0) {
//     document.write(`a chia het cho b`)
// } else {
//     document.write(`a khong chia het cho b`)
// }


// bai2
// let age = +prompt(`nhap tuoi hoc sinh vao day`)
// if (age >= 15) {
//     document.write(`du tuoi vao lop 10`)
// } else {
//     document.write(`hoc sinh do khong du dieu kien vao lowp 10`)
// }


// bai 3
// let a = +prompt(`nhap so nguyen bat ki`)
// if (a > 0) {
//     document.write(`số đó là lớn hon 0`)

// } else {
//     document.writeln(`so nho hon 0`)

// }





// bai4
// let a = +prompt(`nhap so nguyen a vao day:`);
// let b = +prompt(`nhap so nguyen b vao day:`);
// let c = +prompt(`nhap so nguyen c vao day:`);
// let integer = a > 0 && b > 0 && c > 0;
// if (integer) {
//     document.write(`la so nguyen`)
//     if (a > b && a > c) {
//         // a lon nhat
//         document.write(`gia tri lon nhat la ${a}`)

//     } else if (b < c) {
//         // c lon nhat
//         document.write(`gia tri lon nhat la ${c}`)

//     } else {
//         // c lon nhat
//         document.write(`gia tri lon nhat la ${b}`)
//     }

// } else {
//     document.write(`khong la so nguyen`)

// }





// bai 5


// let a = +prompt(`nhap bai kiem tra 1`)
// let b = +prompt(`nhap bai thi giua ki`)
// let c = +prompt(`nhap bai thi cuoi ki:`)
// let total = (a + (b * 2) + (c * 3)) / 6
// if (total < 6.4) {
//     document.write(`trung binh`)
// } else if (total < 8) {
//     document.write(`kha`)

// } else if (total <= 10) {
//     document.write(`gioi`)
// } else {
//     document.write(`yeu`)
// }






// bai 6




// let a = +prompt(`nhap so san pham ban duoc`)
// if (a < 20) {
//     document.write(`nhan hoa hong 3% moi san pham`)
// } else if (a <= 50) {
//     document.write(`nhan hoa hong 5% moi san pham`)
// } else if (a <= 100) {
//     document.write(`nhan hoa hong 10% moi san pham`)

// } else if (a <= 500) {
//     document.write(`nhan hoa hong 20% moi san pham`)
// } else if (a <= 1500) {
//     document.write(`nhan hoa hong 50% moi san pham`)

// } else {
//     document.write(`nhan hoa hong 60% moi san pham`)
// }




// bai 7


// Phí thuê bao bắt buộc là 25 nghìn.

// 600 đồng cho mỗi gọi của 50 phút đầu tiên.

// 400 đồng cho mỗi phút gọi của 150 phút tiếp theo.

// 200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
// Các thông số đầu vào




// let soNguoiTrongHo = 4; // Số người trong hộ gia đình
// let soCuocGoi = 250; // Số lượng cuộc gọi trong một tháng
// let soPhutSuDungDuLieu = 500; // Số lượng phút sử dụng dữ liệu di động trong một tháng
// const phiThueBaoBatBuoc = 25000; // Phí thuê bao bắt buộc

// // Tính toán cước điện thoại
// let cuocPhi = phiThueBaoBatBuoc;// Khởi tạo cước phí bằng phí thuê bao bắt buộc

// if (soCuocGoi > 0) {
//     cuocPhi += 600 * Math.min(50, soCuocGoi); // Tính cước cho 50 phút đầu tiên
//     if (soCuocGoi > 50 && soCuocGoi <= 200) {
//         cuocPhi += 400 * (Math.min(150, soCuocGoi) - 50); // Tính cước cho 150 phút tiếp theo
//     } else if (soCuocGoi > 200) {
//         cuocPhi += 400 * 100; // Tính cước cho 150 phút tiếp theo
//         cuocPhi += 200 * (soCuocGoi - 200); // Tính cước cho bất kỳ phút nào sau 200 phút đầu tiên
//     }
// }

// if (soPhutSuDungDuLieu > 0) {
//     cuocPhi += 200 * soPhutSuDungDuLieu; // Tính cước cho dữ liệu di động
// }

// // Tính toán cước phí trung bình cho mỗi người trong hộ gia đình
// const cuocPhiTrungBinh = cuocPhi / soNguoiTrongHo;

// document.write("Cước phí điện thoại cho hộ gia đình là: " + cuocPhi + " đồng");
// document.write("Cước phí trung bình cho mỗi người trong hộ gia đình là: " + cuocPhiTrungBinh + " đồng");




// bai1

// let a = +prompt("Hãy nhập số điện(kWh)");
// let x;
// if (a <= 50) {
//     x = a * 1678;
// }
// else if (a <= 100) {
//     x = (a - 50) * 1734 + 50 * 1678;
// }
// else if (a <= 200) {
//     x = (a - 100) * 2014 + 50 * 1678 + 50 * 1734;
// }
// else if (a <= 300) {
//     x = (a - 200) * 2536 + 50 * 1678 + 50 * 1734 + 100 * 2014;
// }
// else if (a <= 400) {
//     x = (a - 300) * 2834 + 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536;
// }
// else {
//     x = (a - 400) * 2927 + 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + 100 * 2834;
// }
// document.write(`Giá điện bán lẻ là ${x} đồng`);


// phan2
// bai1

// let a = +prompt(`nhap a vao day`);
// let b = +prompt(`nhap b vao day`);
// if (a == 0 && b == 0) {
//     document.write(`thi phuong trinh co vo so nghiem`)

// } else if (a == 0 && b != 0) {
//     document.write(`phuong trinh vo nghiem`)
// } else  {
//     let x = -b / a;
//     document.write(`phuong trinh co nghiem duy nhat ${x}`)
// }

// let a = +prompt(`nhap a vao day`);
// let b = prompt(`nhap b vao day`);
// let c = prompt(`nhap c vao day`)

// if (a !== 0) {
//     let delta = b * b - 4 * a * c;
//     if (delta > 0) {
//         let x1 = (-b + sqrt(delta)) / (2 * a)
//         let x2 = (-b - sqrt(delta)) / (2 * a)
//         document.write(`hai nghiem phan biet la:${x1} &{x2} `)
//     } else if (delta = 0) {
//         let x = -b / 2 * a
//         document.write(`cos nghiem kep ${x}`)

//     } else {
//         document.write(`phuong trinh vo nghiem`)
//     }
// }


// cách gải pt bậc 2
// let a = +prompt("Hãy nhập hệ số a của pt ");
// let b = +prompt("Hãy nhập hệ số b của pt ");
// let c = +prompt("Hãy nhập hệ số c của pt ");
// if (a !== 0) {
//     // ax2+bx+c=0 (a≠0)
//     let delta = b * b - 4 * a * c;
//     if (delta < 0) {
//         document.write("phương trình vô nghiệm");
//     } else if (delta == 0) {
//         let x = -b / (2 * a);
//         document.write("phương trình có 2 nghiệm kép x1=x2= " + x);
//     } else {
//         let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//         document.write("Phương trình có nghiệm x1=" + x1);
//         document.write("Phương trình có nghiệm x2=" + x2);
//     }
// }



// let a = +prompt(`Mời bạn nhập vào số a:`);
// let b = +prompt(`Mời bạn nhập vào số b:`);
// let caculator = prompt(`Nhập dấu phép tính \(\+,\-,\*,\/\):`);
// let rs;
// switch (caculator) {
//     case "/":
//         if (b == 0) {
//             alert("Không thể chia một số  cho không");
//         } else {
//             rs = a / b;
//         }
//         break;
//     case "+":
//         rs = a + b;
//         break;

//     case "-":
//         rs = a - b;
//         break;

//     case "*":
//         rs = a * b;
//         break;
// }
// alert(`Kết quả của phép tính trên là: a ${caculator} b = ${rs}`);




const number = Number(prompt('Nhập vào một số lớn hơn 0'));
for (let i = 0; i <= number; i++) {
    // Khối câu lệnh thực thi
} for (let i = 0; i <= number; i++) {
    // Nếu phần dư của phép tính i chia 2 bằng 0, nghĩa là số chẵn
    if (i % 2 === 0) {
        // Nếu điều kiện trong if đúng, khối lệnh được thực thi
        console.log('Số chẵn là: ', i);
    }
}

