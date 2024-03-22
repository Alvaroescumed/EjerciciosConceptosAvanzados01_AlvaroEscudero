

export default function ShowServerCofig({ config }){
    
    // Validamos la estructura de la configuracion que traemos por props

    if( !config || typeof config.minConnection !== 'number' || typeof config.maxConnection !== 'number' || typeof config.restartAlways !== 'boolean'){
        throw new Error("The server configuration is not valid");
    }

    // Validamos que el enviroment solo pueda ser dev, play or live

    if(config.environment !== 'dev' && config.environment !== 'play' && config.environment !== 'live'){
        throw new Error("The server enviroment is not valid");
    }

    // Validamos que si el enviroment es Live SSL esté ya que es obligatorio

    if(config.enviroment === 'live' && !config.SSL ){
        throw new Error("Live servers must have a SSL")
    }

}

/* de esta forma me da error el componente

    ShowServerConfig.propTypes = {
    config: PropTypes.shape({
        minConnection: PropTypes.number.isRequired,
        maxConnection: PropTypes.number.isRequired,
        restartAlways: PropTypes.bool.isRequired,
        environment: PropTypes.oneOf(['dev', 'play', 'live']).isRequired,
        SSL: PropTypes.bool
    }).isRequired
}; */