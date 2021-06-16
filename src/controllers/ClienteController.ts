//gerenciar as regras de negócio da aplicação.
import { Request, Response } from 'express';
import { getConnection, getCustomRepository } from 'typeorm';
import { Cliente } from '../entities/Cliente';
import { ClienteTelefone } from '../entities/ClienteTelefone';
import { ClienteRepository } from "../repositories/ClienteRepository";



class ClienteController {

    async create(req: Request, res: Response) {
        const { cpfCnpj, nome, endereco, telefones } = req.body;//desestruturamos o body.
        var data = { cpfCnpj, nome, endereco, telefones };//criamos um objeto com base na desestruturação.
        const repository = getCustomRepository(ClienteRepository);//utilizando o repository que importamos.
        data = await repository.save(data);
        return res.status(201).json({ data: data });
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;//vai receber através do parâmetro ID da minha requisição.
        const { cpfCnpj, nome } = req.body;//desestruturamos o body.

        const cliente = { cpfCnpj, nome };//criamos um objeto com base na desestruturação.
        //await knex('tab_cadastro').update(data).where({ id });//atualizar a tabela com base nos parâmetros do data.

        const repository = getCustomRepository(ClienteRepository);
        await repository.update(id, cliente);
        return res.status(200).json({ data: "Dados alterados com sucesso" });
    }

    async list(req: Request, res: Response) {
        const repository = getCustomRepository(ClienteRepository);
        const data = await repository.find();
        return res.status(200).json({ data: data });
    }

    async find(req: Request, res: Response) {
        const { id } = req.params;//vai receber através do parâmetro ID da minha requisição.
        const repository = getCustomRepository(ClienteRepository);
        const data = await repository.findOne(id);
        return res.status(200).json(data);
    }

    async listCity(req: Request, res: Response) {//buscando pela cidade.

        const { nome } = req.params;

        const data = await getConnection()//obtendo uma connection...
            .getRepository(Cliente)//da entidade cliente...
            .createQueryBuilder("cliente").innerJoin("cliente.endereco", "endereco")//fazendo um join do cliente com endereco...
            .where("endereco.cidade = :nome", { nome: nome })//na posicao cidade e vai obter um parâmetro "nome".
            .getMany();

        return res.status(200).json({ data: data });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const repository = getCustomRepository(ClienteRepository);
        await repository.delete(id);
        return res.status(200).json({ message: 'Cadastro deletado com sucesso' });
    }

    async addTel(req: Request, res: Response) {
        const { id } = req.params;
        const { ddd, numero, tipo } = req.body;


        const repository = getCustomRepository(ClienteRepository);
        const cliente = await repository.findOne(id);


        const telefone = new ClienteTelefone();
        telefone.numero = numero;
        telefone.ddd = ddd;
        telefone.tipo = tipo;
        telefone.cliente = cliente;

        cliente.telefones.push(telefone);

        await repository.save(cliente);


        return res.status(200).json({ msg: "Telefone adicionado com sucesso." });
    }
}

export { ClienteController };