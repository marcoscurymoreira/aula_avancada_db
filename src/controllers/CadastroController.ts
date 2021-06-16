//gerenciar as regras de negócio da aplicação.
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { CadastroRepository } from "../repositories/CadastroRepository";



export default {

    async create(req: Request, res: Response) {
        const { nome, cpf } = req.body;//desestruturamos o body.
        var data = { cpf, nome };//criamos um objeto com base na desestruturação.
        const repository = getCustomRepository(CadastroRepository);//utilizando o repository que importamos.
        data = await repository.save(data);
        return res.status(201).json({ data: data });
    },

    async list(req: Request, res: Response) {
        const repository = getCustomRepository(CadastroRepository);
        const data = await repository.find();
        return res.status(200).json({ data: data });
    },

    async find(req: Request, res: Response) {
        const { id } = req.params;//vai receber através do parâmetro ID da minha requisição.
        const repository = getCustomRepository(CadastroRepository);
        const data = await repository.findOne(id);
        return res.status(200).json(data);
    },

    async update(req: Request, res: Response) {
        const { id } = req.params;//vai receber através do parâmetro ID da minha requisição.
        const { cpf, nome } = req.body;//desestruturamos o body.
        const data = { cpf, nome };//criamos um objeto com base na desestruturação.
        //await knex('tab_cadastro').update(data).where({ id });//atualizar a tabela com base nos parâmetros do data.
        const repository = getCustomRepository(CadastroRepository);
        await repository.update(id, data);
        return res.status(200).json({ data: "Cadastro atualizado com sucesso." });
    },

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const repository = getCustomRepository(CadastroRepository);
        await repository.delete(id);
        return res.status(200).json({ message: 'Cadastro deletado com sucesso' });
    }
}