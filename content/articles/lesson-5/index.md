---
title: Ciklusok és műveletek tömbökkel
date: 2026-10-08
subject: ["ismétléses vezérlés", "ciklus", "ciklusmag", "ciklusfeltétel", "ciklusváltozó", "inicializálás", "feltételvizsgálat", "léptetés", "iteráció", "számlálásos ciklus", "feltételes ciklus", "tömbbejárás", "végtelen ciklus"]
author: Fekete János
---

# 1. Miért van szükség ciklusokra?
Az előző órán egy tömb elemeit egyenként olvastuk be és írtuk ki:

```c
int kolcsonzesek[5] = {0};

printf("1. nap: ");
scanf("%d", &kolcsonzesek[0]);

printf("2. nap: ");
scanf("%d", &kolcsonzesek[1]);

printf("3. nap: ");
scanf("%d", &kolcsonzesek[2]);

printf("4. nap: ");
scanf("%d", &kolcsonzesek[3]);

printf("5. nap: ");
scanf("%d", &kolcsonzesek[4]);
```

Ez ugyan működik, de több hátránya van:

- ugyanazt a műveletet többször le kell írni;
- a program hosszú és nehezen áttekinthető;
- könnyű valamelyik elemet kihagyni;
- a tömb méretének növelésekor sok új programsort kell írni;
- nagyobb adatmennyiségnél a módszer nem használható hatékonyan.

A programozásban gyakran ugyanazt a műveletet kell többször végrehajtani. Erre használjuk a `ciklusokat`.

A fenti öt beolvasás ciklussal:

```c
int kolcsonzesek[5] = {0};

for (int i = 0; i < 5; i++)
{
	printf("%d. nap: ", i + 1);
	scanf("%d", &kolcsonzesek[i]);
}
```

# 2. A ciklus fogalma
A ciklus olyan vezérlési szerkezet, amely egy utasítást vagy utasításblokkot többször végrehajt.

A ciklus ismételten végrehajtott része a ciklusmag.

Például:

```c
for (int i = 0; i < 5; i++)
{
	printf("Könyvtár\n");
}
```

A ciklusmag:

```c
{
	printf("Könyvtár\n");
}
```

Ez az utasítás ötször hajtódik végre.

A ciklusmag egy végrehajtását iterációnak nevezzük. Az előző példában a ciklusnak öt iterációja van.

### Hétköznapi példa
Egy könyvtáros az újonnan érkezett könyvek mindegyikével ugyanazokat a műveleteket végzi el:

- átveszi a könyvet;
- ellenőrzi az adatokat;
- nyilvántartásba veszi;
- ellátja jelzettel;
- elhelyezi a megfelelő polcon.

Az eljárást minden könyvnél megismétli. A ciklusok hasonló ismétlődést írnak le a programban.

# 3. A for ciklus
A for ciklust elsősorban akkor használjuk, ha az ismétlések száma előre ismert.

Például:

- írjunk ki egy üzenetet ötször;
- kérjük be hét nap látogatószámát;
- dolgozzuk fel egy tízelemű tömb minden elemét;
- vizsgáljuk meg öt könyv oldalszámát.

### Általános alak
```c
for (inicializalas; feltetel; leptetes)
{
	ciklusmag;
}
```

Egyszerű példa:

```c
for (int i = 0; i < 5; i++)
{
	printf("%d\n", i);
}
```

Kimenet:

```
0
1
2
3
4
```

# 4. A for ciklus részei
Vizsgáljuk meg a következő ciklust:

```c
for (int i = 0; i < 5; i++)
{
	printf("%d\n", i);
}
```

## 4.1. Inicializálás
```c
int i = 0
```
Létrehozza a ciklusváltozót, és kezdőértéket ad neki.

A ciklusváltozó neve gyakran `i`, amely az index szóra utal.

Az inicializálás csak egyszer, a ciklus indulásakor hajtódik végre.

## 4.2. Feltétel
```c
i < 5
```
A ciklus addig folytatódik, amíg ez a feltétel igaz.

Az egyes iterációk előtt a program ellenőrzi a feltételt:

