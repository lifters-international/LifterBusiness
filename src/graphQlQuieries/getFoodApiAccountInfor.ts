export const getFoodApiAccountInfor = `
    query GetFoodApiAccountInfor($token: String!) {
        getFoodApiAccountInfor(token: $token) {
            api_key
            paymentStatement
            test_api_key
        }
    }
`;
