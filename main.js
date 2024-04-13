// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-glyph')

  // Converting the html collection to an array
  Array.from(likeButtons)

  // Adding event listeners to all like buttons
  likeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      mimicServerCall()
      .then(res => {
        // console.log(res)

        // Using an if statement to toggle between full heart and empty heart
        if (btn.textContent === EMPTY_HEART) {
          btn.textContent = FULL_HEART;
          btn.classList.add('activated-heart');          
        } else {
          btn.textContent = EMPTY_HEART;
          btn.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        //Displaying the error modal
        const errorModal = document.querySelector('#modal')
        errorModal.classList.remove('hidden')
        
        //Hiding the error modal after 3 seconds
        function hideErrorModal (errorMessage){
          return errorMessage.classList.add('hidden');
        }
        setTimeout(() => hideErrorModal(errorModal),3000)
      })
    })
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
