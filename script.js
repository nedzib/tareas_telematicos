
var perros = [
    {
        nombre: 'Rex',
        raza: 'Dálmata',
        edad: 3,
        sexo: 'Macho',
        caracteristicas: ['Jugueton', 'Amigable', 'Guardian'],
        foto: '1.jpg',
        dias_en_adopcion: 5
    },
    {
        nombre: 'Firulais',
        raza: 'Pastor Alemán',
        edad: 2,
        sexo: 'Hembra',
        caracteristicas: ['Guardian', 'Amigable'],
        foto: '2.jpg',
        dias_en_adopcion: 7
    },
    {
        nombre: 'Luna',
        raza: 'Labrador',
        edad: 1,
        sexo: 'Hembra',
        caracteristicas: ['Juguetona', 'Amigable'],
        foto: '3.jpg',
        dias_en_adopcion: 2
    },
    {
        nombre: 'Sasha',
        raza: 'Pitbull',
        edad: 4,
        sexo: 'Hembra',
        caracteristicas: ['Guardian', 'Amigable'],
        foto: '4.jpg',
        dias_en_adopcion: 3
    },
    {
        nombre: 'Max',
        raza: 'Golden Retriever',
        edad: 5,
        sexo: 'Macho',
        caracteristicas: ['Jugueton', 'Amigable', 'Guardian'],
        foto: '5.jpg',
        dias_en_adopcion: 1
    },
    {
        nombre: 'Lucky',
        raza: 'Chihuahua',
        edad: 3,
        sexo: 'Macho',
        caracteristicas: ['Jugueton', 'Amigable', 'Feliz'],
        foto: '6.jpg',
        dias_en_adopcion: 6
    },
]

var razasPerros = [
    "Labrador",
    "Bulldog",
    "Golden Retriever",
    "Pastor Alemán",
    "Beagle",
    "Yorkshire Terrier",
    "Pitbull",
    "Boxer",
    "Dálmata",
    "Chihuahua",
    "Poodle",
    "Rottweiler",
    "Shih Tzu",
    "Husky Siberiano",
    "Dobermann",
    "Pomeranian",
    "Border Collie",
    "Bichón Frisé",
    "Schnauzer",
    "Cocker Spaniel",
    "Pug"
];

const perros_en_carrusel = 3

// Perros iniciales
console.log(perros);

function index(){
    document.getElementById('carrusel_section').classList.remove('d-none');
    // Llenar perros de carrusel
    var perrosHTML = '';

    let perros_con_mas_dias = perros.sort(function(a, b) {
        return b.dias_en_adopcion - a.dias_en_adopcion;
    }).slice(0, perros_en_carrusel);

    perros_con_mas_dias.forEach( function (perro, i) {
        perrosHTML +=  `
            <div class="carousel-item ${ i == 1 ? 'active' : '' }">
            <img src="./fotos/${perro.foto}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block bg-dark w-100" style="--bs-bg-opacity: .5; left: 0%; right: 0%">
            <h5>${perro.nombre} - ${perro.raza} ${ perro.sexo }</h5>
            <p>${perro.caracteristicas.join(", ")}</p>
            </div>
            </div>
            `
    });

    let carrusel_perros = document.getElementById('carrusel_perros');
    console.log(perros_con_mas_dias);
    carrusel_perros.innerHTML = perrosHTML;

    // Llenar lista

    var perrosHTML = '';

    var perros_para_index = perros.slice(0, perros_en_carrusel);

    perros_para_index.forEach( function (perro) {
        perrosHTML +=  `
            <div class="card" style="width: 18rem;">
            <img src="./fotos/${perro.foto}" class="card-img-top" alt="...">
            <div class="card-img-overlay p-0">
            <h5 class="card-title text-white mb-0 bg-dark" style="--bs-bg-opacity: .5">${perro.nombre} - ${perro.edad} Años</h5>
            <h6 class="card-text text-white bg-dark" style="--bs-bg-opacity: .5">${perro.raza} ${perro.sexo} </h6>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${perro.caracteristicas[0]}</li>
            <li class="list-group-item">${perro.caracteristicas[1]}</li>
            <li class="list-group-item">${perro.caracteristicas[2] || ''}</li>
            </ul>
            </div>
            </div>
            `
    });

    let lista_perros = document.getElementById('lista_perros');

    lista_perros.innerHTML = perrosHTML;

     document.getElementById(`hembra_button`).classList.remove('active')
     document.getElementById(`macho_button`).classList.remove('active')
    llenar_razas();
}