- ha igaz, végrehajtja a ciklusmagot;
- ha hamis, befejezi a ciklust.

## 4.3. Léptetés
```c
i++
```
A ciklusváltozó értékét minden iteráció után eggyel növeli.

Az alábbi utasítások ebben az esetben azonos hatásúak:

```c
i++;
//vagy
i += 1;
//vagy
i = i + 1;
```

## 4.4. Ciklusmag
```c
{
	printf("%d\n", i);
}
```
Ez az ismételten végrehajtott utasításblokk.

# 5. A for ciklus működése lépésenként
A következő ciklus:

```c
for (int i = 0; i < 3; i++)
{
printf("i értéke: %d\n", i);
}
```
| Lépés | `i` értéke | `i &lt; 3` | Eredmény |
|---:|---:|:---:|---|
| Inicializálás | `0` | – | A ciklusváltozó létrejön |
| 1. vizsgálat | `0` | igaz | A ciklusmag végrehajtódik |
| Léptetés | `1` | – | `i` eggyel nő |
| 2. vizsgálat | `1` | igaz | A ciklusmag végrehajtódik |
| Léptetés | `2` | – | `i` eggyel nő |
| 3. vizsgálat | `2` | igaz | A ciklusmag végrehajtódik |
| Léptetés | `3` | – | `i` eggyel nő |
| 4. vizsgálat | `3` | hamis | A ciklus befejeződik |

Kimenet:
```
i értéke: 0
i értéke: 1
i értéke: 2
```

# 6. Számlálás nullától vagy egytől
A tömbök indexelése miatt a ciklusváltozó gyakran 0 értékről indul:

```c
for (int i = 0; i < 5; i++)
{
	printf("Index: %d\n", i);
}
```

Kimenet:

```
Index: 0
Index: 1
Index: 2
Index: 3
Index: 4
```

A felhasználónak szánt sorszámokat általában egytől kezdjük. Ehhez az `i + 1` értéket írjuk ki:

```c
for (int i = 0; i < 5; i++)
{
	printf("%d. könyv, tömbindex: %d\n", i + 1, i);
}
```

Kimenet:

```
1. könyv, tömbindex: 0
2. könyv, tömbindex: 1
3. könyv, tömbindex: 2
4. könyv, tömbindex: 3
5. könyv, tömbindex: 4
```

Fontos különbség:

- `i` a tényleges tömbindex;
- `i + 1` az ember számára természetes sorszám.

# 7. Tömb bejárása for ciklussal
A tömb `bejárása` azt jelenti, hogy sorban feldolgozzuk a tömb elemeit.

Adott a következő tömb:

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
```

A tömb elemeinek kiírása:

```c
for (int i = 0; i < 5; i++)
{
	printf("%d. könyv: %d oldal\n", i + 1, oldalszamok[i]);
}
```

A ciklusváltozó sorban a `0, 1, 2, 3, 4` értékeket veszi fel, ezért a program sorban az `oldalszamok[0]`, `oldalszamok[1]`, `oldalszamok[2]`, `oldalszamok[3]` és `oldalszamok[4]` elemeket használja.

Egy ötelemű tömb teljes bejárásához a feltétel `i < 5`:

```c
for (int i = 0; i < 5; i++)
{
	printf("%d\n", oldalszamok[i]);
}
```

A `i <= 5` feltétel hibás, mert az 5 indexet is felhasználná, amely már a tömbön kívül található.

# 8. Tömb feltöltése for ciklussal
Egy tömb elemeit ciklussal is beolvashatjuk:

```c
#include <stdio.h>

