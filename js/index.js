async function loadMods() {
    const res = await fetch("mods.json");
    const mods = await res.json();

    let container = document.getElementById("mods");
    container.innerHTML = "";

    mods.forEach(mod => {
        let div = document.createElement("div");
        div.className = "mod";
        div.onclick = () => {
            window.location.href = `mod_info.html?id=${mod.file}`;
        };

        div.innerHTML = `
            <img src="${mod.icon}">
            <div>
                <strong>${mod.name}</strong><br>
                <small>${mod.short}</small>
            </div>
        `;

        container.appendChild(div);
    });
}

loadMods();