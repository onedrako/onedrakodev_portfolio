/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public', // Destino
    register: true, // Registrar el service worker
    mode: 'production',
    disable: false
  },
  reactStrictMode: true,
  images: {
    domains: [
      'cdn-icons-png.flaticon.com',
      'pbs.twimg.com',
      'seeklogo.com',
      'styled-components.com',
      '1143667985-files.gitbook.io',
      'img.stackshare.io',
      'scontent.fmex1-2.fna.fbcdn.net',
      'i.imgur.com',
      'cdn-icons.flaticon.com',
      'www.gob.mx',
      'static.platzi.com',
      'upload.wikimedia.org',
      'scontent.fmex2-1.fna.fbcdn.net'
    ]
  }
})
