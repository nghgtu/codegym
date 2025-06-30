let Student = function (studentId="", fullname="", personalID="", hometown="", phone="",
                        dob="", gender="", studentClass="", profilePic="", gpa="0") {
    this.studentId = studentId;
    this.fullname = fullname;
    this.personalID = personalID;
    this.hometown = hometown;
    this.phone = phone;
    this.dob = dob;
    this.gender = gender; // Nam/Nữ/Khác
    this.studentClass = studentClass;
    this.profilePic = profilePic; // url
    this.gpa = gpa;
}

let students = [];

let studentA = new Student(
  "011",
  "Tạ Thị Thùy",
  "428715506371",
  "Liên Bang Nga",
  "0901909798",
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
  "0823279213",
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
  "0949121061",
  "2002-01-22",
  "Nữ",
  "USSL132",
  "https://znews-photo.zadn.vn/w660/Uploaded/lce_jwquequanc/2019_05_30/61103071_2361422507447925_6222318223514140672_n_1.jpg",
  3.25
);

students = [studentA, studentB, studentC];

function updateTable() {    
    let sListTable = document.getElementById("show-data-section");
    sListTable.innerHTML = "";
    let sData = "";
    
    students.forEach((std, index) => {
      //id='${index}'
        sData += `<tr>
            <td>${std.studentId}</td>
            <td>${std.fullname}</td>
            <td>${std.personalID}</td>
            <td>${std.hometown}</td>
            <td>${std.phone}</td>
            <td>${std.dob}</td>
            <td>${std.gender}</td>
            <td>${std.studentClass}</td>
            <td>
              <img
                class="profile-pic"
                src='${std.profilePic}'
                alt="Ảnh thẻ ${std.fullname}"
              />
            </td>
            <td>${std.gpa}</td>
            <td>
              <button type="button" class="edit-btn" onclick="Edit('${index}')">Edit</button>
              <button type="button" class="del-btn" onclick="Delete('${index}')">Delete</button>
            </td>
          </tr>`
          sData += "<br>";
    });

    sListTable.innerHTML += sData;
}

function resetInput() {
  let next_mssv = Math.max(...students.map(s => s.studentId)) + 1;

  document.getElementById("mssv").value = (next_mssv > 10000) ? "0" : "" + next_mssv;
  document.getElementById("hoten").value = "";
  document.getElementById("cccd").value = "";
  document.getElementById("quequan").value = "Hà Nội";
  document.getElementById("dt").value = "";
  document.getElementById("ngaysinh").value = "2006-01-01";
  document.querySelector("#Nữ").checked = true;
  document.getElementById("lop").value = "USSH";
  // document.getElementById("anh-url").value = "";
  document.getElementById("anh-file").value = "";
  document.getElementById("dtl").value = 2.0;
}

function isDuplicated(stdX) {
  return students.some(function(s) {
    return s.studentId == stdX.studentId || s.personalID == stdX.personalID || s.phone == stdX.phone;
  });
}

function isValidInput(_studentId, _fullname, _personalID, _phone, _dob, _gender, _studentClass, _gpa) {

  return (_studentId >= "001" && _studentId <= "99999") 
        && (_fullname.length >= 5)
        && (_personalID >= "0010000000" && _personalID <= "999999999999") 
        && ((_phone >= "0300000000" && _phone <= "0999999999") || _phone == "")
        && (_dob >= "1950-01-01" && _dob <= "2007-12-31")
        && (["Nam", "Nữ", "nam", "nữ", "nu", "khác", "Khác", "khac"].some(g => g == _gender) )
        && (_studentClass.substring(0, 3) == "USS")
        && ( ( Number(_gpa) >= 0.1 && Number(_gpa) <= 4.0) || Number(_gpa) == 0);
}

function getInputData() {
  let _studentId = document.getElementById("mssv").value;
  let _fullname = document.getElementById("hoten").value;
  let _personalID = document.getElementById("cccd").value;
  let _hometown = document.getElementById("quequan").value;
  let _phone = document.getElementById("dt").value;
  let _dob = document.getElementById("ngaysinh").value;
  let _gender = document.querySelector(".gender-radio:checked").value;
  let _studentClass = document.getElementById("lop").value;
  let _profilePic = "";
  let imgInput = document.getElementById("anh-file");
  imgInput.addEventListener("change", function() {
    const file = imgInput.files[0];
    if (file) {
      _profilePic = URL.createObjectURL(file);
    }
  })
  // document.getElementById("anh-url").value;
  let _gpa = document.getElementById("dtl").value;

  if ( isValidInput (_studentId, _fullname, _personalID, _phone, _dob, _gender, _studentClass, _gpa) ) {
        let studentX = new Student(_studentId, _fullname, _personalID ,_hometown, _phone, _dob, _gender, _studentClass, _profilePic, _gpa);
        return studentX;
      }
      else {
        alert("Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại!");
        return;
      }
}

