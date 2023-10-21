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

    return(
        <div style={styles.bar}>
            <div style={styles.containerFront}>
                <div>1NorGate</div>
                <div>Home</div>
                <div>Cart</div>
                <div>My Game</div>
            </div>
            
            <div style={styles.containerBack}>
                <p>Name</p>
                <p>Picture</p>
            </div>
        </div>
    );
}
export default Navbar;