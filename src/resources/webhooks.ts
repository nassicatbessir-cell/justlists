// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unwrap(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): ParsedWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookSecret : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as ParsedWebhookEvent;
  }
}

export type NewPlanetWebhookEvent = unknown;

export type ParsedWebhookEvent = NewPlanetWebhookEvent;

export declare namespace Webhooks {
  export {
    type NewPlanetWebhookEvent as NewPlanetWebhookEvent,
    type ParsedWebhookEvent as ParsedWebhookEvent,
  };
}
