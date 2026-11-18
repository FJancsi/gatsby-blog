---
title: Műveletek kétdimenziós tömbökkel II.
date: 2026-11-19
subject: ["kétdimenziós tömb", "tömbbejárás", "beágyazott ciklus", "lineáris keresés", "találat", "sorindex", "oszlopindex", "megszámlálás", "minimumkiválasztás", "maximumkiválasztás", "szélsőérték"]
author: Fekete János
---

# 1. Ismert műveletek, két index
Adott három könyvtári részleg négy napi kölcsönzési adata:

```c
int kolcsonzesek[3][4] =
{
    {12, 15, 9, 18},
    {20, 18, 22, 16},
    {5, 7, 6, 9}
};
```

A sorok a részlegeket, az oszlopok a napokat jelölik.

| Részleg / nap | 1. nap | 2. nap | 3. nap | 4. nap |
|---|---:|---:|---:|---:|
| 1. részleg | 12 | 15 | 9 | 18 |
| 2. részleg | 20 | 18 | 22 | 16 |
| 3. részleg | 5 | 7 | 6 | 9 |

A tömb teljes bejárása:
```c
for (int sor = 0; sor < 3; sor++)
{
    for (int oszlop = 0; oszlop < 4; oszlop++)
    {
        /* Az aktuális elem: kolcsonzesek[sor][oszlop]. */
    }
}
```

Ezt a bejárást használjuk kereséshez és szélsőértékek meghatározásához is.

Egydimenziós tömbnél egy találat helyét egy index adja meg:

```c
adatok[index];
```

Kétdimenziós tömbnél két index szükséges:

```c
adatok[sorindex][oszlopindex];
```

# 2. Lineáris keresés
A lineáris keresés sorban megvizsgálja a tömb elemeit, és összehasonlítja őket a keresett értékkel.


Kétdimenziós tömbnél soronként haladunk:
```
[0][0], [0][1], [0][2], [0][3],
[1][0], [1][1], [1][2], [1][3],
[2][0], [2][1], [2][2], [2][3]
```

Keressük meg például a 18 érték első előfordulását!

### A találat helyének tárolása
Két változót használunk:
```c
int talalat_sor = -1;
int talalat_oszlop = -1;
```
A -1 nem érvényes tömbindex. Azt jelzi, hogy még nincs találat.

```c
#include <stdio.h>

int main(void)
{
    int kolcsonzesek[3][4] =
    {
        {12, 15, 9, 18},
        {20, 18, 22, 16},
        {5, 7, 6, 9}
    };

    int keresett = 0;
    int talalat_sor = -1;
    int talalat_oszlop = -1;

    printf("Keresett kölcsönzésszám: ");
    scanf("%d", &keresett);

    for (int sor = 0; sor < 3; sor++)
    {
        for (int oszlop = 0; oszlop < 4; oszlop++)
        {
            /* Csak az első találat koordinátáit tároljuk. */
            if (kolcsonzesek[sor][oszlop] == keresett &&
                talalat_sor == -1)
            {
                talalat_sor = sor;
                talalat_oszlop = oszlop;
            }
        }
    }

    if (talalat_sor != -1)
    {
        printf("A keresett érték megtalálható.\n");
        printf("Indexei: [%d][%d]\n",
               talalat_sor, talalat_oszlop);

        printf("Részleg: %d, nap: %d\n",
               talalat_sor + 1, talalat_oszlop + 1);
    }
    else
    {
        printf("Nincs találat.\n");
    }

    return 0;
}
```

Ha a keresett érték 18, a kimenet:
```
A keresett érték megtalálható.
Indexei: [0][3]
Részleg: 1, nap: 4
```

### Miért kell a talalat_sor == -1 feltétel?
A 18 kétszer is szerepel a tömbben:
```c
kolcsonzesek[0][3]
kolcsonzesek[1][1]
```
A következő feltétel biztosítja, hogy csak addig írjuk be a koordinátákat, amíg még nincs találat:

```c
talalat_sor == -1
```

A ciklus továbbra is végigjárja a tömböt, de a későbbi találatok már nem írják felül az első helyét.


