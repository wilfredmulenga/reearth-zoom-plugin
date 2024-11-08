reearth.ui.show(`
<style>
    #container {
    width: 80px;
    background-color: #2A2A2A;
    height: max-content;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    padding: 4px 10px;
    }

    button {
      background-color: #0000FF;
      border: none;
    }


</style>
<div id="container">
<button id="zoomOut">
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="#808080" viewBox="0 0 24 24">
  <path stroke="#FAF9F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
</svg>
</button>
<button id="zoomIn">
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
  <path stroke="#FAF9F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
</svg>
</button>
</div>
<script>

window.addEventListener("message", e => {
 document.getElementById('zoomIn').addEventListener('click',  function() {
        let zoomIn = e.source.reearth.camera.zoomIn
        zoomIn(5)
    });

 document.getElementById('zoomOut').addEventListener('click',  function() {
        let zoomOut = e.source.reearth.camera.zoomOut
        zoomOut(5)
    });
});
</script>
`);

reearth.on("update", send);
send();

function send() {
reearth.ui.postMessage("message");
}