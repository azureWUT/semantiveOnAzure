# Semantive on Azure
> Projekt realizowany w ramach przedmiotu 1DI1585:A - Wprowadzenie do aplikacji i rozwiązań opartych o Sztuczną Inteligencję i Microsoft Azure

## Knowledge Mining with Cognitive Services

### App repo (UI with connection to Azure)
https://github.com/azureWUT/vue-cogni

### App link
https://red-bay-0f31c3d03.azurestaticapps.net/

### Video link
https://www.youtube.com/watch?v=W4_-ROpOKxw

### Team
- Maciej Czarkowski _mczarkowski98@gmail.com_ (Team Leader)
- Agata Rodzeń _agata.rodzen@gmail.com_
- Krzysztof Piekarczyk _krzys@piekarczyk.eu_
- Miłosz Wójcik _mioawoj@gmail.com_
- Karolina Gałczyńska _galczynska.karolina@gmail.com_

### Krótki opis projektu
Wiele organizacji boryka się z problemem zarządzania wiedzą w organizacji. O ile dane dostępne w hurtowniach danych są zrozumiałe dla analityków biznesowych, to dane zamknięte w dokumentach, prezentacjach, obrazach i innych danych unstructured często nie są zarządzane, a wiedza na ich temat jest zamknięta w silosach organizacyjnych. Duża część czasu pracowników jest stracona na manualne, czasochłonne wyszukiwanie właściwego dokumentu. Celem projektu jest zaimplementowanie rozwiązania, które robi ekstrakcję wiedzy z danych Unstructured. Zalecane jest skorzystanie z Cognitive Search Services i przygotowanie Custom Skills, które wyciągają dodatkowe metadane z dokumentów oprócz już dostępnych Skill’i. Rozwiązanie powinno być dostępne jako aplikacja typu Power App, do której można wgrać dowolny dokument i uzyskać metadane. Za konkretny przykład może posłużyć wykrywanie marek (brand) z obrazów lub lokalizowanie (geolocation) dokumentów w oparciu o treści w nich zawarte. Oczekuje się, że studenci przetestują takie rozwiązanie w oparciu o dostępne otwarte danei ustalą konkretny use-case, który wykorzystuje co najmniej 2 Custom Skille. Partner przedstawi szczegółowo wymagania co do projektu w czasie pierwszego spotkania z grupą studentów. Oczekuje się, że zespółrealizujący projekt będzie liczył od 3do 5 osób. 

Kontakt ze strony partnera: marek.lewandowski@semantive.com

### Główny cel projektu
Stworzenie systemu pozwalającego na stworzenie przeszukiwalnej na bazie słów kluczowych bazy wiedzy na podstawie nieustrukturyzowanych dokumentów i publikacji zagregowanych w silosach organizacji.

