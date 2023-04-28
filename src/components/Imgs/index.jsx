import './Imgs.css'

const Imgs = ({url, name}) => {
    return ( 
        <div className="imgs" style={{backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vh',
        }}>
            <h1 className='namecity'>{name}</h1>
        </div>
     );
}
 
export default Imgs;