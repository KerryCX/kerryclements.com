import type { RouteObject } from 'react-router-dom'
import { Portfolio } from '../pages/portfolio'
import { PeriodicTableCaseStudy } from '../pages/portfolio/PeriodicTableCaseStudy'
import { KerryClementsComCaseStudy } from '../pages/portfolio/KerryClementsComCaseStudy'
import { JobsDoneCaseStudy } from '../pages/portfolio/JobsDoneCaseStudy'
import { ShoppingListCaseStudy } from '../pages/portfolio/ShoppingListCaseStudy'
import { BerakhotCaseStudy } from '../pages/portfolio/BerakhotCaseStudy'
import { CryptoTrackerCaseStudy } from '../pages/portfolio/CryptoTrackerCaseStudy'
import { TicTacToeCaseStudy } from '../pages/portfolio/TicTacToeCaseStudy'
import { TimeTrackingCaseStudy } from '../pages/portfolio/TimeTrackingCaseStudy'
import { MeasureForMeasureCaseStudy } from '../pages/portfolio/MeasureForMeasureCaseStudy'

export const portfolioRoutes: RouteObject[] = [
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/portfolio/periodic-table', element: <PeriodicTableCaseStudy /> },
  { path: '/portfolio/kerryclements-com', element: <KerryClementsComCaseStudy /> },
  { path: '/portfolio/jobs-done', element: <JobsDoneCaseStudy /> },
  { path: '/portfolio/shopping-list', element: <ShoppingListCaseStudy /> },
  { path: '/portfolio/berakhot', element: <BerakhotCaseStudy /> },
  { path: '/portfolio/crypto-tracker', element: <CryptoTrackerCaseStudy /> },
  { path: '/portfolio/tic-tac-toe', element: <TicTacToeCaseStudy /> },
  { path: '/portfolio/time-tracking-dashboard', element: <TimeTrackingCaseStudy /> },
  { path: '/portfolio/measure-for-measure', element: <MeasureForMeasureCaseStudy /> },
]
