---
title: Összefoglalás és felkészülés az első ZH-ra
date: 2026-10-15
subject: ["C-program szerkezete", "változók", "adattípusok", "aritmetikai műveletek", "feltétel", "elágazás", "egydimenziós tömbök", "for", "while", "tömbműveletek"]
author: Fekete János
---
# 1. A C-program alapvető szerkezete
Egy egyszerű C-program:
```c
#include <stdio.h>

int main(void)
{
    printf("Programozás alapjai\n");

    return 0;
}
```
A legfontosabb elemek
| Programelem | Szerepe |
|---|---|
| `#include <stdio.h>;` | A szabványos be- és kiviteli műveletek használata |
| `int main(void)` | A program végrehajtásának kezdőpontja |
| `{` és `}` | Egy utasításblokk határai |
| `printf` | Adatok kiírása |
| `scanf` | Adatok beolvasása |
| `return 0;` | A program sikeres befejezésének jelzése |
| `;` | Egy utasítás vége |

# 2. Változók és adattípusok
A változó névvel ellátott memóriaterület, amelyben adatot tárolunk.

A tanult adattípusok
| Típus | Tárolt adat | Példa |
|---|---|---|
| `int` | egész szám | `int oldalszam = 320;` |
| `double` | tört részt is tartalmazó szám | `double ar = 3499.50;` |
| `char` | egyetlen karakter | `char polc = 'B';` |

Deklaráció és inicializálás
```c
// Deklaráció:
int oldalszam;
// Inicializálás:
int oldalszam = 320;
// Későbbi értékadás:
oldalszam = 350;
// Az értékadás nem matematikai egyenlőség:
oldalszam = oldalszam + 10;
// Rövidített alak:
oldalszam += 10;
```
# 3. Bevitel és kiírás
Fontos formátumspecifikátorok
| Adattípus | `printf` | `scanf` |
|---|:---:|:---:|
| `int` | `%d` | `%d` |
| `double` | `%f` | `%lf` |
| `char` | `%c` | ` %c` |

Példa:
```c
int oldalszam = 0;
double ar = 0.0;
char polc = '?';

printf("Oldalszám: ");
scanf("%d", &oldalszam);

printf("Ár: ");
scanf("%lf", &ar);

printf("Polc: ");
scanf(" %c", &polc);

printf("\nOldalszám: %d\n", oldalszam);
printf("Ár: %.2f Ft\n", ar);
printf("Polc: %c\n", polc);
```
## Fontos szabályok
- A scanf függvényben az egyszerű változó elé & jelet írunk.
- double beolvasásakor %lf szükséges.
- double kiírásakor %f használható.
- A %.2f két tizedesjegyet jelenít meg.
- Karakter beolvasásakor a %c elé szóközt írunk:
```c
scanf(" %c", &polc);
```

# 4. Aritmetikai operátorok
| Művelet | Operátor |
|---|:---:|
| összeadás | `+` |
| kivonás | `-` |
| szorzás | `*` |
| osztás | `/` |
| maradékos osztás | `%` |

Példa:
```c
int konyvek = 23;
int doboz_merete = 5;

int teljes_dobozok = konyvek / doboz_merete;
int maradek = konyvek % doboz_merete;
```

Eredmény:
```
teljes_dobozok = 4
maradek = 3
```
### Egész és lebegőpontos osztás
```c
5 / 2 // -> 2
5.0 / 2 // -> 2.5 
```
Átlagszámításkor ügyelni kell a lebegőpontos osztásra:
```c
double atlag = osszeg / 5.0;
```
# 5. Relációs és logikai operátorok
Relációs operátorok
| Operátor | Jelentés |
|:---:|---|
| `==` | egyenlő |
| `!=` | nem egyenlő |
| `&lt;` | kisebb |
| `&gt;` | nagyobb |
| `&lt;=` | kisebb vagy egyenlő |
| `&gt;=` | nagyobb vagy egyenlő |

Logikai operátorok
| Operátor | Jelentés |
|:---:|---|
| `&&` | logikai ÉS |
| `\|\|` | logikai VAGY |
| `!` | logikai NEM |

Értéktartomány ellenőrzése:
```c
if (pont >= 0 && pont <= 50)
{
    printf("Érvényes pontszám.\n");
}
```

Hibás érték vizsgálata:
```c
if (pont < 0 || pont > 50)
{
    printf("Hibás pontszám.\n");
}
```

