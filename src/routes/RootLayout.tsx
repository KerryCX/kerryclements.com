import type { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { SiteMeta } from '../components/SiteMeta'

export const RootLayout = (): ReactElement => {
  return (
    <>
      <SiteMeta />
      <Outlet />
    </>
  )
}
