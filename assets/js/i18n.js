/* @title   Locale Redirector for Jekyll
 * @version 0.1
 * @author  danisztls
 * @license ISC
 *
 * It was meant as an alternative to Jekyll localization plugins as is with Github Pages.
 *
 * HOW IT WORKS
 * One default language (eg. 'en')
 * One or more alternative language to be autodetected from browser locale (eg. 'es')
 * Routes have a international code preffix (eg. 'https://site.com/es/about.html')
 */

let userLang

function langDetect () {
  // get lang from localStorage
  userLang = localStorage.getItem('userLang')

  // if lang is not set
  if (!userLang) {
    // get locale from browser
    // TODO: refactor to work with multiple languages, currently it's hardcoded

    let browserLocale = navigator.language || navigator.userLanguage
    // derive lang from locale

    if (browserLocale.match(/es/)) {
      userLang = 'es'
      window.location.replace(document.location.origin + '/' + userLang )
    } else {
      userLang = 'en'
      window.location.replace(document.location.origin)
    }
  }
}

function langRedirect (redirectLang) {
  // set lang on localStorage

  localStorage.setItem('userLang', redirectLang)

  // compute path
  // TODO: refactor to work with multiple languages, currently it's hardcoded

  //split url
  var split_url = document.location.href.split('/')
  // get url length
  if (split_url.length > 4) {
    var pageURL = document.location.href
    var langRE = "$1/" + redirectLang + "/$2"
    var redirectURL = pageURL.replace(/(.*)\/[a-z]{2}\/(.*)/, langRE)
    if (redirectURL == document.location.origin + '/en/' ) {
      // go to root page if redirect to english page
      redirectURL = document.location.origin
    }
  }else {
    if (redirectLang == 'es') {
      var pageURL = document.location.href
      var redirectURL = document.location.origin + '/' + redirectLang
    }
  }

  if (pageURL != redirectURL) {
    window.location.replace(redirectURL)
  }
}

langDetect()
langRedirect(userLang)
