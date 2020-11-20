// content.js
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "clicked_browser_action" ) {
//         var roll=document.getElementById("roll");
//         var rollerr=roll.getElementsByClassName("error")[0];
//         console.log("hello"+rollerr.textContent);
//       }
//     }
//   );
alert("Click anywhere on the page to test playing audio from an extension.")

document.addEventListener('click', () => {
	let url = chrome.runtime.getURL('Sounds/Space.mp3')
	console.log(url)

	let a = new Audio(url)
	a.play()
})