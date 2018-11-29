import $ from "jquery";

const cadastrarUser = (nome, email) => {
    $.ajax({
        url: "http://cdc-react.herokuapp.com/api/autores/",
        dataType: "json",
        contentType: "application/json",
        type: "post",
        data: JSON.stringify({
          nome: nome,
          email: email,
          senha: "123"
        }),
        success: (resposta) => {
          console.log("sucesso");
          return true;
        },
        error: () => {
          console.log("erro");
          return false;
        }
    });
};

export {cadastrarUser};