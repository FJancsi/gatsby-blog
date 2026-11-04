---
title: Kétdimenziós tömbök
date: 2026-11-05
subject: ["kétdimenziós tömb", "mátrix", "sor", "oszlop", "sorindex", "oszlopindex", "tömbelem", "inicializálás", "beágyazott ciklus", "külső ciklus", "belső ciklus", "sorfolytonos bejárás", "tömbhatár-túllépés", "definiálatlan működés"]
author: Fekete János
---

# 1. A kétdimenziós tömb fogalma
Az egydimenziós tömb egyetlen adatsort tárol:
```c
int latogatok[4] = {120, 135, 128, 142};
```
Ha az adataink táblázatos formában, sorokba és oszlopokba rendezhetők, kétdimenziós tömböt használhatunk.


Például három részleg négy hétre vonatkozó látogatószámai:
| Részleg / hét | 1. hét | 2. hét | 3. hét | 4. hét |
|---|---:|---:|---:|---:|
| Gyermekkönyvtár | 120 | 135 | 128 | 142 |
| Felnőtt részleg | 210 | 198 | 225 | 217 |
| Olvasóterem | 85 | 92 | 88 | 95 |

A táblázat egy kétdimenziós tömbben:
```c
int latogatok[3][4] =
{
    {120, 135, 128, 142},
    {210, 198, 225, 217},
    {85,   92,  88,  95}
};
```
A kétdimenziós tömb azonos típusú adatokat tárol sorokba és oszlopokba rendezve.

Általános alakja:
```c
adattipus tomb_neve[sorok_szama][oszlopok_szama];
```
Például:
```c
int adatok[3][4];
```
Ez a tömb:
- 3 sort;
- soronként 4 oszlopot;
- összesen 3 * 4 = 12 egész számot
tárolhat.

A kétdimenziós tömb alkalmas például:
- statisztikai táblázatok;
- ülésrendek;
- raktári térképek;
- órarendek;
- egyszerű táblajátékok
adatainak tárolására.

# 2. Sorok, oszlopok és indexek
Egy kétdimenziós tömbelem eléréséhez két index szükséges:
```c
tomb_neve[sorindex][oszlopindex]
```
Az első index a sort, a második az oszlopot jelöli.
Egy 3 × 4 méretű tömb:
```c
int adatok[3][4];
```
érvényes sorindexei:
```
0, 1, 2
```
érvényes oszlopindexei:
```
0, 1, 2, 3
```
| Sorindex \ oszlopindex | 0 | 1 | 2 | 3 |
|---:|---:|---:|---:|---:|
| 0 | adatok[0][0] | adatok[0][1] | adatok[0][2] | adatok[0][3] |
| 1 | adatok[1][0] | adatok[1][1] | adatok[1][2] | adatok[1][3] |
| 2 | adatok[2][0] | adatok[2][1] | adatok[2][2] | adatok[2][3] |

Általánosan:
- az első érvényes index 0;
- az utolsó sorindex sorok_szama - 1;
- az utolsó oszlopindex oszlopok_szama - 1.

# 3. Létrehozás, inicializálás és indexelés
Az alábbi példa összevontan mutatja be a tömb létrehozását, egyes elemeinek elérését és módosítását:

```c
#include <stdio.h>

int main(void)
{
    int adatok[3][4] =
    {
        {10, 20, 30, 40}, /* 0. sor */
        {50, 60, 70, 80}, /* 1. sor */
        {90, 15, 25, 35}  /* 2. sor */
    };

    /* Első sor, első oszlop. */
    printf("Első elem: %d\n", adatok[0][0]);

    /* Második sor, harmadik oszlop. */
    printf("Kiválasztott elem: %d\n", adatok[1][2]);

    /* A második sor harmadik elemének módosítása. */
    adatok[1][2] = 75;

    printf("Módosított elem: %d\n", adatok[1][2]);

    return 0;
}
```

Kimenet:
```
Első elem: 10
Kiválasztott elem: 70
Módosított elem: 75
```
A hétköznapi sorszám és a C-ben használt index nem azonos:
| Hétköznapi hely | C-kifejezés |
|---|---|
| első sor, első oszlop | adatok[0][0] |
| második sor, harmadik oszlop | adatok[1][2] |
| harmadik sor, negyedik oszlop | adatok[2][3] |

### Nullázás és részleges inicializálás
A teljes tömb nullázása:
```
int adatok[3][4] = {0};
```
A tömb minden eleme 0 értéket kap.

Részleges inicializálás:
```c
int adatok[3][4] =
{
    {1, 2},
    {3},
    {4, 5, 6}
};
```
A meg nem adott elemek automatikusan nullák lesznek:
```
1 2 0 0
3 0 0 0
4 5 6 0
```
Egy inicializálatlan lokális tömb elemeinek értéke nem meghatározott:
```c
int adatok[3][4];
```
Ezért a tömb elemeit csak inicializálás vagy feltöltés után használjuk.

