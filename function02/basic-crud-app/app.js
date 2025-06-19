let listProducts = [];

function updateDisplay() {
    const display = document.getElementById("display");
    const quantity = document.getElementById("quantity");

    display.innerHTML = "";
    // listProducts.forEach((product, index) => {
    //     display.innerHTML += `
    //         <tr id="row-${index}">
    //             <td id="product-${index}">${product}</td>
    //             <td><button onclick="Edit(${index})">Edit</button></td>
    //             <td><button onclick="Delete(${index})">Delete</button></td>
    //             <td></td>
    //         </tr>
    //     `;
    // });

    for(let index = 0; index < listProducts.length; index++) {
        const product = listProducts[index];
        display.innerHTML += `
            <tr id="row-${index}">
                <td id="product-${index}">${product}</td>
                <td><button onclick="Edit(${index})">Edit</button></td>
                <td><button onclick="Delete(${index})">Delete</button></td>
                <td></td>
            </tr>
        `;
    }

    quantity.innerText = `${listProducts.length} products`;
}

function Add() {
    const input = document.getElementById("new-product");
    const newProduct = input.value.trim();

    if (!newProduct) {
        alert("Please add a non-empty value!");
        input.focus();
        return;
    } else if (
        listProducts.includes(newProduct)
    ) {
        alert("Please add a new value!");
        input.value = "";
        input.focus();
        return;
    }

    listProducts.push(newProduct);
    input.value = "";
    updateDisplay();
}

function Edit(index) {
    const td = document.getElementById(`product-${index}`);
    const originalValue = listProducts[index];

    td.innerHTML = `
        <input type="text" id="edit-input-${index}" value="${originalValue}" />
        <button onclick="Confirm(${index})">Confirm</button>
        <button onclick="Cancel(${index}, '${originalValue}')">Cancel</button>
    `;
}

function Confirm(index) {
    const input = document.getElementById(`edit-input-${index}`);
    const newValue = input.value.trim();

    if (!newValue) {
        alert("Value cannot be empty!");
        input.focus();
        return;
    } else if (listProducts[index] === newValue) {
        alert("Please add a new value!");
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
        return;
    }

    listProducts[index] = newValue;
    updateDisplay();
}

function Cancel(index, originalValue) {
    document.getElementById(`product-${index}`).innerHTML = originalValue;
}

function Delete(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        listProducts.splice(index, 1);
        updateDisplay();
    }
}
