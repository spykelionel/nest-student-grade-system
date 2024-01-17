import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolsModule } from './schools/schools.module';
import { StudentsModule } from './students/students.module';
import { DepartmentsModule } from './departments/departments.module';
import { CoursesModule } from './courses/courses.module';
import { GradesModule } from './grades/grades.module';

@Module({
  imports: [SchoolsModule, StudentsModule, DepartmentsModule, CoursesModule, GradesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
