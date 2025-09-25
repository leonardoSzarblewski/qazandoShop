import { faker } from '@faker-js/faker'

export const user = {
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(6)
}