function girar() {
  let nomes = document.getElementById("nomes").value.split(",");
  let numTimes = parseInt(document.getElementById("times").value);

  if (nomes.length < 2 || !numTimes) {
    alert("Preencha corretamente!");
    return;
  }

  nomes = nomes.map(n => n.trim());

  let roleta = document.getElementById("roleta");

  // animação girando
  let graus = 360 * 5 + Math.floor(Math.random() * 360);
  roleta.style.transform = `rotate(${graus}deg)`;

  // som
  let som = document.getElementById("som");
  som.play();

  setTimeout(() => {
    // embaralhar
    nomes.sort(() => Math.random() - 0.5);

    let resultado = "";

    let tamanho = Math.ceil(nomes.length / numTimes);

    for (let i = 0; i < numTimes; i++) {
      let time = nomes.slice(i * tamanho, (i + 1) * tamanho);

      resultado += `\nEquipe ${i + 1}:\n`;
      time.forEach(nome => {
        resultado += `- ${nome}\n`;
      });
    }

    document.getElementById("resultado").innerText = resultado;
  }, 3000);
}if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}