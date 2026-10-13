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
Könyvtári kölcsönzések heti elemzése

Készítsünk közösen egy programot, amely egy könyvtár öt munkanapjának kölcsönzési adatait tárolja és elemzi.

A program feladata
A program:

1. kérje be a hétfőtől péntekig történt kölcsönzések számát;

2. ne fogadjon el negatív értéket;

3. tárolja az adatokat egy ötelemű tömbben;

4. írja ki a rögzített adatokat;

5. számítsa ki a heti kölcsönzések összegét;

6. számítsa ki a napi átlagot;

7. számolja meg, hány napon volt legalább az átlaggal megegyező forgalom;

8. határozza meg a legkisebb napi kölcsönzésszámot;

9. határozza meg a legnagyobb napi kölcsönzésszámot;

10. tárolja a minimum és a maximum indexét;

11. kérjen be egy keresett kölcsönzésszámot;

12. állapítsa meg, hogy a keresett érték szerepel-e a tömbben;

13. találat esetén írja ki az első találat indexét és a nap sorszámát.

Példa a program működésére
```
Heti kölcsönzési adatok
-----------------------

1. nap kölcsönzéseinek száma: 42
2. nap kölcsönzéseinek száma: 38
3. nap kölcsönzéseinek száma: 51
4. nap kölcsönzéseinek száma: 47
5. nap kölcsönzéseinek száma: 32

A rögzített adatok
------------------
1. nap: 42 kölcsönzés
2. nap: 38 kölcsönzés
3. nap: 51 kölcsönzés
4. nap: 47 kölcsönzés
5. nap: 32 kölcsönzés

Heti kölcsönzések száma: 210
Napi átlag: 42.00
Legalább átlagos napok száma: 3

Legkisebb napi érték: 32
A hozzá tartozó nap sorszáma: 5

Legnagyobb napi érték: 51
A hozzá tartozó nap sorszáma: 3

Keresett kölcsönzésszám: 47
A keresett érték megtalálható.
Az első találat indexe: 3
A nap sorszáma: 4
```

```c
#include <stdio.h>

int main(void)
{
    printf("Heti kölcsönzési adatok\n");
    printf("-----------------------\n");

    return 0;

}
```

<details>
<summary>
Megoldás
</summary>
</details>

# Óra végi összefoglalás
A program felépítésének áttekintése

A közösen elkészített program fő részei:
```
1. Változók és tömb létrehozása
2. Adatok beolvasása
3. Beolvasott adatok ellenőrzése
4. Tömb kiírása
5. Összegzés
6. Átlagszámítás
7. Megszámlálás
8. Minimum- és maximumkiválasztás
9. Lineáris keresés
10. Eredmények kiírása
```

A programozási feladatokat nem célszerű rögtön C-kóddal kezdeni. Először meg kell határozni:
- milyen adatok érkeznek;
- milyen eredményeket várunk;
- milyen változókra és tömbökre lesz szükség;
- milyen ellenőrzéseket kell elvégezni;
- milyen lépésekből áll az algoritmus;
- mely lépéseket kell ciklussal ismételni.









