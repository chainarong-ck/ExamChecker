
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model region_types
 * 
 */
export type region_types = $Result.DefaultSelection<Prisma.$region_typesPayload>
/**
 * Model regions
 * 
 */
export type regions = $Result.DefaultSelection<Prisma.$regionsPayload>
/**
 * Model templates
 * 
 */
export type templates = $Result.DefaultSelection<Prisma.$templatesPayload>
/**
 * Model template_regions
 * 
 */
export type template_regions = $Result.DefaultSelection<Prisma.$template_regionsPayload>
/**
 * Model template_marker_centers
 * 
 */
export type template_marker_centers = $Result.DefaultSelection<Prisma.$template_marker_centersPayload>
/**
 * Model answers
 * 
 */
export type answers = $Result.DefaultSelection<Prisma.$answersPayload>
/**
 * Model answer_details
 * 
 */
export type answer_details = $Result.DefaultSelection<Prisma.$answer_detailsPayload>
/**
 * Model groups
 * 
 */
export type groups = $Result.DefaultSelection<Prisma.$groupsPayload>
/**
 * Model sheet_statuses
 * 
 */
export type sheet_statuses = $Result.DefaultSelection<Prisma.$sheet_statusesPayload>
/**
 * Model sheets
 * 
 */
export type sheets = $Result.DefaultSelection<Prisma.$sheetsPayload>
/**
 * Model cross_types
 * 
 */