# 4. A teljes tömb bejárása
A teljes kétdimenziós tömb bejárásához két egymásba ágyazott ciklust használunk:
- a külső ciklus járja be a sorokat;
- a belső ciklus járja be az adott sor oszlopait.

```c
#include <stdio.h>

int main(void)
{
    int adatok[3][4] =
    {
        {10, 20, 30, 40},
        {50, 60, 70, 80},
        {90, 15, 25, 35}
    };

    /* A külső ciklus választja ki a sort. */
    for (int sor = 0; sor < 3; sor++)
    {
        /* A belső ciklus végigjárja az aktuális sort. */
        for (int oszlop = 0; oszlop < 4; oszlop++)
        {
            printf("%4d", adatok[sor][oszlop]);
        }

        /* Egy teljes sor kiírása után sort törünk. */
        printf("\n");
    }

    return 0;
}
```

Kimenet:
```
10  20  30  40
50  60  70  80
90  15  25  35
```
A %4d legalább négy karakter széles helyet biztosít minden számnak, így a kimenet táblázatos marad.

### A bejárás sorrendje
Egy 2 × 3 méretű tömb esetén a program a következő indexpárokat járja be:
```
[0][0]
[0][1]
[0][2]
[1][0]
[1][1]
[1][2]
```
A belső ciklus mindig végigjár egy teljes sort. Ezután a külső ciklus a következő sorra lép.

# 5. A tömb feltöltése
A kétdimenziós tömb elemei beágyazott ciklusokkal olvashatók be:
```c
#include <stdio.h>

int main(void)
{
    int adatok[2][3] = {0};

    /* A tömb feltöltése. */
    for (int sor = 0; sor < 2; sor++)
    {
        for (int oszlop = 0; oszlop < 3; oszlop++)
        {
            printf("%d. sor %d. oszlopának értéke: ",
                   sor + 1,
                   oszlop + 1);

            scanf("%d", &adatok[sor][oszlop]);
        }
    }

    /* A feltöltött tömb kiírása. */
    printf("\nA megadott táblázat:\n");

    for (int sor = 0; sor < 2; sor++)
    {
        for (int oszlop = 0; oszlop < 3; oszlop++)
        {
            printf("%4d", adatok[sor][oszlop]);
        }

        printf("\n");
    }

    return 0;
}
```
A felhasználónak egytől kezdődő sorszámokat jelenítünk meg:
```c
sor + 1
oszlop + 1
```
A tömb eléréséhez azonban a nullától kezdődő indexeket használjuk:
```c
adatok[sor][oszlop]
```

# 6. Egy kiválasztott sor vagy oszlop bejárása
A teljes tömbhöz két ciklus kell, egyetlen sor vagy oszlop bejárásához azonban egy ciklus is elegendő.

```c
#include <stdio.h>

int main(void)
{
    int adatok[3][4] =
    {
        {10, 20, 30, 40},
        {50, 60, 70, 80},
        {90, 15, 25, 35}
    };

    /* A második, vagyis az 1-es indexű sor kiírása. */
    printf("Második sor: ");

    for (int oszlop = 0; oszlop < 4; oszlop++)
    {
        printf("%d ", adatok[1][oszlop]);
    }

    printf("\n");

    /* A harmadik, vagyis a 2-es indexű oszlop kiírása. */
    printf("Harmadik oszlop:\n");

    for (int sor = 0; sor < 3; sor++)
    {
        printf("%d\n", adatok[sor][2]);
    }

    return 0;
}
```
text
```
Második sor: 50 60 70 80
Harmadik oszlop:
30
70
25
```

A sor bejárásakor:
- a sorindex állandó;
- az oszlopindex változik.

Az oszlop bejárásakor:
- az oszlopindex állandó;
- a sorindex változik.

