function gerarCurriculo() {
  const nome = document.getElementById("nome").value.trim() || "Seu Nome";
  const email = document.getElementById("email").value.trim() || "seu@email.com";
  const telefone = document.getElementById("telefone").value.trim() || "(00) 0000-0000";
  const local = document.getElementById("local").value.trim() || "Sua Cidade, Estado";
  const objetivo = document.getElementById("objetivo").value.trim() || "Descreva seu objetivo profissional aqui.";
  const experiencias = document.getElementById("experiencia").value.trim().split('\n').filter(exp => exp);
  const cursos = document.getElementById("cursos").value.trim().split('\n').filter(curso => curso);
  const habilidades = document.getElementById("habilidades").value.trim() || "Liste suas habilidades aqui.";

  const azul = "#0056b3"; // cor principal do currículo
  const cinza = "#555"; // cor secundária

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = `
    <div style="font-family: 'Arial', sans-serif; padding: 30px; max-width: 800px; line-height: 1.6; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      
      <!-- Cabeçalho -->
      <header style="text-align: center; border-bottom: 3px solid ${azul}; padding-bottom: 15px; margin-bottom: 25px;">
        <h1 style="font-size: 34px; margin: 0; font-weight: bold; color: ${azul};">${nome.toUpperCase()}</h1>
        <div style="margin-top: 10px; display: flex; justify-content: center; gap: 20px; font-size: 14px; color: ${cinza}; flex-wrap: wrap;">
          <span><i class="fa-solid fa-phone" style="color:${azul}; margin-right: 5px;"></i>${telefone}</span>
          <span><i class="fa-solid fa-location-dot" style="color:${azul}; margin-right: 5px;"></i>${local}</span>
          <span><i class="fa-solid fa-envelope" style="color:${azul}; margin-right: 5px;"></i>${email}</span>
        </div>
      </header>

      <!-- Objetivo -->
      <section style="margin-bottom: 20px;">
        <h3 style="margin-bottom: 8px; color:${azul}; border-bottom: 1px solid ${azul}; display: inline-block; padding-bottom: 2px;">OBJETIVO</h3>
        <p style="margin: 5px 0 0 0; color:${cinza};">${objetivo}</p>
      </section>

      <!-- Experiência -->
      <section style="margin-bottom: 20px;">
        <h3 style="margin-bottom: 8px; color:${azul}; border-bottom: 1px solid ${azul}; display: inline-block; padding-bottom: 2px;">EXPERIÊNCIA PROFISSIONAL</h3>
        ${experiencias.length ? experiencias.map(exp => `<p style="margin:5px 0; color:${cinza};">• ${exp}</p>`).join('') : `<p style="color:${cinza};">Nenhuma experiência adicionada.</p>`}
      </section>

      <!-- Cursos -->
      <section style="margin-bottom: 20px;">
        <h3 style="margin-bottom: 8px; color:${azul}; border-bottom: 1px solid ${azul}; display: inline-block; padding-bottom: 2px;">CURSOS</h3>
        ${cursos.length ? `<ul style="color:${cinza}; margin: 5px 0 0 20px;">${cursos.map(curso => `<li>${curso}</li>`).join('')}</ul>` : `<p style="color:${cinza};">Nenhum curso informado.</p>`}
      </section>

      <!-- Habilidades -->
      <section>
        <h3 style="margin-bottom: 8px; color:${azul}; border-bottom: 1px solid ${azul}; display: inline-block; padding-bottom: 2px;">HABILIDADES E COMPETÊNCIAS</h3>
        <p style="margin: 5px 0 0 0; color:${cinza};">${habilidades}</p>
      </section>

    </div>
  `;

  // Gerar PDF
  html2pdf().from(tempDiv).save('curriculo.pdf');
}
