/*
 * This file was generated by graphql-code-generator with the apollo-hooks-codegen plugin.
 * Any changes made to the file will be overwritten.
 */

import * as React from 'react'
import { createContext, useEffect, useState, useContext } from 'react'
import ApolloClient, {
  MutationOptions,
  ObservableQuery,
  WatchQueryOptions,
  ApolloCurrentResult,
} from 'apollo-client'
import { FetchResult } from 'apollo-link'
import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'

/*
 * Operations from ./tests/resources/documents.graphql
 */

export const testScalars = query<testScalars.variables, testScalars.data>(gql`
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
export module testScalars {
  export type variables = {}
  export module variables {}
  export type data = {
    scalarString: Nullable<data.scalarString>
    scalarInt: Nullable<data.scalarInt>
    scalarFloat: Nullable<data.scalarFloat>
    scalarBoolean: Nullable<data.scalarBoolean>
    scalarID: Nullable<data.scalarID>
    scalarCustom: Nullable<data.scalarCustom>
    renamedString: Nullable<data.renamedString>
  }
  export module data {
    export type scalarString = string
    export type scalarInt = number
    export type scalarFloat = number
    export type scalarBoolean = boolean
    export type scalarID = string
    export type scalarCustom = any
    export type renamedString = string
  }
}

export const testNullability = query<
  testNullability.variables,
  testNullability.data
>(gql`
  query testNullability {
    nullableBoolean
    nonNullableBoolean
  }
`)
export module testNullability {
  export type variables = {}
  export module variables {}
  export type data = {
    nullableBoolean: Nullable<data.nullableBoolean>
    nonNullableBoolean: data.nonNullableBoolean
  }
  export module data {
    export type nullableBoolean = boolean
    export type nonNullableBoolean = boolean
  }
}

export const testNesting = query<testNesting.variables, testNesting.data>(gql`
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
export module testNesting {
  export type variables = {}
  export module variables {}
  export type data = {
    nestedObject: Nullable<data.nestedObject>
  }
  export module data {
    export type nestedObject = {
      recursive: Nullable<nestedObject.recursive>
      nested: Nullable<nestedObject.nested>
      scalar: Nullable<nestedObject.scalar>
      list: Nullable<ReadonlyArray<nestedObject.list>>
    }
    export module nestedObject {
      export type recursive = {
        recursive: Nullable<recursive.recursive>
      }
      export module recursive {
        export type recursive = {
          scalar: Nullable<recursive.scalar>
        }
        export module recursive {
          export type scalar = boolean
        }
      }
      export type nested = {
        scalar: Nullable<nested.scalar>
      }
      export module nested {
        export type scalar = number
      }
      export type scalar = boolean
      export type list = string
    }
  }
}

export const testMethods = query<testMethods.variables, testMethods.data>(gql`
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
export module testMethods {
  export type variables = {
    reqParam: variables.reqParam
    optParam: variables.optParam
    input: Nullable<variables.input>
    list2: ReadonlyArray<variables.list2>
  }
  export module variables {
    export type reqParam = string
    export type optParam = number
    export type input = InputType
    export type list2 = any
  }
  export type data = {
    method: Nullable<data.method>
    renamedMethod: Nullable<ReadonlyArray<Nullable<data.renamedMethod>>>
  }
  export module data {
    export type method = any
    export type renamedMethod = any
  }
}

export const testScalarsMutation = mutation<
  testScalarsMutation.variables,
  testScalarsMutation.data
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
export module testScalarsMutation {
  export type variables = {}
  export module variables {}
  export type data = {
    scalarString: Nullable<data.scalarString>
    scalarInt: Nullable<data.scalarInt>
    scalarFloat: Nullable<data.scalarFloat>
    scalarBoolean: Nullable<data.scalarBoolean>
    scalarID: Nullable<data.scalarID>
    scalarCustom: Nullable<data.scalarCustom>
    renamedString: Nullable<data.renamedString>
  }
  export module data {
    export type scalarString = string
    export type scalarInt = number
    export type scalarFloat = number
    export type scalarBoolean = boolean
    export type scalarID = string
    export type scalarCustom = any
    export type renamedString = string
  }
}

export const testNullabilityMutation = mutation<
  testNullabilityMutation.variables,
  testNullabilityMutation.data
>(gql`
  mutation testNullabilityMutation {
    nullableBoolean
    nonNullableBoolean
  }
`)
export module testNullabilityMutation {
  export type variables = {}
  export module variables {}
  export type data = {
    nullableBoolean: Nullable<data.nullableBoolean>
    nonNullableBoolean: data.nonNullableBoolean
  }
  export module data {
    export type nullableBoolean = boolean
    export type nonNullableBoolean = boolean
  }
}

export const testNestingMutation = mutation<
  testNestingMutation.variables,
  testNestingMutation.data
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
export module testNestingMutation {
  export type variables = {}
  export module variables {}
  export type data = {
    nestedObject: Nullable<data.nestedObject>
  }
  export module data {
    export type nestedObject = {
      recursive: Nullable<nestedObject.recursive>
      nested: Nullable<nestedObject.nested>
      scalar: Nullable<nestedObject.scalar>
      list: Nullable<ReadonlyArray<nestedObject.list>>
    }
    export module nestedObject {
      export type recursive = {
        recursive: Nullable<recursive.recursive>
      }
      export module recursive {
        export type recursive = {
          scalar: Nullable<recursive.scalar>
        }
        export module recursive {
          export type scalar = boolean
        }
      }
      export type nested = {
        scalar: Nullable<nested.scalar>
      }
      export module nested {
        export type scalar = number
      }
      export type scalar = boolean
      export type list = string
    }
  }
}

export const testMethodsMutation = mutation<
  testMethodsMutation.variables,
  testMethodsMutation.data
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
export module testMethodsMutation {
  export type variables = {
    reqParam: variables.reqParam
    optParam: variables.optParam
    input: Nullable<variables.input>
    list2: ReadonlyArray<variables.list2>
  }
  export module variables {
    export type reqParam = string
    export type optParam = number
    export type input = InputType
    export type list2 = any
  }
  export type data = {
    method: Nullable<data.method>
    renamedMethod: Nullable<ReadonlyArray<Nullable<data.renamedMethod>>>
  }
  export module data {
    export type method = any
    export type renamedMethod = any
  }
}

/*
 * GraphQL Input Types
 */

export type InputType = {
  recursive: Nullable<InputType.recursive>
  nested: Nullable<InputType.nested>
  scalar: Nullable<InputType.scalar>
  list: Nullable<ReadonlyArray<InputType.list>>
}
export module InputType {
  export type recursive = InputType
  export type nested = NestedInputType
  export type scalar = boolean
  export type list = string
}
export type NestedInputType = {
  scalar: Nullable<NestedInputType.scalar>
}
export module NestedInputType {
  export type scalar = number
}

/*
 * Boilerplate
 */

type Nullable<T> = T | null
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type Error = any
type QueryOpts<V> = Omit<WatchQueryOptions<V>, 'query'>
type MutateOpts<D, V> = Omit<MutationOptions<D, V>, 'mutation'>

// We grab the ApolloClient from this context within our hooks
type ContextType = { apolloClient?: ApolloClient<any> }
const apolloContext = createContext<ContextType>({})

// Must be inserted at the root of all components that want to use the hook
// functions supplied by this file.
export function ApolloHooksProvider({
  children,
  apolloClient,
}: {
  children?: React.ReactNode
  apolloClient: ApolloClient<any> | undefined
}) {
  const elementType = apolloContext.Provider
  const elementProps: React.ProviderProps<ContextType> = {
    value: { apolloClient },
  }
  return React.createElement(elementType, elementProps, children)
}

// Converts a gql-snippet into a user-callable function that takes options,
// which can then be passed to useApolloQuery to execute the query.
function query<V, D>(doc: DocumentNode) {
  return function configureQuery(opts: QueryOpts<V> = {}) {
    return function executeQuery(client: ApolloClient<any>) {
      return client.watchQuery<D>({ query: doc, ...opts })
    }
  }
}

// Executes a query that has been created by calling the exported function with
// the same name as the query operation.
// The React Hooks rules apply - this function must be called unconditionally
// within a functional React Component and will rerender the component whenever
// the query result changes.
export function useApolloQuery<D, V>(
  configuredQuery: (client: ApolloClient<any>) => ObservableQuery<D, V>
): [ApolloCurrentResult<D>, ObservableQuery<D, V>] {
  const { apolloClient } = useContext(apolloContext)
  if (!apolloClient) throw 'No ApolloClient provided'

  const query = configuredQuery(apolloClient)

  const [result, setResult] = useState(query.currentResult())
  useEffect(() => {
    const subscription = query.subscribe(setResult)
    return () => subscription.unsubscribe()
  }, [])

  return [result, query]
}

// Converts a gql-snippet into a user-callable function that takes options,
// which can then be passed to useApolloMutation to provide the mutate function.
function mutation<V, D>(mutation: DocumentNode) {
  return function configureMutation(opts: MutateOpts<D, V> = {}) {
    return function loadMutation(client: ApolloClient<any>) {
      return function executeMutation(opts2: MutateOpts<D, V> = {}) {
        return client.mutate<D>({ mutation, ...opts, ...opts2 })
      }
    }
  }
}

// Prepares a mutate function when supplied with the exported function with
// the same name as the mutation operation.
// The React Hooks rules apply - this function must be called unconditionally
// within a functional React Component.
export function useApolloMutation<D, V>(
  configuredMutation: (
    client: ApolloClient<any>
  ) => (opts?: MutateOpts<D, V>) => Promise<FetchResult<D>>
) {
  const { apolloClient } = useContext(apolloContext)
  if (!apolloClient) throw 'No ApolloClient provided'
  const mutate = configuredMutation(apolloClient)
  return mutate
}
