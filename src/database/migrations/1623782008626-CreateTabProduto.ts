import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTabProduto1623782008626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tab_produto",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "cd_barras", type: "varchar", length: "15" },
                    { name: "nome", type: "varchar", length: "50" },
                    { name: "vl_unit", type: "numeric", precision: 8, scale: 2 },//precision 8 significa dizer que teremos até 8 dígitos no nosso valor, e a scale é a quantidade de dígitos depois da vírgula.
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tab_produto")
    }

}
