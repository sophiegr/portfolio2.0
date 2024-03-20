<article>
    <svelte:element this={"h" + hLevel}>{ info.title }</svelte:element>
    <img src={info.image} alt="">
    <p>{info.description}</p>
    <div>{info.year}</div>
</article>

<script>
    export let info = {};
    export let hLevel = 2;
</script>

<style>
    article {
        display: grid;
        grid-row: span 3;
        grid-template-rows: subgrid;
        h2, h3 {
            margin: 0;
        }
    }
</style>