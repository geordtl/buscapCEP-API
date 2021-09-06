const buscarCep = () => {

    const cepDigitado = document.getElementById('campoCep').value

    axios.get(`https:viacep.com.br/ws/${cepDigitado}/json/`).then((response) => {
        const resAPI = response.data

        document.getElementById('rua').value = resAPI.logradouro
        document.getElementById('bairro').value = resAPI.bairro
        document.getElementById('cidade').value = resAPI.localidade
        document.getElementById('uf').value = resAPI.uf

        console.log(response.status);

    }).catch((error) => {
        alert('Confira o CEP informado!')
        console.log(error);
    })
}