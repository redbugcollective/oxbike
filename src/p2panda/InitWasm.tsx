import React, { useEffect, useState } from "react"
import { initWebAssembly } from "shirokuma"

type Props = {
  children: React.ReactNode
}

export const InitWasm = ({ children }: Props) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const init = async () => {
      await initWebAssembly()
      setReady(true)
    }

    init()
  }, [])

  return ready ? children : null
}
