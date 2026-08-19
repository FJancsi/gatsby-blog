---
title: Követelmények és bevezetés a programozásba
date: 2026-09-10
subject: ["probléma", "algoritmus", "program", "forrsákód", "szintaxis", "szemantika", "függvény", "utasítás", "programozási nyelv", "forrásfájl"]
author: Fekete János
featimg:
---
# Követelmények
## Elérhetőségek
- Oktató: Fekete János
- Email: janos_fekete[at]epam.com
## Tematika
| Óra | Téma | Legfontosabb eredmény |
|---:|---|---|
| 1. | Követelmények, bevezetés | Algoritmus, program, forráskód, fordítás, első C-program |
| 2. | Alapvető típusok és aritmetikai műveletek | Változók, `int`, `double`, `char`, bevitel és kiírás |
| 3. | Elágazások | Feltételek, relációs és logikai operátorok, `if`, `else` |
| 4. | Tömbök | Egydimenziós tömb létrehozása, indexelése és feltöltése |
| 5. | Ciklusok, műveletek tömbökkel | `for`, `while`, összegzés, keresés, minimum és maximum |
| 6. | Összefoglalás | Felkészülés az első ZH-ra |
| 7. | Első ZH | 10 feladat, 50 pont |
| 8. | Kétdimenziós tömbök | Sorok, oszlopok, indexelés, bejárás |
| 9. | Műveletek kétdimenziós tömbökkel I. | Összegzés, sor- és oszlopösszegek |
| 10. | Műveletek kétdimenziós tömbökkel II. | Keresés, minimum, maximum, komplexebb feladatok |
| 11. | Struktúrák | `struct`, összetartozó adatok modellezése |
| 12. | Összefoglalás | Felkészülés a második ZH-ra |
| 13. | Második ZH | 10 feladat, 50 pont |
| 14. | Javító ZH | Az intézményi szabályok szerinti javítás |

## Ponthatárok
| Pontszám | Érdemjegy |
|---:|:---:|
| 0–40 | 1 |
| 41–55 | 2 |
| 56–70 | 3 |
| 71–85 | 4 |
| 86–100 | 5 |

*(órai munka + Házi feladat = 2p)

# Mi a programozás?

A számítógép nagy sebességgel és pontosan hajtja végre a számára megadott utasításokat. Azt azonban nem tudja önállóan eldönteni, hogy egy általánosan megfogalmazott problémát hogyan oldjon meg.


Például a következő kérés egy ember számára érthető:


> Keressük meg egy könyvtárban Petőfi Sándor valamelyik kötetét!


A számítógép számára ezt pontosabb lépésekre kell bontani:


Nyissuk meg a könyvek nyilvántartását.

Vizsgáljuk meg a könyvek szerzőjét.

Ha a szerző „Petőfi Sándor”, jelenítsük meg a könyv adatait.

Ha nincs ilyen könyv, írjunk ki erről üzenetet.

Az ilyen egyértelmű, végrehajtható lépéssorozatot algoritmusnak nevezzük.

## Algoritmus
Az algoritmus egy probléma megoldására szolgáló:

- véges;

- egyértelmű;

- végrehajtható

lépéssorozat.

Algoritmusokkal a hétköznapi életben is találkozunk:

- recept;

- könyvtári beiratkozás menete;

- kölcsönzés folyamata;

- katalógusban történő keresés;

- egy dokumentum formai feldolgozása.

## Program
A program egy algoritmus valamely programozási nyelven megfogalmazott változata, amelyet a számítógép végre tud hajtani.


Az algoritmus és a program tehát nem ugyanaz:

| Algoritmus | Program |
|---|---|
| A megoldás lépéseinek terve | A terv megvalósítása egy programozási nyelven |
| Leírható hétköznapi nyelven | Szigorú formai szabályokat követ |
| Nem kötődik feltétlenül géphez | A számítógépen végrehajtható |

# 2. Miért kell programozási nyelv?

A programozási nyelv ezzel szemben szigorú szabályokat követ. A számítógépnek pontosan kell megadnunk:

- milyen adatokat használjon;

- milyen műveleteket végezzen;

- milyen sorrendben hajtsa végre a műveleteket;

- milyen esetekben válasszon különböző lehetőségek közül.

