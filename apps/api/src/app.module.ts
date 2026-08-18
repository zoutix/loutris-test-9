import { Module } from '@nestjs/common';
import { DuelGateway } from './duel.gateway';
@Module({providers:[DuelGateway]}) export class AppModule{}
