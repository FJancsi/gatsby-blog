---
title: Változók, alapvető adattípusok és aritmetikai műveletek
date: 2026-09-17
subject: ["adat", "adattípus", "változó", "deklaráció", "inicializálás", "értékadás", "literál", "operátor", "operandus", "egész szám", "lebegőpontos szám", "operátorprecedencia"]
author: Fekete János
---

# 1. Adatok a programban
A programok *adatokat* dolgoznak fel. Egy könyvtári programban adat lehet például:
- egy könyv oldalszáma;
- egy dokumentum kiadási éve;
- egy könyv ára;
- a kölcsönzés időtartama;
- egy raktári jelzet valamely karaktere;
- a könyvtár napi látogatóinak száma.

Az adatok különböző természetűek lehetnek. Az oldalszám például egész szám, míg egy könyv ára tartalmazhat tört részt is.

A programozási nyelvben az adattípus határozza meg:
- milyen jellegű értéket tárolunk;
- milyen műveleteket végezhetünk az értékkel;
- a számítógép hogyan értelmezze a tárolt adatot.

# 2. A változó fogalma
A *változó* a program által használt, névvel ellátott memóriaterület, amelyben egy adott típusú értéket tárolhatunk.

Kezdetben úgy képzelhetjük el, mint egy feliratozott dobozt:
- a doboz felirata a változó neve;
- a doboz típusa meghatározza, milyen adat kerülhet bele;
- a doboz tartalma a változó aktuális értéke.

```c
int oldalszam = 320;
```

Ebben a deklarációban:
- int – a változó típusa;
- oldalszam – a változó neve;
- 320 – a változó kezdőértéke;
- = – értékadó operátor;
- ; – az utasítás végét jelöli.

## Deklaráció
A változó létrehozását deklarációnak nevezzük.
```c
int oldalszam;
```
Ez létrehoz egy oldalszam nevű, egész szám tárolására alkalmas változót.


A deklarált, de még értékkel el nem látott lokális változó tartalma nem meghatározott. Ezért a változókat célszerű rögtön kezdőértékkel ellátni.

Nem ajánlott:
```c
int oldalszam;
printf("%d\n", oldalszam);
```
Ajánlott:
```c
int oldalszam = 0;
printf("%d\n", oldalszam);
```

## Inicializálás
A deklarációval egy időben történő első értékadást inicializálásnak nevezzük.

```c
int oldalszam = 320;
```

## Értékadás
Egy már létező változó tartalmát később is módosíthatjuk:

```c
int kolcsonzesek = 12;

kolcsonzesek = 15;
```

A változó kezdeti értéke 12, majd az értékadás után 15.


Az értékadás nem matematikai egyenlőséget jelent. A következő utasítás teljesen szabályos:

```c
kolcsonzesek = kolcsonzesek + 1;
```

Jelentése:
1. vegyük a kolcsonzesek aktuális értékét;
2. adjunk hozzá 1-et;
3. az eredményt tároljuk vissza ugyanabban a változóban.

Ha az eredeti érték 15, akkor az új érték 16.

# 3. Változónevek
A változó neve egy `azonosító`.

## A változónevek szabályai

A változónév:
- betűket, számjegyeket és aláhúzásjelet tartalmazhat;
- nem kezdődhet számjeggyel;
- nem tartalmazhat szóközt;
- nem lehet a C nyelv egy fenntartott szava;
- megkülönbözteti a kis- és nagybetűket.

Érvényes változónevek:

```c
oldalszam
kiadasi_ev
napi_latogatok
konyvek_szama2
```

Érvénytelen változónevek:

```c
kiadasi ev    // Szóközt tartalmaz.
2oldalszam    // Számjeggyel kezdődik.
double        // A C nyelv fenntartott szava.
könyvek       // A hordozhatóság érdekében kerüljük az ékezetet.
```

## Beszédes változónevek
A változó neve utaljon a tárolt adat jelentésére.

Kevésbé jó:
```c
int x = 320;
```

Jobb:
```c
int oldalszam = 320;
```
> A forráskódban célszerű ékezet nélküli, de magyarul (angolul) érthető változóneveket használni. A program által kiírt szöveg természetesen tartalmazhat ékezetes karaktereket.

A C nyelv megkülönbözteti a kis- és nagybetűket:

```c
int oldalszam = 100;
int Oldalszam = 200;
```

