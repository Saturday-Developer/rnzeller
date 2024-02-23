import { gql } from '@apollo/client';

export const GetAllCustomers = gql`
query GetAllUsers {
    listZellerCustomers{
        items{
             id,
             name,
             email,
             role
        }
    }
}`;