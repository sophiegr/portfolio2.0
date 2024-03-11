<slot />

document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
            <option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
		</select>
	</label>`
);

<script>
    let colorScheme = "light dark";



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