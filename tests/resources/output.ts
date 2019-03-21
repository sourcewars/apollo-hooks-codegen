/*
 * This file was generated by graphql-code-generator with the apollo-hooks-codegen plugin.
 * Any changes made to the file will be overwritten.
 */

import * as React from 'react'
import { createContext, useEffect, useState, useContext, useRef } from 'react'
import ApolloClient, {
  MutationOptions,
  ObservableQuery,
  WatchQueryOptions,
  SubscriptionOptions,
  ApolloQueryResult,
  ApolloCurrentResult,
} from 'apollo-client'
import { FetchResult, Observable } from 'apollo-link'
import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'

/*
 * GraphQL Input Types
 */

export type InputType = {
  recursive?: Nullable<InputType_recursive>
  nested?: Nullable<InputType_nested>
  scalar?: Nullable<InputType_scalar>
  list?: Nullable<ReadonlyArray<InputType_list>>
}

export type InputType_recursive = InputType
export type InputType_nested = NestedInputType
export type InputType_scalar = boolean
export type InputType_list = string

export type NestedInputType = { scalar?: Nullable<NestedInputType_scalar> }

export type NestedInputType_scalar = number

/*,
 * Fragments from ./tests/resources/documents.graphql,
 */
export type ObjectTypeFields = { scalar?: Nullable<ObjectTypeFields_scalar> }

export type ObjectTypeFields_scalar = boolean
const _gql_ObjectTypeFields = gql`
  fragment ObjectTypeFields on ObjectType {
    scalar
  }
`

/*,
 * Operations from ./tests/resources/documents.graphql,
 */
export const testScalars = query<testScalars_variables, testScalars_data>(gql`
  query testScalars {
    scalarString
    scalarInt
    scalarFloat
    scalarBoolean
    scalarID
    scalarCustom

    renamedString: scalarString
  }
`)
export type testScalars_variables = {}

export type testScalars_data = {
  scalarString?: Nullable<testScalars_data_scalarString>
  scalarInt?: Nullable<testScalars_data_scalarInt>
  scalarFloat?: Nullable<testScalars_data_scalarFloat>
  scalarBoolean?: Nullable<testScalars_data_scalarBoolean>
  scalarID?: Nullable<testScalars_data_scalarID>
  scalarCustom?: Nullable<testScalars_data_scalarCustom>
  renamedString?: Nullable<testScalars_data_renamedString>
}

export type testScalars_data_scalarString = string
export type testScalars_data_scalarInt = number
export type testScalars_data_scalarFloat = number
export type testScalars_data_scalarBoolean = boolean
export type testScalars_data_scalarID = string
export type testScalars_data_scalarCustom = any
export type testScalars_data_renamedString = string

export const testNullability = query<
  testNullability_variables,
  testNullability_data
>(gql`
  query testNullability {
    nullableBoolean
    nonNullableBoolean
  }
`)
export type testNullability_variables = {}

export type testNullability_data = {
  nullableBoolean?: Nullable<testNullability_data_nullableBoolean>
  nonNullableBoolean: testNullability_data_nonNullableBoolean
}

export type testNullability_data_nullableBoolean = boolean
export type testNullability_data_nonNullableBoolean = boolean

export const testNesting = query<testNesting_variables, testNesting_data>(gql`
  query testNesting {
    nestedObject {
      recursive {
        recursive {
          scalar
        }
      }
      nested {
        scalar
      }
      scalar
      list
    }
  }
`)
export type testNesting_variables = {}

export type testNesting_data = {
  nestedObject?: Nullable<testNesting_data_nestedObject>
}

export type testNesting_data_nestedObject = {
  recursive?: Nullable<testNesting_data_nestedObject_recursive>
  nested?: Nullable<testNesting_data_nestedObject_nested>
  scalar?: Nullable<testNesting_data_nestedObject_scalar>
  list?: Nullable<ReadonlyArray<testNesting_data_nestedObject_list>>
}

export type testNesting_data_nestedObject_recursive = {
  recursive?: Nullable<testNesting_data_nestedObject_recursive_recursive>
}

