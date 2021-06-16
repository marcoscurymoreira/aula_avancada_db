import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTabPedidoItem1623782923728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_pedido_item",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "produto_id", type: "integer", length: "5" },//fk do produto.
                    { name: "quant", type: "numeric", precision: 8, scale: 2 },
                    { name: "vl_unit", type: "numeric", precision: 8, scale: 2 },
                    { name: "vl_total", type: "numeric", precision: 8, scale: 2 },
                    { name: "pedido_id", type: "integer", length: "5" },//fk do cliente.
                ]
            })
        )
        
        //vamos agora criar a FK
        await queryRunner.createForeignKey("tab_pedido_item", new TableForeignKey({//na tabela de itens dos pedidos...
            columnNames: ["produto_id"],//nós vamos pegar a coluna produto_id...
            referencedColumnNames: ["id"],//e referenciar com a coluna id...
            referencedTableName: "tab_produto",//da tabela de produtos...
            name: "fk_item_produto",//e vamos dar o nome de fk_item_produto
        }));

        //vamos agora criar a outra FK
        await queryRunner.createForeignKey("tab_pedido_item", new TableForeignKey({//na tabela de itens dos pedidos...
            columnNames: ["pedido_id"],//nós vamos pegar a coluna pedido_id...
            referencedColumnNames: ["id"],//e referenciar com a coluna id...
            referencedTableName: "tab_pedido",//da tabela de pedidos...
            name: "fk_item_pedido",//e vamos dar o nome de fk_item_pedido
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_pedido_item")
    }

}
