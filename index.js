const direList = document.getElementById('dire-list');
const direEntries = [
    { filename: 'dire1', displayName: 'GERBERT MONZÓN' },
    { filename: 'dire2', displayName: 'KENNY MURCIA' },
    { filename: 'dire3', displayName: 'JORGE REJOPACHI' },
    { filename: 'dire4', displayName: 'MAGDALY QUIEM' },
    { filename: 'dire5', displayName: 'EDDUARDO HERNÁNDEZ' },
    { filename: 'dire6', displayName: 'ROSSANA BAUTISTA' },
    { filename: 'dire7', displayName: 'KARLA FLORES' },
    { filename: 'dire8', displayName: 'JUAN CHAVAJAY' },
    { filename: 'dire9', displayName: 'DIEGO SANDOVAL' },
    { filename: 'dire10', displayName: 'OSEAS XOT' },
    { filename: 'dire11', displayName: 'HÉCTOR GIRÓN' },
    { filename: 'dire12', displayName: 'FERNANDO MONTOYA' },
    { filename: 'dire13', displayName: 'LOURDES CHUQUIEJ' },
    { filename: 'dire14', displayName: 'CARLOS MAZARIEGOS' },
    { filename: 'dire15', displayName: 'LUIS GÓMEZ' },
    { filename: 'dire16', displayName: 'ANTONY NAVARRO' },
    { filename: 'dire17', displayName: 'ANA GUARCAX' },
    { filename: 'dire18', displayName: 'JORGE ROSAL' },
    { filename: 'dire19', displayName: 'MARÍA LÓPEZ' },
    { filename: 'dire20', displayName: 'CRISTIAN FIGUEROA' },
    { filename: 'dire21', displayName: 'GERSON LÓPEZ' },
    { filename: 'dire22', displayName: 'SERGIO MENDEZ' },
    { filename: 'dire23', displayName: 'NERY CONTRERAS' },
    { filename: 'dire24', displayName: 'RUDY MARROQUIN' },
    { filename: 'dire25', displayName: 'SHEYLA TREJO' },
    { filename: 'dire26', displayName: 'AVEREL CASTILLO' },
    { filename: 'dire27', displayName: 'CHRISTIAN LÓPEZ' },
    { filename: 'dire28', displayName: 'JUAN RODRÍGUEZ' },
    { filename: 'dire29', displayName: 'CHRISTIAN MADRID' },
    { filename: 'dire30', displayName: 'LEONEL SAZO' },
    { filename: 'dire31', displayName: 'JUAN CALEL' },
    { filename: 'dire32', displayName: 'IRVIN BARRERA' },
    // Agrega todos los demás objetos con los nombres que quieras mostrar...
];

direEntries.forEach(dire => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const img = document.createElement('img');
    img.src = 'logo.png'; // Cambia la ruta si la imagen está en otra carpeta
    img.alt = 'Logo';
    img.classList.add('logo-img'); // Clase para aplicar estilo adicional si es necesario

    const link = document.createElement('a');
    link.href = `${dire.filename.replace(/ /g, '-')}.html`;
    link.textContent = dire.displayName; // Mostrar el nombre personalizado

    gridItem.appendChild(img);
    gridItem.appendChild(link);
    direList.appendChild(gridItem);
});
