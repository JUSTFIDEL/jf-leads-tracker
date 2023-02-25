const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leads = []

inputBtn.addEventListener("click", () => {
	leads.push(inputEl.value)
	inputEl.value = ""
	renderLeads()
})

let listItems = ""

function renderLeads() {
	for (let i = 0; i < leads.length; i++) {
		listItems += `
            <li>
                  <a target='_blank' href='${leads[i]}'> 
                        ${leads[i]}
                  </a>
            </li>`
	}

	ulEl.innerHTML = listItems
}
