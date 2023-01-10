let options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '101772b5ddmshc76c7d6703770bap17c5ecjsn048455a6c6a6',
    'X-RapidAPI-Host': 'ip-geo-location-find-ip-location-and-details.p.rapidapi.com'
  }
};

const fetchIpInfo = () => {
  return fetch(`https://ip-geo-location-find-ip-location-and-details.p.rapidapi.com/iplocation?ip=${ip.value.trim()}`, options)
  .then (res => res.json())
  .catch(error => results.innerHTML = 'No se han podido obtener datos')
}
// Variables
const form = document.getElementById('form')
const ip = document.getElementById('ip')
const submit = document.getElementById('submit')
const results = document.getElementById('results')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  // Loading atributes
  submit.setAttribute('disabled', '')
  submit.setAttribute('aria-busy', 'true')

  const ipInfo = await fetchIpInfo()

  if (ipInfo) {
    // null son los reemplazables
    results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  // Remove loading atributes
  submit.removeAttribute('disabled')
  submit.removeAttribute('aria-busy')
})