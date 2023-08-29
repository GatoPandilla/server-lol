import { Controller, Get } from '@nestjs/common';

@Controller('champs')
export class ChampsController {
  @Get()
  hello() {
    return 'holis';
  }
}