function filtro_perros(sexo){
    var machos = perros.filter(perro => perro.sexo == sexo);

    var perrosHTML = '';

    machos.forEach( function (perro) {
        perrosHTML +=  `
            <div class="card" style="width: 18rem;">
            <img src="./fotos/${perro.foto}" class="card-img-top" alt="...">
            <div class="card-img-overlay p-0">
            <h5 class="card-title text-white mb-0 bg-dark ps-3" style="--bs-bg-opacity: .5">${perro.nombre} - ${perro.edad} Años</h5>
            <h6 class="card-text text-white bg-dark ps-3" style="--bs-bg-opacity: .5">${perro.raza} ${perro.sexo} </h6>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${perro.caracteristicas[0]}</li>
            <li class="list-group-item">${perro.caracteristicas[1]}</li>
            <li class="list-group-item">${perro.caracteristicas[2] || ''}</li>
            </ul>
            </div>
            </div>
            `
    });

    let lista_perros = document.getElementById('lista_perros');

    lista_perros.innerHTML = perrosHTML;

    orden_activacion = sexo == 'Macho' ? ['macho', 'hembra'] : ['hembra', 'macho'];

    document.getElementById(`${orden_activacion[0]}_button`).classList.add('active');
    document.getElementById(`${orden_activacion[1]}_button`).classList.remove('active');

    document.getElementById('carrusel_section').classList.add('d-none');
}

function llenar_razas(){
    var razasHTML = `<option selected value=''>Seleccione una raza</option>`;

    razasPerros.forEach( function (raza) {
        razasHTML +=  `
            <option value="${raza}">${raza}</option>
            `
    });

    let razas = document.getElementById('form_raza');

    razas.innerHTML = razasHTML;
}

function agregar(){
    var nombre = document.getElementById('form_nombre').value;
    var raza = document.getElementById('form_raza').value;
    var edad = document.getElementById('form_edad').value;

    var macho = document.getElementById('form_macho').checked;

    var sexo = macho ? 'Macho' : 'Hembra';
    var caracteristica_1 = document.getElementById('form_c1').value;
    var caracteristica_2 = document.getElementById('form_c2').value;
    var caracteristica_3 = document.getElementById('form_c3').value;
    var dias_en_adopcion = document.getElementById('form_dias').value;

    var perro = {
        nombre: nombre,
        raza: raza,
        edad: edad,
        sexo: sexo,
        caracteristicas: [caracteristica_1, caracteristica_2, caracteristica_3],
        foto: `${Math.floor(Math.random() * 6) + 1}.jpg`,
        dias_en_adopcion: dias_en_adopcion
    }

    valid = run_validations(perro);

    if(valid){
        perros.push(perro);

        console.log(perro);

        var modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
        modal.hide();

        perro.sexo == 'Macho' ? filtro_perros('Macho') : filtro_perros('Hembra');
    }
}

function limpiar_form(){
    console.log('Limpiando formulario');
    document.getElementById('form_nombre').value = '';
    document.getElementById('form_raza').value = '';
    document.getElementById('form_edad').value = '';
    document.getElementById('form_macho').checked = true;
    document.getElementById('form_hembra').checked = false;
    document.getElementById('form_c1').value = '';
    document.getElementById('form_c2').value = '';
    document.getElementById('form_c3').value = '';
    document.getElementById('form_dias').value = '';
}

function run_validations(perro){
    if(perro.nombre == ''){
        alert('El nombre del perro es obligatorio');
        return;
    }

    if(perro.edad == ''){
        alert('La edad del perro es obligatoria');
        return;
    }

    if(perro.edad < 0){
        alert('La edad del perro no puede ser negativa');
        return;
    }

    if(perro.raza == ''){
        alert('La raza del perro es obligatoria');
        return;
    }

    if(perro.dias_en_adopcion == ''){
        alert('Los días en adopción del perro es obligatorio');
        return;
    }

    if(perro.dias_en_adopcion < 0){
        alert('Los días en adopción del perro no pueden ser negativos');
        return;
    }


    return true;
}

index();
