let counter = 1; // Line item counter and background shade variable
var tbod = document.getElementsByTagName("tbody")[0]
console.log(tbod)

for (var count in observations){

    var row1 = document.createElement("tr")
    row1.classList.add("my-10") // Doesn't work
    tbod.appendChild(row1) // Table attach

    var cell1 = document.createElement("td")
    cell1.innerHTML = counter; // ***** Counter
    row1.appendChild(cell1)

    // fed, ansi, observation,

    cell1  = document.createElement("td")
    cell1.innerHTML = observations[count].reference // ***** Reference
    cell1.classList.add("underline", "bg-slate-900", "border", "rounded-md", "border-cyan-300","p-2")

    row1.appendChild(cell1) // Row attach

    cell1 = document.createElement("td")

    counter++; // Increment counter
    console.log(observations[count].type)
}