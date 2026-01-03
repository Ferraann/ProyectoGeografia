import rasterio
from rasterio.plot import show
import matplotlib.pyplot as plt

# Ruta al archivo de temperatura
ruta_temp = 'TEMPERATURA.TIF'

with rasterio.open(ruta_temp) as src:
    fig, ax = plt.subplots(figsize=(10, 10))

    # Usamos una rampa de color 'inferno' o 'coolwarm' para temperatura
    image = show(src, ax=ax, cmap='coolwarm', title="Mapa de Temperaturas Junio 2024")

    # Añadimos una barra de colores para interpretar los datos
    cbar = fig.colorbar(ax.get_images()[0], ax=ax, shrink=0.6)
    cbar.set_label('Grados Celsius')

    # Guardamos el resultado en PDF
    plt.savefig('Mapa_Temperaturas.pdf', format='pdf', bbox_inches='tight')
    plt.show()

print("✅ PDF de Temperaturas generado con éxito.")