export const updateFoodApiAccountPassword = `
    query UpdateFoodApiAccountPassword($password: String!, $newPassword: String!, $token: String!) {
        updateFoodApiAccountPassword(password: $password, newPassword: $newPassword, token: $token) {
            key
            value
            type
        }
    }
`;