# 7. Koordináta kiválasztása és módosítása
A felhasználó számára természetesebb az egytől kezdődő sor- és oszlopszámozás. A megadott koordinátákat ellenőrzés után alakítjuk tömbindexszé.
```c
#include <stdio.h>

int main(void)
{
    int adatok[3][4] =
    {
        {10, 20, 30, 40},
        {50, 60, 70, 80},
        {90, 15, 25, 35}
    };

    int sor_szama = 0;
    int oszlop_szama = 0;
    int uj_ertek = 0;

    printf("Sor száma (1-3): ");
    scanf("%d", &sor_szama);

    printf("Oszlop száma (1-4): ");
    scanf("%d", &oszlop_szama);

    /* Mindkét koordinátának érvényesnek kell lennie. */
    if ((sor_szama >= 1 && sor_szama <= 3) &&
        (oszlop_szama >= 1 && oszlop_szama <= 4))
    {
        int sorindex = sor_szama - 1;
        int oszlopindex = oszlop_szama - 1;

        printf("Jelenlegi érték: %d\n",
               adatok[sorindex][oszlopindex]);

        printf("Új érték: ");
        scanf("%d", &uj_ertek);

        /* A kiválasztott tömbelem módosítása. */
        adatok[sorindex][oszlopindex] = uj_ertek;

        printf("Módosított érték: %d\n",
               adatok[sorindex][oszlopindex]);
    }
    else
    {
        printf("Hibás koordináta.\n");
    }

    return 0;
}
```
Az átalakítás szabálya:
```
tömbindex = felhasználói sorszám - 1
```
Például:
```
2. sor, 3. oszlop → adatok[1][2]
```
A sor- és oszlopellenőrzés egyben megakadályozza a tömbhatár túllépését.

# 8. Tömbhatárok
Egy 3 × 4 méretű tömbben:
```c
int adatok[3][4];
```
érvényes például:
```c
adatok[0][0]
adatok[1][3]
adatok[2][2]
```
Érvénytelen például:
```c
adatok[3][0]   /* Nincs 3-as indexű sor. */
adatok[0][4]   /* Nincs 4-es indexű oszlop. */
adatok[-1][2]  /* Negatív sorindex. */
adatok[1][-1]  /* Negatív oszlopindex. */
```
A C nyelv nem ellenőrzi automatikusan a tömbhatárokat. Az érvénytelen index használata definiálatlan működést okozhat.


Egy tömbelem csak akkor érhető el biztonságosan, ha a sor- és az oszlopindex is érvényes:
```c
if ((sor >= 0 && sor < 3) &&
    (oszlop >= 0 && oszlop < 4))
{
    printf("%d\n", adatok[sor][oszlop]);
}
```

# Hibakeresési feladatok

### 1. hiba
```c
int adatok[3][4] = {0};

adatok[3][0] = 10;
```

<details>
<summary>Megoldás</summary>
A háromsoros tömb érvényes sorindexei:
0, 1, 2
A 3 már a tömb határán kívül található.
</details>

### 2. hiba
```c
int adatok[2][3] =
{
    {1, 2, 3},
    {4, 5, 6}
};

for (int sor = 0; sor < 3; sor++)
{
    for (int oszlop = 0; oszlop < 2; oszlop++)
    {
        printf("%d ", adatok[sor][oszlop]);
    }

    printf("\n");
}
```
<details>
<summary>Megoldás</summary>
A tömbnek két sora és három oszlopa van. A ciklushatárok felcserélődtek.
</details>

### 3. hiba
```c
for (int sor = 0; sor <= 3; sor++)
{
    for (int oszlop = 0; oszlop <= 4; oszlop++)
    {
        printf("%d ", adatok[sor][oszlop]);
    }
}
```
<details>
<summary>Megoldás</summary>
A <= operátor miatt a ciklusok a nem létező 3 sorindexet és 4 oszlopindexet is használják.
</details>

### 4. hiba
```c
for (int sor = 0; sor < 2; sor++)
{
    for (int oszlop = 0; oszlop < 3; oszlop++)
    {
        printf("%d\n", adatok[sor][oszlop]);
    }
}
```
<details>
<summary>Megoldás</summary>
A sortörés a belső ciklusban található, ezért minden tömbelem külön sorban jelenik meg.
A sortörést a belső ciklus után kell elhelyezni
</details>

# 5. hiba
```c
int adatok[2][3] = {0};

scanf("%d", adatok[1][2]);
```
<details>
<summary>Megoldás</summary>
A scanf függvénynek a tömbelem címére van szüksége, ezért a tömbelem elé & jelet kell írni:
</details>

# Órai munka – Tantermi ülésrend
Készítsen programot, amely egy kisebb tanterem ülőhelyeinek foglaltságát kezeli!

A tanteremben:
- 3 üléssor;
- soronként 4 ülőhely
található.


Az ülőhelyek állapotát a következő tömb tárolja:
```c
int helyek[3][4] = {0};
```
Az értékek jelentése:
- 0: szabad hely;
- 1: foglalt hely.

### Követelmények
A program:
1. hozza létre a 3 × 4 méretű tömböt;
2. beágyazott for ciklusokkal kérje be minden hely állapotát;
3. csak 0 vagy 1 értéket fogadjon el;
4. hibás érték esetén while ciklussal kérje újra az adott hely állapotát;
5. beágyazott ciklusokkal jelenítse meg az ülésrendet;
6. a szabad helyeket S, a foglalt helyeket F karakterrel jelenítse meg.