# 6. Elágazások
Egyszerű if
```c
if (elerheto_peldanyok > 0)
{
    printf("A könyv kölcsönözhető.\n");
}
```
Kétirányú elágazás
```c
if (elerheto_peldanyok > 0)
{
    printf("A könyv kölcsönözhető.\n");
}
else
{
    printf("Nincs elérhető példány.\n");
}
```

Többirányú elágazás
```c
if (kesedelmes_napok < 0)
{
    printf("Hibás adat.\n");
}
else if (kesedelmes_napok == 0)
{
    printf("Nincs késés.\n");
}
else if (kesedelmes_napok <= 7)
{
    printf("Rövid késés.\n");
}
else
{
    printf("Jelentős késés.\n");
}
```

### Fontos különbség
```c
// Értékadás
pont = 40;

// Összehasonlítás
pont == 40;
```

# 7. Egydimenziós tömbök
A tömb azonos típusú, egymással összetartozó adatokat tárol.

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
```

Indexelés

| Elem | Index |
|---:|---:|
| első elem | `0` |
| második elem | `1` |
| harmadik elem | `2` |
| negyedik elem | `3` |
| ötödik elem | `4` |

Egy n elemű tömb érvényes indexei:
```
0 és n - 1 között
```

```c
// Első elem
oldalszamok[0];

// Utolsó elem
oldalszamok[4];

// Tömb nullázása
int oldalszamok[5] = {0};

// Tömbelem módosítása
oldalszamok[2] = 400;

// Tömbelem beolvasása
scanf("%d", &oldalszamok[2]);
```

# 8. A `for` ciklus
A for ciklust elsősorban ismert számú ismétléshez és tömbök bejárásához használjuk.

```c
for (int i = 0; i < 5; i++)
{
    printf("%d\n", i);
}
```

A ciklusváltozó értékei:
```
0, 1, 2, 3, 4
```

```c
// Tömb bejárása
for (int i = 0; i < 5; i++)
{
    printf("%d\n", oldalszamok[i]);
}

// Tömb feltöltése
for (int i = 0; i < 5; i++)
{
    printf("%d. könyv oldalszáma: ", i + 1);
    scanf("%d", &oldalszamok[i]);
}
```

## Fontos:
- i a tömbindex;
- i + 1 a felhasználónak megjelenített sorszám.

# 9. A while ciklus
A while ciklust akkor használjuk, ha az ismétlések száma nem feltétlenül ismert előre.


Például hibás adat újrakérése:
```c
int darabszam = 0;

printf("Darabszám 1 és 10 között: ");
scanf("%d", &darabszam);

while (darabszam < 1 || darabszam > 10)
{
    printf("Hibás adat. Adja meg újra: ");
    scanf("%d", &darabszam);
}
```
A ciklusmagban történnie kell valaminek, ami idővel hamissá teheti a feltételt. Ellenkező esetben végtelen ciklus jöhet létre.

# 10. Alapvető tömbműveletek
Összegzés
```c
int osszeg = 0;

for (int i = 0; i < 5; i++)
{
    osszeg += oldalszamok[i];
}
```
Megszámlálás
```c
int darab = 0;

for (int i = 0; i < 5; i++)
{
    if (oldalszamok[i] >= 300)
    {
        darab++;
    }
}
```
Lineáris keresés
```c
int keresett = 320;
int talalat_indexe = -1;

for (int i = 0; i < 5; i++)
{
    if (oldalszamok[i] == keresett &&
        talalat_indexe == -1)
    {
        talalat_indexe = i;
    }
}
```
Minimumkiválasztás
```c
int minimum = oldalszamok[0];
int minimum_index = 0;

for (int i = 1; i < 5; i++)
{
    if (oldalszamok[i] < minimum)
    {
        minimum = oldalszamok[i];
        minimum_index = i;
    }
}
```
Maximumkiválasztás
```c
int maximum = oldalszamok[0];
int maximum_index = 0;

