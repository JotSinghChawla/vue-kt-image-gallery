export default {
  login() {
    // Call api here and store auth token
    console.log('calling auth api');
    window.location = '/api_call'
    
  },
  fetchImages(token) {
    console.log('calling Fetch images Imgur api with token = ', token);
    return ['https://i.imgur.com/OTzgTQW.jpeg', 'https://i.imgur.com/QPDS6Pb.jpeg']
  },
  uploadApi(image, token) {
    console.log('calling Upload image Imgur api with token = ', token);
  }
}