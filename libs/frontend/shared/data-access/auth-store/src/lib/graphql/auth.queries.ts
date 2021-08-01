import { PLATFORM_ID } from '@angular/core';
import { gql } from 'apollo-angular';
import { IApolloRequest } from '@svvs/shared/utils/interfaces';

export const loginRequest: IApolloRequest = {
  keys: ['login'],
  query: gql`
    query($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        id
        expiresIn
        accessToken
      }
    }
  `,
};

export const logoutRequest: IApolloRequest = {
  keys: ['logout'],
  query: gql`
    query {
      logout
      }
    }
  `,
};