Ez két különböző változó, használatuk azonban könnyen félreértést okoz. (Typo)

# 4. Alapvető adattípusok
Ezen az órán három alapvető adattípussal foglalkozunk:
| C-típus | Tárolt adat | Példa |
|---:|---|---|
| int| Egész szám | oldalszám, kiadási év |
| double | Tört részt is tartalmazó szám | ár, átlag |
| char | Egyetlen karakter | kategóriajel, polc betűjele |

## 4.1 Az `int` típus
Az int egész számok tárolására használható.

```c
int oldalszam = 320;
int kiadasi_ev = 1906;
int peldanyok_szama = 5;
```

Tipikus könyvtári példák:
- könyvek száma;
- oldalszám;
- kiadási év;
- kölcsönzési napok száma;
- látogatók száma.

## 4.2 A `double` típus
A double tört részt is tartalmazó számok tárolására használható.

```c
double konyv_ara = 3499.50;
double atlagos_oldalszam = 287.25;
```

A C-forráskódban a tizedes törtekben tizedespontot használunk:

Nem helyes:
```c
double ar = 2499,90;
```

## 4.3 A `char` típus
A char egyetlen karakter tárolására szolgál.

```c
char polc = 'B';
char kategoria = 'F';
```
A karaktert egyszeres idézőjelek közé írjuk:
```c
'A'
```
A szöveget kettős idézőjelek közé írjuk:
```c
"A"
```
A következő forma nem megfelelő char változó inicializálására:

```c
char jel = "A";     // "A" egy karaktersorozat.
```

Tipikus felhasználás:
- egy polc betűjele;
- egy kategória rövid kódja;
- egy válasz: 'i' vagy 'n';
- egy osztályzat karakteres jelölése.

> A char nem teljes címek vagy szerzőnevek tárolására szolgál. Szövegek tárolásához karaktertömbre lesz szükség, amellyel később foglalkozunk.

# 5. Literálok
A programkódban közvetlenül leírt értéket `literál`nak nevezzük.

```c
1906 // Egész szám literálja
3499.50 // Lebegőpontos literál
'B' // karakterliterál
"Könyvtár" // szövegliterál
```

# 6. Változó értékének kiírása
Az előző órán a `printf` függvénnyel állandó szöveget írtunk ki:

```c
printf("Könyvtár\n");
```

A printf változók értékét is meg tudja jeleníteni. Ehhez `formátumspecifikátorokat` használunk.

## Fontos formátumspecifikátorok
| Adattípus | printf formátumspecifikátor| Példa |
|---:|---|---|
| int | %d| printf("%d", oldalszam); |
| double | %f| printf("%f", ar); |
| char | %c| printf("%c", polc); |

### double érték kiírása
```c
#include <stdio.h>

int main(void)
{
    double ar = 3499.50;

    printf("A könyv ára: %f Ft\n", ar);

    return 0;
}
```
Lehetséges kimenet:
```
A könyv ára: 3499.500000 Ft
```
A %f alapértelmezés szerint hat tizedesjegyet jelenít meg. A tizedesjegyek számát megadhatjuk:
```c
printf("A könyv ára: %.2f Ft\n", ar);
```
Kimenet:
```
A könyv ára: 3499.50 Ft
```
### Több változó kiírása
```c
#include <stdio.h>

int main(void)
{
    int oldalszam = 320;
    double ar = 3499.50;
    char polc = 'B';

    printf("Oldalszám: %d\n", oldalszam);
    printf("Ár: %.2f Ft\n", ar);
    printf("Polc: %c\n", polc);

    return 0;
}
```
Egyetlen printf hívással is kiírhatjuk az adatokat:
```c
printf("Oldalszám: %d, ár: %.2f Ft, polc: %c\n",
       oldalszam, ar, polc);
```
A változók sorrendjének meg kell egyeznie a formátumspecifikátorok sorrendjével.

# 7. Aritmetikai műveletek
Az aritmetikai műveleteket `operátorokkal` írjuk le.
| Művelet | Operátor| Példa |
|---:|---|---|
| Összeadás | +| a + b |
| Kivonás | -| a - b |
| Szorzás | *| a * b |
| Osztás | /| a / b |
| Maradékos osztás | %| a % b |

A műveletben részt vevő értékeket operandusoknak nevezzük.

Az alábbi kifejezésben:
```c
a + b
```
- a + az operátor;
- a és b az operandusok.

