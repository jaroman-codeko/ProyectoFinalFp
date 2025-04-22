from google import genai

client = genai.Client(api_key="AIzaSyCoYVhvGbrmb7eBCNE35CC6rp53TYsNVt8")

response = client.models.generate_content(
    model="gemini-2.0-flash", contents="Dame las últimas noticias sobre política liberal de derecha, el Real Madrid y tecnología. Enfócate en fuentes creíbles y resume los puntos clave de cada tema. Estructura la respuesta en tres secciones: Política (liberal de derecha), Real Madrid y Tecnología, incluyendo titulares, resúmenes y fuentes para cada una. 01/04/2025"
)
print(response.text)