---
title: Egydimenziós tömbök
date: 2026-10-01
subject: ["adatszerkezet", "tömb", "egydimenziós tömb", "tömbelem", "elemtípus", "tömbméret", "index", "inicializálás", "indexelés", "részleges inicializálás", "érvényes index", "indexhatár", "tömbhatár-tullépés"]
author: Fekete János
---

# 1. Miért van szükség tömbökre?
Az eddigi programjainkban minden adat számára külön változót hoztunk létre.
Ha például öt könyv oldalszámát szeretnénk tárolni, megtehetjük a következő módon:

```c
int elso_oldalszam = 320;
int masodik_oldalszam = 245;
int harmadik_oldalszam = 410;
int negyedik_oldalszam = 198;
int otodik_oldalszam = 275;
```

Ez kevés adat esetén használható, de több problémát is okoz:

- minden adathoz külön változónevet kell kitalálnunk;
- nehéz áttekinteni a programot;
- nehéz egységesen kezelni az összetartozó adatokat;
- száz vagy ezer adat esetén a megoldás gyakorlatilag használhatatlanná válik.

A felsorolt oldalszámok azonos jellegű, egymással összetartozó adatok. Célszerű ezért egyetlen közös adatszerkezetben tárolni őket.

Erre használható a `tömb`.
```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
```
Az oldalszamok egyetlen név alatt öt egész számot tárol.

# 2. A tömb fogalma
A tömb azonos típusú, egymással összetartozó adatok rendezett sorozata.

A tömb minden elemének:
- azonos az adattípusa;
- saját sorszáma, vagyis indexe van;
- a tömb nevén és az indexén keresztül érhető el.

Például:

```c
int oldalszamok[5];
```

Ebben a deklarációban:

- `int` – a tömb elemeinek típusa;
- `oldalszamok` – a tömb neve;
- `[5]` – a tömb öt elemet tartalmaz;
- `;` – a deklaráció vége.

A tömb ebben az esetben öt `int` típusú érték tárolására alkalmas.

### Könyvtári hasonlat
A tömb elképzelhető egy olyan polcként, amelyen:

- előre meghatározott számú hely található;
- minden helyen azonos típusú adatot tárolunk;
- minden helynek van egy sorszáma;
- a helyek számozása nullával kezdődik.

Az öt elemű tömb sematikusan:

```
Tömb neve: oldalszamok

Index:       0       1       2       3       4
          +-------+-------+-------+-------+-------+
Érték:    |  320  |  245  |  410  |  198  |  275  |
          +-------+-------+-------+-------+-------+
```

# 3. Egydimenziós tömb
Az ezen az órán használt tömböket egydimenziós tömböknek nevezzük.
Az egydimenziós tömb elemei egyetlen index segítségével érhetők el:

```c
oldalszamok[2]
```

A későbbi órákon kétdimenziós tömbökkel is foglalkozunk. Ezekben két indexre, például egy sor- és egy oszlopindexre lesz szükség.

Egydimenziós tömb:

```c
int oldalszamok[5];
```

Kétdimenziós tömb későbbi példája:

```c
int latogatok[3][4];
```

Ezen az órán kizárólag az egydimenziós tömbökkel foglalkozunk.

# 4. Tömbök létrehozása
A tömb deklarációjának általános alakja:

```c
adattipus tomb_neve[meret];
```

### Egész számokat tartalmazó tömb
```c
int oldalszamok[5];
```
Ez a tömb öt egész számot tárolhat.

### Lebegőpontos számokat tartalmazó tömb
```c
double konyvarak[4];
```
Ez a tömb négy `double` típusú értéket tárolhat.

### Karaktereket tartalmazó tömb
```c
char polcjelek[3];
```
Ez a tömb három karaktert tárolhat.

### A tömb mérete
A tömb mérete azt adja meg, hogy hány elemet tárolhatunk a tömbben.

```c
int kolcsonzesek[7];
```
A `kolcsonzesek` tömb hét egész szám tárolására alkalmas.

