import type { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { SiteMeta } from '../components/SiteMeta'
import { AskKerryLauncher } from '../components/AskKerry/AskKerryLauncher'

export const RootLayout = (): ReactElement => {
  return (
    <>
      <SiteMeta />
      <Outlet />
      <AskKerryLauncher />
    </>
  )
}