> Ha ezt a feltételt elhagyjuk, a program az utolsó találat koordinátáit őrzi meg.

# 3. Előfordulások megszámlálása

Ha nemcsak az első találat helye érdekel, hanem az előfordulások száma is, egy számlálót használunk.


Ugyanabban a bejárásban:
- megszámoljuk az összes találatot;
- eltároljuk az első találat helyét.

```c
int keresett = 18;
int elofordulasok = 0;
int talalat_sor = -1;
int talalat_oszlop = -1;

for (int sor = 0; sor < 3; sor++)
{
    for (int oszlop = 0; oszlop < 4; oszlop++)
    {
        if (kolcsonzesek[sor][oszlop] == keresett)
        {
            /* Minden találatot megszámolunk. */
            elofordulasok++;

            /* A koordinátákat csak az első találatnál állítjuk be. */
            if (talalat_sor == -1)
            {
                talalat_sor = sor;
                talalat_oszlop = oszlop;
            }
        }
    }
}

printf("Előfordulások száma: %d\n", elofordulasok);
```

A 18 értékre az eredmény:
```
Előfordulások száma: 2
```

### Feltételnek megfelelő elemek
Nemcsak egy konkrét érték előfordulásait számolhatjuk meg. Például meghatározhatjuk, hány helyen volt legalább 18 kölcsönzés:

```c
int forgalmas_ertekek = 0;

for (int sor = 0; sor < 3; sor++)
{
    for (int oszlop = 0; oszlop < 4; oszlop++)
    {
        if (kolcsonzesek[sor][oszlop] >= 18)
        {
            forgalmas_ertekek++;
        }
    }
}

printf("Legalább 18 kölcsönzésű adatok száma: %d\n", forgalmas_ertekek);
```

Eredmény:
```
Legalább 18 kölcsönzésű adatok száma: 4
```

# 4. Minimum- és maximumkiválasztás
A minimumkiválasztás a legkisebb, a maximumkiválasztás a legnagyobb tömbelemet határozza meg.

Ugyanazt az elvet használjuk, mint egydimenziós tömbnél:
- az első elemet tekintjük kezdő szélsőértéknek;
- végigjárjuk a tömböt;
- kisebb vagy nagyobb érték esetén frissítjük az eredményt.

```c
#include <stdio.h>

int main(void)
{
    int kolcsonzesek[3][4] =
    {
        {12, 15, 9, 18},
        {20, 18, 22, 16},
        {5, 7, 6, 9}
    };

    /* Valódi tömbelemből indulunk, nem önkényes kezdőértékből. */
    int minimum = kolcsonzesek[0][0];
    int maximum = kolcsonzesek[0][0];

    for (int sor = 0; sor < 3; sor++)
    {
        for (int oszlop = 0; oszlop < 4; oszlop++)
        {
            if (kolcsonzesek[sor][oszlop] < minimum)
            {
                minimum = kolcsonzesek[sor][oszlop];
            }

            if (kolcsonzesek[sor][oszlop] > maximum)
            {
                maximum = kolcsonzesek[sor][oszlop];
            }
        }
    }

    printf("Legkisebb kölcsönzésszám: %d\n", minimum);
    printf("Legnagyobb kölcsönzésszám: %d\n", maximum);

    return 0;
}
```

Kimenet:
```
Legkisebb kölcsönzésszám: 5
Legnagyobb kölcsönzésszám: 22
```

### Miért indul mindkét ciklus nulláról?
Az első elemet már felhasználtuk kezdőértékként, de az egyszerű bejárás során újra összehasonlítjuk önmagával.

Ez nem okoz problémát:
```c
kolcsonzesek[0][0] < minimum
kolcsonzesek[0][0] > maximum
```
Mindkét feltétel hamis.

Így nem kell külön kezelni az első sor első elemének kihagyását.


> A minimum- és maximumkereséshez legalább egy érvényes tömbelem szükséges. Az órai példákban a tömbök mérete előre adott, és minden elemük kap értéket.

