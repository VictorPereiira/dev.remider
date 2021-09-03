export default function draw(parm) {
    const template = () => {
        document.querySelector('.app').innerHTML =
            `<menu>
                <button class="help">❓</button>    
                <input class="search" type="search" placeholder="Search">
                <button class="settings">🔨</button>
            </menu>
            <main class="main_area"></main>
            <div class="popup_area"></div>`

        let popupAreaAccess = document.querySelector('.popup_area')

        document.querySelector('.help').addEventListener('click', () => {
            help_view(popupAreaAccess)
        })

        document.querySelector('.search').addEventListener('input', e => {
            console.log('Searching...');
        })

        document.querySelector('.settings').addEventListener('click', () => {
            settings_view(popupAreaAccess)
        })
    }

    const home = () => {
        document.querySelector('.main_area').innerHTML = `<section class="tech"></section>`
        let tech_box = [
            { 'id': 0, 'img': "../public/js.svg" },
            { 'id': 1, 'img': "../public/nodeJs.svg" },
            { 'id': 2, 'img': "../public/gitHub.svg" },
        ]

        // <section class="recent_activity">Historic</section>

        for (let i in tech_box) {
            document.querySelector('.tech').innerHTML +=
                `<div class="tech_card">
                    <img src="${tech_box[i].img}">
                </div>`
        }
    }

    const help_view = (paa) => {
        paa.innerHTML =
            `<div class="help_view_card" >
                <h3>Help</h3>
            </div>`
    }

    const settings_view = (paa) => {
        paa.innerHTML =
            `<div class="settings_view_card" >
                <h3>Settings</h3>
            </div>`
    }

    if (parm === 'template') return template()
    if (parm === 'home') return home()
}