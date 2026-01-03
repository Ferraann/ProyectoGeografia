import rasterio
from rasterio.plot import show
import matplotlib.pyplot as plt

# Ruta al archivo de precipitación
ruta_precip = 'PRECIPITACION.TIF'

with rasterio.open(ruta_precip) as src:
    fig, ax = plt.subplots(figsize=(10, 10))

    # Usamos la rampa de color 'Blues' para precipitación
    image = show(src, ax=ax, cmap='Blues', title="Mapa de Precipitaciones")

    # Añadimos una barra de colores para interpretar los datos
    cbar = fig.colorbar(ax.get_images()[0], ax=ax, shrink=0.6)
    cbar.set_label('Milímetros (mm)')

    # Guardamos el resultado en PDF
    plt.savefig('Mapa_Precipitaciones.pdf', format='pdf', bbox_inches='tight')
    plt.show()

print("✅ PDF de Precipitaciones generado con éxito.")