export type testNesting_data_nestedObject_recursive_recursive = {
  scalar?: Nullable<testNesting_data_nestedObject_recursive_recursive_scalar>
}

export type testNesting_data_nestedObject_recursive_recursive_scalar = boolean
export type testNesting_data_nestedObject_nested = {
  scalar?: Nullable<testNesting_data_nestedObject_nested_scalar>
}

export type testNesting_data_nestedObject_nested_scalar = number
export type testNesting_data_nestedObject_scalar = boolean
export type testNesting_data_nestedObject_list = string

export const testUnion = query<testUnion_variables, testUnion_data>(gql`
  query testUnion {
    union {
      ... on Tomato {
        id
      }
      ... on Potato {
        id
      }
    }
  }
`)
export type testUnion_variables = {}

export type testUnion_data = { union?: Nullable<testUnion_data_union> }

export type testUnion_data_union = unknown

export const testMethods = query<testMethods_variables, testMethods_data>(gql`
  query testMethods(
    $reqParam: String!
    $optParam: Float!
    $input: InputType
    $list2: [CustomScalar!]!
  ) {
    method(requiredParam: $reqParam, optionalParam: $optParam, input: $input)
    renamedMethod: method2(list2: $list2)
  }
`)
export type testMethods_variables = {
  reqParam: testMethods_variables_reqParam
  optParam: testMethods_variables_optParam
  input?: Nullable<testMethods_variables_input>
  list2: ReadonlyArray<testMethods_variables_list2>
}

export type testMethods_variables_reqParam = string
export type testMethods_variables_optParam = number
export type testMethods_variables_input = InputType
export type testMethods_variables_list2 = any

export type testMethods_data = {
  method?: Nullable<testMethods_data_method>
  renamedMethod?: Nullable<
    ReadonlyArray<Nullable<testMethods_data_renamedMethod>>
  >
}

export type testMethods_data_method = any
export type testMethods_data_renamedMethod = any

export const testScalarsMutation = mutation<
  testScalarsMutation_variables,
  testScalarsMutation_data
>(gql`
  mutation testScalarsMutation {
    scalarString
    scalarInt
    scalarFloat
    scalarBoolean
    scalarID
    scalarCustom

    renamedString: scalarString
  }
`)
export type testScalarsMutation_variables = {}

export type testScalarsMutation_data = {
  scalarString?: Nullable<testScalarsMutation_data_scalarString>
  scalarInt?: Nullable<testScalarsMutation_data_scalarInt>
  scalarFloat?: Nullable<testScalarsMutation_data_scalarFloat>
  scalarBoolean?: Nullable<testScalarsMutation_data_scalarBoolean>
  scalarID?: Nullable<testScalarsMutation_data_scalarID>
  scalarCustom?: Nullable<testScalarsMutation_data_scalarCustom>
  renamedString?: Nullable<testScalarsMutation_data_renamedString>
}

export type testScalarsMutation_data_scalarString = string
export type testScalarsMutation_data_scalarInt = number
export type testScalarsMutation_data_scalarFloat = number
export type testScalarsMutation_data_scalarBoolean = boolean
export type testScalarsMutation_data_scalarID = string
export type testScalarsMutation_data_scalarCustom = any
export type testScalarsMutation_data_renamedString = string

export const testNullabilityMutation = mutation<
  testNullabilityMutation_variables,
  testNullabilityMutation_data
>(gql`
  mutation testNullabilityMutation {
    nullableBoolean
    nonNullableBoolean
  }
`)
export type testNullabilityMutation_variables = {}

export type testNullabilityMutation_data = {
  nullableBoolean?: Nullable<testNullabilityMutation_data_nullableBoolean>
  nonNullableBoolean: testNullabilityMutation_data_nonNullableBoolean
}

export type testNullabilityMutation_data_nullableBoolean = boolean
export type testNullabilityMutation_data_nonNullableBoolean = boolean

export const testNestingMutation = mutation<
  testNestingMutation_variables,
  testNestingMutation_data
>(gql`
  mutation testNestingMutation {
    nestedObject {
      recursive {
        recursive {
          scalar
        }
      }
      nested {
        scalar
      }
      scalar
      list
    }
  }
`)
export type testNestingMutation_variables = {}

