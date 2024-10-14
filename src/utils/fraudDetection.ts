import { throttle } from 'lodash'

interface UserBehavior {
  clickCount: number
  formSubmissions: number
  pageViews: number
  lastActivity: number
}

const userBehaviors: Map<string, UserBehavior> = new Map()

const THRESHOLD = {
  clickCount: 100,
  formSubmissions: 5,
  pageViews: 50,
  timeWindow: 60000 // 1 minute
}

export const trackUserBehavior = throttle((sessionId: string, action: 'click' | 'formSubmission' | 'pageView') => {
  const now = Date.now()
  let behavior = userBehaviors.get(sessionId)

  if (!behavior) {
    behavior = { clickCount: 0, formSubmissions: 0, pageViews: 0, lastActivity: now }
    userBehaviors.set(sessionId, behavior)
  }

  // Reset counters if last activity was more than 1 minute ago
  if (now - behavior.lastActivity > THRESHOLD.timeWindow) {
    behavior.clickCount = 0
    behavior.formSubmissions = 0
    behavior.pageViews = 0
  }

  behavior[action === 'click' ? 'clickCount' : action === 'formSubmission' ? 'formSubmissions' : 'pageViews']++
  behavior.lastActivity = now

  if (
    behavior.clickCount > THRESHOLD.clickCount ||
    behavior.formSubmissions > THRESHOLD.formSubmissions ||
    behavior.pageViews > THRESHOLD.pageViews
  ) {
    console.warn(`Suspicious activity detected for session ${sessionId}`)
    // Implement your fraud prevention measures here, e.g. temporarily block the session
  }
}, 1000) // Throttle to once per second to prevent excessive processing

export const generateSessionId = () => {
  return Math.random().toString(36).substr(2, 9)
}