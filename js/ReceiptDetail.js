function Detail(ID, IdReceipt, IdProduct, Name, Category, PriceInput, PriceOutput, Quantity) {
    this.ID = ID + 1;
    this.IdReceipt = IdReceipt;
    this.IdProduct = IdProduct;
    this.Name = Name;
    this.Category = Category;
    this.PriceInput = PriceInput;
    this.Quantity = Quantity;
    this.PriceOutput = PriceOutput * this.Quantity;
    let timeCreate = new Date()
    this.Day = timeCreate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function getPosition() {
    for (let i = 0; i < receiptList.length; i++) {
        if (receiptList[i].IdReceipt == arrProduct[i].IdReceipt) {
            return i
        }
    }
}

var btnSubmit = document.querySelector(".submit-receipt")
var btnCreateImporter = document.querySelector(".btn-create-impoter")
var arrProduct = []
var arrtest = [[]]

btnCreateImporter.addEventListener('click', (e) => {
    var valueIdReceipt = document.getElementById("input-id-receipt").value

    var newBtnSubmit = btnSubmit.cloneNode(true);
    btnSubmit.parentNode.replaceChild(newBtnSubmit, btnSubmit);
    btnSubmit = newBtnSubmit;

    btnSubmit.addEventListener('click', (e,) => {
        let valuePlacementReceipt = + document.getElementById("input-placement").value
        let valueQuantityReceipt = + document.getElementById("input-quantity").value
        var error = document.querySelector(".error-receipt-detail");

        let position = arrProduct.length

        if (valuePlacementReceipt == "" || valueQuantityReceipt == "") {
            error.innerHTML = "Please enter data";

            document.getElementById("input-placement").value = ""
            document.getElementById("input-quantity").value = ""
        } else {

            let temp = new Detail(position, valueIdReceipt, ProductList[valuePlacementReceipt - 1].ID, ProductList[valuePlacementReceipt - 1].Name, ProductList[valuePlacementReceipt - 1].Category, ProductList[valuePlacementReceipt - 1].PriceInput, ProductList[valuePlacementReceipt - 1].PriceOutput, valueQuantityReceipt)
            arrProduct.push(temp)

            ReceiptDetailTable(position)
            receiptTableDetail()

            if (!arrtest[receiptList.length - 1]) {
                arrtest[receiptList.length - 1] = [];
            }

            arrtest[receiptList.length - 1].push(arrProduct[position]);
            var positionReceipt = -1;
            for (let i = 0; i < receiptList.length; i++) {
                if (receiptList[i].IdReceipt === valueIdReceipt) {
                    positionReceipt = i;
                    break;
                }
            }

            for (let i = 0; i < arrProduct.length; i++) {
                if (arrProduct[i].IdReceipt == valueIdReceipt) {
                    receiptList[positionReceipt].Quantity += arrProduct[i].Quantity
                    receiptList[positionReceipt].Total += arrProduct[i].PriceOutput
                }
            }

            receiptTable()
            receiptTableDetail()

            if (receiptList.length > 0) {
                for (let i = 0; i < inventoryList.length; i++) {
                    if (arrProduct[position].IdProduct === inventoryList[i].IdProduct) {
                        inventoryList[i].TotalRecent += inventoryList[i].Total
                        inventoryList[i].QuantityRecent += inventoryList[i].Quantity
                        inventoryList[i].Total = arrProduct[position].PriceOutput
                        inventoryList[i].Quantity = arrProduct[position].Quantity
                    }
                }
                inventoryTable()

            }
            document.getElementById("input-placement").value = ""
            document.getElementById("input-quantity").value = ""
        }
    }
    )
})

function ReceiptDetailTable(position) {
    var table = document.querySelector(".entry-details-table")
    var tr = document.createElement("tr")
    table.innerHTML += tr.innerHTML = `
            <td>${arrProduct[position].ID} </td> 
            <td>${arrProduct[position].IdReceipt} </td>
            <td>${arrProduct[position].IdProduct} </td>
            <td>${arrProduct[position].Name} </td>
            <td>${arrProduct[position].Category} </td>
            <td>${arrProduct[position].PriceInput} </td>
            <td>${arrProduct[position].PriceOutput} </td>
            <td>${arrProduct[position].Quantity} </td>
            `
}