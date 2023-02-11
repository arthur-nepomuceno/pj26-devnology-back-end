import { faker } from "@faker-js/faker";

const link = {
    id: faker.datatype.number(99),
    userId: faker.datatype.number(99),
    url: faker.internet.url(),
    title: faker.datatype.string(),
    description: faker.datatype.string(100),
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuZXctdXNlckBlbWFpbC5jb20iLCJpYXQiOjE2NzYwMzUzODZ9.HvJvsRaZhXKkJKQIbg2ubhKTEO9l458MZsziqzHQx5k";
const decoded = { id: 1, email: 'new-user@email.com', iat: 1676035386 }

export {
    token,
    decoded,
    link
}