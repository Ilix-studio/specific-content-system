// src/schemas/user-profile.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserProfile extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  age: number;

  @Prop()
  bio: string;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
