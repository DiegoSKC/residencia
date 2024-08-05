class Corretora {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Corretor {
    constructor(id, nome, idCorretora) {
        this.id = id;
        this.nome = nome;
        this.idCorretora = idCorretora;
    }
}

class Imovel {
    constructor(numero, rua, bairro, idCorretora) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.idCorretora = idCorretora;
    }
}

class Cliente {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Venda {
    constructor(idImovel, idCliente, idCorretor) {
        this.idImovel = idImovel;
        this.idCliente = idCliente;
        this.idCorretor = idCorretor;
    }
}

class Imobiliaria {
    constructor() {
        this.corretoras = [];
        this.corretores = [];
        this.imoveis = [];
        this.clientes = [];
        this.vendas = [];
    }

    addCorretora(nome) {
        const id = this.corretoras.length + 1;
        const corretora = new Corretora(id, nome);
        this.corretoras.push(corretora);
        return corretora;
    }

    addCorretor(nome, idCorretora) {
        const id = this.corretores.length + 1;
        const corretor = new Corretor(id, nome, idCorretora);
        this.corretores.push(corretor);
        return corretor;
    }

    addImovel(numero, rua, bairro, idCorretora) {
        const imovel = new Imovel(numero, rua, bairro, idCorretora);
        this.imoveis.push(imovel);
        return imovel;
    }

    addCliente(nome) {
        const id = this.clientes.length + 1;
        const cliente = new Cliente(id, nome);
        this.clientes.push(cliente);
        return cliente;
    }

    addVenda(idImovel, idCliente, idCorretor) {
        const venda = new Venda(idImovel, idCliente, idCorretor);
        this.vendas.push(venda);
        return venda;
    }

    getCorretoras() {
        return this.corretoras;
    }

    getCorretores() {
        return this.corretores;
    }

    getImoveis() {
        return this.imoveis;
    }

    getClientes() {
        return this.clientes;
    }

    getVendas() {
        return this.vendas;
    }
}


const imobiliaria = new Imobiliaria();

const corretora1 = imobiliaria.addCorretora('Corretora ABC');

const corretor1 = imobiliaria.addCorretor('João Silva', corretora1.id);

const imovel1 = imobiliaria.addImovel(123, 'Rua A', 'Bairro X', corretora1.id);

const cliente1 = imobiliaria.addCliente('Maria Oliveira');

const venda1 = imobiliaria.addVenda(imovel1.numero, cliente1.id, corretor1.id);

console.log('Corretoras:', imobiliaria.getCorretoras());
console.log('Corretores:', imobiliaria.getCorretores());
console.log('Imóveis:', imobiliaria.getImoveis());
console.log('Clientes:', imobiliaria.getClientes());
console.log('Vendas:', imobiliaria.getVendas());
