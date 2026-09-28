import type { RouteObject } from 'react-router-dom'
import { pageMeta } from './pageMeta'
import Personal from '../pages/personal/Personal'
import WellnessJourney from '../pages/personal/WellnessJourney'
import ClearSkinLaser from '../pages/personal/ClearSkinLaser'
import ClaudeStylist from '../pages/personal/ClaudeStylist'

export const personalRoutes: RouteObject[] = [
  { path: '/personal', element: <Personal />, handle: pageMeta.personal },
  { path: '/personal/wellness-journey', element: <WellnessJourney />, handle: pageMeta.wellnessJourney },
  { path: '/personal/clear-skin-co2-laser', element: <ClearSkinLaser />, handle: pageMeta.clearSkinLaser },
  { path: '/personal/claude-personal-stylist', element: <ClaudeStylist />, handle: pageMeta.claudeStylist },
]
