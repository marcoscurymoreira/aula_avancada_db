//vamos fazer a iteração com o banco. Vai pegar as informações da entity e interpretá-las.

import { EntityRepository, Repository } from "typeorm";
import { Cadastro } from "../entities/Cadastro";

@EntityRepository(Cadastro)//estou dizendo que este repositório está relacionado ao mapeamento da classe cadastro que importamos da entity.
class CadastroRepository extends Repository <Cadastro> {

}

export {CadastroRepository};