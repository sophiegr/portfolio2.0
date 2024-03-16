<article>
    <svelte:element this={"h" + hLevel}>{ p.title }</svelte:element>
    <img src={p.image} alt="">
    <p>{p.description}</p>
    <div>{p.year}</div>
</article>

<script>
    export let info = {};
    let p = info;
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