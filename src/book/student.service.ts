import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Student, StudentDocument} from './Schema/Student'
import { Model } from 'mongoose';

@Injectable()
export class StudentService {


  constructor(@InjectModel(Student.name) private studentModel : Model<StudentDocument>){

  }

  create(createStudentDto: CreateStudentDto) : Promise<Student> {
    const model = new this.studentModel();
    model.name = createStudentDto.name;
    model.fatherName = createStudentDto.fatherName;  
    model.birthDate = createStudentDto.birthDate;
    model.class = createStudentDto.class;
    model.address = createStudentDto.address;
    return model.save();
  }

  findAll() : Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  findOne(id: string) : Promise<Student> {
    return this.studentModel.findById(id).exec();
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.updateOne({ _id : id }, {
      name : updateStudentDto.name, 
      fatherName : updateStudentDto.fatherName, 
      birthDate : updateStudentDto.birthDate,
      class : updateStudentDto.class,
      address : updateStudentDto.address 
    }).exec();
  }

  remove(id: string) {
    return this.studentModel.deleteOne({ _id : id }).exec();
  }
}
