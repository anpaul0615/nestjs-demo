import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseModule = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: ':memory:',
  autoLoadEntities: true,
  synchronize: true,
});
