---
title: Műveletek kétdimenziós tömbökkel I.
date: 2026-11-12
subject: ["kétdimenziós tömb", "tömbbejárás", "beágyazott ciklus", "összegzés", "összegváltozó", "sorösszeg", "oszlopösszeg", "átlagszámítás", "inicializálás"]
author: Fekete János
---

# 1. Mit jelent a táblázat összegzése?
Egy könyvtár három részlegének három napi kölcsönzési adatait tároljuk.
| Részleg / nap | Hétfő | Kedd | Szerda |
|---|---:|---:|---:|
| Gyermekrészleg | 12 | 15 | 9 |
| Felnőtt részleg | 20 | 18 | 22 |
| Zenei részleg | 5 | 7 | 6 |

C nyelven:
```c
int kolcsonzesek[3][3] =
{
    {12, 15, 9},
    {20, 18, 22},
    {5, 7, 6}
};
```
Ugyanazt a táblázatot három különböző szempontból összegezhetjük:
| Összesítés | Jelentés |
|---|---|
| Teljes összeg | Hány kölcsönzés történt összesen? |
| Sorösszeg | Hány kölcsönzés történt egy adott részlegen? |
| Oszlopösszeg | Hány kölcsönzés történt egy adott napon? |

Az eredmények:
```
Teljes összeg: 114

Sorösszegek:
Gyermekrészleg: 36
Felnőtt részleg: 60
Zenei részleg: 18

Oszlopösszegek:
Hétfő: 37
Kedd: 40
Szerda: 37
```
> Az összeg jelentését az határozza meg, hogy mit jelölnek a táblázat sorai és oszlopai.

# 2. A teljes tömb összegzése
Egydimenziós tömbnél egy ciklussal adjuk össze az elemeket. Kétdimenziós tömbnél két beágyazott ciklussal járjuk be az összes elemet.

Az összegváltozót a ciklusok előtt nullázzuk:
```c
#include <stdio.h>

int main(void)
{
    int kolcsonzesek[3][3] =
    {
        {12, 15, 9},
        {20, 18, 22},
        {5, 7, 6}
    };

    /* Egyszer nullázunk, mert egyetlen teljes összeget készítünk. */
    int osszeg = 0;

    for (int sor = 0; sor < 3; sor++)
    {
        for (int oszlop = 0; oszlop < 3; oszlop++)
        {
            osszeg += kolcsonzesek[sor][oszlop];
        }
    }

    printf("Összes kölcsönzés: %d\n", osszeg);

    return 0;
}
```
Kimenet:
```
Összes kölcsönzés: 114
```
Az összeg fokozatosan változik:

```
Első sor feldolgozása után:    36
Második sor feldolgozása után: 96
Harmadik sor után:            114
```
Ha az összegváltozót minden sor elején nulláznánk, a korábbi sorok eredménye elveszne.

# 3. Sorösszegek
Egy sor összegzésénél:
- a sorindex állandó;
- az oszlopindex változik.

Az első sor összege:
```
12 + 15 + 9 = 36
```

### Egy kiválasztott sor és az összes sor összegzése:
```c
#include <stdio.h>

int main(void)
{
    int kolcsonzesek[3][3] =
    {
        {12, 15, 9},
        {20, 18, 22},
        {5, 7, 6}
    };

    /* Egy kiválasztott sor összegzése. */
    int kivalasztott_sor = 1;
    int sorosszeg = 0;

    for (int oszlop = 0; oszlop < 3; oszlop++)
    {
        sorosszeg += kolcsonzesek[kivalasztott_sor][oszlop];
    }

    printf("A második sor összege: %d\n", sorosszeg);

    /* Minden sor külön összegzése. */
    printf("\nSorösszegek:\n");

    for (int sor = 0; sor < 3; sor++)
    {
        /* Minden új sorhoz új összeg tartozik. */
        sorosszeg = 0;

        for (int oszlop = 0; oszlop < 3; oszlop++)
        {
            sorosszeg += kolcsonzesek[sor][oszlop];
        }

        /* Csak a teljes sor feldolgozása után írjuk ki. */
        printf("%d. sor összege: %d\n", sor + 1, sorosszeg);
    }

    return 0;
}
```
Kimenet:
```
A második sor összege: 60

Sorösszegek:
1. sor összege: 36
2. sor összege: 60
3. sor összege: 18
```
### Hol nullázunk?
A sorösszeg nullázása a külső cikluson belül, de a belső ciklus előtt történik:
```c
for (int sor = 0; sor < 3; sor++)
{
    int sorosszeg = 0;

    for (int oszlop = 0; oszlop < 3; oszlop++)
    {
        sorosszeg += kolcsonzesek[sor][oszlop];
    }

    printf("%d\n", sorosszeg);
}
```
Így minden sor összegzése nulláról indul.

