import React from 'react'
import parseText from '../functions/parseText'

const styles = {
    header: {
        fontFamily: 'HACKED',
        color: '#fff',
        fontSize: '4rem',
        fontWeight: 400,
        padding: '20px 20px',
        textAlign: 'center',
        minHeight: '65px'
    },
    headerDataContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 20px',
        background: '#000',
        fontFamily: 'Roboto',
        color: '#64B5F6',
        fontWeight: 400,
        alignItems: 'center'
    },
    headerDesc: {
        marginRight: 'auto',
        width: '80%'
    },
    headerDescCount: {
    },
    banner: {
        width: '100%',
        position: 'absolute',
        zIndex: '-1'
    }
}

export default function Header(props) {

    /*if (props.banner)
    {
        styles.header.backgroundImage = `url(${require('../img/banners/' + props.banner + '.png')})`;
        styles.header.backgroundPosition = 'center';
    }*/
    
    return (
        <div>
            <div style={{minHeight: props.banner ? '150px' : ''}}>
                {props.banner && (
                    <img src={require(`../img/banners/${props.banner}.png`)} style={styles.banner} />
                )}
                <h1 className="header" style={styles.header}>{props.headerText}</h1>
            </div>
            <div style={styles.headerDataContainer}>
                <div style={styles.headerDesc} dangerouslySetInnerHTML={{__html: parseText(props.headerDesc)}}></div>
                <div style={styles.headerDescCount}>{props.headerData}</div>
            </div>
        </div>
    )
}