'use client'

import Link from 'next/link'

import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'
import { Header } from '~/components/auth/header'
import { Social } from '~/components/auth/social'

import { Button } from '../ui/button'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

export function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-full max-w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardContent>{children}</CardContent>
      <CardFooter className="justify-center">
        <Button variant="link" size="sm" className="font-normal" asChild>
          <Link href={backButtonHref}>{backButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
