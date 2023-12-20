// Product List
var btnProduct = document.querySelector("#product");
btnProduct.addEventListener("click", (e) => {
    let main = document.querySelector("#main-menu");
    let view = document.querySelector("#product-item");

    main.setAttribute("style", "display: none");
    view.setAttribute("style", "display: block");
});

var btnCloseProductTable = document.querySelector(".close-product-table");
btnCloseProductTable.addEventListener("click", (e) => {
    let view = document.querySelector("#product-item");
    let main = document.querySelector("#main-menu");

    main.removeAttribute("style");
    view.removeAttribute("style");
});

// Add Receipt 
var btnCreateReceipt = document.querySelector("#receipt");
btnCreateReceipt.addEventListener("click", (e) => {
    let main = document.querySelector("#main-menu");
    let view = document.querySelector("#product-receipt-add");

    main.setAttribute("style", "display: none");
    view.setAttribute("style", "display: block");
});

var btnCloseAddReceipt = document.querySelector(".close-add-receipt");
btnCloseAddReceipt.addEventListener("click", (e) => {
    let view = document.querySelector("#product-receipt-add");
    let main = document.querySelector("#main-menu");

    main.removeAttribute("style");
    view.removeAttribute("style");
});

var btnCloseCloseReceipt = document.querySelector(".close-add-receipt-detail");
btnCloseCloseReceipt.addEventListener("click", (e) => {
    let receiptDetail = document.querySelector("#receipt-detail-add");
    let main = document.querySelector("#main-menu");

    document.getElementById("input-id-receipt").value = ""
    document.getElementById("input-username").value = ""

    receiptDetail.removeAttribute("style");
    main.removeAttribute("style");
});

var btnBack = document.querySelector(".back-receipt-detail");
btnBack.addEventListener("click", (e) => {
    let receiptDetail = document.querySelector("#receipt-detail-add");
    let main = document.querySelector("#main-menu");
    let view = document.querySelector("#product-receipt-add");

    document.getElementById("input-id-receipt").value = ""
    document.getElementById("input-username").value = ""


    main.removeAttribute("style");
    view.setAttribute("style", "display: block");
    receiptDetail.removeAttribute("style");
});

// Change Price
var btnChangePrice = document.querySelector("#change-price");
btnChangePrice.addEventListener("click", (e) => {
    let main = document.querySelector("#main-menu");
    let view = document.querySelector("#product-change-price");

    main.setAttribute("style", "display: none");
    view.setAttribute("style", "display: block");

});

var btnCloseChangPrice = document.querySelector(".close-change-price");
btnCloseChangPrice.addEventListener("click", (e) => {
    let view = document.querySelector("#product-change-price");
    let main = document.querySelector("#main-menu");

    main.removeAttribute("style");
    view.removeAttribute("style");
});

// Inventory Table
var btnInventory = document.querySelector("#inventory");
btnInventory.addEventListener("click", (e) => {
    let main = document.querySelector("#main-menu");
    let view = document.querySelector("#inventory-view");

    main.setAttribute("style", "display: none");
    view.setAttribute("style", "display: block");
    inventoryTable()
});


var btnCloseCloseInventorytable = document.querySelector(".close-inventory-table");
btnCloseCloseInventorytable.addEventListener("click", (e) => {
    let view = document.querySelector("#inventory-view");
    let main = document.querySelector("#main-menu");

    main.removeAttribute("style");
    view.removeAttribute("style");
});

// Entry detail
var btnCreateImporter = document.querySelector("#entry-detail")
btnCreateImporter.addEventListener('click', (e) => {
    let main = document.querySelector("#main-menu");
    let view = document.querySelector("#entry-detail-view");

    main.setAttribute("style", "display: none");
    view.setAttribute("style", "display: block");

    var test = Array.from(document.querySelectorAll(".table-receipt-detail-view"))
    test.forEach((el, ind) => {
        var testbtn = el.querySelector(".button-show-detail")
        var temp = arrtest[ind]
        testbtn.addEventListener('click', (e) => {
            var table = document.querySelector(".table-entry-detail")
            var tr = document.createElement("tr")
            table.innerHTML = " "
            table.innerHTML += `
                <tr>
                  <th>IdReceipt</th>
                  <th>IdProduct</th>
                  <th>Name</th>
                  <th>IdCategory</th>
                  <th>PriceInput</th>
                  <th>PriceOutput</th>
                  <th>Quantity</th>
                </tr>
            `
            for (let i = 0; i < arrtest[ind].length; i++) {
                table.innerHTML += tr.innerHTML = `
                        <td>${temp[i].IdReceipt} </td>
                        <td>${temp[i].IdProduct} </td>
                        <td>${temp[i].Name} </td>
                        <td>${temp[i].IdCategory} </td>
                        <td>${temp[i].PriceInput} </td>
                        <td>${temp[i].PriceOutput} </td>
                        <td>${temp[i].Quantity} </td>
                        `
            }
        })
    })
})

var btnCloseCloseInventorytable = document.querySelector(".close-detail-view");
btnCloseCloseInventorytable.addEventListener("click", (e) => {
    let view = document.querySelector("#entry-detail-view");
    let main = document.querySelector("#main-menu");

    main.removeAttribute("style");
    view.removeAttribute("style");
});


// List Items By Date 
var btnListItemsByDate = document.querySelector("#list-items-by-date")
btnListItemsByDate.addEventListener('click', (e) => {
    var view = document.querySelector("#items-by-date-view")
    let main = document.querySelector("#main-menu");

    main.setAttribute("style", "display: none");
    view.setAttribute("style", "display: block");
})

var btnCloseSearch = document.querySelector(".close-search-view");
btnCloseSearch.addEventListener("click", (e) => {
    let view = document.querySelector("#items-by-date-view");
    let main = document.querySelector("#main-menu");

    main.removeAttribute("style");
    view.removeAttribute("style");
});
