# Semantive on Azure
> Projekt realizowany w ramach przedmiotu 1DI1585:A - Wprowadzenie do aplikacji i rozwiązań opartych o Sztuczną Inteligencję i Microsoft Azure

## Knowledge Mining with Cognitive Services

### Team
- Maciej Czarkowski _mczarkowski98@gmail.com_
- Agata Rodzeń _agata.rodzen@gmail.com_
- Krzysztof Piekarczyk _krzys@piekarczyk.eu_
- Miłosz Wójcik _mioawoj@gmail.com_
- Karolina Gałczyńska _galczynska.karolina@gmail.com_

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

![workflow_schema](https://github.com/azureWUT/semantiveOnAzure/blob/main/resources/workflow_schema.png)

## Definicja wymagań
### Wymagania funkcjonalne
- Aplikacja umożliwi analizę tekstów w oparciu o analizę sentymentu (tonacji)
- Wynikiem działania będą metadane, które zostaną utworzone na podstawie tekstu
- Aplikacja umożliwi wprowadzanie tekstu bezpośrednio lub w postaci plików tekstowych.
- Możliwe będzie wprowadzenie wielu plików na raz, w celu ich zbiorczej analizy pod tonacji
- Obsługa aplikacji będzie możliwa z poziomu UI

### Wymagania niefunkcjonalne
- Aplikacja ma być przyjazna w użytkowaniu, prosta w obsłudze
- Aplikacja będzie działać z różnymi formatami tekstu
- Aplikacja nie będzie wymagać efektywnych zasobów internetowych, niska prędkość przesyłu danych nie powinna stanowić problemu dla ogólnego *user experience*

## Wybrany tech stack
- Node.js
- Microsoft Power Apps
- Azure Cognitive Search

## Harmonogram
| Data | Oczekiwany stan prac |
| ------ | ------ |
| 02.12.2020 | Spotkanie analityczne 2 |
| 03.12.2020 | P3 - Spotkanie z Product Ownerem -- gotowy opis funkcjonalności i analiza wstępna. <br> Zdefiniowane następujące elementy: <br><ul><li>item1</li><li>item2</li></ul> |
| 10.12.2020 |  test |
| 07.01.2020 | P4 - Q&A co do projektu |
| 14.01.2020 | Middle checkpoint P5 |
| 21.01.2020 | Prezentacja projektu | 

## Tasks
### Sprint 1 (19-26.11.2020)
- [x] Przygotowanie repozytorium projektu wraz z podstawowym readme @Maciej
- [x] Przygotowanie schematów opisujących wykorzystywane usługi @Agata
- [x] Definicja funkcjonalności dostarczanych przez projekt @Karolina
- [x] Definicja stosu technologicznego wykorzystywane w projekcie
### Sprint 2 (26.11-03.12.2020)
- [x] Przygotowanie środowiska programistycznego w Azure Portal @Miłosz @Maciej @Krzysztof
- [x] Przygotowanie ostatecznego schematu realizacji zadania @Agata
- [x] Definicja zadań i harmonogramu @Maciej @Karolina
- [ ] Przygotowanie projektu w Azure @Miłosz
### Sprint 3 (03.12-10.12.2020)
- [ ] 
### Sprint 4 (10.12.2020-24.12.2020)
- [ ] 
### Sprint 5 (24.12.2020-14.01.2021)
- [ ] Przygotowanie prezentacji działającego rozwiązania w Azure
- [ ] Przygotowanie aplikacji Power App 
### Sprint 6 (14.01.2021-28.01.2021)
- [ ] Nagranie wideo na YouTube @Miłosz
- [ ] Połączenie i sprawdzenie działania rozwiązania w Azure z Power App