export type cross_types = $Result.DefaultSelection<Prisma.$cross_typesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.roles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.roles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region_types`: Exposes CRUD operations for the **region_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Region_types
    * const region_types = await prisma.region_types.findMany()
    * ```
    */
  get region_types(): Prisma.region_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regions`: Exposes CRUD operations for the **regions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.regions.findMany()
    * ```
    */
  get regions(): Prisma.regionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templates`: Exposes CRUD operations for the **templates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.templates.findMany()
    * ```
    */
  get templates(): Prisma.templatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template_regions`: Exposes CRUD operations for the **template_regions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Template_regions
    * const template_regions = await prisma.template_regions.findMany()
    * ```
    */
  get template_regions(): Prisma.template_regionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template_marker_centers`: Exposes CRUD operations for the **template_marker_centers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Template_marker_centers
    * const template_marker_centers = await prisma.template_marker_centers.findMany()
    * ```
    */
  get template_marker_centers(): Prisma.template_marker_centersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answers`: Exposes CRUD operations for the **answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answers.findMany()
    * ```
    */
  get answers(): Prisma.answersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer_details`: Exposes CRUD operations for the **answer_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answer_details
    * const answer_details = await prisma.answer_details.findMany()
    * ```
    */
  get answer_details(): Prisma.answer_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groups`: Exposes CRUD operations for the **groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.groupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheet_statuses`: Exposes CRUD operations for the **sheet_statuses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheet_statuses
    * const sheet_statuses = await prisma.sheet_statuses.findMany()
    * ```
    */
  get sheet_statuses(): Prisma.sheet_statusesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheets`: Exposes CRUD operations for the **sheets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheets
    * const sheets = await prisma.sheets.findMany()
    * ```
    */
  get sheets(): Prisma.sheetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cross_types`: Exposes CRUD operations for the **cross_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cross_types
    * const cross_types = await prisma.cross_types.findMany()
    * ```
    */
  get cross_types(): Prisma.cross_typesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    roles: 'roles',
    users: 'users',
    region_types: 'region_types',
    regions: 'regions',
    templates: 'templates',
    template_regions: 'template_regions',
    template_marker_centers: 'template_marker_centers',
    answers: 'answers',
    answer_details: 'answer_details',
    groups: 'groups',
    sheet_statuses: 'sheet_statuses',
    sheets: 'sheets',
    cross_types: 'cross_types'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "roles" | "users" | "region_types" | "regions" | "templates" | "template_regions" | "template_marker_centers" | "answers" | "answer_details" | "groups" | "sheet_statuses" | "sheets" | "cross_types"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      region_types: {
        payload: Prisma.$region_typesPayload<ExtArgs>
        fields: Prisma.region_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.region_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.region_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload>
          }
          findFirst: {
            args: Prisma.region_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.region_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload>
          }
          findMany: {
            args: Prisma.region_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload>[]
          }
          create: {
            args: Prisma.region_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload>
          }
          createMany: {
            args: Prisma.region_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.region_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload>[]
          }
          delete: {
            args: Prisma.region_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload>
          }
          update: {
            args: Prisma.region_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload>
          }
          deleteMany: {
            args: Prisma.region_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.region_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.region_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload>[]
          }
          upsert: {
            args: Prisma.region_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$region_typesPayload>
          }
          aggregate: {
            args: Prisma.Region_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion_types>
          }
          groupBy: {
            args: Prisma.region_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Region_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.region_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Region_typesCountAggregateOutputType> | number
          }
        }
      }
      regions: {
        payload: Prisma.$regionsPayload<ExtArgs>
        fields: Prisma.regionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.regionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.regionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          findFirst: {
            args: Prisma.regionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.regionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          findMany: {
            args: Prisma.regionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>[]
          }
          create: {
            args: Prisma.regionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          createMany: {
            args: Prisma.regionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.regionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>[]
          }
          delete: {
            args: Prisma.regionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          update: {
            args: Prisma.regionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          deleteMany: {
            args: Prisma.regionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.regionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.regionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>[]
          }
          upsert: {
            args: Prisma.regionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          aggregate: {
            args: Prisma.RegionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegions>
          }
          groupBy: {
            args: Prisma.regionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.regionsCountArgs<ExtArgs>
            result: $Utils.Optional<RegionsCountAggregateOutputType> | number
          }
        }
      }
      templates: {
        payload: Prisma.$templatesPayload<ExtArgs>
        fields: Prisma.templatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.templatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.templatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          findFirst: {
            args: Prisma.templatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.templatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          findMany: {
            args: Prisma.templatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>[]
          }
          create: {
            args: Prisma.templatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          createMany: {
            args: Prisma.templatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.templatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>[]
          }
          delete: {
            args: Prisma.templatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          update: {
            args: Prisma.templatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          deleteMany: {
            args: Prisma.templatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.templatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.templatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>[]
          }
          upsert: {
            args: Prisma.templatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$templatesPayload>
          }
          aggregate: {
            args: Prisma.TemplatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplates>
          }
          groupBy: {
            args: Prisma.templatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.templatesCountArgs<ExtArgs>
            result: $Utils.Optional<TemplatesCountAggregateOutputType> | number
          }
        }
      }
      template_regions: {
        payload: Prisma.$template_regionsPayload<ExtArgs>
        fields: Prisma.template_regionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.template_regionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.template_regionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload>
          }
          findFirst: {
            args: Prisma.template_regionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.template_regionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload>
          }
          findMany: {
            args: Prisma.template_regionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload>[]
          }
          create: {
            args: Prisma.template_regionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload>
          }
          createMany: {
            args: Prisma.template_regionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.template_regionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload>[]
          }
          delete: {
            args: Prisma.template_regionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload>
          }
          update: {
            args: Prisma.template_regionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload>
          }
          deleteMany: {
            args: Prisma.template_regionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.template_regionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.template_regionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload>[]
          }
          upsert: {
            args: Prisma.template_regionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_regionsPayload>
          }
          aggregate: {
            args: Prisma.Template_regionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate_regions>
          }
          groupBy: {
            args: Prisma.template_regionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Template_regionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.template_regionsCountArgs<ExtArgs>
            result: $Utils.Optional<Template_regionsCountAggregateOutputType> | number
          }
        }
      }
      template_marker_centers: {
        payload: Prisma.$template_marker_centersPayload<ExtArgs>
        fields: Prisma.template_marker_centersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.template_marker_centersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.template_marker_centersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload>
          }
          findFirst: {
            args: Prisma.template_marker_centersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.template_marker_centersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload>
          }
          findMany: {
            args: Prisma.template_marker_centersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload>[]
          }
          create: {
            args: Prisma.template_marker_centersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload>
          }
          createMany: {
            args: Prisma.template_marker_centersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.template_marker_centersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload>[]
          }
          delete: {
            args: Prisma.template_marker_centersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload>
          }
          update: {
            args: Prisma.template_marker_centersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload>
          }
          deleteMany: {
            args: Prisma.template_marker_centersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.template_marker_centersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.template_marker_centersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload>[]
          }
          upsert: {
            args: Prisma.template_marker_centersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$template_marker_centersPayload>
          }
          aggregate: {
            args: Prisma.Template_marker_centersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate_marker_centers>
          }
          groupBy: {
            args: Prisma.template_marker_centersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Template_marker_centersGroupByOutputType>[]
          }
          count: {
            args: Prisma.template_marker_centersCountArgs<ExtArgs>
            result: $Utils.Optional<Template_marker_centersCountAggregateOutputType> | number
          }
        }
      }
      answers: {
        payload: Prisma.$answersPayload<ExtArgs>
        fields: Prisma.answersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.answersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.answersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findFirst: {
            args: Prisma.answersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.answersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          findMany: {
            args: Prisma.answersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          create: {
            args: Prisma.answersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          createMany: {
            args: Prisma.answersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.answersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          delete: {
            args: Prisma.answersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          update: {
            args: Prisma.answersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          deleteMany: {
            args: Prisma.answersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.answersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.answersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>[]
          }
          upsert: {
            args: Prisma.answersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answersPayload>
          }
          aggregate: {
            args: Prisma.AnswersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswers>
          }
          groupBy: {
            args: Prisma.answersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswersGroupByOutputType>[]
          }
          count: {
            args: Prisma.answersCountArgs<ExtArgs>
            result: $Utils.Optional<AnswersCountAggregateOutputType> | number
          }
        }
      }
      answer_details: {
        payload: Prisma.$answer_detailsPayload<ExtArgs>
        fields: Prisma.answer_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.answer_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.answer_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload>
          }
          findFirst: {
            args: Prisma.answer_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.answer_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload>
          }
          findMany: {
            args: Prisma.answer_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload>[]
          }
          create: {
            args: Prisma.answer_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload>
          }
          createMany: {
            args: Prisma.answer_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.answer_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload>[]
          }
          delete: {
            args: Prisma.answer_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload>
          }
          update: {
            args: Prisma.answer_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload>
          }
          deleteMany: {
            args: Prisma.answer_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.answer_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.answer_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload>[]
          }
          upsert: {
            args: Prisma.answer_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answer_detailsPayload>
          }
          aggregate: {
            args: Prisma.Answer_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer_details>
          }
          groupBy: {
            args: Prisma.answer_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Answer_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.answer_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Answer_detailsCountAggregateOutputType> | number
          }
        }
      }
      groups: {
        payload: Prisma.$groupsPayload<ExtArgs>
        fields: Prisma.groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findFirst: {
            args: Prisma.groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findMany: {
            args: Prisma.groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          create: {
            args: Prisma.groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          createMany: {
            args: Prisma.groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.groupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          delete: {
            args: Prisma.groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          update: {
            args: Prisma.groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          deleteMany: {
            args: Prisma.groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.groupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          upsert: {
            args: Prisma.groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          aggregate: {
            args: Prisma.GroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroups>
          }
          groupBy: {
            args: Prisma.groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupsCountAggregateOutputType> | number
          }
        }
      }
      sheet_statuses: {
        payload: Prisma.$sheet_statusesPayload<ExtArgs>
        fields: Prisma.sheet_statusesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sheet_statusesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sheet_statusesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload>
          }
          findFirst: {
            args: Prisma.sheet_statusesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sheet_statusesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload>
          }
          findMany: {
            args: Prisma.sheet_statusesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload>[]
          }
          create: {
            args: Prisma.sheet_statusesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload>
          }
          createMany: {
            args: Prisma.sheet_statusesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sheet_statusesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload>[]
          }
          delete: {
            args: Prisma.sheet_statusesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload>
          }
          update: {
            args: Prisma.sheet_statusesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload>
          }
          deleteMany: {
            args: Prisma.sheet_statusesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sheet_statusesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sheet_statusesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload>[]
          }
          upsert: {
            args: Prisma.sheet_statusesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheet_statusesPayload>
          }
          aggregate: {
            args: Prisma.Sheet_statusesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheet_statuses>
          }
          groupBy: {
            args: Prisma.sheet_statusesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sheet_statusesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sheet_statusesCountArgs<ExtArgs>
            result: $Utils.Optional<Sheet_statusesCountAggregateOutputType> | number
          }
        }
      }
      sheets: {
        payload: Prisma.$sheetsPayload<ExtArgs>
        fields: Prisma.sheetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sheetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sheetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          findFirst: {
            args: Prisma.sheetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sheetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          findMany: {
            args: Prisma.sheetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>[]
          }
          create: {
            args: Prisma.sheetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          createMany: {
            args: Prisma.sheetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sheetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>[]
          }
          delete: {
            args: Prisma.sheetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          update: {
            args: Prisma.sheetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          deleteMany: {
            args: Prisma.sheetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sheetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sheetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>[]
          }
          upsert: {
            args: Prisma.sheetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          aggregate: {
            args: Prisma.SheetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheets>
          }
          groupBy: {
            args: Prisma.sheetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sheetsCountArgs<ExtArgs>
            result: $Utils.Optional<SheetsCountAggregateOutputType> | number
          }
        }
      }
      cross_types: {
        payload: Prisma.$cross_typesPayload<ExtArgs>
        fields: Prisma.cross_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cross_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cross_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload>
          }
          findFirst: {
            args: Prisma.cross_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cross_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload>
          }
          findMany: {
            args: Prisma.cross_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload>[]
          }
          create: {
            args: Prisma.cross_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload>
          }
          createMany: {
            args: Prisma.cross_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cross_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload>[]
          }
          delete: {
            args: Prisma.cross_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload>
          }
          update: {
            args: Prisma.cross_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload>
          }
          deleteMany: {
            args: Prisma.cross_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cross_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cross_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload>[]
          }
          upsert: {
            args: Prisma.cross_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cross_typesPayload>
          }
          aggregate: {
            args: Prisma.Cross_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCross_types>
          }
          groupBy: {
            args: Prisma.cross_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cross_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.cross_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Cross_typesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    roles?: rolesOmit
    users?: usersOmit
    region_types?: region_typesOmit
    regions?: regionsOmit
    templates?: templatesOmit
    template_regions?: template_regionsOmit
    template_marker_centers?: template_marker_centersOmit
    answers?: answersOmit
    answer_details?: answer_detailsOmit
    groups?: groupsOmit
    sheet_statuses?: sheet_statusesOmit
    sheets?: sheetsOmit
    cross_types?: cross_typesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    answers: number
    groups: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | UsersCountOutputTypeCountAnswersArgs
    groups?: boolean | UsersCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
  }


  /**
   * Count Type Region_typesCountOutputType
   */

  export type Region_typesCountOutputType = {
    regions: number
  }

  export type Region_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | Region_typesCountOutputTypeCountRegionsArgs
  }

  // Custom InputTypes
  /**
   * Region_typesCountOutputType without action
   */
  export type Region_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region_typesCountOutputType
     */
    select?: Region_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Region_typesCountOutputType without action
   */
  export type Region_typesCountOutputTypeCountRegionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regionsWhereInput
  }


  /**
   * Count Type RegionsCountOutputType
   */

  export type RegionsCountOutputType = {
    template_regions: number
  }

  export type RegionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template_regions?: boolean | RegionsCountOutputTypeCountTemplate_regionsArgs
  }

  // Custom InputTypes
  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionsCountOutputType
     */
    select?: RegionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeCountTemplate_regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: template_regionsWhereInput
  }


  /**
   * Count Type TemplatesCountOutputType
   */

  export type TemplatesCountOutputType = {
    template_regions: number
    groups: number
  }

  export type TemplatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template_regions?: boolean | TemplatesCountOutputTypeCountTemplate_regionsArgs
    groups?: boolean | TemplatesCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * TemplatesCountOutputType without action
   */
  export type TemplatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplatesCountOutputType
     */
    select?: TemplatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplatesCountOutputType without action
   */
  export type TemplatesCountOutputTypeCountTemplate_regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: template_regionsWhereInput
  }

  /**
   * TemplatesCountOutputType without action
   */
  export type TemplatesCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
  }


  /**
   * Count Type Template_regionsCountOutputType
   */

  export type Template_regionsCountOutputType = {
    template_marker_centers: number
  }

  export type Template_regionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template_marker_centers?: boolean | Template_regionsCountOutputTypeCountTemplate_marker_centersArgs
  }

  // Custom InputTypes
  /**
   * Template_regionsCountOutputType without action
   */
  export type Template_regionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template_regionsCountOutputType
     */
    select?: Template_regionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Template_regionsCountOutputType without action
   */
  export type Template_regionsCountOutputTypeCountTemplate_marker_centersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: template_marker_centersWhereInput
  }


  /**
   * Count Type AnswersCountOutputType
   */

  export type AnswersCountOutputType = {
    answer_details: number
    groups: number
  }

  export type AnswersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer_details?: boolean | AnswersCountOutputTypeCountAnswer_detailsArgs
    groups?: boolean | AnswersCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * AnswersCountOutputType without action
   */
  export type AnswersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswersCountOutputType
     */
    select?: AnswersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswersCountOutputType without action
   */
  export type AnswersCountOutputTypeCountAnswer_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answer_detailsWhereInput
  }

  /**
   * AnswersCountOutputType without action
   */
  export type AnswersCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
  }


  /**
   * Count Type GroupsCountOutputType
   */

  export type GroupsCountOutputType = {
    sheets: number
  }

  export type GroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheets?: boolean | GroupsCountOutputTypeCountSheetsArgs
  }

  // Custom InputTypes
  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsCountOutputType
     */
    select?: GroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sheetsWhereInput
  }


  /**
   * Count Type Sheet_statusesCountOutputType
   */

  export type Sheet_statusesCountOutputType = {
    sheets: number
  }

  export type Sheet_statusesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheets?: boolean | Sheet_statusesCountOutputTypeCountSheetsArgs
  }

  // Custom InputTypes
  /**
   * Sheet_statusesCountOutputType without action
   */
  export type Sheet_statusesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sheet_statusesCountOutputType
     */
    select?: Sheet_statusesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sheet_statusesCountOutputType without action
   */
  export type Sheet_statusesCountOutputTypeCountSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sheetsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    detail: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    detail?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    detail?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    detail: string
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    detail?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "detail", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      detail: string
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
    readonly detail: FieldRef<"roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export type rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    role_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    role_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    role_id: number | null
    email: string | null
    disable: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    role_id: number | null
    email: string | null
    disable: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    first_name: number
    last_name: number
    role_id: number
    email: number
    disable: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    role_id?: true
  }

  export type UsersSumAggregateInputType = {
    role_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    first_name?: true
    last_name?: true
    role_id?: true
    email?: true
    disable?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    first_name?: true
    last_name?: true
    role_id?: true
    email?: true
    disable?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    first_name?: true
    last_name?: true
    role_id?: true
    email?: true
    disable?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    password: string
    first_name: string
    last_name: string
    role_id: number
    email: string | null
    disable: boolean
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    role_id?: boolean
    email?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    answers?: boolean | users$answersArgs<ExtArgs>
    groups?: boolean | users$groupsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    role_id?: boolean
    email?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    role_id?: boolean
    email?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    role_id?: boolean
    email?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "first_name" | "last_name" | "role_id" | "email" | "disable" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    answers?: boolean | users$answersArgs<ExtArgs>
    groups?: boolean | users$groupsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      role: Prisma.$rolesPayload<ExtArgs>
      answers: Prisma.$answersPayload<ExtArgs>[]
      groups: Prisma.$groupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      first_name: string
      last_name: string
      role_id: number
      email: string | null
      disable: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends users$answersArgs<ExtArgs> = {}>(args?: Subset<T, users$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends users$groupsArgs<ExtArgs> = {}>(args?: Subset<T, users$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly role_id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly disable: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.answers
   */
  export type users$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    where?: answersWhereInput
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    cursor?: answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * users.groups
   */
  export type users$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    cursor?: groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model region_types
   */

  export type AggregateRegion_types = {
    _count: Region_typesCountAggregateOutputType | null
    _avg: Region_typesAvgAggregateOutputType | null
    _sum: Region_typesSumAggregateOutputType | null
    _min: Region_typesMinAggregateOutputType | null
    _max: Region_typesMaxAggregateOutputType | null
  }

  export type Region_typesAvgAggregateOutputType = {
    id: number | null
  }

  export type Region_typesSumAggregateOutputType = {
    id: number | null
  }

  export type Region_typesMinAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
  }

  export type Region_typesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
  }

  export type Region_typesCountAggregateOutputType = {
    id: number
    name: number
    detail: number
    _all: number
  }


  export type Region_typesAvgAggregateInputType = {
    id?: true
  }

  export type Region_typesSumAggregateInputType = {
    id?: true
  }

  export type Region_typesMinAggregateInputType = {
    id?: true
    name?: true
    detail?: true
  }

  export type Region_typesMaxAggregateInputType = {
    id?: true
    name?: true
    detail?: true
  }

  export type Region_typesCountAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    _all?: true
  }

  export type Region_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which region_types to aggregate.
     */
    where?: region_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of region_types to fetch.
     */
    orderBy?: region_typesOrderByWithRelationInput | region_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: region_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` region_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` region_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned region_types
    **/
    _count?: true | Region_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Region_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Region_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Region_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Region_typesMaxAggregateInputType
  }

  export type GetRegion_typesAggregateType<T extends Region_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion_types[P]>
      : GetScalarType<T[P], AggregateRegion_types[P]>
  }




  export type region_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: region_typesWhereInput
    orderBy?: region_typesOrderByWithAggregationInput | region_typesOrderByWithAggregationInput[]
    by: Region_typesScalarFieldEnum[] | Region_typesScalarFieldEnum
    having?: region_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Region_typesCountAggregateInputType | true
    _avg?: Region_typesAvgAggregateInputType
    _sum?: Region_typesSumAggregateInputType
    _min?: Region_typesMinAggregateInputType
    _max?: Region_typesMaxAggregateInputType
  }

  export type Region_typesGroupByOutputType = {
    id: number
    name: string
    detail: string
    _count: Region_typesCountAggregateOutputType | null
    _avg: Region_typesAvgAggregateOutputType | null
    _sum: Region_typesSumAggregateOutputType | null
    _min: Region_typesMinAggregateOutputType | null
    _max: Region_typesMaxAggregateOutputType | null
  }

  type GetRegion_typesGroupByPayload<T extends region_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Region_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Region_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Region_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Region_typesGroupByOutputType[P]>
        }
      >
    >


  export type region_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
    regions?: boolean | region_types$regionsArgs<ExtArgs>
    _count?: boolean | Region_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region_types"]>

  export type region_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
  }, ExtArgs["result"]["region_types"]>

  export type region_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
  }, ExtArgs["result"]["region_types"]>

  export type region_typesSelectScalar = {
    id?: boolean
    name?: boolean
    detail?: boolean
  }

  export type region_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "detail", ExtArgs["result"]["region_types"]>
  export type region_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | region_types$regionsArgs<ExtArgs>
    _count?: boolean | Region_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type region_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type region_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $region_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "region_types"
    objects: {
      regions: Prisma.$regionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      detail: string
    }, ExtArgs["result"]["region_types"]>
    composites: {}
  }

  type region_typesGetPayload<S extends boolean | null | undefined | region_typesDefaultArgs> = $Result.GetResult<Prisma.$region_typesPayload, S>

  type region_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<region_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Region_typesCountAggregateInputType | true
    }

  export interface region_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['region_types'], meta: { name: 'region_types' } }
    /**
     * Find zero or one Region_types that matches the filter.
     * @param {region_typesFindUniqueArgs} args - Arguments to find a Region_types
     * @example
     * // Get one Region_types
     * const region_types = await prisma.region_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends region_typesFindUniqueArgs>(args: SelectSubset<T, region_typesFindUniqueArgs<ExtArgs>>): Prisma__region_typesClient<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {region_typesFindUniqueOrThrowArgs} args - Arguments to find a Region_types
     * @example
     * // Get one Region_types
     * const region_types = await prisma.region_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends region_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, region_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__region_typesClient<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_typesFindFirstArgs} args - Arguments to find a Region_types
     * @example
     * // Get one Region_types
     * const region_types = await prisma.region_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends region_typesFindFirstArgs>(args?: SelectSubset<T, region_typesFindFirstArgs<ExtArgs>>): Prisma__region_typesClient<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_typesFindFirstOrThrowArgs} args - Arguments to find a Region_types
     * @example
     * // Get one Region_types
     * const region_types = await prisma.region_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends region_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, region_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__region_typesClient<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Region_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Region_types
     * const region_types = await prisma.region_types.findMany()
     * 
     * // Get first 10 Region_types
     * const region_types = await prisma.region_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const region_typesWithIdOnly = await prisma.region_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends region_typesFindManyArgs>(args?: SelectSubset<T, region_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region_types.
     * @param {region_typesCreateArgs} args - Arguments to create a Region_types.
     * @example
     * // Create one Region_types
     * const Region_types = await prisma.region_types.create({
     *   data: {
     *     // ... data to create a Region_types
     *   }
     * })
     * 
     */
    create<T extends region_typesCreateArgs>(args: SelectSubset<T, region_typesCreateArgs<ExtArgs>>): Prisma__region_typesClient<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Region_types.
     * @param {region_typesCreateManyArgs} args - Arguments to create many Region_types.
     * @example
     * // Create many Region_types
     * const region_types = await prisma.region_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends region_typesCreateManyArgs>(args?: SelectSubset<T, region_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Region_types and returns the data saved in the database.
     * @param {region_typesCreateManyAndReturnArgs} args - Arguments to create many Region_types.
     * @example
     * // Create many Region_types
     * const region_types = await prisma.region_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Region_types and only return the `id`
     * const region_typesWithIdOnly = await prisma.region_types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends region_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, region_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region_types.
     * @param {region_typesDeleteArgs} args - Arguments to delete one Region_types.
     * @example
     * // Delete one Region_types
     * const Region_types = await prisma.region_types.delete({
     *   where: {
     *     // ... filter to delete one Region_types
     *   }
     * })
     * 
     */
    delete<T extends region_typesDeleteArgs>(args: SelectSubset<T, region_typesDeleteArgs<ExtArgs>>): Prisma__region_typesClient<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region_types.
     * @param {region_typesUpdateArgs} args - Arguments to update one Region_types.
     * @example
     * // Update one Region_types
     * const region_types = await prisma.region_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends region_typesUpdateArgs>(args: SelectSubset<T, region_typesUpdateArgs<ExtArgs>>): Prisma__region_typesClient<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Region_types.
     * @param {region_typesDeleteManyArgs} args - Arguments to filter Region_types to delete.
     * @example
     * // Delete a few Region_types
     * const { count } = await prisma.region_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends region_typesDeleteManyArgs>(args?: SelectSubset<T, region_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Region_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Region_types
     * const region_types = await prisma.region_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends region_typesUpdateManyArgs>(args: SelectSubset<T, region_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Region_types and returns the data updated in the database.
     * @param {region_typesUpdateManyAndReturnArgs} args - Arguments to update many Region_types.
     * @example
     * // Update many Region_types
     * const region_types = await prisma.region_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Region_types and only return the `id`
     * const region_typesWithIdOnly = await prisma.region_types.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends region_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, region_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region_types.
     * @param {region_typesUpsertArgs} args - Arguments to update or create a Region_types.
     * @example
     * // Update or create a Region_types
     * const region_types = await prisma.region_types.upsert({
     *   create: {
     *     // ... data to create a Region_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region_types we want to update
     *   }
     * })
     */
    upsert<T extends region_typesUpsertArgs>(args: SelectSubset<T, region_typesUpsertArgs<ExtArgs>>): Prisma__region_typesClient<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Region_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_typesCountArgs} args - Arguments to filter Region_types to count.
     * @example
     * // Count the number of Region_types
     * const count = await prisma.region_types.count({
     *   where: {
     *     // ... the filter for the Region_types we want to count
     *   }
     * })
    **/
    count<T extends region_typesCountArgs>(
      args?: Subset<T, region_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Region_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Region_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Region_typesAggregateArgs>(args: Subset<T, Region_typesAggregateArgs>): Prisma.PrismaPromise<GetRegion_typesAggregateType<T>>

    /**
     * Group by Region_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {region_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends region_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: region_typesGroupByArgs['orderBy'] }
        : { orderBy?: region_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, region_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegion_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the region_types model
   */
  readonly fields: region_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for region_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__region_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regions<T extends region_types$regionsArgs<ExtArgs> = {}>(args?: Subset<T, region_types$regionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the region_types model
   */
  interface region_typesFieldRefs {
    readonly id: FieldRef<"region_types", 'Int'>
    readonly name: FieldRef<"region_types", 'String'>
    readonly detail: FieldRef<"region_types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * region_types findUnique
   */
  export type region_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
    /**
     * Filter, which region_types to fetch.
     */
    where: region_typesWhereUniqueInput
  }

  /**
   * region_types findUniqueOrThrow
   */
  export type region_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
    /**
     * Filter, which region_types to fetch.
     */
    where: region_typesWhereUniqueInput
  }

  /**
   * region_types findFirst
   */
  export type region_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
    /**
     * Filter, which region_types to fetch.
     */
    where?: region_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of region_types to fetch.
     */
    orderBy?: region_typesOrderByWithRelationInput | region_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for region_types.
     */
    cursor?: region_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` region_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` region_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of region_types.
     */
    distinct?: Region_typesScalarFieldEnum | Region_typesScalarFieldEnum[]
  }

  /**
   * region_types findFirstOrThrow
   */
  export type region_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
    /**
     * Filter, which region_types to fetch.
     */
    where?: region_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of region_types to fetch.
     */
    orderBy?: region_typesOrderByWithRelationInput | region_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for region_types.
     */
    cursor?: region_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` region_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` region_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of region_types.
     */
    distinct?: Region_typesScalarFieldEnum | Region_typesScalarFieldEnum[]
  }

  /**
   * region_types findMany
   */
  export type region_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
    /**
     * Filter, which region_types to fetch.
     */
    where?: region_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of region_types to fetch.
     */
    orderBy?: region_typesOrderByWithRelationInput | region_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing region_types.
     */
    cursor?: region_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` region_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` region_types.
     */
    skip?: number
    distinct?: Region_typesScalarFieldEnum | Region_typesScalarFieldEnum[]
  }

  /**
   * region_types create
   */
  export type region_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a region_types.
     */
    data: XOR<region_typesCreateInput, region_typesUncheckedCreateInput>
  }

  /**
   * region_types createMany
   */
  export type region_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many region_types.
     */
    data: region_typesCreateManyInput | region_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * region_types createManyAndReturn
   */
  export type region_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * The data used to create many region_types.
     */
    data: region_typesCreateManyInput | region_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * region_types update
   */
  export type region_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a region_types.
     */
    data: XOR<region_typesUpdateInput, region_typesUncheckedUpdateInput>
    /**
     * Choose, which region_types to update.
     */
    where: region_typesWhereUniqueInput
  }

  /**
   * region_types updateMany
   */
  export type region_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update region_types.
     */
    data: XOR<region_typesUpdateManyMutationInput, region_typesUncheckedUpdateManyInput>
    /**
     * Filter which region_types to update
     */
    where?: region_typesWhereInput
    /**
     * Limit how many region_types to update.
     */
    limit?: number
  }

  /**
   * region_types updateManyAndReturn
   */
  export type region_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * The data used to update region_types.
     */
    data: XOR<region_typesUpdateManyMutationInput, region_typesUncheckedUpdateManyInput>
    /**
     * Filter which region_types to update
     */
    where?: region_typesWhereInput
    /**
     * Limit how many region_types to update.
     */
    limit?: number
  }

  /**
   * region_types upsert
   */
  export type region_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the region_types to update in case it exists.
     */
    where: region_typesWhereUniqueInput
    /**
     * In case the region_types found by the `where` argument doesn't exist, create a new region_types with this data.
     */
    create: XOR<region_typesCreateInput, region_typesUncheckedCreateInput>
    /**
     * In case the region_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<region_typesUpdateInput, region_typesUncheckedUpdateInput>
  }

  /**
   * region_types delete
   */
  export type region_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
    /**
     * Filter which region_types to delete.
     */
    where: region_typesWhereUniqueInput
  }

  /**
   * region_types deleteMany
   */
  export type region_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which region_types to delete
     */
    where?: region_typesWhereInput
    /**
     * Limit how many region_types to delete.
     */
    limit?: number
  }

  /**
   * region_types.regions
   */
  export type region_types$regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    where?: regionsWhereInput
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    cursor?: regionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * region_types without action
   */
  export type region_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the region_types
     */
    select?: region_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the region_types
     */
    omit?: region_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: region_typesInclude<ExtArgs> | null
  }


  /**
   * Model regions
   */

  export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  export type RegionsAvgAggregateOutputType = {
    id: number | null
    region_type_id: number | null
  }

  export type RegionsSumAggregateOutputType = {
    id: number | null
    region_type_id: number | null
  }

  export type RegionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
    region_type_id: number | null
  }

  export type RegionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
    region_type_id: number | null
  }

  export type RegionsCountAggregateOutputType = {
    id: number
    name: number
    detail: number
    region_type_id: number
    _all: number
  }


  export type RegionsAvgAggregateInputType = {
    id?: true
    region_type_id?: true
  }

  export type RegionsSumAggregateInputType = {
    id?: true
    region_type_id?: true
  }

  export type RegionsMinAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    region_type_id?: true
  }

  export type RegionsMaxAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    region_type_id?: true
  }

  export type RegionsCountAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    region_type_id?: true
    _all?: true
  }

  export type RegionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regions to aggregate.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned regions
    **/
    _count?: true | RegionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionsMaxAggregateInputType
  }

  export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegions[P]>
      : GetScalarType<T[P], AggregateRegions[P]>
  }




  export type regionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regionsWhereInput
    orderBy?: regionsOrderByWithAggregationInput | regionsOrderByWithAggregationInput[]
    by: RegionsScalarFieldEnum[] | RegionsScalarFieldEnum
    having?: regionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionsCountAggregateInputType | true
    _avg?: RegionsAvgAggregateInputType
    _sum?: RegionsSumAggregateInputType
    _min?: RegionsMinAggregateInputType
    _max?: RegionsMaxAggregateInputType
  }

  export type RegionsGroupByOutputType = {
    id: number
    name: string
    detail: string
    region_type_id: number
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  type GetRegionsGroupByPayload<T extends regionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionsGroupByOutputType[P]>
            : GetScalarType<T[P], RegionsGroupByOutputType[P]>
        }
      >
    >


  export type regionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
    region_type_id?: boolean
    region_type?: boolean | region_typesDefaultArgs<ExtArgs>
    template_regions?: boolean | regions$template_regionsArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regions"]>

  export type regionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
    region_type_id?: boolean
    region_type?: boolean | region_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regions"]>

  export type regionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
    region_type_id?: boolean
    region_type?: boolean | region_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regions"]>

  export type regionsSelectScalar = {
    id?: boolean
    name?: boolean
    detail?: boolean
    region_type_id?: boolean
  }

  export type regionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "detail" | "region_type_id", ExtArgs["result"]["regions"]>
  export type regionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region_type?: boolean | region_typesDefaultArgs<ExtArgs>
    template_regions?: boolean | regions$template_regionsArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type regionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region_type?: boolean | region_typesDefaultArgs<ExtArgs>
  }
  export type regionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region_type?: boolean | region_typesDefaultArgs<ExtArgs>
  }

  export type $regionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "regions"
    objects: {
      region_type: Prisma.$region_typesPayload<ExtArgs>
      template_regions: Prisma.$template_regionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      detail: string
      region_type_id: number
    }, ExtArgs["result"]["regions"]>
    composites: {}
  }

  type regionsGetPayload<S extends boolean | null | undefined | regionsDefaultArgs> = $Result.GetResult<Prisma.$regionsPayload, S>

  type regionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<regionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionsCountAggregateInputType | true
    }

  export interface regionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['regions'], meta: { name: 'regions' } }
    /**
     * Find zero or one Regions that matches the filter.
     * @param {regionsFindUniqueArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends regionsFindUniqueArgs>(args: SelectSubset<T, regionsFindUniqueArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {regionsFindUniqueOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends regionsFindUniqueOrThrowArgs>(args: SelectSubset<T, regionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindFirstArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends regionsFindFirstArgs>(args?: SelectSubset<T, regionsFindFirstArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindFirstOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends regionsFindFirstOrThrowArgs>(args?: SelectSubset<T, regionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.regions.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.regions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionsWithIdOnly = await prisma.regions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends regionsFindManyArgs>(args?: SelectSubset<T, regionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regions.
     * @param {regionsCreateArgs} args - Arguments to create a Regions.
     * @example
     * // Create one Regions
     * const Regions = await prisma.regions.create({
     *   data: {
     *     // ... data to create a Regions
     *   }
     * })
     * 
     */
    create<T extends regionsCreateArgs>(args: SelectSubset<T, regionsCreateArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {regionsCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends regionsCreateManyArgs>(args?: SelectSubset<T, regionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {regionsCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionsWithIdOnly = await prisma.regions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends regionsCreateManyAndReturnArgs>(args?: SelectSubset<T, regionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regions.
     * @param {regionsDeleteArgs} args - Arguments to delete one Regions.
     * @example
     * // Delete one Regions
     * const Regions = await prisma.regions.delete({
     *   where: {
     *     // ... filter to delete one Regions
     *   }
     * })
     * 
     */
    delete<T extends regionsDeleteArgs>(args: SelectSubset<T, regionsDeleteArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regions.
     * @param {regionsUpdateArgs} args - Arguments to update one Regions.
     * @example
     * // Update one Regions
     * const regions = await prisma.regions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends regionsUpdateArgs>(args: SelectSubset<T, regionsUpdateArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {regionsDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.regions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends regionsDeleteManyArgs>(args?: SelectSubset<T, regionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends regionsUpdateManyArgs>(args: SelectSubset<T, regionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {regionsUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionsWithIdOnly = await prisma.regions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends regionsUpdateManyAndReturnArgs>(args: SelectSubset<T, regionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regions.
     * @param {regionsUpsertArgs} args - Arguments to update or create a Regions.
     * @example
     * // Update or create a Regions
     * const regions = await prisma.regions.upsert({
     *   create: {
     *     // ... data to create a Regions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regions we want to update
     *   }
     * })
     */
    upsert<T extends regionsUpsertArgs>(args: SelectSubset<T, regionsUpsertArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.regions.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends regionsCountArgs>(
      args?: Subset<T, regionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionsAggregateArgs>(args: Subset<T, RegionsAggregateArgs>): Prisma.PrismaPromise<GetRegionsAggregateType<T>>

    /**
     * Group by Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends regionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: regionsGroupByArgs['orderBy'] }
        : { orderBy?: regionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, regionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the regions model
   */
  readonly fields: regionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for regions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__regionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region_type<T extends region_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, region_typesDefaultArgs<ExtArgs>>): Prisma__region_typesClient<$Result.GetResult<Prisma.$region_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template_regions<T extends regions$template_regionsArgs<ExtArgs> = {}>(args?: Subset<T, regions$template_regionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the regions model
   */
  interface regionsFieldRefs {
    readonly id: FieldRef<"regions", 'Int'>
    readonly name: FieldRef<"regions", 'String'>
    readonly detail: FieldRef<"regions", 'String'>
    readonly region_type_id: FieldRef<"regions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * regions findUnique
   */
  export type regionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions findUniqueOrThrow
   */
  export type regionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions findFirst
   */
  export type regionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regions.
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * regions findFirstOrThrow
   */
  export type regionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regions.
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * regions findMany
   */
  export type regionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing regions.
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * regions create
   */
  export type regionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * The data needed to create a regions.
     */
    data: XOR<regionsCreateInput, regionsUncheckedCreateInput>
  }

  /**
   * regions createMany
   */
  export type regionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many regions.
     */
    data: regionsCreateManyInput | regionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * regions createManyAndReturn
   */
  export type regionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * The data used to create many regions.
     */
    data: regionsCreateManyInput | regionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * regions update
   */
  export type regionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * The data needed to update a regions.
     */
    data: XOR<regionsUpdateInput, regionsUncheckedUpdateInput>
    /**
     * Choose, which regions to update.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions updateMany
   */
  export type regionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update regions.
     */
    data: XOR<regionsUpdateManyMutationInput, regionsUncheckedUpdateManyInput>
    /**
     * Filter which regions to update
     */
    where?: regionsWhereInput
    /**
     * Limit how many regions to update.
     */
    limit?: number
  }

  /**
   * regions updateManyAndReturn
   */
  export type regionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * The data used to update regions.
     */
    data: XOR<regionsUpdateManyMutationInput, regionsUncheckedUpdateManyInput>
    /**
     * Filter which regions to update
     */
    where?: regionsWhereInput
    /**
     * Limit how many regions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * regions upsert
   */
  export type regionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * The filter to search for the regions to update in case it exists.
     */
    where: regionsWhereUniqueInput
    /**
     * In case the regions found by the `where` argument doesn't exist, create a new regions with this data.
     */
    create: XOR<regionsCreateInput, regionsUncheckedCreateInput>
    /**
     * In case the regions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<regionsUpdateInput, regionsUncheckedUpdateInput>
  }

  /**
   * regions delete
   */
  export type regionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter which regions to delete.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions deleteMany
   */
  export type regionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regions to delete
     */
    where?: regionsWhereInput
    /**
     * Limit how many regions to delete.
     */
    limit?: number
  }

  /**
   * regions.template_regions
   */
  export type regions$template_regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    where?: template_regionsWhereInput
    orderBy?: template_regionsOrderByWithRelationInput | template_regionsOrderByWithRelationInput[]
    cursor?: template_regionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Template_regionsScalarFieldEnum | Template_regionsScalarFieldEnum[]
  }

  /**
   * regions without action
   */
  export type regionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
  }


  /**
   * Model templates
   */

  export type AggregateTemplates = {
    _count: TemplatesCountAggregateOutputType | null
    _avg: TemplatesAvgAggregateOutputType | null
    _sum: TemplatesSumAggregateOutputType | null
    _min: TemplatesMinAggregateOutputType | null
    _max: TemplatesMaxAggregateOutputType | null
  }

  export type TemplatesAvgAggregateOutputType = {
    total_no: number | null
  }

  export type TemplatesSumAggregateOutputType = {
    total_no: number | null
  }

  export type TemplatesMinAggregateOutputType = {
    id: string | null
    name: string | null
    image_filename: string | null
    pdf_filename: string | null
    total_no: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TemplatesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image_filename: string | null
    pdf_filename: string | null
    total_no: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TemplatesCountAggregateOutputType = {
    id: number
    name: number
    image_filename: number
    pdf_filename: number
    total_no: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TemplatesAvgAggregateInputType = {
    total_no?: true
  }

  export type TemplatesSumAggregateInputType = {
    total_no?: true
  }

  export type TemplatesMinAggregateInputType = {
    id?: true
    name?: true
    image_filename?: true
    pdf_filename?: true
    total_no?: true
    created_at?: true
    updated_at?: true
  }

  export type TemplatesMaxAggregateInputType = {
    id?: true
    name?: true
    image_filename?: true
    pdf_filename?: true
    total_no?: true
    created_at?: true
    updated_at?: true
  }

  export type TemplatesCountAggregateInputType = {
    id?: true
    name?: true
    image_filename?: true
    pdf_filename?: true
    total_no?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TemplatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which templates to aggregate.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned templates
    **/
    _count?: true | TemplatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplatesMaxAggregateInputType
  }

  export type GetTemplatesAggregateType<T extends TemplatesAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplates[P]>
      : GetScalarType<T[P], AggregateTemplates[P]>
  }




  export type templatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: templatesWhereInput
    orderBy?: templatesOrderByWithAggregationInput | templatesOrderByWithAggregationInput[]
    by: TemplatesScalarFieldEnum[] | TemplatesScalarFieldEnum
    having?: templatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplatesCountAggregateInputType | true
    _avg?: TemplatesAvgAggregateInputType
    _sum?: TemplatesSumAggregateInputType
    _min?: TemplatesMinAggregateInputType
    _max?: TemplatesMaxAggregateInputType
  }

  export type TemplatesGroupByOutputType = {
    id: string
    name: string
    image_filename: string
    pdf_filename: string
    total_no: number
    created_at: Date
    updated_at: Date
    _count: TemplatesCountAggregateOutputType | null
    _avg: TemplatesAvgAggregateOutputType | null
    _sum: TemplatesSumAggregateOutputType | null
    _min: TemplatesMinAggregateOutputType | null
    _max: TemplatesMaxAggregateOutputType | null
  }

  type GetTemplatesGroupByPayload<T extends templatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplatesGroupByOutputType[P]>
            : GetScalarType<T[P], TemplatesGroupByOutputType[P]>
        }
      >
    >


  export type templatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_filename?: boolean
    pdf_filename?: boolean
    total_no?: boolean
    created_at?: boolean
    updated_at?: boolean
    template_regions?: boolean | templates$template_regionsArgs<ExtArgs>
    groups?: boolean | templates$groupsArgs<ExtArgs>
    _count?: boolean | TemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templates"]>

  export type templatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_filename?: boolean
    pdf_filename?: boolean
    total_no?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["templates"]>

  export type templatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_filename?: boolean
    pdf_filename?: boolean
    total_no?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["templates"]>

  export type templatesSelectScalar = {
    id?: boolean
    name?: boolean
    image_filename?: boolean
    pdf_filename?: boolean
    total_no?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type templatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image_filename" | "pdf_filename" | "total_no" | "created_at" | "updated_at", ExtArgs["result"]["templates"]>
  export type templatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template_regions?: boolean | templates$template_regionsArgs<ExtArgs>
    groups?: boolean | templates$groupsArgs<ExtArgs>
    _count?: boolean | TemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type templatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type templatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $templatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "templates"
    objects: {
      template_regions: Prisma.$template_regionsPayload<ExtArgs>[]
      groups: Prisma.$groupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image_filename: string
      pdf_filename: string
      total_no: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["templates"]>
    composites: {}
  }

  type templatesGetPayload<S extends boolean | null | undefined | templatesDefaultArgs> = $Result.GetResult<Prisma.$templatesPayload, S>

  type templatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<templatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplatesCountAggregateInputType | true
    }

  export interface templatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['templates'], meta: { name: 'templates' } }
    /**
     * Find zero or one Templates that matches the filter.
     * @param {templatesFindUniqueArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends templatesFindUniqueArgs>(args: SelectSubset<T, templatesFindUniqueArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Templates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {templatesFindUniqueOrThrowArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends templatesFindUniqueOrThrowArgs>(args: SelectSubset<T, templatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesFindFirstArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends templatesFindFirstArgs>(args?: SelectSubset<T, templatesFindFirstArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Templates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesFindFirstOrThrowArgs} args - Arguments to find a Templates
     * @example
     * // Get one Templates
     * const templates = await prisma.templates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends templatesFindFirstOrThrowArgs>(args?: SelectSubset<T, templatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.templates.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.templates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templatesWithIdOnly = await prisma.templates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends templatesFindManyArgs>(args?: SelectSubset<T, templatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Templates.
     * @param {templatesCreateArgs} args - Arguments to create a Templates.
     * @example
     * // Create one Templates
     * const Templates = await prisma.templates.create({
     *   data: {
     *     // ... data to create a Templates
     *   }
     * })
     * 
     */
    create<T extends templatesCreateArgs>(args: SelectSubset<T, templatesCreateArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {templatesCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const templates = await prisma.templates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends templatesCreateManyArgs>(args?: SelectSubset<T, templatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {templatesCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const templates = await prisma.templates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templatesWithIdOnly = await prisma.templates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends templatesCreateManyAndReturnArgs>(args?: SelectSubset<T, templatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Templates.
     * @param {templatesDeleteArgs} args - Arguments to delete one Templates.
     * @example
     * // Delete one Templates
     * const Templates = await prisma.templates.delete({
     *   where: {
     *     // ... filter to delete one Templates
     *   }
     * })
     * 
     */
    delete<T extends templatesDeleteArgs>(args: SelectSubset<T, templatesDeleteArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Templates.
     * @param {templatesUpdateArgs} args - Arguments to update one Templates.
     * @example
     * // Update one Templates
     * const templates = await prisma.templates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends templatesUpdateArgs>(args: SelectSubset<T, templatesUpdateArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {templatesDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.templates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends templatesDeleteManyArgs>(args?: SelectSubset<T, templatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const templates = await prisma.templates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends templatesUpdateManyArgs>(args: SelectSubset<T, templatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {templatesUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const templates = await prisma.templates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templatesWithIdOnly = await prisma.templates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends templatesUpdateManyAndReturnArgs>(args: SelectSubset<T, templatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Templates.
     * @param {templatesUpsertArgs} args - Arguments to update or create a Templates.
     * @example
     * // Update or create a Templates
     * const templates = await prisma.templates.upsert({
     *   create: {
     *     // ... data to create a Templates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Templates we want to update
     *   }
     * })
     */
    upsert<T extends templatesUpsertArgs>(args: SelectSubset<T, templatesUpsertArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.templates.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends templatesCountArgs>(
      args?: Subset<T, templatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplatesAggregateArgs>(args: Subset<T, TemplatesAggregateArgs>): Prisma.PrismaPromise<GetTemplatesAggregateType<T>>

    /**
     * Group by Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {templatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends templatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: templatesGroupByArgs['orderBy'] }
        : { orderBy?: templatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, templatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the templates model
   */
  readonly fields: templatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for templates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__templatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template_regions<T extends templates$template_regionsArgs<ExtArgs> = {}>(args?: Subset<T, templates$template_regionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends templates$groupsArgs<ExtArgs> = {}>(args?: Subset<T, templates$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the templates model
   */
  interface templatesFieldRefs {
    readonly id: FieldRef<"templates", 'String'>
    readonly name: FieldRef<"templates", 'String'>
    readonly image_filename: FieldRef<"templates", 'String'>
    readonly pdf_filename: FieldRef<"templates", 'String'>
    readonly total_no: FieldRef<"templates", 'Int'>
    readonly created_at: FieldRef<"templates", 'DateTime'>
    readonly updated_at: FieldRef<"templates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * templates findUnique
   */
  export type templatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates findUniqueOrThrow
   */
  export type templatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates findFirst
   */
  export type templatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * templates findFirstOrThrow
   */
  export type templatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for templates.
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of templates.
     */
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * templates findMany
   */
  export type templatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter, which templates to fetch.
     */
    where?: templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of templates to fetch.
     */
    orderBy?: templatesOrderByWithRelationInput | templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing templates.
     */
    cursor?: templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` templates.
     */
    skip?: number
    distinct?: TemplatesScalarFieldEnum | TemplatesScalarFieldEnum[]
  }

  /**
   * templates create
   */
  export type templatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * The data needed to create a templates.
     */
    data: XOR<templatesCreateInput, templatesUncheckedCreateInput>
  }

  /**
   * templates createMany
   */
  export type templatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many templates.
     */
    data: templatesCreateManyInput | templatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * templates createManyAndReturn
   */
  export type templatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * The data used to create many templates.
     */
    data: templatesCreateManyInput | templatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * templates update
   */
  export type templatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * The data needed to update a templates.
     */
    data: XOR<templatesUpdateInput, templatesUncheckedUpdateInput>
    /**
     * Choose, which templates to update.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates updateMany
   */
  export type templatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update templates.
     */
    data: XOR<templatesUpdateManyMutationInput, templatesUncheckedUpdateManyInput>
    /**
     * Filter which templates to update
     */
    where?: templatesWhereInput
    /**
     * Limit how many templates to update.
     */
    limit?: number
  }

  /**
   * templates updateManyAndReturn
   */
  export type templatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * The data used to update templates.
     */
    data: XOR<templatesUpdateManyMutationInput, templatesUncheckedUpdateManyInput>
    /**
     * Filter which templates to update
     */
    where?: templatesWhereInput
    /**
     * Limit how many templates to update.
     */
    limit?: number
  }

  /**
   * templates upsert
   */
  export type templatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * The filter to search for the templates to update in case it exists.
     */
    where: templatesWhereUniqueInput
    /**
     * In case the templates found by the `where` argument doesn't exist, create a new templates with this data.
     */
    create: XOR<templatesCreateInput, templatesUncheckedCreateInput>
    /**
     * In case the templates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<templatesUpdateInput, templatesUncheckedUpdateInput>
  }

  /**
   * templates delete
   */
  export type templatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
    /**
     * Filter which templates to delete.
     */
    where: templatesWhereUniqueInput
  }

  /**
   * templates deleteMany
   */
  export type templatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which templates to delete
     */
    where?: templatesWhereInput
    /**
     * Limit how many templates to delete.
     */
    limit?: number
  }

  /**
   * templates.template_regions
   */
  export type templates$template_regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    where?: template_regionsWhereInput
    orderBy?: template_regionsOrderByWithRelationInput | template_regionsOrderByWithRelationInput[]
    cursor?: template_regionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Template_regionsScalarFieldEnum | Template_regionsScalarFieldEnum[]
  }

  /**
   * templates.groups
   */
  export type templates$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    cursor?: groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * templates without action
   */
  export type templatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the templates
     */
    select?: templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the templates
     */
    omit?: templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: templatesInclude<ExtArgs> | null
  }


  /**
   * Model template_regions
   */

  export type AggregateTemplate_regions = {
    _count: Template_regionsCountAggregateOutputType | null
    _avg: Template_regionsAvgAggregateOutputType | null
    _sum: Template_regionsSumAggregateOutputType | null
    _min: Template_regionsMinAggregateOutputType | null
    _max: Template_regionsMaxAggregateOutputType | null
  }

  export type Template_regionsAvgAggregateOutputType = {
    id: number | null
    region_id: number | null
    sx: number | null
    sy: number | null
    ex: number | null
    ey: number | null
  }

  export type Template_regionsSumAggregateOutputType = {
    id: number | null
    region_id: number | null
    sx: number | null
    sy: number | null
    ex: number | null
    ey: number | null
  }

  export type Template_regionsMinAggregateOutputType = {
    id: number | null
    template_id: string | null
    region_id: number | null
    sx: number | null
    sy: number | null
    ex: number | null
    ey: number | null
  }

  export type Template_regionsMaxAggregateOutputType = {
    id: number | null
    template_id: string | null
    region_id: number | null
    sx: number | null
    sy: number | null
    ex: number | null
    ey: number | null
  }

  export type Template_regionsCountAggregateOutputType = {
    id: number
    template_id: number
    region_id: number
    sx: number
    sy: number
    ex: number
    ey: number
    _all: number
  }


  export type Template_regionsAvgAggregateInputType = {
    id?: true
    region_id?: true
    sx?: true
    sy?: true
    ex?: true
    ey?: true
  }

  export type Template_regionsSumAggregateInputType = {
    id?: true
    region_id?: true
    sx?: true
    sy?: true
    ex?: true
    ey?: true
  }

  export type Template_regionsMinAggregateInputType = {
    id?: true
    template_id?: true
    region_id?: true
    sx?: true
    sy?: true
    ex?: true
    ey?: true
  }

  export type Template_regionsMaxAggregateInputType = {
    id?: true
    template_id?: true
    region_id?: true
    sx?: true
    sy?: true
    ex?: true
    ey?: true
  }

  export type Template_regionsCountAggregateInputType = {
    id?: true
    template_id?: true
    region_id?: true
    sx?: true
    sy?: true
    ex?: true
    ey?: true
    _all?: true
  }

  export type Template_regionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which template_regions to aggregate.
     */
    where?: template_regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_regions to fetch.
     */
    orderBy?: template_regionsOrderByWithRelationInput | template_regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: template_regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned template_regions
    **/
    _count?: true | Template_regionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Template_regionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Template_regionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Template_regionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Template_regionsMaxAggregateInputType
  }

  export type GetTemplate_regionsAggregateType<T extends Template_regionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate_regions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate_regions[P]>
      : GetScalarType<T[P], AggregateTemplate_regions[P]>
  }




  export type template_regionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: template_regionsWhereInput
    orderBy?: template_regionsOrderByWithAggregationInput | template_regionsOrderByWithAggregationInput[]
    by: Template_regionsScalarFieldEnum[] | Template_regionsScalarFieldEnum
    having?: template_regionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Template_regionsCountAggregateInputType | true
    _avg?: Template_regionsAvgAggregateInputType
    _sum?: Template_regionsSumAggregateInputType
    _min?: Template_regionsMinAggregateInputType
    _max?: Template_regionsMaxAggregateInputType
  }

  export type Template_regionsGroupByOutputType = {
    id: number
    template_id: string
    region_id: number
    sx: number
    sy: number
    ex: number
    ey: number
    _count: Template_regionsCountAggregateOutputType | null
    _avg: Template_regionsAvgAggregateOutputType | null
    _sum: Template_regionsSumAggregateOutputType | null
    _min: Template_regionsMinAggregateOutputType | null
    _max: Template_regionsMaxAggregateOutputType | null
  }

  type GetTemplate_regionsGroupByPayload<T extends template_regionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Template_regionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Template_regionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Template_regionsGroupByOutputType[P]>
            : GetScalarType<T[P], Template_regionsGroupByOutputType[P]>
        }
      >
    >


  export type template_regionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template_id?: boolean
    region_id?: boolean
    sx?: boolean
    sy?: boolean
    ex?: boolean
    ey?: boolean
    template?: boolean | templatesDefaultArgs<ExtArgs>
    region?: boolean | regionsDefaultArgs<ExtArgs>
    template_marker_centers?: boolean | template_regions$template_marker_centersArgs<ExtArgs>
    _count?: boolean | Template_regionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template_regions"]>

  export type template_regionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template_id?: boolean
    region_id?: boolean
    sx?: boolean
    sy?: boolean
    ex?: boolean
    ey?: boolean
    template?: boolean | templatesDefaultArgs<ExtArgs>
    region?: boolean | regionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template_regions"]>

  export type template_regionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template_id?: boolean
    region_id?: boolean
    sx?: boolean
    sy?: boolean
    ex?: boolean
    ey?: boolean
    template?: boolean | templatesDefaultArgs<ExtArgs>
    region?: boolean | regionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template_regions"]>

  export type template_regionsSelectScalar = {
    id?: boolean
    template_id?: boolean
    region_id?: boolean
    sx?: boolean
    sy?: boolean
    ex?: boolean
    ey?: boolean
  }

  export type template_regionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "template_id" | "region_id" | "sx" | "sy" | "ex" | "ey", ExtArgs["result"]["template_regions"]>
  export type template_regionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | templatesDefaultArgs<ExtArgs>
    region?: boolean | regionsDefaultArgs<ExtArgs>
    template_marker_centers?: boolean | template_regions$template_marker_centersArgs<ExtArgs>
    _count?: boolean | Template_regionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type template_regionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | templatesDefaultArgs<ExtArgs>
    region?: boolean | regionsDefaultArgs<ExtArgs>
  }
  export type template_regionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | templatesDefaultArgs<ExtArgs>
    region?: boolean | regionsDefaultArgs<ExtArgs>
  }

  export type $template_regionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "template_regions"
    objects: {
      template: Prisma.$templatesPayload<ExtArgs>
      region: Prisma.$regionsPayload<ExtArgs>
      template_marker_centers: Prisma.$template_marker_centersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      template_id: string
      region_id: number
      sx: number
      sy: number
      ex: number
      ey: number
    }, ExtArgs["result"]["template_regions"]>
    composites: {}
  }

  type template_regionsGetPayload<S extends boolean | null | undefined | template_regionsDefaultArgs> = $Result.GetResult<Prisma.$template_regionsPayload, S>

  type template_regionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<template_regionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Template_regionsCountAggregateInputType | true
    }

  export interface template_regionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['template_regions'], meta: { name: 'template_regions' } }
    /**
     * Find zero or one Template_regions that matches the filter.
     * @param {template_regionsFindUniqueArgs} args - Arguments to find a Template_regions
     * @example
     * // Get one Template_regions
     * const template_regions = await prisma.template_regions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends template_regionsFindUniqueArgs>(args: SelectSubset<T, template_regionsFindUniqueArgs<ExtArgs>>): Prisma__template_regionsClient<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template_regions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {template_regionsFindUniqueOrThrowArgs} args - Arguments to find a Template_regions
     * @example
     * // Get one Template_regions
     * const template_regions = await prisma.template_regions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends template_regionsFindUniqueOrThrowArgs>(args: SelectSubset<T, template_regionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__template_regionsClient<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template_regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_regionsFindFirstArgs} args - Arguments to find a Template_regions
     * @example
     * // Get one Template_regions
     * const template_regions = await prisma.template_regions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends template_regionsFindFirstArgs>(args?: SelectSubset<T, template_regionsFindFirstArgs<ExtArgs>>): Prisma__template_regionsClient<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template_regions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_regionsFindFirstOrThrowArgs} args - Arguments to find a Template_regions
     * @example
     * // Get one Template_regions
     * const template_regions = await prisma.template_regions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends template_regionsFindFirstOrThrowArgs>(args?: SelectSubset<T, template_regionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__template_regionsClient<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Template_regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_regionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Template_regions
     * const template_regions = await prisma.template_regions.findMany()
     * 
     * // Get first 10 Template_regions
     * const template_regions = await prisma.template_regions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const template_regionsWithIdOnly = await prisma.template_regions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends template_regionsFindManyArgs>(args?: SelectSubset<T, template_regionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template_regions.
     * @param {template_regionsCreateArgs} args - Arguments to create a Template_regions.
     * @example
     * // Create one Template_regions
     * const Template_regions = await prisma.template_regions.create({
     *   data: {
     *     // ... data to create a Template_regions
     *   }
     * })
     * 
     */
    create<T extends template_regionsCreateArgs>(args: SelectSubset<T, template_regionsCreateArgs<ExtArgs>>): Prisma__template_regionsClient<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Template_regions.
     * @param {template_regionsCreateManyArgs} args - Arguments to create many Template_regions.
     * @example
     * // Create many Template_regions
     * const template_regions = await prisma.template_regions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends template_regionsCreateManyArgs>(args?: SelectSubset<T, template_regionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Template_regions and returns the data saved in the database.
     * @param {template_regionsCreateManyAndReturnArgs} args - Arguments to create many Template_regions.
     * @example
     * // Create many Template_regions
     * const template_regions = await prisma.template_regions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Template_regions and only return the `id`
     * const template_regionsWithIdOnly = await prisma.template_regions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends template_regionsCreateManyAndReturnArgs>(args?: SelectSubset<T, template_regionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template_regions.
     * @param {template_regionsDeleteArgs} args - Arguments to delete one Template_regions.
     * @example
     * // Delete one Template_regions
     * const Template_regions = await prisma.template_regions.delete({
     *   where: {
     *     // ... filter to delete one Template_regions
     *   }
     * })
     * 
     */
    delete<T extends template_regionsDeleteArgs>(args: SelectSubset<T, template_regionsDeleteArgs<ExtArgs>>): Prisma__template_regionsClient<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template_regions.
     * @param {template_regionsUpdateArgs} args - Arguments to update one Template_regions.
     * @example
     * // Update one Template_regions
     * const template_regions = await prisma.template_regions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends template_regionsUpdateArgs>(args: SelectSubset<T, template_regionsUpdateArgs<ExtArgs>>): Prisma__template_regionsClient<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Template_regions.
     * @param {template_regionsDeleteManyArgs} args - Arguments to filter Template_regions to delete.
     * @example
     * // Delete a few Template_regions
     * const { count } = await prisma.template_regions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends template_regionsDeleteManyArgs>(args?: SelectSubset<T, template_regionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Template_regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_regionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Template_regions
     * const template_regions = await prisma.template_regions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends template_regionsUpdateManyArgs>(args: SelectSubset<T, template_regionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Template_regions and returns the data updated in the database.
     * @param {template_regionsUpdateManyAndReturnArgs} args - Arguments to update many Template_regions.
     * @example
     * // Update many Template_regions
     * const template_regions = await prisma.template_regions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Template_regions and only return the `id`
     * const template_regionsWithIdOnly = await prisma.template_regions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends template_regionsUpdateManyAndReturnArgs>(args: SelectSubset<T, template_regionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template_regions.
     * @param {template_regionsUpsertArgs} args - Arguments to update or create a Template_regions.
     * @example
     * // Update or create a Template_regions
     * const template_regions = await prisma.template_regions.upsert({
     *   create: {
     *     // ... data to create a Template_regions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template_regions we want to update
     *   }
     * })
     */
    upsert<T extends template_regionsUpsertArgs>(args: SelectSubset<T, template_regionsUpsertArgs<ExtArgs>>): Prisma__template_regionsClient<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Template_regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_regionsCountArgs} args - Arguments to filter Template_regions to count.
     * @example
     * // Count the number of Template_regions
     * const count = await prisma.template_regions.count({
     *   where: {
     *     // ... the filter for the Template_regions we want to count
     *   }
     * })
    **/
    count<T extends template_regionsCountArgs>(
      args?: Subset<T, template_regionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Template_regionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template_regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Template_regionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Template_regionsAggregateArgs>(args: Subset<T, Template_regionsAggregateArgs>): Prisma.PrismaPromise<GetTemplate_regionsAggregateType<T>>

    /**
     * Group by Template_regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_regionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends template_regionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: template_regionsGroupByArgs['orderBy'] }
        : { orderBy?: template_regionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, template_regionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplate_regionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the template_regions model
   */
  readonly fields: template_regionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for template_regions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__template_regionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends templatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, templatesDefaultArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    region<T extends regionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, regionsDefaultArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template_marker_centers<T extends template_regions$template_marker_centersArgs<ExtArgs> = {}>(args?: Subset<T, template_regions$template_marker_centersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the template_regions model
   */
  interface template_regionsFieldRefs {
    readonly id: FieldRef<"template_regions", 'Int'>
    readonly template_id: FieldRef<"template_regions", 'String'>
    readonly region_id: FieldRef<"template_regions", 'Int'>
    readonly sx: FieldRef<"template_regions", 'Int'>
    readonly sy: FieldRef<"template_regions", 'Int'>
    readonly ex: FieldRef<"template_regions", 'Int'>
    readonly ey: FieldRef<"template_regions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * template_regions findUnique
   */
  export type template_regionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    /**
     * Filter, which template_regions to fetch.
     */
    where: template_regionsWhereUniqueInput
  }

  /**
   * template_regions findUniqueOrThrow
   */
  export type template_regionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    /**
     * Filter, which template_regions to fetch.
     */
    where: template_regionsWhereUniqueInput
  }

  /**
   * template_regions findFirst
   */
  export type template_regionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    /**
     * Filter, which template_regions to fetch.
     */
    where?: template_regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_regions to fetch.
     */
    orderBy?: template_regionsOrderByWithRelationInput | template_regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for template_regions.
     */
    cursor?: template_regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of template_regions.
     */
    distinct?: Template_regionsScalarFieldEnum | Template_regionsScalarFieldEnum[]
  }

  /**
   * template_regions findFirstOrThrow
   */
  export type template_regionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    /**
     * Filter, which template_regions to fetch.
     */
    where?: template_regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_regions to fetch.
     */
    orderBy?: template_regionsOrderByWithRelationInput | template_regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for template_regions.
     */
    cursor?: template_regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of template_regions.
     */
    distinct?: Template_regionsScalarFieldEnum | Template_regionsScalarFieldEnum[]
  }

  /**
   * template_regions findMany
   */
  export type template_regionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    /**
     * Filter, which template_regions to fetch.
     */
    where?: template_regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_regions to fetch.
     */
    orderBy?: template_regionsOrderByWithRelationInput | template_regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing template_regions.
     */
    cursor?: template_regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_regions.
     */
    skip?: number
    distinct?: Template_regionsScalarFieldEnum | Template_regionsScalarFieldEnum[]
  }

  /**
   * template_regions create
   */
  export type template_regionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    /**
     * The data needed to create a template_regions.
     */
    data: XOR<template_regionsCreateInput, template_regionsUncheckedCreateInput>
  }

  /**
   * template_regions createMany
   */
  export type template_regionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many template_regions.
     */
    data: template_regionsCreateManyInput | template_regionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * template_regions createManyAndReturn
   */
  export type template_regionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * The data used to create many template_regions.
     */
    data: template_regionsCreateManyInput | template_regionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * template_regions update
   */
  export type template_regionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    /**
     * The data needed to update a template_regions.
     */
    data: XOR<template_regionsUpdateInput, template_regionsUncheckedUpdateInput>
    /**
     * Choose, which template_regions to update.
     */
    where: template_regionsWhereUniqueInput
  }

  /**
   * template_regions updateMany
   */
  export type template_regionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update template_regions.
     */
    data: XOR<template_regionsUpdateManyMutationInput, template_regionsUncheckedUpdateManyInput>
    /**
     * Filter which template_regions to update
     */
    where?: template_regionsWhereInput
    /**
     * Limit how many template_regions to update.
     */
    limit?: number
  }

  /**
   * template_regions updateManyAndReturn
   */
  export type template_regionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * The data used to update template_regions.
     */
    data: XOR<template_regionsUpdateManyMutationInput, template_regionsUncheckedUpdateManyInput>
    /**
     * Filter which template_regions to update
     */
    where?: template_regionsWhereInput
    /**
     * Limit how many template_regions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * template_regions upsert
   */
  export type template_regionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    /**
     * The filter to search for the template_regions to update in case it exists.
     */
    where: template_regionsWhereUniqueInput
    /**
     * In case the template_regions found by the `where` argument doesn't exist, create a new template_regions with this data.
     */
    create: XOR<template_regionsCreateInput, template_regionsUncheckedCreateInput>
    /**
     * In case the template_regions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<template_regionsUpdateInput, template_regionsUncheckedUpdateInput>
  }

  /**
   * template_regions delete
   */
  export type template_regionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
    /**
     * Filter which template_regions to delete.
     */
    where: template_regionsWhereUniqueInput
  }

  /**
   * template_regions deleteMany
   */
  export type template_regionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which template_regions to delete
     */
    where?: template_regionsWhereInput
    /**
     * Limit how many template_regions to delete.
     */
    limit?: number
  }

  /**
   * template_regions.template_marker_centers
   */
  export type template_regions$template_marker_centersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    where?: template_marker_centersWhereInput
    orderBy?: template_marker_centersOrderByWithRelationInput | template_marker_centersOrderByWithRelationInput[]
    cursor?: template_marker_centersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Template_marker_centersScalarFieldEnum | Template_marker_centersScalarFieldEnum[]
  }

  /**
   * template_regions without action
   */
  export type template_regionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_regions
     */
    select?: template_regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_regions
     */
    omit?: template_regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_regionsInclude<ExtArgs> | null
  }


  /**
   * Model template_marker_centers
   */

  export type AggregateTemplate_marker_centers = {
    _count: Template_marker_centersCountAggregateOutputType | null
    _avg: Template_marker_centersAvgAggregateOutputType | null
    _sum: Template_marker_centersSumAggregateOutputType | null
    _min: Template_marker_centersMinAggregateOutputType | null
    _max: Template_marker_centersMaxAggregateOutputType | null
  }

  export type Template_marker_centersAvgAggregateOutputType = {
    template_region_id: number | null
    x: number | null
    y: number | null
  }

  export type Template_marker_centersSumAggregateOutputType = {
    template_region_id: number | null
    x: number | null
    y: number | null
  }

  export type Template_marker_centersMinAggregateOutputType = {
    template_region_id: number | null
    x: number | null
    y: number | null
  }

  export type Template_marker_centersMaxAggregateOutputType = {
    template_region_id: number | null
    x: number | null
    y: number | null
  }

  export type Template_marker_centersCountAggregateOutputType = {
    template_region_id: number
    x: number
    y: number
    _all: number
  }


  export type Template_marker_centersAvgAggregateInputType = {
    template_region_id?: true
    x?: true
    y?: true
  }

  export type Template_marker_centersSumAggregateInputType = {
    template_region_id?: true
    x?: true
    y?: true
  }

  export type Template_marker_centersMinAggregateInputType = {
    template_region_id?: true
    x?: true
    y?: true
  }

  export type Template_marker_centersMaxAggregateInputType = {
    template_region_id?: true
    x?: true
    y?: true
  }

  export type Template_marker_centersCountAggregateInputType = {
    template_region_id?: true
    x?: true
    y?: true
    _all?: true
  }

  export type Template_marker_centersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which template_marker_centers to aggregate.
     */
    where?: template_marker_centersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_marker_centers to fetch.
     */
    orderBy?: template_marker_centersOrderByWithRelationInput | template_marker_centersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: template_marker_centersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_marker_centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_marker_centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned template_marker_centers
    **/
    _count?: true | Template_marker_centersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Template_marker_centersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Template_marker_centersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Template_marker_centersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Template_marker_centersMaxAggregateInputType
  }

  export type GetTemplate_marker_centersAggregateType<T extends Template_marker_centersAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate_marker_centers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate_marker_centers[P]>
      : GetScalarType<T[P], AggregateTemplate_marker_centers[P]>
  }




  export type template_marker_centersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: template_marker_centersWhereInput
    orderBy?: template_marker_centersOrderByWithAggregationInput | template_marker_centersOrderByWithAggregationInput[]
    by: Template_marker_centersScalarFieldEnum[] | Template_marker_centersScalarFieldEnum
    having?: template_marker_centersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Template_marker_centersCountAggregateInputType | true
    _avg?: Template_marker_centersAvgAggregateInputType
    _sum?: Template_marker_centersSumAggregateInputType
    _min?: Template_marker_centersMinAggregateInputType
    _max?: Template_marker_centersMaxAggregateInputType
  }

  export type Template_marker_centersGroupByOutputType = {
    template_region_id: number
    x: number
    y: number
    _count: Template_marker_centersCountAggregateOutputType | null
    _avg: Template_marker_centersAvgAggregateOutputType | null
    _sum: Template_marker_centersSumAggregateOutputType | null
    _min: Template_marker_centersMinAggregateOutputType | null
    _max: Template_marker_centersMaxAggregateOutputType | null
  }

  type GetTemplate_marker_centersGroupByPayload<T extends template_marker_centersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Template_marker_centersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Template_marker_centersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Template_marker_centersGroupByOutputType[P]>
            : GetScalarType<T[P], Template_marker_centersGroupByOutputType[P]>
        }
      >
    >


  export type template_marker_centersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    template_region_id?: boolean
    x?: boolean
    y?: boolean
    template_region?: boolean | template_regionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template_marker_centers"]>

  export type template_marker_centersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    template_region_id?: boolean
    x?: boolean
    y?: boolean
    template_region?: boolean | template_regionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template_marker_centers"]>

  export type template_marker_centersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    template_region_id?: boolean
    x?: boolean
    y?: boolean
    template_region?: boolean | template_regionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template_marker_centers"]>

  export type template_marker_centersSelectScalar = {
    template_region_id?: boolean
    x?: boolean
    y?: boolean
  }

  export type template_marker_centersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"template_region_id" | "x" | "y", ExtArgs["result"]["template_marker_centers"]>
  export type template_marker_centersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template_region?: boolean | template_regionsDefaultArgs<ExtArgs>
  }
  export type template_marker_centersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template_region?: boolean | template_regionsDefaultArgs<ExtArgs>
  }
  export type template_marker_centersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template_region?: boolean | template_regionsDefaultArgs<ExtArgs>
  }

  export type $template_marker_centersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "template_marker_centers"
    objects: {
      template_region: Prisma.$template_regionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      template_region_id: number
      x: number
      y: number
    }, ExtArgs["result"]["template_marker_centers"]>
    composites: {}
  }

  type template_marker_centersGetPayload<S extends boolean | null | undefined | template_marker_centersDefaultArgs> = $Result.GetResult<Prisma.$template_marker_centersPayload, S>

  type template_marker_centersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<template_marker_centersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Template_marker_centersCountAggregateInputType | true
    }

  export interface template_marker_centersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['template_marker_centers'], meta: { name: 'template_marker_centers' } }
    /**
     * Find zero or one Template_marker_centers that matches the filter.
     * @param {template_marker_centersFindUniqueArgs} args - Arguments to find a Template_marker_centers
     * @example
     * // Get one Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends template_marker_centersFindUniqueArgs>(args: SelectSubset<T, template_marker_centersFindUniqueArgs<ExtArgs>>): Prisma__template_marker_centersClient<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template_marker_centers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {template_marker_centersFindUniqueOrThrowArgs} args - Arguments to find a Template_marker_centers
     * @example
     * // Get one Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends template_marker_centersFindUniqueOrThrowArgs>(args: SelectSubset<T, template_marker_centersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__template_marker_centersClient<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template_marker_centers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_marker_centersFindFirstArgs} args - Arguments to find a Template_marker_centers
     * @example
     * // Get one Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends template_marker_centersFindFirstArgs>(args?: SelectSubset<T, template_marker_centersFindFirstArgs<ExtArgs>>): Prisma__template_marker_centersClient<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template_marker_centers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_marker_centersFindFirstOrThrowArgs} args - Arguments to find a Template_marker_centers
     * @example
     * // Get one Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends template_marker_centersFindFirstOrThrowArgs>(args?: SelectSubset<T, template_marker_centersFindFirstOrThrowArgs<ExtArgs>>): Prisma__template_marker_centersClient<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Template_marker_centers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_marker_centersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.findMany()
     * 
     * // Get first 10 Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.findMany({ take: 10 })
     * 
     * // Only select the `template_region_id`
     * const template_marker_centersWithTemplate_region_idOnly = await prisma.template_marker_centers.findMany({ select: { template_region_id: true } })
     * 
     */
    findMany<T extends template_marker_centersFindManyArgs>(args?: SelectSubset<T, template_marker_centersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template_marker_centers.
     * @param {template_marker_centersCreateArgs} args - Arguments to create a Template_marker_centers.
     * @example
     * // Create one Template_marker_centers
     * const Template_marker_centers = await prisma.template_marker_centers.create({
     *   data: {
     *     // ... data to create a Template_marker_centers
     *   }
     * })
     * 
     */
    create<T extends template_marker_centersCreateArgs>(args: SelectSubset<T, template_marker_centersCreateArgs<ExtArgs>>): Prisma__template_marker_centersClient<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Template_marker_centers.
     * @param {template_marker_centersCreateManyArgs} args - Arguments to create many Template_marker_centers.
     * @example
     * // Create many Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends template_marker_centersCreateManyArgs>(args?: SelectSubset<T, template_marker_centersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Template_marker_centers and returns the data saved in the database.
     * @param {template_marker_centersCreateManyAndReturnArgs} args - Arguments to create many Template_marker_centers.
     * @example
     * // Create many Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Template_marker_centers and only return the `template_region_id`
     * const template_marker_centersWithTemplate_region_idOnly = await prisma.template_marker_centers.createManyAndReturn({
     *   select: { template_region_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends template_marker_centersCreateManyAndReturnArgs>(args?: SelectSubset<T, template_marker_centersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template_marker_centers.
     * @param {template_marker_centersDeleteArgs} args - Arguments to delete one Template_marker_centers.
     * @example
     * // Delete one Template_marker_centers
     * const Template_marker_centers = await prisma.template_marker_centers.delete({
     *   where: {
     *     // ... filter to delete one Template_marker_centers
     *   }
     * })
     * 
     */
    delete<T extends template_marker_centersDeleteArgs>(args: SelectSubset<T, template_marker_centersDeleteArgs<ExtArgs>>): Prisma__template_marker_centersClient<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template_marker_centers.
     * @param {template_marker_centersUpdateArgs} args - Arguments to update one Template_marker_centers.
     * @example
     * // Update one Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends template_marker_centersUpdateArgs>(args: SelectSubset<T, template_marker_centersUpdateArgs<ExtArgs>>): Prisma__template_marker_centersClient<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Template_marker_centers.
     * @param {template_marker_centersDeleteManyArgs} args - Arguments to filter Template_marker_centers to delete.
     * @example
     * // Delete a few Template_marker_centers
     * const { count } = await prisma.template_marker_centers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends template_marker_centersDeleteManyArgs>(args?: SelectSubset<T, template_marker_centersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Template_marker_centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_marker_centersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends template_marker_centersUpdateManyArgs>(args: SelectSubset<T, template_marker_centersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Template_marker_centers and returns the data updated in the database.
     * @param {template_marker_centersUpdateManyAndReturnArgs} args - Arguments to update many Template_marker_centers.
     * @example
     * // Update many Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Template_marker_centers and only return the `template_region_id`
     * const template_marker_centersWithTemplate_region_idOnly = await prisma.template_marker_centers.updateManyAndReturn({
     *   select: { template_region_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends template_marker_centersUpdateManyAndReturnArgs>(args: SelectSubset<T, template_marker_centersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template_marker_centers.
     * @param {template_marker_centersUpsertArgs} args - Arguments to update or create a Template_marker_centers.
     * @example
     * // Update or create a Template_marker_centers
     * const template_marker_centers = await prisma.template_marker_centers.upsert({
     *   create: {
     *     // ... data to create a Template_marker_centers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template_marker_centers we want to update
     *   }
     * })
     */
    upsert<T extends template_marker_centersUpsertArgs>(args: SelectSubset<T, template_marker_centersUpsertArgs<ExtArgs>>): Prisma__template_marker_centersClient<$Result.GetResult<Prisma.$template_marker_centersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Template_marker_centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_marker_centersCountArgs} args - Arguments to filter Template_marker_centers to count.
     * @example
     * // Count the number of Template_marker_centers
     * const count = await prisma.template_marker_centers.count({
     *   where: {
     *     // ... the filter for the Template_marker_centers we want to count
     *   }
     * })
    **/
    count<T extends template_marker_centersCountArgs>(
      args?: Subset<T, template_marker_centersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Template_marker_centersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template_marker_centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Template_marker_centersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Template_marker_centersAggregateArgs>(args: Subset<T, Template_marker_centersAggregateArgs>): Prisma.PrismaPromise<GetTemplate_marker_centersAggregateType<T>>

    /**
     * Group by Template_marker_centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_marker_centersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends template_marker_centersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: template_marker_centersGroupByArgs['orderBy'] }
        : { orderBy?: template_marker_centersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, template_marker_centersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplate_marker_centersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the template_marker_centers model
   */
  readonly fields: template_marker_centersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for template_marker_centers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__template_marker_centersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template_region<T extends template_regionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, template_regionsDefaultArgs<ExtArgs>>): Prisma__template_regionsClient<$Result.GetResult<Prisma.$template_regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the template_marker_centers model
   */
  interface template_marker_centersFieldRefs {
    readonly template_region_id: FieldRef<"template_marker_centers", 'Int'>
    readonly x: FieldRef<"template_marker_centers", 'Int'>
    readonly y: FieldRef<"template_marker_centers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * template_marker_centers findUnique
   */
  export type template_marker_centersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    /**
     * Filter, which template_marker_centers to fetch.
     */
    where: template_marker_centersWhereUniqueInput
  }

  /**
   * template_marker_centers findUniqueOrThrow
   */
  export type template_marker_centersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    /**
     * Filter, which template_marker_centers to fetch.
     */
    where: template_marker_centersWhereUniqueInput
  }

  /**
   * template_marker_centers findFirst
   */
  export type template_marker_centersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    /**
     * Filter, which template_marker_centers to fetch.
     */
    where?: template_marker_centersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_marker_centers to fetch.
     */
    orderBy?: template_marker_centersOrderByWithRelationInput | template_marker_centersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for template_marker_centers.
     */
    cursor?: template_marker_centersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_marker_centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_marker_centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of template_marker_centers.
     */
    distinct?: Template_marker_centersScalarFieldEnum | Template_marker_centersScalarFieldEnum[]
  }

  /**
   * template_marker_centers findFirstOrThrow
   */
  export type template_marker_centersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    /**
     * Filter, which template_marker_centers to fetch.
     */
    where?: template_marker_centersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_marker_centers to fetch.
     */
    orderBy?: template_marker_centersOrderByWithRelationInput | template_marker_centersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for template_marker_centers.
     */
    cursor?: template_marker_centersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_marker_centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_marker_centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of template_marker_centers.
     */
    distinct?: Template_marker_centersScalarFieldEnum | Template_marker_centersScalarFieldEnum[]
  }

  /**
   * template_marker_centers findMany
   */
  export type template_marker_centersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    /**
     * Filter, which template_marker_centers to fetch.
     */
    where?: template_marker_centersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_marker_centers to fetch.
     */
    orderBy?: template_marker_centersOrderByWithRelationInput | template_marker_centersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing template_marker_centers.
     */
    cursor?: template_marker_centersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_marker_centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_marker_centers.
     */
    skip?: number
    distinct?: Template_marker_centersScalarFieldEnum | Template_marker_centersScalarFieldEnum[]
  }

  /**
   * template_marker_centers create
   */
  export type template_marker_centersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    /**
     * The data needed to create a template_marker_centers.
     */
    data: XOR<template_marker_centersCreateInput, template_marker_centersUncheckedCreateInput>
  }

  /**
   * template_marker_centers createMany
   */
  export type template_marker_centersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many template_marker_centers.
     */
    data: template_marker_centersCreateManyInput | template_marker_centersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * template_marker_centers createManyAndReturn
   */
  export type template_marker_centersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * The data used to create many template_marker_centers.
     */
    data: template_marker_centersCreateManyInput | template_marker_centersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * template_marker_centers update
   */
  export type template_marker_centersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    /**
     * The data needed to update a template_marker_centers.
     */
    data: XOR<template_marker_centersUpdateInput, template_marker_centersUncheckedUpdateInput>
    /**
     * Choose, which template_marker_centers to update.
     */
    where: template_marker_centersWhereUniqueInput
  }

  /**
   * template_marker_centers updateMany
   */
  export type template_marker_centersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update template_marker_centers.
     */
    data: XOR<template_marker_centersUpdateManyMutationInput, template_marker_centersUncheckedUpdateManyInput>
    /**
     * Filter which template_marker_centers to update
     */
    where?: template_marker_centersWhereInput
    /**
     * Limit how many template_marker_centers to update.
     */
    limit?: number
  }

  /**
   * template_marker_centers updateManyAndReturn
   */
  export type template_marker_centersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * The data used to update template_marker_centers.
     */
    data: XOR<template_marker_centersUpdateManyMutationInput, template_marker_centersUncheckedUpdateManyInput>
    /**
     * Filter which template_marker_centers to update
     */
    where?: template_marker_centersWhereInput
    /**
     * Limit how many template_marker_centers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * template_marker_centers upsert
   */
  export type template_marker_centersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    /**
     * The filter to search for the template_marker_centers to update in case it exists.
     */
    where: template_marker_centersWhereUniqueInput
    /**
     * In case the template_marker_centers found by the `where` argument doesn't exist, create a new template_marker_centers with this data.
     */
    create: XOR<template_marker_centersCreateInput, template_marker_centersUncheckedCreateInput>
    /**
     * In case the template_marker_centers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<template_marker_centersUpdateInput, template_marker_centersUncheckedUpdateInput>
  }

  /**
   * template_marker_centers delete
   */
  export type template_marker_centersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
    /**
     * Filter which template_marker_centers to delete.
     */
    where: template_marker_centersWhereUniqueInput
  }

  /**
   * template_marker_centers deleteMany
   */
  export type template_marker_centersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which template_marker_centers to delete
     */
    where?: template_marker_centersWhereInput
    /**
     * Limit how many template_marker_centers to delete.
     */
    limit?: number
  }

  /**
   * template_marker_centers without action
   */
  export type template_marker_centersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the template_marker_centers
     */
    select?: template_marker_centersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the template_marker_centers
     */
    omit?: template_marker_centersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: template_marker_centersInclude<ExtArgs> | null
  }


  /**
   * Model answers
   */

  export type AggregateAnswers = {
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  export type AnswersAvgAggregateOutputType = {
    year: number | null
    term: number | null
    total_no: number | null
  }

  export type AnswersSumAggregateOutputType = {
    year: number | null
    term: number | null
    total_no: number | null
  }

  export type AnswersMinAggregateOutputType = {
    id: string | null
    name: string | null
    owner_id: string | null
    subject: string | null
    year: number | null
    term: number | null
    total_no: number | null
    shared: boolean | null
    disable: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnswersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    owner_id: string | null
    subject: string | null
    year: number | null
    term: number | null
    total_no: number | null
    shared: boolean | null
    disable: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnswersCountAggregateOutputType = {
    id: number
    name: number
    owner_id: number
    subject: number
    year: number
    term: number
    total_no: number
    shared: number
    disable: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AnswersAvgAggregateInputType = {
    year?: true
    term?: true
    total_no?: true
  }

  export type AnswersSumAggregateInputType = {
    year?: true
    term?: true
    total_no?: true
  }

  export type AnswersMinAggregateInputType = {
    id?: true
    name?: true
    owner_id?: true
    subject?: true
    year?: true
    term?: true
    total_no?: true
    shared?: true
    disable?: true
    created_at?: true
    updated_at?: true
  }

  export type AnswersMaxAggregateInputType = {
    id?: true
    name?: true
    owner_id?: true
    subject?: true
    year?: true
    term?: true
    total_no?: true
    shared?: true
    disable?: true
    created_at?: true
    updated_at?: true
  }

  export type AnswersCountAggregateInputType = {
    id?: true
    name?: true
    owner_id?: true
    subject?: true
    year?: true
    term?: true
    total_no?: true
    shared?: true
    disable?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AnswersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to aggregate.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned answers
    **/
    _count?: true | AnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswersMaxAggregateInputType
  }

  export type GetAnswersAggregateType<T extends AnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswers[P]>
      : GetScalarType<T[P], AggregateAnswers[P]>
  }




  export type answersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answersWhereInput
    orderBy?: answersOrderByWithAggregationInput | answersOrderByWithAggregationInput[]
    by: AnswersScalarFieldEnum[] | AnswersScalarFieldEnum
    having?: answersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswersCountAggregateInputType | true
    _avg?: AnswersAvgAggregateInputType
    _sum?: AnswersSumAggregateInputType
    _min?: AnswersMinAggregateInputType
    _max?: AnswersMaxAggregateInputType
  }

  export type AnswersGroupByOutputType = {
    id: string
    name: string
    owner_id: string
    subject: string
    year: number
    term: number
    total_no: number
    shared: boolean
    disable: boolean
    created_at: Date
    updated_at: Date
    _count: AnswersCountAggregateOutputType | null
    _avg: AnswersAvgAggregateOutputType | null
    _sum: AnswersSumAggregateOutputType | null
    _min: AnswersMinAggregateOutputType | null
    _max: AnswersMaxAggregateOutputType | null
  }

  type GetAnswersGroupByPayload<T extends answersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswersGroupByOutputType[P]>
            : GetScalarType<T[P], AnswersGroupByOutputType[P]>
        }
      >
    >


  export type answersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner_id?: boolean
    subject?: boolean
    year?: boolean
    term?: boolean
    total_no?: boolean
    shared?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | usersDefaultArgs<ExtArgs>
    answer_details?: boolean | answers$answer_detailsArgs<ExtArgs>
    groups?: boolean | answers$groupsArgs<ExtArgs>
    _count?: boolean | AnswersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner_id?: boolean
    subject?: boolean
    year?: boolean
    term?: boolean
    total_no?: boolean
    shared?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    owner_id?: boolean
    subject?: boolean
    year?: boolean
    term?: boolean
    total_no?: boolean
    shared?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answers"]>

  export type answersSelectScalar = {
    id?: boolean
    name?: boolean
    owner_id?: boolean
    subject?: boolean
    year?: boolean
    term?: boolean
    total_no?: boolean
    shared?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type answersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "owner_id" | "subject" | "year" | "term" | "total_no" | "shared" | "disable" | "created_at" | "updated_at", ExtArgs["result"]["answers"]>
  export type answersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | usersDefaultArgs<ExtArgs>
    answer_details?: boolean | answers$answer_detailsArgs<ExtArgs>
    groups?: boolean | answers$groupsArgs<ExtArgs>
    _count?: boolean | AnswersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type answersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type answersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $answersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "answers"
    objects: {
      owner: Prisma.$usersPayload<ExtArgs>
      answer_details: Prisma.$answer_detailsPayload<ExtArgs>[]
      groups: Prisma.$groupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      owner_id: string
      subject: string
      year: number
      term: number
      total_no: number
      shared: boolean
      disable: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["answers"]>
    composites: {}
  }

  type answersGetPayload<S extends boolean | null | undefined | answersDefaultArgs> = $Result.GetResult<Prisma.$answersPayload, S>

  type answersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<answersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswersCountAggregateInputType | true
    }

  export interface answersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['answers'], meta: { name: 'answers' } }
    /**
     * Find zero or one Answers that matches the filter.
     * @param {answersFindUniqueArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends answersFindUniqueArgs>(args: SelectSubset<T, answersFindUniqueArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {answersFindUniqueOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends answersFindUniqueOrThrowArgs>(args: SelectSubset<T, answersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends answersFindFirstArgs>(args?: SelectSubset<T, answersFindFirstArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindFirstOrThrowArgs} args - Arguments to find a Answers
     * @example
     * // Get one Answers
     * const answers = await prisma.answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends answersFindFirstOrThrowArgs>(args?: SelectSubset<T, answersFindFirstOrThrowArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answers.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answersWithIdOnly = await prisma.answers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends answersFindManyArgs>(args?: SelectSubset<T, answersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answers.
     * @param {answersCreateArgs} args - Arguments to create a Answers.
     * @example
     * // Create one Answers
     * const Answers = await prisma.answers.create({
     *   data: {
     *     // ... data to create a Answers
     *   }
     * })
     * 
     */
    create<T extends answersCreateArgs>(args: SelectSubset<T, answersCreateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {answersCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends answersCreateManyArgs>(args?: SelectSubset<T, answersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {answersCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answers = await prisma.answers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends answersCreateManyAndReturnArgs>(args?: SelectSubset<T, answersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answers.
     * @param {answersDeleteArgs} args - Arguments to delete one Answers.
     * @example
     * // Delete one Answers
     * const Answers = await prisma.answers.delete({
     *   where: {
     *     // ... filter to delete one Answers
     *   }
     * })
     * 
     */
    delete<T extends answersDeleteArgs>(args: SelectSubset<T, answersDeleteArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answers.
     * @param {answersUpdateArgs} args - Arguments to update one Answers.
     * @example
     * // Update one Answers
     * const answers = await prisma.answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends answersUpdateArgs>(args: SelectSubset<T, answersUpdateArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {answersDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends answersDeleteManyArgs>(args?: SelectSubset<T, answersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends answersUpdateManyArgs>(args: SelectSubset<T, answersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {answersUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answers = await prisma.answers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answersWithIdOnly = await prisma.answers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends answersUpdateManyAndReturnArgs>(args: SelectSubset<T, answersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answers.
     * @param {answersUpsertArgs} args - Arguments to update or create a Answers.
     * @example
     * // Update or create a Answers
     * const answers = await prisma.answers.upsert({
     *   create: {
     *     // ... data to create a Answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answers we want to update
     *   }
     * })
     */
    upsert<T extends answersUpsertArgs>(args: SelectSubset<T, answersUpsertArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answers.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends answersCountArgs>(
      args?: Subset<T, answersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswersAggregateArgs>(args: Subset<T, AnswersAggregateArgs>): Prisma.PrismaPromise<GetAnswersAggregateType<T>>

    /**
     * Group by Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends answersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: answersGroupByArgs['orderBy'] }
        : { orderBy?: answersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, answersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the answers model
   */
  readonly fields: answersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__answersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answer_details<T extends answers$answer_detailsArgs<ExtArgs> = {}>(args?: Subset<T, answers$answer_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends answers$groupsArgs<ExtArgs> = {}>(args?: Subset<T, answers$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the answers model
   */
  interface answersFieldRefs {
    readonly id: FieldRef<"answers", 'String'>
    readonly name: FieldRef<"answers", 'String'>
    readonly owner_id: FieldRef<"answers", 'String'>
    readonly subject: FieldRef<"answers", 'String'>
    readonly year: FieldRef<"answers", 'Int'>
    readonly term: FieldRef<"answers", 'Int'>
    readonly total_no: FieldRef<"answers", 'Int'>
    readonly shared: FieldRef<"answers", 'Boolean'>
    readonly disable: FieldRef<"answers", 'Boolean'>
    readonly created_at: FieldRef<"answers", 'DateTime'>
    readonly updated_at: FieldRef<"answers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * answers findUnique
   */
  export type answersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findUniqueOrThrow
   */
  export type answersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers findFirst
   */
  export type answersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findFirstOrThrow
   */
  export type answersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers findMany
   */
  export type answersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answersOrderByWithRelationInput | answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing answers.
     */
    cursor?: answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    distinct?: AnswersScalarFieldEnum | AnswersScalarFieldEnum[]
  }

  /**
   * answers create
   */
  export type answersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to create a answers.
     */
    data: XOR<answersCreateInput, answersUncheckedCreateInput>
  }

  /**
   * answers createMany
   */
  export type answersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many answers.
     */
    data: answersCreateManyInput | answersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * answers createManyAndReturn
   */
  export type answersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * The data used to create many answers.
     */
    data: answersCreateManyInput | answersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * answers update
   */
  export type answersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The data needed to update a answers.
     */
    data: XOR<answersUpdateInput, answersUncheckedUpdateInput>
    /**
     * Choose, which answers to update.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers updateMany
   */
  export type answersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update answers.
     */
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
  }

  /**
   * answers updateManyAndReturn
   */
  export type answersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * The data used to update answers.
     */
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * answers upsert
   */
  export type answersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * The filter to search for the answers to update in case it exists.
     */
    where: answersWhereUniqueInput
    /**
     * In case the answers found by the `where` argument doesn't exist, create a new answers with this data.
     */
    create: XOR<answersCreateInput, answersUncheckedCreateInput>
    /**
     * In case the answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<answersUpdateInput, answersUncheckedUpdateInput>
  }

  /**
   * answers delete
   */
  export type answersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
    /**
     * Filter which answers to delete.
     */
    where: answersWhereUniqueInput
  }

  /**
   * answers deleteMany
   */
  export type answersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to delete
     */
    where?: answersWhereInput
    /**
     * Limit how many answers to delete.
     */
    limit?: number
  }

  /**
   * answers.answer_details
   */
  export type answers$answer_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    where?: answer_detailsWhereInput
    orderBy?: answer_detailsOrderByWithRelationInput | answer_detailsOrderByWithRelationInput[]
    cursor?: answer_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Answer_detailsScalarFieldEnum | Answer_detailsScalarFieldEnum[]
  }

  /**
   * answers.groups
   */
  export type answers$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    cursor?: groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * answers without action
   */
  export type answersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answers
     */
    select?: answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answers
     */
    omit?: answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answersInclude<ExtArgs> | null
  }


  /**
   * Model answer_details
   */

  export type AggregateAnswer_details = {
    _count: Answer_detailsCountAggregateOutputType | null
    _avg: Answer_detailsAvgAggregateOutputType | null
    _sum: Answer_detailsSumAggregateOutputType | null
    _min: Answer_detailsMinAggregateOutputType | null
    _max: Answer_detailsMaxAggregateOutputType | null
  }

  export type Answer_detailsAvgAggregateOutputType = {
    id: number | null
    no: number | null
    point: number | null
  }

  export type Answer_detailsSumAggregateOutputType = {
    id: number | null
    no: number | null
    point: number | null
  }

  export type Answer_detailsMinAggregateOutputType = {
    id: number | null
    answer_id: string | null
    no: number | null
    point: number | null
    correct_all: boolean | null
  }

  export type Answer_detailsMaxAggregateOutputType = {
    id: number | null
    answer_id: string | null
    no: number | null
    point: number | null
    correct_all: boolean | null
  }

  export type Answer_detailsCountAggregateOutputType = {
    id: number
    answer_id: number
    no: number
    point: number
    correct_all: number
    choice_correct: number
    _all: number
  }


  export type Answer_detailsAvgAggregateInputType = {
    id?: true
    no?: true
    point?: true
  }

  export type Answer_detailsSumAggregateInputType = {
    id?: true
    no?: true
    point?: true
  }

  export type Answer_detailsMinAggregateInputType = {
    id?: true
    answer_id?: true
    no?: true
    point?: true
    correct_all?: true
  }

  export type Answer_detailsMaxAggregateInputType = {
    id?: true
    answer_id?: true
    no?: true
    point?: true
    correct_all?: true
  }

  export type Answer_detailsCountAggregateInputType = {
    id?: true
    answer_id?: true
    no?: true
    point?: true
    correct_all?: true
    choice_correct?: true
    _all?: true
  }

  export type Answer_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answer_details to aggregate.
     */
    where?: answer_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answer_details to fetch.
     */
    orderBy?: answer_detailsOrderByWithRelationInput | answer_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: answer_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answer_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answer_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned answer_details
    **/
    _count?: true | Answer_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Answer_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Answer_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Answer_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Answer_detailsMaxAggregateInputType
  }

  export type GetAnswer_detailsAggregateType<T extends Answer_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer_details[P]>
      : GetScalarType<T[P], AggregateAnswer_details[P]>
  }




  export type answer_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answer_detailsWhereInput
    orderBy?: answer_detailsOrderByWithAggregationInput | answer_detailsOrderByWithAggregationInput[]
    by: Answer_detailsScalarFieldEnum[] | Answer_detailsScalarFieldEnum
    having?: answer_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Answer_detailsCountAggregateInputType | true
    _avg?: Answer_detailsAvgAggregateInputType
    _sum?: Answer_detailsSumAggregateInputType
    _min?: Answer_detailsMinAggregateInputType
    _max?: Answer_detailsMaxAggregateInputType
  }

  export type Answer_detailsGroupByOutputType = {
    id: number
    answer_id: string
    no: number
    point: number
    correct_all: boolean
    choice_correct: JsonValue | null
    _count: Answer_detailsCountAggregateOutputType | null
    _avg: Answer_detailsAvgAggregateOutputType | null
    _sum: Answer_detailsSumAggregateOutputType | null
    _min: Answer_detailsMinAggregateOutputType | null
    _max: Answer_detailsMaxAggregateOutputType | null
  }

  type GetAnswer_detailsGroupByPayload<T extends answer_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Answer_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Answer_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Answer_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Answer_detailsGroupByOutputType[P]>
        }
      >
    >


  export type answer_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer_id?: boolean
    no?: boolean
    point?: boolean
    correct_all?: boolean
    choice_correct?: boolean
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer_details"]>

  export type answer_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer_id?: boolean
    no?: boolean
    point?: boolean
    correct_all?: boolean
    choice_correct?: boolean
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer_details"]>

  export type answer_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    answer_id?: boolean
    no?: boolean
    point?: boolean
    correct_all?: boolean
    choice_correct?: boolean
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer_details"]>

  export type answer_detailsSelectScalar = {
    id?: boolean
    answer_id?: boolean
    no?: boolean
    point?: boolean
    correct_all?: boolean
    choice_correct?: boolean
  }

  export type answer_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "answer_id" | "no" | "point" | "correct_all" | "choice_correct", ExtArgs["result"]["answer_details"]>
  export type answer_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }
  export type answer_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }
  export type answer_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }

  export type $answer_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "answer_details"
    objects: {
      answer: Prisma.$answersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      answer_id: string
      no: number
      point: number
      correct_all: boolean
      choice_correct: Prisma.JsonValue | null
    }, ExtArgs["result"]["answer_details"]>
    composites: {}
  }

  type answer_detailsGetPayload<S extends boolean | null | undefined | answer_detailsDefaultArgs> = $Result.GetResult<Prisma.$answer_detailsPayload, S>

  type answer_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<answer_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Answer_detailsCountAggregateInputType | true
    }

  export interface answer_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['answer_details'], meta: { name: 'answer_details' } }
    /**
     * Find zero or one Answer_details that matches the filter.
     * @param {answer_detailsFindUniqueArgs} args - Arguments to find a Answer_details
     * @example
     * // Get one Answer_details
     * const answer_details = await prisma.answer_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends answer_detailsFindUniqueArgs>(args: SelectSubset<T, answer_detailsFindUniqueArgs<ExtArgs>>): Prisma__answer_detailsClient<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {answer_detailsFindUniqueOrThrowArgs} args - Arguments to find a Answer_details
     * @example
     * // Get one Answer_details
     * const answer_details = await prisma.answer_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends answer_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, answer_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__answer_detailsClient<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answer_detailsFindFirstArgs} args - Arguments to find a Answer_details
     * @example
     * // Get one Answer_details
     * const answer_details = await prisma.answer_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends answer_detailsFindFirstArgs>(args?: SelectSubset<T, answer_detailsFindFirstArgs<ExtArgs>>): Prisma__answer_detailsClient<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answer_detailsFindFirstOrThrowArgs} args - Arguments to find a Answer_details
     * @example
     * // Get one Answer_details
     * const answer_details = await prisma.answer_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends answer_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, answer_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__answer_detailsClient<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answer_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answer_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answer_details
     * const answer_details = await prisma.answer_details.findMany()
     * 
     * // Get first 10 Answer_details
     * const answer_details = await prisma.answer_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answer_detailsWithIdOnly = await prisma.answer_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends answer_detailsFindManyArgs>(args?: SelectSubset<T, answer_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer_details.
     * @param {answer_detailsCreateArgs} args - Arguments to create a Answer_details.
     * @example
     * // Create one Answer_details
     * const Answer_details = await prisma.answer_details.create({
     *   data: {
     *     // ... data to create a Answer_details
     *   }
     * })
     * 
     */
    create<T extends answer_detailsCreateArgs>(args: SelectSubset<T, answer_detailsCreateArgs<ExtArgs>>): Prisma__answer_detailsClient<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answer_details.
     * @param {answer_detailsCreateManyArgs} args - Arguments to create many Answer_details.
     * @example
     * // Create many Answer_details
     * const answer_details = await prisma.answer_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends answer_detailsCreateManyArgs>(args?: SelectSubset<T, answer_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answer_details and returns the data saved in the database.
     * @param {answer_detailsCreateManyAndReturnArgs} args - Arguments to create many Answer_details.
     * @example
     * // Create many Answer_details
     * const answer_details = await prisma.answer_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answer_details and only return the `id`
     * const answer_detailsWithIdOnly = await prisma.answer_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends answer_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, answer_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer_details.
     * @param {answer_detailsDeleteArgs} args - Arguments to delete one Answer_details.
     * @example
     * // Delete one Answer_details
     * const Answer_details = await prisma.answer_details.delete({
     *   where: {
     *     // ... filter to delete one Answer_details
     *   }
     * })
     * 
     */
    delete<T extends answer_detailsDeleteArgs>(args: SelectSubset<T, answer_detailsDeleteArgs<ExtArgs>>): Prisma__answer_detailsClient<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer_details.
     * @param {answer_detailsUpdateArgs} args - Arguments to update one Answer_details.
     * @example
     * // Update one Answer_details
     * const answer_details = await prisma.answer_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends answer_detailsUpdateArgs>(args: SelectSubset<T, answer_detailsUpdateArgs<ExtArgs>>): Prisma__answer_detailsClient<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answer_details.
     * @param {answer_detailsDeleteManyArgs} args - Arguments to filter Answer_details to delete.
     * @example
     * // Delete a few Answer_details
     * const { count } = await prisma.answer_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends answer_detailsDeleteManyArgs>(args?: SelectSubset<T, answer_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answer_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answer_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answer_details
     * const answer_details = await prisma.answer_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends answer_detailsUpdateManyArgs>(args: SelectSubset<T, answer_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answer_details and returns the data updated in the database.
     * @param {answer_detailsUpdateManyAndReturnArgs} args - Arguments to update many Answer_details.
     * @example
     * // Update many Answer_details
     * const answer_details = await prisma.answer_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answer_details and only return the `id`
     * const answer_detailsWithIdOnly = await prisma.answer_details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends answer_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, answer_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer_details.
     * @param {answer_detailsUpsertArgs} args - Arguments to update or create a Answer_details.
     * @example
     * // Update or create a Answer_details
     * const answer_details = await prisma.answer_details.upsert({
     *   create: {
     *     // ... data to create a Answer_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer_details we want to update
     *   }
     * })
     */
    upsert<T extends answer_detailsUpsertArgs>(args: SelectSubset<T, answer_detailsUpsertArgs<ExtArgs>>): Prisma__answer_detailsClient<$Result.GetResult<Prisma.$answer_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answer_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answer_detailsCountArgs} args - Arguments to filter Answer_details to count.
     * @example
     * // Count the number of Answer_details
     * const count = await prisma.answer_details.count({
     *   where: {
     *     // ... the filter for the Answer_details we want to count
     *   }
     * })
    **/
    count<T extends answer_detailsCountArgs>(
      args?: Subset<T, answer_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Answer_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Answer_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Answer_detailsAggregateArgs>(args: Subset<T, Answer_detailsAggregateArgs>): Prisma.PrismaPromise<GetAnswer_detailsAggregateType<T>>

    /**
     * Group by Answer_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answer_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends answer_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: answer_detailsGroupByArgs['orderBy'] }
        : { orderBy?: answer_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, answer_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswer_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the answer_details model
   */
  readonly fields: answer_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for answer_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__answer_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answer<T extends answersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, answersDefaultArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the answer_details model
   */
  interface answer_detailsFieldRefs {
    readonly id: FieldRef<"answer_details", 'Int'>
    readonly answer_id: FieldRef<"answer_details", 'String'>
    readonly no: FieldRef<"answer_details", 'Int'>
    readonly point: FieldRef<"answer_details", 'Int'>
    readonly correct_all: FieldRef<"answer_details", 'Boolean'>
    readonly choice_correct: FieldRef<"answer_details", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * answer_details findUnique
   */
  export type answer_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    /**
     * Filter, which answer_details to fetch.
     */
    where: answer_detailsWhereUniqueInput
  }

  /**
   * answer_details findUniqueOrThrow
   */
  export type answer_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    /**
     * Filter, which answer_details to fetch.
     */
    where: answer_detailsWhereUniqueInput
  }

  /**
   * answer_details findFirst
   */
  export type answer_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    /**
     * Filter, which answer_details to fetch.
     */
    where?: answer_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answer_details to fetch.
     */
    orderBy?: answer_detailsOrderByWithRelationInput | answer_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answer_details.
     */
    cursor?: answer_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answer_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answer_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answer_details.
     */
    distinct?: Answer_detailsScalarFieldEnum | Answer_detailsScalarFieldEnum[]
  }

  /**
   * answer_details findFirstOrThrow
   */
  export type answer_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    /**
     * Filter, which answer_details to fetch.
     */
    where?: answer_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answer_details to fetch.
     */
    orderBy?: answer_detailsOrderByWithRelationInput | answer_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answer_details.
     */
    cursor?: answer_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answer_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answer_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answer_details.
     */
    distinct?: Answer_detailsScalarFieldEnum | Answer_detailsScalarFieldEnum[]
  }

  /**
   * answer_details findMany
   */
  export type answer_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    /**
     * Filter, which answer_details to fetch.
     */
    where?: answer_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answer_details to fetch.
     */
    orderBy?: answer_detailsOrderByWithRelationInput | answer_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing answer_details.
     */
    cursor?: answer_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answer_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answer_details.
     */
    skip?: number
    distinct?: Answer_detailsScalarFieldEnum | Answer_detailsScalarFieldEnum[]
  }

  /**
   * answer_details create
   */
  export type answer_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a answer_details.
     */
    data: XOR<answer_detailsCreateInput, answer_detailsUncheckedCreateInput>
  }

  /**
   * answer_details createMany
   */
  export type answer_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many answer_details.
     */
    data: answer_detailsCreateManyInput | answer_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * answer_details createManyAndReturn
   */
  export type answer_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many answer_details.
     */
    data: answer_detailsCreateManyInput | answer_detailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * answer_details update
   */
  export type answer_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a answer_details.
     */
    data: XOR<answer_detailsUpdateInput, answer_detailsUncheckedUpdateInput>
    /**
     * Choose, which answer_details to update.
     */
    where: answer_detailsWhereUniqueInput
  }

  /**
   * answer_details updateMany
   */
  export type answer_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update answer_details.
     */
    data: XOR<answer_detailsUpdateManyMutationInput, answer_detailsUncheckedUpdateManyInput>
    /**
     * Filter which answer_details to update
     */
    where?: answer_detailsWhereInput
    /**
     * Limit how many answer_details to update.
     */
    limit?: number
  }

  /**
   * answer_details updateManyAndReturn
   */
  export type answer_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * The data used to update answer_details.
     */
    data: XOR<answer_detailsUpdateManyMutationInput, answer_detailsUncheckedUpdateManyInput>
    /**
     * Filter which answer_details to update
     */
    where?: answer_detailsWhereInput
    /**
     * Limit how many answer_details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * answer_details upsert
   */
  export type answer_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the answer_details to update in case it exists.
     */
    where: answer_detailsWhereUniqueInput
    /**
     * In case the answer_details found by the `where` argument doesn't exist, create a new answer_details with this data.
     */
    create: XOR<answer_detailsCreateInput, answer_detailsUncheckedCreateInput>
    /**
     * In case the answer_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<answer_detailsUpdateInput, answer_detailsUncheckedUpdateInput>
  }

  /**
   * answer_details delete
   */
  export type answer_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
    /**
     * Filter which answer_details to delete.
     */
    where: answer_detailsWhereUniqueInput
  }

  /**
   * answer_details deleteMany
   */
  export type answer_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answer_details to delete
     */
    where?: answer_detailsWhereInput
    /**
     * Limit how many answer_details to delete.
     */
    limit?: number
  }

  /**
   * answer_details without action
   */
  export type answer_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer_details
     */
    select?: answer_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer_details
     */
    omit?: answer_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answer_detailsInclude<ExtArgs> | null
  }


  /**
   * Model groups
   */

  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsAvgAggregateOutputType = {
    year: number | null
    term: number | null
  }

  export type GroupsSumAggregateOutputType = {
    year: number | null
    term: number | null
  }

  export type GroupsMinAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    year: number | null
    term: number | null
    owner_id: string | null
    template_id: string | null
    answer_id: string | null
    disable: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GroupsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    year: number | null
    term: number | null
    owner_id: string | null
    template_id: string | null
    answer_id: string | null
    disable: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type GroupsCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    year: number
    term: number
    owner_id: number
    template_id: number
    answer_id: number
    disable: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type GroupsAvgAggregateInputType = {
    year?: true
    term?: true
  }

  export type GroupsSumAggregateInputType = {
    year?: true
    term?: true
  }

  export type GroupsMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    year?: true
    term?: true
    owner_id?: true
    template_id?: true
    answer_id?: true
    disable?: true
    created_at?: true
    updated_at?: true
  }

  export type GroupsMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    year?: true
    term?: true
    owner_id?: true
    template_id?: true
    answer_id?: true
    disable?: true
    created_at?: true
    updated_at?: true
  }

  export type GroupsCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    year?: true
    term?: true
    owner_id?: true
    template_id?: true
    answer_id?: true
    disable?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type GroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to aggregate.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }




  export type groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithAggregationInput | groupsOrderByWithAggregationInput[]
    by: GroupsScalarFieldEnum[] | GroupsScalarFieldEnum
    having?: groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _avg?: GroupsAvgAggregateInputType
    _sum?: GroupsSumAggregateInputType
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }

  export type GroupsGroupByOutputType = {
    id: string
    name: string
    subject: string
    year: number
    term: number
    owner_id: string
    template_id: string
    answer_id: string
    disable: boolean
    created_at: Date
    updated_at: Date
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      >
    >


  export type groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    year?: boolean
    term?: boolean
    owner_id?: boolean
    template_id?: boolean
    answer_id?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | usersDefaultArgs<ExtArgs>
    template?: boolean | templatesDefaultArgs<ExtArgs>
    answer?: boolean | answersDefaultArgs<ExtArgs>
    sheets?: boolean | groups$sheetsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    year?: boolean
    term?: boolean
    owner_id?: boolean
    template_id?: boolean
    answer_id?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | usersDefaultArgs<ExtArgs>
    template?: boolean | templatesDefaultArgs<ExtArgs>
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    year?: boolean
    term?: boolean
    owner_id?: boolean
    template_id?: boolean
    answer_id?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | usersDefaultArgs<ExtArgs>
    template?: boolean | templatesDefaultArgs<ExtArgs>
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>

  export type groupsSelectScalar = {
    id?: boolean
    name?: boolean
    subject?: boolean
    year?: boolean
    term?: boolean
    owner_id?: boolean
    template_id?: boolean
    answer_id?: boolean
    disable?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type groupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject" | "year" | "term" | "owner_id" | "template_id" | "answer_id" | "disable" | "created_at" | "updated_at", ExtArgs["result"]["groups"]>
  export type groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | usersDefaultArgs<ExtArgs>
    template?: boolean | templatesDefaultArgs<ExtArgs>
    answer?: boolean | answersDefaultArgs<ExtArgs>
    sheets?: boolean | groups$sheetsArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type groupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | usersDefaultArgs<ExtArgs>
    template?: boolean | templatesDefaultArgs<ExtArgs>
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }
  export type groupsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | usersDefaultArgs<ExtArgs>
    template?: boolean | templatesDefaultArgs<ExtArgs>
    answer?: boolean | answersDefaultArgs<ExtArgs>
  }

  export type $groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groups"
    objects: {
      owner: Prisma.$usersPayload<ExtArgs>
      template: Prisma.$templatesPayload<ExtArgs>
      answer: Prisma.$answersPayload<ExtArgs>
      sheets: Prisma.$sheetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subject: string
      year: number
      term: number
      owner_id: string
      template_id: string
      answer_id: string
      disable: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["groups"]>
    composites: {}
  }

  type groupsGetPayload<S extends boolean | null | undefined | groupsDefaultArgs> = $Result.GetResult<Prisma.$groupsPayload, S>

  type groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupsCountAggregateInputType | true
    }

  export interface groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groups'], meta: { name: 'groups' } }
    /**
     * Find zero or one Groups that matches the filter.
     * @param {groupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends groupsFindUniqueArgs>(args: SelectSubset<T, groupsFindUniqueArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {groupsFindUniqueOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends groupsFindFirstArgs>(args?: SelectSubset<T, groupsFindFirstArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupsWithIdOnly = await prisma.groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends groupsFindManyArgs>(args?: SelectSubset<T, groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groups.
     * @param {groupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
     */
    create<T extends groupsCreateArgs>(args: SelectSubset<T, groupsCreateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {groupsCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends groupsCreateManyArgs>(args?: SelectSubset<T, groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {groupsCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends groupsCreateManyAndReturnArgs>(args?: SelectSubset<T, groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Groups.
     * @param {groupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
     */
    delete<T extends groupsDeleteArgs>(args: SelectSubset<T, groupsDeleteArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groups.
     * @param {groupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends groupsUpdateArgs>(args: SelectSubset<T, groupsUpdateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {groupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends groupsDeleteManyArgs>(args?: SelectSubset<T, groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends groupsUpdateManyArgs>(args: SelectSubset<T, groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {groupsUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupsWithIdOnly = await prisma.groups.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends groupsUpdateManyAndReturnArgs>(args: SelectSubset<T, groupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Groups.
     * @param {groupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
     */
    upsert<T extends groupsUpsertArgs>(args: SelectSubset<T, groupsUpsertArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends groupsCountArgs>(
      args?: Subset<T, groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): Prisma.PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupsGroupByArgs['orderBy'] }
        : { orderBy?: groupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groups model
   */
  readonly fields: groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends templatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, templatesDefaultArgs<ExtArgs>>): Prisma__templatesClient<$Result.GetResult<Prisma.$templatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answer<T extends answersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, answersDefaultArgs<ExtArgs>>): Prisma__answersClient<$Result.GetResult<Prisma.$answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sheets<T extends groups$sheetsArgs<ExtArgs> = {}>(args?: Subset<T, groups$sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the groups model
   */
  interface groupsFieldRefs {
    readonly id: FieldRef<"groups", 'String'>
    readonly name: FieldRef<"groups", 'String'>
    readonly subject: FieldRef<"groups", 'String'>
    readonly year: FieldRef<"groups", 'Int'>
    readonly term: FieldRef<"groups", 'Int'>
    readonly owner_id: FieldRef<"groups", 'String'>
    readonly template_id: FieldRef<"groups", 'String'>
    readonly answer_id: FieldRef<"groups", 'String'>
    readonly disable: FieldRef<"groups", 'Boolean'>
    readonly created_at: FieldRef<"groups", 'DateTime'>
    readonly updated_at: FieldRef<"groups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * groups findUnique
   */
  export type groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findUniqueOrThrow
   */
  export type groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findFirst
   */
  export type groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findFirstOrThrow
   */
  export type groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findMany
   */
  export type groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups create
   */
  export type groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a groups.
     */
    data: XOR<groupsCreateInput, groupsUncheckedCreateInput>
  }

  /**
   * groups createMany
   */
  export type groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * groups createManyAndReturn
   */
  export type groupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups update
   */
  export type groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a groups.
     */
    data: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
    /**
     * Choose, which groups to update.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups updateMany
   */
  export type groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
  }

  /**
   * groups updateManyAndReturn
   */
  export type groupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * groups upsert
   */
  export type groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the groups to update in case it exists.
     */
    where: groupsWhereUniqueInput
    /**
     * In case the groups found by the `where` argument doesn't exist, create a new groups with this data.
     */
    create: XOR<groupsCreateInput, groupsUncheckedCreateInput>
    /**
     * In case the groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
  }

  /**
   * groups delete
   */
  export type groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter which groups to delete.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups deleteMany
   */
  export type groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to delete.
     */
    limit?: number
  }

  /**
   * groups.sheets
   */
  export type groups$sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    where?: sheetsWhereInput
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    cursor?: sheetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * groups without action
   */
  export type groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
  }


  /**
   * Model sheet_statuses
   */

  export type AggregateSheet_statuses = {
    _count: Sheet_statusesCountAggregateOutputType | null
    _avg: Sheet_statusesAvgAggregateOutputType | null
    _sum: Sheet_statusesSumAggregateOutputType | null
    _min: Sheet_statusesMinAggregateOutputType | null
    _max: Sheet_statusesMaxAggregateOutputType | null
  }

  export type Sheet_statusesAvgAggregateOutputType = {
    id: number | null
  }

  export type Sheet_statusesSumAggregateOutputType = {
    id: number | null
  }

  export type Sheet_statusesMinAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
  }

  export type Sheet_statusesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
  }

  export type Sheet_statusesCountAggregateOutputType = {
    id: number
    name: number
    detail: number
    _all: number
  }


  export type Sheet_statusesAvgAggregateInputType = {
    id?: true
  }

  export type Sheet_statusesSumAggregateInputType = {
    id?: true
  }

  export type Sheet_statusesMinAggregateInputType = {
    id?: true
    name?: true
    detail?: true
  }

  export type Sheet_statusesMaxAggregateInputType = {
    id?: true
    name?: true
    detail?: true
  }

  export type Sheet_statusesCountAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    _all?: true
  }

  export type Sheet_statusesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sheet_statuses to aggregate.
     */
    where?: sheet_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheet_statuses to fetch.
     */
    orderBy?: sheet_statusesOrderByWithRelationInput | sheet_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sheet_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheet_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheet_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sheet_statuses
    **/
    _count?: true | Sheet_statusesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sheet_statusesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sheet_statusesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sheet_statusesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sheet_statusesMaxAggregateInputType
  }

  export type GetSheet_statusesAggregateType<T extends Sheet_statusesAggregateArgs> = {
        [P in keyof T & keyof AggregateSheet_statuses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheet_statuses[P]>
      : GetScalarType<T[P], AggregateSheet_statuses[P]>
  }




  export type sheet_statusesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sheet_statusesWhereInput
    orderBy?: sheet_statusesOrderByWithAggregationInput | sheet_statusesOrderByWithAggregationInput[]
    by: Sheet_statusesScalarFieldEnum[] | Sheet_statusesScalarFieldEnum
    having?: sheet_statusesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sheet_statusesCountAggregateInputType | true
    _avg?: Sheet_statusesAvgAggregateInputType
    _sum?: Sheet_statusesSumAggregateInputType
    _min?: Sheet_statusesMinAggregateInputType
    _max?: Sheet_statusesMaxAggregateInputType
  }

  export type Sheet_statusesGroupByOutputType = {
    id: number
    name: string
    detail: string
    _count: Sheet_statusesCountAggregateOutputType | null
    _avg: Sheet_statusesAvgAggregateOutputType | null
    _sum: Sheet_statusesSumAggregateOutputType | null
    _min: Sheet_statusesMinAggregateOutputType | null
    _max: Sheet_statusesMaxAggregateOutputType | null
  }

  type GetSheet_statusesGroupByPayload<T extends sheet_statusesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sheet_statusesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sheet_statusesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sheet_statusesGroupByOutputType[P]>
            : GetScalarType<T[P], Sheet_statusesGroupByOutputType[P]>
        }
      >
    >


  export type sheet_statusesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
    sheets?: boolean | sheet_statuses$sheetsArgs<ExtArgs>
    _count?: boolean | Sheet_statusesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheet_statuses"]>

  export type sheet_statusesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
  }, ExtArgs["result"]["sheet_statuses"]>

  export type sheet_statusesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
  }, ExtArgs["result"]["sheet_statuses"]>

  export type sheet_statusesSelectScalar = {
    id?: boolean
    name?: boolean
    detail?: boolean
  }

  export type sheet_statusesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "detail", ExtArgs["result"]["sheet_statuses"]>
  export type sheet_statusesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sheets?: boolean | sheet_statuses$sheetsArgs<ExtArgs>
    _count?: boolean | Sheet_statusesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sheet_statusesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type sheet_statusesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $sheet_statusesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sheet_statuses"
    objects: {
      sheets: Prisma.$sheetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      detail: string
    }, ExtArgs["result"]["sheet_statuses"]>
    composites: {}
  }

  type sheet_statusesGetPayload<S extends boolean | null | undefined | sheet_statusesDefaultArgs> = $Result.GetResult<Prisma.$sheet_statusesPayload, S>

  type sheet_statusesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sheet_statusesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sheet_statusesCountAggregateInputType | true
    }

  export interface sheet_statusesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sheet_statuses'], meta: { name: 'sheet_statuses' } }
    /**
     * Find zero or one Sheet_statuses that matches the filter.
     * @param {sheet_statusesFindUniqueArgs} args - Arguments to find a Sheet_statuses
     * @example
     * // Get one Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sheet_statusesFindUniqueArgs>(args: SelectSubset<T, sheet_statusesFindUniqueArgs<ExtArgs>>): Prisma__sheet_statusesClient<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sheet_statuses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sheet_statusesFindUniqueOrThrowArgs} args - Arguments to find a Sheet_statuses
     * @example
     * // Get one Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sheet_statusesFindUniqueOrThrowArgs>(args: SelectSubset<T, sheet_statusesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sheet_statusesClient<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheet_statusesFindFirstArgs} args - Arguments to find a Sheet_statuses
     * @example
     * // Get one Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sheet_statusesFindFirstArgs>(args?: SelectSubset<T, sheet_statusesFindFirstArgs<ExtArgs>>): Prisma__sheet_statusesClient<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheet_statuses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheet_statusesFindFirstOrThrowArgs} args - Arguments to find a Sheet_statuses
     * @example
     * // Get one Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sheet_statusesFindFirstOrThrowArgs>(args?: SelectSubset<T, sheet_statusesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sheet_statusesClient<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sheet_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheet_statusesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.findMany()
     * 
     * // Get first 10 Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheet_statusesWithIdOnly = await prisma.sheet_statuses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sheet_statusesFindManyArgs>(args?: SelectSubset<T, sheet_statusesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sheet_statuses.
     * @param {sheet_statusesCreateArgs} args - Arguments to create a Sheet_statuses.
     * @example
     * // Create one Sheet_statuses
     * const Sheet_statuses = await prisma.sheet_statuses.create({
     *   data: {
     *     // ... data to create a Sheet_statuses
     *   }
     * })
     * 
     */
    create<T extends sheet_statusesCreateArgs>(args: SelectSubset<T, sheet_statusesCreateArgs<ExtArgs>>): Prisma__sheet_statusesClient<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sheet_statuses.
     * @param {sheet_statusesCreateManyArgs} args - Arguments to create many Sheet_statuses.
     * @example
     * // Create many Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sheet_statusesCreateManyArgs>(args?: SelectSubset<T, sheet_statusesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sheet_statuses and returns the data saved in the database.
     * @param {sheet_statusesCreateManyAndReturnArgs} args - Arguments to create many Sheet_statuses.
     * @example
     * // Create many Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sheet_statuses and only return the `id`
     * const sheet_statusesWithIdOnly = await prisma.sheet_statuses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sheet_statusesCreateManyAndReturnArgs>(args?: SelectSubset<T, sheet_statusesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sheet_statuses.
     * @param {sheet_statusesDeleteArgs} args - Arguments to delete one Sheet_statuses.
     * @example
     * // Delete one Sheet_statuses
     * const Sheet_statuses = await prisma.sheet_statuses.delete({
     *   where: {
     *     // ... filter to delete one Sheet_statuses
     *   }
     * })
     * 
     */
    delete<T extends sheet_statusesDeleteArgs>(args: SelectSubset<T, sheet_statusesDeleteArgs<ExtArgs>>): Prisma__sheet_statusesClient<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sheet_statuses.
     * @param {sheet_statusesUpdateArgs} args - Arguments to update one Sheet_statuses.
     * @example
     * // Update one Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sheet_statusesUpdateArgs>(args: SelectSubset<T, sheet_statusesUpdateArgs<ExtArgs>>): Prisma__sheet_statusesClient<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sheet_statuses.
     * @param {sheet_statusesDeleteManyArgs} args - Arguments to filter Sheet_statuses to delete.
     * @example
     * // Delete a few Sheet_statuses
     * const { count } = await prisma.sheet_statuses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sheet_statusesDeleteManyArgs>(args?: SelectSubset<T, sheet_statusesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheet_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheet_statusesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sheet_statusesUpdateManyArgs>(args: SelectSubset<T, sheet_statusesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheet_statuses and returns the data updated in the database.
     * @param {sheet_statusesUpdateManyAndReturnArgs} args - Arguments to update many Sheet_statuses.
     * @example
     * // Update many Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sheet_statuses and only return the `id`
     * const sheet_statusesWithIdOnly = await prisma.sheet_statuses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sheet_statusesUpdateManyAndReturnArgs>(args: SelectSubset<T, sheet_statusesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sheet_statuses.
     * @param {sheet_statusesUpsertArgs} args - Arguments to update or create a Sheet_statuses.
     * @example
     * // Update or create a Sheet_statuses
     * const sheet_statuses = await prisma.sheet_statuses.upsert({
     *   create: {
     *     // ... data to create a Sheet_statuses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheet_statuses we want to update
     *   }
     * })
     */
    upsert<T extends sheet_statusesUpsertArgs>(args: SelectSubset<T, sheet_statusesUpsertArgs<ExtArgs>>): Prisma__sheet_statusesClient<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sheet_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheet_statusesCountArgs} args - Arguments to filter Sheet_statuses to count.
     * @example
     * // Count the number of Sheet_statuses
     * const count = await prisma.sheet_statuses.count({
     *   where: {
     *     // ... the filter for the Sheet_statuses we want to count
     *   }
     * })
    **/
    count<T extends sheet_statusesCountArgs>(
      args?: Subset<T, sheet_statusesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sheet_statusesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheet_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sheet_statusesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sheet_statusesAggregateArgs>(args: Subset<T, Sheet_statusesAggregateArgs>): Prisma.PrismaPromise<GetSheet_statusesAggregateType<T>>

    /**
     * Group by Sheet_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheet_statusesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sheet_statusesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sheet_statusesGroupByArgs['orderBy'] }
        : { orderBy?: sheet_statusesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sheet_statusesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheet_statusesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sheet_statuses model
   */
  readonly fields: sheet_statusesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sheet_statuses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sheet_statusesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sheets<T extends sheet_statuses$sheetsArgs<ExtArgs> = {}>(args?: Subset<T, sheet_statuses$sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sheet_statuses model
   */
  interface sheet_statusesFieldRefs {
    readonly id: FieldRef<"sheet_statuses", 'Int'>
    readonly name: FieldRef<"sheet_statuses", 'String'>
    readonly detail: FieldRef<"sheet_statuses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sheet_statuses findUnique
   */
  export type sheet_statusesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
    /**
     * Filter, which sheet_statuses to fetch.
     */
    where: sheet_statusesWhereUniqueInput
  }

  /**
   * sheet_statuses findUniqueOrThrow
   */
  export type sheet_statusesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
    /**
     * Filter, which sheet_statuses to fetch.
     */
    where: sheet_statusesWhereUniqueInput
  }

  /**
   * sheet_statuses findFirst
   */
  export type sheet_statusesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
    /**
     * Filter, which sheet_statuses to fetch.
     */
    where?: sheet_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheet_statuses to fetch.
     */
    orderBy?: sheet_statusesOrderByWithRelationInput | sheet_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sheet_statuses.
     */
    cursor?: sheet_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheet_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheet_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sheet_statuses.
     */
    distinct?: Sheet_statusesScalarFieldEnum | Sheet_statusesScalarFieldEnum[]
  }

  /**
   * sheet_statuses findFirstOrThrow
   */
  export type sheet_statusesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
    /**
     * Filter, which sheet_statuses to fetch.
     */
    where?: sheet_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheet_statuses to fetch.
     */
    orderBy?: sheet_statusesOrderByWithRelationInput | sheet_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sheet_statuses.
     */
    cursor?: sheet_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheet_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheet_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sheet_statuses.
     */
    distinct?: Sheet_statusesScalarFieldEnum | Sheet_statusesScalarFieldEnum[]
  }

  /**
   * sheet_statuses findMany
   */
  export type sheet_statusesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
    /**
     * Filter, which sheet_statuses to fetch.
     */
    where?: sheet_statusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheet_statuses to fetch.
     */
    orderBy?: sheet_statusesOrderByWithRelationInput | sheet_statusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sheet_statuses.
     */
    cursor?: sheet_statusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheet_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheet_statuses.
     */
    skip?: number
    distinct?: Sheet_statusesScalarFieldEnum | Sheet_statusesScalarFieldEnum[]
  }

  /**
   * sheet_statuses create
   */
  export type sheet_statusesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
    /**
     * The data needed to create a sheet_statuses.
     */
    data: XOR<sheet_statusesCreateInput, sheet_statusesUncheckedCreateInput>
  }

  /**
   * sheet_statuses createMany
   */
  export type sheet_statusesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sheet_statuses.
     */
    data: sheet_statusesCreateManyInput | sheet_statusesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sheet_statuses createManyAndReturn
   */
  export type sheet_statusesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * The data used to create many sheet_statuses.
     */
    data: sheet_statusesCreateManyInput | sheet_statusesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sheet_statuses update
   */
  export type sheet_statusesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
    /**
     * The data needed to update a sheet_statuses.
     */
    data: XOR<sheet_statusesUpdateInput, sheet_statusesUncheckedUpdateInput>
    /**
     * Choose, which sheet_statuses to update.
     */
    where: sheet_statusesWhereUniqueInput
  }

  /**
   * sheet_statuses updateMany
   */
  export type sheet_statusesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sheet_statuses.
     */
    data: XOR<sheet_statusesUpdateManyMutationInput, sheet_statusesUncheckedUpdateManyInput>
    /**
     * Filter which sheet_statuses to update
     */
    where?: sheet_statusesWhereInput
    /**
     * Limit how many sheet_statuses to update.
     */
    limit?: number
  }

  /**
   * sheet_statuses updateManyAndReturn
   */
  export type sheet_statusesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * The data used to update sheet_statuses.
     */
    data: XOR<sheet_statusesUpdateManyMutationInput, sheet_statusesUncheckedUpdateManyInput>
    /**
     * Filter which sheet_statuses to update
     */
    where?: sheet_statusesWhereInput
    /**
     * Limit how many sheet_statuses to update.
     */
    limit?: number
  }

  /**
   * sheet_statuses upsert
   */
  export type sheet_statusesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
    /**
     * The filter to search for the sheet_statuses to update in case it exists.
     */
    where: sheet_statusesWhereUniqueInput
    /**
     * In case the sheet_statuses found by the `where` argument doesn't exist, create a new sheet_statuses with this data.
     */
    create: XOR<sheet_statusesCreateInput, sheet_statusesUncheckedCreateInput>
    /**
     * In case the sheet_statuses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sheet_statusesUpdateInput, sheet_statusesUncheckedUpdateInput>
  }

  /**
   * sheet_statuses delete
   */
  export type sheet_statusesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
    /**
     * Filter which sheet_statuses to delete.
     */
    where: sheet_statusesWhereUniqueInput
  }

  /**
   * sheet_statuses deleteMany
   */
  export type sheet_statusesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sheet_statuses to delete
     */
    where?: sheet_statusesWhereInput
    /**
     * Limit how many sheet_statuses to delete.
     */
    limit?: number
  }

  /**
   * sheet_statuses.sheets
   */
  export type sheet_statuses$sheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    where?: sheetsWhereInput
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    cursor?: sheetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheet_statuses without action
   */
  export type sheet_statusesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheet_statuses
     */
    select?: sheet_statusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheet_statuses
     */
    omit?: sheet_statusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheet_statusesInclude<ExtArgs> | null
  }


  /**
   * Model sheets
   */

  export type AggregateSheets = {
    _count: SheetsCountAggregateOutputType | null
    _avg: SheetsAvgAggregateOutputType | null
    _sum: SheetsSumAggregateOutputType | null
    _min: SheetsMinAggregateOutputType | null
    _max: SheetsMaxAggregateOutputType | null
  }

  export type SheetsAvgAggregateOutputType = {
    total_scores: number | null
    sheet_status_id: number | null
  }

  export type SheetsSumAggregateOutputType = {
    total_scores: number | null
    sheet_status_id: number | null
  }

  export type SheetsMinAggregateOutputType = {
    id: string | null
    original_name: string | null
    image_filename: string | null
    group_id: string | null
    total_scores: number | null
    sheet_status_id: number | null
    process_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SheetsMaxAggregateOutputType = {
    id: string | null
    original_name: string | null
    image_filename: string | null
    group_id: string | null
    total_scores: number | null
    sheet_status_id: number | null
    process_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SheetsCountAggregateOutputType = {
    id: number
    original_name: number
    image_filename: number
    group_id: number
    total_scores: number
    sheet_status_id: number
    process_id: number
    marker_tl_center: number
    marker_tr_center: number
    marker_bl_center: number
    marker_br_center: number
    predict_ans_detail: number
    predict_ans_result: number
    predict_std_fill_detail: number
    predict_std_fill_result: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SheetsAvgAggregateInputType = {
    total_scores?: true
    sheet_status_id?: true
  }

  export type SheetsSumAggregateInputType = {
    total_scores?: true
    sheet_status_id?: true
  }

  export type SheetsMinAggregateInputType = {
    id?: true
    original_name?: true
    image_filename?: true
    group_id?: true
    total_scores?: true
    sheet_status_id?: true
    process_id?: true
    created_at?: true
    updated_at?: true
  }

  export type SheetsMaxAggregateInputType = {
    id?: true
    original_name?: true
    image_filename?: true
    group_id?: true
    total_scores?: true
    sheet_status_id?: true
    process_id?: true
    created_at?: true
    updated_at?: true
  }

  export type SheetsCountAggregateInputType = {
    id?: true
    original_name?: true
    image_filename?: true
    group_id?: true
    total_scores?: true
    sheet_status_id?: true
    process_id?: true
    marker_tl_center?: true
    marker_tr_center?: true
    marker_bl_center?: true
    marker_br_center?: true
    predict_ans_detail?: true
    predict_ans_result?: true
    predict_std_fill_detail?: true
    predict_std_fill_result?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SheetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sheets to aggregate.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sheets
    **/
    _count?: true | SheetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetsMaxAggregateInputType
  }

  export type GetSheetsAggregateType<T extends SheetsAggregateArgs> = {
        [P in keyof T & keyof AggregateSheets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheets[P]>
      : GetScalarType<T[P], AggregateSheets[P]>
  }




  export type sheetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sheetsWhereInput
    orderBy?: sheetsOrderByWithAggregationInput | sheetsOrderByWithAggregationInput[]
    by: SheetsScalarFieldEnum[] | SheetsScalarFieldEnum
    having?: sheetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetsCountAggregateInputType | true
    _avg?: SheetsAvgAggregateInputType
    _sum?: SheetsSumAggregateInputType
    _min?: SheetsMinAggregateInputType
    _max?: SheetsMaxAggregateInputType
  }

  export type SheetsGroupByOutputType = {
    id: string
    original_name: string
    image_filename: string
    group_id: string
    total_scores: number | null
    sheet_status_id: number
    process_id: string | null
    marker_tl_center: JsonValue
    marker_tr_center: JsonValue
    marker_bl_center: JsonValue
    marker_br_center: JsonValue
    predict_ans_detail: JsonValue | null
    predict_ans_result: JsonValue | null
    predict_std_fill_detail: JsonValue | null
    predict_std_fill_result: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: SheetsCountAggregateOutputType | null
    _avg: SheetsAvgAggregateOutputType | null
    _sum: SheetsSumAggregateOutputType | null
    _min: SheetsMinAggregateOutputType | null
    _max: SheetsMaxAggregateOutputType | null
  }

  type GetSheetsGroupByPayload<T extends sheetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetsGroupByOutputType[P]>
            : GetScalarType<T[P], SheetsGroupByOutputType[P]>
        }
      >
    >


  export type sheetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original_name?: boolean
    image_filename?: boolean
    group_id?: boolean
    total_scores?: boolean
    sheet_status_id?: boolean
    process_id?: boolean
    marker_tl_center?: boolean
    marker_tr_center?: boolean
    marker_bl_center?: boolean
    marker_br_center?: boolean
    predict_ans_detail?: boolean
    predict_ans_result?: boolean
    predict_std_fill_detail?: boolean
    predict_std_fill_result?: boolean
    created_at?: boolean
    updated_at?: boolean
    group?: boolean | groupsDefaultArgs<ExtArgs>
    sheet_status?: boolean | sheet_statusesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheets"]>

  export type sheetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original_name?: boolean
    image_filename?: boolean
    group_id?: boolean
    total_scores?: boolean
    sheet_status_id?: boolean
    process_id?: boolean
    marker_tl_center?: boolean
    marker_tr_center?: boolean
    marker_bl_center?: boolean
    marker_br_center?: boolean
    predict_ans_detail?: boolean
    predict_ans_result?: boolean
    predict_std_fill_detail?: boolean
    predict_std_fill_result?: boolean
    created_at?: boolean
    updated_at?: boolean
    group?: boolean | groupsDefaultArgs<ExtArgs>
    sheet_status?: boolean | sheet_statusesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheets"]>

  export type sheetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    original_name?: boolean
    image_filename?: boolean
    group_id?: boolean
    total_scores?: boolean
    sheet_status_id?: boolean
    process_id?: boolean
    marker_tl_center?: boolean
    marker_tr_center?: boolean
    marker_bl_center?: boolean
    marker_br_center?: boolean
    predict_ans_detail?: boolean
    predict_ans_result?: boolean
    predict_std_fill_detail?: boolean
    predict_std_fill_result?: boolean
    created_at?: boolean
    updated_at?: boolean
    group?: boolean | groupsDefaultArgs<ExtArgs>
    sheet_status?: boolean | sheet_statusesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheets"]>

  export type sheetsSelectScalar = {
    id?: boolean
    original_name?: boolean
    image_filename?: boolean
    group_id?: boolean
    total_scores?: boolean
    sheet_status_id?: boolean
    process_id?: boolean
    marker_tl_center?: boolean
    marker_tr_center?: boolean
    marker_bl_center?: boolean
    marker_br_center?: boolean
    predict_ans_detail?: boolean
    predict_ans_result?: boolean
    predict_std_fill_detail?: boolean
    predict_std_fill_result?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type sheetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "original_name" | "image_filename" | "group_id" | "total_scores" | "sheet_status_id" | "process_id" | "marker_tl_center" | "marker_tr_center" | "marker_bl_center" | "marker_br_center" | "predict_ans_detail" | "predict_ans_result" | "predict_std_fill_detail" | "predict_std_fill_result" | "created_at" | "updated_at", ExtArgs["result"]["sheets"]>
  export type sheetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupsDefaultArgs<ExtArgs>
    sheet_status?: boolean | sheet_statusesDefaultArgs<ExtArgs>
  }
  export type sheetsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupsDefaultArgs<ExtArgs>
    sheet_status?: boolean | sheet_statusesDefaultArgs<ExtArgs>
  }
  export type sheetsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | groupsDefaultArgs<ExtArgs>
    sheet_status?: boolean | sheet_statusesDefaultArgs<ExtArgs>
  }

  export type $sheetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sheets"
    objects: {
      group: Prisma.$groupsPayload<ExtArgs>
      sheet_status: Prisma.$sheet_statusesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      original_name: string
      image_filename: string
      group_id: string
      total_scores: number | null
      sheet_status_id: number
      process_id: string | null
      marker_tl_center: Prisma.JsonValue
      marker_tr_center: Prisma.JsonValue
      marker_bl_center: Prisma.JsonValue
      marker_br_center: Prisma.JsonValue
      predict_ans_detail: Prisma.JsonValue | null
      predict_ans_result: Prisma.JsonValue | null
      predict_std_fill_detail: Prisma.JsonValue | null
      predict_std_fill_result: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["sheets"]>
    composites: {}
  }

  type sheetsGetPayload<S extends boolean | null | undefined | sheetsDefaultArgs> = $Result.GetResult<Prisma.$sheetsPayload, S>

  type sheetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sheetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetsCountAggregateInputType | true
    }

  export interface sheetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sheets'], meta: { name: 'sheets' } }
    /**
     * Find zero or one Sheets that matches the filter.
     * @param {sheetsFindUniqueArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sheetsFindUniqueArgs>(args: SelectSubset<T, sheetsFindUniqueArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sheets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sheetsFindUniqueOrThrowArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sheetsFindUniqueOrThrowArgs>(args: SelectSubset<T, sheetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsFindFirstArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sheetsFindFirstArgs>(args?: SelectSubset<T, sheetsFindFirstArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsFindFirstOrThrowArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sheetsFindFirstOrThrowArgs>(args?: SelectSubset<T, sheetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheets
     * const sheets = await prisma.sheets.findMany()
     * 
     * // Get first 10 Sheets
     * const sheets = await prisma.sheets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetsWithIdOnly = await prisma.sheets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sheetsFindManyArgs>(args?: SelectSubset<T, sheetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sheets.
     * @param {sheetsCreateArgs} args - Arguments to create a Sheets.
     * @example
     * // Create one Sheets
     * const Sheets = await prisma.sheets.create({
     *   data: {
     *     // ... data to create a Sheets
     *   }
     * })
     * 
     */
    create<T extends sheetsCreateArgs>(args: SelectSubset<T, sheetsCreateArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sheets.
     * @param {sheetsCreateManyArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheets = await prisma.sheets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sheetsCreateManyArgs>(args?: SelectSubset<T, sheetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sheets and returns the data saved in the database.
     * @param {sheetsCreateManyAndReturnArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheets = await prisma.sheets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sheets and only return the `id`
     * const sheetsWithIdOnly = await prisma.sheets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sheetsCreateManyAndReturnArgs>(args?: SelectSubset<T, sheetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sheets.
     * @param {sheetsDeleteArgs} args - Arguments to delete one Sheets.
     * @example
     * // Delete one Sheets
     * const Sheets = await prisma.sheets.delete({
     *   where: {
     *     // ... filter to delete one Sheets
     *   }
     * })
     * 
     */
    delete<T extends sheetsDeleteArgs>(args: SelectSubset<T, sheetsDeleteArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sheets.
     * @param {sheetsUpdateArgs} args - Arguments to update one Sheets.
     * @example
     * // Update one Sheets
     * const sheets = await prisma.sheets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sheetsUpdateArgs>(args: SelectSubset<T, sheetsUpdateArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sheets.
     * @param {sheetsDeleteManyArgs} args - Arguments to filter Sheets to delete.
     * @example
     * // Delete a few Sheets
     * const { count } = await prisma.sheets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sheetsDeleteManyArgs>(args?: SelectSubset<T, sheetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheets
     * const sheets = await prisma.sheets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sheetsUpdateManyArgs>(args: SelectSubset<T, sheetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets and returns the data updated in the database.
     * @param {sheetsUpdateManyAndReturnArgs} args - Arguments to update many Sheets.
     * @example
     * // Update many Sheets
     * const sheets = await prisma.sheets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sheets and only return the `id`
     * const sheetsWithIdOnly = await prisma.sheets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sheetsUpdateManyAndReturnArgs>(args: SelectSubset<T, sheetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sheets.
     * @param {sheetsUpsertArgs} args - Arguments to update or create a Sheets.
     * @example
     * // Update or create a Sheets
     * const sheets = await prisma.sheets.upsert({
     *   create: {
     *     // ... data to create a Sheets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheets we want to update
     *   }
     * })
     */
    upsert<T extends sheetsUpsertArgs>(args: SelectSubset<T, sheetsUpsertArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsCountArgs} args - Arguments to filter Sheets to count.
     * @example
     * // Count the number of Sheets
     * const count = await prisma.sheets.count({
     *   where: {
     *     // ... the filter for the Sheets we want to count
     *   }
     * })
    **/
    count<T extends sheetsCountArgs>(
      args?: Subset<T, sheetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SheetsAggregateArgs>(args: Subset<T, SheetsAggregateArgs>): Prisma.PrismaPromise<GetSheetsAggregateType<T>>

    /**
     * Group by Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sheetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sheetsGroupByArgs['orderBy'] }
        : { orderBy?: sheetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sheetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sheets model
   */
  readonly fields: sheetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sheets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sheetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sheet_status<T extends sheet_statusesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sheet_statusesDefaultArgs<ExtArgs>>): Prisma__sheet_statusesClient<$Result.GetResult<Prisma.$sheet_statusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sheets model
   */
  interface sheetsFieldRefs {
    readonly id: FieldRef<"sheets", 'String'>
    readonly original_name: FieldRef<"sheets", 'String'>
    readonly image_filename: FieldRef<"sheets", 'String'>
    readonly group_id: FieldRef<"sheets", 'String'>
    readonly total_scores: FieldRef<"sheets", 'Int'>
    readonly sheet_status_id: FieldRef<"sheets", 'Int'>
    readonly process_id: FieldRef<"sheets", 'String'>
    readonly marker_tl_center: FieldRef<"sheets", 'Json'>
    readonly marker_tr_center: FieldRef<"sheets", 'Json'>
    readonly marker_bl_center: FieldRef<"sheets", 'Json'>
    readonly marker_br_center: FieldRef<"sheets", 'Json'>
    readonly predict_ans_detail: FieldRef<"sheets", 'Json'>
    readonly predict_ans_result: FieldRef<"sheets", 'Json'>
    readonly predict_std_fill_detail: FieldRef<"sheets", 'Json'>
    readonly predict_std_fill_result: FieldRef<"sheets", 'Json'>
    readonly created_at: FieldRef<"sheets", 'DateTime'>
    readonly updated_at: FieldRef<"sheets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sheets findUnique
   */
  export type sheetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets findUniqueOrThrow
   */
  export type sheetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets findFirst
   */
  export type sheetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sheets.
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sheets.
     */
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheets findFirstOrThrow
   */
  export type sheetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sheets.
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sheets.
     */
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheets findMany
   */
  export type sheetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sheets.
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheets create
   */
  export type sheetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * The data needed to create a sheets.
     */
    data: XOR<sheetsCreateInput, sheetsUncheckedCreateInput>
  }

  /**
   * sheets createMany
   */
  export type sheetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sheets.
     */
    data: sheetsCreateManyInput | sheetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sheets createManyAndReturn
   */
  export type sheetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * The data used to create many sheets.
     */
    data: sheetsCreateManyInput | sheetsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sheets update
   */
  export type sheetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * The data needed to update a sheets.
     */
    data: XOR<sheetsUpdateInput, sheetsUncheckedUpdateInput>
    /**
     * Choose, which sheets to update.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets updateMany
   */
  export type sheetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sheets.
     */
    data: XOR<sheetsUpdateManyMutationInput, sheetsUncheckedUpdateManyInput>
    /**
     * Filter which sheets to update
     */
    where?: sheetsWhereInput
    /**
     * Limit how many sheets to update.
     */
    limit?: number
  }

  /**
   * sheets updateManyAndReturn
   */
  export type sheetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * The data used to update sheets.
     */
    data: XOR<sheetsUpdateManyMutationInput, sheetsUncheckedUpdateManyInput>
    /**
     * Filter which sheets to update
     */
    where?: sheetsWhereInput
    /**
     * Limit how many sheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sheets upsert
   */
  export type sheetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * The filter to search for the sheets to update in case it exists.
     */
    where: sheetsWhereUniqueInput
    /**
     * In case the sheets found by the `where` argument doesn't exist, create a new sheets with this data.
     */
    create: XOR<sheetsCreateInput, sheetsUncheckedCreateInput>
    /**
     * In case the sheets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sheetsUpdateInput, sheetsUncheckedUpdateInput>
  }

  /**
   * sheets delete
   */
  export type sheetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
    /**
     * Filter which sheets to delete.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets deleteMany
   */
  export type sheetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sheets to delete
     */
    where?: sheetsWhereInput
    /**
     * Limit how many sheets to delete.
     */
    limit?: number
  }

  /**
   * sheets without action
   */
  export type sheetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sheetsInclude<ExtArgs> | null
  }


  /**
   * Model cross_types
   */

  export type AggregateCross_types = {
    _count: Cross_typesCountAggregateOutputType | null
    _avg: Cross_typesAvgAggregateOutputType | null
    _sum: Cross_typesSumAggregateOutputType | null
    _min: Cross_typesMinAggregateOutputType | null
    _max: Cross_typesMaxAggregateOutputType | null
  }

  export type Cross_typesAvgAggregateOutputType = {
    id: number | null
  }

  export type Cross_typesSumAggregateOutputType = {
    id: number | null
  }

  export type Cross_typesMinAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
  }

  export type Cross_typesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
  }

  export type Cross_typesCountAggregateOutputType = {
    id: number
    name: number
    detail: number
    _all: number
  }


  export type Cross_typesAvgAggregateInputType = {
    id?: true
  }

  export type Cross_typesSumAggregateInputType = {
    id?: true
  }

  export type Cross_typesMinAggregateInputType = {
    id?: true
    name?: true
    detail?: true
  }

  export type Cross_typesMaxAggregateInputType = {
    id?: true
    name?: true
    detail?: true
  }

  export type Cross_typesCountAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    _all?: true
  }

  export type Cross_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cross_types to aggregate.
     */
    where?: cross_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cross_types to fetch.
     */
    orderBy?: cross_typesOrderByWithRelationInput | cross_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cross_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cross_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cross_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cross_types
    **/
    _count?: true | Cross_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cross_typesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cross_typesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cross_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cross_typesMaxAggregateInputType
  }

  export type GetCross_typesAggregateType<T extends Cross_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateCross_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCross_types[P]>
      : GetScalarType<T[P], AggregateCross_types[P]>
  }




  export type cross_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cross_typesWhereInput
    orderBy?: cross_typesOrderByWithAggregationInput | cross_typesOrderByWithAggregationInput[]
    by: Cross_typesScalarFieldEnum[] | Cross_typesScalarFieldEnum
    having?: cross_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cross_typesCountAggregateInputType | true
    _avg?: Cross_typesAvgAggregateInputType
    _sum?: Cross_typesSumAggregateInputType
    _min?: Cross_typesMinAggregateInputType
    _max?: Cross_typesMaxAggregateInputType
  }

  export type Cross_typesGroupByOutputType = {
    id: number
    name: string
    detail: string
    _count: Cross_typesCountAggregateOutputType | null
    _avg: Cross_typesAvgAggregateOutputType | null
    _sum: Cross_typesSumAggregateOutputType | null
    _min: Cross_typesMinAggregateOutputType | null
    _max: Cross_typesMaxAggregateOutputType | null
  }

  type GetCross_typesGroupByPayload<T extends cross_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cross_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cross_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cross_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Cross_typesGroupByOutputType[P]>
        }
      >
    >


  export type cross_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
  }, ExtArgs["result"]["cross_types"]>

  export type cross_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
  }, ExtArgs["result"]["cross_types"]>

  export type cross_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
  }, ExtArgs["result"]["cross_types"]>

  export type cross_typesSelectScalar = {
    id?: boolean
    name?: boolean
    detail?: boolean
  }

  export type cross_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "detail", ExtArgs["result"]["cross_types"]>

  export type $cross_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cross_types"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      detail: string
    }, ExtArgs["result"]["cross_types"]>
    composites: {}
  }

  type cross_typesGetPayload<S extends boolean | null | undefined | cross_typesDefaultArgs> = $Result.GetResult<Prisma.$cross_typesPayload, S>

  type cross_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cross_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cross_typesCountAggregateInputType | true
    }

  export interface cross_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cross_types'], meta: { name: 'cross_types' } }
    /**
     * Find zero or one Cross_types that matches the filter.
     * @param {cross_typesFindUniqueArgs} args - Arguments to find a Cross_types
     * @example
     * // Get one Cross_types
     * const cross_types = await prisma.cross_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cross_typesFindUniqueArgs>(args: SelectSubset<T, cross_typesFindUniqueArgs<ExtArgs>>): Prisma__cross_typesClient<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cross_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cross_typesFindUniqueOrThrowArgs} args - Arguments to find a Cross_types
     * @example
     * // Get one Cross_types
     * const cross_types = await prisma.cross_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cross_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, cross_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cross_typesClient<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cross_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cross_typesFindFirstArgs} args - Arguments to find a Cross_types
     * @example
     * // Get one Cross_types
     * const cross_types = await prisma.cross_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cross_typesFindFirstArgs>(args?: SelectSubset<T, cross_typesFindFirstArgs<ExtArgs>>): Prisma__cross_typesClient<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cross_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cross_typesFindFirstOrThrowArgs} args - Arguments to find a Cross_types
     * @example
     * // Get one Cross_types
     * const cross_types = await prisma.cross_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cross_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, cross_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__cross_typesClient<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cross_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cross_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cross_types
     * const cross_types = await prisma.cross_types.findMany()
     * 
     * // Get first 10 Cross_types
     * const cross_types = await prisma.cross_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cross_typesWithIdOnly = await prisma.cross_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cross_typesFindManyArgs>(args?: SelectSubset<T, cross_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cross_types.
     * @param {cross_typesCreateArgs} args - Arguments to create a Cross_types.
     * @example
     * // Create one Cross_types
     * const Cross_types = await prisma.cross_types.create({
     *   data: {
     *     // ... data to create a Cross_types
     *   }
     * })
     * 
     */
    create<T extends cross_typesCreateArgs>(args: SelectSubset<T, cross_typesCreateArgs<ExtArgs>>): Prisma__cross_typesClient<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cross_types.
     * @param {cross_typesCreateManyArgs} args - Arguments to create many Cross_types.
     * @example
     * // Create many Cross_types
     * const cross_types = await prisma.cross_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cross_typesCreateManyArgs>(args?: SelectSubset<T, cross_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cross_types and returns the data saved in the database.
     * @param {cross_typesCreateManyAndReturnArgs} args - Arguments to create many Cross_types.
     * @example
     * // Create many Cross_types
     * const cross_types = await prisma.cross_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cross_types and only return the `id`
     * const cross_typesWithIdOnly = await prisma.cross_types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cross_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, cross_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cross_types.
     * @param {cross_typesDeleteArgs} args - Arguments to delete one Cross_types.
     * @example
     * // Delete one Cross_types
     * const Cross_types = await prisma.cross_types.delete({
     *   where: {
     *     // ... filter to delete one Cross_types
     *   }
     * })
     * 
     */
    delete<T extends cross_typesDeleteArgs>(args: SelectSubset<T, cross_typesDeleteArgs<ExtArgs>>): Prisma__cross_typesClient<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cross_types.
     * @param {cross_typesUpdateArgs} args - Arguments to update one Cross_types.
     * @example
     * // Update one Cross_types
     * const cross_types = await prisma.cross_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cross_typesUpdateArgs>(args: SelectSubset<T, cross_typesUpdateArgs<ExtArgs>>): Prisma__cross_typesClient<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cross_types.
     * @param {cross_typesDeleteManyArgs} args - Arguments to filter Cross_types to delete.
     * @example
     * // Delete a few Cross_types
     * const { count } = await prisma.cross_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cross_typesDeleteManyArgs>(args?: SelectSubset<T, cross_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cross_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cross_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cross_types
     * const cross_types = await prisma.cross_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cross_typesUpdateManyArgs>(args: SelectSubset<T, cross_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cross_types and returns the data updated in the database.
     * @param {cross_typesUpdateManyAndReturnArgs} args - Arguments to update many Cross_types.
     * @example
     * // Update many Cross_types
     * const cross_types = await prisma.cross_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cross_types and only return the `id`
     * const cross_typesWithIdOnly = await prisma.cross_types.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cross_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, cross_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cross_types.
     * @param {cross_typesUpsertArgs} args - Arguments to update or create a Cross_types.
     * @example
     * // Update or create a Cross_types
     * const cross_types = await prisma.cross_types.upsert({
     *   create: {
     *     // ... data to create a Cross_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cross_types we want to update
     *   }
     * })
     */
    upsert<T extends cross_typesUpsertArgs>(args: SelectSubset<T, cross_typesUpsertArgs<ExtArgs>>): Prisma__cross_typesClient<$Result.GetResult<Prisma.$cross_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cross_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cross_typesCountArgs} args - Arguments to filter Cross_types to count.
     * @example
     * // Count the number of Cross_types
     * const count = await prisma.cross_types.count({
     *   where: {
     *     // ... the filter for the Cross_types we want to count
     *   }
     * })
    **/
    count<T extends cross_typesCountArgs>(
      args?: Subset<T, cross_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cross_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cross_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cross_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cross_typesAggregateArgs>(args: Subset<T, Cross_typesAggregateArgs>): Prisma.PrismaPromise<GetCross_typesAggregateType<T>>

    /**
     * Group by Cross_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cross_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cross_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cross_typesGroupByArgs['orderBy'] }
        : { orderBy?: cross_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cross_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCross_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cross_types model
   */
  readonly fields: cross_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cross_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cross_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cross_types model
   */
  interface cross_typesFieldRefs {
    readonly id: FieldRef<"cross_types", 'Int'>
    readonly name: FieldRef<"cross_types", 'String'>
    readonly detail: FieldRef<"cross_types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cross_types findUnique
   */
  export type cross_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * Filter, which cross_types to fetch.
     */
    where: cross_typesWhereUniqueInput
  }

  /**
   * cross_types findUniqueOrThrow
   */
  export type cross_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * Filter, which cross_types to fetch.
     */
    where: cross_typesWhereUniqueInput
  }

  /**
   * cross_types findFirst
   */
  export type cross_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * Filter, which cross_types to fetch.
     */
    where?: cross_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cross_types to fetch.
     */
    orderBy?: cross_typesOrderByWithRelationInput | cross_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cross_types.
     */
    cursor?: cross_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cross_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cross_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cross_types.
     */
    distinct?: Cross_typesScalarFieldEnum | Cross_typesScalarFieldEnum[]
  }

  /**
   * cross_types findFirstOrThrow
   */
  export type cross_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * Filter, which cross_types to fetch.
     */
    where?: cross_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cross_types to fetch.
     */
    orderBy?: cross_typesOrderByWithRelationInput | cross_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cross_types.
     */
    cursor?: cross_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cross_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cross_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cross_types.
     */
    distinct?: Cross_typesScalarFieldEnum | Cross_typesScalarFieldEnum[]
  }

  /**
   * cross_types findMany
   */
  export type cross_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * Filter, which cross_types to fetch.
     */
    where?: cross_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cross_types to fetch.
     */
    orderBy?: cross_typesOrderByWithRelationInput | cross_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cross_types.
     */
    cursor?: cross_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cross_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cross_types.
     */
    skip?: number
    distinct?: Cross_typesScalarFieldEnum | Cross_typesScalarFieldEnum[]
  }

  /**
   * cross_types create
   */
  export type cross_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * The data needed to create a cross_types.
     */
    data: XOR<cross_typesCreateInput, cross_typesUncheckedCreateInput>
  }

  /**
   * cross_types createMany
   */
  export type cross_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cross_types.
     */
    data: cross_typesCreateManyInput | cross_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cross_types createManyAndReturn
   */
  export type cross_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * The data used to create many cross_types.
     */
    data: cross_typesCreateManyInput | cross_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cross_types update
   */
  export type cross_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * The data needed to update a cross_types.
     */
    data: XOR<cross_typesUpdateInput, cross_typesUncheckedUpdateInput>
    /**
     * Choose, which cross_types to update.
     */
    where: cross_typesWhereUniqueInput
  }

  /**
   * cross_types updateMany
   */
  export type cross_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cross_types.
     */
    data: XOR<cross_typesUpdateManyMutationInput, cross_typesUncheckedUpdateManyInput>
    /**
     * Filter which cross_types to update
     */
    where?: cross_typesWhereInput
    /**
     * Limit how many cross_types to update.
     */
    limit?: number
  }

  /**
   * cross_types updateManyAndReturn
   */
  export type cross_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * The data used to update cross_types.
     */
    data: XOR<cross_typesUpdateManyMutationInput, cross_typesUncheckedUpdateManyInput>
    /**
     * Filter which cross_types to update
     */
    where?: cross_typesWhereInput
    /**
     * Limit how many cross_types to update.
     */
    limit?: number
  }

  /**
   * cross_types upsert
   */
  export type cross_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * The filter to search for the cross_types to update in case it exists.
     */
    where: cross_typesWhereUniqueInput
    /**
     * In case the cross_types found by the `where` argument doesn't exist, create a new cross_types with this data.
     */
    create: XOR<cross_typesCreateInput, cross_typesUncheckedCreateInput>
    /**
     * In case the cross_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cross_typesUpdateInput, cross_typesUncheckedUpdateInput>
  }

  /**
   * cross_types delete
   */
  export type cross_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
    /**
     * Filter which cross_types to delete.
     */
    where: cross_typesWhereUniqueInput
  }

  /**
   * cross_types deleteMany
   */
  export type cross_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cross_types to delete
     */
    where?: cross_typesWhereInput
    /**
     * Limit how many cross_types to delete.
     */
    limit?: number
  }

  /**
   * cross_types without action
   */
  export type cross_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cross_types
     */
    select?: cross_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cross_types
     */
    omit?: cross_typesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    detail: 'detail'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    first_name: 'first_name',
    last_name: 'last_name',
    role_id: 'role_id',
    email: 'email',
    disable: 'disable',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Region_typesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    detail: 'detail'
  };

  export type Region_typesScalarFieldEnum = (typeof Region_typesScalarFieldEnum)[keyof typeof Region_typesScalarFieldEnum]


  export const RegionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    detail: 'detail',
    region_type_id: 'region_type_id'
  };

  export type RegionsScalarFieldEnum = (typeof RegionsScalarFieldEnum)[keyof typeof RegionsScalarFieldEnum]


  export const TemplatesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image_filename: 'image_filename',
    pdf_filename: 'pdf_filename',
    total_no: 'total_no',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TemplatesScalarFieldEnum = (typeof TemplatesScalarFieldEnum)[keyof typeof TemplatesScalarFieldEnum]


  export const Template_regionsScalarFieldEnum: {
    id: 'id',
    template_id: 'template_id',
    region_id: 'region_id',
    sx: 'sx',
    sy: 'sy',
    ex: 'ex',
    ey: 'ey'
  };

  export type Template_regionsScalarFieldEnum = (typeof Template_regionsScalarFieldEnum)[keyof typeof Template_regionsScalarFieldEnum]


  export const Template_marker_centersScalarFieldEnum: {
    template_region_id: 'template_region_id',
    x: 'x',
    y: 'y'
  };

  export type Template_marker_centersScalarFieldEnum = (typeof Template_marker_centersScalarFieldEnum)[keyof typeof Template_marker_centersScalarFieldEnum]


  export const AnswersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    owner_id: 'owner_id',
    subject: 'subject',
    year: 'year',
    term: 'term',
    total_no: 'total_no',
    shared: 'shared',
    disable: 'disable',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AnswersScalarFieldEnum = (typeof AnswersScalarFieldEnum)[keyof typeof AnswersScalarFieldEnum]


  export const Answer_detailsScalarFieldEnum: {
    id: 'id',
    answer_id: 'answer_id',
    no: 'no',
    point: 'point',
    correct_all: 'correct_all',
    choice_correct: 'choice_correct'
  };

  export type Answer_detailsScalarFieldEnum = (typeof Answer_detailsScalarFieldEnum)[keyof typeof Answer_detailsScalarFieldEnum]


  export const GroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    year: 'year',
    term: 'term',
    owner_id: 'owner_id',
    template_id: 'template_id',
    answer_id: 'answer_id',
    disable: 'disable',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const Sheet_statusesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    detail: 'detail'
  };

  export type Sheet_statusesScalarFieldEnum = (typeof Sheet_statusesScalarFieldEnum)[keyof typeof Sheet_statusesScalarFieldEnum]


  export const SheetsScalarFieldEnum: {
    id: 'id',
    original_name: 'original_name',
    image_filename: 'image_filename',
    group_id: 'group_id',
    total_scores: 'total_scores',
    sheet_status_id: 'sheet_status_id',
    process_id: 'process_id',
    marker_tl_center: 'marker_tl_center',
    marker_tr_center: 'marker_tr_center',
    marker_bl_center: 'marker_bl_center',
    marker_br_center: 'marker_br_center',
    predict_ans_detail: 'predict_ans_detail',
    predict_ans_result: 'predict_ans_result',
    predict_std_fill_detail: 'predict_std_fill_detail',
    predict_std_fill_result: 'predict_std_fill_result',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SheetsScalarFieldEnum = (typeof SheetsScalarFieldEnum)[keyof typeof SheetsScalarFieldEnum]


  export const Cross_typesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    detail: 'detail'
  };

  export type Cross_typesScalarFieldEnum = (typeof Cross_typesScalarFieldEnum)[keyof typeof Cross_typesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringFilter<"roles"> | string
    detail?: StringFilter<"roles"> | string
    users?: UsersListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    detail?: StringFilter<"roles"> | string
    users?: UsersListRelationFilter
  }, "id" | "name">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: StringWithAggregatesFilter<"roles"> | string
    detail?: StringWithAggregatesFilter<"roles"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    email?: StringNullableFilter<"users"> | string | null
    disable?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    answers?: AnswersListRelationFilter
    groups?: GroupsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role_id?: SortOrder
    email?: SortOrderInput | SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: rolesOrderByWithRelationInput
    answers?: answersOrderByRelationAggregateInput
    groups?: groupsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    disable?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    answers?: AnswersListRelationFilter
    groups?: GroupsListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role_id?: SortOrder
    email?: SortOrderInput | SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringWithAggregatesFilter<"users"> | string
    last_name?: StringWithAggregatesFilter<"users"> | string
    role_id?: IntWithAggregatesFilter<"users"> | number
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    disable?: BoolWithAggregatesFilter<"users"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type region_typesWhereInput = {
    AND?: region_typesWhereInput | region_typesWhereInput[]
    OR?: region_typesWhereInput[]
    NOT?: region_typesWhereInput | region_typesWhereInput[]
    id?: IntFilter<"region_types"> | number
    name?: StringFilter<"region_types"> | string
    detail?: StringFilter<"region_types"> | string
    regions?: RegionsListRelationFilter
  }

  export type region_typesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    regions?: regionsOrderByRelationAggregateInput
  }

  export type region_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: region_typesWhereInput | region_typesWhereInput[]
    OR?: region_typesWhereInput[]
    NOT?: region_typesWhereInput | region_typesWhereInput[]
    detail?: StringFilter<"region_types"> | string
    regions?: RegionsListRelationFilter
  }, "id" | "name">

  export type region_typesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    _count?: region_typesCountOrderByAggregateInput
    _avg?: region_typesAvgOrderByAggregateInput
    _max?: region_typesMaxOrderByAggregateInput
    _min?: region_typesMinOrderByAggregateInput
    _sum?: region_typesSumOrderByAggregateInput
  }

  export type region_typesScalarWhereWithAggregatesInput = {
    AND?: region_typesScalarWhereWithAggregatesInput | region_typesScalarWhereWithAggregatesInput[]
    OR?: region_typesScalarWhereWithAggregatesInput[]
    NOT?: region_typesScalarWhereWithAggregatesInput | region_typesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"region_types"> | number
    name?: StringWithAggregatesFilter<"region_types"> | string
    detail?: StringWithAggregatesFilter<"region_types"> | string
  }

  export type regionsWhereInput = {
    AND?: regionsWhereInput | regionsWhereInput[]
    OR?: regionsWhereInput[]
    NOT?: regionsWhereInput | regionsWhereInput[]
    id?: IntFilter<"regions"> | number
    name?: StringFilter<"regions"> | string
    detail?: StringFilter<"regions"> | string
    region_type_id?: IntFilter<"regions"> | number
    region_type?: XOR<Region_typesScalarRelationFilter, region_typesWhereInput>
    template_regions?: Template_regionsListRelationFilter
  }

  export type regionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    region_type_id?: SortOrder
    region_type?: region_typesOrderByWithRelationInput
    template_regions?: template_regionsOrderByRelationAggregateInput
  }

  export type regionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: regionsWhereInput | regionsWhereInput[]
    OR?: regionsWhereInput[]
    NOT?: regionsWhereInput | regionsWhereInput[]
    detail?: StringFilter<"regions"> | string
    region_type_id?: IntFilter<"regions"> | number
    region_type?: XOR<Region_typesScalarRelationFilter, region_typesWhereInput>
    template_regions?: Template_regionsListRelationFilter
  }, "id" | "name">

  export type regionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    region_type_id?: SortOrder
    _count?: regionsCountOrderByAggregateInput
    _avg?: regionsAvgOrderByAggregateInput
    _max?: regionsMaxOrderByAggregateInput
    _min?: regionsMinOrderByAggregateInput
    _sum?: regionsSumOrderByAggregateInput
  }

  export type regionsScalarWhereWithAggregatesInput = {
    AND?: regionsScalarWhereWithAggregatesInput | regionsScalarWhereWithAggregatesInput[]
    OR?: regionsScalarWhereWithAggregatesInput[]
    NOT?: regionsScalarWhereWithAggregatesInput | regionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"regions"> | number
    name?: StringWithAggregatesFilter<"regions"> | string
    detail?: StringWithAggregatesFilter<"regions"> | string
    region_type_id?: IntWithAggregatesFilter<"regions"> | number
  }

  export type templatesWhereInput = {
    AND?: templatesWhereInput | templatesWhereInput[]
    OR?: templatesWhereInput[]
    NOT?: templatesWhereInput | templatesWhereInput[]
    id?: StringFilter<"templates"> | string
    name?: StringFilter<"templates"> | string
    image_filename?: StringFilter<"templates"> | string
    pdf_filename?: StringFilter<"templates"> | string
    total_no?: IntFilter<"templates"> | number
    created_at?: DateTimeFilter<"templates"> | Date | string
    updated_at?: DateTimeFilter<"templates"> | Date | string
    template_regions?: Template_regionsListRelationFilter
    groups?: GroupsListRelationFilter
  }

  export type templatesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image_filename?: SortOrder
    pdf_filename?: SortOrder
    total_no?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    template_regions?: template_regionsOrderByRelationAggregateInput
    groups?: groupsOrderByRelationAggregateInput
  }

  export type templatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: templatesWhereInput | templatesWhereInput[]
    OR?: templatesWhereInput[]
    NOT?: templatesWhereInput | templatesWhereInput[]
    name?: StringFilter<"templates"> | string
    image_filename?: StringFilter<"templates"> | string
    pdf_filename?: StringFilter<"templates"> | string
    total_no?: IntFilter<"templates"> | number
    created_at?: DateTimeFilter<"templates"> | Date | string
    updated_at?: DateTimeFilter<"templates"> | Date | string
    template_regions?: Template_regionsListRelationFilter
    groups?: GroupsListRelationFilter
  }, "id">

  export type templatesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image_filename?: SortOrder
    pdf_filename?: SortOrder
    total_no?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: templatesCountOrderByAggregateInput
    _avg?: templatesAvgOrderByAggregateInput
    _max?: templatesMaxOrderByAggregateInput
    _min?: templatesMinOrderByAggregateInput
    _sum?: templatesSumOrderByAggregateInput
  }

  export type templatesScalarWhereWithAggregatesInput = {
    AND?: templatesScalarWhereWithAggregatesInput | templatesScalarWhereWithAggregatesInput[]
    OR?: templatesScalarWhereWithAggregatesInput[]
    NOT?: templatesScalarWhereWithAggregatesInput | templatesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"templates"> | string
    name?: StringWithAggregatesFilter<"templates"> | string
    image_filename?: StringWithAggregatesFilter<"templates"> | string
    pdf_filename?: StringWithAggregatesFilter<"templates"> | string
    total_no?: IntWithAggregatesFilter<"templates"> | number
    created_at?: DateTimeWithAggregatesFilter<"templates"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"templates"> | Date | string
  }

  export type template_regionsWhereInput = {
    AND?: template_regionsWhereInput | template_regionsWhereInput[]
    OR?: template_regionsWhereInput[]
    NOT?: template_regionsWhereInput | template_regionsWhereInput[]
    id?: IntFilter<"template_regions"> | number
    template_id?: StringFilter<"template_regions"> | string
    region_id?: IntFilter<"template_regions"> | number
    sx?: IntFilter<"template_regions"> | number
    sy?: IntFilter<"template_regions"> | number
    ex?: IntFilter<"template_regions"> | number
    ey?: IntFilter<"template_regions"> | number
    template?: XOR<TemplatesScalarRelationFilter, templatesWhereInput>
    region?: XOR<RegionsScalarRelationFilter, regionsWhereInput>
    template_marker_centers?: Template_marker_centersListRelationFilter
  }

  export type template_regionsOrderByWithRelationInput = {
    id?: SortOrder
    template_id?: SortOrder
    region_id?: SortOrder
    sx?: SortOrder
    sy?: SortOrder
    ex?: SortOrder
    ey?: SortOrder
    template?: templatesOrderByWithRelationInput
    region?: regionsOrderByWithRelationInput
    template_marker_centers?: template_marker_centersOrderByRelationAggregateInput
  }

  export type template_regionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    template_id_region_id?: template_regionsTemplate_idRegion_idCompoundUniqueInput
    AND?: template_regionsWhereInput | template_regionsWhereInput[]
    OR?: template_regionsWhereInput[]
    NOT?: template_regionsWhereInput | template_regionsWhereInput[]
    template_id?: StringFilter<"template_regions"> | string
    region_id?: IntFilter<"template_regions"> | number
    sx?: IntFilter<"template_regions"> | number
    sy?: IntFilter<"template_regions"> | number
    ex?: IntFilter<"template_regions"> | number
    ey?: IntFilter<"template_regions"> | number
    template?: XOR<TemplatesScalarRelationFilter, templatesWhereInput>
    region?: XOR<RegionsScalarRelationFilter, regionsWhereInput>
    template_marker_centers?: Template_marker_centersListRelationFilter
  }, "id" | "template_id_region_id">

  export type template_regionsOrderByWithAggregationInput = {
    id?: SortOrder
    template_id?: SortOrder
    region_id?: SortOrder
    sx?: SortOrder
    sy?: SortOrder
    ex?: SortOrder
    ey?: SortOrder
    _count?: template_regionsCountOrderByAggregateInput
    _avg?: template_regionsAvgOrderByAggregateInput
    _max?: template_regionsMaxOrderByAggregateInput
    _min?: template_regionsMinOrderByAggregateInput
    _sum?: template_regionsSumOrderByAggregateInput
  }

  export type template_regionsScalarWhereWithAggregatesInput = {
    AND?: template_regionsScalarWhereWithAggregatesInput | template_regionsScalarWhereWithAggregatesInput[]
    OR?: template_regionsScalarWhereWithAggregatesInput[]
    NOT?: template_regionsScalarWhereWithAggregatesInput | template_regionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"template_regions"> | number
    template_id?: StringWithAggregatesFilter<"template_regions"> | string
    region_id?: IntWithAggregatesFilter<"template_regions"> | number
    sx?: IntWithAggregatesFilter<"template_regions"> | number
    sy?: IntWithAggregatesFilter<"template_regions"> | number
    ex?: IntWithAggregatesFilter<"template_regions"> | number
    ey?: IntWithAggregatesFilter<"template_regions"> | number
  }

  export type template_marker_centersWhereInput = {
    AND?: template_marker_centersWhereInput | template_marker_centersWhereInput[]
    OR?: template_marker_centersWhereInput[]
    NOT?: template_marker_centersWhereInput | template_marker_centersWhereInput[]
    template_region_id?: IntFilter<"template_marker_centers"> | number
    x?: IntFilter<"template_marker_centers"> | number
    y?: IntFilter<"template_marker_centers"> | number
    template_region?: XOR<Template_regionsScalarRelationFilter, template_regionsWhereInput>
  }

  export type template_marker_centersOrderByWithRelationInput = {
    template_region_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    template_region?: template_regionsOrderByWithRelationInput
  }

  export type template_marker_centersWhereUniqueInput = Prisma.AtLeast<{
    template_region_id?: number
    AND?: template_marker_centersWhereInput | template_marker_centersWhereInput[]
    OR?: template_marker_centersWhereInput[]
    NOT?: template_marker_centersWhereInput | template_marker_centersWhereInput[]
    x?: IntFilter<"template_marker_centers"> | number
    y?: IntFilter<"template_marker_centers"> | number
    template_region?: XOR<Template_regionsScalarRelationFilter, template_regionsWhereInput>
  }, "template_region_id">

  export type template_marker_centersOrderByWithAggregationInput = {
    template_region_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
    _count?: template_marker_centersCountOrderByAggregateInput
    _avg?: template_marker_centersAvgOrderByAggregateInput
    _max?: template_marker_centersMaxOrderByAggregateInput
    _min?: template_marker_centersMinOrderByAggregateInput
    _sum?: template_marker_centersSumOrderByAggregateInput
  }

  export type template_marker_centersScalarWhereWithAggregatesInput = {
    AND?: template_marker_centersScalarWhereWithAggregatesInput | template_marker_centersScalarWhereWithAggregatesInput[]
    OR?: template_marker_centersScalarWhereWithAggregatesInput[]
    NOT?: template_marker_centersScalarWhereWithAggregatesInput | template_marker_centersScalarWhereWithAggregatesInput[]
    template_region_id?: IntWithAggregatesFilter<"template_marker_centers"> | number
    x?: IntWithAggregatesFilter<"template_marker_centers"> | number
    y?: IntWithAggregatesFilter<"template_marker_centers"> | number
  }

  export type answersWhereInput = {
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    id?: StringFilter<"answers"> | string
    name?: StringFilter<"answers"> | string
    owner_id?: StringFilter<"answers"> | string
    subject?: StringFilter<"answers"> | string
    year?: IntFilter<"answers"> | number
    term?: IntFilter<"answers"> | number
    total_no?: IntFilter<"answers"> | number
    shared?: BoolFilter<"answers"> | boolean
    disable?: BoolFilter<"answers"> | boolean
    created_at?: DateTimeFilter<"answers"> | Date | string
    updated_at?: DateTimeFilter<"answers"> | Date | string
    owner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    answer_details?: Answer_detailsListRelationFilter
    groups?: GroupsListRelationFilter
  }

  export type answersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    owner_id?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    total_no?: SortOrder
    shared?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owner?: usersOrderByWithRelationInput
    answer_details?: answer_detailsOrderByRelationAggregateInput
    groups?: groupsOrderByRelationAggregateInput
  }

  export type answersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: answersWhereInput | answersWhereInput[]
    OR?: answersWhereInput[]
    NOT?: answersWhereInput | answersWhereInput[]
    name?: StringFilter<"answers"> | string
    owner_id?: StringFilter<"answers"> | string
    subject?: StringFilter<"answers"> | string
    year?: IntFilter<"answers"> | number
    term?: IntFilter<"answers"> | number
    total_no?: IntFilter<"answers"> | number
    shared?: BoolFilter<"answers"> | boolean
    disable?: BoolFilter<"answers"> | boolean
    created_at?: DateTimeFilter<"answers"> | Date | string
    updated_at?: DateTimeFilter<"answers"> | Date | string
    owner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    answer_details?: Answer_detailsListRelationFilter
    groups?: GroupsListRelationFilter
  }, "id">

  export type answersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    owner_id?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    total_no?: SortOrder
    shared?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: answersCountOrderByAggregateInput
    _avg?: answersAvgOrderByAggregateInput
    _max?: answersMaxOrderByAggregateInput
    _min?: answersMinOrderByAggregateInput
    _sum?: answersSumOrderByAggregateInput
  }

  export type answersScalarWhereWithAggregatesInput = {
    AND?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    OR?: answersScalarWhereWithAggregatesInput[]
    NOT?: answersScalarWhereWithAggregatesInput | answersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"answers"> | string
    name?: StringWithAggregatesFilter<"answers"> | string
    owner_id?: StringWithAggregatesFilter<"answers"> | string
    subject?: StringWithAggregatesFilter<"answers"> | string
    year?: IntWithAggregatesFilter<"answers"> | number
    term?: IntWithAggregatesFilter<"answers"> | number
    total_no?: IntWithAggregatesFilter<"answers"> | number
    shared?: BoolWithAggregatesFilter<"answers"> | boolean
    disable?: BoolWithAggregatesFilter<"answers"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"answers"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"answers"> | Date | string
  }

  export type answer_detailsWhereInput = {
    AND?: answer_detailsWhereInput | answer_detailsWhereInput[]
    OR?: answer_detailsWhereInput[]
    NOT?: answer_detailsWhereInput | answer_detailsWhereInput[]
    id?: IntFilter<"answer_details"> | number
    answer_id?: StringFilter<"answer_details"> | string
    no?: IntFilter<"answer_details"> | number
    point?: IntFilter<"answer_details"> | number
    correct_all?: BoolFilter<"answer_details"> | boolean
    choice_correct?: JsonNullableFilter<"answer_details">
    answer?: XOR<AnswersScalarRelationFilter, answersWhereInput>
  }

  export type answer_detailsOrderByWithRelationInput = {
    id?: SortOrder
    answer_id?: SortOrder
    no?: SortOrder
    point?: SortOrder
    correct_all?: SortOrder
    choice_correct?: SortOrderInput | SortOrder
    answer?: answersOrderByWithRelationInput
  }

  export type answer_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    answer_id_no?: answer_detailsAnswer_idNoCompoundUniqueInput
    AND?: answer_detailsWhereInput | answer_detailsWhereInput[]
    OR?: answer_detailsWhereInput[]
    NOT?: answer_detailsWhereInput | answer_detailsWhereInput[]
    answer_id?: StringFilter<"answer_details"> | string
    no?: IntFilter<"answer_details"> | number
    point?: IntFilter<"answer_details"> | number
    correct_all?: BoolFilter<"answer_details"> | boolean
    choice_correct?: JsonNullableFilter<"answer_details">
    answer?: XOR<AnswersScalarRelationFilter, answersWhereInput>
  }, "id" | "answer_id_no">

  export type answer_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    answer_id?: SortOrder
    no?: SortOrder
    point?: SortOrder
    correct_all?: SortOrder
    choice_correct?: SortOrderInput | SortOrder
    _count?: answer_detailsCountOrderByAggregateInput
    _avg?: answer_detailsAvgOrderByAggregateInput
    _max?: answer_detailsMaxOrderByAggregateInput
    _min?: answer_detailsMinOrderByAggregateInput
    _sum?: answer_detailsSumOrderByAggregateInput
  }

  export type answer_detailsScalarWhereWithAggregatesInput = {
    AND?: answer_detailsScalarWhereWithAggregatesInput | answer_detailsScalarWhereWithAggregatesInput[]
    OR?: answer_detailsScalarWhereWithAggregatesInput[]
    NOT?: answer_detailsScalarWhereWithAggregatesInput | answer_detailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"answer_details"> | number
    answer_id?: StringWithAggregatesFilter<"answer_details"> | string
    no?: IntWithAggregatesFilter<"answer_details"> | number
    point?: IntWithAggregatesFilter<"answer_details"> | number
    correct_all?: BoolWithAggregatesFilter<"answer_details"> | boolean
    choice_correct?: JsonNullableWithAggregatesFilter<"answer_details">
  }

  export type groupsWhereInput = {
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    id?: StringFilter<"groups"> | string
    name?: StringFilter<"groups"> | string
    subject?: StringFilter<"groups"> | string
    year?: IntFilter<"groups"> | number
    term?: IntFilter<"groups"> | number
    owner_id?: StringFilter<"groups"> | string
    template_id?: StringFilter<"groups"> | string
    answer_id?: StringFilter<"groups"> | string
    disable?: BoolFilter<"groups"> | boolean
    created_at?: DateTimeFilter<"groups"> | Date | string
    updated_at?: DateTimeFilter<"groups"> | Date | string
    owner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    template?: XOR<TemplatesScalarRelationFilter, templatesWhereInput>
    answer?: XOR<AnswersScalarRelationFilter, answersWhereInput>
    sheets?: SheetsListRelationFilter
  }

  export type groupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    owner_id?: SortOrder
    template_id?: SortOrder
    answer_id?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owner?: usersOrderByWithRelationInput
    template?: templatesOrderByWithRelationInput
    answer?: answersOrderByWithRelationInput
    sheets?: sheetsOrderByRelationAggregateInput
  }

  export type groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    subject?: StringFilter<"groups"> | string
    year?: IntFilter<"groups"> | number
    term?: IntFilter<"groups"> | number
    owner_id?: StringFilter<"groups"> | string
    template_id?: StringFilter<"groups"> | string
    answer_id?: StringFilter<"groups"> | string
    disable?: BoolFilter<"groups"> | boolean
    created_at?: DateTimeFilter<"groups"> | Date | string
    updated_at?: DateTimeFilter<"groups"> | Date | string
    owner?: XOR<UsersScalarRelationFilter, usersWhereInput>
    template?: XOR<TemplatesScalarRelationFilter, templatesWhereInput>
    answer?: XOR<AnswersScalarRelationFilter, answersWhereInput>
    sheets?: SheetsListRelationFilter
  }, "id" | "name">

  export type groupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    owner_id?: SortOrder
    template_id?: SortOrder
    answer_id?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: groupsCountOrderByAggregateInput
    _avg?: groupsAvgOrderByAggregateInput
    _max?: groupsMaxOrderByAggregateInput
    _min?: groupsMinOrderByAggregateInput
    _sum?: groupsSumOrderByAggregateInput
  }

  export type groupsScalarWhereWithAggregatesInput = {
    AND?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    OR?: groupsScalarWhereWithAggregatesInput[]
    NOT?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"groups"> | string
    name?: StringWithAggregatesFilter<"groups"> | string
    subject?: StringWithAggregatesFilter<"groups"> | string
    year?: IntWithAggregatesFilter<"groups"> | number
    term?: IntWithAggregatesFilter<"groups"> | number
    owner_id?: StringWithAggregatesFilter<"groups"> | string
    template_id?: StringWithAggregatesFilter<"groups"> | string
    answer_id?: StringWithAggregatesFilter<"groups"> | string
    disable?: BoolWithAggregatesFilter<"groups"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"groups"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"groups"> | Date | string
  }

  export type sheet_statusesWhereInput = {
    AND?: sheet_statusesWhereInput | sheet_statusesWhereInput[]
    OR?: sheet_statusesWhereInput[]
    NOT?: sheet_statusesWhereInput | sheet_statusesWhereInput[]
    id?: IntFilter<"sheet_statuses"> | number
    name?: StringFilter<"sheet_statuses"> | string
    detail?: StringFilter<"sheet_statuses"> | string
    sheets?: SheetsListRelationFilter
  }

  export type sheet_statusesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    sheets?: sheetsOrderByRelationAggregateInput
  }

  export type sheet_statusesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: sheet_statusesWhereInput | sheet_statusesWhereInput[]
    OR?: sheet_statusesWhereInput[]
    NOT?: sheet_statusesWhereInput | sheet_statusesWhereInput[]
    detail?: StringFilter<"sheet_statuses"> | string
    sheets?: SheetsListRelationFilter
  }, "id" | "name">

  export type sheet_statusesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    _count?: sheet_statusesCountOrderByAggregateInput
    _avg?: sheet_statusesAvgOrderByAggregateInput
    _max?: sheet_statusesMaxOrderByAggregateInput
    _min?: sheet_statusesMinOrderByAggregateInput
    _sum?: sheet_statusesSumOrderByAggregateInput
  }

  export type sheet_statusesScalarWhereWithAggregatesInput = {
    AND?: sheet_statusesScalarWhereWithAggregatesInput | sheet_statusesScalarWhereWithAggregatesInput[]
    OR?: sheet_statusesScalarWhereWithAggregatesInput[]
    NOT?: sheet_statusesScalarWhereWithAggregatesInput | sheet_statusesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sheet_statuses"> | number
    name?: StringWithAggregatesFilter<"sheet_statuses"> | string
    detail?: StringWithAggregatesFilter<"sheet_statuses"> | string
  }

  export type sheetsWhereInput = {
    AND?: sheetsWhereInput | sheetsWhereInput[]
    OR?: sheetsWhereInput[]
    NOT?: sheetsWhereInput | sheetsWhereInput[]
    id?: StringFilter<"sheets"> | string
    original_name?: StringFilter<"sheets"> | string
    image_filename?: StringFilter<"sheets"> | string
    group_id?: StringFilter<"sheets"> | string
    total_scores?: IntNullableFilter<"sheets"> | number | null
    sheet_status_id?: IntFilter<"sheets"> | number
    process_id?: StringNullableFilter<"sheets"> | string | null
    marker_tl_center?: JsonFilter<"sheets">
    marker_tr_center?: JsonFilter<"sheets">
    marker_bl_center?: JsonFilter<"sheets">
    marker_br_center?: JsonFilter<"sheets">
    predict_ans_detail?: JsonNullableFilter<"sheets">
    predict_ans_result?: JsonNullableFilter<"sheets">
    predict_std_fill_detail?: JsonNullableFilter<"sheets">
    predict_std_fill_result?: JsonNullableFilter<"sheets">
    created_at?: DateTimeFilter<"sheets"> | Date | string
    updated_at?: DateTimeFilter<"sheets"> | Date | string
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    sheet_status?: XOR<Sheet_statusesScalarRelationFilter, sheet_statusesWhereInput>
  }

  export type sheetsOrderByWithRelationInput = {
    id?: SortOrder
    original_name?: SortOrder
    image_filename?: SortOrder
    group_id?: SortOrder
    total_scores?: SortOrderInput | SortOrder
    sheet_status_id?: SortOrder
    process_id?: SortOrderInput | SortOrder
    marker_tl_center?: SortOrder
    marker_tr_center?: SortOrder
    marker_bl_center?: SortOrder
    marker_br_center?: SortOrder
    predict_ans_detail?: SortOrderInput | SortOrder
    predict_ans_result?: SortOrderInput | SortOrder
    predict_std_fill_detail?: SortOrderInput | SortOrder
    predict_std_fill_result?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    group?: groupsOrderByWithRelationInput
    sheet_status?: sheet_statusesOrderByWithRelationInput
  }

  export type sheetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: sheetsWhereInput | sheetsWhereInput[]
    OR?: sheetsWhereInput[]
    NOT?: sheetsWhereInput | sheetsWhereInput[]
    original_name?: StringFilter<"sheets"> | string
    image_filename?: StringFilter<"sheets"> | string
    group_id?: StringFilter<"sheets"> | string
    total_scores?: IntNullableFilter<"sheets"> | number | null
    sheet_status_id?: IntFilter<"sheets"> | number
    process_id?: StringNullableFilter<"sheets"> | string | null
    marker_tl_center?: JsonFilter<"sheets">
    marker_tr_center?: JsonFilter<"sheets">
    marker_bl_center?: JsonFilter<"sheets">
    marker_br_center?: JsonFilter<"sheets">
    predict_ans_detail?: JsonNullableFilter<"sheets">
    predict_ans_result?: JsonNullableFilter<"sheets">
    predict_std_fill_detail?: JsonNullableFilter<"sheets">
    predict_std_fill_result?: JsonNullableFilter<"sheets">
    created_at?: DateTimeFilter<"sheets"> | Date | string
    updated_at?: DateTimeFilter<"sheets"> | Date | string
    group?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    sheet_status?: XOR<Sheet_statusesScalarRelationFilter, sheet_statusesWhereInput>
  }, "id">

  export type sheetsOrderByWithAggregationInput = {
    id?: SortOrder
    original_name?: SortOrder
    image_filename?: SortOrder
    group_id?: SortOrder
    total_scores?: SortOrderInput | SortOrder
    sheet_status_id?: SortOrder
    process_id?: SortOrderInput | SortOrder
    marker_tl_center?: SortOrder
    marker_tr_center?: SortOrder
    marker_bl_center?: SortOrder
    marker_br_center?: SortOrder
    predict_ans_detail?: SortOrderInput | SortOrder
    predict_ans_result?: SortOrderInput | SortOrder
    predict_std_fill_detail?: SortOrderInput | SortOrder
    predict_std_fill_result?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: sheetsCountOrderByAggregateInput
    _avg?: sheetsAvgOrderByAggregateInput
    _max?: sheetsMaxOrderByAggregateInput
    _min?: sheetsMinOrderByAggregateInput
    _sum?: sheetsSumOrderByAggregateInput
  }

  export type sheetsScalarWhereWithAggregatesInput = {
    AND?: sheetsScalarWhereWithAggregatesInput | sheetsScalarWhereWithAggregatesInput[]
    OR?: sheetsScalarWhereWithAggregatesInput[]
    NOT?: sheetsScalarWhereWithAggregatesInput | sheetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"sheets"> | string
    original_name?: StringWithAggregatesFilter<"sheets"> | string
    image_filename?: StringWithAggregatesFilter<"sheets"> | string
    group_id?: StringWithAggregatesFilter<"sheets"> | string
    total_scores?: IntNullableWithAggregatesFilter<"sheets"> | number | null
    sheet_status_id?: IntWithAggregatesFilter<"sheets"> | number
    process_id?: StringNullableWithAggregatesFilter<"sheets"> | string | null
    marker_tl_center?: JsonWithAggregatesFilter<"sheets">
    marker_tr_center?: JsonWithAggregatesFilter<"sheets">
    marker_bl_center?: JsonWithAggregatesFilter<"sheets">
    marker_br_center?: JsonWithAggregatesFilter<"sheets">
    predict_ans_detail?: JsonNullableWithAggregatesFilter<"sheets">
    predict_ans_result?: JsonNullableWithAggregatesFilter<"sheets">
    predict_std_fill_detail?: JsonNullableWithAggregatesFilter<"sheets">
    predict_std_fill_result?: JsonNullableWithAggregatesFilter<"sheets">
    created_at?: DateTimeWithAggregatesFilter<"sheets"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"sheets"> | Date | string
  }

  export type cross_typesWhereInput = {
    AND?: cross_typesWhereInput | cross_typesWhereInput[]
    OR?: cross_typesWhereInput[]
    NOT?: cross_typesWhereInput | cross_typesWhereInput[]
    id?: IntFilter<"cross_types"> | number
    name?: StringFilter<"cross_types"> | string
    detail?: StringFilter<"cross_types"> | string
  }

  export type cross_typesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type cross_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: cross_typesWhereInput | cross_typesWhereInput[]
    OR?: cross_typesWhereInput[]
    NOT?: cross_typesWhereInput | cross_typesWhereInput[]
    detail?: StringFilter<"cross_types"> | string
  }, "id" | "name">

  export type cross_typesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    _count?: cross_typesCountOrderByAggregateInput
    _avg?: cross_typesAvgOrderByAggregateInput
    _max?: cross_typesMaxOrderByAggregateInput
    _min?: cross_typesMinOrderByAggregateInput
    _sum?: cross_typesSumOrderByAggregateInput
  }

  export type cross_typesScalarWhereWithAggregatesInput = {
    AND?: cross_typesScalarWhereWithAggregatesInput | cross_typesScalarWhereWithAggregatesInput[]
    OR?: cross_typesScalarWhereWithAggregatesInput[]
    NOT?: cross_typesScalarWhereWithAggregatesInput | cross_typesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cross_types"> | number
    name?: StringWithAggregatesFilter<"cross_types"> | string
    detail?: StringWithAggregatesFilter<"cross_types"> | string
  }

  export type rolesCreateInput = {
    id: number
    name: string
    detail: string
    users?: usersCreateNestedManyWithoutRoleInput
  }

  export type rolesUncheckedCreateInput = {
    id: number
    name: string
    detail: string
    users?: usersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type rolesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type rolesCreateManyInput = {
    id: number
    name: string
    detail: string
  }

  export type rolesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    answers?: answersCreateNestedManyWithoutOwnerInput
    groups?: groupsCreateNestedManyWithoutOwnerInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    role_id: number
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    answers?: answersUncheckedCreateNestedManyWithoutOwnerInput
    groups?: groupsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    answers?: answersUpdateManyWithoutOwnerNestedInput
    groups?: groupsUpdateManyWithoutOwnerNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: answersUncheckedUpdateManyWithoutOwnerNestedInput
    groups?: groupsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    role_id: number
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type region_typesCreateInput = {
    id: number
    name: string
    detail: string
    regions?: regionsCreateNestedManyWithoutRegion_typeInput
  }

  export type region_typesUncheckedCreateInput = {
    id: number
    name: string
    detail: string
    regions?: regionsUncheckedCreateNestedManyWithoutRegion_typeInput
  }

  export type region_typesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    regions?: regionsUpdateManyWithoutRegion_typeNestedInput
  }

  export type region_typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    regions?: regionsUncheckedUpdateManyWithoutRegion_typeNestedInput
  }

  export type region_typesCreateManyInput = {
    id: number
    name: string
    detail: string
  }

  export type region_typesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type region_typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type regionsCreateInput = {
    id: number
    name: string
    detail: string
    region_type: region_typesCreateNestedOneWithoutRegionsInput
    template_regions?: template_regionsCreateNestedManyWithoutRegionInput
  }

  export type regionsUncheckedCreateInput = {
    id: number
    name: string
    detail: string
    region_type_id: number
    template_regions?: template_regionsUncheckedCreateNestedManyWithoutRegionInput
  }

  export type regionsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    region_type?: region_typesUpdateOneRequiredWithoutRegionsNestedInput
    template_regions?: template_regionsUpdateManyWithoutRegionNestedInput
  }

  export type regionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    region_type_id?: IntFieldUpdateOperationsInput | number
    template_regions?: template_regionsUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type regionsCreateManyInput = {
    id: number
    name: string
    detail: string
    region_type_id: number
  }

  export type regionsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type regionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    region_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type templatesCreateInput = {
    id?: string
    name: string
    image_filename: string
    pdf_filename: string
    total_no: number
    created_at?: Date | string
    updated_at?: Date | string
    template_regions?: template_regionsCreateNestedManyWithoutTemplateInput
    groups?: groupsCreateNestedManyWithoutTemplateInput
  }

  export type templatesUncheckedCreateInput = {
    id?: string
    name: string
    image_filename: string
    pdf_filename: string
    total_no: number
    created_at?: Date | string
    updated_at?: Date | string
    template_regions?: template_regionsUncheckedCreateNestedManyWithoutTemplateInput
    groups?: groupsUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type templatesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    pdf_filename?: StringFieldUpdateOperationsInput | string
    total_no?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    template_regions?: template_regionsUpdateManyWithoutTemplateNestedInput
    groups?: groupsUpdateManyWithoutTemplateNestedInput
  }

  export type templatesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    pdf_filename?: StringFieldUpdateOperationsInput | string
    total_no?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    template_regions?: template_regionsUncheckedUpdateManyWithoutTemplateNestedInput
    groups?: groupsUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type templatesCreateManyInput = {
    id?: string
    name: string
    image_filename: string
    pdf_filename: string
    total_no: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type templatesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    pdf_filename?: StringFieldUpdateOperationsInput | string
    total_no?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type templatesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    pdf_filename?: StringFieldUpdateOperationsInput | string
    total_no?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type template_regionsCreateInput = {
    sx: number
    sy: number
    ex: number
    ey: number
    template: templatesCreateNestedOneWithoutTemplate_regionsInput
    region: regionsCreateNestedOneWithoutTemplate_regionsInput
    template_marker_centers?: template_marker_centersCreateNestedManyWithoutTemplate_regionInput
  }

  export type template_regionsUncheckedCreateInput = {
    id?: number
    template_id: string
    region_id: number
    sx: number
    sy: number
    ex: number
    ey: number
    template_marker_centers?: template_marker_centersUncheckedCreateNestedManyWithoutTemplate_regionInput
  }

  export type template_regionsUpdateInput = {
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
    template?: templatesUpdateOneRequiredWithoutTemplate_regionsNestedInput
    region?: regionsUpdateOneRequiredWithoutTemplate_regionsNestedInput
    template_marker_centers?: template_marker_centersUpdateManyWithoutTemplate_regionNestedInput
  }

  export type template_regionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: StringFieldUpdateOperationsInput | string
    region_id?: IntFieldUpdateOperationsInput | number
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
    template_marker_centers?: template_marker_centersUncheckedUpdateManyWithoutTemplate_regionNestedInput
  }

  export type template_regionsCreateManyInput = {
    id?: number
    template_id: string
    region_id: number
    sx: number
    sy: number
    ex: number
    ey: number
  }

  export type template_regionsUpdateManyMutationInput = {
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
  }

  export type template_regionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: StringFieldUpdateOperationsInput | string
    region_id?: IntFieldUpdateOperationsInput | number
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
  }

  export type template_marker_centersCreateInput = {
    x: number
    y: number
    template_region: template_regionsCreateNestedOneWithoutTemplate_marker_centersInput
  }

  export type template_marker_centersUncheckedCreateInput = {
    template_region_id: number
    x: number
    y: number
  }

  export type template_marker_centersUpdateInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    template_region?: template_regionsUpdateOneRequiredWithoutTemplate_marker_centersNestedInput
  }

  export type template_marker_centersUncheckedUpdateInput = {
    template_region_id?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type template_marker_centersCreateManyInput = {
    template_region_id: number
    x: number
    y: number
  }

  export type template_marker_centersUpdateManyMutationInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type template_marker_centersUncheckedUpdateManyInput = {
    template_region_id?: IntFieldUpdateOperationsInput | number
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type answersCreateInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutAnswersInput
    answer_details?: answer_detailsCreateNestedManyWithoutAnswerInput
    groups?: groupsCreateNestedManyWithoutAnswerInput
  }

  export type answersUncheckedCreateInput = {
    id?: string
    name: string
    owner_id: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    answer_details?: answer_detailsUncheckedCreateNestedManyWithoutAnswerInput
    groups?: groupsUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type answersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutAnswersNestedInput
    answer_details?: answer_detailsUpdateManyWithoutAnswerNestedInput
    groups?: groupsUpdateManyWithoutAnswerNestedInput
  }

  export type answersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer_details?: answer_detailsUncheckedUpdateManyWithoutAnswerNestedInput
    groups?: groupsUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type answersCreateManyInput = {
    id?: string
    name: string
    owner_id: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type answersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type answersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type answer_detailsCreateInput = {
    no: number
    point: number
    correct_all?: boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
    answer: answersCreateNestedOneWithoutAnswer_detailsInput
  }

  export type answer_detailsUncheckedCreateInput = {
    id?: number
    answer_id: string
    no: number
    point: number
    correct_all?: boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type answer_detailsUpdateInput = {
    no?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    correct_all?: BoolFieldUpdateOperationsInput | boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
    answer?: answersUpdateOneRequiredWithoutAnswer_detailsNestedInput
  }

  export type answer_detailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer_id?: StringFieldUpdateOperationsInput | string
    no?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    correct_all?: BoolFieldUpdateOperationsInput | boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type answer_detailsCreateManyInput = {
    id?: number
    answer_id: string
    no: number
    point: number
    correct_all?: boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type answer_detailsUpdateManyMutationInput = {
    no?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    correct_all?: BoolFieldUpdateOperationsInput | boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type answer_detailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    answer_id?: StringFieldUpdateOperationsInput | string
    no?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    correct_all?: BoolFieldUpdateOperationsInput | boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type groupsCreateInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutGroupsInput
    template: templatesCreateNestedOneWithoutGroupsInput
    answer: answersCreateNestedOneWithoutGroupsInput
    sheets?: sheetsCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    owner_id: string
    template_id: string
    answer_id: string
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sheets?: sheetsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutGroupsNestedInput
    template?: templatesUpdateOneRequiredWithoutGroupsNestedInput
    answer?: answersUpdateOneRequiredWithoutGroupsNestedInput
    sheets?: sheetsUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    owner_id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sheets?: sheetsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type groupsCreateManyInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    owner_id: string
    template_id: string
    answer_id: string
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type groupsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    owner_id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheet_statusesCreateInput = {
    id: number
    name: string
    detail: string
    sheets?: sheetsCreateNestedManyWithoutSheet_statusInput
  }

  export type sheet_statusesUncheckedCreateInput = {
    id: number
    name: string
    detail: string
    sheets?: sheetsUncheckedCreateNestedManyWithoutSheet_statusInput
  }

  export type sheet_statusesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    sheets?: sheetsUpdateManyWithoutSheet_statusNestedInput
  }

  export type sheet_statusesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    sheets?: sheetsUncheckedUpdateManyWithoutSheet_statusNestedInput
  }

  export type sheet_statusesCreateManyInput = {
    id: number
    name: string
    detail: string
  }

  export type sheet_statusesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type sheet_statusesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type sheetsCreateInput = {
    id?: string
    original_name: string
    image_filename: string
    total_scores?: number | null
    process_id?: string | null
    marker_tl_center: JsonNullValueInput | InputJsonValue
    marker_tr_center: JsonNullValueInput | InputJsonValue
    marker_bl_center: JsonNullValueInput | InputJsonValue
    marker_br_center: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    group: groupsCreateNestedOneWithoutSheetsInput
    sheet_status?: sheet_statusesCreateNestedOneWithoutSheetsInput
  }

  export type sheetsUncheckedCreateInput = {
    id?: string
    original_name: string
    image_filename: string
    group_id: string
    total_scores?: number | null
    sheet_status_id?: number
    process_id?: string | null
    marker_tl_center: JsonNullValueInput | InputJsonValue
    marker_tr_center: JsonNullValueInput | InputJsonValue
    marker_bl_center: JsonNullValueInput | InputJsonValue
    marker_br_center: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type sheetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutSheetsNestedInput
    sheet_status?: sheet_statusesUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type sheetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    sheet_status_id?: IntFieldUpdateOperationsInput | number
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsCreateManyInput = {
    id?: string
    original_name: string
    image_filename: string
    group_id: string
    total_scores?: number | null
    sheet_status_id?: number
    process_id?: string | null
    marker_tl_center: JsonNullValueInput | InputJsonValue
    marker_tr_center: JsonNullValueInput | InputJsonValue
    marker_bl_center: JsonNullValueInput | InputJsonValue
    marker_br_center: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type sheetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    sheet_status_id?: IntFieldUpdateOperationsInput | number
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cross_typesCreateInput = {
    id: number
    name: string
    detail: string
  }

  export type cross_typesUncheckedCreateInput = {
    id: number
    name: string
    detail: string
  }

  export type cross_typesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type cross_typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type cross_typesCreateManyInput = {
    id: number
    name: string
    detail: string
  }

  export type cross_typesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type cross_typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type AnswersListRelationFilter = {
    every?: answersWhereInput
    some?: answersWhereInput
    none?: answersWhereInput
  }

  export type GroupsListRelationFilter = {
    every?: groupsWhereInput
    some?: groupsWhereInput
    none?: groupsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type answersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role_id?: SortOrder
    email?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role_id?: SortOrder
    email?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    role_id?: SortOrder
    email?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RegionsListRelationFilter = {
    every?: regionsWhereInput
    some?: regionsWhereInput
    none?: regionsWhereInput
  }

  export type regionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type region_typesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type region_typesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type region_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type region_typesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type region_typesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Region_typesScalarRelationFilter = {
    is?: region_typesWhereInput
    isNot?: region_typesWhereInput
  }

  export type Template_regionsListRelationFilter = {
    every?: template_regionsWhereInput
    some?: template_regionsWhereInput
    none?: template_regionsWhereInput
  }

  export type template_regionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type regionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    region_type_id?: SortOrder
  }

  export type regionsAvgOrderByAggregateInput = {
    id?: SortOrder
    region_type_id?: SortOrder
  }

  export type regionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    region_type_id?: SortOrder
  }

  export type regionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    region_type_id?: SortOrder
  }

  export type regionsSumOrderByAggregateInput = {
    id?: SortOrder
    region_type_id?: SortOrder
  }

  export type templatesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_filename?: SortOrder
    pdf_filename?: SortOrder
    total_no?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type templatesAvgOrderByAggregateInput = {
    total_no?: SortOrder
  }

  export type templatesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_filename?: SortOrder
    pdf_filename?: SortOrder
    total_no?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type templatesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image_filename?: SortOrder
    pdf_filename?: SortOrder
    total_no?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type templatesSumOrderByAggregateInput = {
    total_no?: SortOrder
  }

  export type TemplatesScalarRelationFilter = {
    is?: templatesWhereInput
    isNot?: templatesWhereInput
  }

  export type RegionsScalarRelationFilter = {
    is?: regionsWhereInput
    isNot?: regionsWhereInput
  }

  export type Template_marker_centersListRelationFilter = {
    every?: template_marker_centersWhereInput
    some?: template_marker_centersWhereInput
    none?: template_marker_centersWhereInput
  }

  export type template_marker_centersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type template_regionsTemplate_idRegion_idCompoundUniqueInput = {
    template_id: string
    region_id: number
  }

  export type template_regionsCountOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    region_id?: SortOrder
    sx?: SortOrder
    sy?: SortOrder
    ex?: SortOrder
    ey?: SortOrder
  }

  export type template_regionsAvgOrderByAggregateInput = {
    id?: SortOrder
    region_id?: SortOrder
    sx?: SortOrder
    sy?: SortOrder
    ex?: SortOrder
    ey?: SortOrder
  }

  export type template_regionsMaxOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    region_id?: SortOrder
    sx?: SortOrder
    sy?: SortOrder
    ex?: SortOrder
    ey?: SortOrder
  }

  export type template_regionsMinOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    region_id?: SortOrder
    sx?: SortOrder
    sy?: SortOrder
    ex?: SortOrder
    ey?: SortOrder
  }

  export type template_regionsSumOrderByAggregateInput = {
    id?: SortOrder
    region_id?: SortOrder
    sx?: SortOrder
    sy?: SortOrder
    ex?: SortOrder
    ey?: SortOrder
  }

  export type Template_regionsScalarRelationFilter = {
    is?: template_regionsWhereInput
    isNot?: template_regionsWhereInput
  }

  export type template_marker_centersCountOrderByAggregateInput = {
    template_region_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type template_marker_centersAvgOrderByAggregateInput = {
    template_region_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type template_marker_centersMaxOrderByAggregateInput = {
    template_region_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type template_marker_centersMinOrderByAggregateInput = {
    template_region_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type template_marker_centersSumOrderByAggregateInput = {
    template_region_id?: SortOrder
    x?: SortOrder
    y?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type Answer_detailsListRelationFilter = {
    every?: answer_detailsWhereInput
    some?: answer_detailsWhereInput
    none?: answer_detailsWhereInput
  }

  export type answer_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type answersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner_id?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    total_no?: SortOrder
    shared?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type answersAvgOrderByAggregateInput = {
    year?: SortOrder
    term?: SortOrder
    total_no?: SortOrder
  }

  export type answersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner_id?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    total_no?: SortOrder
    shared?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type answersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    owner_id?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    total_no?: SortOrder
    shared?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type answersSumOrderByAggregateInput = {
    year?: SortOrder
    term?: SortOrder
    total_no?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnswersScalarRelationFilter = {
    is?: answersWhereInput
    isNot?: answersWhereInput
  }

  export type answer_detailsAnswer_idNoCompoundUniqueInput = {
    answer_id: string
    no: number
  }

  export type answer_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    answer_id?: SortOrder
    no?: SortOrder
    point?: SortOrder
    correct_all?: SortOrder
    choice_correct?: SortOrder
  }

  export type answer_detailsAvgOrderByAggregateInput = {
    id?: SortOrder
    no?: SortOrder
    point?: SortOrder
  }

  export type answer_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    answer_id?: SortOrder
    no?: SortOrder
    point?: SortOrder
    correct_all?: SortOrder
  }

  export type answer_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    answer_id?: SortOrder
    no?: SortOrder
    point?: SortOrder
    correct_all?: SortOrder
  }

  export type answer_detailsSumOrderByAggregateInput = {
    id?: SortOrder
    no?: SortOrder
    point?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SheetsListRelationFilter = {
    every?: sheetsWhereInput
    some?: sheetsWhereInput
    none?: sheetsWhereInput
  }

  export type sheetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    owner_id?: SortOrder
    template_id?: SortOrder
    answer_id?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type groupsAvgOrderByAggregateInput = {
    year?: SortOrder
    term?: SortOrder
  }

  export type groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    owner_id?: SortOrder
    template_id?: SortOrder
    answer_id?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type groupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    year?: SortOrder
    term?: SortOrder
    owner_id?: SortOrder
    template_id?: SortOrder
    answer_id?: SortOrder
    disable?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type groupsSumOrderByAggregateInput = {
    year?: SortOrder
    term?: SortOrder
  }

  export type sheet_statusesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type sheet_statusesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sheet_statusesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type sheet_statusesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type sheet_statusesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GroupsScalarRelationFilter = {
    is?: groupsWhereInput
    isNot?: groupsWhereInput
  }

  export type Sheet_statusesScalarRelationFilter = {
    is?: sheet_statusesWhereInput
    isNot?: sheet_statusesWhereInput
  }

  export type sheetsCountOrderByAggregateInput = {
    id?: SortOrder
    original_name?: SortOrder
    image_filename?: SortOrder
    group_id?: SortOrder
    total_scores?: SortOrder
    sheet_status_id?: SortOrder
    process_id?: SortOrder
    marker_tl_center?: SortOrder
    marker_tr_center?: SortOrder
    marker_bl_center?: SortOrder
    marker_br_center?: SortOrder
    predict_ans_detail?: SortOrder
    predict_ans_result?: SortOrder
    predict_std_fill_detail?: SortOrder
    predict_std_fill_result?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type sheetsAvgOrderByAggregateInput = {
    total_scores?: SortOrder
    sheet_status_id?: SortOrder
  }

  export type sheetsMaxOrderByAggregateInput = {
    id?: SortOrder
    original_name?: SortOrder
    image_filename?: SortOrder
    group_id?: SortOrder
    total_scores?: SortOrder
    sheet_status_id?: SortOrder
    process_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type sheetsMinOrderByAggregateInput = {
    id?: SortOrder
    original_name?: SortOrder
    image_filename?: SortOrder
    group_id?: SortOrder
    total_scores?: SortOrder
    sheet_status_id?: SortOrder
    process_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type sheetsSumOrderByAggregateInput = {
    total_scores?: SortOrder
    sheet_status_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type cross_typesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type cross_typesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cross_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type cross_typesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
  }

  export type cross_typesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedManyWithoutRoleInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRoleInput | usersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRoleInput | usersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRoleInput | usersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput> | usersCreateWithoutRoleInput[] | usersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRoleInput | usersCreateOrConnectWithoutRoleInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRoleInput | usersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: usersCreateManyRoleInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRoleInput | usersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRoleInput | usersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type answersCreateNestedManyWithoutOwnerInput = {
    create?: XOR<answersCreateWithoutOwnerInput, answersUncheckedCreateWithoutOwnerInput> | answersCreateWithoutOwnerInput[] | answersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: answersCreateOrConnectWithoutOwnerInput | answersCreateOrConnectWithoutOwnerInput[]
    createMany?: answersCreateManyOwnerInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type groupsCreateNestedManyWithoutOwnerInput = {
    create?: XOR<groupsCreateWithoutOwnerInput, groupsUncheckedCreateWithoutOwnerInput> | groupsCreateWithoutOwnerInput[] | groupsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutOwnerInput | groupsCreateOrConnectWithoutOwnerInput[]
    createMany?: groupsCreateManyOwnerInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type answersUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<answersCreateWithoutOwnerInput, answersUncheckedCreateWithoutOwnerInput> | answersCreateWithoutOwnerInput[] | answersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: answersCreateOrConnectWithoutOwnerInput | answersCreateOrConnectWithoutOwnerInput[]
    createMany?: answersCreateManyOwnerInputEnvelope
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
  }

  export type groupsUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<groupsCreateWithoutOwnerInput, groupsUncheckedCreateWithoutOwnerInput> | groupsCreateWithoutOwnerInput[] | groupsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutOwnerInput | groupsCreateOrConnectWithoutOwnerInput[]
    createMany?: groupsCreateManyOwnerInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type rolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type answersUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<answersCreateWithoutOwnerInput, answersUncheckedCreateWithoutOwnerInput> | answersCreateWithoutOwnerInput[] | answersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: answersCreateOrConnectWithoutOwnerInput | answersCreateOrConnectWithoutOwnerInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutOwnerInput | answersUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: answersCreateManyOwnerInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutOwnerInput | answersUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: answersUpdateManyWithWhereWithoutOwnerInput | answersUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type groupsUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<groupsCreateWithoutOwnerInput, groupsUncheckedCreateWithoutOwnerInput> | groupsCreateWithoutOwnerInput[] | groupsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutOwnerInput | groupsCreateOrConnectWithoutOwnerInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutOwnerInput | groupsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: groupsCreateManyOwnerInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutOwnerInput | groupsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutOwnerInput | groupsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type answersUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<answersCreateWithoutOwnerInput, answersUncheckedCreateWithoutOwnerInput> | answersCreateWithoutOwnerInput[] | answersUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: answersCreateOrConnectWithoutOwnerInput | answersCreateOrConnectWithoutOwnerInput[]
    upsert?: answersUpsertWithWhereUniqueWithoutOwnerInput | answersUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: answersCreateManyOwnerInputEnvelope
    set?: answersWhereUniqueInput | answersWhereUniqueInput[]
    disconnect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    delete?: answersWhereUniqueInput | answersWhereUniqueInput[]
    connect?: answersWhereUniqueInput | answersWhereUniqueInput[]
    update?: answersUpdateWithWhereUniqueWithoutOwnerInput | answersUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: answersUpdateManyWithWhereWithoutOwnerInput | answersUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: answersScalarWhereInput | answersScalarWhereInput[]
  }

  export type groupsUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<groupsCreateWithoutOwnerInput, groupsUncheckedCreateWithoutOwnerInput> | groupsCreateWithoutOwnerInput[] | groupsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutOwnerInput | groupsCreateOrConnectWithoutOwnerInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutOwnerInput | groupsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: groupsCreateManyOwnerInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutOwnerInput | groupsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutOwnerInput | groupsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type regionsCreateNestedManyWithoutRegion_typeInput = {
    create?: XOR<regionsCreateWithoutRegion_typeInput, regionsUncheckedCreateWithoutRegion_typeInput> | regionsCreateWithoutRegion_typeInput[] | regionsUncheckedCreateWithoutRegion_typeInput[]
    connectOrCreate?: regionsCreateOrConnectWithoutRegion_typeInput | regionsCreateOrConnectWithoutRegion_typeInput[]
    createMany?: regionsCreateManyRegion_typeInputEnvelope
    connect?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
  }

  export type regionsUncheckedCreateNestedManyWithoutRegion_typeInput = {
    create?: XOR<regionsCreateWithoutRegion_typeInput, regionsUncheckedCreateWithoutRegion_typeInput> | regionsCreateWithoutRegion_typeInput[] | regionsUncheckedCreateWithoutRegion_typeInput[]
    connectOrCreate?: regionsCreateOrConnectWithoutRegion_typeInput | regionsCreateOrConnectWithoutRegion_typeInput[]
    createMany?: regionsCreateManyRegion_typeInputEnvelope
    connect?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
  }

  export type regionsUpdateManyWithoutRegion_typeNestedInput = {
    create?: XOR<regionsCreateWithoutRegion_typeInput, regionsUncheckedCreateWithoutRegion_typeInput> | regionsCreateWithoutRegion_typeInput[] | regionsUncheckedCreateWithoutRegion_typeInput[]
    connectOrCreate?: regionsCreateOrConnectWithoutRegion_typeInput | regionsCreateOrConnectWithoutRegion_typeInput[]
    upsert?: regionsUpsertWithWhereUniqueWithoutRegion_typeInput | regionsUpsertWithWhereUniqueWithoutRegion_typeInput[]
    createMany?: regionsCreateManyRegion_typeInputEnvelope
    set?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
    disconnect?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
    delete?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
    connect?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
    update?: regionsUpdateWithWhereUniqueWithoutRegion_typeInput | regionsUpdateWithWhereUniqueWithoutRegion_typeInput[]
    updateMany?: regionsUpdateManyWithWhereWithoutRegion_typeInput | regionsUpdateManyWithWhereWithoutRegion_typeInput[]
    deleteMany?: regionsScalarWhereInput | regionsScalarWhereInput[]
  }

  export type regionsUncheckedUpdateManyWithoutRegion_typeNestedInput = {
    create?: XOR<regionsCreateWithoutRegion_typeInput, regionsUncheckedCreateWithoutRegion_typeInput> | regionsCreateWithoutRegion_typeInput[] | regionsUncheckedCreateWithoutRegion_typeInput[]
    connectOrCreate?: regionsCreateOrConnectWithoutRegion_typeInput | regionsCreateOrConnectWithoutRegion_typeInput[]
    upsert?: regionsUpsertWithWhereUniqueWithoutRegion_typeInput | regionsUpsertWithWhereUniqueWithoutRegion_typeInput[]
    createMany?: regionsCreateManyRegion_typeInputEnvelope
    set?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
    disconnect?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
    delete?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
    connect?: regionsWhereUniqueInput | regionsWhereUniqueInput[]
    update?: regionsUpdateWithWhereUniqueWithoutRegion_typeInput | regionsUpdateWithWhereUniqueWithoutRegion_typeInput[]
    updateMany?: regionsUpdateManyWithWhereWithoutRegion_typeInput | regionsUpdateManyWithWhereWithoutRegion_typeInput[]
    deleteMany?: regionsScalarWhereInput | regionsScalarWhereInput[]
  }

  export type region_typesCreateNestedOneWithoutRegionsInput = {
    create?: XOR<region_typesCreateWithoutRegionsInput, region_typesUncheckedCreateWithoutRegionsInput>
    connectOrCreate?: region_typesCreateOrConnectWithoutRegionsInput
    connect?: region_typesWhereUniqueInput
  }

  export type template_regionsCreateNestedManyWithoutRegionInput = {
    create?: XOR<template_regionsCreateWithoutRegionInput, template_regionsUncheckedCreateWithoutRegionInput> | template_regionsCreateWithoutRegionInput[] | template_regionsUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: template_regionsCreateOrConnectWithoutRegionInput | template_regionsCreateOrConnectWithoutRegionInput[]
    createMany?: template_regionsCreateManyRegionInputEnvelope
    connect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
  }

  export type template_regionsUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<template_regionsCreateWithoutRegionInput, template_regionsUncheckedCreateWithoutRegionInput> | template_regionsCreateWithoutRegionInput[] | template_regionsUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: template_regionsCreateOrConnectWithoutRegionInput | template_regionsCreateOrConnectWithoutRegionInput[]
    createMany?: template_regionsCreateManyRegionInputEnvelope
    connect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
  }

  export type region_typesUpdateOneRequiredWithoutRegionsNestedInput = {
    create?: XOR<region_typesCreateWithoutRegionsInput, region_typesUncheckedCreateWithoutRegionsInput>
    connectOrCreate?: region_typesCreateOrConnectWithoutRegionsInput
    upsert?: region_typesUpsertWithoutRegionsInput
    connect?: region_typesWhereUniqueInput
    update?: XOR<XOR<region_typesUpdateToOneWithWhereWithoutRegionsInput, region_typesUpdateWithoutRegionsInput>, region_typesUncheckedUpdateWithoutRegionsInput>
  }

  export type template_regionsUpdateManyWithoutRegionNestedInput = {
    create?: XOR<template_regionsCreateWithoutRegionInput, template_regionsUncheckedCreateWithoutRegionInput> | template_regionsCreateWithoutRegionInput[] | template_regionsUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: template_regionsCreateOrConnectWithoutRegionInput | template_regionsCreateOrConnectWithoutRegionInput[]
    upsert?: template_regionsUpsertWithWhereUniqueWithoutRegionInput | template_regionsUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: template_regionsCreateManyRegionInputEnvelope
    set?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    disconnect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    delete?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    connect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    update?: template_regionsUpdateWithWhereUniqueWithoutRegionInput | template_regionsUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: template_regionsUpdateManyWithWhereWithoutRegionInput | template_regionsUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: template_regionsScalarWhereInput | template_regionsScalarWhereInput[]
  }

  export type template_regionsUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<template_regionsCreateWithoutRegionInput, template_regionsUncheckedCreateWithoutRegionInput> | template_regionsCreateWithoutRegionInput[] | template_regionsUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: template_regionsCreateOrConnectWithoutRegionInput | template_regionsCreateOrConnectWithoutRegionInput[]
    upsert?: template_regionsUpsertWithWhereUniqueWithoutRegionInput | template_regionsUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: template_regionsCreateManyRegionInputEnvelope
    set?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    disconnect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    delete?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    connect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    update?: template_regionsUpdateWithWhereUniqueWithoutRegionInput | template_regionsUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: template_regionsUpdateManyWithWhereWithoutRegionInput | template_regionsUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: template_regionsScalarWhereInput | template_regionsScalarWhereInput[]
  }

  export type template_regionsCreateNestedManyWithoutTemplateInput = {
    create?: XOR<template_regionsCreateWithoutTemplateInput, template_regionsUncheckedCreateWithoutTemplateInput> | template_regionsCreateWithoutTemplateInput[] | template_regionsUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: template_regionsCreateOrConnectWithoutTemplateInput | template_regionsCreateOrConnectWithoutTemplateInput[]
    createMany?: template_regionsCreateManyTemplateInputEnvelope
    connect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
  }

  export type groupsCreateNestedManyWithoutTemplateInput = {
    create?: XOR<groupsCreateWithoutTemplateInput, groupsUncheckedCreateWithoutTemplateInput> | groupsCreateWithoutTemplateInput[] | groupsUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutTemplateInput | groupsCreateOrConnectWithoutTemplateInput[]
    createMany?: groupsCreateManyTemplateInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type template_regionsUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<template_regionsCreateWithoutTemplateInput, template_regionsUncheckedCreateWithoutTemplateInput> | template_regionsCreateWithoutTemplateInput[] | template_regionsUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: template_regionsCreateOrConnectWithoutTemplateInput | template_regionsCreateOrConnectWithoutTemplateInput[]
    createMany?: template_regionsCreateManyTemplateInputEnvelope
    connect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
  }

  export type groupsUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<groupsCreateWithoutTemplateInput, groupsUncheckedCreateWithoutTemplateInput> | groupsCreateWithoutTemplateInput[] | groupsUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutTemplateInput | groupsCreateOrConnectWithoutTemplateInput[]
    createMany?: groupsCreateManyTemplateInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type template_regionsUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<template_regionsCreateWithoutTemplateInput, template_regionsUncheckedCreateWithoutTemplateInput> | template_regionsCreateWithoutTemplateInput[] | template_regionsUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: template_regionsCreateOrConnectWithoutTemplateInput | template_regionsCreateOrConnectWithoutTemplateInput[]
    upsert?: template_regionsUpsertWithWhereUniqueWithoutTemplateInput | template_regionsUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: template_regionsCreateManyTemplateInputEnvelope
    set?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    disconnect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    delete?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    connect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    update?: template_regionsUpdateWithWhereUniqueWithoutTemplateInput | template_regionsUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: template_regionsUpdateManyWithWhereWithoutTemplateInput | template_regionsUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: template_regionsScalarWhereInput | template_regionsScalarWhereInput[]
  }

  export type groupsUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<groupsCreateWithoutTemplateInput, groupsUncheckedCreateWithoutTemplateInput> | groupsCreateWithoutTemplateInput[] | groupsUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutTemplateInput | groupsCreateOrConnectWithoutTemplateInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutTemplateInput | groupsUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: groupsCreateManyTemplateInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutTemplateInput | groupsUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutTemplateInput | groupsUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type template_regionsUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<template_regionsCreateWithoutTemplateInput, template_regionsUncheckedCreateWithoutTemplateInput> | template_regionsCreateWithoutTemplateInput[] | template_regionsUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: template_regionsCreateOrConnectWithoutTemplateInput | template_regionsCreateOrConnectWithoutTemplateInput[]
    upsert?: template_regionsUpsertWithWhereUniqueWithoutTemplateInput | template_regionsUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: template_regionsCreateManyTemplateInputEnvelope
    set?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    disconnect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    delete?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    connect?: template_regionsWhereUniqueInput | template_regionsWhereUniqueInput[]
    update?: template_regionsUpdateWithWhereUniqueWithoutTemplateInput | template_regionsUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: template_regionsUpdateManyWithWhereWithoutTemplateInput | template_regionsUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: template_regionsScalarWhereInput | template_regionsScalarWhereInput[]
  }

  export type groupsUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<groupsCreateWithoutTemplateInput, groupsUncheckedCreateWithoutTemplateInput> | groupsCreateWithoutTemplateInput[] | groupsUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutTemplateInput | groupsCreateOrConnectWithoutTemplateInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutTemplateInput | groupsUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: groupsCreateManyTemplateInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutTemplateInput | groupsUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutTemplateInput | groupsUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type templatesCreateNestedOneWithoutTemplate_regionsInput = {
    create?: XOR<templatesCreateWithoutTemplate_regionsInput, templatesUncheckedCreateWithoutTemplate_regionsInput>
    connectOrCreate?: templatesCreateOrConnectWithoutTemplate_regionsInput
    connect?: templatesWhereUniqueInput
  }

  export type regionsCreateNestedOneWithoutTemplate_regionsInput = {
    create?: XOR<regionsCreateWithoutTemplate_regionsInput, regionsUncheckedCreateWithoutTemplate_regionsInput>
    connectOrCreate?: regionsCreateOrConnectWithoutTemplate_regionsInput
    connect?: regionsWhereUniqueInput
  }

  export type template_marker_centersCreateNestedManyWithoutTemplate_regionInput = {
    create?: XOR<template_marker_centersCreateWithoutTemplate_regionInput, template_marker_centersUncheckedCreateWithoutTemplate_regionInput> | template_marker_centersCreateWithoutTemplate_regionInput[] | template_marker_centersUncheckedCreateWithoutTemplate_regionInput[]
    connectOrCreate?: template_marker_centersCreateOrConnectWithoutTemplate_regionInput | template_marker_centersCreateOrConnectWithoutTemplate_regionInput[]
    createMany?: template_marker_centersCreateManyTemplate_regionInputEnvelope
    connect?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
  }

  export type template_marker_centersUncheckedCreateNestedManyWithoutTemplate_regionInput = {
    create?: XOR<template_marker_centersCreateWithoutTemplate_regionInput, template_marker_centersUncheckedCreateWithoutTemplate_regionInput> | template_marker_centersCreateWithoutTemplate_regionInput[] | template_marker_centersUncheckedCreateWithoutTemplate_regionInput[]
    connectOrCreate?: template_marker_centersCreateOrConnectWithoutTemplate_regionInput | template_marker_centersCreateOrConnectWithoutTemplate_regionInput[]
    createMany?: template_marker_centersCreateManyTemplate_regionInputEnvelope
    connect?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
  }

  export type templatesUpdateOneRequiredWithoutTemplate_regionsNestedInput = {
    create?: XOR<templatesCreateWithoutTemplate_regionsInput, templatesUncheckedCreateWithoutTemplate_regionsInput>
    connectOrCreate?: templatesCreateOrConnectWithoutTemplate_regionsInput
    upsert?: templatesUpsertWithoutTemplate_regionsInput
    connect?: templatesWhereUniqueInput
    update?: XOR<XOR<templatesUpdateToOneWithWhereWithoutTemplate_regionsInput, templatesUpdateWithoutTemplate_regionsInput>, templatesUncheckedUpdateWithoutTemplate_regionsInput>
  }

  export type regionsUpdateOneRequiredWithoutTemplate_regionsNestedInput = {
    create?: XOR<regionsCreateWithoutTemplate_regionsInput, regionsUncheckedCreateWithoutTemplate_regionsInput>
    connectOrCreate?: regionsCreateOrConnectWithoutTemplate_regionsInput
    upsert?: regionsUpsertWithoutTemplate_regionsInput
    connect?: regionsWhereUniqueInput
    update?: XOR<XOR<regionsUpdateToOneWithWhereWithoutTemplate_regionsInput, regionsUpdateWithoutTemplate_regionsInput>, regionsUncheckedUpdateWithoutTemplate_regionsInput>
  }

  export type template_marker_centersUpdateManyWithoutTemplate_regionNestedInput = {
    create?: XOR<template_marker_centersCreateWithoutTemplate_regionInput, template_marker_centersUncheckedCreateWithoutTemplate_regionInput> | template_marker_centersCreateWithoutTemplate_regionInput[] | template_marker_centersUncheckedCreateWithoutTemplate_regionInput[]
    connectOrCreate?: template_marker_centersCreateOrConnectWithoutTemplate_regionInput | template_marker_centersCreateOrConnectWithoutTemplate_regionInput[]
    upsert?: template_marker_centersUpsertWithWhereUniqueWithoutTemplate_regionInput | template_marker_centersUpsertWithWhereUniqueWithoutTemplate_regionInput[]
    createMany?: template_marker_centersCreateManyTemplate_regionInputEnvelope
    set?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
    disconnect?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
    delete?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
    connect?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
    update?: template_marker_centersUpdateWithWhereUniqueWithoutTemplate_regionInput | template_marker_centersUpdateWithWhereUniqueWithoutTemplate_regionInput[]
    updateMany?: template_marker_centersUpdateManyWithWhereWithoutTemplate_regionInput | template_marker_centersUpdateManyWithWhereWithoutTemplate_regionInput[]
    deleteMany?: template_marker_centersScalarWhereInput | template_marker_centersScalarWhereInput[]
  }

  export type template_marker_centersUncheckedUpdateManyWithoutTemplate_regionNestedInput = {
    create?: XOR<template_marker_centersCreateWithoutTemplate_regionInput, template_marker_centersUncheckedCreateWithoutTemplate_regionInput> | template_marker_centersCreateWithoutTemplate_regionInput[] | template_marker_centersUncheckedCreateWithoutTemplate_regionInput[]
    connectOrCreate?: template_marker_centersCreateOrConnectWithoutTemplate_regionInput | template_marker_centersCreateOrConnectWithoutTemplate_regionInput[]
    upsert?: template_marker_centersUpsertWithWhereUniqueWithoutTemplate_regionInput | template_marker_centersUpsertWithWhereUniqueWithoutTemplate_regionInput[]
    createMany?: template_marker_centersCreateManyTemplate_regionInputEnvelope
    set?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
    disconnect?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
    delete?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
    connect?: template_marker_centersWhereUniqueInput | template_marker_centersWhereUniqueInput[]
    update?: template_marker_centersUpdateWithWhereUniqueWithoutTemplate_regionInput | template_marker_centersUpdateWithWhereUniqueWithoutTemplate_regionInput[]
    updateMany?: template_marker_centersUpdateManyWithWhereWithoutTemplate_regionInput | template_marker_centersUpdateManyWithWhereWithoutTemplate_regionInput[]
    deleteMany?: template_marker_centersScalarWhereInput | template_marker_centersScalarWhereInput[]
  }

  export type template_regionsCreateNestedOneWithoutTemplate_marker_centersInput = {
    create?: XOR<template_regionsCreateWithoutTemplate_marker_centersInput, template_regionsUncheckedCreateWithoutTemplate_marker_centersInput>
    connectOrCreate?: template_regionsCreateOrConnectWithoutTemplate_marker_centersInput
    connect?: template_regionsWhereUniqueInput
  }

  export type template_regionsUpdateOneRequiredWithoutTemplate_marker_centersNestedInput = {
    create?: XOR<template_regionsCreateWithoutTemplate_marker_centersInput, template_regionsUncheckedCreateWithoutTemplate_marker_centersInput>
    connectOrCreate?: template_regionsCreateOrConnectWithoutTemplate_marker_centersInput
    upsert?: template_regionsUpsertWithoutTemplate_marker_centersInput
    connect?: template_regionsWhereUniqueInput
    update?: XOR<XOR<template_regionsUpdateToOneWithWhereWithoutTemplate_marker_centersInput, template_regionsUpdateWithoutTemplate_marker_centersInput>, template_regionsUncheckedUpdateWithoutTemplate_marker_centersInput>
  }

  export type usersCreateNestedOneWithoutAnswersInput = {
    create?: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnswersInput
    connect?: usersWhereUniqueInput
  }

  export type answer_detailsCreateNestedManyWithoutAnswerInput = {
    create?: XOR<answer_detailsCreateWithoutAnswerInput, answer_detailsUncheckedCreateWithoutAnswerInput> | answer_detailsCreateWithoutAnswerInput[] | answer_detailsUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: answer_detailsCreateOrConnectWithoutAnswerInput | answer_detailsCreateOrConnectWithoutAnswerInput[]
    createMany?: answer_detailsCreateManyAnswerInputEnvelope
    connect?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
  }

  export type groupsCreateNestedManyWithoutAnswerInput = {
    create?: XOR<groupsCreateWithoutAnswerInput, groupsUncheckedCreateWithoutAnswerInput> | groupsCreateWithoutAnswerInput[] | groupsUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutAnswerInput | groupsCreateOrConnectWithoutAnswerInput[]
    createMany?: groupsCreateManyAnswerInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type answer_detailsUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<answer_detailsCreateWithoutAnswerInput, answer_detailsUncheckedCreateWithoutAnswerInput> | answer_detailsCreateWithoutAnswerInput[] | answer_detailsUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: answer_detailsCreateOrConnectWithoutAnswerInput | answer_detailsCreateOrConnectWithoutAnswerInput[]
    createMany?: answer_detailsCreateManyAnswerInputEnvelope
    connect?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
  }

  export type groupsUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<groupsCreateWithoutAnswerInput, groupsUncheckedCreateWithoutAnswerInput> | groupsCreateWithoutAnswerInput[] | groupsUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutAnswerInput | groupsCreateOrConnectWithoutAnswerInput[]
    createMany?: groupsCreateManyAnswerInputEnvelope
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: usersCreateOrConnectWithoutAnswersInput
    upsert?: usersUpsertWithoutAnswersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAnswersInput, usersUpdateWithoutAnswersInput>, usersUncheckedUpdateWithoutAnswersInput>
  }

  export type answer_detailsUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<answer_detailsCreateWithoutAnswerInput, answer_detailsUncheckedCreateWithoutAnswerInput> | answer_detailsCreateWithoutAnswerInput[] | answer_detailsUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: answer_detailsCreateOrConnectWithoutAnswerInput | answer_detailsCreateOrConnectWithoutAnswerInput[]
    upsert?: answer_detailsUpsertWithWhereUniqueWithoutAnswerInput | answer_detailsUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: answer_detailsCreateManyAnswerInputEnvelope
    set?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
    disconnect?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
    delete?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
    connect?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
    update?: answer_detailsUpdateWithWhereUniqueWithoutAnswerInput | answer_detailsUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: answer_detailsUpdateManyWithWhereWithoutAnswerInput | answer_detailsUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: answer_detailsScalarWhereInput | answer_detailsScalarWhereInput[]
  }

  export type groupsUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<groupsCreateWithoutAnswerInput, groupsUncheckedCreateWithoutAnswerInput> | groupsCreateWithoutAnswerInput[] | groupsUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutAnswerInput | groupsCreateOrConnectWithoutAnswerInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutAnswerInput | groupsUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: groupsCreateManyAnswerInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutAnswerInput | groupsUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutAnswerInput | groupsUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type answer_detailsUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<answer_detailsCreateWithoutAnswerInput, answer_detailsUncheckedCreateWithoutAnswerInput> | answer_detailsCreateWithoutAnswerInput[] | answer_detailsUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: answer_detailsCreateOrConnectWithoutAnswerInput | answer_detailsCreateOrConnectWithoutAnswerInput[]
    upsert?: answer_detailsUpsertWithWhereUniqueWithoutAnswerInput | answer_detailsUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: answer_detailsCreateManyAnswerInputEnvelope
    set?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
    disconnect?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
    delete?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
    connect?: answer_detailsWhereUniqueInput | answer_detailsWhereUniqueInput[]
    update?: answer_detailsUpdateWithWhereUniqueWithoutAnswerInput | answer_detailsUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: answer_detailsUpdateManyWithWhereWithoutAnswerInput | answer_detailsUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: answer_detailsScalarWhereInput | answer_detailsScalarWhereInput[]
  }

  export type groupsUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<groupsCreateWithoutAnswerInput, groupsUncheckedCreateWithoutAnswerInput> | groupsCreateWithoutAnswerInput[] | groupsUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: groupsCreateOrConnectWithoutAnswerInput | groupsCreateOrConnectWithoutAnswerInput[]
    upsert?: groupsUpsertWithWhereUniqueWithoutAnswerInput | groupsUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: groupsCreateManyAnswerInputEnvelope
    set?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    disconnect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    delete?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    connect?: groupsWhereUniqueInput | groupsWhereUniqueInput[]
    update?: groupsUpdateWithWhereUniqueWithoutAnswerInput | groupsUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: groupsUpdateManyWithWhereWithoutAnswerInput | groupsUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: groupsScalarWhereInput | groupsScalarWhereInput[]
  }

  export type answersCreateNestedOneWithoutAnswer_detailsInput = {
    create?: XOR<answersCreateWithoutAnswer_detailsInput, answersUncheckedCreateWithoutAnswer_detailsInput>
    connectOrCreate?: answersCreateOrConnectWithoutAnswer_detailsInput
    connect?: answersWhereUniqueInput
  }

  export type answersUpdateOneRequiredWithoutAnswer_detailsNestedInput = {
    create?: XOR<answersCreateWithoutAnswer_detailsInput, answersUncheckedCreateWithoutAnswer_detailsInput>
    connectOrCreate?: answersCreateOrConnectWithoutAnswer_detailsInput
    upsert?: answersUpsertWithoutAnswer_detailsInput
    connect?: answersWhereUniqueInput
    update?: XOR<XOR<answersUpdateToOneWithWhereWithoutAnswer_detailsInput, answersUpdateWithoutAnswer_detailsInput>, answersUncheckedUpdateWithoutAnswer_detailsInput>
  }

  export type usersCreateNestedOneWithoutGroupsInput = {
    create?: XOR<usersCreateWithoutGroupsInput, usersUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroupsInput
    connect?: usersWhereUniqueInput
  }

  export type templatesCreateNestedOneWithoutGroupsInput = {
    create?: XOR<templatesCreateWithoutGroupsInput, templatesUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: templatesCreateOrConnectWithoutGroupsInput
    connect?: templatesWhereUniqueInput
  }

  export type answersCreateNestedOneWithoutGroupsInput = {
    create?: XOR<answersCreateWithoutGroupsInput, answersUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: answersCreateOrConnectWithoutGroupsInput
    connect?: answersWhereUniqueInput
  }

  export type sheetsCreateNestedManyWithoutGroupInput = {
    create?: XOR<sheetsCreateWithoutGroupInput, sheetsUncheckedCreateWithoutGroupInput> | sheetsCreateWithoutGroupInput[] | sheetsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutGroupInput | sheetsCreateOrConnectWithoutGroupInput[]
    createMany?: sheetsCreateManyGroupInputEnvelope
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
  }

  export type sheetsUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<sheetsCreateWithoutGroupInput, sheetsUncheckedCreateWithoutGroupInput> | sheetsCreateWithoutGroupInput[] | sheetsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutGroupInput | sheetsCreateOrConnectWithoutGroupInput[]
    createMany?: sheetsCreateManyGroupInputEnvelope
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<usersCreateWithoutGroupsInput, usersUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: usersCreateOrConnectWithoutGroupsInput
    upsert?: usersUpsertWithoutGroupsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutGroupsInput, usersUpdateWithoutGroupsInput>, usersUncheckedUpdateWithoutGroupsInput>
  }

  export type templatesUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<templatesCreateWithoutGroupsInput, templatesUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: templatesCreateOrConnectWithoutGroupsInput
    upsert?: templatesUpsertWithoutGroupsInput
    connect?: templatesWhereUniqueInput
    update?: XOR<XOR<templatesUpdateToOneWithWhereWithoutGroupsInput, templatesUpdateWithoutGroupsInput>, templatesUncheckedUpdateWithoutGroupsInput>
  }

  export type answersUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<answersCreateWithoutGroupsInput, answersUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: answersCreateOrConnectWithoutGroupsInput
    upsert?: answersUpsertWithoutGroupsInput
    connect?: answersWhereUniqueInput
    update?: XOR<XOR<answersUpdateToOneWithWhereWithoutGroupsInput, answersUpdateWithoutGroupsInput>, answersUncheckedUpdateWithoutGroupsInput>
  }

  export type sheetsUpdateManyWithoutGroupNestedInput = {
    create?: XOR<sheetsCreateWithoutGroupInput, sheetsUncheckedCreateWithoutGroupInput> | sheetsCreateWithoutGroupInput[] | sheetsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutGroupInput | sheetsCreateOrConnectWithoutGroupInput[]
    upsert?: sheetsUpsertWithWhereUniqueWithoutGroupInput | sheetsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: sheetsCreateManyGroupInputEnvelope
    set?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    disconnect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    delete?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    update?: sheetsUpdateWithWhereUniqueWithoutGroupInput | sheetsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: sheetsUpdateManyWithWhereWithoutGroupInput | sheetsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
  }

  export type sheetsUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<sheetsCreateWithoutGroupInput, sheetsUncheckedCreateWithoutGroupInput> | sheetsCreateWithoutGroupInput[] | sheetsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutGroupInput | sheetsCreateOrConnectWithoutGroupInput[]
    upsert?: sheetsUpsertWithWhereUniqueWithoutGroupInput | sheetsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: sheetsCreateManyGroupInputEnvelope
    set?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    disconnect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    delete?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    update?: sheetsUpdateWithWhereUniqueWithoutGroupInput | sheetsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: sheetsUpdateManyWithWhereWithoutGroupInput | sheetsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
  }

  export type sheetsCreateNestedManyWithoutSheet_statusInput = {
    create?: XOR<sheetsCreateWithoutSheet_statusInput, sheetsUncheckedCreateWithoutSheet_statusInput> | sheetsCreateWithoutSheet_statusInput[] | sheetsUncheckedCreateWithoutSheet_statusInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutSheet_statusInput | sheetsCreateOrConnectWithoutSheet_statusInput[]
    createMany?: sheetsCreateManySheet_statusInputEnvelope
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
  }

  export type sheetsUncheckedCreateNestedManyWithoutSheet_statusInput = {
    create?: XOR<sheetsCreateWithoutSheet_statusInput, sheetsUncheckedCreateWithoutSheet_statusInput> | sheetsCreateWithoutSheet_statusInput[] | sheetsUncheckedCreateWithoutSheet_statusInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutSheet_statusInput | sheetsCreateOrConnectWithoutSheet_statusInput[]
    createMany?: sheetsCreateManySheet_statusInputEnvelope
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
  }

  export type sheetsUpdateManyWithoutSheet_statusNestedInput = {
    create?: XOR<sheetsCreateWithoutSheet_statusInput, sheetsUncheckedCreateWithoutSheet_statusInput> | sheetsCreateWithoutSheet_statusInput[] | sheetsUncheckedCreateWithoutSheet_statusInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutSheet_statusInput | sheetsCreateOrConnectWithoutSheet_statusInput[]
    upsert?: sheetsUpsertWithWhereUniqueWithoutSheet_statusInput | sheetsUpsertWithWhereUniqueWithoutSheet_statusInput[]
    createMany?: sheetsCreateManySheet_statusInputEnvelope
    set?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    disconnect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    delete?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    update?: sheetsUpdateWithWhereUniqueWithoutSheet_statusInput | sheetsUpdateWithWhereUniqueWithoutSheet_statusInput[]
    updateMany?: sheetsUpdateManyWithWhereWithoutSheet_statusInput | sheetsUpdateManyWithWhereWithoutSheet_statusInput[]
    deleteMany?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
  }

  export type sheetsUncheckedUpdateManyWithoutSheet_statusNestedInput = {
    create?: XOR<sheetsCreateWithoutSheet_statusInput, sheetsUncheckedCreateWithoutSheet_statusInput> | sheetsCreateWithoutSheet_statusInput[] | sheetsUncheckedCreateWithoutSheet_statusInput[]
    connectOrCreate?: sheetsCreateOrConnectWithoutSheet_statusInput | sheetsCreateOrConnectWithoutSheet_statusInput[]
    upsert?: sheetsUpsertWithWhereUniqueWithoutSheet_statusInput | sheetsUpsertWithWhereUniqueWithoutSheet_statusInput[]
    createMany?: sheetsCreateManySheet_statusInputEnvelope
    set?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    disconnect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    delete?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    connect?: sheetsWhereUniqueInput | sheetsWhereUniqueInput[]
    update?: sheetsUpdateWithWhereUniqueWithoutSheet_statusInput | sheetsUpdateWithWhereUniqueWithoutSheet_statusInput[]
    updateMany?: sheetsUpdateManyWithWhereWithoutSheet_statusInput | sheetsUpdateManyWithWhereWithoutSheet_statusInput[]
    deleteMany?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
  }

  export type groupsCreateNestedOneWithoutSheetsInput = {
    create?: XOR<groupsCreateWithoutSheetsInput, groupsUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutSheetsInput
    connect?: groupsWhereUniqueInput
  }

  export type sheet_statusesCreateNestedOneWithoutSheetsInput = {
    create?: XOR<sheet_statusesCreateWithoutSheetsInput, sheet_statusesUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: sheet_statusesCreateOrConnectWithoutSheetsInput
    connect?: sheet_statusesWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type groupsUpdateOneRequiredWithoutSheetsNestedInput = {
    create?: XOR<groupsCreateWithoutSheetsInput, groupsUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutSheetsInput
    upsert?: groupsUpsertWithoutSheetsInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutSheetsInput, groupsUpdateWithoutSheetsInput>, groupsUncheckedUpdateWithoutSheetsInput>
  }

  export type sheet_statusesUpdateOneRequiredWithoutSheetsNestedInput = {
    create?: XOR<sheet_statusesCreateWithoutSheetsInput, sheet_statusesUncheckedCreateWithoutSheetsInput>
    connectOrCreate?: sheet_statusesCreateOrConnectWithoutSheetsInput
    upsert?: sheet_statusesUpsertWithoutSheetsInput
    connect?: sheet_statusesWhereUniqueInput
    update?: XOR<XOR<sheet_statusesUpdateToOneWithWhereWithoutSheetsInput, sheet_statusesUpdateWithoutSheetsInput>, sheet_statusesUncheckedUpdateWithoutSheetsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type usersCreateWithoutRoleInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    answers?: answersCreateNestedManyWithoutOwnerInput
    groups?: groupsCreateNestedManyWithoutOwnerInput
  }

  export type usersUncheckedCreateWithoutRoleInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    answers?: answersUncheckedCreateNestedManyWithoutOwnerInput
    groups?: groupsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type usersCreateOrConnectWithoutRoleInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
  }

  export type usersCreateManyRoleInputEnvelope = {
    data: usersCreateManyRoleInput | usersCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutRoleInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRoleInput, usersUncheckedUpdateWithoutRoleInput>
    create: XOR<usersCreateWithoutRoleInput, usersUncheckedCreateWithoutRoleInput>
  }

  export type usersUpdateWithWhereUniqueWithoutRoleInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRoleInput, usersUncheckedUpdateWithoutRoleInput>
  }

  export type usersUpdateManyWithWhereWithoutRoleInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRoleInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    first_name?: StringFilter<"users"> | string
    last_name?: StringFilter<"users"> | string
    role_id?: IntFilter<"users"> | number
    email?: StringNullableFilter<"users"> | string | null
    disable?: BoolFilter<"users"> | boolean
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type rolesCreateWithoutUsersInput = {
    id: number
    name: string
    detail: string
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id: number
    name: string
    detail: string
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type answersCreateWithoutOwnerInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    answer_details?: answer_detailsCreateNestedManyWithoutAnswerInput
    groups?: groupsCreateNestedManyWithoutAnswerInput
  }

  export type answersUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    answer_details?: answer_detailsUncheckedCreateNestedManyWithoutAnswerInput
    groups?: groupsUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type answersCreateOrConnectWithoutOwnerInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutOwnerInput, answersUncheckedCreateWithoutOwnerInput>
  }

  export type answersCreateManyOwnerInputEnvelope = {
    data: answersCreateManyOwnerInput | answersCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type groupsCreateWithoutOwnerInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    template: templatesCreateNestedOneWithoutGroupsInput
    answer: answersCreateNestedOneWithoutGroupsInput
    sheets?: sheetsCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    template_id: string
    answer_id: string
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sheets?: sheetsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsCreateOrConnectWithoutOwnerInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutOwnerInput, groupsUncheckedCreateWithoutOwnerInput>
  }

  export type groupsCreateManyOwnerInputEnvelope = {
    data: groupsCreateManyOwnerInput | groupsCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type answersUpsertWithWhereUniqueWithoutOwnerInput = {
    where: answersWhereUniqueInput
    update: XOR<answersUpdateWithoutOwnerInput, answersUncheckedUpdateWithoutOwnerInput>
    create: XOR<answersCreateWithoutOwnerInput, answersUncheckedCreateWithoutOwnerInput>
  }

  export type answersUpdateWithWhereUniqueWithoutOwnerInput = {
    where: answersWhereUniqueInput
    data: XOR<answersUpdateWithoutOwnerInput, answersUncheckedUpdateWithoutOwnerInput>
  }

  export type answersUpdateManyWithWhereWithoutOwnerInput = {
    where: answersScalarWhereInput
    data: XOR<answersUpdateManyMutationInput, answersUncheckedUpdateManyWithoutOwnerInput>
  }

  export type answersScalarWhereInput = {
    AND?: answersScalarWhereInput | answersScalarWhereInput[]
    OR?: answersScalarWhereInput[]
    NOT?: answersScalarWhereInput | answersScalarWhereInput[]
    id?: StringFilter<"answers"> | string
    name?: StringFilter<"answers"> | string
    owner_id?: StringFilter<"answers"> | string
    subject?: StringFilter<"answers"> | string
    year?: IntFilter<"answers"> | number
    term?: IntFilter<"answers"> | number
    total_no?: IntFilter<"answers"> | number
    shared?: BoolFilter<"answers"> | boolean
    disable?: BoolFilter<"answers"> | boolean
    created_at?: DateTimeFilter<"answers"> | Date | string
    updated_at?: DateTimeFilter<"answers"> | Date | string
  }

  export type groupsUpsertWithWhereUniqueWithoutOwnerInput = {
    where: groupsWhereUniqueInput
    update: XOR<groupsUpdateWithoutOwnerInput, groupsUncheckedUpdateWithoutOwnerInput>
    create: XOR<groupsCreateWithoutOwnerInput, groupsUncheckedCreateWithoutOwnerInput>
  }

  export type groupsUpdateWithWhereUniqueWithoutOwnerInput = {
    where: groupsWhereUniqueInput
    data: XOR<groupsUpdateWithoutOwnerInput, groupsUncheckedUpdateWithoutOwnerInput>
  }

  export type groupsUpdateManyWithWhereWithoutOwnerInput = {
    where: groupsScalarWhereInput
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyWithoutOwnerInput>
  }

  export type groupsScalarWhereInput = {
    AND?: groupsScalarWhereInput | groupsScalarWhereInput[]
    OR?: groupsScalarWhereInput[]
    NOT?: groupsScalarWhereInput | groupsScalarWhereInput[]
    id?: StringFilter<"groups"> | string
    name?: StringFilter<"groups"> | string
    subject?: StringFilter<"groups"> | string
    year?: IntFilter<"groups"> | number
    term?: IntFilter<"groups"> | number
    owner_id?: StringFilter<"groups"> | string
    template_id?: StringFilter<"groups"> | string
    answer_id?: StringFilter<"groups"> | string
    disable?: BoolFilter<"groups"> | boolean
    created_at?: DateTimeFilter<"groups"> | Date | string
    updated_at?: DateTimeFilter<"groups"> | Date | string
  }

  export type regionsCreateWithoutRegion_typeInput = {
    id: number
    name: string
    detail: string
    template_regions?: template_regionsCreateNestedManyWithoutRegionInput
  }

  export type regionsUncheckedCreateWithoutRegion_typeInput = {
    id: number
    name: string
    detail: string
    template_regions?: template_regionsUncheckedCreateNestedManyWithoutRegionInput
  }

  export type regionsCreateOrConnectWithoutRegion_typeInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutRegion_typeInput, regionsUncheckedCreateWithoutRegion_typeInput>
  }

  export type regionsCreateManyRegion_typeInputEnvelope = {
    data: regionsCreateManyRegion_typeInput | regionsCreateManyRegion_typeInput[]
    skipDuplicates?: boolean
  }

  export type regionsUpsertWithWhereUniqueWithoutRegion_typeInput = {
    where: regionsWhereUniqueInput
    update: XOR<regionsUpdateWithoutRegion_typeInput, regionsUncheckedUpdateWithoutRegion_typeInput>
    create: XOR<regionsCreateWithoutRegion_typeInput, regionsUncheckedCreateWithoutRegion_typeInput>
  }

  export type regionsUpdateWithWhereUniqueWithoutRegion_typeInput = {
    where: regionsWhereUniqueInput
    data: XOR<regionsUpdateWithoutRegion_typeInput, regionsUncheckedUpdateWithoutRegion_typeInput>
  }

  export type regionsUpdateManyWithWhereWithoutRegion_typeInput = {
    where: regionsScalarWhereInput
    data: XOR<regionsUpdateManyMutationInput, regionsUncheckedUpdateManyWithoutRegion_typeInput>
  }

  export type regionsScalarWhereInput = {
    AND?: regionsScalarWhereInput | regionsScalarWhereInput[]
    OR?: regionsScalarWhereInput[]
    NOT?: regionsScalarWhereInput | regionsScalarWhereInput[]
    id?: IntFilter<"regions"> | number
    name?: StringFilter<"regions"> | string
    detail?: StringFilter<"regions"> | string
    region_type_id?: IntFilter<"regions"> | number
  }

  export type region_typesCreateWithoutRegionsInput = {
    id: number
    name: string
    detail: string
  }

  export type region_typesUncheckedCreateWithoutRegionsInput = {
    id: number
    name: string
    detail: string
  }

  export type region_typesCreateOrConnectWithoutRegionsInput = {
    where: region_typesWhereUniqueInput
    create: XOR<region_typesCreateWithoutRegionsInput, region_typesUncheckedCreateWithoutRegionsInput>
  }

  export type template_regionsCreateWithoutRegionInput = {
    sx: number
    sy: number
    ex: number
    ey: number
    template: templatesCreateNestedOneWithoutTemplate_regionsInput
    template_marker_centers?: template_marker_centersCreateNestedManyWithoutTemplate_regionInput
  }

  export type template_regionsUncheckedCreateWithoutRegionInput = {
    id?: number
    template_id: string
    sx: number
    sy: number
    ex: number
    ey: number
    template_marker_centers?: template_marker_centersUncheckedCreateNestedManyWithoutTemplate_regionInput
  }

  export type template_regionsCreateOrConnectWithoutRegionInput = {
    where: template_regionsWhereUniqueInput
    create: XOR<template_regionsCreateWithoutRegionInput, template_regionsUncheckedCreateWithoutRegionInput>
  }

  export type template_regionsCreateManyRegionInputEnvelope = {
    data: template_regionsCreateManyRegionInput | template_regionsCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type region_typesUpsertWithoutRegionsInput = {
    update: XOR<region_typesUpdateWithoutRegionsInput, region_typesUncheckedUpdateWithoutRegionsInput>
    create: XOR<region_typesCreateWithoutRegionsInput, region_typesUncheckedCreateWithoutRegionsInput>
    where?: region_typesWhereInput
  }

  export type region_typesUpdateToOneWithWhereWithoutRegionsInput = {
    where?: region_typesWhereInput
    data: XOR<region_typesUpdateWithoutRegionsInput, region_typesUncheckedUpdateWithoutRegionsInput>
  }

  export type region_typesUpdateWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type region_typesUncheckedUpdateWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type template_regionsUpsertWithWhereUniqueWithoutRegionInput = {
    where: template_regionsWhereUniqueInput
    update: XOR<template_regionsUpdateWithoutRegionInput, template_regionsUncheckedUpdateWithoutRegionInput>
    create: XOR<template_regionsCreateWithoutRegionInput, template_regionsUncheckedCreateWithoutRegionInput>
  }

  export type template_regionsUpdateWithWhereUniqueWithoutRegionInput = {
    where: template_regionsWhereUniqueInput
    data: XOR<template_regionsUpdateWithoutRegionInput, template_regionsUncheckedUpdateWithoutRegionInput>
  }

  export type template_regionsUpdateManyWithWhereWithoutRegionInput = {
    where: template_regionsScalarWhereInput
    data: XOR<template_regionsUpdateManyMutationInput, template_regionsUncheckedUpdateManyWithoutRegionInput>
  }

  export type template_regionsScalarWhereInput = {
    AND?: template_regionsScalarWhereInput | template_regionsScalarWhereInput[]
    OR?: template_regionsScalarWhereInput[]
    NOT?: template_regionsScalarWhereInput | template_regionsScalarWhereInput[]
    id?: IntFilter<"template_regions"> | number
    template_id?: StringFilter<"template_regions"> | string
    region_id?: IntFilter<"template_regions"> | number
    sx?: IntFilter<"template_regions"> | number
    sy?: IntFilter<"template_regions"> | number
    ex?: IntFilter<"template_regions"> | number
    ey?: IntFilter<"template_regions"> | number
  }

  export type template_regionsCreateWithoutTemplateInput = {
    sx: number
    sy: number
    ex: number
    ey: number
    region: regionsCreateNestedOneWithoutTemplate_regionsInput
    template_marker_centers?: template_marker_centersCreateNestedManyWithoutTemplate_regionInput
  }

  export type template_regionsUncheckedCreateWithoutTemplateInput = {
    id?: number
    region_id: number
    sx: number
    sy: number
    ex: number
    ey: number
    template_marker_centers?: template_marker_centersUncheckedCreateNestedManyWithoutTemplate_regionInput
  }

  export type template_regionsCreateOrConnectWithoutTemplateInput = {
    where: template_regionsWhereUniqueInput
    create: XOR<template_regionsCreateWithoutTemplateInput, template_regionsUncheckedCreateWithoutTemplateInput>
  }

  export type template_regionsCreateManyTemplateInputEnvelope = {
    data: template_regionsCreateManyTemplateInput | template_regionsCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type groupsCreateWithoutTemplateInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutGroupsInput
    answer: answersCreateNestedOneWithoutGroupsInput
    sheets?: sheetsCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateWithoutTemplateInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    owner_id: string
    answer_id: string
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sheets?: sheetsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsCreateOrConnectWithoutTemplateInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutTemplateInput, groupsUncheckedCreateWithoutTemplateInput>
  }

  export type groupsCreateManyTemplateInputEnvelope = {
    data: groupsCreateManyTemplateInput | groupsCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type template_regionsUpsertWithWhereUniqueWithoutTemplateInput = {
    where: template_regionsWhereUniqueInput
    update: XOR<template_regionsUpdateWithoutTemplateInput, template_regionsUncheckedUpdateWithoutTemplateInput>
    create: XOR<template_regionsCreateWithoutTemplateInput, template_regionsUncheckedCreateWithoutTemplateInput>
  }

  export type template_regionsUpdateWithWhereUniqueWithoutTemplateInput = {
    where: template_regionsWhereUniqueInput
    data: XOR<template_regionsUpdateWithoutTemplateInput, template_regionsUncheckedUpdateWithoutTemplateInput>
  }

  export type template_regionsUpdateManyWithWhereWithoutTemplateInput = {
    where: template_regionsScalarWhereInput
    data: XOR<template_regionsUpdateManyMutationInput, template_regionsUncheckedUpdateManyWithoutTemplateInput>
  }

  export type groupsUpsertWithWhereUniqueWithoutTemplateInput = {
    where: groupsWhereUniqueInput
    update: XOR<groupsUpdateWithoutTemplateInput, groupsUncheckedUpdateWithoutTemplateInput>
    create: XOR<groupsCreateWithoutTemplateInput, groupsUncheckedCreateWithoutTemplateInput>
  }

  export type groupsUpdateWithWhereUniqueWithoutTemplateInput = {
    where: groupsWhereUniqueInput
    data: XOR<groupsUpdateWithoutTemplateInput, groupsUncheckedUpdateWithoutTemplateInput>
  }

  export type groupsUpdateManyWithWhereWithoutTemplateInput = {
    where: groupsScalarWhereInput
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyWithoutTemplateInput>
  }

  export type templatesCreateWithoutTemplate_regionsInput = {
    id?: string
    name: string
    image_filename: string
    pdf_filename: string
    total_no: number
    created_at?: Date | string
    updated_at?: Date | string
    groups?: groupsCreateNestedManyWithoutTemplateInput
  }

  export type templatesUncheckedCreateWithoutTemplate_regionsInput = {
    id?: string
    name: string
    image_filename: string
    pdf_filename: string
    total_no: number
    created_at?: Date | string
    updated_at?: Date | string
    groups?: groupsUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type templatesCreateOrConnectWithoutTemplate_regionsInput = {
    where: templatesWhereUniqueInput
    create: XOR<templatesCreateWithoutTemplate_regionsInput, templatesUncheckedCreateWithoutTemplate_regionsInput>
  }

  export type regionsCreateWithoutTemplate_regionsInput = {
    id: number
    name: string
    detail: string
    region_type: region_typesCreateNestedOneWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutTemplate_regionsInput = {
    id: number
    name: string
    detail: string
    region_type_id: number
  }

  export type regionsCreateOrConnectWithoutTemplate_regionsInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutTemplate_regionsInput, regionsUncheckedCreateWithoutTemplate_regionsInput>
  }

  export type template_marker_centersCreateWithoutTemplate_regionInput = {
    x: number
    y: number
  }

  export type template_marker_centersUncheckedCreateWithoutTemplate_regionInput = {
    x: number
    y: number
  }

  export type template_marker_centersCreateOrConnectWithoutTemplate_regionInput = {
    where: template_marker_centersWhereUniqueInput
    create: XOR<template_marker_centersCreateWithoutTemplate_regionInput, template_marker_centersUncheckedCreateWithoutTemplate_regionInput>
  }

  export type template_marker_centersCreateManyTemplate_regionInputEnvelope = {
    data: template_marker_centersCreateManyTemplate_regionInput | template_marker_centersCreateManyTemplate_regionInput[]
    skipDuplicates?: boolean
  }

  export type templatesUpsertWithoutTemplate_regionsInput = {
    update: XOR<templatesUpdateWithoutTemplate_regionsInput, templatesUncheckedUpdateWithoutTemplate_regionsInput>
    create: XOR<templatesCreateWithoutTemplate_regionsInput, templatesUncheckedCreateWithoutTemplate_regionsInput>
    where?: templatesWhereInput
  }

  export type templatesUpdateToOneWithWhereWithoutTemplate_regionsInput = {
    where?: templatesWhereInput
    data: XOR<templatesUpdateWithoutTemplate_regionsInput, templatesUncheckedUpdateWithoutTemplate_regionsInput>
  }

  export type templatesUpdateWithoutTemplate_regionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    pdf_filename?: StringFieldUpdateOperationsInput | string
    total_no?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: groupsUpdateManyWithoutTemplateNestedInput
  }

  export type templatesUncheckedUpdateWithoutTemplate_regionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    pdf_filename?: StringFieldUpdateOperationsInput | string
    total_no?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: groupsUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type regionsUpsertWithoutTemplate_regionsInput = {
    update: XOR<regionsUpdateWithoutTemplate_regionsInput, regionsUncheckedUpdateWithoutTemplate_regionsInput>
    create: XOR<regionsCreateWithoutTemplate_regionsInput, regionsUncheckedCreateWithoutTemplate_regionsInput>
    where?: regionsWhereInput
  }

  export type regionsUpdateToOneWithWhereWithoutTemplate_regionsInput = {
    where?: regionsWhereInput
    data: XOR<regionsUpdateWithoutTemplate_regionsInput, regionsUncheckedUpdateWithoutTemplate_regionsInput>
  }

  export type regionsUpdateWithoutTemplate_regionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    region_type?: region_typesUpdateOneRequiredWithoutRegionsNestedInput
  }

  export type regionsUncheckedUpdateWithoutTemplate_regionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    region_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type template_marker_centersUpsertWithWhereUniqueWithoutTemplate_regionInput = {
    where: template_marker_centersWhereUniqueInput
    update: XOR<template_marker_centersUpdateWithoutTemplate_regionInput, template_marker_centersUncheckedUpdateWithoutTemplate_regionInput>
    create: XOR<template_marker_centersCreateWithoutTemplate_regionInput, template_marker_centersUncheckedCreateWithoutTemplate_regionInput>
  }

  export type template_marker_centersUpdateWithWhereUniqueWithoutTemplate_regionInput = {
    where: template_marker_centersWhereUniqueInput
    data: XOR<template_marker_centersUpdateWithoutTemplate_regionInput, template_marker_centersUncheckedUpdateWithoutTemplate_regionInput>
  }

  export type template_marker_centersUpdateManyWithWhereWithoutTemplate_regionInput = {
    where: template_marker_centersScalarWhereInput
    data: XOR<template_marker_centersUpdateManyMutationInput, template_marker_centersUncheckedUpdateManyWithoutTemplate_regionInput>
  }

  export type template_marker_centersScalarWhereInput = {
    AND?: template_marker_centersScalarWhereInput | template_marker_centersScalarWhereInput[]
    OR?: template_marker_centersScalarWhereInput[]
    NOT?: template_marker_centersScalarWhereInput | template_marker_centersScalarWhereInput[]
    template_region_id?: IntFilter<"template_marker_centers"> | number
    x?: IntFilter<"template_marker_centers"> | number
    y?: IntFilter<"template_marker_centers"> | number
  }

  export type template_regionsCreateWithoutTemplate_marker_centersInput = {
    sx: number
    sy: number
    ex: number
    ey: number
    template: templatesCreateNestedOneWithoutTemplate_regionsInput
    region: regionsCreateNestedOneWithoutTemplate_regionsInput
  }

  export type template_regionsUncheckedCreateWithoutTemplate_marker_centersInput = {
    id?: number
    template_id: string
    region_id: number
    sx: number
    sy: number
    ex: number
    ey: number
  }

  export type template_regionsCreateOrConnectWithoutTemplate_marker_centersInput = {
    where: template_regionsWhereUniqueInput
    create: XOR<template_regionsCreateWithoutTemplate_marker_centersInput, template_regionsUncheckedCreateWithoutTemplate_marker_centersInput>
  }

  export type template_regionsUpsertWithoutTemplate_marker_centersInput = {
    update: XOR<template_regionsUpdateWithoutTemplate_marker_centersInput, template_regionsUncheckedUpdateWithoutTemplate_marker_centersInput>
    create: XOR<template_regionsCreateWithoutTemplate_marker_centersInput, template_regionsUncheckedCreateWithoutTemplate_marker_centersInput>
    where?: template_regionsWhereInput
  }

  export type template_regionsUpdateToOneWithWhereWithoutTemplate_marker_centersInput = {
    where?: template_regionsWhereInput
    data: XOR<template_regionsUpdateWithoutTemplate_marker_centersInput, template_regionsUncheckedUpdateWithoutTemplate_marker_centersInput>
  }

  export type template_regionsUpdateWithoutTemplate_marker_centersInput = {
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
    template?: templatesUpdateOneRequiredWithoutTemplate_regionsNestedInput
    region?: regionsUpdateOneRequiredWithoutTemplate_regionsNestedInput
  }

  export type template_regionsUncheckedUpdateWithoutTemplate_marker_centersInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: StringFieldUpdateOperationsInput | string
    region_id?: IntFieldUpdateOperationsInput | number
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateWithoutAnswersInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    groups?: groupsCreateNestedManyWithoutOwnerInput
  }

  export type usersUncheckedCreateWithoutAnswersInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    role_id: number
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    groups?: groupsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type usersCreateOrConnectWithoutAnswersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
  }

  export type answer_detailsCreateWithoutAnswerInput = {
    no: number
    point: number
    correct_all?: boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type answer_detailsUncheckedCreateWithoutAnswerInput = {
    id?: number
    no: number
    point: number
    correct_all?: boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type answer_detailsCreateOrConnectWithoutAnswerInput = {
    where: answer_detailsWhereUniqueInput
    create: XOR<answer_detailsCreateWithoutAnswerInput, answer_detailsUncheckedCreateWithoutAnswerInput>
  }

  export type answer_detailsCreateManyAnswerInputEnvelope = {
    data: answer_detailsCreateManyAnswerInput | answer_detailsCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type groupsCreateWithoutAnswerInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutGroupsInput
    template: templatesCreateNestedOneWithoutGroupsInput
    sheets?: sheetsCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateWithoutAnswerInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    owner_id: string
    template_id: string
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sheets?: sheetsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsCreateOrConnectWithoutAnswerInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutAnswerInput, groupsUncheckedCreateWithoutAnswerInput>
  }

  export type groupsCreateManyAnswerInputEnvelope = {
    data: groupsCreateManyAnswerInput | groupsCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutAnswersInput = {
    update: XOR<usersUpdateWithoutAnswersInput, usersUncheckedUpdateWithoutAnswersInput>
    create: XOR<usersCreateWithoutAnswersInput, usersUncheckedCreateWithoutAnswersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAnswersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAnswersInput, usersUncheckedUpdateWithoutAnswersInput>
  }

  export type usersUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    groups?: groupsUpdateManyWithoutOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: groupsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type answer_detailsUpsertWithWhereUniqueWithoutAnswerInput = {
    where: answer_detailsWhereUniqueInput
    update: XOR<answer_detailsUpdateWithoutAnswerInput, answer_detailsUncheckedUpdateWithoutAnswerInput>
    create: XOR<answer_detailsCreateWithoutAnswerInput, answer_detailsUncheckedCreateWithoutAnswerInput>
  }

  export type answer_detailsUpdateWithWhereUniqueWithoutAnswerInput = {
    where: answer_detailsWhereUniqueInput
    data: XOR<answer_detailsUpdateWithoutAnswerInput, answer_detailsUncheckedUpdateWithoutAnswerInput>
  }

  export type answer_detailsUpdateManyWithWhereWithoutAnswerInput = {
    where: answer_detailsScalarWhereInput
    data: XOR<answer_detailsUpdateManyMutationInput, answer_detailsUncheckedUpdateManyWithoutAnswerInput>
  }

  export type answer_detailsScalarWhereInput = {
    AND?: answer_detailsScalarWhereInput | answer_detailsScalarWhereInput[]
    OR?: answer_detailsScalarWhereInput[]
    NOT?: answer_detailsScalarWhereInput | answer_detailsScalarWhereInput[]
    id?: IntFilter<"answer_details"> | number
    answer_id?: StringFilter<"answer_details"> | string
    no?: IntFilter<"answer_details"> | number
    point?: IntFilter<"answer_details"> | number
    correct_all?: BoolFilter<"answer_details"> | boolean
    choice_correct?: JsonNullableFilter<"answer_details">
  }

  export type groupsUpsertWithWhereUniqueWithoutAnswerInput = {
    where: groupsWhereUniqueInput
    update: XOR<groupsUpdateWithoutAnswerInput, groupsUncheckedUpdateWithoutAnswerInput>
    create: XOR<groupsCreateWithoutAnswerInput, groupsUncheckedCreateWithoutAnswerInput>
  }

  export type groupsUpdateWithWhereUniqueWithoutAnswerInput = {
    where: groupsWhereUniqueInput
    data: XOR<groupsUpdateWithoutAnswerInput, groupsUncheckedUpdateWithoutAnswerInput>
  }

  export type groupsUpdateManyWithWhereWithoutAnswerInput = {
    where: groupsScalarWhereInput
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyWithoutAnswerInput>
  }

  export type answersCreateWithoutAnswer_detailsInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutAnswersInput
    groups?: groupsCreateNestedManyWithoutAnswerInput
  }

  export type answersUncheckedCreateWithoutAnswer_detailsInput = {
    id?: string
    name: string
    owner_id: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    groups?: groupsUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type answersCreateOrConnectWithoutAnswer_detailsInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutAnswer_detailsInput, answersUncheckedCreateWithoutAnswer_detailsInput>
  }

  export type answersUpsertWithoutAnswer_detailsInput = {
    update: XOR<answersUpdateWithoutAnswer_detailsInput, answersUncheckedUpdateWithoutAnswer_detailsInput>
    create: XOR<answersCreateWithoutAnswer_detailsInput, answersUncheckedCreateWithoutAnswer_detailsInput>
    where?: answersWhereInput
  }

  export type answersUpdateToOneWithWhereWithoutAnswer_detailsInput = {
    where?: answersWhereInput
    data: XOR<answersUpdateWithoutAnswer_detailsInput, answersUncheckedUpdateWithoutAnswer_detailsInput>
  }

  export type answersUpdateWithoutAnswer_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutAnswersNestedInput
    groups?: groupsUpdateManyWithoutAnswerNestedInput
  }

  export type answersUncheckedUpdateWithoutAnswer_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: groupsUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type usersCreateWithoutGroupsInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    answers?: answersCreateNestedManyWithoutOwnerInput
  }

  export type usersUncheckedCreateWithoutGroupsInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    role_id: number
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    answers?: answersUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type usersCreateOrConnectWithoutGroupsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutGroupsInput, usersUncheckedCreateWithoutGroupsInput>
  }

  export type templatesCreateWithoutGroupsInput = {
    id?: string
    name: string
    image_filename: string
    pdf_filename: string
    total_no: number
    created_at?: Date | string
    updated_at?: Date | string
    template_regions?: template_regionsCreateNestedManyWithoutTemplateInput
  }

  export type templatesUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    image_filename: string
    pdf_filename: string
    total_no: number
    created_at?: Date | string
    updated_at?: Date | string
    template_regions?: template_regionsUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type templatesCreateOrConnectWithoutGroupsInput = {
    where: templatesWhereUniqueInput
    create: XOR<templatesCreateWithoutGroupsInput, templatesUncheckedCreateWithoutGroupsInput>
  }

  export type answersCreateWithoutGroupsInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutAnswersInput
    answer_details?: answer_detailsCreateNestedManyWithoutAnswerInput
  }

  export type answersUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    owner_id: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    answer_details?: answer_detailsUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type answersCreateOrConnectWithoutGroupsInput = {
    where: answersWhereUniqueInput
    create: XOR<answersCreateWithoutGroupsInput, answersUncheckedCreateWithoutGroupsInput>
  }

  export type sheetsCreateWithoutGroupInput = {
    id?: string
    original_name: string
    image_filename: string
    total_scores?: number | null
    process_id?: string | null
    marker_tl_center: JsonNullValueInput | InputJsonValue
    marker_tr_center: JsonNullValueInput | InputJsonValue
    marker_bl_center: JsonNullValueInput | InputJsonValue
    marker_br_center: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    sheet_status?: sheet_statusesCreateNestedOneWithoutSheetsInput
  }

  export type sheetsUncheckedCreateWithoutGroupInput = {
    id?: string
    original_name: string
    image_filename: string
    total_scores?: number | null
    sheet_status_id?: number
    process_id?: string | null
    marker_tl_center: JsonNullValueInput | InputJsonValue
    marker_tr_center: JsonNullValueInput | InputJsonValue
    marker_bl_center: JsonNullValueInput | InputJsonValue
    marker_br_center: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type sheetsCreateOrConnectWithoutGroupInput = {
    where: sheetsWhereUniqueInput
    create: XOR<sheetsCreateWithoutGroupInput, sheetsUncheckedCreateWithoutGroupInput>
  }

  export type sheetsCreateManyGroupInputEnvelope = {
    data: sheetsCreateManyGroupInput | sheetsCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutGroupsInput = {
    update: XOR<usersUpdateWithoutGroupsInput, usersUncheckedUpdateWithoutGroupsInput>
    create: XOR<usersCreateWithoutGroupsInput, usersUncheckedCreateWithoutGroupsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutGroupsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutGroupsInput, usersUncheckedUpdateWithoutGroupsInput>
  }

  export type usersUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    answers?: answersUpdateManyWithoutOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: answersUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type templatesUpsertWithoutGroupsInput = {
    update: XOR<templatesUpdateWithoutGroupsInput, templatesUncheckedUpdateWithoutGroupsInput>
    create: XOR<templatesCreateWithoutGroupsInput, templatesUncheckedCreateWithoutGroupsInput>
    where?: templatesWhereInput
  }

  export type templatesUpdateToOneWithWhereWithoutGroupsInput = {
    where?: templatesWhereInput
    data: XOR<templatesUpdateWithoutGroupsInput, templatesUncheckedUpdateWithoutGroupsInput>
  }

  export type templatesUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    pdf_filename?: StringFieldUpdateOperationsInput | string
    total_no?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    template_regions?: template_regionsUpdateManyWithoutTemplateNestedInput
  }

  export type templatesUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    pdf_filename?: StringFieldUpdateOperationsInput | string
    total_no?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    template_regions?: template_regionsUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type answersUpsertWithoutGroupsInput = {
    update: XOR<answersUpdateWithoutGroupsInput, answersUncheckedUpdateWithoutGroupsInput>
    create: XOR<answersCreateWithoutGroupsInput, answersUncheckedCreateWithoutGroupsInput>
    where?: answersWhereInput
  }

  export type answersUpdateToOneWithWhereWithoutGroupsInput = {
    where?: answersWhereInput
    data: XOR<answersUpdateWithoutGroupsInput, answersUncheckedUpdateWithoutGroupsInput>
  }

  export type answersUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutAnswersNestedInput
    answer_details?: answer_detailsUpdateManyWithoutAnswerNestedInput
  }

  export type answersUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer_details?: answer_detailsUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type sheetsUpsertWithWhereUniqueWithoutGroupInput = {
    where: sheetsWhereUniqueInput
    update: XOR<sheetsUpdateWithoutGroupInput, sheetsUncheckedUpdateWithoutGroupInput>
    create: XOR<sheetsCreateWithoutGroupInput, sheetsUncheckedCreateWithoutGroupInput>
  }

  export type sheetsUpdateWithWhereUniqueWithoutGroupInput = {
    where: sheetsWhereUniqueInput
    data: XOR<sheetsUpdateWithoutGroupInput, sheetsUncheckedUpdateWithoutGroupInput>
  }

  export type sheetsUpdateManyWithWhereWithoutGroupInput = {
    where: sheetsScalarWhereInput
    data: XOR<sheetsUpdateManyMutationInput, sheetsUncheckedUpdateManyWithoutGroupInput>
  }

  export type sheetsScalarWhereInput = {
    AND?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
    OR?: sheetsScalarWhereInput[]
    NOT?: sheetsScalarWhereInput | sheetsScalarWhereInput[]
    id?: StringFilter<"sheets"> | string
    original_name?: StringFilter<"sheets"> | string
    image_filename?: StringFilter<"sheets"> | string
    group_id?: StringFilter<"sheets"> | string
    total_scores?: IntNullableFilter<"sheets"> | number | null
    sheet_status_id?: IntFilter<"sheets"> | number
    process_id?: StringNullableFilter<"sheets"> | string | null
    marker_tl_center?: JsonFilter<"sheets">
    marker_tr_center?: JsonFilter<"sheets">
    marker_bl_center?: JsonFilter<"sheets">
    marker_br_center?: JsonFilter<"sheets">
    predict_ans_detail?: JsonNullableFilter<"sheets">
    predict_ans_result?: JsonNullableFilter<"sheets">
    predict_std_fill_detail?: JsonNullableFilter<"sheets">
    predict_std_fill_result?: JsonNullableFilter<"sheets">
    created_at?: DateTimeFilter<"sheets"> | Date | string
    updated_at?: DateTimeFilter<"sheets"> | Date | string
  }

  export type sheetsCreateWithoutSheet_statusInput = {
    id?: string
    original_name: string
    image_filename: string
    total_scores?: number | null
    process_id?: string | null
    marker_tl_center: JsonNullValueInput | InputJsonValue
    marker_tr_center: JsonNullValueInput | InputJsonValue
    marker_bl_center: JsonNullValueInput | InputJsonValue
    marker_br_center: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    group: groupsCreateNestedOneWithoutSheetsInput
  }

  export type sheetsUncheckedCreateWithoutSheet_statusInput = {
    id?: string
    original_name: string
    image_filename: string
    group_id: string
    total_scores?: number | null
    process_id?: string | null
    marker_tl_center: JsonNullValueInput | InputJsonValue
    marker_tr_center: JsonNullValueInput | InputJsonValue
    marker_bl_center: JsonNullValueInput | InputJsonValue
    marker_br_center: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type sheetsCreateOrConnectWithoutSheet_statusInput = {
    where: sheetsWhereUniqueInput
    create: XOR<sheetsCreateWithoutSheet_statusInput, sheetsUncheckedCreateWithoutSheet_statusInput>
  }

  export type sheetsCreateManySheet_statusInputEnvelope = {
    data: sheetsCreateManySheet_statusInput | sheetsCreateManySheet_statusInput[]
    skipDuplicates?: boolean
  }

  export type sheetsUpsertWithWhereUniqueWithoutSheet_statusInput = {
    where: sheetsWhereUniqueInput
    update: XOR<sheetsUpdateWithoutSheet_statusInput, sheetsUncheckedUpdateWithoutSheet_statusInput>
    create: XOR<sheetsCreateWithoutSheet_statusInput, sheetsUncheckedCreateWithoutSheet_statusInput>
  }

  export type sheetsUpdateWithWhereUniqueWithoutSheet_statusInput = {
    where: sheetsWhereUniqueInput
    data: XOR<sheetsUpdateWithoutSheet_statusInput, sheetsUncheckedUpdateWithoutSheet_statusInput>
  }

  export type sheetsUpdateManyWithWhereWithoutSheet_statusInput = {
    where: sheetsScalarWhereInput
    data: XOR<sheetsUpdateManyMutationInput, sheetsUncheckedUpdateManyWithoutSheet_statusInput>
  }

  export type groupsCreateWithoutSheetsInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: usersCreateNestedOneWithoutGroupsInput
    template: templatesCreateNestedOneWithoutGroupsInput
    answer: answersCreateNestedOneWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutSheetsInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    owner_id: string
    template_id: string
    answer_id: string
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type groupsCreateOrConnectWithoutSheetsInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutSheetsInput, groupsUncheckedCreateWithoutSheetsInput>
  }

  export type sheet_statusesCreateWithoutSheetsInput = {
    id: number
    name: string
    detail: string
  }

  export type sheet_statusesUncheckedCreateWithoutSheetsInput = {
    id: number
    name: string
    detail: string
  }

  export type sheet_statusesCreateOrConnectWithoutSheetsInput = {
    where: sheet_statusesWhereUniqueInput
    create: XOR<sheet_statusesCreateWithoutSheetsInput, sheet_statusesUncheckedCreateWithoutSheetsInput>
  }

  export type groupsUpsertWithoutSheetsInput = {
    update: XOR<groupsUpdateWithoutSheetsInput, groupsUncheckedUpdateWithoutSheetsInput>
    create: XOR<groupsCreateWithoutSheetsInput, groupsUncheckedCreateWithoutSheetsInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutSheetsInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutSheetsInput, groupsUncheckedUpdateWithoutSheetsInput>
  }

  export type groupsUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutGroupsNestedInput
    template?: templatesUpdateOneRequiredWithoutGroupsNestedInput
    answer?: answersUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    owner_id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheet_statusesUpsertWithoutSheetsInput = {
    update: XOR<sheet_statusesUpdateWithoutSheetsInput, sheet_statusesUncheckedUpdateWithoutSheetsInput>
    create: XOR<sheet_statusesCreateWithoutSheetsInput, sheet_statusesUncheckedCreateWithoutSheetsInput>
    where?: sheet_statusesWhereInput
  }

  export type sheet_statusesUpdateToOneWithWhereWithoutSheetsInput = {
    where?: sheet_statusesWhereInput
    data: XOR<sheet_statusesUpdateWithoutSheetsInput, sheet_statusesUncheckedUpdateWithoutSheetsInput>
  }

  export type sheet_statusesUpdateWithoutSheetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type sheet_statusesUncheckedUpdateWithoutSheetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyRoleInput = {
    id?: string
    username: string
    password: string
    first_name: string
    last_name: string
    email?: string | null
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: answersUpdateManyWithoutOwnerNestedInput
    groups?: groupsUpdateManyWithoutOwnerNestedInput
  }

  export type usersUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: answersUncheckedUpdateManyWithoutOwnerNestedInput
    groups?: groupsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type usersUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type answersCreateManyOwnerInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    total_no: number
    shared?: boolean
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type groupsCreateManyOwnerInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    template_id: string
    answer_id: string
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type answersUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer_details?: answer_detailsUpdateManyWithoutAnswerNestedInput
    groups?: groupsUpdateManyWithoutAnswerNestedInput
  }

  export type answersUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer_details?: answer_detailsUncheckedUpdateManyWithoutAnswerNestedInput
    groups?: groupsUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type answersUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    total_no?: IntFieldUpdateOperationsInput | number
    shared?: BoolFieldUpdateOperationsInput | boolean
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: templatesUpdateOneRequiredWithoutGroupsNestedInput
    answer?: answersUpdateOneRequiredWithoutGroupsNestedInput
    sheets?: sheetsUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    template_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sheets?: sheetsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    template_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type regionsCreateManyRegion_typeInput = {
    id: number
    name: string
    detail: string
  }

  export type regionsUpdateWithoutRegion_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    template_regions?: template_regionsUpdateManyWithoutRegionNestedInput
  }

  export type regionsUncheckedUpdateWithoutRegion_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    template_regions?: template_regionsUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type regionsUncheckedUpdateManyWithoutRegion_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type template_regionsCreateManyRegionInput = {
    id?: number
    template_id: string
    sx: number
    sy: number
    ex: number
    ey: number
  }

  export type template_regionsUpdateWithoutRegionInput = {
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
    template?: templatesUpdateOneRequiredWithoutTemplate_regionsNestedInput
    template_marker_centers?: template_marker_centersUpdateManyWithoutTemplate_regionNestedInput
  }

  export type template_regionsUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: StringFieldUpdateOperationsInput | string
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
    template_marker_centers?: template_marker_centersUncheckedUpdateManyWithoutTemplate_regionNestedInput
  }

  export type template_regionsUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: StringFieldUpdateOperationsInput | string
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
  }

  export type template_regionsCreateManyTemplateInput = {
    id?: number
    region_id: number
    sx: number
    sy: number
    ex: number
    ey: number
  }

  export type groupsCreateManyTemplateInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    owner_id: string
    answer_id: string
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type template_regionsUpdateWithoutTemplateInput = {
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
    region?: regionsUpdateOneRequiredWithoutTemplate_regionsNestedInput
    template_marker_centers?: template_marker_centersUpdateManyWithoutTemplate_regionNestedInput
  }

  export type template_regionsUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
    template_marker_centers?: template_marker_centersUncheckedUpdateManyWithoutTemplate_regionNestedInput
  }

  export type template_regionsUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    region_id?: IntFieldUpdateOperationsInput | number
    sx?: IntFieldUpdateOperationsInput | number
    sy?: IntFieldUpdateOperationsInput | number
    ex?: IntFieldUpdateOperationsInput | number
    ey?: IntFieldUpdateOperationsInput | number
  }

  export type groupsUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutGroupsNestedInput
    answer?: answersUpdateOneRequiredWithoutGroupsNestedInput
    sheets?: sheetsUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    owner_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sheets?: sheetsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    owner_id?: StringFieldUpdateOperationsInput | string
    answer_id?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type template_marker_centersCreateManyTemplate_regionInput = {
    x: number
    y: number
  }

  export type template_marker_centersUpdateWithoutTemplate_regionInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type template_marker_centersUncheckedUpdateWithoutTemplate_regionInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type template_marker_centersUncheckedUpdateManyWithoutTemplate_regionInput = {
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
  }

  export type answer_detailsCreateManyAnswerInput = {
    id?: number
    no: number
    point: number
    correct_all?: boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type groupsCreateManyAnswerInput = {
    id?: string
    name: string
    subject: string
    year: number
    term: number
    owner_id: string
    template_id: string
    disable?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type answer_detailsUpdateWithoutAnswerInput = {
    no?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    correct_all?: BoolFieldUpdateOperationsInput | boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type answer_detailsUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    no?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    correct_all?: BoolFieldUpdateOperationsInput | boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type answer_detailsUncheckedUpdateManyWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    no?: IntFieldUpdateOperationsInput | number
    point?: IntFieldUpdateOperationsInput | number
    correct_all?: BoolFieldUpdateOperationsInput | boolean
    choice_correct?: NullableJsonNullValueInput | InputJsonValue
  }

  export type groupsUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: usersUpdateOneRequiredWithoutGroupsNestedInput
    template?: templatesUpdateOneRequiredWithoutGroupsNestedInput
    sheets?: sheetsUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    owner_id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sheets?: sheetsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateManyWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    term?: IntFieldUpdateOperationsInput | number
    owner_id?: StringFieldUpdateOperationsInput | string
    template_id?: StringFieldUpdateOperationsInput | string
    disable?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsCreateManyGroupInput = {
    id?: string
    original_name: string
    image_filename: string
    total_scores?: number | null
    sheet_status_id?: number
    process_id?: string | null
    marker_tl_center: JsonNullValueInput | InputJsonValue
    marker_tr_center: JsonNullValueInput | InputJsonValue
    marker_bl_center: JsonNullValueInput | InputJsonValue
    marker_br_center: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type sheetsUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sheet_status?: sheet_statusesUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type sheetsUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    sheet_status_id?: IntFieldUpdateOperationsInput | number
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    sheet_status_id?: IntFieldUpdateOperationsInput | number
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsCreateManySheet_statusInput = {
    id?: string
    original_name: string
    image_filename: string
    group_id: string
    total_scores?: number | null
    process_id?: string | null
    marker_tl_center: JsonNullValueInput | InputJsonValue
    marker_tr_center: JsonNullValueInput | InputJsonValue
    marker_bl_center: JsonNullValueInput | InputJsonValue
    marker_br_center: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type sheetsUpdateWithoutSheet_statusInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneRequiredWithoutSheetsNestedInput
  }

  export type sheetsUncheckedUpdateWithoutSheet_statusInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsUncheckedUpdateManyWithoutSheet_statusInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_name?: StringFieldUpdateOperationsInput | string
    image_filename?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    total_scores?: NullableIntFieldUpdateOperationsInput | number | null
    process_id?: NullableStringFieldUpdateOperationsInput | string | null
    marker_tl_center?: JsonNullValueInput | InputJsonValue
    marker_tr_center?: JsonNullValueInput | InputJsonValue
    marker_bl_center?: JsonNullValueInput | InputJsonValue
    marker_br_center?: JsonNullValueInput | InputJsonValue
    predict_ans_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_ans_result?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_detail?: NullableJsonNullValueInput | InputJsonValue
    predict_std_fill_result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}