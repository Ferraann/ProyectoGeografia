import geopandas as gpd
import folium
import os

# 1. Obtener la ruta absoluta de la carpeta donde está este script
ruta_carpeta = os.path.dirname(os.path.abspath(__file__))
ruta_shp = os.path.join(ruta_carpeta, 'ZONAS_VALIDAS.shp')

print(f"Buscando archivo en: {ruta_shp}")

# 2. Verificar si el archivo existe antes de abrirlo
if not os.path.exists(ruta_shp):
    print("ERROR: No se encuentra el archivo .shp en esa ruta.")
else:
    # 3. Leer el archivo especificando el motor 'fiona' (a veces es más estable con .shx)
    try:
        gdf = gpd.read_file(ruta_shp, engine='fiona')

        # Convertir a coordenadas web (WGS84)
        gdf = gdf.to_crs(epsg=4326)

        # Crear el mapa
        centro = [gdf.geometry.centroid.y.mean(), gdf.geometry.centroid.x.mean()]
        m = folium.Map(location=centro, zoom_start=12)

        # Añadir los datos
        folium.GeoJson(gdf, name="Zonas Válidas").add_to(m)

        # Guardar (ajusta la ruta de salida si quieres que vaya a /docs)
        ruta_salida = os.path.join(ruta_carpeta, '..', '..', '..', 'docs', 'practica_4_webmap.html')
        m.save(ruta_salida)
        print(f"Mapa generado con éxito en: {ruta_salida}")

    except Exception as e:
        print(f"Ocurrió un error al leer el shapefile: {e}")