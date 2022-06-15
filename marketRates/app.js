const container = document.getElementsByClassName("container")[0]
fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then(res => res.json())
    .then(datos => {
        marketRates(datos)
    })

function marketRates(data) {
    data.forEach(({ casa }, i) => {
        if ([2, 5, 8].includes(i)) return;
        const divGobal = document.createElement("div");
        const divhead = document.createElement("div");
        const divBody = document.createElement("div");
        const divTitle = document.createElement("div");
        const divBuy = document.createElement("div");
        const divSale = document.createElement("div");
        const divValue = document.createElement("div");
        const divValue2 = document.createElement("div");
        const divIcon = document.createElement("div");
        const divFooter = document.createElement("div");
        const divDate = document.createElement("div");

        divGobal.classList.add("card")
        divBuy.classList.add("buy")
        divSale.classList.add("sale")
        divTitle.classList.add("title")
        divValue.classList.add("value")
        divValue2.classList.add("value")
        divhead.classList.add("head", "card-header")
        divIcon.classList.add("icon")
        divBody.classList.add("card-body")
        divFooter.classList.add("footer")


        divBuy.textContent = "Compra"
        divSale.textContent = "Venta"
        divValue.textContent = casa.compra
        divValue2.textContent = casa.venta

        divTitle.textContent = casa.nombre

        divhead.appendChild(divTitle)
        divhead.appendChild(divIcon)

        divSale.appendChild(divValue2)
        divBuy.appendChild(divValue)

        divFooter.textContent = casa.variacion != undefined ? "VARIACIÓN " + casa.variacion : ""
        divDate.textContent = new Date().toLocaleString()
        divFooter.appendChild(divDate)

        casa.compra != "No Cotiza" ? divBody.appendChild(divBuy) : divSale.style.margin = 0
        divBody.appendChild(divSale)

        divGobal.appendChild(divhead)
        divGobal.appendChild(divBody)
        divGobal.appendChild(divFooter)

        container.appendChild(divGobal)

    });
}