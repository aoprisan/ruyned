import './style.css'
import { registerSW } from 'virtual:pwa-register'
import { createRouter, type Routes } from './lib/router'
import { navHTML, initNav, setActiveNav } from './components/nav'
import { footerHTML } from './components/footer'
import { home } from './views/home'
import { music } from './views/music'
import { bandView } from './views/band'
import { live } from './views/live'
import { contact } from './views/contact'
import { band } from './data'

// Hash routing means the browser almost never makes a full navigation
// request after the first load, so its built-in service-worker update
// check rarely fires — returning visitors would be stuck one deploy
// behind. Re-check on an interval and whenever the tab becomes visible;
// with registerType 'autoUpdate' the fresh worker activates immediately
// and this register module reloads the page.
const SW_UPDATE_INTERVAL_MS = 60 * 60 * 1000
registerSW({
  immediate: true,
  onRegisteredSW(_swUrl, registration) {
    if (!registration) return
    const check = () => registration.update().catch(() => {})
    setInterval(check, SW_UPDATE_INTERVAL_MS)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') check()
    })
  },
})

const routes: Routes = {
  '/': home,
  '/music': music,
  '/band': bandView,
  '/live': live,
  '/contact': contact,
}

const app = document.getElementById('app')
if (!app) throw new Error('#app mount point missing')

// Build the persistent shell once; the router only swaps #view.
app.innerHTML = `
  ${navHTML()}
  <main id="view" class="view" tabindex="-1"></main>
  ${footerHTML()}
`

const outlet = document.getElementById('view') as HTMLElement

initNav()

createRouter({
  routes,
  outlet,
  fallback: '/',
  titleBase: `${band.name} · ${band.genre}`,
  onNavigate: setActiveNav,
})
