//criação de objetos que serão persistidos no DB. Serão iteragidos no DB.

import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';//importando a entity para dizer que a class é uma entidade.
import { Cliente } from "./Cliente"
import { TelefoneTipo } from "./TelefoneTipo";


@Entity("tab_cliente_telefone")
export class ClienteTelefone extends BaseEntity {
    @PrimaryGeneratedColumn()//informando que este atributo é PK.
    id: number;

    @Column()//informando que teremos uma coluna
    ddd: number;

    @Column()
    numero: number;

    @Column({
        type: "enum",
        enum: TelefoneTipo,
        name: "tipo"
    })
    tipo: TelefoneTipo;

    @ManyToOne(() => Cliente, cliente => cliente.telefones)

    @JoinColumn({ name: "cliente_id" })//entre uma tabela e outra, usamos joincolumn.
    cliente: Cliente;

}