# 5. A szélsőértékek helyének tárolása
Az érték mellett gyakran azt is tudni szeretnénk, hol található.
A minimumhoz és maximumhoz külön sor- és oszlopindexet tárolunk:
```c
int minimum_sor = 0;
int minimum_oszlop = 0;

int maximum_sor = 0;
int maximum_oszlop = 0;
```

Amikor új szélsőértéket találunk, az értékkel együtt a koordinátákat is módosítjuk.
```c
int minimum = kolcsonzesek[0][0];
int maximum = kolcsonzesek[0][0];

int minimum_sor = 0;
int minimum_oszlop = 0;
int maximum_sor = 0;
int maximum_oszlop = 0;

for (int sor = 0; sor < 3; sor++)
{
    for (int oszlop = 0; oszlop < 4; oszlop++)
    {
        if (kolcsonzesek[sor][oszlop] < minimum)
        {
            minimum = kolcsonzesek[sor][oszlop];
            minimum_sor = sor;
            minimum_oszlop = oszlop;
        }

        if (kolcsonzesek[sor][oszlop] > maximum)
        {
            maximum = kolcsonzesek[sor][oszlop];
            maximum_sor = sor;
            maximum_oszlop = oszlop;
        }
    }
}

printf("Minimum: %d, helye: [%d][%d]\n",
       minimum, minimum_sor, minimum_oszlop);

printf("Maximum: %d, helye: [%d][%d]\n",
       maximum, maximum_sor, maximum_oszlop);
```

Eredmény:
```
Minimum: 5, helye: [2][0]
Maximum: 22, helye: [1][2]
```
A felhasználónak egytől kezdődő sorszámokat jeleníthetünk meg:
```c
printf("A legnagyobb érték a(z) %d. részleg %d. napján volt.\n",
       maximum_sor + 1,
       maximum_oszlop + 1);
```
Kimenet:
```
A legnagyobb érték a(z) 2. részleg 3. napján volt.
```

### Azonos szélsőértékek
Szigorú összehasonlítás esetén:
```c
aktualis_ertek < minimum
aktualis_ertek > maximum
```
az első előfordulás helyét tartjuk meg.

Ha `<=` vagy `>=` operátort használunk, az azonos értékek is felülírják a koordinátákat, ezért az utolsó előfordulás marad meg.

# 6. Egyszerű összetett feldolgozás
Az ismert műveleteket rövid feladatban is összekapcsolhatjuk.

Például:
> Számítsuk ki az összes adat átlagát, majd számoljuk meg, hány tömbelem nagyobb az átlagnál!

A feladat két bejárást igényel:
- összegzés és átlagszámítás;
- az átlag feletti elemek megszámlálása.
```c
int osszeg = 0;

for (int sor = 0; sor < 3; sor++)
{
    for (int oszlop = 0; oszlop < 4; oszlop++)
    {
        osszeg += kolcsonzesek[sor][oszlop];
    }
}

/* A tömb 3 * 4, vagyis 12 adatot tartalmaz. */
double atlag = osszeg / 12.0;

int atlag_felett = 0;

for (int sor = 0; sor < 3; sor++)
{
    for (int oszlop = 0; oszlop < 4; oszlop++)
    {
        if (kolcsonzesek[sor][oszlop] > atlag)
        {
            atlag_felett++;
        }
    }
}

printf("Az összes adat átlaga: %.2f\n", atlag);
printf("Átlag feletti adatok száma: %d\n", atlag_felett);
```
Eredmény:
```
Az összes adat átlaga: 13.08
Átlag feletti adatok száma: 6
```
> Az átlagot csak az összegzés után ismerjük. Ezért az átlaghoz történő összehasonlítást egy újabb bejárásban végezzük.

# Hibakeresési feladatok

### 1. Hiba
```c
int adatok[2][3] =
{
    {8, 4, 7},
    {6, 9, 5}
};

int minimum = 0;
```
A program később csak a minimumnál kisebb elemekre frissít. Miért lesz hibás az eredmény?


<details>
<summary>Megoldás</summary>


A tömb minden eleme pozitív, ezért egyik sem kisebb nullánál. A minimum tévesen 0 marad, pedig ez az érték nem is szerepel a tömbben.