int main(void)
{
	int oldalszamok[5] = {0};
	for (int i = 0; i < 5; i++)
	{
		printf("%d. könyv oldalszáma: ", i + 1);
		scanf("%d", &oldalszamok[i]);
	}

	printf("\nA megadott adatok:\n");

	for (int i = 0; i < 5; i++)
	{
		printf("%d. könyv: %d oldal\n", i + 1, oldalszamok[i]);
	}

	return 0;
}
```

Az első ciklus feltölti a tömböt, a második ciklus kiírja annak tartalmát.

> Ugyanaz a for ciklusforma használható, de a két ciklus ciklusmagja különböző műveletet végez.

# 9. Érvénytelen adat kezelése feltöltéskor
Elágazással ellenőrizhetjük a beolvasott értéket:

```c
for (int i = 0; i < 5; i++)
{
	printf("%d. könyv oldalszáma: ", i + 1);
	scanf("%d", &oldalszamok[i]);

	if (oldalszamok[i] < 0)
	{
		printf("Az oldalszám nem lehet negatív.\n");
		oldalszamok[i] = 0;
	}
}
```

Ebben a változatban a negatív adatot a program 0 értékre cseréli. Ez azonban nem kér új adatot. Ha azt szeretnénk, hogy a program helyes értékig ismételje a beolvasást, while ciklust is alkalmazhatunk.

# 10. A while ciklus
A while ciklust elsősorban akkor használjuk, ha az ismétlések száma nem feltétlenül ismert előre. A ciklus addig ismétlődik, amíg a feltétele igaz.

### Általános alak
```c
while (feltetel)
{
    ciklusmag;
}
```

Példa:

```c
int ertek = 0;

printf("Adjon meg egy pozitív számot: ");
scanf("%d", &ertek);

while (ertek <= 0)
{
	printf("Hibás adat. Adjon meg egy pozitív számot: ");
	scanf("%d", &ertek);
}

printf("Az elfogadott érték: %d\n", ertek);
```

A ciklus addig kér új értéket, amíg a megadott szám nem pozitív. A while a ciklusmag végrehajtása előtt ellenőrzi a feltételt.

Ha a feltétel már kezdetben hamis, a ciklusmag egyszer sem hajtódik végre. Ha igaz, a ciklusmag lefut, majd a program ismét megvizsgálja a feltételt. A ciklus akkor fejeződik be, amikor a feltétel hamissá válik.

### Fontos: a feltételt befolyásoló adat módosítása
A ciklusmagban történnie kell valaminek, ami idővel hamissá teheti a ciklusfeltételt.

Helyes:

```c
int i = 0;
while (i < 5)
{
	printf("%d\n", i);
	i++;
}
```

### Mikor melyiket használjuk?
- Ismert számú ismétlés, tömbbejárás vagy öt adat beolvasása: `for`.
- Ismeretlen számú ismétlés, helyes értékig történő adatbekérés vagy valamilyen eseményig tartó ismétlés: `while`.

Ez nem kötelező nyelvi szabály, hanem jól használható programozási irányelv.

# 11. A for és a while összehasonlítása
A következő két ciklus ugyanazokat a számokat írja ki.

### for ciklussal
```c
for (int i = 0; i < 5; i++)
{
	printf("%d\n", i);
}
```

### while ciklussal
```c
int i = 0;
while (i < 5)
{
	printf("%d\n", i);
	i++;
}
```

### Mikor melyiket használjuk?
| Helyzet | Javasolt ciklus |
|---|---|
| Ismert számú ismétlés | `for` |
| Egy teljes tömb bejárása | `for` |
| Öt adat beolvasása | `for` |
| Ismeretlen számú ismétlés | `while` |
| Adat ismételt bekérése helyes értékig | `while` |
| Valamilyen eseményig történő ismétlés | `while` |

# 12. Tömb feltöltése ellenőrzött adatokkal
A külső for sorban kiválasztja a tömb elemeit, a belső while pedig addig kéri az értéket, amíg megfelelő nem lesz.

```c
int latogatok[5] = {0};

for (int i = 0; i < 5; i++)
{
	printf("%d. nap látogatószáma: ", i + 1);
	scanf("%d", &latogatok[i]);

	while (latogatok[i] < 0)
	{
		printf("A látogatószám nem lehet negatív.\n");
		printf("%d. nap látogatószáma újra: ", i + 1);
		scanf("%d", &latogatok[i]);
	}
}
```

A for kiválaszt egy napot, a program bekéri annak látogatószámát, a while pedig szükség esetén újra bekéri. Helyes adat után a for a következő napra lép.

# 13. Összegzés
Az összegzés során egy adatsorozat elemeinek összegét határozzuk meg.

```c
int kolcsonzesek[5] = {12, 18, 9, 21, 15};
int osszeg = 0;

