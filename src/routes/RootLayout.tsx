import type { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { SiteMeta } from '../components/SiteMeta'
import { AskKerryLauncher } from '../components/AskKerry/AskKerryLauncher'
import {
  askKerryEntries,
  askKerryFallback,
  askKerryGreeting,
  askKerryStarters,
} from '../content/askKerry'

export const RootLayout = (): ReactElement => {
  return (
    <>
      <SiteMeta />
      <Outlet />
      <AskKerryLauncher
        entries={askKerryEntries}
        greeting={askKerryGreeting}
        fallback={askKerryFallback}
        starters={askKerryStarters}
      />
    </>
  )
}
