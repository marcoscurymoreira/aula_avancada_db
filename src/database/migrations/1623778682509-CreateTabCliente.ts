import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTabCliente1623778682509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_cliente",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "cpf_cnpj", type: "varchar", length: "15", isNullable: false },
                    { name: "nome", type: "varchar", length: "50", isNullable: false },
                    { name: "ativo", type: "boolean", default: true, isNullable: false },
                    { name: "dt_inclusao", type: "timestamp", default: "now()" },
                    { name: "dt_alteracao", type: "timestamp", default: "now()" },
                    { name: "endereco_id", type: "integer", length: "5" },//fk do endereço.
                ]
            })
        )

        //vamos agora criar a FK
        await queryRunner.createForeignKey("tab_cliente", new TableForeignKey({//na tabela de clientes...
            columnNames: ["endereco_id"],//nós vamos pegar a coluna endereco_id...
            referencedColumnNames: ["id"],//e referenciar com a coluna id...
            referencedTableName: "tab_endereco",//da tabela de endereco...
            name: "fk_cliente_endereco",//e vamos dar o nome de fk_cliente_endereco
        }))
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_cliente")
    };

}
