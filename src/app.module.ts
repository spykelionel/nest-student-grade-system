import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DepartmentsModule } from './departments/departments.module';
import { GradesModule } from './grades/grades.module';
import { SchoolsModule } from './schools/schools.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    SchoolsModule,
    StudentsModule,
    DepartmentsModule,
    CoursesModule,
    GradesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
