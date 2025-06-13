document.getElementById("multiplication").innerHTML = generateMultiplicationTable(10);

function generateMultiplicationTable(size) {
    let table = "";
    for (let i = 1; i <= size; i++) {
        table += "<tr>";
        for (let j = 1; j <= size; j++) {
            table += `<td style='border: 1px solid black; padding: 10px 20px;'>${i} * ${j} = ${i*j}</td>`;
        }
        table += "</tr>";
    }
    return table;
}
