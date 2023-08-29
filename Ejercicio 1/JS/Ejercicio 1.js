// Función que se ejecutará cuando la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Encapsulamos toda la lógica en un objeto llamado CalculadoraCUM
    const CalculadoraCUM = {
        // Arreglo para almacenar información de las materias
        materias: [],

        // PARTE 1
        // Función para agregar una materia
        agregarMateria: function() {
            // Obtener valores de nombre, nota final y unidades de valor desde el formulario
            const nombreMateria = document.querySelector('#nameInput input').value;
            const notaFinal = parseFloat(document.querySelector('.input-field:nth-child(2) input').value);
            const uv = parseInt(document.querySelector('.input-field:nth-child(3) input').value);

            // Agregar los datos de la materia al arreglo materias
            this.materias.push({ nombre: nombreMateria, nota: notaFinal, uv: uv });

            // Limpiar los campos del formulario
            document.querySelector('#nameInput input').value = "";
            document.querySelector('.input-field:nth-child(2) input').value = "";
            document.querySelector('.input-field:nth-child(3) input').value = "";

            // Preguntar al usuario si desea ingresar otra materia
            const respuesta = confirm("¿Desea ingresar otra materia?");
            if (!respuesta) {
                // Si el usuario no quiere ingresar otra materia, mostrar resultados
                this.mostrarResultados();
            }
        },

         // PARTE 2
        // Función para mostrar los resultados
        mostrarResultados: function() {
            // Ocultar el formulario
            document.getElementById("materiaForm").style.display = "none";

            // Actualizar la tabla de materias
            this.actualizarTablaMaterias();

            // Calcular y mostrar el CUM
            this.calcularCUM();
        },


         //PARTE 3
        // Función para actualizar la tabla de materias
        actualizarTablaMaterias: function() {
            const tablaMaterias = document.getElementById("resultadoTable").getElementsByTagName('tbody')[0];

            // Recorrer todas las materias ingresadas y agregarlas a la tabla
            for (const materia of this.materias) {
                const nuevaFila = tablaMaterias.insertRow();
                const celdaNombre = nuevaFila.insertCell(0);
                const celdaNota = nuevaFila.insertCell(1);
                const celdaUV = nuevaFila.insertCell(2);

                // Mostrar información de la materia en la tabla
                celdaNombre.innerHTML = materia.nombre;
                celdaNota.innerHTML = materia.nota;
                celdaUV.innerHTML = materia.uv;
            }
        },


         // PARTE 4
        // Función para calcular el CUM
        calcularCUM: function() {
            const cumElement = document.getElementById("cum");

            // Verificar si se han ingresado materias
            if (this.materias.length === 0) {
                cumElement.textContent = "CUM: N/A (No se han ingresado materias)";
                return;
            }

            // Calcular la suma de notas y unidades de valor
            let sumaNotasUV = 0;
            let sumaUV = 0;

            for (const materia of this.materias) {
                sumaNotasUV += materia.nota * materia.uv;
                sumaUV += materia.uv;
            }

            // Calcular y mostrar el CUM
            const cum = sumaNotasUV / sumaUV;
            cumElement.textContent = `CUM: ${cum.toFixed(2)}`;
        },

    };

    //PARTE 5
    // Manejo de eventos: al hacer clic en el botón "Agregar Materia", se llama a la función agregarMateria
    document.getElementById("singUp").addEventListener("click", function() {
        CalculadoraCUM.agregarMateria();
    });
});