function Add() {
  const studentX = getInputData();
  if (isDuplicated(studentX)) {
    alert("Dữ liệu bị trùng khớp, vui lòng nhập lại!");
    return;
  } 
  else {
      if (students.some(function(s) {
        return JSON.stringify(studentX) === JSON.stringify(s);
      })) {
        alert("Dữ liệu nhập vào đã tồn tại, vui lòng nhập dữ liệu mới");
        return;
      }

      if (!isValidInput(studentX.studentId, studentX.fullname, studentX.personalID, 
                            studentX.phone, studentX.dob, studentX.gender, 
                            studentX.studentClass, studentX.gpa)) {
        alert("Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại!");
        return;
      }

      let cf = confirm("Bạn có muốn ghi nhận sự thay đổi?");
      if (cf) {
        students.push(studentX);
        updateTable();
        resetInput();
      }
  }
}

function Edit(index) {
  let input = document.getElementById("input-section");
  const std = students[index];
  input.innerHTML = "";
  /*<input class="info-input" type="url" name="anh" id="anh" value="${std.profilePic}"/>
  <img src="${std.profilePic}" alt="Anh ko hien thi duoc" width="100px" height="100px" id="anh"/>*/
  input.innerHTML += `
  <tr>
    <th>Mã sinh viên</th>
    <td>
      <input
        class="info-input"
        type="number"
        name=""
        id="mssv"
        value="${std.studentId}"
        required
        autofocus
      />
    </td>
  </tr>
  <tr>
    <th>Họ tên</th>
    <td><input class="info-input" type="text" name="hoten" id="hoten" value="${std.fullname}" required /></td>
  </tr>
  <tr>
    <th>Mã CCCD</th>
    <td>
      <input class="info-input" type="number" name="cccd" id="cccd" value="${std.personalID}" required />
    </td>
  </tr>
  <tr>
    <th>Quê quán</th>
    <td><input class="info-input" type="text" name="quequan" id="quequan" value="${std.hometown}"/></td>
  </tr>
  <tr>
    <th>Điện thoại</th>
    <td><input class="info-input" type="number" name="dienthoai" id="dt" value="${std.phone}"/></td>
  </tr>
  <tr>
    <th>Ngày sinh</th>
    <td>
      <input class="info-input" type="date" name="ngaysinh" id="ngaysinh" value="${std.dob}" required />
    </td>
  </tr>
  <tr>
    <th>Giới tính</th>
    <td>
      <label for="Nữ"><input class="gender-radio" type="radio" name="gioitinh" id="Nữ" value="Nữ" />Nữ</label>
      <label for="Nam"><input class="gender-radio" type="radio" name="gioitinh" id="Nam" value="Nam" />Nam</label>
      <label for="Khác"><input class="gender-radio" type="radio" name="gioitinh" id="Khác" value="Khác" />Khác</label>
    </td>
  </tr>
  <tr>
    <th>Lớp</th>
    <td><input class="info-input" type="text" name="lop" id="lop" value="${std.studentClass}" required/></td>
  </tr>
  <tr>
    <th rowspan="2">Ảnh</th>
    <td>
      <input
        class="info-input"
        type="file"
        name="anh"
        id="anh-file"
        accept="image/*"
        value="${std.profilePic}"
      />
    </td>
  </tr>
  <tr>
    <td>
      <img src="${std.profilePic}" alt="Ảnh thẻ ${std.fullname}" width="100px" height="100px" id="anh"/>
    </td>
  </tr>  
  <tr>
    <th>Điểm tích lũy</th>
    <td><input class="info-input" type="number" name="diemtichluy" id="dtl" value="${std.gpa}"/></td>
  </tr>
  <tr>
    <td colspan="2">
      <button type="button" class="confirm-btn" onclick="Confirm(${index})">
        Confirm
      </button>
      <button type="button" class="cancel-btn" onclick="Cancel()">
        Cancel
      </button>
    </td>
  </tr>
  `;
  document.getElementById(std.gender).checked = true;
  let imgInput = document.getElementById("anh-file");
  imgInput.addEventListener("change", function() {
    const file = imgInput.files[0];
    if (file) {
      std.profilePic = URL.createObjectURL(file);
      // document.getElementById("anh").src = "";
      document.getElementById("anh").src = URL.createObjectURL(file);
    }
  })
}

function Delete(index) {
  let cf = confirm("Bạn chắc chắn muốn xóa dữ liệu này?");
  if (cf) {
    students.splice(index, 1);
    updateTable();
  } 
  else {
    resetInput();
    return;
  }
}

function Confirm(index) {

  const studentX = getInputData();
  
  if (students.some(function(s) {
      return JSON.stringify(studentX) === JSON.stringify(s);
  })) {
    alert("Dữ liệu nhập vào đã tồn tại, vui lòng nhập dữ liệu mới");
    return;
  }

  if (!isValidInput(studentX.studentId, studentX.fullname, studentX.personalID, studentX.phone, 
                    studentX.dob, studentX.gender, studentX.studentClass, studentX.gpa)) {
    alert("Dữ liệu nhập vào không hợp lệ, vui lòng nhập lại!");
    return;
  } 
  else {
    let cf = confirm("Bạn có muốn ghi nhận sự thay đổi?");
    if (cf) {
      students.splice(index, 1, studentX);
      updateTable();
      resetInput();
    }
    return;
  }
}

function Cancel() {
  let cf = confirm("Bạn có muốn hủy hết sự thay đổi?");
  if (cf) {
    resetInput();  
  } 
  return;
}

window.onload = function() {
  updateTable();
  resetInput();
};
