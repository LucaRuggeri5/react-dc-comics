const CardProps = (props) => {

    const { thumb, series, title } = props.comicProps
    return (
        <div className="card">
            <img src={thumb} alt={title} />
            <span>{series}</span>
        </div>
    )
}

export default CardProps