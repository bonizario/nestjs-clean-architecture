import { Entity } from '@/core/entities/entity';
import type { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface StudentProps {
  email: string;
  name: string;
  password: string;
}

export class Student extends Entity<StudentProps> {
  get email() {
    return this.props.email;
  }

  get name() {
    return this.props.name;
  }

  get password() {
    return this.props.password;
  }

  static create(props: StudentProps, id?: UniqueEntityID) {
    const answer = new Student(props, id);

    return answer;
  }
}
