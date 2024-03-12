<slot />

<label class="color-scheme">
		Theme:
        <select bind:value={ colorScheme }>
            <option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
		</select>
</label>

<script>
    let localStorage = globalThis.localStorage ?? {};
    $: localStorage.colorScheme = colorScheme;
    let colorScheme = localStorage.colorScheme ? localStorage.colorScheme : "light dark";
    let root = globalThis?.document?.documentElement;
    $: root?.style.setProperty("color-scheme", colorScheme);
    // let profileData = fetch("https://api.github.com/users/your-username");
    let profileData = {
        ok: true,
        json: async () => ({
            followers: 100,
            following: 100,
            public_repos: 100,
            public_gists: 100,
        })
    }; 
</script>

<style>
    .color-scheme {
        position: absolute;
        top: 1rem;
        right: 15rem;
        font-size: 80%;
        font-family: inherit;
    }
</style>