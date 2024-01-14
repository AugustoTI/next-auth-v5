'use client'

import { LuEye, LuEyeOff } from 'react-icons/lu'
import * as React from 'react'

import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { Input, type InputProps } from '~/components/ui/input'

export const PasswordInput = React.forwardRef<React.ElementRef<typeof Input>, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('pr-10', className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full px-3 py-1 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === '' || props.disabled}
        >
          {showPassword ? (
            <LuEyeOff size={20} aria-hidden="true" />
          ) : (
            <LuEye size={20} aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? 'Esconder senha' : 'Mostrar senha'}
          </span>
        </Button>
      </div>
    )
  },
)
PasswordInput.displayName = 'PasswordInput'
