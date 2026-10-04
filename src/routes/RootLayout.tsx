import type { ReactElement } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteMeta } from '../components/SiteMeta'
import { AskKerryLauncher } from '../components/AskKerry/AskKerryLauncher'

export const RootLayout = (): ReactElement => {
  const { pathname } = useLocation()
  // Home has the Ask about Kerry section, so the floating launcher would repeat it
  const showLauncher = pathname !== '/'

  return (
    <>
      <SiteMeta />
      <Outlet />
      {showLauncher && <AskKerryLauncher />}
    </>
  )
}
