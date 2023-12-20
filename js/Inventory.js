var btnInventorySubmit = document.querySelector(".submit-inventory")

function InventoryRecent(IdProduct, Name, IdCategory) {
    this.IdProduct = IdProduct;
    this.Name = Name;
    this.TotalRecent = 0
    this.QuantityRecent = 0
    this.IdCategory = IdCategory;
    this.Total = 0;
    this.Quantity = 0;
}

var inventoryList = []
for (let i = 0; i < ProductList.length; i++) {
    inventoryList.push(new InventoryRecent(ProductList[i].ID, ProductList[i].Name, ProductList[i].IdCategory))
}

function inventoryTable() {
    var table = document.querySelector(".inventory-table")
    var tr = document.createElement("tr")
    table.innerHTML = " "
    table.innerHTML +=
        `
        <tr>
        <th>IdProduct</th>
        <th>Name</th>
        <th>TotalRecent</th>
        <th>QuantityRecent</th>
        <th>IdCategory</th>
        <th>Total</th>
        <th>Quantity</th>
        </tr>
        `
    for (let i = 0; i < inventoryList.length; i++) {

        table.innerHTML += tr.innerHTML = `
    <td>${inventoryList[i].IdProduct} </td> 
    <td>${inventoryList[i].Name} </td>
    <td>${inventoryList[i].TotalRecent} </td>
    <td>${inventoryList[i].QuantityRecent} </td> 
    <td>${inventoryList[i].IdCategory} </td>
    <td>${inventoryList[i].Total} </td>
    <td>${inventoryList[i].Quantity} </td>
    `
    }
}