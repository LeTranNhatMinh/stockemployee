
function Product(ID, Name, Category, PriceInput) {
    this.ID = ID;
    this.Name = Name;
    this.Category = Category;
    this.PriceInput = PriceInput;
    this.PriceOutput = this.PriceInput + (this.PriceInput * 0.1) + (this.PriceInput * 0.3)
}

var Category = [
    "Water",
    "Food",
]

var ProductList = [
    new Product("SP01", "Pepsi", Category[0], 9000),
    new Product("SP02", "Coca", Category[0], 8500),
    new Product("SP03", "Trà xanh C2", Category[0], 7000),
    new Product("SP04", "Snack Khoai tây", Category[1], 5000),
    new Product("SP05", "Bánh tráng", Category[1], 6000),
]

function productTable(tableId, ProductList) {
    var tableProduct = document.querySelector(tableId)

    tableProduct.innerHTML = " "
    tableProduct.innerHTML += `
        <tr>
          <th>Id</th>
          <th style="width: 150px;">Name</th>
          <th>Category</th>
          <th>PriceInput</th>
          <th>PriceOutput</th>
          </tr>
        `

    for (let i = 0; i < ProductList.length; i++) {
        tableProduct.innerHTML += `
        <td>${ProductList[i].ID} </td> 
        <td>${ProductList[i].Name} </td>
        <td>${ProductList[i].Category} </td>
        <td>${ProductList[i].PriceInput} </td>
        <td>${ProductList[i].PriceOutput} </td>
        `
    }
}


