import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTabTelefone1623778696167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_cliente_telefone",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "cliente_id", type: "integer", length: "5" },//fk do cliente.
                    { name: "tipo", type: "varchar", length: "10" },
                    { name: "ddd", type: "integer", length: "3" },
                    { name: "numero", type: "integer", length: "10" },
                ]
            })
        )
        
        //vamos agora criar a FK
        await queryRunner.createForeignKey("tab_cliente_telefone", new TableForeignKey({//na tabela de telefones...
            columnNames: ["cliente_id"],//nós vamos pegar a coluna cliente_id...
            referencedColumnNames: ["id"],//e referenciar com a coluna id...
            referencedTableName: "tab_cliente",//da tabela de clientes...
            name: "fk_telefone_cliente",//e vamos dar o nome de fk_cliente_telefone
        }));
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_cliente_telefone")
    };

};
