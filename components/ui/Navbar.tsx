import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";
import NextLink from 'next/link'

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: "flex",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyItems: "center",
      padding: "0px 20px",
      backgroundColor: theme?.colors.gray200.value,
    }}>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="ícono de la app"
        width={70}
        height={70}

      />

      <NextLink legacyBehavior href="/" passHref>
        <Link href="/" style={{ display: "flex" }}>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink legacyBehavior href="/favorites" passHref>
        <a>
          <Text color='white'>Favoritos</Text>
        </a>
      </NextLink>
    </div >
  )
}
