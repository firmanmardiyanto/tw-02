<script>
	import { onMount } from 'svelte';
	export let result;

	onMount(() => {
		if (window && window.sessionStorage && result.jwt) {
			window.sessionStorage.setItem('user', JSON.stringify(result));
			window.location = '/home';
		} else {
			window.location = '/sign-in';
		}
	});
</script>
