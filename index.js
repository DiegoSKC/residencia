const prompt = require('prompt-sync')();
const {
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
} = require('./prompts');

function menu() {
  console.log('\nMenu');
  console.log('1. Adicionar Corretora');
  console.log('2. Adicionar Corretor');
  console.log('3. Adicionar Imóvel');
  console.log('4. Adicionar Cliente');
  console.log('5. Adicionar Venda');
  console.log('6. Listar Corretoras');
  console.log('7. Listar Corretores');
  console.log('8. Listar Imóveis');
  console.log('9. Listar Clientes');
  console.log('10. Listar Vendas');
  console.log('11. Encontrar Corretora');
  console.log('12. Encontrar Corretor');
  console.log('13. Encontrar Imóvel');
  console.log('14. Encontrar Cliente');
  console.log('15. Encontrar Venda');
  console.log('0. Sair');

  const escolha = parseInt(prompt('Escolha uma opção: '), 10);

  switch (escolha) {
    case 1: adicionarCorretora(); break;
    case 2: adicionarCorretor(); break;
    case 3: adicionarImovel(); break;
    case 4: adicionarCliente(); break;
    case 5: adicionarVenda(); break;
    case 6: listarCorretoras(); break;
    case 7: listarCorretores(); break;
    case 8: listarImoveis(); break;
    case 9: listarClientes(); break;
    case 10: listarVendas(); break;
    case 11: {
      const id = parseInt(prompt('ID da corretora: '), 10);
      encontrarCorretora(id);
      break;
    }
    case 12: {
      const id = parseInt(prompt('ID do corretor: '), 10);
      encontrarCorretor(id);
      break;
    }
    case 13: {
      const id = parseInt(prompt('ID do imóvel: '), 10);
      encontrarImovel(id);
      break;
    }
    case 14: {
      const id = parseInt(prompt('ID do cliente: '), 10);
      encontrarCliente(id);
      break;
    }
    case 15: {
      const id = parseInt(prompt('ID da venda: '), 10);
      encontrarVenda(id);
      break;
    }
    case 0: process.exit(); break;
    default: console.log('Opção inválida. Tente novamente.'); break;
  }
}

function iniciar() {
  while (true) {
    menu();
  }
}

iniciar();

