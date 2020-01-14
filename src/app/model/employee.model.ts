export class Employee{
  firstName: string;
  lastName: string;
  department: string;
  address?: Address;
}

export class Address{
  street: string;
  city: string;
  state: string;
  zipcode: string;
}