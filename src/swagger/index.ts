import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';
import { name } from 'src/constants';

export const API_TAG = {
  Auth: 'Auth',
  User: 'User',
};

export const options = new DocumentBuilder()
  .setTitle('Api')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag(API_TAG.Auth)
  .addTag(API_TAG.User)
  .addApiKey(
    {
      type: 'apiKey',
      name: 'x-api-key',
      in: 'header',
    },
    'x-api-key',
  )
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
    name.JWT,
  )
  .build();
export const customOptions: SwaggerCustomOptions = {
  customSiteTitle: 'BTX',
};
