//responsável por configurar as rotas do express.
import { Router } from 'express';

import CadastroController from './controllers/CadastroController'; //pegando as informaçãoes de regras de negócio do cadastro.

import {ClienteController} from './controllers/ClienteController';

const routes = Router();

routes.post('/cadastros', CadastroController.create); //rota POST
routes.put('/cadastros/:id', CadastroController.update); //rota PUT
routes.get('/cadastros', CadastroController.list); //rota GET
routes.get('/cadastros/:id', CadastroController.find); //rota GET por ID.
routes.delete('/cadastros/:id', CadastroController.delete);//rota DELETE

const clienteController = new ClienteController();
routes.post('/clientes', clienteController.create);
routes.post('clientes/:id/telefones', clienteController.addTel);
routes.put('/clientes/:id', clienteController.update);
routes.get('/clientes', clienteController.list);
routes.get('/clientes/:id', clienteController.find);
routes.delete('/clientes/:id', clienteController.delete);


export default routes;