export type testNestingMutation_data = {
  nestedObject?: Nullable<testNestingMutation_data_nestedObject>
}

export type testNestingMutation_data_nestedObject = {
  recursive?: Nullable<testNestingMutation_data_nestedObject_recursive>
  nested?: Nullable<testNestingMutation_data_nestedObject_nested>
  scalar?: Nullable<testNestingMutation_data_nestedObject_scalar>
  list?: Nullable<ReadonlyArray<testNestingMutation_data_nestedObject_list>>
}

export type testNestingMutation_data_nestedObject_recursive = {
  recursive?: Nullable<
    testNestingMutation_data_nestedObject_recursive_recursive
  >
}

export type testNestingMutation_data_nestedObject_recursive_recursive = {
  scalar?: Nullable<
    testNestingMutation_data_nestedObject_recursive_recursive_scalar
  >
}

export type testNestingMutation_data_nestedObject_recursive_recursive_scalar = boolean
export type testNestingMutation_data_nestedObject_nested = {
  scalar?: Nullable<testNestingMutation_data_nestedObject_nested_scalar>
}

export type testNestingMutation_data_nestedObject_nested_scalar = number
export type testNestingMutation_data_nestedObject_scalar = boolean
export type testNestingMutation_data_nestedObject_list = string

export const testMethodsMutation = mutation<
  testMethodsMutation_variables,
  testMethodsMutation_data
>(gql`
  mutation testMethodsMutation(
    $reqParam: String!
    $optParam: Float!
    $input: InputType
    $list2: [CustomScalar!]!
  ) {
    method(requiredParam: $reqParam, optionalParam: $optParam, input: $input)
    renamedMethod: method2(list2: $list2)
  }
`)
export type testMethodsMutation_variables = {
  reqParam: testMethodsMutation_variables_reqParam
  optParam: testMethodsMutation_variables_optParam
  input?: Nullable<testMethodsMutation_variables_input>
  list2: ReadonlyArray<testMethodsMutation_variables_list2>
}

export type testMethodsMutation_variables_reqParam = string
export type testMethodsMutation_variables_optParam = number
export type testMethodsMutation_variables_input = InputType
export type testMethodsMutation_variables_list2 = any

export type testMethodsMutation_data = {
  method?: Nullable<testMethodsMutation_data_method>
  renamedMethod?: Nullable<
    ReadonlyArray<Nullable<testMethodsMutation_data_renamedMethod>>
  >
}

export type testMethodsMutation_data_method = any
export type testMethodsMutation_data_renamedMethod = any

export const testFragments = query<
  testFragments_variables,
  testFragments_data
>(gql`
  query testFragments {
    nestedObject {
      ...ObjectTypeFields
    }
  }
  ${_gql_ObjectTypeFields}
`)
export type testFragments_variables = {}

export type testFragments_data = {
  nestedObject?: Nullable<testFragments_data_nestedObject>
}

export type testFragments_data_nestedObject = ObjectTypeFields & {}

/*
 * Boilerplate
 */

type Nullable<T> = T | null
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type QueryOpts<V> = Omit<WatchQueryOptions<V>, 'query'>
type MutateOpts<D, V> = Omit<MutationOptions<D, V>, 'mutation'>
type SubscriptionOpts<V> = Omit<SubscriptionOptions<V>, 'query'>
type UseQueryResult<D> = Omit<ApolloCurrentResult<D>, 'data'> & {
  data: Nullable<D>
}

// We grab the ApolloClient from this context within our hooks
type ContextType = { apolloClient?: ApolloClient<any> }
const apolloContext = createContext<ContextType>({})

// Must be inserted at the root of all components that want to use the hook
// functions supplied by this file.
export function ApolloHooksProvider({
  children,
  apolloClient,
}: {
  children?: any
  apolloClient: ApolloClient<any> | undefined
}) {
  const elementType = apolloContext.Provider
  const elementProps: React.ProviderProps<ContextType> = {
    value: { apolloClient },
  }
  return React.createElement(elementType, elementProps, children)
}