for (int i = 1; i < 5; i++)
{
    if (oldalszamok[i] > maximum)
    {
        maximum = oldalszamok[i];
        maximum_index = i;
    }
}
```

# Közös programozási feladat
### Dobókockadobások elemzése
A feladat célja
Készítsünk közösen egy programot, amely nyolc dobókockadobás eredményét tárolja és elemzi!

A dobások eredményét a felhasználó adja meg. Egy szabályos, hatoldalú dobókockával végzett dobás eredménye csak 1 és 6 közötti egész szám lehet.

### A program követelményei
A program:
- tároljon nyolc dobáseredményt egy tömbben;
- for ciklussal kérje be a dobásokat;

- csak 1 és 6 közötti értékeket fogadjon el;

- hibás érték esetén while ciklussal kérje újra az adott dobást;

- ciklussal írja ki a rögzített dobásokat;

- számítsa ki a dobások összegét;

- számítsa ki a dobások átlagát;

- számolja meg, hány alkalommal dobtunk hatost;

- határozza meg a legkisebb dobott értéket;

- határozza meg a legnagyobb dobott értéket;

- kérjen be egy keresett dobásértéket;

- lineáris kereséssel állapítsa meg, hogy szerepel-e a keresett érték;

- találat esetén írja ki az első előfordulás indexét és a dobás sorszámát.

Példa:
```
Dobókockadobások elemzése
=========================

1. dobás eredménye: 4
2. dobás eredménye: 6
3. dobás eredménye: 2
4. dobás eredménye: 7
Hibás érték. A dobás eredménye 1 és 6 közötti szám lehet.
4. dobás eredménye újra: 5
5. dobás eredménye: 3
6. dobás eredménye: 6
7. dobás eredménye: 1
8. dobás eredménye: 4

A rögzített dobások:
4 6 2 5 3 6 1 4

A dobások összege: 31
A dobások átlaga: 3.88
A hatos dobások száma: 2
A legkisebb dobott érték: 1
A legnagyobb dobott érték: 6

Keresett dobásérték: 5
A keresett érték megtalálható.
Az első találat indexe: 3
A dobás sorszáma: 4
```

Megoldás: 
```c
#include <stdio.h>

int main(void)
{
    printf("Dobókockadobások eredményei\n");
    printf("----------------------------\n");
    
    int dobasok[8] = {0};
    // Dobások beolvasása és ellenőrzése 1-6 között
    for (int i = 0; i < 8; i++) {
        printf("Adja meg a(z) %d. dobás eredményét (1-6): ", i + 1);
        scanf("%d", &dobasok[i]);

        while (dobasok[i] < 1 || dobasok[i] > 6) {
            printf("Hibás adat! Adja meg újra a(z) %d. dobás eredményét (1-6): ", i + 1);
            scanf("%d", &dobasok[i]);
        }
        
    }
    // Dobások kiíratása
    int dobasok_osszege = 0;
    for (int i = 0; i < 8; i++) {
        printf("A(z) %d. dobás eredménye: %d\n", i + 1, dobasok[i]);
        dobasok_osszege += dobasok[i];
    }
    // Dobások összegének kiíratása
    printf("A dobások összege: %d\n", dobasok_osszege);

    // Dobások átlagának kiíratása
    double atlag = (double)dobasok_osszege / 8;
    printf("A dobások átlaga: %.2f\n", atlag);

    // Hatósok számának kiíratása
    int hatosok_szama = 0;
    for (int i = 0; i < 8; i++) {
        if (dobasok[i] == 6) {
            hatosok_szama++;
        }
    }
    printf("A hatosok száma: %d\n", hatosok_szama);

    // Legkisebb és legnagyobb dobás keresése
    int min_dobas = dobasok[0];
    int max_dobas = dobasok[0];
    int min_index = 0;
    int max_index = 0;

    for (int i = 1; i < 8; i++) {
        if (dobasok[i] < min_dobas) {
            min_dobas = dobasok[i];
            min_index = i;
        }
        if (dobasok[i] > max_dobas) {
            max_dobas = dobasok[i];
            max_index = i;
        }
    }
    printf("A legkisebb dobás: %d (a(z) %d. dobás)\n", min_dobas, min_index + 1);
    printf("A legnagyobb dobás: %d (a(z) %d. dobás)\n", max_dobas, max_index + 1);

    // Keresett szám meghatározása és helyének kiíratása
    int keresett_szam = 0;
    int keresett_szam_index = -1;

    printf("Adja meg a keresett számot (1-6): ");
    scanf("%d", &keresett_szam);
    
    // Keresett szám helyének meghatározása
    for (int i = 0; i < 8; i++) {
        if (dobasok[i] == keresett_szam && keresett_szam_index == -1) {
            keresett_szam_index = i;
        }
    }
    if (keresett_szam_index != -1) {
        printf("A keresett szám: %d (a(z) %d. dobás)\n", keresett_szam, keresett_szam_index + 1);
    } else {
        printf("A keresett szám: %d nem található a dobások között.\n", keresett_szam);
    }

    return 0;
}
```