Ezek az értékek jelenthetik például egy hét napjainak kölcsönzési adatait:

```
0. elem: hétfő
1. elem: kedd
2. elem: szerda
3. elem: csütörtök
4. elem: péntek
5. elem: szombat
6. elem: vasárnap
```
A tömb méretét a létrehozásakor adjuk meg. A tömb később nem növelhető és nem csökkenthető egyszerű értékadással.

# 5. A tömbök indexelése
A tömb valamely elemére a tömb nevével és az elem indexével hivatkozunk:

```c
tomb_neve[index]
```

Például:

```c
oldalszamok[0]
```
Ez az `oldalszamok` tömb első elemét jelenti.

### Az indexelés nullától kezdődik
A C nyelvben a tömb első elemének indexe 0.

Egy öt elemű tömb indexei:

```
0, 1, 2, 3, 4
```

Példa:

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
```

Az elemek:

| Hétköznapi sorszám | Tömbindex | Érték |
|:---:|---:|---:|
| 1. elem | 0 | 320 |
| 2. elem | 1 | 245 |
| 3. elem | 2 | 410 |
| 4. elem | 3 | 198 |
| 5. elem | 4 | 275 |

Az egyes elemek elérése:

```c
oldalszamok[0]  // 320
oldalszamok[1]  // 245
oldalszamok[2]  // 410
oldalszamok[3]  // 198
oldalszamok[4]  // 275
```

> Egy `n` elemű tömb első indexe 0, utolsó érvényes indexe pedig `n - 1`.

Öt elem esetén:

```
első index:          0
utolsó érvényes:     5 - 1 = 4
```

# 6. Tömbök inicializálása
A tömbnek már a deklaráció során megadhatjuk a kezdőértékeit. Ezt inicializálásnak nevezzük.

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
```

Az értékek sorrendben kerülnek a tömb elemeibe:

```
oldalszamok[0] = 320
oldalszamok[1] = 245
oldalszamok[2] = 410
oldalszamok[3] = 198
oldalszamok[4] = 275
```

### A tömb méretének elhagyása inicializáláskor
Ha minden kezdőértéket megadunk, a fordító meg tudja állapítani a tömb méretét:

```c
int oldalszamok[] = {320, 245, 410, 198, 275};
```
Ebben az esetben a fordító öt elemű tömböt hoz létre.

Kezdő programokban azonban az egyértelműség kedvéért gyakran érdemes a méretet is feltüntetni:

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
```

### Részleges inicializálás
Nem kötelező minden elemhez külön kezdőértéket megadni:

```c
int kolcsonzesek[5] = {12, 8};
```
Ekkor:

```
kolcsonzesek[0] = 12
kolcsonzesek[1] = 8
kolcsonzesek[2] = 0
kolcsonzesek[3] = 0
kolcsonzesek[4] = 0
```
A meg nem adott elemek automatikusan nulla értéket kapnak.

### Minden elem nullázása
A következő deklaráció minden elemet nullára állít:

```c
int kolcsonzesek[5] = {0};
```
Az eredmény:

```
0, 0, 0, 0, 0
```
Ez gyakran használt és ajánlott megoldás.

Lebegőpontos tömb:

```c
double arak[4] = {0.0};
```

Karaktertömb:

```c
char polcjelek[3] = {'?'};
```
A karaktertömb esetén csak az első elem kapja meg a `?` értéket, a többi elem numerikus nulla lesz. Ha mindegyik elemnek `?` értéket szeretnénk adni, azokat külön kell megadni:

```c
char polcjelek[3] = {'?', '?', '?'};
```

### Inicializálatlan tömb
A következő tömb elemei nem kapnak automatikusan használható kezdőértéket:

```c
int oldalszamok[5];
```
Egy függvényen belül létrehozott, inicializálatlan lokális tömb elemeinek értéke nem meghatározott.

Ezért nem szabad az elemeket kiírni azelőtt, hogy értéket adtunk volna nekik:

```c
int oldalszamok[5];

