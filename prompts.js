const prompt = require('prompt-sync')();
const { corretoras, corretores, imoveis, clientes, vendas } = require('./data');

function adicionarCorretora() {
  const nome = prompt('Nome da corretora: ');
  const corretora = { id: corretoras.length + 1, nome };
  corretoras.push(corretora);
  console.log('Corretora adicionada com sucesso:', corretora);
}

function adicionarCorretor() {
  const nome = prompt('Nome do corretor: ');
  const idCorretora = parseInt(prompt('ID da corretora: '), 10);
  const corretor = { id: corretores.length + 1, nome, id_corretora: idCorretora };
  corretores.push(corretor);
  console.log('Corretor adicionado com sucesso:', corretor);
}

function adicionarImovel() {
  const numero = prompt('Número do imóvel: ');
  const rua = prompt('Rua do imóvel: ');
  const bairro = prompt('Bairro do imóvel: ');
  const idCorretora = parseInt(prompt('ID da corretora: '), 10);
  const imovel = { id: imoveis.length + 1, numero, rua, bairro, id_corretora: idCorretora };
  imoveis.push(imovel);
  console.log('Imóvel adicionado com sucesso:', imovel);
}

function adicionarCliente() {
  const nome = prompt('Nome do cliente: ');
  const cliente = { id: clientes.length + 1, nome };
  clientes.push(cliente);
  console.log('Cliente adicionado com sucesso:', cliente);
}

function adicionarVenda() {
  const idImovel = parseInt(prompt('ID do imóvel: '), 10);
  const idCliente = parseInt(prompt('ID do cliente: '), 10);
  const idCorretor = parseInt(prompt('ID do corretor: '), 10);
  const venda = { id: vendas.length + 1, id_imovel: idImovel, id_cliente: idCliente, id_corretor: idCorretor };
  vendas.push(venda);
  console.log('Venda adicionada com sucesso:', venda);
}

// Funções para listar dados
function listarCorretoras() {
  console.log('Corretoras:', corretoras);
}

function listarCorretores() {
  console.log('Corretores:', corretores);
}

function listarImoveis() {
  console.log('Imóveis:', imoveis);
}

function listarClientes() {
  console.log('Clientes:', clientes);
}

function listarVendas() {
  console.log('Vendas:', vendas);
}

// Funções para encontrar dados
function encontrarCorretora(id) {
  const corretora = corretoras.find(c => c.id === id);
  if (corretora) {
    console.log('Corretora encontrada:', corretora);
  } else {
    console.log('Corretora não encontrada.');
  }
}

function encontrarCorretor(id) {
  const corretor = corretores.find(c => c.id === id);
  if (corretor) {
    console.log('Corretor encontrado:', corretor);
  } else {
    console.log('Corretor não encontrado.');
  }
}

function encontrarImovel(id) {
  const imovel = imoveis.find(i => i.id === id);
  if (imovel) {
    console.log('Imóvel encontrado:', imovel);
  } else {
    console.log('Imóvel não encontrado.');
  }
}

function encontrarCliente(id) {
  const cliente = clientes.find(c => c.id === id);
  if (cliente) {
    console.log('Cliente encontrado:', cliente);
  } else {
    console.log('Cliente não encontrado.');
  }
}

function encontrarVenda(id) {
  const venda = vendas.find(v => v.id === id);
  if (venda) {
    console.log('Venda encontrada:', venda);
  } else {
    console.log('Venda não encontrada.');
  }
}

// Exportar funções
module.exports = {
  adicionarCorretora,
  adicionarCorretor,
  adicionarImovel,
  adicionarCliente,
  adicionarVenda,
  listarCorretoras,
  listarCorretores,
  listarImoveis,
  listarClientes,
  listarVendas,
  encontrarCorretora,
  encontrarCorretor,
  encontrarImovel,
  encontrarCliente,
  encontrarVenda
};
