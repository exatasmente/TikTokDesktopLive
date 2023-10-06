<script>
	import Canvas from './Canvas.svelte';
	import { onMount } from 'svelte';

	onMount( () => {
		if ('serviceWorker' in navigator) {
	  		navigator.serviceWorker
			.register('/sw.js')
			.then(serviceWorker => {
		  	console.log('Service Worker registered: ' + serviceWorker);
			})
			.catch(error => {
			  	console.log('Error registering the Service Worker: ' + error);
			});
  		}
	})
</script>
<Canvas />
