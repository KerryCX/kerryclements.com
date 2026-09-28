import type { RouteObject } from 'react-router-dom'
import { pageMeta } from './pageMeta'
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
  { path: '/portfolio', element: <Portfolio />, handle: pageMeta.portfolio },
  { path: '/portfolio/periodic-table', element: <PeriodicTableCaseStudy />, handle: pageMeta.periodicTable },
  { path: '/portfolio/kerryclements-com', element: <KerryClementsComCaseStudy />, handle: pageMeta.kerryClementsCom },
  { path: '/portfolio/jobs-done', element: <JobsDoneCaseStudy />, handle: pageMeta.jobsDone },
  { path: '/portfolio/shopping-list', element: <ShoppingListCaseStudy />, handle: pageMeta.shoppingList },
  { path: '/portfolio/berakhot', element: <BerakhotCaseStudy />, handle: pageMeta.berakhot },
  { path: '/portfolio/crypto-tracker', element: <CryptoTrackerCaseStudy />, handle: pageMeta.cryptoTracker },
  { path: '/portfolio/tic-tac-toe', element: <TicTacToeCaseStudy />, handle: pageMeta.ticTacToe },
  { path: '/portfolio/time-tracking-dashboard', element: <TimeTrackingCaseStudy />, handle: pageMeta.timeTracking },
  { path: '/portfolio/measure-for-measure', element: <MeasureForMeasureCaseStudy />, handle: pageMeta.measureForMeasure },
]