for (int i = 0; i < 5; i++)
{
	osszeg += kolcsonzesek[i];
}

printf("Összes kölcsönzés: %d\n", osszeg);
```

Az összegváltozót nulláról kell indítani. A végeredmény ebben a példában 75.

| Iteráció | Aktuális elem | Összeg az összeadás után |
|---:|---:|---:|
| Kezdet | – | `0` |
| 1. | `12` | `12` |
| 2. | `18` | `30` |
| 3. | `9` | `39` |
| 4. | `21` | `60` |
| 5. | `15` | `75` |

> Az összegváltozót a ciklus előtt nullára kell inicializálni.

# 14. Átlagszámítás
Az átlag meghatározásához először összegezzük az elemeket, majd elosztjuk az összeget az elemek számával:

```c
int kolcsonzesek[5] = {12, 18, 9, 21, 15};
int osszeg = 0;

for (int i = 0; i < 5; i++)
{
	osszeg += kolcsonzesek[i];
}

double atlag = osszeg / 5.0;
printf("Napi átlag: %.2f\n", atlag);
```

Az osztó `5.0`, nem pedig `5`, így lebegőpontos osztás történik. Alternatíva: `double atlag = (double) osszeg / 5;`.

# 15. Feltételes összegzés
Csak a 15-nél nagyobb napi kölcsönzési értékek összege:

```c
int kolcsonzesek[5] = {12, 18, 9, 21, 15};
int osszeg = 0;
for (int i = 0; i < 5; i++)
{
	if (kolcsonzesek[i] > 15)
	{
		osszeg += kolcsonzesek[i];
	}
}
```

Az összegbe a 18 és a 21 kerül, így az eredmény 39.

# 16. Megszámlálás
A megszámlálás során azt határozzuk meg, hány tömbelem teljesít egy feltételt.

```c
int kolcsonzesek[5] = {12, 18, 9, 21, 15};
int darab = 0;
for (int i = 0; i < 5; i++)
{
	if (kolcsonzesek[i] >= 15)
	{
		darab++;
	}
}
printf("Legalább 15 kölcsönzésű napok száma: %d\n", darab);
```

A megfelelő elemek 18, 21 és 15, tehát az eredmény 3. Összegzéskor az értékeket adjuk össze, megszámláláskor a találatok számát növeljük.

# 17. Lineáris keresés
A lineáris keresés sorban megvizsgálja a tömb elemeit, amíg megtalálja a keresett értéket vagy eléri a tömb végét.

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
int keresett = 410;
int megtalalva = 0;
for (int i = 0; i < 5; i++)
{
	if (oldalszamok[i] == keresett)
	{
		megtalalva = 1;
	}
}

if (megtalalva == 1)
{
    printf("A keresett oldalszám szerepel a tömbben.\n");
}
else
{
    printf("A keresett oldalszám nem szerepel a tömbben.\n");
}

```

A találatjelző kezdetben 0, találat esetén 1 értéket kap.

A találat helyének tárolásához használhatunk `-1` kezdőértéket, mert ez nem érvényes tömbindex:

```c
int talalat_indexe = -1;
for (int i = 0; i < 5; i++)
{
	if (oldalszamok[i] == keresett)
	{
		talalat_indexe = i;
	}
}

if (talalat_indexe != -1)
{
    printf("A keresett érték indexe: %d\n", talalat_indexe);
}
else
{
    printf("Nincs találat.\n");
}
```

Ha az érték többször szerepel, ez a változat az utolsó találat indexét őrzi meg.

