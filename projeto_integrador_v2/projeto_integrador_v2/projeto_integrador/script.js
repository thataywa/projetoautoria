function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }




// Alternar exibição de conteúdo
function alternarConteudo(idConteudo) {
    const conteudo = document.getElementById(idConteudo);
    conteudo.style.display = conteudo.style.display === 'block' ? 'none' : 'block';
}

// Login
document.getElementById("formularioLogin").addEventListener("submit", function(evento) {
    evento.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let emailSalvo = localStorage.getItem("emailUsuario");
    let senhaSalva = localStorage.getItem("senhaUsuario");

    if (email === emailSalvo && senha === senhaSalva) {
        alert("Login bem-sucedido!");
        window.location.href = "pagina02_index.html";
    } else {
        alert("E-mail ou senha incorretos ou não cadastrados.");
    }
});

// Alternar entre login e cadastro
function mostrarCadastro() {
    document.querySelector('.container-login').style.display = 'none';
    document.querySelector('.container-cadastro').style.display = 'block';
}

function mostrarLogin() {
    document.querySelector('.container-cadastro').style.display = 'none';
    document.querySelector('.container-recuperacao-senha').style.display = 'none';
    document.querySelector('.container-login').style.display = 'block';
}

// Cadastro
document.getElementById("formularioCadastro").addEventListener("submit", function(evento) {
    evento.preventDefault();

    let novoEmail = document.getElementById("novoEmail").value;
    let novaSenha = document.getElementById("novaSenha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    if (novaSenha !== confirmarSenha) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
    }

    let emailArmazenado = localStorage.getItem("emailUsuario");
    
    if (emailArmazenado === novoEmail) {
        alert("Este e-mail já está cadastrado. Tente outro.");
    } else {
        localStorage.setItem("emailUsuario", novoEmail);
        localStorage.setItem("senhaUsuario", novaSenha);
        alert("Cadastro realizado com sucesso!");
        mostrarLogin();
    }
});

// Recuperação de senha
function mostrarRecuperacaoSenha() {
    document.querySelector('.container-login').style.display = 'none';
    document.querySelector('.container-cadastro').style.display = 'none';
    document.querySelector('.container-recuperacao-senha').style.display = 'block';
}

document.getElementById("formularioRecuperacaoSenha").addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    let email = document.getElementById("emailRecuperacao").value;
    let emailSalvo = localStorage.getItem("emailUsuario");
    
    if (email === emailSalvo) {
        alert("Se este e-mail estiver cadastrado, você receberá um link de recuperação.");
        mostrarLogin();
    } else {
        alert("Este e-mail não está registrado!");
    }
}
);