import sys

# Define la función para ordenar los registros
def ordenar(numero_registros):
    # Lista para almacenar los registros
    registros = []

    # Abre el archivo final en modo lectura
    with open('finalPR.txt', 'r') as archivo_final:
        for linea in archivo_final:
            # Divide la línea en campos utilizando la tabulación como separador
            campos = linea.split('\t')
	    
            # Si hay al menos tres campos y los dos últimos campos son números flotantes
            if True:
                valor = float(campos[-1])
                registro = (linea.split(" ")[0], valor)
                registros.append(registro)

    # Ordena la lista de registros por el valor flotante en orden descendente
    registros_ordenados = sorted(registros, key=lambda x: x[1], reverse=True)

    # Devuelve los primeros 'numero_registros' registros
    return registros_ordenados[:numero_registros]

n = sys.argv[1]


# Prueba la función con un ejemplo
registros_mas_valiosos = ordenar(int(n))  # Obtener los 10 registros más valiosos
print(registros_mas_valiosos)
# Imprime los registros más valiosos
#for registro, valor in registros_mas_valiosos:
#    print(f"Registro: {registro}, Valor: {valor}")