printf("%d\n", oldalszamok[0]);  // Nem biztonságos
```
Ajánlott:

```c
int oldalszamok[5] = {0};

printf("%d\n", oldalszamok[0]);
```

# 7. A tömb elemeinek kiírása
Egy tömbelem a megfelelő formátumspecifikátorral ugyanúgy kiírható, mint egy egyszerű változó.

```c
#include <stdio.h>

int main(void)
{
    int oldalszamok[5] = {320, 245, 410, 198, 275};

    printf("Az első könyv oldalszáma: %d\n", oldalszamok[0]);
    printf("A második könyv oldalszáma: %d\n", oldalszamok[1]);
    printf("Az ötödik könyv oldalszáma: %d\n", oldalszamok[4]);

    return 0;
}
```
Kimenet:

```
Az első könyv oldalszáma: 320
A második könyv oldalszáma: 245
Az ötödik könyv oldalszáma: 275
```

Lebegőpontos tömb elemének kiírása:

```c
double arak[3] = {3499.0, 2790.5, 4250.0};

printf("Az első könyv ára: %.2f Ft\n", arak[0]);
```

Karaktertömb elemének kiírása:

```c
char polcjelek[3] = {'A', 'B', 'C'};

printf("A második polc jele: %c\n", polcjelek[1]);
```

# 8. A tömb elemeinek módosítása
A tömb egy eleme értékadás szempontjából ugyanúgy használható, mint egy önálló változó.

```c
int oldalszamok[3] = {320, 245, 410};

oldalszamok[1] = 260;
```
A tömb tartalma a módosítás előtt:

```
320, 245, 410
```
A módosítás után:

```
320, 260, 410
```
Az `oldalszamok[1]` a második elemet jelenti.

### Egy elem növelése
```c
int peldanyok[3] = {2, 4, 1};

peldanyok[0] = peldanyok[0] + 1;
```
Rövidebben:

```c
peldanyok[0]++;
```
A tömb első elemének értéke 2-ről 3-ra változik.

### Számítás tömbelemekkel
A tömb elemei aritmetikai kifejezésekben is felhasználhatók:

```c
int kolcsonzesek[3] = {12, 15, 9};
int osszesen = kolcsonzesek[0]
             + kolcsonzesek[1]
             + kolcsonzesek[2];

printf("Összes kölcsönzés: %d\n", osszesen);
```

Átlagszámítás:

```c
double atlag = (kolcsonzesek[0]
              + kolcsonzesek[1]
              + kolcsonzesek[2]) / 3.0;
```
A következő órán ezt ciklus segítségével tetszőleges számú tömbelemre általánosítjuk.

# 9. Tömb feltöltése a scanf segítségével
A tömb elemeit a felhasználótól is bekérhetjük.

```c
int oldalszamok[3] = {0};

printf("Az első könyv oldalszáma: ");
scanf("%d", &oldalszamok[0]);

printf("A második könyv oldalszáma: ");
scanf("%d", &oldalszamok[1]);

printf("A harmadik könyv oldalszáma: ");
scanf("%d", &oldalszamok[2]);
```
A `scanf` függvényben a tömbelem elé is `&` jelet írunk:

```c
&oldalszamok[0]
```
A teljes példa:

```c
#include <stdio.h>

int main(void)
{
    int oldalszamok[3] = {0};

    printf("Az első könyv oldalszáma: ");
    scanf("%d", &oldalszamok[0]);

    printf("A második könyv oldalszáma: ");
    scanf("%d", &oldalszamok[1]);

    printf("A harmadik könyv oldalszáma: ");
    scanf("%d", &oldalszamok[2]);

    printf("\nA megadott oldalszámok:\n");
    printf("1. könyv: %d oldal\n", oldalszamok[0]);
    printf("2. könyv: %d oldal\n", oldalszamok[1]);
    printf("3. könyv: %d oldal\n", oldalszamok[2]);

    return 0;
}
```
A tömbök ciklussal történő feltöltését a következő órán tanuljuk meg. Addig az elemeket egyenként olvassuk be.

### double típusú tömb feltöltése
```c
double arak[3] = {0.0};