# 4. Oszlopösszegek
Egy oszlop összegzésénél:
- az oszlopindex állandó;
- a sorindex változik.

Az első oszlop összege:
```
12 + 20 + 5 = 37
```

Minden oszlop összegzéséhez a ciklusok szerepét megváltoztatjuk:
- a külső ciklus választja ki az oszlopot;
- a belső ciklus végigmegy az adott oszlop sorain.
```c
#include <stdio.h>

int main(void)
{
    int kolcsonzesek[3][3] =
    {
        {12, 15, 9},
        {20, 18, 22},
        {5, 7, 6}
    };

    /* Egy kiválasztott oszlop összegzése. */
    int kivalasztott_oszlop = 1;
    int oszloposszeg = 0;

    for (int sor = 0; sor < 3; sor++)
    {
        oszloposszeg += kolcsonzesek[sor][kivalasztott_oszlop];
    }

    printf("A második oszlop összege: %d\n", oszloposszeg);

    /* Minden oszlop külön összegzése. */
    printf("\nOszlopösszegek:\n");

    for (int oszlop = 0; oszlop < 3; oszlop++)
    {
        oszloposszeg = 0;

        for (int sor = 0; sor < 3; sor++)
        {
            oszloposszeg += kolcsonzesek[sor][oszlop];
        }

        printf("%d. oszlop összege: %d\n",
               oszlop + 1, oszloposszeg);
    }

    return 0;
}
```
Kimenet:
```
A második oszlop összege: 40

Oszlopösszegek:
1. oszlop összege: 37
2. oszlop összege: 40
3. oszlop összege: 37
```
> Az oszloponkénti bejárásnál sem cseréljük fel a tömbindexeket: továbbra is tomb[sor][oszlop] alakot használunk. Csak a ciklusok sorrendje változik.

# 5. Az összegváltozó helye
A három összegzés közötti legfontosabb különbség:
| Művelet | Nullázás helye | Külső ciklus | Belső ciklus |
|---|---|---|---|
| Teljes összeg | Mindkét ciklus előtt | sor | oszlop |
| Sorösszegek | Minden sor elején | sor | oszlop |
| Oszlopösszegek | Minden oszlop elején | oszlop | sor |

### Teljes összeg
```c
int osszeg = 0;

for (int sor = 0; sor < 3; sor++)
{
    for (int oszlop = 0; oszlop < 3; oszlop++)
    {
        osszeg += kolcsonzesek[sor][oszlop];
    }
}
```

### Sorösszeg
```c
for (int sor = 0; sor < 3; sor++)
{
    int osszeg = 0;

    for (int oszlop = 0; oszlop < 3; oszlop++)
    {
        osszeg += kolcsonzesek[sor][oszlop];
    }

    printf("%d\n", osszeg);
}
```
### Oszlopösszeg
```c
for (int oszlop = 0; oszlop < 3; oszlop++)
{
    int osszeg = 0;

    for (int sor = 0; sor < 3; sor++)
    {
        osszeg += kolcsonzesek[sor][oszlop];
    }

    printf("%d\n", osszeg);
}
```
# 6. Átlagok és az eredmények ellenőrzése
Az összegből átlagot is számíthatunk. Mindig azt kell átgondolni, hogy hány adatot adtunk össze.

Egy 3 × 3 tömb esetén:
| Átlag | Osztó |
|---|---:|
| Az összes elem átlaga | `9` |
| Egy sor elemeinek átlaga | `3` |
| Egy oszlop elemeinek átlaga | `3` |

Például:
```c
/* Kilenc adat teljes átlaga. */
double teljes_atlag = osszeg / 9.0;

/* Egy részleg három napra vonatkozó átlaga. */
double soratlag = sorosszeg / 3.0;

/* Egy nap három részlegre vonatkozó átlaga. */
double oszlopatlag = oszloposszeg / 3.0;
```

