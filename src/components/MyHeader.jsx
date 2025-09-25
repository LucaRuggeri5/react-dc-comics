const MyHeader = () => {
    const logoHeader = "../src/assets/img/dc-logo.png"
    return (
        <header>
            <section class="sezione-header">
                <div class="container-header">
                    <figure class="logo">
                        <img src={logoHeader} alt="logo" />
                    </figure>
                    <nav>
                        <div class="container-link">
                            <ul>
                                <li><a href="#">CHARACTERS</a></li>
                                <li><a href="#">COMICS</a></li>
                                <li><a href="#">MOVIES</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">GAMES</a></li>
                                <li><a href="#">COLLECTIBLES</a></li>
                                <li><a href="#">VIDEOS</a></li>
                                <li><a href="#">FANS</a></li>
                                <li><a href="#">NEWS</a></li>
                                <li><a href="#">SHOP</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </header>
    )
}

export default MyHeader