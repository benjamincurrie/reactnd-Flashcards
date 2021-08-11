import * as Notifications from 'expo-notifications'

const NOTIFICATION_KEY = 'UdacityFlashcards:notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export function clearLocalNotification () {
  return Notifications.cancelAllScheduledNotificationsAsync()
}

export function setLocalNotification() {
  let trigger = new Date()
    trigger.setDate(trigger.getDate() + 1)
    trigger.setHours(20)
    trigger.setMinutes(0)
  
  return Notifications.scheduleNotificationAsync({
    content: {
      title: "Take a quiz",
      body: "👋 don't forget to take a quiz today!"
    },
    trigger,
  })
}