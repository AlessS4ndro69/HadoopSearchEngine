import sys


def buscar_informacion(palabra):
    # Abre el archivo para lectura
    with open('output.txt', 'r') as archivo:
        # Lee las líneas del archivo
        lineas = archivo.readlines()

        # Inicializa una lista para almacenar la información encontrada
        informacion = []

        # Itera a través de las líneas del archivo
        for linea in lineas:
            # Divide cada línea en palabras
            palabras = linea.strip().split()

            # Comprueba si la palabra buscada está en la línea
            if palabra in palabras:
                # Si se encuentra la palabra, agrega la información asociada a la lista
                for palabra_info in palabras:
                    if ':' in palabra_info:
                        informacion.append(palabra_info)

        # Retorna la información encontrada como una lista
        return informacion




# Solicita la palabra de entrada al usuario


palabra = sys.argv[1]
# Llama a la función para buscar información

resultado = buscar_informacion(palabra)
if(resultado):
	#print(f"Información para la palabra '{palabra}'=> {', '.join(resultado)}")
	print(f"'{palabra}':'{resultado}'")
else:
	print("Sin coincidencias")
