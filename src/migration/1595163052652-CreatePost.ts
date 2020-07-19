import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreatePost1595163052652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // 数据库升级
        return await queryRunner.createTable(new Table({
            name: 'posts',
            columns: [{
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },{
                name: 'title', type: 'varchar'
              },
              {
                name: 'content', type: 'text'
              }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // 数据库降级
        return await queryRunner.dropTable('posts')
    }

}