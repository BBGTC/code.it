import React, { MouseEvent } from 'react'
import Link from 'next/link'


import { useRouter } from 'next/router'

type ActiveLinkProps = {
  children: string,
  href: string
}

function ActiveLink({ children, href }: ActiveLinkProps) {

  return (
    <Link href={href}>
      <a style={{ textDecoration: "none", color: "white", marginLeft: 20 }}>{children}</a>
    </Link >
  )
}

export default ActiveLink;