Példa:
```
1. sor 1. helye (0 = szabad, 1 = foglalt): 1
1. sor 2. helye (0 = szabad, 1 = foglalt): 0
1. sor 3. helye (0 = szabad, 1 = foglalt): 0
1. sor 4. helye (0 = szabad, 1 = foglalt): 1
...

Az ülésrend
-----------
F S S F
S F S S
F F S S
```

### Lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    int helyek[3][4] = {0};

    printf("Tantermi ülésrend\n");
    printf("=================\n\n");

    /* Az ülőhelyek állapotának beolvasása. */
    for (int sor = 0; sor < 3; sor++)
    {
        for (int oszlop = 0; oszlop < 4; oszlop++)
        {
            printf("%d. sor %d. helye "
                   "(0 = szabad, 1 = foglalt): ",
                   sor + 1,
                   oszlop + 1);

            scanf("%d", &helyek[sor][oszlop]);

            while (helyek[sor][oszlop] != 0 &&
                   helyek[sor][oszlop] != 1)
            {
                printf("Hibás érték. Adjon meg 0 vagy 1 értéket: ");
                scanf("%d", &helyek[sor][oszlop]);
            }
        }
    }

    /* Az ülésrend megjelenítése. */
    printf("\nAz ülésrend\n");
    printf("-----------\n");

    for (int sor = 0; sor < 3; sor++)
    {
        for (int oszlop = 0; oszlop < 4; oszlop++)
        {
            if (helyek[sor][oszlop] == 0)
            {
                printf("S ");
            }
            else
            {
                printf("F ");
            }
        }

        printf("\n");
    }

    return 0;
}
```

# Az óra összefoglalása
- A kétdimenziós tömb sorokba és oszlopokba rendezi az adatokat.
- A deklarációban először a sorok, majd az oszlopok száma szerepel.
- Egy elem eléréséhez sor- és oszlopindex szükséges.
- Mindkét indexelés nullától kezdődik.
- Egy 3 × 4 méretű tömb 12 elemet tartalmaz.
- A teljes tömböt két egymásba ágyazott ciklussal járjuk be.
- A külső ciklus a sorokat, a belső ciklus az oszlopokat kezeli.
- A táblázatos megjelenítéshez a sortörést a belső ciklus után írjuk ki.
- A felhasználói sorszámot eggyel csökkentve kapjuk meg a tömbindexet.
- A felhasználótól kapott koordinátákat használat előtt ellenőrizni kell.
- A tömbhatár túllépése definiálatlan működést okozhat.

# Szorgalmi feladat – Raktári térkép
Készítsen programot, amely egy raktár rekeszeinek állapotát kétdimenziós tömbben kezeli!

A raktárban:
- 4 polcsor;
- soronként 5 rekesz
található.

```c
char rekeszek[4][5];
```

Az állapotok:
- 'S': szabad rekesz;
- 'F': foglalt rekesz.

### Követelmények
A program:
1. beágyazott ciklusokkal kérje be minden rekesz állapotát;
2. fogadja el az S, s, F és f karaktereket;
3. hibás karakter esetén while ciklussal kérje újra az értéket;
4. a kisbetűs értékeket alakítsa nagybetűssé;
5. táblázatosan jelenítse meg a raktári térképet;
6. kérjen be egy 1–4 közötti sorszámot;
7. kérjen be egy 1–5 közötti oszlopszámot;
8. ellenőrizze a megadott koordinátákat;
9. írja ki a kiválasztott rekesz állapotát;
10. ha a rekesz szabad, i vagy I válasz esetén állítsa foglaltra;
11. a módosítás után jelenítse meg újra a teljes térképet.

Példa:
```
Raktári térkép
==============

    1 2 3 4 5
1.  S F S S F
2.  F F S S S
3.  S S S F F
4.  F S F S S

Válasszon polcsort (1-4): 2
Válasszon rekeszt (1-5): 3

A kiválasztott rekesz állapota: S
Szeretné foglaltra állítani? (i/n): i
A módosítás megtörtént.
```

### Segítség
A kisbetűk átalakítása:
```c
if (rekeszek[sor][oszlop] == 's')
{
    rekeszek[sor][oszlop] = 'S';
}
else if (rekeszek[sor][oszlop] == 'f')
{
    rekeszek[sor][oszlop] = 'F';
}
```
A koordináták átalakítása:
```c
int sorindex = sor_szama - 1;
int oszlopindex = oszlop_szama - 1;
```
A térkép megjelenítése:
```c
printf("    1 2 3 4 5\n");

for (int sor = 0; sor < 4; sor++)
{
    printf("%d.  ", sor + 1);

    for (int oszlop = 0; oszlop < 5; oszlop++)
    {
        printf("%c ", rekeszek[sor][oszlop]);
    }

    printf("\n");
}
```











