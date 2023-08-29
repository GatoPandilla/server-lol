import { Module } from '@nestjs/common';
import { ChampsController } from './champ.controller';
import { ChampsService } from './champ.service';

@Module({
  controllers: [ChampsController],
  providers: [ChampsService],
})
export class ChampsModule {}
