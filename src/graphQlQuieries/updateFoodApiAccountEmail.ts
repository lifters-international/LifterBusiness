export const updateFoodApiAccountEmail = `
    query UpdateFoodApiAccountEmail($password: String!, $newEmail: String!, $token: String!) {
        updateFoodApiAccountEmail(password: $password, newEmail: $newEmail, token: $token) {
            key
            type
            value
        }
    }
`;
