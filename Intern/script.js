const x = 1;
const text = "Can drive"
if (x >= 12){
    console.log("yes can drive")
}else{
    console.log("wait till off age")
}
document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const saveBtn  = document.getElementById("saveBtn");
    const modal    = document.getElementById("modal");
    const table    = document.getElementById("farmersTable");

    if (!openBtn || !modal) return;
    
    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    saveBtn.addEventListener("click", () => {
        const name  = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const group = document.getElementById("group").value.trim();

        if (!name || !phone || !group) {
            alert("Please fill all fields");
            return;
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
            <td>${group}</td>
            <td><button class="del-btn" onclick="deleteRow(this)">Delete</button></td>
        `;
        table.appendChild(row);

        document.getElementById("name").value  = "";
        document.getElementById("phone").value = "";
        document.getElementById("group").value = "";

        modal.style.display = "none";
    });

});

function deleteRow(btn) {
    const row = btn.closest("tr");
    row.style.background = "#ffebee";
    setTimeout(() => row.remove(), 300);
}