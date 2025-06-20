let Student = function (sId, fullname, pId, hometown, phone, dob, gender, sClass, profile_pic, gpa) {
    this.sId = sId;
    this.fullname = fullname;
    this.pId = pId;
    this.hometown = hometown;
    this.phone = phone;
    this.dob = dob;
    this.gender = gender;
    this.sClass = sClass;
    this.profile_pic = profile_pic; // url
    this.gpa = gpa;


}

let students = [];

let studentA = new Student(
  "011",
  "Tạ Thị Thùy",
  "428715506371",
  "Liên Bang Nga",
  "1001909798",
  "07/02/2002",
  "Nữ",
  "USSH112",
  "https://toplist.vn/images/800px/tiem-chup-anh-the-lay-ngay-dep-nhat-o-hue-chu-de-da-duoc-nhan-cua-kieu-nguyen-317636.jpg",
  3.5
);

let studentB = new Student(
  "012",
  "Đàm Kiều Trinh",
  "892054032051",
  "Hà Tĩnh",
  "5823279213",
  "05/02/2002",
  "Nữ",
  "USSK113",
  "https://static2.yan.vn/YanNews/202005/202005220338210409-bee6f138-0608-4d56-bce3-27148a855654.png",
  3.0
);

let studentC = new Student(
  "023",
  "Bùi Thị Ánh",
  "408907520055",
  "Hà Nội",
  "3949121061",
  "22/01/2002",
  "Nữ",
  "USSL132",
  "https://znews-photo.zadn.vn/w660/Uploaded/lce_jwqqc/2019_05_30/61103071_2361422507447925_6222318223514140672_n_1.jpg",
  3.25
);

students = [studentA, studentB, studentC];


let sListTable = document.getElementById('show-data-section');

function updateTable() {
    sListTable.innerHTML = "";
    let sData = "";
    students.forEach((std) => {
        sData += `<tr>
            <td>${std.sId}</td>
            <td>${std.fullname}</td>
            <td>${std.phone}</td>
            <td>${std.hometown}</td>
            <td>${std.pId}</td>
            <td>${std.dob}</td>
            <td>${std.gender}</td>
            <td>${std.sClass}</td>
            <td>
              <img
                class="profile-pic"
                src='${std.profile_pic}'
                alt="Anh the Bui Thi Anh"
              />
            </td>
            <td>${std.gpa}</td>
            <td>
              <button type="button" class="del-btn">Delete</button
              ><button type="button" class="edit-btn">Edit</button>
            </td>
          </tr>`
          sData += "<br>";
    });

    // sData += `<tr id="more-info-row">
    //             <td colspan="11">
    //             <button type="button" id="add-info-url">
    //                 <a href="edit.html">Thêm sinh viên</a>
    //             </button>   
    //             </td>
    //           </tr>`;

    sListTable.innerHTML += sData;
}

window.onload =  updateTable();


 Student.prototype.sEdit = function() {

}

 Student.prototype.sDelete = function() {

}



