function Header() {
    const headerStyle = {
        border: "1px solid lightgreen",
        borderRadius: "5px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "lightblue",
        marginbottom: "0px"
    };
    
    return (
        <header style={headerStyle}>
            <h1>Header content here</h1>
        </header>
    );
}

export default Header;