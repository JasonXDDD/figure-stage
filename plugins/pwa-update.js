// pwa-update.js

export default async (context) => {
  const workbox = await window.$workbox

  if (!workbox) {
    console.log("Workbox couldn't be loaded.")
    return
  }

  workbox.addEventListener('install', (event) => {
    workbox.skipWaiting()
  })

  workbox.addEventListener('installed', (event) => {
    if (!event.isUpdate) {
      console.log('The PWA is on the latest version.')
      return
    }

    console.log('There is an update for the PWA, reloading...')
    forceSWupdate()
    window.location.reload(true)
  })
}

const forceSWupdate = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.update()
      }
    })
  }
}