### Przykładowa baza wiedzy
- [Omics free medical journal](https://www.omicsonline.org/free-medical-journals.php)
- [Free medical journals](http://www.freemedicaljournals.com/)

### Słowniczek

- Knowledge Mining –ekstrakcja wiedzy(relacji, wniosków, wzorców, itp.)z danych.
- Cognitive Services –usługaw chmurze Azure, oferująca rozwiązania AI poprzez API
- Dane unstructured –dane nie posiadające predefiniowanego schematu danych. W kontekście projektu odnosi się to do danych typu: dokumenty (docx, pdf, ...), prezentacje,      zdjęcia, itd.
- Custom Skill –nazwa komponentu, który po zintegrowaniu z Cognitive Search Services, wydobywa metadane z danych, wzbogacając je.

### Przydatne linki, materiały

- [Knowledge mining with Azure cognitive search](https://azure.microsoft.com/pl-pl/resources/videos/knowledge-mining-with-azure-cognitive-search/)
- [Semantive official website](https://semantive.com/pl/)
- [Azure Knowledge Mining](https://azure.microsoft.com/en-us/solutions/knowledge-mining/)
- [JavaScript Azure Cognitive Services modules](https://docs.microsoft.com/en-us/javascript/api/overview/azure/cognitive-services?view=azure-node-latest)
- [Adding a custom skill to an Azure Cognitive Search](https://docs.microsoft.com/pl-pl/azure/search/cognitive-search-custom-skill-interface)

### Schemat działania

![workflow_schema](https://github.com/azureWUT/semantiveOnAzure/blob/main/resources/workflow_schema_1.1.png)

## Definicja wymagań
### Wymagania funkcjonalne
- Aplikacja umożliwi analizę tekstów w oparciu o analizę słów kluczowych
- Wynikiem działania będą metadane, które zostaną utworzone na podstawie tekstu
- Aplikacja umożliwi wprowadzanie tekstu bezpośrednio lub w postaci plików tekstowych.
- Możliwe będzie wprowadzenie wielu plików na raz, w celu ich zbiorczej analizy pod tonacji
- Obsługa aplikacji będzie możliwa z poziomu UI

### Wymagania niefunkcjonalne
- Aplikacja ma być przyjazna w użytkowaniu, prosta w obsłudze
- Aplikacja będzie działać z różnymi formatami tekstu
- Aplikacja nie będzie wymagać efektywnych zasobów internetowych, niska prędkość przesyłu danych nie powinna stanowić problemu dla ogólnego *user experience*

### Azure Cognitive Skills
- Key Phrase Extraction
- Entity Extraction

### Custom skills
- Bing search
- Określanie powiązań pomiędzy organizacjami i osobami

## Wybrany tech stack
- Przechowywanie danych
    - Azure Storage Blob
- Warstwa obliczeniowa
    - Azure Cognitive Services - Text Analytics
    - Azure Function App - Custom skills
- Frontend
    - Microsoft Power Apps
- Język
    - C#/Python
## Harmonogram
| Data | Oczekiwany stan prac |
| ------ | ------ |
| 19.11.2020 | Zapoznanie z tematami prac |
| 25.11.2020 | Spotkanie analityczne 1 / inicjujące -- organizacja pracy |
| 26.11.2020 | P2 - Spotkanie z koordynatorem projektów<br><ul><li>przedstawienie założeń</li><li>przekazanie podstawowego pomysłu na realizację</li></ul> |
| 02.12.2020 | Spotkanie analityczne 2, status projektu |
| 03.12.2020 | P3 - Spotkanie z Product Ownerem -- gotowy opis funkcjonalności i analiza wstępna. <br> Zdefiniowane następujące elementy: <br><ul><li>opis funkcjonalności</li><li>architektura</li><li>stos technlogiczny</li><li>harmonogram</li></ul> |
| 17.12.2020 | Spotkanie analityczne 3, status projektu, Sprint 3 Retrospective |
| 06.01.2021 | Spotkanie analityczne 4, status projektu, Sprint 4 Retrospective |
| 07.01.2020 | P4 - Q&A co do projektu |
| 13.01.2020 | Spotkanie analityczne 5, stworzenie Azure Functions do Custom Skills |
| 19.01.2020 | Testy aplikacji z wykorzystaniem plików Medical Journal |
| 21.01.2020 | Middle-checkpoint 2 |
| 28.01.2020 | Prezentacja projektu | 

## Tasks
### Sprint 1 (19-26.11.2020)
- [x] Przygotowanie repozytorium projektu wraz z podstawowym readme @Maciej
- [x] Przygotowanie schematów opisujących wykorzystywane usługi @Agata
- [x] Definicja funkcjonalności dostarczanych przez projekt @Karolina
- [x] Definicja stosu technologicznego wykorzystywane w projekcie
### Sprint 2 (26.11-02.12.2020)
- [x] Przygotowanie środowiska programistycznego w Azure Portal @Miłosz @Maciej @Krzysztof
- [x] Przygotowanie ostatecznego schematu realizacji zadania @Agata
- [x] Definicja zadań i harmonogramu @Maciej @Karolina
- [x] Przygotowanie projektu w Azure @Miłosz
### Sprint 3 (03.12-17.12.2020)
- [x] Określenie i budowa modelu danych @Maciej
- [x] Przygotowanie magzynu danych do pracy, zgodnie z ustaleniami z 03.12 @Miłosz @Karolina
- [x] Wczytanie danych testowych @Agata @Miłosz
- [x] Budowa usługi Azure CognitiveSearch obsługującej wczytywane dane @Miłosz @Krzysztof
### Sprint 4 (18.12.2020-20.01.2021)
- [x] Budowa kontrolerów do obsługi zapytań z frontendu aplikacji @Maciej @Krzysztof
- [x] Przygotowanie aplikacji DemoApp @Miłosz @Agata @Karolina
- [x] Przygotowanie prezentacji działającego rozwiązania w Azure @Team
### Sprint 5 (21.01.2021-28.01.2021)
- [x] Nagranie wideo na YouTube @Miłosz
- [x] Poprawienie elementów frontendowych @Team
- [x] Przygotowanie dokumentu podsumowującego wykonane prace @Maciej
- [x] Testy aplikacji @Krzysztof @Agata @Karolina
