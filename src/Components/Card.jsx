import './styleCard.css'

export default function Card({title, image}) {
    return (
        <div className='card' >
            <p>{title}</p>
            <img
                
            src={image} alt='get in touch with your favorite influencer Sara '></img>
        </div>
    )
}
