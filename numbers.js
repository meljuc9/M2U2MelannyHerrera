const botonEnviar = document.getElementById("botonEnviar")

botonEnviar.addEventListener("click", () => {
  //Variables
  let vaA = document.getElementById('num1');
  let vaB = document.getElementById('num2');
  let vaC = document.getElementById('num3');
  let vaD = document.getElementById('num4');
  let resultadoEjercicio2 = document.getElementById('resultadoEjercicio2');

  //Conversión
  vaA = parseFloat(vaA.value);
  vaB = parseFloat(vaB.value);
  vaC = parseFloat(vaC.value);
  vaD = parseFloat(vaD.value);

  //Verificar que el dato sea un número positivo con isNaN
  if (isNaN(vaA) || isNaN(vaB) || isNaN(vaC) || isNaN(vaD) || vaA < 0 || vaB < 0 || vaC < 0 || vaD < 0 ) {
    resultadoEjercicio2.textContent = "Ingrese números positivos";
  } else {
    //Verificación para identificar que los valores no sean iguales
    if (vaA != vaB && vaA != vaC && vaA != vaD && vaB != vaC && vaB != vaD && vaC != vaD) {
      const numeros = [vaA, vaB, vaC, vaD]  //Valores en una lista
      console.log(numeros);         //Valores en consola

      
      
      //Transformación
      resultadoEjercicio2.innerHTML = "<b>" + "El valor máximo es: " + "</b>" + Math.max(...numeros) +
                      "<br>" + 
                      "<b>" + "El valor mínimo es: " + "</b>" + Math.min(...numeros)  
    } else {
      resultadoEjercicio2.textContent = "Ningún número debe ser igual";
    }
  }
});
