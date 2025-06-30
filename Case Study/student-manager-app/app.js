let Student = function (studentId="", fullname="", personalID="", hometown="", phone="",
                        dob="", gender="", studentClass="", pfPicUrl="", gpa="0") {
    this.studentId = studentId;
    this.fullname = fullname;
    this.personalID = personalID; // 10-12 digits
    this.hometown = hometown;
    this.phone = phone; // 10 digits
    this.dob = dob;
    this.gender = gender; // Nam/Nữ/Khác
    this.studentClass = studentClass;
    this.pfPicUrl = pfPicUrl; 
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
    
    students.forEach((std, index) => {
        sListTable.innerHTML += `<tr>
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
                src='${std.pfPicUrl}'
                alt="Ảnh thẻ ${std.fullname}"
              />
            </td>
            <td>${std.gpa}</td>
            <td>
              <button type="button" class="edit-btn" onclick="Edit('${index}')">Sửa</button>
              <button type="button" class="del-btn" onclick="Delete('${index}')">Xóa</button>
            </td>
          </tr>`
    });

}

function resetInput() {

  let input = document.getElementById("input-section");
  input.innerHTML = "";
  input.innerHTML += `
            <tr>
              <th>Mã sinh viên</th>
              <td>
                <input class="info-input" type="text" id="mssv" autofocus />
              </td>
            </tr>
            <tr>
              <th>Họ tên</th>
              <td>
                <input class="info-input" type="text" id="hoten" />
              </td>
            </tr>
            <tr>
              <th>Mã CCCD</th>
              <td>
                <input class="info-input" type="number" id="cccd" />
              </td>
            </tr>
            <tr>
              <th>Quê quán</th>
              <td>
                <input class="info-input" type="text" id="quequan" />
              </td>
            </tr>
            <tr>
              <th>Điện thoại</th>
              <td>
                <input class="info-input" type="number" id="dt" />
              </td>
            </tr>
            <tr>
              <th>Ngày sinh</th>
              <td>
                <input class="info-input" type="date" id="ngaysinh" />
              </td>
            </tr>
            <tr>
              <th>Giới tính</th>
              <td>
                <label for="Nữ"
                  ><input
                    class="gender-radio"
                    type="radio"
                    name="gioitinh"
                    id="Nữ"
                    value="Nữ"
                  />Nữ</label
                >
                <label for="Nam"
                  ><input
                    class="gender-radio"
                    type="radio"
                    name="gioitinh"
                    id="Nam"
                    value="Nam"
                  />Nam</label
                >
                <label for="Khác"
                  ><input
                    class="gender-radio"
                    type="radio"
                    name="gioitinh"
                    id="Khác"
                    value="Khác"
                  />Khác</label
                >
              </td>
            </tr>
            <tr>
              <th>Lớp</th>
              <td>
                <input class="info-input" type="text" id="lop" />
              </td>
            </tr>
            <tr>
              <th>Ảnh</th>
              <td>
                <input
                  class="info-input"
                  type="file"
                  id="anh-file"
                  accept="image/*"
                />
              </td>
            </tr>
            <!-- <tr>
            <td>
              <input class="info-input" type="url" id="anh-url" />
            </td>
          </tr> -->
            <tr>
              <th>Điểm tích lũy</th>
              <td><input class="info-input" type="number" id="dtl" /></td>
            </tr>
            <tr>
              <td colspan="2">
                <button type="button" class="add-btn" onclick="Add()">
                  Thêm
                </button>
              </td>
            </tr>
  `;
  let next_mssv = Math.max(...students.map(s => s.studentId)) + 1;
  document.getElementById("mssv").value = (next_mssv < 10000 ? "0" : "") + next_mssv;
  document.getElementById("hoten").value = "";
  document.getElementById("cccd").value = "";
  document.getElementById("quequan").value = "Hà Nội";
  document.getElementById("dt").value = "";
  document.getElementById("ngaysinh").value = "2006-01-01";
  document.querySelector("#Nữ").checked = true;
  document.getElementById("lop").value = "USSH";
  document.getElementById("anh-file").value = "";
  document.getElementById("dtl").value = 2.0;

}

function isDuplicated(stdX) {
  return students.some(function(s) {
    return s.studentId == stdX.studentId || s.personalID == stdX.personalID || s.phone == stdX.phone;
  });
}

