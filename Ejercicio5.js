document.getElementById('ordenar').addEventListener('click', (event) => {
    event.preventDefault();
    const propiedad = document.getElementById('propiedad').value.toLowerCase();
    const animes = [
        { nombre: 'Naruto', episodios: 220 },
        { nombre: 'One Piece', episodios: 1074 },
        { nombre: 'Attack on Titan', episodios: 88 },
        { nombre: 'Dragon Ball Z', episodios: 291 },
        { nombre: 'My Hero Academia', episodios: 136 },
        { nombre: 'Fairy Tail', episodios: 328 }
    ];
    if (['nombre', 'episodios'].includes(propiedad)) {
        const animesOrdenados = ordenarPorPropiedad(animes, propiedad);
        mostrarAnimes(animesOrdenados);
    } else {
        alert('Propiedad inválida. Usa "nombre" o "episodios".');
    }
});

function ordenarPorPropiedad(arr, propiedad) {
    return arr.slice().sort((a, b) => {
        if (a[propiedad] < b[propiedad]) return -1;
        if (a[propiedad] > b[propiedad]) return 1;
        return 0;
    });
}

function mostrarAnimes(animes) {
    const lista = document.getElementById('lista-objetos');
    lista.innerHTML = '';
    animes.forEach(anime => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${anime.nombre}, Episodios: ${anime.episodios}`;
        lista.appendChild(li);
    });
}