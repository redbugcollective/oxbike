import React, { useMemo, createContext } from "react"
import { GraphQLClient } from "graphql-request"
import { KeyPair, Session } from "shirokuma"

import { getKeyPair } from "../keyPair"

export type Panda = {
  publicKey?: string
  keyPair?: KeyPair
  session?: Session
  client?: GraphQLClient
}

export const PandaContext = createContext<Panda>({
  publicKey: undefined,
  keyPair: undefined,
  session: undefined,
  client: undefined,
})

type Props = {
  children: React.ReactNode
  endpoint: string
}

export const PandaProvider = ({ children, endpoint }: Props) => {
  const state = useMemo(() => {
    const keyPair = getKeyPair()
    const session = new Session(endpoint).setKeyPair(keyPair)
    const client = new GraphQLClient(endpoint)

    return {
      keyPair,
      publicKey: keyPair.publicKey(),
      session,
      client,
    }
  }, [endpoint])

  return <PandaContext.Provider value={state}>{children}</PandaContext.Provider>
}
