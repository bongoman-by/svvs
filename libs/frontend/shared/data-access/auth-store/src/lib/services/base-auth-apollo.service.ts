import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, catchError } from 'rxjs/operators';
import {
  extractApolloResponse,
  ISignAuthPayload,
  ISignAuthResponse,
  IUser,
  TApolloResponse,
} from '@svvs/shared/utils/interfaces';
import { throwError } from 'rxjs';
import { ApolloError } from '@apollo/client';

import * as AuthQueries from '../graphql/auth.queries';
import { IAuthApollo } from '../interfaces/auth-apollo-interface';

@Injectable()
export class BaseAuthApollo implements IAuthApollo {
  constructor(private apollo: Apollo) {}

  signIn(payload: ISignAuthPayload): TApolloResponse<ISignAuthResponse> {
    return this.apollo
      .query<{ user: IUser }>({
        query: AuthQueries.loginRequest.query,
        variables: payload,
      })
      .pipe(
        map((result) =>
          extractApolloResponse(result, AuthQueries.loginRequest.keys)
        ),
        catchError((error: ApolloError) => throwError(error))
      );
  }

  signOut(): TApolloResponse<void | null> {
    return this.apollo
      .query<{ logout: boolean }>({ query: AuthQueries.logoutRequest.query })
      .pipe(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        map((result) => null),
        catchError((error: ApolloError) => throwError(error))
      );
  }
}
