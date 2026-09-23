/*
   SCRIPT PARA MUDANÇA AUTOMÁTICA DE TEMA POR DATA
 */

document.addEventListener('DOMContentLoaded', () => {
    aplicarTemaPorData();
});

function aplicarTemaPorData() {
    const hoje = new Date();
    const mes = hoje.getMonth(); // 0 = Janeiro, 11 = Dezembro
    const dia = hoje.getDate();  // 1 a 31
    const body = document.body;

    // Limpa qualquer tema anterior
    body.classList.remove('theme-christmas', 'theme-easter');

    // TEMA DE NATAL
    // Ativo de 1º de Dezembro até 26 de Dezembro
    if (mes === 11 && dia >= 1 && dia <= 26) {
        body.classList.add('theme-christmas');
        console.log("Tema de Natal ativado!");
        return;
    }

    // TEMA DE PÁSCOA
    // A Páscoa muda de data todo ano, ativado de 15 de Março a 15 de Abril.
    if ((mes === 2 && dia >= 15) || (mes === 3 && dia <= 15)) {
        body.classList.add('theme-easter');
        console.log("Tema de Páscoa ativado!");
        return;
    }

    // Se não for nenhuma das datas acima, o tema padrão (definido no :root do CSS) é mantido.
    console.log("Tema padrão ativado.");
}

// Para testar o Natal, digite no console: forcarTema('christmas')
// Para testar a Páscoa, digite no console: forcarTema('easter')
// Para voltar ao normal, digite no console: forcarTema('padrao')
function forcarTema(tema) {
    const body = document.body;
    body.classList.remove('theme-christmas', 'theme-easter');
    
    if (tema === 'christmas') {
        body.classList.add('theme-christmas');
        console.log("Tema de Natal forçado manualmente.");
    } else if (tema === 'easter') {
        body.classList.add('theme-easter');
        console.log("Tema de Páscoa forçado manualmente.");
    } else {
        console.log("Tema padrão restaurado.");
    }
}