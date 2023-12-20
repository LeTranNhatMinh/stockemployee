
function Receipt(IdReceipt, UserName) {
    let timeCreate = new Date();
    this.IdReceipt = IdReceipt;
    this.UserName = UserName;
    this.Quantity = 0;
    this.Total = 0;
    this.Day = timeCreate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
    this.Time = timeCreate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    this.CreateAt = this.Day + " " + this.Time
}

var btnCreateImporter = document.querySelector(".btn-create-impoter")

var receiptList = []

btnCreateImporter.addEventListener('click', (e) => {

    e.preventDefault();

    var valueIdReceipt = document.getElementById("input-id-receipt").value.trim();
    var valueUsername = document.getElementById("input-username").value.trim();
    var error = document.querySelector(".error");

    if (valueIdReceipt === "" || valueUsername === "") {
        error.innerHTML = "Please enter data";

        document.getElementById("input-id-receipt").value = ""
        document.getElementById("input-username").value = ""
    } else {
        var isDuplicate = false;
        for (var i = 0; i < receiptList.length; i++) {
            if (receiptList[i].IdReceipt === valueIdReceipt) {
                isDuplicate = true;
                break;
            }
        }

        if (isDuplicate) {
            error.innerHTML = "Your ticket is already on the list";

            document.getElementById("input-id-receipt").value = ""
            document.getElementById("input-username").value = ""
        } else {
            clearError();
            let main = document.querySelector("#product-receipt-add");
            let view = document.querySelector("#receipt-detail-add");
            main.removeAttribute("style");
            view.setAttribute("style", "display: block");

            receiptList.push(new Receipt(valueIdReceipt, valueUsername));
            receiptTable();
            receiptTableDetail()


        }
    }
});

function clearError() {
    var error = document.querySelector(".error");
    error.innerHTML = "";
}

function receiptTable() {
    var table = document.querySelector(".table-receipt")
    table.innerHTML = " "
    table.innerHTML += `
        <tr>
          <th>Id</th>
          <th>UserName</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>CreateAt</th>
        </tr>
    `
    var tr = document.createElement("tr")
    for (let i = 0; i < receiptList.length; i++) {

        table.innerHTML += tr.innerHTML = `
        
        <td>${receiptList[i].IdReceipt} </td> 
        <td>${receiptList[i].UserName} </td>
        <td>${receiptList[i].Quantity} </td>
        <td>${receiptList[i].Total} </td>
        <td>${receiptList[i].CreateAt} </td>

            `
    }
}

function receiptTableDetail() {
    var table = document.querySelector(".table-receipt-detail")
    table.innerHTML = " "
    table.innerHTML += `
        <tr>
          <th>Id</th>
          <th>UserName</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>CreateAt</th>
        </tr>
    `
    var tr = document.createElement("tr")
    for (let i = 0; i < receiptList.length; i++) {

        table.innerHTML += tr.innerHTML = `
        <tr class="table-receipt-detail-view">
        <td>${receiptList[i].IdReceipt} </td> 
        <td>${receiptList[i].UserName} </td>
        <td>${receiptList[i].Quantity} </td>
        <td>${receiptList[i].Total} </td>
        <td>${receiptList[i].CreateAt} </td>
        <td><img src="../icon/more-detail-icon.png" class="button-show-detail" alt="" title="hover"></td>
        </tr>
            `
    }
}
