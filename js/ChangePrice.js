var btnSubmitChange = document.querySelector(".change-price")
btnSubmitChange.addEventListener('click', (e) => {
    let valuePlacementChange = document.getElementById("input-placement-change").value
    let valueNewPrice = document.getElementById("input-new-price").value
    var error = document.querySelector(".error-change-price");

    if (valuePlacementChange === "" || valueNewPrice === "") {
        error.innerHTML = "Please enter data";

        document.getElementById("input-new-price").value = ""
        document.getElementById("input-placement-change").value = ""
    } else {
        ProductList[valuePlacementChange - 1].PriceInput = + valueNewPrice
        ProductList[valuePlacementChange - 1].PriceOutput = + valueNewPrice + Math.floor((valueNewPrice * 0.1) + (valueNewPrice * 0.3))

        productTable("#table-product", ProductList)
        productTable("#table-receipt-detail-view", ProductList)
        productTable("#table-change-price", ProductList)

        document.getElementById("input-new-price").value = ""
        document.getElementById("input-placement-change").value = ""
    }
})

