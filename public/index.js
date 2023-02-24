const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leads = ["wwwwww", "asdfghjk"]

inputBtn.addEventListener("click", () => {
	leads.push(inputEl.value)

	// inputEl.value = ''
})

let listItems = ""
for (let i = 0; i < leads.length; i++) {
	listItems += "<li>" + leads[i] + "</li>"
}

ulEl.innerHTML = listItems
