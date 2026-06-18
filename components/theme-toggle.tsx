'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'group relative inline-flex shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        compact
          ? 'size-7 min-[420px]:size-8 sm:size-9 md:size-10'
          : 'size-9',
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun
            className={cn(
              compact
                ? 'size-3.5 min-[420px]:size-4 md:size-4.5'
                : 'size-4',
            )}
          />
        ) : (
          <Moon
            className={cn(
              compact
                ? 'size-3.5 min-[420px]:size-4 md:size-4.5'
                : 'size-4',
            )}
          />
        )
      ) : (
        <span
          className={cn(
            compact
              ? 'size-3.5 min-[420px]:size-4 md:size-4.5'
              : 'size-4',
          )}
        />
      )}
    </button>
  )
}
