import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui"

interface Props {
  children: ReactNode
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Manuel Reichel" />
        <meta name="description" content="Información sobre el pokemon XXX" />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}
