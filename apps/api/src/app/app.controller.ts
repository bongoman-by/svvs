import { Controller, Get } from '@nestjs/common';
/**
 * Base controller api app
 */
@Controller()
export class AppController {
  /**
   * Return welcome string
   */
  @Get()
  getData() {
    return { message: 'Welcome to api!' };
  }
}
