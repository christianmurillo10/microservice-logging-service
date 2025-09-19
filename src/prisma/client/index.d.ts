
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
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AuditTrail
 * 
 */
export type AuditTrail = $Result.DefaultSelection<Prisma.$AuditTrailPayload>
/**
 * Model UserAction
 * 
 */
export type UserAction = $Result.DefaultSelection<Prisma.$UserActionPayload>
/**
 * Model EventLog
 * 
 */
export type EventLog = $Result.DefaultSelection<Prisma.$EventLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
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
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditTrail`: Exposes CRUD operations for the **AuditTrail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditTrails
    * const auditTrails = await prisma.auditTrail.findMany()
    * ```
    */
  get auditTrail(): Prisma.AuditTrailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAction`: Exposes CRUD operations for the **UserAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserActions
    * const userActions = await prisma.userAction.findMany()
    * ```
    */
  get userAction(): Prisma.UserActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventLog`: Exposes CRUD operations for the **EventLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventLogs
    * const eventLogs = await prisma.eventLog.findMany()
    * ```
    */
  get eventLog(): Prisma.EventLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Organization: 'Organization',
    User: 'User',
    AuditTrail: 'AuditTrail',
    UserAction: 'UserAction',
    EventLog: 'EventLog'
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
      modelProps: "organization" | "user" | "auditTrail" | "userAction" | "eventLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AuditTrail: {
        payload: Prisma.$AuditTrailPayload<ExtArgs>
        fields: Prisma.AuditTrailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditTrailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditTrailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          findFirst: {
            args: Prisma.AuditTrailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditTrailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          findMany: {
            args: Prisma.AuditTrailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>[]
          }
          create: {
            args: Prisma.AuditTrailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          createMany: {
            args: Prisma.AuditTrailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditTrailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          update: {
            args: Prisma.AuditTrailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          deleteMany: {
            args: Prisma.AuditTrailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditTrailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditTrailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditTrailPayload>
          }
          aggregate: {
            args: Prisma.AuditTrailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditTrail>
          }
          groupBy: {
            args: Prisma.AuditTrailGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditTrailGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditTrailCountArgs<ExtArgs>
            result: $Utils.Optional<AuditTrailCountAggregateOutputType> | number
          }
        }
      }
      UserAction: {
        payload: Prisma.$UserActionPayload<ExtArgs>
        fields: Prisma.UserActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionPayload>
          }
          findFirst: {
            args: Prisma.UserActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionPayload>
          }
          findMany: {
            args: Prisma.UserActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionPayload>[]
          }
          create: {
            args: Prisma.UserActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionPayload>
          }
          createMany: {
            args: Prisma.UserActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionPayload>
          }
          update: {
            args: Prisma.UserActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionPayload>
          }
          deleteMany: {
            args: Prisma.UserActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActionPayload>
          }
          aggregate: {
            args: Prisma.UserActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAction>
          }
          groupBy: {
            args: Prisma.UserActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserActionCountArgs<ExtArgs>
            result: $Utils.Optional<UserActionCountAggregateOutputType> | number
          }
        }
      }
      EventLog: {
        payload: Prisma.$EventLogPayload<ExtArgs>
        fields: Prisma.EventLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findFirst: {
            args: Prisma.EventLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findMany: {
            args: Prisma.EventLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          create: {
            args: Prisma.EventLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          createMany: {
            args: Prisma.EventLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          update: {
            args: Prisma.EventLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          deleteMany: {
            args: Prisma.EventLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          aggregate: {
            args: Prisma.EventLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventLog>
          }
          groupBy: {
            args: Prisma.EventLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventLogCountArgs<ExtArgs>
            result: $Utils.Optional<EventLogCountAggregateOutputType> | number
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
    organization?: OrganizationOmit
    user?: UserOmit
    auditTrail?: AuditTrailOmit
    userAction?: UserActionOmit
    eventLog?: EventLogOmit
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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    auditTrails: number
    userActions: number
    eventLogs: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    auditTrails?: boolean | OrganizationCountOutputTypeCountAuditTrailsArgs
    userActions?: boolean | OrganizationCountOutputTypeCountUserActionsArgs
    eventLogs?: boolean | OrganizationCountOutputTypeCountEventLogsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAuditTrailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditTrailWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUserActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActionWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEventLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    auditTrailsCreated: number
    userActions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditTrailsCreated?: boolean | UserCountOutputTypeCountAuditTrailsCreatedArgs
    userActions?: boolean | UserCountOutputTypeCountUserActionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditTrailsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditTrailWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    logoPath: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logoPath: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    logoPath: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    logoPath?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    logoPath?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    logoPath?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    logoPath: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logoPath?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    auditTrails?: boolean | Organization$auditTrailsArgs<ExtArgs>
    userActions?: boolean | Organization$userActionsArgs<ExtArgs>
    eventLogs?: boolean | Organization$eventLogsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>



  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    logoPath?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logoPath" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    auditTrails?: boolean | Organization$auditTrailsArgs<ExtArgs>
    userActions?: boolean | Organization$userActionsArgs<ExtArgs>
    eventLogs?: boolean | Organization$eventLogsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      auditTrails: Prisma.$AuditTrailPayload<ExtArgs>[]
      userActions: Prisma.$UserActionPayload<ExtArgs>[]
      eventLogs: Prisma.$EventLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logoPath: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditTrails<T extends Organization$auditTrailsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$auditTrailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userActions<T extends Organization$userActionsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$userActionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventLogs<T extends Organization$eventLogsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$eventLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly logoPath: FieldRef<"Organization", 'String'>
    readonly isActive: FieldRef<"Organization", 'Boolean'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
    readonly deletedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.auditTrails
   */
  export type Organization$auditTrailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    where?: AuditTrailWhereInput
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    cursor?: AuditTrailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditTrailScalarFieldEnum | AuditTrailScalarFieldEnum[]
  }

  /**
   * Organization.userActions
   */
  export type Organization$userActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    where?: UserActionWhereInput
    orderBy?: UserActionOrderByWithRelationInput | UserActionOrderByWithRelationInput[]
    cursor?: UserActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserActionScalarFieldEnum | UserActionScalarFieldEnum[]
  }

  /**
   * Organization.eventLogs
   */
  export type Organization$eventLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    cursor?: EventLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    accessType: string | null
    organizationId: string | null
    isActive: boolean | null
    isLogged: boolean | null
    isSuperAdmin: boolean | null
    lastLoggedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    accessType: string | null
    organizationId: string | null
    isActive: boolean | null
    isLogged: boolean | null
    isSuperAdmin: boolean | null
    lastLoggedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    accessType: number
    organizationId: number
    isActive: number
    isLogged: number
    isSuperAdmin: number
    lastLoggedAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    accessType?: true
    organizationId?: true
    isActive?: true
    isLogged?: true
    isSuperAdmin?: true
    lastLoggedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    accessType?: true
    organizationId?: true
    isActive?: true
    isLogged?: true
    isSuperAdmin?: true
    lastLoggedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    accessType?: true
    organizationId?: true
    isActive?: true
    isLogged?: true
    isSuperAdmin?: true
    lastLoggedAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    username: string
    email: string
    accessType: string
    organizationId: string | null
    isActive: boolean
    isLogged: boolean
    isSuperAdmin: boolean
    lastLoggedAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    accessType?: boolean
    organizationId?: boolean
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    organization?: boolean | User$organizationArgs<ExtArgs>
    auditTrailsCreated?: boolean | User$auditTrailsCreatedArgs<ExtArgs>
    userActions?: boolean | User$userActionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    accessType?: boolean
    organizationId?: boolean
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "accessType" | "organizationId" | "isActive" | "isLogged" | "isSuperAdmin" | "lastLoggedAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | User$organizationArgs<ExtArgs>
    auditTrailsCreated?: boolean | User$auditTrailsCreatedArgs<ExtArgs>
    userActions?: boolean | User$userActionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      auditTrailsCreated: Prisma.$AuditTrailPayload<ExtArgs>[]
      userActions: Prisma.$UserActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      email: string
      accessType: string
      organizationId: string | null
      isActive: boolean
      isLogged: boolean
      isSuperAdmin: boolean
      lastLoggedAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends User$organizationArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auditTrailsCreated<T extends User$auditTrailsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$auditTrailsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userActions<T extends User$userActionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userActionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly accessType: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isLogged: FieldRef<"User", 'Boolean'>
    readonly isSuperAdmin: FieldRef<"User", 'Boolean'>
    readonly lastLoggedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.organization
   */
  export type User$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User.auditTrailsCreated
   */
  export type User$auditTrailsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    where?: AuditTrailWhereInput
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    cursor?: AuditTrailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditTrailScalarFieldEnum | AuditTrailScalarFieldEnum[]
  }

  /**
   * User.userActions
   */
  export type User$userActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    where?: UserActionWhereInput
    orderBy?: UserActionOrderByWithRelationInput | UserActionOrderByWithRelationInput[]
    cursor?: UserActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserActionScalarFieldEnum | UserActionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AuditTrail
   */

  export type AggregateAuditTrail = {
    _count: AuditTrailCountAggregateOutputType | null
    _min: AuditTrailMinAggregateOutputType | null
    _max: AuditTrailMaxAggregateOutputType | null
  }

  export type AuditTrailMinAggregateOutputType = {
    id: string | null
    serviceName: string | null
    tableName: string | null
    tableId: string | null
    action: string | null
    organizationId: string | null
    createdUserId: string | null
    createdAt: Date | null
  }

  export type AuditTrailMaxAggregateOutputType = {
    id: string | null
    serviceName: string | null
    tableName: string | null
    tableId: string | null
    action: string | null
    organizationId: string | null
    createdUserId: string | null
    createdAt: Date | null
  }

  export type AuditTrailCountAggregateOutputType = {
    id: number
    serviceName: number
    tableName: number
    tableId: number
    action: number
    oldDetails: number
    newDetails: number
    organizationId: number
    createdUserId: number
    createdAt: number
    _all: number
  }


  export type AuditTrailMinAggregateInputType = {
    id?: true
    serviceName?: true
    tableName?: true
    tableId?: true
    action?: true
    organizationId?: true
    createdUserId?: true
    createdAt?: true
  }

  export type AuditTrailMaxAggregateInputType = {
    id?: true
    serviceName?: true
    tableName?: true
    tableId?: true
    action?: true
    organizationId?: true
    createdUserId?: true
    createdAt?: true
  }

  export type AuditTrailCountAggregateInputType = {
    id?: true
    serviceName?: true
    tableName?: true
    tableId?: true
    action?: true
    oldDetails?: true
    newDetails?: true
    organizationId?: true
    createdUserId?: true
    createdAt?: true
    _all?: true
  }

  export type AuditTrailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditTrail to aggregate.
     */
    where?: AuditTrailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTrails to fetch.
     */
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditTrailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTrails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTrails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditTrails
    **/
    _count?: true | AuditTrailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditTrailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditTrailMaxAggregateInputType
  }

  export type GetAuditTrailAggregateType<T extends AuditTrailAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditTrail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditTrail[P]>
      : GetScalarType<T[P], AggregateAuditTrail[P]>
  }




  export type AuditTrailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditTrailWhereInput
    orderBy?: AuditTrailOrderByWithAggregationInput | AuditTrailOrderByWithAggregationInput[]
    by: AuditTrailScalarFieldEnum[] | AuditTrailScalarFieldEnum
    having?: AuditTrailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditTrailCountAggregateInputType | true
    _min?: AuditTrailMinAggregateInputType
    _max?: AuditTrailMaxAggregateInputType
  }

  export type AuditTrailGroupByOutputType = {
    id: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails: JsonValue
    newDetails: JsonValue
    organizationId: string | null
    createdUserId: string
    createdAt: Date
    _count: AuditTrailCountAggregateOutputType | null
    _min: AuditTrailMinAggregateOutputType | null
    _max: AuditTrailMaxAggregateOutputType | null
  }

  type GetAuditTrailGroupByPayload<T extends AuditTrailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditTrailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditTrailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditTrailGroupByOutputType[P]>
            : GetScalarType<T[P], AuditTrailGroupByOutputType[P]>
        }
      >
    >


  export type AuditTrailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceName?: boolean
    tableName?: boolean
    tableId?: boolean
    action?: boolean
    oldDetails?: boolean
    newDetails?: boolean
    organizationId?: boolean
    createdUserId?: boolean
    createdAt?: boolean
    organization?: boolean | AuditTrail$organizationArgs<ExtArgs>
    createdUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditTrail"]>



  export type AuditTrailSelectScalar = {
    id?: boolean
    serviceName?: boolean
    tableName?: boolean
    tableId?: boolean
    action?: boolean
    oldDetails?: boolean
    newDetails?: boolean
    organizationId?: boolean
    createdUserId?: boolean
    createdAt?: boolean
  }

  export type AuditTrailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceName" | "tableName" | "tableId" | "action" | "oldDetails" | "newDetails" | "organizationId" | "createdUserId" | "createdAt", ExtArgs["result"]["auditTrail"]>
  export type AuditTrailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | AuditTrail$organizationArgs<ExtArgs>
    createdUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditTrailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditTrail"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      createdUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceName: string
      tableName: string
      tableId: string
      action: string
      oldDetails: Prisma.JsonValue
      newDetails: Prisma.JsonValue
      organizationId: string | null
      createdUserId: string
      createdAt: Date
    }, ExtArgs["result"]["auditTrail"]>
    composites: {}
  }

  type AuditTrailGetPayload<S extends boolean | null | undefined | AuditTrailDefaultArgs> = $Result.GetResult<Prisma.$AuditTrailPayload, S>

  type AuditTrailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditTrailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditTrailCountAggregateInputType | true
    }

  export interface AuditTrailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditTrail'], meta: { name: 'AuditTrail' } }
    /**
     * Find zero or one AuditTrail that matches the filter.
     * @param {AuditTrailFindUniqueArgs} args - Arguments to find a AuditTrail
     * @example
     * // Get one AuditTrail
     * const auditTrail = await prisma.auditTrail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditTrailFindUniqueArgs>(args: SelectSubset<T, AuditTrailFindUniqueArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditTrail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditTrailFindUniqueOrThrowArgs} args - Arguments to find a AuditTrail
     * @example
     * // Get one AuditTrail
     * const auditTrail = await prisma.auditTrail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditTrailFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditTrailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditTrail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailFindFirstArgs} args - Arguments to find a AuditTrail
     * @example
     * // Get one AuditTrail
     * const auditTrail = await prisma.auditTrail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditTrailFindFirstArgs>(args?: SelectSubset<T, AuditTrailFindFirstArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditTrail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailFindFirstOrThrowArgs} args - Arguments to find a AuditTrail
     * @example
     * // Get one AuditTrail
     * const auditTrail = await prisma.auditTrail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditTrailFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditTrailFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditTrails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditTrails
     * const auditTrails = await prisma.auditTrail.findMany()
     * 
     * // Get first 10 AuditTrails
     * const auditTrails = await prisma.auditTrail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditTrailWithIdOnly = await prisma.auditTrail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditTrailFindManyArgs>(args?: SelectSubset<T, AuditTrailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditTrail.
     * @param {AuditTrailCreateArgs} args - Arguments to create a AuditTrail.
     * @example
     * // Create one AuditTrail
     * const AuditTrail = await prisma.auditTrail.create({
     *   data: {
     *     // ... data to create a AuditTrail
     *   }
     * })
     * 
     */
    create<T extends AuditTrailCreateArgs>(args: SelectSubset<T, AuditTrailCreateArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditTrails.
     * @param {AuditTrailCreateManyArgs} args - Arguments to create many AuditTrails.
     * @example
     * // Create many AuditTrails
     * const auditTrail = await prisma.auditTrail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditTrailCreateManyArgs>(args?: SelectSubset<T, AuditTrailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditTrail.
     * @param {AuditTrailDeleteArgs} args - Arguments to delete one AuditTrail.
     * @example
     * // Delete one AuditTrail
     * const AuditTrail = await prisma.auditTrail.delete({
     *   where: {
     *     // ... filter to delete one AuditTrail
     *   }
     * })
     * 
     */
    delete<T extends AuditTrailDeleteArgs>(args: SelectSubset<T, AuditTrailDeleteArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditTrail.
     * @param {AuditTrailUpdateArgs} args - Arguments to update one AuditTrail.
     * @example
     * // Update one AuditTrail
     * const auditTrail = await prisma.auditTrail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditTrailUpdateArgs>(args: SelectSubset<T, AuditTrailUpdateArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditTrails.
     * @param {AuditTrailDeleteManyArgs} args - Arguments to filter AuditTrails to delete.
     * @example
     * // Delete a few AuditTrails
     * const { count } = await prisma.auditTrail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditTrailDeleteManyArgs>(args?: SelectSubset<T, AuditTrailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditTrails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditTrails
     * const auditTrail = await prisma.auditTrail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditTrailUpdateManyArgs>(args: SelectSubset<T, AuditTrailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditTrail.
     * @param {AuditTrailUpsertArgs} args - Arguments to update or create a AuditTrail.
     * @example
     * // Update or create a AuditTrail
     * const auditTrail = await prisma.auditTrail.upsert({
     *   create: {
     *     // ... data to create a AuditTrail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditTrail we want to update
     *   }
     * })
     */
    upsert<T extends AuditTrailUpsertArgs>(args: SelectSubset<T, AuditTrailUpsertArgs<ExtArgs>>): Prisma__AuditTrailClient<$Result.GetResult<Prisma.$AuditTrailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditTrails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailCountArgs} args - Arguments to filter AuditTrails to count.
     * @example
     * // Count the number of AuditTrails
     * const count = await prisma.auditTrail.count({
     *   where: {
     *     // ... the filter for the AuditTrails we want to count
     *   }
     * })
    **/
    count<T extends AuditTrailCountArgs>(
      args?: Subset<T, AuditTrailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditTrailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditTrail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditTrailAggregateArgs>(args: Subset<T, AuditTrailAggregateArgs>): Prisma.PrismaPromise<GetAuditTrailAggregateType<T>>

    /**
     * Group by AuditTrail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditTrailGroupByArgs} args - Group by arguments.
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
      T extends AuditTrailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditTrailGroupByArgs['orderBy'] }
        : { orderBy?: AuditTrailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditTrailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditTrailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditTrail model
   */
  readonly fields: AuditTrailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditTrail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditTrailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends AuditTrail$organizationArgs<ExtArgs> = {}>(args?: Subset<T, AuditTrail$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditTrail model
   */ 
  interface AuditTrailFieldRefs {
    readonly id: FieldRef<"AuditTrail", 'String'>
    readonly serviceName: FieldRef<"AuditTrail", 'String'>
    readonly tableName: FieldRef<"AuditTrail", 'String'>
    readonly tableId: FieldRef<"AuditTrail", 'String'>
    readonly action: FieldRef<"AuditTrail", 'String'>
    readonly oldDetails: FieldRef<"AuditTrail", 'Json'>
    readonly newDetails: FieldRef<"AuditTrail", 'Json'>
    readonly organizationId: FieldRef<"AuditTrail", 'String'>
    readonly createdUserId: FieldRef<"AuditTrail", 'String'>
    readonly createdAt: FieldRef<"AuditTrail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditTrail findUnique
   */
  export type AuditTrailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrail to fetch.
     */
    where: AuditTrailWhereUniqueInput
  }

  /**
   * AuditTrail findUniqueOrThrow
   */
  export type AuditTrailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrail to fetch.
     */
    where: AuditTrailWhereUniqueInput
  }

  /**
   * AuditTrail findFirst
   */
  export type AuditTrailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrail to fetch.
     */
    where?: AuditTrailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTrails to fetch.
     */
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditTrails.
     */
    cursor?: AuditTrailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTrails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTrails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditTrails.
     */
    distinct?: AuditTrailScalarFieldEnum | AuditTrailScalarFieldEnum[]
  }

  /**
   * AuditTrail findFirstOrThrow
   */
  export type AuditTrailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrail to fetch.
     */
    where?: AuditTrailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTrails to fetch.
     */
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditTrails.
     */
    cursor?: AuditTrailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTrails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTrails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditTrails.
     */
    distinct?: AuditTrailScalarFieldEnum | AuditTrailScalarFieldEnum[]
  }

  /**
   * AuditTrail findMany
   */
  export type AuditTrailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter, which AuditTrails to fetch.
     */
    where?: AuditTrailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditTrails to fetch.
     */
    orderBy?: AuditTrailOrderByWithRelationInput | AuditTrailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditTrails.
     */
    cursor?: AuditTrailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditTrails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditTrails.
     */
    skip?: number
    distinct?: AuditTrailScalarFieldEnum | AuditTrailScalarFieldEnum[]
  }

  /**
   * AuditTrail create
   */
  export type AuditTrailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditTrail.
     */
    data: XOR<AuditTrailCreateInput, AuditTrailUncheckedCreateInput>
  }

  /**
   * AuditTrail createMany
   */
  export type AuditTrailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditTrails.
     */
    data: AuditTrailCreateManyInput | AuditTrailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditTrail update
   */
  export type AuditTrailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditTrail.
     */
    data: XOR<AuditTrailUpdateInput, AuditTrailUncheckedUpdateInput>
    /**
     * Choose, which AuditTrail to update.
     */
    where: AuditTrailWhereUniqueInput
  }

  /**
   * AuditTrail updateMany
   */
  export type AuditTrailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditTrails.
     */
    data: XOR<AuditTrailUpdateManyMutationInput, AuditTrailUncheckedUpdateManyInput>
    /**
     * Filter which AuditTrails to update
     */
    where?: AuditTrailWhereInput
    /**
     * Limit how many AuditTrails to update.
     */
    limit?: number
  }

  /**
   * AuditTrail upsert
   */
  export type AuditTrailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditTrail to update in case it exists.
     */
    where: AuditTrailWhereUniqueInput
    /**
     * In case the AuditTrail found by the `where` argument doesn't exist, create a new AuditTrail with this data.
     */
    create: XOR<AuditTrailCreateInput, AuditTrailUncheckedCreateInput>
    /**
     * In case the AuditTrail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditTrailUpdateInput, AuditTrailUncheckedUpdateInput>
  }

  /**
   * AuditTrail delete
   */
  export type AuditTrailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
    /**
     * Filter which AuditTrail to delete.
     */
    where: AuditTrailWhereUniqueInput
  }

  /**
   * AuditTrail deleteMany
   */
  export type AuditTrailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditTrails to delete
     */
    where?: AuditTrailWhereInput
    /**
     * Limit how many AuditTrails to delete.
     */
    limit?: number
  }

  /**
   * AuditTrail.organization
   */
  export type AuditTrail$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * AuditTrail without action
   */
  export type AuditTrailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditTrail
     */
    select?: AuditTrailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditTrail
     */
    omit?: AuditTrailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditTrailInclude<ExtArgs> | null
  }


  /**
   * Model UserAction
   */

  export type AggregateUserAction = {
    _count: UserActionCountAggregateOutputType | null
    _min: UserActionMinAggregateOutputType | null
    _max: UserActionMaxAggregateOutputType | null
  }

  export type UserActionMinAggregateOutputType = {
    id: string | null
    serviceName: string | null
    tableName: string | null
    tableId: string | null
    action: string | null
    ipAddress: string | null
    userAgent: string | null
    organizationId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type UserActionMaxAggregateOutputType = {
    id: string | null
    serviceName: string | null
    tableName: string | null
    tableId: string | null
    action: string | null
    ipAddress: string | null
    userAgent: string | null
    organizationId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type UserActionCountAggregateOutputType = {
    id: number
    serviceName: number
    tableName: number
    tableId: number
    action: number
    actionDetails: number
    ipAddress: number
    userAgent: number
    organizationId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type UserActionMinAggregateInputType = {
    id?: true
    serviceName?: true
    tableName?: true
    tableId?: true
    action?: true
    ipAddress?: true
    userAgent?: true
    organizationId?: true
    userId?: true
    createdAt?: true
  }

  export type UserActionMaxAggregateInputType = {
    id?: true
    serviceName?: true
    tableName?: true
    tableId?: true
    action?: true
    ipAddress?: true
    userAgent?: true
    organizationId?: true
    userId?: true
    createdAt?: true
  }

  export type UserActionCountAggregateInputType = {
    id?: true
    serviceName?: true
    tableName?: true
    tableId?: true
    action?: true
    actionDetails?: true
    ipAddress?: true
    userAgent?: true
    organizationId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type UserActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAction to aggregate.
     */
    where?: UserActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActions to fetch.
     */
    orderBy?: UserActionOrderByWithRelationInput | UserActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserActions
    **/
    _count?: true | UserActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserActionMaxAggregateInputType
  }

  export type GetUserActionAggregateType<T extends UserActionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAction[P]>
      : GetScalarType<T[P], AggregateUserAction[P]>
  }




  export type UserActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActionWhereInput
    orderBy?: UserActionOrderByWithAggregationInput | UserActionOrderByWithAggregationInput[]
    by: UserActionScalarFieldEnum[] | UserActionScalarFieldEnum
    having?: UserActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserActionCountAggregateInputType | true
    _min?: UserActionMinAggregateInputType
    _max?: UserActionMaxAggregateInputType
  }

  export type UserActionGroupByOutputType = {
    id: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails: JsonValue
    ipAddress: string
    userAgent: string
    organizationId: string | null
    userId: string
    createdAt: Date
    _count: UserActionCountAggregateOutputType | null
    _min: UserActionMinAggregateOutputType | null
    _max: UserActionMaxAggregateOutputType | null
  }

  type GetUserActionGroupByPayload<T extends UserActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserActionGroupByOutputType[P]>
            : GetScalarType<T[P], UserActionGroupByOutputType[P]>
        }
      >
    >


  export type UserActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceName?: boolean
    tableName?: boolean
    tableId?: boolean
    action?: boolean
    actionDetails?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
    organization?: boolean | UserAction$organizationArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAction"]>



  export type UserActionSelectScalar = {
    id?: boolean
    serviceName?: boolean
    tableName?: boolean
    tableId?: boolean
    action?: boolean
    actionDetails?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type UserActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceName" | "tableName" | "tableId" | "action" | "actionDetails" | "ipAddress" | "userAgent" | "organizationId" | "userId" | "createdAt", ExtArgs["result"]["userAction"]>
  export type UserActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | UserAction$organizationArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAction"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceName: string
      tableName: string
      tableId: string
      action: string
      actionDetails: Prisma.JsonValue
      ipAddress: string
      userAgent: string
      organizationId: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["userAction"]>
    composites: {}
  }

  type UserActionGetPayload<S extends boolean | null | undefined | UserActionDefaultArgs> = $Result.GetResult<Prisma.$UserActionPayload, S>

  type UserActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserActionCountAggregateInputType | true
    }

  export interface UserActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAction'], meta: { name: 'UserAction' } }
    /**
     * Find zero or one UserAction that matches the filter.
     * @param {UserActionFindUniqueArgs} args - Arguments to find a UserAction
     * @example
     * // Get one UserAction
     * const userAction = await prisma.userAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserActionFindUniqueArgs>(args: SelectSubset<T, UserActionFindUniqueArgs<ExtArgs>>): Prisma__UserActionClient<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserActionFindUniqueOrThrowArgs} args - Arguments to find a UserAction
     * @example
     * // Get one UserAction
     * const userAction = await prisma.userAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserActionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserActionClient<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionFindFirstArgs} args - Arguments to find a UserAction
     * @example
     * // Get one UserAction
     * const userAction = await prisma.userAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserActionFindFirstArgs>(args?: SelectSubset<T, UserActionFindFirstArgs<ExtArgs>>): Prisma__UserActionClient<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionFindFirstOrThrowArgs} args - Arguments to find a UserAction
     * @example
     * // Get one UserAction
     * const userAction = await prisma.userAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserActionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserActionClient<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserActions
     * const userActions = await prisma.userAction.findMany()
     * 
     * // Get first 10 UserActions
     * const userActions = await prisma.userAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userActionWithIdOnly = await prisma.userAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserActionFindManyArgs>(args?: SelectSubset<T, UserActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAction.
     * @param {UserActionCreateArgs} args - Arguments to create a UserAction.
     * @example
     * // Create one UserAction
     * const UserAction = await prisma.userAction.create({
     *   data: {
     *     // ... data to create a UserAction
     *   }
     * })
     * 
     */
    create<T extends UserActionCreateArgs>(args: SelectSubset<T, UserActionCreateArgs<ExtArgs>>): Prisma__UserActionClient<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserActions.
     * @param {UserActionCreateManyArgs} args - Arguments to create many UserActions.
     * @example
     * // Create many UserActions
     * const userAction = await prisma.userAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserActionCreateManyArgs>(args?: SelectSubset<T, UserActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAction.
     * @param {UserActionDeleteArgs} args - Arguments to delete one UserAction.
     * @example
     * // Delete one UserAction
     * const UserAction = await prisma.userAction.delete({
     *   where: {
     *     // ... filter to delete one UserAction
     *   }
     * })
     * 
     */
    delete<T extends UserActionDeleteArgs>(args: SelectSubset<T, UserActionDeleteArgs<ExtArgs>>): Prisma__UserActionClient<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAction.
     * @param {UserActionUpdateArgs} args - Arguments to update one UserAction.
     * @example
     * // Update one UserAction
     * const userAction = await prisma.userAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserActionUpdateArgs>(args: SelectSubset<T, UserActionUpdateArgs<ExtArgs>>): Prisma__UserActionClient<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserActions.
     * @param {UserActionDeleteManyArgs} args - Arguments to filter UserActions to delete.
     * @example
     * // Delete a few UserActions
     * const { count } = await prisma.userAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserActionDeleteManyArgs>(args?: SelectSubset<T, UserActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserActions
     * const userAction = await prisma.userAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserActionUpdateManyArgs>(args: SelectSubset<T, UserActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAction.
     * @param {UserActionUpsertArgs} args - Arguments to update or create a UserAction.
     * @example
     * // Update or create a UserAction
     * const userAction = await prisma.userAction.upsert({
     *   create: {
     *     // ... data to create a UserAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAction we want to update
     *   }
     * })
     */
    upsert<T extends UserActionUpsertArgs>(args: SelectSubset<T, UserActionUpsertArgs<ExtArgs>>): Prisma__UserActionClient<$Result.GetResult<Prisma.$UserActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionCountArgs} args - Arguments to filter UserActions to count.
     * @example
     * // Count the number of UserActions
     * const count = await prisma.userAction.count({
     *   where: {
     *     // ... the filter for the UserActions we want to count
     *   }
     * })
    **/
    count<T extends UserActionCountArgs>(
      args?: Subset<T, UserActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserActionAggregateArgs>(args: Subset<T, UserActionAggregateArgs>): Prisma.PrismaPromise<GetUserActionAggregateType<T>>

    /**
     * Group by UserAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActionGroupByArgs} args - Group by arguments.
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
      T extends UserActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserActionGroupByArgs['orderBy'] }
        : { orderBy?: UserActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAction model
   */
  readonly fields: UserActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends UserAction$organizationArgs<ExtArgs> = {}>(args?: Subset<T, UserAction$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAction model
   */ 
  interface UserActionFieldRefs {
    readonly id: FieldRef<"UserAction", 'String'>
    readonly serviceName: FieldRef<"UserAction", 'String'>
    readonly tableName: FieldRef<"UserAction", 'String'>
    readonly tableId: FieldRef<"UserAction", 'String'>
    readonly action: FieldRef<"UserAction", 'String'>
    readonly actionDetails: FieldRef<"UserAction", 'Json'>
    readonly ipAddress: FieldRef<"UserAction", 'String'>
    readonly userAgent: FieldRef<"UserAction", 'String'>
    readonly organizationId: FieldRef<"UserAction", 'String'>
    readonly userId: FieldRef<"UserAction", 'String'>
    readonly createdAt: FieldRef<"UserAction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAction findUnique
   */
  export type UserActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    /**
     * Filter, which UserAction to fetch.
     */
    where: UserActionWhereUniqueInput
  }

  /**
   * UserAction findUniqueOrThrow
   */
  export type UserActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    /**
     * Filter, which UserAction to fetch.
     */
    where: UserActionWhereUniqueInput
  }

  /**
   * UserAction findFirst
   */
  export type UserActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    /**
     * Filter, which UserAction to fetch.
     */
    where?: UserActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActions to fetch.
     */
    orderBy?: UserActionOrderByWithRelationInput | UserActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActions.
     */
    cursor?: UserActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActions.
     */
    distinct?: UserActionScalarFieldEnum | UserActionScalarFieldEnum[]
  }

  /**
   * UserAction findFirstOrThrow
   */
  export type UserActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    /**
     * Filter, which UserAction to fetch.
     */
    where?: UserActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActions to fetch.
     */
    orderBy?: UserActionOrderByWithRelationInput | UserActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActions.
     */
    cursor?: UserActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActions.
     */
    distinct?: UserActionScalarFieldEnum | UserActionScalarFieldEnum[]
  }

  /**
   * UserAction findMany
   */
  export type UserActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    /**
     * Filter, which UserActions to fetch.
     */
    where?: UserActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActions to fetch.
     */
    orderBy?: UserActionOrderByWithRelationInput | UserActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserActions.
     */
    cursor?: UserActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActions.
     */
    skip?: number
    distinct?: UserActionScalarFieldEnum | UserActionScalarFieldEnum[]
  }

  /**
   * UserAction create
   */
  export type UserActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAction.
     */
    data: XOR<UserActionCreateInput, UserActionUncheckedCreateInput>
  }

  /**
   * UserAction createMany
   */
  export type UserActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserActions.
     */
    data: UserActionCreateManyInput | UserActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAction update
   */
  export type UserActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAction.
     */
    data: XOR<UserActionUpdateInput, UserActionUncheckedUpdateInput>
    /**
     * Choose, which UserAction to update.
     */
    where: UserActionWhereUniqueInput
  }

  /**
   * UserAction updateMany
   */
  export type UserActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserActions.
     */
    data: XOR<UserActionUpdateManyMutationInput, UserActionUncheckedUpdateManyInput>
    /**
     * Filter which UserActions to update
     */
    where?: UserActionWhereInput
    /**
     * Limit how many UserActions to update.
     */
    limit?: number
  }

  /**
   * UserAction upsert
   */
  export type UserActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAction to update in case it exists.
     */
    where: UserActionWhereUniqueInput
    /**
     * In case the UserAction found by the `where` argument doesn't exist, create a new UserAction with this data.
     */
    create: XOR<UserActionCreateInput, UserActionUncheckedCreateInput>
    /**
     * In case the UserAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserActionUpdateInput, UserActionUncheckedUpdateInput>
  }

  /**
   * UserAction delete
   */
  export type UserActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
    /**
     * Filter which UserAction to delete.
     */
    where: UserActionWhereUniqueInput
  }

  /**
   * UserAction deleteMany
   */
  export type UserActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActions to delete
     */
    where?: UserActionWhereInput
    /**
     * Limit how many UserActions to delete.
     */
    limit?: number
  }

  /**
   * UserAction.organization
   */
  export type UserAction$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * UserAction without action
   */
  export type UserActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAction
     */
    select?: UserActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAction
     */
    omit?: UserActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActionInclude<ExtArgs> | null
  }


  /**
   * Model EventLog
   */

  export type AggregateEventLog = {
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  export type EventLogMinAggregateOutputType = {
    id: string | null
    serviceName: string | null
    eventType: string | null
    organizationId: string | null
    createdAt: Date | null
  }

  export type EventLogMaxAggregateOutputType = {
    id: string | null
    serviceName: string | null
    eventType: string | null
    organizationId: string | null
    createdAt: Date | null
  }

  export type EventLogCountAggregateOutputType = {
    id: number
    serviceName: number
    eventType: number
    payload: number
    organizationId: number
    createdAt: number
    _all: number
  }


  export type EventLogMinAggregateInputType = {
    id?: true
    serviceName?: true
    eventType?: true
    organizationId?: true
    createdAt?: true
  }

  export type EventLogMaxAggregateInputType = {
    id?: true
    serviceName?: true
    eventType?: true
    organizationId?: true
    createdAt?: true
  }

  export type EventLogCountAggregateInputType = {
    id?: true
    serviceName?: true
    eventType?: true
    payload?: true
    organizationId?: true
    createdAt?: true
    _all?: true
  }

  export type EventLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLog to aggregate.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventLogs
    **/
    _count?: true | EventLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventLogMaxAggregateInputType
  }

  export type GetEventLogAggregateType<T extends EventLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEventLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventLog[P]>
      : GetScalarType<T[P], AggregateEventLog[P]>
  }




  export type EventLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithAggregationInput | EventLogOrderByWithAggregationInput[]
    by: EventLogScalarFieldEnum[] | EventLogScalarFieldEnum
    having?: EventLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventLogCountAggregateInputType | true
    _min?: EventLogMinAggregateInputType
    _max?: EventLogMaxAggregateInputType
  }

  export type EventLogGroupByOutputType = {
    id: string
    serviceName: string
    eventType: string
    payload: JsonValue
    organizationId: string | null
    createdAt: Date
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  type GetEventLogGroupByPayload<T extends EventLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventLogGroupByOutputType[P]>
            : GetScalarType<T[P], EventLogGroupByOutputType[P]>
        }
      >
    >


  export type EventLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceName?: boolean
    eventType?: boolean
    payload?: boolean
    organizationId?: boolean
    createdAt?: boolean
    organization?: boolean | EventLog$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["eventLog"]>



  export type EventLogSelectScalar = {
    id?: boolean
    serviceName?: boolean
    eventType?: boolean
    payload?: boolean
    organizationId?: boolean
    createdAt?: boolean
  }

  export type EventLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceName" | "eventType" | "payload" | "organizationId" | "createdAt", ExtArgs["result"]["eventLog"]>
  export type EventLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | EventLog$organizationArgs<ExtArgs>
  }

  export type $EventLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventLog"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceName: string
      eventType: string
      payload: Prisma.JsonValue
      organizationId: string | null
      createdAt: Date
    }, ExtArgs["result"]["eventLog"]>
    composites: {}
  }

  type EventLogGetPayload<S extends boolean | null | undefined | EventLogDefaultArgs> = $Result.GetResult<Prisma.$EventLogPayload, S>

  type EventLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventLogCountAggregateInputType | true
    }

  export interface EventLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventLog'], meta: { name: 'EventLog' } }
    /**
     * Find zero or one EventLog that matches the filter.
     * @param {EventLogFindUniqueArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventLogFindUniqueArgs>(args: SelectSubset<T, EventLogFindUniqueArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventLogFindUniqueOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EventLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventLogFindFirstArgs>(args?: SelectSubset<T, EventLogFindFirstArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EventLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventLogs
     * const eventLogs = await prisma.eventLog.findMany()
     * 
     * // Get first 10 EventLogs
     * const eventLogs = await prisma.eventLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventLogWithIdOnly = await prisma.eventLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventLogFindManyArgs>(args?: SelectSubset<T, EventLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventLog.
     * @param {EventLogCreateArgs} args - Arguments to create a EventLog.
     * @example
     * // Create one EventLog
     * const EventLog = await prisma.eventLog.create({
     *   data: {
     *     // ... data to create a EventLog
     *   }
     * })
     * 
     */
    create<T extends EventLogCreateArgs>(args: SelectSubset<T, EventLogCreateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventLogs.
     * @param {EventLogCreateManyArgs} args - Arguments to create many EventLogs.
     * @example
     * // Create many EventLogs
     * const eventLog = await prisma.eventLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventLogCreateManyArgs>(args?: SelectSubset<T, EventLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EventLog.
     * @param {EventLogDeleteArgs} args - Arguments to delete one EventLog.
     * @example
     * // Delete one EventLog
     * const EventLog = await prisma.eventLog.delete({
     *   where: {
     *     // ... filter to delete one EventLog
     *   }
     * })
     * 
     */
    delete<T extends EventLogDeleteArgs>(args: SelectSubset<T, EventLogDeleteArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventLog.
     * @param {EventLogUpdateArgs} args - Arguments to update one EventLog.
     * @example
     * // Update one EventLog
     * const eventLog = await prisma.eventLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventLogUpdateArgs>(args: SelectSubset<T, EventLogUpdateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventLogs.
     * @param {EventLogDeleteManyArgs} args - Arguments to filter EventLogs to delete.
     * @example
     * // Delete a few EventLogs
     * const { count } = await prisma.eventLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventLogDeleteManyArgs>(args?: SelectSubset<T, EventLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventLogs
     * const eventLog = await prisma.eventLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventLogUpdateManyArgs>(args: SelectSubset<T, EventLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventLog.
     * @param {EventLogUpsertArgs} args - Arguments to update or create a EventLog.
     * @example
     * // Update or create a EventLog
     * const eventLog = await prisma.eventLog.upsert({
     *   create: {
     *     // ... data to create a EventLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventLog we want to update
     *   }
     * })
     */
    upsert<T extends EventLogUpsertArgs>(args: SelectSubset<T, EventLogUpsertArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogCountArgs} args - Arguments to filter EventLogs to count.
     * @example
     * // Count the number of EventLogs
     * const count = await prisma.eventLog.count({
     *   where: {
     *     // ... the filter for the EventLogs we want to count
     *   }
     * })
    **/
    count<T extends EventLogCountArgs>(
      args?: Subset<T, EventLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventLogAggregateArgs>(args: Subset<T, EventLogAggregateArgs>): Prisma.PrismaPromise<GetEventLogAggregateType<T>>

    /**
     * Group by EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogGroupByArgs} args - Group by arguments.
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
      T extends EventLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventLogGroupByArgs['orderBy'] }
        : { orderBy?: EventLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventLog model
   */
  readonly fields: EventLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends EventLog$organizationArgs<ExtArgs> = {}>(args?: Subset<T, EventLog$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventLog model
   */ 
  interface EventLogFieldRefs {
    readonly id: FieldRef<"EventLog", 'String'>
    readonly serviceName: FieldRef<"EventLog", 'String'>
    readonly eventType: FieldRef<"EventLog", 'String'>
    readonly payload: FieldRef<"EventLog", 'Json'>
    readonly organizationId: FieldRef<"EventLog", 'String'>
    readonly createdAt: FieldRef<"EventLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventLog findUnique
   */
  export type EventLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findUniqueOrThrow
   */
  export type EventLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findFirst
   */
  export type EventLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findFirstOrThrow
   */
  export type EventLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findMany
   */
  export type EventLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLogs to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog create
   */
  export type EventLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EventLog.
     */
    data: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
  }

  /**
   * EventLog createMany
   */
  export type EventLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventLog update
   */
  export type EventLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EventLog.
     */
    data: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
    /**
     * Choose, which EventLog to update.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog updateMany
   */
  export type EventLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventLogs.
     */
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyInput>
    /**
     * Filter which EventLogs to update
     */
    where?: EventLogWhereInput
    /**
     * Limit how many EventLogs to update.
     */
    limit?: number
  }

  /**
   * EventLog upsert
   */
  export type EventLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EventLog to update in case it exists.
     */
    where: EventLogWhereUniqueInput
    /**
     * In case the EventLog found by the `where` argument doesn't exist, create a new EventLog with this data.
     */
    create: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
    /**
     * In case the EventLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
  }

  /**
   * EventLog delete
   */
  export type EventLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter which EventLog to delete.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog deleteMany
   */
  export type EventLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLogs to delete
     */
    where?: EventLogWhereInput
    /**
     * Limit how many EventLogs to delete.
     */
    limit?: number
  }

  /**
   * EventLog.organization
   */
  export type EventLog$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * EventLog without action
   */
  export type EventLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
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


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logoPath: 'logoPath',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    accessType: 'accessType',
    organizationId: 'organizationId',
    isActive: 'isActive',
    isLogged: 'isLogged',
    isSuperAdmin: 'isSuperAdmin',
    lastLoggedAt: 'lastLoggedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuditTrailScalarFieldEnum: {
    id: 'id',
    serviceName: 'serviceName',
    tableName: 'tableName',
    tableId: 'tableId',
    action: 'action',
    oldDetails: 'oldDetails',
    newDetails: 'newDetails',
    organizationId: 'organizationId',
    createdUserId: 'createdUserId',
    createdAt: 'createdAt'
  };

  export type AuditTrailScalarFieldEnum = (typeof AuditTrailScalarFieldEnum)[keyof typeof AuditTrailScalarFieldEnum]


  export const UserActionScalarFieldEnum: {
    id: 'id',
    serviceName: 'serviceName',
    tableName: 'tableName',
    tableId: 'tableId',
    action: 'action',
    actionDetails: 'actionDetails',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    organizationId: 'organizationId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type UserActionScalarFieldEnum = (typeof UserActionScalarFieldEnum)[keyof typeof UserActionScalarFieldEnum]


  export const EventLogScalarFieldEnum: {
    id: 'id',
    serviceName: 'serviceName',
    eventType: 'eventType',
    payload: 'payload',
    organizationId: 'organizationId',
    createdAt: 'createdAt'
  };

  export type EventLogScalarFieldEnum = (typeof EventLogScalarFieldEnum)[keyof typeof EventLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const OrganizationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    logoPath: 'logoPath'
  };

  export type OrganizationOrderByRelevanceFieldEnum = (typeof OrganizationOrderByRelevanceFieldEnum)[keyof typeof OrganizationOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    accessType: 'accessType',
    organizationId: 'organizationId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const AuditTrailOrderByRelevanceFieldEnum: {
    id: 'id',
    serviceName: 'serviceName',
    tableName: 'tableName',
    tableId: 'tableId',
    action: 'action',
    organizationId: 'organizationId',
    createdUserId: 'createdUserId'
  };

  export type AuditTrailOrderByRelevanceFieldEnum = (typeof AuditTrailOrderByRelevanceFieldEnum)[keyof typeof AuditTrailOrderByRelevanceFieldEnum]


  export const UserActionOrderByRelevanceFieldEnum: {
    id: 'id',
    serviceName: 'serviceName',
    tableName: 'tableName',
    tableId: 'tableId',
    action: 'action',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    organizationId: 'organizationId',
    userId: 'userId'
  };

  export type UserActionOrderByRelevanceFieldEnum = (typeof UserActionOrderByRelevanceFieldEnum)[keyof typeof UserActionOrderByRelevanceFieldEnum]


  export const EventLogOrderByRelevanceFieldEnum: {
    id: 'id',
    serviceName: 'serviceName',
    eventType: 'eventType',
    organizationId: 'organizationId'
  };

  export type EventLogOrderByRelevanceFieldEnum = (typeof EventLogOrderByRelevanceFieldEnum)[keyof typeof EventLogOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    logoPath?: StringNullableFilter<"Organization"> | string | null
    isActive?: BoolFilter<"Organization"> | boolean
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    users?: UserListRelationFilter
    auditTrails?: AuditTrailListRelationFilter
    userActions?: UserActionListRelationFilter
    eventLogs?: EventLogListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logoPath?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    auditTrails?: AuditTrailOrderByRelationAggregateInput
    userActions?: UserActionOrderByRelationAggregateInput
    eventLogs?: EventLogOrderByRelationAggregateInput
    _relevance?: OrganizationOrderByRelevanceInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    logoPath?: StringNullableFilter<"Organization"> | string | null
    isActive?: BoolFilter<"Organization"> | boolean
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    users?: UserListRelationFilter
    auditTrails?: AuditTrailListRelationFilter
    userActions?: UserActionListRelationFilter
    eventLogs?: EventLogListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logoPath?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    logoPath?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    isActive?: BoolWithAggregatesFilter<"Organization"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    accessType?: StringFilter<"User"> | string
    organizationId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isLogged?: BoolFilter<"User"> | boolean
    isSuperAdmin?: BoolFilter<"User"> | boolean
    lastLoggedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    auditTrailsCreated?: AuditTrailListRelationFilter
    userActions?: UserActionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accessType?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isLogged?: SortOrder
    isSuperAdmin?: SortOrder
    lastLoggedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    organization?: OrganizationOrderByWithRelationInput
    auditTrailsCreated?: AuditTrailOrderByRelationAggregateInput
    userActions?: UserActionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    accessType?: StringFilter<"User"> | string
    organizationId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isLogged?: BoolFilter<"User"> | boolean
    isSuperAdmin?: BoolFilter<"User"> | boolean
    lastLoggedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    auditTrailsCreated?: AuditTrailListRelationFilter
    userActions?: UserActionListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accessType?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isLogged?: SortOrder
    isSuperAdmin?: SortOrder
    lastLoggedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    accessType?: StringWithAggregatesFilter<"User"> | string
    organizationId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isLogged?: BoolWithAggregatesFilter<"User"> | boolean
    isSuperAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoggedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AuditTrailWhereInput = {
    AND?: AuditTrailWhereInput | AuditTrailWhereInput[]
    OR?: AuditTrailWhereInput[]
    NOT?: AuditTrailWhereInput | AuditTrailWhereInput[]
    id?: StringFilter<"AuditTrail"> | string
    serviceName?: StringFilter<"AuditTrail"> | string
    tableName?: StringFilter<"AuditTrail"> | string
    tableId?: StringFilter<"AuditTrail"> | string
    action?: StringFilter<"AuditTrail"> | string
    oldDetails?: JsonFilter<"AuditTrail">
    newDetails?: JsonFilter<"AuditTrail">
    organizationId?: StringNullableFilter<"AuditTrail"> | string | null
    createdUserId?: StringFilter<"AuditTrail"> | string
    createdAt?: DateTimeFilter<"AuditTrail"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    createdUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditTrailOrderByWithRelationInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    oldDetails?: SortOrder
    newDetails?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdUserId?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    createdUser?: UserOrderByWithRelationInput
    _relevance?: AuditTrailOrderByRelevanceInput
  }

  export type AuditTrailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditTrailWhereInput | AuditTrailWhereInput[]
    OR?: AuditTrailWhereInput[]
    NOT?: AuditTrailWhereInput | AuditTrailWhereInput[]
    serviceName?: StringFilter<"AuditTrail"> | string
    tableName?: StringFilter<"AuditTrail"> | string
    tableId?: StringFilter<"AuditTrail"> | string
    action?: StringFilter<"AuditTrail"> | string
    oldDetails?: JsonFilter<"AuditTrail">
    newDetails?: JsonFilter<"AuditTrail">
    organizationId?: StringNullableFilter<"AuditTrail"> | string | null
    createdUserId?: StringFilter<"AuditTrail"> | string
    createdAt?: DateTimeFilter<"AuditTrail"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    createdUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditTrailOrderByWithAggregationInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    oldDetails?: SortOrder
    newDetails?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdUserId?: SortOrder
    createdAt?: SortOrder
    _count?: AuditTrailCountOrderByAggregateInput
    _max?: AuditTrailMaxOrderByAggregateInput
    _min?: AuditTrailMinOrderByAggregateInput
  }

  export type AuditTrailScalarWhereWithAggregatesInput = {
    AND?: AuditTrailScalarWhereWithAggregatesInput | AuditTrailScalarWhereWithAggregatesInput[]
    OR?: AuditTrailScalarWhereWithAggregatesInput[]
    NOT?: AuditTrailScalarWhereWithAggregatesInput | AuditTrailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditTrail"> | string
    serviceName?: StringWithAggregatesFilter<"AuditTrail"> | string
    tableName?: StringWithAggregatesFilter<"AuditTrail"> | string
    tableId?: StringWithAggregatesFilter<"AuditTrail"> | string
    action?: StringWithAggregatesFilter<"AuditTrail"> | string
    oldDetails?: JsonWithAggregatesFilter<"AuditTrail">
    newDetails?: JsonWithAggregatesFilter<"AuditTrail">
    organizationId?: StringNullableWithAggregatesFilter<"AuditTrail"> | string | null
    createdUserId?: StringWithAggregatesFilter<"AuditTrail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditTrail"> | Date | string
  }

  export type UserActionWhereInput = {
    AND?: UserActionWhereInput | UserActionWhereInput[]
    OR?: UserActionWhereInput[]
    NOT?: UserActionWhereInput | UserActionWhereInput[]
    id?: StringFilter<"UserAction"> | string
    serviceName?: StringFilter<"UserAction"> | string
    tableName?: StringFilter<"UserAction"> | string
    tableId?: StringFilter<"UserAction"> | string
    action?: StringFilter<"UserAction"> | string
    actionDetails?: JsonFilter<"UserAction">
    ipAddress?: StringFilter<"UserAction"> | string
    userAgent?: StringFilter<"UserAction"> | string
    organizationId?: StringNullableFilter<"UserAction"> | string | null
    userId?: StringFilter<"UserAction"> | string
    createdAt?: DateTimeFilter<"UserAction"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserActionOrderByWithRelationInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    actionDetails?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: UserActionOrderByRelevanceInput
  }

  export type UserActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserActionWhereInput | UserActionWhereInput[]
    OR?: UserActionWhereInput[]
    NOT?: UserActionWhereInput | UserActionWhereInput[]
    serviceName?: StringFilter<"UserAction"> | string
    tableName?: StringFilter<"UserAction"> | string
    tableId?: StringFilter<"UserAction"> | string
    action?: StringFilter<"UserAction"> | string
    actionDetails?: JsonFilter<"UserAction">
    ipAddress?: StringFilter<"UserAction"> | string
    userAgent?: StringFilter<"UserAction"> | string
    organizationId?: StringNullableFilter<"UserAction"> | string | null
    userId?: StringFilter<"UserAction"> | string
    createdAt?: DateTimeFilter<"UserAction"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserActionOrderByWithAggregationInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    actionDetails?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: UserActionCountOrderByAggregateInput
    _max?: UserActionMaxOrderByAggregateInput
    _min?: UserActionMinOrderByAggregateInput
  }

  export type UserActionScalarWhereWithAggregatesInput = {
    AND?: UserActionScalarWhereWithAggregatesInput | UserActionScalarWhereWithAggregatesInput[]
    OR?: UserActionScalarWhereWithAggregatesInput[]
    NOT?: UserActionScalarWhereWithAggregatesInput | UserActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAction"> | string
    serviceName?: StringWithAggregatesFilter<"UserAction"> | string
    tableName?: StringWithAggregatesFilter<"UserAction"> | string
    tableId?: StringWithAggregatesFilter<"UserAction"> | string
    action?: StringWithAggregatesFilter<"UserAction"> | string
    actionDetails?: JsonWithAggregatesFilter<"UserAction">
    ipAddress?: StringWithAggregatesFilter<"UserAction"> | string
    userAgent?: StringWithAggregatesFilter<"UserAction"> | string
    organizationId?: StringNullableWithAggregatesFilter<"UserAction"> | string | null
    userId?: StringWithAggregatesFilter<"UserAction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAction"> | Date | string
  }

  export type EventLogWhereInput = {
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    id?: StringFilter<"EventLog"> | string
    serviceName?: StringFilter<"EventLog"> | string
    eventType?: StringFilter<"EventLog"> | string
    payload?: JsonFilter<"EventLog">
    organizationId?: StringNullableFilter<"EventLog"> | string | null
    createdAt?: DateTimeFilter<"EventLog"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type EventLogOrderByWithRelationInput = {
    id?: SortOrder
    serviceName?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    _relevance?: EventLogOrderByRelevanceInput
  }

  export type EventLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    serviceName?: StringFilter<"EventLog"> | string
    eventType?: StringFilter<"EventLog"> | string
    payload?: JsonFilter<"EventLog">
    organizationId?: StringNullableFilter<"EventLog"> | string | null
    createdAt?: DateTimeFilter<"EventLog"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type EventLogOrderByWithAggregationInput = {
    id?: SortOrder
    serviceName?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventLogCountOrderByAggregateInput
    _max?: EventLogMaxOrderByAggregateInput
    _min?: EventLogMinOrderByAggregateInput
  }

  export type EventLogScalarWhereWithAggregatesInput = {
    AND?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    OR?: EventLogScalarWhereWithAggregatesInput[]
    NOT?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventLog"> | string
    serviceName?: StringWithAggregatesFilter<"EventLog"> | string
    eventType?: StringWithAggregatesFilter<"EventLog"> | string
    payload?: JsonWithAggregatesFilter<"EventLog">
    organizationId?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventLog"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutOrganizationInput
    auditTrails?: AuditTrailCreateNestedManyWithoutOrganizationInput
    userActions?: UserActionCreateNestedManyWithoutOrganizationInput
    eventLogs?: EventLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    auditTrails?: AuditTrailUncheckedCreateNestedManyWithoutOrganizationInput
    userActions?: UserActionUncheckedCreateNestedManyWithoutOrganizationInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutOrganizationNestedInput
    auditTrails?: AuditTrailUpdateManyWithoutOrganizationNestedInput
    userActions?: UserActionUpdateManyWithoutOrganizationNestedInput
    eventLogs?: EventLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    auditTrails?: AuditTrailUncheckedUpdateManyWithoutOrganizationNestedInput
    userActions?: UserActionUncheckedUpdateManyWithoutOrganizationNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    auditTrailsCreated?: AuditTrailCreateNestedManyWithoutCreatedUserInput
    userActions?: UserActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    organizationId?: string | null
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditTrailsCreated?: AuditTrailUncheckedCreateNestedManyWithoutCreatedUserInput
    userActions?: UserActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    auditTrailsCreated?: AuditTrailUpdateManyWithoutCreatedUserNestedInput
    userActions?: UserActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditTrailsCreated?: AuditTrailUncheckedUpdateManyWithoutCreatedUserNestedInput
    userActions?: UserActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    organizationId?: string | null
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditTrailCreateInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutAuditTrailsInput
    createdUser: UserCreateNestedOneWithoutAuditTrailsCreatedInput
  }

  export type AuditTrailUncheckedCreateInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    createdUserId: string
    createdAt?: Date | string
  }

  export type AuditTrailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutAuditTrailsNestedInput
    createdUser?: UserUpdateOneRequiredWithoutAuditTrailsCreatedNestedInput
  }

  export type AuditTrailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditTrailCreateManyInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    createdUserId: string
    createdAt?: Date | string
  }

  export type AuditTrailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditTrailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActionCreateInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    createdAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutUserActionsInput
    user: UserCreateNestedOneWithoutUserActionsInput
  }

  export type UserActionUncheckedCreateInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    organizationId?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type UserActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutUserActionsNestedInput
    user?: UserUpdateOneRequiredWithoutUserActionsNestedInput
  }

  export type UserActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActionCreateManyInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    organizationId?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type UserActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateInput = {
    id?: string
    serviceName: string
    eventType: string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutEventLogsInput
  }

  export type EventLogUncheckedCreateInput = {
    id?: string
    serviceName: string
    eventType: string
    payload?: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type EventLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutEventLogsNestedInput
  }

  export type EventLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateManyInput = {
    id?: string
    serviceName: string
    eventType: string
    payload?: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type EventLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AuditTrailListRelationFilter = {
    every?: AuditTrailWhereInput
    some?: AuditTrailWhereInput
    none?: AuditTrailWhereInput
  }

  export type UserActionListRelationFilter = {
    every?: UserActionWhereInput
    some?: UserActionWhereInput
    none?: UserActionWhereInput
  }

  export type EventLogListRelationFilter = {
    every?: EventLogWhereInput
    some?: EventLogWhereInput
    none?: EventLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditTrailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelevanceInput = {
    fields: OrganizationOrderByRelevanceFieldEnum | OrganizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoPath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoPath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logoPath?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accessType?: SortOrder
    organizationId?: SortOrder
    isActive?: SortOrder
    isLogged?: SortOrder
    isSuperAdmin?: SortOrder
    lastLoggedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accessType?: SortOrder
    organizationId?: SortOrder
    isActive?: SortOrder
    isLogged?: SortOrder
    isSuperAdmin?: SortOrder
    lastLoggedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    accessType?: SortOrder
    organizationId?: SortOrder
    isActive?: SortOrder
    isLogged?: SortOrder
    isSuperAdmin?: SortOrder
    lastLoggedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AuditTrailOrderByRelevanceInput = {
    fields: AuditTrailOrderByRelevanceFieldEnum | AuditTrailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditTrailCountOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    oldDetails?: SortOrder
    newDetails?: SortOrder
    organizationId?: SortOrder
    createdUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditTrailMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    organizationId?: SortOrder
    createdUserId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditTrailMinOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    organizationId?: SortOrder
    createdUserId?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserActionOrderByRelevanceInput = {
    fields: UserActionOrderByRelevanceFieldEnum | UserActionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserActionCountOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    actionDetails?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserActionMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserActionMinOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    tableName?: SortOrder
    tableId?: SortOrder
    action?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventLogOrderByRelevanceInput = {
    fields: EventLogOrderByRelevanceFieldEnum | EventLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventLogCountOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventLogMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    eventType?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventLogMinOrderByAggregateInput = {
    id?: SortOrder
    serviceName?: SortOrder
    eventType?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AuditTrailCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AuditTrailCreateWithoutOrganizationInput, AuditTrailUncheckedCreateWithoutOrganizationInput> | AuditTrailCreateWithoutOrganizationInput[] | AuditTrailUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AuditTrailCreateOrConnectWithoutOrganizationInput | AuditTrailCreateOrConnectWithoutOrganizationInput[]
    createMany?: AuditTrailCreateManyOrganizationInputEnvelope
    connect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
  }

  export type UserActionCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserActionCreateWithoutOrganizationInput, UserActionUncheckedCreateWithoutOrganizationInput> | UserActionCreateWithoutOrganizationInput[] | UserActionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserActionCreateOrConnectWithoutOrganizationInput | UserActionCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserActionCreateManyOrganizationInputEnvelope
    connect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
  }

  export type EventLogCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EventLogCreateWithoutOrganizationInput, EventLogUncheckedCreateWithoutOrganizationInput> | EventLogCreateWithoutOrganizationInput[] | EventLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutOrganizationInput | EventLogCreateOrConnectWithoutOrganizationInput[]
    createMany?: EventLogCreateManyOrganizationInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AuditTrailUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AuditTrailCreateWithoutOrganizationInput, AuditTrailUncheckedCreateWithoutOrganizationInput> | AuditTrailCreateWithoutOrganizationInput[] | AuditTrailUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AuditTrailCreateOrConnectWithoutOrganizationInput | AuditTrailCreateOrConnectWithoutOrganizationInput[]
    createMany?: AuditTrailCreateManyOrganizationInputEnvelope
    connect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
  }

  export type UserActionUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserActionCreateWithoutOrganizationInput, UserActionUncheckedCreateWithoutOrganizationInput> | UserActionCreateWithoutOrganizationInput[] | UserActionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserActionCreateOrConnectWithoutOrganizationInput | UserActionCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserActionCreateManyOrganizationInputEnvelope
    connect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
  }

  export type EventLogUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EventLogCreateWithoutOrganizationInput, EventLogUncheckedCreateWithoutOrganizationInput> | EventLogCreateWithoutOrganizationInput[] | EventLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutOrganizationInput | EventLogCreateOrConnectWithoutOrganizationInput[]
    createMany?: EventLogCreateManyOrganizationInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AuditTrailUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AuditTrailCreateWithoutOrganizationInput, AuditTrailUncheckedCreateWithoutOrganizationInput> | AuditTrailCreateWithoutOrganizationInput[] | AuditTrailUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AuditTrailCreateOrConnectWithoutOrganizationInput | AuditTrailCreateOrConnectWithoutOrganizationInput[]
    upsert?: AuditTrailUpsertWithWhereUniqueWithoutOrganizationInput | AuditTrailUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AuditTrailCreateManyOrganizationInputEnvelope
    set?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    disconnect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    delete?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    connect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    update?: AuditTrailUpdateWithWhereUniqueWithoutOrganizationInput | AuditTrailUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AuditTrailUpdateManyWithWhereWithoutOrganizationInput | AuditTrailUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AuditTrailScalarWhereInput | AuditTrailScalarWhereInput[]
  }

  export type UserActionUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserActionCreateWithoutOrganizationInput, UserActionUncheckedCreateWithoutOrganizationInput> | UserActionCreateWithoutOrganizationInput[] | UserActionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserActionCreateOrConnectWithoutOrganizationInput | UserActionCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserActionUpsertWithWhereUniqueWithoutOrganizationInput | UserActionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserActionCreateManyOrganizationInputEnvelope
    set?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    disconnect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    delete?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    connect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    update?: UserActionUpdateWithWhereUniqueWithoutOrganizationInput | UserActionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserActionUpdateManyWithWhereWithoutOrganizationInput | UserActionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserActionScalarWhereInput | UserActionScalarWhereInput[]
  }

  export type EventLogUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EventLogCreateWithoutOrganizationInput, EventLogUncheckedCreateWithoutOrganizationInput> | EventLogCreateWithoutOrganizationInput[] | EventLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutOrganizationInput | EventLogCreateOrConnectWithoutOrganizationInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutOrganizationInput | EventLogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EventLogCreateManyOrganizationInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutOrganizationInput | EventLogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutOrganizationInput | EventLogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AuditTrailUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AuditTrailCreateWithoutOrganizationInput, AuditTrailUncheckedCreateWithoutOrganizationInput> | AuditTrailCreateWithoutOrganizationInput[] | AuditTrailUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AuditTrailCreateOrConnectWithoutOrganizationInput | AuditTrailCreateOrConnectWithoutOrganizationInput[]
    upsert?: AuditTrailUpsertWithWhereUniqueWithoutOrganizationInput | AuditTrailUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AuditTrailCreateManyOrganizationInputEnvelope
    set?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    disconnect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    delete?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    connect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    update?: AuditTrailUpdateWithWhereUniqueWithoutOrganizationInput | AuditTrailUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AuditTrailUpdateManyWithWhereWithoutOrganizationInput | AuditTrailUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AuditTrailScalarWhereInput | AuditTrailScalarWhereInput[]
  }

  export type UserActionUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserActionCreateWithoutOrganizationInput, UserActionUncheckedCreateWithoutOrganizationInput> | UserActionCreateWithoutOrganizationInput[] | UserActionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserActionCreateOrConnectWithoutOrganizationInput | UserActionCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserActionUpsertWithWhereUniqueWithoutOrganizationInput | UserActionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserActionCreateManyOrganizationInputEnvelope
    set?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    disconnect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    delete?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    connect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    update?: UserActionUpdateWithWhereUniqueWithoutOrganizationInput | UserActionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserActionUpdateManyWithWhereWithoutOrganizationInput | UserActionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserActionScalarWhereInput | UserActionScalarWhereInput[]
  }

  export type EventLogUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EventLogCreateWithoutOrganizationInput, EventLogUncheckedCreateWithoutOrganizationInput> | EventLogCreateWithoutOrganizationInput[] | EventLogUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutOrganizationInput | EventLogCreateOrConnectWithoutOrganizationInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutOrganizationInput | EventLogUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EventLogCreateManyOrganizationInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutOrganizationInput | EventLogUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutOrganizationInput | EventLogUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AuditTrailCreateNestedManyWithoutCreatedUserInput = {
    create?: XOR<AuditTrailCreateWithoutCreatedUserInput, AuditTrailUncheckedCreateWithoutCreatedUserInput> | AuditTrailCreateWithoutCreatedUserInput[] | AuditTrailUncheckedCreateWithoutCreatedUserInput[]
    connectOrCreate?: AuditTrailCreateOrConnectWithoutCreatedUserInput | AuditTrailCreateOrConnectWithoutCreatedUserInput[]
    createMany?: AuditTrailCreateManyCreatedUserInputEnvelope
    connect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
  }

  export type UserActionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActionCreateWithoutUserInput, UserActionUncheckedCreateWithoutUserInput> | UserActionCreateWithoutUserInput[] | UserActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActionCreateOrConnectWithoutUserInput | UserActionCreateOrConnectWithoutUserInput[]
    createMany?: UserActionCreateManyUserInputEnvelope
    connect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
  }

  export type AuditTrailUncheckedCreateNestedManyWithoutCreatedUserInput = {
    create?: XOR<AuditTrailCreateWithoutCreatedUserInput, AuditTrailUncheckedCreateWithoutCreatedUserInput> | AuditTrailCreateWithoutCreatedUserInput[] | AuditTrailUncheckedCreateWithoutCreatedUserInput[]
    connectOrCreate?: AuditTrailCreateOrConnectWithoutCreatedUserInput | AuditTrailCreateOrConnectWithoutCreatedUserInput[]
    createMany?: AuditTrailCreateManyCreatedUserInputEnvelope
    connect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
  }

  export type UserActionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActionCreateWithoutUserInput, UserActionUncheckedCreateWithoutUserInput> | UserActionCreateWithoutUserInput[] | UserActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActionCreateOrConnectWithoutUserInput | UserActionCreateOrConnectWithoutUserInput[]
    createMany?: UserActionCreateManyUserInputEnvelope
    connect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
  }

  export type OrganizationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type AuditTrailUpdateManyWithoutCreatedUserNestedInput = {
    create?: XOR<AuditTrailCreateWithoutCreatedUserInput, AuditTrailUncheckedCreateWithoutCreatedUserInput> | AuditTrailCreateWithoutCreatedUserInput[] | AuditTrailUncheckedCreateWithoutCreatedUserInput[]
    connectOrCreate?: AuditTrailCreateOrConnectWithoutCreatedUserInput | AuditTrailCreateOrConnectWithoutCreatedUserInput[]
    upsert?: AuditTrailUpsertWithWhereUniqueWithoutCreatedUserInput | AuditTrailUpsertWithWhereUniqueWithoutCreatedUserInput[]
    createMany?: AuditTrailCreateManyCreatedUserInputEnvelope
    set?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    disconnect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    delete?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    connect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    update?: AuditTrailUpdateWithWhereUniqueWithoutCreatedUserInput | AuditTrailUpdateWithWhereUniqueWithoutCreatedUserInput[]
    updateMany?: AuditTrailUpdateManyWithWhereWithoutCreatedUserInput | AuditTrailUpdateManyWithWhereWithoutCreatedUserInput[]
    deleteMany?: AuditTrailScalarWhereInput | AuditTrailScalarWhereInput[]
  }

  export type UserActionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActionCreateWithoutUserInput, UserActionUncheckedCreateWithoutUserInput> | UserActionCreateWithoutUserInput[] | UserActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActionCreateOrConnectWithoutUserInput | UserActionCreateOrConnectWithoutUserInput[]
    upsert?: UserActionUpsertWithWhereUniqueWithoutUserInput | UserActionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActionCreateManyUserInputEnvelope
    set?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    disconnect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    delete?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    connect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    update?: UserActionUpdateWithWhereUniqueWithoutUserInput | UserActionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActionUpdateManyWithWhereWithoutUserInput | UserActionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActionScalarWhereInput | UserActionScalarWhereInput[]
  }

  export type AuditTrailUncheckedUpdateManyWithoutCreatedUserNestedInput = {
    create?: XOR<AuditTrailCreateWithoutCreatedUserInput, AuditTrailUncheckedCreateWithoutCreatedUserInput> | AuditTrailCreateWithoutCreatedUserInput[] | AuditTrailUncheckedCreateWithoutCreatedUserInput[]
    connectOrCreate?: AuditTrailCreateOrConnectWithoutCreatedUserInput | AuditTrailCreateOrConnectWithoutCreatedUserInput[]
    upsert?: AuditTrailUpsertWithWhereUniqueWithoutCreatedUserInput | AuditTrailUpsertWithWhereUniqueWithoutCreatedUserInput[]
    createMany?: AuditTrailCreateManyCreatedUserInputEnvelope
    set?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    disconnect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    delete?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    connect?: AuditTrailWhereUniqueInput | AuditTrailWhereUniqueInput[]
    update?: AuditTrailUpdateWithWhereUniqueWithoutCreatedUserInput | AuditTrailUpdateWithWhereUniqueWithoutCreatedUserInput[]
    updateMany?: AuditTrailUpdateManyWithWhereWithoutCreatedUserInput | AuditTrailUpdateManyWithWhereWithoutCreatedUserInput[]
    deleteMany?: AuditTrailScalarWhereInput | AuditTrailScalarWhereInput[]
  }

  export type UserActionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActionCreateWithoutUserInput, UserActionUncheckedCreateWithoutUserInput> | UserActionCreateWithoutUserInput[] | UserActionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActionCreateOrConnectWithoutUserInput | UserActionCreateOrConnectWithoutUserInput[]
    upsert?: UserActionUpsertWithWhereUniqueWithoutUserInput | UserActionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActionCreateManyUserInputEnvelope
    set?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    disconnect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    delete?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    connect?: UserActionWhereUniqueInput | UserActionWhereUniqueInput[]
    update?: UserActionUpdateWithWhereUniqueWithoutUserInput | UserActionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActionUpdateManyWithWhereWithoutUserInput | UserActionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActionScalarWhereInput | UserActionScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutAuditTrailsInput = {
    create?: XOR<OrganizationCreateWithoutAuditTrailsInput, OrganizationUncheckedCreateWithoutAuditTrailsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditTrailsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditTrailsCreatedInput = {
    create?: XOR<UserCreateWithoutAuditTrailsCreatedInput, UserUncheckedCreateWithoutAuditTrailsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditTrailsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationUpdateOneWithoutAuditTrailsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAuditTrailsInput, OrganizationUncheckedCreateWithoutAuditTrailsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAuditTrailsInput
    upsert?: OrganizationUpsertWithoutAuditTrailsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAuditTrailsInput, OrganizationUpdateWithoutAuditTrailsInput>, OrganizationUncheckedUpdateWithoutAuditTrailsInput>
  }

  export type UserUpdateOneRequiredWithoutAuditTrailsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutAuditTrailsCreatedInput, UserUncheckedCreateWithoutAuditTrailsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditTrailsCreatedInput
    upsert?: UserUpsertWithoutAuditTrailsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditTrailsCreatedInput, UserUpdateWithoutAuditTrailsCreatedInput>, UserUncheckedUpdateWithoutAuditTrailsCreatedInput>
  }

  export type OrganizationCreateNestedOneWithoutUserActionsInput = {
    create?: XOR<OrganizationCreateWithoutUserActionsInput, OrganizationUncheckedCreateWithoutUserActionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUserActionsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserActionsInput = {
    create?: XOR<UserCreateWithoutUserActionsInput, UserUncheckedCreateWithoutUserActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserActionsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationUpdateOneWithoutUserActionsNestedInput = {
    create?: XOR<OrganizationCreateWithoutUserActionsInput, OrganizationUncheckedCreateWithoutUserActionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUserActionsInput
    upsert?: OrganizationUpsertWithoutUserActionsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUserActionsInput, OrganizationUpdateWithoutUserActionsInput>, OrganizationUncheckedUpdateWithoutUserActionsInput>
  }

  export type UserUpdateOneRequiredWithoutUserActionsNestedInput = {
    create?: XOR<UserCreateWithoutUserActionsInput, UserUncheckedCreateWithoutUserActionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserActionsInput
    upsert?: UserUpsertWithoutUserActionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserActionsInput, UserUpdateWithoutUserActionsInput>, UserUncheckedUpdateWithoutUserActionsInput>
  }

  export type OrganizationCreateNestedOneWithoutEventLogsInput = {
    create?: XOR<OrganizationCreateWithoutEventLogsInput, OrganizationUncheckedCreateWithoutEventLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventLogsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneWithoutEventLogsNestedInput = {
    create?: XOR<OrganizationCreateWithoutEventLogsInput, OrganizationUncheckedCreateWithoutEventLogsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventLogsInput
    upsert?: OrganizationUpsertWithoutEventLogsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutEventLogsInput, OrganizationUpdateWithoutEventLogsInput>, OrganizationUncheckedUpdateWithoutEventLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditTrailsCreated?: AuditTrailCreateNestedManyWithoutCreatedUserInput
    userActions?: UserActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditTrailsCreated?: AuditTrailUncheckedCreateNestedManyWithoutCreatedUserInput
    userActions?: UserActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AuditTrailCreateWithoutOrganizationInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdUser: UserCreateNestedOneWithoutAuditTrailsCreatedInput
  }

  export type AuditTrailUncheckedCreateWithoutOrganizationInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdUserId: string
    createdAt?: Date | string
  }

  export type AuditTrailCreateOrConnectWithoutOrganizationInput = {
    where: AuditTrailWhereUniqueInput
    create: XOR<AuditTrailCreateWithoutOrganizationInput, AuditTrailUncheckedCreateWithoutOrganizationInput>
  }

  export type AuditTrailCreateManyOrganizationInputEnvelope = {
    data: AuditTrailCreateManyOrganizationInput | AuditTrailCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserActionCreateWithoutOrganizationInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserActionsInput
  }

  export type UserActionUncheckedCreateWithoutOrganizationInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    userId: string
    createdAt?: Date | string
  }

  export type UserActionCreateOrConnectWithoutOrganizationInput = {
    where: UserActionWhereUniqueInput
    create: XOR<UserActionCreateWithoutOrganizationInput, UserActionUncheckedCreateWithoutOrganizationInput>
  }

  export type UserActionCreateManyOrganizationInputEnvelope = {
    data: UserActionCreateManyOrganizationInput | UserActionCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type EventLogCreateWithoutOrganizationInput = {
    id?: string
    serviceName: string
    eventType: string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventLogUncheckedCreateWithoutOrganizationInput = {
    id?: string
    serviceName: string
    eventType: string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventLogCreateOrConnectWithoutOrganizationInput = {
    where: EventLogWhereUniqueInput
    create: XOR<EventLogCreateWithoutOrganizationInput, EventLogUncheckedCreateWithoutOrganizationInput>
  }

  export type EventLogCreateManyOrganizationInputEnvelope = {
    data: EventLogCreateManyOrganizationInput | EventLogCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    accessType?: StringFilter<"User"> | string
    organizationId?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isLogged?: BoolFilter<"User"> | boolean
    isSuperAdmin?: BoolFilter<"User"> | boolean
    lastLoggedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type AuditTrailUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AuditTrailWhereUniqueInput
    update: XOR<AuditTrailUpdateWithoutOrganizationInput, AuditTrailUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AuditTrailCreateWithoutOrganizationInput, AuditTrailUncheckedCreateWithoutOrganizationInput>
  }

  export type AuditTrailUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AuditTrailWhereUniqueInput
    data: XOR<AuditTrailUpdateWithoutOrganizationInput, AuditTrailUncheckedUpdateWithoutOrganizationInput>
  }

  export type AuditTrailUpdateManyWithWhereWithoutOrganizationInput = {
    where: AuditTrailScalarWhereInput
    data: XOR<AuditTrailUpdateManyMutationInput, AuditTrailUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AuditTrailScalarWhereInput = {
    AND?: AuditTrailScalarWhereInput | AuditTrailScalarWhereInput[]
    OR?: AuditTrailScalarWhereInput[]
    NOT?: AuditTrailScalarWhereInput | AuditTrailScalarWhereInput[]
    id?: StringFilter<"AuditTrail"> | string
    serviceName?: StringFilter<"AuditTrail"> | string
    tableName?: StringFilter<"AuditTrail"> | string
    tableId?: StringFilter<"AuditTrail"> | string
    action?: StringFilter<"AuditTrail"> | string
    oldDetails?: JsonFilter<"AuditTrail">
    newDetails?: JsonFilter<"AuditTrail">
    organizationId?: StringNullableFilter<"AuditTrail"> | string | null
    createdUserId?: StringFilter<"AuditTrail"> | string
    createdAt?: DateTimeFilter<"AuditTrail"> | Date | string
  }

  export type UserActionUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserActionWhereUniqueInput
    update: XOR<UserActionUpdateWithoutOrganizationInput, UserActionUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserActionCreateWithoutOrganizationInput, UserActionUncheckedCreateWithoutOrganizationInput>
  }

  export type UserActionUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserActionWhereUniqueInput
    data: XOR<UserActionUpdateWithoutOrganizationInput, UserActionUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserActionUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserActionScalarWhereInput
    data: XOR<UserActionUpdateManyMutationInput, UserActionUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserActionScalarWhereInput = {
    AND?: UserActionScalarWhereInput | UserActionScalarWhereInput[]
    OR?: UserActionScalarWhereInput[]
    NOT?: UserActionScalarWhereInput | UserActionScalarWhereInput[]
    id?: StringFilter<"UserAction"> | string
    serviceName?: StringFilter<"UserAction"> | string
    tableName?: StringFilter<"UserAction"> | string
    tableId?: StringFilter<"UserAction"> | string
    action?: StringFilter<"UserAction"> | string
    actionDetails?: JsonFilter<"UserAction">
    ipAddress?: StringFilter<"UserAction"> | string
    userAgent?: StringFilter<"UserAction"> | string
    organizationId?: StringNullableFilter<"UserAction"> | string | null
    userId?: StringFilter<"UserAction"> | string
    createdAt?: DateTimeFilter<"UserAction"> | Date | string
  }

  export type EventLogUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EventLogWhereUniqueInput
    update: XOR<EventLogUpdateWithoutOrganizationInput, EventLogUncheckedUpdateWithoutOrganizationInput>
    create: XOR<EventLogCreateWithoutOrganizationInput, EventLogUncheckedCreateWithoutOrganizationInput>
  }

  export type EventLogUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EventLogWhereUniqueInput
    data: XOR<EventLogUpdateWithoutOrganizationInput, EventLogUncheckedUpdateWithoutOrganizationInput>
  }

  export type EventLogUpdateManyWithWhereWithoutOrganizationInput = {
    where: EventLogScalarWhereInput
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type EventLogScalarWhereInput = {
    AND?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
    OR?: EventLogScalarWhereInput[]
    NOT?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
    id?: StringFilter<"EventLog"> | string
    serviceName?: StringFilter<"EventLog"> | string
    eventType?: StringFilter<"EventLog"> | string
    payload?: JsonFilter<"EventLog">
    organizationId?: StringNullableFilter<"EventLog"> | string | null
    createdAt?: DateTimeFilter<"EventLog"> | Date | string
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditTrails?: AuditTrailCreateNestedManyWithoutOrganizationInput
    userActions?: UserActionCreateNestedManyWithoutOrganizationInput
    eventLogs?: EventLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditTrails?: AuditTrailUncheckedCreateNestedManyWithoutOrganizationInput
    userActions?: UserActionUncheckedCreateNestedManyWithoutOrganizationInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type AuditTrailCreateWithoutCreatedUserInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutAuditTrailsInput
  }

  export type AuditTrailUncheckedCreateWithoutCreatedUserInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type AuditTrailCreateOrConnectWithoutCreatedUserInput = {
    where: AuditTrailWhereUniqueInput
    create: XOR<AuditTrailCreateWithoutCreatedUserInput, AuditTrailUncheckedCreateWithoutCreatedUserInput>
  }

  export type AuditTrailCreateManyCreatedUserInputEnvelope = {
    data: AuditTrailCreateManyCreatedUserInput | AuditTrailCreateManyCreatedUserInput[]
    skipDuplicates?: boolean
  }

  export type UserActionCreateWithoutUserInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    createdAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutUserActionsInput
  }

  export type UserActionUncheckedCreateWithoutUserInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type UserActionCreateOrConnectWithoutUserInput = {
    where: UserActionWhereUniqueInput
    create: XOR<UserActionCreateWithoutUserInput, UserActionUncheckedCreateWithoutUserInput>
  }

  export type UserActionCreateManyUserInputEnvelope = {
    data: UserActionCreateManyUserInput | UserActionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditTrails?: AuditTrailUpdateManyWithoutOrganizationNestedInput
    userActions?: UserActionUpdateManyWithoutOrganizationNestedInput
    eventLogs?: EventLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditTrails?: AuditTrailUncheckedUpdateManyWithoutOrganizationNestedInput
    userActions?: UserActionUncheckedUpdateManyWithoutOrganizationNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AuditTrailUpsertWithWhereUniqueWithoutCreatedUserInput = {
    where: AuditTrailWhereUniqueInput
    update: XOR<AuditTrailUpdateWithoutCreatedUserInput, AuditTrailUncheckedUpdateWithoutCreatedUserInput>
    create: XOR<AuditTrailCreateWithoutCreatedUserInput, AuditTrailUncheckedCreateWithoutCreatedUserInput>
  }

  export type AuditTrailUpdateWithWhereUniqueWithoutCreatedUserInput = {
    where: AuditTrailWhereUniqueInput
    data: XOR<AuditTrailUpdateWithoutCreatedUserInput, AuditTrailUncheckedUpdateWithoutCreatedUserInput>
  }

  export type AuditTrailUpdateManyWithWhereWithoutCreatedUserInput = {
    where: AuditTrailScalarWhereInput
    data: XOR<AuditTrailUpdateManyMutationInput, AuditTrailUncheckedUpdateManyWithoutCreatedUserInput>
  }

  export type UserActionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserActionWhereUniqueInput
    update: XOR<UserActionUpdateWithoutUserInput, UserActionUncheckedUpdateWithoutUserInput>
    create: XOR<UserActionCreateWithoutUserInput, UserActionUncheckedCreateWithoutUserInput>
  }

  export type UserActionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserActionWhereUniqueInput
    data: XOR<UserActionUpdateWithoutUserInput, UserActionUncheckedUpdateWithoutUserInput>
  }

  export type UserActionUpdateManyWithWhereWithoutUserInput = {
    where: UserActionScalarWhereInput
    data: XOR<UserActionUpdateManyMutationInput, UserActionUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationCreateWithoutAuditTrailsInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutOrganizationInput
    userActions?: UserActionCreateNestedManyWithoutOrganizationInput
    eventLogs?: EventLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAuditTrailsInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    userActions?: UserActionUncheckedCreateNestedManyWithoutOrganizationInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAuditTrailsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAuditTrailsInput, OrganizationUncheckedCreateWithoutAuditTrailsInput>
  }

  export type UserCreateWithoutAuditTrailsCreatedInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    userActions?: UserActionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditTrailsCreatedInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    organizationId?: string | null
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userActions?: UserActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditTrailsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditTrailsCreatedInput, UserUncheckedCreateWithoutAuditTrailsCreatedInput>
  }

  export type OrganizationUpsertWithoutAuditTrailsInput = {
    update: XOR<OrganizationUpdateWithoutAuditTrailsInput, OrganizationUncheckedUpdateWithoutAuditTrailsInput>
    create: XOR<OrganizationCreateWithoutAuditTrailsInput, OrganizationUncheckedCreateWithoutAuditTrailsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAuditTrailsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAuditTrailsInput, OrganizationUncheckedUpdateWithoutAuditTrailsInput>
  }

  export type OrganizationUpdateWithoutAuditTrailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutOrganizationNestedInput
    userActions?: UserActionUpdateManyWithoutOrganizationNestedInput
    eventLogs?: EventLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAuditTrailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    userActions?: UserActionUncheckedUpdateManyWithoutOrganizationNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutAuditTrailsCreatedInput = {
    update: XOR<UserUpdateWithoutAuditTrailsCreatedInput, UserUncheckedUpdateWithoutAuditTrailsCreatedInput>
    create: XOR<UserCreateWithoutAuditTrailsCreatedInput, UserUncheckedCreateWithoutAuditTrailsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditTrailsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditTrailsCreatedInput, UserUncheckedUpdateWithoutAuditTrailsCreatedInput>
  }

  export type UserUpdateWithoutAuditTrailsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    userActions?: UserActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditTrailsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userActions?: UserActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationCreateWithoutUserActionsInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutOrganizationInput
    auditTrails?: AuditTrailCreateNestedManyWithoutOrganizationInput
    eventLogs?: EventLogCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUserActionsInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    auditTrails?: AuditTrailUncheckedCreateNestedManyWithoutOrganizationInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUserActionsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUserActionsInput, OrganizationUncheckedCreateWithoutUserActionsInput>
  }

  export type UserCreateWithoutUserActionsInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    organization?: OrganizationCreateNestedOneWithoutUsersInput
    auditTrailsCreated?: AuditTrailCreateNestedManyWithoutCreatedUserInput
  }

  export type UserUncheckedCreateWithoutUserActionsInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    organizationId?: string | null
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditTrailsCreated?: AuditTrailUncheckedCreateNestedManyWithoutCreatedUserInput
  }

  export type UserCreateOrConnectWithoutUserActionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserActionsInput, UserUncheckedCreateWithoutUserActionsInput>
  }

  export type OrganizationUpsertWithoutUserActionsInput = {
    update: XOR<OrganizationUpdateWithoutUserActionsInput, OrganizationUncheckedUpdateWithoutUserActionsInput>
    create: XOR<OrganizationCreateWithoutUserActionsInput, OrganizationUncheckedCreateWithoutUserActionsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUserActionsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUserActionsInput, OrganizationUncheckedUpdateWithoutUserActionsInput>
  }

  export type OrganizationUpdateWithoutUserActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutOrganizationNestedInput
    auditTrails?: AuditTrailUpdateManyWithoutOrganizationNestedInput
    eventLogs?: EventLogUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUserActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    auditTrails?: AuditTrailUncheckedUpdateManyWithoutOrganizationNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutUserActionsInput = {
    update: XOR<UserUpdateWithoutUserActionsInput, UserUncheckedUpdateWithoutUserActionsInput>
    create: XOR<UserCreateWithoutUserActionsInput, UserUncheckedCreateWithoutUserActionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserActionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserActionsInput, UserUncheckedUpdateWithoutUserActionsInput>
  }

  export type UserUpdateWithoutUserActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organization?: OrganizationUpdateOneWithoutUsersNestedInput
    auditTrailsCreated?: AuditTrailUpdateManyWithoutCreatedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditTrailsCreated?: AuditTrailUncheckedUpdateManyWithoutCreatedUserNestedInput
  }

  export type OrganizationCreateWithoutEventLogsInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutOrganizationInput
    auditTrails?: AuditTrailCreateNestedManyWithoutOrganizationInput
    userActions?: UserActionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutEventLogsInput = {
    id?: string
    name: string
    logoPath?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    auditTrails?: AuditTrailUncheckedCreateNestedManyWithoutOrganizationInput
    userActions?: UserActionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutEventLogsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEventLogsInput, OrganizationUncheckedCreateWithoutEventLogsInput>
  }

  export type OrganizationUpsertWithoutEventLogsInput = {
    update: XOR<OrganizationUpdateWithoutEventLogsInput, OrganizationUncheckedUpdateWithoutEventLogsInput>
    create: XOR<OrganizationCreateWithoutEventLogsInput, OrganizationUncheckedCreateWithoutEventLogsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutEventLogsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutEventLogsInput, OrganizationUncheckedUpdateWithoutEventLogsInput>
  }

  export type OrganizationUpdateWithoutEventLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutOrganizationNestedInput
    auditTrails?: AuditTrailUpdateManyWithoutOrganizationNestedInput
    userActions?: UserActionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutEventLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoPath?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    auditTrails?: AuditTrailUncheckedUpdateManyWithoutOrganizationNestedInput
    userActions?: UserActionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    name: string
    username: string
    email: string
    accessType: string
    isActive?: boolean
    isLogged?: boolean
    isSuperAdmin?: boolean
    lastLoggedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AuditTrailCreateManyOrganizationInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdUserId: string
    createdAt?: Date | string
  }

  export type UserActionCreateManyOrganizationInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    userId: string
    createdAt?: Date | string
  }

  export type EventLogCreateManyOrganizationInput = {
    id?: string
    serviceName: string
    eventType: string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditTrailsCreated?: AuditTrailUpdateManyWithoutCreatedUserNestedInput
    userActions?: UserActionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditTrailsCreated?: AuditTrailUncheckedUpdateManyWithoutCreatedUserNestedInput
    userActions?: UserActionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    accessType?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLogged?: BoolFieldUpdateOperationsInput | boolean
    isSuperAdmin?: BoolFieldUpdateOperationsInput | boolean
    lastLoggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditTrailUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdUser?: UserUpdateOneRequiredWithoutAuditTrailsCreatedNestedInput
  }

  export type AuditTrailUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditTrailUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActionUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserActionsNestedInput
  }

  export type UserActionUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActionUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditTrailCreateManyCreatedUserInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type UserActionCreateManyUserInput = {
    id?: string
    serviceName: string
    tableName: string
    tableId: string
    action: string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress: string
    userAgent: string
    organizationId?: string | null
    createdAt?: Date | string
  }

  export type AuditTrailUpdateWithoutCreatedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutAuditTrailsNestedInput
  }

  export type AuditTrailUncheckedUpdateWithoutCreatedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditTrailUncheckedUpdateManyWithoutCreatedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldDetails?: JsonNullValueInput | InputJsonValue
    newDetails?: JsonNullValueInput | InputJsonValue
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutUserActionsNestedInput
  }

  export type UserActionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    tableId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actionDetails?: JsonNullValueInput | InputJsonValue
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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