
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
 * Model ExtendedEntities
 * 
 */
export type ExtendedEntities = $Result.DefaultSelection<Prisma.$ExtendedEntitiesPayload>
/**
 * Model MediaEntity
 * 
 */
export type MediaEntity = $Result.DefaultSelection<Prisma.$MediaEntityPayload>
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
 * Model UserProfileTest
 * Duplicate of UserProfile mapped to user_profiles_test collection
 */
export type UserProfileTest = $Result.DefaultSelection<Prisma.$UserProfileTestPayload>
/**
 * Model TweetsData
 * Tweets data collection mapped from Twitter JSON
 */
export type TweetsData = $Result.DefaultSelection<Prisma.$TweetsDataPayload>
/**
 * Model TweetsDataTest
 * Duplicate of TweetsData mapped to tweets_data_test collection
 */
export type TweetsDataTest = $Result.DefaultSelection<Prisma.$TweetsDataTestPayload>
/**
 * Model FollowerFollowingData
 * Follower/Following data collection
 */
export type FollowerFollowingData = $Result.DefaultSelection<Prisma.$FollowerFollowingDataPayload>
/**
 * Model FollowersDataTest
 * Duplicate of FollowerFollowingData mapped to followers_data_test collection
 */
export type FollowersDataTest = $Result.DefaultSelection<Prisma.$FollowersDataTestPayload>

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
   * `prisma.userProfileTest`: Exposes CRUD operations for the **UserProfileTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfileTests
    * const userProfileTests = await prisma.userProfileTest.findMany()
    * ```
    */
  get userProfileTest(): Prisma.UserProfileTestDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.tweetsDataTest`: Exposes CRUD operations for the **TweetsDataTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TweetsDataTests
    * const tweetsDataTests = await prisma.tweetsDataTest.findMany()
    * ```
    */
  get tweetsDataTest(): Prisma.TweetsDataTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followerFollowingData`: Exposes CRUD operations for the **FollowerFollowingData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowerFollowingData
    * const followerFollowingData = await prisma.followerFollowingData.findMany()
    * ```
    */
  get followerFollowingData(): Prisma.FollowerFollowingDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followersDataTest`: Exposes CRUD operations for the **FollowersDataTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowersDataTests
    * const followersDataTests = await prisma.followersDataTest.findMany()
    * ```
    */
  get followersDataTest(): Prisma.FollowersDataTestDelegate<ExtArgs, ClientOptions>;
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
    UserProfileTest: 'UserProfileTest',
    TweetsData: 'TweetsData',
    TweetsDataTest: 'TweetsDataTest',
    FollowerFollowingData: 'FollowerFollowingData',
    FollowersDataTest: 'FollowersDataTest'
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
      modelProps: "userProfile" | "userProfileTest" | "tweetsData" | "tweetsDataTest" | "followerFollowingData" | "followersDataTest"
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
      UserProfileTest: {
        payload: Prisma.$UserProfileTestPayload<ExtArgs>
        fields: Prisma.UserProfileTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTestPayload>
          }
          findFirst: {
            args: Prisma.UserProfileTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTestPayload>
          }
          findMany: {
            args: Prisma.UserProfileTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTestPayload>[]
          }
          create: {
            args: Prisma.UserProfileTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTestPayload>
          }
          createMany: {
            args: Prisma.UserProfileTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserProfileTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTestPayload>
          }
          update: {
            args: Prisma.UserProfileTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTestPayload>
          }
          deleteMany: {
            args: Prisma.UserProfileTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfileTestPayload>
          }
          aggregate: {
            args: Prisma.UserProfileTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfileTest>
          }
          groupBy: {
            args: Prisma.UserProfileTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileTestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserProfileTestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserProfileTestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserProfileTestCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileTestCountAggregateOutputType> | number
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
      TweetsDataTest: {
        payload: Prisma.$TweetsDataTestPayload<ExtArgs>
        fields: Prisma.TweetsDataTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TweetsDataTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TweetsDataTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataTestPayload>
          }
          findFirst: {
            args: Prisma.TweetsDataTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TweetsDataTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataTestPayload>
          }
          findMany: {
            args: Prisma.TweetsDataTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataTestPayload>[]
          }
          create: {
            args: Prisma.TweetsDataTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataTestPayload>
          }
          createMany: {
            args: Prisma.TweetsDataTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TweetsDataTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataTestPayload>
          }
          update: {
            args: Prisma.TweetsDataTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataTestPayload>
          }
          deleteMany: {
            args: Prisma.TweetsDataTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TweetsDataTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TweetsDataTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetsDataTestPayload>
          }
          aggregate: {
            args: Prisma.TweetsDataTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTweetsDataTest>
          }
          groupBy: {
            args: Prisma.TweetsDataTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TweetsDataTestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TweetsDataTestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TweetsDataTestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TweetsDataTestCountArgs<ExtArgs>
            result: $Utils.Optional<TweetsDataTestCountAggregateOutputType> | number
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
      FollowersDataTest: {
        payload: Prisma.$FollowersDataTestPayload<ExtArgs>
        fields: Prisma.FollowersDataTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowersDataTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersDataTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowersDataTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersDataTestPayload>
          }
          findFirst: {
            args: Prisma.FollowersDataTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersDataTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowersDataTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersDataTestPayload>
          }
          findMany: {
            args: Prisma.FollowersDataTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersDataTestPayload>[]
          }
          create: {
            args: Prisma.FollowersDataTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersDataTestPayload>
          }
          createMany: {
            args: Prisma.FollowersDataTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FollowersDataTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersDataTestPayload>
          }
          update: {
            args: Prisma.FollowersDataTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersDataTestPayload>
          }
          deleteMany: {
            args: Prisma.FollowersDataTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowersDataTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowersDataTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowersDataTestPayload>
          }
          aggregate: {
            args: Prisma.FollowersDataTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowersDataTest>
          }
          groupBy: {
            args: Prisma.FollowersDataTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowersDataTestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FollowersDataTestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FollowersDataTestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FollowersDataTestCountArgs<ExtArgs>
            result: $Utils.Optional<FollowersDataTestCountAggregateOutputType> | number
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
    userProfileTest?: UserProfileTestOmit
    tweetsData?: TweetsDataOmit
    tweetsDataTest?: TweetsDataTestOmit
    followerFollowingData?: FollowerFollowingDataOmit
    followersDataTest?: FollowersDataTestOmit
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
    url?: boolean | UrlEntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entitiesProfile"]>



  export type EntitiesProfileSelectScalar = {}

  export type EntitiesProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"description" | "url", ExtArgs["result"]["entitiesProfile"]>
  export type EntitiesProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntitiesProfilePayload = {
    name: "EntitiesProfile"
    objects: {}
    scalars: {}
    composites: {
      description: Prisma.$DescriptionProfilePayload | null
      url: Prisma.$UrlEntityPayload | null
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
   * Model ExtendedEntities
   */





  export type ExtendedEntitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    media?: boolean | MediaEntityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["extendedEntities"]>



  export type ExtendedEntitiesSelectScalar = {}

  export type ExtendedEntitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"media", ExtArgs["result"]["extendedEntities"]>
  export type ExtendedEntitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExtendedEntitiesPayload = {
    name: "ExtendedEntities"
    objects: {}
    scalars: {}
    composites: {
      media: Prisma.$MediaEntityPayload[]
    }
  }

  type ExtendedEntitiesGetPayload<S extends boolean | null | undefined | ExtendedEntitiesDefaultArgs> = $Result.GetResult<Prisma.$ExtendedEntitiesPayload, S>





  /**
   * Fields of the ExtendedEntities model
   */
  interface ExtendedEntitiesFieldRefs {

  }
    

  // Custom InputTypes
  /**
   * ExtendedEntities without action
   */
  export type ExtendedEntitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExtendedEntities
     */
    select?: ExtendedEntitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExtendedEntities
     */
    omit?: ExtendedEntitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtendedEntitiesInclude<ExtArgs> | null
  }


  /**
   * Model MediaEntity
   */





  export type MediaEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    display_url?: boolean
    expanded_url?: boolean
    url?: boolean
    indices?: boolean
    media_url_https?: boolean
    type?: boolean
  }, ExtArgs["result"]["mediaEntity"]>



  export type MediaEntitySelectScalar = {
    display_url?: boolean
    expanded_url?: boolean
    url?: boolean
    indices?: boolean
    media_url_https?: boolean
    type?: boolean
  }

  export type MediaEntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"display_url" | "expanded_url" | "url" | "indices" | "media_url_https" | "type", ExtArgs["result"]["mediaEntity"]>

  export type $MediaEntityPayload = {
    name: "MediaEntity"
    objects: {}
    scalars: {
      display_url: string | null
      expanded_url: string | null
      url: string | null
      indices: number[]
      media_url_https: string | null
      type: string | null
    }
    composites: {}
  }

  type MediaEntityGetPayload<S extends boolean | null | undefined | MediaEntityDefaultArgs> = $Result.GetResult<Prisma.$MediaEntityPayload, S>





  /**
   * Fields of the MediaEntity model
   */
  interface MediaEntityFieldRefs {
    readonly display_url: FieldRef<"MediaEntity", 'String'>
    readonly expanded_url: FieldRef<"MediaEntity", 'String'>
    readonly url: FieldRef<"MediaEntity", 'String'>
    readonly indices: FieldRef<"MediaEntity", 'Int[]'>
    readonly media_url_https: FieldRef<"MediaEntity", 'String'>
    readonly type: FieldRef<"MediaEntity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MediaEntity without action
   */
  export type MediaEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaEntity
     */
    select?: MediaEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaEntity
     */
    omit?: MediaEntityOmit<ExtArgs> | null
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
   * Model UserProfileTest
   */

  export type AggregateUserProfileTest = {
    _count: UserProfileTestCountAggregateOutputType | null
    _avg: UserProfileTestAvgAggregateOutputType | null
    _sum: UserProfileTestSumAggregateOutputType | null
    _min: UserProfileTestMinAggregateOutputType | null
    _max: UserProfileTestMaxAggregateOutputType | null
  }

  export type UserProfileTestAvgAggregateOutputType = {
    fast_followers_count: number | null
    favourites_count: number | null
    followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    media_count: number | null
    normal_followers_count: number | null
    statuses_count: number | null
  }

  export type UserProfileTestSumAggregateOutputType = {
    fast_followers_count: number | null
    favourites_count: number | null
    followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    media_count: number | null
    normal_followers_count: number | null
    statuses_count: number | null
  }

  export type UserProfileTestMinAggregateOutputType = {
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
    location: string | null
    profile_interstitial_type: string | null
    statuses_count: number | null
    translator_type: string | null
    name: string | null
    url: string | null
    user_id_str: string | null
    profile_url: string | null
    profile_image_url_https: string | null
    verified: boolean | null
    updated_time: Date | null
  }

  export type UserProfileTestMaxAggregateOutputType = {
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
    location: string | null
    profile_interstitial_type: string | null
    statuses_count: number | null
    translator_type: string | null
    name: string | null
    url: string | null
    user_id_str: string | null
    profile_url: string | null
    profile_image_url_https: string | null
    verified: boolean | null
    updated_time: Date | null
  }

  export type UserProfileTestCountAggregateOutputType = {
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
    location: number
    profile_interstitial_type: number
    statuses_count: number
    translator_type: number
    name: number
    url: number
    withheld_in_countries: number
    user_id_str: number
    profile_url: number
    profile_image_url_https: number
    verified: number
    updated_time: number
    _all: number
  }


  export type UserProfileTestAvgAggregateInputType = {
    fast_followers_count?: true
    favourites_count?: true
    followers_count?: true
    friends_count?: true
    listed_count?: true
    media_count?: true
    normal_followers_count?: true
    statuses_count?: true
  }

  export type UserProfileTestSumAggregateInputType = {
    fast_followers_count?: true
    favourites_count?: true
    followers_count?: true
    friends_count?: true
    listed_count?: true
    media_count?: true
    normal_followers_count?: true
    statuses_count?: true
  }

  export type UserProfileTestMinAggregateInputType = {
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
    location?: true
    profile_interstitial_type?: true
    statuses_count?: true
    translator_type?: true
    name?: true
    url?: true
    user_id_str?: true
    profile_url?: true
    profile_image_url_https?: true
    verified?: true
    updated_time?: true
  }

  export type UserProfileTestMaxAggregateInputType = {
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
    location?: true
    profile_interstitial_type?: true
    statuses_count?: true
    translator_type?: true
    name?: true
    url?: true
    user_id_str?: true
    profile_url?: true
    profile_image_url_https?: true
    verified?: true
    updated_time?: true
  }

  export type UserProfileTestCountAggregateInputType = {
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
    location?: true
    profile_interstitial_type?: true
    statuses_count?: true
    translator_type?: true
    name?: true
    url?: true
    withheld_in_countries?: true
    user_id_str?: true
    profile_url?: true
    profile_image_url_https?: true
    verified?: true
    updated_time?: true
    _all?: true
  }

  export type UserProfileTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfileTest to aggregate.
     */
    where?: UserProfileTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileTests to fetch.
     */
    orderBy?: UserProfileTestOrderByWithRelationInput | UserProfileTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfileTests
    **/
    _count?: true | UserProfileTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileTestMaxAggregateInputType
  }

  export type GetUserProfileTestAggregateType<T extends UserProfileTestAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfileTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfileTest[P]>
      : GetScalarType<T[P], AggregateUserProfileTest[P]>
  }




  export type UserProfileTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileTestWhereInput
    orderBy?: UserProfileTestOrderByWithAggregationInput | UserProfileTestOrderByWithAggregationInput[]
    by: UserProfileTestScalarFieldEnum[] | UserProfileTestScalarFieldEnum
    having?: UserProfileTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileTestCountAggregateInputType | true
    _avg?: UserProfileTestAvgAggregateInputType
    _sum?: UserProfileTestSumAggregateInputType
    _min?: UserProfileTestMinAggregateInputType
    _max?: UserProfileTestMaxAggregateInputType
  }

  export type UserProfileTestGroupByOutputType = {
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
    location: string | null
    profile_interstitial_type: string | null
    statuses_count: number | null
    translator_type: string | null
    name: string | null
    url: string | null
    withheld_in_countries: string[]
    user_id_str: string | null
    profile_url: string | null
    profile_image_url_https: string | null
    verified: boolean | null
    updated_time: Date | null
    _count: UserProfileTestCountAggregateOutputType | null
    _avg: UserProfileTestAvgAggregateOutputType | null
    _sum: UserProfileTestSumAggregateOutputType | null
    _min: UserProfileTestMinAggregateOutputType | null
    _max: UserProfileTestMaxAggregateOutputType | null
  }

  type GetUserProfileTestGroupByPayload<T extends UserProfileTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileTestGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileTestGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    location?: boolean
    profile_interstitial_type?: boolean
    statuses_count?: boolean
    translator_type?: boolean
    name?: boolean
    url?: boolean
    withheld_in_countries?: boolean
    user_id_str?: boolean
    profile_url?: boolean
    profile_image_url_https?: boolean
    verified?: boolean
    updated_time?: boolean
  }, ExtArgs["result"]["userProfileTest"]>



  export type UserProfileTestSelectScalar = {
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
    location?: boolean
    profile_interstitial_type?: boolean
    statuses_count?: boolean
    translator_type?: boolean
    name?: boolean
    url?: boolean
    withheld_in_countries?: boolean
    user_id_str?: boolean
    profile_url?: boolean
    profile_image_url_https?: boolean
    verified?: boolean
    updated_time?: boolean
  }

  export type UserProfileTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "default_profile" | "default_profile_image" | "description" | "entities" | "fast_followers_count" | "favourites_count" | "followers_count" | "friends_count" | "has_custom_timelines" | "is_translator" | "listed_count" | "media_count" | "normal_followers_count" | "pinned_tweet_ids_str" | "possibly_sensitive" | "profile_banner_url" | "location" | "profile_interstitial_type" | "statuses_count" | "translator_type" | "name" | "url" | "withheld_in_countries" | "user_id_str" | "profile_url" | "profile_image_url_https" | "verified" | "updated_time", ExtArgs["result"]["userProfileTest"]>
  export type UserProfileTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfileTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfileTest"
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
      location: string | null
      profile_interstitial_type: string | null
      statuses_count: number | null
      translator_type: string | null
      name: string | null
      url: string | null
      withheld_in_countries: string[]
      user_id_str: string | null
      profile_url: string | null
      profile_image_url_https: string | null
      verified: boolean | null
      updated_time: Date | null
    }, ExtArgs["result"]["userProfileTest"]>
    composites: {
      entities: Prisma.$EntitiesProfilePayload | null
    }
  }

  type UserProfileTestGetPayload<S extends boolean | null | undefined | UserProfileTestDefaultArgs> = $Result.GetResult<Prisma.$UserProfileTestPayload, S>

  type UserProfileTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileTestCountAggregateInputType | true
    }

  export interface UserProfileTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfileTest'], meta: { name: 'UserProfileTest' } }
    /**
     * Find zero or one UserProfileTest that matches the filter.
     * @param {UserProfileTestFindUniqueArgs} args - Arguments to find a UserProfileTest
     * @example
     * // Get one UserProfileTest
     * const userProfileTest = await prisma.userProfileTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileTestFindUniqueArgs>(args: SelectSubset<T, UserProfileTestFindUniqueArgs<ExtArgs>>): Prisma__UserProfileTestClient<$Result.GetResult<Prisma.$UserProfileTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfileTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileTestFindUniqueOrThrowArgs} args - Arguments to find a UserProfileTest
     * @example
     * // Get one UserProfileTest
     * const userProfileTest = await prisma.userProfileTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileTestFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileTestClient<$Result.GetResult<Prisma.$UserProfileTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfileTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTestFindFirstArgs} args - Arguments to find a UserProfileTest
     * @example
     * // Get one UserProfileTest
     * const userProfileTest = await prisma.userProfileTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileTestFindFirstArgs>(args?: SelectSubset<T, UserProfileTestFindFirstArgs<ExtArgs>>): Prisma__UserProfileTestClient<$Result.GetResult<Prisma.$UserProfileTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfileTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTestFindFirstOrThrowArgs} args - Arguments to find a UserProfileTest
     * @example
     * // Get one UserProfileTest
     * const userProfileTest = await prisma.userProfileTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileTestFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileTestClient<$Result.GetResult<Prisma.$UserProfileTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfileTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfileTests
     * const userProfileTests = await prisma.userProfileTest.findMany()
     * 
     * // Get first 10 UserProfileTests
     * const userProfileTests = await prisma.userProfileTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileTestWithIdOnly = await prisma.userProfileTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileTestFindManyArgs>(args?: SelectSubset<T, UserProfileTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfileTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfileTest.
     * @param {UserProfileTestCreateArgs} args - Arguments to create a UserProfileTest.
     * @example
     * // Create one UserProfileTest
     * const UserProfileTest = await prisma.userProfileTest.create({
     *   data: {
     *     // ... data to create a UserProfileTest
     *   }
     * })
     * 
     */
    create<T extends UserProfileTestCreateArgs>(args: SelectSubset<T, UserProfileTestCreateArgs<ExtArgs>>): Prisma__UserProfileTestClient<$Result.GetResult<Prisma.$UserProfileTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfileTests.
     * @param {UserProfileTestCreateManyArgs} args - Arguments to create many UserProfileTests.
     * @example
     * // Create many UserProfileTests
     * const userProfileTest = await prisma.userProfileTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileTestCreateManyArgs>(args?: SelectSubset<T, UserProfileTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfileTest.
     * @param {UserProfileTestDeleteArgs} args - Arguments to delete one UserProfileTest.
     * @example
     * // Delete one UserProfileTest
     * const UserProfileTest = await prisma.userProfileTest.delete({
     *   where: {
     *     // ... filter to delete one UserProfileTest
     *   }
     * })
     * 
     */
    delete<T extends UserProfileTestDeleteArgs>(args: SelectSubset<T, UserProfileTestDeleteArgs<ExtArgs>>): Prisma__UserProfileTestClient<$Result.GetResult<Prisma.$UserProfileTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfileTest.
     * @param {UserProfileTestUpdateArgs} args - Arguments to update one UserProfileTest.
     * @example
     * // Update one UserProfileTest
     * const userProfileTest = await prisma.userProfileTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileTestUpdateArgs>(args: SelectSubset<T, UserProfileTestUpdateArgs<ExtArgs>>): Prisma__UserProfileTestClient<$Result.GetResult<Prisma.$UserProfileTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfileTests.
     * @param {UserProfileTestDeleteManyArgs} args - Arguments to filter UserProfileTests to delete.
     * @example
     * // Delete a few UserProfileTests
     * const { count } = await prisma.userProfileTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileTestDeleteManyArgs>(args?: SelectSubset<T, UserProfileTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfileTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfileTests
     * const userProfileTest = await prisma.userProfileTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileTestUpdateManyArgs>(args: SelectSubset<T, UserProfileTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfileTest.
     * @param {UserProfileTestUpsertArgs} args - Arguments to update or create a UserProfileTest.
     * @example
     * // Update or create a UserProfileTest
     * const userProfileTest = await prisma.userProfileTest.upsert({
     *   create: {
     *     // ... data to create a UserProfileTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfileTest we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileTestUpsertArgs>(args: SelectSubset<T, UserProfileTestUpsertArgs<ExtArgs>>): Prisma__UserProfileTestClient<$Result.GetResult<Prisma.$UserProfileTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfileTests that matches the filter.
     * @param {UserProfileTestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userProfileTest = await prisma.userProfileTest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserProfileTestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserProfileTest.
     * @param {UserProfileTestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userProfileTest = await prisma.userProfileTest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserProfileTestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserProfileTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTestCountArgs} args - Arguments to filter UserProfileTests to count.
     * @example
     * // Count the number of UserProfileTests
     * const count = await prisma.userProfileTest.count({
     *   where: {
     *     // ... the filter for the UserProfileTests we want to count
     *   }
     * })
    **/
    count<T extends UserProfileTestCountArgs>(
      args?: Subset<T, UserProfileTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfileTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileTestAggregateArgs>(args: Subset<T, UserProfileTestAggregateArgs>): Prisma.PrismaPromise<GetUserProfileTestAggregateType<T>>

    /**
     * Group by UserProfileTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileTestGroupByArgs} args - Group by arguments.
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
      T extends UserProfileTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileTestGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileTestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfileTest model
   */
  readonly fields: UserProfileTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfileTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserProfileTest model
   */
  interface UserProfileTestFieldRefs {
    readonly id: FieldRef<"UserProfileTest", 'String'>
    readonly default_profile: FieldRef<"UserProfileTest", 'Boolean'>
    readonly default_profile_image: FieldRef<"UserProfileTest", 'Boolean'>
    readonly description: FieldRef<"UserProfileTest", 'String'>
    readonly fast_followers_count: FieldRef<"UserProfileTest", 'Int'>
    readonly favourites_count: FieldRef<"UserProfileTest", 'Int'>
    readonly followers_count: FieldRef<"UserProfileTest", 'Int'>
    readonly friends_count: FieldRef<"UserProfileTest", 'Int'>
    readonly has_custom_timelines: FieldRef<"UserProfileTest", 'Boolean'>
    readonly is_translator: FieldRef<"UserProfileTest", 'Boolean'>
    readonly listed_count: FieldRef<"UserProfileTest", 'Int'>
    readonly media_count: FieldRef<"UserProfileTest", 'Int'>
    readonly normal_followers_count: FieldRef<"UserProfileTest", 'Int'>
    readonly pinned_tweet_ids_str: FieldRef<"UserProfileTest", 'String[]'>
    readonly possibly_sensitive: FieldRef<"UserProfileTest", 'Boolean'>
    readonly profile_banner_url: FieldRef<"UserProfileTest", 'String'>
    readonly location: FieldRef<"UserProfileTest", 'String'>
    readonly profile_interstitial_type: FieldRef<"UserProfileTest", 'String'>
    readonly statuses_count: FieldRef<"UserProfileTest", 'Int'>
    readonly translator_type: FieldRef<"UserProfileTest", 'String'>
    readonly name: FieldRef<"UserProfileTest", 'String'>
    readonly url: FieldRef<"UserProfileTest", 'String'>
    readonly withheld_in_countries: FieldRef<"UserProfileTest", 'String[]'>
    readonly user_id_str: FieldRef<"UserProfileTest", 'String'>
    readonly profile_url: FieldRef<"UserProfileTest", 'String'>
    readonly profile_image_url_https: FieldRef<"UserProfileTest", 'String'>
    readonly verified: FieldRef<"UserProfileTest", 'Boolean'>
    readonly updated_time: FieldRef<"UserProfileTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfileTest findUnique
   */
  export type UserProfileTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileTest to fetch.
     */
    where: UserProfileTestWhereUniqueInput
  }

  /**
   * UserProfileTest findUniqueOrThrow
   */
  export type UserProfileTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileTest to fetch.
     */
    where: UserProfileTestWhereUniqueInput
  }

  /**
   * UserProfileTest findFirst
   */
  export type UserProfileTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileTest to fetch.
     */
    where?: UserProfileTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileTests to fetch.
     */
    orderBy?: UserProfileTestOrderByWithRelationInput | UserProfileTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfileTests.
     */
    cursor?: UserProfileTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfileTests.
     */
    distinct?: UserProfileTestScalarFieldEnum | UserProfileTestScalarFieldEnum[]
  }

  /**
   * UserProfileTest findFirstOrThrow
   */
  export type UserProfileTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileTest to fetch.
     */
    where?: UserProfileTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileTests to fetch.
     */
    orderBy?: UserProfileTestOrderByWithRelationInput | UserProfileTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfileTests.
     */
    cursor?: UserProfileTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfileTests.
     */
    distinct?: UserProfileTestScalarFieldEnum | UserProfileTestScalarFieldEnum[]
  }

  /**
   * UserProfileTest findMany
   */
  export type UserProfileTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
    /**
     * Filter, which UserProfileTests to fetch.
     */
    where?: UserProfileTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfileTests to fetch.
     */
    orderBy?: UserProfileTestOrderByWithRelationInput | UserProfileTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfileTests.
     */
    cursor?: UserProfileTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfileTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfileTests.
     */
    skip?: number
    distinct?: UserProfileTestScalarFieldEnum | UserProfileTestScalarFieldEnum[]
  }

  /**
   * UserProfileTest create
   */
  export type UserProfileTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfileTest.
     */
    data: XOR<UserProfileTestCreateInput, UserProfileTestUncheckedCreateInput>
  }

  /**
   * UserProfileTest createMany
   */
  export type UserProfileTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfileTests.
     */
    data: UserProfileTestCreateManyInput | UserProfileTestCreateManyInput[]
  }

  /**
   * UserProfileTest update
   */
  export type UserProfileTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfileTest.
     */
    data: XOR<UserProfileTestUpdateInput, UserProfileTestUncheckedUpdateInput>
    /**
     * Choose, which UserProfileTest to update.
     */
    where: UserProfileTestWhereUniqueInput
  }

  /**
   * UserProfileTest updateMany
   */
  export type UserProfileTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfileTests.
     */
    data: XOR<UserProfileTestUpdateManyMutationInput, UserProfileTestUncheckedUpdateManyInput>
    /**
     * Filter which UserProfileTests to update
     */
    where?: UserProfileTestWhereInput
    /**
     * Limit how many UserProfileTests to update.
     */
    limit?: number
  }

  /**
   * UserProfileTest upsert
   */
  export type UserProfileTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfileTest to update in case it exists.
     */
    where: UserProfileTestWhereUniqueInput
    /**
     * In case the UserProfileTest found by the `where` argument doesn't exist, create a new UserProfileTest with this data.
     */
    create: XOR<UserProfileTestCreateInput, UserProfileTestUncheckedCreateInput>
    /**
     * In case the UserProfileTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileTestUpdateInput, UserProfileTestUncheckedUpdateInput>
  }

  /**
   * UserProfileTest delete
   */
  export type UserProfileTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
    /**
     * Filter which UserProfileTest to delete.
     */
    where: UserProfileTestWhereUniqueInput
  }

  /**
   * UserProfileTest deleteMany
   */
  export type UserProfileTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfileTests to delete
     */
    where?: UserProfileTestWhereInput
    /**
     * Limit how many UserProfileTests to delete.
     */
    limit?: number
  }

  /**
   * UserProfileTest findRaw
   */
  export type UserProfileTestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * UserProfileTest aggregateRaw
   */
  export type UserProfileTestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * UserProfileTest without action
   */
  export type UserProfileTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileTest
     */
    select?: UserProfileTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfileTest
     */
    omit?: UserProfileTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileTestInclude<ExtArgs> | null
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
    views_count: string | null
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
    views_count: string | null
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
    views_count: number
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
    views_count?: true
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
    views_count?: true
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
    views_count?: true
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
    views_count: string | null
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
    views_count?: boolean
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
    views_count?: boolean
    updated_time?: boolean
  }

  export type TweetsDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_str" | "bookmark_count" | "bookmarked" | "conversation_id_str" | "created_at" | "display_text_range" | "entities" | "favorite_count" | "favorited" | "full_text" | "is_quote_status" | "lang" | "quote_count" | "reply_count" | "retweet_count" | "retweeted" | "user" | "user_id_str" | "views_count" | "updated_time", ExtArgs["result"]["tweetsData"]>
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
      views_count: string | null
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
    readonly views_count: FieldRef<"TweetsData", 'String'>
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
   * Model TweetsDataTest
   */

  export type AggregateTweetsDataTest = {
    _count: TweetsDataTestCountAggregateOutputType | null
    _avg: TweetsDataTestAvgAggregateOutputType | null
    _sum: TweetsDataTestSumAggregateOutputType | null
    _min: TweetsDataTestMinAggregateOutputType | null
    _max: TweetsDataTestMaxAggregateOutputType | null
  }

  export type TweetsDataTestAvgAggregateOutputType = {
    bookmark_count: number | null
    display_text_range: number | null
    favorite_count: number | null
    quote_count: number | null
    reply_count: number | null
    retweet_count: number | null
  }

  export type TweetsDataTestSumAggregateOutputType = {
    bookmark_count: number | null
    display_text_range: number[]
    favorite_count: number | null
    quote_count: number | null
    reply_count: number | null
    retweet_count: number | null
  }

  export type TweetsDataTestMinAggregateOutputType = {
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
    twitterUrl: string | null
    url: string | null
    user_id_str: string | null
    views_count: string | null
    updated_time: Date | null
  }

  export type TweetsDataTestMaxAggregateOutputType = {
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
    twitterUrl: string | null
    url: string | null
    user_id_str: string | null
    views_count: string | null
    updated_time: Date | null
  }

  export type TweetsDataTestCountAggregateOutputType = {
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
    twitterUrl: number
    url: number
    user_id_str: number
    views_count: number
    updated_time: number
    _all: number
  }


  export type TweetsDataTestAvgAggregateInputType = {
    bookmark_count?: true
    display_text_range?: true
    favorite_count?: true
    quote_count?: true
    reply_count?: true
    retweet_count?: true
  }

  export type TweetsDataTestSumAggregateInputType = {
    bookmark_count?: true
    display_text_range?: true
    favorite_count?: true
    quote_count?: true
    reply_count?: true
    retweet_count?: true
  }

  export type TweetsDataTestMinAggregateInputType = {
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
    twitterUrl?: true
    url?: true
    user_id_str?: true
    views_count?: true
    updated_time?: true
  }

  export type TweetsDataTestMaxAggregateInputType = {
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
    twitterUrl?: true
    url?: true
    user_id_str?: true
    views_count?: true
    updated_time?: true
  }

  export type TweetsDataTestCountAggregateInputType = {
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
    twitterUrl?: true
    url?: true
    user_id_str?: true
    views_count?: true
    updated_time?: true
    _all?: true
  }

  export type TweetsDataTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TweetsDataTest to aggregate.
     */
    where?: TweetsDataTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetsDataTests to fetch.
     */
    orderBy?: TweetsDataTestOrderByWithRelationInput | TweetsDataTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TweetsDataTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetsDataTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetsDataTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TweetsDataTests
    **/
    _count?: true | TweetsDataTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TweetsDataTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TweetsDataTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TweetsDataTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TweetsDataTestMaxAggregateInputType
  }

  export type GetTweetsDataTestAggregateType<T extends TweetsDataTestAggregateArgs> = {
        [P in keyof T & keyof AggregateTweetsDataTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTweetsDataTest[P]>
      : GetScalarType<T[P], AggregateTweetsDataTest[P]>
  }




  export type TweetsDataTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetsDataTestWhereInput
    orderBy?: TweetsDataTestOrderByWithAggregationInput | TweetsDataTestOrderByWithAggregationInput[]
    by: TweetsDataTestScalarFieldEnum[] | TweetsDataTestScalarFieldEnum
    having?: TweetsDataTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TweetsDataTestCountAggregateInputType | true
    _avg?: TweetsDataTestAvgAggregateInputType
    _sum?: TweetsDataTestSumAggregateInputType
    _min?: TweetsDataTestMinAggregateInputType
    _max?: TweetsDataTestMaxAggregateInputType
  }

  export type TweetsDataTestGroupByOutputType = {
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
    twitterUrl: string | null
    url: string | null
    user_id_str: string | null
    views_count: string | null
    updated_time: Date | null
    _count: TweetsDataTestCountAggregateOutputType | null
    _avg: TweetsDataTestAvgAggregateOutputType | null
    _sum: TweetsDataTestSumAggregateOutputType | null
    _min: TweetsDataTestMinAggregateOutputType | null
    _max: TweetsDataTestMaxAggregateOutputType | null
  }

  type GetTweetsDataTestGroupByPayload<T extends TweetsDataTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TweetsDataTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TweetsDataTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TweetsDataTestGroupByOutputType[P]>
            : GetScalarType<T[P], TweetsDataTestGroupByOutputType[P]>
        }
      >
    >


  export type TweetsDataTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_str?: boolean
    bookmark_count?: boolean
    bookmarked?: boolean
    conversation_id_str?: boolean
    created_at?: boolean
    display_text_range?: boolean
    extended_entities?: boolean | ExtendedEntitiesDefaultArgs<ExtArgs>
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
    twitterUrl?: boolean
    user?: boolean | TweetUserDefaultArgs<ExtArgs>
    url?: boolean
    user_id_str?: boolean
    views_count?: boolean
    updated_time?: boolean
  }, ExtArgs["result"]["tweetsDataTest"]>



  export type TweetsDataTestSelectScalar = {
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
    twitterUrl?: boolean
    url?: boolean
    user_id_str?: boolean
    views_count?: boolean
    updated_time?: boolean
  }

  export type TweetsDataTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_str" | "bookmark_count" | "bookmarked" | "conversation_id_str" | "created_at" | "display_text_range" | "extended_entities" | "entities" | "favorite_count" | "favorited" | "full_text" | "is_quote_status" | "lang" | "quote_count" | "reply_count" | "retweet_count" | "retweeted" | "twitterUrl" | "user" | "url" | "user_id_str" | "views_count" | "updated_time", ExtArgs["result"]["tweetsDataTest"]>
  export type TweetsDataTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TweetsDataTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TweetsDataTest"
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
      twitterUrl: string | null
      url: string | null
      user_id_str: string | null
      views_count: string | null
      updated_time: Date | null
    }, ExtArgs["result"]["tweetsDataTest"]>
    composites: {
      extended_entities: Prisma.$ExtendedEntitiesPayload | null
      user: Prisma.$TweetUserPayload | null
    }
  }

  type TweetsDataTestGetPayload<S extends boolean | null | undefined | TweetsDataTestDefaultArgs> = $Result.GetResult<Prisma.$TweetsDataTestPayload, S>

  type TweetsDataTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TweetsDataTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TweetsDataTestCountAggregateInputType | true
    }

  export interface TweetsDataTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TweetsDataTest'], meta: { name: 'TweetsDataTest' } }
    /**
     * Find zero or one TweetsDataTest that matches the filter.
     * @param {TweetsDataTestFindUniqueArgs} args - Arguments to find a TweetsDataTest
     * @example
     * // Get one TweetsDataTest
     * const tweetsDataTest = await prisma.tweetsDataTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TweetsDataTestFindUniqueArgs>(args: SelectSubset<T, TweetsDataTestFindUniqueArgs<ExtArgs>>): Prisma__TweetsDataTestClient<$Result.GetResult<Prisma.$TweetsDataTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TweetsDataTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TweetsDataTestFindUniqueOrThrowArgs} args - Arguments to find a TweetsDataTest
     * @example
     * // Get one TweetsDataTest
     * const tweetsDataTest = await prisma.tweetsDataTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TweetsDataTestFindUniqueOrThrowArgs>(args: SelectSubset<T, TweetsDataTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TweetsDataTestClient<$Result.GetResult<Prisma.$TweetsDataTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TweetsDataTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataTestFindFirstArgs} args - Arguments to find a TweetsDataTest
     * @example
     * // Get one TweetsDataTest
     * const tweetsDataTest = await prisma.tweetsDataTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TweetsDataTestFindFirstArgs>(args?: SelectSubset<T, TweetsDataTestFindFirstArgs<ExtArgs>>): Prisma__TweetsDataTestClient<$Result.GetResult<Prisma.$TweetsDataTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TweetsDataTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataTestFindFirstOrThrowArgs} args - Arguments to find a TweetsDataTest
     * @example
     * // Get one TweetsDataTest
     * const tweetsDataTest = await prisma.tweetsDataTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TweetsDataTestFindFirstOrThrowArgs>(args?: SelectSubset<T, TweetsDataTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TweetsDataTestClient<$Result.GetResult<Prisma.$TweetsDataTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TweetsDataTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TweetsDataTests
     * const tweetsDataTests = await prisma.tweetsDataTest.findMany()
     * 
     * // Get first 10 TweetsDataTests
     * const tweetsDataTests = await prisma.tweetsDataTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tweetsDataTestWithIdOnly = await prisma.tweetsDataTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TweetsDataTestFindManyArgs>(args?: SelectSubset<T, TweetsDataTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetsDataTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TweetsDataTest.
     * @param {TweetsDataTestCreateArgs} args - Arguments to create a TweetsDataTest.
     * @example
     * // Create one TweetsDataTest
     * const TweetsDataTest = await prisma.tweetsDataTest.create({
     *   data: {
     *     // ... data to create a TweetsDataTest
     *   }
     * })
     * 
     */
    create<T extends TweetsDataTestCreateArgs>(args: SelectSubset<T, TweetsDataTestCreateArgs<ExtArgs>>): Prisma__TweetsDataTestClient<$Result.GetResult<Prisma.$TweetsDataTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TweetsDataTests.
     * @param {TweetsDataTestCreateManyArgs} args - Arguments to create many TweetsDataTests.
     * @example
     * // Create many TweetsDataTests
     * const tweetsDataTest = await prisma.tweetsDataTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TweetsDataTestCreateManyArgs>(args?: SelectSubset<T, TweetsDataTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TweetsDataTest.
     * @param {TweetsDataTestDeleteArgs} args - Arguments to delete one TweetsDataTest.
     * @example
     * // Delete one TweetsDataTest
     * const TweetsDataTest = await prisma.tweetsDataTest.delete({
     *   where: {
     *     // ... filter to delete one TweetsDataTest
     *   }
     * })
     * 
     */
    delete<T extends TweetsDataTestDeleteArgs>(args: SelectSubset<T, TweetsDataTestDeleteArgs<ExtArgs>>): Prisma__TweetsDataTestClient<$Result.GetResult<Prisma.$TweetsDataTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TweetsDataTest.
     * @param {TweetsDataTestUpdateArgs} args - Arguments to update one TweetsDataTest.
     * @example
     * // Update one TweetsDataTest
     * const tweetsDataTest = await prisma.tweetsDataTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TweetsDataTestUpdateArgs>(args: SelectSubset<T, TweetsDataTestUpdateArgs<ExtArgs>>): Prisma__TweetsDataTestClient<$Result.GetResult<Prisma.$TweetsDataTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TweetsDataTests.
     * @param {TweetsDataTestDeleteManyArgs} args - Arguments to filter TweetsDataTests to delete.
     * @example
     * // Delete a few TweetsDataTests
     * const { count } = await prisma.tweetsDataTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TweetsDataTestDeleteManyArgs>(args?: SelectSubset<T, TweetsDataTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TweetsDataTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TweetsDataTests
     * const tweetsDataTest = await prisma.tweetsDataTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TweetsDataTestUpdateManyArgs>(args: SelectSubset<T, TweetsDataTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TweetsDataTest.
     * @param {TweetsDataTestUpsertArgs} args - Arguments to update or create a TweetsDataTest.
     * @example
     * // Update or create a TweetsDataTest
     * const tweetsDataTest = await prisma.tweetsDataTest.upsert({
     *   create: {
     *     // ... data to create a TweetsDataTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TweetsDataTest we want to update
     *   }
     * })
     */
    upsert<T extends TweetsDataTestUpsertArgs>(args: SelectSubset<T, TweetsDataTestUpsertArgs<ExtArgs>>): Prisma__TweetsDataTestClient<$Result.GetResult<Prisma.$TweetsDataTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TweetsDataTests that matches the filter.
     * @param {TweetsDataTestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tweetsDataTest = await prisma.tweetsDataTest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TweetsDataTestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TweetsDataTest.
     * @param {TweetsDataTestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tweetsDataTest = await prisma.tweetsDataTest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TweetsDataTestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TweetsDataTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataTestCountArgs} args - Arguments to filter TweetsDataTests to count.
     * @example
     * // Count the number of TweetsDataTests
     * const count = await prisma.tweetsDataTest.count({
     *   where: {
     *     // ... the filter for the TweetsDataTests we want to count
     *   }
     * })
    **/
    count<T extends TweetsDataTestCountArgs>(
      args?: Subset<T, TweetsDataTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TweetsDataTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TweetsDataTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TweetsDataTestAggregateArgs>(args: Subset<T, TweetsDataTestAggregateArgs>): Prisma.PrismaPromise<GetTweetsDataTestAggregateType<T>>

    /**
     * Group by TweetsDataTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetsDataTestGroupByArgs} args - Group by arguments.
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
      T extends TweetsDataTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TweetsDataTestGroupByArgs['orderBy'] }
        : { orderBy?: TweetsDataTestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TweetsDataTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTweetsDataTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TweetsDataTest model
   */
  readonly fields: TweetsDataTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TweetsDataTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TweetsDataTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TweetsDataTest model
   */
  interface TweetsDataTestFieldRefs {
    readonly id: FieldRef<"TweetsDataTest", 'String'>
    readonly id_str: FieldRef<"TweetsDataTest", 'String'>
    readonly bookmark_count: FieldRef<"TweetsDataTest", 'Int'>
    readonly bookmarked: FieldRef<"TweetsDataTest", 'Boolean'>
    readonly conversation_id_str: FieldRef<"TweetsDataTest", 'String'>
    readonly created_at: FieldRef<"TweetsDataTest", 'String'>
    readonly display_text_range: FieldRef<"TweetsDataTest", 'Int[]'>
    readonly entities: FieldRef<"TweetsDataTest", 'Json'>
    readonly favorite_count: FieldRef<"TweetsDataTest", 'Int'>
    readonly favorited: FieldRef<"TweetsDataTest", 'Boolean'>
    readonly full_text: FieldRef<"TweetsDataTest", 'String'>
    readonly is_quote_status: FieldRef<"TweetsDataTest", 'Boolean'>
    readonly lang: FieldRef<"TweetsDataTest", 'String'>
    readonly quote_count: FieldRef<"TweetsDataTest", 'Int'>
    readonly reply_count: FieldRef<"TweetsDataTest", 'Int'>
    readonly retweet_count: FieldRef<"TweetsDataTest", 'Int'>
    readonly retweeted: FieldRef<"TweetsDataTest", 'Boolean'>
    readonly twitterUrl: FieldRef<"TweetsDataTest", 'String'>
    readonly url: FieldRef<"TweetsDataTest", 'String'>
    readonly user_id_str: FieldRef<"TweetsDataTest", 'String'>
    readonly views_count: FieldRef<"TweetsDataTest", 'String'>
    readonly updated_time: FieldRef<"TweetsDataTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TweetsDataTest findUnique
   */
  export type TweetsDataTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
    /**
     * Filter, which TweetsDataTest to fetch.
     */
    where: TweetsDataTestWhereUniqueInput
  }

  /**
   * TweetsDataTest findUniqueOrThrow
   */
  export type TweetsDataTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
    /**
     * Filter, which TweetsDataTest to fetch.
     */
    where: TweetsDataTestWhereUniqueInput
  }

  /**
   * TweetsDataTest findFirst
   */
  export type TweetsDataTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
    /**
     * Filter, which TweetsDataTest to fetch.
     */
    where?: TweetsDataTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetsDataTests to fetch.
     */
    orderBy?: TweetsDataTestOrderByWithRelationInput | TweetsDataTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TweetsDataTests.
     */
    cursor?: TweetsDataTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetsDataTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetsDataTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TweetsDataTests.
     */
    distinct?: TweetsDataTestScalarFieldEnum | TweetsDataTestScalarFieldEnum[]
  }

  /**
   * TweetsDataTest findFirstOrThrow
   */
  export type TweetsDataTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
    /**
     * Filter, which TweetsDataTest to fetch.
     */
    where?: TweetsDataTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetsDataTests to fetch.
     */
    orderBy?: TweetsDataTestOrderByWithRelationInput | TweetsDataTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TweetsDataTests.
     */
    cursor?: TweetsDataTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetsDataTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetsDataTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TweetsDataTests.
     */
    distinct?: TweetsDataTestScalarFieldEnum | TweetsDataTestScalarFieldEnum[]
  }

  /**
   * TweetsDataTest findMany
   */
  export type TweetsDataTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
    /**
     * Filter, which TweetsDataTests to fetch.
     */
    where?: TweetsDataTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TweetsDataTests to fetch.
     */
    orderBy?: TweetsDataTestOrderByWithRelationInput | TweetsDataTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TweetsDataTests.
     */
    cursor?: TweetsDataTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TweetsDataTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TweetsDataTests.
     */
    skip?: number
    distinct?: TweetsDataTestScalarFieldEnum | TweetsDataTestScalarFieldEnum[]
  }

  /**
   * TweetsDataTest create
   */
  export type TweetsDataTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
    /**
     * The data needed to create a TweetsDataTest.
     */
    data: XOR<TweetsDataTestCreateInput, TweetsDataTestUncheckedCreateInput>
  }

  /**
   * TweetsDataTest createMany
   */
  export type TweetsDataTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TweetsDataTests.
     */
    data: TweetsDataTestCreateManyInput | TweetsDataTestCreateManyInput[]
  }

  /**
   * TweetsDataTest update
   */
  export type TweetsDataTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
    /**
     * The data needed to update a TweetsDataTest.
     */
    data: XOR<TweetsDataTestUpdateInput, TweetsDataTestUncheckedUpdateInput>
    /**
     * Choose, which TweetsDataTest to update.
     */
    where: TweetsDataTestWhereUniqueInput
  }

  /**
   * TweetsDataTest updateMany
   */
  export type TweetsDataTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TweetsDataTests.
     */
    data: XOR<TweetsDataTestUpdateManyMutationInput, TweetsDataTestUncheckedUpdateManyInput>
    /**
     * Filter which TweetsDataTests to update
     */
    where?: TweetsDataTestWhereInput
    /**
     * Limit how many TweetsDataTests to update.
     */
    limit?: number
  }

  /**
   * TweetsDataTest upsert
   */
  export type TweetsDataTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
    /**
     * The filter to search for the TweetsDataTest to update in case it exists.
     */
    where: TweetsDataTestWhereUniqueInput
    /**
     * In case the TweetsDataTest found by the `where` argument doesn't exist, create a new TweetsDataTest with this data.
     */
    create: XOR<TweetsDataTestCreateInput, TweetsDataTestUncheckedCreateInput>
    /**
     * In case the TweetsDataTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TweetsDataTestUpdateInput, TweetsDataTestUncheckedUpdateInput>
  }

  /**
   * TweetsDataTest delete
   */
  export type TweetsDataTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
    /**
     * Filter which TweetsDataTest to delete.
     */
    where: TweetsDataTestWhereUniqueInput
  }

  /**
   * TweetsDataTest deleteMany
   */
  export type TweetsDataTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TweetsDataTests to delete
     */
    where?: TweetsDataTestWhereInput
    /**
     * Limit how many TweetsDataTests to delete.
     */
    limit?: number
  }

  /**
   * TweetsDataTest findRaw
   */
  export type TweetsDataTestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * TweetsDataTest aggregateRaw
   */
  export type TweetsDataTestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * TweetsDataTest without action
   */
  export type TweetsDataTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetsDataTest
     */
    select?: TweetsDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TweetsDataTest
     */
    omit?: TweetsDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetsDataTestInclude<ExtArgs> | null
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
   * Model FollowersDataTest
   */

  export type AggregateFollowersDataTest = {
    _count: FollowersDataTestCountAggregateOutputType | null
    _avg: FollowersDataTestAvgAggregateOutputType | null
    _sum: FollowersDataTestSumAggregateOutputType | null
    _min: FollowersDataTestMinAggregateOutputType | null
    _max: FollowersDataTestMaxAggregateOutputType | null
  }

  export type FollowersDataTestAvgAggregateOutputType = {
    followers_count: number | null
    fast_followers_count: number | null
    normal_followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    favourites_count: number | null
    statuses_count: number | null
    media_count: number | null
  }

  export type FollowersDataTestSumAggregateOutputType = {
    followers_count: number | null
    fast_followers_count: number | null
    normal_followers_count: number | null
    friends_count: number | null
    listed_count: number | null
    favourites_count: number | null
    statuses_count: number | null
    media_count: number | null
  }

  export type FollowersDataTestMinAggregateOutputType = {
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

  export type FollowersDataTestMaxAggregateOutputType = {
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

  export type FollowersDataTestCountAggregateOutputType = {
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


  export type FollowersDataTestAvgAggregateInputType = {
    followers_count?: true
    fast_followers_count?: true
    normal_followers_count?: true
    friends_count?: true
    listed_count?: true
    favourites_count?: true
    statuses_count?: true
    media_count?: true
  }

  export type FollowersDataTestSumAggregateInputType = {
    followers_count?: true
    fast_followers_count?: true
    normal_followers_count?: true
    friends_count?: true
    listed_count?: true
    favourites_count?: true
    statuses_count?: true
    media_count?: true
  }

  export type FollowersDataTestMinAggregateInputType = {
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

  export type FollowersDataTestMaxAggregateInputType = {
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

  export type FollowersDataTestCountAggregateInputType = {
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

  export type FollowersDataTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowersDataTest to aggregate.
     */
    where?: FollowersDataTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowersDataTests to fetch.
     */
    orderBy?: FollowersDataTestOrderByWithRelationInput | FollowersDataTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowersDataTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowersDataTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowersDataTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowersDataTests
    **/
    _count?: true | FollowersDataTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowersDataTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowersDataTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowersDataTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowersDataTestMaxAggregateInputType
  }

  export type GetFollowersDataTestAggregateType<T extends FollowersDataTestAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowersDataTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowersDataTest[P]>
      : GetScalarType<T[P], AggregateFollowersDataTest[P]>
  }




  export type FollowersDataTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowersDataTestWhereInput
    orderBy?: FollowersDataTestOrderByWithAggregationInput | FollowersDataTestOrderByWithAggregationInput[]
    by: FollowersDataTestScalarFieldEnum[] | FollowersDataTestScalarFieldEnum
    having?: FollowersDataTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowersDataTestCountAggregateInputType | true
    _avg?: FollowersDataTestAvgAggregateInputType
    _sum?: FollowersDataTestSumAggregateInputType
    _min?: FollowersDataTestMinAggregateInputType
    _max?: FollowersDataTestMaxAggregateInputType
  }

  export type FollowersDataTestGroupByOutputType = {
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
    _count: FollowersDataTestCountAggregateOutputType | null
    _avg: FollowersDataTestAvgAggregateOutputType | null
    _sum: FollowersDataTestSumAggregateOutputType | null
    _min: FollowersDataTestMinAggregateOutputType | null
    _max: FollowersDataTestMaxAggregateOutputType | null
  }

  type GetFollowersDataTestGroupByPayload<T extends FollowersDataTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowersDataTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowersDataTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowersDataTestGroupByOutputType[P]>
            : GetScalarType<T[P], FollowersDataTestGroupByOutputType[P]>
        }
      >
    >


  export type FollowersDataTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["followersDataTest"]>



  export type FollowersDataTestSelectScalar = {
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

  export type FollowersDataTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_str" | "name" | "screen_name" | "location" | "description" | "url" | "entities" | "protected" | "followers_count" | "fast_followers_count" | "normal_followers_count" | "friends_count" | "listed_count" | "created_at" | "favourites_count" | "utc_offset" | "time_zone" | "geo_enabled" | "verified" | "statuses_count" | "media_count" | "lang" | "status" | "contributors_enabled" | "is_translator" | "is_translation_enabled" | "profile_background_color" | "profile_background_image_url" | "profile_background_image_url_https" | "profile_background_tile" | "profile_image_url" | "profile_image_url_https" | "profile_banner_url" | "profile_link_color" | "profile_sidebar_border_color" | "profile_sidebar_fill_color" | "profile_text_color" | "profile_use_background_image" | "has_extended_profile" | "default_profile" | "default_profile_image" | "pinned_tweet_ids" | "pinned_tweet_ids_str" | "has_custom_timelines" | "can_media_tag" | "followed_by" | "following" | "live_following" | "follow_request_sent" | "notifications" | "muting" | "blocking" | "blocked_by" | "advertiser_account_type" | "advertiser_account_service_levels" | "analytics_type" | "business_profile_state" | "translator_type" | "withheld_in_countries" | "require_some_consent" | "type" | "target_username" | "email", ExtArgs["result"]["followersDataTest"]>
  export type FollowersDataTestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FollowersDataTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowersDataTest"
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
    }, ExtArgs["result"]["followersDataTest"]>
    composites: {
      status: Prisma.$TweetStatusPayload | null
    }
  }

  type FollowersDataTestGetPayload<S extends boolean | null | undefined | FollowersDataTestDefaultArgs> = $Result.GetResult<Prisma.$FollowersDataTestPayload, S>

  type FollowersDataTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowersDataTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowersDataTestCountAggregateInputType | true
    }

  export interface FollowersDataTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowersDataTest'], meta: { name: 'FollowersDataTest' } }
    /**
     * Find zero or one FollowersDataTest that matches the filter.
     * @param {FollowersDataTestFindUniqueArgs} args - Arguments to find a FollowersDataTest
     * @example
     * // Get one FollowersDataTest
     * const followersDataTest = await prisma.followersDataTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowersDataTestFindUniqueArgs>(args: SelectSubset<T, FollowersDataTestFindUniqueArgs<ExtArgs>>): Prisma__FollowersDataTestClient<$Result.GetResult<Prisma.$FollowersDataTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FollowersDataTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowersDataTestFindUniqueOrThrowArgs} args - Arguments to find a FollowersDataTest
     * @example
     * // Get one FollowersDataTest
     * const followersDataTest = await prisma.followersDataTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowersDataTestFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowersDataTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowersDataTestClient<$Result.GetResult<Prisma.$FollowersDataTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowersDataTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersDataTestFindFirstArgs} args - Arguments to find a FollowersDataTest
     * @example
     * // Get one FollowersDataTest
     * const followersDataTest = await prisma.followersDataTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowersDataTestFindFirstArgs>(args?: SelectSubset<T, FollowersDataTestFindFirstArgs<ExtArgs>>): Prisma__FollowersDataTestClient<$Result.GetResult<Prisma.$FollowersDataTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowersDataTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersDataTestFindFirstOrThrowArgs} args - Arguments to find a FollowersDataTest
     * @example
     * // Get one FollowersDataTest
     * const followersDataTest = await prisma.followersDataTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowersDataTestFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowersDataTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowersDataTestClient<$Result.GetResult<Prisma.$FollowersDataTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FollowersDataTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersDataTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowersDataTests
     * const followersDataTests = await prisma.followersDataTest.findMany()
     * 
     * // Get first 10 FollowersDataTests
     * const followersDataTests = await prisma.followersDataTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followersDataTestWithIdOnly = await prisma.followersDataTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowersDataTestFindManyArgs>(args?: SelectSubset<T, FollowersDataTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowersDataTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FollowersDataTest.
     * @param {FollowersDataTestCreateArgs} args - Arguments to create a FollowersDataTest.
     * @example
     * // Create one FollowersDataTest
     * const FollowersDataTest = await prisma.followersDataTest.create({
     *   data: {
     *     // ... data to create a FollowersDataTest
     *   }
     * })
     * 
     */
    create<T extends FollowersDataTestCreateArgs>(args: SelectSubset<T, FollowersDataTestCreateArgs<ExtArgs>>): Prisma__FollowersDataTestClient<$Result.GetResult<Prisma.$FollowersDataTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FollowersDataTests.
     * @param {FollowersDataTestCreateManyArgs} args - Arguments to create many FollowersDataTests.
     * @example
     * // Create many FollowersDataTests
     * const followersDataTest = await prisma.followersDataTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowersDataTestCreateManyArgs>(args?: SelectSubset<T, FollowersDataTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FollowersDataTest.
     * @param {FollowersDataTestDeleteArgs} args - Arguments to delete one FollowersDataTest.
     * @example
     * // Delete one FollowersDataTest
     * const FollowersDataTest = await prisma.followersDataTest.delete({
     *   where: {
     *     // ... filter to delete one FollowersDataTest
     *   }
     * })
     * 
     */
    delete<T extends FollowersDataTestDeleteArgs>(args: SelectSubset<T, FollowersDataTestDeleteArgs<ExtArgs>>): Prisma__FollowersDataTestClient<$Result.GetResult<Prisma.$FollowersDataTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FollowersDataTest.
     * @param {FollowersDataTestUpdateArgs} args - Arguments to update one FollowersDataTest.
     * @example
     * // Update one FollowersDataTest
     * const followersDataTest = await prisma.followersDataTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowersDataTestUpdateArgs>(args: SelectSubset<T, FollowersDataTestUpdateArgs<ExtArgs>>): Prisma__FollowersDataTestClient<$Result.GetResult<Prisma.$FollowersDataTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FollowersDataTests.
     * @param {FollowersDataTestDeleteManyArgs} args - Arguments to filter FollowersDataTests to delete.
     * @example
     * // Delete a few FollowersDataTests
     * const { count } = await prisma.followersDataTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowersDataTestDeleteManyArgs>(args?: SelectSubset<T, FollowersDataTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowersDataTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersDataTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowersDataTests
     * const followersDataTest = await prisma.followersDataTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowersDataTestUpdateManyArgs>(args: SelectSubset<T, FollowersDataTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FollowersDataTest.
     * @param {FollowersDataTestUpsertArgs} args - Arguments to update or create a FollowersDataTest.
     * @example
     * // Update or create a FollowersDataTest
     * const followersDataTest = await prisma.followersDataTest.upsert({
     *   create: {
     *     // ... data to create a FollowersDataTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowersDataTest we want to update
     *   }
     * })
     */
    upsert<T extends FollowersDataTestUpsertArgs>(args: SelectSubset<T, FollowersDataTestUpsertArgs<ExtArgs>>): Prisma__FollowersDataTestClient<$Result.GetResult<Prisma.$FollowersDataTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FollowersDataTests that matches the filter.
     * @param {FollowersDataTestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const followersDataTest = await prisma.followersDataTest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FollowersDataTestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FollowersDataTest.
     * @param {FollowersDataTestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const followersDataTest = await prisma.followersDataTest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FollowersDataTestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FollowersDataTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersDataTestCountArgs} args - Arguments to filter FollowersDataTests to count.
     * @example
     * // Count the number of FollowersDataTests
     * const count = await prisma.followersDataTest.count({
     *   where: {
     *     // ... the filter for the FollowersDataTests we want to count
     *   }
     * })
    **/
    count<T extends FollowersDataTestCountArgs>(
      args?: Subset<T, FollowersDataTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowersDataTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowersDataTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersDataTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowersDataTestAggregateArgs>(args: Subset<T, FollowersDataTestAggregateArgs>): Prisma.PrismaPromise<GetFollowersDataTestAggregateType<T>>

    /**
     * Group by FollowersDataTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersDataTestGroupByArgs} args - Group by arguments.
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
      T extends FollowersDataTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowersDataTestGroupByArgs['orderBy'] }
        : { orderBy?: FollowersDataTestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowersDataTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowersDataTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowersDataTest model
   */
  readonly fields: FollowersDataTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowersDataTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowersDataTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FollowersDataTest model
   */
  interface FollowersDataTestFieldRefs {
    readonly id: FieldRef<"FollowersDataTest", 'String'>
    readonly id_str: FieldRef<"FollowersDataTest", 'String'>
    readonly name: FieldRef<"FollowersDataTest", 'String'>
    readonly screen_name: FieldRef<"FollowersDataTest", 'String'>
    readonly location: FieldRef<"FollowersDataTest", 'String'>
    readonly description: FieldRef<"FollowersDataTest", 'String'>
    readonly url: FieldRef<"FollowersDataTest", 'String'>
    readonly entities: FieldRef<"FollowersDataTest", 'Json'>
    readonly protected: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly followers_count: FieldRef<"FollowersDataTest", 'Int'>
    readonly fast_followers_count: FieldRef<"FollowersDataTest", 'Int'>
    readonly normal_followers_count: FieldRef<"FollowersDataTest", 'Int'>
    readonly friends_count: FieldRef<"FollowersDataTest", 'Int'>
    readonly listed_count: FieldRef<"FollowersDataTest", 'Int'>
    readonly created_at: FieldRef<"FollowersDataTest", 'String'>
    readonly favourites_count: FieldRef<"FollowersDataTest", 'Int'>
    readonly utc_offset: FieldRef<"FollowersDataTest", 'String'>
    readonly time_zone: FieldRef<"FollowersDataTest", 'String'>
    readonly geo_enabled: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly verified: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly statuses_count: FieldRef<"FollowersDataTest", 'Int'>
    readonly media_count: FieldRef<"FollowersDataTest", 'Int'>
    readonly lang: FieldRef<"FollowersDataTest", 'String'>
    readonly contributors_enabled: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly is_translator: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly is_translation_enabled: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly profile_background_color: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_background_image_url: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_background_image_url_https: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_background_tile: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly profile_image_url: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_image_url_https: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_banner_url: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_link_color: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_sidebar_border_color: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_sidebar_fill_color: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_text_color: FieldRef<"FollowersDataTest", 'String'>
    readonly profile_use_background_image: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly has_extended_profile: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly default_profile: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly default_profile_image: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly pinned_tweet_ids: FieldRef<"FollowersDataTest", 'Json'>
    readonly pinned_tweet_ids_str: FieldRef<"FollowersDataTest", 'String[]'>
    readonly has_custom_timelines: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly can_media_tag: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly followed_by: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly following: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly live_following: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly follow_request_sent: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly notifications: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly muting: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly blocking: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly blocked_by: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly advertiser_account_type: FieldRef<"FollowersDataTest", 'String'>
    readonly advertiser_account_service_levels: FieldRef<"FollowersDataTest", 'String[]'>
    readonly analytics_type: FieldRef<"FollowersDataTest", 'String'>
    readonly business_profile_state: FieldRef<"FollowersDataTest", 'String'>
    readonly translator_type: FieldRef<"FollowersDataTest", 'String'>
    readonly withheld_in_countries: FieldRef<"FollowersDataTest", 'String[]'>
    readonly require_some_consent: FieldRef<"FollowersDataTest", 'Boolean'>
    readonly type: FieldRef<"FollowersDataTest", 'String'>
    readonly target_username: FieldRef<"FollowersDataTest", 'String'>
    readonly email: FieldRef<"FollowersDataTest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FollowersDataTest findUnique
   */
  export type FollowersDataTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
    /**
     * Filter, which FollowersDataTest to fetch.
     */
    where: FollowersDataTestWhereUniqueInput
  }

  /**
   * FollowersDataTest findUniqueOrThrow
   */
  export type FollowersDataTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
    /**
     * Filter, which FollowersDataTest to fetch.
     */
    where: FollowersDataTestWhereUniqueInput
  }

  /**
   * FollowersDataTest findFirst
   */
  export type FollowersDataTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
    /**
     * Filter, which FollowersDataTest to fetch.
     */
    where?: FollowersDataTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowersDataTests to fetch.
     */
    orderBy?: FollowersDataTestOrderByWithRelationInput | FollowersDataTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowersDataTests.
     */
    cursor?: FollowersDataTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowersDataTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowersDataTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowersDataTests.
     */
    distinct?: FollowersDataTestScalarFieldEnum | FollowersDataTestScalarFieldEnum[]
  }

  /**
   * FollowersDataTest findFirstOrThrow
   */
  export type FollowersDataTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
    /**
     * Filter, which FollowersDataTest to fetch.
     */
    where?: FollowersDataTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowersDataTests to fetch.
     */
    orderBy?: FollowersDataTestOrderByWithRelationInput | FollowersDataTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowersDataTests.
     */
    cursor?: FollowersDataTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowersDataTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowersDataTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowersDataTests.
     */
    distinct?: FollowersDataTestScalarFieldEnum | FollowersDataTestScalarFieldEnum[]
  }

  /**
   * FollowersDataTest findMany
   */
  export type FollowersDataTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
    /**
     * Filter, which FollowersDataTests to fetch.
     */
    where?: FollowersDataTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowersDataTests to fetch.
     */
    orderBy?: FollowersDataTestOrderByWithRelationInput | FollowersDataTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowersDataTests.
     */
    cursor?: FollowersDataTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowersDataTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowersDataTests.
     */
    skip?: number
    distinct?: FollowersDataTestScalarFieldEnum | FollowersDataTestScalarFieldEnum[]
  }

  /**
   * FollowersDataTest create
   */
  export type FollowersDataTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowersDataTest.
     */
    data: XOR<FollowersDataTestCreateInput, FollowersDataTestUncheckedCreateInput>
  }

  /**
   * FollowersDataTest createMany
   */
  export type FollowersDataTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowersDataTests.
     */
    data: FollowersDataTestCreateManyInput | FollowersDataTestCreateManyInput[]
  }

  /**
   * FollowersDataTest update
   */
  export type FollowersDataTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowersDataTest.
     */
    data: XOR<FollowersDataTestUpdateInput, FollowersDataTestUncheckedUpdateInput>
    /**
     * Choose, which FollowersDataTest to update.
     */
    where: FollowersDataTestWhereUniqueInput
  }

  /**
   * FollowersDataTest updateMany
   */
  export type FollowersDataTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowersDataTests.
     */
    data: XOR<FollowersDataTestUpdateManyMutationInput, FollowersDataTestUncheckedUpdateManyInput>
    /**
     * Filter which FollowersDataTests to update
     */
    where?: FollowersDataTestWhereInput
    /**
     * Limit how many FollowersDataTests to update.
     */
    limit?: number
  }

  /**
   * FollowersDataTest upsert
   */
  export type FollowersDataTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowersDataTest to update in case it exists.
     */
    where: FollowersDataTestWhereUniqueInput
    /**
     * In case the FollowersDataTest found by the `where` argument doesn't exist, create a new FollowersDataTest with this data.
     */
    create: XOR<FollowersDataTestCreateInput, FollowersDataTestUncheckedCreateInput>
    /**
     * In case the FollowersDataTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowersDataTestUpdateInput, FollowersDataTestUncheckedUpdateInput>
  }

  /**
   * FollowersDataTest delete
   */
  export type FollowersDataTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
    /**
     * Filter which FollowersDataTest to delete.
     */
    where: FollowersDataTestWhereUniqueInput
  }

  /**
   * FollowersDataTest deleteMany
   */
  export type FollowersDataTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowersDataTests to delete
     */
    where?: FollowersDataTestWhereInput
    /**
     * Limit how many FollowersDataTests to delete.
     */
    limit?: number
  }

  /**
   * FollowersDataTest findRaw
   */
  export type FollowersDataTestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FollowersDataTest aggregateRaw
   */
  export type FollowersDataTestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FollowersDataTest without action
   */
  export type FollowersDataTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersDataTest
     */
    select?: FollowersDataTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowersDataTest
     */
    omit?: FollowersDataTestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowersDataTestInclude<ExtArgs> | null
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


  export const UserProfileTestScalarFieldEnum: {
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
    location: 'location',
    profile_interstitial_type: 'profile_interstitial_type',
    statuses_count: 'statuses_count',
    translator_type: 'translator_type',
    name: 'name',
    url: 'url',
    withheld_in_countries: 'withheld_in_countries',
    user_id_str: 'user_id_str',
    profile_url: 'profile_url',
    profile_image_url_https: 'profile_image_url_https',
    verified: 'verified',
    updated_time: 'updated_time'
  };

  export type UserProfileTestScalarFieldEnum = (typeof UserProfileTestScalarFieldEnum)[keyof typeof UserProfileTestScalarFieldEnum]


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
    views_count: 'views_count',
    updated_time: 'updated_time'
  };

  export type TweetsDataScalarFieldEnum = (typeof TweetsDataScalarFieldEnum)[keyof typeof TweetsDataScalarFieldEnum]


  export const TweetsDataTestScalarFieldEnum: {
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
    twitterUrl: 'twitterUrl',
    url: 'url',
    user_id_str: 'user_id_str',
    views_count: 'views_count',
    updated_time: 'updated_time'
  };

  export type TweetsDataTestScalarFieldEnum = (typeof TweetsDataTestScalarFieldEnum)[keyof typeof TweetsDataTestScalarFieldEnum]


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


  export const FollowersDataTestScalarFieldEnum: {
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

  export type FollowersDataTestScalarFieldEnum = (typeof FollowersDataTestScalarFieldEnum)[keyof typeof FollowersDataTestScalarFieldEnum]


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

  export type UserProfileTestWhereInput = {
    AND?: UserProfileTestWhereInput | UserProfileTestWhereInput[]
    OR?: UserProfileTestWhereInput[]
    NOT?: UserProfileTestWhereInput | UserProfileTestWhereInput[]
    id?: StringFilter<"UserProfileTest"> | string
    default_profile?: BoolFilter<"UserProfileTest"> | boolean
    default_profile_image?: BoolFilter<"UserProfileTest"> | boolean
    description?: StringNullableFilter<"UserProfileTest"> | string | null
    entities?: XOR<EntitiesProfileNullableCompositeFilter, EntitiesProfileObjectEqualityInput> | null
    fast_followers_count?: IntNullableFilter<"UserProfileTest"> | number | null
    favourites_count?: IntNullableFilter<"UserProfileTest"> | number | null
    followers_count?: IntNullableFilter<"UserProfileTest"> | number | null
    friends_count?: IntNullableFilter<"UserProfileTest"> | number | null
    has_custom_timelines?: BoolNullableFilter<"UserProfileTest"> | boolean | null
    is_translator?: BoolNullableFilter<"UserProfileTest"> | boolean | null
    listed_count?: IntNullableFilter<"UserProfileTest"> | number | null
    media_count?: IntNullableFilter<"UserProfileTest"> | number | null
    normal_followers_count?: IntNullableFilter<"UserProfileTest"> | number | null
    pinned_tweet_ids_str?: StringNullableListFilter<"UserProfileTest">
    possibly_sensitive?: BoolNullableFilter<"UserProfileTest"> | boolean | null
    profile_banner_url?: StringNullableFilter<"UserProfileTest"> | string | null
    location?: StringNullableFilter<"UserProfileTest"> | string | null
    profile_interstitial_type?: StringNullableFilter<"UserProfileTest"> | string | null
    statuses_count?: IntNullableFilter<"UserProfileTest"> | number | null
    translator_type?: StringNullableFilter<"UserProfileTest"> | string | null
    name?: StringNullableFilter<"UserProfileTest"> | string | null
    url?: StringNullableFilter<"UserProfileTest"> | string | null
    withheld_in_countries?: StringNullableListFilter<"UserProfileTest">
    user_id_str?: StringNullableFilter<"UserProfileTest"> | string | null
    profile_url?: StringNullableFilter<"UserProfileTest"> | string | null
    profile_image_url_https?: StringNullableFilter<"UserProfileTest"> | string | null
    verified?: BoolNullableFilter<"UserProfileTest"> | boolean | null
    updated_time?: DateTimeNullableFilter<"UserProfileTest"> | Date | string | null
  }

  export type UserProfileTestOrderByWithRelationInput = {
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
    location?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    name?: SortOrder
    url?: SortOrder
    withheld_in_countries?: SortOrder
    user_id_str?: SortOrder
    profile_url?: SortOrder
    profile_image_url_https?: SortOrder
    verified?: SortOrder
    updated_time?: SortOrder
  }

  export type UserProfileTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserProfileTestWhereInput | UserProfileTestWhereInput[]
    OR?: UserProfileTestWhereInput[]
    NOT?: UserProfileTestWhereInput | UserProfileTestWhereInput[]
    default_profile?: BoolFilter<"UserProfileTest"> | boolean
    default_profile_image?: BoolFilter<"UserProfileTest"> | boolean
    description?: StringNullableFilter<"UserProfileTest"> | string | null
    entities?: XOR<EntitiesProfileNullableCompositeFilter, EntitiesProfileObjectEqualityInput> | null
    fast_followers_count?: IntNullableFilter<"UserProfileTest"> | number | null
    favourites_count?: IntNullableFilter<"UserProfileTest"> | number | null
    followers_count?: IntNullableFilter<"UserProfileTest"> | number | null
    friends_count?: IntNullableFilter<"UserProfileTest"> | number | null
    has_custom_timelines?: BoolNullableFilter<"UserProfileTest"> | boolean | null
    is_translator?: BoolNullableFilter<"UserProfileTest"> | boolean | null
    listed_count?: IntNullableFilter<"UserProfileTest"> | number | null
    media_count?: IntNullableFilter<"UserProfileTest"> | number | null
    normal_followers_count?: IntNullableFilter<"UserProfileTest"> | number | null
    pinned_tweet_ids_str?: StringNullableListFilter<"UserProfileTest">
    possibly_sensitive?: BoolNullableFilter<"UserProfileTest"> | boolean | null
    profile_banner_url?: StringNullableFilter<"UserProfileTest"> | string | null
    location?: StringNullableFilter<"UserProfileTest"> | string | null
    profile_interstitial_type?: StringNullableFilter<"UserProfileTest"> | string | null
    statuses_count?: IntNullableFilter<"UserProfileTest"> | number | null
    translator_type?: StringNullableFilter<"UserProfileTest"> | string | null
    name?: StringNullableFilter<"UserProfileTest"> | string | null
    url?: StringNullableFilter<"UserProfileTest"> | string | null
    withheld_in_countries?: StringNullableListFilter<"UserProfileTest">
    user_id_str?: StringNullableFilter<"UserProfileTest"> | string | null
    profile_url?: StringNullableFilter<"UserProfileTest"> | string | null
    profile_image_url_https?: StringNullableFilter<"UserProfileTest"> | string | null
    verified?: BoolNullableFilter<"UserProfileTest"> | boolean | null
    updated_time?: DateTimeNullableFilter<"UserProfileTest"> | Date | string | null
  }, "id">

  export type UserProfileTestOrderByWithAggregationInput = {
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
    location?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    name?: SortOrder
    url?: SortOrder
    withheld_in_countries?: SortOrder
    user_id_str?: SortOrder
    profile_url?: SortOrder
    profile_image_url_https?: SortOrder
    verified?: SortOrder
    updated_time?: SortOrder
    _count?: UserProfileTestCountOrderByAggregateInput
    _avg?: UserProfileTestAvgOrderByAggregateInput
    _max?: UserProfileTestMaxOrderByAggregateInput
    _min?: UserProfileTestMinOrderByAggregateInput
    _sum?: UserProfileTestSumOrderByAggregateInput
  }

  export type UserProfileTestScalarWhereWithAggregatesInput = {
    AND?: UserProfileTestScalarWhereWithAggregatesInput | UserProfileTestScalarWhereWithAggregatesInput[]
    OR?: UserProfileTestScalarWhereWithAggregatesInput[]
    NOT?: UserProfileTestScalarWhereWithAggregatesInput | UserProfileTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfileTest"> | string
    default_profile?: BoolWithAggregatesFilter<"UserProfileTest"> | boolean
    default_profile_image?: BoolWithAggregatesFilter<"UserProfileTest"> | boolean
    description?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    fast_followers_count?: IntNullableWithAggregatesFilter<"UserProfileTest"> | number | null
    favourites_count?: IntNullableWithAggregatesFilter<"UserProfileTest"> | number | null
    followers_count?: IntNullableWithAggregatesFilter<"UserProfileTest"> | number | null
    friends_count?: IntNullableWithAggregatesFilter<"UserProfileTest"> | number | null
    has_custom_timelines?: BoolNullableWithAggregatesFilter<"UserProfileTest"> | boolean | null
    is_translator?: BoolNullableWithAggregatesFilter<"UserProfileTest"> | boolean | null
    listed_count?: IntNullableWithAggregatesFilter<"UserProfileTest"> | number | null
    media_count?: IntNullableWithAggregatesFilter<"UserProfileTest"> | number | null
    normal_followers_count?: IntNullableWithAggregatesFilter<"UserProfileTest"> | number | null
    pinned_tweet_ids_str?: StringNullableListFilter<"UserProfileTest">
    possibly_sensitive?: BoolNullableWithAggregatesFilter<"UserProfileTest"> | boolean | null
    profile_banner_url?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    location?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    profile_interstitial_type?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    statuses_count?: IntNullableWithAggregatesFilter<"UserProfileTest"> | number | null
    translator_type?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    name?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    url?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    withheld_in_countries?: StringNullableListFilter<"UserProfileTest">
    user_id_str?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    profile_url?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    profile_image_url_https?: StringNullableWithAggregatesFilter<"UserProfileTest"> | string | null
    verified?: BoolNullableWithAggregatesFilter<"UserProfileTest"> | boolean | null
    updated_time?: DateTimeNullableWithAggregatesFilter<"UserProfileTest"> | Date | string | null
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
    views_count?: StringNullableFilter<"TweetsData"> | string | null
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
    views_count?: SortOrder
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
    views_count?: StringNullableFilter<"TweetsData"> | string | null
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
    views_count?: SortOrder
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
    views_count?: StringNullableWithAggregatesFilter<"TweetsData"> | string | null
    updated_time?: DateTimeWithAggregatesFilter<"TweetsData"> | Date | string
  }

  export type TweetsDataTestWhereInput = {
    AND?: TweetsDataTestWhereInput | TweetsDataTestWhereInput[]
    OR?: TweetsDataTestWhereInput[]
    NOT?: TweetsDataTestWhereInput | TweetsDataTestWhereInput[]
    id?: StringFilter<"TweetsDataTest"> | string
    id_str?: StringFilter<"TweetsDataTest"> | string
    bookmark_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    bookmarked?: BoolNullableFilter<"TweetsDataTest"> | boolean | null
    conversation_id_str?: StringNullableFilter<"TweetsDataTest"> | string | null
    created_at?: StringNullableFilter<"TweetsDataTest"> | string | null
    display_text_range?: IntNullableListFilter<"TweetsDataTest">
    extended_entities?: XOR<ExtendedEntitiesNullableCompositeFilter, ExtendedEntitiesObjectEqualityInput> | null
    entities?: JsonNullableFilter<"TweetsDataTest">
    favorite_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    favorited?: BoolNullableFilter<"TweetsDataTest"> | boolean | null
    full_text?: StringNullableFilter<"TweetsDataTest"> | string | null
    is_quote_status?: BoolNullableFilter<"TweetsDataTest"> | boolean | null
    lang?: StringNullableFilter<"TweetsDataTest"> | string | null
    quote_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    reply_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    retweet_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    retweeted?: BoolNullableFilter<"TweetsDataTest"> | boolean | null
    twitterUrl?: StringNullableFilter<"TweetsDataTest"> | string | null
    user?: XOR<TweetUserNullableCompositeFilter, TweetUserObjectEqualityInput> | null
    url?: StringNullableFilter<"TweetsDataTest"> | string | null
    user_id_str?: StringNullableFilter<"TweetsDataTest"> | string | null
    views_count?: StringNullableFilter<"TweetsDataTest"> | string | null
    updated_time?: DateTimeNullableFilter<"TweetsDataTest"> | Date | string | null
  }

  export type TweetsDataTestOrderByWithRelationInput = {
    id?: SortOrder
    id_str?: SortOrder
    bookmark_count?: SortOrder
    bookmarked?: SortOrder
    conversation_id_str?: SortOrder
    created_at?: SortOrder
    display_text_range?: SortOrder
    extended_entities?: ExtendedEntitiesOrderByInput
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
    twitterUrl?: SortOrder
    user?: TweetUserOrderByInput
    url?: SortOrder
    user_id_str?: SortOrder
    views_count?: SortOrder
    updated_time?: SortOrder
  }

  export type TweetsDataTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TweetsDataTestWhereInput | TweetsDataTestWhereInput[]
    OR?: TweetsDataTestWhereInput[]
    NOT?: TweetsDataTestWhereInput | TweetsDataTestWhereInput[]
    id_str?: StringFilter<"TweetsDataTest"> | string
    bookmark_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    bookmarked?: BoolNullableFilter<"TweetsDataTest"> | boolean | null
    conversation_id_str?: StringNullableFilter<"TweetsDataTest"> | string | null
    created_at?: StringNullableFilter<"TweetsDataTest"> | string | null
    display_text_range?: IntNullableListFilter<"TweetsDataTest">
    extended_entities?: XOR<ExtendedEntitiesNullableCompositeFilter, ExtendedEntitiesObjectEqualityInput> | null
    entities?: JsonNullableFilter<"TweetsDataTest">
    favorite_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    favorited?: BoolNullableFilter<"TweetsDataTest"> | boolean | null
    full_text?: StringNullableFilter<"TweetsDataTest"> | string | null
    is_quote_status?: BoolNullableFilter<"TweetsDataTest"> | boolean | null
    lang?: StringNullableFilter<"TweetsDataTest"> | string | null
    quote_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    reply_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    retweet_count?: IntNullableFilter<"TweetsDataTest"> | number | null
    retweeted?: BoolNullableFilter<"TweetsDataTest"> | boolean | null
    twitterUrl?: StringNullableFilter<"TweetsDataTest"> | string | null
    user?: XOR<TweetUserNullableCompositeFilter, TweetUserObjectEqualityInput> | null
    url?: StringNullableFilter<"TweetsDataTest"> | string | null
    user_id_str?: StringNullableFilter<"TweetsDataTest"> | string | null
    views_count?: StringNullableFilter<"TweetsDataTest"> | string | null
    updated_time?: DateTimeNullableFilter<"TweetsDataTest"> | Date | string | null
  }, "id">

  export type TweetsDataTestOrderByWithAggregationInput = {
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
    twitterUrl?: SortOrder
    url?: SortOrder
    user_id_str?: SortOrder
    views_count?: SortOrder
    updated_time?: SortOrder
    _count?: TweetsDataTestCountOrderByAggregateInput
    _avg?: TweetsDataTestAvgOrderByAggregateInput
    _max?: TweetsDataTestMaxOrderByAggregateInput
    _min?: TweetsDataTestMinOrderByAggregateInput
    _sum?: TweetsDataTestSumOrderByAggregateInput
  }

  export type TweetsDataTestScalarWhereWithAggregatesInput = {
    AND?: TweetsDataTestScalarWhereWithAggregatesInput | TweetsDataTestScalarWhereWithAggregatesInput[]
    OR?: TweetsDataTestScalarWhereWithAggregatesInput[]
    NOT?: TweetsDataTestScalarWhereWithAggregatesInput | TweetsDataTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TweetsDataTest"> | string
    id_str?: StringWithAggregatesFilter<"TweetsDataTest"> | string
    bookmark_count?: IntNullableWithAggregatesFilter<"TweetsDataTest"> | number | null
    bookmarked?: BoolNullableWithAggregatesFilter<"TweetsDataTest"> | boolean | null
    conversation_id_str?: StringNullableWithAggregatesFilter<"TweetsDataTest"> | string | null
    created_at?: StringNullableWithAggregatesFilter<"TweetsDataTest"> | string | null
    display_text_range?: IntNullableListFilter<"TweetsDataTest">
    entities?: JsonNullableWithAggregatesFilter<"TweetsDataTest">
    favorite_count?: IntNullableWithAggregatesFilter<"TweetsDataTest"> | number | null
    favorited?: BoolNullableWithAggregatesFilter<"TweetsDataTest"> | boolean | null
    full_text?: StringNullableWithAggregatesFilter<"TweetsDataTest"> | string | null
    is_quote_status?: BoolNullableWithAggregatesFilter<"TweetsDataTest"> | boolean | null
    lang?: StringNullableWithAggregatesFilter<"TweetsDataTest"> | string | null
    quote_count?: IntNullableWithAggregatesFilter<"TweetsDataTest"> | number | null
    reply_count?: IntNullableWithAggregatesFilter<"TweetsDataTest"> | number | null
    retweet_count?: IntNullableWithAggregatesFilter<"TweetsDataTest"> | number | null
    retweeted?: BoolNullableWithAggregatesFilter<"TweetsDataTest"> | boolean | null
    twitterUrl?: StringNullableWithAggregatesFilter<"TweetsDataTest"> | string | null
    url?: StringNullableWithAggregatesFilter<"TweetsDataTest"> | string | null
    user_id_str?: StringNullableWithAggregatesFilter<"TweetsDataTest"> | string | null
    views_count?: StringNullableWithAggregatesFilter<"TweetsDataTest"> | string | null
    updated_time?: DateTimeNullableWithAggregatesFilter<"TweetsDataTest"> | Date | string | null
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

  export type FollowersDataTestWhereInput = {
    AND?: FollowersDataTestWhereInput | FollowersDataTestWhereInput[]
    OR?: FollowersDataTestWhereInput[]
    NOT?: FollowersDataTestWhereInput | FollowersDataTestWhereInput[]
    id?: StringFilter<"FollowersDataTest"> | string
    id_str?: StringFilter<"FollowersDataTest"> | string
    name?: StringNullableFilter<"FollowersDataTest"> | string | null
    screen_name?: StringNullableFilter<"FollowersDataTest"> | string | null
    location?: StringNullableFilter<"FollowersDataTest"> | string | null
    description?: StringNullableFilter<"FollowersDataTest"> | string | null
    url?: StringNullableFilter<"FollowersDataTest"> | string | null
    entities?: JsonNullableFilter<"FollowersDataTest">
    protected?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    followers_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    fast_followers_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    normal_followers_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    friends_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    listed_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    created_at?: StringNullableFilter<"FollowersDataTest"> | string | null
    favourites_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    utc_offset?: StringNullableFilter<"FollowersDataTest"> | string | null
    time_zone?: StringNullableFilter<"FollowersDataTest"> | string | null
    geo_enabled?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    verified?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    statuses_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    media_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    lang?: StringNullableFilter<"FollowersDataTest"> | string | null
    status?: XOR<TweetStatusNullableCompositeFilter, TweetStatusObjectEqualityInput> | null
    contributors_enabled?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    is_translator?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    is_translation_enabled?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    profile_background_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_background_image_url?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_background_image_url_https?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_background_tile?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    profile_image_url?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_image_url_https?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_banner_url?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_link_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_sidebar_border_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_sidebar_fill_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_text_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_use_background_image?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    has_extended_profile?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    default_profile?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    default_profile_image?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    pinned_tweet_ids?: JsonNullableFilter<"FollowersDataTest">
    pinned_tweet_ids_str?: StringNullableListFilter<"FollowersDataTest">
    has_custom_timelines?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    can_media_tag?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    followed_by?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    following?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    live_following?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    follow_request_sent?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    notifications?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    muting?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    blocking?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    blocked_by?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    advertiser_account_type?: StringNullableFilter<"FollowersDataTest"> | string | null
    advertiser_account_service_levels?: StringNullableListFilter<"FollowersDataTest">
    analytics_type?: StringNullableFilter<"FollowersDataTest"> | string | null
    business_profile_state?: StringNullableFilter<"FollowersDataTest"> | string | null
    translator_type?: StringNullableFilter<"FollowersDataTest"> | string | null
    withheld_in_countries?: StringNullableListFilter<"FollowersDataTest">
    require_some_consent?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    type?: StringNullableFilter<"FollowersDataTest"> | string | null
    target_username?: StringNullableFilter<"FollowersDataTest"> | string | null
    email?: StringNullableFilter<"FollowersDataTest"> | string | null
  }

  export type FollowersDataTestOrderByWithRelationInput = {
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

  export type FollowersDataTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FollowersDataTestWhereInput | FollowersDataTestWhereInput[]
    OR?: FollowersDataTestWhereInput[]
    NOT?: FollowersDataTestWhereInput | FollowersDataTestWhereInput[]
    id_str?: StringFilter<"FollowersDataTest"> | string
    name?: StringNullableFilter<"FollowersDataTest"> | string | null
    screen_name?: StringNullableFilter<"FollowersDataTest"> | string | null
    location?: StringNullableFilter<"FollowersDataTest"> | string | null
    description?: StringNullableFilter<"FollowersDataTest"> | string | null
    url?: StringNullableFilter<"FollowersDataTest"> | string | null
    entities?: JsonNullableFilter<"FollowersDataTest">
    protected?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    followers_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    fast_followers_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    normal_followers_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    friends_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    listed_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    created_at?: StringNullableFilter<"FollowersDataTest"> | string | null
    favourites_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    utc_offset?: StringNullableFilter<"FollowersDataTest"> | string | null
    time_zone?: StringNullableFilter<"FollowersDataTest"> | string | null
    geo_enabled?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    verified?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    statuses_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    media_count?: IntNullableFilter<"FollowersDataTest"> | number | null
    lang?: StringNullableFilter<"FollowersDataTest"> | string | null
    status?: XOR<TweetStatusNullableCompositeFilter, TweetStatusObjectEqualityInput> | null
    contributors_enabled?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    is_translator?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    is_translation_enabled?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    profile_background_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_background_image_url?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_background_image_url_https?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_background_tile?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    profile_image_url?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_image_url_https?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_banner_url?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_link_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_sidebar_border_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_sidebar_fill_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_text_color?: StringNullableFilter<"FollowersDataTest"> | string | null
    profile_use_background_image?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    has_extended_profile?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    default_profile?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    default_profile_image?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    pinned_tweet_ids?: JsonNullableFilter<"FollowersDataTest">
    pinned_tweet_ids_str?: StringNullableListFilter<"FollowersDataTest">
    has_custom_timelines?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    can_media_tag?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    followed_by?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    following?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    live_following?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    follow_request_sent?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    notifications?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    muting?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    blocking?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    blocked_by?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    advertiser_account_type?: StringNullableFilter<"FollowersDataTest"> | string | null
    advertiser_account_service_levels?: StringNullableListFilter<"FollowersDataTest">
    analytics_type?: StringNullableFilter<"FollowersDataTest"> | string | null
    business_profile_state?: StringNullableFilter<"FollowersDataTest"> | string | null
    translator_type?: StringNullableFilter<"FollowersDataTest"> | string | null
    withheld_in_countries?: StringNullableListFilter<"FollowersDataTest">
    require_some_consent?: BoolNullableFilter<"FollowersDataTest"> | boolean | null
    type?: StringNullableFilter<"FollowersDataTest"> | string | null
    target_username?: StringNullableFilter<"FollowersDataTest"> | string | null
    email?: StringNullableFilter<"FollowersDataTest"> | string | null
  }, "id">

  export type FollowersDataTestOrderByWithAggregationInput = {
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
    _count?: FollowersDataTestCountOrderByAggregateInput
    _avg?: FollowersDataTestAvgOrderByAggregateInput
    _max?: FollowersDataTestMaxOrderByAggregateInput
    _min?: FollowersDataTestMinOrderByAggregateInput
    _sum?: FollowersDataTestSumOrderByAggregateInput
  }

  export type FollowersDataTestScalarWhereWithAggregatesInput = {
    AND?: FollowersDataTestScalarWhereWithAggregatesInput | FollowersDataTestScalarWhereWithAggregatesInput[]
    OR?: FollowersDataTestScalarWhereWithAggregatesInput[]
    NOT?: FollowersDataTestScalarWhereWithAggregatesInput | FollowersDataTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FollowersDataTest"> | string
    id_str?: StringWithAggregatesFilter<"FollowersDataTest"> | string
    name?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    screen_name?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    location?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    description?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    url?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    entities?: JsonNullableWithAggregatesFilter<"FollowersDataTest">
    protected?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    followers_count?: IntNullableWithAggregatesFilter<"FollowersDataTest"> | number | null
    fast_followers_count?: IntNullableWithAggregatesFilter<"FollowersDataTest"> | number | null
    normal_followers_count?: IntNullableWithAggregatesFilter<"FollowersDataTest"> | number | null
    friends_count?: IntNullableWithAggregatesFilter<"FollowersDataTest"> | number | null
    listed_count?: IntNullableWithAggregatesFilter<"FollowersDataTest"> | number | null
    created_at?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    favourites_count?: IntNullableWithAggregatesFilter<"FollowersDataTest"> | number | null
    utc_offset?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    time_zone?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    geo_enabled?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    verified?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    statuses_count?: IntNullableWithAggregatesFilter<"FollowersDataTest"> | number | null
    media_count?: IntNullableWithAggregatesFilter<"FollowersDataTest"> | number | null
    lang?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    contributors_enabled?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    is_translator?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    is_translation_enabled?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    profile_background_color?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_background_image_url?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_background_image_url_https?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_background_tile?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    profile_image_url?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_image_url_https?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_banner_url?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_link_color?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_sidebar_border_color?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_sidebar_fill_color?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_text_color?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    profile_use_background_image?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    has_extended_profile?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    default_profile?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    default_profile_image?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    pinned_tweet_ids?: JsonNullableWithAggregatesFilter<"FollowersDataTest">
    pinned_tweet_ids_str?: StringNullableListFilter<"FollowersDataTest">
    has_custom_timelines?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    can_media_tag?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    followed_by?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    following?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    live_following?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    follow_request_sent?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    notifications?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    muting?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    blocking?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    blocked_by?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    advertiser_account_type?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    advertiser_account_service_levels?: StringNullableListFilter<"FollowersDataTest">
    analytics_type?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    business_profile_state?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    translator_type?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    withheld_in_countries?: StringNullableListFilter<"FollowersDataTest">
    require_some_consent?: BoolNullableWithAggregatesFilter<"FollowersDataTest"> | boolean | null
    type?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    target_username?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
    email?: StringNullableWithAggregatesFilter<"FollowersDataTest"> | string | null
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

  export type UserProfileTestCreateInput = {
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
    pinned_tweet_ids_str?: UserProfileTestCreatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: boolean | null
    profile_banner_url?: string | null
    location?: string | null
    profile_interstitial_type?: string | null
    statuses_count?: number | null
    translator_type?: string | null
    name?: string | null
    url?: string | null
    withheld_in_countries?: UserProfileTestCreatewithheld_in_countriesInput | string[]
    user_id_str?: string | null
    profile_url?: string | null
    profile_image_url_https?: string | null
    verified?: boolean | null
    updated_time?: Date | string | null
  }

  export type UserProfileTestUncheckedCreateInput = {
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
    pinned_tweet_ids_str?: UserProfileTestCreatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: boolean | null
    profile_banner_url?: string | null
    location?: string | null
    profile_interstitial_type?: string | null
    statuses_count?: number | null
    translator_type?: string | null
    name?: string | null
    url?: string | null
    withheld_in_countries?: UserProfileTestCreatewithheld_in_countriesInput | string[]
    user_id_str?: string | null
    profile_url?: string | null
    profile_image_url_https?: string | null
    verified?: boolean | null
    updated_time?: Date | string | null
  }

  export type UserProfileTestUpdateInput = {
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
    pinned_tweet_ids_str?: UserProfileTestUpdatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profile_interstitial_type?: NullableStringFieldUpdateOperationsInput | string | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: UserProfileTestUpdatewithheld_in_countriesInput | string[]
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileTestUncheckedUpdateInput = {
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
    pinned_tweet_ids_str?: UserProfileTestUpdatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profile_interstitial_type?: NullableStringFieldUpdateOperationsInput | string | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: UserProfileTestUpdatewithheld_in_countriesInput | string[]
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileTestCreateManyInput = {
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
    pinned_tweet_ids_str?: UserProfileTestCreatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: boolean | null
    profile_banner_url?: string | null
    location?: string | null
    profile_interstitial_type?: string | null
    statuses_count?: number | null
    translator_type?: string | null
    name?: string | null
    url?: string | null
    withheld_in_countries?: UserProfileTestCreatewithheld_in_countriesInput | string[]
    user_id_str?: string | null
    profile_url?: string | null
    profile_image_url_https?: string | null
    verified?: boolean | null
    updated_time?: Date | string | null
  }

  export type UserProfileTestUpdateManyMutationInput = {
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
    pinned_tweet_ids_str?: UserProfileTestUpdatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profile_interstitial_type?: NullableStringFieldUpdateOperationsInput | string | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: UserProfileTestUpdatewithheld_in_countriesInput | string[]
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileTestUncheckedUpdateManyInput = {
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
    pinned_tweet_ids_str?: UserProfileTestUpdatepinned_tweet_ids_strInput | string[]
    possibly_sensitive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profile_banner_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    profile_interstitial_type?: NullableStringFieldUpdateOperationsInput | string | null
    statuses_count?: NullableIntFieldUpdateOperationsInput | number | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: UserProfileTestUpdatewithheld_in_countriesInput | string[]
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    profile_url?: NullableStringFieldUpdateOperationsInput | string | null
    profile_image_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    views_count?: string | null
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
    views_count?: string | null
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
    views_count?: NullableStringFieldUpdateOperationsInput | string | null
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
    views_count?: NullableStringFieldUpdateOperationsInput | string | null
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
    views_count?: string | null
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
    views_count?: NullableStringFieldUpdateOperationsInput | string | null
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
    views_count?: NullableStringFieldUpdateOperationsInput | string | null
    updated_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetsDataTestCreateInput = {
    id?: string
    id_str: string
    bookmark_count?: number | null
    bookmarked?: boolean | null
    conversation_id_str?: string | null
    created_at?: string | null
    display_text_range?: TweetsDataTestCreatedisplay_text_rangeInput | number[]
    extended_entities?: XOR<ExtendedEntitiesNullableCreateEnvelopeInput, ExtendedEntitiesCreateInput> | null
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
    twitterUrl?: string | null
    user?: XOR<TweetUserNullableCreateEnvelopeInput, TweetUserCreateInput> | null
    url?: string | null
    user_id_str?: string | null
    views_count?: string | null
    updated_time?: Date | string | null
  }

  export type TweetsDataTestUncheckedCreateInput = {
    id?: string
    id_str: string
    bookmark_count?: number | null
    bookmarked?: boolean | null
    conversation_id_str?: string | null
    created_at?: string | null
    display_text_range?: TweetsDataTestCreatedisplay_text_rangeInput | number[]
    extended_entities?: XOR<ExtendedEntitiesNullableCreateEnvelopeInput, ExtendedEntitiesCreateInput> | null
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
    twitterUrl?: string | null
    user?: XOR<TweetUserNullableCreateEnvelopeInput, TweetUserCreateInput> | null
    url?: string | null
    user_id_str?: string | null
    views_count?: string | null
    updated_time?: Date | string | null
  }

  export type TweetsDataTestUpdateInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    bookmark_count?: NullableIntFieldUpdateOperationsInput | number | null
    bookmarked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversation_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    display_text_range?: TweetsDataTestUpdatedisplay_text_rangeInput | number[]
    extended_entities?: XOR<ExtendedEntitiesNullableUpdateEnvelopeInput, ExtendedEntitiesCreateInput> | null
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
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: XOR<TweetUserNullableUpdateEnvelopeInput, TweetUserCreateInput> | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    views_count?: NullableStringFieldUpdateOperationsInput | string | null
    updated_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TweetsDataTestUncheckedUpdateInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    bookmark_count?: NullableIntFieldUpdateOperationsInput | number | null
    bookmarked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversation_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    display_text_range?: TweetsDataTestUpdatedisplay_text_rangeInput | number[]
    extended_entities?: XOR<ExtendedEntitiesNullableUpdateEnvelopeInput, ExtendedEntitiesCreateInput> | null
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
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: XOR<TweetUserNullableUpdateEnvelopeInput, TweetUserCreateInput> | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    views_count?: NullableStringFieldUpdateOperationsInput | string | null
    updated_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TweetsDataTestCreateManyInput = {
    id?: string
    id_str: string
    bookmark_count?: number | null
    bookmarked?: boolean | null
    conversation_id_str?: string | null
    created_at?: string | null
    display_text_range?: TweetsDataTestCreatedisplay_text_rangeInput | number[]
    extended_entities?: XOR<ExtendedEntitiesNullableCreateEnvelopeInput, ExtendedEntitiesCreateInput> | null
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
    twitterUrl?: string | null
    user?: XOR<TweetUserNullableCreateEnvelopeInput, TweetUserCreateInput> | null
    url?: string | null
    user_id_str?: string | null
    views_count?: string | null
    updated_time?: Date | string | null
  }

  export type TweetsDataTestUpdateManyMutationInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    bookmark_count?: NullableIntFieldUpdateOperationsInput | number | null
    bookmarked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversation_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    display_text_range?: TweetsDataTestUpdatedisplay_text_rangeInput | number[]
    extended_entities?: XOR<ExtendedEntitiesNullableUpdateEnvelopeInput, ExtendedEntitiesCreateInput> | null
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
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: XOR<TweetUserNullableUpdateEnvelopeInput, TweetUserCreateInput> | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    views_count?: NullableStringFieldUpdateOperationsInput | string | null
    updated_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TweetsDataTestUncheckedUpdateManyInput = {
    id_str?: StringFieldUpdateOperationsInput | string
    bookmark_count?: NullableIntFieldUpdateOperationsInput | number | null
    bookmarked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    conversation_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableStringFieldUpdateOperationsInput | string | null
    display_text_range?: TweetsDataTestUpdatedisplay_text_rangeInput | number[]
    extended_entities?: XOR<ExtendedEntitiesNullableUpdateEnvelopeInput, ExtendedEntitiesCreateInput> | null
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
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: XOR<TweetUserNullableUpdateEnvelopeInput, TweetUserCreateInput> | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    user_id_str?: NullableStringFieldUpdateOperationsInput | string | null
    views_count?: NullableStringFieldUpdateOperationsInput | string | null
    updated_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type FollowersDataTestCreateInput = {
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
    pinned_tweet_ids_str?: FollowersDataTestCreatepinned_tweet_ids_strInput | string[]
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
    advertiser_account_service_levels?: FollowersDataTestCreateadvertiser_account_service_levelsInput | string[]
    analytics_type?: string | null
    business_profile_state?: string | null
    translator_type?: string | null
    withheld_in_countries?: FollowersDataTestCreatewithheld_in_countriesInput | string[]
    require_some_consent?: boolean | null
    type?: string | null
    target_username?: string | null
    email?: string | null
  }

  export type FollowersDataTestUncheckedCreateInput = {
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
    pinned_tweet_ids_str?: FollowersDataTestCreatepinned_tweet_ids_strInput | string[]
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
    advertiser_account_service_levels?: FollowersDataTestCreateadvertiser_account_service_levelsInput | string[]
    analytics_type?: string | null
    business_profile_state?: string | null
    translator_type?: string | null
    withheld_in_countries?: FollowersDataTestCreatewithheld_in_countriesInput | string[]
    require_some_consent?: boolean | null
    type?: string | null
    target_username?: string | null
    email?: string | null
  }

  export type FollowersDataTestUpdateInput = {
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
    pinned_tweet_ids_str?: FollowersDataTestUpdatepinned_tweet_ids_strInput | string[]
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
    advertiser_account_service_levels?: FollowersDataTestUpdateadvertiser_account_service_levelsInput | string[]
    analytics_type?: NullableStringFieldUpdateOperationsInput | string | null
    business_profile_state?: NullableStringFieldUpdateOperationsInput | string | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: FollowersDataTestUpdatewithheld_in_countriesInput | string[]
    require_some_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    target_username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowersDataTestUncheckedUpdateInput = {
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
    pinned_tweet_ids_str?: FollowersDataTestUpdatepinned_tweet_ids_strInput | string[]
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
    advertiser_account_service_levels?: FollowersDataTestUpdateadvertiser_account_service_levelsInput | string[]
    analytics_type?: NullableStringFieldUpdateOperationsInput | string | null
    business_profile_state?: NullableStringFieldUpdateOperationsInput | string | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: FollowersDataTestUpdatewithheld_in_countriesInput | string[]
    require_some_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    target_username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowersDataTestCreateManyInput = {
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
    pinned_tweet_ids_str?: FollowersDataTestCreatepinned_tweet_ids_strInput | string[]
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
    advertiser_account_service_levels?: FollowersDataTestCreateadvertiser_account_service_levelsInput | string[]
    analytics_type?: string | null
    business_profile_state?: string | null
    translator_type?: string | null
    withheld_in_countries?: FollowersDataTestCreatewithheld_in_countriesInput | string[]
    require_some_consent?: boolean | null
    type?: string | null
    target_username?: string | null
    email?: string | null
  }

  export type FollowersDataTestUpdateManyMutationInput = {
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
    pinned_tweet_ids_str?: FollowersDataTestUpdatepinned_tweet_ids_strInput | string[]
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
    advertiser_account_service_levels?: FollowersDataTestUpdateadvertiser_account_service_levelsInput | string[]
    analytics_type?: NullableStringFieldUpdateOperationsInput | string | null
    business_profile_state?: NullableStringFieldUpdateOperationsInput | string | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: FollowersDataTestUpdatewithheld_in_countriesInput | string[]
    require_some_consent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    target_username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowersDataTestUncheckedUpdateManyInput = {
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
    pinned_tweet_ids_str?: FollowersDataTestUpdatepinned_tweet_ids_strInput | string[]
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
    advertiser_account_service_levels?: FollowersDataTestUpdateadvertiser_account_service_levelsInput | string[]
    analytics_type?: NullableStringFieldUpdateOperationsInput | string | null
    business_profile_state?: NullableStringFieldUpdateOperationsInput | string | null
    translator_type?: NullableStringFieldUpdateOperationsInput | string | null
    withheld_in_countries?: FollowersDataTestUpdatewithheld_in_countriesInput | string[]
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
    url?: UrlEntityObjectEqualityInput | null
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
    url?: UrlEntityOrderByInput
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type UserProfileTestCountOrderByAggregateInput = {
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
    location?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    name?: SortOrder
    url?: SortOrder
    withheld_in_countries?: SortOrder
    user_id_str?: SortOrder
    profile_url?: SortOrder
    profile_image_url_https?: SortOrder
    verified?: SortOrder
    updated_time?: SortOrder
  }

  export type UserProfileTestAvgOrderByAggregateInput = {
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    statuses_count?: SortOrder
  }

  export type UserProfileTestMaxOrderByAggregateInput = {
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
    location?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    name?: SortOrder
    url?: SortOrder
    user_id_str?: SortOrder
    profile_url?: SortOrder
    profile_image_url_https?: SortOrder
    verified?: SortOrder
    updated_time?: SortOrder
  }

  export type UserProfileTestMinOrderByAggregateInput = {
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
    location?: SortOrder
    profile_interstitial_type?: SortOrder
    statuses_count?: SortOrder
    translator_type?: SortOrder
    name?: SortOrder
    url?: SortOrder
    user_id_str?: SortOrder
    profile_url?: SortOrder
    profile_image_url_https?: SortOrder
    verified?: SortOrder
    updated_time?: SortOrder
  }

  export type UserProfileTestSumOrderByAggregateInput = {
    fast_followers_count?: SortOrder
    favourites_count?: SortOrder
    followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    media_count?: SortOrder
    normal_followers_count?: SortOrder
    statuses_count?: SortOrder
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
    isSet?: boolean
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
    views_count?: SortOrder
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
    views_count?: SortOrder
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
    views_count?: SortOrder
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

  export type ExtendedEntitiesNullableCompositeFilter = {
    equals?: ExtendedEntitiesObjectEqualityInput | null
    is?: ExtendedEntitiesWhereInput | null
    isNot?: ExtendedEntitiesWhereInput | null
    isSet?: boolean
  }

  export type ExtendedEntitiesObjectEqualityInput = {
    media?: MediaEntityObjectEqualityInput[]
  }

  export type ExtendedEntitiesOrderByInput = {
    media?: MediaEntityOrderByCompositeAggregateInput
  }

  export type TweetsDataTestCountOrderByAggregateInput = {
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
    twitterUrl?: SortOrder
    url?: SortOrder
    user_id_str?: SortOrder
    views_count?: SortOrder
    updated_time?: SortOrder
  }

  export type TweetsDataTestAvgOrderByAggregateInput = {
    bookmark_count?: SortOrder
    display_text_range?: SortOrder
    favorite_count?: SortOrder
    quote_count?: SortOrder
    reply_count?: SortOrder
    retweet_count?: SortOrder
  }

  export type TweetsDataTestMaxOrderByAggregateInput = {
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
    twitterUrl?: SortOrder
    url?: SortOrder
    user_id_str?: SortOrder
    views_count?: SortOrder
    updated_time?: SortOrder
  }

  export type TweetsDataTestMinOrderByAggregateInput = {
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
    twitterUrl?: SortOrder
    url?: SortOrder
    user_id_str?: SortOrder
    views_count?: SortOrder
    updated_time?: SortOrder
  }

  export type TweetsDataTestSumOrderByAggregateInput = {
    bookmark_count?: SortOrder
    display_text_range?: SortOrder
    favorite_count?: SortOrder
    quote_count?: SortOrder
    reply_count?: SortOrder
    retweet_count?: SortOrder
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

  export type FollowersDataTestCountOrderByAggregateInput = {
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

  export type FollowersDataTestAvgOrderByAggregateInput = {
    followers_count?: SortOrder
    fast_followers_count?: SortOrder
    normal_followers_count?: SortOrder
    friends_count?: SortOrder
    listed_count?: SortOrder
    favourites_count?: SortOrder
    statuses_count?: SortOrder
    media_count?: SortOrder
  }

  export type FollowersDataTestMaxOrderByAggregateInput = {
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

  export type FollowersDataTestMinOrderByAggregateInput = {
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

  export type FollowersDataTestSumOrderByAggregateInput = {
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
    url?: UrlEntityCreateInput | null
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

  export type UserProfileTestCreatepinned_tweet_ids_strInput = {
    set: string[]
  }

  export type UserProfileTestCreatewithheld_in_countriesInput = {
    set: string[]
  }

  export type UserProfileTestUpdatepinned_tweet_ids_strInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserProfileTestUpdatewithheld_in_countriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
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

  export type TweetsDataTestCreatedisplay_text_rangeInput = {
    set: number[]
  }

  export type ExtendedEntitiesNullableCreateEnvelopeInput = {
    set?: ExtendedEntitiesCreateInput | null
  }

  export type ExtendedEntitiesCreateInput = {
    media?: MediaEntityCreateInput | MediaEntityCreateInput[]
  }

  export type TweetsDataTestUpdatedisplay_text_rangeInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ExtendedEntitiesNullableUpdateEnvelopeInput = {
    set?: ExtendedEntitiesCreateInput | null
    upsert?: ExtendedEntitiesUpsertInput
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

  export type FollowersDataTestCreatepinned_tweet_ids_strInput = {
    set: string[]
  }

  export type FollowersDataTestCreateadvertiser_account_service_levelsInput = {
    set: string[]
  }

  export type FollowersDataTestCreatewithheld_in_countriesInput = {
    set: string[]
  }

  export type FollowersDataTestUpdatepinned_tweet_ids_strInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FollowersDataTestUpdateadvertiser_account_service_levelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FollowersDataTestUpdatewithheld_in_countriesInput = {
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
    url?: XOR<UrlEntityNullableCompositeFilter, UrlEntityObjectEqualityInput> | null
  }

  export type DescriptionProfileObjectEqualityInput = {
    urls?: UrlEntityObjectEqualityInput[]
  }

  export type UrlEntityObjectEqualityInput = {
    display_url?: string | null
    expanded_url?: string | null
    url?: string | null
    indices?: number[]
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

  export type UrlEntityOrderByInput = {
    display_url?: SortOrder
    expanded_url?: SortOrder
    url?: SortOrder
    indices?: SortOrder
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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
    isSet?: boolean
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

  export type ExtendedEntitiesWhereInput = {
    AND?: ExtendedEntitiesWhereInput | ExtendedEntitiesWhereInput[]
    OR?: ExtendedEntitiesWhereInput[]
    NOT?: ExtendedEntitiesWhereInput | ExtendedEntitiesWhereInput[]
    media?: MediaEntityCompositeListFilter | MediaEntityObjectEqualityInput[]
  }

  export type MediaEntityObjectEqualityInput = {
    display_url?: string | null
    expanded_url?: string | null
    url?: string | null
    indices?: number[]
    media_url_https?: string | null
    type?: string | null
  }

  export type MediaEntityOrderByCompositeAggregateInput = {
    _count?: SortOrder
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

  export type UrlEntityCreateInput = {
    display_url?: string | null
    expanded_url?: string | null
    url?: string | null
    indices?: UrlEntityCreateindicesInput | number[]
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

  export type MediaEntityCreateInput = {
    display_url?: string | null
    expanded_url?: string | null
    url?: string | null
    indices?: MediaEntityCreateindicesInput | number[]
    media_url_https?: string | null
    type?: string | null
  }

  export type ExtendedEntitiesUpsertInput = {
    set: ExtendedEntitiesCreateInput | null
    update: ExtendedEntitiesUpdateInput
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

  export type UrlEntityNullableCompositeFilter = {
    equals?: UrlEntityObjectEqualityInput | null
    is?: UrlEntityWhereInput | null
    isNot?: UrlEntityWhereInput | null
    isSet?: boolean
  }

  export type UrlEntityOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type MediaEntityCompositeListFilter = {
    equals?: MediaEntityObjectEqualityInput[]
    every?: MediaEntityWhereInput
    some?: MediaEntityWhereInput
    none?: MediaEntityWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type UrlEntityCreateindicesInput = {
    set: number[]
  }

  export type EntitiesProfileUpdateInput = {
    description?: XOR<DescriptionProfileNullableUpdateEnvelopeInput, DescriptionProfileCreateInput> | null
    url?: XOR<UrlEntityNullableUpdateEnvelopeInput, UrlEntityCreateInput> | null
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

  export type MediaEntityCreateindicesInput = {
    set: number[]
  }

  export type ExtendedEntitiesUpdateInput = {
    media?: XOR<MediaEntityListUpdateEnvelopeInput, MediaEntityCreateInput> | MediaEntityCreateInput[]
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

  export type UrlEntityWhereInput = {
    AND?: UrlEntityWhereInput | UrlEntityWhereInput[]
    OR?: UrlEntityWhereInput[]
    NOT?: UrlEntityWhereInput | UrlEntityWhereInput[]
    display_url?: StringNullableFilter<"UrlEntity"> | string | null
    expanded_url?: StringNullableFilter<"UrlEntity"> | string | null
    url?: StringNullableFilter<"UrlEntity"> | string | null
    indices?: IntNullableListFilter<"UrlEntity">
  }

  export type MediaEntityWhereInput = {
    AND?: MediaEntityWhereInput | MediaEntityWhereInput[]
    OR?: MediaEntityWhereInput[]
    NOT?: MediaEntityWhereInput | MediaEntityWhereInput[]
    display_url?: StringNullableFilter<"MediaEntity"> | string | null
    expanded_url?: StringNullableFilter<"MediaEntity"> | string | null
    url?: StringNullableFilter<"MediaEntity"> | string | null
    indices?: IntNullableListFilter<"MediaEntity">
    media_url_https?: StringNullableFilter<"MediaEntity"> | string | null
    type?: StringNullableFilter<"MediaEntity"> | string | null
  }

  export type DescriptionProfileNullableUpdateEnvelopeInput = {
    set?: DescriptionProfileCreateInput | null
    upsert?: DescriptionProfileUpsertInput
    unset?: boolean
  }

  export type UrlEntityNullableUpdateEnvelopeInput = {
    set?: UrlEntityCreateInput | null
    upsert?: UrlEntityUpsertInput
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

  export type MediaEntityListUpdateEnvelopeInput = {
    set?: MediaEntityCreateInput | MediaEntityCreateInput[]
    push?: MediaEntityCreateInput | MediaEntityCreateInput[]
    updateMany?: MediaEntityUpdateManyInput
    deleteMany?: MediaEntityDeleteManyInput
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

  export type UrlEntityUpsertInput = {
    set: UrlEntityCreateInput | null
    update: UrlEntityUpdateInput
  }

  export type MediaEntityUpdateManyInput = {
    where: MediaEntityWhereInput
    data: MediaEntityUpdateInput
  }

  export type MediaEntityDeleteManyInput = {
    where: MediaEntityWhereInput
  }

  export type DescriptionProfileUpdateInput = {
    urls?: XOR<UrlEntityListUpdateEnvelopeInput, UrlEntityCreateInput> | UrlEntityCreateInput[]
  }

  export type UrlEntityUpdateInput = {
    display_url?: NullableStringFieldUpdateOperationsInput | string | null
    expanded_url?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indices?: UrlEntityUpdateindicesInput | number[]
  }

  export type MediaEntityUpdateInput = {
    display_url?: NullableStringFieldUpdateOperationsInput | string | null
    expanded_url?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    indices?: MediaEntityUpdateindicesInput | number[]
    media_url_https?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UrlEntityListUpdateEnvelopeInput = {
    set?: UrlEntityCreateInput | UrlEntityCreateInput[]
    push?: UrlEntityCreateInput | UrlEntityCreateInput[]
    updateMany?: UrlEntityUpdateManyInput
    deleteMany?: UrlEntityDeleteManyInput
  }

  export type UrlEntityUpdateindicesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type MediaEntityUpdateindicesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UrlEntityUpdateManyInput = {
    where: UrlEntityWhereInput
    data: UrlEntityUpdateInput
  }

  export type UrlEntityDeleteManyInput = {
    where: UrlEntityWhereInput
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