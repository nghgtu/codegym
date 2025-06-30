class Student {
    #age = 18;
    #name = "";
    #studentId = "01";
    
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

    setId(studentId) {
        this.#studentId = studentId;
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
        return `${this.getId()} - ${this.getName()} - ${this.getAge()}`;
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
        displayInfoTable.innerHTML += `<tr>
                                            <td>${stdX.getId()}</td>
                                            <td>${stdX.getName()}</td>
                                            <td>${stdX.getAge()}</td>
                                        </tr>`;
    }
}

window.onload = renderStudentTable;
