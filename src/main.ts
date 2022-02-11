import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {


  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(process.cwd(), "..", "uploads"), {
    prefix: "/uploads/"
  });


  const config = new DocumentBuilder()
    .setTitle("Capes Cartel")
    .setVersion("1.0")
    .addTag("Swagger UI")
    .setVersion("V1")
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      methodKey
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup("swagger", app, document);


  await app.listen(process.env.PORT || 3000);
}

bootstrap();
