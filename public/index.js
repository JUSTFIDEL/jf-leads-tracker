let leads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const saveTab = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))

if (leadsFromLocalStorage) {
	leads = leadsFromLocalStorage
	render(leads)
}

function render(leadArr) {
	let listItems = ""
	for (let i = 0; i < leadArr.length; i++) {
		listItems += `
            <li>
                  <a target='_blank' href='${leadArr[i]}'> 
                        ${leadArr[i]}
                  </a>
            </li>
		`
	}

	ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", () => {
	leads.push(inputEl.value)
	inputEl.value = ""

	localStorage.setItem("leads", JSON.stringify(leads))
	render(leads)
})

saveTab.addEventListener("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		leads.push(tabs[0].url)
		localStorage.setItem("leads", JSON.stringify(leads))
		render(leads)
	})
})

deleteBtn.addEventListener("click", () => {
	localStorage.clear()
	leads = []
	render(leads)
})
