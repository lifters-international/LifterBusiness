export const generateNewFoodApiKeys =  `
    mutation GenereateNewFoodApiKeys($token: String!) {
        genereateNewFoodApiKeys(token: $token) {
            api_key
            test_api_key
        }
    }
`;
