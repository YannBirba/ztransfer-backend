import { Length, Max, Min } from "class-validator";
import { Field, Float, ID, InputType } from "type-graphql";

@InputType()
export class ZeTransferSubscriptionPlanUpdateInput {
  @Field(() => ID, { nullable: true })
  id: number;

  @Field({ nullable: true })
  @Length(2, 50)
  name: string;

  @Field(() => Float, { nullable: true })
  @Min(5)
  @Max(100)
  price: number;

  @Field(() => Float, { nullable: true })
  @Min(5)
  @Max(1000)
  storage: number;
}
