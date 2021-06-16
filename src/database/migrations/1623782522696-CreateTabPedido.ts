import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTabPedido1623782522696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_pedido",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "cliente_id", type: "integer", length: "5" },//fk do cliente.
                    { name: "dh_pedido", type: "timestamp" },
                    { name: "vl_total", type: "numeric", precision: 8, scale: 2 },
                ]
            })
        )
        
        //vamos agora criar a FK
        await queryRunner.createForeignKey("tab_pedido", new TableForeignKey({//na tabela de pedidos...
            columnNames: ["cliente_id"],//nós vamos pegar a coluna cliente_id...
            referencedColumnNames: ["id"],//e referenciar com a coluna id...
            referencedTableName: "tab_cliente",//da tabela de clientes...
            name: "fk_produto_cliente",//e vamos dar o nome de fk_produto_cliente
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_pedido")
    }

}