Lebegőpontos osztást használunk, hogy a tört rész ne vesszen el.


### Ellenőrzési lehetőség
A teljes összeg háromféleképpen is meghatározható:
```
Az összes elem összege:
114

A sorösszegek összege:
36 + 60 + 18 = 114

Az oszlopösszegek összege:
37 + 40 + 37 = 114
```
Ha ezek nem egyeznek, valamelyik bejárás vagy összegzés hibás.

# Hibakeresési feladatok
### 1. hiba
```c
int osszeg = 0;

for (int sor = 0; sor < 3; sor++)
{
    osszeg = 0;

    for (int oszlop = 0; oszlop < 3; oszlop++)
    {
        osszeg += adatok[sor][oszlop];
    }
}

printf("Teljes összeg: %d\n", osszeg);
```
<details>
<summary>Megoldás</summary>
Az összeg minden sor elején nullázódik. A ciklus végén ezért csak az utolsó sor összege marad meg.
A teljes összeghez egyszer, a ciklusok előtt kell nullázni
</details>

### 2. hiba
```c
int sorosszeg = 0;

for (int sor = 0; sor < 3; sor++)
{
    for (int oszlop = 0; oszlop < 4; oszlop++)
    {
        sorosszeg += adatok[sor][oszlop];
    }

    printf("%d. sor összege: %d\n", sor + 1, sorosszeg);
}
```
<details>
<summary>Megoldás</summary>
A sorösszeg nincs újra nullázva. A második eredmény az első és második sor együttes összege lesz, a harmadik pedig már mindhárom sor összege.
</details>

### 3. hiba
```c
int adatok[2][3] =
{
    {1, 2, 3},
    {4, 5, 6}
};

for (int oszlop = 0; oszlop < 3; oszlop++)
{
    int osszeg = 0;

    for (int sor = 0; sor < 2; sor++)
    {
        osszeg += adatok[oszlop][sor];
    }

    printf("%d\n", osszeg);
}
```
<details>
<summary>Megoldás</summary>
A tömb első indexe a sort, a második az oszlopot jelöli. Ez oszloponkénti bejáráskor sem változik.
Az adatok[oszlop][sor] kifejezés hibás. Amikor az oszlop értéke 2, nem létező sort próbál elérni.
</details>

### 4. hiba
```c
int adatok[2][3] =
{
    {1, 2, 3},
    {4, 5, 6}
};

int osszeg = 21;
double atlag = osszeg / 2;
```
<details>
<summary>Megoldás</summary>
A tömb összesen hat elemet tartalmaz, ezért a teljes átlaghoz hattal kell osztani, nem a sorok számával.
Lebegőpontos osztás is szükséges
</details>

# Órai munka – Könyvtári beszerzések összesítése

Egy könyvtár két részlege három hónap alatt új könyveket szerzett be. Az adatokat egy 2 × 3 méretű tömb tárolja:

```c
int beszerzesek[2][3] =
{
    {12, 8, 15},
    {20, 10, 5}
};
```
- sorok a részlegeket jelölik.
- Az oszlopok a hónapokat jelölik.
- Az értékek az új könyvek darabszámai.

### Követelmények
A program:
- hozza létre a megadott tömböt;
- beágyazott ciklussal jelenítse meg az adatokat;
- számítsa ki az összes beszerzett könyv számát;
- számítsa ki és írja ki a részlegenkénti összegeket;
- számítsa ki és írja ki a hónaponkénti összegeket.

> Az adatok előre adottak, ezért ebben a feladatban nem szükséges adatbeolvasás vagy adatellenőrzés.

### Elvárt kimenet
```
Könyvtári beszerzések
=====================

A rögzített adatok:
  12   8  15
  20  10   5

Összes beszerzett könyv: 70

Részlegenkénti összesítés:
1. részleg: 35 könyv
2. részleg: 35 könyv

Hónaponkénti összesítés:
1. hónap: 32 könyv
2. hónap: 18 könyv
3. hónap: 20 könyv
```

### Lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    int beszerzesek[2][3] =
    {
        {12, 8, 15},
        {20, 10, 5}
    };

    int teljes_osszeg = 0;

    printf("Könyvtári beszerzések\n");
    printf("=====================\n\n");

    /* A táblázat megjelenítése és teljes összegzése. */
    printf("A rögzített adatok:\n");

    for (int sor = 0; sor < 2; sor++)
    {
        for (int oszlop = 0; oszlop < 3; oszlop++)
        {
            printf("%4d", beszerzesek[sor][oszlop]);
            teljes_osszeg += beszerzesek[sor][oszlop];
        }

        printf("\n");
    }

    printf("\nÖsszes beszerzett könyv: %d\n", teljes_osszeg);

    /* Sorösszegek: részlegenkénti beszerzések. */
    printf("\nRészlegenkénti összesítés:\n");

    for (int sor = 0; sor < 2; sor++)
    {
        int sorosszeg = 0;

        for (int oszlop = 0; oszlop < 3; oszlop++)
        {
            sorosszeg += beszerzesek[sor][oszlop];
        }

        printf("%d. részleg: %d könyv\n", sor + 1, sorosszeg);
    }

    /* Oszlopösszegek: hónaponkénti beszerzések. */
    printf("\nHónaponkénti összesítés:\n");

    for (int oszlop = 0; oszlop < 3; oszlop++)
    {
        int oszloposszeg = 0;

        for (int sor = 0; sor < 2; sor++)
        {
            oszloposszeg += beszerzesek[sor][oszlop];
        }

        printf("%d. hónap: %d könyv\n",
               oszlop + 1, oszloposszeg);
    }

    return 0;
}
```

# Rövid összefoglalás
- A teljes összeghez minden tömbelemet egyszer hozzáadunk az összegváltozóhoz.
- Sorösszegzéskor a sorindex állandó, az oszlopindex változik.
- Oszlopösszegzéskor az oszlopindex állandó, a sorindex változik.
- A sorösszeget minden új sor előtt nullázzuk.
- Az oszlopösszeget minden új oszlop előtt nullázzuk.
- A tömbelem alakja minden esetben tomb[sor][oszlop].
- Átlagszámításkor az összeadott elemek számával osztunk.
- A sorösszegek és az oszlopösszegek összege egyaránt megegyezik a teljes összeggel.

# Szorgalmi feladat – Nyomtatási statisztika

Egy számítógépteremben három nyomtató működik. A program öt munkanap nyomtatási adatait dolgozza fel.


Az adatokat egy 3 × 5 méretű tömbben tároljuk:
```c
int oldalak[3][5] = {0};
```
- A sorok a nyomtatókat jelölik.
- Az oszlopok a napokat jelölik.
- Egy tömbelem az adott nyomtatón, az adott napon kinyomtatott oldalak száma.

### Követelmények
A program:
- beágyazott for ciklusokkal kérje be a tizenöt adatot;
- csak nem negatív oldalszámokat fogadjon el;
- hibás érték esetén while ciklussal kérje újra az adatot;
- táblázatosan jelenítse meg a tömböt;
- számítsa ki az összes kinyomtatott oldal számát;
- határozza meg minden nyomtató heti oldalszámát;
- határozza meg minden nap összes nyomtatott oldalának számát;
- számítsa ki minden nyomtató napi átlagát;
- számítsa ki a terem napi átlagos oldalszámát.

> A terem napi átlagát a heti teljes oldalszám öttel történő osztásával kapjuk meg. Ez nem ugyanaz, mint a tizenöt tömbelem átlaga.

Példaadatok
```
10 20  0 15  5
 5 10 15  0 20
 0  5 10 15 20
```
Elvárt eredmények
```
Összes kinyomtatott oldal: 150

Nyomtatónkénti heti összesítés:
1. nyomtató: 50 oldal
2. nyomtató: 50 oldal
3. nyomtató: 50 oldal

Naponkénti összesítés:
1. nap: 15 oldal
2. nap: 35 oldal
3. nap: 25 oldal
4. nap: 30 oldal
5. nap: 45 oldal

Nyomtatónkénti napi átlag:
1. nyomtató: 10.00 oldal
2. nyomtató: 10.00 oldal
3. nyomtató: 10.00 oldal

A terem napi átlagos oldalszáma: 30.00
```

Segítség

A nyomtató napi átlaga a hozzá tartozó sorösszegből:
```c
double napi_atlag = sorosszeg / 5.0;
```
A terem napi átlagos oldalszáma:
```c
double terem_napi_atlag = teljes_osszeg / 5.0;
```
