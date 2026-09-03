// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';

export class Authentication extends APIResource {
  /**
   * Time to create a user account, eh?
   *
   * @param {AuthenticationCreateUserParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<User>} Created
   *
   * @example
   * ```ts
   * const user = await client.authentication.createUser({
   *   name: 'Marc',
   *   email: 'marc@scalar.com',
   *   password: 'i-love-scalar',
   * });
   * ```
   */
  createUser(body: AuthenticationCreateUserParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post('/user/signup', { body, ...options });
  }

  /**
   * Yeah, this is the boring security stuff. Just get your super secret token and move on.
   *
   * @param {AuthenticationCreateTokenParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Token>} Token Created
   *
   * @example
   * ```ts
   * const token = await client.authentication.createToken({
   *   email: 'marc@scalar.com',
   *   password: 'i-love-scalar',
   * });
   * ```
   */
  createToken(body: AuthenticationCreateTokenParams, options?: RequestOptions): APIPromise<Token> {
    return this._client.post('/auth/token', { body, ...options });
  }

  /**
   * Find yourself they say. That's what you can do here.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<User>} OK
   *
   * @example
   * ```ts
   * const user = await client.authentication.listMe();
   * ```
   */
  listMe(options?: RequestOptions): APIPromise<User> {
    return this._client.get('/me', options);
  }
}

/**
 * A user
 */
export interface User {
  /**
   * @format int64
   */
  id?: number;
  name?: string;
}

/**
 * A token to authenticate a user
 */
export interface Token {
  token?: string;
}

export interface AuthenticationCreateUserParams {
  /**
   * @format email
   */
  email: string;
  password: string;
  name?: string;
}

export interface AuthenticationCreateTokenParams {
  /**
   * @format email
   */
  email: string;
  password: string;
}
export declare namespace Authentication {
  export {
    type User as User,
    type Token as Token,
    type AuthenticationCreateUserParams as AuthenticationCreateUserParams,
    type AuthenticationCreateTokenParams as AuthenticationCreateTokenParams,
  };
}
