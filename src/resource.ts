// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { DemoAPIScalarGalaxy } from './client';

export abstract class APIResource {
  protected _client: DemoAPIScalarGalaxy;

  constructor(client: DemoAPIScalarGalaxy) {
    this._client = client;
  }
}
