import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema, Student } from './Schema/Student';

@Module({
  imports:[MongooseModule.forFeature([{name : Student.name, schema : StudentSchema}])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