## Szintaxis és szemantika
A **szintaxis** a programozási nyelv formai szabályainak összessége. Meghatározza, hogyan kell helyesen leírni a program elemeit.

A **szemantika** azt adja meg, hogy a helyesen leírt programrészlet mit jelent, illetve mit csinál.

Természetes nyelvi hasonlattal:

- a szintaxis a nyelvtani helyesség;

- a szemantika a jelentés.

A következő C-utasítás szintaktikailag hibás, mert hiányzik a pontosvessző:
```c
printf("Könyvtár\n")
```
A helyes változat:
```c
printf("Könyvtár\n");
```
A programozási nyelvekben egyetlen hiányzó írásjel is hibát okozhat.

# 3. A C programozási nyelv
A C általános célú, szabványosított, fordított programozási nyelv. Számos későbbi programozási nyelv szintaxisára hatással volt.

A kurzus célja nem a C nyelv teljes körű elsajátítása. A nyelv segítségével a következő általános programozási gondolkodásmódokat tanuljuk meg:

- adatok tárolása;

- számítások elvégzése;

- döntések meghozatala;

- műveletek ismétlése;

- több adat együttes kezelése;

- a probléma kisebb lépésekre bontása.

## A forráskódtól a futó programig
A C nyelven megírt szöveget forráskódnak nevezzük. A forráskódot általában .c kiterjesztésű fájlban tároljuk.

Például:
```
elso_program.c
```
A számítógép ezt közvetlenül nem hajtja végre. Először egy fordítóprogram, például a GCC alakítja futtatható programmá.

Egyszerűsített folyamat:
```
probléma
   ↓
algoritmus
   ↓
C nyelvű forráskód
   ↓
fordítás
   ↓
futtatható program
   ↓
eredmény
```
Ha a forráskód megsérti a C nyelv formai szabályait, a fordító hibaüzenetet ad.

# 4. Az első C-program

```c
#include <stdio.h>

int main(void)
{
    printf("Üdvözlet a könyvtárból!\n");

    return 0;
}
```
A program kimenete:
```
Üdvözlet a könyvtárból!
```

## A program részei
### #include <stdio.h>
```c
#include <stdio.h>
```
A `stdio.h` fejlécállomány többek között a szabványos be- és kiviteli műveletek használatához szükséges deklarációkat tartalmazza.

A `printf` függvény használatához erre a sorra szükségünk van.

Kezdő szinten ezt így fogalmazhatjuk meg:

> Ezzel jelezzük, hogy használni szeretnénk a C szabványos kiírási lehetőségét.

### A main függvény
```c
int main(void)
```
A program végrehajtása a main függvénynél kezdődik.

- `main`: a fő függvény neve;

- `int`: a függvény egész számot ad vissza;

- `void`: ebben a formában a függvény nem vár paramétert;

- `{` és `}`: a függvény törzsének kezdetét és végét jelöli.

### A printf függvény
```c
printf("Üdvözlet a könyvtárból!\n");
```

A printf segítségével adatot írhatunk a szabványos kimenetre, ami ebben az esetben a képernyő.


A sor végén álló pontosvessző az utasítás végét jelzi.

- A \n vezérlőkarakter
- A \n sortörést jelent. Hatására a következő kiírás új sorban kezdődik.

```c
printf("Első sor\n");
printf("Második sor\n");
```

Kimenet:
```
Első sor
Második sor
```
### return 0;
A main függvény a 0 értékkel jelzi az operációs rendszernek, hogy a program rendben befejeződött.

# 5. Megjegyzések a programban
A megjegyzés, más néven komment, a forráskód emberi olvasójának szól. A fordító nem hajtja végre.


Egysoros komment:
```c
// Ez egy egysoros megjegyzés.
```

Többsoros komment:
```c
/*
    Ez egy több sorból álló
    megjegyzés.
*/
```

Példa:
```c
#include <stdio.h>

int main(void)
{
    // A program egy üdvözlő üzenetet ír ki.
    printf("Üdvözlet a könyvtárból!\n");

    return 0;
}
```
A komment ne a programkód szó szerinti felolvasása legyen. Inkább annak célját magyarázza.


