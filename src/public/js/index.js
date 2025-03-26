document.addEventListener("DOMContentLoaded", function () {
  const btnRegistrar = document.getElementById("btn-registrar");
  const historico = document.getElementById("historico");
  let veiculoEditando = null;

  async function carregarVeiculos() {
    const response = await fetch("/api/veiculos");
    const veiculos = await response.json();
    atualizarTabela(veiculos);
  }

  btnRegistrar.addEventListener("click", async function () {
    const placa = document.getElementById("placa").value.trim();
    const marca = document.getElementById("marca").value.trim();
    const modelo = document.getElementById("modelo").value.trim();
    const ano = document.getElementById("ano").value.trim();

    if (!placa || !marca || !modelo || !ano) {
      alert("Preencha todos os campos!");
      return;
    }

    if (veiculoEditando) {
      // Atualizar veículo existente
      const response = await fetch(`/api/veiculos/${veiculoEditando.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ placa, marca, modelo, ano }),
      });

      if (response.ok) {
        alert("Veículo atualizado com sucesso!");
        veiculoEditando = null;
        btnRegistrar.textContent = "Registrar"; // Volta ao estado original
      } else {
        alert("Erro ao atualizar veículo!");
      }
    } else {
      // Registrar novo veículo
      const response = await fetch("/api/veiculos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ placa, marca, modelo, ano }),
      });

      if (response.ok) {
        alert("Veículo cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar veículo!");
      }
    }

    carregarVeiculos();
    limparCampos();
  });

  function atualizarTabela(veiculos) {
    historico.innerHTML = "";
    veiculos.forEach((veiculo) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${veiculo.placa}</td>
        <td>${veiculo.marca}</td>
        <td>${veiculo.modelo}</td>
        <td>${veiculo.ano}</td>
        <td>
          <button class="btn-editar" data-id="${veiculo.id}" data-placa="${veiculo.placa}" data-marca="${veiculo.marca}" data-modelo="${veiculo.modelo}" data-ano="${veiculo.ano}">✏️ Editar</button>
          <button class="btn-remover" data-id="${veiculo.id}">❌ Remover</button>
        </td>
      `;
      historico.appendChild(row);
    });

    document.querySelectorAll(".btn-editar").forEach((botao) => {
      botao.addEventListener("click", function () {
        veiculoEditando = {
          id: this.getAttribute("data-id"),
          placa: this.getAttribute("data-placa"),
          marca: this.getAttribute("data-marca"),
          modelo: this.getAttribute("data-modelo"),
          ano: this.getAttribute("data-ano"),
        };
        preencherCamposParaEdicao(veiculoEditando);
      });
    });

    document.querySelectorAll(".btn-remover").forEach((botao) => {
      botao.addEventListener("click", async function () {
        const id = this.getAttribute("data-id");
        await fetch(`/api/veiculos/${id}`, { method: "DELETE" });
        carregarVeiculos();
      });
    });
  }

  function preencherCamposParaEdicao(veiculo) {
    document.getElementById("placa").value = veiculo.placa;
    document.getElementById("marca").value = veiculo.marca;
    document.getElementById("modelo").value = veiculo.modelo;
    document.getElementById("ano").value = veiculo.ano;

    btnRegistrar.textContent = "Alterar";
  }

  function limparCampos() {
    document.getElementById("placa").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";

    veiculoEditando = null;
    btnRegistrar.textContent = "Registrar";
  }

  carregarVeiculos();
});
