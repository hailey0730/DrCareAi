$(document).ready(function(){
	if ('serviceWorker' in navigator && 'PushManager' in window) {

	  console.log('Service Worker and Push is supported');
	  navigator.serviceWorker.register('https://www.drcare.ai/assets/js/service-worker.js')
	  // navigator.serviceWorker.register('./assets/js/service-worker.js')

	  .then(function(swReg) {

	    console.log('Service Worker is registered', swReg);
	    swRegistration = swReg;
	   // askPermission();

	  })
	  .catch(function(error) {
	    console.error('Service Worker Error', error);
	  });
	  
	  askPermission()					
	    .then(function(permissionResult){
	    		console.log(permissionResult);
	    		// do something with permissionResult
	    		var pushSubscription = subscribeUserToPush();
	    		// sendSubscriptionToBackEnd(pushSubscription);		//uncomment to save subscription to backend

	   //  		app.post('/api/save-subscription/', function (req, res) {
				//   if (!isValidSaveRequest(req, res)) {
				//     return;
				//   }

				//   return saveSubscriptionToDatabase(req.body)
				//   .then(function(subscriptionId) {
				//     res.setHeader('Content-Type', 'application/json');
				//     res.send(JSON.stringify({ data: { success: true } }));
				//   })
				//   .catch(function(err) {
				//     res.status(500);
				//     res.setHeader('Content-Type', 'application/json');
				//     res.send(JSON.stringify({
				//       error: {
				//         id: 'unable-to-save-subscription',
				//         message: 'The subscription was received but we were unable to save it to our database.'
				//       }
				//     }));
				//   });
				// });
	    }) 
	    .catch(function(error) {
		    console.error('Get Permission result Error', error);
		  });

	} else {
	  console.warn('Push messaging is not supported');
	}

});

// ====================== subscribe user to push notification ===============================
function askPermission() {
  return new Promise(function(resolve, reject) {
    const permissionResult = Notification.requestPermission(function(result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  })
  .then(function(permissionResult) {
      // console.log(permissionResult);		//DEBUG
    if (permissionResult !== 'granted') {
      throw new Error('We weren\'t granted permission.');
    }
    return permissionResult
  });
}

function subscribeUserToPush() {
  return navigator.serviceWorker.register('https://www.drcare.ai/assets/js/service-worker.js')
  // return getSWRegistration()
  .then(function(registration) {
    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        'BPUGUNwfjY2s4SLPLCEnlvNiGfAaXiGNdrlR_ZrrSSk6P1TTYkINSso4xb7vWICCz-nTm8bWVYDZEtLixkmLzfA'
      )
    };

    return registration.pushManager.subscribe(subscribeOptions);
  })
  .then(function(pushSubscription) {
    console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
    return pushSubscription;
    // return JSON.stringify(pushSubscription);
  });
}

function sendSubscriptionToBackEnd(subscription) {
  return fetch('', {		//should be api to our server
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(subscription)
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Bad status code from server.');
    }

    return response.json();
  })
  .then(function(responseData) {
    if (!(responseData.data && responseData.data.success)) {
      throw new Error('Bad response from server.');
    }
  });
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