printf("Első ár: ");
scanf("%lf", &arak[0]);

printf("Második ár: ");
scanf("%lf", &arak[1]);

printf("Harmadik ár: ");
scanf("%lf", &arak[2]);
```
Ne feledjük:

- `double` beolvasása: `%lf`;
- `double` kiírása: `%f`, például `%.2f`.

### Karaktertömb feltöltése
```c
char polcjelek[3] = {'?', '?', '?'};

printf("Első polc jele: ");
scanf(" %c", &polcjelek[0]);

printf("Második polc jele: ");
scanf(" %c", &polcjelek[1]);

printf("Harmadik polc jele: ");
scanf(" %c", &polcjelek[2]);
```
A `%c` előtti szóköz segít átugrani a bemenetben maradt szóközöket és sortöréseket:

```c
scanf(" %c", &polcjelek[0]);
```

# 10. Változó használata indexként
A tömbindexnek nem kell közvetlenül a programkódba írt számnak lennie. Egy egész típusú változó is használható indexként.

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
int index = 2;

printf("A kiválasztott elem: %d\n", oldalszamok[index]);
```
Mivel az index értéke 2, a program az `oldalszamok[2]` elemet írja ki:

```
410
```
Ez teszi majd lehetővé, hogy a következő órán ciklus segítségével sorban végigmenjünk a tömb elemein.

### Index bekérése a felhasználótól
```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
int index = 0;

printf("Adja meg a megjelenítendő elem indexét: ");
scanf("%d", &index);

printf("A kiválasztott érték: %d\n", oldalszamok[index]);
```
Ez a program azonban veszélyes lehet, mert a felhasználó érvénytelen indexet is megadhat.

Egy öt elemű tömb érvényes indexei:

```
0, 1, 2, 3, 4
```
Ezért az indexet használat előtt ellenőrizni kell.

# 11. Indexellenőrzés
Egy öt elemű tömb esetén az index akkor érvényes, ha:

```c
index >= 0 && index < 5
```
Teljes példa:

```c
#include <stdio.h>

int main(void)
{
    int oldalszamok[5] = {320, 245, 410, 198, 275};
    int index = 0;

    printf("Adja meg az indexet 0 és 4 között: ");
    scanf("%d", &index);

    if (index >= 0 && index < 5)
    {
        printf("A kiválasztott könyv oldalszáma: %d\n",
               oldalszamok[index]);
    }
    else
    {
        printf("Hibás index.\n");
    }

    return 0;
}
```
Az indexellenőrzés általános alakja:

```c
if (index >= 0 && index < tomb_merete)
```
> A felső határnál `<` operátort használunk, nem pedig `<=` operátort. Egy öt elemű tömbben az 5 már nem érvényes index.

# 12. Tömbhatár-túllépés
Ha egy tömb nem létező elemére hivatkozunk, tömbhatár-túllépés történik.

Például:

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};