function isValidInput(_studentId, _fullname, _personalID, _phone, _dob, _gender, _studentClass, _gpa) {

  return (_studentId >= "01" && _studentId <= "99999") 
        && (_fullname.length >= 5)
        && (_personalID >= "001000000000" && _personalID <= "999999999999") 
        && ((_phone >= "0300000000" && _phone <= "0999999999") || _phone == "")
        && (_dob >= "1950-01-01" && _dob <= "2007-12-31")
        && (["Nam", "Nữ", "Khác"].some(g => g == _gender) )
        && (_studentClass.substring(0, 3) == "USS" && _studentClass.length >= 5)
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
  let _pfPicUrl = "";

  let imgInput = document.getElementById("anh-file");
  // imgInput.addEventListener("change", function() {
     
  // })
  let imgDisplay = document.createElement("img");
    imgInput.parentNode.insertBefore(imgDisplay, imgInput.nextSibling);
    const file = imgInput.files[0];
    
    if (file) {
      _pfPicUrl = URL.createObjectURL(file);
      imgDisplay.src = "";
      imgDisplay.src = URL.createObjectURL(file);
    }
  
  // else {
  //   imgDisplay.src = "";
  //   imgInput.value = "";
  // }

  let _gpa = document.getElementById("dtl").value;

  if ( isValidInput (_studentId, _fullname, _personalID, _phone, _dob, _gender, _studentClass, _gpa) ) {
        let studentX = new Student(_studentId, _fullname, _personalID ,_hometown, _phone, _dob, _gender, _studentClass, _pfPicUrl, _gpa);
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
  input.innerHTML = "";
  
  const std = students[index];
  input.innerHTML += `
  <tr>
    <th>Mã sinh viên</th>
    <td>
      <input
        class="info-input"
        type="text"
        id="mssv"
        value="${std.studentId}"
        required
        autofocus
      />
    </td>
  </tr>
  <tr>
    <th>Họ tên</th>
    <td><input class="info-input" type="text" id="hoten" value="${std.fullname}" required /></td>
  </tr>
  <tr>
    <th>Mã CCCD</th>
    <td>
      <input class="info-input" type="number" id="cccd" value="${std.personalID}" required />
    </td>
  </tr>
  <tr>
    <th>Quê quán</th>
    <td><input class="info-input" type="text" id="quequan" value="${std.hometown}"/></td>
  </tr>
  <tr>
    <th>Điện thoại</th>
    <td><input class="info-input" type="number" id="dt" value="${std.phone}"/></td>
  </tr>
  <tr>
    <th>Ngày sinh</th>
    <td>
      <input class="info-input" type="date" id="ngaysinh" value="${std.dob}" required />
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
    <td><input class="info-input" type="text" id="lop" value="${std.studentClass}" required/></td>
  </tr>
  <tr>
    <th rowspan="2">Ảnh</th>
    <td>
      <input
        class="info-input"
        type="file"
        id="anh-file"
        accept="image/*"
        value=""
      />
    </td>
  </tr>
  <tr>
    <td>
      <img src="${std.pfPicUrl}" alt="Ảnh thẻ ${std.fullname}" width="100px" height="100px" id="anh"/>
    </td>
  </tr>  
  <tr>
    <th>Điểm tích lũy</th>
    <td><input class="info-input" type="number" id="dtl" value="${std.gpa}"/></td>
  </tr>
  <tr>
    <td colspan="2">
      <button type="button" class="confirm-btn" onclick="Confirm(${index})">
        Nhận
      </button>
      <button type="button" class="cancel-btn" onclick="Cancel()">
        Hủy
      </button>
    </td>
  </tr>`;

  document.getElementById(std.gender).checked = true;

  let imgInput = document.getElementById("anh-file");
  let imgDisplay = document.getElementById("anh");
  imgInput.addEventListener("change", function() {
    const file = imgInput.files[0];
    if (file) {
      std.pfPicUrl = URL.createObjectURL(file);
      imgDisplay.src = "";
      imgDisplay.src = URL.createObjectURL(file);
    }
  });
   
  // else {
  //   imgDisplay.src = "";
  //   imgInput.value = "";
  // }
  
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
