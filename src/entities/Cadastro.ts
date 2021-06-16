//criação de objetos que serão persistidos no DB. Serão iteragidos no DB.

import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';//importando a entity para dizer que a class é uma entidade.


@Entity("tab_cadastro")
export class Cadastro{
    @PrimaryGeneratedColumn()//informando que este atributo é PK.
    id: number;

    @Column()//informando que teremos uma coluna
    cpf: string;

    @Column()//informando que teremos uma coluna
    nome: string;
}