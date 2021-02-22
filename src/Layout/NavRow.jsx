import './StyleNavRow.css'


export default function NavRow({Icon, text, className}) {
    return (
        <div className="nav" style={{display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', margin: 20}}>
            <Icon fontSize='large' />
            <p className={`navbar-text ${className}`}>{text}</p>
        </div>
        
    )
}
