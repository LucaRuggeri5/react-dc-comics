const MyHeader = () => {
    const logoHeader = "../src/assets/img/dc-logo.png"
    return (
        <header>
            <section class="sezione-header">
            <div class="container-logo">
                <figure>
                    <img src={logoHeader} alt="Logo header" />
                </figure>
            </div>
            <div class="container-link">
                <nav>
                    <ul class="">
                        <li>CHARACTERS</li>
                        <li>COMICS</li>
                        <li>MOVIES</li>
                        <li>TV</li>
                        <li>GAMES</li>
                        <li>COLLECTIBLES</li>
                        <li>VIDEOS</li>
                        <li>FANS</li>
                        <li>NEWS</li>
                        <li>SHOP</li>
                    </ul>
                </nav>
            </div>
            </section>
        </header>
    )
}

export default MyHeader