# 18. Keresés while ciklussal
A keresés addig folytatódik, amíg nem értünk a tömb végére, és még nem találtuk meg az értéket:

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
int keresett = 410;
int i = 0;
while (i < 5 && oldalszamok[i] != keresett)
{
	i++;
}
if (i < 5)
{
	printf("A keresett érték indexe: %d\n", i);
}
else
{
	printf("Nincs találat.\n");
}
```

A feltételben előbb ellenőrizzük az `i < 5` határt. A rövidzáras kiértékelés miatt hamis feltételnél a program nem éri el az érvénytelen `oldalszamok[i]` elemet.

# 19. Minimumkiválasztás
A minimumot a tömb első elemével inicializáljuk, majd a többi elemet összehasonlítjuk vele:

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
int minimum = oldalszamok[0];
for (int i = 1; i < 5; i++)
{
	if (oldalszamok[i] < minimum)
	{
		minimum = oldalszamok[i];
	}
}
printf("A legkisebb oldalszám: %d\n", minimum);
```

A ciklus az 1 indexről indul, mert a 0 indexű elemet már felhasználtuk kezdőértékként. Nem célszerű 0-ról indítani a minimumot: pozitív tömb esetén a 0 hibás eredményt adna.

# 20. Maximumkiválasztás
A maximum meghatározása hasonló, de a kisebb operátor helyett nagyobb operátort használunk:

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
int maximum = oldalszamok[0];
for (int i = 1; i < 5; i++)
{
	if (oldalszamok[i] > maximum)
	{
		maximum = oldalszamok[i];
	}
}
printf("A legnagyobb oldalszám: %d\n", maximum);
```
A különbség az összehasonlító operátor:
- minimum keresése: <;
- maximum keresése: >.

# 21. A minimum és maximum indexének tárolása
Ha azt is meg szeretnénk tudni, melyik könyvhöz tartozik az érték, az indexet is eltároljuk:

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

# 22. Több azonos minimum vagy maximum
`if (adatok[i] > maximum)` esetén az első előfordulás marad meg. Az utolsó előfordulás megtartásához `>=` operátort használunk.

# 23. Fontos programozási minták
### Tömb bejárása
```c
for (int i = 0; i < meret; i++)
{
	/* adatok[i] feldolgozása */
}
```

### Összegzés
```c
int osszeg = 0;
for (int i = 0; i < meret; i++)
{
	osszeg += adatok[i];
}
```

### Megszámlálás
```c
int darab = 0;
for (int i = 0; i < meret; i++)
{
	if (feltetel)
	{
		darab++;
	}
}
```

### Keresés
```c
int talalat_indexe = -1;
for (int i = 0; i < meret; i++)
{
	if (adatok[i] == keresett)
	{
		talalat_indexe = i;
	}
}
```

### Minimum- és maximumkiválasztás
```c
int minimum = adatok[0];
int maximum = adatok[0];
for (int i = 1; i < meret; i++)
{
	if (adatok[i] < minimum) minimum = adatok[i];
	if (adatok[i] > maximum) maximum = adatok[i];
}
```

# Gyakorlati rész
## 1. feladat – Számlálás for ciklussal
Készítsen programot, amely 1-től 10-ig kiírja az egész számokat!

### Lehetséges megoldás
```c
#include <stdio.h>
int main(void)
{
	for (int i = 1; i <= 10; i++)
	{
		printf("%d\n", i);
	}
	return 0;
}
```

Módosítsa úgy, hogy csak a páros számokat írja ki 2 és 10 között:

```c
for (int i = 2; i <= 10; i += 2)
{
	printf("%d\n", i);
}
```

## 2. feladat – Tömb feltöltése és kiírása
Készítsen ötelemű tömböt öt könyv oldalszámának tárolására. Ciklussal kérje be az adatokat, ne fogadjon el negatív oldalszámot, majd ciklussal írja ki az elemeket.

### Lehetséges megoldás
```c
#include <stdio.h>
int main(void)
{
	int oldalszamok[5] = {0};
	for (int i = 0; i < 5; i++)
	{
		printf("%d. könyv oldalszáma: ", i + 1);
		scanf("%d", &oldalszamok[i]);
		while (oldalszamok[i] < 0)
		{
			printf("Az oldalszám nem lehet negatív.\n");
			printf("%d. könyv oldalszáma újra: ", i + 1);
			scanf("%d", &oldalszamok[i]);
		}
	}
	printf("\nA könyvek oldalszámai:\n");
	for (int i = 0; i < 5; i++)
	{
		printf("%d. könyv: %d oldal\n", i + 1, oldalszamok[i]);
	}
	return 0;
}
```

## 3. feladat – Heti látogatószám összegzése
Készítsen hételemű tömböt a könyvtár napi látogatószámainak tárolására. Ciklussal kérje be az adatokat, majd számítsa ki a heti összeget és a napi átlagot.

```c
#include <stdio.h>

