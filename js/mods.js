async function loadMod() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    const res = await fetch("mods/" + id);
    const mod = await res.json();

    document.getElementById("title").innerText = mod.name;
    document.getElementById("description").innerText = mod.description;
    document.getElementById("icon").src = mod.icon;
    document.getElementById("download").href = mod.download;
}

loadMod();