// Executes a query that has been created by calling the exported function with
// the same name as the query operation.
// The React Hooks rules apply - this function must be called unconditionally
// within a functional React Component and will rerender the component whenever
// the query result changes.
export function useQuery<D, V>(
  configuredQuery: (client: ApolloClient<any>) => ObservableQuery<D, V>,
  queryCallback?: (query: ObservableQuery<D, V>) => void
): UseQueryResult<D> {
  const { apolloClient } = useContext(apolloContext)
  if (!apolloClient) throw 'No ApolloClient provided'

  const queryRef = useRef(configuredQuery(apolloClient))
  const query = queryRef.current

  const [result, setResult] = useState(() => {
    const initialResult = query.currentResult()
    const data =
      initialResult.loading || initialResult.partial
        ? null
        : (initialResult.data as D)
    return { ...initialResult, data }
  })

  useEffect(() => {
    if (queryCallback) {
      queryCallback(query)
    }

    const subscription = query.subscribe(
      currentResult => setResult(currentResult),
      error => setResult({ ...result, error, loading: false })
    )

    return () => subscription.unsubscribe()
  }, [])

  return result
}

// Prepares a mutate function when supplied with the exported function with
// the same name as the mutation operation.
// The React Hooks rules apply - this function must be called unconditionally
// within a functional React Component.
export function useMutation<D, V>(
  configuredMutation: (
    client: ApolloClient<any>
  ) => (opts?: MutateOpts<D, V>) => Promise<FetchResult<D>>
) {
  const { apolloClient } = useContext(apolloContext)
  if (!apolloClient) throw 'No ApolloClient provided'
  const mutate = configuredMutation(apolloClient)
  return mutate
}

export function useSubscription<D>(
  configuredSubscription: (client: ApolloClient<any>) => Observable<{ data: D }>
): Nullable<D> {
  const { apolloClient } = useContext(apolloContext)
  if (!apolloClient) throw 'No ApolloClient provided'

  const observable = useRef(configuredSubscription(apolloClient))

  const [result, setResult] = useState<Nullable<D>>(null)
  useEffect(() => {
    const subscription = observable.current.subscribe(event =>
      setResult(event.data)
    )
    return () => subscription.unsubscribe()
  })
  return result
}

export function useQueryWithSubscription<QD, QV, SD>(
  configuredQuery: (client: ApolloClient<any>) => ObservableQuery<QD, QV>,
  configuredSubscription: (
    client: ApolloClient<any>
  ) => Observable<{ data: SD }>,
  addDataFromSubscription: (queryData: QD, subscriptionData: SD) => QD
): UseQueryResult<QD> {
  const queryResult = useQuery(configuredQuery)
  const subscriptionData = useSubscription(configuredSubscription)

  const [result, setResult] = useState(queryResult)
  if (queryResult != result) setResult(queryResult)
  if (result.data != null && subscriptionData != null) {
    const newData = addDataFromSubscription(result.data, subscriptionData)
    setResult({ ...result, data: newData })
  }
  return result
}

// Converts a gql-snippet into a user-callable function that takes options,
// which can then be passed to useMutation to provide the mutate function.
function mutation<V, D>(mutation: DocumentNode) {
  return function configureMutation(opts: MutateOpts<D, V> = {}) {
    return function loadMutation(client: ApolloClient<any>) {
      return function executeMutation(opts2: MutateOpts<D, V> = {}) {
        return client.mutate<D>({ mutation, ...opts, ...opts2 })
      }
    }
  }
}

// Converts a gql-snippet into a user-callable function that takes options,
// which can then be passed to useQuery to execute the query.
function query<V, D>(doc: DocumentNode) {
  return function configureQuery(opts: QueryOpts<V> = {}) {
    return function executeQuery(client: ApolloClient<any>) {
      return client.watchQuery<D>({ query: doc, ...opts })
    }
  }
}

function subscription<V, D>(doc: DocumentNode) {
  return function configureSubscription(opts: SubscriptionOpts<V> = {}) {
    return function executeSubscription(client: ApolloClient<any>) {
      return client.subscribe<{ data: D }, V>({ query: doc, ...opts })
    }
  }
}
