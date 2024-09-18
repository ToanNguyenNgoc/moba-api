import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { name } from 'src/constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, name.JWT) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: name.JSON_WEB_TOKEN_KEY,
    });
  }
  validate(payload: any) {
    console.log(payload);
    return payload;
  }
}
