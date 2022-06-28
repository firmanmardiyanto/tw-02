<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';

	import { createEventDispatcher } from 'svelte';

	let email = '';
	let password = '';

	const dispatch = createEventDispatcher();

	function submit() {
		dispatch('submit', {
			email,
			password
		});
	}
</script>

<form on:submit|preventDefault={submit} class="space-y-5 {$$props.class}">
	<Input label="Email" id="email" name="email" type="email" bind:value={email} required />
	<Input
		label="Password"
		id="password"
		name="password"
		type="password"
		bind:value={password}
		required
	/>
	<Button type="submit">Sign In</Button>
	<a href="http://localhost:1337/api/connect/google">
		<Button type="submit">Google</Button>
	</a>
	<a href="http://localhost:1337/api/connect/facebook">
		<Button type="submit">Facebook</Button>
	</a>
</form>
