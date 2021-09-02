export default function draw(parm) {
    const template = () => {
        document.querySelector('.app').innerHTML =
            `<menu>
                <button class="help">❓</button>
                    <form class="search">
                        <input type="search">
                    </form>
                <button class="settings">🔨</button>
            </menu>
            <main></main>`
    }

    const home = () => {
        document.querySelector('main').innerHTML =
            `<section class="historic">Historic</section>
            <section class="topSearch">TopSearch</section>
            <section class="tecnology">Tech</section>`
    }

    if (parm === 'template') return template()
    if (parm === 'home') return home()
}