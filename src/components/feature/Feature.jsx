import './Feature.style.scss'

export function Feature(props) {
    return (
        <div className="feature-item">
            <img
                src={`${props.imagesPath}${props.data.src}`}
                alt={props.data.alt}
                className="feature-icon"
            />
            <h3 className="feature-item-title">{props.data.title}</h3>
            <p>{props.data.description}</p>
        </div>
    )
}
