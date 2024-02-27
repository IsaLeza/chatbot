import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['hola', 'buenas','hi',])
    .addAnswer('Hola, sómos isaSoft Soluciones de Marketing Digital y Software, ¿Cómo te podemos ayudar?')

