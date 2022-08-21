let productArray = [];

function displayProduct() {
    const totalProductElement = document.getElementById('totalProduct');
    const tabelBody = document.getElementById('tabel-body');
    totalProductElement.innerText = productArray.length;
    tabelBody.innerText = '';
    let totalPrice = 0;

    for (let i = 0; i < productArray.length; i++) {
        const productName = productArray[i].productName;
        const productPrice = productArray[i].productPrice;
        const tr = document.createElement('tr');
        totalPrice += productPrice;

        tr.innerHTML = `
        <th>${i+1}</th>
       <td>${productName}</td>
      <td>${productPrice}</td>
        `
        tabelBody.appendChild(tr);
    }
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td></td>
       <td>Total Price</td>
      <td>${totalPrice}</td>
        `
    tabelBody.appendChild(tr);
}

function addProduct(element) {
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    console.log(productName);
    console.log(productPrice);

    const productObject = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    productArray.push(productObject);
    console.log(productArray);
    displayProduct();


}