import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class RedisModule {
  static async registerAsync(): Promise<DynamicModule> {
    return {
      module: RedisModule,
      imports: [],
      providers: [],
      exports: [],
    };
  }
}
