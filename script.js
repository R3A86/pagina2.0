
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCuadrado").addEventListener("click", mostrarCuadrado);
  document.getElementById("btnCalculadora").addEventListener("click", mostrarCalculadora);
  document.getElementById("btnNomina").addEventListener("click", mostrarNomina);
  document.getElementById("btnProgramador").addEventListener("click", mostrarProgramador);
  document.getElementById("btnCerrar").addEventListener("click", cerrarSesion);
});
function mostrarCuadrado() {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <h2>Cuadrado de un Número</h2>
    <input type="number" id="numero" placeholder="Ingresa un número" />
    <button onclick="calcularCuadrado()">Calcular</button>
    <p id="resultadoCuadrado"></p>
  `;
}

function calcularCuadrado() {
  const numero = parseFloat(document.getElementById("numero").value);
  const cuadrado = numero ** 2; // También puedes usar: numero * numero
  document.getElementById("resultadoCuadrado").textContent = `Cuadrado: ${cuadrado}`;
}
function mostrarCalculadora() {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <h2>Calculadora</h2>
    <input type="number" id="num1" placeholder="Número 1" />
    <input type="number" id="num2" placeholder="Número 2" />
    <select id="operacion">
      <option value="sumar">Sumar</option>
      <option value="restar">Restar</option>
      <option value="multiplicar">Multiplicar</option>
      <option value="dividir">Dividir</option>
    </select>
    <button onclick="calcular()">Calcular</button>
    <p id="resultadoCalc"></p>
  `;
}
function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;
  let resultado;

  if (isNaN(n1) || isNaN(n2)) {
    resultado = "Por favor ingresa dos números válidos.";
  } else {
    switch (operacion) {
      case "sumar":
        resultado = n1 + n2;
        break;
      case "restar":
        resultado = n1 - n2;
        break;
      case "multiplicar":
        resultado = n1 * n2;
        break;
      case "dividir":
        resultado = n2 !== 0 ? n1 / n2 : "No se puede dividir entre cero.";
        break;
      default:
        resultado = "Operación no válida.";
    }
  }

  document.getElementById("resultadoCalc").textContent = `Resultado: ${resultado}`;
}

function mostrarNomina() {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <h2>Cálculo de Nómina</h2>
    <input type="number" id="horas" placeholder="Horas trabajadas" />
    <input type="number" id="pago" placeholder="Pago por hora" />
    <button onclick="calcularNomina()">Calcular</button>
    <p id="resultadoNomina"></p>
  `;
}

function calcularNomina() {
  const horas = parseFloat(document.getElementById("horas").value);
  const pago = parseFloat(document.getElementById("pago").value);
  const total = horas * pago;
  document.getElementById("resultadoNomina").textContent = `Total a pagar: $${total}`;
}

function mostrarProgramador() {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <h2>Presentación del Programador</h2>
    <img src="https://tse4.mm.bing.net/th/id/OIP.oNHZqZVWGn91PuHwiMvoagAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Foto del programador" style="width:200px; border-radius:10px; margin-bottom:15px;" />
    <img src="https://deadline.com/wp-content/uploads/2024/07/DC-logo-2.jpg?w=1024" alt="Foto del programador" style="width:200px; border-radius:10px; margin-bottom:15px;" />
    <p><strong>Nombre:</strong> Alfaro Alanis Ramiro Alejandro</p>
    <p><strong>Especialidad:</strong> Desarrollo Web</p>
    <p><strong>Contacto:</strong> 24040004</p>
    <p><strong>Descripción:</strong> Apasionado por la programación y aficionado a la lectura , como tambien a la musica.</p>
  `;
}

function cerrarSesion() {
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `<h2>Sesión cerrada. ¡Hasta pronto!</h2>`;
}