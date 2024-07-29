export const setIsScrolled = () => (window['scrollPosition'] = window.scrollY)
export const shortenDescription = (txt) => (txt ? txt.substr(0, 80) + '...' : '')
export const getFirstImage = (images) => (images ? 'https://joduplessis.com/' + images[0] : '')
export const getFirstElement = (arr) => (arr[0] ? arr[0] : {})
export const getRandomWidth = () => Math.floor(Math.random() * 2)
export const getImageUrl = (image) => 'https://joduplessis.com/' + image