## Példa műveletekre
```c
/*
Összeadás
*/
int szepirodalom = 120;
int szakirodalom = 80;
int osszesen = szepirodalom + szakirodalom;

printf("Összes könyv: %d\n", osszesen); // Összes könyv: 200

/*
Kivonás
*/
int teljes_allomany = 500;
int kolcsonadva = 125;
int bent = teljes_allomany - kolcsonadva;

printf("A könyvtárban található: %d\n", bent); // A könyvtárban található: 375

/*
Szorzás
*/
int polcok_szama = 8;
int konyv_polconkent = 40;
int kapacitas = polcok_szama * konyv_polconkent;

printf("A polcok kapacitása: %d könyv\n", kapacitas); // A polcok kapacitása 320 könyv

/*
Osztás
*/
double osszes_oldalszam = 1200.0;
double konyvek_szama = 5.0;
double atlag = osszes_oldalszam / konyvek_szama;

printf("Az átlagos oldalszám: %.2f\n", atlag); // Az átlagos oldalszám: 240.00

/*
Maradékos osztás
A % operátor az egész osztás maradékát adja meg.
*/
int konyvek_szama = 23;
int doboz_merete = 5;

int teljes_dobozok = konyvek_szama / doboz_merete; // -> 4
int kimaradt_konyvek = konyvek_szama % doboz_merete; // -> 3
```

# 8. Az egész osztás
A C nyelvben az osztás eredménye függ az operandusok típusától.

## Két egész szám osztása
```c
int eredmeny = 5 / 2; // -> 2
```

## Lebegőpontos osztás
```c
double eredmeny = 5.0 / 2.0; // -> 2.5
```

Már az is elegendő, ha legalább az egyik operandus lebegőpontos:
```c
double eredmeny = 5.0 / 2;
```

## Gyakori hiba átlag számításakor
```c
int osszes_oldalszam = 11;
int konyvek_szama = 2;
double atlag = osszes_oldalszam / konyvek_szama;

printf("%.2f\n", atlag); // -> 5.00
```
Az osztás először két egész szám között történik, ezért annak eredménye 5. Ez csak utána kerül a double változóba.

Javítás:
```c
double atlag = (double) osszes_oldalszam / konyvek_szama; // -> 5.50
```
A (double) egy típuskonverzió. A számítás előtt az osszes_oldalszam értékét double típusúként kezeljük.

# 9. Műveleti sorrend (precedencia)
A C nyelv a matematikához hasonló műveleti sorrendet használ.
1. zárójelek;
2. szorzás, osztás és maradékos osztás;
3. összeadás és kivonás.

```c
int eredmeny = 2 + 3 * 4; // -> 14
```
Zárójellel megváltoztathatjuk a sorrendet:
```c
int eredmeny = (2 + 3) * 4; // -> 20
```
> Akkor is érdemes zárójelet használni, ha a program zárójel nélkül is helyesen működne, de a zárójel olvashatóbbá teszi a számítást.

# 10. Rövidített értékadó operátorok
A következő utasítás:
```c
konyvek_szama = konyvek_szama + 5;
```
rövidebben is leírható:
```c
konyvek_szama += 5;
```
További példák:
```c
ertek -= 2;  // ertek = ertek - 2;
ertek *= 3;  // ertek = ertek * 3;
ertek /= 4;  // ertek = ertek / 4;

konyvek_szama++; // konyvek_szama = konyvek_szama + 1;
```

11. Adatbevitel a `scanf` függvénnyel
Eddig az adatokat a programkódban adtuk meg:
```c
int oldalszam = 320;
```
A scanf függvény segítségével a program futása közben a felhasználótól is kérhetünk adatot.

## Egész szám beolvasása
```c
#include <stdio.h>

int main(void)
{
    int oldalszam = 0;

    printf("Adja meg a könyv oldalszámát: ");
    scanf("%d", &oldalszam);

    printf("A megadott oldalszám: %d\n", oldalszam);

    return 0;
}
```
Példa a program futására:
```
Adja meg a könyv oldalszámát: 320
A megadott oldalszám: 320
```
A scanf használatakor:
- %d jelzi, hogy egész számot várunk;
- &oldalszam megadja, hová kerüljön a beolvasott érték.

Az & jel részletes jelentésével később foglalkozunk. Egyelőre a következő szabályt használjuk:

