// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path as __scalarPath } from '../internal/utils/path';
import type { Uploadable } from '../core/uploads';
import type * as AuthenticationAPI from './authentication';

export class Planets extends APIResource {
  /**
   * It's easy to say you know them all, but do you really? Retrieve all the planets and check whether you missed one.
   *
   * @param {PlanetListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PlanetListResponse>} OK
   *
   * @example
   * ```ts
   * const planet = await client.planets.list({
   *   limit: 10,
   *   offset: 0,
   * });
   * ```
   */
  list(
    query: PlanetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanetListResponse> {
    return this._client.get('/planets', { query, ...options });
  }

  /**
   * Time to play god and create a new planet. What do you think? Ah, don't think too much. What could go wrong anyway?
   *
   * @param {PlanetCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Planet>} Created
   *
   * @example
   * ```ts
   * const planet = await client.planets.create({
   *   name: 'Mars',
   *   type: 'terrestrial',
   * });
   * ```
   */
  create(body: PlanetCreateParams, options?: RequestOptions): APIPromise<Planet> {
    return this._client.post('/planets', { body, ...options });
  }

  /**
   * You'll better learn a little bit more about the planets. It might come in handy once space travel is available for everyone.
   *
   * @param {number} planetID - The ID of the planet to get
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Planet>} Planet Found
   *
   * @example
   * ```ts
   * const planet = await client.planets.retrieve(1);
   * ```
   */
  retrieve(planetID: number, options?: RequestOptions): APIPromise<Planet> {
    return this._client.get(__scalarPath`/planets/${planetID}`, options);
  }

  /**
   * Sometimes you make mistakes, that's fine. No worries, you can update all planets.
   *
   * @param {number} planetID - The ID of the planet to get
   * @param {PlanetUpdateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Planet>} OK
   *
   * @example
   * ```ts
   * const planet = await client.planets.update(1, {
   *   name: 'Mars',
   *   type: 'terrestrial',
   * });
   * ```
   */
  update(planetID: number, body: PlanetUpdateParams, options?: RequestOptions): APIPromise<Planet> {
    return this._client.put(__scalarPath`/planets/${planetID}`, { body, ...options });
  }

  /**
   * This endpoint was used to delete planets. Unfortunately, that caused a lot of trouble for planets with life. So, this endpoint is now deprecated and should not be used anymore.
   *
   * @param {number} planetID - The ID of the planet to get
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns No Content
   *
   * @example
   * ```ts
   * await client.planets.delete(1);
   * ```
   */
  delete(planetID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/planets/${planetID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Got a crazy good photo of a planet? Share it with the world!
   *
   * @param {number} planetID - The ID of the planet to get
   * @param {PlanetUploadImageParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PlanetUploadImageResponse>} Image uploaded
   *
   * @example
   * ```ts
   * const planet = await client.planets.uploadImage(1);
   * ```
   */
  uploadImage(
    planetID: number,
    body: PlanetUploadImageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlanetUploadImageResponse> {
    return this._client.post(
      __scalarPath`/planets/${planetID}/image`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * A planet in the Scalar Galaxy
 */
export interface Planet {
  /**
   * @format int64
   */
  id: number;
  name: string;
  type: 'planet' | 'terrestrial' | 'gas_giant' | 'ice_giant' | 'dwarf' | 'super_earth';
  description?: string | null;
  /**
   * A score from 0 to 1 indicating potential habitability
   * @format float
   * @minimum 0
   * @maximum 1
   */
  habitabilityIndex?: number;
  physicalProperties?: Planet.PhysicalProperties;
  /**
   * Atmospheric composition
   */
  atmosphere?: Array<Planet.Atmosphere>;
  /**
   * @format date-time
   */
  discoveredAt?: string;
  image?: string | null;
  satellites?: Array<Satellite>;
  /**
   * A user
   */
  creator?: AuthenticationAPI.User;
  tags?: Array<string>;
  /**
   * @format date-time
   */
  lastUpdated?: string;
  /**
   * URL which gets invoked upon a successful operation
   * @format uri
   */
  successCallbackUrl?: string;
  /**
   * URL which gets invoked upon a failed operation
   * @format uri
   */
  failureCallbackUrl?: string;
}

export namespace Planet {
  export interface PhysicalProperties {
    /**
     * Mass in Earth masses (must be greater than 0)
     * @format float
     */
    mass?: number;
    /**
     * Radius in Earth radii (must be greater than 0)
     * @format float
     */
    radius?: number;
    /**
     * Surface gravity in Earth g
     * @format float
     */
    gravity?: number;
    temperature?: PhysicalProperties.Temperature;
  }

  export namespace PhysicalProperties {
    export interface Temperature {
      /**
       * Minimum temperature in Kelvin
       * @format float
       */
      min?: number;
      /**
       * Maximum temperature in Kelvin
       * @format float
       */
      max?: number;
      /**
       * Average temperature in Kelvin
       * @format float
       */
      average?: number;
    }
  }

  export interface Atmosphere {
    compound?: string;
    /**
     * @format float
     */
    percentage?: number;
  }
}

/**
 * A paginated resource
 */
export interface PaginatedResource {
  meta?: PaginatedResource.Meta;
}

export namespace PaginatedResource {
  export interface Meta {
    /**
     * @format int64
     */
    limit?: number;
    /**
     * @format int64
     */
    offset?: number;
    /**
     * @format int64
     */
    total?: number;
    next?: string | null;
  }
}

/**
 * Every satellite in the Scalar Galaxy
 */
export interface Satellite {
  name: string;
  type: 'satellite' | 'moon' | 'asteroid' | 'comet';
  /**
   * @format int64
   */
  id?: number;
  description?: string | null;
  /**
   * Diameter in kilometers
   * @format float
   */
  diameter?: number;
  orbit?: Satellite.Orbit;
}

export namespace Satellite {
  export interface Orbit {
    /**
     * The ID of the planet this satellite orbits
     * @format int64
     */
    planetId?: number;
    /**
     * Orbital period in Earth days
     * @format float
     */
    orbitalPeriod?: number;
    /**
     * Average distance from the planet in kilometers
     * @format float
     */
    distance?: number;
  }
}

export interface PlanetListParams {
  /**
   * The number of items to return
   * @default 10
   * @format int64
   */
  limit?: number;
  /**
   * The number of items to skip before starting to collect the result set
   * @default 0
   * @format int64
   */
  offset?: number;
}

export interface PlanetListResponse extends PaginatedResource {
  data?: Array<Planet>;
}

export interface PlanetCreateParams {
  name: string;
  type: 'planet' | 'terrestrial' | 'gas_giant' | 'ice_giant' | 'dwarf' | 'super_earth';
  description?: string | null;
  /**
   * A score from 0 to 1 indicating potential habitability
   * @format float
   * @minimum 0
   * @maximum 1
   */
  habitabilityIndex?: number;
  physicalProperties?: PlanetCreateParams.PhysicalProperties;
  /**
   * Atmospheric composition
   */
  atmosphere?: Array<PlanetCreateParams.Atmosphere>;
  /**
   * @format date-time
   */
  discoveredAt?: string;
  image?: string | null;
  satellites?: Array<Satellite>;
  /**
   * A user
   */
  creator?: AuthenticationAPI.User;
  tags?: Array<string>;
  /**
   * URL which gets invoked upon a successful operation
   * @format uri
   */
  successCallbackUrl?: string;
  /**
   * URL which gets invoked upon a failed operation
   * @format uri
   */
  failureCallbackUrl?: string;
}

export namespace PlanetCreateParams {
  export interface PhysicalProperties {
    /**
     * Mass in Earth masses (must be greater than 0)
     * @format float
     */
    mass?: number;
    /**
     * Radius in Earth radii (must be greater than 0)
     * @format float
     */
    radius?: number;
    /**
     * Surface gravity in Earth g
     * @format float
     */
    gravity?: number;
    temperature?: PhysicalProperties.Temperature;
  }

  export namespace PhysicalProperties {
    export interface Temperature {
      /**
       * Minimum temperature in Kelvin
       * @format float
       */
      min?: number;
      /**
       * Maximum temperature in Kelvin
       * @format float
       */
      max?: number;
      /**
       * Average temperature in Kelvin
       * @format float
       */
      average?: number;
    }
  }

  export interface Atmosphere {
    compound?: string;
    /**
     * @format float
     */
    percentage?: number;
  }
}

export interface PlanetUpdateParams {
  name: string;
  type: 'planet' | 'terrestrial' | 'gas_giant' | 'ice_giant' | 'dwarf' | 'super_earth';
  description?: string | null;
  /**
   * A score from 0 to 1 indicating potential habitability
   * @format float
   * @minimum 0
   * @maximum 1
   */
  habitabilityIndex?: number;
  physicalProperties?: PlanetUpdateParams.PhysicalProperties;
  /**
   * Atmospheric composition
   */
  atmosphere?: Array<PlanetUpdateParams.Atmosphere>;
  /**
   * @format date-time
   */
  discoveredAt?: string;
  image?: string | null;
  satellites?: Array<Satellite>;
  /**
   * A user
   */
  creator?: AuthenticationAPI.User;
  tags?: Array<string>;
  /**
   * URL which gets invoked upon a successful operation
   * @format uri
   */
  successCallbackUrl?: string;
  /**
   * URL which gets invoked upon a failed operation
   * @format uri
   */
  failureCallbackUrl?: string;
}

export namespace PlanetUpdateParams {
  export interface PhysicalProperties {
    /**
     * Mass in Earth masses (must be greater than 0)
     * @format float
     */
    mass?: number;
    /**
     * Radius in Earth radii (must be greater than 0)
     * @format float
     */
    radius?: number;
    /**
     * Surface gravity in Earth g
     * @format float
     */
    gravity?: number;
    temperature?: PhysicalProperties.Temperature;
  }

  export namespace PhysicalProperties {
    export interface Temperature {
      /**
       * Minimum temperature in Kelvin
       * @format float
       */
      min?: number;
      /**
       * Maximum temperature in Kelvin
       * @format float
       */
      max?: number;
      /**
       * Average temperature in Kelvin
       * @format float
       */
      average?: number;
    }
  }

  export interface Atmosphere {
    compound?: string;
    /**
     * @format float
     */
    percentage?: number;
  }
}

export interface PlanetUploadImageParams {
  /**
   * The image file to upload
   * @format binary
   */
  image?: Uploadable;
}

export interface PlanetUploadImageResponse {
  message?: string;
  /**
   * The URL where the uploaded image can be accessed
   */
  imageUrl?: string;
  /**
   * Timestamp when the image was uploaded
   * @format date-time
   */
  uploadedAt?: string;
  /**
   * Size of the uploaded image in bytes
   */
  fileSize?: number;
  /**
   * The content type of the uploaded image
   */
  mimeType?: string;
}
export declare namespace Planets {
  export {
    type Planet as Planet,
    type PaginatedResource as PaginatedResource,
    type Satellite as Satellite,
    type PlanetListResponse as PlanetListResponse,
    type PlanetUploadImageResponse as PlanetUploadImageResponse,
    type PlanetListParams as PlanetListParams,
    type PlanetCreateParams as PlanetCreateParams,
    type PlanetUpdateParams as PlanetUpdateParams,
    type PlanetUploadImageParams as PlanetUploadImageParams,
  };
}
