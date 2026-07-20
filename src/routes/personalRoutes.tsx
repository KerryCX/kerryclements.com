import type { RouteObject } from 'react-router-dom'
import Personal from '../pages/personal/Personal'
import WellnessJourney from '../pages/personal/WellnessJourney'
import ClearSkinLaser from '../pages/personal/ClearSkinLaser'
import ClaudeStylist from '../pages/personal/ClaudeStylist'

export const personalRoutes: RouteObject[] = [
  { path: '/personal', element: <Personal /> },
  { path: '/personal/wellness-journey', element: <WellnessJourney /> },
  { path: '/personal/clear-skin-co2-laser', element: <ClearSkinLaser /> },
  { path: '/personal/claude-personal-stylist', element: <ClaudeStylist /> },
]
