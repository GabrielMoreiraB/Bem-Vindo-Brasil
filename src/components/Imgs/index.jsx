import './Imgs.css'

const Imgs = () => {
    return ( 
        <div className="imgs" style={{backgroundImage: `url(${'/img/mg-bh.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vh',
        }}>
            <h1 className='namecity'>Belo Horizonte</h1>
        </div>
     );
}
 
export default Imgs;