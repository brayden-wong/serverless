import { PartialType } from '@nestjs/mapped-types';

export type Type = 'director' | 'casting director' | 'performer';

export class Account {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  type: Type;
  password: string;
}

export class Director extends Account {
  id: string;

  performances: Performance[];
}

export class CastingDirector extends Account {
  id: string;

  performances: Performance[];
}

export class Perfomer {
  id: string;

  performances: Performance[];
  performanceHistory: Performance[];
}

export class Character {
  id: string;
  name: string;
  role: 'lead' | 'supporting' | 'extra';
}

export class AuditionCharacter {
  name: string;
  role: 'lead' | 'supporting' | 'extra';
}

export class Venue {
  id: string;
  street: string;
  apt?: string;
  city: string;
  state: string;
  postalCode: string;
}

export class CreateAccountDto extends Account { }

export class UpdateAccountDto extends PartialType(CreateAccountDto) { }

export class CreatePerformanceDto {
  id: string;
  name: string;
  dates: Date[];
  director: Director;
  castingDirector: CastingDirector;
  cast: Character[];
  venue: Venue;
}

export class UpdatePerformanceDto extends PartialType(CreatePerformanceDto) { }

export class CreateAuditionDto {
  name: string;
  dates: Date[];
  performance: CreatePerformanceDto;
  cast: AuditionCharacter[];
  director: Director;
  castingDirector: CastingDirector;
  venue: Venue;
}

export class UpdateAuditionDto extends PartialType(CreateAuditionDto) { }