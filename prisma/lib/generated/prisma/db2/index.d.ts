
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
 * Model EntitiesProfile
 * 
 */
export type EntitiesProfile = $Result.DefaultSelection<Prisma.$EntitiesProfilePayload>
/**
 * Model DescriptionProfile
 * 
 */
export type DescriptionProfile = $Result.DefaultSelection<Prisma.$DescriptionProfilePayload>
/**
 * Model UrlEntity
 * 
 */
export type UrlEntity = $Result.DefaultSelection<Prisma.$UrlEntityPayload>
/**
 * Model TweetUser
 * Minimal user shape embedded in a tweet
 */
export type TweetUser = $Result.DefaultSelection<Prisma.$TweetUserPayload>
/**
 * Model TweetStatus
 * Tweet status embedded in follower data
 */
export type TweetStatus = $Result.DefaultSelection<Prisma.$TweetStatusPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model TweetsData
 * Tweets data collection mapped from Twitter JSON
 */
export type TweetsData = $Result.DefaultSelection<Prisma.$TweetsDataPayload>
/**
 * Model FollowerFollowingData
 * Follower/Following data collection
 */
export type FollowerFollowingData = $Result.DefaultSelection<Prisma.$FollowerFollowingDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tweetsData`: Exposes CRUD operations for the **TweetsData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TweetsData
    * const tweetsData = await prisma.tweetsData.findMany()
    * ```
    */
  get tweetsData(): Prisma.TweetsDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followerFollowingData`: Exposes CRUD operations for the **FollowerFollowingData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowerFollowingData
    * const followerFollowingData = await prisma.followerFollowingData.findMany()
    * ```
    */
  get followerFollowingData(): Prisma.FollowerFollowingDataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    UserProfile: 'UserProfile',
    TweetsData: 'TweetsData',
    FollowerFollowingData: 'FollowerFollowingData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db2?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userProfile" | "tweetsData" | "followerFollowingData"
      txIsolationLevel: never
    }
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserProfileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserProfileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      TweetsData: {
        payload: Prisma.$TweetsDataPayload<ExtArgs>
        fields: Prisma.TweetsDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TweetsDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TweetsDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataPayload>
          }
          findFirst: {
            args: Prisma.TweetsDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TweetsDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataPayload>
          }
          findMany: {
            args: Prisma.TweetsDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataPayload>[]
          }
          create: {
            args: Prisma.TweetsDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataPayload>
          }
          createMany: {
            args: Prisma.TweetsDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TweetsDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataPayload>
          }
          update: {
            args: Prisma.TweetsDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataPayload>
          }
          deleteMany: {
            args: Prisma.TweetsDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TweetsDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TweetsDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataPayload>
          }
          aggregate: {
            args: Prisma.TweetsDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTweetsData>
          }
          groupBy: {
            args: Prisma.TweetsDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<TweetsDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TweetsDataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TweetsDataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TweetsDataCountArgs<ExtArgs>
            result: $Utils.Optional<TweetsDataCountAggregateOutputType> | number
          }
        }
      }
      FollowerFollowingData: {
        payload: Prisma.$FollowerFollowingDataPayload<ExtArgs>
        fields: Prisma.FollowerFollowingDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowerFollowingDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerFollowingDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowerFollowingDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerFollowingDataPayload>
          }
          findFirst: {
            args: Prisma.FollowerFollowingDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerFollowingDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowerFollowingDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerFollowingDataPayload>
          }
          findMany: {
            args: Prisma.FollowerFollowingDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerFollowingDataPayload>[]
          }
          create: {
            args: Prisma.FollowerFollowingDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerFollowingDataPayload>
          }
          createMany: {
            args: Prisma.FollowerFollowingDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FollowerFollowingDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerFollowingDataPayload>
          }
          update: {
            args: Prisma.FollowerFollowingDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerFollowingDataPayload>
          }
          deleteMany: {
            args: Prisma.FollowerFollowingDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowerFollowingDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowerFollowingDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerFollowingDataPayload>
          }
          aggregate: {
            args: Prisma.FollowerFollowingDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowerFollowingData>
          }
          groupBy: {
            args: Prisma.FollowerFollowingDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowerFollowingDataGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FollowerFollowingDataFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FollowerFollowingDataAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FollowerFollowingDataCountArgs<ExtArgs>
            result: $Utils.Optional<FollowerFollowingDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    userProfile?: UserProfileOmit
    tweetsData?: TweetsDataOmit
    followerFollowingData?: FollowerFollowingDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model EntitiesProfile
   */





  export type EntitiesProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    description?: boolean | DescriptionProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entitiesProfile"]>



  export type EntitiesProfileSelectScalar = {}

  export type EntitiesProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"description", ExtArgs["result"]["entitiesProfile"]>
  export type EntitiesProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntitiesProfilePayload = {
    name: "EntitiesProfile"
    objects: {}
    scalars: {}
    composites: {
      description: Prisma.$DescriptionProfilePayload | null
    }
  }

  type EntitiesProfileGetPayload<S extends boolean | null | undefined | EntitiesProfileDefaultArgs> = $Result.GetResult<Prisma.$EntitiesProfilePayload, S>





  /**
   * Fields of the EntitiesProfile model
   */
  interface EntitiesProfileFieldRefs {

  }
    

  // Custom InputTypes
  /**
   * EntitiesProfile without action
   */
  export type EntitiesProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntitiesProfile
     */
    select?: EntitiesProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntitiesProfile
     */
    omit?: EntitiesProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitiesProfileInclude<ExtArgs> | null
  }


  /**
   * Model DescriptionProfile
   */





  export type DescriptionProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    urls?: boolean | UrlEntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["descriptionProfile"]>



  export type DescriptionProfileSelectScalar = {}

  export type DescriptionProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"urls", ExtArgs["result"]["descriptionProfile"]>
  export type DescriptionProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DescriptionProfilePayload = {
    name: "DescriptionProfile"
    objects: {}
    scalars: {}
    composites: {
      urls: Prisma.$UrlEntityPayload[]
    }
  }

  type DescriptionProfileGetPayload<S extends boolean | null | undefined | DescriptionProfileDefaultArgs> = $Result.GetResult<Prisma.$DescriptionProfilePayload, S>





  /**
   * Fields of the DescriptionProfile model
   */
  interface DescriptionProfileFieldRefs {

  }
    

  // Custom InputTypes
  /**
   * DescriptionProfile without action
   */
  export type DescriptionProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DescriptionProfile
     */
    select?: DescriptionProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DescriptionProfile
     */
    omit?: DescriptionProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DescriptionProfileInclude<ExtArgs> | null
  }


  /**
   * Model UrlEntity
   */





  export type UrlEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    display_url?: boolean
    expanded_url?: boolean
    url?: boolean
    indices?: boolean
  }, ExtArgs["result"]["urlEntity"]>



  export type UrlEntitySelectScalar = {
    display_url?: boolean
    expanded_url?: boolean
    url?: boolean
    indices?: boolean
  }

  export type UrlEntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"display_url" | "expanded_url" | "url" | "indices", ExtArgs["result"]["urlEntity"]>

  export type $UrlEntityPayload = {
    name: "UrlEntity"
    objects: {}
    scalars: {
      display_url: string | null
      expanded_url: string | null
      url: string | null
      indices: number[]
    }
    composites: {}
  }

  type UrlEntityGetPayload<S extends boolean | null | undefined | UrlEntityDefaultArgs> = $Result.GetResult<Prisma.$UrlEntityPayload, S>





  /**
   * Fields of the UrlEntity model
   */
  interface UrlEntityFieldRefs {
    readonly display_url: FieldRef<"UrlEntity", 'String'>
    readonly expanded_url: FieldRef<"UrlEntity", 'String'>
    readonly url: FieldRef<"UrlEntity", 'String'>
    readonly indices: FieldRef<"UrlEntity", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * UrlEntity without action
   */
  export type UrlEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlEntity
     */
    select?: UrlEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlEntity
     */
    omit?: UrlEntityOmit<ExtArgs> | null
  }


  /**
   * Model TweetUser
   */





  export type TweetUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    default_profile?: boolean
    default_profile_image?: boolean
    description?: boolean
    entities?: boolean | EntitiesProfileDefaultArgs<ExtArgs>
    fast_followers_count?: boolean
    favourites_count?: boolean
    followers_count?: boolean
    friends_count?: boolean
    has_custom_timelines?: boolean
    is_translator?: boolean
    listed_count?: boolean
    media_count?: boolean
    normal_followers_count?: boolean
    pinned_tweet_ids_str?: boolean
    possibly_sensitive?: boolean
    profile_banner_url?: boolean
    profile_interstitial_type?: boolean
    statuses_count?: boolean
    translator_type?: boolean
    withheld_in_countries?: boolean
  }, ExtArgs["result"]["tweetUser"]>



  export type TweetUserSelectScalar = {
    default_profile?: boolean
    default_profile_image?: boolean
    description?: boolean
    fast_followers_count?: boolean
    favourites_count?: boolean
    followers_count?: boolean
    friends_count?: boolean
    has_custom_timelines?: boolean
    is_translator?: boolean
    listed_count?: boolean
    media_count?: boolean
    normal_followers_count?: boolean
    pinned_tweet_ids_str?: boolean
    possibly_sensitive?: boolean
    profile_banner_url?: boolean
    profile_interstitial_type?: boolean
    statuses_count?: boolean
    translator_type?: boolean
    withheld_in_countries?: boolean
  }

  export type TweetUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"default_profile" | "default_profile_image" | "description" | "entities" | "fast_followers_count" | "favourites_count" | "followers_count" | "friends_count" | "has_custom_timelines" | "is_translator" | "listed_count" | "media_count" | "normal_followers_count" | "pinned_tweet_ids_str" | "possibly_sensitive" | "profile_banner_url" | "profile_interstitial_type" | "statuses_count" | "translator_type" | "withheld_in_countries", ExtArgs["result"]["tweetUser"]>
  export type TweetUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TweetUserPayload = {
    name: "TweetUser"
    objects: {}
    scalars: {
      default_profile: boolean
      default_profile_image: boolean
      description: string | null
      fast_followers_count: number | null
      favourites_count: number | null
      followers_count: number | null
      friends_count: number | null
      has_custom_timelines: boolean | null
      is_translator: boolean | null
      listed_count: number | null
      media_count: number | null
      normal_followers_count: number | null
      pinned_tweet_ids_str: string[]
      possibly_sensitive: boolean | null
      profile_banner_url: string | null
      profile_interstitial_type: string | null
      statuses_count: number | null
      translator_type: string | null
      withheld_in_countries: string[]
    }
    composites: {
      entities: Prisma.$EntitiesProfilePayload | null
    }
  }

  type TweetUserGetPayload<S extends boolean | null | undefined | TweetUserDefaultArgs> = $Result.GetResult<Prisma.$TweetUserPayload, S>





  /**
   * Fields of the TweetUser model
   */
  interface TweetUserFieldRefs {
    readonly default_profile: FieldRef<"TweetUser", 'Boolean'>
    readonly default_profile_image: FieldRef<"TweetUser", 'Boolean'>
    readonly description: FieldRef<"TweetUser", 'String'>
    readonly fast_followers_count: FieldRef<"TweetUser", 'Int'>
    readonly favourites_count: FieldRef<"TweetUser", 'Int'>
    readonly followers_count: FieldRef<"TweetUser", 'Int'>
    readonly friends_count: FieldRef<"TweetUser", 'Int'>
    readonly has_custom_timelines: FieldRef<"TweetUser", 'Boolean'>
    readonly is_translator: FieldRef<"TweetUser", 'Boolean'>
    readonly listed_count: FieldRef<"TweetUser", 'Int'>
    readonly media_count: FieldRef<"TweetUser", 'Int'>
    readonly normal_followers_count: FieldRef<"TweetUser", 'Int'>
    readonly pinned_tweet_ids_str: FieldRef<"TweetUser", 'String[]'>
    readonly possibly_sensitive: FieldRef<"TweetUser", 'Boolean'>
    readonly profile_banner_url: FieldRef<"TweetUser", 'String'>
    readonly profile_interstitial_type: FieldRef<"TweetUser", 'String'>
    readonly statuses_count: FieldRef<"TweetUser", 'Int'>
    readonly translator_type: FieldRef<"TweetUser", 'String'>
    readonly withheld_in_countries: FieldRef<"TweetUser", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * TweetUser without action
   */
  export type TweetUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetUser
     */
    select?: TweetUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetUser
     */
    omit?: TweetUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetUserInclude<ExtArgs> | null
  }


  /**
   * Model TweetStatus
   */





  export type TweetStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    created_at?: boolean
    id_str?: boolean
    text?: boolean
    truncated?: boolean
    entities?: boolean
    source?: boolean
    in_reply_to_status_id_str?: boolean
    in_reply_to_user_id_str?: boolean
    in_reply_to_screen_name?: boolean
    geo?: boolean
    coordinates?: boolean
    place?: boolean
    contributors?: boolean
    is_quote_status?: boolean
    retweet_count?: boolean
    favorite_count?: boolean
    favorited?: boolean
    retweeted?: boolean
    lang?: boolean
    supplemental_language?: boolean
    self_thread?: boolean
  }, ExtArgs["result"]["tweetStatus"]>



  export type TweetStatusSelectScalar = {
    created_at?: boolean
    id_str?: boolean
    text?: boolean
    truncated?: boolean
    entities?: boolean
    source?: boolean
    in_reply_to_status_id_str?: boolean
    in_reply_to_user_id_str?: boolean
    in_reply_to_screen_name?: boolean
    geo?: boolean
    coordinates?: boolean
    place?: boolean
    contributors?: boolean
    is_quote_status?: boolean
    retweet_count?: boolean
    favorite_count?: boolean
    favorited?: boolean
    retweeted?: boolean
    lang?: boolean
    supplemental_language?: boolean
    self_thread?: boolean
  }

  export type TweetStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"created_at" | "id_str" | "text" | "truncated" | "entities" | "source" | "in_reply_to_status_id_str" | "in_reply_to_user_id_str" | "in_reply_to_screen_name" | "geo" | "coordinates" | "place" | "contributors" | "is_quote_status" | "retweet_count" | "favorite_count" | "favorited" | "retweeted" | "lang" | "supplemental_language" | "self_thread", ExtArgs["result"]["tweetStatus"]>

  export type $TweetStatusPayload = {
    name: "TweetStatus"
    objects: {}
    scalars: {
      created_at: string | null
      id_str: string | null
      text: string | null
      truncated: boolean | null
      entities: Prisma.JsonValue | null
      source: string | null
      in_reply_to_status_id_str: string | null
      in_reply_to_user_id_str: string | null
      in_reply_to_screen_name: string | null
      geo: Prisma.JsonValue | null
      coordinates: Prisma.JsonValue | null
      place: Prisma.JsonValue | null
      contributors: Prisma.JsonValue | null
      is_quote_status: boolean | null
      retweet_count: number | null
      favorite_count: number | null
      favorited: boolean | null
      retweeted: boolean | null
      lang: string | null
      supplemental_language: string | null
      self_thread: Prisma.JsonValue | null
    }
    composites: {}
  }

  type TweetStatusGetPayload<S extends boolean | null | undefined | TweetStatusDefaultArgs> = $Result.GetResult<Prisma.$TweetStatusPayload, S>





  /**
   * Fields of the TweetStatus model
   */
  interface TweetStatusFieldRefs {
    readonly created_at: FieldRef<"TweetStatus", 'String'>
    readonly id_str: FieldRef<"TweetStatus", 'String'>
    readonly text: FieldRef<"TweetStatus", 'String'>
    readonly truncated: FieldRef<"TweetStatus", 'Boolean'>
    readonly entities: FieldRef<"TweetStatus", 'Json'>
    readonly source: FieldRef<"TweetStatus", 'String'>
    readonly in_reply_to_status_id_str: FieldRef<"TweetStatus", 'String'>
    readonly in_reply_to_user_id_str: FieldRef<"TweetStatus", 'String'>
    readonly in_reply_to_screen_name: FieldRef<"TweetStatus", 'String'>
    readonly geo: FieldRef<"TweetStatus", 'Json'>
    readonly coordinates: FieldRef<"TweetStatus", 'Json'>
    readonly place: FieldRef<"TweetStatus", 'Json'>
    readonly contributors: FieldRef<"TweetStatus", 'Json'>
    readonly is_quote_status: FieldRef<"TweetStatus", 'Boolean'>
    readonly retweet_count: FieldRef<"TweetStatus", 'Int'>
    readonly favorite_count: FieldRef<"TweetStatus", 'Int'>
    readonly favorited: FieldRef<"TweetStatus", 'Boolean'>
    readonly retweeted: FieldRef<"TweetStatus", 'Boolean'>
    readonly lang: FieldRef<"TweetStatus", 'String'>
    readonly supplemental_language: FieldRef<"TweetStatus", 'String'>
    readonly self_thread: FieldRef<"TweetStatus", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * TweetStatus without action
   */
  export type TweetStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetStatus
     */
    select?: TweetStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetStatus
     */
    omit?: TweetStatusOmit<ExtArgs> | null
  }


  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    fast_followers_count: number | null
    favourites_count: number | null
    followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    media_count: number | null
    normal_followers_count: number | null
    statuses_count: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    fast_followers_count: number | null
    favourites_count: number | null
    followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    media_count: number | null
    normal_followers_count: number | null
    statuses_count: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    default_profile: boolean | null
    default_profile_image: boolean | null
    description: string | null
    fast_followers_count: number | null
    favourites_count: number | null
    followers_count: number | null
    friends_count: number | null
    has_custom_timelines: boolean | null
    is_translator: boolean | null
    listed_count: number | null
    media_count: number | null
    normal_followers_count: number | null
    possibly_sensitive: boolean | null
    profile_banner_url: string | null
    profile_interstitial_type: string | null
    statuses_count: number | null
    translator_type: string | null
    id_str: string | null
    profile_url: string | null
    updated_time: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    default_profile: boolean | null
    default_profile_image: boolean | null
    description: string | null
    fast_followers_count: number | null
    favourites_count: number | null
    followers_count: number | null
    friends_count: number | null
    has_custom_timelines: boolean | null
    is_translator: boolean | null
    listed_count: number | null
    media_count: number | null
    normal_followers_count: number | null
    possibly_sensitive: boolean | null
    profile_banner_url: string | null
    profile_interstitial_type: string | null
    statuses_count: number | null
    translator_type: string | null
    id_str: string | null
    profile_url: string | null
    updated_time: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    default_profile: number
    default_profile_image: number
    description: number
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: number
    is_translator: number
    listed_count: number
    media_count: number
    normal_followers_count: number
    pinned_tweet_ids_str: number
    possibly_sensitive: number
    profile_banner_url: number
    profile_interstitial_type: number
    statuses_count: number
    translator_type: number
    withheld_in_countries: number
    id_str: number
    profile_url: number
    updated_time: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    fast_followers_count?: true
    favourites_count?: true
    followers_count?: true
    friends_count?: true
    listed_count?: true
    media_count?: true
    normal_followers_count?: true
    statuses_count?: true
  }

  export type UserProfileSumAggregateInputType = {
    fast_followers_count?: true
    favourites_count?: true
    followers_count?: true
    friends_count?: true
    listed_count?: true
    media_count?: true
    normal_followers_count?: true
    statuses_count?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    default_profile?: true
    default_profile_image?: true
    description?: true
    fast_followers_count?: true
    favourites_count?: true
    followers_count?: true
    friends_count?: true
    has_custom_timelines?: true
    is_translator?: true
    listed_count?: true
    media_count?: true
    normal_followers_count?: true
    possibly_sensitive?: true
    profile_banner_url?: true
    profile_interstitial_type?: true
    statuses_count?: true
    translator_type?: true
    id_str?: true
    profile_url?: true
    updated_time?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    default_profile?: true
    default_profile_image?: true
    description?: true
    fast_followers_count?: true
    favourites_count?: true
    followers_count?: true
    friends_count?: true
    has_custom_timelines?: true
    is_translator?: true
    listed_count?: true
    media_count?: true
    normal_followers_count?: true
    possibly_sensitive?: true
    profile_banner_url?: true
    profile_interstitial_type?: true
    statuses_count?: true
    translator_type?: true
    id_str?: true
    profile_url?: true
    updated_time?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    default_profile?: true
    default_profile_image?: true
    description?: true
    fast_followers_count?: true
    favourites_count?: true
    followers_count?: true
    friends_count?: true
    has_custom_timelines?: true
    is_translator?: true
    listed_count?: true
    media_count?: true
    normal_followers_count?: true
    pinned_tweet_ids_str?: true
    possibly_sensitive?: true
    profile_banner_url?: true
    profile_interstitial_type?: true
    statuses_count?: true
    translator_type?: true
    withheld_in_countries?: true
    id_str?: true
    profile_url?: true
    updated_time?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    default_profile: boolean
    default_profile_image: boolean
    description: string | null
    fast_followers_count: number | null
    favourites_count: number | null
    followers_count: number | null
    friends_count: number | null
    has_custom_timelines: boolean | null
    is_translator: boolean | null
    listed_count: number | null
    media_count: number | null
    normal_followers_count: number | null
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean | null
    profile_banner_url: string | null
    profile_interstitial_type: string | null
    statuses_count: number | null
    translator_type: string | null
    withheld_in_countries: string[]
    id_str: string
    profile_url: string
    updated_time: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    default_profile?: boolean
    default_profile_image?: boolean
    description?: boolean
    entities?: boolean | EntitiesProfileDefaultArgs<ExtArgs>
    fast_followers_count?: boolean
    favourites_count?: boolean
    followers_count?: boolean
    friends_count?: boolean
    has_custom_timelines?: boolean
    is_translator?: boolean
    listed_count?: boolean
    media_count?: boolean
    normal_followers_count?: boolean
    pinned_tweet_ids_str?: boolean
    possibly_sensitive?: boolean
    profile_banner_url?: boolean
    profile_interstitial_type?: boolean
    statuses_count?: boolean
    translator_type?: boolean
    withheld_in_countries?: boolean
    id_str?: boolean
    profile_url?: boolean
    updated_time?: boolean
  }, ExtArgs["result"]["userProfile"]>



  export type UserProfileSelectScalar = {
    id?: boolean
    default_profile?: boolean
    default_profile_image?: boolean
    description?: boolean
    fast_followers_count?: boolean
    favourites_count?: boolean
    followers_count?: boolean
    friends_count?: boolean
    has_custom_timelines?: boolean
    is_translator?: boolean
    listed_count?: boolean
    media_count?: boolean
    normal_followers_count?: boolean
    pinned_tweet_ids_str?: boolean
    possibly_sensitive?: boolean
    profile_banner_url?: boolean
    profile_interstitial_type?: boolean
    statuses_count?: boolean
    translator_type?: boolean
    withheld_in_countries?: boolean
    id_str?: boolean
    profile_url?: boolean
    updated_time?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "default_profile" | "default_profile_image" | "description" | "entities" | "fast_followers_count" | "favourites_count" | "followers_count" | "friends_count" | "has_custom_timelines" | "is_translator" | "listed_count" | "media_count" | "normal_followers_count" | "pinned_tweet_ids_str" | "possibly_sensitive" | "profile_banner_url" | "profile_interstitial_type" | "statuses_count" | "translator_type" | "withheld_in_countries" | "id_str" | "profile_url" | "updated_time", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      default_profile: boolean
      default_profile_image: boolean
      description: string | null
      fast_followers_count: number | null
      favourites_count: number | null
      followers_count: number | null
      friends_count: number | null
      has_custom_timelines: boolean | null
      is_translator: boolean | null
      listed_count: number | null
      media_count: number | null
      normal_followers_count: number | null
      pinned_tweet_ids_str: string[]
      possibly_sensitive: boolean | null
      profile_banner_url: string | null
      profile_interstitial_type: string | null
      statuses_count: number | null
      translator_type: string | null
      withheld_in_countries: string[]
      id_str: string
      profile_url: string
      updated_time: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {
      entities: Prisma.$EntitiesProfilePayload | null
    }
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * @param {UserProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userProfile = await prisma.userProfile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserProfileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserProfile.
     * @param {UserProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userProfile = await prisma.userProfile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserProfileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly default_profile: FieldRef<"UserProfile", 'Boolean'>
    readonly default_profile_image: FieldRef<"UserProfile", 'Boolean'>
    readonly description: FieldRef<"UserProfile", 'String'>
    readonly fast_followers_count: FieldRef<"UserProfile", 'Int'>
    readonly favourites_count: FieldRef<"UserProfile", 'Int'>
    readonly followers_count: FieldRef<"UserProfile", 'Int'>
    readonly friends_count: FieldRef<"UserProfile", 'Int'>
    readonly has_custom_timelines: FieldRef<"UserProfile", 'Boolean'>
    readonly is_translator: FieldRef<"UserProfile", 'Boolean'>
    readonly listed_count: FieldRef<"UserProfile", 'Int'>
    readonly media_count: FieldRef<"UserProfile", 'Int'>
    readonly normal_followers_count: FieldRef<"UserProfile", 'Int'>
    readonly pinned_tweet_ids_str: FieldRef<"UserProfile", 'String[]'>
    readonly possibly_sensitive: FieldRef<"UserProfile", 'Boolean'>
    readonly profile_banner_url: FieldRef<"UserProfile", 'String'>
    readonly profile_interstitial_type: FieldRef<"UserProfile", 'String'>
    readonly statuses_count: FieldRef<"UserProfile", 'Int'>
    readonly translator_type: FieldRef<"UserProfile", 'String'>
    readonly withheld_in_countries: FieldRef<"UserProfile", 'String[]'>
    readonly id_str: FieldRef<"UserProfile", 'String'>
    readonly profile_url: FieldRef<"UserProfile", 'String'>
    readonly updated_time: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile findRaw
   */
  export type UserProfileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserProfile aggregateRaw
   */
  export type UserProfileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model TweetsData
   */

  export type AggregateTweetsData = {
    _count: TweetsDataCountAggregateOutputType | null
    _avg: TweetsDataAvgAggregateOutputType | null
    _sum: TweetsDataSumAggregateOutputType | null
    _min: TweetsDataMinAggregateOutputType | null
    _max: TweetsDataMaxAggregateOutputType | null
  }

  export type TweetsDataAvgAggregateOutputType = {
    bookmark_count: number | null
    display_text_range: number | null
    favorite_count: number | null
    quote_count: number | null
    reply_count: number | null
    retweet_count: number | null
  }

  export type TweetsDataSumAggregateOutputType = {
    bookmark_count: number | null
    display_text_range: number[]
    favorite_count: number | null
    quote_count: number | null
    reply_count: number | null
    retweet_count: number | null
  }

  export type TweetsDataMinAggregateOutputType = {
    id: string | null
    id_str: string | null
    bookmark_count: number | null
    bookmarked: boolean | null
    conversation_id_str: string | null
    created_at: string | null
    favorite_count: number | null
    favorited: boolean | null
    full_text: string | null
    is_quote_status: boolean | null
    lang: string | null
    quote_count: number | null
    reply_count: number | null
    retweet_count: number | null
    retweeted: boolean | null
    user_id_str: string | null
    updated_time: Date | null
  }

  export type TweetsDataMaxAggregateOutputType = {
    id: string | null
    id_str: string | null
    bookmark_count: number | null
    bookmarked: boolean | null
    conversation_id_str: string | null
    created_at: string | null
    favorite_count: number | null
    favorited: boolean | null
    full_text: string | null
    is_quote_status: boolean | null
    lang: string | null
    quote_count: number | null
    reply_count: number | null
    retweet_count: number | null
    retweeted: boolean | null
    user_id_str: string | null
    updated_time: Date | null
  }

  export type TweetsDataCountAggregateOutputType = {
    id: number
    id_str: number
    bookmark_count: number
    bookmarked: number
    conversation_id_str: number
    created_at: number
    display_text_range: number
    entities: number
    favorite_count: number
    favorited: number
    full_text: number
    is_quote_status: number
    lang: number
    quote_count: number
    reply_count: number
    retweet_count: number
    retweeted: number
    user_id_str: number
    updated_time: number
    _all: number
  }


  export type TweetsDataAvgAggregateInputType = {
    bookmark_count?: true
    display_text_range?: true
    favorite_count?: true
    quote_count?: true
    reply_count?: true
    retweet_count?: true
  }

  export type TweetsDataSumAggregateInputType = {
    bookmark_count?: true
    display_text_range?: true
    favorite_count?: true
    quote_count?: true
    reply_count?: true
    retweet_count?: true
  }

  export type TweetsDataMinAggregateInputType = {
    id?: true
    id_str?: true
    bookmark_count?: true
    bookmarked?: true
    conversation_id_str?: true
    created_at?: true
    favorite_count?: true
    favorited?: true
    full_text?: true
    is_quote_status?: true
    lang?: true
    quote_count?: true
    reply_count?: true
    retweet_count?: true
    retweeted?: true
    user_id_str?: true
    updated_time?: true
  }

  export type TweetsDataMaxAggregateInputType = {
    id?: true
    id_str?: true
    bookmark_count?: true
    bookmarked?: true
    conversation_id_str?: true
    created_at?: true
    favorite_count?: true
    favorited?: true
    full_text?: true
    is_quote_status?: true
    lang?: true
    quote_count?: true
    reply_count?: true
    retweet_count?: true
    retweeted?: true
    user_id_str?: true
    updated_time?: true
  }

  export type TweetsDataCountAggregateInputType = {
    id?: true
    id_str?: true
    bookmark_count?: true
    bookmarked?: true
    conversation_id_str?: true
    created_at?: true
    display_text_range?: true
    entities?: true
    favorite_count?: true
    favorited?: true
    full_text?: true
    is_quote_status?: true
    lang?: true
    quote_count?: true
    reply_count?: true
    retweet_count?: true
    retweeted?: true
    user_id_str?: true
    updated_time?: true
    _all?: true
  }

  export type TweetsDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TweetsData to aggregate.
     */
    where?: TweetsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetsData to fetch.
     */
    orderBy?: TweetsDataOrderByWithRelationInput | TweetsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TweetsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TweetsData
    **/
    _count?: true | TweetsDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TweetsDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TweetsDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TweetsDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TweetsDataMaxAggregateInputType
  }

  export type GetTweetsDataAggregateType<T extends TweetsDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTweetsData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTweetsData[P]>
      : GetScalarType<T[P], AggregateTweetsData[P]>
  }




  export type TweetsDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetsDataWhereInput
    orderBy?: TweetsDataOrderByWithAggregationInput | TweetsDataOrderByWithAggregationInput[]
    by: TweetsDataScalarFieldEnum[] | TweetsDataScalarFieldEnum
    having?: TweetsDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TweetsDataCountAggregateInputType | true
    _avg?: TweetsDataAvgAggregateInputType
    _sum?: TweetsDataSumAggregateInputType
    _min?: TweetsDataMinAggregateInputType
    _max?: TweetsDataMaxAggregateInputType
  }

  export type TweetsDataGroupByOutputType = {
    id: string
    id_str: string
    bookmark_count: number | null
    bookmarked: boolean | null
    conversation_id_str: string | null
    created_at: string | null
    display_text_range: number[]
    entities: JsonValue | null
    favorite_count: number | null
    favorited: boolean | null
    full_text: string | null
    is_quote_status: boolean | null
    lang: string | null
    quote_count: number | null
    reply_count: number | null
    retweet_count: number | null
    retweeted: boolean | null
    user_id_str: string | null
    updated_time: Date
    _count: TweetsDataCountAggregateOutputType | null
    _avg: TweetsDataAvgAggregateOutputType | null
    _sum: TweetsDataSumAggregateOutputType | null
    _min: TweetsDataMinAggregateOutputType | null
    _max: TweetsDataMaxAggregateOutputType | null
  }

  type GetTweetsDataGroupByPayload<T extends TweetsDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TweetsDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TweetsDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TweetsDataGroupByOutputType[P]>
            : GetScalarType<T[P], TweetsDataGroupByOutputType[P]>
        }
      >
    >


  export type TweetsDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_str?: boolean
    bookmark_count?: boolean
    bookmarked?: boolean
    conversation_id_str?: boolean
    created_at?: boolean
    display_text_range?: boolean
    entities?: boolean
    favorite_count?: boolean
    favorited?: boolean
    full_text?: boolean
    is_quote_status?: boolean
    lang?: boolean
    quote_count?: boolean
    reply_count?: boolean
    retweet_count?: boolean
    retweeted?: boolean
    user?: boolean | TweetUserDefaultArgs<ExtArgs>
    user_id_str?: boolean
    updated_time?: boolean
  }, ExtArgs["result"]["tweetsData"]>



  export type TweetsDataSelectScalar = {
    id?: boolean
    id_str?: boolean
    bookmark_count?: boolean
    bookmarked?: boolean
    conversation_id_str?: boolean
    created_at?: boolean
    display_text_range?: boolean
    entities?: boolean
    favorite_count?: boolean
    favorited?: boolean
    full_text?: boolean
    is_quote_status?: boolean
    lang?: boolean
    quote_count?: boolean
    reply_count?: boolean
    retweet_count?: boolean
    retweeted?: boolean
    user_id_str?: boolean
    updated_time?: boolean
  }

  export type TweetsDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_str" | "bookmark_count" | "bookmarked" | "conversation_id_str" | "created_at" | "display_text_range" | "entities" | "favorite_count" | "favorited" | "full_text" | "is_quote_status" | "lang" | "quote_count" | "reply_count" | "retweet_count" | "retweeted" | "user" | "user_id_str" | "updated_time", ExtArgs["result"]["tweetsData"]>
  export type TweetsDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TweetsDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TweetsData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_str: string
      bookmark_count: number | null
      bookmarked: boolean | null
      conversation_id_str: string | null
      created_at: string | null
      display_text_range: number[]
      entities: Prisma.JsonValue | null
      favorite_count: number | null
      favorited: boolean | null
      full_text: string | null
      is_quote_status: boolean | null
      lang: string | null
      quote_count: number | null
      reply_count: number | null
      retweet_count: number | null
      retweeted: boolean | null
      user_id_str: string | null
      updated_time: Date
    }, ExtArgs["result"]["tweetsData"]>
    composites: {
      user: Prisma.$TweetUserPayload | null
    }
  }

  type TweetsDataGetPayload<S extends boolean | null | undefined | TweetsDataDefaultArgs> = $Result.GetResult<Prisma.$TweetsDataPayload, S>

  type TweetsDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TweetsDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TweetsDataCountAggregateInputType | true
    }

  export interface TweetsDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TweetsData'], meta: { name: 'TweetsData' } }
    /**
     * Find zero or one TweetsData that matches the filter.
     * @param {TweetsDataFindUniqueArgs} args - Arguments to find a TweetsData
     * @example
     * // Get one TweetsData
     * const tweetsData = await prisma.tweetsData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TweetsDataFindUniqueArgs>(args: SelectSubset<T, TweetsDataFindUniqueArgs<ExtArgs>>): Prisma__TweetsDataClient<$Result.GetResult<Prisma.$TweetsDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TweetsData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TweetsDataFindUniqueOrThrowArgs} args - Arguments to find a TweetsData
     * @example
     * // Get one TweetsData
     * const tweetsData = await prisma.tweetsData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TweetsDataFindUniqueOrThrowArgs>(args: SelectSubset<T, TweetsDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TweetsDataClient<$Result.GetResult<Prisma.$TweetsDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TweetsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataFindFirstArgs} args - Arguments to find a TweetsData
     * @example
     * // Get one TweetsData
     * const tweetsData = await prisma.tweetsData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TweetsDataFindFirstArgs>(args?: SelectSubset<T, TweetsDataFindFirstArgs<ExtArgs>>): Prisma__TweetsDataClient<$Result.GetResult<Prisma.$TweetsDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TweetsData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataFindFirstOrThrowArgs} args - Arguments to find a TweetsData
     * @example
     * // Get one TweetsData
     * const tweetsData = await prisma.tweetsData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TweetsDataFindFirstOrThrowArgs>(args?: SelectSubset<T, TweetsDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__TweetsDataClient<$Result.GetResult<Prisma.$TweetsDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TweetsData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TweetsData
     * const tweetsData = await prisma.tweetsData.findMany()
     * 
     * // Get first 10 TweetsData
     * const tweetsData = await prisma.tweetsData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tweetsDataWithIdOnly = await prisma.tweetsData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TweetsDataFindManyArgs>(args?: SelectSubset<T, TweetsDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetsDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TweetsData.
     * @param {TweetsDataCreateArgs} args - Arguments to create a TweetsData.
     * @example
     * // Create one TweetsData
     * const TweetsData = await prisma.tweetsData.create({
     *   data: {
     *     // ... data to create a TweetsData
     *   }
     * })
     * 
     */
    create<T extends TweetsDataCreateArgs>(args: SelectSubset<T, TweetsDataCreateArgs<ExtArgs>>): Prisma__TweetsDataClient<$Result.GetResult<Prisma.$TweetsDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TweetsData.
     * @param {TweetsDataCreateManyArgs} args - Arguments to create many TweetsData.
     * @example
     * // Create many TweetsData
     * const tweetsData = await prisma.tweetsData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TweetsDataCreateManyArgs>(args?: SelectSubset<T, TweetsDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TweetsData.
     * @param {TweetsDataDeleteArgs} args - Arguments to delete one TweetsData.
     * @example
     * // Delete one TweetsData
     * const TweetsData = await prisma.tweetsData.delete({
     *   where: {
     *     // ... filter to delete one TweetsData
     *   }
     * })
     * 
     */
    delete<T extends TweetsDataDeleteArgs>(args: SelectSubset<T, TweetsDataDeleteArgs<ExtArgs>>): Prisma__TweetsDataClient<$Result.GetResult<Prisma.$TweetsDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TweetsData.
     * @param {TweetsDataUpdateArgs} args - Arguments to update one TweetsData.
     * @example
     * // Update one TweetsData
     * const tweetsData = await prisma.tweetsData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TweetsDataUpdateArgs>(args: SelectSubset<T, TweetsDataUpdateArgs<ExtArgs>>): Prisma__TweetsDataClient<$Result.GetResult<Prisma.$TweetsDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TweetsData.
     * @param {TweetsDataDeleteManyArgs} args - Arguments to filter TweetsData to delete.
     * @example
     * // Delete a few TweetsData
     * const { count } = await prisma.tweetsData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TweetsDataDeleteManyArgs>(args?: SelectSubset<T, TweetsDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TweetsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TweetsData
     * const tweetsData = await prisma.tweetsData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TweetsDataUpdateManyArgs>(args: SelectSubset<T, TweetsDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TweetsData.
     * @param {TweetsDataUpsertArgs} args - Arguments to update or create a TweetsData.
     * @example
     * // Update or create a TweetsData
     * const tweetsData = await prisma.tweetsData.upsert({
     *   create: {
     *     // ... data to create a TweetsData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TweetsData we want to update
     *   }
     * })
     */
    upsert<T extends TweetsDataUpsertArgs>(args: SelectSubset<T, TweetsDataUpsertArgs<ExtArgs>>): Prisma__TweetsDataClient<$Result.GetResult<Prisma.$TweetsDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TweetsData that matches the filter.
     * @param {TweetsDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tweetsData = await prisma.tweetsData.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TweetsDataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TweetsData.
     * @param {TweetsDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tweetsData = await prisma.tweetsData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TweetsDataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TweetsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataCountArgs} args - Arguments to filter TweetsData to count.
     * @example
     * // Count the number of TweetsData
     * const count = await prisma.tweetsData.count({
     *   where: {
     *     // ... the filter for the TweetsData we want to count
     *   }
     * })
    **/
    count<T extends TweetsDataCountArgs>(
      args?: Subset<T, TweetsDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TweetsDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TweetsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TweetsDataAggregateArgs>(args: Subset<T, TweetsDataAggregateArgs>): Prisma.PrismaPromise<GetTweetsDataAggregateType<T>>

    /**
     * Group by TweetsData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataGroupByArgs} args - Group by arguments.
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
      T extends TweetsDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TweetsDataGroupByArgs['orderBy'] }
        : { orderBy?: TweetsDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TweetsDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTweetsDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TweetsData model
   */
  readonly fields: TweetsDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TweetsData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TweetsDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TweetsData model
   */
  interface TweetsDataFieldRefs {
    readonly id: FieldRef<"TweetsData", 'String'>
    readonly id_str: FieldRef<"TweetsData", 'String'>
    readonly bookmark_count: FieldRef<"TweetsData", 'Int'>
    readonly bookmarked: FieldRef<"TweetsData", 'Boolean'>
    readonly conversation_id_str: FieldRef<"TweetsData", 'String'>
    readonly created_at: FieldRef<"TweetsData", 'String'>
    readonly display_text_range: FieldRef<"TweetsData", 'Int[]'>
    readonly entities: FieldRef<"TweetsData", 'Json'>
    readonly favorite_count: FieldRef<"TweetsData", 'Int'>
    readonly favorited: FieldRef<"TweetsData", 'Boolean'>
    readonly full_text: FieldRef<"TweetsData", 'String'>
    readonly is_quote_status: FieldRef<"TweetsData", 'Boolean'>
    readonly lang: FieldRef<"TweetsData", 'String'>
    readonly quote_count: FieldRef<"TweetsData", 'Int'>
    readonly reply_count: FieldRef<"TweetsData", 'Int'>
    readonly retweet_count: FieldRef<"TweetsData", 'Int'>
    readonly retweeted: FieldRef<"TweetsData", 'Boolean'>
    readonly user_id_str: FieldRef<"TweetsData", 'String'>
    readonly updated_time: FieldRef<"TweetsData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TweetsData findUnique
   */
  export type TweetsDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
    /**
     * Filter, which TweetsData to fetch.
     */
    where: TweetsDataWhereUniqueInput
  }

  /**
   * TweetsData findUniqueOrThrow
   */
  export type TweetsDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
    /**
     * Filter, which TweetsData to fetch.
     */
    where: TweetsDataWhereUniqueInput
  }

  /**
   * TweetsData findFirst
   */
  export type TweetsDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
    /**
     * Filter, which TweetsData to fetch.
     */
    where?: TweetsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetsData to fetch.
     */
    orderBy?: TweetsDataOrderByWithRelationInput | TweetsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TweetsData.
     */
    cursor?: TweetsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TweetsData.
     */
    distinct?: TweetsDataScalarFieldEnum | TweetsDataScalarFieldEnum[]
  }

  /**
   * TweetsData findFirstOrThrow
   */
  export type TweetsDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
    /**
     * Filter, which TweetsData to fetch.
     */
    where?: TweetsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetsData to fetch.
     */
    orderBy?: TweetsDataOrderByWithRelationInput | TweetsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TweetsData.
     */
    cursor?: TweetsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetsData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TweetsData.
     */
    distinct?: TweetsDataScalarFieldEnum | TweetsDataScalarFieldEnum[]
  }

  /**
   * TweetsData findMany
   */
  export type TweetsDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
    /**
     * Filter, which TweetsData to fetch.
     */
    where?: TweetsDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetsData to fetch.
     */
    orderBy?: TweetsDataOrderByWithRelationInput | TweetsDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TweetsData.
     */
    cursor?: TweetsDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetsData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetsData.
     */
    skip?: number
    distinct?: TweetsDataScalarFieldEnum | TweetsDataScalarFieldEnum[]
  }

  /**
   * TweetsData create
   */
  export type TweetsDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
    /**
     * The data needed to create a TweetsData.
     */
    data: XOR<TweetsDataCreateInput, TweetsDataUncheckedCreateInput>
  }

  /**
   * TweetsData createMany
   */
  export type TweetsDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TweetsData.
     */
    data: TweetsDataCreateManyInput | TweetsDataCreateManyInput[]
  }

  /**
   * TweetsData update
   */
  export type TweetsDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
    /**
     * The data needed to update a TweetsData.
     */
    data: XOR<TweetsDataUpdateInput, TweetsDataUncheckedUpdateInput>
    /**
     * Choose, which TweetsData to update.
     */
    where: TweetsDataWhereUniqueInput
  }

  /**
   * TweetsData updateMany
   */
  export type TweetsDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TweetsData.
     */
    data: XOR<TweetsDataUpdateManyMutationInput, TweetsDataUncheckedUpdateManyInput>
    /**
     * Filter which TweetsData to update
     */
    where?: TweetsDataWhereInput
    /**
     * Limit how many TweetsData to update.
     */
    limit?: number
  }

  /**
   * TweetsData upsert
   */
  export type TweetsDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
    /**
     * The filter to search for the TweetsData to update in case it exists.
     */
    where: TweetsDataWhereUniqueInput
    /**
     * In case the TweetsData found by the `where` argument doesn't exist, create a new TweetsData with this data.
     */
    create: XOR<TweetsDataCreateInput, TweetsDataUncheckedCreateInput>
    /**
     * In case the TweetsData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TweetsDataUpdateInput, TweetsDataUncheckedUpdateInput>
  }

  /**
   * TweetsData delete
   */
  export type TweetsDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
    /**
     * Filter which TweetsData to delete.
     */
    where: TweetsDataWhereUniqueInput
  }

  /**
   * TweetsData deleteMany
   */
  export type TweetsDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TweetsData to delete
     */
    where?: TweetsDataWhereInput
    /**
     * Limit how many TweetsData to delete.
     */
    limit?: number
  }

  /**
   * TweetsData findRaw
   */
  export type TweetsDataFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TweetsData aggregateRaw
   */
  export type TweetsDataAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TweetsData without action
   */
  export type TweetsDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsData
     */
    select?: TweetsDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsData
     */
    omit?: TweetsDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataInclude<ExtArgs> | null
  }


  /**
   * Model FollowerFollowingData
   */

  export type AggregateFollowerFollowingData = {
    _count: FollowerFollowingDataCountAggregateOutputType | null
    _avg: FollowerFollowingDataAvgAggregateOutputType | null
    _sum: FollowerFollowingDataSumAggregateOutputType | null
    _min: FollowerFollowingDataMinAggregateOutputType | null
    _max: FollowerFollowingDataMaxAggregateOutputType | null
  }

  export type FollowerFollowingDataAvgAggregateOutputType = {
    followers_count: number | null
    fast_followers_count: number | null
    normal_followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    favourites_count: number | null
    statuses_count: number | null
    media_count: number | null
  }

  export type FollowerFollowingDataSumAggregateOutputType = {
    followers_count: number | null
    fast_followers_count: number | null
    normal_followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    favourites_count: number | null
    statuses_count: number | null
    media_count: number | null
  }

  export type FollowerFollowingDataMinAggregateOutputType = {
    id: string | null
    id_str: string | null
    name: string | null
    screen_name: string | null
    location: string | null
    description: string | null
    url: string | null
    protected: boolean | null
    followers_count: number | null
    fast_followers_count: number | null
    normal_followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    created_at: string | null
    favourites_count: number | null
    utc_offset: string | null
    time_zone: string | null
    geo_enabled: boolean | null
    verified: boolean | null
    statuses_count: number | null
    media_count: number | null
    lang: string | null
    contributors_enabled: boolean | null
    is_translator: boolean | null
    is_translation_enabled: boolean | null
    profile_background_color: string | null
    profile_background_image_url: string | null
    profile_background_image_url_https: string | null
    profile_background_tile: boolean | null
    profile_image_url: string | null
    profile_image_url_https: string | null
    profile_banner_url: string | null
    profile_link_color: string | null
    profile_sidebar_border_color: string | null
    profile_sidebar_fill_color: string | null
    profile_text_color: string | null
    profile_use_background_image: boolean | null
    has_extended_profile: boolean | null
    default_profile: boolean | null
    default_profile_image: boolean | null
    has_custom_timelines: boolean | null
    can_media_tag: boolean | null
    followed_by: boolean | null
    following: boolean | null
    live_following: boolean | null
    follow_request_sent: boolean | null
    notifications: boolean | null
    muting: boolean | null
    blocking: boolean | null
    blocked_by: boolean | null
    advertiser_account_type: string | null
    analytics_type: string | null
    business_profile_state: string | null
    translator_type: string | null
    require_some_consent: boolean | null
    type: string | null
    target_username: string | null
    email: string | null
  }

  export type FollowerFollowingDataMaxAggregateOutputType = {
    id: string | null
    id_str: string | null
    name: string | null
    screen_name: string | null
    location: string | null
    description: string | null
    url: string | null
    protected: boolean | null
    followers_count: number | null
    fast_followers_count: number | null
    normal_followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    created_at: string | null
    favourites_count: number | null
    utc_offset: string | null
    time_zone: string | null
    geo_enabled: boolean | null
    verified: boolean | null
    statuses_count: number | null
    media_count: number | null
    lang: string | null
    contributors_enabled: boolean | null
    is_translator: boolean | null
    is_translation_enabled: boolean | null
    profile_background_color: string | null
    profile_background_image_url: string | null
    profile_background_image_url_https: string | null
    profile_background_tile: boolean | null
    profile_image_url: string | null
    profile_image_url_https: string | null
    profile_banner_url: string | null
    profile_link_color: string | null
    profile_sidebar_border_color: string | null
    profile_sidebar_fill_color: string | null
    profile_text_color: string | null
    profile_use_background_image: boolean | null
    has_extended_profile: boolean | null
    default_profile: boolean | null
    default_profile_image: boolean | null
    has_custom_timelines: boolean | null
    can_media_tag: boolean | null
    followed_by: boolean | null
    following: boolean | null
    live_following: boolean | null
    follow_request_sent: boolean | null
    notifications: boolean | null
    muting: boolean | null
    blocking: boolean | null
    blocked_by: boolean | null
    advertiser_account_type: string | null
    analytics_type: string | null
    business_profile_state: string | null
    translator_type: string | null
    require_some_consent: boolean | null
    type: string | null
    target_username: string | null
    email: string | null
  }

  export type FollowerFollowingDataCountAggregateOutputType = {
    id: number
    id_str: number
    name: number
    screen_name: number
    location: number
    description: number
    url: number
    entities: number
    protected: number
    followers_count: number
    fast_followers_count: number
    normal_followers_count: number
    friends_count: number
    listed_count: number
    created_at: number
    favourites_count: number
    utc_offset: number
    time_zone: number
    geo_enabled: number
    verified: number
    statuses_count: number
    media_count: number
    lang: number
    contributors_enabled: number
    is_translator: number
    is_translation_enabled: number
    profile_background_color: number
    profile_background_image_url: number
    profile_background_image_url_https: number
    profile_background_tile: number
    profile_image_url: number
    profile_image_url_https: number
    profile_banner_url: number
    profile_link_color: number
    profile_sidebar_border_color: number
    profile_sidebar_fill_color: number
    profile_text_color: number
    profile_use_background_image: number
    has_extended_profile: number
    default_profile: number
    default_profile_image: number
    pinned_tweet_ids: number
    pinned_tweet_ids_str: number
    has_custom_timelines: number
    can_media_tag: number
    followed_by: number
    following: number
    live_following: number
    follow_request_sent: number
    notifications: number
    muting: number
    blocking: number
    blocked_by: number
    advertiser_account_type: number
    advertiser_account_service_levels: number
    analytics_type: number
    business_profile_state: number
    translator_type: number
    withheld_in_countries: number
    require_some_consent: number
    type: number
    target_username: number
    email: number
    _all: number
  }


  export type FollowerFollowingDataAvgAggregateInputType = {
    followers_count?: true
    fast_followers_count?: true
    normal_followers_count?: true
    friends_count?: true
    listed_count?: true
    favourites_count?: true
    statuses_count?: true
    media_count?: true
  }

  export type FollowerFollowingDataSumAggregateInputType = {
    followers_count?: true
    fast_followers_count?: true
    normal_followers_count?: true
    friends_count?: true
    listed_count?: true
    favourites_count?: true
    statuses_count?: true
    media_count?: true
  }

  export type FollowerFollowingDataMinAggregateInputType = {
    id?: true
    id_str?: true
    name?: true
    screen_name?: true
    location?: true
    description?: true
    url?: true
    protected?: true
    followers_count?: true
    fast_followers_count?: true
    normal_followers_count?: true
    friends_count?: true
    listed_count?: true
    created_at?: true
    favourites_count?: true
    utc_offset?: true
    time_zone?: true
    geo_enabled?: true
    verified?: true
    statuses_count?: true
    media_count?: true
    lang?: true
    contributors_enabled?: true
    is_translator?: true
    is_translation_enabled?: true
    profile_background_color?: true
    profile_background_image_url?: true
    profile_background_image_url_https?: true
    profile_background_tile?: true
    profile_image_url?: true
    profile_image_url_https?: true
    profile_banner_url?: true
    profile_link_color?: true
    profile_sidebar_border_color?: true
    profile_sidebar_fill_color?: true
    profile_text_color?: true
    profile_use_background_image?: true
    has_extended_profile?: true
    default_profile?: true
    default_profile_image?: true
    has_custom_timelines?: true
    can_media_tag?: true
    followed_by?: true
    following?: true
    live_following?: true
    follow_request_sent?: true
    notifications?: true
    muting?: true
    blocking?: true
    blocked_by?: true
    advertiser_account_type?: true
    analytics_type?: true
    business_profile_state?: true
    translator_type?: true
    require_some_consent?: true
    type?: true
    target_username?: true
    email?: true
  }

  export type FollowerFollowingDataMaxAggregateInputType = {
    id?: true
    id_str?: true
    name?: true
    screen_name?: true
    location?: true
    description?: true
    url?: true
    protected?: true
    followers_count?: true
    fast_followers_count?: true
    normal_followers_count?: true
    friends_count?: true
    listed_count?: true
    created_at?: true
    favourites_count?: true
    utc_offset?: true
    time_zone?: true
    geo_enabled?: true
    verified?: true
    statuses_count?: true
    media_count?: true
    lang?: true
    contributors_enabled?: true
    is_translator?: true
    is_translation_enabled?: true
    profile_background_color?: true
    profile_background_image_url?: true
    profile_background_image_url_https?: true
    profile_background_tile?: true
    profile_image_url?: true
    profile_image_url_https?: true
    profile_banner_url?: true
    profile_link_color?: true
    profile_sidebar_border_color?: true
    profile_sidebar_fill_color?: true
    profile_text_color?: true
    profile_use_background_image?: true
    has_extended_profile?: true
    default_profile?: true
    default_profile_image?: true
    has_custom_timelines?: true
    can_media_tag?: true
    followed_by?: true
    following?: true
    live_following?: true
    follow_request_sent?: true
    notifications?: true
    muting?: true
    blocking?: true
    blocked_by?: true
    advertiser_account_type?: true
    analytics_type?: true
    business_profile_state?: true
    translator_type?: true
    require_some_consent?: true
    type?: true
    target_username?: true
    email?: true
  }

  export type FollowerFollowingDataCountAggregateInputType = {
    id?: true
    id_str?: true
    name?: true
    screen_name?: true
    location?: true
    description?: true
    url?: true
    entities?: true
    protected?: true
    followers_count?: true
    fast_followers_count?: true
    normal_followers_count?: true
    friends_count?: true
    listed_count?: true
    created_at?: true
    favourites_count?: true
    utc_offset?: true
    time_zone?: true
    geo_enabled?: true
    verified?: true
    statuses_count?: true
    media_count?: true
    lang?: true
    contributors_enabled?: true
    is_translator?: true
    is_translation_enabled?: true
    profile_background_color?: true
    profile_background_image_url?: true
    profile_background_image_url_https?: true
    profile_background_tile?: true
    profile_image_url?: true
    profile_image_url_https?: true
    profile_banner_url?: true
    profile_link_color?: true
    profile_sidebar_border_color?: true
    profile_sidebar_fill_color?: true
    profile_text_color?: true
    profile_use_background_image?: true
    has_extended_profile?: true
    default_profile?: true
    default_profile_image?: true
    pinned_tweet_ids?: true
    pinned_tweet_ids_str?: true
    has_custom_timelines?: true
    can_media_tag?: true
    followed_by?: true
    following?: true
    live_following?: true
    follow_request_sent?: true
    notifications?: true
    muting?: true
    blocking?: true
    blocked_by?: true
    advertiser_account_type?: true
    advertiser_account_service_levels?: true
    analytics_type?: true
    business_profile_state?: true
    translator_type?: true
    withheld_in_countries?: true
    require_some_consent?: true
    type?: true
    target_username?: true
    email?: true
    _all?: true
  }

  export type FollowerFollowingDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowerFollowingData to aggregate.
     */
    where?: FollowerFollowingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowerFollowingData to fetch.
     */
    orderBy?: FollowerFollowingDataOrderByWithRelationInput | FollowerFollowingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowerFollowingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowerFollowingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowerFollowingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowerFollowingData
    **/
    _count?: true | FollowerFollowingDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowerFollowingDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowerFollowingDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowerFollowingDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowerFollowingDataMaxAggregateInputType
  }

  export type GetFollowerFollowingDataAggregateType<T extends FollowerFollowingDataAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowerFollowingData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowerFollowingData[P]>
      : GetScalarType<T[P], AggregateFollowerFollowingData[P]>
  }




  export type FollowerFollowingDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowerFollowingDataWhereInput
    orderBy?: FollowerFollowingDataOrderByWithAggregationInput | FollowerFollowingDataOrderByWithAggregationInput[]
    by: FollowerFollowingDataScalarFieldEnum[] | FollowerFollowingDataScalarFieldEnum
    having?: FollowerFollowingDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowerFollowingDataCountAggregateInputType | true
    _avg?: FollowerFollowingDataAvgAggregateInputType
    _sum?: FollowerFollowingDataSumAggregateInputType
    _min?: FollowerFollowingDataMinAggregateInputType
    _max?: FollowerFollowingDataMaxAggregateInputType
  }

  export type FollowerFollowingDataGroupByOutputType = {
    id: string
    id_str: string
    name: string | null
    screen_name: string | null
    location: string | null
    description: string | null
    url: string | null
    entities: JsonValue | null
    protected: boolean | null
    followers_count: number | null
    fast_followers_count: number | null
    normal_followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    created_at: string | null
    favourites_count: number | null
    utc_offset: string | null
    time_zone: string | null
    geo_enabled: boolean | null
    verified: boolean | null
    statuses_count: number | null
    media_count: number | null
    lang: string | null
    contributors_enabled: boolean | null
    is_translator: boolean | null
    is_translation_enabled: boolean | null
    profile_background_color: string | null
    profile_background_image_url: string | null
    profile_background_image_url_https: string | null
    profile_background_tile: boolean | null
    profile_image_url: string | null
    profile_image_url_https: string | null
    profile_banner_url: string | null
    profile_link_color: string | null
    profile_sidebar_border_color: string | null
    profile_sidebar_fill_color: string | null
    profile_text_color: string | null
    profile_use_background_image: boolean | null
    has_extended_profile: boolean | null
    default_profile: boolean | null
    default_profile_image: boolean | null
    pinned_tweet_ids: JsonValue | null
    pinned_tweet_ids_str: string[]
    has_custom_timelines: boolean | null
    can_media_tag: boolean | null
    followed_by: boolean | null
    following: boolean | null
    live_following: boolean | null
    follow_request_sent: boolean | null
    notifications: boolean | null
    muting: boolean | null
    blocking: boolean | null
    blocked_by: boolean | null
    advertiser_account_type: string | null
    advertiser_account_service_levels: string[]
    analytics_type: string | null
    business_profile_state: string | null
    translator_type: string | null
    withheld_in_countries: string[]
    require_some_consent: boolean | null
    type: string | null
    target_username: string | null
    email: string | null
    _count: FollowerFollowingDataCountAggregateOutputType | null
    _avg: FollowerFollowingDataAvgAggregateOutputType | null
    _sum: FollowerFollowingDataSumAggregateOutputType | null
    _min: FollowerFollowingDataMinAggregateOutputType | null
    _max: FollowerFollowingDataMaxAggregateOutputType | null
  }

  type GetFollowerFollowingDataGroupByPayload<T extends FollowerFollowingDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowerFollowingDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowerFollowingDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowerFollowingDataGroupByOutputType[P]>
            : GetScalarType<T[P], FollowerFollowingDataGroupByOutputType[P]>
        }
      >
    >


  export type FollowerFollowingDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_str?: boolean
    name?: boolean
    screen_name?: boolean
    location?: boolean
    description?: boolean
    url?: boolean
    entities?: boolean
    protected?: boolean
    followers_count?: boolean
    fast_followers_count?: boolean
    normal_followers_count?: boolean
    friends_count?: boolean
    listed_count?: boolean
    created_at?: boolean
    favourites_count?: boolean
    utc_offset?: boolean
    time_zone?: boolean
    geo_enabled?: boolean
    verified?: boolean
    statuses_count?: boolean
    media_count?: boolean
    lang?: boolean
    status?: boolean | TweetStatusDefaultArgs<ExtArgs>
    contributors_enabled?: boolean
    is_translator?: boolean
    is_translation_enabled?: boolean
    profile_background_color?: boolean
    profile_background_image_url?: boolean
    profile_background_image_url_https?: boolean
    profile_background_tile?: boolean
    profile_image_url?: boolean
    profile_image_url_https?: boolean
    profile_banner_url?: boolean
    profile_link_color?: boolean
    profile_sidebar_border_color?: boolean
    profile_sidebar_fill_color?: boolean
    profile_text_color?: boolean
    profile_use_background_image?: boolean
    has_extended_profile?: boolean
    default_profile?: boolean
    default_profile_image?: boolean
    pinned_tweet_ids?: boolean
    pinned_tweet_ids_str?: boolean
    has_custom_timelines?: boolean
    can_media_tag?: boolean
    followed_by?: boolean
    following?: boolean
    live_following?: boolean
    follow_request_sent?: boolean
    notifications?: boolean
    muting?: boolean
    blocking?: boolean
    blocked_by?: boolean
    advertiser_account_type?: boolean
    advertiser_account_service_levels?: boolean
    analytics_type?: boolean
    business_profile_state?: boolean
    translator_type?: boolean
    withheld_in_countries?: boolean
    require_some_consent?: boolean
    type?: boolean
    target_username?: boolean
    email?: boolean
  }, ExtArgs["result"]["followerFollowingData"]>



  export type FollowerFollowingDataSelectScalar = {
    id?: boolean
    id_str?: boolean
    name?: boolean
    screen_name?: boolean
    location?: boolean
    description?: boolean
    url?: boolean
    entities?: boolean
    protected?: boolean
    followers_count?: boolean
    fast_followers_count?: boolean
    normal_followers_count?: boolean
    friends_count?: boolean
    listed_count?: boolean
    created_at?: boolean
    favourites_count?: boolean
    utc_offset?: boolean
    time_zone?: boolean
    geo_enabled?: boolean
    verified?: boolean
    statuses_count?: boolean
    media_count?: boolean
    lang?: boolean
    contributors_enabled?: boolean
    is_translator?: boolean
    is_translation_enabled?: boolean
    profile_background_color?: boolean
    profile_background_image_url?: boolean
    profile_background_image_url_https?: boolean
    profile_background_tile?: boolean
    profile_image_url?: boolean
    profile_image_url_https?: boolean
    profile_banner_url?: boolean
    profile_link_color?: boolean
    profile_sidebar_border_color?: boolean
    profile_sidebar_fill_color?: boolean
    profile_text_color?: boolean
    profile_use_background_image?: boolean
    has_extended_profile?: boolean
    default_profile?: boolean
    default_profile_image?: boolean
    pinned_tweet_ids?: boolean
    pinned_tweet_ids_str?: boolean
    has_custom_timelines?: boolean
    can_media_tag?: boolean
    followed_by?: boolean
    following?: boolean
    live_following?: boolean
    follow_request_sent?: boolean
    notifications?: boolean
    muting?: boolean
    blocking?: boolean
    blocked_by?: boolean
    advertiser_account_type?: boolean
    advertiser_account_service_levels?: boolean
    analytics_type?: boolean
    business_profile_state?: boolean
    translator_type?: boolean
    withheld_in_countries?: boolean
    require_some_consent?: boolean
    type?: boolean
    target_username?: boolean
    email?: boolean
  }

  export type FollowerFollowingDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_str" | "name" | "screen_name" | "location" | "description" | "url" | "entities" | "protected" | "followers_count" | "fast_followers_count" | "normal_followers_count" | "friends_count" | "listed_count" | "created_at" | "favourites_count" | "utc_offset" | "time_zone" | "geo_enabled" | "verified" | "statuses_count" | "media_count" | "lang" | "status" | "contributors_enabled" | "is_translator" | "is_translation_enabled" | "profile_background_color" | "profile_background_image_url" | "profile_background_image_url_https" | "profile_background_tile" | "profile_image_url" | "profile_image_url_https" | "profile_banner_url" | "profile_link_color" | "profile_sidebar_border_color" | "profile_sidebar_fill_color" | "profile_text_color" | "profile_use_background_image" | "has_extended_profile" | "default_profile" | "default_profile_image" | "pinned_tweet_ids" | "pinned_tweet_ids_str" | "has_custom_timelines" | "can_media_tag" | "followed_by" | "following" | "live_following" | "follow_request_sent" | "notifications" | "muting" | "blocking" | "blocked_by" | "advertiser_account_type" | "advertiser_account_service_levels" | "analytics_type" | "business_profile_state" | "translator_type" | "withheld_in_countries" | "require_some_consent" | "type" | "target_username" | "email", ExtArgs["result"]["followerFollowingData"]>
  export type FollowerFollowingDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FollowerFollowingDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowerFollowingData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_str: string
      name: string | null
      screen_name: string | null
      location: string | null
      description: string | null
      url: string | null
      entities: Prisma.JsonValue | null
      protected: boolean | null
      followers_count: number | null
      fast_followers_count: number | null
      normal_followers_count: number | null
      friends_count: number | null
      listed_count: number | null
      created_at: string | null
      favourites_count: number | null
      utc_offset: string | null
      time_zone: string | null
      geo_enabled: boolean | null
      verified: boolean | null
      statuses_count: number | null
      media_count: number | null
      lang: string | null
      contributors_enabled: boolean | null
      is_translator: boolean | null
      is_translation_enabled: boolean | null
      profile_background_color: string | null
      profile_background_image_url: string | null
      profile_background_image_url_https: string | null
      profile_background_tile: boolean | null
      profile_image_url: string | null
      profile_image_url_https: string | null
      profile_banner_url: string | null
      profile_link_color: string | null
      profile_sidebar_border_color: string | null
      profile_sidebar_fill_color: string | null
      profile_text_color: string | null
      profile_use_background_image: boolean | null
      has_extended_profile: boolean | null
      default_profile: boolean | null
      default_profile_image: boolean | null
      pinned_tweet_ids: Prisma.JsonValue | null
      pinned_tweet_ids_str: string[]
      has_custom_timelines: boolean | null
      can_media_tag: boolean | null
      followed_by: boolean | null
      following: boolean | null
      live_following: boolean | null
      follow_request_sent: boolean | null
      notifications: boolean | null
      muting: boolean | null
      blocking: boolean | null
      blocked_by: boolean | null
      advertiser_account_type: string | null
      advertiser_account_service_levels: string[]
      analytics_type: string | null
      business_profile_state: string | null
      translator_type: string | null
      withheld_in_countries: string[]
      require_some_consent: boolean | null
      type: string | null
      target_username: string | null
      email: string | null
    }, ExtArgs["result"]["followerFollowingData"]>
    composites: {
      status: Prisma.$TweetStatusPayload | null
    }
  }

  type FollowerFollowingDataGetPayload<S extends boolean | null | undefined | FollowerFollowingDataDefaultArgs> = $Result.GetResult<Prisma.$FollowerFollowingDataPayload, S>

  type FollowerFollowingDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowerFollowingDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowerFollowingDataCountAggregateInputType | true
    }

  export interface FollowerFollowingDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowerFollowingData'], meta: { name: 'FollowerFollowingData' } }
    /**
     * Find zero or one FollowerFollowingData that matches the filter.
     * @param {FollowerFollowingDataFindUniqueArgs} args - Arguments to find a FollowerFollowingData
     * @example
     * // Get one FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowerFollowingDataFindUniqueArgs>(args: SelectSubset<T, FollowerFollowingDataFindUniqueArgs<ExtArgs>>): Prisma__FollowerFollowingDataClient<$Result.GetResult<Prisma.$FollowerFollowingDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FollowerFollowingData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowerFollowingDataFindUniqueOrThrowArgs} args - Arguments to find a FollowerFollowingData
     * @example
     * // Get one FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowerFollowingDataFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowerFollowingDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowerFollowingDataClient<$Result.GetResult<Prisma.$FollowerFollowingDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowerFollowingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFollowingDataFindFirstArgs} args - Arguments to find a FollowerFollowingData
     * @example
     * // Get one FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowerFollowingDataFindFirstArgs>(args?: SelectSubset<T, FollowerFollowingDataFindFirstArgs<ExtArgs>>): Prisma__FollowerFollowingDataClient<$Result.GetResult<Prisma.$FollowerFollowingDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowerFollowingData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFollowingDataFindFirstOrThrowArgs} args - Arguments to find a FollowerFollowingData
     * @example
     * // Get one FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowerFollowingDataFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowerFollowingDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowerFollowingDataClient<$Result.GetResult<Prisma.$FollowerFollowingDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FollowerFollowingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFollowingDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.findMany()
     * 
     * // Get first 10 FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followerFollowingDataWithIdOnly = await prisma.followerFollowingData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowerFollowingDataFindManyArgs>(args?: SelectSubset<T, FollowerFollowingDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowerFollowingDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FollowerFollowingData.
     * @param {FollowerFollowingDataCreateArgs} args - Arguments to create a FollowerFollowingData.
     * @example
     * // Create one FollowerFollowingData
     * const FollowerFollowingData = await prisma.followerFollowingData.create({
     *   data: {
     *     // ... data to create a FollowerFollowingData
     *   }
     * })
     * 
     */
    create<T extends FollowerFollowingDataCreateArgs>(args: SelectSubset<T, FollowerFollowingDataCreateArgs<ExtArgs>>): Prisma__FollowerFollowingDataClient<$Result.GetResult<Prisma.$FollowerFollowingDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FollowerFollowingData.
     * @param {FollowerFollowingDataCreateManyArgs} args - Arguments to create many FollowerFollowingData.
     * @example
     * // Create many FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowerFollowingDataCreateManyArgs>(args?: SelectSubset<T, FollowerFollowingDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FollowerFollowingData.
     * @param {FollowerFollowingDataDeleteArgs} args - Arguments to delete one FollowerFollowingData.
     * @example
     * // Delete one FollowerFollowingData
     * const FollowerFollowingData = await prisma.followerFollowingData.delete({
     *   where: {
     *     // ... filter to delete one FollowerFollowingData
     *   }
     * })
     * 
     */
    delete<T extends FollowerFollowingDataDeleteArgs>(args: SelectSubset<T, FollowerFollowingDataDeleteArgs<ExtArgs>>): Prisma__FollowerFollowingDataClient<$Result.GetResult<Prisma.$FollowerFollowingDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FollowerFollowingData.
     * @param {FollowerFollowingDataUpdateArgs} args - Arguments to update one FollowerFollowingData.
     * @example
     * // Update one FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowerFollowingDataUpdateArgs>(args: SelectSubset<T, FollowerFollowingDataUpdateArgs<ExtArgs>>): Prisma__FollowerFollowingDataClient<$Result.GetResult<Prisma.$FollowerFollowingDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FollowerFollowingData.
     * @param {FollowerFollowingDataDeleteManyArgs} args - Arguments to filter FollowerFollowingData to delete.
     * @example
     * // Delete a few FollowerFollowingData
     * const { count } = await prisma.followerFollowingData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowerFollowingDataDeleteManyArgs>(args?: SelectSubset<T, FollowerFollowingDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowerFollowingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFollowingDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowerFollowingDataUpdateManyArgs>(args: SelectSubset<T, FollowerFollowingDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FollowerFollowingData.
     * @param {FollowerFollowingDataUpsertArgs} args - Arguments to update or create a FollowerFollowingData.
     * @example
     * // Update or create a FollowerFollowingData
     * const followerFollowingData = await prisma.followerFollowingData.upsert({
     *   create: {
     *     // ... data to create a FollowerFollowingData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowerFollowingData we want to update
     *   }
     * })
     */
    upsert<T extends FollowerFollowingDataUpsertArgs>(args: SelectSubset<T, FollowerFollowingDataUpsertArgs<ExtArgs>>): Prisma__FollowerFollowingDataClient<$Result.GetResult<Prisma.$FollowerFollowingDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FollowerFollowingData that matches the filter.
     * @param {FollowerFollowingDataFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const followerFollowingData = await prisma.followerFollowingData.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FollowerFollowingDataFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FollowerFollowingData.
     * @param {FollowerFollowingDataAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const followerFollowingData = await prisma.followerFollowingData.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FollowerFollowingDataAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FollowerFollowingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFollowingDataCountArgs} args - Arguments to filter FollowerFollowingData to count.
     * @example
     * // Count the number of FollowerFollowingData
     * const count = await prisma.followerFollowingData.count({
     *   where: {
     *     // ... the filter for the FollowerFollowingData we want to count
     *   }
     * })
    **/
    count<T extends FollowerFollowingDataCountArgs>(
      args?: Subset<T, FollowerFollowingDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowerFollowingDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowerFollowingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFollowingDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowerFollowingDataAggregateArgs>(args: Subset<T, FollowerFollowingDataAggregateArgs>): Prisma.PrismaPromise<GetFollowerFollowingDataAggregateType<T>>

    /**
     * Group by FollowerFollowingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFollowingDataGroupByArgs} args - Group by arguments.
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
      T extends FollowerFollowingDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowerFollowingDataGroupByArgs['orderBy'] }
        : { orderBy?: FollowerFollowingDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowerFollowingDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowerFollowingDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowerFollowingData model
   */
  readonly fields: FollowerFollowingDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowerFollowingData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowerFollowingDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FollowerFollowingData model
   */
  interface FollowerFollowingDataFieldRefs {
    readonly id: FieldRef<"FollowerFollowingData", 'String'>
    readonly id_str: FieldRef<"FollowerFollowingData", 'String'>
    readonly name: FieldRef<"FollowerFollowingData", 'String'>
    readonly screen_name: FieldRef<"FollowerFollowingData", 'String'>
    readonly location: FieldRef<"FollowerFollowingData", 'String'>
    readonly description: FieldRef<"FollowerFollowingData", 'String'>
    readonly url: FieldRef<"FollowerFollowingData", 'String'>
    readonly entities: FieldRef<"FollowerFollowingData", 'Json'>
    readonly protected: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly followers_count: FieldRef<"FollowerFollowingData", 'Int'>
    readonly fast_followers_count: FieldRef<"FollowerFollowingData", 'Int'>
    readonly normal_followers_count: FieldRef<"FollowerFollowingData", 'Int'>
    readonly friends_count: FieldRef<"FollowerFollowingData", 'Int'>
    readonly listed_count: FieldRef<"FollowerFollowingData", 'Int'>
    readonly created_at: FieldRef<"FollowerFollowingData", 'String'>
    readonly favourites_count: FieldRef<"FollowerFollowingData", 'Int'>
    readonly utc_offset: FieldRef<"FollowerFollowingData", 'String'>
    readonly time_zone: FieldRef<"FollowerFollowingData", 'String'>
    readonly geo_enabled: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly verified: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly statuses_count: FieldRef<"FollowerFollowingData", 'Int'>
    readonly media_count: FieldRef<"FollowerFollowingData", 'Int'>
    readonly lang: FieldRef<"FollowerFollowingData", 'String'>
    readonly contributors_enabled: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly is_translator: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly is_translation_enabled: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly profile_background_color: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_background_image_url: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_background_image_url_https: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_background_tile: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly profile_image_url: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_image_url_https: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_banner_url: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_link_color: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_sidebar_border_color: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_sidebar_fill_color: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_text_color: FieldRef<"FollowerFollowingData", 'String'>
    readonly profile_use_background_image: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly has_extended_profile: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly default_profile: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly default_profile_image: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly pinned_tweet_ids: FieldRef<"FollowerFollowingData", 'Json'>
    readonly pinned_tweet_ids_str: FieldRef<"FollowerFollowingData", 'String[]'>
    readonly has_custom_timelines: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly can_media_tag: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly followed_by: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly following: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly live_following: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly follow_request_sent: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly notifications: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly muting: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly blocking: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly blocked_by: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly advertiser_account_type: FieldRef<"FollowerFollowingData", 'String'>
    readonly advertiser_account_service_levels: FieldRef<"FollowerFollowingData", 'String[]'>
    readonly analytics_type: FieldRef<"FollowerFollowingData", 'String'>
    readonly business_profile_state: FieldRef<"FollowerFollowingData", 'String'>
    readonly translator_type: FieldRef<"FollowerFollowingData", 'String'>
    readonly withheld_in_countries: FieldRef<"FollowerFollowingData", 'String[]'>
    readonly require_some_consent: FieldRef<"FollowerFollowingData", 'Boolean'>
    readonly type: FieldRef<"FollowerFollowingData", 'String'>
    readonly target_username: FieldRef<"FollowerFollowingData", 'String'>
    readonly email: FieldRef<"FollowerFollowingData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FollowerFollowingData findUnique
   */
  export type FollowerFollowingDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
    /**
     * Filter, which FollowerFollowingData to fetch.
     */
    where: FollowerFollowingDataWhereUniqueInput
  }

  /**
   * FollowerFollowingData findUniqueOrThrow
   */
  export type FollowerFollowingDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
    /**
     * Filter, which FollowerFollowingData to fetch.
     */
    where: FollowerFollowingDataWhereUniqueInput
  }

  /**
   * FollowerFollowingData findFirst
   */
  export type FollowerFollowingDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
    /**
     * Filter, which FollowerFollowingData to fetch.
     */
    where?: FollowerFollowingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowerFollowingData to fetch.
     */
    orderBy?: FollowerFollowingDataOrderByWithRelationInput | FollowerFollowingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowerFollowingData.
     */
    cursor?: FollowerFollowingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowerFollowingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowerFollowingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowerFollowingData.
     */
    distinct?: FollowerFollowingDataScalarFieldEnum | FollowerFollowingDataScalarFieldEnum[]
  }

  /**
   * FollowerFollowingData findFirstOrThrow
   */
  export type FollowerFollowingDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
    /**
     * Filter, which FollowerFollowingData to fetch.
     */
    where?: FollowerFollowingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowerFollowingData to fetch.
     */
    orderBy?: FollowerFollowingDataOrderByWithRelationInput | FollowerFollowingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowerFollowingData.
     */
    cursor?: FollowerFollowingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowerFollowingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowerFollowingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowerFollowingData.
     */
    distinct?: FollowerFollowingDataScalarFieldEnum | FollowerFollowingDataScalarFieldEnum[]
  }

  /**
   * FollowerFollowingData findMany
   */
  export type FollowerFollowingDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
    /**
     * Filter, which FollowerFollowingData to fetch.
     */
    where?: FollowerFollowingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowerFollowingData to fetch.
     */
    orderBy?: FollowerFollowingDataOrderByWithRelationInput | FollowerFollowingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowerFollowingData.
     */
    cursor?: FollowerFollowingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowerFollowingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowerFollowingData.
     */
    skip?: number
    distinct?: FollowerFollowingDataScalarFieldEnum | FollowerFollowingDataScalarFieldEnum[]
  }

  /**
   * FollowerFollowingData create
   */
  export type FollowerFollowingDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowerFollowingData.
     */
    data: XOR<FollowerFollowingDataCreateInput, FollowerFollowingDataUncheckedCreateInput>
  }

  /**
   * FollowerFollowingData createMany
   */
  export type FollowerFollowingDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowerFollowingData.
     */
    data: FollowerFollowingDataCreateManyInput | FollowerFollowingDataCreateManyInput[]
  }

  /**
   * FollowerFollowingData update
   */
  export type FollowerFollowingDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowerFollowingData.
     */
    data: XOR<FollowerFollowingDataUpdateInput, FollowerFollowingDataUncheckedUpdateInput>
    /**
     * Choose, which FollowerFollowingData to update.
     */
    where: FollowerFollowingDataWhereUniqueInput
  }

  /**
   * FollowerFollowingData updateMany
   */
  export type FollowerFollowingDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowerFollowingData.
     */
    data: XOR<FollowerFollowingDataUpdateManyMutationInput, FollowerFollowingDataUncheckedUpdateManyInput>
    /**
     * Filter which FollowerFollowingData to update
     */
    where?: FollowerFollowingDataWhereInput
    /**
     * Limit how many FollowerFollowingData to update.
     */
    limit?: number
  }

  /**
   * FollowerFollowingData upsert
   */
  export type FollowerFollowingDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowerFollowingData to update in case it exists.
     */
    where: FollowerFollowingDataWhereUniqueInput
    /**
     * In case the FollowerFollowingData found by the `where` argument doesn't exist, create a new FollowerFollowingData with this data.
     */
    create: XOR<FollowerFollowingDataCreateInput, FollowerFollowingDataUncheckedCreateInput>
    /**
     * In case the FollowerFollowingData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowerFollowingDataUpdateInput, FollowerFollowingDataUncheckedUpdateInput>
  }

  /**
   * FollowerFollowingData delete
   */
  export type FollowerFollowingDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
    /**
     * Filter which FollowerFollowingData to delete.
     */
    where: FollowerFollowingDataWhereUniqueInput
  }

  /**
   * FollowerFollowingData deleteMany
   */
  export type FollowerFollowingDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowerFollowingData to delete
     */
    where?: FollowerFollowingDataWhereInput
    /**
     * Limit how many FollowerFollowingData to delete.
     */
    limit?: number
  }

  /**
   * FollowerFollowingData findRaw
   */
  export type FollowerFollowingDataFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FollowerFollowingData aggregateRaw
   */
  export type FollowerFollowingDataAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FollowerFollowingData without action
   */
  export type FollowerFollowingDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowerFollowingData
     */
    select?: FollowerFollowingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowerFollowingData
     */
    omit?: FollowerFollowingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerFollowingDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserProfileScalarFieldEnum: {
    id: 'id',
    default_profile: 'default_profile',
    default_profile_image: 'default_profile_image',
    description: 'description',
    fast_followers_count: 'fast_followers_count',
    favourites_count: 'favourites_count',
    followers_count: 'followers_count',
    friends_count: 'friends_count',
    has_custom_timelines: 'has_custom_timelines',
    is_translator: 'is_translator',
    listed_count: 'listed_count',
    media_count: 'media_count',
    normal_followers_count: 'normal_followers_count',
    pinned_tweet_ids_str: 'pinned_tweet_ids_str',
    possibly_sensitive: 'possibly_sensitive',
    profile_banner_url: 'profile_banner_url',
    profile_interstitial_type: 'profile_interstitial_type',
    statuses_count: 'statuses_count',
    translator_type: 'translator_type',
    withheld_in_countries: 'withheld_in_countries',
    id_str: 'id_str',
    profile_url: 'profile_url',
    updated_time: 'updated_time'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const TweetsDataScalarFieldEnum: {
    id: 'id',
    id_str: 'id_str',
    bookmark_count: 'bookmark_count',
    bookmarked: 'bookmarked',
    conversation_id_str: 'conversation_id_str',
    created_at: 'created_at',
    display_text_range: 'display_text_range',
    entities: 'entities',
    favorite_count: 'favorite_count',
    favorited: 'favorited',
    full_text: 'full_text',
    is_quote_status: 'is_quote_status',
    lang: 'lang',
    quote_count: 'quote_count',
    reply_count: 'reply_count',
    retweet_count: 'retweet_count',
    retweeted: 'retweeted',
    user_id_str: 'user_id_str',
    updated_time: 'updated_time'
  };

  export type TweetsDataScalarFieldEnum = (typeof TweetsDataScalarFieldEnum)[keyof typeof TweetsDataScalarFieldEnum]


  export const FollowerFollowingDataScalarFieldEnum: {
    id: 'id',
    id_str: 'id_str',
    name: 'name',
    screen_name: 'screen_name',
    location: 'location',
    description: 'description',
    url: 'url',
    entities: 'entities',
    protected: 'protected',
    followers_count: 'followers_count',
    fast_followers_count: 'fast_followers_count',
    normal_followers_count: 'normal_followers_count',
    friends_count: 'friends_count',
    listed_count: 'listed_count',
    created_at: 'created_at',
    favourites_count: 'favourites_count',
    utc_offset: 'utc_offset',
    time_zone: 'time_zone',
    geo_enabled: 'geo_enabled',
    verified: 'verified',
    statuses_count: 'statuses_count',
    media_count: 'media_count',
    lang: 'lang',
    contributors_enabled: 'contributors_enabled',
    is_translator: 'is_translator',
    is_translation_enabled: 'is_translation_enabled',
    profile_background_color: 'profile_background_color',
    profile_background_image_url: 'profile_background_image_url',
    profile_background_image_url_https: 'profile_background_image_url_https',
    profile_background_tile: 'profile_background_tile',
    profile_image_url: 'profile_image_url',
    profile_image_url_https: 'profile_image_url_https',
    profile_banner_url: 'profile_banner_url',
    profile_link_color: 'profile_link_color',
    profile_sidebar_border_color: 'profile_sidebar_border_color',
    profile_sidebar_fill_color: 'profile_sidebar_fill_color',
    profile_text_color: 'profile_text_color',
    profile_use_background_image: 'profile_use_background_image',
    has_extended_profile: 'has_extended_profile',
    default_profile: 'default_profile',
    default_profile_image: 'default_profile_image',
    pinned_tweet_ids: 'pinned_tweet_ids',
    pinned_tweet_ids_str: 'pinned_tweet_ids_str',
    has_custom_timelines: 'has_custom_timelines',
    can_media_tag: 'can_media_tag',
    followed_by: 'followed_by',
    following: 'following',
    live_following: 'live_following',
    follow_request_sent: 'follow_request_sent',
    notifications: 'notifications',
    muting: 'muting',
    blocking: 'blocking',
    blocked_by: 'blocked_by',
    advertiser_account_type: 'advertiser_account_type',
    advertiser_account_service_levels: 'advertiser_account_service_levels',
    analytics_type: 'analytics_type',
    business_profile_state: 'business_profile_state',
    translator_type: 'translator_type',
    withheld_in_countries: 'withheld_in_countries',
    require_some_consent: 'require_some_consent',
    type: 'type',
    target_username: 'target_username',
    email: 'email'
  };

  export type FollowerFollowingDataScalarFieldEnum = (typeof FollowerFollowingDataScalarFieldEnum)[keyof typeof FollowerFollowingDataScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    default_profile?: BoolFilter<"UserProfile"> | boolean
    default_profile_image?: BoolFilter<"UserProfile"> | boolean
    description?: StringNullableFilter<"UserProfile"> | string | null
    entities?: XOR<EntitiesProfileNullableCompositeFilter, EntitiesProfileObjectEqualityInput> | null
    fast_followers_count?: IntNullableFilter<"UserProfile"> | number | null
    favourites_count?: IntNullableFilter<"UserProfile"> | number | null
    followers_count?: IntNullableFilter<"UserProfile"> | number | null
    friends_count?: IntNullableFilter<"UserProfile"> | number | null
    has_custom_timelines?: BoolNullableFilter<"UserProfile"> | boolean | null
    is_translator?: BoolNullableFilter<"UserProfile"> | boolean | null
    listed_count?: IntNullableFilter<"UserProfile"> | number | null
    media_count?: IntNullableFilter<"UserProfile"> | number | null
    normal_followers_count?: IntNullableFilter<"UserProfile"> | number | null
    pinned_tweet_ids_str?: StringNullableListFilter<"UserProfile">
    possibly_sensitive?: BoolNullableFilter<"UserProfile"> | boolean | null
    profile_banner_url?: StringNullableFilter<"UserProfile"> | string | null
    profile_interstitial_type?: StringNullableFilter<"UserProfile"> | string | null
    statuses_count?: IntNullableFilter<"UserProfile"> | number | null
    translator_type?: StringNullableFilter<"UserProfile"> | string | null
    withheld_in_countries?: StringNullableListFilter<"UserProfile">
    id_str?: StringFilter<"UserProfile"> | string
    profile_url?: StringFilter<"UserProfile"> | string
    updated_time?: DateTimeFilter<"UserProfile"> | Date | string
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    description?: SortOrder
    entities?: EntitiesProfileOrderByInput
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    has_custom_timelines?: SortOrder
    is_translator?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    pinned_tweet_ids_str?: SortOrder
    possibly_sensitive?: SortOrder
    profile_banner_url?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    withheld_in_countries?: SortOrder
    id_str?: SortOrder
    profile_url?: SortOrder
    updated_time?: SortOrder
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    default_profile?: BoolFilter<"UserProfile"> | boolean
    default_profile_image?: BoolFilter<"UserProfile"> | boolean
    description?: StringNullableFilter<"UserProfile"> | string | null
    entities?: XOR<EntitiesProfileNullableCompositeFilter, EntitiesProfileObjectEqualityInput> | null
    fast_followers_count?: IntNullableFilter<"UserProfile"> | number | null
    favourites_count?: IntNullableFilter<"UserProfile"> | number | null
    followers_count?: IntNullableFilter<"UserProfile"> | number | null
    friends_count?: IntNullableFilter<"UserProfile"> | number | null
    has_custom_timelines?: BoolNullableFilter<"UserProfile"> | boolean | null
    is_translator?: BoolNullableFilter<"UserProfile"> | boolean | null
    listed_count?: IntNullableFilter<"UserProfile"> | number | null
    media_count?: IntNullableFilter<"UserProfile"> | number | null
    normal_followers_count?: IntNullableFilter<"UserProfile"> | number | null
    pinned_tweet_ids_str?: StringNullableListFilter<"UserProfile">
    possibly_sensitive?: BoolNullableFilter<"UserProfile"> | boolean | null
    profile_banner_url?: StringNullableFilter<"UserProfile"> | string | null
    profile_interstitial_type?: StringNullableFilter<"UserProfile"> | string | null
    statuses_count?: IntNullableFilter<"UserProfile"> | number | null
    translator_type?: StringNullableFilter<"UserProfile"> | string | null
    withheld_in_countries?: StringNullableListFilter<"UserProfile">
    id_str?: StringFilter<"UserProfile"> | string
    profile_url?: StringFilter<"UserProfile"> | string
    updated_time?: DateTimeFilter<"UserProfile"> | Date | string
  }, "id">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    description?: SortOrder
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    has_custom_timelines?: SortOrder
    is_translator?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    pinned_tweet_ids_str?: SortOrder
    possibly_sensitive?: SortOrder
    profile_banner_url?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    withheld_in_countries?: SortOrder
    id_str?: SortOrder
    profile_url?: SortOrder
    updated_time?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    default_profile?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    default_profile_image?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    description?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    fast_followers_count?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    favourites_count?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    followers_count?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    friends_count?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    has_custom_timelines?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    is_translator?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    listed_count?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    media_count?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    normal_followers_count?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    pinned_tweet_ids_str?: StringNullableListFilter<"UserProfile">
    possibly_sensitive?: BoolNullableWithAggregatesFilter<"UserProfile"> | boolean | null
    profile_banner_url?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    profile_interstitial_type?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    statuses_count?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    translator_type?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    withheld_in_countries?: StringNullableListFilter<"UserProfile">
    id_str?: StringWithAggregatesFilter<"UserProfile"> | string
    profile_url?: StringWithAggregatesFilter<"UserProfile"> | string
    updated_time?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type TweetsDataWhereInput = {
    AND?: TweetsDataWhereInput | TweetsDataWhereInput[]
    OR?: TweetsDataWhereInput[]
    NOT?: TweetsDataWhereInput | TweetsDataWhereInput[]
    id?: StringFilter<"TweetsData"> | string
    id_str?: StringFilter<"TweetsData"> | string
    bookmark_count?: IntNullableFilter<"TweetsData"> | number | null
    bookmarked?: BoolNullableFilter<"TweetsData"> | boolean | null
    conversation_id_str?: StringNullableFilter<"TweetsData"> | string | null
    created_at?: StringNullableFilter<"TweetsData"> | string | null
    display_text_range?: IntNullableListFilter<"TweetsData">
    entities?: JsonNullableFilter<"TweetsData">
    favorite_count?: IntNullableFilter<"TweetsData"> | number | null
    favorited?: BoolNullableFilter<"TweetsData"> | boolean | null
    full_text?: StringNullableFilter<"TweetsData"> | string | null
    is_quote_status?: BoolNullableFilter<"TweetsData"> | boolean | null
    lang?: StringNullableFilter<"TweetsData"> | string | null
    quote_count?: IntNullableFilter<"TweetsData"> | number | null
    reply_count?: IntNullableFilter<"TweetsData"> | number | null
    retweet_count?: IntNullableFilter<"TweetsData"> | number | null
    retweeted?: BoolNullableFilter<"TweetsData"> | boolean | null
    user?: XOR<TweetUserNullableCompositeFilter, TweetUserObjectEqualityInput> | null
    user_id_str?: StringNullableFilter<"TweetsData"> | string | null
    updated_time?: DateTimeFilter<"TweetsData"> | Date | string
  }

  export type TweetsDataOrderByWithRelationInput = {
    id?: SortOrder
    id_str?: SortOrder
    bookmark_count?: SortOrder
    bookmarked?: SortOrder
    conversation_id_str?: SortOrder
    created_at?: SortOrder
    display_text_range?: SortOrder
    entities?: SortOrder
    favorite_count?: SortOrder
    favorited?: SortOrder
    full_text?: SortOrder
    is_quote_status?: SortOrder
    lang?: SortOrder
    quote_count?: SortOrder
    reply_count?: SortOrder
    retweet_count?: SortOrder
    retweeted?: SortOrder
    user?: TweetUserOrderByInput
    user_id_str?: SortOrder
    updated_time?: SortOrder
  }

  export type TweetsDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TweetsDataWhereInput | TweetsDataWhereInput[]
    OR?: TweetsDataWhereInput[]
    NOT?: TweetsDataWhereInput | TweetsDataWhereInput[]
    id_str?: StringFilter<"TweetsData"> | string
    bookmark_count?: IntNullableFilter<"TweetsData"> | number | null
    bookmarked?: BoolNullableFilter<"TweetsData"> | boolean | null
    conversation_id_str?: StringNullableFilter<"TweetsData"> | string | null
    created_at?: StringNullableFilter<"TweetsData"> | string | null
    display_text_range?: IntNullableListFilter<"TweetsData">
    entities?: JsonNullableFilter<"TweetsData">
    favorite_count?: IntNullableFilter<"TweetsData"> | number | null
    favorited?: BoolNullableFilter<"TweetsData"> | boolean | null
    full_text?: StringNullableFilter<"TweetsData"> | string | null
    is_quote_status?: BoolNullableFilter<"TweetsData"> | boolean | null
    lang?: StringNullableFilter<"TweetsData"> | string | null
    quote_count?: IntNullableFilter<"TweetsData"> | number | null
    reply_count?: IntNullableFilter<"TweetsData"> | number | null
    retweet_count?: IntNullableFilter<"TweetsData"> | number | null
    retweeted?: BoolNullableFilter<"TweetsData"> | boolean | null
    user?: XOR<TweetUserNullableCompositeFilter, TweetUserObjectEqualityInput> | null
    user_id_str?: StringNullableFilter<"TweetsData"> | string | null
    updated_time?: DateTimeFilter<"TweetsData"> | Date | string
  }, "id">

  export type TweetsDataOrderByWithAggregationInput = {
    id?: SortOrder
    id_str?: SortOrder
    bookmark_count?: SortOrder
    bookmarked?: SortOrder
    conversation_id_str?: SortOrder
    created_at?: SortOrder
    display_text_range?: SortOrder
    entities?: SortOrder
    favorite_count?: SortOrder
    favorited?: SortOrder
    full_text?: SortOrder
    is_quote_status?: SortOrder
    lang?: SortOrder
    quote_count?: SortOrder
    reply_count?: SortOrder
    retweet_count?: SortOrder
    retweeted?: SortOrder
    user_id_str?: SortOrder
    updated_time?: SortOrder
    _count?: TweetsDataCountOrderByAggregateInput
    _avg?: TweetsDataAvgOrderByAggregateInput
    _max?: TweetsDataMaxOrderByAggregateInput
    _min?: TweetsDataMinOrderByAggregateInput
    _sum?: TweetsDataSumOrderByAggregateInput
  }

  export type TweetsDataScalarWhereWithAggregatesInput = {
    AND?: TweetsDataScalarWhereWithAggregatesInput | TweetsDataScalarWhereWithAggregatesInput[]
    OR?: TweetsDataScalarWhereWithAggregatesInput[]
    NOT?: TweetsDataScalarWhereWithAggregatesInput | TweetsDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TweetsData"> | string
    id_str?: StringWithAggregatesFilter<"TweetsData"> | string
    bookmark_count?: IntNullableWithAggregatesFilter<"TweetsData"> | number | null
    bookmarked?: BoolNullableWithAggregatesFilter<"TweetsData"> | boolean | null
    conversation_id_str?: StringNullableWithAggregatesFilter<"TweetsData"> | string | null
    created_at?: StringNullableWithAggregatesFilter<"TweetsData"> | string | null
    display_text_range?: IntNullableListFilter<"TweetsData">
    entities?: JsonNullableWithAggregatesFilter<"TweetsData">
    favorite_count?: IntNullableWithAggregatesFilter<"TweetsData"> | number | null
    favorited?: BoolNullableWithAggregatesFilter<"TweetsData"> | boolean | null
    full_text?: StringNullableWithAggregatesFilter<"TweetsData"> | string | null
    is_quote_status?: BoolNullableWithAggregatesFilter<"TweetsData"> | boolean | null
    lang?: StringNullableWithAggregatesFilter<"TweetsData"> | string | null
    quote_count?: IntNullableWithAggregatesFilter<"TweetsData"> | number | null
    reply_count?: IntNullableWithAggregatesFilter<"TweetsData"> | number | null
    retweet_count?: IntNullableWithAggregatesFilter<"TweetsData"> | number | null
    retweeted?: BoolNullableWithAggregatesFilter<"TweetsData"> | boolean | null
    user_id_str?: StringNullableWithAggregatesFilter<"TweetsData"> | string | null
    updated_time?: DateTimeWithAggregatesFilter<"TweetsData"> | Date | string
  }

  export type FollowerFollowingDataWhereInput = {
    AND?: FollowerFollowingDataWhereInput | FollowerFollowingDataWhereInput[]
    OR?: FollowerFollowingDataWhereInput[]
    NOT?: FollowerFollowingDataWhereInput | FollowerFollowingDataWhereInput[]
    id?: StringFilter<"FollowerFollowingData"> | string
    id_str?: StringFilter<"FollowerFollowingData"> | string
    name?: StringNullableFilter<"FollowerFollowingData"> | string | null
    screen_name?: StringNullableFilter<"FollowerFollowingData"> | string | null
    location?: StringNullableFilter<"FollowerFollowingData"> | string | null
    description?: StringNullableFilter<"FollowerFollowingData"> | string | null
    url?: StringNullableFilter<"FollowerFollowingData"> | string | null
    entities?: JsonNullableFilter<"FollowerFollowingData">
    protected?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    followers_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    fast_followers_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    normal_followers_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    friends_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    listed_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    created_at?: StringNullableFilter<"FollowerFollowingData"> | string | null
    favourites_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    utc_offset?: StringNullableFilter<"FollowerFollowingData"> | string | null
    time_zone?: StringNullableFilter<"FollowerFollowingData"> | string | null
    geo_enabled?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    verified?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    statuses_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    media_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    lang?: StringNullableFilter<"FollowerFollowingData"> | string | null
    status?: XOR<TweetStatusNullableCompositeFilter, TweetStatusObjectEqualityInput> | null
    contributors_enabled?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    is_translator?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    is_translation_enabled?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    profile_background_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_background_image_url?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_background_image_url_https?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_background_tile?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    profile_image_url?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_image_url_https?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_banner_url?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_link_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_sidebar_border_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_sidebar_fill_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_text_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_use_background_image?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    has_extended_profile?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    default_profile?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    default_profile_image?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    pinned_tweet_ids?: JsonNullableFilter<"FollowerFollowingData">
    pinned_tweet_ids_str?: StringNullableListFilter<"FollowerFollowingData">
    has_custom_timelines?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    can_media_tag?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    followed_by?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    following?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    live_following?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    follow_request_sent?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    notifications?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    muting?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    blocking?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    blocked_by?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    advertiser_account_type?: StringNullableFilter<"FollowerFollowingData"> | string | null
    advertiser_account_service_levels?: StringNullableListFilter<"FollowerFollowingData">
    analytics_type?: StringNullableFilter<"FollowerFollowingData"> | string | null
    business_profile_state?: StringNullableFilter<"FollowerFollowingData"> | string | null
    translator_type?: StringNullableFilter<"FollowerFollowingData"> | string | null
    withheld_in_countries?: StringNullableListFilter<"FollowerFollowingData">
    require_some_consent?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    type?: StringNullableFilter<"FollowerFollowingData"> | string | null
    target_username?: StringNullableFilter<"FollowerFollowingData"> | string | null
    email?: StringNullableFilter<"FollowerFollowingData"> | string | null
  }

  export type FollowerFollowingDataOrderByWithRelationInput = {
    id?: SortOrder
    id_str?: SortOrder
    name?: SortOrder
    screen_name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    url?: SortOrder
    entities?: SortOrder
    protected?: SortOrder
    followers_count?: SortOrder
    fast_followers_count?: SortOrder
    normal_followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    created_at?: SortOrder
    favourites_count?: SortOrder
    utc_offset?: SortOrder
    time_zone?: SortOrder
    geo_enabled?: SortOrder
    verified?: SortOrder
    statuses_count?: SortOrder
    media_count?: SortOrder
    lang?: SortOrder
    status?: TweetStatusOrderByInput
    contributors_enabled?: SortOrder
    is_translator?: SortOrder
    is_translation_enabled?: SortOrder
    profile_background_color?: SortOrder
    profile_background_image_url?: SortOrder
    profile_background_image_url_https?: SortOrder
    profile_background_tile?: SortOrder
    profile_image_url?: SortOrder
    profile_image_url_https?: SortOrder
    profile_banner_url?: SortOrder
    profile_link_color?: SortOrder
    profile_sidebar_border_color?: SortOrder
    profile_sidebar_fill_color?: SortOrder
    profile_text_color?: SortOrder
    profile_use_background_image?: SortOrder
    has_extended_profile?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    pinned_tweet_ids?: SortOrder
    pinned_tweet_ids_str?: SortOrder
    has_custom_timelines?: SortOrder
    can_media_tag?: SortOrder
    followed_by?: SortOrder
    following?: SortOrder
    live_following?: SortOrder
    follow_request_sent?: SortOrder
    notifications?: SortOrder
    muting?: SortOrder
    blocking?: SortOrder
    blocked_by?: SortOrder
    advertiser_account_type?: SortOrder
    advertiser_account_service_levels?: SortOrder
    analytics_type?: SortOrder
    business_profile_state?: SortOrder
    translator_type?: SortOrder
    withheld_in_countries?: SortOrder
    require_some_consent?: SortOrder
    type?: SortOrder
    target_username?: SortOrder
    email?: SortOrder
  }

  export type FollowerFollowingDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FollowerFollowingDataWhereInput | FollowerFollowingDataWhereInput[]
    OR?: FollowerFollowingDataWhereInput[]
    NOT?: FollowerFollowingDataWhereInput | FollowerFollowingDataWhereInput[]
    id_str?: StringFilter<"FollowerFollowingData"> | string
    name?: StringNullableFilter<"FollowerFollowingData"> | string | null
    screen_name?: StringNullableFilter<"FollowerFollowingData"> | string | null
    location?: StringNullableFilter<"FollowerFollowingData"> | string | null
    description?: StringNullableFilter<"FollowerFollowingData"> | string | null
    url?: StringNullableFilter<"FollowerFollowingData"> | string | null
    entities?: JsonNullableFilter<"FollowerFollowingData">
    protected?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    followers_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    fast_followers_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    normal_followers_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    friends_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    listed_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    created_at?: StringNullableFilter<"FollowerFollowingData"> | string | null
    favourites_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    utc_offset?: StringNullableFilter<"FollowerFollowingData"> | string | null
    time_zone?: StringNullableFilter<"FollowerFollowingData"> | string | null
    geo_enabled?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    verified?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    statuses_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    media_count?: IntNullableFilter<"FollowerFollowingData"> | number | null
    lang?: StringNullableFilter<"FollowerFollowingData"> | string | null
    status?: XOR<TweetStatusNullableCompositeFilter, TweetStatusObjectEqualityInput> | null
    contributors_enabled?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    is_translator?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    is_translation_enabled?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    profile_background_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_background_image_url?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_background_image_url_https?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_background_tile?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    profile_image_url?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_image_url_https?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_banner_url?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_link_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_sidebar_border_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_sidebar_fill_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_text_color?: StringNullableFilter<"FollowerFollowingData"> | string | null
    profile_use_background_image?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    has_extended_profile?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    default_profile?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    default_profile_image?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    pinned_tweet_ids?: JsonNullableFilter<"FollowerFollowingData">
    pinned_tweet_ids_str?: StringNullableListFilter<"FollowerFollowingData">
    has_custom_timelines?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    can_media_tag?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    followed_by?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    following?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    live_following?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    follow_request_sent?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    notifications?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    muting?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    blocking?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    blocked_by?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    advertiser_account_type?: StringNullableFilter<"FollowerFollowingData"> | string | null
    advertiser_account_service_levels?: StringNullableListFilter<"FollowerFollowingData">
    analytics_type?: StringNullableFilter<"FollowerFollowingData"> | string | null
    business_profile_state?: StringNullableFilter<"FollowerFollowingData"> | string | null
    translator_type?: StringNullableFilter<"FollowerFollowingData"> | string | null
    withheld_in_countries?: StringNullableListFilter<"FollowerFollowingData">
    require_some_consent?: BoolNullableFilter<"FollowerFollowingData"> | boolean | null
    type?: StringNullableFilter<"FollowerFollowingData"> | string | null
    target_username?: StringNullableFilter<"FollowerFollowingData"> | string | null
    email?: StringNullableFilter<"FollowerFollowingData"> | string | null
  }, "id">

  export type FollowerFollowingDataOrderByWithAggregationInput = {
    id?: SortOrder
    id_str?: SortOrder
    name?: SortOrder
    screen_name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    url?: SortOrder
    entities?: SortOrder
    protected?: SortOrder
    followers_count?: SortOrder
    fast_followers_count?: SortOrder
    normal_followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    created_at?: SortOrder
    favourites_count?: SortOrder
    utc_offset?: SortOrder
    time_zone?: SortOrder
    geo_enabled?: SortOrder
    verified?: SortOrder
    statuses_count?: SortOrder
    media_count?: SortOrder
    lang?: SortOrder
    contributors_enabled?: SortOrder
    is_translator?: SortOrder
    is_translation_enabled?: SortOrder
    profile_background_color?: SortOrder
    profile_background_image_url?: SortOrder
    profile_background_image_url_https?: SortOrder
    profile_background_tile?: SortOrder
    profile_image_url?: SortOrder
    profile_image_url_https?: SortOrder
    profile_banner_url?: SortOrder
    profile_link_color?: SortOrder
    profile_sidebar_border_color?: SortOrder
    profile_sidebar_fill_color?: SortOrder
    profile_text_color?: SortOrder
    profile_use_background_image?: SortOrder
    has_extended_profile?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    pinned_tweet_ids?: SortOrder
    pinned_tweet_ids_str?: SortOrder
    has_custom_timelines?: SortOrder
    can_media_tag?: SortOrder
    followed_by?: SortOrder
    following?: SortOrder
    live_following?: SortOrder
    follow_request_sent?: SortOrder
    notifications?: SortOrder
    muting?: SortOrder
    blocking?: SortOrder
    blocked_by?: SortOrder
    advertiser_account_type?: SortOrder
    advertiser_account_service_levels?: SortOrder
    analytics_type?: SortOrder
    business_profile_state?: SortOrder
    translator_type?: SortOrder
    withheld_in_countries?: SortOrder
    require_some_consent?: SortOrder
    type?: SortOrder
    target_username?: SortOrder
    email?: SortOrder
    _count?: FollowerFollowingDataCountOrderByAggregateInput
    _avg?: FollowerFollowingDataAvgOrderByAggregateInput
    _max?: FollowerFollowingDataMaxOrderByAggregateInput
    _min?: FollowerFollowingDataMinOrderByAggregateInput
    _sum?: FollowerFollowingDataSumOrderByAggregateInput
  }

  export type FollowerFollowingDataScalarWhereWithAggregatesInput = {
    AND?: FollowerFollowingDataScalarWhereWithAggregatesInput | FollowerFollowingDataScalarWhereWithAggregatesInput[]
    OR?: FollowerFollowingDataScalarWhereWithAggregatesInput[]
    NOT?: FollowerFollowingDataScalarWhereWithAggregatesInput | FollowerFollowingDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FollowerFollowingData"> | string
    id_str?: StringWithAggregatesFilter<"FollowerFollowingData"> | string
    name?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    screen_name?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    location?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    description?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    url?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    entities?: JsonNullableWithAggregatesFilter<"FollowerFollowingData">
    protected?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    followers_count?: IntNullableWithAggregatesFilter<"FollowerFollowingData"> | number | null
    fast_followers_count?: IntNullableWithAggregatesFilter<"FollowerFollowingData"> | number | null
    normal_followers_count?: IntNullableWithAggregatesFilter<"FollowerFollowingData"> | number | null
    friends_count?: IntNullableWithAggregatesFilter<"FollowerFollowingData"> | number | null
    listed_count?: IntNullableWithAggregatesFilter<"FollowerFollowingData"> | number | null
    created_at?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    favourites_count?: IntNullableWithAggregatesFilter<"FollowerFollowingData"> | number | null
    utc_offset?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    time_zone?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    geo_enabled?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    verified?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    statuses_count?: IntNullableWithAggregatesFilter<"FollowerFollowingData"> | number | null
    media_count?: IntNullableWithAggregatesFilter<"FollowerFollowingData"> | number | null
    lang?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    contributors_enabled?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    is_translator?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    is_translation_enabled?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    profile_background_color?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_background_image_url?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_background_image_url_https?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_background_tile?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    profile_image_url?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_image_url_https?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_banner_url?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_link_color?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_sidebar_border_color?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_sidebar_fill_color?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_text_color?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    profile_use_background_image?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    has_extended_profile?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    default_profile?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    default_profile_image?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    pinned_tweet_ids?: JsonNullableWithAggregatesFilter<"FollowerFollowingData">
    pinned_tweet_ids_str?: StringNullableListFilter<"FollowerFollowingData">
    has_custom_timelines?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    can_media_tag?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    followed_by?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    following?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    live_following?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    follow_request_sent?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    notifications?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    muting?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    blocking?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    blocked_by?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    advertiser_account_type?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    advertiser_account_service_levels?: StringNullableListFilter<"FollowerFollowingData">
    analytics_type?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    business_profile_state?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    translator_type?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    withheld_in_countries?: StringNullableListFilter<"FollowerFollowingData">
    require_some_consent?: BoolNullableWithAggregatesFilter<"FollowerFollowingData"> | boolean | null
    type?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    target_username?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
    email?: StringNullableWithAggregatesFilter<"FollowerFollowingData"> | string | null
  }

  export type UserProfileCreateInput = {
    id?: string
    default_profile: boolean
    default_profile_image: boolean
    description?: string | null
    entities?: XOR<EntitiesProfileNullableCreateEnvelopeInput, EntitiesProfileCreateInput> | null
    fast_followers_count?: number | null
    favourites_count?: number | null
    followers_count?: number | null
    friends_count?: number | null
    has_custom_timelines?: boolean | null
    is_translator?: boolean | null
    listed_count?: number | null
    media_count?: number | null
    normal_followers_count?: number | null
    pinned_tweet_ids_str?: UserProfileCreatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: boolean | null
    profile_banner_url?: string | null
    profile_interstitial_type?: string | null
    statuses_count?: number | null
    translator_type?: string | null
    withheld_in_countries?: UserProfileCreatewithheld_in_countriesInput | string[]
    id_str: string
    profile_url: string
    updated_time: Date | string
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    default_profile: boolean
    default_profile_image: boolean
    description?: string | null
    entities?: XOR<EntitiesProfileNullableCreateEnvelopeInput, EntitiesProfileCreateInput> | null
    fast_followers_count?: number | null
    favourites_count?: number | null
    followers_count?: number | null
    friends_count?: number | null
    has_custom_timelines?: boolean | null
    is_translator?: boolean | null
    listed_count?: number | null
    media_count?: number | null
    normal_followers_count?: number | null
    pinned_tweet_ids_str?: UserProfileCreatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: boolean | null
    profile_banner_url?: string | null
    profile_interstitial_type?: string | null
    statuses_count?: number | null
    translator_type?: string | null
    withheld_in_countries?: UserProfileCreatewithheld_in_countriesInput | string[]
    id_str: string
    profile_url: string
    updated_time: Date | string
  }

  export type UserProfileUpdateInput = {
    default_profile?: BoolFieldUpdateOperationsInput | boolean
    default_profile_image?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entities?: XOR<EntitiesProfileNullableUpdateEnvelopeInput, EntitiesProfileCreateInput> | null
    fast_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    favourites_count?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    friends_count?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_timelines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    listed_count?: NullableIntFieldUpdateOperationsInput | number | null
    media_count?: NullableIntFieldUpdateOperationsInput | number | null
    normal_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    pinned_tweet_ids_str?: UserProfileUpdatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_interstitial_type?: NullableStringFieldUpdateOperationsInput | string | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: UserProfileUpdatewithheld_in_countriesInput | string[]
    id_str?: StringFieldUpdateOperationsInput | string
    profile_url?: StringFieldUpdateOperationsInput | string
    updated_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateInput = {
    default_profile?: BoolFieldUpdateOperationsInput | boolean
    default_profile_image?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entities?: XOR<EntitiesProfileNullableUpdateEnvelopeInput, EntitiesProfileCreateInput> | null
    fast_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    favourites_count?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    friends_count?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_timelines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    listed_count?: NullableIntFieldUpdateOperationsInput | number | null
    media_count?: NullableIntFieldUpdateOperationsInput | number | null
    normal_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    pinned_tweet_ids_str?: UserProfileUpdatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_interstitial_type?: NullableStringFieldUpdateOperationsInput | string | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: UserProfileUpdatewithheld_in_countriesInput | string[]
    id_str?: StringFieldUpdateOperationsInput | string
    profile_url?: StringFieldUpdateOperationsInput | string
    updated_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    default_profile: boolean
    default_profile_image: boolean
    description?: string | null
    entities?: XOR<EntitiesProfileNullableCreateEnvelopeInput, EntitiesProfileCreateInput> | null
    fast_followers_count?: number | null
    favourites_count?: number | null
    followers_count?: number | null
    friends_count?: number | null
    has_custom_timelines?: boolean | null
    is_translator?: boolean | null
    listed_count?: number | null
    media_count?: number | null
    normal_followers_count?: number | null
    pinned_tweet_ids_str?: UserProfileCreatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: boolean | null
    profile_banner_url?: string | null
    profile_interstitial_type?: string | null
    statuses_count?: number | null
    translator_type?: string | null
    withheld_in_countries?: UserProfileCreatewithheld_in_countriesInput | string[]
    id_str: string
    profile_url: string
    updated_time: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    default_profile?: BoolFieldUpdateOperationsInput | boolean
    default_profile_image?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entities?: XOR<EntitiesProfileNullableUpdateEnvelopeInput, EntitiesProfileCreateInput> | null
    fast_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    favourites_count?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    friends_count?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_timelines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    listed_count?: NullableIntFieldUpdateOperationsInput | number | null
    media_count?: NullableIntFieldUpdateOperationsInput | number | null
    normal_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    pinned_tweet_ids_str?: UserProfileUpdatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_interstitial_type?: NullableStringFieldUpdateOperationsInput | string | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: UserProfileUpdatewithheld_in_countriesInput | string[]
    id_str?: StringFieldUpdateOperationsInput | string
    profile_url?: StringFieldUpdateOperationsInput | string
    updated_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    default_profile?: BoolFieldUpdateOperationsInput | boolean
    default_profile_image?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entities?: XOR<EntitiesProfileNullableUpdateEnvelopeInput, EntitiesProfileCreateInput> | null
    fast_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    favourites_count?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    friends_count?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_timelines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    listed_count?: NullableIntFieldUpdateOperationsInput | number | null
    media_count?: NullableIntFieldUpdateOperationsInput | number | null
    normal_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    pinned_tweet_ids_str?: UserProfileUpdatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_interstitial_type?: NullableStringFieldUpdateOperationsInput | string | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: UserProfileUpdatewithheld_in_countriesInput | string[]
    id_str?: StringFieldUpdateOperationsInput | string
    profile_url?: StringFieldUpdateOperationsInput | string
    updated_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetsDataCreateInput = {
    id?: string
    id_str: string
    bookmark_count?: number | null
    bookmarked?: boolean | null
    conversation_id_str?: string | null
    created_at?: string | null
    display_text_range?: TweetsDataCreatedisplay_text_rangeInput | number[]
    entities?: InputJsonValue | null
    favorite_count?: number | null
    favorited?: boolean | null
    full_text?: string | null
    is_quote_status?: boolean | null
    lang?: string | null
    quote_count?: number | null
    reply_count?: number | null
    retweet_count?: number | null
    retweeted?: boolean | null
    user?: XOR<TweetUserNullableCreateEnvelopeInput, TweetUserCreateInput> | null
    user_id_str?: string | null
    updated_time: Date | string
  }

  export type TweetsDataUncheckedCreateInput = {
    id?: string
    id_str: string
    bookmark_count?: number | null
    bookmarked?: boolean | null
    conversation_id_str?: string | null
    created_at?: string | null
    display_text_range?: TweetsDataCreatedisplay_text_rangeInput | number[]
    entities?: InputJsonValue | null
    favorite_count?: number | null
    favorited?: boolean | null
    full_text?: string | null
    is_quote_status?: boolean | null
    lang?: string | null
    quote_count?: number | null
    reply_count?: number | null
    retweet_count?: number | null
    retweeted?: boolean | null
    user?: XOR<TweetUserNullableCreateEnvelopeInput, TweetUserCreateInput> | null
    user_id_str?: string | null
    updated_time: Date | string
  }

  export type TweetsDataUpdateInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    bookmark_count?: NullableIntFieldUpdateOperationsInput | number | null
    bookmarked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversation_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    display_text_range?: TweetsDataUpdatedisplay_text_rangeInput | number[]
    entities?: InputJsonValue | InputJsonValue | null
    favorite_count?: NullableIntFieldUpdateOperationsInput | number | null
    favorited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_quote_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    quote_count?: NullableIntFieldUpdateOperationsInput | number | null
    reply_count?: NullableIntFieldUpdateOperationsInput | number | null
    retweet_count?: NullableIntFieldUpdateOperationsInput | number | null
    retweeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: XOR<TweetUserNullableUpdateEnvelopeInput, TweetUserCreateInput> | null
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    updated_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetsDataUncheckedUpdateInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    bookmark_count?: NullableIntFieldUpdateOperationsInput | number | null
    bookmarked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversation_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    display_text_range?: TweetsDataUpdatedisplay_text_rangeInput | number[]
    entities?: InputJsonValue | InputJsonValue | null
    favorite_count?: NullableIntFieldUpdateOperationsInput | number | null
    favorited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_quote_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    quote_count?: NullableIntFieldUpdateOperationsInput | number | null
    reply_count?: NullableIntFieldUpdateOperationsInput | number | null
    retweet_count?: NullableIntFieldUpdateOperationsInput | number | null
    retweeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: XOR<TweetUserNullableUpdateEnvelopeInput, TweetUserCreateInput> | null
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    updated_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetsDataCreateManyInput = {
    id?: string
    id_str: string
    bookmark_count?: number | null
    bookmarked?: boolean | null
    conversation_id_str?: string | null
    created_at?: string | null
    display_text_range?: TweetsDataCreatedisplay_text_rangeInput | number[]
    entities?: InputJsonValue | null
    favorite_count?: number | null
    favorited?: boolean | null
    full_text?: string | null
    is_quote_status?: boolean | null
    lang?: string | null
    quote_count?: number | null
    reply_count?: number | null
    retweet_count?: number | null
    retweeted?: boolean | null
    user?: XOR<TweetUserNullableCreateEnvelopeInput, TweetUserCreateInput> | null
    user_id_str?: string | null
    updated_time: Date | string
  }

  export type TweetsDataUpdateManyMutationInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    bookmark_count?: NullableIntFieldUpdateOperationsInput | number | null
    bookmarked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversation_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    display_text_range?: TweetsDataUpdatedisplay_text_rangeInput | number[]
    entities?: InputJsonValue | InputJsonValue | null
    favorite_count?: NullableIntFieldUpdateOperationsInput | number | null
    favorited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_quote_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    quote_count?: NullableIntFieldUpdateOperationsInput | number | null
    reply_count?: NullableIntFieldUpdateOperationsInput | number | null
    retweet_count?: NullableIntFieldUpdateOperationsInput | number | null
    retweeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: XOR<TweetUserNullableUpdateEnvelopeInput, TweetUserCreateInput> | null
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    updated_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetsDataUncheckedUpdateManyInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    bookmark_count?: NullableIntFieldUpdateOperationsInput | number | null
    bookmarked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversation_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    display_text_range?: TweetsDataUpdatedisplay_text_rangeInput | number[]
    entities?: InputJsonValue | InputJsonValue | null
    favorite_count?: NullableIntFieldUpdateOperationsInput | number | null
    favorited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    full_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_quote_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    quote_count?: NullableIntFieldUpdateOperationsInput | number | null
    reply_count?: NullableIntFieldUpdateOperationsInput | number | null
    retweet_count?: NullableIntFieldUpdateOperationsInput | number | null
    retweeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: XOR<TweetUserNullableUpdateEnvelopeInput, TweetUserCreateInput> | null
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    updated_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerFollowingDataCreateInput = {
    id?: string
    id_str: string
    name?: string | null
    screen_name?: string | null
    location?: string | null
    description?: string | null
    url?: string | null
    entities?: InputJsonValue | null
    protected?: boolean | null
    followers_count?: number | null
    fast_followers_count?: number | null
    normal_followers_count?: number | null
    friends_count?: number | null
    listed_count?: number | null
    created_at?: string | null
    favourites_count?: number | null
    utc_offset?: string | null
    time_zone?: string | null
    geo_enabled?: boolean | null
    verified?: boolean | null
    statuses_count?: number | null
    media_count?: number | null
    lang?: string | null
    status?: XOR<TweetStatusNullableCreateEnvelopeInput, TweetStatusCreateInput> | null
    contributors_enabled?: boolean | null
    is_translator?: boolean | null
    is_translation_enabled?: boolean | null
    profile_background_color?: string | null
    profile_background_image_url?: string | null
    profile_background_image_url_https?: string | null
    profile_background_tile?: boolean | null
    profile_image_url?: string | null
    profile_image_url_https?: string | null
    profile_banner_url?: string | null
    profile_link_color?: string | null
    profile_sidebar_border_color?: string | null
    profile_sidebar_fill_color?: string | null
    profile_text_color?: string | null
    profile_use_background_image?: boolean | null
    has_extended_profile?: boolean | null
    default_profile?: boolean | null
    default_profile_image?: boolean | null
    pinned_tweet_ids?: InputJsonValue | null
    pinned_tweet_ids_str?: FollowerFollowingDataCreatepinned_tweet_ids_strInput | string[]
    has_custom_timelines?: boolean | null
    can_media_tag?: boolean | null
    followed_by?: boolean | null
    following?: boolean | null
    live_following?: boolean | null
    follow_request_sent?: boolean | null
    notifications?: boolean | null
    muting?: boolean | null
    blocking?: boolean | null
    blocked_by?: boolean | null
    advertiser_account_type?: string | null
    advertiser_account_service_levels?: FollowerFollowingDataCreateadvertiser_account_service_levelsInput | string[]
    analytics_type?: string | null
    business_profile_state?: string | null
    translator_type?: string | null
    withheld_in_countries?: FollowerFollowingDataCreatewithheld_in_countriesInput | string[]
    require_some_consent?: boolean | null
    type?: string | null
    target_username?: string | null
    email?: string | null
  }

  export type FollowerFollowingDataUncheckedCreateInput = {
    id?: string
    id_str: string
    name?: string | null
    screen_name?: string | null
    location?: string | null
    description?: string | null
    url?: string | null
    entities?: InputJsonValue | null
    protected?: boolean | null
    followers_count?: number | null
    fast_followers_count?: number | null
    normal_followers_count?: number | null
    friends_count?: number | null
    listed_count?: number | null
    created_at?: string | null
    favourites_count?: number | null
    utc_offset?: string | null
    time_zone?: string | null
    geo_enabled?: boolean | null
    verified?: boolean | null
    statuses_count?: number | null
    media_count?: number | null
    lang?: string | null
    status?: XOR<TweetStatusNullableCreateEnvelopeInput, TweetStatusCreateInput> | null
    contributors_enabled?: boolean | null
    is_translator?: boolean | null
    is_translation_enabled?: boolean | null
    profile_background_color?: string | null
    profile_background_image_url?: string | null
    profile_background_image_url_https?: string | null
    profile_background_tile?: boolean | null
    profile_image_url?: string | null
    profile_image_url_https?: string | null
    profile_banner_url?: string | null
    profile_link_color?: string | null
    profile_sidebar_border_color?: string | null
    profile_sidebar_fill_color?: string | null
    profile_text_color?: string | null
    profile_use_background_image?: boolean | null
    has_extended_profile?: boolean | null
    default_profile?: boolean | null
    default_profile_image?: boolean | null
    pinned_tweet_ids?: InputJsonValue | null
    pinned_tweet_ids_str?: FollowerFollowingDataCreatepinned_tweet_ids_strInput | string[]
    has_custom_timelines?: boolean | null
    can_media_tag?: boolean | null
    followed_by?: boolean | null
    following?: boolean | null
    live_following?: boolean | null
    follow_request_sent?: boolean | null
    notifications?: boolean | null
    muting?: boolean | null
    blocking?: boolean | null
    blocked_by?: boolean | null
    advertiser_account_type?: string | null
    advertiser_account_service_levels?: FollowerFollowingDataCreateadvertiser_account_service_levelsInput | string[]
    analytics_type?: string | null
    business_profile_state?: string | null
    translator_type?: string | null
    withheld_in_countries?: FollowerFollowingDataCreatewithheld_in_countriesInput | string[]
    require_some_consent?: boolean | null
    type?: string | null
    target_username?: string | null
    email?: string | null
  }

  export type FollowerFollowingDataUpdateInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    entities?: InputJsonValue | InputJsonValue | null
    protected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    fast_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    normal_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    friends_count?: NullableIntFieldUpdateOperationsInput | number | null
    listed_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    favourites_count?: NullableIntFieldUpdateOperationsInput | number | null
    utc_offset?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    geo_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    media_count?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    status?: XOR<TweetStatusNullableUpdateEnvelopeInput, TweetStatusCreateInput> | null
    contributors_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translation_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_background_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_tile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_link_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_sidebar_border_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_sidebar_fill_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_text_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_use_background_image?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_extended_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_profile_image?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pinned_tweet_ids?: InputJsonValue | InputJsonValue | null
    pinned_tweet_ids_str?: FollowerFollowingDataUpdatepinned_tweet_ids_strInput | string[]
    has_custom_timelines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_media_tag?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followed_by?: NullableBoolFieldUpdateOperationsInput | boolean | null
    following?: NullableBoolFieldUpdateOperationsInput | boolean | null
    live_following?: NullableBoolFieldUpdateOperationsInput | boolean | null
    follow_request_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notifications?: NullableBoolFieldUpdateOperationsInput | boolean | null
    muting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked_by?: NullableBoolFieldUpdateOperationsInput | boolean | null
    advertiser_account_type?: NullableStringFieldUpdateOperationsInput | string | null
    advertiser_account_service_levels?: FollowerFollowingDataUpdateadvertiser_account_service_levelsInput | string[]
    analytics_type?: NullableStringFieldUpdateOperationsInput | string | null
    business_profile_state?: NullableStringFieldUpdateOperationsInput | string | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: FollowerFollowingDataUpdatewithheld_in_countriesInput | string[]
    require_some_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    target_username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowerFollowingDataUncheckedUpdateInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    entities?: InputJsonValue | InputJsonValue | null
    protected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    fast_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    normal_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    friends_count?: NullableIntFieldUpdateOperationsInput | number | null
    listed_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    favourites_count?: NullableIntFieldUpdateOperationsInput | number | null
    utc_offset?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    geo_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    media_count?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    status?: XOR<TweetStatusNullableUpdateEnvelopeInput, TweetStatusCreateInput> | null
    contributors_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translation_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_background_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_tile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_link_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_sidebar_border_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_sidebar_fill_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_text_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_use_background_image?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_extended_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_profile_image?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pinned_tweet_ids?: InputJsonValue | InputJsonValue | null
    pinned_tweet_ids_str?: FollowerFollowingDataUpdatepinned_tweet_ids_strInput | string[]
    has_custom_timelines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_media_tag?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followed_by?: NullableBoolFieldUpdateOperationsInput | boolean | null
    following?: NullableBoolFieldUpdateOperationsInput | boolean | null
    live_following?: NullableBoolFieldUpdateOperationsInput | boolean | null
    follow_request_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notifications?: NullableBoolFieldUpdateOperationsInput | boolean | null
    muting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked_by?: NullableBoolFieldUpdateOperationsInput | boolean | null
    advertiser_account_type?: NullableStringFieldUpdateOperationsInput | string | null
    advertiser_account_service_levels?: FollowerFollowingDataUpdateadvertiser_account_service_levelsInput | string[]
    analytics_type?: NullableStringFieldUpdateOperationsInput | string | null
    business_profile_state?: NullableStringFieldUpdateOperationsInput | string | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: FollowerFollowingDataUpdatewithheld_in_countriesInput | string[]
    require_some_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    target_username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowerFollowingDataCreateManyInput = {
    id?: string
    id_str: string
    name?: string | null
    screen_name?: string | null
    location?: string | null
    description?: string | null
    url?: string | null
    entities?: InputJsonValue | null
    protected?: boolean | null
    followers_count?: number | null
    fast_followers_count?: number | null
    normal_followers_count?: number | null
    friends_count?: number | null
    listed_count?: number | null
    created_at?: string | null
    favourites_count?: number | null
    utc_offset?: string | null
    time_zone?: string | null
    geo_enabled?: boolean | null
    verified?: boolean | null
    statuses_count?: number | null
    media_count?: number | null
    lang?: string | null
    status?: XOR<TweetStatusNullableCreateEnvelopeInput, TweetStatusCreateInput> | null
    contributors_enabled?: boolean | null
    is_translator?: boolean | null
    is_translation_enabled?: boolean | null
    profile_background_color?: string | null
    profile_background_image_url?: string | null
    profile_background_image_url_https?: string | null
    profile_background_tile?: boolean | null
    profile_image_url?: string | null
    profile_image_url_https?: string | null
    profile_banner_url?: string | null
    profile_link_color?: string | null
    profile_sidebar_border_color?: string | null
    profile_sidebar_fill_color?: string | null
    profile_text_color?: string | null
    profile_use_background_image?: boolean | null
    has_extended_profile?: boolean | null
    default_profile?: boolean | null
    default_profile_image?: boolean | null
    pinned_tweet_ids?: InputJsonValue | null
    pinned_tweet_ids_str?: FollowerFollowingDataCreatepinned_tweet_ids_strInput | string[]
    has_custom_timelines?: boolean | null
    can_media_tag?: boolean | null
    followed_by?: boolean | null
    following?: boolean | null
    live_following?: boolean | null
    follow_request_sent?: boolean | null
    notifications?: boolean | null
    muting?: boolean | null
    blocking?: boolean | null
    blocked_by?: boolean | null
    advertiser_account_type?: string | null
    advertiser_account_service_levels?: FollowerFollowingDataCreateadvertiser_account_service_levelsInput | string[]
    analytics_type?: string | null
    business_profile_state?: string | null
    translator_type?: string | null
    withheld_in_countries?: FollowerFollowingDataCreatewithheld_in_countriesInput | string[]
    require_some_consent?: boolean | null
    type?: string | null
    target_username?: string | null
    email?: string | null
  }

  export type FollowerFollowingDataUpdateManyMutationInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    entities?: InputJsonValue | InputJsonValue | null
    protected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    fast_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    normal_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    friends_count?: NullableIntFieldUpdateOperationsInput | number | null
    listed_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    favourites_count?: NullableIntFieldUpdateOperationsInput | number | null
    utc_offset?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    geo_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    media_count?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    status?: XOR<TweetStatusNullableUpdateEnvelopeInput, TweetStatusCreateInput> | null
    contributors_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translation_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_background_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_tile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_link_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_sidebar_border_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_sidebar_fill_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_text_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_use_background_image?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_extended_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_profile_image?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pinned_tweet_ids?: InputJsonValue | InputJsonValue | null
    pinned_tweet_ids_str?: FollowerFollowingDataUpdatepinned_tweet_ids_strInput | string[]
    has_custom_timelines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_media_tag?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followed_by?: NullableBoolFieldUpdateOperationsInput | boolean | null
    following?: NullableBoolFieldUpdateOperationsInput | boolean | null
    live_following?: NullableBoolFieldUpdateOperationsInput | boolean | null
    follow_request_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notifications?: NullableBoolFieldUpdateOperationsInput | boolean | null
    muting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked_by?: NullableBoolFieldUpdateOperationsInput | boolean | null
    advertiser_account_type?: NullableStringFieldUpdateOperationsInput | string | null
    advertiser_account_service_levels?: FollowerFollowingDataUpdateadvertiser_account_service_levelsInput | string[]
    analytics_type?: NullableStringFieldUpdateOperationsInput | string | null
    business_profile_state?: NullableStringFieldUpdateOperationsInput | string | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: FollowerFollowingDataUpdatewithheld_in_countriesInput | string[]
    require_some_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    target_username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowerFollowingDataUncheckedUpdateManyInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    entities?: InputJsonValue | InputJsonValue | null
    protected?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    fast_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    normal_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    friends_count?: NullableIntFieldUpdateOperationsInput | number | null
    listed_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    favourites_count?: NullableIntFieldUpdateOperationsInput | number | null
    utc_offset?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    geo_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    media_count?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    status?: XOR<TweetStatusNullableUpdateEnvelopeInput, TweetStatusCreateInput> | null
    contributors_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translation_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_background_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    profile_background_tile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_link_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_sidebar_border_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_sidebar_fill_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_text_color?: NullableStringFieldUpdateOperationsInput | string | null
    profile_use_background_image?: NullableBoolFieldUpdateOperationsInput | boolean | null
    has_extended_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_profile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    default_profile_image?: NullableBoolFieldUpdateOperationsInput | boolean | null
    pinned_tweet_ids?: InputJsonValue | InputJsonValue | null
    pinned_tweet_ids_str?: FollowerFollowingDataUpdatepinned_tweet_ids_strInput | string[]
    has_custom_timelines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    can_media_tag?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followed_by?: NullableBoolFieldUpdateOperationsInput | boolean | null
    following?: NullableBoolFieldUpdateOperationsInput | boolean | null
    live_following?: NullableBoolFieldUpdateOperationsInput | boolean | null
    follow_request_sent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notifications?: NullableBoolFieldUpdateOperationsInput | boolean | null
    muting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocking?: NullableBoolFieldUpdateOperationsInput | boolean | null
    blocked_by?: NullableBoolFieldUpdateOperationsInput | boolean | null
    advertiser_account_type?: NullableStringFieldUpdateOperationsInput | string | null
    advertiser_account_service_levels?: FollowerFollowingDataUpdateadvertiser_account_service_levelsInput | string[]
    analytics_type?: NullableStringFieldUpdateOperationsInput | string | null
    business_profile_state?: NullableStringFieldUpdateOperationsInput | string | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: FollowerFollowingDataUpdatewithheld_in_countriesInput | string[]
    require_some_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    target_username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
  }

  export type EntitiesProfileNullableCompositeFilter = {
    equals?: EntitiesProfileObjectEqualityInput | null
    is?: EntitiesProfileWhereInput | null
    isNot?: EntitiesProfileWhereInput | null
    isSet?: boolean
  }

  export type EntitiesProfileObjectEqualityInput = {
    description?: DescriptionProfileObjectEqualityInput | null
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
    isSet?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
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

  export type EntitiesProfileOrderByInput = {
    description?: DescriptionProfileOrderByInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    description?: SortOrder
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    has_custom_timelines?: SortOrder
    is_translator?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    pinned_tweet_ids_str?: SortOrder
    possibly_sensitive?: SortOrder
    profile_banner_url?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    withheld_in_countries?: SortOrder
    id_str?: SortOrder
    profile_url?: SortOrder
    updated_time?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    statuses_count?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    description?: SortOrder
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    has_custom_timelines?: SortOrder
    is_translator?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    possibly_sensitive?: SortOrder
    profile_banner_url?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    id_str?: SortOrder
    profile_url?: SortOrder
    updated_time?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    description?: SortOrder
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    has_custom_timelines?: SortOrder
    is_translator?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    possibly_sensitive?: SortOrder
    profile_banner_url?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    id_str?: SortOrder
    profile_url?: SortOrder
    updated_time?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    statuses_count?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type TweetUserNullableCompositeFilter = {
    equals?: TweetUserObjectEqualityInput | null
    is?: TweetUserWhereInput | null
    isNot?: TweetUserWhereInput | null
    isSet?: boolean
  }

  export type TweetUserObjectEqualityInput = {
    default_profile: boolean
    default_profile_image: boolean
    description?: string | null
    entities?: EntitiesProfileObjectEqualityInput | null
    fast_followers_count?: number | null
    favourites_count?: number | null
    followers_count?: number | null
    friends_count?: number | null
    has_custom_timelines?: boolean | null
    is_translator?: boolean | null
    listed_count?: number | null
    media_count?: number | null
    normal_followers_count?: number | null
    pinned_tweet_ids_str?: string[]
    possibly_sensitive?: boolean | null
    profile_banner_url?: string | null
    profile_interstitial_type?: string | null
    statuses_count?: number | null
    translator_type?: string | null
    withheld_in_countries?: string[]
  }

  export type TweetUserOrderByInput = {
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    description?: SortOrder
    entities?: EntitiesProfileOrderByInput
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    has_custom_timelines?: SortOrder
    is_translator?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    pinned_tweet_ids_str?: SortOrder
    possibly_sensitive?: SortOrder
    profile_banner_url?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    withheld_in_countries?: SortOrder
  }

  export type TweetsDataCountOrderByAggregateInput = {
    id?: SortOrder
    id_str?: SortOrder
    bookmark_count?: SortOrder
    bookmarked?: SortOrder
    conversation_id_str?: SortOrder
    created_at?: SortOrder
    display_text_range?: SortOrder
    entities?: SortOrder
    favorite_count?: SortOrder
    favorited?: SortOrder
    full_text?: SortOrder
    is_quote_status?: SortOrder
    lang?: SortOrder
    quote_count?: SortOrder
    reply_count?: SortOrder
    retweet_count?: SortOrder
    retweeted?: SortOrder
    user_id_str?: SortOrder
    updated_time?: SortOrder
  }

  export type TweetsDataAvgOrderByAggregateInput = {
    bookmark_count?: SortOrder
    display_text_range?: SortOrder
    favorite_count?: SortOrder
    quote_count?: SortOrder
    reply_count?: SortOrder
    retweet_count?: SortOrder
  }

  export type TweetsDataMaxOrderByAggregateInput = {
    id?: SortOrder
    id_str?: SortOrder
    bookmark_count?: SortOrder
    bookmarked?: SortOrder
    conversation_id_str?: SortOrder
    created_at?: SortOrder
    favorite_count?: SortOrder
    favorited?: SortOrder
    full_text?: SortOrder
    is_quote_status?: SortOrder
    lang?: SortOrder
    quote_count?: SortOrder
    reply_count?: SortOrder
    retweet_count?: SortOrder
    retweeted?: SortOrder
    user_id_str?: SortOrder
    updated_time?: SortOrder
  }

  export type TweetsDataMinOrderByAggregateInput = {
    id?: SortOrder
    id_str?: SortOrder
    bookmark_count?: SortOrder
    bookmarked?: SortOrder
    conversation_id_str?: SortOrder
    created_at?: SortOrder
    favorite_count?: SortOrder
    favorited?: SortOrder
    full_text?: SortOrder
    is_quote_status?: SortOrder
    lang?: SortOrder
    quote_count?: SortOrder
    reply_count?: SortOrder
    retweet_count?: SortOrder
    retweeted?: SortOrder
    user_id_str?: SortOrder
    updated_time?: SortOrder
  }

  export type TweetsDataSumOrderByAggregateInput = {
    bookmark_count?: SortOrder
    display_text_range?: SortOrder
    favorite_count?: SortOrder
    quote_count?: SortOrder
    reply_count?: SortOrder
    retweet_count?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type TweetStatusNullableCompositeFilter = {
    equals?: TweetStatusObjectEqualityInput | null
    is?: TweetStatusWhereInput | null
    isNot?: TweetStatusWhereInput | null
    isSet?: boolean
  }

  export type TweetStatusObjectEqualityInput = {
    created_at?: string | null
    id_str?: string | null
    text?: string | null
    truncated?: boolean | null
    entities?: InputJsonValue | null
    source?: string | null
    in_reply_to_status_id_str?: string | null
    in_reply_to_user_id_str?: string | null
    in_reply_to_screen_name?: string | null
    geo?: InputJsonValue | null
    coordinates?: InputJsonValue | null
    place?: InputJsonValue | null
    contributors?: InputJsonValue | null
    is_quote_status?: boolean | null
    retweet_count?: number | null
    favorite_count?: number | null
    favorited?: boolean | null
    retweeted?: boolean | null
    lang?: string | null
    supplemental_language?: string | null
    self_thread?: InputJsonValue | null
  }

  export type TweetStatusOrderByInput = {
    created_at?: SortOrder
    id_str?: SortOrder
    text?: SortOrder
    truncated?: SortOrder
    entities?: SortOrder
    source?: SortOrder
    in_reply_to_status_id_str?: SortOrder
    in_reply_to_user_id_str?: SortOrder
    in_reply_to_screen_name?: SortOrder
    geo?: SortOrder
    coordinates?: SortOrder
    place?: SortOrder
    contributors?: SortOrder
    is_quote_status?: SortOrder
    retweet_count?: SortOrder
    favorite_count?: SortOrder
    favorited?: SortOrder
    retweeted?: SortOrder
    lang?: SortOrder
    supplemental_language?: SortOrder
    self_thread?: SortOrder
  }

  export type FollowerFollowingDataCountOrderByAggregateInput = {
    id?: SortOrder
    id_str?: SortOrder
    name?: SortOrder
    screen_name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    url?: SortOrder
    entities?: SortOrder
    protected?: SortOrder
    followers_count?: SortOrder
    fast_followers_count?: SortOrder
    normal_followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    created_at?: SortOrder
    favourites_count?: SortOrder
    utc_offset?: SortOrder
    time_zone?: SortOrder
    geo_enabled?: SortOrder
    verified?: SortOrder
    statuses_count?: SortOrder
    media_count?: SortOrder
    lang?: SortOrder
    contributors_enabled?: SortOrder
    is_translator?: SortOrder
    is_translation_enabled?: SortOrder
    profile_background_color?: SortOrder
    profile_background_image_url?: SortOrder
    profile_background_image_url_https?: SortOrder
    profile_background_tile?: SortOrder
    profile_image_url?: SortOrder
    profile_image_url_https?: SortOrder
    profile_banner_url?: SortOrder
    profile_link_color?: SortOrder
    profile_sidebar_border_color?: SortOrder
    profile_sidebar_fill_color?: SortOrder
    profile_text_color?: SortOrder
    profile_use_background_image?: SortOrder
    has_extended_profile?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    pinned_tweet_ids?: SortOrder
    pinned_tweet_ids_str?: SortOrder
    has_custom_timelines?: SortOrder
    can_media_tag?: SortOrder
    followed_by?: SortOrder
    following?: SortOrder
    live_following?: SortOrder
    follow_request_sent?: SortOrder
    notifications?: SortOrder
    muting?: SortOrder
    blocking?: SortOrder
    blocked_by?: SortOrder
    advertiser_account_type?: SortOrder
    advertiser_account_service_levels?: SortOrder
    analytics_type?: SortOrder
    business_profile_state?: SortOrder
    translator_type?: SortOrder
    withheld_in_countries?: SortOrder
    require_some_consent?: SortOrder
    type?: SortOrder
    target_username?: SortOrder
    email?: SortOrder
  }

  export type FollowerFollowingDataAvgOrderByAggregateInput = {
    followers_count?: SortOrder
    fast_followers_count?: SortOrder
    normal_followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    favourites_count?: SortOrder
    statuses_count?: SortOrder
    media_count?: SortOrder
  }

  export type FollowerFollowingDataMaxOrderByAggregateInput = {
    id?: SortOrder
    id_str?: SortOrder
    name?: SortOrder
    screen_name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    url?: SortOrder
    protected?: SortOrder
    followers_count?: SortOrder
    fast_followers_count?: SortOrder
    normal_followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    created_at?: SortOrder
    favourites_count?: SortOrder
    utc_offset?: SortOrder
    time_zone?: SortOrder
    geo_enabled?: SortOrder
    verified?: SortOrder
    statuses_count?: SortOrder
    media_count?: SortOrder
    lang?: SortOrder
    contributors_enabled?: SortOrder
    is_translator?: SortOrder
    is_translation_enabled?: SortOrder
    profile_background_color?: SortOrder
    profile_background_image_url?: SortOrder
    profile_background_image_url_https?: SortOrder
    profile_background_tile?: SortOrder
    profile_image_url?: SortOrder
    profile_image_url_https?: SortOrder
    profile_banner_url?: SortOrder
    profile_link_color?: SortOrder
    profile_sidebar_border_color?: SortOrder
    profile_sidebar_fill_color?: SortOrder
    profile_text_color?: SortOrder
    profile_use_background_image?: SortOrder
    has_extended_profile?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    has_custom_timelines?: SortOrder
    can_media_tag?: SortOrder
    followed_by?: SortOrder
    following?: SortOrder
    live_following?: SortOrder
    follow_request_sent?: SortOrder
    notifications?: SortOrder
    muting?: SortOrder
    blocking?: SortOrder
    blocked_by?: SortOrder
    advertiser_account_type?: SortOrder
    analytics_type?: SortOrder
    business_profile_state?: SortOrder
    translator_type?: SortOrder
    require_some_consent?: SortOrder
    type?: SortOrder
    target_username?: SortOrder
    email?: SortOrder
  }

  export type FollowerFollowingDataMinOrderByAggregateInput = {
    id?: SortOrder
    id_str?: SortOrder
    name?: SortOrder
    screen_name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    url?: SortOrder
    protected?: SortOrder
    followers_count?: SortOrder
    fast_followers_count?: SortOrder
    normal_followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    created_at?: SortOrder
    favourites_count?: SortOrder
    utc_offset?: SortOrder
    time_zone?: SortOrder
    geo_enabled?: SortOrder
    verified?: SortOrder
    statuses_count?: SortOrder
    media_count?: SortOrder
    lang?: SortOrder
    contributors_enabled?: SortOrder
    is_translator?: SortOrder
    is_translation_enabled?: SortOrder
    profile_background_color?: SortOrder
    profile_background_image_url?: SortOrder
    profile_background_image_url_https?: SortOrder
    profile_background_tile?: SortOrder
    profile_image_url?: SortOrder
    profile_image_url_https?: SortOrder
    profile_banner_url?: SortOrder
    profile_link_color?: SortOrder
    profile_sidebar_border_color?: SortOrder
    profile_sidebar_fill_color?: SortOrder
    profile_text_color?: SortOrder
    profile_use_background_image?: SortOrder
    has_extended_profile?: SortOrder
    default_profile?: SortOrder
    default_profile_image?: SortOrder
    has_custom_timelines?: SortOrder
    can_media_tag?: SortOrder
    followed_by?: SortOrder
    following?: SortOrder
    live_following?: SortOrder
    follow_request_sent?: SortOrder
    notifications?: SortOrder
    muting?: SortOrder
    blocking?: SortOrder
    blocked_by?: SortOrder
    advertiser_account_type?: SortOrder
    analytics_type?: SortOrder
    business_profile_state?: SortOrder
    translator_type?: SortOrder
    require_some_consent?: SortOrder
    type?: SortOrder
    target_username?: SortOrder
    email?: SortOrder
  }

  export type FollowerFollowingDataSumOrderByAggregateInput = {
    followers_count?: SortOrder
    fast_followers_count?: SortOrder
    normal_followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    favourites_count?: SortOrder
    statuses_count?: SortOrder
    media_count?: SortOrder
  }

  export type EntitiesProfileNullableCreateEnvelopeInput = {
    set?: EntitiesProfileCreateInput | null
  }

  export type EntitiesProfileCreateInput = {
    description?: DescriptionProfileCreateInput | null
  }

  export type UserProfileCreatepinned_tweet_ids_strInput = {
    set: string[]
  }

  export type UserProfileCreatewithheld_in_countriesInput = {
    set: string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EntitiesProfileNullableUpdateEnvelopeInput = {
    set?: EntitiesProfileCreateInput | null
    upsert?: EntitiesProfileUpsertInput
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type UserProfileUpdatepinned_tweet_ids_strInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserProfileUpdatewithheld_in_countriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TweetsDataCreatedisplay_text_rangeInput = {
    set: number[]
  }

  export type TweetUserNullableCreateEnvelopeInput = {
    set?: TweetUserCreateInput | null
  }

  export type TweetUserCreateInput = {
    default_profile: boolean
    default_profile_image: boolean
    description?: string | null
    entities?: EntitiesProfileCreateInput | null
    fast_followers_count?: number | null
    favourites_count?: number | null
    followers_count?: number | null
    friends_count?: number | null
    has_custom_timelines?: boolean | null
    is_translator?: boolean | null
    listed_count?: number | null
    media_count?: number | null
    normal_followers_count?: number | null
    pinned_tweet_ids_str?: TweetUserCreatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: boolean | null
    profile_banner_url?: string | null
    profile_interstitial_type?: string | null
    statuses_count?: number | null
    translator_type?: string | null
    withheld_in_countries?: TweetUserCreatewithheld_in_countriesInput | string[]
  }

  export type TweetsDataUpdatedisplay_text_rangeInput = {
    set?: number[]
    push?: number | number[]
  }

  export type TweetUserNullableUpdateEnvelopeInput = {
    set?: TweetUserCreateInput | null
    upsert?: TweetUserUpsertInput
    unset?: boolean
  }

  export type TweetStatusNullableCreateEnvelopeInput = {
    set?: TweetStatusCreateInput | null
  }

  export type TweetStatusCreateInput = {
    created_at?: string | null
    id_str?: string | null
    text?: string | null
    truncated?: boolean | null
    entities?: InputJsonValue | null
    source?: string | null
    in_reply_to_status_id_str?: string | null
    in_reply_to_user_id_str?: string | null
    in_reply_to_screen_name?: string | null
    geo?: InputJsonValue | null
    coordinates?: InputJsonValue | null
    place?: InputJsonValue | null
    contributors?: InputJsonValue | null
    is_quote_status?: boolean | null
    retweet_count?: number | null
    favorite_count?: number | null
    favorited?: boolean | null
    retweeted?: boolean | null
    lang?: string | null
    supplemental_language?: string | null
    self_thread?: InputJsonValue | null
  }

  export type FollowerFollowingDataCreatepinned_tweet_ids_strInput = {
    set: string[]
  }

  export type FollowerFollowingDataCreateadvertiser_account_service_levelsInput = {
    set: string[]
  }

  export type FollowerFollowingDataCreatewithheld_in_countriesInput = {
    set: string[]
  }

  export type TweetStatusNullableUpdateEnvelopeInput = {
    set?: TweetStatusCreateInput | null
    upsert?: TweetStatusUpsertInput
    unset?: boolean
  }

  export type FollowerFollowingDataUpdatepinned_tweet_ids_strInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FollowerFollowingDataUpdateadvertiser_account_service_levelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FollowerFollowingDataUpdatewithheld_in_countriesInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
  }

  export type EntitiesProfileWhereInput = {
    AND?: EntitiesProfileWhereInput | EntitiesProfileWhereInput[]
    OR?: EntitiesProfileWhereInput[]
    NOT?: EntitiesProfileWhereInput | EntitiesProfileWhereInput[]
    description?: XOR<DescriptionProfileNullableCompositeFilter, DescriptionProfileObjectEqualityInput> | null
  }

  export type DescriptionProfileObjectEqualityInput = {
    urls?: UrlEntityObjectEqualityInput[]
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
    isSet?: boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
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

  export type DescriptionProfileOrderByInput = {
    urls?: UrlEntityOrderByCompositeAggregateInput
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type TweetUserWhereInput = {
    AND?: TweetUserWhereInput | TweetUserWhereInput[]
    OR?: TweetUserWhereInput[]
    NOT?: TweetUserWhereInput | TweetUserWhereInput[]
    default_profile?: BoolFilter<"TweetUser"> | boolean
    default_profile_image?: BoolFilter<"TweetUser"> | boolean
    description?: StringNullableFilter<"TweetUser"> | string | null
    entities?: XOR<EntitiesProfileNullableCompositeFilter, EntitiesProfileObjectEqualityInput> | null
    fast_followers_count?: IntNullableFilter<"TweetUser"> | number | null
    favourites_count?: IntNullableFilter<"TweetUser"> | number | null
    followers_count?: IntNullableFilter<"TweetUser"> | number | null
    friends_count?: IntNullableFilter<"TweetUser"> | number | null
    has_custom_timelines?: BoolNullableFilter<"TweetUser"> | boolean | null
    is_translator?: BoolNullableFilter<"TweetUser"> | boolean | null
    listed_count?: IntNullableFilter<"TweetUser"> | number | null
    media_count?: IntNullableFilter<"TweetUser"> | number | null
    normal_followers_count?: IntNullableFilter<"TweetUser"> | number | null
    pinned_tweet_ids_str?: StringNullableListFilter<"TweetUser">
    possibly_sensitive?: BoolNullableFilter<"TweetUser"> | boolean | null
    profile_banner_url?: StringNullableFilter<"TweetUser"> | string | null
    profile_interstitial_type?: StringNullableFilter<"TweetUser"> | string | null
    statuses_count?: IntNullableFilter<"TweetUser"> | number | null
    translator_type?: StringNullableFilter<"TweetUser"> | string | null
    withheld_in_countries?: StringNullableListFilter<"TweetUser">
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type TweetStatusWhereInput = {
    AND?: TweetStatusWhereInput | TweetStatusWhereInput[]
    OR?: TweetStatusWhereInput[]
    NOT?: TweetStatusWhereInput | TweetStatusWhereInput[]
    created_at?: StringNullableFilter<"TweetStatus"> | string | null
    id_str?: StringNullableFilter<"TweetStatus"> | string | null
    text?: StringNullableFilter<"TweetStatus"> | string | null
    truncated?: BoolNullableFilter<"TweetStatus"> | boolean | null
    entities?: JsonNullableFilter<"TweetStatus">
    source?: StringNullableFilter<"TweetStatus"> | string | null
    in_reply_to_status_id_str?: StringNullableFilter<"TweetStatus"> | string | null
    in_reply_to_user_id_str?: StringNullableFilter<"TweetStatus"> | string | null
    in_reply_to_screen_name?: StringNullableFilter<"TweetStatus"> | string | null
    geo?: JsonNullableFilter<"TweetStatus">
    coordinates?: JsonNullableFilter<"TweetStatus">
    place?: JsonNullableFilter<"TweetStatus">
    contributors?: JsonNullableFilter<"TweetStatus">
    is_quote_status?: BoolNullableFilter<"TweetStatus"> | boolean | null
    retweet_count?: IntNullableFilter<"TweetStatus"> | number | null
    favorite_count?: IntNullableFilter<"TweetStatus"> | number | null
    favorited?: BoolNullableFilter<"TweetStatus"> | boolean | null
    retweeted?: BoolNullableFilter<"TweetStatus"> | boolean | null
    lang?: StringNullableFilter<"TweetStatus"> | string | null
    supplemental_language?: StringNullableFilter<"TweetStatus"> | string | null
    self_thread?: JsonNullableFilter<"TweetStatus">
  }

  export type DescriptionProfileCreateInput = {
    urls?: UrlEntityCreateInput | UrlEntityCreateInput[]
  }

  export type EntitiesProfileUpsertInput = {
    set: EntitiesProfileCreateInput | null
    update: EntitiesProfileUpdateInput
  }

  export type TweetUserCreatepinned_tweet_ids_strInput = {
    set: string[]
  }

  export type TweetUserCreatewithheld_in_countriesInput = {
    set: string[]
  }

  export type TweetUserUpsertInput = {
    set: TweetUserCreateInput | null
    update: TweetUserUpdateInput
  }

  export type TweetStatusUpsertInput = {
    set: TweetStatusCreateInput | null
    update: TweetStatusUpdateInput
  }

  export type DescriptionProfileNullableCompositeFilter = {
    equals?: DescriptionProfileObjectEqualityInput | null
    is?: DescriptionProfileWhereInput | null
    isNot?: DescriptionProfileWhereInput | null
    isSet?: boolean
  }

  export type UrlEntityObjectEqualityInput = {
    display_url?: string | null
    expanded_url?: string | null
    url?: string | null
    indices?: number[]
  }

  export type UrlEntityOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type UrlEntityCreateInput = {
    display_url?: string | null
    expanded_url?: string | null
    url?: string | null
    indices?: UrlEntityCreateindicesInput | number[]
  }

  export type EntitiesProfileUpdateInput = {
    description?: XOR<DescriptionProfileNullableUpdateEnvelopeInput, DescriptionProfileCreateInput> | null
  }

  export type TweetUserUpdateInput = {
    default_profile?: BoolFieldUpdateOperationsInput | boolean
    default_profile_image?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entities?: XOR<EntitiesProfileNullableUpdateEnvelopeInput, EntitiesProfileCreateInput> | null
    fast_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    favourites_count?: NullableIntFieldUpdateOperationsInput | number | null
    followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    friends_count?: NullableIntFieldUpdateOperationsInput | number | null
    has_custom_timelines?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_translator?: NullableBoolFieldUpdateOperationsInput | boolean | null
    listed_count?: NullableIntFieldUpdateOperationsInput | number | null
    media_count?: NullableIntFieldUpdateOperationsInput | number | null
    normal_followers_count?: NullableIntFieldUpdateOperationsInput | number | null
    pinned_tweet_ids_str?: TweetUserUpdatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_interstitial_type?: NullableStringFieldUpdateOperationsInput | string | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: TweetUserUpdatewithheld_in_countriesInput | string[]
  }

  export type TweetStatusUpdateInput = {
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    id_str?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    truncated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    entities?: InputJsonValue | InputJsonValue | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    in_reply_to_status_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    in_reply_to_user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    in_reply_to_screen_name?: NullableStringFieldUpdateOperationsInput | string | null
    geo?: InputJsonValue | InputJsonValue | null
    coordinates?: InputJsonValue | InputJsonValue | null
    place?: InputJsonValue | InputJsonValue | null
    contributors?: InputJsonValue | InputJsonValue | null
    is_quote_status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    retweet_count?: NullableIntFieldUpdateOperationsInput | number | null
    favorite_count?: NullableIntFieldUpdateOperationsInput | number | null
    favorited?: NullableBoolFieldUpdateOperationsInput | boolean | null
    retweeted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    supplemental_language?: NullableStringFieldUpdateOperationsInput | string | null
    self_thread?: InputJsonValue | InputJsonValue | null
  }

  export type DescriptionProfileWhereInput = {
    AND?: DescriptionProfileWhereInput | DescriptionProfileWhereInput[]
    OR?: DescriptionProfileWhereInput[]
    NOT?: DescriptionProfileWhereInput | DescriptionProfileWhereInput[]
    urls?: UrlEntityCompositeListFilter | UrlEntityObjectEqualityInput[]
  }

  export type UrlEntityCreateindicesInput = {
    set: number[]
  }

  export type DescriptionProfileNullableUpdateEnvelopeInput = {
    set?: DescriptionProfileCreateInput | null
    upsert?: DescriptionProfileUpsertInput
    unset?: boolean
  }

  export type TweetUserUpdatepinned_tweet_ids_strInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TweetUserUpdatewithheld_in_countriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UrlEntityCompositeListFilter = {
    equals?: UrlEntityObjectEqualityInput[]
    every?: UrlEntityWhereInput
    some?: UrlEntityWhereInput
    none?: UrlEntityWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type DescriptionProfileUpsertInput = {
    set: DescriptionProfileCreateInput | null
    update: DescriptionProfileUpdateInput
  }

  export type UrlEntityWhereInput = {
    AND?: UrlEntityWhereInput | UrlEntityWhereInput[]
    OR?: UrlEntityWhereInput[]
    NOT?: UrlEntityWhereInput | UrlEntityWhereInput[]
    display_url?: StringNullableFilter<"UrlEntity"> | string | null
    expanded_url?: StringNullableFilter<"UrlEntity"> | string | null
    url?: StringNullableFilter<"UrlEntity"> | string | null
    indices?: IntNullableListFilter<"UrlEntity">
  }

  export type DescriptionProfileUpdateInput = {
    urls?: XOR<UrlEntityListUpdateEnvelopeInput, UrlEntityCreateInput> | UrlEntityCreateInput[]
  }

  export type UrlEntityListUpdateEnvelopeInput = {
    set?: UrlEntityCreateInput | UrlEntityCreateInput[]
    push?: UrlEntityCreateInput | UrlEntityCreateInput[]
    updateMany?: UrlEntityUpdateManyInput
    deleteMany?: UrlEntityDeleteManyInput
  }

  export type UrlEntityUpdateManyInput = {
    where: UrlEntityWhereInput
    data: UrlEntityUpdateInput
  }

  export type UrlEntityDeleteManyInput = {
    where: UrlEntityWhereInput
  }

  export type UrlEntityUpdateInput = {
    display_url?: NullableStringFieldUpdateOperationsInput | string | null
    expanded_url?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indices?: UrlEntityUpdateindicesInput | number[]
  }

  export type UrlEntityUpdateindicesInput = {
    set?: number[]
    push?: number | number[]
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