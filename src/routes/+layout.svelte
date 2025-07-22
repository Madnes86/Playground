<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class='h-[100vh] flex justify-center items-center'>
	{@render children()}
</main>