int main(void)
{
    int latogatok[7] = {0};
    int osszeg = 0;
    double atlag = 0.0;

    for (int i = 0; i < 7; i++)
    {
        printf("%d. nap látogatószáma: ", i + 1);
        scanf("%d", &latogatok[i]);

        while (latogatok[i] < 0)
        {
            printf("A látogatószám nem lehet negatív.\n");
            printf("%d. nap látogatószáma újra: ", i + 1);
            scanf("%d", &latogatok[i]);
        }

        osszeg += latogatok[i];
    }

    atlag = osszeg / 7.0;

    printf("\nHeti látogatószám: %d\n", osszeg);
    printf("Napi átlag: %.2f\n", atlag);

    return 0;
}
```

## 4. feladat – Forgalmas napok megszámlálása
Adott: `int latogatok[7] = {85, 120, 97, 143, 156, 74, 61};`. Számítsa ki, hány napon volt legalább 100 látogató!

```c
#include <stdio.h>

int main(void)
{
    int latogatok[7] = {85, 120, 97, 143, 156, 74, 61};
    int forgalmas_napok = 0;

    for (int i = 0; i < 7; i++)
    {
        if (latogatok[i] >= 100)
        {
            forgalmas_napok++;
        }
    }

    printf("Legalább 100 látogatós napok száma: %d\n",
           forgalmas_napok);

    return 0;
}
```

## 5. feladat – Oldalszám keresése
Adott: `int oldalszamok[6] = {320, 245, 410, 198, 275, 360};`. Kérjen be egy keresett oldalszámot, majd találat esetén írja ki az indexet és a könyv sorszámát is.

```c
#include <stdio.h>

int main(void)
{
    int oldalszamok[6] = {320, 245, 410, 198, 275, 360};
    int keresett = 0;
    int talalat_indexe = -1;

    printf("Keresett oldalszám: ");
    scanf("%d", &keresett);

    for (int i = 0; i < 6; i++)
    {
        if (oldalszamok[i] == keresett &&
            talalat_indexe == -1)
        {
            talalat_indexe = i;
        }
    }

    if (talalat_indexe != -1)
    {
        printf("A keresett érték megtalálható.\n");
        printf("Index: %d\n", talalat_indexe);
        printf("A könyv sorszáma: %d\n", talalat_indexe + 1);
    }
    else
    {
        printf("A keresett érték nem szerepel a tömbben.\n");
    }

    return 0;
}
```

A `talalat_indexe == -1` feltétel biztosítja, hogy több találat esetén az első előfordulás maradjon meg.

## 6. feladat – Legkisebb és legnagyobb oldalszám
Adott a következő tömb:
```c
int oldalszamok[6] = {320, 245, 410, 198, 275, 360};
```
Határozza meg:
- a legkisebb oldalszámot és annak indexét;
- alegnagyobb oldalszámot és annak indexét.

Lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    int oldalszamok[6] = {320, 245, 410, 198, 275, 360};

    int minimum = oldalszamok[0];
    int maximum = oldalszamok[0];
    int minimum_index = 0;
    int maximum_index = 0;

    for (int i = 1; i < 6; i++)
    {
        if (oldalszamok[i] < minimum)
        {
            minimum = oldalszamok[i];
            minimum_index = i;
        }

        if (oldalszamok[i] > maximum)
        {
            maximum = oldalszamok[i];
            maximum_index = i;
        }
    }

    printf("Legkisebb oldalszám: %d\n", minimum);
    printf("Indexe: %d, könyv sorszáma: %d\n",
           minimum_index, minimum_index + 1);

    printf("Legnagyobb oldalszám: %d\n", maximum);
    printf("Indexe: %d, könyv sorszáma: %d\n",
           maximum_index, maximum_index + 1);

    return 0;
}
```
# Hibakeresési feladatok
## 1. hiba
```c
int oldalszamok[5] = {320, 245, 410, 198, 275};

for (int i = 0; i <= 5; i++)
{
    printf("%d\n", oldalszamok[i]);
}
```
<details>
<summary>Megoldás</summary>
Ötelemű tömb esetén az `i <= 5` hibás, mert az 5 index már érvénytelen. A helyes feltétel: `i < 5`.
</details>

