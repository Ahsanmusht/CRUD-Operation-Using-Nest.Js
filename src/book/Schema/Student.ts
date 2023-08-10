import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type } from "os";


export type StudentDocument = Student & Document;


@Schema()
export class Student{
    @Prop()

        name:String;

    @Prop() 

        fatherName:String;

    @Prop() 

        birthDate:String;

    @Prop() 

        class:String;

    @Prop() 

        address:String;
}

export const StudentSchema = SchemaFactory.createForClass(Student)