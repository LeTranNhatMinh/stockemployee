var btnSearch = document.querySelector(".search-items")
btnSearch.addEventListener('click', (e) => {
    var inputDateValue = document.querySelector("#items-by-date-input").value
    var error = document.querySelector(".error-search");

    if (!isValidDate(inputDateValue)) {
        error.innerHTML = `Please use 'dd/mm/yyyy' and make sure day is between 1 and 31, and month is between 1 and 12.`
        document.querySelector("#items-by-date-input").value = ""
    }
    else {
        var addedReceipts = new Set();
        arrSearch = []; // Reset arrSearch for each search
        for (let i = 0; i < arrProduct.length; i++) {
            if (inputDateValue == arrProduct[i].Day && !addedReceipts.has(arrProduct[i].IdReceipt)) {
                arrSearch.push(arrProduct[i]);
                addedReceipts.add(arrProduct[i].IdReceipt);
            }
        }
        if (arrSearch.length > 0) {
            searchTableView();
            document.querySelector("#items-by-date-input").value = ""
        }
        else {
            error.innerHTML = `There is no in-stock date for this item`
            document.querySelector("#items-by-date-input").value = ""
        }

    }

})

// Check Format Input Date
function isValidDate(dateString) {
    let regEx = /^\d{2}\/\d{2}\/\d{4}$/;
    if (dateString.match(regEx) == null) return false;
    let parts = dateString.split("/");
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10);

    if (day < 1 || day > 31) return false;
    if (month < 1 || month > 12) return false;
    return true;
}


function searchTableView() {
    var table = document.querySelector("#search-table")
    var tr = document.createElement("tr")
    table.innerHTML = " "
    table.innerHTML +=
        `
        <tr>
        <th>IdReceipt</th>
        <th>IdProduct</th>
        <th>Name</th>
        <th>Category</th>
        <th>PriceInput</th>
        <th>PriceOutput</th>
        <th>Quantity</th>
        <th>CreateAt</th>
        </tr>
        `
    for (let i = 0; i < arrSearch.length; i++) {
        table.innerHTML += tr.innerHTML = `
    <td>${arrSearch[i].IdReceipt} </td> 
    <td>${arrSearch[i].IdProduct} </td>
    <td>${arrSearch[i].Name} </td>
    <td>${arrSearch[i].Category} </td> 
    <td>${arrSearch[i].PriceInput} </td>
    <td>${arrSearch[i].PriceOutput} </td>
    <td>${arrSearch[i].Quantity} </td>
    <td>${arrSearch[i].Day} </td>
    `
    }
}