## 2. hiba
```c
int i = 0;

while (i < 5)
{
    printf("%d\n", i);
}
```
<details>
<summary>Megoldás</summary>
Ha `while (i < 5)` ciklusmagjában az `i` nem változik, a feltétel mindig igaz marad. Növeljük az `i` értékét minden iterációban.
</details>

## 3. hiba
```c
int oldalszamok[3] = {120, 240, 360};

for (int i = 0; i < 3; i++);
{
    printf("A tömb feldolgozása\n");
}
```
<details>
<summary>Megoldás</summary>
A pontosvessző üres ciklusmagot hoz létre, ezért el kell hagyni.
</details>

## 4. hiba
```c
int kolcsonzesek[4] = {10, 20, 15, 25};
int osszeg;

for (int i = 0; i < 4; i++)
{
    osszeg += kolcsonzesek[i];
}

printf("Összeg: %d\n", osszeg);
```
<details>
<summary>Megoldás</summary>
Az osszeg változó nem kapott kezdőértéket:
</details>

## 5. hiba
```c
int oldalszamok[4] = {320, 245, 410, 198};
int minimum = 0;

for (int i = 0; i < 4; i++)
{
    if (oldalszamok[i] < minimum)
    {
        minimum = oldalszamok[i];
    }
}

printf("Minimum: %d\n", minimum);
```
<details>
<summary>Megoldás</summary>


A tömb minden eleme pozitív, ezért egyik érték sem kisebb nullánál. A minimum változó így nem módosul, annak ellenére, hogy a 0 nem szerepel a tömbben.


A minimumot a tömb első elemével kell inicializálni:
</details>

## 6. hiba
```c
int latogatok[5] = {85, 120, 97, 143, 110};
int maximum = latogatok[0];

for (int i = 1; i < 5; i++)
{
    if (latogatok[i] < maximum)
    {
        maximum = latogatok[i];
    }
}
```
<details>
<summary>Megoldás</summary>


A program maximumot szeretne keresni, de a feltételben < operátor szerepel. Ez a kisebb értékeket választja ki, ezért valójában minimumot keres.


Maximumkereséshez > szükséges-
</details>

## 7. hiba
```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
int keresett = 410;
int megtalalva = 0;

for (int i = 0; i < 5; i++)
{
    if (oldalszamok[i] = keresett)
    {
        megtalalva = 1;
    }
}
```
<details>
<summary>Megoldás</summary>
A feltételben értékadás szerepel. Ez minden megvizsgált tömbelemet 410 értékűre módosít. Az értékadás eredménye is 410, amely nullától különböző, tehát igaz értéknek számít.

Az összehasonlításhoz == szükséges:
</details>

## 8. hiba
```c
int kolcsonzesek[4] = {10, 11, 12, 12};
int osszeg = 0;

for (int i = 0; i < 4; i++)
{
    osszeg += kolcsonzesek[i];
}

double atlag = osszeg / 4;

printf("Átlag: %.2f\n", atlag);
```
<details>
<summary>Megoldás</summary>
Az osszeg és a 4 egyaránt egész típusú, ezért egész osztás történik.
</details>

## 9. hiba
```c
int adatok[5] = {10, 20, 30, 40, 50};
int keresett = 70;
int i = 0;

while (adatok[i] != keresett && i < 5)
{
    i++;
}
```
<details>
<summary>Megoldás</summary>
A program először ezt a kifejezést értékeli ki:
`adatok[i] != keresett`
Amikor i értéke 5, ez az adatok[5] érvénytelen elemet próbálja elérni. Az i < 5 ellenőrzés csak ezután következne.
Először mindig a tömbhatárt kell ellenőrizni.
A rövidzáras kiértékelés miatt, ha i < 5 hamis, a program már nem próbálja meg elérni az adatok[i] elemet.
</details>

