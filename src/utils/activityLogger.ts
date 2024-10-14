import { v4 as uuidv4 } from 'uuid'

interface AnonymousActivity {
  id: string
  action: string
  timestamp: number
}

class ActivityLogger {
  private activityLog: AnonymousActivity[] = []
  private maxLogSize: number

  constructor(maxLogSize: number = 1000) {
    this.maxLogSize = maxLogSize
  }

  logActivity(action: string): void {
    const activity: AnonymousActivity = {
      id: uuidv4(),
      action,
      timestamp: Date.now()
    }

    this.activityLog.push(activity)

    // Trim the log if it exceeds the maximum size
    if (this.activityLog.length > this.maxLogSize) {
      this.activityLog = this.activityLog.slice(-this.maxLogSize)
    }

    // Here you would typically send this to your backend for storage and analysis
    console.log('Activity logged:', activity)
  }

  getRecentActivity(minutes: number): AnonymousActivity[] {
    const now = Date.now()
    return this.activityLog.filter(activity => now - activity.timestamp < minutes * 60000)
  }

  clearLog(): void {
    this.activityLog = []
  }

  getLogSize(): number {
    return this.activityLog.length
  }
}

// Create and export a singleton instance
const activityLogger = new ActivityLogger()
export default activityLogger