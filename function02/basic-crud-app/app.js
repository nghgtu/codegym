var listProducts = new Array();
var pQuantity = 0;
let tbodyHtml = "";
let theadHtml = `${pQuantity} products`;

function Add() {
    let newProduct = document.getElementById("new-product").value;
    if (!newProduct) {
        alert("Please add a non-empty value!!!");
        document.getElementById("new-product").focus();
        return;
    }
    listProducts.push(newProduct);
    pQuantity += 1;
    theadHtml = `${pQuantity} products`;
    document.getElementById("quantity").innerHTML = theadHtml;
    tbodyHtml += `<tr><td id='${pQuantity}'>${newProduct}</td><td><button type='button' class='edit'>Edit</button></td><td><button type='delete' class='delete'>Delete</button></td></tr>`
    document.getElementById("display").innerHTML = tbodyHtml;
}

function Edit(p_id) {
    let e_id = "e-" + p_id;
    let currProduct = document.getElementById(p_id);
    let pValue = currProduct.innerHTML;
    currProduct.innerHTML = `<input
        type="text"
        class="edit-input"
        id='${e_id}'
        autofocus
        value="${pValue}"
      />
      <button type="button" class="confirm" onclick="Confirm('${e_id}')">Confirm</button>
      <button type="button" class="cancel" onclick="Cancel('${e_id}')">Cancel</button>`;
}

function Delete(row_id) {
    document.getElementById(row_id).innerHTML = "";
}

function Confirm(e_id) {
    let input = document.getElementById(e_id).value;
    let currProduct = document.getElementById(e_id);
    currProduct.innerHTML = `${input}`;
}

function Cancel(e_id) {
    let currProduct = document.getElementById(e_id);
    let pValue = currProduct.value;
    currProduct.innerHTML = `${pValue}`;
}