<script>
	import { onMount } from 'svelte';
	let user;
	onMount(() => {
		user = JSON.parse(window.sessionStorage.getItem('user'));
		if (user) {
			window.location = '/home';
		}
	});
</script>

<div class="flex items-center justify-center h-screen">
	<div>
		<p class="text-3xl font-bold underline text-center">Hallo</p>
		<div class="text-center mt-6">
			<a
				href="/sign-in"
				class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>Sign In</a
			>

			<a
				href="/sign-up"
				class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>Sign Up</a
			>
		</div>
	</div>
</div>