printf("%d\n", oldalszamok[5]);
```
Ez hibás, mert az öt elemű tömb utolsó érvényes indexe 4.

Érvényes indexek:

```
0, 1, 2, 3, 4
```
Érvénytelen indexek például:

```
-1, 5, 6, 100
```

### Mi történik hibás index esetén?
A C nyelv általában nem ellenőrzi automatikusan, hogy a használt index érvényes-e.

Hibás index esetén:

- a program látszólag működhet;
- értelmetlen adatot írhat ki;
- egy másik változó tartalmát módosíthatja;
- futás közben leállhat;
- különböző futtatásokkor eltérően viselkedhet.

Ezt definiálatlan működésnek nevezzük.

> Attól, hogy a program egy hibás index használatakor nem áll le, a program még nem helyes.

# 13. Tömb és adattípus
Egy tömb minden elemének azonos a típusa.

```c
int oldalszamok[5];
```
Ebben csak `int` típusú értékeket tárolunk.

```c
double arak[5];
```
Ebben `double` típusú értékeket tárolunk.

```c
char kategoriak[5];
```
Ebben karaktereket tárolunk.

Egyetlen tömbben nem célszerű és nem is lehet közvetlenül vegyesen tárolni például:

- egész számot;
- tört számot;
- karaktert.

Ha egy könyvhöz több különböző típusú adat tartozik, például cím, oldalszám és ár, akkor később struktúrát fogunk használni.

# 14. Karaktertömbök és szövegek
A karakterek tömbje:

```c
char betuk[4] = {'C', 'I', 'M', '?'};
```
Ez négy különálló karaktert tárol.

A C nyelvben a szövegeket szintén karaktertömbben tároljuk, de a szöveg végének jelöléséhez egy különleges zárókarakterre, a `'\0'` karakterre is szükség van.

Példa:

```c
char cim[6] = {'K', 'o', 'n', 'y', 'v', '\0'};
```
Egyszerűbben:

```c
char cim[6] = "Konyv";
```
A `"Konyv"` öt látható karakterből áll, de a lezáró `\0` miatt hat elemnyi helyre van szüksége.

Egy teljes szöveg kiírásához `%s` használható:

```c
printf("%s\n", cim);
```
Kimenet:

```
Konyv
```
> A szövegek részletes kezelésével ezen az órán még nem foglalkozunk. Most elsősorban az `int`, `double` és különálló `char` elemeket tartalmazó tömbökre koncentrálunk.

# 15. Tömbök és értékadás
A tömb létrehozásakor használhatunk inicializálólistát:

```c
int elso[3] = {10, 20, 30};
```
A teljes tömb azonban később nem másolható át egyszerű értékadással egy másik tömbbe:

```c
int elso[3] = {10, 20, 30};
int masodik[3] = {0};

masodik = elso;  // Hibás
```
Az elemeket külön-külön lehet átmásolni:

```c
masodik[0] = elso[0];
masodik[1] = elso[1];
masodik[2] = elso[2];
```
A következő órán ciklus segítségével ezt rövidebben is meg tudjuk oldani.

# 16. Tömb és egyszerű változó összehasonlítása
| Egyszerű változó | Tömb |
|:---|---|
| Egyetlen értéket tárol | Több, azonos típusú értéket tárol |
| `int oldalszam;` | `int oldalszamok[5];` |
| A névvel érjük el | A névvel és az indexszel érjük el |
| `oldalszam` | `oldalszamok[2]` |
| Nincs külön indexe | Minden elemnek saját indexe van |

Példa:

```c
int oldalszam = 320;
```
Egyetlen értéket tárol.

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
```
Öt összetartozó értéket tárol.

# Gyakorlati rész
## 1. feladat – Könyvek oldalszámai
Hozzon létre egy öt elemű, `int` típusú tömböt, amely öt könyv oldalszámát tartalmazza!

Az értékek:

```
320, 245, 410, 198, 275
```
Írja ki:

- az első könyv oldalszámát;
- a harmadik könyv oldalszámát;
- az utolsó könyv oldalszámát.

Lehetséges megoldás:

```c
#include <stdio.h>

int main(void)
{
    int oldalszamok[5] = {320, 245, 410, 198, 275};

    printf("Az első könyv: %d oldal\n", oldalszamok[0]);
    printf("A harmadik könyv: %d oldal\n", oldalszamok[2]);
    printf("Az ötödik könyv: %d oldal\n", oldalszamok[4]);

    return 0;
}
```

## 2. feladat – Könyvárak módosítása
Hozzon létre egy három elemű tömböt a következő könyvárakkal:

```
3499.00, 2750.50, 4290.00
```
A második könyv ára akció miatt 2490.00 forintra változik. Módosítsa a megfelelő tömbelemet, majd írja ki mindhárom árat!

Lehetséges megoldás:

```c
#include <stdio.h>

int main(void)
{
    double arak[3] = {3499.00, 2750.50, 4290.00};

    arak[1] = 2490.00;

    printf("Első könyv ára: %.2f Ft\n", arak[0]);
    printf("Második könyv ára: %.2f Ft\n", arak[1]);
    printf("Harmadik könyv ára: %.2f Ft\n", arak[2]);

    return 0;
}
```

## 3. feladat – Polcjelek
Hozzon létre egy négy elemű karaktertömböt, amely a következő polcjeleket tartalmazza:

```
A, B, C, D
```
Írja ki a második és a negyedik polc jelét!

Lehetséges megoldás:

```c
#include <stdio.h>

int main(void)
{
    char polcjelek[4] = {'A', 'B', 'C', 'D'};

    printf("A második polc: %c\n", polcjelek[1]);
    printf("A negyedik polc: %c\n", polcjelek[3]);

    return 0;
}
```

## 4. feladat – Heti kölcsönzési adatok feltöltése
Készítsen ötelemű tömböt, amely a hétfőtől péntekig történt kölcsönzések számát tárolja!

Kérje be külön-külön az öt értéket, majd írja ki a szerdai és a pénteki kölcsönzések számát!

Lehetséges megoldás:

```c
#include <stdio.h>

int main(void)
{
    int kolcsonzesek[5] = {0};

    printf("Hétfői kölcsönzések: ");
    scanf("%d", &kolcsonzesek[0]);

    printf("Keddi kölcsönzések: ");
    scanf("%d", &kolcsonzesek[1]);

    printf("Szerdai kölcsönzések: ");
    scanf("%d", &kolcsonzesek[2]);

    printf("Csütörtöki kölcsönzések: ");
    scanf("%d", &kolcsonzesek[3]);

    printf("Pénteki kölcsönzések: ");
    scanf("%d", &kolcsonzesek[4]);

    printf("\nSzerdai kölcsönzések: %d\n", kolcsonzesek[2]);
    printf("Pénteki kölcsönzések: %d\n", kolcsonzesek[4]);

    return 0;
}
```

## 5. feladat – Kiválasztott elem megjelenítése
Adott a következő tömb:

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
```
Kérjen be a felhasználótól egy 0 és 4 közötti indexet, majd írja ki a kiválasztott könyv oldalszámát!

Hibás index esetén jelenjen meg hibaüzenet.

Lehetséges megoldás:

```c
#include <stdio.h>

int main(void)
{
    int oldalszamok[5] = {320, 245, 410, 198, 275};
    int index = 0;

    printf("Adjon meg egy indexet 0 és 4 között: ");
    scanf("%d", &index);

    if (index >= 0 && index < 5)
    {
        printf("A kiválasztott könyv oldalszáma: %d\n",
               oldalszamok[index]);
    }
    else
    {
        printf("Hibás index.\n");
    }

    return 0;
}
```

# Hibakeresési feladatok
## 1. hiba
A program egy ötelemű tömb utolsó elemét szeretné kiírni:

```c
int oldalszamok[5] = {320, 245, 410, 198, 275};

printf("Utolsó elem: %d\n", oldalszamok[5]);
```
<details>
<summary>Megoldás</summary>
Az 5 már a tömb határán kívül található. Az utolsó elem indexe 4.
</details>

## 2. hiba
```c
int oldalszamok[3] = {120, 240, 360, 480};
```
<details>
<summary>Megoldás</summary>
A tömb mérete 3, ezért legfeljebb három elem számára adható kezdőérték. A program azonban négy értéket tartalmazó inicializálólistát használ.
</details>

## 3. hiba
```c
int kolcsonzesek[3] = {0};

printf("Az első napi érték: ");
scanf("%d", kolcsonzesek[0]);
```
<details>
<summary>Megoldás</summary>
A `scanf` függvénynek meg kell adni, hogy hová tárolja a beolvasott értéket. Az egyszerű tömbelem elé ezért `&` jelet kell írni.
</details>

## 4. hiba
```c
double arak[3] = {0.0};

