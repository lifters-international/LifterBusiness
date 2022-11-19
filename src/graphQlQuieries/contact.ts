export const contactUsQuery = `
    query Query($message: String!, $phoneNumber: String!, $email: String!, $lastName: String!, $name: String!) {
        contact(message: $message, phoneNumber: $phoneNumber, email: $email, lastName: $lastName, name: $name)
    }
`
