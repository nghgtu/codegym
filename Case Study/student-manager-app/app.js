let Student = function (sId="", fullname="", pId="", hometown="", phone="", dob="", gender="", sClass="", profile_pic="", gpa="") {
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
  "2002-02-07",
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
  "2002-02-05",
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
  "2002-01-22",
  "Nữ",
  "USSL132",
  "https://znews-photo.zadn.vn/w660/Uploaded/lce_jwqqc/2019_05_30/61103071_2361422507447925_6222318223514140672_n_1.jpg",
  3.25
);

students = [studentA, studentB, studentC];

function updateTable() {    
    let sListTable = document.getElementById("show-data-section");
    sListTable.innerHTML = "";
    let sData = "";
    
    students.forEach((std, index) => {
        sData += `<tr id='${index}'>
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
                alt="Anh the ${std.fullname}"
              />
            </td>
            <td>${std.gpa}</td>
            <td>
              <button type="button" class="del-btn" onclick="sDelete('${index}')">Delete</button
              ><button type="button" class="edit-btn" onclick="sEdit('${index}')">Edit</button>
            </td>
          </tr>`
          sData += "<br>";
    });

    sListTable.innerHTML += sData;
}

window.onload = updateTable();


function sAdd() {
  let _sId = document.getElementById("mssv").value;
  let _fullname = document.getElementById("hoten").value;
  let _pId = document.getElementById("cccd").value;
  let _hometown = document.getElementById("qq").value;
  let _phone = document.getElementById("dt").value;
  let _dob = document.getElementById("ngaysinh").value;
  let _gender = document.getElementById("gt").value;
  let _sClass = document.getElementById("lop").value;
  let _profile_pic = document.getElementById("anh").value;
  let _gpa = document.getElementById("dtl").value;

  let studentX = new Student(_sId, _fullname, _pId ,_hometown, _phone, _dob, _gender, _sClass, _profile_pic, _gpa);
  students.push(studentX);
  console.log(document.getElementById("ngaysinh").value);
  updateTable();
}

function sEdit(index) {
  // const d = new Date(students[index].dob);
  let input = document.getElementById("input-section");
  input.innerHTML = "";
  input.innerHTML += `
  <tr>
            <th>Mã sinh viên</th>
            <td>
              <input
                class="info-input"
                type="number"
                name=""
                id="mssv"
                value="${students[index].sId}"
                autofocus
              />
            </td>
          </tr>
          <tr>
            <th>Họ tên</th>
            <td><input class="info-input" type="text" name="" id="hoten" value="${students[index].fullname}"/></td>
          </tr>
          <tr>
            <th>Mã CCCD</th>
            <td>
              <input class="info-input" type="number" name="" id="cccd" value="${students[index].pId}"/>
            </td>
          </tr>
          <tr>
            <th>Quê quán</th>
            <td><input class="info-input" type="text" name="" id="qq" value="${students[index].hometown}"/></td>
          </tr>
          <tr>
            <th>Điện thoại</th>
            <td><input class="info-input" type="number" name="" id="dt" value="${students[index].phone}"/></td>
          </tr>
          <tr>
            <th>Ngày sinh</th>
            <td>
              <input class="info-input" type="date" name="" id="ngaysinh" value="${students[index].dob}"/>
            </td>
          </tr>
          <tr>
            <th>Giới tính</th>
            <td><input class="info-input" type="text" name="" id="gt" value="${students[index].gender}"/></td>
          </tr>
          <tr>
            <th>Lớp</th>
            <td><input class="info-input" type="text" name="" id="lop" value="${students[index].sClass}"/></td>
          </tr>
          <tr>
            <th>Ảnh</th>
            <td>
              <input class="info-input" type="url" name="" id="anh" value="${students[index].profile_pic}"/>
            </td>
          </tr>
          <tr>
            <th>Điểm tích lũy</th>
            <td><input class="info-input" type="number" name="" id="dtl" value="${students[index].gpa}"/></td>
          </tr>
          <tr>
            <td colspan="2">
              <button type="button" class="add-btn" onclick="sAdd()">
                Add
              </button>
            </td>
          </tr>
  `;
}

function sDelete(index) {
  students.splice(index, 1);
  updateTable();
}

function comfirm() {

}

function cancel() {

}

document.getElementById("hello").innerHTML = "hey";