> A scanf függvényben az egyszerű változó neve elé általában & jelet írunk.

## double típusú adat beolvasása
A scanf esetében a double formátumspecifikátora %lf.
```c
double ar = 0.0;

printf("Adja meg a könyv árát: ");
scanf("%lf", &ar);

printf("A könyv ára: %.2f Ft\n", ar);
```
Fontos különbség:

| Művelet | double formátumspecifikátora |
|---:|---|
| printf | %f |
| scanf | %lf |

Ez a C nyelv egyik gyakran eltévesztett szabálya.

## Karakter beolvasása
```c
char polc = '?';

printf("Adja meg a polc betűjelét: ");
scanf(" %c", &polc);

printf("A kiválasztott polc: %c\n", polc);
```
A %c előtti szóköz szándékos:
```c
scanf(" %c", &polc);
```
Ez arra szolgál, hogy a scanf átugorja a korábban a bemenetben maradt szóközt vagy sortörést.

A legfontosabb beolvasási formátumok
| Művelet | scanf formátumspecifikátor | Példa |
|---:|---|---|
| int | %d | scanf("%d", &oldalszam); |
| double | %lf | scanf("%lf", &ar); |
| char | %c | scanf(" %c", &polc); |

12. Teljes mintaprogram
A következő program bekéri egy könyv néhány egyszerű adatát, majd kiírja azokat:
```c
#include <stdio.h>

int main(void)
{
    int oldalszam = 0;
    double ar = 0.0;
    char polc = '?';

    printf("Adja meg a könyv oldalszámát: ");
    scanf("%d", &oldalszam);

    printf("Adja meg a könyv árát: ");
    scanf("%lf", &ar);

    printf("Adja meg a polc betűjelét: ");
    scanf(" %c", &polc);

    printf("\nA könyv adatai\n");
    printf("----------------\n");
    printf("Oldalszám: %d\n", oldalszam);
    printf("Ár: %.2f Ft\n", ar);
    printf("Polc: %c\n", polc);

    return 0;
}
```
Példa a futásra:
```
Adja meg a könyv oldalszámát: 320
Adja meg a könyv árát: 3499.5
Adja meg a polc betűjelét: B

A könyv adatai
----------------
Oldalszám: 320
Ár: 3499.50 Ft
Polc: B
```

# Gyakorlati feladatok
## 1. feladat – Változók létrehozása
Hozzon létre változókat a következő adatok tárolására:
- egy könyv oldalszáma;
- egy könyv ára;
- a polc betűjele.

Adjon nekik kezdőértéket, majd írja ki az értéküket!

Lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    int oldalszam = 256;
    double ar = 2990.0;
    char polc = 'C';

    printf("Oldalszám: %d\n", oldalszam);
    printf("Ár: %.2f Ft\n", ar);
    printf("Polc: %c\n", polc);

    return 0;
}
```
## 2. feladat – Könyvállomány összesítése
Egy könyvtárban 1250 szépirodalmi és 860 szakirodalmi kötet található. Készítsen programot, amely kiszámítja és kiírja a teljes állomány nagyságát!

Majd számítsa ki az elérhető könyveket, a kölcsönzött könyvek tudatában. A kölcsönzött könyveket előzetesen kérje be.

Lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    int szepirodalom = 1250;
    int szakirodalom = 860;
    int osszesen = szepirodalom + szakirodalom;

    printf("A teljes állomány: %d kötet\n", osszesen);

    // Második rész
    int kolcsonadva = 0;
    int elerheto = 0;

    printf("Kikölcsönzött példányok: ");
    scanf("%d", &kolcsonadva);

    elerheto = osszesen - kolcsonadva;

    printf("Elérhető példányok: %d\n", elerheto);
    return 0;
}
```
## 3. feladat – Késedelmi díj
A késedelmi díj minden megkezdett késedelmes nap után azonos összeg. Kérje be:
- a késedelmes napok számát;
- az egy napra jutó díjat.
- Számítsa ki a teljes késedelmi díjat!

Lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    int napok = 0;
    double napi_dij = 0.0;
    double teljes_dij = 0.0;

    printf("Késedelmes napok száma: ");
    scanf("%d", &napok);

    printf("Egy napra jutó díj: ");
    scanf("%lf", &napi_dij);

    teljes_dij = napok * napi_dij;

    printf("A teljes késedelmi díj: %.2f Ft\n", teljes_dij);

    return 0;
}
```
## 4. feladat – Átlagos oldalszám
Kérje be három könyv oldalszámát, majd számítsa ki az átlagos oldalszámot!

Lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    int elso = 0;
    int masodik = 0;
    int harmadik = 0;
    double atlag = 0.0;

    printf("Az első könyv oldalszáma: ");
    scanf("%d", &elso);

    printf("A második könyv oldalszáma: ");
    scanf("%d", &masodik);

    printf("A harmadik könyv oldalszáma: ");
    scanf("%d", &harmadik);

    atlag = (elso + masodik + harmadik) / 3.0;

    printf("Az átlagos oldalszám: %.2f\n", atlag);

    return 0;
}
```
Miért 3.0 szerepel a számításban, és miért nem 3?

Azért, hogy az osztás lebegőpontos legyen, és az eredmény tört része ne vesszen el.
## 5. feladat – Könyvek dobozokban
Egy dobozba 12 könyv fér. Kérje be a könyvek számát, majd határozza meg:
- hány teljes dobozt lehet megtölteni;
- hány könyv marad ki.

Lehetséges megoldás:
```c
#include <stdio.h>

int main(void)
{
    int konyvek = 0;
    int doboz_merete = 12;
    int teljes_dobozok = 0;
    int maradek = 0;

    printf("Könyvek száma: ");
    scanf("%d", &konyvek);

    teljes_dobozok = konyvek / doboz_merete;
    maradek = konyvek % doboz_merete;

    printf("Teljes dobozok: %d\n", teljes_dobozok);
    printf("Kimaradt könyvek: %d\n", maradek);

    return 0;
}
```

# Hibakeresési feladatok:
## 6. feladat
```c
double ar = 3499.50;

printf("Ár: %d\n", ar);
```
<details>
<summary>Megoldás</summary>
A %d formátumspecifikátor int típushoz tartozik. A változó double típusú.
</details>

## 7. feladat
```c
int oldalszam = 0;

scanf("%d", oldalszam);
```
<details>
<summary>Megoldás</summary>
A scanf használatakor az oldalszam elé & jelet kell írni.
</details>

## 8. feladat
```c
double ar = 0.0;

scanf("%f", &ar);
```
<details>
<summary>Megoldás</summary>
A scanf függvényben double típus beolvasásához %lf szükséges.
</details>

## 9. feladat
Mi lesz a kimenet?
```c
#include <stdio.h>

int main(void)
{
    int osszesen = 11;
    int darab = 2;
    double atlag = osszesen / darab;

    printf("%.2f\n", atlag);

    return 0;
}
```
<details>
<summary>Megoldás</summary>
double atlag = (double) osszesen / darab;
</details>

## 10. feladat
```c
char polc = "B";
```
<details>
<summary>Megoldás</summary>
A "B" egy szövegliterál, miközben a char változó egyetlen karaktert tárol.
</details>

# Összefoglalás
- A változó névvel ellátott memóriaterület.
- A változó típusa meghatározza, hogy milyen adatot tárolhatunk benne.
- Az int egész számok tárolására használható.
- A double tört részt is tartalmazó számokhoz használható.
- A char egyetlen karaktert tárol.
- A deklaráció létrehozza a változót.
- Az inicializálás a változó első értékének megadása.
- Az = értékadó operátor.
- Az alapvető aritmetikai operátorok: +, -, *, /, %.
- Két egész szám osztása egész osztást eredményez.
- A % az egész osztás maradékát adja meg.
- A printf adatokat ír ki.
- A scanf adatokat olvas be.
- A scanf függvényben az egyszerű változó neve elé & jelet írunk.
- double kiírásához %f, beolvasásához %lf használatos.

# Szorgalmi feladat
Készítsen programot, amely bekéri:
- a megrendelt könyvek darabszámát;
- egy könyv árát;
- a szállítási költséget.

A program számítsa ki és írja ki:
- a könyvek szállítás nélküli összárát;
- a fizetendő teljes összeget;
- az egy könyvre jutó átlagos teljes költséget.

```
A megrendelt könyvek száma: 4
Egy könyv ára: 3250
Szállítási költség: 1800

Könyvek összára: 13000.00 Ft
Teljes fizetendő összeg: 14800.00 Ft
Egy könyvre jutó költség: 3700.00 Ft
```