printf("Az első könyv ára: ");
scanf("%d", &arak[0]);
```
<details>
<summary>Megoldás</summary>
Az `arak[0]` típusa `double`, ezért a `scanf` függvényben `%lf` formátumspecifikátort kell használni.
</details>

## 5. hiba
```c
int oldalszamok[5] = {320, 245, 410, 198, 275};
int index = 0;

printf("Index: ");
scanf("%d", &index);

if (index >= 0 && index <= 5)
{
    printf("%d\n", oldalszamok[index]);
}
else
{
    printf("Hibás index.\n");
}
```
<details>
<summary>Megoldás</summary>
Az `index <= 5` feltétel az 5 értéket is elfogadja, de az öt elemű tömb utolsó érvényes indexe 4.
</details>

## 6. hiba
```c
int oldalszamok[3] = {120, 240, 360};
int index = -1;

printf("%d\n", oldalszamok[index]);
```
<details>
<summary>Megoldás</summary>
A negatív index nem érvényes.
</details>

## 7. hiba

```c
int kolcsonzesek[3];

kolcsonzesek[0] = 12;

printf("%d\n", kolcsonzesek[1]);
```

<details>
<summary>Megoldás</summary>
A tömb létrehozásakor nem kapott kezdőértékeket.
</details>

## 8. hiba
```c
int eredeti[3] = {10, 20, 30};
int masolat[3] = {0};

masolat = eredeti;
```

<details>
<summary>Megoldás</summary>
C nyelven egy teljes tömb nem másolható át egyszerű értékadással.
Az elemeket egyenként kell másolni.
</details>

# Szorgalmi feladat – Heti könyvtári látogatottság
Értéke: +1 pont

Készítsen programot, amely egy hét hét napjának látogatószámait egy hételemű tömbben tárolja!

```c
int latogatok[7] = {0};
```
A napokhoz tartozó indexek:

| Index | Nap |
|:---:|---|
| 0 | hétfő |
| 1 | kedd |
| 2 | szerda |
| 3 | csütörtök |
| 4 | péntek |
| 5 | szombat |
| 6 | vasárnap |

## Követelmények
A program:

- kérje be mind a hét nap látogatószámát;
- ellenőrizze, hogy egyik látogatószám sem negatív;
- tárolja az adatokat egy hételemű tömbben;
- írja ki mind a hét nap adatát;
- számítsa ki a heti látogatók teljes számát;
- számítsa ki a napi átlagot;
- kérjen be egy 0 és 6 közötti indexet;
- érvényes index esetén írja ki az adott nap látogatószámát;
- hibás index esetén írjon ki hibaüzenetet;
- határozza meg elágazások segítségével, melyik napon volt a legtöbb látogató. +1 pont

# Az óra összefoglalása
- A tömb több, azonos típusú és egymással összetartozó adatot tárol.
- A tömb létrehozásakor meg kell adni az elemek típusát, a tömb nevét és méretét.
- Egy tömb minden elemének azonos az adattípusa.
- A tömbelemeket a tömb nevével és egy indexszel érjük el.
- Az indexelés nullától kezdődik.
- Egy `n` elemű tömb érvényes indexei 0 és `n - 1` között vannak.
- Egy öt elemű tömb utolsó érvényes indexe 4.
- A tömb elemei a deklaráció során inicializálhatók.
- A `{0}` inicializálás minden elemet nullára állít.
- A tömb egyes elemei külön-külön módosíthatók.
- A tömbelemek aritmetikai kifejezésekben is használhatók.
- A `scanf` függvényben az egyszerű tömbelem elé `&` jelet írunk.
- Változó is használható tömbindexként.
- A felhasználótól kapott indexet használat előtt ellenőrizni kell.
- A C nyelv nem akadályozza meg automatikusan a tömbhatár túllépését.
- Az érvénytelen index használata definiálatlan működést okoz.
- Teljes tömböt nem lehet egyszerű értékadással egy másik tömbbe másolni.
- A tömbök hatékony feldolgozásához ciklusokat használunk, amelyekkel a következő órán foglalkozunk.

