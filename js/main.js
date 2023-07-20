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
// let color = prompt(`nhap mau vao day xanh ,tim  , vang:`)
// if (color= xanh) {
//     document.write(`mau xanh`)

// } else
//     if (color = tim) {
//         document.write(`mau do`)


// }else if (color = vang) {
//     document.write(`mau vang`)
// } else {
//         document.write(`khong dung mau`)
//     }


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