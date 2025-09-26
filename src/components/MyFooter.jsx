const MyFooter = () => {
    const imgSocial1 = "../src/assets/img/footer-facebook.png"
    const imgSocial2 = "../src/assets/img/footer-twitter.png"
    const imgSocial3 = "../src/assets/img/footer-youtube.png"
    const imgSocial4 = "../src/assets/img/footer-pinterest.png"
    const imgSocial5 = "../src/assets/img/footer-periscope.png"

    return (
        <footer>
            <section>
                <div className="content-img">
                    <div class="container-foot">
                        <ul class="footer-list">
                            <li class="title-list"> DC COMICS</li>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                            <li class="title-list">SHOP</li>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                        <ul class="footer-list">
                            <li class="title-list">DC</li>
                            <li>Term of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choice</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul class="footer-list">
                            <li class="title-list">SITES</li>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-link">
                        <div className="sign">
                            <button class="tasto-sign">
                                <a href="">SIGN-UP NOW!</a>
                            </button>
                        </div>
                        <div className="social">
                            <ul>
                                <li>FOLLOW US</li>
                                <li><a href=""></a><img src={imgSocial1} alt="" /></li>
                                <li><a href=""></a><img src={imgSocial2} alt="" /></li>
                                <li><a href=""></a><img src={imgSocial3} alt="" /></li>
                                <li><a href=""></a><img src={imgSocial4} alt="" /></li>
                                <li><a href=""></a><img src={imgSocial5} alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default MyFooter