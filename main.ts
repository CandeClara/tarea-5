input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (paquete_ping))
    paquete_ping = input.runningTime()
})
radio.onReceivedString(function (receivedString) {
    Dirección_origen_recibida = receivedString.substr(0, 2)
    Dirección_destino_recibida = receivedString.substr(2, 2)
    Mensaje_recibido = receivedString.substr(4, 30)
    if (Dirección_destino_recibida == Dirección_destino) {
        basic.showString(Mensaje_recibido)
    }
})
let Mensaje_recibido = ""
let Dirección_destino_recibida = ""
let Dirección_origen_recibida = ""
let paquete_ping = 0
let Dirección_destino = ""
let Dirección_origen = "AR"
Dirección_destino = "GP"
let CABECERA = "" + Dirección_origen + Dirección_destino
let MENSAJE = "ping"
paquete_ping = "" + CABECERA + MENSAJE
basic.forever(function () {
    radio.setGroup(22)
})
