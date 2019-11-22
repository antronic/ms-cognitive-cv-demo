// Define as a global
const axios = window.axios

const sample = 'https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/2019/01/satya-nadella-ceo-event-details-timeline.jpg'

/**
 * ========================
 * Cognitive Service Config
 * ========================
 */
const visionEndpoint = ''
const uriBase = `${visionEndpoint}/vision/v2.1/analyze`

const visionSubscriptionKey = ''

// Elements
const imageEl = document.querySelector('#img-preview')

// Render Preview Image
function renderImage() {}

/**
 * ============================
 * Cognitive Service Parameters
 * ============================
 */
const cognitiveParams = {
  visualFeatures: 'Categories,Description,Objects,Faces,Adult',
  details: '',
  langauge: 'en',
}

// =========================
// Send request to Congitive
// =========================
function analyzeImage(imageUrl) {
  axios({
    method: 'post',
    url: uriBase,
    cognitiveParams,

    data: {
      url: imageUrl,
    },

    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey,
    }
  })
    .then((res) => {
      responseShow.innerHTML = JSON.stringify(res.data, null, '\t')
      imgPreview.src = imageUrl

      window.Prism.highlightAll()

      // set response
      setAnalyzeResponse(res.data)

      // set caption
      clearCaption()
      setCaption()
      // draw frame
      renderFrames()

      reportStatus('✅ Analyze done.')

      setLoading(false)
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        reportStatus('💤 Resting...')
      }, 5000)
    })
    .catch((error) => {
      console.log('error')
      console.log(error)
    })
}

// =============
// Inital launch
// =============
window.Prism.highlightAll()

imageEl.src = sample
console.log('sameple')
console.log(sample)