Kevésbé hasznos:
```c
// Kiírjuk a szöveget.
printf("Könyvtár\n");
```
Hasznosabb:
```c
// A program fejlécének megjelenítése.
printf("Könyvtári nyilvántartás\n");
```

# Gyakorlati feladatok
## 1. feladat – Az első program futtatása
Másoljuk egy elso.c nevű fájlba:
```c
#include <stdio.h>

int main(void)
{
    printf("Az első C-programom.\n");

    return 0;
}
```
Fordítás:
```bash
gcc -std=c17 -Wall -Wextra -pedantic elso.c -o elso
```
A kapcsolók jelentése:


- -std=c17: a C17 szabvány használata;

- -Wall -Wextra: gyakori problémákra figyelmeztet;

- -pedantic: a szabványtól eltérő megoldásokat is jelzi;

- -o program: megadja az elkészülő program nevét.

Futtatás Linuxon vagy macOS-en:

```bash
./elso
```

Futtatás Windows alatt:
```powershell
.\elso.exe
```

## 2. feladat – Több sor kiírása
Készítsünk programot, amely a következő szöveget jeleníti meg:
```
Városi Könyvtár
Nyitvatartás:
Hétfő–péntek: 9–18
```

Lehetséges megoldások:
```c
#include <stdio.h>

int main(void)
{
    printf("Városi Könyvtár\n");
    printf("Nyitvatartás:\n");
    printf("Hétfő–péntek: 9–18\n");

    return 0;
}
```
Alternatív megoldás:
```c
#include <stdio.h>

int main(void)
{
    printf("Városi Könyvtár\nNyitvatartás:\nHétfő–péntek: 9–18\n");

    return 0;
}
```

## 3. feladat – Egyszerű könyvkártya

Készítsünk programot, amely egy könyv adatait jeleníti meg!

Elvárt kimenet:
```
Könyv adatai
-------------
Szerző: Molnár Ferenc
Cím: A Pál utcai fiúk
Kiadás éve: 1906
```

Egy lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    printf("Könyv adatai\n");
    printf("-------------\n");
    printf("Szerző: Molnár Ferenc\n");
    printf("Cím: A Pál utcai fiúk\n");
    printf("Kiadás éve: 1906\n");

    return 0;
}
```

# Hibakeresési feladatok

## 4. feladat

Mi a probléma a következő programmal?
```c
#include <stdio.h>

int main(void)
{
    printf("Könyvtár\n")
    return 0;
}
```
## 5. feladat

Mi a probléma a következő programmal?
```c
#include <stdio.h>

int main(void)
{
    printf("Könyvtári katalógus\n);

    return 0;
}
```
## 6. feladat

Mi a probléma a következő programmal?
```c
#include <stdio.h>

int Main(void)
{
    printf("Könyvtár\n");

    return 0;
}
```
## 7. feladat

Mi a probléma a következő programmal?
```c
int main(void)
{
    printf("Könyvtár\n");

    return 0;
}
```

# Önálló mini feladat

Készítsen programot, amely egy képzeletbeli könyvtár következő adatait írja ki:

- a könyvtár neve;

- címe;

- nyitvatartása;

- egy rövid üdvözlő üzenet.

Péládul:
```
Egyetemi Könyvtár
Cím: Tudás tér 1.
Nyitvatartás: 8–20
Szeretettel várjuk olvasóinkat!
```

# Az óra összefoglalása
- Az algoritmus egy probléma megoldásának véges és egyértelmű lépéssorozata.

- A program egy algoritmus programozási nyelven megfogalmazott változata.

- A C nyelvű forráskódot .c kiterjesztésű fájlban tároljuk.

- A C-programot futtatás előtt le kell fordítani.

- A végrehajtás a main függvénynél kezdődik.

- A printf függvénnyel szöveget írhatunk a képernyőre.

- A legtöbb C-utasítás végén pontosvessző áll.

- A \n új sort kezd.

- A komment az emberi olvasót segíti, és nem hajtódik végre.

# Szorgalmi feladat
Készítsen bemutatkozas.c néven programot, amely a következőket írja ki:

- a hallgató keresztneve vagy választott megszólítása;

- egy kedvelt könyv címe;

- a könyv szerzője;

- egy mondat arról, hogy mit vár a kurzustól.

Személyes adat megadása nem szükséges; képzeletbeli adatok is használhatók.










