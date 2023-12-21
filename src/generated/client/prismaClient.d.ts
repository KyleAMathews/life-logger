
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Event_types
 * 
 */
export type Event_types = {
  /**
   * @zod.string.uuid()
   */
  id: string
  name: string
  user_id: string
}

/**
 * Model Events
 * 
 */
export type Events = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  type: string
  created_at: Date | null
  user_id: string
}

/**
 * Model Users
 * 
 */
export type Users = {
  id: string
  name: string
  avatar_url: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Event_types
 * const event_types = await prisma.event_types.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Event_types
   * const event_types = await prisma.event_types.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.event_types`: Exposes CRUD operations for the **Event_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_types
    * const event_types = await prisma.event_types.findMany()
    * ```
    */
  get event_types(): Prisma.Event_typesDelegate<GlobalReject>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 4.8.1
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Event_types: 'Event_types',
    Events: 'Events',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Event_typesCountOutputType
   */


  export type Event_typesCountOutputType = {
    events: number
  }

  export type Event_typesCountOutputTypeSelect = {
    events?: boolean
  }

  export type Event_typesCountOutputTypeGetPayload<S extends boolean | null | undefined | Event_typesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Event_typesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Event_typesCountOutputTypeArgs)
    ? Event_typesCountOutputType 
    : S extends { select: any } & (Event_typesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Event_typesCountOutputType ? Event_typesCountOutputType[P] : never
  } 
      : Event_typesCountOutputType




  // Custom InputTypes

  /**
   * Event_typesCountOutputType without action
   */
  export type Event_typesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Event_typesCountOutputType
     * 
    **/
    select?: Event_typesCountOutputTypeSelect | null
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    event_types: number
    events: number
  }

  export type UsersCountOutputTypeSelect = {
    event_types?: boolean
    events?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     * 
    **/
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Event_types
   */


  export type AggregateEvent_types = {
    _count: Event_typesCountAggregateOutputType | null
    _min: Event_typesMinAggregateOutputType | null
    _max: Event_typesMaxAggregateOutputType | null
  }

  export type Event_typesMinAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
  }

  export type Event_typesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
  }

  export type Event_typesCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    _all: number
  }


  export type Event_typesMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type Event_typesMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type Event_typesCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    _all?: true
  }

  export type Event_typesAggregateArgs = {
    /**
     * Filter which Event_types to aggregate.
     * 
    **/
    where?: Event_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Event_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Event_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Event_types
    **/
    _count?: true | Event_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_typesMaxAggregateInputType
  }

  export type GetEvent_typesAggregateType<T extends Event_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_types[P]>
      : GetScalarType<T[P], AggregateEvent_types[P]>
  }




  export type Event_typesGroupByArgs = {
    where?: Event_typesWhereInput
    orderBy?: Enumerable<Event_typesOrderByWithAggregationInput>
    by: Array<Event_typesScalarFieldEnum>
    having?: Event_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_typesCountAggregateInputType | true
    _min?: Event_typesMinAggregateInputType
    _max?: Event_typesMaxAggregateInputType
  }


  export type Event_typesGroupByOutputType = {
    id: string
    name: string
    user_id: string
    _count: Event_typesCountAggregateOutputType | null
    _min: Event_typesMinAggregateOutputType | null
    _max: Event_typesMaxAggregateOutputType | null
  }

  type GetEvent_typesGroupByPayload<T extends Event_typesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Event_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Event_typesGroupByOutputType[P]>
        }
      >
    >


  export type Event_typesSelect = {
    id?: boolean
    name?: boolean
    user_id?: boolean
    users?: boolean | UsersArgs
    events?: boolean | Event_types$eventsArgs
    _count?: boolean | Event_typesCountOutputTypeArgs
  }


  export type Event_typesInclude = {
    users?: boolean | UsersArgs
    events?: boolean | Event_types$eventsArgs
    _count?: boolean | Event_typesCountOutputTypeArgs
  } 

  export type Event_typesGetPayload<S extends boolean | null | undefined | Event_typesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Event_types :
    S extends undefined ? never :
    S extends { include: any } & (Event_typesArgs | Event_typesFindManyArgs)
    ? Event_types  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? UsersGetPayload<S['include'][P]> :
        P extends 'events' ? Array < EventsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Event_typesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Event_typesArgs | Event_typesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? UsersGetPayload<S['select'][P]> :
        P extends 'events' ? Array < EventsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Event_typesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Event_types ? Event_types[P] : never
  } 
      : Event_types


  type Event_typesCountArgs = Merge<
    Omit<Event_typesFindManyArgs, 'select' | 'include'> & {
      select?: Event_typesCountAggregateInputType | true
    }
  >

  export interface Event_typesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Event_types that matches the filter.
     * @param {Event_typesFindUniqueArgs} args - Arguments to find a Event_types
     * @example
     * // Get one Event_types
     * const event_types = await prisma.event_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Event_typesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Event_typesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Event_types'> extends True ? Prisma__Event_typesClient<Event_typesGetPayload<T>> : Prisma__Event_typesClient<Event_typesGetPayload<T> | null, null>

    /**
     * Find one Event_types that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Event_typesFindUniqueOrThrowArgs} args - Arguments to find a Event_types
     * @example
     * // Get one Event_types
     * const event_types = await prisma.event_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Event_typesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Event_typesFindUniqueOrThrowArgs>
    ): Prisma__Event_typesClient<Event_typesGetPayload<T>>

    /**
     * Find the first Event_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_typesFindFirstArgs} args - Arguments to find a Event_types
     * @example
     * // Get one Event_types
     * const event_types = await prisma.event_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Event_typesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Event_typesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Event_types'> extends True ? Prisma__Event_typesClient<Event_typesGetPayload<T>> : Prisma__Event_typesClient<Event_typesGetPayload<T> | null, null>

    /**
     * Find the first Event_types that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_typesFindFirstOrThrowArgs} args - Arguments to find a Event_types
     * @example
     * // Get one Event_types
     * const event_types = await prisma.event_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Event_typesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Event_typesFindFirstOrThrowArgs>
    ): Prisma__Event_typesClient<Event_typesGetPayload<T>>

    /**
     * Find zero or more Event_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_typesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_types
     * const event_types = await prisma.event_types.findMany()
     * 
     * // Get first 10 Event_types
     * const event_types = await prisma.event_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event_typesWithIdOnly = await prisma.event_types.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Event_typesFindManyArgs>(
      args?: SelectSubset<T, Event_typesFindManyArgs>
    ): PrismaPromise<Array<Event_typesGetPayload<T>>>

    /**
     * Create a Event_types.
     * @param {Event_typesCreateArgs} args - Arguments to create a Event_types.
     * @example
     * // Create one Event_types
     * const Event_types = await prisma.event_types.create({
     *   data: {
     *     // ... data to create a Event_types
     *   }
     * })
     * 
    **/
    create<T extends Event_typesCreateArgs>(
      args: SelectSubset<T, Event_typesCreateArgs>
    ): Prisma__Event_typesClient<Event_typesGetPayload<T>>

    /**
     * Create many Event_types.
     *     @param {Event_typesCreateManyArgs} args - Arguments to create many Event_types.
     *     @example
     *     // Create many Event_types
     *     const event_types = await prisma.event_types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Event_typesCreateManyArgs>(
      args?: SelectSubset<T, Event_typesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Event_types.
     * @param {Event_typesDeleteArgs} args - Arguments to delete one Event_types.
     * @example
     * // Delete one Event_types
     * const Event_types = await prisma.event_types.delete({
     *   where: {
     *     // ... filter to delete one Event_types
     *   }
     * })
     * 
    **/
    delete<T extends Event_typesDeleteArgs>(
      args: SelectSubset<T, Event_typesDeleteArgs>
    ): Prisma__Event_typesClient<Event_typesGetPayload<T>>

    /**
     * Update one Event_types.
     * @param {Event_typesUpdateArgs} args - Arguments to update one Event_types.
     * @example
     * // Update one Event_types
     * const event_types = await prisma.event_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Event_typesUpdateArgs>(
      args: SelectSubset<T, Event_typesUpdateArgs>
    ): Prisma__Event_typesClient<Event_typesGetPayload<T>>

    /**
     * Delete zero or more Event_types.
     * @param {Event_typesDeleteManyArgs} args - Arguments to filter Event_types to delete.
     * @example
     * // Delete a few Event_types
     * const { count } = await prisma.event_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Event_typesDeleteManyArgs>(
      args?: SelectSubset<T, Event_typesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_types
     * const event_types = await prisma.event_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Event_typesUpdateManyArgs>(
      args: SelectSubset<T, Event_typesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_types.
     * @param {Event_typesUpsertArgs} args - Arguments to update or create a Event_types.
     * @example
     * // Update or create a Event_types
     * const event_types = await prisma.event_types.upsert({
     *   create: {
     *     // ... data to create a Event_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_types we want to update
     *   }
     * })
    **/
    upsert<T extends Event_typesUpsertArgs>(
      args: SelectSubset<T, Event_typesUpsertArgs>
    ): Prisma__Event_typesClient<Event_typesGetPayload<T>>

    /**
     * Count the number of Event_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_typesCountArgs} args - Arguments to filter Event_types to count.
     * @example
     * // Count the number of Event_types
     * const count = await prisma.event_types.count({
     *   where: {
     *     // ... the filter for the Event_types we want to count
     *   }
     * })
    **/
    count<T extends Event_typesCountArgs>(
      args?: Subset<T, Event_typesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Event_typesAggregateArgs>(args: Subset<T, Event_typesAggregateArgs>): PrismaPromise<GetEvent_typesAggregateType<T>>

    /**
     * Group by Event_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_typesGroupByArgs} args - Group by arguments.
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
      T extends Event_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Event_typesGroupByArgs['orderBy'] }
        : { orderBy?: Event_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Event_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_typesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Event_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Event_typesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    events<T extends Event_types$eventsArgs= {}>(args?: Subset<T, Event_types$eventsArgs>): PrismaPromise<Array<EventsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Event_types base type for findUnique actions
   */
  export type Event_typesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    /**
     * Filter, which Event_types to fetch.
     * 
    **/
    where: Event_typesWhereUniqueInput
  }

  /**
   * Event_types findUnique
   */
  export interface Event_typesFindUniqueArgs extends Event_typesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Event_types findUniqueOrThrow
   */
  export type Event_typesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    /**
     * Filter, which Event_types to fetch.
     * 
    **/
    where: Event_typesWhereUniqueInput
  }


  /**
   * Event_types base type for findFirst actions
   */
  export type Event_typesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    /**
     * Filter, which Event_types to fetch.
     * 
    **/
    where?: Event_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Event_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event_types.
     * 
    **/
    cursor?: Event_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event_types.
     * 
    **/
    distinct?: Enumerable<Event_typesScalarFieldEnum>
  }

  /**
   * Event_types findFirst
   */
  export interface Event_typesFindFirstArgs extends Event_typesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Event_types findFirstOrThrow
   */
  export type Event_typesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    /**
     * Filter, which Event_types to fetch.
     * 
    **/
    where?: Event_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Event_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Event_types.
     * 
    **/
    cursor?: Event_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Event_types.
     * 
    **/
    distinct?: Enumerable<Event_typesScalarFieldEnum>
  }


  /**
   * Event_types findMany
   */
  export type Event_typesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    /**
     * Filter, which Event_types to fetch.
     * 
    **/
    where?: Event_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Event_types to fetch.
     * 
    **/
    orderBy?: Enumerable<Event_typesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Event_types.
     * 
    **/
    cursor?: Event_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Event_types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Event_types.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Event_typesScalarFieldEnum>
  }


  /**
   * Event_types create
   */
  export type Event_typesCreateArgs = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    /**
     * The data needed to create a Event_types.
     * 
    **/
    data: XOR<Event_typesCreateInput, Event_typesUncheckedCreateInput>
  }


  /**
   * Event_types createMany
   */
  export type Event_typesCreateManyArgs = {
    /**
     * The data used to create many Event_types.
     * 
    **/
    data: Enumerable<Event_typesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Event_types update
   */
  export type Event_typesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    /**
     * The data needed to update a Event_types.
     * 
    **/
    data: XOR<Event_typesUpdateInput, Event_typesUncheckedUpdateInput>
    /**
     * Choose, which Event_types to update.
     * 
    **/
    where: Event_typesWhereUniqueInput
  }


  /**
   * Event_types updateMany
   */
  export type Event_typesUpdateManyArgs = {
    /**
     * The data used to update Event_types.
     * 
    **/
    data: XOR<Event_typesUpdateManyMutationInput, Event_typesUncheckedUpdateManyInput>
    /**
     * Filter which Event_types to update
     * 
    **/
    where?: Event_typesWhereInput
  }


  /**
   * Event_types upsert
   */
  export type Event_typesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    /**
     * The filter to search for the Event_types to update in case it exists.
     * 
    **/
    where: Event_typesWhereUniqueInput
    /**
     * In case the Event_types found by the `where` argument doesn't exist, create a new Event_types with this data.
     * 
    **/
    create: XOR<Event_typesCreateInput, Event_typesUncheckedCreateInput>
    /**
     * In case the Event_types was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Event_typesUpdateInput, Event_typesUncheckedUpdateInput>
  }


  /**
   * Event_types delete
   */
  export type Event_typesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    /**
     * Filter which Event_types to delete.
     * 
    **/
    where: Event_typesWhereUniqueInput
  }


  /**
   * Event_types deleteMany
   */
  export type Event_typesDeleteManyArgs = {
    /**
     * Filter which Event_types to delete
     * 
    **/
    where?: Event_typesWhereInput
  }


  /**
   * Event_types.events
   */
  export type Event_types$eventsArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    where?: EventsWhereInput
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * Event_types without action
   */
  export type Event_typesArgs = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
  }



  /**
   * Model Events
   */


  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsMinAggregateOutputType = {
    id: string | null
    type: string | null
    created_at: Date | null
    user_id: string | null
  }

  export type EventsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    created_at: Date | null
    user_id: string | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    type: number
    created_at: number
    user_id: number
    _all: number
  }


  export type EventsMinAggregateInputType = {
    id?: true
    type?: true
    created_at?: true
    user_id?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    type?: true
    created_at?: true
    user_id?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    type?: true
    created_at?: true
    user_id?: true
    _all?: true
  }

  export type EventsAggregateArgs = {
    /**
     * Filter which Events to aggregate.
     * 
    **/
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs = {
    where?: EventsWhereInput
    orderBy?: Enumerable<EventsOrderByWithAggregationInput>
    by: Array<EventsScalarFieldEnum>
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }


  export type EventsGroupByOutputType = {
    id: string
    type: string
    created_at: Date | null
    user_id: string
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect = {
    id?: boolean
    type?: boolean
    created_at?: boolean
    user_id?: boolean
    event_types?: boolean | Event_typesArgs
    users?: boolean | UsersArgs
  }


  export type EventsInclude = {
    event_types?: boolean | Event_typesArgs
    users?: boolean | UsersArgs
  } 

  export type EventsGetPayload<S extends boolean | null | undefined | EventsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Events :
    S extends undefined ? never :
    S extends { include: any } & (EventsArgs | EventsFindManyArgs)
    ? Events  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'event_types' ? Event_typesGetPayload<S['include'][P]> :
        P extends 'users' ? UsersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (EventsArgs | EventsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'event_types' ? Event_typesGetPayload<S['select'][P]> :
        P extends 'users' ? UsersGetPayload<S['select'][P]> :  P extends keyof Events ? Events[P] : never
  } 
      : Events


  type EventsCountArgs = Merge<
    Omit<EventsFindManyArgs, 'select' | 'include'> & {
      select?: EventsCountAggregateInputType | true
    }
  >

  export interface EventsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Events'> extends True ? Prisma__EventsClient<EventsGetPayload<T>> : Prisma__EventsClient<EventsGetPayload<T> | null, null>

    /**
     * Find one Events that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EventsFindUniqueOrThrowArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Events'> extends True ? Prisma__EventsClient<EventsGetPayload<T>> : Prisma__EventsClient<EventsGetPayload<T> | null, null>

    /**
     * Find the first Events that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventsFindFirstOrThrowArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventsFindManyArgs>(
      args?: SelectSubset<T, EventsFindManyArgs>
    ): PrismaPromise<Array<EventsGetPayload<T>>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
    **/
    create<T extends EventsCreateArgs>(
      args: SelectSubset<T, EventsCreateArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Create many Events.
     *     @param {EventsCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const events = await prisma.events.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventsCreateManyArgs>(
      args?: SelectSubset<T, EventsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
    **/
    delete<T extends EventsDeleteArgs>(
      args: SelectSubset<T, EventsDeleteArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventsUpdateArgs>(
      args: SelectSubset<T, EventsUpdateArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventsDeleteManyArgs>(
      args?: SelectSubset<T, EventsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventsUpdateManyArgs>(
      args: SelectSubset<T, EventsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
    **/
    upsert<T extends EventsUpsertArgs>(
      args: SelectSubset<T, EventsUpsertArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
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
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    event_types<T extends Event_typesArgs= {}>(args?: Subset<T, Event_typesArgs>): Prisma__Event_typesClient<Event_typesGetPayload<T> | Null>;

    users<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Events base type for findUnique actions
   */
  export type EventsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUnique
   */
  export interface EventsFindUniqueArgs extends EventsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where: EventsWhereUniqueInput
  }


  /**
   * Events base type for findFirst actions
   */
  export type EventsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     * 
    **/
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     * 
    **/
    distinct?: Enumerable<EventsScalarFieldEnum>
  }

  /**
   * Events findFirst
   */
  export interface EventsFindFirstArgs extends EventsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     * 
    **/
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     * 
    **/
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * Events findMany
   */
  export type EventsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Filter, which Events to fetch.
     * 
    **/
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     * 
    **/
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     * 
    **/
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * Events create
   */
  export type EventsCreateArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * The data needed to create a Events.
     * 
    **/
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }


  /**
   * Events createMany
   */
  export type EventsCreateManyArgs = {
    /**
     * The data used to create many Events.
     * 
    **/
    data: Enumerable<EventsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Events update
   */
  export type EventsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * The data needed to update a Events.
     * 
    **/
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     * 
    **/
    where: EventsWhereUniqueInput
  }


  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs = {
    /**
     * The data used to update Events.
     * 
    **/
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     * 
    **/
    where?: EventsWhereInput
  }


  /**
   * Events upsert
   */
  export type EventsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * The filter to search for the Events to update in case it exists.
     * 
    **/
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     * 
    **/
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }


  /**
   * Events delete
   */
  export type EventsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    /**
     * Filter which Events to delete.
     * 
    **/
    where: EventsWhereUniqueInput
  }


  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs = {
    /**
     * Filter which Events to delete
     * 
    **/
    where?: EventsWhereInput
  }


  /**
   * Events without action
   */
  export type EventsArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
  }



  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatar_url: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatar_url: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    avatar_url: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    avatar_url?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    avatar_url?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    avatar_url?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
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




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    name: string
    avatar_url: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    id?: boolean
    name?: boolean
    avatar_url?: boolean
    event_types?: boolean | Users$event_typesArgs
    events?: boolean | Users$eventsArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type UsersInclude = {
    event_types?: boolean | Users$event_typesArgs
    events?: boolean | Users$eventsArgs
    _count?: boolean | UsersCountOutputTypeArgs
  } 

  export type UsersGetPayload<S extends boolean | null | undefined | UsersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users :
    S extends undefined ? never :
    S extends { include: any } & (UsersArgs | UsersFindManyArgs)
    ? Users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'event_types' ? Array < Event_typesGetPayload<S['include'][P]>>  :
        P extends 'events' ? Array < EventsGetPayload<S['include'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UsersArgs | UsersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'event_types' ? Array < Event_typesGetPayload<S['select'][P]>>  :
        P extends 'events' ? Array < EventsGetPayload<S['select'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Users ? Users[P] : never
  } 
      : Users


  type UsersCountArgs = Merge<
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface UsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): PrismaPromise<Array<UsersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    event_types<T extends Users$event_typesArgs= {}>(args?: Subset<T, Users$event_typesArgs>): PrismaPromise<Array<Event_typesGetPayload<T>>| Null>;

    events<T extends Users$eventsArgs= {}>(args?: Subset<T, Users$eventsArgs>): PrismaPromise<Array<EventsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users base type for findUnique actions
   */
  export type UsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUnique
   */
  export interface UsersFindUniqueArgs extends UsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users base type for findFirst actions
   */
  export type UsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * Users findFirst
   */
  export interface UsersFindFirstArgs extends UsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     * 
    **/
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     * 
    **/
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     * 
    **/
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     * 
    **/
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UsersWhereInput
  }


  /**
   * Users.event_types
   */
  export type Users$event_typesArgs = {
    /**
     * Select specific fields to fetch from the Event_types
     * 
    **/
    select?: Event_typesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Event_typesInclude | null
    where?: Event_typesWhereInput
    orderBy?: Enumerable<Event_typesOrderByWithRelationInput>
    cursor?: Event_typesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Event_typesScalarFieldEnum>
  }


  /**
   * Users.events
   */
  export type Users$eventsArgs = {
    /**
     * Select specific fields to fetch from the Events
     * 
    **/
    select?: EventsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EventsInclude | null
    where?: EventsWhereInput
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Event_typesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id'
  };

  export type Event_typesScalarFieldEnum = (typeof Event_typesScalarFieldEnum)[keyof typeof Event_typesScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    created_at: 'created_at',
    user_id: 'user_id'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar_url: 'avatar_url'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type Event_typesWhereInput = {
    AND?: Enumerable<Event_typesWhereInput>
    OR?: Enumerable<Event_typesWhereInput>
    NOT?: Enumerable<Event_typesWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    user_id?: StringFilter | string
    users?: XOR<UsersRelationFilter, UsersWhereInput>
    events?: EventsListRelationFilter
  }

  export type Event_typesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    users?: UsersOrderByWithRelationInput
    events?: EventsOrderByRelationAggregateInput
  }

  export type Event_typesWhereUniqueInput = {
    id?: string
  }

  export type Event_typesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    _count?: Event_typesCountOrderByAggregateInput
    _max?: Event_typesMaxOrderByAggregateInput
    _min?: Event_typesMinOrderByAggregateInput
  }

  export type Event_typesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Event_typesScalarWhereWithAggregatesInput>
    OR?: Enumerable<Event_typesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Event_typesScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
  }

  export type EventsWhereInput = {
    AND?: Enumerable<EventsWhereInput>
    OR?: Enumerable<EventsWhereInput>
    NOT?: Enumerable<EventsWhereInput>
    id?: UuidFilter | string
    type?: UuidFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    user_id?: StringFilter | string
    event_types?: XOR<Event_typesRelationFilter, Event_typesWhereInput>
    users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    event_types?: Event_typesOrderByWithRelationInput
    users?: UsersOrderByWithRelationInput
  }

  export type EventsWhereUniqueInput = {
    id?: string
  }

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventsScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    type?: UuidWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    user_id?: StringWithAggregatesFilter | string
  }

  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    avatar_url?: StringNullableFilter | string | null
    event_types?: Event_typesListRelationFilter
    events?: EventsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    event_types?: Event_typesOrderByRelationAggregateInput
    events?: EventsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = {
    id?: string
  }

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    avatar_url?: StringNullableWithAggregatesFilter | string | null
  }

  export type Event_typesCreateInput = {
    id: string
    name: string
    users: UsersCreateNestedOneWithoutEvent_typesInput
    events?: EventsCreateNestedManyWithoutEvent_typesInput
  }

  export type Event_typesUncheckedCreateInput = {
    id: string
    name: string
    user_id: string
    events?: EventsUncheckedCreateNestedManyWithoutEvent_typesInput
  }

  export type Event_typesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateOneRequiredWithoutEvent_typesNestedInput
    events?: EventsUpdateManyWithoutEvent_typesNestedInput
  }

  export type Event_typesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    events?: EventsUncheckedUpdateManyWithoutEvent_typesNestedInput
  }

  export type Event_typesCreateManyInput = {
    id: string
    name: string
    user_id: string
  }

  export type Event_typesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Event_typesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type EventsCreateInput = {
    id: string
    created_at?: Date | string | null
    event_types: Event_typesCreateNestedOneWithoutEventsInput
    users: UsersCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateInput = {
    id: string
    type: string
    created_at?: Date | string | null
    user_id: string
  }

  export type EventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_types?: Event_typesUpdateOneRequiredWithoutEventsNestedInput
    users?: UsersUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type EventsCreateManyInput = {
    id: string
    type: string
    created_at?: Date | string | null
    user_id: string
  }

  export type EventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    id: string
    name: string
    avatar_url?: string | null
    event_types?: Event_typesCreateNestedManyWithoutUsersInput
    events?: EventsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id: string
    name: string
    avatar_url?: string | null
    event_types?: Event_typesUncheckedCreateNestedManyWithoutUsersInput
    events?: EventsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_types?: Event_typesUpdateManyWithoutUsersNestedInput
    events?: EventsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_types?: Event_typesUncheckedUpdateManyWithoutUsersNestedInput
    events?: EventsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id: string
    name: string
    avatar_url?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type EventsListRelationFilter = {
    every?: EventsWhereInput
    some?: EventsWhereInput
    none?: EventsWhereInput
  }

  export type EventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Event_typesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type Event_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type Event_typesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type Event_typesRelationFilter = {
    is?: Event_typesWhereInput
    isNot?: Event_typesWhereInput
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type Event_typesListRelationFilter = {
    every?: Event_typesWhereInput
    some?: Event_typesWhereInput
    none?: Event_typesWhereInput
  }

  export type Event_typesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar_url?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UsersCreateNestedOneWithoutEvent_typesInput = {
    create?: XOR<UsersCreateWithoutEvent_typesInput, UsersUncheckedCreateWithoutEvent_typesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEvent_typesInput
    connect?: UsersWhereUniqueInput
  }

  export type EventsCreateNestedManyWithoutEvent_typesInput = {
    create?: XOR<Enumerable<EventsCreateWithoutEvent_typesInput>, Enumerable<EventsUncheckedCreateWithoutEvent_typesInput>>
    connectOrCreate?: Enumerable<EventsCreateOrConnectWithoutEvent_typesInput>
    createMany?: EventsCreateManyEvent_typesInputEnvelope
    connect?: Enumerable<EventsWhereUniqueInput>
  }

  export type EventsUncheckedCreateNestedManyWithoutEvent_typesInput = {
    create?: XOR<Enumerable<EventsCreateWithoutEvent_typesInput>, Enumerable<EventsUncheckedCreateWithoutEvent_typesInput>>
    connectOrCreate?: Enumerable<EventsCreateOrConnectWithoutEvent_typesInput>
    createMany?: EventsCreateManyEvent_typesInputEnvelope
    connect?: Enumerable<EventsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsersUpdateOneRequiredWithoutEvent_typesNestedInput = {
    create?: XOR<UsersCreateWithoutEvent_typesInput, UsersUncheckedCreateWithoutEvent_typesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEvent_typesInput
    upsert?: UsersUpsertWithoutEvent_typesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutEvent_typesInput, UsersUncheckedUpdateWithoutEvent_typesInput>
  }

  export type EventsUpdateManyWithoutEvent_typesNestedInput = {
    create?: XOR<Enumerable<EventsCreateWithoutEvent_typesInput>, Enumerable<EventsUncheckedCreateWithoutEvent_typesInput>>
    connectOrCreate?: Enumerable<EventsCreateOrConnectWithoutEvent_typesInput>
    upsert?: Enumerable<EventsUpsertWithWhereUniqueWithoutEvent_typesInput>
    createMany?: EventsCreateManyEvent_typesInputEnvelope
    set?: Enumerable<EventsWhereUniqueInput>
    disconnect?: Enumerable<EventsWhereUniqueInput>
    delete?: Enumerable<EventsWhereUniqueInput>
    connect?: Enumerable<EventsWhereUniqueInput>
    update?: Enumerable<EventsUpdateWithWhereUniqueWithoutEvent_typesInput>
    updateMany?: Enumerable<EventsUpdateManyWithWhereWithoutEvent_typesInput>
    deleteMany?: Enumerable<EventsScalarWhereInput>
  }

  export type EventsUncheckedUpdateManyWithoutEvent_typesNestedInput = {
    create?: XOR<Enumerable<EventsCreateWithoutEvent_typesInput>, Enumerable<EventsUncheckedCreateWithoutEvent_typesInput>>
    connectOrCreate?: Enumerable<EventsCreateOrConnectWithoutEvent_typesInput>
    upsert?: Enumerable<EventsUpsertWithWhereUniqueWithoutEvent_typesInput>
    createMany?: EventsCreateManyEvent_typesInputEnvelope
    set?: Enumerable<EventsWhereUniqueInput>
    disconnect?: Enumerable<EventsWhereUniqueInput>
    delete?: Enumerable<EventsWhereUniqueInput>
    connect?: Enumerable<EventsWhereUniqueInput>
    update?: Enumerable<EventsUpdateWithWhereUniqueWithoutEvent_typesInput>
    updateMany?: Enumerable<EventsUpdateManyWithWhereWithoutEvent_typesInput>
    deleteMany?: Enumerable<EventsScalarWhereInput>
  }

  export type Event_typesCreateNestedOneWithoutEventsInput = {
    create?: XOR<Event_typesCreateWithoutEventsInput, Event_typesUncheckedCreateWithoutEventsInput>
    connectOrCreate?: Event_typesCreateOrConnectWithoutEventsInput
    connect?: Event_typesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutEventsInput = {
    create?: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEventsInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Event_typesUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<Event_typesCreateWithoutEventsInput, Event_typesUncheckedCreateWithoutEventsInput>
    connectOrCreate?: Event_typesCreateOrConnectWithoutEventsInput
    upsert?: Event_typesUpsertWithoutEventsInput
    connect?: Event_typesWhereUniqueInput
    update?: XOR<Event_typesUpdateWithoutEventsInput, Event_typesUncheckedUpdateWithoutEventsInput>
  }

  export type UsersUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEventsInput
    upsert?: UsersUpsertWithoutEventsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutEventsInput, UsersUncheckedUpdateWithoutEventsInput>
  }

  export type Event_typesCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<Event_typesCreateWithoutUsersInput>, Enumerable<Event_typesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Event_typesCreateOrConnectWithoutUsersInput>
    createMany?: Event_typesCreateManyUsersInputEnvelope
    connect?: Enumerable<Event_typesWhereUniqueInput>
  }

  export type EventsCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<EventsCreateWithoutUsersInput>, Enumerable<EventsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<EventsCreateOrConnectWithoutUsersInput>
    createMany?: EventsCreateManyUsersInputEnvelope
    connect?: Enumerable<EventsWhereUniqueInput>
  }

  export type Event_typesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<Event_typesCreateWithoutUsersInput>, Enumerable<Event_typesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Event_typesCreateOrConnectWithoutUsersInput>
    createMany?: Event_typesCreateManyUsersInputEnvelope
    connect?: Enumerable<Event_typesWhereUniqueInput>
  }

  export type EventsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<EventsCreateWithoutUsersInput>, Enumerable<EventsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<EventsCreateOrConnectWithoutUsersInput>
    createMany?: EventsCreateManyUsersInputEnvelope
    connect?: Enumerable<EventsWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Event_typesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<Event_typesCreateWithoutUsersInput>, Enumerable<Event_typesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Event_typesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<Event_typesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: Event_typesCreateManyUsersInputEnvelope
    set?: Enumerable<Event_typesWhereUniqueInput>
    disconnect?: Enumerable<Event_typesWhereUniqueInput>
    delete?: Enumerable<Event_typesWhereUniqueInput>
    connect?: Enumerable<Event_typesWhereUniqueInput>
    update?: Enumerable<Event_typesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<Event_typesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<Event_typesScalarWhereInput>
  }

  export type EventsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<EventsCreateWithoutUsersInput>, Enumerable<EventsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<EventsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<EventsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: EventsCreateManyUsersInputEnvelope
    set?: Enumerable<EventsWhereUniqueInput>
    disconnect?: Enumerable<EventsWhereUniqueInput>
    delete?: Enumerable<EventsWhereUniqueInput>
    connect?: Enumerable<EventsWhereUniqueInput>
    update?: Enumerable<EventsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<EventsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<EventsScalarWhereInput>
  }

  export type Event_typesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<Event_typesCreateWithoutUsersInput>, Enumerable<Event_typesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Event_typesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<Event_typesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: Event_typesCreateManyUsersInputEnvelope
    set?: Enumerable<Event_typesWhereUniqueInput>
    disconnect?: Enumerable<Event_typesWhereUniqueInput>
    delete?: Enumerable<Event_typesWhereUniqueInput>
    connect?: Enumerable<Event_typesWhereUniqueInput>
    update?: Enumerable<Event_typesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<Event_typesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<Event_typesScalarWhereInput>
  }

  export type EventsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<EventsCreateWithoutUsersInput>, Enumerable<EventsUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<EventsCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<EventsUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: EventsCreateManyUsersInputEnvelope
    set?: Enumerable<EventsWhereUniqueInput>
    disconnect?: Enumerable<EventsWhereUniqueInput>
    delete?: Enumerable<EventsWhereUniqueInput>
    connect?: Enumerable<EventsWhereUniqueInput>
    update?: Enumerable<EventsUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<EventsUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<EventsScalarWhereInput>
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UsersCreateWithoutEvent_typesInput = {
    id: string
    name: string
    avatar_url?: string | null
    events?: EventsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutEvent_typesInput = {
    id: string
    name: string
    avatar_url?: string | null
    events?: EventsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutEvent_typesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEvent_typesInput, UsersUncheckedCreateWithoutEvent_typesInput>
  }

  export type EventsCreateWithoutEvent_typesInput = {
    id: string
    created_at?: Date | string | null
    users: UsersCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutEvent_typesInput = {
    id: string
    created_at?: Date | string | null
    user_id: string
  }

  export type EventsCreateOrConnectWithoutEvent_typesInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutEvent_typesInput, EventsUncheckedCreateWithoutEvent_typesInput>
  }

  export type EventsCreateManyEvent_typesInputEnvelope = {
    data: Enumerable<EventsCreateManyEvent_typesInput>
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutEvent_typesInput = {
    update: XOR<UsersUpdateWithoutEvent_typesInput, UsersUncheckedUpdateWithoutEvent_typesInput>
    create: XOR<UsersCreateWithoutEvent_typesInput, UsersUncheckedCreateWithoutEvent_typesInput>
  }

  export type UsersUpdateWithoutEvent_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutEvent_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type EventsUpsertWithWhereUniqueWithoutEvent_typesInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutEvent_typesInput, EventsUncheckedUpdateWithoutEvent_typesInput>
    create: XOR<EventsCreateWithoutEvent_typesInput, EventsUncheckedCreateWithoutEvent_typesInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutEvent_typesInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutEvent_typesInput, EventsUncheckedUpdateWithoutEvent_typesInput>
  }

  export type EventsUpdateManyWithWhereWithoutEvent_typesInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutEventsInput>
  }

  export type EventsScalarWhereInput = {
    AND?: Enumerable<EventsScalarWhereInput>
    OR?: Enumerable<EventsScalarWhereInput>
    NOT?: Enumerable<EventsScalarWhereInput>
    id?: UuidFilter | string
    type?: UuidFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    user_id?: StringFilter | string
  }

  export type Event_typesCreateWithoutEventsInput = {
    id: string
    name: string
    users: UsersCreateNestedOneWithoutEvent_typesInput
  }

  export type Event_typesUncheckedCreateWithoutEventsInput = {
    id: string
    name: string
    user_id: string
  }

  export type Event_typesCreateOrConnectWithoutEventsInput = {
    where: Event_typesWhereUniqueInput
    create: XOR<Event_typesCreateWithoutEventsInput, Event_typesUncheckedCreateWithoutEventsInput>
  }

  export type UsersCreateWithoutEventsInput = {
    id: string
    name: string
    avatar_url?: string | null
    event_types?: Event_typesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutEventsInput = {
    id: string
    name: string
    avatar_url?: string | null
    event_types?: Event_typesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutEventsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
  }

  export type Event_typesUpsertWithoutEventsInput = {
    update: XOR<Event_typesUpdateWithoutEventsInput, Event_typesUncheckedUpdateWithoutEventsInput>
    create: XOR<Event_typesCreateWithoutEventsInput, Event_typesUncheckedCreateWithoutEventsInput>
  }

  export type Event_typesUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateOneRequiredWithoutEvent_typesNestedInput
  }

  export type Event_typesUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUpsertWithoutEventsInput = {
    update: XOR<UsersUpdateWithoutEventsInput, UsersUncheckedUpdateWithoutEventsInput>
    create: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
  }

  export type UsersUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_types?: Event_typesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_types?: Event_typesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type Event_typesCreateWithoutUsersInput = {
    id: string
    name: string
    events?: EventsCreateNestedManyWithoutEvent_typesInput
  }

  export type Event_typesUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
    events?: EventsUncheckedCreateNestedManyWithoutEvent_typesInput
  }

  export type Event_typesCreateOrConnectWithoutUsersInput = {
    where: Event_typesWhereUniqueInput
    create: XOR<Event_typesCreateWithoutUsersInput, Event_typesUncheckedCreateWithoutUsersInput>
  }

  export type Event_typesCreateManyUsersInputEnvelope = {
    data: Enumerable<Event_typesCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type EventsCreateWithoutUsersInput = {
    id: string
    created_at?: Date | string | null
    event_types: Event_typesCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateWithoutUsersInput = {
    id: string
    type: string
    created_at?: Date | string | null
  }

  export type EventsCreateOrConnectWithoutUsersInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutUsersInput, EventsUncheckedCreateWithoutUsersInput>
  }

  export type EventsCreateManyUsersInputEnvelope = {
    data: Enumerable<EventsCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type Event_typesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Event_typesWhereUniqueInput
    update: XOR<Event_typesUpdateWithoutUsersInput, Event_typesUncheckedUpdateWithoutUsersInput>
    create: XOR<Event_typesCreateWithoutUsersInput, Event_typesUncheckedCreateWithoutUsersInput>
  }

  export type Event_typesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Event_typesWhereUniqueInput
    data: XOR<Event_typesUpdateWithoutUsersInput, Event_typesUncheckedUpdateWithoutUsersInput>
  }

  export type Event_typesUpdateManyWithWhereWithoutUsersInput = {
    where: Event_typesScalarWhereInput
    data: XOR<Event_typesUpdateManyMutationInput, Event_typesUncheckedUpdateManyWithoutEvent_typesInput>
  }

  export type Event_typesScalarWhereInput = {
    AND?: Enumerable<Event_typesScalarWhereInput>
    OR?: Enumerable<Event_typesScalarWhereInput>
    NOT?: Enumerable<Event_typesScalarWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    user_id?: StringFilter | string
  }

  export type EventsUpsertWithWhereUniqueWithoutUsersInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutUsersInput, EventsUncheckedUpdateWithoutUsersInput>
    create: XOR<EventsCreateWithoutUsersInput, EventsUncheckedCreateWithoutUsersInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutUsersInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutUsersInput, EventsUncheckedUpdateWithoutUsersInput>
  }

  export type EventsUpdateManyWithWhereWithoutUsersInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutEventsInput>
  }

  export type EventsCreateManyEvent_typesInput = {
    id: string
    created_at?: Date | string | null
    user_id: string
  }

  export type EventsUpdateWithoutEvent_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UsersUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateWithoutEvent_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type EventsUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type Event_typesCreateManyUsersInput = {
    id: string
    name: string
  }

  export type EventsCreateManyUsersInput = {
    id: string
    type: string
    created_at?: Date | string | null
  }

  export type Event_typesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    events?: EventsUpdateManyWithoutEvent_typesNestedInput
  }

  export type Event_typesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    events?: EventsUncheckedUpdateManyWithoutEvent_typesNestedInput
  }

  export type Event_typesUncheckedUpdateManyWithoutEvent_typesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EventsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event_types?: Event_typesUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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