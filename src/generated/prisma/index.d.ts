
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Accommodation
 * 
 */
export type Accommodation = $Result.DefaultSelection<Prisma.$AccommodationPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  HOST: 'HOST',
  CLEANER: 'CLEANER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OtpType: {
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
  PASSWORD_RESET: 'PASSWORD_RESET'
};

export type OtpType = (typeof OtpType)[keyof typeof OtpType]


export const AccommodationType: {
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  STUDIO: 'STUDIO',
  VILLA: 'VILLA',
  OTHER: 'OTHER'
};

export type AccommodationType = (typeof AccommodationType)[keyof typeof AccommodationType]


export const AssignmentRole: {
  PRIMARY: 'PRIMARY',
  SUBSTITUTE: 'SUBSTITUTE'
};

export type AssignmentRole = (typeof AssignmentRole)[keyof typeof AssignmentRole]


export const AssignmentStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REFUSED: 'REFUSED',
  COMPLETED: 'COMPLETED'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OtpType = $Enums.OtpType

export const OtpType: typeof $Enums.OtpType

export type AccommodationType = $Enums.AccommodationType

export const AccommodationType: typeof $Enums.AccommodationType

export type AssignmentRole = $Enums.AssignmentRole

export const AssignmentRole: typeof $Enums.AssignmentRole

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs>;

  /**
   * `prisma.accommodation`: Exposes CRUD operations for the **Accommodation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accommodations
    * const accommodations = await prisma.accommodation.findMany()
    * ```
    */
  get accommodation(): Prisma.AccommodationDelegate<ExtArgs>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Otp: 'Otp',
    RefreshToken: 'RefreshToken',
    Accommodation: 'Accommodation',
    Assignment: 'Assignment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "otp" | "refreshToken" | "accommodation" | "assignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Accommodation: {
        payload: Prisma.$AccommodationPayload<ExtArgs>
        fields: Prisma.AccommodationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccommodationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccommodationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          findFirst: {
            args: Prisma.AccommodationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccommodationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          findMany: {
            args: Prisma.AccommodationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>[]
          }
          create: {
            args: Prisma.AccommodationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          createMany: {
            args: Prisma.AccommodationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccommodationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>[]
          }
          delete: {
            args: Prisma.AccommodationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          update: {
            args: Prisma.AccommodationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          deleteMany: {
            args: Prisma.AccommodationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccommodationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccommodationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          aggregate: {
            args: Prisma.AccommodationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccommodation>
          }
          groupBy: {
            args: Prisma.AccommodationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccommodationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccommodationCountArgs<ExtArgs>
            result: $Utils.Optional<AccommodationCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignments: number
    refreshTokens: number
    accommodations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    accommodations?: boolean | UserCountOutputTypeCountAccommodationsArgs
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
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccommodationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccommodationWhereInput
  }


  /**
   * Count Type AccommodationCountOutputType
   */

  export type AccommodationCountOutputType = {
    assignments: number
  }

  export type AccommodationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | AccommodationCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * AccommodationCountOutputType without action
   */
  export type AccommodationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccommodationCountOutputType
     */
    select?: AccommodationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccommodationCountOutputType without action
   */
  export type AccommodationCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    workLatitude: number | null
    workLongitude: number | null
    serviceRadius: number | null
  }

  export type UserSumAggregateOutputType = {
    workLatitude: number | null
    workLongitude: number | null
    serviceRadius: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    profileImage: string | null
    role: $Enums.Role | null
    about: string | null
    playerId: string | null
    siretNumber: string | null
    isProfessionalVerified: boolean | null
    workCity: string | null
    workLatitude: number | null
    workLongitude: number | null
    serviceRadius: number | null
    availability: string | null
    licenseNumber: string | null
    biography: string | null
    interventionZone: string | null
    isCleanerProfileSetupComplete: boolean | null
    isEmailVerified: boolean | null
    isProfileComplete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isPaymentAccepted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    profileImage: string | null
    role: $Enums.Role | null
    about: string | null
    playerId: string | null
    siretNumber: string | null
    isProfessionalVerified: boolean | null
    workCity: string | null
    workLatitude: number | null
    workLongitude: number | null
    serviceRadius: number | null
    availability: string | null
    licenseNumber: string | null
    biography: string | null
    interventionZone: string | null
    isCleanerProfileSetupComplete: boolean | null
    isEmailVerified: boolean | null
    isProfileComplete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isPaymentAccepted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    phone: number
    profileImage: number
    role: number
    about: number
    playerId: number
    siretNumber: number
    isProfessionalVerified: number
    workCity: number
    workLatitude: number
    workLongitude: number
    serviceRadius: number
    availability: number
    licenseNumber: number
    biography: number
    interventionZone: number
    languages: number
    servicesOffered: number
    isCleanerProfileSetupComplete: number
    isEmailVerified: number
    isProfileComplete: number
    createdAt: number
    updatedAt: number
    isPaymentAccepted: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    workLatitude?: true
    workLongitude?: true
    serviceRadius?: true
  }

  export type UserSumAggregateInputType = {
    workLatitude?: true
    workLongitude?: true
    serviceRadius?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    profileImage?: true
    role?: true
    about?: true
    playerId?: true
    siretNumber?: true
    isProfessionalVerified?: true
    workCity?: true
    workLatitude?: true
    workLongitude?: true
    serviceRadius?: true
    availability?: true
    licenseNumber?: true
    biography?: true
    interventionZone?: true
    isCleanerProfileSetupComplete?: true
    isEmailVerified?: true
    isProfileComplete?: true
    createdAt?: true
    updatedAt?: true
    isPaymentAccepted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    profileImage?: true
    role?: true
    about?: true
    playerId?: true
    siretNumber?: true
    isProfessionalVerified?: true
    workCity?: true
    workLatitude?: true
    workLongitude?: true
    serviceRadius?: true
    availability?: true
    licenseNumber?: true
    biography?: true
    interventionZone?: true
    isCleanerProfileSetupComplete?: true
    isEmailVerified?: true
    isProfileComplete?: true
    createdAt?: true
    updatedAt?: true
    isPaymentAccepted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    profileImage?: true
    role?: true
    about?: true
    playerId?: true
    siretNumber?: true
    isProfessionalVerified?: true
    workCity?: true
    workLatitude?: true
    workLongitude?: true
    serviceRadius?: true
    availability?: true
    licenseNumber?: true
    biography?: true
    interventionZone?: true
    languages?: true
    servicesOffered?: true
    isCleanerProfileSetupComplete?: true
    isEmailVerified?: true
    isProfileComplete?: true
    createdAt?: true
    updatedAt?: true
    isPaymentAccepted?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    profileImage: string | null
    role: $Enums.Role | null
    about: string | null
    playerId: string | null
    siretNumber: string | null
    isProfessionalVerified: boolean
    workCity: string | null
    workLatitude: number | null
    workLongitude: number | null
    serviceRadius: number | null
    availability: string | null
    licenseNumber: string | null
    biography: string | null
    interventionZone: string | null
    languages: string[]
    servicesOffered: string[]
    isCleanerProfileSetupComplete: boolean
    isEmailVerified: boolean
    isProfileComplete: boolean
    createdAt: Date
    updatedAt: Date
    isPaymentAccepted: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    profileImage?: boolean
    role?: boolean
    about?: boolean
    playerId?: boolean
    siretNumber?: boolean
    isProfessionalVerified?: boolean
    workCity?: boolean
    workLatitude?: boolean
    workLongitude?: boolean
    serviceRadius?: boolean
    availability?: boolean
    licenseNumber?: boolean
    biography?: boolean
    interventionZone?: boolean
    languages?: boolean
    servicesOffered?: boolean
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPaymentAccepted?: boolean
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    accommodations?: boolean | User$accommodationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    profileImage?: boolean
    role?: boolean
    about?: boolean
    playerId?: boolean
    siretNumber?: boolean
    isProfessionalVerified?: boolean
    workCity?: boolean
    workLatitude?: boolean
    workLongitude?: boolean
    serviceRadius?: boolean
    availability?: boolean
    licenseNumber?: boolean
    biography?: boolean
    interventionZone?: boolean
    languages?: boolean
    servicesOffered?: boolean
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPaymentAccepted?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    profileImage?: boolean
    role?: boolean
    about?: boolean
    playerId?: boolean
    siretNumber?: boolean
    isProfessionalVerified?: boolean
    workCity?: boolean
    workLatitude?: boolean
    workLongitude?: boolean
    serviceRadius?: boolean
    availability?: boolean
    licenseNumber?: boolean
    biography?: boolean
    interventionZone?: boolean
    languages?: boolean
    servicesOffered?: boolean
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPaymentAccepted?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    accommodations?: boolean | User$accommodationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      accommodations: Prisma.$AccommodationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      firstName: string | null
      lastName: string | null
      phone: string | null
      profileImage: string | null
      role: $Enums.Role | null
      about: string | null
      playerId: string | null
      siretNumber: string | null
      isProfessionalVerified: boolean
      workCity: string | null
      workLatitude: number | null
      workLongitude: number | null
      serviceRadius: number | null
      availability: string | null
      licenseNumber: string | null
      biography: string | null
      interventionZone: string | null
      languages: string[]
      servicesOffered: string[]
      isCleanerProfileSetupComplete: boolean
      isEmailVerified: boolean
      isProfileComplete: boolean
      createdAt: Date
      updatedAt: Date
      isPaymentAccepted: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany"> | Null>
    accommodations<T extends User$accommodationsArgs<ExtArgs> = {}>(args?: Subset<T, User$accommodationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly about: FieldRef<"User", 'String'>
    readonly playerId: FieldRef<"User", 'String'>
    readonly siretNumber: FieldRef<"User", 'String'>
    readonly isProfessionalVerified: FieldRef<"User", 'Boolean'>
    readonly workCity: FieldRef<"User", 'String'>
    readonly workLatitude: FieldRef<"User", 'Float'>
    readonly workLongitude: FieldRef<"User", 'Float'>
    readonly serviceRadius: FieldRef<"User", 'Int'>
    readonly availability: FieldRef<"User", 'String'>
    readonly licenseNumber: FieldRef<"User", 'String'>
    readonly biography: FieldRef<"User", 'String'>
    readonly interventionZone: FieldRef<"User", 'String'>
    readonly languages: FieldRef<"User", 'String[]'>
    readonly servicesOffered: FieldRef<"User", 'String[]'>
    readonly isCleanerProfileSetupComplete: FieldRef<"User", 'Boolean'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly isProfileComplete: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isPaymentAccepted: FieldRef<"User", 'Boolean'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
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
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.accommodations
   */
  export type User$accommodationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    where?: AccommodationWhereInput
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    cursor?: AccommodationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    type: $Enums.OtpType | null
    expiresAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    type: $Enums.OtpType | null
    expiresAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    type: number
    expiresAt: number
    isUsed: number
    createdAt: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    type?: true
    expiresAt?: true
    isUsed?: true
    createdAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    type?: true
    expiresAt?: true
    isUsed?: true
    createdAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    type?: true
    expiresAt?: true
    isUsed?: true
    createdAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    email: string
    otp: string
    type: $Enums.OtpType
    expiresAt: Date
    isUsed: boolean
    createdAt: Date
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    type?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    type?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    type?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
  }


  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otp: string
      type: $Enums.OtpType
      expiresAt: Date
      isUsed: boolean
      createdAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Otp model
   */ 
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly email: FieldRef<"Otp", 'String'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly type: FieldRef<"Otp", 'OtpType'>
    readonly expiresAt: FieldRef<"Otp", 'DateTime'>
    readonly isUsed: FieldRef<"Otp", 'Boolean'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    isRevoked: boolean | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    isRevoked: boolean | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    isRevoked: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    isRevoked?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    isRevoked?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    isRevoked?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    isRevoked: boolean
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    isRevoked?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      isRevoked: boolean
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly isRevoked: FieldRef<"RefreshToken", 'Boolean'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Accommodation
   */

  export type AggregateAccommodation = {
    _count: AccommodationCountAggregateOutputType | null
    _avg: AccommodationAvgAggregateOutputType | null
    _sum: AccommodationSumAggregateOutputType | null
    _min: AccommodationMinAggregateOutputType | null
    _max: AccommodationMaxAggregateOutputType | null
  }

  export type AccommodationAvgAggregateOutputType = {
    numberOfRooms: number | null
    surface: number | null
    cleaningRate: number | null
  }

  export type AccommodationSumAggregateOutputType = {
    numberOfRooms: number | null
    surface: number | null
    cleaningRate: number | null
  }

  export type AccommodationMinAggregateOutputType = {
    id: string | null
    hostId: string | null
    name: string | null
    accommodationType: $Enums.AccommodationType | null
    address: string | null
    city: string | null
    zipCode: string | null
    floor: string | null
    doorCode: string | null
    numberOfRooms: number | null
    surface: number | null
    hasElevator: boolean | null
    cleaningRate: number | null
    checkOutDateTime: Date | null
    nextCheckinDateTime: Date | null
    notes: string | null
    keys: string | null
    accessCode: string | null
    instructions: string | null
    frequency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccommodationMaxAggregateOutputType = {
    id: string | null
    hostId: string | null
    name: string | null
    accommodationType: $Enums.AccommodationType | null
    address: string | null
    city: string | null
    zipCode: string | null
    floor: string | null
    doorCode: string | null
    numberOfRooms: number | null
    surface: number | null
    hasElevator: boolean | null
    cleaningRate: number | null
    checkOutDateTime: Date | null
    nextCheckinDateTime: Date | null
    notes: string | null
    keys: string | null
    accessCode: string | null
    instructions: string | null
    frequency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccommodationCountAggregateOutputType = {
    id: number
    hostId: number
    name: number
    accommodationType: number
    address: number
    city: number
    zipCode: number
    floor: number
    doorCode: number
    numberOfRooms: number
    surface: number
    hasElevator: number
    cleaningRate: number
    checkOutDateTime: number
    nextCheckinDateTime: number
    notes: number
    keys: number
    accessCode: number
    instructions: number
    frequency: number
    photos: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccommodationAvgAggregateInputType = {
    numberOfRooms?: true
    surface?: true
    cleaningRate?: true
  }

  export type AccommodationSumAggregateInputType = {
    numberOfRooms?: true
    surface?: true
    cleaningRate?: true
  }

  export type AccommodationMinAggregateInputType = {
    id?: true
    hostId?: true
    name?: true
    accommodationType?: true
    address?: true
    city?: true
    zipCode?: true
    floor?: true
    doorCode?: true
    numberOfRooms?: true
    surface?: true
    hasElevator?: true
    cleaningRate?: true
    checkOutDateTime?: true
    nextCheckinDateTime?: true
    notes?: true
    keys?: true
    accessCode?: true
    instructions?: true
    frequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccommodationMaxAggregateInputType = {
    id?: true
    hostId?: true
    name?: true
    accommodationType?: true
    address?: true
    city?: true
    zipCode?: true
    floor?: true
    doorCode?: true
    numberOfRooms?: true
    surface?: true
    hasElevator?: true
    cleaningRate?: true
    checkOutDateTime?: true
    nextCheckinDateTime?: true
    notes?: true
    keys?: true
    accessCode?: true
    instructions?: true
    frequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccommodationCountAggregateInputType = {
    id?: true
    hostId?: true
    name?: true
    accommodationType?: true
    address?: true
    city?: true
    zipCode?: true
    floor?: true
    doorCode?: true
    numberOfRooms?: true
    surface?: true
    hasElevator?: true
    cleaningRate?: true
    checkOutDateTime?: true
    nextCheckinDateTime?: true
    notes?: true
    keys?: true
    accessCode?: true
    instructions?: true
    frequency?: true
    photos?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccommodationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accommodation to aggregate.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accommodations
    **/
    _count?: true | AccommodationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccommodationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccommodationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccommodationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccommodationMaxAggregateInputType
  }

  export type GetAccommodationAggregateType<T extends AccommodationAggregateArgs> = {
        [P in keyof T & keyof AggregateAccommodation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccommodation[P]>
      : GetScalarType<T[P], AggregateAccommodation[P]>
  }




  export type AccommodationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccommodationWhereInput
    orderBy?: AccommodationOrderByWithAggregationInput | AccommodationOrderByWithAggregationInput[]
    by: AccommodationScalarFieldEnum[] | AccommodationScalarFieldEnum
    having?: AccommodationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccommodationCountAggregateInputType | true
    _avg?: AccommodationAvgAggregateInputType
    _sum?: AccommodationSumAggregateInputType
    _min?: AccommodationMinAggregateInputType
    _max?: AccommodationMaxAggregateInputType
  }

  export type AccommodationGroupByOutputType = {
    id: string
    hostId: string
    name: string
    accommodationType: $Enums.AccommodationType
    address: string
    city: string
    zipCode: string
    floor: string | null
    doorCode: string | null
    numberOfRooms: number
    surface: number | null
    hasElevator: boolean
    cleaningRate: number
    checkOutDateTime: Date | null
    nextCheckinDateTime: Date | null
    notes: string | null
    keys: string | null
    accessCode: string | null
    instructions: string | null
    frequency: string | null
    photos: string[]
    createdAt: Date
    updatedAt: Date
    _count: AccommodationCountAggregateOutputType | null
    _avg: AccommodationAvgAggregateOutputType | null
    _sum: AccommodationSumAggregateOutputType | null
    _min: AccommodationMinAggregateOutputType | null
    _max: AccommodationMaxAggregateOutputType | null
  }

  type GetAccommodationGroupByPayload<T extends AccommodationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccommodationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccommodationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccommodationGroupByOutputType[P]>
            : GetScalarType<T[P], AccommodationGroupByOutputType[P]>
        }
      >
    >


  export type AccommodationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostId?: boolean
    name?: boolean
    accommodationType?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    floor?: boolean
    doorCode?: boolean
    numberOfRooms?: boolean
    surface?: boolean
    hasElevator?: boolean
    cleaningRate?: boolean
    checkOutDateTime?: boolean
    nextCheckinDateTime?: boolean
    notes?: boolean
    keys?: boolean
    accessCode?: boolean
    instructions?: boolean
    frequency?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Accommodation$assignmentsArgs<ExtArgs>
    _count?: boolean | AccommodationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accommodation"]>

  export type AccommodationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hostId?: boolean
    name?: boolean
    accommodationType?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    floor?: boolean
    doorCode?: boolean
    numberOfRooms?: boolean
    surface?: boolean
    hasElevator?: boolean
    cleaningRate?: boolean
    checkOutDateTime?: boolean
    nextCheckinDateTime?: boolean
    notes?: boolean
    keys?: boolean
    accessCode?: boolean
    instructions?: boolean
    frequency?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accommodation"]>

  export type AccommodationSelectScalar = {
    id?: boolean
    hostId?: boolean
    name?: boolean
    accommodationType?: boolean
    address?: boolean
    city?: boolean
    zipCode?: boolean
    floor?: boolean
    doorCode?: boolean
    numberOfRooms?: boolean
    surface?: boolean
    hasElevator?: boolean
    cleaningRate?: boolean
    checkOutDateTime?: boolean
    nextCheckinDateTime?: boolean
    notes?: boolean
    keys?: boolean
    accessCode?: boolean
    instructions?: boolean
    frequency?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccommodationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Accommodation$assignmentsArgs<ExtArgs>
    _count?: boolean | AccommodationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccommodationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccommodationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accommodation"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hostId: string
      name: string
      accommodationType: $Enums.AccommodationType
      address: string
      city: string
      zipCode: string
      floor: string | null
      doorCode: string | null
      numberOfRooms: number
      surface: number | null
      hasElevator: boolean
      cleaningRate: number
      checkOutDateTime: Date | null
      nextCheckinDateTime: Date | null
      notes: string | null
      keys: string | null
      accessCode: string | null
      instructions: string | null
      frequency: string | null
      photos: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accommodation"]>
    composites: {}
  }

  type AccommodationGetPayload<S extends boolean | null | undefined | AccommodationDefaultArgs> = $Result.GetResult<Prisma.$AccommodationPayload, S>

  type AccommodationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccommodationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccommodationCountAggregateInputType | true
    }

  export interface AccommodationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accommodation'], meta: { name: 'Accommodation' } }
    /**
     * Find zero or one Accommodation that matches the filter.
     * @param {AccommodationFindUniqueArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccommodationFindUniqueArgs>(args: SelectSubset<T, AccommodationFindUniqueArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Accommodation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccommodationFindUniqueOrThrowArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccommodationFindUniqueOrThrowArgs>(args: SelectSubset<T, AccommodationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Accommodation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationFindFirstArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccommodationFindFirstArgs>(args?: SelectSubset<T, AccommodationFindFirstArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Accommodation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationFindFirstOrThrowArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccommodationFindFirstOrThrowArgs>(args?: SelectSubset<T, AccommodationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accommodations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accommodations
     * const accommodations = await prisma.accommodation.findMany()
     * 
     * // Get first 10 Accommodations
     * const accommodations = await prisma.accommodation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accommodationWithIdOnly = await prisma.accommodation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccommodationFindManyArgs>(args?: SelectSubset<T, AccommodationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Accommodation.
     * @param {AccommodationCreateArgs} args - Arguments to create a Accommodation.
     * @example
     * // Create one Accommodation
     * const Accommodation = await prisma.accommodation.create({
     *   data: {
     *     // ... data to create a Accommodation
     *   }
     * })
     * 
     */
    create<T extends AccommodationCreateArgs>(args: SelectSubset<T, AccommodationCreateArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accommodations.
     * @param {AccommodationCreateManyArgs} args - Arguments to create many Accommodations.
     * @example
     * // Create many Accommodations
     * const accommodation = await prisma.accommodation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccommodationCreateManyArgs>(args?: SelectSubset<T, AccommodationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accommodations and returns the data saved in the database.
     * @param {AccommodationCreateManyAndReturnArgs} args - Arguments to create many Accommodations.
     * @example
     * // Create many Accommodations
     * const accommodation = await prisma.accommodation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accommodations and only return the `id`
     * const accommodationWithIdOnly = await prisma.accommodation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccommodationCreateManyAndReturnArgs>(args?: SelectSubset<T, AccommodationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Accommodation.
     * @param {AccommodationDeleteArgs} args - Arguments to delete one Accommodation.
     * @example
     * // Delete one Accommodation
     * const Accommodation = await prisma.accommodation.delete({
     *   where: {
     *     // ... filter to delete one Accommodation
     *   }
     * })
     * 
     */
    delete<T extends AccommodationDeleteArgs>(args: SelectSubset<T, AccommodationDeleteArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Accommodation.
     * @param {AccommodationUpdateArgs} args - Arguments to update one Accommodation.
     * @example
     * // Update one Accommodation
     * const accommodation = await prisma.accommodation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccommodationUpdateArgs>(args: SelectSubset<T, AccommodationUpdateArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accommodations.
     * @param {AccommodationDeleteManyArgs} args - Arguments to filter Accommodations to delete.
     * @example
     * // Delete a few Accommodations
     * const { count } = await prisma.accommodation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccommodationDeleteManyArgs>(args?: SelectSubset<T, AccommodationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accommodations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accommodations
     * const accommodation = await prisma.accommodation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccommodationUpdateManyArgs>(args: SelectSubset<T, AccommodationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accommodation.
     * @param {AccommodationUpsertArgs} args - Arguments to update or create a Accommodation.
     * @example
     * // Update or create a Accommodation
     * const accommodation = await prisma.accommodation.upsert({
     *   create: {
     *     // ... data to create a Accommodation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accommodation we want to update
     *   }
     * })
     */
    upsert<T extends AccommodationUpsertArgs>(args: SelectSubset<T, AccommodationUpsertArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accommodations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationCountArgs} args - Arguments to filter Accommodations to count.
     * @example
     * // Count the number of Accommodations
     * const count = await prisma.accommodation.count({
     *   where: {
     *     // ... the filter for the Accommodations we want to count
     *   }
     * })
    **/
    count<T extends AccommodationCountArgs>(
      args?: Subset<T, AccommodationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccommodationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accommodation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccommodationAggregateArgs>(args: Subset<T, AccommodationAggregateArgs>): Prisma.PrismaPromise<GetAccommodationAggregateType<T>>

    /**
     * Group by Accommodation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationGroupByArgs} args - Group by arguments.
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
      T extends AccommodationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccommodationGroupByArgs['orderBy'] }
        : { orderBy?: AccommodationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccommodationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccommodationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accommodation model
   */
  readonly fields: AccommodationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accommodation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccommodationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    assignments<T extends Accommodation$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Accommodation$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Accommodation model
   */ 
  interface AccommodationFieldRefs {
    readonly id: FieldRef<"Accommodation", 'String'>
    readonly hostId: FieldRef<"Accommodation", 'String'>
    readonly name: FieldRef<"Accommodation", 'String'>
    readonly accommodationType: FieldRef<"Accommodation", 'AccommodationType'>
    readonly address: FieldRef<"Accommodation", 'String'>
    readonly city: FieldRef<"Accommodation", 'String'>
    readonly zipCode: FieldRef<"Accommodation", 'String'>
    readonly floor: FieldRef<"Accommodation", 'String'>
    readonly doorCode: FieldRef<"Accommodation", 'String'>
    readonly numberOfRooms: FieldRef<"Accommodation", 'Int'>
    readonly surface: FieldRef<"Accommodation", 'Float'>
    readonly hasElevator: FieldRef<"Accommodation", 'Boolean'>
    readonly cleaningRate: FieldRef<"Accommodation", 'Float'>
    readonly checkOutDateTime: FieldRef<"Accommodation", 'DateTime'>
    readonly nextCheckinDateTime: FieldRef<"Accommodation", 'DateTime'>
    readonly notes: FieldRef<"Accommodation", 'String'>
    readonly keys: FieldRef<"Accommodation", 'String'>
    readonly accessCode: FieldRef<"Accommodation", 'String'>
    readonly instructions: FieldRef<"Accommodation", 'String'>
    readonly frequency: FieldRef<"Accommodation", 'String'>
    readonly photos: FieldRef<"Accommodation", 'String[]'>
    readonly createdAt: FieldRef<"Accommodation", 'DateTime'>
    readonly updatedAt: FieldRef<"Accommodation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accommodation findUnique
   */
  export type AccommodationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation findUniqueOrThrow
   */
  export type AccommodationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation findFirst
   */
  export type AccommodationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accommodations.
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accommodations.
     */
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Accommodation findFirstOrThrow
   */
  export type AccommodationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accommodations.
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accommodations.
     */
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Accommodation findMany
   */
  export type AccommodationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodations to fetch.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accommodations.
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Accommodation create
   */
  export type AccommodationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * The data needed to create a Accommodation.
     */
    data: XOR<AccommodationCreateInput, AccommodationUncheckedCreateInput>
  }

  /**
   * Accommodation createMany
   */
  export type AccommodationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accommodations.
     */
    data: AccommodationCreateManyInput | AccommodationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accommodation createManyAndReturn
   */
  export type AccommodationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accommodations.
     */
    data: AccommodationCreateManyInput | AccommodationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accommodation update
   */
  export type AccommodationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * The data needed to update a Accommodation.
     */
    data: XOR<AccommodationUpdateInput, AccommodationUncheckedUpdateInput>
    /**
     * Choose, which Accommodation to update.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation updateMany
   */
  export type AccommodationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accommodations.
     */
    data: XOR<AccommodationUpdateManyMutationInput, AccommodationUncheckedUpdateManyInput>
    /**
     * Filter which Accommodations to update
     */
    where?: AccommodationWhereInput
  }

  /**
   * Accommodation upsert
   */
  export type AccommodationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * The filter to search for the Accommodation to update in case it exists.
     */
    where: AccommodationWhereUniqueInput
    /**
     * In case the Accommodation found by the `where` argument doesn't exist, create a new Accommodation with this data.
     */
    create: XOR<AccommodationCreateInput, AccommodationUncheckedCreateInput>
    /**
     * In case the Accommodation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccommodationUpdateInput, AccommodationUncheckedUpdateInput>
  }

  /**
   * Accommodation delete
   */
  export type AccommodationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter which Accommodation to delete.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation deleteMany
   */
  export type AccommodationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accommodations to delete
     */
    where?: AccommodationWhereInput
  }

  /**
   * Accommodation.assignments
   */
  export type Accommodation$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Accommodation without action
   */
  export type AccommodationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    pricePerCleaning: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    pricePerCleaning: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    accommodationId: string | null
    cleanerId: string | null
    role: $Enums.AssignmentRole | null
    pricePerCleaning: number | null
    message: string | null
    status: $Enums.AssignmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    accommodationId: string | null
    cleanerId: string | null
    role: $Enums.AssignmentRole | null
    pricePerCleaning: number | null
    message: string | null
    status: $Enums.AssignmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    accommodationId: number
    cleanerId: number
    role: number
    pricePerCleaning: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    pricePerCleaning?: true
  }

  export type AssignmentSumAggregateInputType = {
    pricePerCleaning?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    accommodationId?: true
    cleanerId?: true
    role?: true
    pricePerCleaning?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    accommodationId?: true
    cleanerId?: true
    role?: true
    pricePerCleaning?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    accommodationId?: true
    cleanerId?: true
    role?: true
    pricePerCleaning?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    accommodationId: string
    cleanerId: string
    role: $Enums.AssignmentRole
    pricePerCleaning: number
    message: string | null
    status: $Enums.AssignmentStatus
    createdAt: Date
    updatedAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accommodationId?: boolean
    cleanerId?: boolean
    role?: boolean
    pricePerCleaning?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accommodation?: boolean | AccommodationDefaultArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accommodationId?: boolean
    cleanerId?: boolean
    role?: boolean
    pricePerCleaning?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accommodation?: boolean | AccommodationDefaultArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    accommodationId?: boolean
    cleanerId?: boolean
    role?: boolean
    pricePerCleaning?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accommodation?: boolean | AccommodationDefaultArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accommodation?: boolean | AccommodationDefaultArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      accommodation: Prisma.$AccommodationPayload<ExtArgs>
      cleaner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accommodationId: string
      cleanerId: string
      role: $Enums.AssignmentRole
      pricePerCleaning: number
      message: string | null
      status: $Enums.AssignmentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accommodation<T extends AccommodationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccommodationDefaultArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    cleaner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Assignment model
   */ 
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly accommodationId: FieldRef<"Assignment", 'String'>
    readonly cleanerId: FieldRef<"Assignment", 'String'>
    readonly role: FieldRef<"Assignment", 'AssignmentRole'>
    readonly pricePerCleaning: FieldRef<"Assignment", 'Float'>
    readonly message: FieldRef<"Assignment", 'String'>
    readonly status: FieldRef<"Assignment", 'AssignmentStatus'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    profileImage: 'profileImage',
    role: 'role',
    about: 'about',
    playerId: 'playerId',
    siretNumber: 'siretNumber',
    isProfessionalVerified: 'isProfessionalVerified',
    workCity: 'workCity',
    workLatitude: 'workLatitude',
    workLongitude: 'workLongitude',
    serviceRadius: 'serviceRadius',
    availability: 'availability',
    licenseNumber: 'licenseNumber',
    biography: 'biography',
    interventionZone: 'interventionZone',
    languages: 'languages',
    servicesOffered: 'servicesOffered',
    isCleanerProfileSetupComplete: 'isCleanerProfileSetupComplete',
    isEmailVerified: 'isEmailVerified',
    isProfileComplete: 'isProfileComplete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isPaymentAccepted: 'isPaymentAccepted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    type: 'type',
    expiresAt: 'expiresAt',
    isUsed: 'isUsed',
    createdAt: 'createdAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    isRevoked: 'isRevoked',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const AccommodationScalarFieldEnum: {
    id: 'id',
    hostId: 'hostId',
    name: 'name',
    accommodationType: 'accommodationType',
    address: 'address',
    city: 'city',
    zipCode: 'zipCode',
    floor: 'floor',
    doorCode: 'doorCode',
    numberOfRooms: 'numberOfRooms',
    surface: 'surface',
    hasElevator: 'hasElevator',
    cleaningRate: 'cleaningRate',
    checkOutDateTime: 'checkOutDateTime',
    nextCheckinDateTime: 'nextCheckinDateTime',
    notes: 'notes',
    keys: 'keys',
    accessCode: 'accessCode',
    instructions: 'instructions',
    frequency: 'frequency',
    photos: 'photos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccommodationScalarFieldEnum = (typeof AccommodationScalarFieldEnum)[keyof typeof AccommodationScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    accommodationId: 'accommodationId',
    cleanerId: 'cleanerId',
    role: 'role',
    pricePerCleaning: 'pricePerCleaning',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OtpType'
   */
  export type EnumOtpTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpType'>
    


  /**
   * Reference to a field of type 'OtpType[]'
   */
  export type ListEnumOtpTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpType[]'>
    


  /**
   * Reference to a field of type 'AccommodationType'
   */
  export type EnumAccommodationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccommodationType'>
    


  /**
   * Reference to a field of type 'AccommodationType[]'
   */
  export type ListEnumAccommodationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccommodationType[]'>
    


  /**
   * Reference to a field of type 'AssignmentRole'
   */
  export type EnumAssignmentRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentRole'>
    


  /**
   * Reference to a field of type 'AssignmentRole[]'
   */
  export type ListEnumAssignmentRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentRole[]'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'AssignmentStatus[]'
   */
  export type ListEnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    about?: StringNullableFilter<"User"> | string | null
    playerId?: StringNullableFilter<"User"> | string | null
    siretNumber?: StringNullableFilter<"User"> | string | null
    isProfessionalVerified?: BoolFilter<"User"> | boolean
    workCity?: StringNullableFilter<"User"> | string | null
    workLatitude?: FloatNullableFilter<"User"> | number | null
    workLongitude?: FloatNullableFilter<"User"> | number | null
    serviceRadius?: IntNullableFilter<"User"> | number | null
    availability?: StringNullableFilter<"User"> | string | null
    licenseNumber?: StringNullableFilter<"User"> | string | null
    biography?: StringNullableFilter<"User"> | string | null
    interventionZone?: StringNullableFilter<"User"> | string | null
    languages?: StringNullableListFilter<"User">
    servicesOffered?: StringNullableListFilter<"User">
    isCleanerProfileSetupComplete?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    isProfileComplete?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isPaymentAccepted?: BoolFilter<"User"> | boolean
    assignments?: AssignmentListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    accommodations?: AccommodationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    playerId?: SortOrderInput | SortOrder
    siretNumber?: SortOrderInput | SortOrder
    isProfessionalVerified?: SortOrder
    workCity?: SortOrderInput | SortOrder
    workLatitude?: SortOrderInput | SortOrder
    workLongitude?: SortOrderInput | SortOrder
    serviceRadius?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    interventionZone?: SortOrderInput | SortOrder
    languages?: SortOrder
    servicesOffered?: SortOrder
    isCleanerProfileSetupComplete?: SortOrder
    isEmailVerified?: SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPaymentAccepted?: SortOrder
    assignments?: AssignmentOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    accommodations?: AccommodationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    about?: StringNullableFilter<"User"> | string | null
    playerId?: StringNullableFilter<"User"> | string | null
    siretNumber?: StringNullableFilter<"User"> | string | null
    isProfessionalVerified?: BoolFilter<"User"> | boolean
    workCity?: StringNullableFilter<"User"> | string | null
    workLatitude?: FloatNullableFilter<"User"> | number | null
    workLongitude?: FloatNullableFilter<"User"> | number | null
    serviceRadius?: IntNullableFilter<"User"> | number | null
    availability?: StringNullableFilter<"User"> | string | null
    licenseNumber?: StringNullableFilter<"User"> | string | null
    biography?: StringNullableFilter<"User"> | string | null
    interventionZone?: StringNullableFilter<"User"> | string | null
    languages?: StringNullableListFilter<"User">
    servicesOffered?: StringNullableListFilter<"User">
    isCleanerProfileSetupComplete?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    isProfileComplete?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isPaymentAccepted?: BoolFilter<"User"> | boolean
    assignments?: AssignmentListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    accommodations?: AccommodationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    playerId?: SortOrderInput | SortOrder
    siretNumber?: SortOrderInput | SortOrder
    isProfessionalVerified?: SortOrder
    workCity?: SortOrderInput | SortOrder
    workLatitude?: SortOrderInput | SortOrder
    workLongitude?: SortOrderInput | SortOrder
    serviceRadius?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    biography?: SortOrderInput | SortOrder
    interventionZone?: SortOrderInput | SortOrder
    languages?: SortOrder
    servicesOffered?: SortOrder
    isCleanerProfileSetupComplete?: SortOrder
    isEmailVerified?: SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPaymentAccepted?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleNullableWithAggregatesFilter<"User"> | $Enums.Role | null
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    playerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    siretNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    isProfessionalVerified?: BoolWithAggregatesFilter<"User"> | boolean
    workCity?: StringNullableWithAggregatesFilter<"User"> | string | null
    workLatitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    workLongitude?: FloatNullableWithAggregatesFilter<"User"> | number | null
    serviceRadius?: IntNullableWithAggregatesFilter<"User"> | number | null
    availability?: StringNullableWithAggregatesFilter<"User"> | string | null
    licenseNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    biography?: StringNullableWithAggregatesFilter<"User"> | string | null
    interventionZone?: StringNullableWithAggregatesFilter<"User"> | string | null
    languages?: StringNullableListFilter<"User">
    servicesOffered?: StringNullableListFilter<"User">
    isCleanerProfileSetupComplete?: BoolWithAggregatesFilter<"User"> | boolean
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isProfileComplete?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isPaymentAccepted?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    email?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    type?: EnumOtpTypeFilter<"Otp"> | $Enums.OtpType
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    isUsed?: BoolFilter<"Otp"> | boolean
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    email?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    type?: EnumOtpTypeFilter<"Otp"> | $Enums.OtpType
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    isUsed?: BoolFilter<"Otp"> | boolean
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }, "id">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    email?: StringWithAggregatesFilter<"Otp"> | string
    otp?: StringWithAggregatesFilter<"Otp"> | string
    type?: EnumOtpTypeWithAggregatesFilter<"Otp"> | $Enums.OtpType
    expiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"Otp"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    isRevoked?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    isRevoked?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    isRevoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type AccommodationWhereInput = {
    AND?: AccommodationWhereInput | AccommodationWhereInput[]
    OR?: AccommodationWhereInput[]
    NOT?: AccommodationWhereInput | AccommodationWhereInput[]
    id?: StringFilter<"Accommodation"> | string
    hostId?: StringFilter<"Accommodation"> | string
    name?: StringFilter<"Accommodation"> | string
    accommodationType?: EnumAccommodationTypeFilter<"Accommodation"> | $Enums.AccommodationType
    address?: StringFilter<"Accommodation"> | string
    city?: StringFilter<"Accommodation"> | string
    zipCode?: StringFilter<"Accommodation"> | string
    floor?: StringNullableFilter<"Accommodation"> | string | null
    doorCode?: StringNullableFilter<"Accommodation"> | string | null
    numberOfRooms?: IntFilter<"Accommodation"> | number
    surface?: FloatNullableFilter<"Accommodation"> | number | null
    hasElevator?: BoolFilter<"Accommodation"> | boolean
    cleaningRate?: FloatFilter<"Accommodation"> | number
    checkOutDateTime?: DateTimeNullableFilter<"Accommodation"> | Date | string | null
    nextCheckinDateTime?: DateTimeNullableFilter<"Accommodation"> | Date | string | null
    notes?: StringNullableFilter<"Accommodation"> | string | null
    keys?: StringNullableFilter<"Accommodation"> | string | null
    accessCode?: StringNullableFilter<"Accommodation"> | string | null
    instructions?: StringNullableFilter<"Accommodation"> | string | null
    frequency?: StringNullableFilter<"Accommodation"> | string | null
    photos?: StringNullableListFilter<"Accommodation">
    createdAt?: DateTimeFilter<"Accommodation"> | Date | string
    updatedAt?: DateTimeFilter<"Accommodation"> | Date | string
    host?: XOR<UserRelationFilter, UserWhereInput>
    assignments?: AssignmentListRelationFilter
  }

  export type AccommodationOrderByWithRelationInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    accommodationType?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    floor?: SortOrderInput | SortOrder
    doorCode?: SortOrderInput | SortOrder
    numberOfRooms?: SortOrder
    surface?: SortOrderInput | SortOrder
    hasElevator?: SortOrder
    cleaningRate?: SortOrder
    checkOutDateTime?: SortOrderInput | SortOrder
    nextCheckinDateTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    keys?: SortOrderInput | SortOrder
    accessCode?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    photos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    host?: UserOrderByWithRelationInput
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type AccommodationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccommodationWhereInput | AccommodationWhereInput[]
    OR?: AccommodationWhereInput[]
    NOT?: AccommodationWhereInput | AccommodationWhereInput[]
    hostId?: StringFilter<"Accommodation"> | string
    name?: StringFilter<"Accommodation"> | string
    accommodationType?: EnumAccommodationTypeFilter<"Accommodation"> | $Enums.AccommodationType
    address?: StringFilter<"Accommodation"> | string
    city?: StringFilter<"Accommodation"> | string
    zipCode?: StringFilter<"Accommodation"> | string
    floor?: StringNullableFilter<"Accommodation"> | string | null
    doorCode?: StringNullableFilter<"Accommodation"> | string | null
    numberOfRooms?: IntFilter<"Accommodation"> | number
    surface?: FloatNullableFilter<"Accommodation"> | number | null
    hasElevator?: BoolFilter<"Accommodation"> | boolean
    cleaningRate?: FloatFilter<"Accommodation"> | number
    checkOutDateTime?: DateTimeNullableFilter<"Accommodation"> | Date | string | null
    nextCheckinDateTime?: DateTimeNullableFilter<"Accommodation"> | Date | string | null
    notes?: StringNullableFilter<"Accommodation"> | string | null
    keys?: StringNullableFilter<"Accommodation"> | string | null
    accessCode?: StringNullableFilter<"Accommodation"> | string | null
    instructions?: StringNullableFilter<"Accommodation"> | string | null
    frequency?: StringNullableFilter<"Accommodation"> | string | null
    photos?: StringNullableListFilter<"Accommodation">
    createdAt?: DateTimeFilter<"Accommodation"> | Date | string
    updatedAt?: DateTimeFilter<"Accommodation"> | Date | string
    host?: XOR<UserRelationFilter, UserWhereInput>
    assignments?: AssignmentListRelationFilter
  }, "id">

  export type AccommodationOrderByWithAggregationInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    accommodationType?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    floor?: SortOrderInput | SortOrder
    doorCode?: SortOrderInput | SortOrder
    numberOfRooms?: SortOrder
    surface?: SortOrderInput | SortOrder
    hasElevator?: SortOrder
    cleaningRate?: SortOrder
    checkOutDateTime?: SortOrderInput | SortOrder
    nextCheckinDateTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    keys?: SortOrderInput | SortOrder
    accessCode?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    photos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccommodationCountOrderByAggregateInput
    _avg?: AccommodationAvgOrderByAggregateInput
    _max?: AccommodationMaxOrderByAggregateInput
    _min?: AccommodationMinOrderByAggregateInput
    _sum?: AccommodationSumOrderByAggregateInput
  }

  export type AccommodationScalarWhereWithAggregatesInput = {
    AND?: AccommodationScalarWhereWithAggregatesInput | AccommodationScalarWhereWithAggregatesInput[]
    OR?: AccommodationScalarWhereWithAggregatesInput[]
    NOT?: AccommodationScalarWhereWithAggregatesInput | AccommodationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Accommodation"> | string
    hostId?: StringWithAggregatesFilter<"Accommodation"> | string
    name?: StringWithAggregatesFilter<"Accommodation"> | string
    accommodationType?: EnumAccommodationTypeWithAggregatesFilter<"Accommodation"> | $Enums.AccommodationType
    address?: StringWithAggregatesFilter<"Accommodation"> | string
    city?: StringWithAggregatesFilter<"Accommodation"> | string
    zipCode?: StringWithAggregatesFilter<"Accommodation"> | string
    floor?: StringNullableWithAggregatesFilter<"Accommodation"> | string | null
    doorCode?: StringNullableWithAggregatesFilter<"Accommodation"> | string | null
    numberOfRooms?: IntWithAggregatesFilter<"Accommodation"> | number
    surface?: FloatNullableWithAggregatesFilter<"Accommodation"> | number | null
    hasElevator?: BoolWithAggregatesFilter<"Accommodation"> | boolean
    cleaningRate?: FloatWithAggregatesFilter<"Accommodation"> | number
    checkOutDateTime?: DateTimeNullableWithAggregatesFilter<"Accommodation"> | Date | string | null
    nextCheckinDateTime?: DateTimeNullableWithAggregatesFilter<"Accommodation"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Accommodation"> | string | null
    keys?: StringNullableWithAggregatesFilter<"Accommodation"> | string | null
    accessCode?: StringNullableWithAggregatesFilter<"Accommodation"> | string | null
    instructions?: StringNullableWithAggregatesFilter<"Accommodation"> | string | null
    frequency?: StringNullableWithAggregatesFilter<"Accommodation"> | string | null
    photos?: StringNullableListFilter<"Accommodation">
    createdAt?: DateTimeWithAggregatesFilter<"Accommodation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Accommodation"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    accommodationId?: StringFilter<"Assignment"> | string
    cleanerId?: StringFilter<"Assignment"> | string
    role?: EnumAssignmentRoleFilter<"Assignment"> | $Enums.AssignmentRole
    pricePerCleaning?: FloatFilter<"Assignment"> | number
    message?: StringNullableFilter<"Assignment"> | string | null
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    accommodation?: XOR<AccommodationRelationFilter, AccommodationWhereInput>
    cleaner?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    accommodationId?: SortOrder
    cleanerId?: SortOrder
    role?: SortOrder
    pricePerCleaning?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accommodation?: AccommodationOrderByWithRelationInput
    cleaner?: UserOrderByWithRelationInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accommodationId_cleanerId?: AssignmentAccommodationIdCleanerIdCompoundUniqueInput
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    accommodationId?: StringFilter<"Assignment"> | string
    cleanerId?: StringFilter<"Assignment"> | string
    role?: EnumAssignmentRoleFilter<"Assignment"> | $Enums.AssignmentRole
    pricePerCleaning?: FloatFilter<"Assignment"> | number
    message?: StringNullableFilter<"Assignment"> | string | null
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    accommodation?: XOR<AccommodationRelationFilter, AccommodationWhereInput>
    cleaner?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "accommodationId_cleanerId">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    accommodationId?: SortOrder
    cleanerId?: SortOrder
    role?: SortOrder
    pricePerCleaning?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    accommodationId?: StringWithAggregatesFilter<"Assignment"> | string
    cleanerId?: StringWithAggregatesFilter<"Assignment"> | string
    role?: EnumAssignmentRoleWithAggregatesFilter<"Assignment"> | $Enums.AssignmentRole
    pricePerCleaning?: FloatWithAggregatesFilter<"Assignment"> | number
    message?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    status?: EnumAssignmentStatusWithAggregatesFilter<"Assignment"> | $Enums.AssignmentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    profileImage?: string | null
    role?: $Enums.Role | null
    about?: string | null
    playerId?: string | null
    siretNumber?: string | null
    isProfessionalVerified?: boolean
    workCity?: string | null
    workLatitude?: number | null
    workLongitude?: number | null
    serviceRadius?: number | null
    availability?: string | null
    licenseNumber?: string | null
    biography?: string | null
    interventionZone?: string | null
    languages?: UserCreatelanguagesInput | string[]
    servicesOffered?: UserCreateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isPaymentAccepted?: boolean
    assignments?: AssignmentCreateNestedManyWithoutCleanerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    accommodations?: AccommodationCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    profileImage?: string | null
    role?: $Enums.Role | null
    about?: string | null
    playerId?: string | null
    siretNumber?: string | null
    isProfessionalVerified?: boolean
    workCity?: string | null
    workLatitude?: number | null
    workLongitude?: number | null
    serviceRadius?: number | null
    availability?: string | null
    licenseNumber?: string | null
    biography?: string | null
    interventionZone?: string | null
    languages?: UserCreatelanguagesInput | string[]
    servicesOffered?: UserCreateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isPaymentAccepted?: boolean
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCleanerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
    assignments?: AssignmentUpdateManyWithoutCleanerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    accommodations?: AccommodationUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
    assignments?: AssignmentUncheckedUpdateManyWithoutCleanerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    profileImage?: string | null
    role?: $Enums.Role | null
    about?: string | null
    playerId?: string | null
    siretNumber?: string | null
    isProfessionalVerified?: boolean
    workCity?: string | null
    workLatitude?: number | null
    workLongitude?: number | null
    serviceRadius?: number | null
    availability?: string | null
    licenseNumber?: string | null
    biography?: string | null
    interventionZone?: string | null
    languages?: UserCreatelanguagesInput | string[]
    servicesOffered?: UserCreateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isPaymentAccepted?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OtpCreateInput = {
    id?: string
    email: string
    otp: string
    type: $Enums.OtpType
    expiresAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    email: string
    otp: string
    type: $Enums.OtpType
    expiresAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: string
    email: string
    otp: string
    type: $Enums.OtpType
    expiresAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccommodationCreateInput = {
    id?: string
    name: string
    accommodationType: $Enums.AccommodationType
    address: string
    city: string
    zipCode: string
    floor?: string | null
    doorCode?: string | null
    numberOfRooms: number
    surface?: number | null
    hasElevator?: boolean
    cleaningRate: number
    checkOutDateTime?: Date | string | null
    nextCheckinDateTime?: Date | string | null
    notes?: string | null
    keys?: string | null
    accessCode?: string | null
    instructions?: string | null
    frequency?: string | null
    photos?: AccommodationCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutAccommodationsInput
    assignments?: AssignmentCreateNestedManyWithoutAccommodationInput
  }

  export type AccommodationUncheckedCreateInput = {
    id?: string
    hostId: string
    name: string
    accommodationType: $Enums.AccommodationType
    address: string
    city: string
    zipCode: string
    floor?: string | null
    doorCode?: string | null
    numberOfRooms: number
    surface?: number | null
    hasElevator?: boolean
    cleaningRate: number
    checkOutDateTime?: Date | string | null
    nextCheckinDateTime?: Date | string | null
    notes?: string | null
    keys?: string | null
    accessCode?: string | null
    instructions?: string | null
    frequency?: string | null
    photos?: AccommodationCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutAccommodationInput
  }

  export type AccommodationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accommodationType?: EnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    doorCode?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    hasElevator?: BoolFieldUpdateOperationsInput | boolean
    cleaningRate?: FloatFieldUpdateOperationsInput | number
    checkOutDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextCheckinDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: AccommodationUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutAccommodationsNestedInput
    assignments?: AssignmentUpdateManyWithoutAccommodationNestedInput
  }

  export type AccommodationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accommodationType?: EnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    doorCode?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    hasElevator?: BoolFieldUpdateOperationsInput | boolean
    cleaningRate?: FloatFieldUpdateOperationsInput | number
    checkOutDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextCheckinDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: AccommodationUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutAccommodationNestedInput
  }

  export type AccommodationCreateManyInput = {
    id?: string
    hostId: string
    name: string
    accommodationType: $Enums.AccommodationType
    address: string
    city: string
    zipCode: string
    floor?: string | null
    doorCode?: string | null
    numberOfRooms: number
    surface?: number | null
    hasElevator?: boolean
    cleaningRate: number
    checkOutDateTime?: Date | string | null
    nextCheckinDateTime?: Date | string | null
    notes?: string | null
    keys?: string | null
    accessCode?: string | null
    instructions?: string | null
    frequency?: string | null
    photos?: AccommodationCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccommodationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accommodationType?: EnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    doorCode?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    hasElevator?: BoolFieldUpdateOperationsInput | boolean
    cleaningRate?: FloatFieldUpdateOperationsInput | number
    checkOutDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextCheckinDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: AccommodationUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccommodationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accommodationType?: EnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    doorCode?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    hasElevator?: BoolFieldUpdateOperationsInput | boolean
    cleaningRate?: FloatFieldUpdateOperationsInput | number
    checkOutDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextCheckinDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: AccommodationUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    id?: string
    role?: $Enums.AssignmentRole
    pricePerCleaning: number
    message?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accommodation: AccommodationCreateNestedOneWithoutAssignmentsInput
    cleaner: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    accommodationId: string
    cleanerId: string
    role?: $Enums.AssignmentRole
    pricePerCleaning: number
    message?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accommodation?: AccommodationUpdateOneRequiredWithoutAssignmentsNestedInput
    cleaner?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accommodationId?: StringFieldUpdateOperationsInput | string
    cleanerId?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateManyInput = {
    id?: string
    accommodationId: string
    cleanerId: string
    role?: $Enums.AssignmentRole
    pricePerCleaning: number
    message?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accommodationId?: StringFieldUpdateOperationsInput | string
    cleanerId?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type AccommodationListRelationFilter = {
    every?: AccommodationWhereInput
    some?: AccommodationWhereInput
    none?: AccommodationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccommodationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    about?: SortOrder
    playerId?: SortOrder
    siretNumber?: SortOrder
    isProfessionalVerified?: SortOrder
    workCity?: SortOrder
    workLatitude?: SortOrder
    workLongitude?: SortOrder
    serviceRadius?: SortOrder
    availability?: SortOrder
    licenseNumber?: SortOrder
    biography?: SortOrder
    interventionZone?: SortOrder
    languages?: SortOrder
    servicesOffered?: SortOrder
    isCleanerProfileSetupComplete?: SortOrder
    isEmailVerified?: SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPaymentAccepted?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    workLatitude?: SortOrder
    workLongitude?: SortOrder
    serviceRadius?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    about?: SortOrder
    playerId?: SortOrder
    siretNumber?: SortOrder
    isProfessionalVerified?: SortOrder
    workCity?: SortOrder
    workLatitude?: SortOrder
    workLongitude?: SortOrder
    serviceRadius?: SortOrder
    availability?: SortOrder
    licenseNumber?: SortOrder
    biography?: SortOrder
    interventionZone?: SortOrder
    isCleanerProfileSetupComplete?: SortOrder
    isEmailVerified?: SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPaymentAccepted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    about?: SortOrder
    playerId?: SortOrder
    siretNumber?: SortOrder
    isProfessionalVerified?: SortOrder
    workCity?: SortOrder
    workLatitude?: SortOrder
    workLongitude?: SortOrder
    serviceRadius?: SortOrder
    availability?: SortOrder
    licenseNumber?: SortOrder
    biography?: SortOrder
    interventionZone?: SortOrder
    isCleanerProfileSetupComplete?: SortOrder
    isEmailVerified?: SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPaymentAccepted?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    workLatitude?: SortOrder
    workLongitude?: SortOrder
    serviceRadius?: SortOrder
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

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type EnumOtpTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpType | EnumOtpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpTypeFilter<$PrismaModel> | $Enums.OtpType
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOtpTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpType | EnumOtpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpTypeWithAggregatesFilter<$PrismaModel> | $Enums.OtpType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtpTypeFilter<$PrismaModel>
    _max?: NestedEnumOtpTypeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    isRevoked?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAccommodationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccommodationType | EnumAccommodationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccommodationTypeFilter<$PrismaModel> | $Enums.AccommodationType
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccommodationCountOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    accommodationType?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    floor?: SortOrder
    doorCode?: SortOrder
    numberOfRooms?: SortOrder
    surface?: SortOrder
    hasElevator?: SortOrder
    cleaningRate?: SortOrder
    checkOutDateTime?: SortOrder
    nextCheckinDateTime?: SortOrder
    notes?: SortOrder
    keys?: SortOrder
    accessCode?: SortOrder
    instructions?: SortOrder
    frequency?: SortOrder
    photos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccommodationAvgOrderByAggregateInput = {
    numberOfRooms?: SortOrder
    surface?: SortOrder
    cleaningRate?: SortOrder
  }

  export type AccommodationMaxOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    accommodationType?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    floor?: SortOrder
    doorCode?: SortOrder
    numberOfRooms?: SortOrder
    surface?: SortOrder
    hasElevator?: SortOrder
    cleaningRate?: SortOrder
    checkOutDateTime?: SortOrder
    nextCheckinDateTime?: SortOrder
    notes?: SortOrder
    keys?: SortOrder
    accessCode?: SortOrder
    instructions?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccommodationMinOrderByAggregateInput = {
    id?: SortOrder
    hostId?: SortOrder
    name?: SortOrder
    accommodationType?: SortOrder
    address?: SortOrder
    city?: SortOrder
    zipCode?: SortOrder
    floor?: SortOrder
    doorCode?: SortOrder
    numberOfRooms?: SortOrder
    surface?: SortOrder
    hasElevator?: SortOrder
    cleaningRate?: SortOrder
    checkOutDateTime?: SortOrder
    nextCheckinDateTime?: SortOrder
    notes?: SortOrder
    keys?: SortOrder
    accessCode?: SortOrder
    instructions?: SortOrder
    frequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccommodationSumOrderByAggregateInput = {
    numberOfRooms?: SortOrder
    surface?: SortOrder
    cleaningRate?: SortOrder
  }

  export type EnumAccommodationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccommodationType | EnumAccommodationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccommodationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccommodationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccommodationTypeFilter<$PrismaModel>
    _max?: NestedEnumAccommodationTypeFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAssignmentRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentRole | EnumAssignmentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentRole[] | ListEnumAssignmentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentRole[] | ListEnumAssignmentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentRoleFilter<$PrismaModel> | $Enums.AssignmentRole
  }

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type AccommodationRelationFilter = {
    is?: AccommodationWhereInput
    isNot?: AccommodationWhereInput
  }

  export type AssignmentAccommodationIdCleanerIdCompoundUniqueInput = {
    accommodationId: string
    cleanerId: string
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    accommodationId?: SortOrder
    cleanerId?: SortOrder
    role?: SortOrder
    pricePerCleaning?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    pricePerCleaning?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    accommodationId?: SortOrder
    cleanerId?: SortOrder
    role?: SortOrder
    pricePerCleaning?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    accommodationId?: SortOrder
    cleanerId?: SortOrder
    role?: SortOrder
    pricePerCleaning?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    pricePerCleaning?: SortOrder
  }

  export type EnumAssignmentRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentRole | EnumAssignmentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentRole[] | ListEnumAssignmentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentRole[] | ListEnumAssignmentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentRoleWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentRoleFilter<$PrismaModel>
    _max?: NestedEnumAssignmentRoleFilter<$PrismaModel>
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type UserCreatelanguagesInput = {
    set: string[]
  }

  export type UserCreateservicesOfferedInput = {
    set: string[]
  }

  export type AssignmentCreateNestedManyWithoutCleanerInput = {
    create?: XOR<AssignmentCreateWithoutCleanerInput, AssignmentUncheckedCreateWithoutCleanerInput> | AssignmentCreateWithoutCleanerInput[] | AssignmentUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCleanerInput | AssignmentCreateOrConnectWithoutCleanerInput[]
    createMany?: AssignmentCreateManyCleanerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AccommodationCreateNestedManyWithoutHostInput = {
    create?: XOR<AccommodationCreateWithoutHostInput, AccommodationUncheckedCreateWithoutHostInput> | AccommodationCreateWithoutHostInput[] | AccommodationUncheckedCreateWithoutHostInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutHostInput | AccommodationCreateOrConnectWithoutHostInput[]
    createMany?: AccommodationCreateManyHostInputEnvelope
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutCleanerInput = {
    create?: XOR<AssignmentCreateWithoutCleanerInput, AssignmentUncheckedCreateWithoutCleanerInput> | AssignmentCreateWithoutCleanerInput[] | AssignmentUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCleanerInput | AssignmentCreateOrConnectWithoutCleanerInput[]
    createMany?: AssignmentCreateManyCleanerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AccommodationUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<AccommodationCreateWithoutHostInput, AccommodationUncheckedCreateWithoutHostInput> | AccommodationCreateWithoutHostInput[] | AccommodationUncheckedCreateWithoutHostInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutHostInput | AccommodationCreateOrConnectWithoutHostInput[]
    createMany?: AccommodationCreateManyHostInputEnvelope
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateservicesOfferedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AssignmentUpdateManyWithoutCleanerNestedInput = {
    create?: XOR<AssignmentCreateWithoutCleanerInput, AssignmentUncheckedCreateWithoutCleanerInput> | AssignmentCreateWithoutCleanerInput[] | AssignmentUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCleanerInput | AssignmentCreateOrConnectWithoutCleanerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutCleanerInput | AssignmentUpsertWithWhereUniqueWithoutCleanerInput[]
    createMany?: AssignmentCreateManyCleanerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutCleanerInput | AssignmentUpdateWithWhereUniqueWithoutCleanerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutCleanerInput | AssignmentUpdateManyWithWhereWithoutCleanerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AccommodationUpdateManyWithoutHostNestedInput = {
    create?: XOR<AccommodationCreateWithoutHostInput, AccommodationUncheckedCreateWithoutHostInput> | AccommodationCreateWithoutHostInput[] | AccommodationUncheckedCreateWithoutHostInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutHostInput | AccommodationCreateOrConnectWithoutHostInput[]
    upsert?: AccommodationUpsertWithWhereUniqueWithoutHostInput | AccommodationUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: AccommodationCreateManyHostInputEnvelope
    set?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    disconnect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    delete?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    update?: AccommodationUpdateWithWhereUniqueWithoutHostInput | AccommodationUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: AccommodationUpdateManyWithWhereWithoutHostInput | AccommodationUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutCleanerNestedInput = {
    create?: XOR<AssignmentCreateWithoutCleanerInput, AssignmentUncheckedCreateWithoutCleanerInput> | AssignmentCreateWithoutCleanerInput[] | AssignmentUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutCleanerInput | AssignmentCreateOrConnectWithoutCleanerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutCleanerInput | AssignmentUpsertWithWhereUniqueWithoutCleanerInput[]
    createMany?: AssignmentCreateManyCleanerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutCleanerInput | AssignmentUpdateWithWhereUniqueWithoutCleanerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutCleanerInput | AssignmentUpdateManyWithWhereWithoutCleanerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AccommodationUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<AccommodationCreateWithoutHostInput, AccommodationUncheckedCreateWithoutHostInput> | AccommodationCreateWithoutHostInput[] | AccommodationUncheckedCreateWithoutHostInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutHostInput | AccommodationCreateOrConnectWithoutHostInput[]
    upsert?: AccommodationUpsertWithWhereUniqueWithoutHostInput | AccommodationUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: AccommodationCreateManyHostInputEnvelope
    set?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    disconnect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    delete?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    update?: AccommodationUpdateWithWhereUniqueWithoutHostInput | AccommodationUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: AccommodationUpdateManyWithWhereWithoutHostInput | AccommodationUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
  }

  export type EnumOtpTypeFieldUpdateOperationsInput = {
    set?: $Enums.OtpType
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type AccommodationCreatephotosInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutAccommodationsInput = {
    create?: XOR<UserCreateWithoutAccommodationsInput, UserUncheckedCreateWithoutAccommodationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccommodationsInput
    connect?: UserWhereUniqueInput
  }

  export type AssignmentCreateNestedManyWithoutAccommodationInput = {
    create?: XOR<AssignmentCreateWithoutAccommodationInput, AssignmentUncheckedCreateWithoutAccommodationInput> | AssignmentCreateWithoutAccommodationInput[] | AssignmentUncheckedCreateWithoutAccommodationInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAccommodationInput | AssignmentCreateOrConnectWithoutAccommodationInput[]
    createMany?: AssignmentCreateManyAccommodationInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutAccommodationInput = {
    create?: XOR<AssignmentCreateWithoutAccommodationInput, AssignmentUncheckedCreateWithoutAccommodationInput> | AssignmentCreateWithoutAccommodationInput[] | AssignmentUncheckedCreateWithoutAccommodationInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAccommodationInput | AssignmentCreateOrConnectWithoutAccommodationInput[]
    createMany?: AssignmentCreateManyAccommodationInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type EnumAccommodationTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccommodationType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccommodationUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutAccommodationsNestedInput = {
    create?: XOR<UserCreateWithoutAccommodationsInput, UserUncheckedCreateWithoutAccommodationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccommodationsInput
    upsert?: UserUpsertWithoutAccommodationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccommodationsInput, UserUpdateWithoutAccommodationsInput>, UserUncheckedUpdateWithoutAccommodationsInput>
  }

  export type AssignmentUpdateManyWithoutAccommodationNestedInput = {
    create?: XOR<AssignmentCreateWithoutAccommodationInput, AssignmentUncheckedCreateWithoutAccommodationInput> | AssignmentCreateWithoutAccommodationInput[] | AssignmentUncheckedCreateWithoutAccommodationInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAccommodationInput | AssignmentCreateOrConnectWithoutAccommodationInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutAccommodationInput | AssignmentUpsertWithWhereUniqueWithoutAccommodationInput[]
    createMany?: AssignmentCreateManyAccommodationInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutAccommodationInput | AssignmentUpdateWithWhereUniqueWithoutAccommodationInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutAccommodationInput | AssignmentUpdateManyWithWhereWithoutAccommodationInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutAccommodationNestedInput = {
    create?: XOR<AssignmentCreateWithoutAccommodationInput, AssignmentUncheckedCreateWithoutAccommodationInput> | AssignmentCreateWithoutAccommodationInput[] | AssignmentUncheckedCreateWithoutAccommodationInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAccommodationInput | AssignmentCreateOrConnectWithoutAccommodationInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutAccommodationInput | AssignmentUpsertWithWhereUniqueWithoutAccommodationInput[]
    createMany?: AssignmentCreateManyAccommodationInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutAccommodationInput | AssignmentUpdateWithWhereUniqueWithoutAccommodationInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutAccommodationInput | AssignmentUpdateManyWithWhereWithoutAccommodationInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AccommodationCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<AccommodationCreateWithoutAssignmentsInput, AccommodationUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: AccommodationCreateOrConnectWithoutAssignmentsInput
    connect?: AccommodationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAssignmentRoleFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentRole
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type AccommodationUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<AccommodationCreateWithoutAssignmentsInput, AccommodationUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: AccommodationCreateOrConnectWithoutAssignmentsInput
    upsert?: AccommodationUpsertWithoutAssignmentsInput
    connect?: AccommodationWhereUniqueInput
    update?: XOR<XOR<AccommodationUpdateToOneWithWhereWithoutAssignmentsInput, AccommodationUpdateWithoutAssignmentsInput>, AccommodationUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
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

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedEnumOtpTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpType | EnumOtpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpTypeFilter<$PrismaModel> | $Enums.OtpType
  }

  export type NestedEnumOtpTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpType | EnumOtpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpTypeWithAggregatesFilter<$PrismaModel> | $Enums.OtpType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtpTypeFilter<$PrismaModel>
    _max?: NestedEnumOtpTypeFilter<$PrismaModel>
  }

  export type NestedEnumAccommodationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccommodationType | EnumAccommodationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccommodationTypeFilter<$PrismaModel> | $Enums.AccommodationType
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAccommodationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccommodationType | EnumAccommodationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccommodationType[] | ListEnumAccommodationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccommodationTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccommodationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccommodationTypeFilter<$PrismaModel>
    _max?: NestedEnumAccommodationTypeFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentRole | EnumAssignmentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentRole[] | ListEnumAssignmentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentRole[] | ListEnumAssignmentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentRoleFilter<$PrismaModel> | $Enums.AssignmentRole
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedEnumAssignmentRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentRole | EnumAssignmentRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentRole[] | ListEnumAssignmentRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentRole[] | ListEnumAssignmentRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentRoleWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentRoleFilter<$PrismaModel>
    _max?: NestedEnumAssignmentRoleFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type AssignmentCreateWithoutCleanerInput = {
    id?: string
    role?: $Enums.AssignmentRole
    pricePerCleaning: number
    message?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    accommodation: AccommodationCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutCleanerInput = {
    id?: string
    accommodationId: string
    role?: $Enums.AssignmentRole
    pricePerCleaning: number
    message?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutCleanerInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutCleanerInput, AssignmentUncheckedCreateWithoutCleanerInput>
  }

  export type AssignmentCreateManyCleanerInputEnvelope = {
    data: AssignmentCreateManyCleanerInput | AssignmentCreateManyCleanerInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccommodationCreateWithoutHostInput = {
    id?: string
    name: string
    accommodationType: $Enums.AccommodationType
    address: string
    city: string
    zipCode: string
    floor?: string | null
    doorCode?: string | null
    numberOfRooms: number
    surface?: number | null
    hasElevator?: boolean
    cleaningRate: number
    checkOutDateTime?: Date | string | null
    nextCheckinDateTime?: Date | string | null
    notes?: string | null
    keys?: string | null
    accessCode?: string | null
    instructions?: string | null
    frequency?: string | null
    photos?: AccommodationCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentCreateNestedManyWithoutAccommodationInput
  }

  export type AccommodationUncheckedCreateWithoutHostInput = {
    id?: string
    name: string
    accommodationType: $Enums.AccommodationType
    address: string
    city: string
    zipCode: string
    floor?: string | null
    doorCode?: string | null
    numberOfRooms: number
    surface?: number | null
    hasElevator?: boolean
    cleaningRate: number
    checkOutDateTime?: Date | string | null
    nextCheckinDateTime?: Date | string | null
    notes?: string | null
    keys?: string | null
    accessCode?: string | null
    instructions?: string | null
    frequency?: string | null
    photos?: AccommodationCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutAccommodationInput
  }

  export type AccommodationCreateOrConnectWithoutHostInput = {
    where: AccommodationWhereUniqueInput
    create: XOR<AccommodationCreateWithoutHostInput, AccommodationUncheckedCreateWithoutHostInput>
  }

  export type AccommodationCreateManyHostInputEnvelope = {
    data: AccommodationCreateManyHostInput | AccommodationCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentUpsertWithWhereUniqueWithoutCleanerInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutCleanerInput, AssignmentUncheckedUpdateWithoutCleanerInput>
    create: XOR<AssignmentCreateWithoutCleanerInput, AssignmentUncheckedCreateWithoutCleanerInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutCleanerInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutCleanerInput, AssignmentUncheckedUpdateWithoutCleanerInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutCleanerInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutCleanerInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    accommodationId?: StringFilter<"Assignment"> | string
    cleanerId?: StringFilter<"Assignment"> | string
    role?: EnumAssignmentRoleFilter<"Assignment"> | $Enums.AssignmentRole
    pricePerCleaning?: FloatFilter<"Assignment"> | number
    message?: StringNullableFilter<"Assignment"> | string | null
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    isRevoked?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type AccommodationUpsertWithWhereUniqueWithoutHostInput = {
    where: AccommodationWhereUniqueInput
    update: XOR<AccommodationUpdateWithoutHostInput, AccommodationUncheckedUpdateWithoutHostInput>
    create: XOR<AccommodationCreateWithoutHostInput, AccommodationUncheckedCreateWithoutHostInput>
  }

  export type AccommodationUpdateWithWhereUniqueWithoutHostInput = {
    where: AccommodationWhereUniqueInput
    data: XOR<AccommodationUpdateWithoutHostInput, AccommodationUncheckedUpdateWithoutHostInput>
  }

  export type AccommodationUpdateManyWithWhereWithoutHostInput = {
    where: AccommodationScalarWhereInput
    data: XOR<AccommodationUpdateManyMutationInput, AccommodationUncheckedUpdateManyWithoutHostInput>
  }

  export type AccommodationScalarWhereInput = {
    AND?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
    OR?: AccommodationScalarWhereInput[]
    NOT?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
    id?: StringFilter<"Accommodation"> | string
    hostId?: StringFilter<"Accommodation"> | string
    name?: StringFilter<"Accommodation"> | string
    accommodationType?: EnumAccommodationTypeFilter<"Accommodation"> | $Enums.AccommodationType
    address?: StringFilter<"Accommodation"> | string
    city?: StringFilter<"Accommodation"> | string
    zipCode?: StringFilter<"Accommodation"> | string
    floor?: StringNullableFilter<"Accommodation"> | string | null
    doorCode?: StringNullableFilter<"Accommodation"> | string | null
    numberOfRooms?: IntFilter<"Accommodation"> | number
    surface?: FloatNullableFilter<"Accommodation"> | number | null
    hasElevator?: BoolFilter<"Accommodation"> | boolean
    cleaningRate?: FloatFilter<"Accommodation"> | number
    checkOutDateTime?: DateTimeNullableFilter<"Accommodation"> | Date | string | null
    nextCheckinDateTime?: DateTimeNullableFilter<"Accommodation"> | Date | string | null
    notes?: StringNullableFilter<"Accommodation"> | string | null
    keys?: StringNullableFilter<"Accommodation"> | string | null
    accessCode?: StringNullableFilter<"Accommodation"> | string | null
    instructions?: StringNullableFilter<"Accommodation"> | string | null
    frequency?: StringNullableFilter<"Accommodation"> | string | null
    photos?: StringNullableListFilter<"Accommodation">
    createdAt?: DateTimeFilter<"Accommodation"> | Date | string
    updatedAt?: DateTimeFilter<"Accommodation"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    profileImage?: string | null
    role?: $Enums.Role | null
    about?: string | null
    playerId?: string | null
    siretNumber?: string | null
    isProfessionalVerified?: boolean
    workCity?: string | null
    workLatitude?: number | null
    workLongitude?: number | null
    serviceRadius?: number | null
    availability?: string | null
    licenseNumber?: string | null
    biography?: string | null
    interventionZone?: string | null
    languages?: UserCreatelanguagesInput | string[]
    servicesOffered?: UserCreateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isPaymentAccepted?: boolean
    assignments?: AssignmentCreateNestedManyWithoutCleanerInput
    accommodations?: AccommodationCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    profileImage?: string | null
    role?: $Enums.Role | null
    about?: string | null
    playerId?: string | null
    siretNumber?: string | null
    isProfessionalVerified?: boolean
    workCity?: string | null
    workLatitude?: number | null
    workLongitude?: number | null
    serviceRadius?: number | null
    availability?: string | null
    licenseNumber?: string | null
    biography?: string | null
    interventionZone?: string | null
    languages?: UserCreatelanguagesInput | string[]
    servicesOffered?: UserCreateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isPaymentAccepted?: boolean
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCleanerInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
    assignments?: AssignmentUpdateManyWithoutCleanerNestedInput
    accommodations?: AccommodationUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
    assignments?: AssignmentUncheckedUpdateManyWithoutCleanerNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutHostNestedInput
  }

  export type UserCreateWithoutAccommodationsInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    profileImage?: string | null
    role?: $Enums.Role | null
    about?: string | null
    playerId?: string | null
    siretNumber?: string | null
    isProfessionalVerified?: boolean
    workCity?: string | null
    workLatitude?: number | null
    workLongitude?: number | null
    serviceRadius?: number | null
    availability?: string | null
    licenseNumber?: string | null
    biography?: string | null
    interventionZone?: string | null
    languages?: UserCreatelanguagesInput | string[]
    servicesOffered?: UserCreateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isPaymentAccepted?: boolean
    assignments?: AssignmentCreateNestedManyWithoutCleanerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccommodationsInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    profileImage?: string | null
    role?: $Enums.Role | null
    about?: string | null
    playerId?: string | null
    siretNumber?: string | null
    isProfessionalVerified?: boolean
    workCity?: string | null
    workLatitude?: number | null
    workLongitude?: number | null
    serviceRadius?: number | null
    availability?: string | null
    licenseNumber?: string | null
    biography?: string | null
    interventionZone?: string | null
    languages?: UserCreatelanguagesInput | string[]
    servicesOffered?: UserCreateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isPaymentAccepted?: boolean
    assignments?: AssignmentUncheckedCreateNestedManyWithoutCleanerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccommodationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccommodationsInput, UserUncheckedCreateWithoutAccommodationsInput>
  }

  export type AssignmentCreateWithoutAccommodationInput = {
    id?: string
    role?: $Enums.AssignmentRole
    pricePerCleaning: number
    message?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    cleaner: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutAccommodationInput = {
    id?: string
    cleanerId: string
    role?: $Enums.AssignmentRole
    pricePerCleaning: number
    message?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutAccommodationInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutAccommodationInput, AssignmentUncheckedCreateWithoutAccommodationInput>
  }

  export type AssignmentCreateManyAccommodationInputEnvelope = {
    data: AssignmentCreateManyAccommodationInput | AssignmentCreateManyAccommodationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccommodationsInput = {
    update: XOR<UserUpdateWithoutAccommodationsInput, UserUncheckedUpdateWithoutAccommodationsInput>
    create: XOR<UserCreateWithoutAccommodationsInput, UserUncheckedCreateWithoutAccommodationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccommodationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccommodationsInput, UserUncheckedUpdateWithoutAccommodationsInput>
  }

  export type UserUpdateWithoutAccommodationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
    assignments?: AssignmentUpdateManyWithoutCleanerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccommodationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
    assignments?: AssignmentUncheckedUpdateManyWithoutCleanerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssignmentUpsertWithWhereUniqueWithoutAccommodationInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutAccommodationInput, AssignmentUncheckedUpdateWithoutAccommodationInput>
    create: XOR<AssignmentCreateWithoutAccommodationInput, AssignmentUncheckedCreateWithoutAccommodationInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutAccommodationInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutAccommodationInput, AssignmentUncheckedUpdateWithoutAccommodationInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutAccommodationInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutAccommodationInput>
  }

  export type AccommodationCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    accommodationType: $Enums.AccommodationType
    address: string
    city: string
    zipCode: string
    floor?: string | null
    doorCode?: string | null
    numberOfRooms: number
    surface?: number | null
    hasElevator?: boolean
    cleaningRate: number
    checkOutDateTime?: Date | string | null
    nextCheckinDateTime?: Date | string | null
    notes?: string | null
    keys?: string | null
    accessCode?: string | null
    instructions?: string | null
    frequency?: string | null
    photos?: AccommodationCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutAccommodationsInput
  }

  export type AccommodationUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    hostId: string
    name: string
    accommodationType: $Enums.AccommodationType
    address: string
    city: string
    zipCode: string
    floor?: string | null
    doorCode?: string | null
    numberOfRooms: number
    surface?: number | null
    hasElevator?: boolean
    cleaningRate: number
    checkOutDateTime?: Date | string | null
    nextCheckinDateTime?: Date | string | null
    notes?: string | null
    keys?: string | null
    accessCode?: string | null
    instructions?: string | null
    frequency?: string | null
    photos?: AccommodationCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccommodationCreateOrConnectWithoutAssignmentsInput = {
    where: AccommodationWhereUniqueInput
    create: XOR<AccommodationCreateWithoutAssignmentsInput, AccommodationUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    profileImage?: string | null
    role?: $Enums.Role | null
    about?: string | null
    playerId?: string | null
    siretNumber?: string | null
    isProfessionalVerified?: boolean
    workCity?: string | null
    workLatitude?: number | null
    workLongitude?: number | null
    serviceRadius?: number | null
    availability?: string | null
    licenseNumber?: string | null
    biography?: string | null
    interventionZone?: string | null
    languages?: UserCreatelanguagesInput | string[]
    servicesOffered?: UserCreateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isPaymentAccepted?: boolean
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    accommodations?: AccommodationCreateNestedManyWithoutHostInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    email: string
    password?: string | null
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    profileImage?: string | null
    role?: $Enums.Role | null
    about?: string | null
    playerId?: string | null
    siretNumber?: string | null
    isProfessionalVerified?: boolean
    workCity?: string | null
    workLatitude?: number | null
    workLongitude?: number | null
    serviceRadius?: number | null
    availability?: string | null
    licenseNumber?: string | null
    biography?: string | null
    interventionZone?: string | null
    languages?: UserCreatelanguagesInput | string[]
    servicesOffered?: UserCreateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: boolean
    isEmailVerified?: boolean
    isProfileComplete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isPaymentAccepted?: boolean
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutHostInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type AccommodationUpsertWithoutAssignmentsInput = {
    update: XOR<AccommodationUpdateWithoutAssignmentsInput, AccommodationUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<AccommodationCreateWithoutAssignmentsInput, AccommodationUncheckedCreateWithoutAssignmentsInput>
    where?: AccommodationWhereInput
  }

  export type AccommodationUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: AccommodationWhereInput
    data: XOR<AccommodationUpdateWithoutAssignmentsInput, AccommodationUncheckedUpdateWithoutAssignmentsInput>
  }

  export type AccommodationUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accommodationType?: EnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    doorCode?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    hasElevator?: BoolFieldUpdateOperationsInput | boolean
    cleaningRate?: FloatFieldUpdateOperationsInput | number
    checkOutDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextCheckinDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: AccommodationUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutAccommodationsNestedInput
  }

  export type AccommodationUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accommodationType?: EnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    doorCode?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    hasElevator?: BoolFieldUpdateOperationsInput | boolean
    cleaningRate?: FloatFieldUpdateOperationsInput | number
    checkOutDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextCheckinDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: AccommodationUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    accommodations?: AccommodationUpdateManyWithoutHostNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    siretNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isProfessionalVerified?: BoolFieldUpdateOperationsInput | boolean
    workCity?: NullableStringFieldUpdateOperationsInput | string | null
    workLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    workLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    serviceRadius?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    interventionZone?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: UserUpdatelanguagesInput | string[]
    servicesOffered?: UserUpdateservicesOfferedInput | string[]
    isCleanerProfileSetupComplete?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPaymentAccepted?: BoolFieldUpdateOperationsInput | boolean
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutHostNestedInput
  }

  export type AssignmentCreateManyCleanerInput = {
    id?: string
    accommodationId: string
    role?: $Enums.AssignmentRole
    pricePerCleaning: number
    message?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    isRevoked?: boolean
    createdAt?: Date | string
  }

  export type AccommodationCreateManyHostInput = {
    id?: string
    name: string
    accommodationType: $Enums.AccommodationType
    address: string
    city: string
    zipCode: string
    floor?: string | null
    doorCode?: string | null
    numberOfRooms: number
    surface?: number | null
    hasElevator?: boolean
    cleaningRate: number
    checkOutDateTime?: Date | string | null
    nextCheckinDateTime?: Date | string | null
    notes?: string | null
    keys?: string | null
    accessCode?: string | null
    instructions?: string | null
    frequency?: string | null
    photos?: AccommodationCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateWithoutCleanerInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accommodation?: AccommodationUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutCleanerInput = {
    id?: StringFieldUpdateOperationsInput | string
    accommodationId?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyWithoutCleanerInput = {
    id?: StringFieldUpdateOperationsInput | string
    accommodationId?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccommodationUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accommodationType?: EnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    doorCode?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    hasElevator?: BoolFieldUpdateOperationsInput | boolean
    cleaningRate?: FloatFieldUpdateOperationsInput | number
    checkOutDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextCheckinDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: AccommodationUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUpdateManyWithoutAccommodationNestedInput
  }

  export type AccommodationUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accommodationType?: EnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    doorCode?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    hasElevator?: BoolFieldUpdateOperationsInput | boolean
    cleaningRate?: FloatFieldUpdateOperationsInput | number
    checkOutDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextCheckinDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: AccommodationUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutAccommodationNestedInput
  }

  export type AccommodationUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accommodationType?: EnumAccommodationTypeFieldUpdateOperationsInput | $Enums.AccommodationType
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    doorCode?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfRooms?: IntFieldUpdateOperationsInput | number
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
    hasElevator?: BoolFieldUpdateOperationsInput | boolean
    cleaningRate?: FloatFieldUpdateOperationsInput | number
    checkOutDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextCheckinDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: NullableStringFieldUpdateOperationsInput | string | null
    accessCode?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: AccommodationUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateManyAccommodationInput = {
    id?: string
    cleanerId: string
    role?: $Enums.AssignmentRole
    pricePerCleaning: number
    message?: string | null
    status?: $Enums.AssignmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateWithoutAccommodationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cleaner?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutAccommodationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cleanerId?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyWithoutAccommodationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cleanerId?: StringFieldUpdateOperationsInput | string
    role?: EnumAssignmentRoleFieldUpdateOperationsInput | $Enums.AssignmentRole
    pricePerCleaning?: FloatFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccommodationCountOutputTypeDefaultArgs instead
     */
    export type AccommodationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccommodationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtpDefaultArgs instead
     */
    export type OtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtpDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefreshTokenDefaultArgs instead
     */
    export type RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefreshTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccommodationDefaultArgs instead
     */
    export type AccommodationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccommodationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssignmentDefaultArgs instead
     */
    export type AssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssignmentDefaultArgs<ExtArgs>

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