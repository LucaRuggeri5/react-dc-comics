import ContentComics from '../components/ContentComics'

const MyMain = () => {

    const imgList1 = "../src/assets/img/buy-comics-digital-comics.png"
    const imgList2 = "../src/assets/img/buy-comics-merchandise.png"
    const imgList3 = "../src/assets/img/buy-comics-subscriptions.png"
    const imgList4 = "../src/assets/img/buy-comics-shop-locator.png"
    const imgList5 = "../src/assets/img/buy-dc-power-visa.svg"
    return (
        <main>
            <section>
                <div className="jumbotron"></div>
                <div class="content-black">
                    <div class="container">
                        <ContentComics/>
                    </div>
                </div>

                <div class="content-blu">
                    <div class="container">
                        <ul class="lista-merc">
                            <li><img src={imgList1} alt="" />DIGITAL COMICS</li>
                            <li><img src={imgList2} alt="" />DC MERCHANDISE</li>
                            <li><img src={imgList3} alt="" />SUBSCRIPTION</li>
                            <li><img src={imgList4} alt="" />COMIC SHOP LOCATOR</li>
                            <li><img src={imgList5} alt="" />DC POWER VISA</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MyMain