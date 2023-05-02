/**
 * Erweiterung Zeichenkettenfunktionen für Makecode
 */
//% weight=10 color=#0fbc11 icon=""
namespace Zeichenkette {
    /**
     * TODO: Beschreibe deine Funktion hier
     */    
    //% block
    export function auffuellen(n: string, s: string, e: number): string {
        // Add code here
        let laenge=n.length
        if(laenge<e) {
            for (let index = 0; index < (e-laenge); index++) {
	            n=n+s
            }
        }
        return n.substr(0,e)
    }
}
