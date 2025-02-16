import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { FurucomboContractFactory } from './contracts';
import { PolygonFurucomboFundTokenFetcher } from './polygon/furucombo.fund.token-fetcher';

@Module({
  providers: [FurucomboContractFactory, PolygonFurucomboFundTokenFetcher],
})
export class FurucomboAppModule extends AbstractApp() {}