A tömb első eleméből kell indulni!
</details>

### 2. hiba
```c
if (adatok[sor][oszlop] > maximum)
{
    maximum = adatok[sor][oszlop];
    maximum_sor = sor;
}
```
<details>
<summary>Megoldás</summary>


Új maximum esetén az oszlopindexet is el kell tárolni. Különben az érték és a koordináták nem feltétlenül ugyanahhoz az elemhez tartoznak.
</details>

### 3. hiba
```c
for (int sor = 0; sor < 2; sor++)
{
    for (int oszlop = 0; oszlop < 3; oszlop++)
    {
        if (adatok[sor][oszlop] == keresett)
        {
            talalat_sor = sor;
            talalat_oszlop = oszlop;
        }
    }
}
```
A cél az első találat eltárolása.


<details>
<summary>Megoldás</summary>
A koordinátákat minden találatnál felülírjuk, ezért az utolsó találat helye marad meg.

A változókat először -1 értékre kell inicializálni.
A frissítést csak az első találatnál végezzük.
</details>

### 4. hiba
```c
int talalat_sor = -1;
int talalat_oszlop = -1;

/* A keresés után: */
printf("A megtalált érték: %d\n",
       adatok[talalat_sor][talalat_oszlop]);
```
<details>
<summary>Megoldás</summary>
Találat hiányában mindkét index -1, ezért a tömbelem elérése érvénytelen.
Először ellenőrizni kell, hogy van-e találat.
</details>

# Órai munka – Hőmérsékletek vizsgálata

Két helyiségben három alkalommal megmértük a hőmérsékletet. 
Az adatokat egész Celsius-fokokban tároljuk:
```c
int homersekletek[2][3] =
{
    {21, 23, 22},
    {19, 21, 24}
};
```
- A sorok a helyiségeket jelölik.
- Az oszlopok a mérési alkalmakat jelölik.

### Követelmények
A program:
- hozza létre a megadott tömböt;
- beágyazott ciklussal jelenítse meg az adatokat;
- határozza meg a legkisebb hőmérsékletet és annak helyét;
- határozza meg a legnagyobb hőmérsékletet és annak helyét;
- kérjen be egy keresett hőmérsékletet;
- keresse meg annak első előfordulását;
- találat esetén írja ki a helyiség és a mérés sorszámát;
- találat hiányában írjon ki megfelelő üzenetet.

> Az adatok előre adottak. Nem szükséges feltölteni a tömböt vagy ellenőrizni a beolvasott hőmérséklet tartományát.

