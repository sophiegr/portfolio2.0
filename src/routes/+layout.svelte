<label class="color-scheme">
		Theme:
        <select bind:value={ colorScheme }>
            <option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
		</select>
</label>

<script>
    import { page } from '$app/stores';

    let pages = [
        {url: "./", title: "Home"},
        {url: "./projects", title: "Projects"},
        {url: "./contact", title: "Contact"},
        {url: "./resume", title: "Resume"},
        {url: "https://github.com/sophiegr", title: "Github"},
    ];
    let localStorage = globalThis.localStorage ?? {};
    $: localStorage.colorScheme = colorScheme;
    let colorScheme = localStorage.colorScheme ? localStorage.colorScheme : "light dark";
    let root = globalThis?.document?.documentElement;
    $: root?.style.setProperty("color-scheme", colorScheme);
    let profileData = fetch("https://api.github.com/users/your-username");
    /* let profileData = {
        ok: true,
        json: async () => ({
            followers: 100,
            following: 100,
            public_repos: 100,
            public_gists: 100,
        })
    };  */
</script>

<nav>
	{#each pages as p }
        <a href={ p.url } class:current={ "." + $page.route.id === p.url } target={ p.url.startsWith("http") ? "_blank" : null }>{ p.title }</a>
	{/each}
</nav>

<style>
    label.color-scheme {
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 80%;
    }
</style>

<slot />