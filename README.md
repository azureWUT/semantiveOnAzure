# Semantive on Azure

## Knowledge Mining with Cognitive Services

### Krótki opis projektu
Wiele organizacji boryka się z problemem zarządzania wiedzą w organizacji. O ile dane dostępne w hurtowniach danych są zrozumiałe dla analityków biznesowych, to dane zamknięte w dokumentach, prezentacjach, obrazach i innych danych unstructured często nie są zarządzane, a wiedza na ich temat jest zamknięta w silosach organizacyjnych. Duża część czasu pracowników jest stracona na manualne, czasochłonne wyszukiwanie właściwego dokumentu. Celem projektu jest zaimplementowanie rozwiązania, które robi ekstrakcję wiedzy z danych Unstructured. Zalecane jest skorzystanie z Cognitive Search Services i przygotowanie Custom Skills, które wyciągają dodatkowe metadane z dokumentów oprócz już dostępnych Skill’i. Rozwiązanie powinno być dostępne jako aplikacja typu Power App, do której można wgrać dowolny dokument i uzyskać metadane. Za konkretny przykład może posłużyć wykrywanie marek (brand) z obrazów lub lokalizowanie (geolocation) dokumentów w oparciu o treści w nich zawarte. Oczekuje się, że studenci przetestują takie rozwiązanie w oparciu o dostępne otwarte danei ustalą konkretny use-case, który wykorzystuje co najmniej 2 Custom Skille. Partner przedstawi szczegółowo wymagania co do projektu w czasie pierwszego spotkania z grupą studentów. Oczekuje się, że zespółrealizujący projekt będzie liczył od 3do 5 osób. 

Kontakt ze strony partnera: marek.lewandowski@semantive.com

### Słowniczek

- Knowledge Mining –ekstrakcja wiedzy(relacji, wniosków, wzorców, itp.)z danych.
- Cognitive Services –usługaw chmurze Azure, oferująca rozwiązania AI poprzez API
- Dane unstructured –dane nie posiadające predefiniowanego schematu danych. W kontekście projektu odnosi się to do danych typu: dokumenty (docx, pdf, ...), prezentacje,      zdjęcia, itd.
- Custom Skill –nazwa komponentu, który po zintegrowaniu z Cognitive Search Services, wydobywa metadane z danych, wzbogacając je.

### Przydatne linki, materiały

- [Knowledge mining with Azure cognitive search](https://azure.microsoft.com/pl-pl/resources/videos/knowledge-mining-with-azure-cognitive-search/)
- [Semantive official website](https://semantive.com/pl/)
- [Azure Knowledge Mining](https://azure.microsoft.com/en-us/solutions/knowledge-mining/)

### Schemat działania

![workflow_schema](https://github.com/azureWUT/semantiveOnAzure/blob/main/resources/cognitive-search.png)
