import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTags1632501917103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tags",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tags");
    }

}

// aula 3 => criando a entidade TAG:::::::::::::::::::::::

/* CRIANDO TAG (uma nova entidade) ::::::::::::::

1. MIGRATION:

yarn typeorm migration:create -n CreateTags
escrever o arquivo da migration.
dps rodar: yarn typeorm migration:run
ver se apareceu no beekeeper

dps...

(criar normalmente os arquivos)

2. ENTIDADE
3. REPOSITORIO
4. SERVICES (as regras,logica)
5. CONTROLLER

- referenciar em routes.ts

- yarn dev

- no insomnia => criar new request: Create Tag (POST) (JSON) (_.baseURL/tags), escrever o corpo tbm, SEND

agora tag ta funcionando. 40:40

*/
