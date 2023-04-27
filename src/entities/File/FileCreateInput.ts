import { Length, Max } from "class-validator";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class FileCreateInput {
  @Field()
  @Length(2, 50)
  name: string;

  @Field()
  @Max(500_000_000)
  size: number;

  @Field()
  @Length(2, 20)
  type: string;

  @Field(() => ID)
  transferId: number;
}
