import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  telephone: string;

  @Prop()
  birthday: string;

  @Prop()
  gender: string;

  @Prop()
  avatar: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