### Példa futás
```
Hőmérsékletek vizsgálata
=======================

A mért adatok:
  21  23  22
  19  21  24

Legkisebb hőmérséklet: 19 °C
Helyiség: 2, mérés: 1

Legnagyobb hőmérséklet: 24 °C
Helyiség: 2, mérés: 3

Keresett hőmérséklet: 21
A keresett érték megtalálható.
Helyiség: 1, mérés: 1
```
### Lehetséges megoldás
```c
#include <stdio.h>

int main(void)
{
    int homersekletek[2][3] =
    {
        {21, 23, 22},
        {19, 21, 24}
    };

    int minimum = homersekletek[0][0];
    int maximum = homersekletek[0][0];

    int minimum_sor = 0;
    int minimum_oszlop = 0;
    int maximum_sor = 0;
    int maximum_oszlop = 0;

    int keresett = 0;
    int talalat_sor = -1;
    int talalat_oszlop = -1;

    printf("Hőmérsékletek vizsgálata\n");
    printf("=======================\n\n");
    printf("A mért adatok:\n");

    /* A táblázat megjelenítése. */
    for (int sor = 0; sor < 2; sor++)
    {
        for (int oszlop = 0; oszlop < 3; oszlop++)
        {
            printf("%4d", homersekletek[sor][oszlop]);
        }

        printf("\n");
    }

    /* Minimum és maximum, a hozzájuk tartozó koordinátákkal. */
    for (int sor = 0; sor < 2; sor++)
    {
        for (int oszlop = 0; oszlop < 3; oszlop++)
        {
            if (homersekletek[sor][oszlop] < minimum)
            {
                minimum = homersekletek[sor][oszlop];
                minimum_sor = sor;
                minimum_oszlop = oszlop;
            }

            if (homersekletek[sor][oszlop] > maximum)
            {
                maximum = homersekletek[sor][oszlop];
                maximum_sor = sor;
                maximum_oszlop = oszlop;
            }
        }
    }

    printf("\nLegkisebb hőmérséklet: %d °C\n", minimum);
    printf("Helyiség: %d, mérés: %d\n",
           minimum_sor + 1, minimum_oszlop + 1);

    printf("\nLegnagyobb hőmérséklet: %d °C\n", maximum);
    printf("Helyiség: %d, mérés: %d\n",
           maximum_sor + 1, maximum_oszlop + 1);

    /* Az első előfordulás keresése. */
    printf("\nKeresett hőmérséklet: ");
    scanf("%d", &keresett);

    for (int sor = 0; sor < 2; sor++)
    {
        for (int oszlop = 0; oszlop < 3; oszlop++)
        {
            if (homersekletek[sor][oszlop] == keresett &&
                talalat_sor == -1)
            {
                talalat_sor = sor;
                talalat_oszlop = oszlop;
            }
        }
    }

    if (talalat_sor != -1)
    {
        printf("A keresett érték megtalálható.\n");
        printf("Helyiség: %d, mérés: %d\n",
               talalat_sor + 1, talalat_oszlop + 1);
    }
    else
    {
        printf("A keresett érték nem szerepel a mérések között.\n");
    }

    return 0;
}
```

# Rövid összefoglalás
- Kétdimenziós tömbben beágyazott ciklussal keresünk.
- Egy elem helyének tárolásához sor- és oszlopindex szükséges.
- A -1 indexérték jelezheti a találat hiányát.
- A találati koordinátákat csak sikeres keresés után használjuk.
- Az első találat megőrzéséhez megakadályozzuk a későbbi felülírást.
- A minimumot és maximumot a tömb első elemével inicializáljuk.
- Új szélsőérték esetén az értéket és mindkét koordinátát frissítjük.
- Szigorú `<` és `>` összehasonlítással az első szélsőérték helyét tartjuk meg.
- Az ismert műveletek összekapcsolhatók, de a szükséges végrehajtási sorrendre figyelni kell.

# Szorgalmi feladat – Könyvtári számítógépek használata
Értéke: +1 pont

Egy könyvtár három számítógépének négy napi használatát vizsgáljuk. Az értékek azt mutatják, hány olvasó használta az adott gépet az adott napon.

```c
int hasznalat[3][4] =
{
    {8, 12, 10, 6},
    {15, 9, 12, 8},
    {5, 7, 9, 12}
};
```
- A sorok a számítógépeket jelölik.
- Az oszlopok a napokat jelölik.

### Követelmények
A program:
- táblázatosan jelenítse meg az adatokat;
- határozza meg a legkisebb használati értéket és annak koordinátáit;
- határozza meg a legnagyobb használati értéket és annak koordinátáit;
- egyezés esetén az első szélsőérték helyét jelenítse meg;
- kérjen be egy keresett használati értéket;
- számolja meg az érték összes előfordulását;
- találat esetén írja ki az első előfordulás gép- és napsorszámát;
- találat hiányában írjon ki megfelelő üzenetet;
- számítsa ki az összes adat átlagát;
- számolja meg, hány adat nagyobb az átlagnál.

Nem szükséges adatfeltöltést vagy új nyelvi elemet használni.

### Példa kimenet
```
A használati adatok:
   8  12  10   6
  15   9  12   8
   5   7   9  12

Legkisebb érték: 5
Gép: 3, nap: 1

Legnagyobb érték: 15
Gép: 2, nap: 1

Keresett érték: 12
Előfordulások száma: 3
Első előfordulás: 1. gép, 2. nap

Az összes adat átlaga: 9.42
Átlag feletti adatok száma: 5
```





