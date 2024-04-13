function touchDropdown() {
	console.log("sagubr/cdnjs/dropdown.js");
	document.getElementById("_dropdown").classList.toggle("show");
}

window.onclick = function (e) {
	if (!e.target.matches(".dropbtn")) {
		let dropdown = document.getElementById("_dropdown");
		if (dropdown.classList.contains("show")) {
			dropdown.classList.remove("show");
		}
	}
};