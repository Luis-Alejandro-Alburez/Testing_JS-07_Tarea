function calculateHumanAge() {
  // Obtener la edad de la tortuga
  const turtleAge = parseInt(document.getElementById("turtleAge").value);

  // Validar que la edad sea un número positivo
  if (isNaN(turtleAge) || turtleAge < 0) {
    alert("Por favor, ingresa una edad válida.");
    return;
  }

  let humanAge;

  // Calcular la edad en años humanos
  if (turtleAge <= 5) {
    humanAge = turtleAge * 10;
  } else {
    humanAge = 5 * 10 + (turtleAge - 5) * 5;
  }

  // Mostrar el resultado
  document.getElementById(
    "result"
  ).textContent = `La edad de tu tortuga en años humanos es: ${humanAge} años.`;
}
