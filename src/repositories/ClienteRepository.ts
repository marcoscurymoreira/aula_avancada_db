//vamos fazer a iteração com o banco. Vai pegar as informações da entity e interpretá-las.

import { EntityRepository, Repository } from "typeorm";
import { Cliente } from "../entities/Cliente";

@EntityRepository(Cliente)//estou dizendo que este repositório está relacionado ao mapeamento da classe cliente que importamos da entity.
class ClienteRepository extends Repository<Cliente> {

}

export { ClienteRepository };