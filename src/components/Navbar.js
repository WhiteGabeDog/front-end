import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    const styles = {
        bar: {
            marginLeft: '50px',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        containerFront: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '50px'
        },
        containerBack: {
            marginRight: '50px',
            display: 'flex',
            gap: '30px'
        },
    };
    const navigate = useNavigate();

    return(
        <div style={styles.bar}>
            <div style={styles.containerFront}>
                <div>1NorGate</div>
                <button onClick={()=>navigate('/')}>Home</button>
                <div>Cart</div>
                <button onClick={()=>navigate('/myGame')}>My Game</button>
            </div>
            
            <div style={styles.containerBack}>
                <p>Name</p>
                <p>Picture</p>
            </div>
        </div>
    );
}
export default Navbar;