10. hiba
```c
for (int i = 0; i < 5; i++)
{
    printf("%d\n", i);
}

printf("A ciklus után: %d\n", i);
```
<details>
<summary>Megoldás</summary>
A for fejlécében létrehozott i változó csak a ciklushoz tartozó tartományban érhető el:
</details>

# Szorgalmi feladat – Könyvtári állomány elemzése

Készítsen programot, amely legfeljebb tíz könyv oldalszámát elemzi!
### Követelmények
A program:

1. kérje be, hány könyv adatát szeretné a felhasználó megadni;

2. csak 1 és 10 közötti darabszámot fogadjon el;

3. hibás darabszám esetén while ciklussal kérje újra az adatot;

4. az oldalszámokat egy tízelemű tömbben tárolja;

5. csak pozitív oldalszámot fogadjon el;

6. for ciklussal kérje be a szükséges számú oldalszámot;

7. írja ki a megadott adatokat;

8. számítsa ki az oldalszámok összegét és átlagát;

9. számolja meg, hány könyv oldalszáma nagyobb az átlagnál;

10. határozza meg a legkisebb oldalszámot és annak első indexét;

11. határozza meg a legnagyobb oldalszámot és annak első indexét;

12. kérjen be egy keresett oldalszámot;

13. határozza meg, hányszor szerepel a keresett érték a tömbben;

14. írja ki az első találat indexét;

15. ha nincs találat, jelenítsen meg megfelelő üzenetet.

Példa:
```
Könyvek száma (1–10): 5

1. könyv oldalszáma: 320
2. könyv oldalszáma: 245
3. könyv oldalszáma: 410
4. könyv oldalszáma: 245
5. könyv oldalszáma: 275

A megadott oldalszámok:
1. könyv: 320 oldal
2. könyv: 245 oldal
3. könyv: 410 oldal
4. könyv: 245 oldal
5. könyv: 275 oldal

Összes oldalszám: 1495
Átlagos oldalszám: 299.00
Átlagnál hosszabb könyvek száma: 2

Legkisebb oldalszám: 245
Első indexe: 1

Legnagyobb oldalszám: 410
Első indexe: 2

Keresett oldalszám: 245
A keresett érték előfordulásainak száma: 2
Az első találat indexe: 1
```

# Az óra összefoglalása
- A ciklus egy utasítást vagy utasításblokkot ismételten végrehajt.
- A ciklusmag egy végrehajtását iterációnak nevezzük.
- A for ciklust elsősorban ismert számú ismétléshez használjuk.
- A for ciklus részei az inicializálás, a feltétel és a léptetés.
- A while ciklus addig ismétlődik, amíg a feltétele igaz.
- A while akkor hasznos, ha az ismétlések száma nem ismert előre.
- A ciklusfeltételt befolyásoló értéket módosítani kell, különben végtelen ciklus keletkezhet.
- A tömb teljes bejárásának általános ciklusfeltétele i < meret.
- Az i <= meret feltétel tömbhatár-túllépést okozhat.
- A ciklusváltozó közvetlenül használható tömbindexként.
- Az i + 1 ember számára természetes sorszámot ad.
- Összegzéskor az összegváltozót nulláról indítjuk.
- Átlagszámításkor ügyelni kell a lebegőpontos osztásra.
- Megszámláláskor egy számlálót növelünk minden megfelelő elemnél.
- A lineáris keresés sorban megvizsgálja a tömb elemeit.
- A -1 használható annak jelzésére, hogy nincs érvényes találati index.
- A minimumot és maximumot a tömb első elemével célszerű inicializálni.
- A minimum és maximum helye külön indexváltozóban tárolható.
- Egy for ciklusba while ciklus, elágazás vagy akár másik ciklus is helyezhető.