import React from "react"
import type { FC } from "react"

interface AppProps {
    name: string
}

export const App: FC<AppProps> = ({ name }) => {
    return <h1>{`Hello ${name}!`}</h1>
}
