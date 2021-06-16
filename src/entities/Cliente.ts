//criação de objetos que serão persistidos no DB. Serão iteragidos no DB.

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity, JoinColumn, OneToOne, OneToMany } from 'typeorm';//importando a entity para dizer que a class é uma entidade.
import { ClienteTelefone } from './ClienteTelefone';

import { Endereco } from './Endereco';


@Entity("tab_cliente")
export class Cliente extends BaseEntity {
    @PrimaryGeneratedColumn()//informando que este atributo é PK.
    id: number;

    @Column({ name: "cpf_cnpj" })//informando que teremos uma coluna
    cpfCnpj: string;

    @Column()//informando que teremos uma coluna
    nome: string;

    @Column()
    ativo: boolean;

    @OneToOne(() => Endereco, { cascade: true, eager: true })//todo endereco tem somente um cliente e vice-versa, então é onetoone. Cascade: significa que irá sofrer uma mudança aqui sempre que a principal mudar. Eager: quando trouxer a informação do cliente, já traga a do endereço.

    @JoinColumn({ name: "endereco_id" })//entre uma tabela e outra, usamos joincolumn.
    endereco: Endereco;

    @OneToMany(() => ClienteTelefone, tel => tel.cliente, {cascade: true, eager: true })//um cliente pode ter muitos telefones.
    telefones: ClienteTelefone[];

    @CreateDateColumn({ name: "dt_inclusao" })//o create date column tem a capacidade de atualizar automaticamente este atributo quando a coluna for criada.
    dataInclusao: Date;

    @UpdateDateColumn({ name: "dt_alteracao" })//o update date column tem a capacidade de atualizar automaticamente este atributo quando a coluna for alterada.
    dataAlteracao: Date;


}