//criação de objetos que serão persistidos no DB. Serão iteragidos no DB.

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';//importando a entity para dizer que a class é uma entidade.


@Entity("tab_endereco")
export class Endereco extends BaseEntity{
    @PrimaryGeneratedColumn()//informando que este atributo é PK.
    id: number;

    @Column()//informando que teremos uma coluna
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    cidade: string;
    
}