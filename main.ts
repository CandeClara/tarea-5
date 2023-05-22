input.onButtonPressed(Button.A, function () {
    radio.sendString(paquete_pong)
    Mensaje_recibido = input.runningTime()
})
radio.onReceivedString(function (receivedString) {
    Dirección_origen_recibida = receivedString.substr(0, 2)
    Dirección_destino_recibida = receivedString.substr(2, 2)
    mensaje_enviado = receivedString.substr(4, 30)
    if (Dirección_destino_recibida == Dirección_destino) {
        basic.showString("" + (Mensaje_recibido))
    }
})
let mensaje_enviado = ""
let Dirección_destino_recibida = ""
let Dirección_origen_recibida = ""
let Mensaje_recibido = 0
let paquete_pong = ""
let Dirección_destino = ""
let Dirección_origen = "GP"
Dirección_destino = "AR"
let CABECERA = "" + Dirección_origen + Dirección_destino
let MENSAJE = paquete_pong
paquete_pong = "" + CABECERA + MENSAJE
basic.forever(function () {
    radio.setGroup(22)
})
