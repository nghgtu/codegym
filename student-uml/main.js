class Student {
    #age = 18;
    #name = "";
    #studentId = "0";
    

    constructor(name, age, studentId) {
        this.#name = name;
        this.#age = age;
        this.#studentId = studentId;
    }

    setName(name) {
        this.#name = name;
    }

    setAge(age) {
        this.#age = age;
    }

    setId(id) {
        this.#studentId = id;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getId() {
        return this.#studentId;
    }

    displayInfo() {
        return `<tr>
                    <td>${this.getId()}</td>
                    <td>${this.getName()}</td>
                    <td>${this.getAge()}</td>
                </tr>`;
    }
}

let displayInfoTable = document.getElementById("display-info");
let students = [];

let studentA = new Student("Nguyen Van A", 20, 15);
students.push(studentA);

let studentB = new Student("Nguyen Thi X", 19, 30);
students.push(studentB);

let studentC = new Student("Nguyen N", 22, 40);
students.push(studentC);

function renderStudentTable() {
    displayInfoTable.innerHTML = '';
    for(let i = 0; i < students.length; i++) {
        const stdX = students[i];
        const stdXData = stdX.displayInfo();
        displayInfoTable.innerHTML += stdXData;
    }
}

window.onload = renderStudentTable;
